const React = require('react');
const { Platform } = require('react-native');
const Root = require('../components/Root');
const Button = require('../components/Button');
const Navigation = require('./../services/Navigation');
const {
  NAVIGATION_TAB,
  MODAL_BTN,
  OVERLAY_BTN,
  EXTERNAL_COMP_BTN,
  SHOW_STATIC_EVENTS_SCREEN,
  SHOW_ORIENTATION_SCREEN,
  SET_ROOT_BTN,
  PAGE_SHEET_MODAL_BTN,
  NAVIGATION_SCREEN,
} = require('../testIDs');
const Screens = require('./Screens');
const { Dimensions } = require('react-native');

const animtaionTime1 = 5000;
const animtaionTime2 = 3000;

class NavigationScreen extends React.Component {
  static options() {
    return {
      topBar: {
        title: {
          text: 'Navigation',
        },
      },
      bottomTab: {
        text: 'Navigation',
        icon: require('../../img/navigation.png'),
        testID: NAVIGATION_TAB,
      },
    };
  }

  render() {
    return (
      <Root componentId={this.props.componentId} testID={NAVIGATION_SCREEN}>
        <Button label="Show PIP Enabled Screen" onPress={this.pushPIPScreen} />
        <Button label="Show New Screen As PIP" onPress={this.pushAsPIP} />
        <Button label="Close PIP" onPress={this.closePIP} />
        {Platform.OS === 'ios' && (
          <Navigation.TouchablePreview
            touchableComponent={Button}
            onPressIn={this.preview}
            label="Preview"
          />
        )}
      </Root>
    );
  }

  setRoot = () => Navigation.showModal(Screens.SetRoot);
  showModal = () => Navigation.showModal(Screens.Modal);

  showPageSheetModal = () =>
    Navigation.showModal(Screens.Modal, {
      modalPresentationStyle: 'pageSheet',
      modal: {
        swipeToDismiss: false,
      },
    });
  showOverlay = () => Navigation.showModal(Screens.Overlay);
  externalComponent = () => Navigation.showModal(Screens.ExternalComponent);
  pushStaticEventsScreen = () => Navigation.showModal(Screens.EventsScreen);
  orientation = () => Navigation.showModal(Screens.Orientation);
  pushPIPScreen = () =>
    Navigation.push(this, {
      component: {
        name: Screens.PIPScreen,
        options: {
          pipOptions: {
            actionControlGroup: 'testing',
            aspectRatio: { numerator: 16, denominator: 9 },
            customPIP: {
              compact: {
                height: 150,
                width: 240,
              },
              expanded: {
                height: 160,
                width: 280,
              },
            },
          },
          animations: {
            pipIn: {
              enabled: true,
              content: {
                y: {
                  to: Dimensions.get('window').height - 100,
                  duration: animtaionTime1,
                },
                height: {
                  from: Dimensions.get('window').height - 100,
                  to: 150,
                  duration: animtaionTime1,
                },
                width: {
                  from: Dimensions.get('window').width,
                  to: Dimensions.get('window').width / 2,
                  duration: animtaionTime2,
                },
                x: {
                  to: Dimensions.get('window').width / 2,
                  duration: animtaionTime1,
                },
              },
              elementTransitions: [
                {
                  id: 'pipImage',
                  height: {
                    from: 250,
                    to: 150,
                    duration: animtaionTime2,
                  },
                  width: {
                    from: Dimensions.get('window').width,
                    to: Dimensions.get('window').width / 2,
                    duration: animtaionTime2,
                  },
                  x: {
                    to: Dimensions.get('window').width / 2,
                    duration: animtaionTime1,
                  },
                  y: {
                    to: Dimensions.get('window').height - 100,
                    duration: animtaionTime1,
                  },
                },
                {
                  id: 'switchButton',
                  alpha: {
                    to: 0, // We don't declare 'to' value as that is the element's current alpha value, here we're essentially animating from 0 to 1
                    duration: animtaionTime2,
                  },
                  translationX: {
                    to: Dimensions.get('window').width * 0.5,
                    duration: animtaionTime2,
                  },
                  translationY: {
                    to: Dimensions.get('window').height * 0.6,
                    duration: animtaionTime2,
                  },
                },
                {
                  id: 'description',
                  alpha: {
                    to: 0, // We don't declare 'to' value as that is the element's current alpha value, here we're essentially animating from 0 to 1
                    duration: animtaionTime2,
                  },
                  translationX: {
                    to: Dimensions.get('window').width * 0.5,
                    duration: animtaionTime2,
                  },
                  translationY: {
                    to: Dimensions.get('window').height * 0.6,
                    duration: animtaionTime2,
                  },
                },
              ],
            },
            pipOut: {
              elementTransitions: [
                {
                  id: 'description',
                  alpha: {
                    from: 0, // We don't declare 'to' value as that is the element's current alpha value, here we're essentially animating from 0 to 1
                    duration: animtaionTime1,
                  },
                  scaleX: {
                    to: 0.5,
                    duration: animtaionTime1,
                  },
                  scaleY: {
                    to: 0.2,
                    duration: animtaionTime1,
                  },
                },
                {
                  id: 'pipImage',

                  scaleX: {
                    from: 0.5,
                    duration: animtaionTime1,
                  },
                  scaleY: {
                    from: 0.5,
                    duration: animtaionTime1,
                  },
                },
              ],
            },
          },
        },
      },
    });
  pushContextScreen = () => Navigation.push(this, Screens.ContextScreen);
  sharedElement = () => Navigation.showModal(Screens.CocktailsListScreen);
  pushAsPIP = () =>
    Navigation.pushAsPIP(this, {
      component: {
        name: Screens.PIPScreen,
        options: {
          pipOptions: {
            actionControlGroup: 'testing',
            aspectRatio: { numerator: 16, denominator: 9 },
          },
        },
      },
    });
  closePIP = () => Navigation.closePIP();
  preview = ({ reactTag }) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: Screens.Pushed,
        options: {
          animations: {
            push: {
              enabled: false,
            },
          },
          preview: {
            reactTag: reactTag,
            height: 300,
            actions: [
              {
                id: 'action-cancel',
                title: 'Cancel',
              },
              {
                id: 'action-delete',
                title: 'Delete',
                actions: [
                  {
                    id: 'action-delete-sure',
                    title: 'Are you sure?',
                    style: 'destructive',
                  },
                ],
              },
            ],
          },
        },
      },
    });
  };
}

module.exports = NavigationScreen;
