"use strict";(self.webpackChunkpractica_docs=self.webpackChunkpractica_docs||[]).push([[6103],{8665:(e,t,a)=>{a.d(t,{Z:()=>v});var l=a(7294),n=a(6010),r=a(2600),s=a(9960);const o="sidebar_a9qW",i="sidebarItemTitle_uKok",m="sidebarItemList_Kvuv",c="sidebarItem_CF0Q",d="sidebarItemLink_miNk",g="sidebarItemLinkActive_RRTD";var u=a(5999);function p(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(o,"thin-scrollbar"),"aria-label":(0,u.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(i,"margin-bottom--md")},t.title),l.createElement("ul",{className:m},t.items.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))))))}function v(e){const{sidebar:t,toc:a,children:s,...o}=e,i=t&&t.items.length>0;return l.createElement(r.Z,o,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},i&&l.createElement("aside",{className:"col col--3"},l.createElement(p,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},8561:(e,t,a)=>{a.d(t,{Z:()=>k});var l=a(7294),n=a(6010),r=a(5999),s=a(9960),o=a(4996),i=a(1548),m=a(8780),c=a(7459),d=a(6753);const g="blogPostTitle_rzP5",u="blogPostData_Zg1s",p="blogPostDetailsFull_h6_j";var v=a(62);const h="image_o0gy";function b(e){return e.href?l.createElement(s.Z,e):l.createElement(l.Fragment,null,e.children)}function E(e){let{author:t}=e;const{name:a,title:n,url:r,imageURL:s,email:o}=t,i=r||o&&"mailto:"+o||void 0;return l.createElement("div",{className:"avatar margin-bottom--sm"},s&&l.createElement("span",{className:"avatar__photo-link avatar__photo"},l.createElement(b,{href:i},l.createElement("img",{className:h,src:s,alt:a}))),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(b,{href:i,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),n&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))}const _="authorCol_FlmR",N="imageOnlyAuthorRow_trpF",f="imageOnlyAuthorCol_S2np";function Z(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const r=t.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",r?N:"row")},t.map(((e,t)=>{var s;return l.createElement("div",{className:(0,n.Z)(!r&&"col col--6",r?f:_),key:t},l.createElement(E,{author:{...e,imageURL:null!=(s=a.authorsImageUrls[t])?s:e.imageURL}}))})))}function k(e){var t;const a=function(){const{selectMessage:e}=(0,i.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,r.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:h}=(0,o.C)(),{children:b,frontMatter:E,assets:_,metadata:N,truncated:f,isBlogPostPage:k=!1}=e,{date:P,formattedDate:L,permalink:C,tags:y,readingTime:I,title:T,editUrl:w,authors:x}=N,A=null!=(t=_.image)?t:E.image,M=!k&&f,R=y.length>0,H=k?"h1":"h2";return l.createElement("article",{className:k?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},l.createElement("header",null,l.createElement(H,{className:g,itemProp:"headline"},k?T:l.createElement(s.Z,{itemProp:"url",to:C},T)),l.createElement("div",{className:(0,n.Z)(u,"margin-vert--md")},l.createElement("time",{dateTime:P,itemProp:"datePublished"},L),void 0!==I&&l.createElement(l.Fragment,null," \xb7 ",a(I))),l.createElement(Z,{authors:x,assets:_})),A&&l.createElement("meta",{itemProp:"image",content:h(A,{absolute:!0})}),l.createElement("div",{id:k?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},l.createElement(c.Z,null,b)),(R||f)&&l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",k&&p)},R&&l.createElement("div",{className:(0,n.Z)("col",{"col--9":M})},l.createElement(v.Z,{tags:y})),k&&w&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(d.Z,{editUrl:w})),M&&l.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":R})},l.createElement(s.Z,{to:N.permalink,"aria-label":(0,r.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:T})},l.createElement("b",null,l.createElement(r.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9360:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var l=a(7294),n=a(8665),r=a(8561),s=a(7462),o=a(5999),i=a(1750);function m(e){const{nextItem:t,prevItem:a}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(i.Z,(0,s.Z)({},a,{subLabel:l.createElement(o.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")}))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&l.createElement(i.Z,(0,s.Z)({},t,{subLabel:l.createElement(o.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")}))))}var c=a(1548),d=a(1575),g=a(6010);function u(e){var t;const{content:a}=e,{assets:n,metadata:r}=a,{title:s,description:o,date:i,tags:m,authors:d,frontMatter:g}=r,{keywords:u}=g,p=null!=(t=n.image)?t:g.image;return l.createElement(c.d,{title:s,description:o,keywords:u,image:p},l.createElement("meta",{property:"og:type",content:"article"}),l.createElement("meta",{property:"article:published_time",content:i}),d.some((e=>e.url))&&l.createElement("meta",{property:"article:author",content:d.map((e=>e.url)).filter(Boolean).join(",")}),m.length>0&&l.createElement("meta",{property:"article:tag",content:m.map((e=>e.label)).join(",")}))}function p(e){const{content:t,sidebar:a}=e,{assets:s,metadata:o}=t,{nextItem:i,prevItem:c,frontMatter:g}=o,{hide_table_of_contents:u,toc_min_heading_level:p,toc_max_heading_level:v}=g;return l.createElement(n.Z,{sidebar:a,toc:!u&&t.toc&&t.toc.length>0?l.createElement(d.Z,{toc:t.toc,minHeadingLevel:p,maxHeadingLevel:v}):void 0},l.createElement(r.Z,{frontMatter:g,assets:s,metadata:o,isBlogPostPage:!0},l.createElement(t,null)),(i||c)&&l.createElement(m,{nextItem:i,prevItem:c}))}function v(e){return l.createElement(c.FG,{className:(0,g.Z)(c.kM.wrapper.blogPages,c.kM.page.blogPostPage)},l.createElement(u,e),l.createElement(p,e))}},1575:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(7462),n=a(7294),r=a(6010),s=a(5002);const o="tableOfContents_cNA8";function i(e){let{className:t,...a}=e;return n.createElement("div",{className:(0,r.Z)(o,"thin-scrollbar",t)},n.createElement(s.Z,(0,l.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(7462),n=a(7294),r=a(1548);function s(e){let{toc:t,className:a,linkClassName:l,isChild:r}=e;return t.length?n.createElement("ul",{className:r?void 0:a},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(s,{isChild:!0,toc:e.children,className:a,linkClassName:l}))))):null}function o(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:m,maxHeadingLevel:c,...d}=e;const g=(0,r.LU)(),u=null!=m?m:g.tableOfContents.minHeadingLevel,p=null!=c?c:g.tableOfContents.maxHeadingLevel,v=(0,r.b9)({toc:t,minHeadingLevel:u,maxHeadingLevel:p}),h=(0,n.useMemo)((()=>{if(o&&i)return{linkClassName:o,linkActiveClassName:i,minHeadingLevel:u,maxHeadingLevel:p}}),[o,i,u,p]);return(0,r.Si)(h),n.createElement(s,(0,l.Z)({toc:v,className:a,linkClassName:o},d))}}}]);