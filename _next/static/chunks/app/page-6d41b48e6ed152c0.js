(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9540:function(e,t,r){Promise.resolve().then(r.bind(r,3198)),Promise.resolve().then(r.t.bind(r,8707,23))},3198:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return a}});var n=r(9268),i=r(6006),o=function(e){return(0,n.jsxs)("a",{href:e.href,className:"flex flex-row py-3 items-center group",children:[(0,n.jsx)("div",{className:e.active?"mr-4 text-on-background transition-all group-hover:text-primary-500":"mr-4 text-surface-600 transition-all group-hover:text-primary-500",children:e.num}),(0,n.jsx)("div",{className:e.active?"w-16 h-0.5 bg-on-background mr-4 transition-all group-hover:w-16 group-hover:bg-primary-500":"w-8 h-0.5 bg-surface-600 mr-4 transition-all group-hover:w-16 group-hover:bg-primary-500"}),(0,n.jsx)("div",{className:e.active?"transition-all text-on-background group-hover:text-primary-500":"transition-all text-surface-600 group-hover:text-primary-500",children:e.name})]})},a=()=>{let[e,t]=(0,i.useState)(null),r=(0,i.useRef)(null);return(0,i.useEffect)(()=>{r.current=new IntersectionObserver(e=>{var r;let n=null===(r=e.find(e=>e.isIntersecting))||void 0===r?void 0:r.target;n&&t(n.id)},{threshold:.5});let e=document.querySelectorAll("[data-section]");return e.forEach(e=>{r.current.observe(e)}),()=>{e.forEach(e=>{r.current.unobserve(e)})}},[]),(0,n.jsxs)("div",{id:"navigation",className:"flex flex-col py-10 font-medium tracking-widest",children:[(0,n.jsx)(o,{active:"about"===e,href:"#about",num:"01",name:"ABOUT"}),(0,n.jsx)(o,{active:"experiences"===e,href:"#experiences",num:"02",name:"EXPERIENCES"}),(0,n.jsx)(o,{active:"education"===e,href:"#education",num:"03",name:"EDUCATION"}),(0,n.jsx)(o,{active:"volunteering"===e,href:"#volunteering",num:"04",name:"VOLUNTEERING"}),(0,n.jsx)(o,{active:"projects"===e||"credits"===e,href:"#projects",num:"05",name:"PROJECTS"})]})}},8707:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let n=r(6927),i=r(5909),o=i._(r(6006)),a=n._(r(9209)),l=r(3930),u=r(8706),s=r(3278);r(4745);let c=n._(r(8685)),d={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function f(e){return void 0!==e.default}function p(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,n,i,o,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&o(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}})}function g(e){let[t,r]=o.version.split("."),n=parseInt(t,10),i=parseInt(r,10);return n>18||18===n&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let h=(0,o.forwardRef)((e,t)=>{let{imgAttributes:r,heightInt:n,widthInt:i,qualityInt:a,className:l,imgStyle:u,blurStyle:s,isLazy:c,fetchPriority:d,fill:f,placeholder:p,loading:h,srcString:v,config:y,unoptimized:b,loader:_,onLoadRef:w,onLoadingCompleteRef:x,setBlurComplete:E,setShowAltText:j,onLoad:O,onError:S,...P}=e;return h=c?"lazy":h,o.default.createElement("img",{...P,...g(d),loading:h,width:i,height:n,decoding:"async","data-nimg":f?"fill":"1",className:l,style:{...u,...s},...r,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&m(e,v,p,w,x,E,b))},[v,p,w,x,E,S,b,t]),onLoad:e=>{let t=e.currentTarget;m(t,v,p,w,x,E,b)},onError:e=>{j(!0),"blur"===p&&E(!0),S&&S(e)}})}),v=(0,o.forwardRef)((e,t)=>{var r;let n,i,{src:m,sizes:v,unoptimized:y=!1,priority:b=!1,loading:_,className:w,quality:x,width:E,height:j,fill:O,style:S,onLoad:P,onLoadingComplete:C,placeholder:k="empty",blurDataURL:I,fetchPriority:M,layout:A,objectFit:N,objectPosition:R,lazyBoundary:z,lazyRoot:T,...U}=e,D=(0,o.useContext)(s.ImageConfigContext),L=(0,o.useMemo)(()=>{let e=d||D||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[D]),F=U.loader||c.default;delete U.loader;let B="__next_img_default"in F;if(B){if("custom"===L.loader)throw Error('Image with src "'+m+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:r,...n}=t;return e(n)}}if(A){"fill"===A&&(O=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[A];e&&(S={...S,...e});let t={responsive:"100vw",fill:"100vw"}[A];t&&!v&&(v=t)}let W="",G=p(E),V=p(j);if("object"==typeof(r=m)&&(f(r)||void 0!==r.src)){let e=f(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(n=e.blurWidth,i=e.blurHeight,I=I||e.blurDataURL,W=e.src,!O){if(G||V){if(G&&!V){let t=G/e.width;V=Math.round(e.height*t)}else if(!G&&V){let t=V/e.height;G=Math.round(e.width*t)}}else G=e.width,V=e.height}}let $=!b&&("lazy"===_||void 0===_);(!(m="string"==typeof m?m:W)||m.startsWith("data:")||m.startsWith("blob:"))&&(y=!0,$=!1),L.unoptimized&&(y=!0),B&&m.endsWith(".svg")&&!L.dangerouslyAllowSVG&&(y=!0),b&&(M="high");let[q,H]=(0,o.useState)(!1),[J,Y]=(0,o.useState)(!1),X=p(x),K=Object.assign(O?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:N,objectPosition:R}:{},J?{}:{color:"transparent"},S),Q="blur"===k&&I&&!q?{backgroundSize:K.objectFit||"cover",backgroundPosition:K.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,l.getImageBlurSvg)({widthInt:G,heightInt:V,blurWidth:n,blurHeight:i,blurDataURL:I,objectFit:K.objectFit})+'")'}:{},Z=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:a,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let o=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:o,kind:"x"}}(t,i,a),c=u.length-1;return{sizes:a||"w"!==s?a:"100vw",srcSet:u.map((e,n)=>l({config:t,src:r,quality:o,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:l({config:t,src:r,quality:o,width:u[c]})}}({config:L,src:m,unoptimized:y,width:G,quality:X,sizes:v,loader:F}),ee=m,et=(0,o.useRef)(P);(0,o.useEffect)(()=>{et.current=P},[P]);let er=(0,o.useRef)(C);(0,o.useEffect)(()=>{er.current=C},[C]);let en={isLazy:$,imgAttributes:Z,heightInt:V,widthInt:G,qualityInt:X,className:w,imgStyle:K,blurStyle:Q,loading:_,config:L,fetchPriority:M,fill:O,unoptimized:y,placeholder:k,loader:F,srcString:ee,onLoadRef:et,onLoadingCompleteRef:er,setBlurComplete:H,setShowAltText:Y,...U};return o.default.createElement(o.default.Fragment,null,o.default.createElement(h,{...en,ref:t}),b?o.default.createElement(a.default,null,o.default.createElement("link",{key:"__nimg-"+Z.src+Z.srcSet+Z.sizes,rel:"preload",as:"image",href:Z.srcSet?void 0:Z.src,imageSrcSet:Z.srcSet,imageSizes:Z.sizes,crossOrigin:U.crossOrigin,referrerPolicy:U.referrerPolicy,...g(M)})):null)}),y=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1909:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return o}});let n=r(6927),i=n._(r(6006)),o=i.default.createContext({})},7060:function(e,t){"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},9209:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return c},default:function(){return m}});let n=r(6927),i=r(5909),o=i._(r(6006)),a=n._(r(9797)),l=r(1909),u=r(5415),s=r(7060);function c(e){void 0===e&&(e=!1);let t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(4745);let f=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:r}=t;return e.reduce(d,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!a)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:n})})}let m=function(e){let{children:t}=e,r=(0,o.useContext)(l.AmpStateContext),n=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:n,inAmpMode:(0,s.isInAmpMode)(r)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3930:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:a}=e,l=n||t,u=i||r,s=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&u?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+l+" "+u+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(n&&i?"1":"20")+"'/%3E"+s+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},3278:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return a}});let n=r(6927),i=n._(r(6006)),o=r(8706),a=i.default.createContext(o.imageConfigDefault)},8706:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},8685:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},9797:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let n=r(5909),i=n._(r(6006)),o=i.useLayoutEffect,a=i.useEffect;function l(e){let{headManager:t,reduceComponentsToState:r}=e;function n(){if(t&&t.mountedInstances){let n=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(n,e))}}return o(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=n),()=>{t&&(t._pendingUpdate=n)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},4745:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},3177:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(6006),i=Symbol.for("react.element"),o=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,u={},s=null,c=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,n)&&!l.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===u[n]&&(u[n]=t[n]);return{$$typeof:i,type:e,key:s,ref:c,props:u,_owner:a.current}}t.jsx=u,t.jsxs=u},9268:function(e,t,r){"use strict";e.exports=r(3177)}},function(e){e.O(0,[667,488,744],function(){return e(e.s=9540)}),_N_E=e.O()}]);