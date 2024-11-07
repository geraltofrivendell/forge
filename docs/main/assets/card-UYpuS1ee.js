import{C as l,o as g,B as v,p as h,b as p}from"./constants-DjE6emXm.js";const f=`${l}card`,n={RAISED:"raised"},_={...n},d={elementName:f,observedAttributes:n,attributes:_},u=`<template>
  <div class="forge-card" part="root">
    <slot></slot>
  </div>
</template>
`,b=":host{display:block}:host([hidden]){display:none}.forge-card{--_card-background: var(--forge-card-background, var(--forge-theme-surface, #ffffff));--_card-height: var(--forge-card-height, 100%);--_card-width: var(--forge-card-width, 100%);--_card-outline-color: var(--forge-card-outline-color, var(--forge-theme-outline, #e0e0e0));--_card-outline-width: var(--forge-card-outline-width, var(--forge-border-thin, 1px));--_card-outline-style: var(--forge-card-outline-style, solid);--_card-elevation: var(--forge-card-elevation, none);--_card-padding: var(--forge-card-padding, var(--forge-spacing-medium, 16px));--_card-shape: var(--forge-card-shape, calc(var(--forge-shape-medium, 4px) * var(--forge-shape-factor, 1)));--_card-overflow: var(--forge-card-overflow, initial);--_card-raised-elevation: var(--forge-card-raised-elevation, 0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12));--_card-raised-outline-width: var(--forge-card-raised-outline-width, 0)}.forge-card{background:var(--_card-background);border-color:var(--_card-outline-color);border-width:var(--_card-outline-width);border-style:var(--_card-outline-style);border-radius:var(--_card-shape);box-shadow:var(--_card-elevation);box-sizing:border-box;padding:var(--_card-padding);overflow:var(--_card-overflow);height:var(--_card-height);width:var(--_card-width);-webkit-tap-highlight-color:transparent}:host([raised]) .forge-card{--_card-elevation: var(--_card-raised-elevation);--_card-outline-width: var(--_card-raised-outline-width)}:host([no-padding]) .forge-card{--_card-padding: var(--forge-card-padding, 0)}";var w=Object.defineProperty,m=Object.getOwnPropertyDescriptor,x=(r,a,t,o)=>{for(var e=o>1?void 0:o?m(a,t):a,i=r.length-1,s;i>=0;i--)(s=r[i])&&(e=(o?s(a,t,e):s(e))||e);return o&&e&&w(a,t,e),e};let c=class extends v{constructor(){super(),this._raised=!1,h(this,u,b)}static get observedAttributes(){return Object.values(d.observedAttributes)}attributeChangedCallback(r,a,t){switch(r){case d.attributes.RAISED:this.raised=p(t);break}}get raised(){return this._raised}set raised(r){r=!!r,this._raised!==r&&(this._raised=r,this.toggleAttribute(d.attributes.RAISED,this._raised))}};c=x([g({name:d.elementName})],c);
