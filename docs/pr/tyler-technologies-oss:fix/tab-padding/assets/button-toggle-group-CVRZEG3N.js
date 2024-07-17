import{q as f,m as p,i as v,C as m,p as y,b as l,o as E,B as A,e as c,h as L,g as k,k as V,j as x}from"./constants-DjE6emXm.js";import{B as T,c as i}from"./base-adapter-F7QHxK2H.js";import{a as R,W as H}from"./with-form-associated-w46sHrbT.js";import{W as B}from"./with-label-aware-CLWydNrR.js";import{W as C,a as S}from"./with-default-aria-B4PYKb3X.js";import{F as I,t as z,a as F}from"./focus-indicator-BPFZRBe9.js";import"./index-Dh0vMUMR.js";import{S as P,a as U}from"./state-layer-D8bHAvjj.js";class $ extends T{constructor(t){super(t),this._focusIndicatorElement=f(t,I.elementName),this._stateLayerElement=f(t,P.elementName)}initialize(){this._component[p]({role:"button"},{setAttribute:!this._component.hasAttribute("role")}),this._component[p]({ariaPressed:`${!!this._component.selected}`,ariaDisabled:`${!!this._component.disabled}`}),this._component[v]=!this._component.disabled}setSelected(t){this._component[p]({ariaPressed:`${!!t}`})}setDisabled(t){this._component[p]({ariaDisabled:`${!!t}`}),this._component[v]=!t,this._stateLayerElement.disabled=t}forceFocusVisible(){this._focusIndicatorElement.active=!0}}const D=`${m}button-toggle`,w={SELECTED:"selected",VALUE:"value",DISABLED:"disabled",READONLY:"readonly",TABINDEX:"tabindex"},M={...w},q={SELECT:`${D}-select`},n={elementName:D,observedAttributes:w,attributes:M,events:q};class G{constructor(t){this._adapter=t,this._selected=!1,this._disabled=!1,this._readonly=!1,this._clickListener=e=>this._onClick(e),this._keydownListener=e=>this._onKeyDown(e)}initialize(){this._adapter.initialize(),!this._disabled&&!this._readonly&&this._applyListeners()}destroy(){this._removeListeners()}focus(t={focusVisible:!0}){this._adapter.focusHost(t),t.focusVisible&&this._adapter.forceFocusVisible()}click(){this._adapter.clickHost()}_applyListeners(){this._adapter.addHostListener("click",this._clickListener),this._adapter.addHostListener("keydown",this._keydownListener)}_removeListeners(){this._adapter.removeHostListener("click",this._clickListener),this._adapter.removeHostListener("keydown",this._keydownListener)}async _onClick(t){const e=this._selected;this._selected=!this._selected;const o={value:this._value,selected:this._selected},a=new CustomEvent(n.events.SELECT,{detail:o,bubbles:!0,cancelable:!0});this._adapter.dispatchHostEvent(a),await z(),this._selected=e,!a.defaultPrevented&&(this.selected=!e)}_onKeyDown(t){t.key===" "&&(t.preventDefault(),this.click())}get value(){return this._value}set value(t){this._value!==t&&(this._value=t,this._adapter.setHostAttribute(n.attributes.VALUE,`${this._value}`))}get selected(){return this._selected}set selected(t){t=!!t,this._selected!==t&&(this._selected=t,this._adapter.setSelected(this._selected),this._adapter.toggleHostAttribute(n.attributes.SELECTED,this._selected))}get disabled(){return this._disabled}set disabled(t){t=!!t,this._disabled!==t&&(this._disabled=t,this._disabled?this._removeListeners():this._applyListeners(),this._adapter.setDisabled(this._disabled),this._adapter.toggleHostAttribute(n.attributes.DISABLED,this._disabled))}get readonly(){return this._readonly}set readonly(t){t=!!t,this._readonly!==t&&(this._readonly=t,this._readonly?this._removeListeners():this._applyListeners(),this._adapter.toggleHostAttribute(n.attributes.READONLY,this._readonly))}}const Y=`<template>
  <div class="forge-button-toggle" part="root">
    <slot name="start"></slot>
    <slot></slot>
    <slot name="end"></slot>
    <forge-focus-indicator target=":host" part="focus-indicator"></forge-focus-indicator>
    <forge-state-layer target=":host" exportparts="surface:state-layer"></forge-state-layer>
  </div>
</template>
`,W=':host{--_button-toggle-display: var(--forge-button-toggle-display, inline-flex)}:host{display:var(--_button-toggle-display);position:relative;outline:none;height:100%;-webkit-tap-highlight-color:transparent}:host([hidden]){display:none}.forge-button-toggle{--_button-toggle-min-width: var(--forge-button-toggle-min-width, auto);--_button-toggle-spacing: var(--forge-button-toggle-spacing, var(--forge-spacing-xsmall, 8px));--_button-toggle-padding-block: var(--forge-button-toggle-padding-block, 2px);--_button-toggle-padding-inline: var(--forge-button-toggle-padding-inline, 8px);--_button-toggle-icon-size: var(--forge-button-toggle-icon-size, var(--forge-button-icon-size, calc(var(--forge-typography-font-size, 1rem) * 1.125)));--_button-toggle-color: var(--forge-button-toggle-color, var(--forge-theme-text-medium, rgba(0, 0, 0, .6)));--_button-toggle-background: var(--forge-button-toggle-background, transparent);--_button-toggle-hover-background: var(--forge-button-toggle-hover-background, var(--_button-toggle-background));--_button-toggle-active-background: var(--forge-button-toggle-active-background, var(--_button-toggle-background));--_button-toggle-cursor: var(--forge-button-toggle-cursor, pointer);--_button-toggle-border-width: var(--forge-button-toggle-border-width, medium);--_button-toggle-border-style: var(--forge-button-toggle-border-style, none);--_button-toggle-border-color: var(--forge-button-toggle-border-color, var(--forge-theme-outline-medium, #757575));--_button-toggle-shape: var(--forge-button-toggle-shape, var(--forge-shape-small, 2px));--_button-toggle-shape-start-start: var(--forge-button-toggle-shape-start-start, var(--_button-toggle-shape));--_button-toggle-shape-start-end: var(--forge-button-toggle-shape-start-end, var(--_button-toggle-shape));--_button-toggle-shape-end-start: var(--forge-button-toggle-shape-end-start, var(--_button-toggle-shape));--_button-toggle-shape-end-end: var(--forge-button-toggle-shape-end-end, var(--_button-toggle-shape));--_button-toggle-selected-background: var(--forge-button-toggle-selected-background, var(--forge-theme-tertiary-container, #d0d7ff));--_button-toggle-selected-color: var(--forge-button-toggle-selected-color, var(--forge-theme-on-tertiary-container, #213189));--_button-toggle-selected-disabled-background: var(--forge-button-toggle-selected-disabled-background, var(--forge-theme-surface-container, #e0e0e0));--_button-toggle-disabled-opacity: var(--forge-button-toggle-disabled-opacity, .38);--_button-toggle-disabled-cursor: var(--forge-button-toggle-disabled-cursor, not-allowed);--_button-toggle-disabled-color: var(--forge-button-toggle-disabled-color, var(--forge-theme-text-low, rgba(0, 0, 0, .38)));--_button-toggle-disabled-background: var(--forge-button-toggle-disabled-background, transparent);--_button-toggle-transition-duration: var(--forge-button-toggle-transition-duration, var(--forge-animation-duration-short3, .15s));--_button-toggle-transition-timing: var(--forge-button-toggle-transition-timing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_button-toggle-focus-indicator-color: var(--forge-button-toggle-focus-indicator-color, var(--forge-theme-primary, #3f51b5));--_button-toggle-focus-indicator-offset: var(--forge-button-toggle-focus-indicator-offset, 0px)}.forge-button-toggle{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-button-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-button-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-button-font-size-scale, .875)));font-weight:var(--forge-typography-button-font-weight, 500);line-height:var(--forge-typography-button-line-height, normal);letter-spacing:var(--forge-typography-button-letter-spacing, .0714285714em);text-transform:var(--forge-typography-button-text-transform, inherit);text-decoration:var(--forge-typography-button-text-decoration, inherit);position:relative;display:var(--_button-toggle-display);align-items:center;justify-content:center;gap:var(--_button-toggle-spacing);z-index:0;box-sizing:border-box;min-inline-size:var(--_button-toggle-min-width);inline-size:100%;border-width:var(--_button-toggle-border-width);border-style:var(--_button-toggle-border-style);border-color:var(--_button-toggle-border-color);border-start-start-radius:var(--_button-toggle-shape-start-start);border-start-end-radius:var(--_button-toggle-shape-start-end);border-end-start-radius:var(--_button-toggle-shape-end-start);border-end-end-radius:var(--_button-toggle-shape-end-end);padding-block:var(--_button-toggle-padding-block);padding-inline:var(--_button-toggle-padding-inline);outline:none;-webkit-user-select:none;user-select:none;-webkit-appearance:none;vertical-align:middle;text-decoration:none;white-space:nowrap;background:var(--_button-toggle-background);color:var(--_button-toggle-color);cursor:var(--_button-toggle-cursor);transition-property:color,background-color,border-color;transition-duration:var(--_button-toggle-transition-duration);transition-timing-function:var(--_button-toggle-transition-timing)}.forge-button-toggle forge-state-layer{--forge-state-layer-color: var(--_button-toggle-color)}.forge-button-toggle forge-focus-indicator{--forge-focus-indicator-outward-offset: var(--_button-toggle-focus-indicator-offset);--forge-focus-indicator-color: var(--_button-toggle-focus-indicator-color);--forge-focus-indicator-shape: var(--_button-toggle-shape);--forge-focus-indicator-shape-start-start: var(--_button-toggle-shape-start-start);--forge-focus-indicator-shape-start-end: var(--_button-toggle-shape-start-end);--forge-focus-indicator-shape-end-start: var(--_button-toggle-shape-end-start);--forge-focus-indicator-shape-end-end: var(--_button-toggle-shape-end-end)}::slotted(:is([slot=start],[slot=end])){font-size:var(--_button-toggle-icon-size)}:host([selected]) .forge-button-toggle{--_button-toggle-background: var(--_button-toggle-selected-background);--_button-toggle-color: var(--_button-toggle-selected-color);--_button-toggle-border-color: var(--_button-toggle-background)}:host([disabled]){--_button-toggle-cursor: var(--_button-toggle-disabled-cursor);cursor:not-allowed}:host([disabled]) .forge-button-toggle{--_button-toggle-background: var(--_button-toggle-disabled-background);--_button-toggle-color: var(--_button-toggle-disabled-color);opacity:var(--_button-toggle-disabled-opacity);pointer-events:none}:host([disabled][selected]) .forge-button-toggle{--_button-toggle-background: var(--_button-toggle-selected-disabled-background)}';var j=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,_=(r,t,e,o)=>{for(var a=o>1?void 0:o?Q(t,e):t,d=r.length-1,h;d>=0;d--)(h=r[d])&&(a=(o?h(t,e,a):h(a))||a);return o&&a&&j(t,e,a),a};let b=class extends C(S(R(A))){static get observedAttributes(){return Object.values(n.observedAttributes)}constructor(){super(),y(this,Y,W),this._core=new G(new $(this))}connectedCallback(){this._core.initialize()}disconnectedCallback(){this._core.destroy()}attributeChangedCallback(r,t,e){switch(r){case n.attributes.VALUE:this.value=e;return;case n.attributes.SELECTED:this.selected=l(e);return;case n.attributes.DISABLED:this.disabled=l(e);return;case n.attributes.READONLY:this.readonly=l(e);return}super.attributeChangedCallback(r,t,e)}focus(r){this._core.focus(r)}click(){this._core.click()}};_([i()],b.prototype,"value",2);_([i()],b.prototype,"selected",2);_([i()],b.prototype,"disabled",2);_([i()],b.prototype,"readonly",2);b=_([E({name:n.elementName,dependencies:[F,U]})],b);function K(r){class t extends r{constructor(){super(...arguments),this._hasCustomValidityError=!1}get validity(){return this[c].validity}get validationMessage(){return this[c].validationMessage}get willValidate(){return this[c].willValidate}checkValidity(){return this[c].checkValidity()}reportValidity(){return this[c].reportValidity()}setCustomValidity(o){this._hasCustomValidityError=o!=="",this[c].setCustomValidity({customError:this._hasCustomValidityError},o)}}return t}const N=`${m}button-toggle-group`,O={VALUE:"value",MULTIPLE:"multiple",MANDATORY:"mandatory",VERTICAL:"vertical",STRETCH:"stretch",DISABLED:"disabled",REQUIRED:"required",READONLY:"readonly",DENSE:"dense",NO_OUTLINE:"no-outline",THEME:"theme"},X={...O},J={VERTICAL:"forge-button-toggle-group--vertical",STRETCH:"forge-button-toggle-group--stretch"},Z={ROOT:".forge-button-toggle-group"},tt={CHANGE:`${N}-change`},s={elementName:N,observedAttributes:O,attributes:X,classes:J,selectors:Z,events:tt};class et extends T{constructor(t){super(t),this._rootElement=f(t,s.selectors.ROOT),this._defaultSlotElement=this._rootElement.querySelector("slot")}addListener(t,e){this._rootElement.addEventListener(t,e)}removeListener(t,e){this._rootElement.removeEventListener(t,e)}addSlotChangeListener(t){this._defaultSlotElement.addEventListener("slotchange",t)}removeSlotChangeListener(t){this._defaultSlotElement.addEventListener("slotchange",t)}deselect(t){this._getButtonToggleElements().filter(o=>o!==t).forEach(o=>o.selected=!1)}setDisabled(t){this._component[v]=!t,this._getButtonToggleElements().forEach(o=>o.disabled=t)}setReadonly(t){this._getButtonToggleElements().forEach(o=>o.readonly=t)}getSelectedValues(){return this._getButtonToggleElements().filter(e=>e.selected).map(e=>e.value)}applyValues(t){this._getButtonToggleElements().forEach(o=>o.selected=t.indexOf(o.value)>=0)}setFormValue(){if(!this._component.form)return;const t=this._component[L](),e=this._component[k]();this._component[c].setFormValue(t,e)}setFormValidity(){if(!this._component.form||!this._component.required)return;const t=this._component.multiple?!this._component.value.length:!this._component.value;if(t){const e=this._component[V]({required:t});this._component[c].setValidity({valueMissing:t},e,this._getButtonToggleElements()[0])}else this._component[c].setValidity({})}_getButtonToggleElements(){return Array.from(this._component.querySelectorAll(n.elementName))}}class ot{constructor(t){this._adapter=t,this._values=[],this._outlined=!0,this._multiple=!1,this._mandatory=!1,this._vertical=!1,this._stretch=!1,this._dense=!1,this._disabled=!1,this._readonly=!1,this._required=!1,this._theme="tertiary",this._selectListener=e=>this._onSelect(e),this._slotListener=()=>this._synchronize()}initialize(){this._adapter.setFormValue(),this._adapter.setFormValidity(),this._adapter.addListener(n.events.SELECT,this._selectListener),this._adapter.addSlotChangeListener(this._slotListener)}destroy(){this._adapter.removeListener(n.events.SELECT,this._selectListener),this._adapter.removeSlotChangeListener(this._slotListener)}_synchronize(){if(this._disabled&&this._adapter.setDisabled(this._disabled),this._readonly&&this._adapter.setReadonly(this._readonly),this._multiple){const t=new Set(this._adapter.getSelectedValues().concat(this._values));this.value=Array.from(t)}else{const t=this._adapter.getSelectedValues().concat(this._values);this.value=t.length?t[t.length-1]:null}}_onSelect(t){if(this._mandatory&&!this._adapter.getSelectedValues().length){t.preventDefault();return}let e;t.detail.selected?e=this._multiple?[...this._values,t.detail.value]:[t.detail.value]:e=this._multiple?this._values.filter(d=>d!==t.detail.value):[];const o=this._multiple?e:e.length?e[0]:null,a=new CustomEvent(s.events.CHANGE,{detail:o,bubbles:!0,cancelable:!0});if(this._adapter.dispatchHostEvent(a),a.defaultPrevented){t.preventDefault();return}this._values=e,this._adapter.applyValues(this._values),this._adapter.setFormValue(),this._adapter.setFormValidity()}_applyValue(t){let e=Array.isArray(t)?t:t!=null?[t]:[];this._values=e,!this._multiple&&e.length>1&&(e=[e[0]]),this._adapter.applyValues(e),this._adapter.setFormValue(),this._adapter.setFormValidity()}get value(){const t=Array.from(new Set(this._adapter.getSelectedValues().concat(this._values)));return this._multiple?Array.from(t):t[0]??null}set value(t){this._applyValue(t)}get multiple(){return this._multiple}set multiple(t){t=!!t,this._multiple!==t&&(this._multiple=t,this._applyValue(this._values),this._adapter.toggleHostAttribute(s.attributes.MULTIPLE,this._multiple))}get mandatory(){return this._mandatory}set mandatory(t){t=!!t,this._mandatory!==t&&(this._mandatory=t,this._adapter.toggleHostAttribute(s.attributes.MANDATORY,this._mandatory))}get vertical(){return this._vertical}set vertical(t){t=!!t,this._vertical!==t&&(this._vertical=t,this._adapter.toggleHostAttribute(s.attributes.VERTICAL,this._vertical))}get stretch(){return this._stretch}set stretch(t){t=!!t,this._stretch!==t&&(this._stretch=t,this._adapter.toggleHostAttribute(s.attributes.STRETCH,this._stretch))}get dense(){return this._dense}set dense(t){t=!!t,this._dense!==t&&(this._dense=t,this._adapter.toggleHostAttribute(s.attributes.DENSE,this._dense))}get disabled(){return this._disabled}set disabled(t){t=!!t,this._disabled!==t&&(this._disabled=t,this._adapter.setDisabled(this._disabled),this._adapter.toggleHostAttribute(s.attributes.DISABLED,this._disabled))}get readonly(){return this._readonly}set readonly(t){t=!!t,this._readonly!==t&&(this._readonly=t,this._adapter.setReadonly(this._readonly),this._adapter.toggleHostAttribute(s.attributes.READONLY,this._readonly))}get required(){return this._required}set required(t){t=!!t,this._required!==t&&(this._required=t,this._adapter.toggleHostAttribute(s.attributes.REQUIRED,this._required))}get outlined(){return this._outlined}set outlined(t){t=!!t,this._outlined!==t&&(this._outlined=t,this._adapter.toggleHostAttribute(s.attributes.NO_OUTLINE,!this._outlined))}get theme(){return this._theme}set theme(t){this._theme!==t&&(this._theme=t,this._adapter.toggleHostAttribute(s.attributes.THEME,this._theme!=="tertiary",this._theme))}}const rt=`<template>
  <div class="forge-button-toggle-group" part="root">
    <slot></slot>
  </div>
</template>
`,st=":host{--_button-toggle-group-display: var(--forge-button-toggle-group-display, inline-flex)}:host{display:var(--_button-toggle-group-display)}:host([hidden]){display:none}.forge-button-toggle-group{--_button-toggle-group-gap: var(--forge-button-toggle-group-gap, 4px);--_button-toggle-group-padding: var(--forge-button-toggle-group-padding, 4px);--_button-toggle-group-padding-block: var(--forge-button-toggle-group-padding-block, var(--_button-toggle-group-padding));--_button-toggle-group-padding-inline: var(--forge-button-toggle-group-padding-inline, var(--_button-toggle-group-padding));--_button-toggle-group-height: var(--forge-button-toggle-group-height, var(--forge-button-height, 36px));--_button-toggle-group-dense-height: var(--forge-button-toggle-group-dense-height, var(--forge-button-dense-height, 24px));--_button-toggle-group-outline-width: var(--forge-button-toggle-group-outline-width, var(--forge-border-thin, 1px));--_button-toggle-group-outline-style: var(--forge-button-toggle-group-outline-style, solid);--_button-toggle-group-outline-color: var(--forge-button-toggle-group-outline-color, var(--forge-theme-outline-low, #9e9e9e));--_button-toggle-group-outline-color-active: var(--forge-button-toggle-group-outline-color-active, var(--forge-theme-outline-medium, #757575));--_button-toggle-group-shape: var(--forge-button-toggle-group-shape, var(--forge-shape-medium, 4px));--_button-toggle-group-shape-start-start: var(--forge-button-toggle-group-shape-start-start, var(--_button-toggle-group-shape));--_button-toggle-group-shape-start-end: var(--forge-button-toggle-group-shape-start-end, var(--_button-toggle-group-shape));--_button-toggle-group-shape-end-start: var(--forge-button-toggle-group-shape-end-start, var(--_button-toggle-group-shape));--_button-toggle-group-shape-end-end: var(--forge-button-toggle-group-shape-end-end, var(--_button-toggle-group-shape));--_button-toggle-group-transition-duration: var(--forge-button-toggle-group-transition-duration, var(--forge-button-toggle-transition-duration, var(--forge-animation-duration-short3, .15s)));--_button-toggle-group-transition-timing: var(--forge-button-toggle-group-transition-timing, var(--forge-button-toggle-transition-timing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1))))}.forge-button-toggle-group{display:flex;align-items:center;gap:var(--_button-toggle-group-gap);height:var(--_button-toggle-group-height);border-width:var(--_button-toggle-group-outline-width);border-style:var(--_button-toggle-group-outline-style);border-color:var(--_button-toggle-group-outline-color);border-start-start-radius:var(--_button-toggle-group-shape-start-start);border-start-end-radius:var(--_button-toggle-group-shape-start-end);border-end-start-radius:var(--_button-toggle-group-shape-end-start);border-end-end-radius:var(--_button-toggle-group-shape-end-end);padding-block:var(--_button-toggle-group-padding-block);padding-inline:var(--_button-toggle-group-padding-inline);transition-property:border-color;transition-duration:var(--_button-toggle-group-transition-duration);transition-timing-function:var(--_button-toggle-group-transition-timing)}:host(:not([disabled]):not([no-outline])) .forge-button-toggle-group:hover,:host(:not([disabled]):not([no-outline])) .forge-button-toggle-group:focus-within{--_button-toggle-group-outline-color: var(--_button-toggle-group-outline-color-active)}:host([no-outline]) .forge-button-toggle-group{--_button-toggle-group-padding: var(--forge-button-toggle-group-padding, 0);--_button-toggle-group-outline-style: var(--forge-button-toggle-group-outline-style, none)}:host(:is([dense],[density=dense])) .forge-button-toggle-group{--_button-toggle-group-height: var(--_button-toggle-group-dense-height)}:host([vertical]) .forge-button-toggle-group{height:auto;flex-direction:column}:host([vertical]) ::slotted(forge-button-toggle){height:var(--_button-toggle-group-height);width:100%}:host([vertical]) ::slotted(forge-divider:not([vertical])){margin-inline:4px;width:100%}::slotted(forge-divider[vertical]){margin-block:4px}:host([stretch]){display:block}:host([stretch]) .forge-button-toggle-group{width:100%}:host(:not([vertical])[stretch]) ::slotted(forge-button-toggle){flex:1}:host([theme=primary]) ::slotted(forge-button-toggle){--forge-button-toggle-selected-background: var(--forge-theme-primary-container, #d1d5ed);--forge-button-toggle-selected-color: var(--forge-theme-on-primary-container, #222c62);--forge-button-toggle-focus-indicator-color: var(--forge-theme-primary, #3f51b5)}:host([theme=secondary]) ::slotted(forge-button-toggle){--forge-button-toggle-selected-background: var(--forge-theme-secondary-container, #fff0c3);--forge-button-toggle-selected-color: var(--forge-theme-on-secondary-container, #8a6804);--forge-button-toggle-focus-indicator-color: var(--forge-theme-secondary, #ffc107)}:host([theme=success]) ::slotted(forge-button-toggle){--forge-button-toggle-selected-background: var(--forge-theme-success-container, #cde0ce);--forge-button-toggle-selected-color: var(--forge-theme-on-success-container, #19441b);--forge-button-toggle-focus-indicator-color: var(--forge-theme-success, #2e7d32)}:host([theme=error]) ::slotted(forge-button-toggle){--forge-button-toggle-selected-background: var(--forge-theme-error-container, #ecc2c9);--forge-button-toggle-selected-color: var(--forge-theme-on-error-container, #5f0011);--forge-button-toggle-focus-indicator-color: var(--forge-theme-error, #b00020)}:host([theme=warning]) ::slotted(forge-button-toggle){--forge-button-toggle-selected-background: var(--forge-theme-warning-container, #f4d3c2);--forge-button-toggle-selected-color: var(--forge-theme-on-warning-container, #712700);--forge-button-toggle-focus-indicator-color: var(--forge-theme-warning, #d14900)}:host([theme=info]) ::slotted(forge-button-toggle){--forge-button-toggle-selected-background: var(--forge-theme-info-container, #c7daf0);--forge-button-toggle-selected-color: var(--forge-theme-on-info-container, #0b3768);--forge-button-toggle-focus-indicator-color: var(--forge-theme-info, #1565c0)}";var at=Object.defineProperty,it=Object.getOwnPropertyDescriptor,u=(r,t,e,o)=>{for(var a=o>1?void 0:o?it(t,e):t,d=r.length-1,h;d>=0;d--)(h=r[d])&&(a=(o?h(t,e,a):h(a))||a);return o&&a&&at(t,e,a),a};let g=class extends B(H(K(C(S(A))))){static get observedAttributes(){return Object.values(s.observedAttributes)}constructor(){super(),y(this,rt,st),this._core=new ot(new et(this)),this[x]="radio"}connectedCallback(){super.connectedCallback(),this[p]({role:"group"},{setAttribute:!this.hasAttribute("role")}),this._core.initialize()}disconnectedCallback(){this._core.destroy()}attributeChangedCallback(r,t,e){switch(r){case s.observedAttributes.VALUE:this.value=e;break;case s.observedAttributes.NO_OUTLINE:this.outlined=!l(e);break;case s.observedAttributes.MULTIPLE:this.multiple=l(e);break;case s.observedAttributes.MANDATORY:this.mandatory=l(e);break;case s.observedAttributes.VERTICAL:this.vertical=l(e);break;case s.observedAttributes.STRETCH:this.stretch=l(e);break;case s.observedAttributes.DENSE:this.dense=l(e);break;case s.observedAttributes.DISABLED:this.disabled=l(e);break;case s.observedAttributes.REQUIRED:this.required=l(e);break;case s.observedAttributes.READONLY:this.readonly=l(e);break;case s.observedAttributes.THEME:this.theme=e;break}}[L](){const r=Array.isArray(this.value)?this.value.length>0:!!this.value;let t=null;if(r){const e=Array.isArray(this.value)?this.value:[this.value];e.length&&(t=new FormData,e.forEach(o=>t==null?void 0:t.append(this.name,o)))}return t}[k](){const r=new FormData,t=Array.isArray(this.value)?this.value:this.value!=null?[this.value]:[];return r.append("multiple",String(this.multiple)),t.forEach(e=>r.append("value",e)),r}formStateRestoreCallback(r,t){if(t==="restore"&&r instanceof FormData){const e=r.get("multiple")==="true",o=r.getAll("value");if(e){this.multiple=e,this.value=o;return}this.value=o[0]??null}}formResetCallback(){this.value=this.getAttribute("value")}labelChangedCallback(r){this[p]({ariaLabel:r??void 0})}};u([i()],g.prototype,"value",2);u([i()],g.prototype,"outlined",2);u([i()],g.prototype,"multiple",2);u([i()],g.prototype,"mandatory",2);u([i()],g.prototype,"vertical",2);u([i()],g.prototype,"stretch",2);u([i()],g.prototype,"dense",2);u([i()],g.prototype,"disabled",2);u([i()],g.prototype,"required",2);u([i()],g.prototype,"readonly",2);u([i()],g.prototype,"theme",2);g=u([E({name:s.elementName,dependencies:[b]})],g);export{s as B};
