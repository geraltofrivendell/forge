import{C as T,D as y,E as O,H as A,z as V,B as b,A as D,m as H,c as x,g as P}from"./constants-CYeMfgsl.js";import{B as L,F as N}from"./base-adapter-BhMU2jjH.js";const W=`${T}view-switcher`,p={ROOT:"forge-view-switcher",VIEW_HIDDEN:"forge-view-switcher__view--hidden",VIEW_SWITCHER_SLIDE:"forge-view-switcher--slide",VIEW_SWITCHER_FADE:"forge-view-switcher--fade"},F={ROOT:`.${p.ROOT}`,DEFAULT_SLOT:"slot:not([name])",VIEW_HIDDEN:`.${p.VIEW_HIDDEN}`},R={INDEX:"index",ANIMATION_TYPE:"animation-type"},z={DEFAULT_TRANSITION_DURATION:500},n={elementName:W,attributes:R,classes:p,selectors:F,numbers:z};var c=(o=>(o.Left="left",o.Right="right",o))(c||{}),r=(o=>(o.None="none",o.Slide="slide",o.Fade="fade",o))(r||{});class $ extends L{constructor(e){super(e),this._rootElement=y(e,n.selectors.ROOT),this._slotElement=y(e,n.selectors.DEFAULT_SLOT)}getViewCount(){return this._getViews().length}startViewObserver(e){this._viewObserver=new MutationObserver(e),this._viewObserver.observe(this._component,{childList:!0})}stopViewObserver(){this._viewObserver&&this._viewObserver.disconnect()}initializeSlideViews(e){let i=this._getViews();i.forEach((t,s)=>{if(t.style.removeProperty("opacity"),t.style.removeProperty("display"),s===e){i[e].classList.remove(n.classes.VIEW_HIDDEN),t.style.removeProperty("visibility");return}t.style.transition="none",t.classList.add(n.classes.VIEW_HIDDEN),t.style.visibility="hidden",s>e?t.style.transform="translate3d(100%, 0, 0)":t.style.transform="translate3d(-100%, 0, 0)"}),window.requestAnimationFrame(()=>{i=this._getViews(),i.forEach((t,s)=>{s!==e&&t.style.removeProperty("transition")})})}initializeFadeViews(e){const i=this._getViews();i.forEach((t,s)=>{if(t.style.removeProperty("transform"),t.style.removeProperty("display"),s===e){t.classList.remove(n.classes.VIEW_HIDDEN),t.style.removeProperty("visibility");return}t.classList.add(n.classes.VIEW_HIDDEN),t.style.visibility="hidden"}),i[e]&&(i[e].style.opacity="1")}setActiveView(e){const i=this._getViews();i.forEach((t,s)=>{s!==e&&(t.classList.add(n.classes.VIEW_HIDDEN),t.style.display="none")}),i[e]&&(i[e].classList.remove(n.classes.VIEW_HIDDEN),i[e].style.removeProperty("display"))}hideInactiveViews(e){this._getViews().forEach((t,s)=>{if(t.style.removeProperty("opacity"),t.style.removeProperty("transform"),t.style.removeProperty("visibility"),s===e){t.classList.remove(n.classes.VIEW_HIDDEN);return}t.classList.add(n.classes.VIEW_HIDDEN),t.style.display="none"})}async transitionToView(e,i,t,s){const h=this._getViews(),a=h[e],l=h[i];return new Promise(C=>{l.style.removeProperty("visibility"),window.requestAnimationFrame(()=>{let w;switch(t){case r.Slide:this._slideToView(a,l,s),w="transform";break;case r.Fade:this._fadeToView(a,l),w="opacity";break;default:return}this._animateHeight(a,l),a?a.addEventListener("transitionend",f):l.classList.remove(n.classes.VIEW_HIDDEN);function f(S){S.propertyName===w&&(a.removeEventListener("transitionend",f),l.classList.remove(n.classes.VIEW_HIDDEN),C())}})})}_slideToView(e,i,t){t===c.Left?(e&&(e.style.transform="translate3d(-100%, 0, 0)"),i.style.transform="translate3d(0, 0, 0)"):(e&&(e.style.transform="translate3d(100%, 0, 0)"),i.style.transform="translate3d(0, 0, 0)")}_fadeToView(e,i){e&&(e.style.opacity="0"),i.style.opacity="1"}_animateHeight(e,i){const t=e?this._getViewHeight(e):0,s=this._getViewHeight(i);t!==s&&(this._rootElement.addEventListener("transitionend",this._onRootTransitionEnd.bind(this)),this._setHeight(t),window.requestAnimationFrame(()=>{window.requestAnimationFrame(()=>{this._setHeight(s)})}))}_onRootTransitionEnd(e){e.propertyName==="height"&&(this._rootElement.removeEventListener("transitionend",this._onRootTransitionEnd),this._rootElement.style.removeProperty("height"))}setAnimationType(e){switch(O([n.classes.VIEW_SWITCHER_SLIDE,n.classes.VIEW_SWITCHER_FADE],this._component),e){case r.Slide:this._component.classList.add(n.classes.VIEW_SWITCHER_SLIDE);break;case r.Fade:this._component.classList.add(n.classes.VIEW_SWITCHER_FADE);break}}_getViews(){return this._slotElement.assignedNodes().filter(e=>e.nodeType===1)}_setHeight(e){this._rootElement.style.height=`${e}px`}_getViewHeight(e){let i=0;const t=e.children.length?Array.from(e.children):[e];for(const s of t){const h=window.getComputedStyle(s),a=parseFloat(h.marginTop)+parseFloat(h.marginBottom);i+=Math.ceil(s.offsetHeight+a)}return i}}class M{constructor(e){this._adapter=e,this._viewCount=0,this._viewIndex=0,this._animationType=r.None,this._viewsChangedListener=()=>this._onViewsChanged()}initialize(){this._viewCount=this._adapter.getViewCount(),this._adapter.startViewObserver(this._viewsChangedListener),this._adapter.setAnimationType(this._animationType),this._viewCount&&this._initializeAnimationType()}disconnect(){this._adapter.stopViewObserver()}_initializeAnimationType(){switch(this._animationType){case r.Slide:this._adapter.initializeSlideViews(this._viewIndex);break;case r.Fade:this._adapter.initializeFadeViews(this._viewIndex);break;case r.None:default:this._adapter.hideInactiveViews(this._viewIndex);break}}_onViewsChanged(){if(this._viewCount=this._adapter.getViewCount(),this._viewCount===0&&(this._viewIndex=0),this._viewCount&&this._initializeAnimationType(),this._viewCount>0&&this._viewIndex>=this._viewCount){const e=this._viewIndex;this._viewIndex=this._viewCount>0?this._viewCount-1:0,this._goToView(e,this._viewCount)}}async _goToView(e,i){if(this._viewCount=A(i)?i:this._adapter.getViewCount(),!(!(this._viewIndex>=0&&this._viewIndex<=this._viewCount-1)||e===this._clampedViewIndex(this._viewIndex,this._viewCount)))switch(this._animationType){case r.Slide:const s=this._viewIndex>e?c.Left:c.Right;await this._adapter.transitionToView(e,this._viewIndex,r.Slide,s),this._adapter.initializeSlideViews(this._viewIndex);break;case r.Fade:await this._adapter.transitionToView(e,this._viewIndex,r.Fade),this._adapter.initializeFadeViews(this._viewIndex);break;case r.None:default:this._adapter.setActiveView(this._viewIndex);break}}_clampedViewIndex(e,i){return e<0?e=0:e>i-1&&(e=i>0?i-1:0),e}next(){this.index++}previous(){this.index--}goToStart(){this.index=0}goToEnd(){this.index=this._viewCount-1}get index(){return this._viewIndex}set index(e){if(this._viewIndex!==e){const i=this._viewIndex;this._viewIndex=e,this._goToView(i),this._adapter.setHostAttribute(n.attributes.INDEX,this._viewIndex.toString())}}get animationType(){return this._animationType}set animationType(e){this._animationType!==e&&(this._animationType=e,this._initializeAnimationType(),this._adapter.setAnimationType(this._animationType),this._adapter.setHostAttribute(n.attributes.ANIMATION_TYPE,this._animationType))}}const k=`${T}view`,j={elementName:k},B=`<template>
  <slot></slot>
</template>`,X=":host{display:block}:host([hidden]){display:none}";var q=Object.defineProperty,U=Object.getOwnPropertyDescriptor,Y=(o,e,i,t)=>{for(var s=t>1?void 0:t?U(e,i):e,h=o.length-1,a;h>=0;h--)(a=o[h])&&(s=(t?a(e,i,s):a(s))||s);return t&&s&&q(e,i,s),s};let v=class extends b{constructor(){super(),D(this,B,X)}};v=Y([V({name:j.elementName})],v);const G=`<template>
  <div class="forge-view-switcher" part="root">
    <slot></slot>
  </div>
</template>`,J=".forge-view-switcher{height:var(--forge-view-switcher-height, auto);width:var(--forge-view-switcher-width, auto);position:relative;overflow:hidden;transition:height var(--forge-animation-duration-medium2, .3s) cubic-bezier(.35,0,.25,1)}.forge-view-switcher ::slotted(.forge-view-switcher__view--hidden){position:absolute;top:0;right:0;bottom:0;left:0}:host{height:var(--forge-view-switcher-height, auto);width:var(--forge-view-switcher-width, auto);display:block}:host([hidden]){display:none}:host(.forge-view-switcher--slide) ::slotted(forge-view){transition:transform var(--forge-animation-duration-medium2, .3s) cubic-bezier(.35,0,.25,1);will-change:transform}:host(.forge-view-switcher--fade) ::slotted(forge-view){transition:opacity var(--forge-animation-duration-medium2, .3s) cubic-bezier(.35,0,.25,1);will-change:opacity}:host(.forge-view-switcher--fade) ::slotted(.forge-view-switcher__view--hidden){opacity:0}";var K=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,u=(o,e,i,t)=>{for(var s=t>1?void 0:t?Q(e,i):e,h=o.length-1,a;h>=0;h--)(a=o[h])&&(s=(t?a(e,i,s):a(s))||s);return t&&s&&K(e,i,s),s};let _=class extends b{static get observedAttributes(){return[n.attributes.INDEX,n.attributes.ANIMATION_TYPE]}constructor(){super(),D(this,G,J),this._foundation=new M(new $(this))}connectedCallback(){this._foundation.initialize()}disconnectedCallback(){this._foundation.disconnect()}attributeChangedCallback(o,e,i){switch(o){case n.attributes.INDEX:this.index=H(i);break;case n.attributes.ANIMATION_TYPE:this.animationType=i;break}}next(){this._foundation.next()}previous(){this._foundation.previous()}goToStart(){this._foundation.goToStart()}goToEnd(){this._foundation.goToEnd()}};u([N()],_.prototype,"index",2);u([N()],_.prototype,"animationType",2);_=u([V({name:n.elementName,dependencies:[v]})],_);const m="forge-view-switcher",Z={title:"Components/View Switcher",render:o=>x(m,o),component:m,subcomponents:{View:"forge-view"},parameters:{actions:{disable:!0}},argTypes:{...P({tagName:m})},args:{}},d={};var g,E,I;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(I=(E=d.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const ee=["Demo"],se=Object.freeze(Object.defineProperty({__proto__:null,Demo:d,__namedExportsOrder:ee,default:Z},Symbol.toStringTag,{value:"Module"}));export{d as D,se as V};
