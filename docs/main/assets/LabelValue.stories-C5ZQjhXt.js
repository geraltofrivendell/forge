import{x as E,T as I}from"./lit-element-BOOoordI.js";import"./lit-html-BWgXkSvR.js";import{a as N,g as B,s as M}from"./utils-Cceq4NFH.js";import{C as k,n as w,B as O,o as A,p as b,a2 as L,b as c,t as P,d as $}from"./constants-D32Jr2uy.js";import"./label-value-Cv_kBtZA.js";import{a as j,I as H}from"./icon-CRQudG-b.js";import"./index-Dh0vMUMR.js";import{o as W}from"./style-map-D0ILlpbs.js";import"./accordion-cuT3IWQw.js";import"./expansion-panel-D2Iuz2e0.js";import"./app-bar-profile-button-B1wScxS0.js";import{S as T,a as z}from"./state-layer-BRvIemvG.js";import{F as C,a as S}from"./focus-indicator-DCOk5mvy.js";import"./badge-D_3MDpIf.js";import"./menu-CZIO_1KM.js";import{t as U}from"./index-TSSE1zcJ.js";import"./linear-progress-DDuiLuf_.js";import"./list-dUPbNzHI.js";import"./popover-fL2nRo2T.js";import"./overlay-DiKhgH_u.js";import"./skeleton-BaEsbVV3.js";import"./profile-card-iLELcfNr.js";import"./avatar-DwiD4Mn-.js";import"./icon-button-BIREJzI3.js";import"./autocomplete-DH9KzLad.js";import"./text-field-Dw10Z76S.js";import"./base-field-0V9RDNSH.js";import"./label-CcpeGv-c.js";import"./button-BF9wbu_o.js";import"./button-toggle-group-b68KB2vb.js";import"./checkbox-Chjo1vae.js";import"./switch-DWALD2Z-.js";import"./chip-field-CbM2Vb1n.js";import"./backdrop-VwUyuTaA.js";import"./banner-DnVSUHVq.js";import"./bottom-sheet-B7HzIKL3.js";import"./dialog-Dl1TFNSU.js";import"./button-area-DfIHA_5R.js";import"./calendar-DxJJvdj3.js";import"./card-Dqt9DVr1.js";import"./chip-set-CJfmQDiB.js";import"./circular-progress-DPI9Ytvo.js";import"./color-picker-DleTAxSH.js";import"./date-picker-C7e7hb2D.js";import"./date-range-picker-k3BHZlf-.js";import"./divider-Cv-LZSeV.js";import"./base-drawer-Br9wwrTW.js";import"./drawer-DOjyXyQF.js";import"./modal-drawer-BQHQB06w.js";import"./mini-drawer-Bzie_e2v.js";import"./file-picker-Bi6Jpbzv.js";import"./floating-action-button-D7iLZ85A.js";import"./inline-message-chrSOlkg.js";import"./keyboard-shortcut-Ct0bQKOw.js";import"./page-state-CJgYjQWT.js";import"./paginator-BbZdqDWO.js";import"./scaffold-BmIot1by.js";import"./select-dropdown-Dc6rA1SN.js";import"./select-Dvu-ySrB.js";import"./slider-B7a_j6ad.js";import"./split-view-CkGhM4d5.js";import"./stack-BOql5mJp.js";import"./stepper-Jd5gW5zI.js";import"./table-BoTe3Ima.js";import"./tab-bar-CQJzQsBS.js";import"./time-picker-D7CxLcjT.js";import"./toast-IsFxLB4L.js";import"./toolbar-D-wl2gB3.js";import"./tooltip-BTx4ydNh.js";import"./view-switcher-BMaGU6Qi.js";import"./split-button-Dri0l8mA.js";const F=`${k}deprecated-button`,G={TYPE:"type",DISABLED:"disabled",FULL_WIDTH:"full-width"},R={BUTTON:"button,a"},a={elementName:F,attributes:G,selectors:R},Y=`<template>
  <slot></slot>
  <forge-focus-indicator part="focus-indicator"></forge-focus-indicator>
  <forge-state-layer exportparts="surface:state-layer"></forge-state-layer>
</template>
`,K=':host{--_button-primary-color: var(--forge-button-primary-color, var(--forge-theme-primary, #3f51b5));--_button-text-color: var(--forge-button-text-color, var(--_button-primary-color));--_button-disabled-color: var(--forge-button-disabled-color, var(--forge-theme-surface-container, #e0e0e0));--_button-padding: var(--forge-button-padding, 8px);--_button-display: var(--forge-button-display, inline-flex);--_button-justify: var(--forge-button-justify, center);--_button-shape: var(--forge-button-shape, var(--forge-shape-medium, 4px));--_button-height: var(--forge-button-height, 36px);--_button-min-width: var(--forge-button-min-width, 64px);--_button-spacing: var(--forge-button-spacing, var(--forge-spacing-xsmall, 8px));--_button-border-width: var(--forge-button-border-width, medium);--_button-border-style: var(--forge-button-border-style, none);--_button-border-color: var(--forge-button-border-color, currentColor);--_button-shape-start-start-radius: var(--forge-button-shape-start-start-radius, var(--_button-shape));--_button-shape-start-end-radius: var(--forge-button-shape-start-end-radius, var(--_button-shape));--_button-shape-end-start-radius: var(--forge-button-shape-end-start-radius, var(--_button-shape));--_button-shape-end-end-radius: var(--forge-button-shape-end-end-radius, var(--_button-shape));--_button-padding-block: var(--forge-button-padding-block, var(--_button-padding));--_button-padding-inline: var(--forge-button-padding-inline, var(--_button-padding));--_button-background: var(--forge-button-background, transparent);--_button-hover-background: var(--forge-button-hover-background, var(--_button-background));--_button-active-background: var(--forge-button-active-background, var(--_button-background));--_button-color: var(--forge-button-color, var(--_button-text-color));--_button-icon-size: var(--forge-button-icon-size, calc(var(--forge-typography-font-size, 1rem) * 1.125));--_button-shadow: var(--forge-button-shadow, none);--_button-hover-shadow: var(--forge-button-hover-shadow, none);--_button-active-shadow: var(--forge-button-active-shadow, none);--_button-cursor: var(--forge-button-cursor, pointer);--_button-transition-duration: var(--forge-button-transition-duration, var(--forge-animation-duration-short3, .15s));--_button-transition-timing: var(--forge-button-transition-timing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_button-outlined-background: var(--forge-button-outlined-background, transparent);--_button-outlined-color: var(--forge-button-outlined-color, var(--_button-primary-color));--_button-outlined-border-width: var(--forge-button-outlined-border-width, var(--forge-border-thin, 1px));--_button-outlined-border-style: var(--forge-button-outlined-border-style, solid);--_button-outlined-border-color: var(--forge-button-outlined-border-color, var(--_button-primary-color));--_button-tonal-background: var(--forge-button-tonal-background, var(--forge-theme-primary-container, #d1d5ed));--_button-tonal-disabled-background: var(--forge-button-tonal-disabled-background, var(--_button-disabled-color));--_button-tonal-color: var(--forge-button-tonal-color, var(--forge-theme-on-primary-container, #222c62));--_button-tonal-disabled-color: var(--forge-button-tonal-disabled-color, var(--_button-disabled-text-color));--_button-filled-background: var(--forge-button-filled-background, var(--_button-primary-color));--_button-filled-disabled-background: var(--forge-button-filled-disabled-background, var(--_button-disabled-color));--_button-filled-color: var(--forge-button-filled-color, var(--forge-theme-on-primary, #ffffff));--_button-filled-disabled-color: var(--forge-button-filled-disabled-color, var(--_button-disabled-text-color));--_button-raised-shadow: var(--forge-button-raised-shadow, 0px 3px 1px -2px rgba(0, 0, 0, .2), 0px 2px 2px 0px rgba(0, 0, 0, .14), 0px 1px 5px 0px rgba(0, 0, 0, .12));--_button-raised-hover-shadow: var(--forge-button-raised-hover-shadow, 0px 2px 4px -1px rgba(0, 0, 0, .2), 0px 4px 5px 0px rgba(0, 0, 0, .14), 0px 1px 10px 0px rgba(0, 0, 0, .12));--_button-raised-active-shadow: var(--forge-button-raised-active-shadow, 0px 5px 5px -3px rgba(0, 0, 0, .2), 0px 8px 10px 1px rgba(0, 0, 0, .14), 0px 3px 14px 2px rgba(0, 0, 0, .12));--_button-raised-disabled-shadow: var(--forge-button-raised-disabled-shadow, none);--_button-link-color: var(--forge-button-link-color, var(--_button-primary-color));--_button-link-text-decoration: var(--forge-button-link-text-decoration, underline);--_button-link-height: var(--forge-button-link-height, auto);--_button-link-padding: var(--forge-button-link-padding, 0);--_button-link-line-height: var(--forge-button-link-line-height, normal);--_button-link-width: var(--forge-button-link-width, auto);--_button-link-hover-text-decoration: var(--forge-button-link-hover-text-decoration, none);--_button-link-active-opacity: var(--forge-button-link-active-opacity, .65);--_button-link-transition-duration: var(--forge-button-link-transition-duration, var(--forge-animation-duration-short3, .15s));--_button-link-transition-timing: var(--forge-button-link-transition-timing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_button-disabled-cursor: var(--forge-button-disabled-cursor, not-allowed);--_button-disabled-text-color: var(--forge-button-disabled-text-color, var(--forge-theme-text-low, rgba(0, 0, 0, .38)));--_button-disabled-background: var(--forge-button-disabled-background, transparent);--_button-disabled-border-color: var(--forge-button-disabled-border-color, var(--_button-disabled-color));--_button-disabled-shadow: var(--forge-button-disabled-shadow, none);--_button-dense-height: var(--forge-button-dense-height, 24px);--_button-pill-shape: var(--forge-button-pill-shape, var(--forge-shape-full, 9999px));--_button-pill-padding-inline: var(--forge-button-pill-padding-inline, var(--forge-spacing-small, 12px));--_button-focus-indicator-offset: var(--forge-button-focus-indicator-offset, 4px);--_button-text-focus-indicator-offset: var(--forge-button-text-focus-indicator-offset, 0px);--_button-link-focus-indicator-offset: var(--forge-button-link-focus-indicator-offset, 2px);--_button-popover-icon-transition-duration: var(--forge-button-popover-icon-transition-duration, var(--forge-animation-duration-short3, .15s));--_button-popover-icon-transition-timing: var(--forge-button-popover-icon-transition-timing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_button-popover-icon-open-rotation: var(--forge-button-popover-icon-open-rotation, 180deg)}:host{display:var(--_button-display);position:relative;outline:none;-webkit-tap-highlight-color:transparent;border-radius:var(--_button-shape)}:host([hidden]){display:none}::slotted(:is(button,a)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-button-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-button-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-button-font-size-scale, .875)));font-weight:var(--forge-typography-button-font-weight, 500);line-height:var(--forge-typography-button-line-height, normal);letter-spacing:var(--forge-typography-button-letter-spacing, .0714285714em);text-transform:var(--forge-typography-button-text-transform, inherit);text-decoration:var(--forge-typography-button-text-decoration, inherit);position:relative;display:var(--_button-display);align-items:center;justify-content:var(--_button-justify);gap:var(--_button-spacing);z-index:0;box-sizing:border-box;min-inline-size:var(--_button-min-width);height:var(--_button-height);inline-size:100%;border-width:var(--_button-border-width);border-style:var(--_button-border-style);border-color:var(--_button-border-color);border-start-start-radius:var(--_button-shape-start-start-radius);border-start-end-radius:var(--_button-shape-start-end-radius);border-end-start-radius:var(--_button-shape-end-start-radius);border-end-end-radius:var(--_button-shape-end-end-radius);padding-block:var(--_button-padding-block);padding-inline:var(--_button-padding-inline);box-shadow:var(--_button-shadow);outline:none;-webkit-user-select:none;user-select:none;-webkit-appearance:none;vertical-align:middle;text-decoration:none;white-space:nowrap;background:var(--_button-background);color:var(--_button-color);cursor:var(--_button-cursor);transition-property:box-shadow,background;transition-duration:var(--_button-transition-duration);transition-timing-function:var(--_button-transition-timing);--forge-icon-font-size: 1.25em}::slotted(:is(button,a))::-moz-focus-inner{padding:0;border:0}::slotted(:is(button,a)):hover{--_button-shadow: var(--_button-hover-shadow);background:var(--_button-hover-background)}::slotted(:is(button,a)):active{--_button-shadow: var(--_button-active-shadow);background:var(--_button-active-background)}::slotted(a){text-decoration:none;--forge-typography-link-text-decoration: none}forge-state-layer{--forge-state-layer-color: var(--_button-color)}forge-focus-indicator{--forge-focus-indicator-color: var(--_button-primary-color);--forge-focus-indicator-outward-offset: var(--_button-focus-indicator-offset)}:host(:is([type*=unelevated],[type*=raised])) ::slotted(:is(button,a)){--_button-background: var(--_button-filled-background);--_button-color: var(--_button-filled-color)}:host(:is([type*=unelevated],[type*=raised])) forge-state-layer{--forge-state-layer-color: var(--_button-filled-color)}:host([type*=raised]) ::slotted(:is(button,a)){--_button-shadow: var(--_button-raised-shadow)}:host([type*=raised]) ::slotted(:is(button,a)):hover{--_button-shadow: var(--_button-raised-hover-shadow)}:host([type*=raised]) ::slotted(:is(button,a)):active{--_button-shadow: var(--_button-raised-active-shadow)}:host([type*=outlined]) ::slotted(:is(button,a)){--_button-background: var(--_button-outlined-background);--_button-color: var(--_button-outlined-color);--_button-border-width: var(--_button-outlined-border-width);--_button-border-style: var(--_button-outlined-border-style);--_button-border-color: var(--_button-outlined-border-color)}:host([full-width]){width:100%}:host(:is([dense],[type*=dense])) ::slotted(:is(button,a)){--_button-height: var(--_button-dense-height)}:host([disabled]){cursor:var(--_button-disabled-cursor)}:host([disabled]) ::slotted(button[disabled]){--_button-background: var(--_button-disabled-background);--_button-color: var(--_button-disabled-text-color);--_button-shadow: var(--_button-disabled-shadow);pointer-events:none}:host([type*=outlined][disabled]) ::slotted(button[disabled]){--_button-border-color: var(--_button-disabled-border-color)}:host(:is([type*=unelevated],[type*=raised])[disabled]) ::slotted(button[disabled]){--_button-background: var(--_button-filled-disabled-background);--_button-color: var(--_button-filled-disabled-color)}:host([type*=raised][disabled]) ::slotted(button[disabled]){--_button-shadow: var(--_button-raised-disabled-shadow)}';var q=Object.defineProperty,V=Object.getOwnPropertyDescriptor,X=(t,o,e,n)=>{for(var r=n>1?void 0:n?V(o,e):o,s=t.length-1,d;s>=0;s--)(d=t[s])&&(r=(n?d(o,e,r):d(r))||r);return n&&r&&q(o,e,r),r};let g=class extends O{constructor(){super(),this._buttonOrAnchorElement=null,this._disabled=!1,this._fullWidth=!1,this._buttonChangeListener=this._onButtonChange.bind(this),this._keydownListener=t=>this._onKeydown(t),A(this,Y,K),this._slotElement=b(this,"slot:not([name])"),this._focusIndicator=b(this,C.elementName),this._stateLayer=b(this,T.elementName)}static get observedAttributes(){return Object.values(a.attributes)}connectedCallback(){this._slotElement.addEventListener("slotchange",this._buttonChangeListener),this.children.length?this._initialize():L(this).then(()=>this._initialize())}disconnectedCallback(){this._detachButton()}attributeChangedCallback(t,o,e){switch(t){case a.attributes.TYPE:this.type=e;return;case a.attributes.DISABLED:this.disabled=c(e);return;case a.attributes.FULL_WIDTH:this.fullWidth=c(e);return}}_onKeydown(t){(t.key==="Enter"||t.key===" ")&&this._stateLayer.playAnimation()}_onButtonChange(){this._detachButton(),this._initialize()}_initialize(){this._buttonOrAnchorElement=this.querySelector(a.selectors.BUTTON),this._buttonOrAnchorElement&&(this._stateLayer.targetElement=this._buttonOrAnchorElement,this._focusIndicator.targetElement=this._buttonOrAnchorElement,this._buttonOrAnchorElement.addEventListener("keydown",this._keydownListener),this._buttonOrAnchorElement instanceof HTMLButtonElement&&this._disabled&&!this._buttonOrAnchorElement.disabled?this._buttonOrAnchorElement.disabled=!0:this.disabled=this._buttonOrAnchorElement instanceof HTMLButtonElement&&this._buttonOrAnchorElement.disabled,this._buttonOrAnchorElement instanceof HTMLButtonElement&&(this._buttonAttrMutationObserver=new MutationObserver(t=>{t.some(o=>o.attributeName==="disabled")&&this._syncDisabledState()}),this._buttonAttrMutationObserver.observe(this._buttonOrAnchorElement,{attributes:!0,attributeFilter:["disabled"]})))}_syncDisabledState(){const t=this._buttonOrAnchorElement instanceof HTMLButtonElement&&this._buttonOrAnchorElement.disabled;P(this,t,a.attributes.DISABLED)}_detachButton(){var t;(t=this._buttonOrAnchorElement)==null||t.removeEventListener("keydown",this._keydownListener),this._buttonAttrMutationObserver&&(this._buttonAttrMutationObserver.disconnect(),this._buttonAttrMutationObserver=void 0)}get type(){return this._type}set type(t){this._type!==t&&(this._type=t,this.setAttribute(a.attributes.TYPE,this._type))}get disabled(){return this._disabled}set disabled(t){var o;this._disabled!==t&&(this._disabled=t,(o=this._buttonOrAnchorElement)==null||o.toggleAttribute(a.attributes.DISABLED,this._disabled),this.toggleAttribute(a.attributes.DISABLED,this._disabled))}get fullWidth(){return this._fullWidth}set fullWidth(t){this._fullWidth!==t&&(this._fullWidth=t,this.toggleAttribute(a.attributes.FULL_WIDTH,this._fullWidth))}focus(t){var o;(o=this._buttonOrAnchorElement)==null||o.focus(t)}};g=X([w({name:a.elementName,dependencies:[S,z]})],g);const J=`${k}deprecated-icon-button`,D={DISABLED:"disabled",TOGGLE:"toggle",IS_ON:"is-on",DENSITY_LEVEL:"density-level"},Q={...D,ON_ICON:"forge-icon-button-on"},Z={BUTTON:"button,a",ICON_LIKE:"button > i,span,svg,img,forge-icon"},tt={TOGGLE:"forge-icon-button-toggle"},i={elementName:J,observedAttributes:D,attributes:Q,selectors:Z,events:tt},ot=`<template>
  <slot></slot>
  <forge-focus-indicator part="focus-indicator"></forge-focus-indicator>
  <forge-state-layer exportparts="surface:state-layer"></forge-state-layer>
</template>
`,et=":host{--_icon-button-display: var(--forge-icon-button-display, inline-flex);--_icon-button-size: var(--forge-icon-button-size, 48px);--_icon-button-gap: var(--forge-icon-button-gap, 0);--_icon-button-icon-color: var(--forge-icon-button-icon-color, currentColor);--_icon-button-background-color: var(--forge-icon-button-background-color, none);--_icon-button-icon-size: var(--forge-icon-button-icon-size, calc(var(--forge-typography-font-size, 1rem) * 1.5));--_icon-button-cursor: var(--forge-icon-button-cursor, pointer);--_icon-button-padding: var(--forge-icon-button-padding, var(--forge-spacing-xxsmall, 4px));--_icon-button-border: var(--forge-icon-button-border, none);--_icon-button-shadow: var(--forge-icon-button-shadow, none);--_icon-button-transition-duration: var(--forge-icon-button-transition-duration, var(--forge-animation-duration-short3, .15s));--_icon-button-transition-timing: var(--forge-icon-button-transition-timing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_icon-button-shape: var(--forge-icon-button-shape, var(--forge-shape-full, 9999px));--_icon-button-shape-start-start: var(--forge-icon-button-shape-start-start, var(--_icon-button-shape));--_icon-button-shape-start-end: var(--forge-icon-button-shape-start-end, var(--_icon-button-shape));--_icon-button-shape-end-start: var(--forge-icon-button-shape-end-start, var(--_icon-button-shape));--_icon-button-shape-end-end: var(--forge-icon-button-shape-end-end, var(--_icon-button-shape));--_icon-button-shape-squared: var(--forge-icon-button-shape-squared, var(--forge-shape-medium, 4px));--_icon-button-outlined-border-width: var(--forge-icon-button-outlined-border-width, 1px);--_icon-button-outlined-border-style: var(--forge-icon-button-outlined-border-style, solid);--_icon-button-outlined-border-color: var(--forge-icon-button-outlined-border-color, var(--_icon-button-icon-color));--_icon-button-tonal-icon-color: var(--forge-icon-button-tonal-icon-color, var(--forge-theme-on-primary-container, #222c62));--_icon-button-tonal-background-color: var(--forge-icon-button-tonal-background-color, var(--forge-theme-primary-container, #d1d5ed));--_icon-button-filled-icon-color: var(--forge-icon-button-filled-icon-color, var(--forge-theme-on-primary, #ffffff));--_icon-button-filled-background-color: var(--forge-icon-button-filled-background-color, var(--forge-theme-primary, #3f51b5));--_icon-button-raised-shadow: var(--forge-icon-button-raised-shadow, 0px 3px 1px -2px rgba(0, 0, 0, .2), 0px 2px 2px 0px rgba(0, 0, 0, .14), 0px 1px 5px 0px rgba(0, 0, 0, .12));--_icon-button-raised-hover-shadow: var(--forge-icon-button-raised-hover-shadow, 0px 2px 4px -1px rgba(0, 0, 0, .2), 0px 4px 5px 0px rgba(0, 0, 0, .14), 0px 1px 10px 0px rgba(0, 0, 0, .12));--_icon-button-raised-active-shadow: var(--forge-icon-button-raised-active-shadow, 0px 5px 5px -3px rgba(0, 0, 0, .2), 0px 8px 10px 1px rgba(0, 0, 0, .14), 0px 3px 14px 2px rgba(0, 0, 0, .12));--_icon-button-raised-disabled-shadow: var(--forge-icon-button-raised-disabled-shadow, none);--_icon-button-density-small-size: var(--forge-icon-button-density-small-size, 24px);--_icon-button-density-small-padding: var(--forge-icon-button-density-small-padding, var(--forge-spacing-xxxsmall, 2px));--_icon-button-density-small-icon-size: var(--forge-icon-button-density-small-icon-size, calc(var(--forge-typography-font-size, 1rem) * 1.125));--_icon-button-density-medium-size: var(--forge-icon-button-density-medium-size, 36px);--_icon-button-density-medium-padding: var(--forge-icon-button-density-medium-padding, var(--forge-spacing-xxsmall, 4px));--_icon-button-density-large-size: var(--forge-icon-button-density-large-size, var(--_icon-button-size));--_icon-button-toggle-on-icon-color: var(--forge-icon-button-toggle-on-icon-color, var(--forge-theme-primary, #3f51b5));--_icon-button-outlined-toggle-on-background-color: var(--forge-icon-button-outlined-toggle-on-background-color, var(--forge-theme-primary-container, #d1d5ed));--_icon-button-outlined-toggle-on-icon-color: var(--forge-icon-button-outlined-toggle-on-icon-color, var(--forge-theme-primary, #3f51b5));--_icon-button-tonal-toggle-background-color: var(--forge-icon-button-tonal-toggle-background-color, var(--forge-theme-surface-container-low, #ebebeb));--_icon-button-tonal-toggle-on-background-color: var(--forge-icon-button-tonal-toggle-on-background-color, var(--forge-theme-primary-container, #d1d5ed));--_icon-button-tonal-toggle-on-icon-color: var(--forge-icon-button-tonal-toggle-on-icon-color, var(--forge-theme-primary, #3f51b5));--_icon-button-filled-toggle-background-color: var(--forge-icon-button-filled-toggle-background-color, var(--forge-theme-surface-container-low, #ebebeb));--_icon-button-filled-toggle-icon-color: var(--forge-icon-button-filled-toggle-icon-color, var(--forge-theme-primary, #3f51b5));--_icon-button-filled-toggle-on-background-color: var(--forge-icon-button-filled-toggle-on-background-color, var(--forge-theme-primary, #3f51b5));--_icon-button-filled-toggle-on-icon-color: var(--forge-icon-button-filled-toggle-on-icon-color, var(--forge-theme-on-primary, #ffffff));--_icon-button-disabled-cursor: var(--forge-icon-button-disabled-cursor, not-allowed);--_icon-button-disabled-opacity: var(--forge-icon-button-disabled-opacity, .38);--_icon-button-popover-icon-padding: var(--forge-icon-button-popover-icon-padding, var(--forge-spacing-xsmall, 8px));--_icon-button-focus-indicator-color: var(--forge-icon-button-focus-indicator-color, var(--forge-theme-primary, #3f51b5))}:host{display:var(--_icon-button-display);position:relative;outline:none;-webkit-tap-highlight-color:transparent;border-start-start-radius:var(--_icon-button-shape-start-start);border-start-end-radius:var(--_icon-button-shape-start-end);border-end-start-radius:var(--_icon-button-shape-end-start);border-end-end-radius:var(--_icon-button-shape-end-end)}:host([hidden]){display:none}::slotted(:is(button,a)){position:relative;z-index:0;display:var(--_icon-button-display);align-items:center;justify-content:center;gap:var(--_icon-button-gap);box-sizing:border-box;height:var(--_icon-button-density-large-size);min-width:var(--_icon-button-density-large-size);border:var(--_icon-button-border);border-start-start-radius:var(--_icon-button-shape-start-start);border-start-end-radius:var(--_icon-button-shape-start-end);border-end-start-radius:var(--_icon-button-shape-end-start);border-end-end-radius:var(--_icon-button-shape-end-end);padding:var(--_icon-button-padding);box-shadow:var(--_icon-button-shadow);color:var(--_icon-button-icon-color);background:var(--_icon-button-background-color);cursor:var(--_icon-button-cursor);-webkit-user-select:none;user-select:none;transition-property:box-shadow,background;transition-duration:var(--_icon-button-transition-duration);transition-timing-function:var(--_icon-button-transition-timing);font-size:var(--_icon-button-icon-size);height:var(--_icon-button-size);width:var(--_icon-button-size)}::slotted(a){text-decoration:none;color:var(--_icon-button-icon-color)!important}forge-state-layer{--forge-state-layer-color: var(--_icon-button-icon-color)}forge-focus-indicator{--forge-focus-indicator-outward-offset: 0px;--forge-focus-indicator-color: var(--_icon-button-focus-indicator-color);--forge-focus-indicator-shape-start-start: var(--_icon-button-shape-start-start);--forge-focus-indicator-shape-start-end: var(--_icon-button-shape-start-end);--forge-focus-indicator-shape-end-start: var(--_icon-button-shape-end-start);--forge-focus-indicator-shape-end-end: var(--_icon-button-shape-end-end)}:host(:is([dense],[density=large]):not(:is([density=medium],[density-level]))){--_icon-button-size: var(--_icon-button-density-small-size);--_icon-button-icon-size: var(--_icon-button-density-small-icon-size);--_icon-button-padding: var(--_icon-button-density-small-padding);--forge-icon-font-size: var(--_icon-button-icon-size)}:host([dense]:not([density=large]):not([density=small]):is([density=medium],[density-level])){--_icon-button-size: var(--_icon-button-density-medium-size);--_icon-button-padding: var(--_icon-button-density-medium-padding)}:host([disabled]){cursor:var(--_icon-button-disabled-cursor)}:host([disabled]) ::slotted(button[disabled]){pointer-events:none;opacity:var(--_icon-button-disabled-opacity)}:host([toggle]:is([on],[is-on]):not([is-on=false])){--_icon-button-icon-color: var(--_icon-button-toggle-on-icon-color);--_icon-button-background-color: var(--forge-icon-button-background-color, var(--forge-theme-primary-container-low, #e8eaf6))}";var nt=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,it=(t,o,e,n)=>{for(var r=n>1?void 0:n?rt(o,e):o,s=t.length-1,d;s>=0;s--)(d=t[s])&&(r=(n?d(o,e,r):d(r))||r);return n&&r&&nt(o,e,r),r};let h=class extends O{constructor(){super(),this._disabled=!1,this._toggle=!1,this._isOn=!1,this._densityLevel=0,this._buttonOrAnchorElement=null,this._slotChangeListener=this._onSlotChange.bind(this),this._keydownListener=this._onKeydown.bind(this),this._toggleClickListener=this._onToggle.bind(this),A(this,ot,et),this._slotElement=b(this,"slot:not([name])"),this._focusIndicator=b(this,C.elementName),this._stateLayer=b(this,T.elementName)}static get observedAttributes(){return Object.values(i.attributes)}connectedCallback(){this._slotElement.addEventListener("slotchange",this._slotChangeListener),this.children.length?this._initialize():L(this).then(()=>this._initialize())}disconnectedCallback(){this._detachButton()}attributeChangedCallback(t,o,e){switch(t){case i.attributes.DISABLED:this.disabled=c(e);return;case i.attributes.TOGGLE:this.toggle=c(e);return;case i.attributes.IS_ON:this.isOn=c(e);return;case i.attributes.DENSITY_LEVEL:this.densityLevel=$(e);return}}_onKeydown(t){(t.key==="Enter"||t.key===" ")&&this._stateLayer.playAnimation()}_onSlotChange(){this._detachButton(),this._initialize()}_onToggle(){this.isOn=!this._isOn,this.dispatchEvent(new CustomEvent("forge-icon-button-toggle",{bubbles:!0,composed:!0,detail:this._isOn}))}_initialize(){this._buttonOrAnchorElement=this.querySelector(i.selectors.BUTTON),this._buttonOrAnchorElement&&(this._stateLayer.targetElement=this._buttonOrAnchorElement,this._focusIndicator.targetElement=this._buttonOrAnchorElement,this._buttonOrAnchorElement.addEventListener("keydown",this._keydownListener),this._buttonOrAnchorElement instanceof HTMLButtonElement&&this._disabled&&!this._buttonOrAnchorElement.disabled?this._buttonOrAnchorElement.disabled=!0:this.disabled=this._buttonOrAnchorElement instanceof HTMLButtonElement&&this._buttonOrAnchorElement.disabled,this._toggle&&this._initializeToggle(),this._buttonOrAnchorElement instanceof HTMLButtonElement&&(this._buttonAttrMutationObserver=new MutationObserver(t=>{t.some(o=>o.attributeName==="disabled")&&this._syncDisabledState()}),this._buttonAttrMutationObserver.observe(this._buttonOrAnchorElement,{attributes:!0,attributeFilter:["disabled"]})))}_syncDisabledState(){const t=this._buttonOrAnchorElement instanceof HTMLButtonElement&&this._buttonOrAnchorElement.disabled;this.toggleAttribute(i.attributes.DISABLED,t)}_detachButton(){var t;(t=this._buttonOrAnchorElement)==null||t.removeEventListener("keydown",this._keydownListener),this._buttonAttrMutationObserver&&(this._buttonAttrMutationObserver.disconnect(),this._buttonAttrMutationObserver=void 0)}_initializeToggle(){this._buttonOrAnchorElement&&(this._buttonOrAnchorElement.addEventListener("click",this._toggleClickListener),this._syncToggleState())}_destroyToggle(){var t;(t=this._buttonOrAnchorElement)==null||t.removeEventListener("click",this._toggleClickListener)}_syncToggleState(){const t=Array.from(this.querySelectorAll(i.selectors.ICON_LIKE)),o=t.find(n=>n.hasAttribute(i.attributes.ON_ICON)),e=t.filter(n=>n!==o);o==null||o.toggleAttribute("hidden",!this._isOn),e.forEach(n=>n.toggleAttribute("hidden",this._isOn)),this.toggleAttribute(i.attributes.IS_ON,this._isOn)}get disabled(){return this._disabled}set disabled(t){var o;t=!!t,this._disabled!==t&&(this._disabled=t,(o=this._buttonOrAnchorElement)==null||o.toggleAttribute(i.attributes.DISABLED,this._disabled),this.toggleAttribute(i.attributes.DISABLED,this._disabled))}get toggle(){return this._toggle}set toggle(t){t=!!t,this._toggle!==t&&(this._toggle=t,this.isConnected&&(this._toggle?this._initializeToggle():this._destroyToggle()),this.toggleAttribute(i.attributes.TOGGLE,this._toggle))}get isOn(){return this._isOn}set isOn(t){t=!!t,this._isOn!==t&&(this._isOn=t,this.isConnected&&this._syncToggleState())}get densityLevel(){return this._densityLevel}set densityLevel(t){this._densityLevel!==t&&(this._densityLevel=t,this.setAttribute(i.attributes.DENSITY_LEVEL,String(this._densityLevel)))}focus(t){var o;(o=this._buttonOrAnchorElement)==null||o.focus(t)}};h=it([w({name:i.elementName,dependencies:[j,S,z]})],h);const p="forge-label-value",at={title:"Components/Label Value",render:t=>{const o=N(t),e=o?W(o):I;return E`
      <div style="width: 100px">
        <forge-label-value .empty=${t.empty} .ellipsis=${t.ellipsis} .inline=${t.inline} .dense=${t.dense} style=${e}>
          <label slot="label">Label</label>
          <span slot="value">A simple value</span>
        </forge-label-value>
      </div>
    `},component:p,parameters:{actions:{disable:!0}},argTypes:{...B({tagName:p})},args:{}},l={},u={...M,render:()=>(H.define([U]),E`
      <forge-label-value>
        <forge-icon name="person" slot="icon"></forge-icon>
        <label slot="label">Label</label>
        <span slot="value">A simple value</span>
      </forge-label-value>
    `)};var _,f,v;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:"{}",...(v=(f=l.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var m,y,x;u.parameters={...u.parameters,docs:{...(m=u.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...standaloneStoryParams,
  render: () => {
    IconRegistry.define([tylIconPerson]);
    return html\`
      <forge-label-value>
        <forge-icon name="person" slot="icon"></forge-icon>
        <label slot="label">Label</label>
        <span slot="value">A simple value</span>
      </forge-label-value>
    \`;
  }
}`,...(x=(y=u.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const st=["Demo","Icon"],Ao=Object.freeze(Object.defineProperty({__proto__:null,Demo:l,Icon:u,__namedExportsOrder:st,default:at},Symbol.toStringTag,{value:"Module"}));export{l as D,u as I,Ao as L};
