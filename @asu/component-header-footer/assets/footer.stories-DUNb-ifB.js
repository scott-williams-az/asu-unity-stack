import{P as t,p as c,j as e,F as b,f as be,B as ye,g as de,t as a,A as me,q as ve,a as we}from"./googleAnalytics-BlbpRx2p.js";import{r as N}from"./index-B2SEcK1p.js";import"./_commonjsHelpers-B3tUAs5q.js";const ke=""+new URL("endorsedLogo-DPPmUtP1.png",import.meta.url).href,_=({columnIndex:r,column:{title:n,links:o}})=>{const[g,w]=N.useState(!1),ge=typeof window<"u"?window.innerWidth>=1260:!1,[A,he]=N.useState(ge),L=N.useRef(null);N.useEffect(()=>{const s=window.matchMedia("screen and (min-width: 1260px)"),i=U=>he(U.matches);return s.addEventListener("change",i),i(s),()=>s.removeEventListener("change",i)},[]);const fe=s=>{const i=L==null?void 0:L.current;if(!i)return;i.classList.add("collapsing");const U=i.animate([{maxHeight:s?`${i.scrollHeight}px`:"0px"}],{duration:350,easing:"ease-in-out",fill:"forwards"});U.onfinish=()=>{i.classList.remove("collapsing"),s?i.classList.add("show"):i.classList.remove("show")}},xe=()=>{if(A){w(!0);return}w(s=>{const i=!s;return fe(i),i})};return e.jsx("div",{className:"col-xl flex-footer testname-column",children:e.jsxs("div",{className:"card accordion-item desktop-disable-xl",children:[e.jsx("div",{className:"accordion-header",children:e.jsx("div",{className:"h5",children:e.jsxs("button",{id:`footlink-header-${r}`,className:"accordion-button","aria-expanded":g||A,"aria-controls":`footlink-${r}`,onClick:xe,type:"button",disabled:A,children:[n,e.jsx(b,{className:g||A?"open":"",icon:be})]})})}),e.jsx("div",{id:`footlink-${r}`,className:"accordion-body",role:"region","aria-labelledby":`footlink-header-${r}`,ref:L,children:o.map(s=>e.jsx("a",{className:"nav-link",href:s.url,title:s.title,children:s.text},`footlink-${n}-link-${s.text}`))})]})})};_.propTypes={columnIndex:t.number.isRequired,column:c.shape({title:t.string,links:c.arrayOf(c.shape({url:t.string.isRequired,title:t.string,text:t.string.isRequired}))})};_.__docgenInfo={description:`@param {{ columnIndex: number, column: Column }} props
@returns {JSX.Element}`,methods:[],displayName:"ColumnSection",props:{columnIndex:{description:"",type:{name:"number"},required:!0},column:{description:"",type:{name:"shape",value:{title:{name:"string",required:!1},links:{name:"arrayOf",value:{name:"shape",value:{url:{name:"string",required:!0},title:{name:"string",required:!1},text:{name:"string",required:!0}}},required:!1}}},required:!1}}};const F=({contact:{title:r="",contactLink:n="",contributionLink:o="",columns:g}})=>e.jsx("div",{className:"wrapper",id:"wrapper-footer-columns","data-testid":"contact",children:e.jsx("div",{className:"container",id:"footer-columns",children:e.jsxs("div",{className:"row","data-testid":"columns-container",children:[e.jsxs("div",{className:"col-xl-3",id:"info-column",children:[e.jsx("div",{className:"h5",children:r}),n&&e.jsx("p",{className:"contact-link",children:e.jsx("a",{href:n,children:"Contact Us"})}),o&&e.jsx("p",{className:"contribute-button","data-testid":"contact-contribution-link",children:e.jsx(ye,{color:"gold",href:o,text:"Support ASU",classes:"btn"})})]}),g&&g.length&&e.jsx(e.Fragment,{children:g.map((w,R)=>e.jsx(_,{columnIndex:R,column:w},`footlink-${w.title}`))})]})})});F.propTypes={contact:c.shape({title:t.string.isRequired,contactLink:t.string.isRequired,contributionLink:t.string,columns:c.arrayOf(c.shape({title:t.string,links:c.arrayOf(c.shape({url:t.string.isRequired,title:t.string,text:t.string.isRequired}))}))})};F.__docgenInfo={description:`@typedef {import("../../core/models/types").Contact} Contact

@param {{contact: Contact}} props`,methods:[],displayName:"ContactComponent",props:{contact:{description:"",type:{name:"shape",value:{title:{name:"string",required:!0},contactLink:{name:"string",required:!0},contributionLink:{name:"string",required:!1},columns:{name:"arrayOf",value:{name:"shape",value:{title:{name:"string",required:!1},links:{name:"arrayOf",value:{name:"shape",value:{url:{name:"string",required:!0},title:{name:"string",required:!1},text:{name:"string",required:!0}}},required:!1}}},required:!1}}},required:!1}}};const h={MAPS_AND_LOCATIONS:"https://www.asu.edu/about/locations-maps",JOBS:"https://cfo.asu.edu/applicant",DIRECTORY:"https://search.asu.edu/?search-tabs=web_dir_faculty_staff",CONTACT_ASU:"https://www.asu.edu/about/contact",MY_ASU:"https://my.asu.edu/",RANKINGS:"https://www.asu.edu/rankings"},k={COPYRIGHT_AND_TRADEMARK:"https://www.asu.edu/about/copyright-trademark",ACCESSIBILITY_REPORT:"https://accessibility.asu.edu/report",PRIVACY:"https://www.asu.edu/about/privacy",TERMS_OF_USE:"https://www.asu.edu/about/terms-of-use",EMERGENCY:"https://www.asu.edu/emergency/"},f={type:"internal link",section:"secondary footer"},Se=de(),Ne=`${Se}assets/images/innovationLogo.png`,ue=()=>e.jsx("div",{className:"wrapper",id:"wrapper-footer-innovation","data-testid":"innovation",children:e.jsx("div",{className:"container",id:"footer-innovation",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col",children:e.jsxs("div",{className:"d-flex footer-innovation-links",children:[e.jsxs("nav",{className:"nav","aria-label":"University Services",children:[e.jsx("a",{className:"nav-link",href:h.MAPS_AND_LOCATIONS,onFocus:()=>a({...f,text:"maps and locations"}),children:"Maps and Locations"}),e.jsx("a",{className:"nav-link",href:h.JOBS,onFocus:()=>a({...f,text:"jobs"}),children:"Jobs"}),e.jsx("a",{className:"nav-link",href:h.DIRECTORY,onFocus:()=>a({...f,text:"directory"}),children:"Directory"}),e.jsx("a",{className:"nav-link",href:h.CONTACT_ASU,onFocus:()=>a({...f,text:"contact asu"}),children:"Contact ASU"}),e.jsx("a",{className:"nav-link",href:h.MY_ASU,onFocus:()=>a({...f,text:"my asu"}),children:"My ASU"})]}),e.jsx("a",{className:"img-link",href:h.RANKINGS,onFocus:()=>a({...f,text:"#1 in the u.s. for innovation"}),children:e.jsx("img",{src:Ne,alt:"Repeatedly ranked #1 in innovation (ASU ahead of MIT and Stanford), sustainability (ASU ahead of Stanford and UC Berkeley), and global impact (ASU ahead of MIT and Penn State)",width:"459",height:"100",loading:"lazy",decoding:"async"})})]})})})})});ue.__docgenInfo={description:"",methods:[],displayName:"Innovation"};const S={type:"internal link",section:"tertiary footer"},pe=()=>{function r(){try{return window.location.href}catch(n){return console.error(n),""}}return e.jsx("div",{className:"wrapper",id:"wrapper-footer-colophon","data-testid":"legal",children:e.jsx("div",{className:"container",id:"footer-colophon",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col",children:e.jsxs("nav",{className:"nav colophon","aria-label":"University Legal and Compliance",children:[e.jsx("a",{className:"nav-link",href:k.COPYRIGHT_AND_TRADEMARK,onFocus:()=>a({...S,text:"copyright and trademark"}),children:"Copyright and Trademark"}),e.jsx("a",{className:"nav-link",href:`${k.ACCESSIBILITY_REPORT}?a11yref=${r()}`,onFocus:()=>a({...S,text:"accessibility"}),children:"Accessibility"}),e.jsx("a",{className:"nav-link",href:k.PRIVACY,onFocus:()=>a({...S,text:"privacy"}),children:"Privacy"}),e.jsx("a",{className:"nav-link",href:k.TERMS_OF_USE,onFocus:()=>a({...S,text:"terms of use"}),children:"Terms of Use"}),e.jsx("a",{className:"nav-link",href:k.EMERGENCY,onFocus:()=>a({...S,text:"emergency"}),children:"Emergency"})]})})})})})};pe.__docgenInfo={description:"",methods:[],displayName:"Legal"};const Ce={prefix:"fab",iconName:"square-instagram",icon:[448,512,["instagram-square"],"e055","M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"]},je=Ce,qe={prefix:"fab",iconName:"square-youtube",icon:[448,512,[61798,"youtube-square"],"f431","M282 256.2l-95.2-54.1V310.3L282 256.2zM384 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm14.4 136.1c7.6 28.6 7.6 88.2 7.6 88.2s0 59.6-7.6 88.1c-4.2 15.8-16.5 27.7-32.2 31.9C337.9 384 224 384 224 384s-113.9 0-142.2-7.6c-15.7-4.2-28-16.1-32.2-31.9C42 315.9 42 256.3 42 256.3s0-59.7 7.6-88.2c4.2-15.8 16.5-28.2 32.2-32.4C110.1 128 224 128 224 128s113.9 0 142.2 7.7c15.7 4.2 28 16.6 32.2 32.4z"]},Ee=qe,Ae={prefix:"fab",iconName:"square-facebook",icon:[448,512,["facebook-square"],"f082","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]},Le=Ae,Te={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Fe={prefix:"fab",iconName:"square-x-twitter",icon:[448,512,[],"e61a","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"]},Ie=de(),Ue=`${Ie}assets/images/endorsedLogo.png`,x={type:"external link",section:"primary footer"},E=({social:{logoUrl:r,unitLogo:n,mediaLinks:o}})=>e.jsx("div",{className:"wrapper",id:"wrapper-endorsed-footer","data-testid":"social",children:e.jsx("div",{className:"container",id:"endorsed-footer",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md",id:"endorsed-logo",children:e.jsx("a",{href:r,onFocus:()=>a({...x,type:"internal link",text:"asu logo"}),children:e.jsx("img",{src:n,alt:"ASU University Technology Office Arizona State University."})})}),o&&e.jsx("div",{className:"col-md",id:"social-media",children:e.jsxs("nav",{className:"nav","aria-label":"Social Media",children:[o.facebook&&e.jsx("a",{className:"nav-link",href:o.facebook,"data-testid":"facebook",onFocus:()=>a({...x,text:"facebook icon"}),children:e.jsx(b,{title:"Facebook Social Media Icon",icon:Le})}),o.twitter&&e.jsx("a",{className:"nav-link",href:o.twitter,"data-testid":"twitter",onFocus:()=>a({...x,text:"twitter icon"}),children:e.jsx(b,{title:"Twitter Social Media Icon",icon:Fe})}),o.instagram&&e.jsx("a",{className:"nav-link",href:o.instagram,"data-testid":"instagram",onFocus:()=>a({...x,text:"instagram icon"}),children:e.jsx(b,{title:"Instagram Social Media Icon",icon:je})}),o.youtube&&e.jsx("a",{className:"nav-link",href:o.youtube,"data-testid":"youtube",onFocus:()=>a({...x,text:"youtube icon"}),children:e.jsx(b,{title:"YouTube Social Media Icon",icon:Ee})}),o.linkedIn&&e.jsx("a",{className:"nav-link",href:o.linkedIn,"data-testid":"linkedin",onFocus:()=>a({...x,text:"linkedin icon"}),children:e.jsx(b,{title:"LinkedIn Social Media Icon",icon:Te})})]})})]})})});E.propTypes={social:c.shape({unitLogo:t.string.isRequired,mediaLinks:c.shape({facebook:t.string,twitter:t.string,linkedIn:t.string,instagram:t.string,youtube:t.string})})};E.defaultProps={social:{unitLogo:Ue,mediaLinks:{facebook:"",twitter:"",linkedIn:"",instagram:"",youtube:""}}};E.__docgenInfo={description:`@param {{ social: SocialProps }} props
@returns {JSX.Element}`,methods:[],displayName:"Social",props:{social:{defaultValue:{value:`{
  unitLogo: endorsedLogo,
  mediaLinks: {
    facebook: "",
    twitter: "",
    linkedIn: "",
    instagram: "",
    youtube: "",
  },
}`,computed:!1},description:"",type:{name:"shape",value:{unitLogo:{name:"string",required:!0},mediaLinks:{name:"shape",value:{facebook:{name:"string",required:!1},twitter:{name:"string",required:!1},linkedIn:{name:"string",required:!1},instagram:{name:"string",required:!1},youtube:{name:"string",required:!1}},required:!1}}},required:!1}}};const _e=me`
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
`,Re=me`
  display: flex;
  align-items: center;
`,Me=ve.footer`
  // Variables
  --color-divider-darker: #1e1e1e;
  --color-base-white: #ffffff;
  --color-base-grey-2: #e8e8e8;
  --color-base-gold: #ffc627;
  --color-divider-lighter: #393939;
  --color-base-grey-7: #191919;
  --color-base-grey-4: #bfbfbf;

  // Base Styles
  * {
    box-sizing: border-box;
    font-family: Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans,
      sans-serif;
    line-height: 1.5rem;
  }

  .btn,
  a[class^="button-"] {
    text-decoration: none !important;
    padding: 1rem 2rem;
    white-space: nowrap;
    line-height: 1rem;
    width: max-content !important;
    font-size: 1rem;
    display: inline-block;
    &:active {
      transform: scale(0.95);
    }
  }

  h5,
  .h5 {
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: -0.015rem;
    margin: 1rem 0;
  }

  .nav {
    display: flex;
    flex-wrap: wrap;
    ${_e}
  }

  // Footer Sections
  #wrapper-endorsed-footer,
  #wrapper-footer-columns {
    background: var(--color-divider-darker);

    h5,
    .h5 {
      color: var(--color-base-white);
      font-weight: 700;
    }
  }

  #wrapper-endorsed-footer {
    a {
      color: var(--color-base-grey-2);
    }

    & + #wrapper-footer-columns {
      border-top: 2px solid var(--color-divider-lighter);
    }
  }

  #wrapper-footer-innovation {
    background-color: var(--color-base-gold);
  }

  #wrapper-footer-colophon {
    background-color: var(--color-base-grey-2);
  }

  #wrapper-footer-innovation,
  #wrapper-footer-colophon {
    a {
      margin-right: 1.5rem;
      text-decoration: none;
      color: var(--color-base-grey-7);
    }
  }

  // Endorsed Footer
  #endorsed-logo {
    --endorsed-logo-display: block;
    --endorsed-logo-padding-top: 12px;
    --endorsed-logo-padding-bottom: 12px;
    --endorsed-logo-img-max-height: 100%;
    --endorsed-logo-img-width: 100%;
    padding-top: var(--endorsed-logo-padding-top);
    padding-bottom: var(--endorsed-logo-padding-bottom);
    display: var(--endorsed-logo-display);
    align-items: center;

    img {
      width: var(--endorsed-logo-img-width);
      height: auto;
      max-height: var(--endorsed-logo-img-max-height);
      transform: scale(1.13);
      padding: 0;
      margin: 0;
    }

    @media (min-width: 768px) {
      --endorsed-logo-display: flex;
      --endorsed-logo-padding-top: 20px;
      --endorsed-logo-padding-bottom: 20px;
      --endorsed-logo-img-max-height: 6rem;
      --endorsed-logo-img-width: auto;
    }
  }

  #endorsed-footer {
    #social-media {
      .nav {
        padding-bottom: 1.5rem;

        @media (min-width: 768px) {
          padding: 2.5rem 0;
          justify-content: flex-end;
        }
      }

      .nav-link {
        padding: 0.75rem 1rem 0.5rem 1rem;
        font-size: 2rem;
        color: var(--color-base-grey-4);
        line-height: 1;
        padding-top: 7px;

        &:first-child {
          @media (max-width: 575.98px) {
            padding-left: 0;
          }
        }

        &:last-child {
          @media (min-width: 768px) {
            padding-right: 0;
          }
        }
      }
    }
  }

  // Footer Columns
  #footer-columns {
    #info-column {
      .contact-link {
        margin-bottom: 1.5rem;

        a {
          color: var(--color-base-grey-2);
          line-height: 1.5rem;
          text-decoration: underline;

          &:hover {
            color: var(--color-base-gold);
          }
        }
      }

      .contribute-button {
        margin-bottom: 1.5rem;
      }
    }

    .flex-footer {
      .accordion-item,
      .accordion-header,
      .accordion-body {
        background: var(--color-divider-darker);
        color: var(--color-base-white);
        border: 0;
      }

      .accordion-header {
        border-top: 1px solid var(--color-divider-lighter);
        padding-left: 0;

        h5,
        .h5 {
          margin: 0;
          a,
          .accordion-button {
            ${Re}
            justify-content: space-between;
          }
        }

        a,
        .accordion-button {
          color: var(--color-base-grey-2);
          padding: 1.5rem 0;
          text-decoration: none;
          background: none;
          border: none;
          font: inherit;
          color: inherit;
          cursor: pointer;
          text-align: inherit;
          width: 100%;

          &:hover {
            background: var(--color-divider-darker);
          }

          svg,
          fa-chevron-up {
            margin-left: 1rem;
            transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
            margin-left: 0.5rem;
            font-size: 0.75rem;

            &.open {
              transform: rotate(180deg);
            }
          }
        }

        @media (min-width: 1260px) {
          border-top: 0;
          padding: 0;
          a,
          .accordion-button {
            padding: 0;
            cursor: default;
          }

          span {
            display: none;
          }
        }
      }

      .accordion-body {
        display: none;
        overflow: hidden;
        padding: 0 0 0 1.5rem;

        &.collapsing {
          display: block;
          max-height: 0px;
        }
        &.show {
          display: block;
          max-height: 1000px;
        }

        .nav-link {
          color: var(--color-base-grey-2);
          padding: 0 0 1rem;
          line-height: 1.5rem;
          text-decoration: none;
          display: block;

          &:hover,
          &:focus {
            color: var(--color-base-gold);
            text-decoration: underline;
          }
        }

        @media (min-width: 1260px) {
          padding: 0;
          display: block;
          min-height: fit-content;
        }
      }
    }

    @media (min-width: 1260px) {
      padding-bottom: 3rem;
      padding-top: 3rem;
      h5,
      .h5 {
        margin: 0 0 1.5rem 0;
      }
      .accordion-header:has(.h5, h5) {
        h5,
        .h5 {
          margin: 0 0 1.5rem 0;
        }
      }
    }
  }

  // Footer Innovation
  #footer-innovation {
    .footer-innovation-links {
      justify-content: space-between;
      align-items: center;
      font-weight: 700;

      .img-link {
        order: 2;
        margin-right: 0;
        transform: translate(1.5rem, 0);

        img {
          height: 100px;
          width: auto;
        }
      }

      .nav-link {
        padding: 0;
      }

      @media (max-width: 991.98px) {
        flex-direction: column;
        padding: 0.5rem 0;

        .img-link {
          margin-right: 0;
          transform: none;

          img {
            width: 100%;
            height: auto;
            order: -1;
          }
        }

        .nav {
          display: grid;
          grid-template-rows: 1fr 1fr 1fr;
          grid-auto-flow: column;
          justify-items: start;
          width: 100%;

          .nav-link {
            margin-right: 0;
            padding: 0.5rem 0;

            &:nth-child(n + 4) {
              justify-self: end;
            }
          }
        }
      }
    }
  }

  // Footer Colophon
  #wrapper-footer-colophon {
    .colophon {
      margin: 1rem 0;
    }

    .nav-link {
      padding: 0;
    }

    @media (max-width: 767.98px) {
      .nav {
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        grid-auto-flow: column;
        justify-items: start;
        width: 100%;

        .nav-link {
          margin-right: 0;
          padding: 0.5rem 0;

          &:nth-child(n + 4) {
            justify-self: end;
          }
        }
      }
    }
  }

  // Bootstrap Default Stylings
  .row {
    --bs-gutter-x: 24px;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-0.5 * var(--bs-gutter-x));
    margin-left: calc(-0.5 * var(--bs-gutter-x));

    > * {
      flex-shrink: 0;
      width: 100%;
      max-width: 100%;
      padding-right: calc(var(--bs-gutter-x) * 0.5);
      padding-left: calc(var(--bs-gutter-x) * 0.5);
      margin-top: var(--bs-gutter-y);
    }
  }

  .col {
    flex: 1 0 0%;
  }

  .d-flex {
    display: flex;
  }

  .container {
    --bs-gutter-x: 24px;
    --bs-gutter-y: 0;
    width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-right: auto;
    margin-left: auto;
  }

  @media (max-width: 767.98px) {
    .container,
    .container-fluid,
    .container-xl,
    .container-lg,
    .container-md,
    .container-sm {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }

  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }

  @media (min-width: 768px) {
    .container-xl,
    .container-lg,
    .container-md,
    .container-sm,
    .container {
      max-width: 768px;
    }
    .col-md {
      flex: 1 0 0%;
    }
  }

  @media (min-width: 992px) {
    .container-xl,
    .container-lg,
    .container-md,
    .container-sm,
    .container {
      max-width: 992px;
    }
  }

  @media (min-width: 1260px) {
    .col-xl-3 {
      flex: 0 0 auto;
      width: 25%;
    }
    .col-xl {
      flex: 1 0 0%;
    }
    .accordion-item {
      svg,
      .fa-chevron-up {
        display: none;
      }
    }
    .container-xl,
    .container-lg,
    .container-md,
    .container-sm,
    .container {
      max-width: 1224px;
    }
  }
