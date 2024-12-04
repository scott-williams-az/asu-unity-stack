import{j as e}from"./jsx-runtime-Dtp4yoXy.js";import{r as l,a as j}from"./index-iql2cimc.js";import{B as _}from"./ButtonIconOnly-BnYTAOwY.js";import"./_commonjsHelpers-uqKOVeGF.js";import"./datalayer-render-B0tmZ7Om.js";import"./googleAnalytics-BRRah8iq.js";import"./index-DamiE3XO.js";import"./purify.es-D39PUcnS.js";let v=0;const r=({title:t,content:T,triggerElement:b})=>{const[a]=l.useState(`tooltip-${v++}`),y=l.useRef(null);return e.jsxs("span",{className:"uds-tooltip-container",children:[j.cloneElement(b,{ref:y,"aria-describedby":a,tabindex:0}),e.jsxs("div",{role:"tooltip",className:"uds-tooltip-description",id:a,children:[t&&e.jsx("span",{className:"uds-tooltip-heading",children:t}),T]})]})};try{r.displayName="Tooltip",r.__docgenInfo={description:"",displayName:"Tooltip",props:{title:{defaultValue:null,description:"Title or heading.",name:"title",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"Content",name:"content",required:!1,type:{name:"string"}},triggerElement:{defaultValue:null,description:"The element where we will position the dialog beside.",name:"triggerElement",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}}}catch{}const w={title:"Components/Tooltip",component:r,parameters:{docs:{description:{component:`TODO
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role
Keyboard interactions [Escape] should close the tooltip

alignment of tooltip assumes the trigger is icon button

probably limit the triggers to something with a visual inidicator (like button or link)`}}}},i={title:"Header",content:"Content",useExternal:!0},E=t=>e.jsx(r,{...t}),o={render:E.bind({}),args:{...i,triggerElement:e.jsx(_,{useExternal:i.useExternal,icon:["fas","info"]})}},n={render:t=>e.jsxs("div",{children:["This is a ",e.jsx(r,{...t})," sentence."]}),args:{...i,triggerElement:e.jsx("a",{href:"javascript:void(0);",children:"Tooltiptrigger"})}},s={render:E.bind({}),args:{...i,triggerElement:e.jsx("span",{children:"Tooltiptrigger"})}};var p,c,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: tooltipTemplate.bind({}),
  args: {
    ...defaultProps,
    triggerElement: <ButtonIconOnly useExternal={defaultProps.useExternal} icon={["fas", "info"]} />
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,u,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div>This is a <Tooltip {...args} /> sentence.</div>,
  args: {
    ...defaultProps,
    triggerElement: <a href="javascript:void(0);">Tooltiptrigger</a>
  }
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,h,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: tooltipTemplate.bind({}),
  args: {
    ...defaultProps,
    triggerElement: <span>Tooltiptrigger</span>
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const q=["Icon","link","text"];export{o as Icon,q as __namedExportsOrder,w as default,n as link,s as text};
