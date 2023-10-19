(self.webpackChunk_asu_component_cookie_consent=self.webpackChunk_asu_component_cookie_consent||[]).push([[179],{"./.storybook/preview.js-generated-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:()=>__namedExportsOrder,parameters:()=>parameters});__webpack_require__("../../node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("../../node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},layout:"fullscreen"},__namedExportsOrder=["parameters"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src/CookieConsent.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ConsentDisabled:()=>ConsentDisabled,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CookieConsent_stories});__webpack_require__("../../node_modules/core-js/modules/es.function.bind.js");var _templateObject,react=__webpack_require__("../../node_modules/react/index.js"),slicedToArray=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),free_solid_svg_icons=(__webpack_require__("../../node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/web.timers.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.parse-int.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../node_modules/@fortawesome/free-solid-svg-icons/index.mjs")),index_es=__webpack_require__("../../node_modules/@fortawesome/react-fontawesome/index.es.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),taggedTemplateLiteralLoose=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js"),CookieConsentWrapper=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteralLoose.Z)(['\n  font-family: Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans,\n    sans-serif;\n  margin: 0 auto;\n  max-width: 1200px;\n  position: relative;\n  z-index: 999;\n  font-weight: 300;\n  color: #191919;\n  .cookie-consent-component {\n    position: fixed;\n    bottom: 2rem;\n    margin-right: 1rem;\n    &.ease-closing {\n      transition-timing-function: ease-out;\n      transition: 0.2s;\n      transform: translateY(130%);\n    }\n    .container {\n      position: relative;\n      background: #e8e8e8;\n      border: 1px solid #d0d0d0;\n      padding: 1rem 1.5rem 1.5rem 1.5rem;\n      max-width: 676px;\n      width: 100%;\n      margin: 0 auto;\n      z-index: 999;\n      box-sizing: border-box;\n      float: left;\n      bottom: 0;\n\n      .content {\n        width: 90%;\n        font-size: 0.875rem;\n        line-height: 1.5rem;\n        margin: 0;\n        p {\n          margin: 0;\n          a {\n            color: #8c1d40;\n            text-decoration: underline;\n          }\n        }\n      }\n      .accept-btn {\n        color: #ffffff;\n        background: #8c1d40;\n        text-decoration: none;\n        font-weight: 700;\n        display: inline-block;\n        text-align: center;\n        text-decoration: none;\n        vertical-align: middle;\n        user-select: none;\n        margin: 1rem 0 0 0;\n        line-height: 1rem;\n        font-size: 14px;\n        border-radius: 25px;\n        border: none;\n        padding: 0.5rem 1.2rem;\n        transition: 0.03s ease-in-out;\n        &:not(:disabled):not(.disabled) {\n          cursor: pointer;\n        }\n        &:hover {\n          transform: scale(1.05);\n        }\n        &:active {\n          transform: scale(1);\n        }\n      }\n      .close-btn {\n        position: absolute;\n        top: 1rem;\n        right: 1.5rem;\n        border-radius: 400rem;\n        line-height: 1rem;\n        transition: 0.03s ease-in-out;\n        padding: 0.25rem 0.25rem;\n        width: 2rem;\n        height: 2rem;\n        border: solid 1px #d0d0d0;\n        background: #ffffff;\n        font-size: 1rem;\n        &:hover {\n          transform: scale(1.05);\n        }\n        &:active {\n          transform: scale(0.95);\n        }\n        &:not(:disabled):not(.disabled) {\n          cursor: pointer;\n        }\n        @media (max-width: 768px) {\n          top: 0.5rem;\n          right: 0.5rem;\n        }\n      }\n\n      // Fade animation\n      animation: fade 1s;\n      @keyframes fade {\n        from {\n          opacity: 0;\n        }\n        to {\n          opacity: 1;\n        }\n      }\n    }\n\n    @media (max-width: 998px) {\n      margin-left: 2rem;\n      margin-right: 2rem;\n    }\n  }\n  button,\n  a {\n    text-decoration: none;\n    &:focus {\n      outline: none !important;\n      box-shadow: 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #191919 !important;\n    }\n  }\n']))),trackGAEvent=(__webpack_require__("../../node_modules/core-js/modules/es.function.name.js"),function trackGAEvent(_ref){var _ref$event=_ref.event,event=void 0===_ref$event?"":_ref$event,_ref$action=_ref.action,action=void 0===_ref$action?"":_ref$action,_ref$name=_ref.name,name=void 0===_ref$name?"":_ref$name,_ref$type=_ref.type,type=void 0===_ref$type?"":_ref$type,_ref$section=_ref.section,section=void 0===_ref$section?"":_ref$section,_ref$text=_ref.text,text=void 0===_ref$text?"":_ref$text,_ref$region=_ref.region,region=void 0===_ref$region?"":_ref$region,_ref$component=_ref.component,component=void 0===_ref$component?"":_ref$component,dataLayer=window.dataLayer,e={event:event.toLowerCase(),action:action.toLowerCase(),name:name.toLowerCase(),type:type.toLowerCase(),region:region.toLowerCase(),section:section.toLowerCase(),text:text.toLowerCase(),component:component.toLowerCase()};dataLayer&&dataLayer.push(e)}),defaultGAEvent={event:"link",action:"click",name:"onclick",type:"internal link",region:"main content",section:"cookie banner"},now=new Date,CookieConsent=function CookieConsent(_ref){var enableCookieConsent=_ref.enableCookieConsent,expirationTime=_ref.expirationTime,cookieConsentRef=(0,react.useRef)(null),_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),visible=_useState2[0],setVisible=_useState2[1],updateLocalStorage=function updateLocalStorage(){var localStorage=window.localStorage,ttl=function addDays(date,days){var dateWithDays=new Date(date);return dateWithDays.setDate(dateWithDays.getDate()+days),dateWithDays}(now,expirationTime).getTime();localStorage.setItem("cookieConsent",ttl.toString())},handleCloseConsent=function handleCloseConsent(){updateLocalStorage(),function updateEasingState(){cookieConsentRef.current.classList.add("ease-closing"),setTimeout((function(){setVisible(!1)}),500)}()};return(0,react.useEffect)((function(){var localStorage=window.localStorage;if(localStorage){var item=localStorage.getItem("cookieConsent");setVisible(!item||now.getTime()>parseInt(item,10))}}),[]),enableCookieConsent&&visible?react.createElement(CookieConsentWrapper,null,react.createElement("div",{ref:cookieConsentRef,className:"cookie-consent-component"},react.createElement("div",{className:"container"},react.createElement("div",{className:"content"},react.createElement("p",null,"ASU websites use cookies to enhance user experience, analyze site usage, and assist with outreach and enrollment. By continuing to use this site, you are giving us your consent to do this. Learn more about cookies on ASU websites in our"," ",react.createElement("a",{target:"_blank",rel:"noreferrer",href:"https://www.asu.edu/privacy#cookies"},"Privacy Statement."))),react.createElement("button",{type:"button",className:"accept-btn",onClick:function onClick(){handleCloseConsent(),trackGAEvent(Object.assign({},defaultGAEvent,{text:"ok, i agree"}))}},"Ok, I agree"),react.createElement("button",{type:"button",className:"close-btn","aria-label":"Close cookie consent",onClick:function onClick(){handleCloseConsent(),trackGAEvent(Object.assign({},defaultGAEvent,{text:"close cross"}))}},react.createElement(index_es.G,{icon:free_solid_svg_icons.NBC}))))):null};CookieConsent.propTypes={enableCookieConsent:prop_types_default().bool.isRequired,expirationTime:prop_types_default().number},CookieConsent.defaultProps={expirationTime:90},CookieConsent.__docgenInfo={description:"@param {CookieConsentProps} props\n@returns {JSX.Element}",methods:[],displayName:"CookieConsent",props:{expirationTime:{defaultValue:{value:"90",computed:!1},description:"",type:{name:"number"},required:!1},enableCookieConsent:{description:"",type:{name:"bool"},required:!0}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/CookieConsent.js"]={name:"CookieConsent",docgenInfo:CookieConsent.__docgenInfo,path:"src/CookieConsent.js"});const CookieConsent_stories={title:"UDS/ASU Cookie Consent",component:CookieConsent};var Template=function Template(args){return react.createElement(CookieConsent,args)};Template.displayName="Template";var Default=Template.bind({});Default.args={enableCookieConsent:!0,expirationTime:90};var ConsentDisabled=Template.bind({});ConsentDisabled.args={enableCookieConsent:!1};var __namedExportsOrder=["Default","ConsentDisabled"]},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("../../node_modules/@storybook/react/dist/esm/client/index.js")},"./src sync ^\\.[\\\\/](?:(?%21\\.)(?=.)[^/]*?\\.stories\\.js)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./CookieConsent.stories.js":"./src/CookieConsent.stories.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync ^\\.[\\\\/](?:(?%21\\.)(?=.)[^/]*?\\.stories\\.js)$"},"?c95a":()=>{},"./generated-stories-entry.cjs":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("../../node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync ^\\.[\\\\/](?:(?%21\\.)(?=.)[^/]*?\\.stories\\.js)$")],module,!1)}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[383],(()=>(__webpack_exec__("../../node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("../../node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("../../node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("../../node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("../../node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs"))));__webpack_require__.O()}]);