import{r as l,R as O}from"./index-iql2cimc.js";import"./index-DvwC1uHH.js";import{N as _,s as k,u as x,a as F,b as P,c as B,d as y,e as N,l as j,R as I}from"./index-B56RiGoX.js";function m(){return m=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},m.apply(this,arguments)}function K(e,r){if(e==null)return{};var i={},t=Object.keys(e),s,a;for(a=0;a<t.length;a++)s=t[a],!(r.indexOf(s)>=0)&&(i[s]=e[s]);return i}function V(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function A(e,r){return e.button===0&&(!r||r==="_self")&&!V(e)}const W=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],z="6";try{window.__reactRouterVersion=z}catch{}const G="startTransition",S=O[G];function Q(e){let{basename:r,children:i,future:t,window:s}=e,a=l.useRef();a.current==null&&(a.current=N({window:s,v5Compat:!0}));let o=a.current,[u,c]=l.useState({action:o.action,location:o.location}),{v7_startTransition:n}=t||{},f=l.useCallback(p=>{n&&S?S(()=>c(p)):c(p)},[c,n]);return l.useLayoutEffect(()=>o.listen(f),[o,f]),l.useEffect(()=>j(t),[t]),l.createElement(I,{basename:r,children:i,location:u.location,navigationType:u.action,navigator:o,future:t})}const M=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",X=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Y=l.forwardRef(function(r,i){let{onClick:t,relative:s,reloadDocument:a,replace:o,state:u,target:c,to:n,preventScrollReset:f,viewTransition:p}=r,w=K(r,W),{basename:U}=l.useContext(_),R,v=!1;if(typeof n=="string"&&X.test(n)&&(R=n,M))try{let d=new URL(window.location.href),h=n.startsWith("//")?new URL(d.protocol+n):new URL(n),g=k(h.pathname,U);h.origin===d.origin&&g!=null?n=g+h.search+h.hash:v=!0}catch{}let E=x(n,{relative:s}),C=q(n,{replace:o,state:u,target:c,preventScrollReset:f,relative:s,viewTransition:p});function L(d){t&&t(d),d.defaultPrevented||C(d)}return l.createElement("a",m({},w,{href:R||E,onClick:v||a?t:L,ref:i,target:c}))});var b;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(b||(b={}));var T;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(T||(T={}));function q(e,r){let{target:i,replace:t,state:s,preventScrollReset:a,relative:o,viewTransition:u}=r===void 0?{}:r,c=F(),n=P(),f=B(e,{relative:o});return l.useCallback(p=>{if(A(p,i)){p.preventDefault();let w=t!==void 0?t:y(n)===y(f);c(e,{replace:w,state:s,preventScrollReset:a,relative:o,viewTransition:u})}},[n,c,f,t,s,i,e,a,o,u])}export{Q as B,Y as L};
/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
