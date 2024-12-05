import{j as e}from"./jsx-runtime-Dtp4yoXy.js";import{r as a,a as A}from"./index-iql2cimc.js";import{P as n}from"./index-DamiE3XO.js";import{t as D}from"./googleAnalytics-4Pcl4n6_.js";import{q as O}from"./styled-components.browser.esm-Cua4idQ2.js";import{M as V}from"./index-B56RiGoX.js";import"./_commonjsHelpers-uqKOVeGF.js";const z=O.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`,I=({hidePrev:s,hideNext:p,clickPrev:o,clickNext:i})=>e.jsxs(z,{children:[!s&&e.jsxs("button",{className:"scroll-control-prev",type:"button",onClick:o,tabIndex:-1,children:[e.jsx("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),e.jsx("span",{className:"visually-hidden",children:"Previous"})]}),!p&&e.jsxs("button",{className:"scroll-control-next",type:"button",onClick:i,tabIndex:-1,children:[e.jsx("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),e.jsx("span",{className:"visually-hidden",children:"Next"})]})]});I.propTypes={hidePrev:n.bool,hideNext:n.bool,clickPrev:n.func.isRequired,clickNext:n.func.isRequired};I.__docgenInfo={description:"",methods:[],displayName:"NavControls",props:{hidePrev:{description:"",type:{name:"bool"},required:!1},hideNext:{description:"",type:{name:"bool"},required:!1},clickPrev:{description:"",type:{name:"func"},required:!0},clickNext:{description:"",type:{name:"func"},required:!0}}};const C=a.forwardRef(function(p,o){const{id:i,selected:l,title:g,selectTab:h,leftKeyPressed:j,rightKeyPressed:c,icon:u}=p,m=a.useRef(null);a.useImperativeHandle(o,()=>({focus(){m.current.focus()},scrollIntoView(){var f,w,v,N,q,y,P;const d=((f=m.current)==null?void 0:f.offsetWidth)/2+m.current.offsetLeft,S=((v=(w=m.current)==null?void 0:w.offsetParent)==null?void 0:v.scrollLeft)+((q=(N=m.current)==null?void 0:N.offsetParent)==null?void 0:q.offsetWidth)/2;(P=(y=m.current)==null?void 0:y.offsetParent)==null||P.scrollBy({left:d-S})}}),[]);const k=d=>{d.keyCode===37?(d.preventDefault(),j()):d.keyCode===39&&(d.preventDefault(),c())};return e.jsxs("a",{ref:m,className:`nav-item nav-link ${l?"active":""}`,id:i,href:`#nav-${i}`,role:"tab","aria-controls":`nav-${i}`,"aria-selected":l,onClick:d=>h(d,i,g),onKeyDown:k,tabIndex:l?"":"-1",children:[g," ",u&&e.jsx("i",{className:`${u==null?void 0:u[0]} fa-${u==null?void 0:u[1]} me-1`})]})});C.propTypes={id:n.string.isRequired,selected:n.bool.isRequired,title:n.string.isRequired,selectTab:n.func.isRequired,leftKeyPressed:n.func.isRequired,rightKeyPressed:n.func.isRequired,icon:n.arrayOf(n.string)};C.__docgenInfo={description:"",methods:[{name:"focus",docblock:null,modifiers:[],params:[],returns:null},{name:"scrollIntoView",docblock:null,modifiers:[],params:[],returns:null}],displayName:"TabHeader",props:{id:{description:"",type:{name:"string"},required:!0},selected:{description:"",type:{name:"bool"},required:!0},title:{description:"",type:{name:"string"},required:!0},selectTab:{description:"",type:{name:"func"},required:!0},leftKeyPressed:{description:"",type:{name:"func"},required:!0},rightKeyPressed:{description:"",type:{name:"func"},required:!0},icon:{description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1}}};function B(){const s=a.useRef({}),p=a.useCallback(o=>i=>{s.current[o]=i},[]);return[s,p]}const b=({id:s,bgColor:p,selected:o,children:i})=>o&&e.jsx("div",{className:`tab-pane fade show ${o?"show active":""} ${p==="bg-dark"?"text-white":""}`,id:`nav-${s}`,role:"tabpanel","aria-labelledby":`nav-${s}-tab`,children:i});b.propTypes={id:n.string.isRequired,bgColor:n.string,selected:n.bool,children:n.oneOfType([n.array,n.element])};const R=({initialTab:s="",children:p,bgColor:o="",onTabChange:i=l=>{}})=>{const l=A.Children.toArray(p),g=a.useRef(!1),[h,j]=a.useState(s&&s!=="null"?s:l[0].props.id),c=a.useRef(null),[u,m]=B(),k=t=>{var r;i(t),(r=u.current[t])==null||r.focus(),j(t)},[d,S]=a.useState(0),[f,w]=a.useState();a.useEffect(()=>{const t=()=>{S(c.current.scrollLeft)};return c.current.addEventListener("scroll",t),t(),()=>{c.current&&c.current.removeEventListener("scroll",t)}},[f]),a.useEffect(()=>{const t=()=>{w(c.current.scrollWidth-c.current.offsetWidth)};return window.addEventListener("resize",t),t(),()=>{c.current&&window.removeEventListener("resize",t)}},[]),a.useEffect(()=>{var t;(t=u.current[h])==null||t.scrollIntoView()},[h]),a.useEffect(()=>{g.current&&s&&s!=="null"&&h!==s&&j(s)},[s]),a.useEffect(()=>{g.current=!0},[]);const v=t=>{D({event:"select",action:"click",name:"onclick",type:"carousel",region:"main content",text:t})},N=t=>{D({event:"link",action:"click",name:"onclick",type:"internal link",text:t})},q=l.map(t=>A.cloneElement(t,{bgColor:o,selected:h===t.props.id})),y=t=>{const r=c.current,x=r.scrollWidth-r.clientWidth;let T=r.scrollLeft+200*t;T=Math.max(0,Math.min(x,T)),r.scrollTo({left:T,behavior:"smooth"})},P=(t,r,x)=>{N(x),t.preventDefault(),k(r)},H=(t=!0)=>{const r=l.length,x=t?1:-1,_=l.findIndex(W=>W.props.id===h),T=l[(r+_+x)%r].props.id;k(T)};let E="uds-tabbed-panels";return o==="bg-dark"&&(E+=" uds-tabbed-panels-dark"),e.jsxs("div",{className:o,children:[e.jsxs("nav",{className:E,children:[e.jsx("div",{className:"nav nav-tabs",role:"tablist",ref:c,children:l.map((t,r)=>e.jsx(C,{ref:m(t.props.id),id:t.props.id,title:t.props.title,selected:h===t.props.id,selectTab:P,leftKeyPressed:()=>H(!1),rightKeyPressed:()=>H(),icon:t.props.icon,index:r},t.props.id))}),e.jsx(I,{hidePrev:d<=0,hideNext:d>=f,clickPrev:()=>{y(-1),v("left chevron")},clickNext:()=>{y(1),v("right chevron")}})]}),e.jsx("div",{className:"tab-content",tabIndex:0,role:"tabpanel",id:"nav-tabContent",children:q})]})};R.propTypes={initialTab:n.string,children:n.arrayOf(n.element).isRequired,bgColor:n.string,onTabChange:n.func};R.__docgenInfo={description:"",methods:[],displayName:"TabbedPanels",props:{initialTab:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},bgColor:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},onTabChange:{defaultValue:{value:"_ => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{description:"",type:{name:"arrayOf",value:{name:"element"}},required:!0}}};b.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{id:{description:"",type:{name:"string"},required:!0},bgColor:{description:"",type:{name:"string"},required:!1},selected:{description:"",type:{name:"bool"},required:!1},children:{description:"",type:{name:"union",value:[{name:"array"},{name:"element"}]},required:!1}}};const ee={title:"Components/TabbedPanels",component:R},G=()=>e.jsx(V,{children:e.jsx("div",{className:"row no-gutters",children:e.jsx("div",{className:"col uds-full-width",children:e.jsxs(R,{children:[e.jsx(b,{id:"home",title:"Home long tab",children:e.jsxs("div",{children:["1 - Home long tab - This is an ordinary paragraph that is long enough to to to wrap to multiple lines so that you can see how spacing eos et accusam et justo duo dolores et ea rebu.",e.jsx("br",{}),"Stet clita kasd gubergren, no sea takimata sanctus est Lorem."]})}),e.jsx(b,{id:"profile",title:"Profile long tab",children:e.jsxs("div",{children:["2 - Home long tab - This is an ordinary paragraph that is long enough to to to wrap to multiple lines so that you can see how spacing eos et accusam et justo duo dolores et ea rebu.",e.jsx("br",{}),"Stet clita kasd gubergren, no sea takimata sanctus est Lorem."]})}),e.jsx(b,{id:"contact",title:"Contact us is a long tab",children:e.jsxs("div",{children:["3 - Home long tab - This is an ordinary paragraph that is long enough to to to wrap to multiple lines so that you can see how spacing eos et accusam et justo duo dolores et ea rebu.",e.jsx("br",{}),"Stet clita kasd gubergren, no sea takimata sanctus est Lorem."]})}),e.jsx(b,{id:"another",title:"Another tab, long tab",children:e.jsxs("div",{children:["4 - Home long tab - This is an ordinary paragraph that is long enough to to to wrap to multiple lines so that you can see how spacing eos et accusam et justo duo dolores et ea rebu.",e.jsx("br",{}),"Stet clita kasd gubergren, no sea takimata sanctus est Lorem."]})}),e.jsx(b,{id:"another-2",title:"Another tab, long tab",children:e.jsxs("div",{children:["5 - Home long tab - This is an ordinary paragraph that is long enough to to to wrap to multiple lines so that you can see how spacing eos et accusam et justo duo dolores et ea rebu.",e.jsx("br",{}),"Stet clita kasd gubergren, no sea takimata sanctus est Lorem."]})}),e.jsx(b,{id:"another-3",title:"Another tab, long tab",children:e.jsxs("div",{children:["6 - Home long tab - This is an ordinary paragraph that is long enough to to to wrap to multiple lines so that you can see how spacing eos et accusam et justo duo dolores et ea rebu.",e.jsx("br",{}),"Stet clita kasd gubergren, no sea takimata sanctus est Lorem."]})})]})})})}),L=G.bind({});var K,$,M;L.parameters={...L.parameters,docs:{...(K=L.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <MemoryRouter>
      <div className="row no-gutters">
        <div className="col uds-full-width">
          <TabbedPanels>
            <Tab id="home" title="Home long tab">
              <div>
                1 - Home long tab - This is an ordinary paragraph that is long
                enough to to to wrap to multiple lines so that you can see how
                spacing eos et accusam et justo duo dolores et ea rebu.
                <br />
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
              </div>
            </Tab>
            <Tab id="profile" title="Profile long tab">
              <div>
                2 - Home long tab - This is an ordinary paragraph that is long
                enough to to to wrap to multiple lines so that you can see how
                spacing eos et accusam et justo duo dolores et ea rebu.
                <br />
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
              </div>
            </Tab>
            <Tab id="contact" title="Contact us is a long tab">
              <div>
                3 - Home long tab - This is an ordinary paragraph that is long
                enough to to to wrap to multiple lines so that you can see how
                spacing eos et accusam et justo duo dolores et ea rebu.
                <br />
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
              </div>
            </Tab>
            <Tab id="another" title="Another tab, long tab">
              <div>
                4 - Home long tab - This is an ordinary paragraph that is long
                enough to to to wrap to multiple lines so that you can see how
                spacing eos et accusam et justo duo dolores et ea rebu.
                <br />
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
              </div>
            </Tab>
            <Tab id="another-2" title="Another tab, long tab">
              <div>
                5 - Home long tab - This is an ordinary paragraph that is long
                enough to to to wrap to multiple lines so that you can see how
                spacing eos et accusam et justo duo dolores et ea rebu.
                <br />
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
              </div>
            </Tab>
            <Tab id="another-3" title="Another tab, long tab">
              <div>
                6 - Home long tab - This is an ordinary paragraph that is long
                enough to to to wrap to multiple lines so that you can see how
                spacing eos et accusam et justo duo dolores et ea rebu.
                <br />
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
              </div>
            </Tab>
          </TabbedPanels>
        </div>
      </div>
    </MemoryRouter>;
}`,...(M=($=L.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};const te=["Default"];export{L as Default,te as __namedExportsOrder,ee as default};
