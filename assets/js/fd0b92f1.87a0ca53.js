"use strict";(self.webpackChunkpractica_docs=self.webpackChunkpractica_docs||[]).push([[7598],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),b=o,f=d["".concat(p,".").concat(b)]||d[b]||u[b]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:6,sidebar_label:"Library picking guidelines"},a="Choosing npm package dependency thoughtfully",c={unversionedId:"contribution/vendor-pick-guidelines",id:"contribution/vendor-pick-guidelines",title:"Choosing npm package dependency thoughtfully",description:"\u2705 The decision must follow a comparison table of options using this template",source:"@site/docs/contribution/vendor-pick-guidelines.md",sourceDirName:"contribution",slug:"/contribution/vendor-pick-guidelines",permalink:"/contribution/vendor-pick-guidelines",editUrl:"https://github.com/practicajs/practica/tree/main/docs/docs/contribution/vendor-pick-guidelines.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Library picking guidelines"},sidebar:"tutorialSidebar",previous:{title:"Long guide",permalink:"/contribution/contribution-long-guide"}},p={},l=[],s={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"choosing-npm-package-dependency-thoughtfully"},"Choosing npm package dependency thoughtfully"),(0,o.kt)("p",null,"\u2705 The decision must follow a comparison table of options using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/practicajs/practica/blob/main/docs/docs/decisions/configurationLibrary.md"},"this template")),(0,o.kt)("p",null,"\u2705 Usage state must be captured including weekly downloads, GitHub stars and dependents. Only top 5 most popular vendors can be evaluated"),(0,o.kt)("p",null,"\u2705 The evaluated libs must have been updated at least once in the last 6 months"))}u.isMDXComponent=!0}}]);