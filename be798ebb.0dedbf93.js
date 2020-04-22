(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(1),o=n(6),i=(n(0),n(180)),r=n(183),c={id:"bottomTabs",title:"Bottom tabs",sidebar_label:"Bottom tabs"},l={id:"bottomTabs",title:"Bottom tabs",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/docs/docs-bottomTabs.mdx",permalink:"/react-native-navigation/docs/bottomTabs",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/docs-bottomTabs.mdx",sidebar_label:"Bottom tabs",sidebar:"docs",previous:{title:"Stack",permalink:"/react-native-navigation/docs/stack"},next:{title:"Side Menu",permalink:"/react-native-navigation/docs/sideMenu"}},b=[{value:"Creating bottom tabs",id:"creating-bottom-tabs",children:[{value:"Example",id:"example",children:[]}]},{value:"Selecting Tabs Programmatically",id:"selecting-tabs-programmatically",children:[{value:"Selecting a tab by index",id:"selecting-a-tab-by-index",children:[]},{value:"Selecting a tab by id",id:"selecting-a-tab-by-id",children:[]}]},{value:"Changing BottomTabs visibility",id:"changing-bottomtabs-visibility",children:[]},{value:"Updating tab options dynamically",id:"updating-tab-options-dynamically",children:[]},{value:"Controlling tab loading",id:"controlling-tab-loading",children:[]}],s={rightToc:b};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,'Bottom tabs refers to a row of links, displayed at the bottom of the screen, and is referred to as "Tab Bar" in iOS and as "Bottom Navigation Bar" on Android. Usually these are intended to be used to switch between top-level content views with a single tap.'),Object(i.b)("h2",{id:"creating-bottom-tabs"},"Creating bottom tabs"),Object(i.b)("p",null,"BottomTabs provide flat navigation and access to up to five equally important top-level root destinations. While any type of layout can be displayed in a tab, typically, ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Stacks")," are used, since they allow for vertical navigation within a tab."),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("p",null,"Lets see how to create a simple BottomTabs layout. There are a few things to notice here:\n1. Each child represents a tab on the screen.\n2. The root layout for each tab is a stack to allow for vertical navigation within the tab.\n3. Each stack declares ",Object(i.b)("inlineCode",{parentName:"p"},"bottomTab")," options which are used to configure the tab's text, icon, color etc."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"bottomTabs: {\n  id: 'BOTTOM_TABS_LAYOUT',\n  children: [\n    {\n      stack: {\n        id: 'HOME_TAB',\n        children: [\n          {\n            component: {\n              id: 'HOME_SCREEN'\n              name: 'HomeScreen'\n            }\n          }\n        ],\n        options: {\n          bottomTab: {\n            icon: require('./home.png')\n          }\n        }\n      }\n    },\n    {\n      stack: {\n        id: 'PROFILE_TAB',\n        children: [\n          {\n            component: {\n              id: 'PROFILE_SCREEN',\n              name: 'ProfileScreen'\n            }\n          }\n        ],\n        options: {\n          bottomTab: {\n            icon: require('./profile.png')\n          }\n        }\n      }\n    }\n  ]\n}\n")),Object(i.b)("p",null,"Once we run this code, our BottomTabs should look like this:"),Object(i.b)("img",{width:"40%",src:Object(r.a)("img/bottomTabs.png")}),Object(i.b)("h2",{id:"selecting-tabs-programmatically"},"Selecting Tabs Programmatically"),Object(i.b)("p",null,"Tabs can be selected programmatically by updating the ",Object(i.b)("inlineCode",{parentName:"p"},"currentTabIndex")," or ",Object(i.b)("inlineCode",{parentName:"p"},"currentTabId")," options."),Object(i.b)("p",null,"We'll use the BottomTabs layout showcased ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"bottomTabs-docs#example"}),"above")," to demonstrate programmatic tab selection."),Object(i.b)("h3",{id:"selecting-a-tab-by-index"},"Selecting a tab by index"),Object(i.b)("p",null,"The following mergeOptions command will select the second tab. We're passing the id of our BottomTabs layout, but we could also use the id of any of the child components, for example ",Object(i.b)("inlineCode",{parentName:"p"},"PROFILE_TAB")," or ",Object(i.b)("inlineCode",{parentName:"p"},"PROFILE_SCREEN"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.mergeOptions('BOTTOM_TABS_LAYOUT', {\n  bottomTabs: {\n    currentTabIndex: 1\n  }\n});\n")),Object(i.b)("h3",{id:"selecting-a-tab-by-id"},"Selecting a tab by id"),Object(i.b)("p",null,"Tabs can also be selected by id (",Object(i.b)("inlineCode",{parentName:"p"},"componentId"),"). This is particularly useful in cases where you don't know in which tab a screen is contained.\nFor example, if invoked from one of the child components, ",Object(i.b)("inlineCode",{parentName:"p"},"HOME_SCREEN")," or ",Object(i.b)("inlineCode",{parentName:"p"},"SETTINGS_SCREEN"),", the following merge command will select the tab containing the child."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.mergeOptions(this.props.componentId, {\n  bottomTabs: {\n    currentTabId: this.props.componentId\n  }\n});\n")),Object(i.b)("h2",{id:"changing-bottomtabs-visibility"},"Changing BottomTabs visibility"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"visible")," property is used to control the BottomTab visibility. Visibility can be toggled dynamically using the ",Object(i.b)("inlineCode",{parentName:"p"},"mergeOptions")," command."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.mergeOptions(componentId, {\n  bottomTabs: {\n    visible: false\n  },\n});\n")),Object(i.b)("p",null,"Visibility can also be changed when pushing screens."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.push(componentId, {\n  component: {\n    name: 'pushedScreen',\n    options: {\n      bottomTabs: {\n        visible: false\n      }\n    }\n  }\n});\n")),Object(i.b)("h2",{id:"updating-tab-options-dynamically"},"Updating tab options dynamically"),Object(i.b)("p",null,"To update a tab option, like an icon, text or color, simply call ",Object(i.b)("inlineCode",{parentName:"p"},"mergeOptions")," with new options using the id of a component or layout contained in the tab you wish to update."),Object(i.b)("p",null,"For instance, in the example below we update the color of a specific tab:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.mergeOptions(componentId, {\n  bottomTab: {\n    iconColor: 'red',\n    textColor: 'red'\n  },\n});\n")),Object(i.b)("h2",{id:"controlling-tab-loading"},"Controlling tab loading"),Object(i.b)("p",null,"By default, all tabs are mounted at the same time. This can have a negative impact on performance since screens which are not visible to the user are mounted."),Object(i.b)("p",null,"The order in which tabs are mounted can be configured with the ",Object(i.b)("inlineCode",{parentName:"p"},"tabsAttachMode")," option:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"together")," - all tabs are mounted at the same time, this is the default behavior."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"afterInitialTab")," - after initial tab is mounted, other tabs are mounted."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onSwitchToTab")," - initial tab is mounted, other tabs are mounted when the user navigates to them for the first time.")))}p.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),s=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=s(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,u=p["".concat(r,".").concat(m)]||p[m]||d[m]||i;return n?o.a.createElement(u,c({ref:t},b,{components:n})):o.a.createElement(u,c({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var b=2;b<i;b++)r[b]=n[b];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},181:function(e,t,n){"use strict";var a=n(0),o=n(35);t.a=function(){return Object(a.useContext)(o.a)}},183:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(181);function o(e){const{siteConfig:t}=Object(a.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);