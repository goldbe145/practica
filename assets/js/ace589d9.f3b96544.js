"use strict";(self.webpackChunkpractica_docs=self.webpackChunkpractica_docs||[]).push([[8716],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={id:"features",sidebar_position:6},a="Common questions and answers",s={unversionedId:"features",id:"features",title:"Common questions and answers",description:"Testing your code",source:"@site/docs/questions-and-answers.md",sourceDirName:".",slug:"/features",permalink:"/features",editUrl:"https://github.com/practicajs/practica/tree/main/docs/docs/questions-and-answers.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"features",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"OpenAPI",permalink:"/decisions/openapi"},next:{title:"Common questions and answers",permalink:"/features"}},u={},l=[{value:"Testing your code",id:"testing-your-code",level:2},{value:"Q: How to obtain a valid token to manually invoke the route (e.g., via POSTMAN)?",id:"q-how-to-obtain-a-valid-token-to-manually-invoke-the-route-eg-via-postman",level:3}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"common-questions-and-answers"},"Common questions and answers"),(0,o.kt)("h2",{id:"testing-your-code"},"Testing your code"),(0,o.kt)("h3",{id:"q-how-to-obtain-a-valid-token-to-manually-invoke-the-route-eg-via-postman"},"Q: How to obtain a valid token to manually invoke the route (e.g., via POSTMAN)?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Answer:")," By default, Practica routes are guarded from unauthorized requests. The automated testing already embed valid tokens. Should you wish to invoke the routes manually a token must be signed."),(0,o.kt)("p",null,"Option 1 - Visit an online JWT token signing tool like ",(0,o.kt)("a",{parentName:"p",href:"http://jwtbuilder.jamiekurtz.com/"},"jwt builder"),", change the key (bottom part of the form) to the key that is specified under ./services/order-service/config.ts/jwtTokenSecret/default. If you never changed it, the default secret is: ",(0,o.kt)("inlineCode",{parentName:"p"},"just-a-default-secret"),". Click the submit button and copy the generated token. "),(0,o.kt)("p",null,"Given the signed token, add a new header to your request with the name 'Authorization' and the value 'Bearer {put here the token}'"),(0,o.kt)("p",null,"Option 2 - We already generated this token for you \ud83d\udc47, it should work with the default configuration in a development environment. Obviously, before going to production - the JWT secret must be changed:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NjIwMTY5NjIsImV4cCI6MTY5MzU1Mjk2MiwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.65ACAjHy2ZE5i_uS5hyiEkOQfkqOqdj-WtBm-w23qZQ")))}d.isMDXComponent=!0}}]);