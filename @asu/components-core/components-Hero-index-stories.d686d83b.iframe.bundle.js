/*! For license information please see components-Hero-index-stories.d686d83b.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_asu_components_core=self.webpackChunk_asu_components_core||[]).push([[519],{"./src/components/Hero/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HeroLarge:()=>HeroLarge,HeroLongTitle:()=>HeroLongTitle,HeroMedium:()=>HeroMedium,HeroSmall:()=>HeroSmall,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("../../node_modules/react/index.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),shared_prop_types=__webpack_require__("./src/core/models/shared-prop-types.js");const HeroImage=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.img`
  width: 100%;
`;function storyHeroHtmlTemplate({image,title,contents}){return console.log({image,title,contents}),react.createElement("div",null,"TODO: to be implemented")}function headingHeroHtmlTemplate({image,subTitle,title,contents,contentsColor}){const highlightColor={gold:"highlight-gold",black:"highlight-black",white:"highlight-white",undefined:""},textColor={black:"text-dark",white:"text-white",undefined:""};return react.createElement("div",{className:classnames_default()("uds-hero",{[{small:"uds-hero-sm",medium:"uds-hero-md",large:"uds-hero-lg",undefined:""}[image?.size]]:image?.size})},react.createElement(HeroImage,{className:"hero",src:image?.url,alt:image?.altText,"data-testid":"hero-image"}),subTitle&&react.createElement("div",{role:"doc-subtitle","data-testid":"hero-subtitle"},react.createElement("span",{className:classnames_default()({[textColor[subTitle.color]]:subTitle.color,[highlightColor[subTitle.highlightColor]]:subTitle.highlightColor})},subTitle.text)),title&&react.createElement("h1",{style:{maxWidth:title.maxWidth||""},"data-testid":"hero-title"},react.createElement("span",{className:classnames_default()({[textColor[title.color]]:title.color,[highlightColor[title.highlightColor]]:title.highlightColor})},title.text)),contents&&react.createElement("div",{"data-testid":"hero-content",className:classnames_default()("content",{[textColor[contentsColor]]:contentsColor})},contents.map(((content,index)=>react.createElement("p",{key:`content-${index}`},content.text)))))}storyHeroHtmlTemplate.displayName="storyHeroHtmlTemplate",headingHeroHtmlTemplate.displayName="headingHeroHtmlTemplate";const Hero=props=>{const type=props.type||"heading-hero";return{"heading-hero":()=>headingHeroHtmlTemplate(props),"story-hero":()=>storyHeroHtmlTemplate(props),undefined:()=>(console.error(`the type '${type}' is not supported by the 'Hero' component.`),null)}[type]()};Hero.propTypes={type:prop_types_default().oneOf(["heading-hero","story-hero"]),image:shared_prop_types.NN,title:shared_prop_types.z,subTitle:shared_prop_types.z,contents:prop_types_default().arrayOf(shared_prop_types.z),contentsColor:prop_types_default().string};const index_stories={component:Hero,title:"UDS/Heroes",parameters:{docs:{description:{component:" "}}}},Template=({image,title,contents,contentsColor})=>react.createElement(Hero,{title,image,contents,contentsColor});Template.displayName="Template";const HeroSmall=Template.bind({});HeroSmall.args={image:{url:"https://source.unsplash.com/WLUHO9A_xik/800x400?a=1",altText:"Hero image",size:"small"},title:{text:"Heading with a long title 1",highlightColor:"gold"}},HeroSmall.parameters={docs:{description:{story:" "}}};const HeroLongTitle=Template.bind({});HeroLongTitle.args={image:{url:"https://source.unsplash.com/WLUHO9A_xik/800x400?a=1",altText:"Hero image",size:"small"},title:{text:"Heading with a long title 2",highlightColor:"gold",maxWidth:"100%"}},HeroLongTitle.parameters={docs:{description:{story:" "}}};const HeroMedium=Template.bind({});HeroMedium.args={image:{url:"https://source.unsplash.com/WLUHO9A_xik/800x400?a=1",altText:"Hero image",size:"medium"},title:{text:"Heading 1",highlightColor:"black"},contentsColor:"white",contents:[{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}]},HeroMedium.parameters={docs:{description:{story:" "}}};const HeroLarge=Template.bind({});HeroLarge.args={image:{url:"https://source.unsplash.com/WLUHO9A_xik/800x400?a=1",altText:"Hero image",size:"large"},title:{text:"Heading 1",color:"white"},contentsColor:"white",contents:[{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}]},HeroLarge.parameters={docs:{description:{story:" "}}},HeroSmall.parameters={...HeroSmall.parameters,docs:{...HeroSmall.parameters?.docs,source:{originalSource:"({\n  image,\n  title,\n  contents,\n  contentsColor\n}) => <Hero title={title} image={image} contents={contents} contentsColor={contentsColor} />",...HeroSmall.parameters?.docs?.source},description:{story:"@type {{ args: HeroProps, parameters: object }}",...HeroSmall.parameters?.docs?.description}}},HeroLongTitle.parameters={...HeroLongTitle.parameters,docs:{...HeroLongTitle.parameters?.docs,source:{originalSource:"({\n  image,\n  title,\n  contents,\n  contentsColor\n}) => <Hero title={title} image={image} contents={contents} contentsColor={contentsColor} />",...HeroLongTitle.parameters?.docs?.source},description:{story:"@type {{ args: HeroProps, parameters: object }}",...HeroLongTitle.parameters?.docs?.description}}},HeroMedium.parameters={...HeroMedium.parameters,docs:{...HeroMedium.parameters?.docs,source:{originalSource:"({\n  image,\n  title,\n  contents,\n  contentsColor\n}) => <Hero title={title} image={image} contents={contents} contentsColor={contentsColor} />",...HeroMedium.parameters?.docs?.source},description:{story:"@type {{ args: HeroProps, parameters: object }}",...HeroMedium.parameters?.docs?.description}}},HeroLarge.parameters={...HeroLarge.parameters,docs:{...HeroLarge.parameters?.docs,source:{originalSource:"({\n  image,\n  title,\n  contents,\n  contentsColor\n}) => <Hero title={title} image={image} contents={contents} contentsColor={contentsColor} />",...HeroLarge.parameters?.docs?.source},description:{story:"@type {{ args: HeroProps, parameters: object }}",...HeroLarge.parameters?.docs?.description}}};const __namedExportsOrder=["HeroSmall","HeroLongTitle","HeroMedium","HeroLarge"]},"./src/core/models/shared-prop-types.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NN:()=>imagePropType,X6:()=>accordionCardPropTypes,z:()=>contentPropType});var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);const imagePropType=prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({url:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,altText:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,cssClass:prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),size:prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(["small","medium","large"])}),contentPropType=prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({text:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,maxWidth:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,cssClass:prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),highlightColor:prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(["gold","black"])}),accordionCardPropTypes=prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({color:prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(["gold","maroon","gray","dark"]),content:prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({icon:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,header:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,body:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string})})},"../../node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);
//# sourceMappingURL=components-Hero-index-stories.d686d83b.iframe.bundle.js.map