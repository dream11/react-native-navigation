/*! For license information please see e2a99d68.a1ee51aa.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{166:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return u}));var n=a(1),r=a(6),c=(a(0),a(180)),b=a(186),o=a(185),l={id:"stack",title:"Stack",sidebar_label:"Stack"},p={id:"stack",title:"Stack",description:"import Tabs from '@theme/Tabs';",source:"@site/api/api-stack.mdx",permalink:"/react-native-navigation/api/stack",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/api/api-stack.mdx",sidebar_label:"Stack",sidebar:"api",previous:{title:"Root",permalink:"/react-native-navigation/api/root"},next:{title:"Modal",permalink:"/react-native-navigation/api/modal"}},i=[{value:"<code>push()</code>",id:"push",children:[]},{value:"<code>pop()</code>",id:"pop",children:[]},{value:"<code>popToRoot()</code>",id:"poptoroot",children:[]},{value:"<code>popTo()</code>",id:"popto",children:[]},{value:"<code>setStackRoot()</code>",id:"setstackroot",children:[]}],s={rightToc:i};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"push"},Object(c.b)("inlineCode",{parentName:"h2"},"push()")),Object(c.b)("p",null,"Push a screen into the stack and update the display according to the screen options."),Object(c.b)("h4",{id:"parameters"},"Parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"componentId"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The componentId of a screen pushed into the stack, or the id of the stack.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"layout"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Layout"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The layout being pushed into the stack. Any type of layout (except stack) can be pushed into stacks. Typically, Component layout is pushed into stacks but it's possible to push SideMenu or BottomTabs as well.")))),Object(c.b)("h4",{id:"example"},"Example"),Object(c.b)(b.a,{defaultValue:"component",values:[{label:"Component",value:"component"},{label:"Update options on push",value:"push"},{label:"Push other layouts",value:"otherLayout"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"component",mdxType:"TabItem"},"The most common use case - push a single React component.",Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Navigation.push(this.props.componentId, {\n  component: {\n    name: 'example.PushedScreen'\n  }\n});\n"))),Object(c.b)(o.a,{value:"push",mdxType:"TabItem"},"Options are applied when the screen becomes visible.",Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Navigation.push(this.props.componentId, {\n  component: {\n    name: 'example.PushedScreen',\n    options: {\n      topBar: {\n        title: {\n          text: 'Pushed screen title'\n        }\n      }\n    }\n  }\n});\n"))),Object(c.b)(o.a,{value:"otherLayout",mdxType:"TabItem"},"Any layout type can be pushed. In this example we push a SideMenu layout.",Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Navigation.push(this.props.componentId, {\n  sideMenu: {\n    left: {\n      component: {\n        name: 'drawerScreen'\n      }\n    },\n    center: {\n      component: {\n        name: 'centerScreen'\n      }\n    }\n  }\n});\n")))),Object(c.b)("h2",{id:"pop"},Object(c.b)("inlineCode",{parentName:"h2"},"pop()")),Object(c.b)("p",null,"Pop the top screen from the stack."),Object(c.b)("h4",{id:"parameters-1"},"Parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"componentId"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The componentId of a screen pushed into the stack, or the stack id.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"mergeOptions"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/react-native-navigation/api/options-root"}),"Options")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Options to be merged before popping the screen (optional).")))),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Navigation.pop(this.props.componentId);\n")),Object(c.b)("h2",{id:"poptoroot"},Object(c.b)("inlineCode",{parentName:"h2"},"popToRoot()")),Object(c.b)("p",null,"Pop all screens pushed into the stack."),Object(c.b)("h4",{id:"parameters-2"},"Parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"componentId"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The componentId of a screen pushed into the stack, or the stack id.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"mergeOptions"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/react-native-navigation/api/options-root"}),"Options")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Options to be merged before popping the screen (optional).")))),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Navigation.popToRoot(this.props.componentId);\n")),Object(c.b)("h2",{id:"popto"},Object(c.b)("inlineCode",{parentName:"h2"},"popTo()")),Object(c.b)("p",null,"Pop the stack to a given component."),Object(c.b)("h4",{id:"parameters-3"},"Parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"componentId"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The destination componentId")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"mergeOptions"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/react-native-navigation/api/options-root"}),"Options")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Options to be merged before popping the screen (optional).")))),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Navigation.popTo(componentId);\n")),Object(c.b)("h2",{id:"setstackroot"},Object(c.b)("inlineCode",{parentName:"h2"},"setStackRoot()")),Object(c.b)("p",null,"Reset the stack to the given layout (accepts multiple children)."),Object(c.b)("h4",{id:"parameters-4"},"Parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"componentId"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The componentId of a screen pushed into the stack, or the stack id.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"layout"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/react-native-navigation/api/layout-layout"}),"layout")," or ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/react-native-navigation/api/layout-layout"}),"layout"),"[]"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A single Component or array of components.")))),Object(c.b)("h4",{id:"example-1"},"Example"),Object(c.b)(b.a,{defaultValue:"single",values:[{label:"Single child",value:"single"},{label:"Multiple children",value:"multiple"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"single",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Navigation.setStackRoot(this.props.componentId, {\n  component: {\n    name: 'example.NewRootScreen'\n  }\n});\n"))),Object(c.b)(o.a,{value:"multiple",mdxType:"TabItem"},Object(c.b)("p",null,"In the example below we reset the stack with two components. The first one will be the root component and the second (",Object(c.b)("inlineCode",{parentName:"p"},"PushedScreen"),") will be displayed. Pressing the back button (either hardware or software) will pop it, revealing the root component - ",Object(c.b)("inlineCode",{parentName:"p"},"NewRootScreen"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Navigation.setStackRoot(this.props.componentId, [\n  {\n    component: {\n      name: 'NewRootScreen',\n    }\n  },\n  {\n    component: {\n      name: 'PushedScreen',\n    }\n  }\n]);\n")))))}u.isMDXComponent=!0},180:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),i=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},s=function(e){var t=i(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=i(a),m=n,O=s["".concat(b,".").concat(m)]||s[m]||u[m]||c;return a?r.a.createElement(O,o({ref:t},p,{components:a})):r.a.createElement(O,o({ref:t},p))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,b[1]=o;for(var p=2;p<c;p++)b[p]=a[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},182:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var b=r.apply(null,n);b&&e.push(b)}else if("object"===c)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},184:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});t.a=r},185:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},186:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(184);var b=function(){return Object(n.useContext)(c.a)},o=a(182),l=a.n(o),p=a(93),i=a.n(p);const s=37,u=39;t.a=function(e){const{block:t,children:a,defaultValue:c,values:o,groupId:p}=e,{tabGroupChoices:m,setTabGroupChoices:O}=b(),[j,d]=Object(n.useState)(c);if(null!=p){const e=m[p];null!=e&&e!==j&&d(e)}const h=e=>{d(e),null!=p&&O(p,e)},g=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":t})},o.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":j===e,className:l()("tab-item",i.a.tabItem,{"tab-item--active":j===e}),key:e,ref:e=>g.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case u:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e),onFocus:()=>h(e),onClick:()=>h(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===j)[0]))}}}]);