import{k as H,e as v,m as p,i as b,C,q as y,p as L,j as F,b as _,h as B,g as $,o as A,B as R,t as U,D as j,f as M,u as K}from"./constants-DjE6emXm.js";import{B as N,c as l}from"./base-adapter-F7QHxK2H.js";import"./index-Dh0vMUMR.js";import{a as W}from"./button-CoZ69e4-.js";import{t as T,F as Y}from"./focus-indicator-BpCDYqsq.js";import{S as V}from"./state-layer-DkOkOFSZ.js";import{B as Q}from"./button-toggle-group-pGGDU2pF.js";import{C as X}from"./checkbox-Dsowcwzy.js";import{a as J}from"./icon-button-B5lcHsAP.js";import"./icon-DHpZ4R73.js";import{W as Z,a as ee}from"./with-form-associated-w46sHrbT.js";import{W as S,a as O}from"./with-default-aria-B4PYKb3X.js";import{W as D}from"./with-label-aware-CLWydNrR.js";import{S as te}from"./switch-DwfRMwQ7.js";const re=i=>typeof i.labelChangedCallback=="function",c=class c{static getRadioGroup(e,{rootNode:t,form:a}={}){if(!e.name)return[e];if(!e.form&&!a){const n=(t??e.getRootNode()).querySelectorAll(`${o.elementName}[name=${e.name}]`);return Array.from(n).filter(q=>!q.form)}const r=(e.form??a).elements.namedItem(e.name);return r&&Object.prototype.isPrototypeOf.call(RadioNodeList.prototype,r)?Array.from(r).filter(s=>s.matches(o.elementName)):[e]}static setRadioGroupValidity(e){const t=c.getRadioGroup(e),a=c._selectionIsRequired(t);t.forEach(r=>{if(!r.shadowRoot)return;const s=r[H]({required:a,checked:r.checked});r[v].setValidity({valueMissing:a},s)})}static setRadioGroupRequired(e){const t=c.getRadioGroupElement(e);if(!t)return;const a=c.getRadioGroup(e),r=Array.from(a).some(s=>s.required);(t==null?void 0:t.tagName)==="forge-radio-group"?t[p]({ariaRequired:r?"true":"false"}):t.setAttribute("aria-required",r?"true":"false")}static getRadioGroupElement(e){return e.closest(":is(fieldset, [role=radiogroup], forge-radio-group)")}static setSelectedRadioInGroup(e){c.getRadioGroup(e).forEach(a=>a.checked=a===e)}static syncRadioFocusableState(e,{ignoreSelf:t,rootNode:a,form:r}={ignoreSelf:!1}){let s=c.getRadioGroup(e,{rootNode:a,form:r});if(s=s.filter(n=>t&&n!==e||n.shadowRoot),!s.some(n=>n.checked)){s.forEach(n=>n[b]=!n.disabled);return}s.forEach(n=>n[b]=n.checked&&!n.disabled)}static focusNextRadioInGroup(e){c._updateRadioGroupFocus(e,1)}static focusPreviousRadioInGroup(e){c._updateRadioGroupFocus(e,-1)}static setUncheckedRadioGroupFocus(e,t){const a=c.getRadioGroup(e);if(t==="focus"){a.forEach(r=>r[b]=r===e);return}(!e.checked||a[0]===e||a[a.length-1]===e)&&a.forEach(r=>r[b]=!0)}static async requestRadioGroupReset(e){if(this._radiosRequestingReset.add(e),await T(),!this._radiosRequestingReset.has(e))return;const t=c.getRadioGroup(e);let a=null;t.forEach(r=>{this._radiosRequestingReset.delete(r),r.defaultChecked&&(a=r)}),t.forEach(r=>{r.checked=r===a,r[b]=!a||r.checked})}static _updateRadioGroupFocus(e,t){const a=c.getRadioGroup(e);let r=a.indexOf(e),s=a[r];do if(r+=t,r<0?r=a.length-1:r>=a.length&&(r=0),s=a[r],s===e)return;while(s.disabled||s.readonly);s[I]()&&(s[b]=!0,s.focus(),a.forEach(n=>{n!==s&&(n[b]=!1,n.checked=!1)}))}static _selectionIsRequired(e){let t=!1,a=!1;return e.forEach(r=>{r.required&&(t=!0),r.checked&&(a=!0)}),t&&!a}};c._radiosRequestingReset=new WeakSet;let h=c;const ae=`${C}radio`,w={CHECKED:"checked",DEFAULT_CHECKED:"default-checked",VALUE:"value",DENSE:"dense",DISABLED:"disabled",REQUIRED:"required",READONLY:"readonly",LABEL_POSITION:"label-position",TABINDEX:"tabindex"},ie={...w},se={ROOT:".forge-radio",LABEL:"#label",STATE_LAYER:"forge-state-layer"},oe={CHANGE:"change",INPUT:"input"},o={elementName:ae,observedAttributes:w,attributes:ie,selectors:se,events:oe},I=Symbol("tryCheck");class ne extends N{constructor(e){super(e),this._rootElement=y(e,o.selectors.ROOT),this._labelElement=y(e,o.selectors.LABEL),this._stateLayerElement=y(e,o.selectors.STATE_LAYER)}setChecked(e,t){this._component[p]({ariaChecked:e?"true":"false"}),e&&h.setSelectedRadioInGroup(this._component),h.syncRadioFocusableState(this._component);const a=e?t:null,r=e?"checked":"unchecked";this._component[v].setFormValue(a,r),h.setRadioGroupValidity(this._component)}trySetDisabled(e){const t=this._component.closest("forge-radio-group");return!e&&t&&t.disabled?!1:(this._component[p]({ariaDisabled:`${!!e}`}),h.syncRadioFocusableState(this._component),!0)}setRequired(){h.setRadioGroupValidity(this._component),h.setRadioGroupRequired(this._component)}setReadonly(e){this._component[p]({ariaDisabled:`${!!e}`})}disableStateLayer(e){this._stateLayerElement.disabled=e}setLabelPosition(e){this._labelElement.remove(),e==="start"?this._rootElement.prepend(this._labelElement):this._rootElement.append(this._labelElement)}setUncheckedRadioGroupFocus(e){h.setUncheckedRadioGroupFocus(this._component,e)}focusNext(){h.focusNextRadioInGroup(this._component)}focusPrevious(){h.focusPreviousRadioInGroup(this._component)}}class de{constructor(e){this._adapter=e,this._checked=!1,this._defaultChecked=!1,this._value="on",this._disabled=!1,this._required=!1,this._readonly=!1,this._dense=!1,this._labelPosition="end",this._focusListener=()=>this._handleFocus(),this._blurListener=()=>this._handleBlur(),this._clickListener=t=>this._handleClick(t),this._keydownListener=t=>this._handleKeydown(t),this._keyupListener=t=>this._handleKeyup(t)}initialize(){this._adapter.addHostListener("focus",this._focusListener),this._adapter.addHostListener("blur",this._blurListener),this._adapter.addHostListener("click",this._clickListener,{capture:!0}),this._adapter.addHostListener("keydown",this._keydownListener),this._adapter.addHostListener("keyup",this._keyupListener,{capture:!0}),this._adapter.setChecked(this._checked,this._value)}tryCheck(){return this._checked=!0,this._dispatchEvents()?(this._adapter.setChecked(this._checked,this._value),this._adapter.toggleHostAttribute(o.attributes.CHECKED,this._checked),!0):(this._checked=!1,!1)}_handleFocus(){this._checked||this._adapter.setUncheckedRadioGroupFocus("focus")}_handleBlur(){this._checked||this._adapter.setUncheckedRadioGroupFocus("blur")}_handleClick(e){this._activate(e)}_handleKeydown(e){switch(e.key){case"ArrowRight":case"ArrowDown":e.preventDefault(),this._adapter.focusNext();break;case"ArrowLeft":case"ArrowUp":e.preventDefault(),this._adapter.focusPrevious();break;case" ":e.preventDefault();break}}_handleKeyup(e){e.key===" "&&this._activate(e)}async _activate(e){if(!(this._checked||this._disabled||this._readonly)&&(await T(),!e.defaultPrevented)){if(this._checked=!0,!this._dispatchEvents()){this._checked=!1;return}this._adapter.setChecked(this._checked,this._value),this._adapter.toggleHostAttribute(o.attributes.CHECKED,this._checked)}}_dispatchEvents(){const e=new Event(o.events.CHANGE,{bubbles:!0,cancelable:!0}),t=new Event(o.events.INPUT,{bubbles:!0,cancelable:!0,composed:!0});return this._adapter.dispatchHostEvent(e),this._adapter.dispatchHostEvent(t),!(e.defaultPrevented||t.defaultPrevented)}get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,this._adapter.setChecked(this._checked,this._value),this._adapter.toggleHostAttribute(o.attributes.CHECKED,this._checked))}get defaultChecked(){return this._defaultChecked}set defaultChecked(e){this._defaultChecked!==e&&(this._defaultChecked=e,this._adapter.toggleHostAttribute(o.attributes.DEFAULT_CHECKED,this._defaultChecked))}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._adapter.setHostAttribute(o.attributes.VALUE,this._value))}get disabled(){return this._disabled}set disabled(e){this._disabled!==e&&(this._disabled=e,this._adapter.trySetDisabled(this._disabled)?(this._adapter.disableStateLayer(this._disabled||this._readonly),this._adapter.toggleHostAttribute(o.attributes.DISABLED,this._disabled)):this._disabled=!this._disabled)}get required(){return this._required}set required(e){this._required!==e&&(this._required=e,this._adapter.toggleHostAttribute(o.attributes.REQUIRED,this._required),this._adapter.setRequired(this._required))}get readonly(){return this._readonly}set readonly(e){this._readonly!==e&&(this._readonly=e,this._adapter.setReadonly(this._readonly),this._adapter.disableStateLayer(this._disabled||this._readonly),this._adapter.toggleHostAttribute(o.attributes.READONLY,this._readonly))}get dense(){return this._dense}set dense(e){this._dense!==e&&(this._dense=e,this._adapter.toggleHostAttribute(o.attributes.DENSE,this._dense))}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition!==e&&(this._labelPosition=e,this._adapter.setLabelPosition(this._labelPosition),this._adapter.setHostAttribute(o.attributes.LABEL_POSITION,this._labelPosition))}}const le=`<template>
  <div id="radio" class="forge-radio" part="root">
    <div id="container" class="container" aria-hidden="true">
      <div id="background" class="background" part="background"></div>
      <forge-focus-indicator target=":host" part="focus-indicator"></forge-focus-indicator>
      <forge-state-layer exportparts="surface:state-layer"></forge-state-layer>
    </div>
    <span id="label" class="label" for="input" part="label">
      <slot></slot>
    </span>
  </div>
</template>
`,ce=':host{display:inline-block;-webkit-tap-highlight-color:transparent}:host([hidden]){display:none}:host(:focus){outline:none}.forge-radio{--_radio-primary-color: var(--forge-radio-primary-color, var(--forge-theme-tertiary, #3d5afe));--_radio-inactive-color: var(--forge-radio-inactive-color, var(--forge-theme-surface-container-high, #9e9e9e));--_radio-size: var(--forge-radio-size, 20px);--_radio-mark-size: var(--forge-radio-mark-size, 12px);--_radio-state-layer-size: var(--forge-radio-state-layer-size, 40px);--_radio-state-layer-dense-size: var(--forge-radio-state-layer-dense-size, 24px);--_radio-width: var(--forge-radio-width, var(--_radio-size));--_radio-height: var(--forge-radio-height, var(--_radio-size));--_radio-border-width: var(--forge-radio-border-width, var(--forge-border-medium, 2px));--_radio-unchecked-border-color: var(--forge-radio-unchecked-border-color, var(--_radio-inactive-color));--_radio-checked-border-color: var(--forge-radio-checked-border-color, var(--_radio-primary-color));--_radio-background: var(--forge-radio-background, transparent);--_radio-shape: var(--forge-radio-shape, var(--forge-shape-round, 50%));--_radio-mark-width: var(--forge-radio-mark-width, var(--_radio-mark-size));--_radio-mark-height: var(--forge-radio-mark-height, var(--_radio-mark-size));--_radio-mark-unchecked-color: var(--forge-radio-mark-unchecked-color, var(--_radio-inactive-color));--_radio-mark-checked-color: var(--forge-radio-mark-checked-color, var(--_radio-primary-color));--_radio-mark-unchecked-background: var(--forge-radio-mark-unchecked-background, transparent);--_radio-mark-checked-background: var(--forge-radio-mark-checked-background, transparent);--_radio-gap: var(--forge-radio-gap, 0);--_radio-justify: var(--forge-radio-justify, start);--_radio-direction: var(--forge-radio-direction, initial);--_radio-state-layer-width: var(--forge-radio-state-layer-width, var(--_radio-state-layer-size));--_radio-state-layer-height: var(--forge-radio-state-layer-height, var(--_radio-state-layer-size));--_radio-state-layer-unchecked-color: var(--forge-radio-state-layer-unchecked-color, var(--_radio-color));--_radio-state-layer-checked-color: var(--forge-radio-state-layer-checked-color, var(--_radio-primary-color));--_radio-state-layer-shape: var(--forge-radio-state-layer-shape, var(--_radio-shape));--_radio-state-layer-dense-width: var(--forge-radio-state-layer-dense-width, var(--_radio-state-layer-dense-size));--_radio-state-layer-dense-height: var(--forge-radio-state-layer-dense-height, var(--_radio-state-layer-dense-size));--_radio-disabled-opacity: var(--forge-radio-disabled-opacity, .38);--_radio-animation-duration: var(--forge-radio-animation-duration, var(--forge-animation-duration-short4, .2s));--_radio-animation-timing-function: var(--forge-radio-animation-timing-function, var(--forge-animation-easing-decelerate, cubic-bezier(0, 0, 0, 1)));--_radio-animation-delay: var(--forge-radio-animation-delay, 0ms)}.forge-radio{position:relative;flex-direction:var(--_radio-direction);flex-shrink:0;align-items:center;justify-content:var(--_radio-justify);gap:var(--_radio-gap);display:flex}.forge-radio .container{position:relative;align-items:center;justify-content:center;display:flex;border-radius:var(--_radio-shape);inline-size:var(--_radio-state-layer-width);block-size:var(--_radio-state-layer-height);cursor:pointer}.forge-radio .background{position:relative;align-items:center;justify-content:center;display:flex;overflow:hidden;transition-duration:var(--_radio-animation-duration);transition-delay:var(--_radio-animation-delay);transition-timing-function:var(--_radio-animation-timing-function);transition-property:border-color;box-sizing:border-box;border-radius:var(--_radio-shape);border-width:var(--_radio-border-width);border-style:solid;border-color:var(--_radio-unchecked-border-color);inline-size:var(--_radio-width);block-size:var(--_radio-height);background:var(--_radio-background)}.forge-radio .background:after{content:"";position:absolute;contain:strict;transition-duration:var(--_radio-animation-duration);transition-delay:var(--_radio-animation-delay);transition-timing-function:var(--_radio-animation-timing-function);transition-property:inline-size,block-size,border-color;border-radius:var(--_radio-shape);border-width:calc(var(--_radio-mark-height) / 2) calc(var(--_radio-mark-width) / 2);border-color:var(--_radio-mark-unchecked-color);border-style:solid;inline-size:calc(var(--_radio-width) - 2 * var(--_radio-border-width));block-size:calc(var(--_radio-height) - 2 * var(--_radio-border-width));background:var(--_radio-mark-unchecked-background)}.forge-radio .label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-label1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-label1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-font-size-scale, .75)));font-weight:var(--forge-typography-label1-font-weight, 400);line-height:var(--forge-typography-label1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-label1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-label1-text-transform, inherit);text-decoration:var(--forge-typography-label1-text-decoration, inherit);cursor:default}.forge-radio .label:empty{display:none}:host([checked]) .forge-radio .background{border-color:var(--_radio-checked-border-color)}:host([checked]) .forge-radio .background:after{border-color:var(--_radio-mark-checked-color);inline-size:0px;block-size:0px;background:var(--_radio-mark-checked-background)}:host([checked]) forge-state-layer{--forge-state-layer-color: var(--_radio-state-layer-checked-color)}:host([dense]) .forge-radio .container{inline-size:var(--_radio-state-layer-dense-width);block-size:var(--_radio-state-layer-dense-height)}:host([disabled]) .forge-radio .container{opacity:var(--_radio-disabled-opacity);cursor:not-allowed}:host([readonly]) .forge-radio .container{cursor:not-allowed}forge-focus-indicator{--forge-focus-indicator-color: var(--_radio-primary-color);--forge-focus-indicator-outward-offset: 0px;--forge-focus-indicator-shape: var(--_radio-state-layer-shape)}forge-state-layer{--forge-state-layer-color: var(--_radio-state-layer-unchecked-color)}';var he=Object.defineProperty,ue=Object.getOwnPropertyDescriptor,f=(i,e,t,a)=>{for(var r=a>1?void 0:a?ue(e,t):e,s=i.length-1,n;s>=0;s--)(n=i[s])&&(r=(a?n(e,t,r):n(r))||r);return a&&r&&he(e,t,r),r};let u=class extends Z(D(ee(S(O(R))))){static get observedAttributes(){return Object.values(o.observedAttributes)}constructor(){super(),L(this,le,ce),this[F]="radio",this._core=new de(new ne(this))}connectedCallback(){super.connectedCallback(),this[p]({role:"radio",ariaChecked:this.checked?"true":"false",ariaDisabled:this.disabled?"true":"false"}),h.syncRadioFocusableState(this),this._core.initialize(),this._rootNode=this.getRootNode()}disconnectedCallback(){h.syncRadioFocusableState(this,{ignoreSelf:!0,rootNode:this._rootNode,form:this._latestAssociatedForm})}attributeChangedCallback(i,e,t){switch(i){case o.attributes.CHECKED:this._core.checked=_(t);break;case o.attributes.DEFAULT_CHECKED:this._core.defaultChecked=_(t);break;case o.attributes.VALUE:this.value=t;break;case o.attributes.DENSE:this.dense=_(t);break;case o.attributes.DISABLED:this.disabled=_(t);break;case o.attributes.REQUIRED:this.required=_(t);break;case o.attributes.READONLY:this.readonly=_(t);break;case o.attributes.LABEL_POSITION:this.labelPosition=t;break}super.attributeChangedCallback(i,e,t)}[B](){return this.checked?this.value:null}[$](){return this.checked?"checked":"unchecked"}formAssociatedCallback(i){i&&(this._latestAssociatedForm=i)}formResetCallback(){h.requestRadioGroupReset(this)}formStateRestoreCallback(i){this.checked=i==="checked"}labelClickedCallback(){this.click()}labelChangedCallback(i){this[p]({ariaLabel:i})}[I](){return this._core.tryCheck()}};f([l()],u.prototype,"checked",2);f([l()],u.prototype,"defaultChecked",2);f([l()],u.prototype,"value",2);f([l()],u.prototype,"dense",2);f([l()],u.prototype,"disabled",2);f([l()],u.prototype,"required",2);f([l()],u.prototype,"readonly",2);f([l()],u.prototype,"labelPosition",2);u=f([A({name:o.elementName,dependencies:[Y,V]})],u);class _e extends N{constructor(e){super(e)}attachLabel(e){e.nonInteractive=!0,e.forElement=this._component}setDisabled(e){this._component[p]({ariaDisabled:e?"true":null}),this._disableRadios(e)}trySetRequired(){const e=Array.from(this._component.querySelectorAll(o.elementName)).some(t=>t.required);this._component[p]({ariaRequired:e?"true":null})}_disableRadios(e){this._component.querySelectorAll(o.elementName).forEach(t=>{t.disabled=e})}}const pe=`${C}radio-group`,z={DISABLED:"disabled"},fe={...z},k={elementName:pe,observedAttributes:z,attributes:fe};class ge{constructor(e){this._adapter=e,this._disabled=!1,this._labelConnectedListener=t=>this._handleLabelConnected(t)}initialize(){this._adapter.addHostListener(d.events.CONNECTED,this._labelConnectedListener),this._adapter.trySetRequired()}_handleLabelConnected(e){e.stopPropagation(),this._adapter.attachLabel(e.target)}get disabled(){return this._disabled}set disabled(e){this._disabled!==e&&(this._disabled=e,this._adapter.setDisabled(e),this._adapter.toggleHostAttribute(k.attributes.DISABLED,e))}}const be=`<template>
  <slot></slot>
</template>
`;var me=Object.defineProperty,ye=Object.getOwnPropertyDescriptor,x=(i,e,t,a)=>{for(var r=a>1?void 0:a?ye(e,t):e,s=i.length-1,n;s>=0;s--)(n=i[s])&&(r=(a?n(e,t,r):n(r))||r);return a&&r&&me(e,t,r),r};let E=class extends D(S(O(R))){get form(){return this[v].form}get labels(){return this[v].labels}get name(){return this.getAttribute("name")??""}set name(i){U(this,!!i,"name",i)}static get observedAttributes(){return Object.values(k.observedAttributes)}constructor(){super(),L(this,be),this._core=new ge(new _e(this))}connectedCallback(){super.connectedCallback(),this[p]({role:"radiogroup",ariaDisabled:this.disabled?"true":null}),this._core.initialize()}attributeChangedCallback(i,e,t){switch(i){case k.attributes.DISABLED:this.disabled=_(t);break}}formDisabledCallback(i){this.disabled=i}labelChangedCallback(i){this[p]({ariaLabel:i??null})}};E.formAssociated=!0;x([l()],E.prototype,"disabled",2);E=x([A({name:k.elementName,dependencies:[u]})],E);const P=`${C}label`,G={FOR:"for",DYNAMIC:"dynamic",NON_INTERACTIVE:"non-interactive",LEGEND:"legend"},ve={...G},ke={SLOT:"slot"},Ee={CONNECTED:`${P}-connected`},Ce=[W.elementName,Q.elementName,X.elementName,J.elementName,o.elementName,"forge-select",te.elementName],d={elementName:P,observedAttributes:G,attributes:ve,selectors:ke,events:Ee,labelableChildSelectors:Ce};class Le extends N{constructor(e){super(e),this._targetElement=null,this._slotElement=y(e,d.selectors.SLOT)}destroy(){var e;(e=this._targetElement)==null||e.labelChangedCallback(null),this._targetElement=null}hasTargetElement(){return!!this._targetElement}getTargetElement(){return this._targetElement}setTargetElement(e){if(e&&this._checkLabelAwareness(e)){this._targetElement=e;return}this._targetElement=null}trySetTarget(e){this._targetElement=this._locateTargetElement(e)}clickTarget(){var e,t;(t=(e=this._targetElement)==null?void 0:e.labelClickedCallback)==null||t.call(e)}updateTargetLabel(){if(!this._targetElement)return;let e=this._component.textContent??"";if(this._component.contains(this._targetElement)){const a=this._targetElement.textContent??"";e=e.replace(a,"")}const t=e.trim();this._targetElement.labelChangedCallback(t)}addSlotChangeListener(e){this._slotElement.addEventListener("slotchange",e)}removeSlotChangeListener(e){this._slotElement.removeEventListener("slotchange",e)}addMutationObserver(e){this._mutationObserver=new MutationObserver(e),this._mutationObserver.observe(this._component,{subtree:!0,characterData:!0,childList:!0}),e([],this._mutationObserver)}removeMutationObserver(){var e;(e=this._mutationObserver)==null||e.disconnect(),this._mutationObserver=void 0}_checkLabelAwareness(e){return re(e)?!0:(console.warn("Label target element is not label aware.",e),!1)}_locateTargetElement(e){let t;if(e)t=this._component.getRootNode().querySelector(`#${e}`);else{const a=d.labelableChildSelectors.join(",");t=this._component.querySelector(a)}return t&&!t.shadowRoot?(t.setAttribute(j,""),t[M]=this._component,null):t&&!this._checkLabelAwareness(t)?null:t}}class Ae{constructor(e){this._adapter=e,this._dynamic=!1,this._nonInteractive=!1,this._legend=!1,this._isConnected=!1,this._clickListener=t=>this._handleClick(t),this._slotChangeListener=()=>this._handleSlotChange(),this._mutationCallback=()=>this._handleMutation()}initialize(){this._legend?this._initializeAsLegend():this._initializeAsLabel()}destroy(){this._disconnect(),this._adapter.destroy()}update(){this._adapter.updateTargetLabel()}updateTarget(e){return this._adapter.setTargetElement(e),this._adapter.hasTargetElement()?(this._connect(),!0):!1}async _initializeAsLegend(){await T(),this._adapter.dispatchHostEvent(new CustomEvent(d.events.CONNECTED,{bubbles:!0}))}async _initializeAsLabel(){this._adapter.addSlotChangeListener(this._slotChangeListener),this._adapter.trySetTarget(this._for??null),this._adapter.hasTargetElement()&&this._connect()}_handleClick(e){const t=this._clickTarget??this._adapter.getTargetElement();e.target===t||t!=null&&t.contains(e.target)||this._adapter.clickTarget()}_handleSlotChange(){!this._for&&!this._forElement&&(this._adapter.trySetTarget(null),this._tryConnect())}_handleMutation(){this._adapter.updateTargetLabel()}_connect(){this._nonInteractive||this._adapter.addHostListener("click",this._clickListener),this._adapter.updateTargetLabel(),this._dynamic&&this._adapter.addMutationObserver(this._mutationCallback),this._isConnected=!0}_disconnect(){this._adapter.removeHostListener("click",this._clickListener),this._adapter.removeMutationObserver(),this._isConnected=!1}_tryConnect(){this._adapter.hasTargetElement()?this._isConnected||this._connect():this._disconnect()}get for(){return this._for}set for(e){this._for!==e&&(this._for=e,this._adapter.toggleHostAttribute(d.attributes.FOR,!!this.for,this.for??void 0),this._adapter.trySetTarget(this._for??null),this._tryConnect())}get forElement(){return this._forElement}set forElement(e){this._forElement!==e&&(this._forElement=e,this._adapter.setTargetElement(this._forElement??null),this._tryConnect())}get clickTarget(){return this._clickTarget}set clickTarget(e){this._clickTarget!==e&&(this._clickTarget=e)}get dynamic(){return this._dynamic}set dynamic(e){this._dynamic!==e&&(this._dynamic=e,this._adapter.toggleHostAttribute(d.attributes.DYNAMIC,this._dynamic),this._dynamic?this._adapter.hasTargetElement()&&this._adapter.addMutationObserver(this._mutationCallback):this._adapter.removeMutationObserver())}get nonInteractive(){return this._nonInteractive}set nonInteractive(e){if(this._nonInteractive!==e){if(this._nonInteractive=e,this._adapter.toggleHostAttribute(d.attributes.NON_INTERACTIVE,this._nonInteractive),!this._isConnected)return;this._nonInteractive?this._adapter.removeHostListener("click",this._clickListener):this._adapter.addHostListener("click",this._clickListener)}}get legend(){return this._legend}set legend(e){if(this._legend!==e){if(this._legend=e,this._adapter.toggleHostAttribute(d.attributes.LEGEND,this._legend),this._legend){this._adapter.removeSlotChangeListener(this._slotChangeListener),this._adapter.dispatchHostEvent(new CustomEvent(d.events.CONNECTED,{bubbles:!0}));return}this._adapter.addSlotChangeListener(this._slotChangeListener),this._adapter.trySetTarget(this._for??null),this._adapter.hasTargetElement()&&this._connect()}}}const Re=`<template>
  <slot></slot>
</template>
`,Ne=':host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-label1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-label1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-font-size-scale, .75)));font-weight:var(--forge-typography-label1-font-weight, 400);line-height:var(--forge-typography-label1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-label1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-label1-text-transform, inherit);text-decoration:var(--forge-typography-label1-text-decoration, inherit);display:inline-block;cursor:default}:host([hidden]){display:none}';var Te=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,m=(i,e,t,a)=>{for(var r=a>1?void 0:a?Se(e,t):e,s=i.length-1,n;s>=0;s--)(n=i[s])&&(r=(a?n(e,t,r):n(r))||r);return a&&r&&Te(e,t,r),r};let g=class extends R{static get observedAttributes(){return Object.values(d.observedAttributes)}constructor(){super(),L(this,Re,Ne),this._core=new Ae(new Le(this))}connectedCallback(){this._core.initialize()}disconnectedCallback(){this._core.destroy()}attributeChangedCallback(i,e,t){switch(i){case d.attributes.FOR:this.for=t;break;case d.attributes.DYNAMIC:this.dynamic=_(t);break;case d.attributes.NON_INTERACTIVE:this.nonInteractive=_(t);break;case d.attributes.LEGEND:this.legend=_(t);break}}update(){this._core.update()}[K](i){return this._core.updateTarget(i)}};m([l()],g.prototype,"for",2);m([l()],g.prototype,"forElement",2);m([l()],g.prototype,"clickTarget",2);m([l()],g.prototype,"dynamic",2);m([l()],g.prototype,"nonInteractive",2);m([l()],g.prototype,"legend",2);g=m([A({name:d.elementName})],g);export{d as L};
