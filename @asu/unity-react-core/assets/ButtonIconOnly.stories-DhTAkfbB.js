import{j as n}from"./jsx-runtime-DYhP7AZq.js";import"./index-CwmfiNUm.js";import{P as e}from"./index-DBu9mXg_.js";import{t as I}from"./googleAnalytics-CUCQpEMg.js";const j={name:"onclick",event:"link",action:"click",type:"internal link",region:"main content"},c=({color:l,icon:t,innerRef:N,onClick:d,size:O,cardTitle:x})=>{const D=T=>{I({...j,text:T,section:x}),d==null||d()};return n.jsx("button",{type:"button",className:`btn btn-circle btn-circle-alt-${l} ${O==="large"&&"btn-circle-large"}`,ref:N,onClick:()=>D(`${t==null?void 0:t[1]} icon`),"aria-label":"Close",children:n.jsx("i",{className:`${t==null?void 0:t[0]} fa-${t==null?void 0:t[1]}`})})};c.propTypes={color:e.oneOf(["white","gray","black"]),icon:e.arrayOf(e.string),innerRef:e.oneOfType([e.object,e.func,e.string]),onClick:e.func,cardTitle:e.string,size:e.oneOf(["large","small"])};c.defaultProps={color:"gray",icon:void 0,innerRef:void 0,onClick:void 0,size:"small",cardTitle:""};c.__docgenInfo={description:`@param {ButtonIconOnlyProps} props
@returns {JSX.Element}`,methods:[],displayName:"ButtonIconOnly",props:{color:{defaultValue:{value:'"gray"',computed:!1},description:"Color the button based on the background color",type:{name:"enum",value:[{value:'"white"',computed:!1},{value:'"gray"',computed:!1},{value:'"black"',computed:!1}]},required:!1},icon:{defaultValue:{value:"undefined",computed:!0},description:"React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']",type:{name:"arrayOf",value:{name:"string"}},required:!1},innerRef:{defaultValue:{value:"undefined",computed:!0},description:`ref will only get you a reference to the Button component, use innerRef to
get a reference to the DOM element (for things like focus management).`,type:{name:"union",value:[{name:"object"},{name:"func"},{name:"string"}]},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"Event handler function for `<button>`",type:{name:"func"},required:!1},size:{defaultValue:{value:'"small"',computed:!1},description:"Button size",type:{name:"enum",value:[{value:'"large"',computed:!1},{value:'"small"',computed:!1}]},required:!1},cardTitle:{defaultValue:{value:'""',computed:!1},description:"Card title",type:{name:"string"},required:!1}}};const E={title:"Components/ButtonIconOnly",component:c,parameters:{docs:{description:{component:`The ButtonIconOnly component can be used to generate UDS-compliant \`<button>\` DOM
        elements.

## Usage

The ButtonIconOnly component will output \`<button>\` tags. you must provide an event handler function
for the \`onClick\` prop.

View component examples and source code below.
        `}}}},i=l=>{l.preventDefault()},u=l=>n.jsx("div",{className:"container-fluid",children:n.jsx("div",{className:"row",children:n.jsx("div",{className:"col col-sm-12 p-3",children:n.jsx(c,{...l})})})}),s=u.bind({});s.args={color:"white",icon:["fas","times"],onClick:i};const o=u.bind({});o.args={color:"white",icon:["fas","times"],onClick:i};o.parameters={docs:{description:{story:`
    const handleClick = e => {
      e.preventDefault();
      alert("The button was clicked.");
    };

    <Button
      color: "white"
      icon: ["fas", "times"]
      onClick: {handleClick}
    />Default Button</Button>`},source:{code:`
      const handleClick = e => {
  e.preventDefault();
  alert("The button was clicked.");
};

<Button
  color: "white"
  icon: ["fas", "times"]
  onClick: {handleClick}
/>Default Button</Button>`}}};const a=u.bind({});a.args={color:"white",icon:["fas","chevron-right"],onClick:i,size:"large"};a.parameters={docs:{description:{story:`
    const handleClick = e => {
      e.preventDefault();
      alert("The button was clicked.");
    };

    <Button
      color: "white"
      icon: ["fas", "chevron-right"]
      onClick: {handleClick}
      size: "large"
    />Next Button</Button>`},source:{code:`
      const handleClick = e => {
  e.preventDefault();
  alert("The button was clicked.");
};

<Button
  color: "white"
  icon: ["fas", "chevron-right"]
  onClick: {handleClick}
  size: "large"
/>Next Button</Button>`}}};const r=u.bind({});r.args={color:"white",icon:["fas","chevron-left"],onClick:i,size:"large"};r.parameters={docs:{description:{story:`
    const handleClick = e => {
      e.preventDefault();
      alert("The button was clicked.");
    };

    <Button
      color: "white"
      icon: ["fas", "chevron-left"]
      onClick: {handleClick}
      size: "large"
    />Prev Button</Button>`},source:{code:`
      const handleClick = e => {
  e.preventDefault();
  alert("The button was clicked.");
};

<Button
  color: "white"
  icon: ["fas", "chevron-left"]
  onClick: {handleClick}
  size: "large"
/>Prev Button</Button>`}}};var m,p,f;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => <div className="container-fluid">
    <div className="row">
      <div className="col col-sm-12 p-3">
        <ButtonIconOnly {...args} />
      </div>
    </div>
  </div>`,...(f=(p=s.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var v,h,g;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`args => <div className="container-fluid">
    <div className="row">
      <div className="col col-sm-12 p-3">
        <ButtonIconOnly {...args} />
      </div>
    </div>
  </div>`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var k,B,y;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`args => <div className="container-fluid">
    <div className="row">
      <div className="col col-sm-12 p-3">
        <ButtonIconOnly {...args} />
      </div>
    </div>
  </div>`,...(y=(B=a.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var b,C,w;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`args => <div className="container-fluid">
    <div className="row">
      <div className="col col-sm-12 p-3">
        <ButtonIconOnly {...args} />
      </div>
    </div>
  </div>`,...(w=(C=r.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};const R=["DefaultButton","CloseButton","NextButton","PrevButton"];export{o as CloseButton,s as DefaultButton,a as NextButton,r as PrevButton,R as __namedExportsOrder,E as default};
