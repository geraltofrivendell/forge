import{C as v,q as g,a6 as A,t as T,a7 as L,o as u,B as b,p as y,b as l}from"./constants-DjE6emXm.js";import{B as w,c as p}from"./base-adapter-F7QHxK2H.js";import{y as S}from"./index-CIZ3m0iD.js";import"./index-Dh0vMUMR.js";import{F as C,r as _,a as x}from"./focus-indicator-BPFZRBe9.js";import{I as B,a as D}from"./icon-DjINFoyU.js";import{I}from"./icon-button-B2LQlK1e.js";import{S as R,a as z}from"./state-layer-D8bHAvjj.js";const N=`${v}chip-set`,E={VERTICAL:"vertical",TYPE:"type",DENSE:"dense",DISABLED:"disabled",INVALID:"invalid",THEME:"theme"},P={...E},H={ROOT:".forge-chip-set"},a={elementName:N,observedAttributes:E,attributes:P,selectors:H},f=`${v}chip`,k={TYPE:"type",VALUE:"value",SELECTED:"selected",INVALID:"invalid",DISABLED:"disabled",DENSE:"dense",THEME:"theme",HREF:"href",TARGET:"target",DOWNLOAD:"download",REL:"rel"},O={...k},M={ROOT:".forge-chip",TRIGGER:"#trigger"},$={DELETE:`${f}-delete`,SELECT:`${f}-select`,NAVIGATE:`${f}-navigate`},F={TYPE:"action",THEME:"primary"},r={elementName:f,observedAttributes:k,attributes:O,selectors:M,events:$,defaults:F},V=`<div class="checkmark" aria-hidden="true">
  <svg viewBox="-2 -3 30 30">
    <path fill="none" stroke="black" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
  </svg>
</div>
`;class G extends w{constructor(e){super(e),this._component=e,this._rootElement=g(this._component,r.selectors.ROOT),this._triggerElement=g(this._component,r.selectors.TRIGGER),this._startSlotElement=g(this._component,"slot[name=start]"),this._focusIndicatorElement=g(this._component,C.elementName),this._stateLayerElement=g(this._component,R.elementName)}get removeButtonElement(){return this._removeButtonElement}get isAnchor(){return this._triggerElement.localName==="a"}clickTrigger(){this._triggerElement.click()}addRootListener(e,t){this._rootElement.addEventListener(e,t)}removeRootListener(e,t){this._rootElement.removeEventListener(e,t)}setAnchor(e){if(e){if(this._triggerElement.localName==="button"){const t=this._createAnchorElement();this._triggerElement=_(this._triggerElement,t)}}else if(this._triggerElement.localName==="a"){const t=this._createButtonElement();this._triggerElement=_(this._triggerElement,t)}this._stateLayerElement.targetElement!==this._triggerElement&&(this._stateLayerElement.targetElement=this._triggerElement),this._focusIndicatorElement.targetElement!==this._triggerElement&&(this._focusIndicatorElement.targetElement=this._triggerElement)}setAnchorProperty(e,t){this._triggerElement.localName==="a"&&this._triggerElement instanceof HTMLAnchorElement&&(this._triggerElement[e]=t)}setCheckmarkVisibility(e){e?(this._checkmarkElement||(this._checkmarkElement=A(V)),this._rootElement.insertBefore(this._checkmarkElement,this._rootElement.firstChild)):this._checkmarkElement&&this._checkmarkElement.isConnected&&this._checkmarkElement.remove()}setDisabled(e){if(this._triggerElement instanceof HTMLAnchorElement){this._focusIndicatorElement.isConnected||this._rootElement.append(this._focusIndicatorElement),this._stateLayerElement.isConnected||this._rootElement.append(this._stateLayerElement);return}this._removeButtonElement&&(this._removeButtonElement.disabled=e),this._triggerElement.disabled=e,this._triggerElement.tabIndex=e?-1:0,e?(this._focusIndicatorElement.remove(),this._stateLayerElement.remove()):this._rootElement.append(this._focusIndicatorElement,this._stateLayerElement)}setSelected(e){this._triggerElement instanceof HTMLAnchorElement||T(this._triggerElement,e,"aria-pressed",String(e))}toggleFieldVariant(e){e?(this._stateLayerElement.isConnected||this._rootElement.append(this._stateLayerElement),this._focusIndicatorElement.targetElement!==this._triggerElement&&(this._focusIndicatorElement.targetElement=this._triggerElement)):this._stateLayerElement.remove()}setDeleteButtonVisibility(e){var t;e?(this._removeButtonElement||(this._removeButtonElement=this._createRemoveButton()),this._rootElement.appendChild(this._removeButtonElement)):(t=this._removeButtonElement)==null||t.remove()}setStartSlotVisibility(e){this._startSlotElement.style.display=e?"":"none"}getChipSetState(){let e=null;const t=L(this._component,o=>o&&o.nodeName===a.elementName.toUpperCase());return t&&(e={type:t.type,disabled:t.disabled,dense:t.dense}),e}focusTrigger(e){this._triggerElement.focus({preventScroll:!0,...e})}tryFocusRemoveButton(){this._removeButtonElement?this._removeButtonElement.focus({preventScroll:!0,focusVisible:!0}):this.focusTrigger()}clickRemoveButton(){var e;(e=this._removeButtonElement)==null||e.click()}animateStateLayer(){this._stateLayerElement.playAnimation()}_createRemoveButton(){const e=document.createElement("forge-icon-button");e.density="small",e.id="remove-button",e.classList.add("remove"),e.tabIndex=-1,e.setAttribute("aria-label",`Remove ${this._component.innerText}`),e.setAttribute("part","remove-button");const t=document.createElement("forge-icon");return t.name="close",e.appendChild(t),e}_createAnchorElement(){const e=document.createElement("a");return e.id="trigger",e.setAttribute("part","trigger"),e.classList.add("trigger"),this._component.href&&(e.href=this._component.href),this._component.target&&(e.target=this._component.target),this._component.download&&(e.download=this._component.download),this._component.rel&&(e.rel=this._component.rel),e}_createButtonElement(){const e=document.createElement("button");return e.type="button",e.id="trigger",e.setAttribute("part","trigger"),e.classList.add("trigger"),this._component.disabled&&(e.disabled=!0),this._component.selected&&e.setAttribute("aria-pressed","true"),e}}class Y{constructor(e){this._adapter=e,this._type=r.defaults.TYPE,this._selected=!1,this._invalid=!1,this._disabled=!1,this._dense=!1,this._theme=r.defaults.THEME,this._clickListener=this._onClick.bind(this),this._keydownListener=this._onKeydown.bind(this)}initialize(){this._attachListeners(),this._tryInheritChipSetState()}focus(e){this._adapter.focusTrigger(e)}focusRemoveButton(){var e;(e=this._adapter.removeButtonElement)==null||e.focus()}click(){this._adapter.clickTrigger()}_attachListeners(){this._adapter.addRootListener("click",this._clickListener),this._adapter.addRootListener("keydown",this._keydownListener)}_detachListeners(){this._adapter.removeRootListener("click",this._clickListener),this._adapter.removeRootListener("keydown",this._keydownListener)}_tryInheritChipSetState(){const e=this._adapter.getChipSetState();e&&(e.type!==void 0&&(this.type=e.type),e.disabled!==void 0&&(this.disabled=e.disabled),e.dense!==void 0&&(this.dense=e.dense))}_onClick(e){this._isRemoveButton(e)?(e.stopImmediatePropagation(),this._dispatchDeleteEvent()):this._handleSelectInteraction()}_onKeydown(e){switch(e.key){case"Delete":case"Backspace":this._type==="input"&&(e.preventDefault(),this._dispatchDeleteEvent());break;case"Enter":case" ":e.preventDefault(),this._isRemoveButton(e)?(e.stopImmediatePropagation(),e.key==="Enter"&&this._adapter.clickRemoveButton()):(this.click(),this._adapter.isAnchor&&this._adapter.animateStateLayer());break;case"ArrowLeft":case"ArrowRight":this._tryNavigate(e);break;case"Tab":this._type==="input"&&this._isRemoveButton(e)&&this._tryNavigate(e);break}}_tryNavigate(e){var o;if(this._type==="input"){if(!!((o=this._adapter.removeButtonElement)!=null&&o.matches(":focus"))){if(e.stopPropagation(),e.preventDefault(),e.key==="ArrowLeft"){this._adapter.focusTrigger();return}}else if(e.key==="ArrowRight"){this._adapter.tryFocusRemoveButton();return}}const t={direction:e.key==="ArrowRight"||e.key==="Tab"?"next":"previous"};this._adapter.dispatchHostEvent(new CustomEvent(r.events.NAVIGATE,{bubbles:!0,detail:t}))}_isRemoveButton(e){return!!this._adapter.removeButtonElement&&e.composedPath().includes(this._adapter.removeButtonElement)}_handleSelectInteraction(){const e=this._selected;this._selected=!this._selected;const t=this._dispatchSelectEvent();this._selected=e;const o=["filter","choice","input"].includes(this._type);!t&&o&&(this._selected=!this._selected,this._applySelected())}_dispatchSelectEvent(){const e={selected:this._selected,value:this._value},t=new CustomEvent(r.events.SELECT,{detail:e,bubbles:!0,cancelable:!0});return this._adapter.dispatchHostEvent(t),t.defaultPrevented}_dispatchDeleteEvent(){const e={value:this._value};this._adapter.dispatchHostEvent(new CustomEvent(r.events.DELETE,{detail:e,bubbles:!0}))}_applyType(){const e=this._type==="input"||this._type==="field";this._adapter.setDeleteButtonVisibility(e),this._adapter.setCheckmarkVisibility(this._type==="filter"),this._adapter.setStartSlotVisibility(!this._selected),this._adapter.toggleFieldVariant(this._type!=="field"),this._applySelected(),this._adapter.setHostAttribute(r.attributes.TYPE,this._type)}_applySelected(){this._adapter.setSelected(this._selected),this._type==="filter"&&this._adapter.setStartSlotVisibility(!this._selected),this._adapter.toggleHostAttribute(r.attributes.SELECTED,this._selected)}get type(){return this._type}set type(e){this._type!==e&&(this._type=e,["action","choice","filter","input","field"].includes(this._type)||(this._type="action"),this._applyType())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._adapter.setHostAttribute(r.attributes.VALUE,String(this._value)))}get selected(){return this._selected}set selected(e){e=!!e,this._selected!==e&&(this._selected=e,this._applySelected())}get invalid(){return this._invalid}set invalid(e){e=!!e,this._invalid!==e&&(this._invalid=e,this._adapter.toggleHostAttribute(r.attributes.INVALID,e))}get disabled(){return this._disabled}set disabled(e){e=!!e,this._disabled!==e&&(this._disabled=e,this._adapter.setDisabled(this._disabled),this._adapter.isConnected&&(this._disabled?this._detachListeners():this._attachListeners()),this._adapter.toggleHostAttribute(r.attributes.DISABLED,this._disabled))}get dense(){return this._dense}set dense(e){e=!!e,this._dense!==e&&(this._dense=e,this._adapter.toggleHostAttribute(r.attributes.DENSE,this._dense))}get theme(){return this._theme}set theme(e){this._theme!==e&&(this._theme=e??r.defaults.THEME,this._adapter.setHostAttribute(r.attributes.THEME,this._theme))}get href(){return this._href}set href(e){var t;if(this._href!==e){this._href=e;const o=!!((t=this._href)!=null&&t.trim());this._adapter.setAnchor(o),o&&this._disabled&&this._adapter.setDisabled(!1),this._adapter.toggleHostAttribute(r.attributes.HREF,o,this._href)}}get target(){return this._target}set target(e){var t;this._target!==e&&(this._target=e,this._adapter.setAnchorProperty("target",e),this._adapter.toggleHostAttribute(r.attributes.TARGET,!!((t=this._target)!=null&&t.trim()),this._target))}get download(){return this._download}set download(e){var t;this._download!==e&&(this._download=e,this._adapter.setAnchorProperty("download",e),this._adapter.toggleHostAttribute(r.attributes.DOWNLOAD,!!((t=this._download)!=null&&t.trim()),this._download))}get rel(){return this._rel}set rel(e){var t;this._rel!==e&&(this._rel=e,this._adapter.setAnchorProperty("rel",e),this._adapter.toggleHostAttribute(r.attributes.REL,!!((t=this._rel)!=null&&t.trim()),this._rel))}}const j=`<template>
  <div class="forge-chip" part="root">
    <button type="button" id="trigger" class="trigger" part="trigger">
      <slot name="start">
        <slot name="leading"></slot>
      </slot>
      <slot></slot>
      <slot name="end">
        <slot name="trailing"></slot>
      </slot>
    </button>
    <forge-focus-indicator target="trigger" part="focus-indicator"></forge-focus-indicator>
    <forge-state-layer target="trigger" exportparts="surface:state-layer"></forge-state-layer>
  </div>
</template>
`,U=':host{display:inline-flex}:host([hidden]){display:none}.forge-chip{--_chip-background: var(--forge-chip-background, transparent);--_chip-color: var(--forge-chip-color, var(--forge-theme-primary, #3f51b5));--_chip-shape: var(--forge-chip-shape, var(--forge-shape-full, 9999px));--_chip-spacing: var(--forge-chip-spacing, var(--forge-spacing-xsmall, 8px));--_chip-height: var(--forge-chip-height, 32px);--_chip-padding-inline: var(--forge-chip-padding-inline, var(--forge-spacing-small, 12px));--_chip-padding-block: var(--forge-chip-padding-block, 0);--_chip-cursor: var(--forge-chip-cursor, pointer);--_chip-icon-font-size: var(--forge-chip-icon-font-size, 1.5rem);--_chip-disabled-opacity: var(--forge-chip-disabled-opacity, .38);--_chip-disabled-cursor: var(--forge-chip-disabled-cursor, not-allowed);--_chip-dense-height: var(--forge-chip-dense-height, 24px);--_chip-dense-padding-inline: var(--forge-chip-dense-padding-inline, var(--forge-spacing-xsmall, 8px));--_chip-dense-spacing: var(--forge-chip-dense-spacing, var(--forge-spacing-xxsmall, 4px));--_chip-dense-font-size: var(--forge-chip-dense-font-size, .75rem);--_chip-dense-font-weight: var(--forge-chip-dense-font-weight, normal);--_chip-dense-focus-indicator-offset: var(--forge-chip-dense-focus-indicator-offset, var(--forge-spacing-xxxsmall, 2px));--_chip-dense-icon-font-size: var(--forge-chip-dense-icon-font-size, 1.25rem);--_chip-remove-button-spacing: var(--forge-chip-remove-button-spacing, var(--forge-spacing-xsmall, 8px) var(--forge-spacing-xxsmall, 4px));--_chip-remove-button-height-dense: var(--forge-chip-remove-button-height-dense, 18px);--_chip-remove-button-icon-size-dense: var(--forge-chip-remove-button-icon-size-dense, 16px);--_chip-remove-button-spacing-dense: var(--forge-chip-remove-button-spacing-dense, 0 var(--forge-spacing-xxxsmall, 2px));--_chip-selected-background: var(--forge-chip-selected-background, var(--forge-theme-primary, #3f51b5));--_chip-selected-color: var(--forge-chip-selected-color, var(--forge-theme-on-primary, #ffffff));--_chip-invalid-color: var(--forge-chip-invalid-color, var(--forge-theme-error, #b00020));--_chip-invalid-selected-background: var(--forge-chip-invalid-selected-background, var(--forge-theme-error, #b00020));--_chip-invalid-selected-color: var(--forge-chip-invalid-selected-color, var(--forge-theme-on-error, #ffffff));--_chip-border-width: var(--forge-chip-border-width, var(--forge-border-thin, 1px));--_chip-border-style: var(--forge-chip-border-style, solid);--_chip-border-color: var(--forge-chip-border-color, var(--_chip-color));--_chip-field-background: var(--forge-chip-field-background, var(--forge-theme-surface-container-low, #ebebeb));--_chip-field-color: var(--forge-chip-field-color, var(--forge-theme-on-surface-container-low, #000000));--_chip-field-shape: var(--forge-chip-field-shape, var(--forge-shape-medium, 4px));--_chip-field-border-color: var(--forge-chip-field-border-color, transparent);--_chip-field-cursor: var(--forge-chip-field-cursor, default);--_chip-checkmark-size: var(--forge-chip-checkmark-size, 1.25em);--_chip-checkmark-color: var(--forge-chip-checkmark-color, var(--_chip-color));--_chip-checkmark-spacing: var(--forge-chip-checkmark-spacing, var(--forge-spacing-xsmall, 8px));--_chip-avatar-size: var(--forge-chip-avatar-size, 24px);--_chip-avatar-size-dense: var(--forge-chip-avatar-size-dense, 18px);--_chip-avatar-font-size: var(--forge-chip-avatar-font-size, .75rem);--_chip-avatar-font-size-dense: var(--forge-chip-avatar-font-size-dense, .5rem);--_chip-avatar-spacing: var(--forge-chip-avatar-spacing, calc(var(--forge-spacing-xsmall, 8px) * -1));--_chip-avatar-spacing-dense: var(--forge-chip-avatar-spacing-dense, calc(var(--forge-spacing-xxsmall, 4px) * -1));--_chip-transition-duration: var(--forge-chip-transition-duration, var(--forge-animation-duration-short3, .15s));--_chip-transition-easing: var(--forge-chip-transition-easing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_chip-checkmark-transition-delay: var(--forge-chip-checkmark-transition-delay, 50ms)}.forge-chip{position:relative;display:inline-flex;align-items:center;box-sizing:border-box;height:var(--_chip-height);border-width:var(--_chip-border-width);border-style:var(--_chip-border-style);border-color:var(--_chip-border-color);border-radius:var(--_chip-shape);background:var(--_chip-background);color:var(--_chip-color);transition-property:background-color,color;transition-duration:var(--_chip-transition-duration);transition-timing-function:var(--_chip-transition-easing)}.trigger{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-button-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-button-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-button-font-size-scale, .875)));font-weight:var(--forge-typography-button-font-weight, 500);line-height:var(--forge-typography-button-line-height, normal);letter-spacing:var(--forge-typography-button-letter-spacing, .0714285714em);text-transform:var(--forge-typography-button-text-transform, inherit);text-decoration:var(--forge-typography-button-text-decoration, inherit);display:inline-flex;align-items:center;justify-content:center;gap:var(--_chip-spacing);box-sizing:border-box;height:100%;padding-inline:var(--_chip-padding-inline);padding-block:var(--_chip-padding-block);cursor:var(--_chip-cursor);z-index:0;text-decoration:none;border:none;background:inherit;color:inherit;-webkit-tap-highlight-color:transparent;border-radius:var(--_chip-shape);outline:none}.remove{padding-inline:var(--_chip-remove-button-spacing);--forge-icon-button-focus-indicator-color: var(--_chip-color)}forge-focus-indicator{--forge-focus-indicator-color: var(--_chip-color);--forge-focus-indicator-shape: var(--_chip-shape)}forge-state-layer{--forge-state-layer-color: var(--_chip-color)}:host([dense]) .forge-chip{--_chip-height: var(--_chip-dense-height);--_chip-padding-inline: var(--_chip-dense-padding-inline);--_chip-spacing: var(--_chip-dense-spacing)}:host([dense]) .trigger{--forge-typography-font-size: var(--_chip-dense-font-size);--forge-typography-font-weight: var(--_chip-dense-font-weight)}:host([dense]) .remove{--_chip-remove-button-spacing: var(--_chip-remove-button-spacing-dense);--forge-icon-button-density-small-size: var(--_chip-remove-button-height-dense);--forge-icon-button-density-small-icon-size: var(--_chip-remove-button-icon-size-dense)}:host([dense]) forge-focus-indicator{--forge-focus-indicator-outward-offset: var(--_chip-dense-focus-indicator-offset)}:host([dense]) ::slotted(forge-avatar){--_chip-avatar-spacing: var(--_chip-avatar-spacing-dense);--forge-typography-font-size: var(--_chip-avatar-font-size-dense);--forge-avatar-size: var(--_chip-avatar-size-dense)}:host([dense]) ::slotted(:is([slot=start],[slot=leading],[slot=end],[slot=trailing])){--_chip-icon-font-size: var(--_chip-dense-icon-font-size)}:host(:is([type=filter],[type=choice],[type=input])[selected]) .forge-chip{--_chip-background: var(--_chip-selected-background);--_chip-color: var(--_chip-selected-color)}:host(:is([type=filter],[type=choice],[type=input])[selected]) forge-focus-indicator{--forge-focus-indicator-color: var(--_chip-background)}:host([invalid]) .forge-chip{--_chip-color: var(--_chip-invalid-color)}:host([invalid]:is([type=filter],[type=choice],[type=input])[selected]) .forge-chip{--_chip-background: var(--_chip-invalid-selected-background);--_chip-color: var(--_chip-invalid-selected-color)}:host([disabled]:not([href])) .forge-chip{opacity:var(--_chip-disabled-opacity)}:host([disabled]:not([href])) .trigger{cursor:var(--_chip-disabled-cursor)}::slotted(:not(forge-avatar):is([slot=start],[slot=leading],[slot=end],[slot=trailing])){font-size:var(--_chip-icon-font-size)}::slotted(forge-avatar:is([slot=start],[slot=leading])){margin-inline-start:var(--_chip-avatar-spacing)}::slotted(forge-avatar:is([slot=end],[slot=trailing])){margin-inline-end:var(--_chip-avatar-spacing)}::slotted(forge-avatar){--forge-typography-font-size: var(--_chip-avatar-font-size);--forge-avatar-size: var(--_chip-avatar-size)}:host([type=filter]) .checkmark{height:var(--_chip-checkmark-size)}:host([type=filter]) .checkmark svg{width:0;height:var(--_chip-checkmark-size);transition-property:width;transition-duration:var(--_chip-transition-duration);transition-timing-function:var(--_chip-transition-easing)}:host([type=filter]) .checkmark svg path{stroke:var(--_chip-checkmark-color);transition-property:stroke-dashoffset;transition-duration:var(--_chip-transition-duration);transition-timing-function:var(--_chip-transition-easing);stroke-width:2px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}:host([type=filter][selected]) .checkmark{padding-inline-start:var(--_chip-checkmark-spacing)}:host([type=filter][selected]) .checkmark svg{width:var(--_chip-checkmark-size)}:host([type=filter][selected]) .checkmark svg path{transition-delay:var(--_chip-checkmark-transition-delay);stroke-dashoffset:0}:host([type=input]) .trigger{padding-inline:var(--_chip-padding-inline) 0}:host([type=field]) .forge-chip{--_chip-background: var(--_chip-field-background);--_chip-color: var(--_chip-field-color);--_chip-border-color: var(--_chip-field-border-color);--_chip-shape: var(--_chip-field-shape);--_chip-cursor: var(--_chip-field-cursor)}:host([theme=secondary]) .forge-chip{--_chip-color: var(--forge-chip-color, var(--forge-theme-text-high, rgba(0, 0, 0, .87)));--_chip-border-color: var(--forge-chip-border-color, var(--forge-theme-secondary, #ffc107))}:host([theme=secondary]:is([type=filter],[type=choice],[type=input])[selected]) .forge-chip{--_chip-background: var(--forge-chip-background, var(--forge-theme-secondary, #ffc107));--_chip-color: var(--forge-chip-color, var(--forge-theme-on-secondary, #000000))}:host([theme=secondary][type=field]) .forge-chip{--_chip-background: var(--forge-chip-background, var(--forge-theme-secondary-container-low, #fff8e1));--_chip-color: var(--forge-chip-color, var(--forge-theme-on-secondary-container-low, #8a6804))}:host([theme=tertiary]) .forge-chip{--_chip-color: var(--forge-chip-color, var(--forge-theme-tertiary, #3d5afe))}:host([theme=tertiary]:is([type=filter],[type=choice],[type=input])[selected]) .forge-chip{--_chip-background: var(--forge-chip-background, var(--forge-theme-tertiary, #3d5afe));--_chip-color: var(--forge-chip-color, var(--forge-theme-on-tertiary, #ffffff))}:host([theme=tertiary][type=field]) .forge-chip{--_chip-background: var(--forge-chip-background, var(--forge-theme-tertiary-container-low, #e8ebff));--_chip-color: var(--forge-chip-color, var(--forge-theme-on-tertiary-container-low, #213189))}:host([theme=success]) .forge-chip{--_chip-color: var(--forge-chip-color, var(--forge-theme-success, #2e7d32))}:host([theme=success]:is([type=filter],[type=choice],[type=input])[selected]) .forge-chip{--_chip-background: var(--forge-chip-background, var(--forge-theme-success, #2e7d32));--_chip-color: var(--forge-chip-color, var(--forge-theme-on-success, #ffffff))}:host([theme=success][type=field]) .forge-chip{--_chip-background: var(--forge-chip-background, var(--forge-theme-success-container-low, #e6efe6));--_chip-color: var(--forge-chip-color, var(--forge-theme-on-success-container-low, #19441b))}:host([theme=warning]) .forge-chip{--_chip-color: var(--forge-chip-color, var(--forge-theme-warning, #d14900))}:host([theme=warning]:is([type=filter],[type=choice],[type=input])[selected]) .forge-chip{--_chip-background: var(--forge-chip-background, var(--forge-theme-warning, #d14900));--_chip-color: var(--forge-chip-color, var(--forge-theme-on-warning, #ffffff))}:host([theme=warning][type=field]) .forge-chip{--_chip-background: var(--forge-chip-background, var(--forge-theme-warning-container-low, #f9e9e0));--_chip-color: var(--forge-chip-color, var(--forge-theme-on-warning-container-low, #712700))}:host([theme=error]) .forge-chip{--_chip-color: var(--forge-chip-color, var(--forge-theme-error, #b00020))}:host([theme=error]:is([type=filter],[type=choice],[type=input])[selected]) .forge-chip{--_chip-background: var(--forge-chip-background, var(--forge-theme-error, #b00020));--_chip-color: var(--forge-chip-color, var(--forge-theme-on-error, #ffffff))}:host([theme=error][type=field]) .forge-chip{--_chip-background: var(--forge-chip-background, var(--forge-theme-error-container-low, #f6e0e4));--_chip-color: var(--forge-chip-color, var(--forge-theme-on-error-container-low, #5f0011))}:host([theme=info]) .forge-chip{--_chip-color: var(--forge-chip-color, var(--forge-theme-info, #1565c0))}:host([theme=info]:is([type=filter],[type=choice],[type=input])[selected]) .forge-chip{--_chip-background: var(--forge-chip-background, var(--forge-theme-info, #1565c0));--_chip-color: var(--forge-chip-color, var(--forge-theme-on-info, #ffffff))}:host([theme=info][type=field]) .forge-chip{--_chip-background: var(--forge-chip-background, var(--forge-theme-info-container-low, #e3edf7));--_chip-color: var(--forge-chip-color, var(--forge-theme-on-info-container-low, #0b3768))}';var W=Object.defineProperty,q=Object.getOwnPropertyDescriptor,c=(i,e,t,o)=>{for(var s=o>1?void 0:o?q(e,t):e,h=i.length-1,d;h>=0;h--)(d=i[h])&&(s=(o?d(e,t,s):d(s))||s);return o&&s&&W(e,t,s),s};let n=class extends b{static get observedAttributes(){return Object.values(r.observedAttributes)}constructor(){super(),B.define(S),y(this,j,U),this._core=new Y(new G(this))}connectedCallback(){this._core.initialize()}attributeChangedCallback(i,e,t){switch(i){case r.attributes.TYPE:this.type=t;break;case r.attributes.VALUE:this.value=t;break;case r.attributes.SELECTED:this.selected=l(t);break;case r.attributes.INVALID:this.invalid=l(t);break;case r.attributes.DISABLED:this.disabled=l(t);break;case r.attributes.DENSE:this.dense=l(t);break;case r.attributes.THEME:this.theme=t;break;case r.attributes.HREF:this.href=t;break;case r.attributes.TARGET:this.target=t;break;case r.attributes.DOWNLOAD:this.download=t;break;case r.attributes.REL:this.rel=t;break}}focus(i){this._core.focus(i)}focusRemoveButton(){this._core.focusRemoveButton()}click(){this._core.click()}};c([p()],n.prototype,"type",2);c([p()],n.prototype,"value",2);c([p()],n.prototype,"selected",2);c([p()],n.prototype,"invalid",2);c([p()],n.prototype,"disabled",2);c([p()],n.prototype,"dense",2);c([p()],n.prototype,"theme",2);c([p()],n.prototype,"href",2);c([p()],n.prototype,"target",2);c([p()],n.prototype,"download",2);c([p()],n.prototype,"rel",2);n=c([u({name:r.elementName,dependencies:[x,z,I,D]})],n);const K=`<template>
  <div class="forge-chip-set" part="root">
    <slot></slot>
  </div>
</template>
`,X=":host{display:inline-block}:host([hidden]){display:none}.forge-chip-set{--_chip-set-spacing: var(--forge-chip-set-spacing, var(--forge-spacing-xsmall, 8px))}.forge-chip-set{display:flex;flex-wrap:wrap;gap:var(--_chip-set-spacing)}:host([vertical]) .forge-chip-set{flex-direction:column}";var J=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,Z=(i,e,t,o)=>{for(var s=o>1?void 0:o?Q(e,t):e,h=i.length-1,d;h>=0;h--)(d=i[h])&&(s=(o?d(e,t,s):d(s))||s);return o&&s&&J(e,t,s),s};let m=class extends b{constructor(){super(),this._vertical=!1,this._type=r.defaults.TYPE,this._dense=!1,this._disabled=!1,this._invalid=!1,this._theme=r.defaults.THEME,y(this,K,X)}static get observedAttributes(){return Object.values(a.observedAttributes)}connectedCallback(){this.addEventListener(r.events.NAVIGATE,this._onChipNavigate.bind(this))}attributeChangedCallback(i,e,t){switch(i){case a.observedAttributes.VERTICAL:this.vertical=l(t);break;case a.observedAttributes.TYPE:this.type=t;break;case a.observedAttributes.DENSE:this.dense=l(t);break;case a.observedAttributes.DISABLED:this.disabled=l(t);break;case a.observedAttributes.INVALID:this.invalid=l(t);break;case a.observedAttributes.THEME:this.theme=t;break}}_onChipNavigate(i){const e=this._findChipDescendants().filter(h=>!h.disabled),t=e.findIndex(h=>h===i.target);let o=i.detail.direction==="previous"?t-1:t+1;o>e.length-1&&(o=0);const s=e.at(o);(s==null?void 0:s.type)==="input"&&i.detail.direction==="previous"?s.focusRemoveButton():s==null||s.focus()}_findChipDescendants(){return Array.from(this.querySelectorAll(r.elementName))}_syncChipsProperty(i,e){this._findChipDescendants().forEach(o=>o[i]=e)}get vertical(){return this._vertical}set vertical(i){i=!!i,this._vertical!==i&&(this._vertical=i,this.toggleAttribute(a.attributes.VERTICAL,this._vertical))}get type(){return this._type}set type(i){this._type!==i&&(this._type=i,this._syncChipsProperty("type",this._type),this.setAttribute(a.attributes.TYPE,this._type))}get dense(){return this._dense}set dense(i){i=!!i,this._dense!==i&&(this._dense=i,this._syncChipsProperty("dense",this._dense),this.toggleAttribute(a.attributes.DENSE,this._dense))}get disabled(){return this._disabled}set disabled(i){i=!!i,this._disabled!==i&&(this._disabled=i,this._syncChipsProperty("disabled",this._disabled),this.toggleAttribute(a.attributes.DISABLED,this._disabled))}get invalid(){return this._invalid}set invalid(i){i=!!i,this._invalid!==i&&(this._invalid=i,this._syncChipsProperty("invalid",this._invalid),this.toggleAttribute(a.attributes.INVALID,this._invalid))}get theme(){return this._theme}set theme(i){this._theme!==i&&(this._theme=i,this._syncChipsProperty("theme",this._theme),this.setAttribute(a.attributes.THEME,this._theme))}};m=Z([u({name:a.elementName,dependencies:[n]})],m);export{n as C};
