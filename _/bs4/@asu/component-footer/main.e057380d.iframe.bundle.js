(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("../../node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("../../node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("../../node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync ^\\.[\\\\/](?:(?!\\.)(?=.)[^/]*?\\.stories\\.js)$")],module,!1)}).call(this,__webpack_require__("../../node_modules/@storybook/builder-webpack4/node_modules/webpack/buildin/module.js")(module))},"./src sync ^\\.[\\\\/](?:(?!\\.)(?=.)[^/]*?\\.stories\\.js)$":function(module,exports,__webpack_require__){var map={"./footer.stories.js":"./src/footer.stories.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync ^\\.[\\\\/](?:(?!\\.)(?=.)[^/]*?\\.stories\\.js)$"},"./src/assets/images/endorsedLogo.png":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/endorsedLogo.870c9060.png"},"./src/assets/images/innovationLogo.png":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/innovationLogo.b8394c62.png"},"./src/footer.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"UnitLogo",(function(){return UnitLogo})),__webpack_require__.d(__webpack_exports__,"OneColumnNoLogo",(function(){return OneColumnNoLogo})),__webpack_require__.d(__webpack_exports__,"OneColumn",(function(){return OneColumn})),__webpack_require__.d(__webpack_exports__,"TwoColumns",(function(){return TwoColumns})),__webpack_require__.d(__webpack_exports__,"ThreeColumns",(function(){return ThreeColumns})),__webpack_require__.d(__webpack_exports__,"FourColumns",(function(){return FourColumns})),__webpack_require__.d(__webpack_exports__,"SixColumns",(function(){return SixColumns}));var toConsumableArray=__webpack_require__("../../node_modules/@babel/runtime/helpers/toConsumableArray.js"),toConsumableArray_default=__webpack_require__.n(toConsumableArray),react=(__webpack_require__("../../node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("../../node_modules/react/index.js")),react_default=__webpack_require__.n(react),endorsedLogo=__webpack_require__("./src/assets/images/endorsedLogo.png"),endorsedLogo_default=__webpack_require__.n(endorsedLogo),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),slicedToArray=(__webpack_require__("../../node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../node_modules/@babel/runtime/helpers/slicedToArray.js")),slicedToArray_default=__webpack_require__.n(slicedToArray),index_es=__webpack_require__("../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js"),react_fontawesome_index_es=__webpack_require__("../../node_modules/@fortawesome/react-fontawesome/index.es.js"),ColumnSection_ColumnSection=function ColumnSection(_ref){var columnIndex=_ref.columnIndex,_ref$column=_ref.column,title=_ref$column.title,links=_ref$column.links,_useState=Object(react.useState)(!1),_useState2=slicedToArray_default()(_useState,2),show=_useState2[0],setShow=_useState2[1];return react_default.a.createElement("div",{className:"col-xl flex-footer testname-column"},react_default.a.createElement("div",{className:"card card-foldable desktop-disable-xl"},react_default.a.createElement("div",{className:"card-header",role:"button",onClick:function onClick(){return setShow(!show)},onKeyDown:function onKeyDown(){return setShow(!show)},tabIndex:0},react_default.a.createElement("h5",null,react_default.a.createElement("a",{id:"footlink-header-"+columnIndex,className:"collapsed",href:"#footlink-"+columnIndex,role:"button"},title,react_default.a.createElement(react_fontawesome_index_es.a,{icon:index_es.a})))),react_default.a.createElement("div",{id:"footlink-"+columnIndex,className:"collapse card-body "+(show?"show":"")},links.map((function(link){return react_default.a.createElement("a",{key:"footlink-"+title+"-link-"+link.text,className:"nav-link",href:link.url,title:link.title},link.text)})))))};ColumnSection_ColumnSection.displayName="ColumnSection",ColumnSection_ColumnSection.propTypes={columnIndex:prop_types_default.a.number.isRequired,column:Object(prop_types.shape)({title:prop_types_default.a.string,links:Object(prop_types.arrayOf)(Object(prop_types.shape)({url:prop_types_default.a.string.isRequired,title:prop_types_default.a.string,text:prop_types_default.a.string.isRequired}))})},ColumnSection_ColumnSection.__docgenInfo={description:'@param {{\n columnIndex: number\n column?: import("../../core/models/types").Column\n}} props\n@returns {JSX.Element}',methods:[],displayName:"ColumnSection",props:{columnIndex:{description:"",type:{name:"number"},required:!0},column:{description:"",type:{name:"shape",value:{title:{name:"string",required:!1},links:{name:"arrayOf",value:{name:"shape",value:{url:{name:"string",required:!0},title:{name:"string",required:!1},text:{name:"string",required:!0}}},required:!1}}},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ColumnSection/index.js"]={name:"ColumnSection",docgenInfo:ColumnSection_ColumnSection.__docgenInfo,path:"src/components/ColumnSection/index.js"});var Contact_Contact=function Contact(_ref){var _ref$contact=_ref.contact,title=_ref$contact.title,contactLink=_ref$contact.contactLink,contributionLink=_ref$contact.contributionLink,columns=_ref$contact.columns;return react_default.a.createElement("div",{className:"wrapper",id:"wrapper-footer-columns","data-testid":"contact"},react_default.a.createElement("div",{className:"container",id:"footer-columns"},react_default.a.createElement("div",{className:"row","data-testid":"columns-container"},react_default.a.createElement("div",{className:"col-xl-3",id:"info-column"},react_default.a.createElement("h5",null,title),react_default.a.createElement("p",{className:"contact-link"},react_default.a.createElement("a",{href:contactLink},"Contact Us")),contributionLink&&react_default.a.createElement("p",{className:"contribute-button","data-testid":"contact-contribution-link"},react_default.a.createElement("a",{href:contributionLink,className:"btn btn-small btn-gold"},"Contribute"))),columns&&columns.length&&react_default.a.createElement(react_default.a.Fragment,null,columns.map((function(column,columnIndex){return react_default.a.createElement(ColumnSection_ColumnSection,{key:"footlink-"+column.title,columnIndex:columnIndex,column:column})}))))))};Contact_Contact.displayName="Contact",Contact_Contact.propTypes={contact:Object(prop_types.shape)({title:prop_types_default.a.string.isRequired,contactLink:prop_types_default.a.string.isRequired,contributionLink:prop_types_default.a.string,columns:Object(prop_types.arrayOf)(Object(prop_types.shape)({title:prop_types_default.a.string,links:Object(prop_types.arrayOf)(Object(prop_types.shape)({url:prop_types_default.a.string.isRequired,title:prop_types_default.a.string,text:prop_types_default.a.string.isRequired}))}))})},Contact_Contact.defaultProps={contact:{title:"",contactLink:"",contributionLink:""}},Contact_Contact.__docgenInfo={description:"@param {{\n contact: import('../../core/models/types').Contact\n}} props\n@returns {JSX.Element}",methods:[],displayName:"Contact",props:{contact:{defaultValue:{value:'{\n  title: "",\n  contactLink: "",\n  contributionLink: "",\n}',computed:!1},description:"",type:{name:"shape",value:{title:{name:"string",required:!0},contactLink:{name:"string",required:!0},contributionLink:{name:"string",required:!1},columns:{name:"arrayOf",value:{name:"shape",value:{title:{name:"string",required:!1},links:{name:"arrayOf",value:{name:"shape",value:{url:{name:"string",required:!0},title:{name:"string",required:!1},text:{name:"string",required:!0}}},required:!1}}},required:!1}}},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Contact/index.js"]={name:"Contact",docgenInfo:Contact_Contact.__docgenInfo,path:"src/components/Contact/index.js"});var innovationLogo=__webpack_require__("./src/assets/images/innovationLogo.png"),innovationLogo_default=__webpack_require__.n(innovationLogo),trackGAEvent=function trackGAEvent(_ref){var _ref$type=_ref.type,type=void 0===_ref$type?"":_ref$type,_ref$section=_ref.section,section=void 0===_ref$section?"":_ref$section,_ref$text=_ref.text,text=void 0===_ref$text?"":_ref$text,dataLayer=window.dataLayer,event={event:"link",action:"click",name:"onclick",type:type.toLowerCase(),region:"footer",section:section.toLowerCase(),text:text.toLowerCase()};dataLayer&&dataLayer.push(event)},DEFAULT_GA_EVENT={type:"internal link",section:"secondary footer"},Innovation_Innovation=function Innovation(){return react_default.a.createElement("div",{className:"wrapper",id:"wrapper-footer-innovation","data-testid":"innovation"},react_default.a.createElement("div",{className:"container",id:"footer-innovation"},react_default.a.createElement("div",{className:"row"},react_default.a.createElement("div",{className:"col"},react_default.a.createElement("div",{className:"d-flex footer-innovation-links"},react_default.a.createElement("nav",{className:"nav","aria-label":"University Services"},react_default.a.createElement("a",{className:"nav-link",href:"https://www.asu.edu/about/locations-maps",onFocus:function onFocus(){return trackGAEvent(Object.assign({},DEFAULT_GA_EVENT,{text:"maps and locations"}))}},"Maps and Locations"),react_default.a.createElement("a",{className:"nav-link",href:"https://www.asu.edu/asujobs",onFocus:function onFocus(){return trackGAEvent(Object.assign({},DEFAULT_GA_EVENT,{text:"jobs"}))}},"Jobs"),react_default.a.createElement("a",{className:"nav-link",href:"https://isearch.asu.edu/",onFocus:function onFocus(){return trackGAEvent(Object.assign({},DEFAULT_GA_EVENT,{text:"directory"}))}},"Directory"),react_default.a.createElement("a",{className:"nav-link",href:"https://www.asu.edu/about/contact",onFocus:function onFocus(){return trackGAEvent(Object.assign({},DEFAULT_GA_EVENT,{text:"contact asu"}))}},"Contact ASU"),react_default.a.createElement("a",{className:"nav-link",href:"https://my.asu.edu/",onFocus:function onFocus(){return trackGAEvent(Object.assign({},DEFAULT_GA_EVENT,{text:"my asu"}))}},"My ASU")),react_default.a.createElement("a",{className:"img-link",href:"https://www.asu.edu/rankings",onFocus:function onFocus(){return trackGAEvent(Object.assign({},DEFAULT_GA_EVENT,{text:"#1 in the u.s. for innovation"}))}},react_default.a.createElement("img",{src:innovationLogo_default.a,alt:"Number one in the U.S. for innovation. #1 ASU, #2 Stanford, #3 MIT. - U.S. News and World Report, 8 years, 2016-2023",width:"459",height:"100",loading:"lazy",decoding:"async"})))))))};Innovation_Innovation.displayName="Innovation",Innovation_Innovation.__docgenInfo={description:"",methods:[],displayName:"Innovation"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Innovation/index.js"]={name:"Innovation",docgenInfo:Innovation_Innovation.__docgenInfo,path:"src/components/Innovation/index.js"});var Legal_DEFAULT_GA_EVENT={type:"internal link",section:"tertiary footer"},Legal_Legal=function Legal(){return react_default.a.createElement("div",{className:"wrapper",id:"wrapper-footer-colophon","data-testid":"legal"},react_default.a.createElement("div",{className:"container",id:"footer-colophon"},react_default.a.createElement("div",{className:"row"},react_default.a.createElement("div",{className:"col"},react_default.a.createElement("nav",{className:"nav colophon","aria-label":"University Legal and Compliance"},react_default.a.createElement("a",{className:"nav-link",href:"https://www.asu.edu/about/copyright-trademark",onFocus:function onFocus(){return trackGAEvent(Object.assign({},Legal_DEFAULT_GA_EVENT,{text:"copyright and trademark"}))}},"Copyright and Trademark"),react_default.a.createElement("a",{className:"nav-link",href:"https://accessibility.asu.edu/report?a11yref="+function getURL(){try{return window.location.href}catch(error){return console.error(error),""}}(),onFocus:function onFocus(){return trackGAEvent(Object.assign({},Legal_DEFAULT_GA_EVENT,{text:"accessibility"}))}},"Accessibility"),react_default.a.createElement("a",{className:"nav-link",href:"https://www.asu.edu/about/privacy",onFocus:function onFocus(){return trackGAEvent(Object.assign({},Legal_DEFAULT_GA_EVENT,{text:"privacy"}))}},"Privacy"),react_default.a.createElement("a",{className:"nav-link",href:"https://www.asu.edu/about/terms-of-use",onFocus:function onFocus(){return trackGAEvent(Object.assign({},Legal_DEFAULT_GA_EVENT,{text:"terms of use"}))}},"Terms of Use"),react_default.a.createElement("a",{className:"nav-link",href:"https://www.asu.edu/emergency/",onFocus:function onFocus(){return trackGAEvent(Object.assign({},Legal_DEFAULT_GA_EVENT,{text:"emergency"}))}},"Emergency"),react_default.a.createElement("a",{className:"nav-link",href:"https://eoss.asu.edu/health/announcements/coronavirus",onFocus:function onFocus(){return trackGAEvent(Object.assign({},Legal_DEFAULT_GA_EVENT,{text:"covid-19 information"}))}},"COVID-19 Information"))))))};Legal_Legal.displayName="Legal",Legal_Legal.__docgenInfo={description:"",methods:[],displayName:"Legal"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Legal/index.js"]={name:"Legal",docgenInfo:Legal_Legal.__docgenInfo,path:"src/components/Legal/index.js"});var free_brands_svg_icons_index_es=__webpack_require__("../../node_modules/@fortawesome/free-brands-svg-icons/index.es.js"),Social_DEFAULT_GA_EVENT={type:"external link",section:"primary footer"},Social_Social=function Social(_ref){var _ref$social=_ref.social,logoUrl=_ref$social.logoUrl,unitLogo=_ref$social.unitLogo,mediaLinks=_ref$social.mediaLinks;return react_default.a.createElement("div",{className:"wrapper",id:"wrapper-endorsed-footer","data-testid":"social"},react_default.a.createElement("div",{className:"container",id:"endorsed-footer"},react_default.a.createElement("div",{className:"row"},react_default.a.createElement("div",{className:"col-md",id:"endorsed-logo"},react_default.a.createElement("a",{href:logoUrl,onFocus:function onFocus(){return trackGAEvent(Object.assign({},Social_DEFAULT_GA_EVENT,{type:"internal link",text:"asu logo"}))}},react_default.a.createElement("img",{src:unitLogo,alt:"ASU University Technology Office Arizona State University."}))),mediaLinks&&react_default.a.createElement("div",{className:"col-md",id:"social-media"},react_default.a.createElement("nav",{className:"nav","aria-label":"Social Media"},mediaLinks.facebook&&react_default.a.createElement("a",{className:"nav-link",href:mediaLinks.facebook,"data-testid":"facebook",onFocus:function onFocus(){return trackGAEvent(Object.assign({},Social_DEFAULT_GA_EVENT,{text:"facebook icon"}))}},react_default.a.createElement(react_fontawesome_index_es.a,{title:"Facebook Social Media Icon",icon:free_brands_svg_icons_index_es.a})),mediaLinks.twitter&&react_default.a.createElement("a",{className:"nav-link",href:mediaLinks.twitter,"data-testid":"twitter",onFocus:function onFocus(){return trackGAEvent(Object.assign({},Social_DEFAULT_GA_EVENT,{text:"twitter icon"}))}},react_default.a.createElement(react_fontawesome_index_es.a,{title:"Twitter Social Media Icon",icon:free_brands_svg_icons_index_es.d})),mediaLinks.instagram&&react_default.a.createElement("a",{className:"nav-link",href:mediaLinks.instagram,"data-testid":"instagram",onFocus:function onFocus(){return trackGAEvent(Object.assign({},Social_DEFAULT_GA_EVENT,{text:"instagram icon"}))}},react_default.a.createElement(react_fontawesome_index_es.a,{title:"Instagram Social Media Icon",icon:free_brands_svg_icons_index_es.b})),mediaLinks.youtube&&react_default.a.createElement("a",{className:"nav-link",href:mediaLinks.youtube,"data-testid":"youtube",onFocus:function onFocus(){return trackGAEvent(Object.assign({},Social_DEFAULT_GA_EVENT,{text:"youtube icon"}))}},react_default.a.createElement(react_fontawesome_index_es.a,{title:"YouTube Social Media Icon",icon:free_brands_svg_icons_index_es.e})),mediaLinks.linkedIn&&react_default.a.createElement("a",{className:"nav-link",href:mediaLinks.linkedIn,"data-testid":"linkedin",onFocus:function onFocus(){return trackGAEvent(Object.assign({},Social_DEFAULT_GA_EVENT,{text:"linkedin icon"}))}},react_default.a.createElement(react_fontawesome_index_es.a,{title:"LinkedIn Social Media Icon",icon:free_brands_svg_icons_index_es.c})))))))};Social_Social.displayName="Social",Social_Social.propTypes={social:Object(prop_types.shape)({unitLogo:prop_types_default.a.string.isRequired,mediaLinks:Object(prop_types.shape)({facebook:prop_types_default.a.string,twitter:prop_types_default.a.string,linkedIn:prop_types_default.a.string,instagram:prop_types_default.a.string,youtube:prop_types_default.a.string})})},Social_Social.defaultProps={social:{unitLogo:endorsedLogo_default.a,mediaLinks:{facebook:"",twitter:"",linkedIn:"",instagram:"",youtube:""}}},Social_Social.__docgenInfo={description:'@param {{\n social: import("../../core/models/types").Social\n}} props\n@returns {JSX.Element}',methods:[],displayName:"Social",props:{social:{defaultValue:{value:'{\n  unitLogo: endorsedLogo,\n  mediaLinks: {\n    facebook: "",\n    twitter: "",\n    linkedIn: "",\n    instagram: "",\n    youtube: "",\n  },\n}',computed:!1},description:"",type:{name:"shape",value:{unitLogo:{name:"string",required:!0},mediaLinks:{name:"shape",value:{facebook:{name:"string",required:!1},twitter:{name:"string",required:!1},linkedIn:{name:"string",required:!1},instagram:{name:"string",required:!1},youtube:{name:"string",required:!1}},required:!1}}},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Social/index.js"]={name:"Social",docgenInfo:Social_Social.__docgenInfo,path:"src/components/Social/index.js"});var footer_Base=function Base(){return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(Innovation_Innovation,null),react_default.a.createElement(Legal_Legal,null))},footer_ASUFooter=function ASUFooter(_ref){var social=_ref.social,contact=_ref.contact;return react_default.a.createElement("footer",{role:"contentinfo"},social&&react_default.a.createElement(Social_Social,{social:social}),contact&&react_default.a.createElement(Contact_Contact,{contact:contact}),react_default.a.createElement(footer_Base,null))};footer_ASUFooter.displayName="ASUFooter",footer_ASUFooter.propTypes={social:Object(prop_types.shape)(Social_Social.propTypes),contact:Object(prop_types.shape)(Contact_Contact.propTypes)},footer_ASUFooter.__docgenInfo={description:'@param {import("./core/models/types").ASUFooter} props\n@returns {JSX.Element}',methods:[],displayName:"ASUFooter",props:{social:{description:"",type:{name:"shape",value:"Social.propTypes",computed:!0},required:!1},contact:{description:"",type:{name:"shape",value:"Contact.propTypes",computed:!0},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/footer.js"]={name:"ASUFooter",docgenInfo:footer_ASUFooter.__docgenInfo,path:"src/footer.js"});__webpack_exports__.default={title:"UDS/ASU Footer",component:footer_ASUFooter};var footer_stories_Template=function Template(args){return react_default.a.createElement(footer_ASUFooter,args)};footer_stories_Template.displayName="Template";var Default=footer_stories_Template.bind({});Default.args={};var UnitLogo=footer_stories_Template.bind({});UnitLogo.args={social:{logoUrl:"https://www.asu.edu",unitLogo:endorsedLogo_default.a,mediaLinks:{facebook:"https://facebook.com",twitter:"https://twitter.com/?lang=en",instagram:"https://instagram.com",linkedIn:"https://www.linkedin.com/",youtube:"https://www.youtube.com/"}}};var OneColumnNoLogo=footer_stories_Template.bind({});OneColumnNoLogo.args={contact:{title:"Complete Name of College, School or Unit Title Should Go Here",contactLink:"#",contributionLink:"#"}};var OneColumn=footer_stories_Template.bind({});OneColumn.args=Object.assign({},UnitLogo.args,OneColumnNoLogo.args);var TwoColumns=footer_stories_Template.bind({});TwoColumns.args=Object.assign({},OneColumn.args,{contact:Object.assign({},OneColumn.args.contact,{columns:[{title:"Column Two",links:[{url:"#",title:"link",text:"Biological and Health Systems Computing"},{url:"#",title:"link",text:"Informatics and Decision Systems Electrical"},{url:"#",title:"link",text:"Computer and Energy Matter"},{url:"#",title:"link",text:"Transport and Energy Sustainability and the Built Environment"},{url:"#",title:"link",text:"The Polytechnic School"}]}]})});var ThreeColumns=footer_stories_Template.bind({});ThreeColumns.args=Object.assign({},TwoColumns.args,{contact:Object.assign({},TwoColumns.args.contact,{columns:[].concat(toConsumableArray_default()(TwoColumns.args.contact.columns),[{title:"Column Three",links:[{url:"#",title:"link",text:"Biological and Health Systems Computing"},{url:"#",title:"link",text:"Informatics and Decision Systems Electrical"},{url:"#",title:"link",text:"Computer and Energy Matter"},{url:"#",title:"link",text:"Transport and Energy Sustainability and the Built Environment"},{url:"#",title:"link",text:"The Polytechnic School"}]}])})});var FourColumns=footer_stories_Template.bind({});FourColumns.args=Object.assign({},ThreeColumns.args,{contact:Object.assign({},ThreeColumns.args.contact,{columns:[].concat(toConsumableArray_default()(ThreeColumns.args.contact.columns),[{title:"Column Four",links:[{url:"#",title:"link",text:"Biological and Health Systems Computing"},{url:"#",title:"link",text:"Informatics and Decision Systems Electrical"},{url:"#",title:"link",text:"Computer and Energy Matter"},{url:"#",title:"link",text:"Transport and Energy Sustainability and the Built Environment"},{url:"#",title:"link",text:"The Polytechnic School"}]}])})});var FiveColumns=footer_stories_Template.bind({});FiveColumns.args=Object.assign({},FourColumns.args,{contact:Object.assign({},FourColumns.args.contact,{columns:[].concat(toConsumableArray_default()(FourColumns.args.contact.columns),[{title:"Column Five",links:[{url:"#",title:"link",text:"Biological and Health Systems Computing"},{url:"#",title:"link",text:"Informatics and Decision Systems Electrical"},{url:"#",title:"link",text:"Computer and Energy Matter"},{url:"#",title:"link",text:"Transport and Energy Sustainability and the Built Environment"},{url:"#",title:"link",text:"The Polytechnic School"}]}])})});var SixColumns=footer_stories_Template.bind({});SixColumns.args=Object.assign({},FiveColumns.args,{contact:Object.assign({},FiveColumns.args.contact,{columns:[].concat(toConsumableArray_default()(FiveColumns.args.contact.columns),[{title:"Column Six",links:[{url:"#",title:"link",text:"Biological and Health Systems Computing"},{url:"#",title:"link",text:"Informatics and Decision Systems Electrical"},{url:"#",title:"link",text:"Computer and Energy Matter"},{url:"#",title:"link",text:"Transport and Energy Sustainability and the Built Environment"},{url:"#",title:"link",text:"The Polytechnic School"}]}])})})},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("../../node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("../../node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("../../node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("../../node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("../../node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("../../node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,2,3]]]);