`,Oe=()=>e.jsxs(e.Fragment,{children:[e.jsx(ue,{}),e.jsx(pe,{})]}),I=({social:r,contact:n})=>(N.useEffect(()=>{typeof window<"u"&&we({packageName:"component-StyledFooter",component:"Component Footer",type:"NA",configuration:{social:r,contact:n}})},[]),e.jsxs(Me,{role:"contentinfo",children:[r&&e.jsx(E,{social:r}),n&&e.jsx(F,{contact:n}),e.jsx(Oe,{})]}));I.propTypes={social:c.shape(E.propTypes),contact:c.shape(F.propTypes)};I.__docgenInfo={description:`@param {import("./core/models/types").ASUFooter} props
@returns {JSX.Element}`,methods:[],displayName:"ASUFooter",props:{social:{description:"",type:{name:"shape",value:{social:{name:"shape",value:{unitLogo:{name:"string",required:!0},mediaLinks:{name:"shape",value:{facebook:{name:"string",required:!1},twitter:{name:"string",required:!1},linkedIn:{name:"string",required:!1},instagram:{name:"string",required:!1},youtube:{name:"string",required:!1}},required:!1}},required:!1}}},required:!1},contact:{description:"",type:{name:"shape",value:{contact:{name:"shape",value:{title:{name:"string",required:!0},contactLink:{name:"string",required:!0},contributionLink:{name:"string",required:!1},columns:{name:"arrayOf",value:{name:"shape",value:{title:{name:"string",required:!1},links:{name:"arrayOf",value:{name:"shape",value:{url:{name:"string",required:!0},title:{name:"string",required:!1},text:{name:"string",required:!0}}},required:!1}}},required:!1}},required:!1}}},required:!1}}};const ze={title:"UDS/ASU Footer",component:I},l=r=>e.jsx(I,{...r}),C=l.bind({});C.args={};const y=l.bind({});y.args={social:{logoUrl:"https://www.asu.edu",unitLogo:ke,mediaLinks:{facebook:"https://facebook.com",twitter:"https://twitter.com/?lang=en",instagram:"https://instagram.com",linkedIn:"https://www.linkedin.com/",youtube:"https://www.youtube.com/"}}};const j=l.bind({});j.args={contact:{title:"No props passed should omit the button and the contact link"}};const v=l.bind({});v.args={contact:{title:"Complete Name of College, School or Unit Title Should Go Here",contactLink:"#",contributionLink:"#"}};const p=l.bind({});p.args={...y.args,...v.args};const d=l.bind({});d.args={...p.args,contact:{...p.args.contact,columns:[{title:"Column Two",links:[{url:"#",title:"link",text:"Biological and Health Systems Computing"},{url:"#",title:"link",text:"Informatics and Decision Systems Electrical"},{url:"#",title:"link",text:"Computer and Energy Matter"},{url:"#",title:"link",text:"Transport and Energy Sustainability and the Built Environment"},{url:"#",title:"link",text:"The Polytechnic School"}]}]}};const m=l.bind({});m.args={...d.args,contact:{...d.args.contact,columns:[...d.args.contact.columns,{title:"Column Three",links:[{url:"#",title:"link",text:"Biological and Health Systems Computing"},{url:"#",title:"link",text:"Informatics and Decision Systems Electrical"},{url:"#",title:"link",text:"Computer and Energy Matter"},{url:"#",title:"link",text:"Transport and Energy Sustainability and the Built Environment"},{url:"#",title:"link",text:"The Polytechnic School"}]}]}};const u=l.bind({});u.args={...m.args,contact:{...m.args.contact,columns:[...m.args.contact.columns,{title:"Column Four",links:[{url:"#",title:"link",text:"Biological and Health Systems Computing"},{url:"#",title:"link",text:"Informatics and Decision Systems Electrical"},{url:"#",title:"link",text:"Computer and Energy Matter"},{url:"#",title:"link",text:"Transport and Energy Sustainability and the Built Environment"},{url:"#",title:"link",text:"The Polytechnic School"}]}]}};const T=l.bind({});T.args={...u.args,contact:{...u.args.contact,columns:[...u.args.contact.columns,{title:"Column Five",links:[{url:"#",title:"link",text:"Biological and Health Systems Computing"},{url:"#",title:"link",text:"Informatics and Decision Systems Electrical"},{url:"#",title:"link",text:"Computer and Energy Matter"},{url:"#",title:"link",text:"Transport and Energy Sustainability and the Built Environment"},{url:"#",title:"link",text:"The Polytechnic School"}]}]}};const q=l.bind({});q.args={...T.args,contact:{...T.args.contact,columns:[...T.args.contact.columns,{title:"Column Six",links:[{url:"#",title:"link",text:"Biological and Health Systems Computing"},{url:"#",title:"link",text:"Informatics and Decision Systems Electrical"},{url:"#",title:"link",text:"Computer and Energy Matter"},{url:"#",title:"link",text:"Transport and Energy Sustainability and the Built Environment"},{url:"#",title:"link",text:"The Polytechnic School"}]}]}};var M,O,V;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:"args => <ASUFooter {...args} />",...(V=(O=C.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var D,H,z;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:"args => <ASUFooter {...args} />",...(z=(H=y.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var P,B,$;j.parameters={...j.parameters,docs:{...(P=j.parameters)==null?void 0:P.docs,source:{originalSource:"args => <ASUFooter {...args} />",...($=(B=j.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var Y,G,J;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:"args => <ASUFooter {...args} />",...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,W,X;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:"args => <ASUFooter {...args} />",...(X=(W=p.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Q,Z,ee;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:"args => <ASUFooter {...args} />",...(ee=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,re;m.parameters={...m.parameters,docs:{...(te=m.parameters)==null?void 0:te.docs,source:{originalSource:"args => <ASUFooter {...args} />",...(re=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var oe,ne,ie;u.parameters={...u.parameters,docs:{...(oe=u.parameters)==null?void 0:oe.docs,source:{originalSource:"args => <ASUFooter {...args} />",...(ie=(ne=u.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var se,ce,le;q.parameters={...q.parameters,docs:{...(se=q.parameters)==null?void 0:se.docs,source:{originalSource:"args => <ASUFooter {...args} />",...(le=(ce=q.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};const Pe=["Default","UnitLogo","OneColumnNoLinks","OneColumnNoLogo","OneColumn","TwoColumns","ThreeColumns","FourColumns","SixColumns"];export{C as Default,u as FourColumns,p as OneColumn,j as OneColumnNoLinks,v as OneColumnNoLogo,q as SixColumns,m as ThreeColumns,d as TwoColumns,y as UnitLogo,Pe as __namedExportsOrder,ze as default};
