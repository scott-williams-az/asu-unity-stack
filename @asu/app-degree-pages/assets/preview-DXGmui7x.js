var s=Object.defineProperty;var a=(i,r)=>s(i,"name",{value:r,configurable:!0});import{r as c}from"./index-JpckQOF4.js";import"./_commonjsHelpers-Ii5oIDU0.js";const p=a(i=>{(Array.isArray(i)?i:[i]).forEach(v)},"clearStyles"),v=a(i=>{const r=document.getElementById(i);r&&r.parentElement.removeChild(r)},"clearStyle"),x=a((i,r)=>{const e=document.getElementById(i);if(e)e.innerHTML!==r&&(e.innerHTML=r);else{const g=document.createElement("style");g.setAttribute("id",i),g.innerHTML=r,document.head.appendChild(g)}},"addStyle"),m=a((i,r)=>{var o;const{globals:e,parameters:g}=r,t=(o=g==null?void 0:g.uds)==null?void 0:o.columns,n=`${e==null?void 0:e.columns}`=="true"&&(t==null?void 0:t.disable)!==!0,l=c.useMemo(()=>{const d=r.viewMode==="docs"?`#anchor--${r.id} .docs-story`:".sb-show-main";return`
    ${d}>#storybook-root{opacity:.7}
      ${d} {
        background-size:
            calc(6 * var(--griddiv) - var(--gridgap)  ) 1px,
            calc(5 * var(--griddiv)  - var(--gridgap)) 1px,
            calc(4 * var(--griddiv)  - var(--gridgap)) 1px,
            calc(3 * var(--griddiv)  - var(--gridgap)) 1px,
            calc(2 * var(--griddiv)  - var(--gridgap)) 1px,
            calc(1 * var(--griddiv)  - var(--gridgap)) 1px;
        background-blend-mode: normal;
        background-image:
            linear-gradient(90deg,var(--gridbg) var(--gridcol), var(--gridbg2) -1px),
            linear-gradient(90deg,var(--gridbg) var(--gridcol), var(--gridbg2) -1px),
            linear-gradient(90deg,var(--gridbg) var(--gridcol), var(--gridbg2) -1px),
            linear-gradient(90deg,var(--gridbg) var(--gridcol), var(--gridbg2) -1px),
            linear-gradient(90deg,var(--gridbg) var(--gridcol), var(--gridbg2) -1px),
/*...*/
/*...*/
            linear-gradient(90deg,var(--gridbg) var(--gridcol), var(--gridbg2) -1px),
            linear-gradient(-90deg,var(--gridbg) var(--gridcol), var(--gridbg2) -1px),
            linear-gradient(-90deg,var(--gridbg) var(--gridcol), var(--gridbg2) -1px),
            linear-gradient(-90deg,var(--gridbg) var(--gridcol), var(--gridbg2) -1px),
            linear-gradient(-90deg,var(--gridbg) var(--gridcol), var(--gridbg2) -1px),
            linear-gradient(-90deg,var(--gridbg) var(--gridcol), var(--gridbg2) 0px),
            linear-gradient(-90deg,var(--gridbg) var(--gridcol), var(--gridbg2) 0px);
        background-repeat: repeat-y;
        background-position: center;
        --gridbg: #ffbbbb;
        --gridbg2: #0000;
        --gridgap: 24px;
        --gridcontainer: calc(100vw - 5rem);
        --gridcontainerpad: calc(var(--gridcontainer) + var(--gridgap));
        --gridcol: calc((var(--gridcontainer) - var(--gridgap) * 11) / 12);
        --griddiv: calc((var(--gridcontainerpad)/6) );
    }

    @media (min-width: 576px) {
        ${d} {
            --gridcontainer: 476px;
        }
    }

    @media (min-width: 768px) {
        ${d} {
            --gridcontainer: 744px;
        }
    }

    @media (min-width: 992px) {
        ${d} {
            --gridcontainer: 968px;
        }
    }
    @media (min-width: 1260px) {
        ${d} {
            --gridcontainer: 1200px;
        }
    }
    `},[r.viewMode,r.id]);return c.useEffect(()=>{const d=r.viewMode==="docs"?`addon-uds-columns-docs-${r.id}`:"addon-uds-columns";if(!n){p(d);return}x(d,l)},[n,l,e]),i()},"withColumns"),h={xxxl:{name:"xxxl",right:"1920px",styles:{width:"1920px",height:"100%"}},_xxxl:{name:"< xxxl",right:"1919px",styles:{width:"1919px",height:"100%"}},xl:{name:"xl",right:"1260px",styles:{width:"1260px",height:"100%"}},_xl:{name:"< xl",right:"1259px",styles:{width:"1259px",height:"100%"}},lg:{name:"lg",right:"992px",styles:{width:"992px",height:"100%"}},_lg:{name:"< lg",right:"991px",styles:{width:"991px",height:"100%"}},md:{name:"md",right:"768px",styles:{width:"768px",height:"100%"}},_md:{name:"< md",right:"767px",styles:{width:"767px",height:"100%"}},sm:{name:"sm",right:"320px",styles:{width:"320px",height:"100%"}},_sm:{name:"< sm",right:"319px",styles:{width:"319px",height:"100%"}}},b={columns:!1},u={viewport:{viewports:h},controls:{expanded:!0},layout:"fullscreen"},y=[m],E={globals:b,parameters:u,decorators:y};export{E as default};
