(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("../../node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("../../node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},layout:"fullscreen"};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("../../node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync ^\\.[\\\\/](?:(?!\\.)(?=.)[^/]*?\\.stories\\.js)$")],module,!1)}).call(this,__webpack_require__("../../node_modules/@storybook/builder-webpack4/node_modules/webpack/buildin/module.js")(module))},"./src sync ^\\.[\\\\/](?:(?!\\.)(?=.)[^/]*?\\.stories\\.js)$":function(module,exports,__webpack_require__){var map={"./CookieConsent.stories.js":"./src/CookieConsent.stories.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync ^\\.[\\\\/](?:(?!\\.)(?=.)[^/]*?\\.stories\\.js)$"},"./src/CookieConsent.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"ConsentDisabled",(function(){return ConsentDisabled}));__webpack_require__("../../node_modules/core-js/modules/es.function.bind.js");var _templateObject,react=__webpack_require__("../../node_modules/react/index.js"),react_default=__webpack_require__.n(react),slicedToArray=__webpack_require__("../../node_modules/@babel/runtime/helpers/slicedToArray.js"),slicedToArray_default=__webpack_require__.n(slicedToArray),index_es=(__webpack_require__("../../node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/web.timers.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.parse-int.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js")),react_fontawesome_index_es=__webpack_require__("../../node_modules/@fortawesome/react-fontawesome/index.es.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),taggedTemplateLiteralLoose=__webpack_require__("../../node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js"),taggedTemplateLiteralLoose_default=__webpack_require__.n(taggedTemplateLiteralLoose),CookieConsentWrapper=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js").a.div(_templateObject||(_templateObject=taggedTemplateLiteralLoose_default()(['\n  font-family: Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans,\n    sans-serif;\n  margin: 0 auto;\n  max-width: 1200px;\n  position: relative;\n  z-index: 999;\n  font-weight: 300;\n  color: #191919;\n  .cookie-consent-component {\n    position: fixed;\n    bottom: 2rem;\n    margin-right: 1rem;\n    &.ease-closing {\n      transition-timing-function: ease-out;\n      transition: 0.2s;\n      transform: translateY(130%);\n    }\n    .container {\n      position: relative;\n      background: #e8e8e8;\n      border: 1px solid #d0d0d0;\n      padding: 1rem 1.5rem 1.5rem 1.5rem;\n      max-width: 676px;\n      width: 100%;\n      margin: 0 auto;\n      z-index: 999;\n      box-sizing: border-box;\n      float: left;\n      bottom: 0;\n\n      .content {\n        width: 90%;\n        font-size: 0.875rem;\n        line-height: 1.5rem;\n        margin: 0;\n        p {\n          margin: 0;\n          a {\n            color: #8c1d40;\n            text-decoration: underline;\n          }\n        }\n      }\n      .accept-btn {\n        color: #ffffff;\n        background: #8c1d40;\n        text-decoration: none;\n        font-weight: 700;\n        display: inline-block;\n        text-align: center;\n        text-decoration: none;\n        vertical-align: middle;\n        user-select: none;\n        margin: 1rem 0 0 0;\n        line-height: 1rem;\n        font-size: 14px;\n        border-radius: 25px;\n        border: none;\n        padding: 0.5rem 1.2rem;\n        transition: 0.03s ease-in-out;\n        &:not(:disabled):not(.disabled) {\n          cursor: pointer;\n        }\n        &:hover {\n          transform: scale(1.05);\n        }\n        &:active {\n          transform: scale(1);\n        }\n      }\n      .close-btn {\n        position: absolute;\n        top: 1rem;\n        right: 1.5rem;\n        border-radius: 400rem;\n        line-height: 1rem;\n        transition: 0.03s ease-in-out;\n        padding: 0.25rem 0.25rem;\n        width: 2rem;\n        height: 2rem;\n        border: solid 1px #d0d0d0;\n        background: #ffffff;\n        font-size: 1rem;\n        &:hover {\n          transform: scale(1.05);\n        }\n        &:active {\n          transform: scale(0.95);\n        }\n        &:not(:disabled):not(.disabled) {\n          cursor: pointer;\n        }\n        @media (max-width: 768px) {\n          top: 0.5rem;\n          right: 0.5rem;\n        }\n      }\n\n      // Fade animation\n      animation: fade 1s;\n      @keyframes fade {\n        from {\n          opacity: 0;\n        }\n        to {\n          opacity: 1;\n        }\n      }\n    }\n\n    @media (max-width: 998px) {\n      margin-left: 2rem;\n      margin-right: 2rem;\n    }\n  }\n  button,\n  a {\n    text-decoration: none;\n    &:focus {\n      outline: none !important;\n      box-shadow: 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #191919 !important;\n    }\n  }\n']))),trackGAEvent=(__webpack_require__("../../node_modules/core-js/modules/es.function.name.js"),function trackGAEvent(_ref){var _ref$event=_ref.event,event=void 0===_ref$event?"":_ref$event,_ref$action=_ref.action,action=void 0===_ref$action?"":_ref$action,_ref$name=_ref.name,name=void 0===_ref$name?"":_ref$name,_ref$type=_ref.type,type=void 0===_ref$type?"":_ref$type,_ref$section=_ref.section,section=void 0===_ref$section?"":_ref$section,_ref$text=_ref.text,text=void 0===_ref$text?"":_ref$text,_ref$region=_ref.region,region=void 0===_ref$region?"":_ref$region,_ref$component=_ref.component,component=void 0===_ref$component?"":_ref$component,dataLayer=window.dataLayer,e={event:event.toLowerCase(),action:action.toLowerCase(),name:name.toLowerCase(),type:type.toLowerCase(),region:region.toLowerCase(),section:section.toLowerCase(),text:text.toLowerCase(),component:component.toLowerCase()};dataLayer&&dataLayer.push(e)}),defaultGAEvent={event:"link",action:"click",name:"onclick",type:"internal link",region:"main content",section:"cookie banner"},now=new Date,CookieConsent_CookieConsent=function CookieConsent(_ref){var enableCookieConsent=_ref.enableCookieConsent,expirationTime=_ref.expirationTime,cookieConsentRef=Object(react.useRef)(null),_useState=Object(react.useState)(!1),_useState2=slicedToArray_default()(_useState,2),visible=_useState2[0],setVisible=_useState2[1],updateLocalStorage=function updateLocalStorage(){var localStorage=window.localStorage,ttl=function addDays(date,days){var dateWithDays=new Date(date);return dateWithDays.setDate(dateWithDays.getDate()+days),dateWithDays}(now,expirationTime).getTime();localStorage.setItem("cookieConsent",ttl.toString())},handleCloseConsent=function handleCloseConsent(){updateLocalStorage(),function updateEasingState(){cookieConsentRef.current.classList.add("ease-closing"),setTimeout((function(){setVisible(!1)}),500)}()};return Object(react.useEffect)((function(){var localStorage=window.localStorage;if(localStorage){var item=localStorage.getItem("cookieConsent");setVisible(!item||now.getTime()>parseInt(item,10))}}),[]),enableCookieConsent&&visible?react_default.a.createElement(CookieConsentWrapper,null,react_default.a.createElement("div",{ref:cookieConsentRef,className:"cookie-consent-component"},react_default.a.createElement("div",{className:"container"},react_default.a.createElement("div",{className:"content"},react_default.a.createElement("p",null,"ASU websites use cookies to enhance user experience, analyze site usage, and assist with outreach and enrollment. By continuing to use this site, you are giving us your consent to do this. Learn more about cookies on ASU websites in our"," ",react_default.a.createElement("a",{target:"_blank",rel:"noreferrer",href:"https://www.asu.edu/privacy#cookies"},"Privacy Statement."))),react_default.a.createElement("button",{type:"button",className:"accept-btn",onClick:function onClick(){handleCloseConsent(),trackGAEvent(Object.assign({},defaultGAEvent,{text:"ok, i agree"}))}},"Ok, I agree"),react_default.a.createElement("button",{type:"button",className:"close-btn","aria-label":"Close cookie consent",onClick:function onClick(){handleCloseConsent(),trackGAEvent(Object.assign({},defaultGAEvent,{text:"close cross"}))}},react_default.a.createElement(react_fontawesome_index_es.a,{icon:index_es.a}))))):null};CookieConsent_CookieConsent.propTypes={enableCookieConsent:prop_types_default.a.bool.isRequired,expirationTime:prop_types_default.a.number},CookieConsent_CookieConsent.defaultProps={expirationTime:90},CookieConsent_CookieConsent.__docgenInfo={description:"@param {CookieConsentProps} props\n@returns {JSX.Element}",methods:[],displayName:"CookieConsent",props:{expirationTime:{defaultValue:{value:"90",computed:!1},description:"",type:{name:"number"},required:!1},enableCookieConsent:{description:"",type:{name:"bool"},required:!0}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/CookieConsent.js"]={name:"CookieConsent",docgenInfo:CookieConsent_CookieConsent.__docgenInfo,path:"src/CookieConsent.js"});__webpack_exports__.default={title:"UDS/ASU Cookie Consent",component:CookieConsent_CookieConsent};var CookieConsent_stories_Template=function Template(args){return react_default.a.createElement(CookieConsent_CookieConsent,args)};CookieConsent_stories_Template.displayName="Template";var Default=CookieConsent_stories_Template.bind({});Default.args={enableCookieConsent:!0,expirationTime:90};var ConsentDisabled=CookieConsent_stories_Template.bind({});ConsentDisabled.args={enableCookieConsent:!1}},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("../../node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("../../node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("../../node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("../../node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("../../node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("../../node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,2,3]]]);