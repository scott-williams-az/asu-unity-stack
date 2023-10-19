!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("React"),require("ReactDOM")):"function"==typeof define&&define.amd?define("AsuCookieConsent",["React","ReactDOM"],n):"object"==typeof exports?exports.AsuCookieConsent=n(require("React"),require("ReactDOM")):e.AsuCookieConsent=n(e.React,e.ReactDOM)}(self,((e,n)=>(()=>{"use strict";var t,o={852:(e,n,t)=>{t.r(n),t.d(n,{CookieConsent:()=>h,initCookieConsent:()=>k});var o,r=t(679),i=t(763),a=t(30),s=t(504),c=t(216),l=t.n(c),d=t(24),u=t.n(d),m=t(736),f=t(770).ZP.div(o||(o=(0,m.Z)(['\n  font-family: Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans,\n    sans-serif;\n  margin: 0 auto;\n  max-width: 1200px;\n  position: relative;\n  z-index: 999;\n  font-weight: 300;\n  color: #191919;\n  .cookie-consent-component {\n    position: fixed;\n    bottom: 2rem;\n    margin-right: 1rem;\n    &.ease-closing {\n      transition-timing-function: ease-out;\n      transition: 0.2s;\n      transform: translateY(130%);\n    }\n    .container {\n      position: relative;\n      background: #e8e8e8;\n      border: 1px solid #d0d0d0;\n      padding: 1rem 1.5rem 1.5rem 1.5rem;\n      max-width: 676px;\n      width: 100%;\n      margin: 0 auto;\n      z-index: 999;\n      box-sizing: border-box;\n      float: left;\n      bottom: 0;\n\n      .content {\n        width: 90%;\n        font-size: 0.875rem;\n        line-height: 1.5rem;\n        margin: 0;\n        p {\n          margin: 0;\n          a {\n            color: #8c1d40;\n            text-decoration: underline;\n          }\n        }\n      }\n      .accept-btn {\n        color: #ffffff;\n        background: #8c1d40;\n        text-decoration: none;\n        font-weight: 700;\n        display: inline-block;\n        text-align: center;\n        text-decoration: none;\n        vertical-align: middle;\n        user-select: none;\n        margin: 1rem 0 0 0;\n        line-height: 1rem;\n        font-size: 14px;\n        border-radius: 25px;\n        border: none;\n        padding: 0.5rem 1.2rem;\n        transition: 0.03s ease-in-out;\n        &:not(:disabled):not(.disabled) {\n          cursor: pointer;\n        }\n        &:hover {\n          transform: scale(1.05);\n        }\n        &:active {\n          transform: scale(1);\n        }\n      }\n      .close-btn {\n        position: absolute;\n        top: 1rem;\n        right: 1.5rem;\n        border-radius: 400rem;\n        line-height: 1rem;\n        transition: 0.03s ease-in-out;\n        padding: 0.25rem 0.25rem;\n        width: 2rem;\n        height: 2rem;\n        border: solid 1px #d0d0d0;\n        background: #ffffff;\n        font-size: 1rem;\n        &:hover {\n          transform: scale(1.05);\n        }\n        &:active {\n          transform: scale(0.95);\n        }\n        &:not(:disabled):not(.disabled) {\n          cursor: pointer;\n        }\n        @media (max-width: 768px) {\n          top: 0.5rem;\n          right: 0.5rem;\n        }\n      }\n\n      // Fade animation\n      animation: fade 1s;\n      @keyframes fade {\n        from {\n          opacity: 0;\n        }\n        to {\n          opacity: 1;\n        }\n      }\n    }\n\n    @media (max-width: 998px) {\n      margin-left: 2rem;\n      margin-right: 2rem;\n    }\n  }\n  button,\n  a {\n    text-decoration: none;\n    &:focus {\n      outline: none !important;\n      box-shadow: 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #191919 !important;\n    }\n  }\n']))),p=function(e){var n=e.event,t=void 0===n?"":n,o=e.action,r=void 0===o?"":o,i=e.name,a=void 0===i?"":i,s=e.type,c=void 0===s?"":s,l=e.section,d=void 0===l?"":l,u=e.text,m=void 0===u?"":u,f=e.region,p=void 0===f?"":f,b=e.component,g=void 0===b?"":b,v=window.dataLayer,x={event:t.toLowerCase(),action:r.toLowerCase(),name:a.toLowerCase(),type:c.toLowerCase(),region:p.toLowerCase(),section:d.toLowerCase(),text:m.toLowerCase(),component:g.toLowerCase()};v&&v.push(x)};function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var v={event:"link",action:"click",name:"onclick",type:"internal link",region:"main content",section:"cookie banner"},x=new Date,h=function(e){var n=e.enableCookieConsent,t=e.expirationTime,o=(0,d.useRef)(null),r=(0,d.useState)(!1),c=(0,i.Z)(r,2),l=c[0],m=c[1],b=function(){var e,n,o,r=window.localStorage,i=(e=x,n=t,o=new Date(e),o.setDate(o.getDate()+n),o).getTime();r.setItem("cookieConsent",i.toString())},h=function(){b(),o.current.classList.add("ease-closing"),setTimeout((function(){m(!1)}),500)};return(0,d.useEffect)((function(){var e=window.localStorage;if(e){var n=e.getItem("cookieConsent");m(!n||x.getTime()>parseInt(n,10))}}),[]),n&&l?u().createElement(f,null,u().createElement("div",{ref:o,className:"cookie-consent-component"},u().createElement("div",{className:"container"},u().createElement("div",{className:"content"},u().createElement("p",null,"ASU websites use cookies to enhance user experience, analyze site usage, and assist with outreach and enrollment. By continuing to use this site, you are giving us your consent to do this. Learn more about cookies on ASU websites in our"," ",u().createElement("a",{target:"_blank",rel:"noreferrer",href:"https://www.asu.edu/privacy#cookies"},"Privacy Statement."))),u().createElement("button",{type:"button",className:"accept-btn",onClick:function(){h(),p(g(g({},v),{},{text:"ok, i agree"}))}},"Ok, I agree"),u().createElement("button",{type:"button",className:"close-btn","aria-label":"Close cookie consent",onClick:function(){h(),p(g(g({},v),{},{text:"close cross"}))}},u().createElement(s.G,{icon:a.NBC}))))):null};h.propTypes={enableCookieConsent:l().bool.isRequired,expirationTime:l().number},h.defaultProps={expirationTime:90};var y=t(314),w=t.n(y),k=function(e){var n=e.targetSelector,t=e.props;!function(e,n,t){w().render(u().createElement(e,n),t)}(h,t,document.querySelector(n))}},24:n=>{n.exports=e},314:e=>{e.exports=n}},r={};function i(e){var n=r[e];if(void 0!==n)return n.exports;var t=r[e]={exports:{}};return o[e](t,t.exports,i),t.exports}i.m=o,t=[],i.O=(e,n,o,r)=>{if(!n){var a=1/0;for(d=0;d<t.length;d++){for(var[n,o,r]=t[d],s=!0,c=0;c<n.length;c++)(!1&r||a>=r)&&Object.keys(i.O).every((e=>i.O[e](n[c])))?n.splice(c--,1):(s=!1,r<a&&(a=r));if(s){t.splice(d--,1);var l=o();void 0!==l&&(e=l)}}return e}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[n,o,r]},i.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return i.d(n,{a:n}),n},i.d=(e,n)=>{for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},i.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={44:0};i.O.j=n=>0===e[n];var n=(n,t)=>{var o,r,[a,s,c]=t,l=0;if(a.some((n=>0!==e[n]))){for(o in s)i.o(s,o)&&(i.m[o]=s[o]);if(c)var d=c(i)}for(n&&n(t);l<a.length;l++)r=a[l],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(d)},t=self.webpackChunkAsuCookieConsent=self.webpackChunkAsuCookieConsent||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})(),i.nc=void 0;var a=i.O(void 0,[736],(()=>i(852)));return a=i.O(a)})()));