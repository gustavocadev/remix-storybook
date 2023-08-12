import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const E="modulepreload",p=function(_,i){return new URL(_,i).href},m={},r=function(i,s,l){if(!s||s.length===0)return i();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=p(e,l),e in m)return;m[e]=!0;const o=e.endsWith(".css"),d=o?'[rel="stylesheet"]':"";if(!!l)for(let c=t.length-1;c>=0;c--){const a=t[c];if(a.href===e&&(!o||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${d}`))return;const n=document.createElement("link");if(n.rel=o?"stylesheet":E,o||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),o)return new Promise((c,a)=>{n.addEventListener("load",c),n.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>i()).catch(e=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=e,window.dispatchEvent(o),!o.defaultPrevented)throw e})},{createBrowserChannel:f}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,u=f({page:"preview"});R.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=u);const P={"./stories/Configure.mdx":async()=>r(()=>import("./Configure-72277f3d.js"),["./Configure-72277f3d.js","./jsx-runtime-e6a661ac.js","./index-61bf1805.js","./_commonjsHelpers-de833af9.js","./index-5c3e3655.js","./index-d475d2ea.js","./index-6a5bd4ef.js","./index-d37d4223.js","./index-356e4a49.js","./index-e744116c.js"],import.meta.url),"./stories/Page.stories.ts":async()=>r(()=>import("./Page.stories-21214e32.js"),["./Page.stories-21214e32.js","./_commonjsHelpers-de833af9.js","./index-356e4a49.js","./jsx-runtime-e6a661ac.js","./index-61bf1805.js","./Header-3fcd03e1.js","./Button-bd1b5708.js","./Button-bc1a867b.css","./Header-a6911580.css","./Page.stories-ece1482a.css"],import.meta.url),"./stories/MyLabel.stories.ts":async()=>r(()=>import("./MyLabel.stories-51b97129.js"),["./MyLabel.stories-51b97129.js","./jsx-runtime-e6a661ac.js","./index-61bf1805.js","./_commonjsHelpers-de833af9.js","./MyLabel.stories-1ad6a616.css"],import.meta.url),"./stories/Header.stories.ts":async()=>r(()=>import("./Header.stories-ace62e00.js"),["./Header.stories-ace62e00.js","./Header-3fcd03e1.js","./jsx-runtime-e6a661ac.js","./index-61bf1805.js","./_commonjsHelpers-de833af9.js","./Button-bd1b5708.js","./Button-bc1a867b.css","./Header-a6911580.css"],import.meta.url),"./stories/Button.stories.ts":async()=>r(()=>import("./Button.stories-d0b1811b.js"),["./Button.stories-d0b1811b.js","./Button-bd1b5708.js","./jsx-runtime-e6a661ac.js","./index-61bf1805.js","./_commonjsHelpers-de833af9.js","./Button-bc1a867b.css"],import.meta.url)};async function O(_){return P[_]()}O.__docgenInfo={description:"",methods:[],displayName:"importFn"};const{composeConfigs:w,PreviewWeb:T,ClientApi:L}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const _=await Promise.all([r(()=>import("./config-ebc1baf0.js"),["./config-ebc1baf0.js","./index-d475d2ea.js","./index-61bf1805.js","./_commonjsHelpers-de833af9.js","./react-18-ba2f8a3a.js","./index-6a5bd4ef.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-5ef354f3.js"),["./preview-5ef354f3.js","./index-d475d2ea.js","./index-d37d4223.js"],import.meta.url),r(()=>import("./preview-2ebfadd1.js"),[],import.meta.url),r(()=>import("./preview-a60aa466.js"),[],import.meta.url),r(()=>import("./preview-770cc08b.js"),["./preview-770cc08b.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-25cb0eda.js"),["./preview-25cb0eda.js","./index-d475d2ea.js"],import.meta.url),r(()=>import("./preview-d8c963a4.js"),["./preview-d8c963a4.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-b79ea209.js"),["./preview-b79ea209.js","./index-d475d2ea.js"],import.meta.url),r(()=>import("./preview-d06fc6bf.js"),["./preview-d06fc6bf.js","./index-d475d2ea.js","./_commonjsHelpers-de833af9.js"],import.meta.url),r(()=>import("./preview-1e5c59db.js"),[],import.meta.url)]);return w(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new T;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new L({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:O,getProjectAnnotations:I});export{r as _};
//# sourceMappingURL=iframe-56cf14e2.js.map