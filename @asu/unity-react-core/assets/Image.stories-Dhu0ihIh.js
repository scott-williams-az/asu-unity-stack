import{j as n}from"./jsx-runtime-Dtp4yoXy.js";import"./index-iql2cimc.js";import{I as p}from"./Image-Cc2ex8sz.js";import"./_commonjsHelpers-uqKOVeGF.js";import"./index-DqAnBlJf.js";import"./index-DamiE3XO.js";import"./html-utils-rnV9Z5bS.js";import"./purify.es-D39PUcnS.js";import"./googleAnalytics-BRRah8iq.js";const N={title:"Components/Image",component:p,parameters:{docs:{description:{component:"The image component is basically a wrapper for the `<img>` HTML element. It accepts some of the properties available for the native element, but only those that are necessary to function optimally. These properties are documented in the PropTypes object and you can see the specifications there. It is important to note that this component was specifically created for use within the UDS library and its React components, and should not be used directly outside of that context."}}}},o=i=>n.jsx(p,{...i}),e=o.bind({});e.args={src:"https://source.unsplash.com/WLUHO9A_xik/800x600",alt:"Placeholder image",border:!0};const a=o.bind({});a.args={src:"https://source.unsplash.com/WLUHO9A_xik/800x600",alt:"Placeholder image",border:!1};const r=o.bind({});r.args={src:"https://source.unsplash.com/WLUHO9A_xik/800x600",alt:"Placeholder image",caption:"This is a <a href='#'>caption</a>.",captionTitle:"Caption title",border:!0};const t=o.bind({});t.args={src:"https://source.unsplash.com/WLUHO9A_xik/800x600",alt:"Placeholder image",caption:"This is a <a href='#'>caption</a>.",captionTitle:"Caption title",dropShadow:!0,border:!0};const A=i=>n.jsx("div",{style:{display:"grid",gap:"30px",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))"},children:[...Array(20)].map((k,_)=>n.jsx(p,{...i},_))}),s=A.bind({});s.args={alt:"Placeholder image",width:"100%",src:"https://source.unsplash.com/WLUHO9A_xik/800x600"};var c,m,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"args => <Image {...args} />",...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var l,g,h;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"args => <Image {...args} />",...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var u,x,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:"args => <Image {...args} />",...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var y,b,C;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:"args => <Image {...args} />",...(C=(b=t.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var I,W,T;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  return <div style={{
    display: "grid",
    gap: "30px",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))"
  }}>
      {[...Array(20)].map((_, idx) => {
      // eslint-disable-next-line react/no-array-index-key
      return <Image key={idx} {...args} />;
    })}
    </div>;
}`,...(T=(W=s.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};const D=["imageWithNoCaption","imageWithNoCaptionBorderless","imageWithCaption","imageWithCaptionAndDropshadow","GridImages"];export{s as GridImages,D as __namedExportsOrder,N as default,r as imageWithCaption,t as imageWithCaptionAndDropshadow,e as imageWithNoCaption,a as imageWithNoCaptionBorderless};
