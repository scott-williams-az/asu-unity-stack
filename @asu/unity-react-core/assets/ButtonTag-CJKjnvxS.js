import{j as g}from"./jsx-runtime-Dtp4yoXy.js";import{c as y}from"./index-DqAnBlJf.js";import{P as e}from"./index-DamiE3XO.js";import"./index-iql2cimc.js";import"./purify.es-D39PUcnS.js";import{t as v}from"./googleAnalytics-BRRah8iq.js";const h={name:"onclick",event:"link",action:"click",type:"internal link",region:"main content"},r=({label:l,cardTitle:i,ariaLabel:s,color:t,disabled:d,element:o,innerRef:f,href:u,onClick:a,...c})=>{const m=y("btn","btn-tag",{"btn-tag-alt-white":t==="white","btn-tag-alt-gray":t==="gray","btn-tag-alt-dark":t==="dark",disabled:d});let n=o;u&&o==="button"&&(n="a");const p=b=>{v({...h,text:b,section:i}),a==null||a()};return g.jsx(n,{type:n==="button"&&a?"button":void 0,...c,className:m,href:u,ref:f,onClick:()=>p(l),"aria-label":s,children:l})};r.propTypes={label:e.string,cardTitle:e.string,ariaLabel:e.string,color:e.oneOf(["white","gray","dark"]),disabled:e.bool,element:e.oneOfType([e.func,e.string,e.shape({$$typeof:e.symbol,render:e.func}),e.arrayOf(e.oneOfType([e.func,e.string,e.shape({$$typeof:e.symbol,render:e.func})]))]),href:e.string,innerRef:e.oneOfType([e.object,e.func,e.string]),onClick:e.func};r.defaultProps={label:"",cardTitle:"",ariaLabel:void 0,color:"gray",disabled:void 0,element:"button",href:void 0,innerRef:void 0,onClick:void 0};r.__docgenInfo={description:`@param {ButtonTagProps} props
@returns {JSX.Element}`,methods:[],displayName:"ButtonTag",props:{label:{defaultValue:{value:'""',computed:!1},description:"Button tag label",type:{name:"string"},required:!1},cardTitle:{defaultValue:{value:'""',computed:!1},description:"Card title",type:{name:"string"},required:!1},ariaLabel:{defaultValue:{value:"undefined",computed:!0},description:"ARIA label for accessibility",type:{name:"string"},required:!1},color:{defaultValue:{value:'"gray"',computed:!1},description:"Button background color",type:{name:"enum",value:[{value:'"white"',computed:!1},{value:'"gray"',computed:!1},{value:'"dark"',computed:!1}]},required:!1},disabled:{defaultValue:{value:"undefined",computed:!0},description:"Disable the button?",type:{name:"bool"},required:!1},element:{defaultValue:{value:'"button"',computed:!1},description:`Pass in a Component to override default button element.
    For example: react-router Link`,type:{name:"union",value:[{name:"func"},{name:"string"},{name:"shape",value:{$$typeof:{name:"symbol",required:!1},render:{name:"func",required:!1}}},{name:"arrayOf",value:{name:"union",value:[{name:"func"},{name:"string"},{name:"shape",value:{$$typeof:{name:"symbol",required:!1},render:{name:"func",required:!1}}}]}}]},required:!1},href:{defaultValue:{value:"undefined",computed:!0},description:"Link target url; will cause button to be rendered as `<a>` link",type:{name:"string"},required:!1},innerRef:{defaultValue:{value:"undefined",computed:!0},description:`ref will only get you a reference to the Button component, use innerRef to
get a reference to the DOM element (for things like focus management).`,type:{name:"union",value:[{name:"object"},{name:"func"},{name:"string"}]},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"Event handler function for `<button>`",type:{name:"func"},required:!1}}};export{r as B};
