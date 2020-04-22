(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(6),a=(n(0),n(180)),c={id:"third-party-react-context",title:"React Context API",sidebar_label:"React Context API"},i={id:"third-party-react-context",title:"React Context API",description:"## React Context API ",source:"@site/docs/third-party-react-context.mdx",permalink:"/react-native-navigation/docs/third-party-react-context",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/third-party-react-context.mdx",sidebar_label:"React Context API",sidebar:"docs",previous:{title:"Constants",permalink:"/react-native-navigation/docs/style-constants"},next:{title:"MobX",permalink:"/react-native-navigation/docs/third-party-mobx"}},s=[{value:"React Context API",id:"react-context-api",children:[]},{value:"Create a Counter context",id:"create-a-counter-context",children:[]},{value:"Register the screen",id:"register-the-screen",children:[]},{value:"Consuming the context",id:"consuming-the-context",children:[]}],p={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"react-context-api"},"React Context API"),Object(a.b)("p",null,"React Context API provides a easy way to pass data through the component tree without having to pass props down\nmanually at every level. You can find more about the Context API in ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactjs.org/docs/context.html"}),"React documentation"),"."),Object(a.b)("p",null,"You can use the React Context API with React Native Navigation with a limitation. In this example, we are going to create a screen which uses the Counter Context."),Object(a.b)("div",{className:"admonition admonition-important alert alert--info"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Limitation")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"As RNN screens are not part of the same component tree, updating the values in the shared context does not trigger a re-render across all screens.\nHowever you can still use the React.Context per RNN screen component tree."),Object(a.b)("p",{parentName:"div"},"If you need to trigger a re-render across all screens, there are many popular third party libraries such as\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-navigation/docs/third-party-mobx"}),"MobX")," or Redux."))),Object(a.b)("h2",{id:"create-a-counter-context"},"Create a Counter context"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"// CounterContext.js\nimport React from 'react\n\n// Declaring the state object globally.\nconst initialCounterState = {\n  count: 0\n}\n\nconst counterContextWrapper = (component) => ({\n  ...initialCounterState,\n  increment: () => {\n    initialCounterState.count += 1\n    component.setState({ context: contextWrapper(component) })\n  },\n  decrement: () => {\n    initialCounterState.count -= 1\n    component.setState({ context: contextWrapper(component) })\n  },\n})\n\nexport const CounterContext = React.createContext({})\n\nexport class CounterContextProvider extends React.Component {\n  state = {\n    context: counterContextWrapper(this)\n  }\n\n  render() {\n    return (\n      <CounterContext.Provider value={this.state.context}>\n        {this.props.children}\n      </CounterContext.Provider>\n    )\n  }\n}\n")),Object(a.b)("h2",{id:"register-the-screen"},"Register the screen"),Object(a.b)("p",null,"When registering the screen that will be using the Counter Context, we need to wrap it\nwith the Counter Context Provider we created earlier."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"// index.js\nimport { Navigation } from 'react-native-navigation\nimport { CounterContextProvider } from './CounterContext\nimport { App } from './App\n\nNavigation.registerComponent(\n  'App', \n  () => props => (\n    <CounterContextProvider>\n      <App {...props} />\n    </CounterContextProvider>\n  ),\n  () => App\n)\n")),Object(a.b)("h2",{id:"consuming-the-context"},"Consuming the context"),Object(a.b)("p",null,"You can consume the Counter Context any way you want such as ",Object(a.b)("inlineCode",{parentName:"p"},"Provider.Consumer")," or ",Object(a.b)("inlineCode",{parentName:"p"},"React.useContext")," like in the\nexample below."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),'// App.js\nimport React from \'react\'\nimport { Button, Text, View } from \'react-native\'\nimport { CounterContext } from \'./CounterContext\'\n\nexport const App = () => {\n  // Using useContext API\n  const { count, increment, decrement } = React.useContext(CounterContext)\n\n  return (\n    <View>\n      <Text>{`Clicked ${count} times!`}</Text>\n      <Button title="Increment" onPress={increment} />\n      <Button title="Decrement" onPress={decrement} />\n    </View>\n  )\n\n  // Using Context consumer\n  return (\n    <CounterContext.Consumer>\n      {({ count, increment, decrement }) => (\n        <View>\n          <Text>{`Clicked ${count} times!`}</Text>\n          <Button title="Increment" onPress={increment} />\n          <Button title="Decrement" onPress={decrement} />\n        </View>\n      )}\n    </CounterContext.Consumer>\n  )\n}\n')))}u.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),d=r,b=l["".concat(c,".").concat(d)]||l[d]||m[d]||a;return n?o.a.createElement(b,i({ref:t},p,{components:n})):o.a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);