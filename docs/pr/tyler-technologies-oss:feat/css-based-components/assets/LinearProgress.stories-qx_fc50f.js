import"./lit-element-Dk2-kgKT.js";import{k as u}from"./lit-html-DZH-Jm0H.js";import{c as S,g as y,s as f}from"./utils-CmNCmodr.js";import"./constants-DjE6emXm.js";import"./linear-progress-BjLGzdmZ.js";const a="forge-linear-progress",L={title:"Components/Linear Progress",render:b=>{const o=S(a,b);return o.setAttribute("aria-label","Linear progress demo"),o},component:a,parameters:{actions:{disable:!0}},argTypes:{...y({tagName:a})},args:{}},e={},r={...f,render:()=>u` <forge-linear-progress determinate progress="0.5" aria-label="Linear progress demo"></forge-linear-progress> `},s={...f,render:()=>u` <forge-linear-progress determinate progress="0.33" buffer="0.66" aria-label="Linear progress buffer demo"></forge-linear-progress> `};var t,n,m;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(m=(n=e.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var i,p,g;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...standaloneStoryParams,
  render: () => {
    return html\` <forge-linear-progress determinate progress="0.5" aria-label="Linear progress demo"></forge-linear-progress> \`;
  }
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var l,d,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...standaloneStoryParams,
  render: () => {
    return html\` <forge-linear-progress determinate progress="0.33" buffer="0.66" aria-label="Linear progress buffer demo"></forge-linear-progress> \`;
  }
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const P=["Demo","Determinate","Buffer"],T=Object.freeze(Object.defineProperty({__proto__:null,Buffer:s,Demo:e,Determinate:r,__namedExportsOrder:P,default:L},Symbol.toStringTag,{value:"Module"}));export{s as B,e as D,T as L,r as a};
