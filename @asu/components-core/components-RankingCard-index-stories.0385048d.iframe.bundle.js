/*! For license information please see components-RankingCard-index-stories.0385048d.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_asu_components_core=self.webpackChunk_asu_components_core||[]).push([[143],{"../../node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}__webpack_require__.d(__webpack_exports__,{A:()=>_extends})},"./src/components/RankingCard/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Large:()=>Large,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),shared=__webpack_require__("../../shared/index.js"),Image=__webpack_require__("./src/components/Image/index.js");const gaDefaultObject={name:"onclick",event:"link",action:"click",type:"internal link",region:"main content"},AVAILABLE_GA_ACTIONS_OPEN="open",AVAILABLE_GA_ACTIONS_CLOSE="close",AVAILABLE_SIZES_SMALL="small",isSmallSize=size=>size===AVAILABLE_SIZES_SMALL,ImageWrapper=({size,image,imageAlt})=>isSmallSize(size)?react.createElement("div",{className:"image-wrapper"},react.createElement(Image._,{src:image,alt:imageAlt,fetchPriority:"high"})):react.createElement(Image._,{src:image,alt:imageAlt,fetchPriority:"high"});ImageWrapper.propTypes={size:prop_types_default().oneOf(["small","large"]),image:prop_types_default().string.isRequired,imageAlt:prop_types_default().string.isRequired};const CitationWrapper=({heading,citation})=>react.createElement("div",{className:"citation"},react.createElement("h4",null,heading),react.createElement("p",null,"— ",citation));CitationWrapper.displayName="CitationWrapper",CitationWrapper.propTypes={heading:prop_types_default().string.isRequired,citation:prop_types_default().string.isRequired};const InfoLayerWrapper=({imageSize,body,heading,readMoreLink})=>{const[open,setOpen]=(0,react.useState)(!1),uniqueId=`info-layer-${Math.floor(1e5*Math.random())}`,handleButtonClick=event=>{"click"!==event.type&&"Enter"!==event.key&&" "!==event.key||(setOpen(!open),(0,shared.u_)({...gaDefaultObject,text:"Expand ranking",action:open?AVAILABLE_GA_ACTIONS_OPEN:AVAILABLE_GA_ACTIONS_CLOSE,section:heading}))};return react.createElement("div",{className:classnames_default()("info-layer",{active:open}),"data-testid":"info-layer",id:uniqueId},react.createElement("div",{className:"content"},react.createElement("div",{className:classnames_default()("header",{closed:isSmallSize(imageSize)&&!open})},isSmallSize(imageSize)&&react.createElement("p",{dangerouslySetInnerHTML:(0,shared.eD)(body)}),!isSmallSize(imageSize)&&react.createElement(react.Fragment,null,react.createElement("button",{onClick:handleButtonClick,className:"btn-expand",type:"button","aria-expanded":open,"aria-controls":uniqueId},react.createElement("h4",null,heading),react.createElement("i",{className:"fas fa-chevron-up"}))),isSmallSize(imageSize)&&react.createElement(react.Fragment,null,react.createElement("button",{onClick:handleButtonClick,className:"btn btn-expand",type:"button","aria-expanded":open,"aria-controls":uniqueId},react.createElement("span",{className:"visually-hidden"},heading),react.createElement("i",{className:"fas fa-chevron-up"})))),!isSmallSize(imageSize)&&react.createElement("p",{dangerouslySetInnerHTML:(0,shared.eD)(body)}),readMoreLink&&react.createElement("a",{href:readMoreLink,className:"read-more",onClick:()=>{(0,shared.u_)({...gaDefaultObject,section:heading,text:"read more"})}},"Read more ",react.createElement("span",{className:"visually-hidden"},heading),react.createElement("span",{className:"fas icon-small fa-arrow-right","aria-hidden":"true"}))))};InfoLayerWrapper.displayName="InfoLayerWrapper",InfoLayerWrapper.propTypes={imageSize:prop_types_default().oneOf(["small","large"]),body:prop_types_default().string.isRequired,heading:prop_types_default().string.isRequired,readMoreLink:prop_types_default().string};const RankingCard=({imageSize="large",image,imageAlt,heading,body,readMoreLink="",citation})=>react.createElement("div",{className:classnames_default()("card-ranking",{"large-image":"large"===imageSize,"small-image":"small"===imageSize})},react.createElement(ImageWrapper,{size:imageSize,image,imageAlt}),isSmallSize(imageSize)&&react.createElement(CitationWrapper,{heading,citation}),react.createElement(InfoLayerWrapper,{imageSize,body,heading,readMoreLink}));RankingCard.displayName="RankingCard",RankingCard.propTypes={imageSize:prop_types_default().oneOf(["small","large"]).isRequired,image:prop_types_default().string.isRequired,imageAlt:prop_types_default().string.isRequired,heading:prop_types_default().string.isRequired,body:prop_types_default().string.isRequired,readMoreLink:prop_types_default().string,citation:prop_types_default().string},RankingCard.__docgenInfo={description:"",methods:[],displayName:"RankingCard",props:{imageSize:{defaultValue:{value:'"large"',computed:!1},description:"Size of ranking card",type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"large"',computed:!1}]},required:!1},readMoreLink:{defaultValue:{value:'""',computed:!1},description:"Link for read more",type:{name:"string"},required:!1},image:{description:"Ranking card image",type:{name:"string"},required:!0},imageAlt:{description:"Card header image alt text",type:{name:"string"},required:!0},heading:{description:"Ranking card heading",type:{name:"string"},required:!0},body:{description:"Ranking card body content",type:{name:"string"},required:!0},citation:{description:"Ranking card citation content (Required for small size only)",type:{name:"string"},required:!1}}};var assets=__webpack_require__("../../shared/assets/index.js");const index_stories={title:"UDS/Ranking Card",component:RankingCard},Template=args=>react.createElement("div",{className:"container"},react.createElement("div",{className:classnames_default()("row","row-spaced","pt-2","pb-2")},react.createElement("div",{className:classnames_default()("col","col-12","col-md-6","col-lg-4")},react.createElement(RankingCard,args))));Template.displayName="Template";const Large=Template.bind({});Large.args={imageSize:"large",image:(0,assets.Ww)(),imageAlt:"Image alt text",heading:"Ranking title goes here, under the photo",body:"ASU has topped U.S. News & World Report’s “Most Innovative Schools list since the inception of the category in 2016. ASU again placed ahead of Stanford and MIT on the list, based on a survey of peers. College presidents, provosts and admissions deans around the country nominated up to 10 colleges or universities that are making the most innovative improvements.",readMoreLink:"https://www.asu.edu/"};const Small=Template.bind({});Small.args={imageSize:"small",image:(0,assets.Ww)(),imageAlt:"Image alt text",heading:"Ranking title goes here, under the photo",body:"ASU has topped U.S. News & World Report’s “Most Innovative Schools list since the inception of the category in 2016. ASU again placed ahead of Stanford and MIT on the list, based on a survey of peers. College presidents, provosts and admissions deans around the country nominated up to 10 colleges or universities that are making the most innovative improvements.",readMoreLink:"https://www.asu.edu/",citation:"Citation of the ranking should go under the headline, regular body style text"},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:'args => <div className="container">\n    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>\n      <div className={classNames("col", "col-12", "col-md-6", "col-lg-4")}>\n        <RankingCard {...args} />\n      </div>\n    </div>\n  </div>',...Large.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'args => <div className="container">\n    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>\n      <div className={classNames("col", "col-12", "col-md-6", "col-lg-4")}>\n        <RankingCard {...args} />\n      </div>\n    </div>\n  </div>',...Small.parameters?.docs?.source}}};const __namedExportsOrder=["Large","Small"]},"./src/components/Image/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_:()=>Image});var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_shared__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../shared/index.js"),_shared_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../shared/utils/index.js");const Image=({src,alt,cssClasses,loading="lazy",decoding="async",dataTestId,fetchPriority="auto",width,height,cardLink,title,caption,captionTitle,border,dropShadow})=>{const imageProps={src,alt,loading,decoding,fetchpriority:fetchPriority,...cssClasses?.length>0&&{className:(0,_shared__WEBPACK_IMPORTED_MODULE_2__.A8)(cssClasses)},...dataTestId&&{"data-testid":dataTestId},...width&&{width},...height&&{height}},borderAndDropShadowClasses=classnames__WEBPACK_IMPORTED_MODULE_0___default()("uds-img",{borderless:!border,"uds-img-drop-shadow":dropShadow}),renderImage=classes=>{const combinedClasses=classes?`${imageProps.className} ${classes}`:imageProps.className;return cardLink?react__WEBPACK_IMPORTED_MODULE_1__.createElement("a",{href:cardLink},react__WEBPACK_IMPORTED_MODULE_1__.createElement("img",(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__.A)({},imageProps,{className:combinedClasses})),react__WEBPACK_IMPORTED_MODULE_1__.createElement("span",{className:"visually-hidden"},title)):react__WEBPACK_IMPORTED_MODULE_1__.createElement("img",(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__.A)({},imageProps,{className:combinedClasses}))};return react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,caption?react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:borderAndDropShadowClasses},react__WEBPACK_IMPORTED_MODULE_1__.createElement("figure",{className:"figure uds-figure"},renderImage(),caption&&react__WEBPACK_IMPORTED_MODULE_1__.createElement("figcaption",{className:"figure-caption uds-figure-caption"},captionTitle&&react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3",null,captionTitle),react__WEBPACK_IMPORTED_MODULE_1__.createElement("span",{className:"uds-caption-text",dangerouslySetInnerHTML:(0,_shared_utils__WEBPACK_IMPORTED_MODULE_3__.eD)(caption)})))):renderImage(borderAndDropShadowClasses))};Image.propTypes={src:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string.isRequired,alt:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string.isRequired,cssClasses:prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),loading:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(["lazy","eager"]),decoding:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(["sync","async","auto"]),fetchPriority:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(["auto","high","low"]),width:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,height:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,dataTestId:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,cardLink:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,title:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,caption:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,captionTitle:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,border:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,dropShadow:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool},Image.__docgenInfo={description:"@param {ImageComponentProps} props\n@returns {JSX.Element}",methods:[],displayName:"Image",props:{loading:{defaultValue:{value:'"lazy"',computed:!1},description:"Image loading mode",type:{name:"enum",value:[{value:'"lazy"',computed:!1},{value:'"eager"',computed:!1}]},required:!1},decoding:{defaultValue:{value:'"async"',computed:!1},description:"Image decoding mode",type:{name:"enum",value:[{value:'"sync"',computed:!1},{value:'"async"',computed:!1},{value:'"auto"',computed:!1}]},required:!1},fetchPriority:{defaultValue:{value:'"auto"',computed:!1},description:"Image fetch priority mode",type:{name:"enum",value:[{value:'"auto"',computed:!1},{value:'"high"',computed:!1},{value:'"low"',computed:!1}]},required:!1},src:{description:"Image source (We keep the same name as in the whole project)",type:{name:"string"},required:!0},alt:{description:"Image alt text",type:{name:"string"},required:!0},cssClasses:{description:"Array classes for the image",type:{name:"arrayOf",value:{name:"string"}},required:!1},width:{description:"Width of the image",type:{name:"string"},required:!1},height:{description:"Height of the image",type:{name:"string"},required:!1},dataTestId:{description:"",type:{name:"string"},required:!1},cardLink:{description:"",type:{name:"string"},required:!1},title:{description:"",type:{name:"string"},required:!1},caption:{description:"",type:{name:"string"},required:!1},captionTitle:{description:"",type:{name:"string"},required:!1},border:{description:"",type:{name:"bool"},required:!1},dropShadow:{description:"",type:{name:"bool"},required:!1}}}},"../../shared/assets/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ww:()=>imageAny,tO:()=>imageName});var list_namespaceObject={};__webpack_require__.r(list_namespaceObject),__webpack_require__.d(list_namespaceObject,{img01:()=>img01_namespaceObject2,img02:()=>img02_namespaceObject2,img03:()=>img03_namespaceObject2,img04:()=>img04_namespaceObject2,img05:()=>img05_namespaceObject2,img06:()=>img06_namespaceObject2,img07:()=>img07_namespaceObject2,img08:()=>img08_namespaceObject2});const img01_namespaceObject=__webpack_require__.p+"static/media/img01.f45d8ee7.jpg";var img01_namespaceObject2=__webpack_require__.t(img01_namespaceObject);const img02_namespaceObject=__webpack_require__.p+"static/media/img02.09fa1144.jpg";var img02_namespaceObject2=__webpack_require__.t(img02_namespaceObject);const img03_namespaceObject=__webpack_require__.p+"static/media/img03.3a0f86b6.jpg";var img03_namespaceObject2=__webpack_require__.t(img03_namespaceObject);const img04_namespaceObject=__webpack_require__.p+"static/media/img04.15408065.jpg";var img04_namespaceObject2=__webpack_require__.t(img04_namespaceObject);const img05_namespaceObject=__webpack_require__.p+"static/media/img05.f8dd3d16.jpg";var img05_namespaceObject2=__webpack_require__.t(img05_namespaceObject);const img06_namespaceObject=__webpack_require__.p+"static/media/img06.d0a3a261.jpg";var img06_namespaceObject2=__webpack_require__.t(img06_namespaceObject);const img07_namespaceObject=__webpack_require__.p+"static/media/img07.645ee043.jpg";var img07_namespaceObject2=__webpack_require__.t(img07_namespaceObject);const img08_namespaceObject=__webpack_require__.p+"static/media/img08.57970f31.jpg";var img08_namespaceObject2=__webpack_require__.t(img08_namespaceObject);const imageName={anon:__webpack_require__.p+"static/media/anon.a3448db9.png",attendOnline:__webpack_require__.p+"static/media/attend-online.3ea92d3b.jpg",cardsImage:__webpack_require__.p+"static/media/cards-image.cffeb008.jpg",careerOutlook:__webpack_require__.p+"static/media/career-outlook.62b0302a.jpg",faculty:__webpack_require__.p+"static/media/customize-faculty-600.89d2fd47.jpg",honors:__webpack_require__.p+"static/media/customize-honors-600.59b34b2a.jpg",inclusion:__webpack_require__.p+"static/media/customize-inclusion-600.213ada64.jpg",mentor:__webpack_require__.p+"static/media/customize-mentor-600.f595fb63.jpg",programs:__webpack_require__.p+"static/media/customize-programs-600.aebc2588.jpg",research:__webpack_require__.p+"static/media/customize-research-600.93e17ce0.jpg",demo1:__webpack_require__.p+"static/media/demo-phot-1.043ba718.jpeg",demo2:__webpack_require__.p+"static/media/demo-phot-2.997a5629.jpeg",demo3:__webpack_require__.p+"static/media/demo-phot-3.962eefb5.jpeg",dsHeaderUndergrad:__webpack_require__.p+"static/media/ds_header_undergrad.01104454.jpg",exampleImage:__webpack_require__.p+"static/media/example-image.e89fc217.jpg",globalOpportunity:__webpack_require__.p+"static/media/global-opportunity.2f38576d.jpg",hero01:__webpack_require__.p+"static/media/hero01.01cffe5e.jpg",hero02:__webpack_require__.p+"static/media/hero02.acf1aa10.jpg",intro01:__webpack_require__.p+"static/media/intro01.e751bc43.jpg",poly1:__webpack_require__.p+"static/media/poly01.7dd3a5b1.jpg",requestFormInformation:__webpack_require__.p+"static/media/request-form-information.18294df6.jpeg",ws2DefaultImagev01Final:__webpack_require__.p+"static/media/WS2-DefaultImagev01-Final.99bc18b2.png"},_imageArray=Object.values(list_namespaceObject).reduce(((result,val)=>[...result,val.default]),[]),imageArray=[..._imageArray,..._imageArray,..._imageArray,..._imageArray,..._imageArray],imageAny=()=>imageArray[Math.floor(Math.random()*imageArray.length)]},"../../shared/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Sd:()=>utils.Sd,sg:()=>utils.sg,Ar:()=>utils.Ar,d0:()=>utils.d0,eD:()=>utils.eD,A8:()=>utils.A8,nF:()=>utils.nF,u_:()=>trackGAEvent,Ub:()=>useMediaQuery});var react=__webpack_require__("../../node_modules/react/index.js");function useMediaQuery(query){const[matches,setMatches]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{const media=window.matchMedia(query);media.matches!==matches&&setMatches(media.matches);const listener=()=>{setMatches(media.matches)};return media.addEventListener("change",listener),()=>media.removeEventListener("change",listener)}),[matches,query]),matches}var utils=__webpack_require__("../../shared/utils/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);prop_types_default().shape({event:prop_types_default().string,action:prop_types_default().string,name:prop_types_default().string,region:prop_types_default().string,section:prop_types_default().string,component:prop_types_default().string,type:prop_types_default().string,text:prop_types_default().string});const trackGAEvent=({event="",action="",name="",type="",section="",text="",region="",component=""})=>{const{dataLayer}=window,e={event:event.toLowerCase(),action:action.toLowerCase(),name:name.toLowerCase(),type:type.toLowerCase(),region:region.toLowerCase(),section:section.toLowerCase(),text:text.toLowerCase(),component:component.toLowerCase()};dataLayer&&dataLayer.push(e)}},"../../shared/utils/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Sd:()=>createRange,sg:()=>debounce,Ar:()=>iff,d0:()=>queryFirstFocusable,eD:()=>sanitizeDangerousMarkup,A8:()=>spreadClasses,nF:()=>throttle});const iff=(condition,then,otherwise)=>condition?then:otherwise,spreadClasses=classes=>(classes||[]).join(" ");var purify=__webpack_require__("../../node_modules/dompurify/dist/purify.js"),purify_default=__webpack_require__.n(purify);function queryFirstFocusable(targetSelector){return(targetSelector?document.querySelector(targetSelector):document).querySelector('button, [href], input, select, textarea, [tabIndex]:not([tabIndex="-1"])')}const sanitizeDangerousMarkup=content=>({__html:purify_default().sanitize(content)}),createRange=(from,to,stop)=>{let i=from;const range=[];for(;i<to;)i>0&&i<=stop&&range.push(i),i+=1;return range};let throttleTimer=!1;const throttle=(callback,time)=>{throttleTimer||(throttleTimer=!0,setTimeout((()=>{callback(),throttleTimer=!1}),time))};let debounceTimer;const debounce=(callback,time)=>{window.clearTimeout(debounceTimer),debounceTimer=window.setTimeout(callback,time)}},"../../node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);