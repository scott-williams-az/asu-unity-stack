/*! For license information please see stories-atoms-images-images-templates-stories.f6524049.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_asu_unity_bootstrap_theme=self.webpackChunk_asu_unity_bootstrap_theme||[]).push([[1855],{"./stories/atoms/images/images.templates.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LargeImageCaptionComponent:()=>LargeImageCaptionComponent,LargeImageNoCaptionComponent:()=>LargeImageNoCaptionComponent,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var _shared_components_Layout__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../shared/components/Layout.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Atoms/Images/Templates",decorators:[_shared_components_Layout__WEBPACK_IMPORTED_MODULE_1__.ln],args:{dropShadow:!1},argTypes:{dropShadow:{name:"Drop Shadow",control:{type:"boolean"}}}},LargeImageNoCaptionComponent=({dropShadow})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"uds-img "+(dropShadow?"uds-img-drop-shadow":""),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{src:"https://source.unsplash.com/random/1200x750",className:"img-fluid",alt:"Random image. REPLACE with appropriate alt text for accessibility.",width:"1200",height:"750",loading:"lazy",decoding:"async",fetchpriority:"high"})});LargeImageNoCaptionComponent.displayName="LargeImageNoCaptionComponent";const LargeImageCaptionComponent=({dropShadow})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"uds-img "+(dropShadow?"uds-img-drop-shadow":""),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("figure",{className:"figure uds-figure",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{src:"https://source.unsplash.com/random/800x600",className:"uds-img figure-img img-fluid",alt:"Random image with caption below. REPLACE with appropriate alt text for accessibility.",width:"800",height:"600",loading:"lazy",decoding:"async",fetchpriority:"high"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("figcaption",{className:"figure-caption uds-figure-caption",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"uds-caption-text",children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium …"})})]})});LargeImageCaptionComponent.displayName="LargeImageCaptionComponent",LargeImageNoCaptionComponent.parameters={...LargeImageNoCaptionComponent.parameters,docs:{...LargeImageNoCaptionComponent.parameters?.docs,source:{originalSource:'({\n  dropShadow\n}) => {\n  return <div className={`uds-img ${dropShadow ? "uds-img-drop-shadow" : ""}`}>\n      <img src="https://source.unsplash.com/random/1200x750" className="img-fluid" alt="Random image. REPLACE with appropriate alt text for accessibility." width="1200" height="750" loading="lazy" decoding="async" fetchpriority="high" />\n    </div>;\n}',...LargeImageNoCaptionComponent.parameters?.docs?.source}}},LargeImageCaptionComponent.parameters={...LargeImageCaptionComponent.parameters,docs:{...LargeImageCaptionComponent.parameters?.docs,source:{originalSource:'({\n  dropShadow\n}) => {\n  return <div className={`uds-img ${dropShadow ? "uds-img-drop-shadow" : ""}`}>\n      <figure className="figure uds-figure">\n        <img src="https://source.unsplash.com/random/800x600" className="uds-img figure-img img-fluid" alt="Random image with caption below. REPLACE with appropriate alt text for accessibility." width="800" height="600" loading="lazy" decoding="async" fetchpriority="high" />\n        <figcaption className="figure-caption uds-figure-caption">\n          <span className="uds-caption-text">\n            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean\n            commodo ligula eget dolor. Aenean massa. Cum sociis natoque\n            penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n            Donec quam felis, ultricies nec, pellentesque eu, pretium &hellip;\n          </span>\n        </figcaption>\n      </figure>\n    </div>;\n}',...LargeImageCaptionComponent.parameters?.docs?.source}}};const __namedExportsOrder=["LargeImageNoCaptionComponent","LargeImageCaptionComponent"]},"../../shared/components/Layout.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{VP:()=>Column,mc:()=>Container,Dl:()=>LoremContent,ln:()=>defaultDecorator,hv:()=>fullLayoutDecorator,Th:()=>htmlRootDecorator});var classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),jsx_runtime=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/react/jsx-runtime.js"));const Base=({children})=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children});Base.propTypes={children:prop_types_default().oneOfType([prop_types_default().arrayOf(prop_types_default().node),prop_types_default().node,prop_types_default().string])},Base.__docgenInfo={description:"",methods:[],displayName:"Base",props:{children:{description:"",type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"},{name:"string"}]},required:!1}}};const FullLayout=({children})=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("div",{className:"row g-0",children:(0,jsx_runtime.jsx)("div",{id:"html-root",className:"col uds-full-width",children})})});FullLayout.displayName="FullLayout",FullLayout.propTypes={...Base.propTypes};const Container=({children,className="container",...rest})=>(0,jsx_runtime.jsx)("div",{className,...rest,children:(0,jsx_runtime.jsx)("div",{className:"row",children})});Container.displayName="Container",Container.propTypes={children:Base.propTypes.children};const ContainerFluid=({children,className="container-fluid mt-2",...rest})=>(0,jsx_runtime.jsx)(Container,{className,...rest,children});ContainerFluid.displayName="ContainerFluid",ContainerFluid.propTypes={...Container.propTypes};const Column=({children,className="",col="12",...rest})=>{const colInt=parseInt(col,10);return(0,jsx_runtime.jsx)("div",{...rest,className:classnames_default()(className,{col:0===colInt,"col-12":12===colInt,"col-xl-3 col-lg-4 col-md-5 col-sm-12":3===colInt,"col-lg-4 col-md-5 col-sm-12":4===colInt,"col-md-6 col-sm-12":6===colInt,"col-lg-8 col-md-7 col-sm-12":8===colInt,"col-xl-9 col-lg-8 col-md-7 col-sm-12":9===colInt}),children})};Column.displayName="Column",Column.propTypes={children:Base.propTypes.children,col:prop_types_default().oneOf(["0","3","4","6","8","9","12"])};const DefaultContainer=({children,...rest})=>(0,jsx_runtime.jsx)(Container,{children:(0,jsx_runtime.jsx)(Column,{...rest,children})});DefaultContainer.displayName="DefaultContainer",DefaultContainer.propTypes={children:Base.propTypes.children};const LoremContent=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("h2",{children:"Ligula aenean leo porttitor eu conseq"}),(0,jsx_runtime.jsxs)("p",{children:["Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"," ",(0,jsx_runtime.jsx)("strong",{children:"strong"}),". Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede"," ",(0,jsx_runtime.jsx)("a",{className:"external ext",href:"#",children:"link"})," ","mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi."]}),(0,jsx_runtime.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."}),(0,jsx_runtime.jsx)("h2",{children:"Aenean commodo ligula eget dolor aenean massa"}),(0,jsx_runtime.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."}),(0,jsx_runtime.jsxs)("ul",{className:"uds-list",children:[(0,jsx_runtime.jsx)("li",{children:"Lorem ipsum dolor sit amet consectetuer."}),(0,jsx_runtime.jsx)("li",{children:"Aenean commodo ligula eget dolor."}),(0,jsx_runtime.jsx)("li",{children:"Aenean massa cum sociis natoque penatibus."})]}),(0,jsx_runtime.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."}),(0,jsx_runtime.jsxs)("blockquote",{children:["Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"," ",(0,jsx_runtime.jsx)("strong",{children:"strong"}),". Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In ",(0,jsx_runtime.jsx)("em",{children:"em"}),"enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam"," ",(0,jsx_runtime.jsx)("a",{className:"external ext",href:"#",children:"link"})," ","dictum felis eu pede mollis pretium."]}),(0,jsx_runtime.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."})]}),fullLayoutDecorator=(story,context)=>(0,jsx_runtime.jsx)(FullLayout,{children:story(context)});fullLayoutDecorator.displayName="fullLayoutDecorator";const defaultDecorator=(story,context)=>(0,jsx_runtime.jsx)(DefaultContainer,{id:"html-root",children:story(context)});defaultDecorator.displayName="defaultDecorator";const htmlRootDecorator=(story,context)=>(0,jsx_runtime.jsx)("div",{id:"html-root",children:story(context)});htmlRootDecorator.displayName="htmlRootDecorator",FullLayout.__docgenInfo={description:"",methods:[],displayName:"FullLayout",props:{children:{description:"",type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"},{name:"string"}]},required:!1}}},Container.__docgenInfo={description:"",methods:[],displayName:"Container",props:{className:{defaultValue:{value:'"container"',computed:!1},required:!1},children:{description:"",type:{name:"custom",raw:"Base.propTypes.children"},required:!1}}},ContainerFluid.__docgenInfo={description:"",methods:[],displayName:"ContainerFluid",props:{className:{defaultValue:{value:'"container-fluid mt-2"',computed:!1},required:!1},children:{description:"",type:{name:"custom",raw:"Base.propTypes.children"},required:!1}}},Column.__docgenInfo={description:"",methods:[],displayName:"Column",props:{className:{defaultValue:{value:'""',computed:!1},required:!1},col:{defaultValue:{value:'"12"',computed:!1},description:"",type:{name:"enum",value:[{value:'"0"',computed:!1},{value:'"3"',computed:!1},{value:'"4"',computed:!1},{value:'"6"',computed:!1},{value:'"8"',computed:!1},{value:'"9"',computed:!1},{value:'"12"',computed:!1}]},required:!1},children:{description:"",type:{name:"custom",raw:"Base.propTypes.children"},required:!1}}},DefaultContainer.__docgenInfo={description:"",methods:[],displayName:"DefaultContainer",props:{children:{description:"",type:{name:"custom",raw:"Base.propTypes.children"},required:!1}}},LoremContent.__docgenInfo={description:"",methods:[],displayName:"LoremContent"},fullLayoutDecorator.__docgenInfo={description:"",methods:[],displayName:"fullLayoutDecorator"},defaultDecorator.__docgenInfo={description:"",methods:[],displayName:"defaultDecorator"},htmlRootDecorator.__docgenInfo={description:"",methods:[],displayName:"htmlRootDecorator"}},"../../node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);