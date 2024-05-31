import{o as m}from"./index-OZgoMCom.js";import{I as E}from"./icon-CZkrZTCi.js";import"./index-Dh0vMUMR.js";import{L as _,a as f,b as g}from"./list-Cl7Swggu.js";import{L,a as O}from"./list-dropdown-aware-foundation-D8Hq7ujr.js";import{P as v}from"./popover-CJx-1uMX.js";import"./overlay-BOlaL1kU.js";import{B as C,F as p}from"./base-adapter-qTVGb81X.js";import{C as b,L as T,E as S,M as w,v as D,w as y,N as M,h as u,D as A}from"./constants-R2FX_sk2.js";import{a as I,i as P,b as N,c as k,d as V}from"./list-dropdown-BaynTPbm.js";import"./linear-progress-C11bciY7.js";import"./skeleton-toxWc0Vn.js";const h=`${b}menu`,x={POPUP:"forge-menu__popup",MENU:"mdc-menu"},B={TOGGLE:`.${h}__toggle,[${h}-toggle],forge-button,forge-icon-button,forge-fab,button,[type=button],[role=button],a,forge-list-item,[tabindex]:not([tabindex^="-"])`,MENU_LIST:"forge-list"},F={OPEN:"open",PLACEMENT:"placement",SELECTED_INDEX:"selected-index",SELECTED_VALUE:"selected-value",DENSE:"dense",ICON_CLASS:"icon-class",PERSIST_SELECTION:"persist-selection",MODE:"mode",SYNC_POPUP_WIDTH:"sync-popup-width",POPUP_CLASSES:"popup-classes",OPTION_LIMIT:"option-limit",OBSERVE_SCROLL:"observe-scroll",OBSERVE_SCROLL_THRESHOLD:"observe-scroll-threshold"},H={SELECT:`${h}-select`,OPEN:`${h}-open`,CLOSE:`${h}-close`,ACTIVE_CHANGE:`${h}-active-change`},U={CHILD_MOUSE_LEAVE_TIMEOUT:300,POPUP_MOUSE_LEAVE_TIMEOUT:500},s={elementName:h,classes:x,selectors:B,attributes:F,events:H,numbers:U};class R extends L{constructor(e){super(),this._config=e,this._open=!1,this._options=[],this._childOpen=!1,this._popupHasMouse=!1,this._targetMouseEnterListener=t=>this._onTargetMouseEnter(t),this._targetMouseLeaveListener=t=>this._onTargetMouseLeave(t),this._childPopupMouseEnterListener=()=>this._onChildPopupMouseEnter(),this._childPopupMouseLeaveListener=()=>this._onChildPopupMouseLeave(),this._documentMouseMoveListener=t=>this._mouseCoords={x:t.pageX,y:t.pageY}}_onChildPopupMouseEnter(){this._popupHasMouse=!0}_onChildPopupMouseLeave(){this._popupHasMouse=!1,setTimeout(()=>{const e=document.elementFromPoint(this._mouseCoords.x,this._mouseCoords.y);!this._popupHasMouse&&!this._childOpen&&(!e||!this._isOwnElement(e))&&(this._setCascadeTargetInactive(),this._closeDropdown())},this._config.popupTimeout)}_onTargetMouseEnter(e){this._options.length&&this._openDropdown({fromKeyboard:!1})}_onTargetMouseLeave(e){this._activeMouseLeaveTimeout=window.setTimeout(()=>{if(!(!this._open||this._childOpen)){if(this._mouseCoords){const t=document.elementFromPoint(this._mouseCoords.x,this._mouseCoords.y);if(t&&this._isOwnElement(t))return}this._setCascadeTargetInactive(),this._closeDropdown()}},this._config.targetTimeout)}_clearMouseLeaveTimeout(){this._activeMouseLeaveTimeout!==void 0&&window.clearTimeout(this._activeMouseLeaveTimeout)}}class K extends C{constructor(e){super(e),this._childMenus=new Map}getDropdownElement(){var e;return((e=this._listDropdown)==null?void 0:e.dropdownElement)??null}hasTargetElement(){return!!this._targetElement}initializeTarget(){this._targetElement=this._component.querySelector(s.selectors.TOGGLE),this._targetElement||(this._targetElement=this._component.firstElementChild)}initializeAccessibility(e){this._targetElement&&(this._targetElement.setAttribute("aria-atomic","true"),this._targetElement.setAttribute("aria-live","assertive"),this._targetElement.setAttribute("aria-haspopup","true"),this._targetElement.setAttribute("aria-expanded","false"),this._targetElement.hasAttribute("aria-label")||this._targetElement.setAttribute("aria-label",this._targetElement.textContent||""))}addTargetListener(e,t,i=!1){this._targetElement&&this._targetElement.addEventListener(e,t,i)}removeTargetListener(e,t){this._targetElement&&this._targetElement.removeEventListener(e,t)}attachMenu(e){this._listDropdown||!this._targetElement||(this._listDropdown=new I(this._targetElement,e),this._listDropdown.open(),this._targetElement.setAttribute("aria-expanded","true"),this._targetElement.setAttribute("aria-controls",`list-dropdown-popup-${e.id}`))}setOptions(e){var t;(t=this._listDropdown)==null||t.setOptions(e)}destroyListDropdown(){var e;(e=this._listDropdown)==null||e.destroy(),this._listDropdown=void 0}async detachMenu(){var e,t,i,o,n;(e=this._targetElement)==null||e.removeAttribute("aria-activedescendant"),(t=this._targetElement)==null||t.removeAttribute("aria-expanded"),(i=this._targetElement)==null||i.removeAttribute("aria-controls"),await((o=this._listDropdown)==null?void 0:o.close()),(n=this._listDropdown)==null||n.destroy(),this._listDropdown=void 0}setActiveOption(e){var t;(t=this._listDropdown)==null||t.activateOption(e)}activateFirstOption(){var e;(e=this._listDropdown)==null||e.activateFirstOption()}setCascadeTargetInactive(){const e=this._targetElement;e!=null&&e.active&&(e.active=!1)}getActiveOptionIndex(){var e;return((e=this._listDropdown)==null?void 0:e.getActiveOptionIndex())??-1}focusTarget(){var e,t;(e=this._targetElement)!=null&&e.matches(":focus-within")||(t=this._targetElement)==null||t.focus()}isTargetFocused(){return document.activeElement===this._targetElement}updateActiveDescendant(e){this._targetElement&&(e?this._targetElement.setAttribute("aria-activedescendant",e):this._targetElement.removeAttribute("aria-activedescendant"))}addDropdownListener(e,t){!this._listDropdown||!this._listDropdown.dropdownElement||this._listDropdown.dropdownElement.addEventListener(e,t)}isOwnElement(e){return!this._targetElement||!this._listDropdown||!this._listDropdown.dropdownElement?!1:this._targetElement.contains(e)||!!this._listDropdown.dropdownElement.contains(e)}propagateKey(e){var t;(t=this._listDropdown)==null||t.handleKey(e)}proxyKeyboardEventToChild(e,t){if(!this.getDropdownElement())return;const i=this._getOpenChildMenu(t);i&&i.propagateKeyEvent(e)}toggleChildMenu(e,t){const n=this._getListItems()[e].parentElement;n&&n.tagName.toLowerCase()===s.elementName&&(t===void 0?n.open=!n.open:n.open=t,n.activateFirstOption())}createChildMenu(e,t,i,o,n){const d=document.createElement("forge-menu");return d.style.display="block",d.addEventListener(s.events.OPEN,()=>{this._childMenus.set(e,d),i(e)}),d.addEventListener(s.events.CLOSE,()=>{this._childMenus.delete(e),o(e)}),d.addEventListener(s.events.SELECT,c=>{c.stopPropagation(),n({...c.detail,parentValue:t})}),d}closeOtherChildMenus(e){const t=[];this._childMenus.forEach((i,o)=>{o!==e&&(i.open=!1,t.push(o))}),t.forEach(i=>this._childMenus.delete(i))}setSelectedValues(e){var t;(t=this._listDropdown)==null||t.setSelectedValues(e)}_getOpenChildMenu(e){if(!this.getDropdownElement())return null;const t=this._getOwnList(e);return t?t.querySelector(`${s.elementName}[${s.attributes.OPEN}]`):null}_getOwnList(e){const t=this.getDropdownElement();return t?t.querySelector(`${_.elementName}[id="list-dropdown-list-${e}"]`):null}_getListItems(){const e=this.getDropdownElement();if(!e)return[];const t=e.querySelector(_.elementName);return t?Array.from(t.querySelectorAll(f.elementName)):[]}}class G extends R{constructor(e){super({popupTimeout:s.numbers.POPUP_MOUSE_LEAVE_TIMEOUT,targetTimeout:s.numbers.CHILD_MOUSE_LEAVE_TIMEOUT}),this._adapter=e,this._placement="bottom-start",this._fallbackPlacements=[],this._dense=!1,this._iconClass=T,this._persistSelection=!1,this._mode="click",this._identifier=S(),this._clickListener=t=>this._onTargetClick(t),this._blurListener=t=>this._onTargetBlur(t),this._selectListener=t=>this._handleSelectEvent(t),this._keydownListener=t=>this.onKeydown(t),this._activeChangeListener=t=>this._onActiveOptionChanged(t)}initialize(){this._adapter.initializeTarget(),this._adapter.initializeAccessibility(this._identifier),this._initializeInteractionListeners()}disconnect(){this._closeMenu({destroy:!0}),this._destroyInteractionListeners()}activateFirstOption(){this._adapter.activateFirstOption()}_applyMode(){this._adapter.hasTargetElement()&&(this._mode!=="cascade"?this._adapter.addTargetListener("click",this._clickListener):this._attachCascadingListeners())}_initializeInteractionListeners(){this._adapter.hasTargetElement()&&(this._applyMode(),this._adapter.addTargetListener("keydown",this._keydownListener,!0),this._adapter.addTargetListener("focusout",this._blurListener))}_destroyInteractionListeners(){this._adapter.hasTargetElement()&&(this._adapter.removeTargetListener("keydown",this._clickListener),this._adapter.removeTargetListener("focusout",this._blurListener),this._adapter.removeTargetListener("click",this._clickListener),this._detachCascadingListeners())}_attachCascadingListeners(){this._adapter.addTargetListener("mouseenter",this._targetMouseEnterListener),this._adapter.addTargetListener("mouseleave",this._targetMouseLeaveListener),this._adapter.addDocumentListener("mousemove",this._documentMouseMoveListener)}_detachCascadingListeners(){this._adapter.removeTargetListener("mouseenter",this._targetMouseEnterListener),this._adapter.removeTargetListener("mouseleave",this._targetMouseLeaveListener),this._adapter.removeDocumentListener("mousemove",this._documentMouseMoveListener)}get _nonDividerOptions(){return this._flatOptions.filter(e=>!e.divider)}get _flatOptions(){return this._flattenOptions(this._options)}_flattenOptions(e){return P(e,N.Group)?e.reduce((t,i)=>i.options?t.concat(i.options):t,[]):e}_onTargetClick(e){if(this._open){this._closeDropdown();return}this.open=!this._open,this._open&&this._adapter.focusTarget()}_onTargetBlur(e){this._open&&this._closeDropdown()}_onActiveOptionChanged(e){const t={id:e},i=this._adapter.emitHostEvent(s.events.ACTIVE_CHANGE,t,!0,!0);this._mode!=="cascade"&&i&&this._adapter.updateActiveDescendant(e)}onKeydown(e){if(this._childOpen){this._adapter.proxyKeyboardEventToChild(e,this._identifier);return}switch(e.code){case"Escape":this._open&&(e.preventDefault(),e.stopPropagation(),this._closeDropdown());break;case"Space":e.preventDefault(),this._open?this._closeDropdown():this._openDropdown({fromKeyboard:!0});break;case"Home":case"End":this._open&&(e.preventDefault(),this._adapter.propagateKey(e.code));break;case"Enter":if(e.preventDefault(),!this._open){e.preventDefault(),this._openDropdown({fromKeyboard:!0});return}e.stopImmediatePropagation(),this._adapter.propagateKey(e.code);const t=this._adapter.getActiveOptionIndex(),i=this._nonDividerOptions[t];i&&i.options&&i.options.length&&this._adapter.toggleChildMenu(t);break;case"ArrowUp":case"ArrowDown":if(this._open&&e.stopImmediatePropagation(),e.preventDefault(),!this._open&&e.code==="ArrowDown"){this._openDropdown({fromKeyboard:!0}),this._adapter.activateFirstOption();return}this._adapter.propagateKey(e.code);break;case"ArrowLeft":this._open&&e.stopImmediatePropagation(),this._mode==="cascade"&&this._open&&this._closeDropdown();break;case"ArrowRight":if(this._open&&e.stopImmediatePropagation(),!this._open)return;const o=this._adapter.getActiveOptionIndex(),n=this._nonDividerOptions[o];if(n&&n.options){this._adapter.toggleChildMenu(o,e.code==="ArrowRight");return}break}}async _openMenu({fromKeyboard:e}={}){this._open=!0;let t=[];if(typeof this._optionsFactory=="function")this._loadOptionsAsync(),this._options=[];else{if(!this._options||!this._options.length)return;t=this._options}this._persistSelection||t.forEach(n=>n.selected=!1),this._mapIconToLeadingIcon();const i=this._persistSelection?this._getSelectedValues():[],o={id:this._identifier,type:k.Menu,options:this._options,selectedValues:i,iconClass:this._iconClass,dense:this._dense,multiple:!1,popupStatic:!0,allowBusy:!0,asyncStyle:V.Spinner,optionBuilder:this._optionBuilder,optionLimit:this._optionLimit,headerBuilder:this._popupHeaderBuilder,footerBuilder:this._popupFooterBuilder,observeScroll:this._observeScroll,observeScrollThreshold:this._observeScrollThreshold,popupPlacement:this._placement,popupFallbackPlacements:this._fallbackPlacements,activeStartIndex:e?0:void 0,popupClasses:[s.classes.POPUP,s.classes.MENU,...this._popupClasses],syncWidth:this._syncPopupWidth,activeChangeCallback:this._activeChangeListener,selectCallback:this._selectListener,popupOffset:this._popupOffset,cascadingElementFactory:n=>this._createCascadingElement(n)};this._adapter.setHostAttribute(s.attributes.OPEN,""),this._adapter.attachMenu(o),this._mode==="cascade"&&(this._adapter.addDropdownListener("mouseenter",this._childPopupMouseEnterListener),this._adapter.addDropdownListener("mouseleave",this._childPopupMouseLeaveListener)),this._adapter.addDropdownListener(s.events.ACTIVE_CHANGE,n=>{this._onActiveOptionChanged(n.detail.id)}),this._adapter.emitHostEvent(s.events.OPEN)}_closeMenu({destroy:e=!1}={}){this._open=!1,this._childOpen=!1,e?this._adapter.destroyListDropdown():this._adapter.detachMenu(),this._activeMouseLeaveTimeout!==void 0&&window.clearTimeout(this._activeMouseLeaveTimeout),this._adapter.removeHostAttribute(s.attributes.OPEN),this._adapter.emitHostEvent(s.events.CLOSE)}_loadOptionsAsync(){return this._optionsFactory?Promise.resolve(this._optionsFactory()).then(e=>{if(this._persistSelection||this._flattenOptions(e).filter(i=>i.selected).forEach(i=>i.selected=!1),this._open)if(e&&w(e)&&e.length){this._options=e,this._mapIconToLeadingIcon(),this._adapter.setOptions(e);const t=this._getSelectedValues();t.length&&this._adapter.setSelectedValues(t)}else this._open&&this._closeDropdown()}).catch(e=>{console.error("An unexpected error ocurred while opening the menu:",e),this._open&&this._closeDropdown()}):(this._open&&this._closeMenu(),Promise.resolve())}_handleSelectEvent(e){const t=this._nonDividerOptions.findIndex(i=>i.value===e);t<0||this._selectOptionByIndex(t)}_selectActiveOption(){const e=this._adapter.getActiveOptionIndex();e>=0&&this._nonDividerOptions[e]&&this._selectOptionByIndex(e)}_selectOptionByIndex(e){const{options:t,value:i}=this._nonDividerOptions[e];if(t){this._adapter.setActiveOption(e);return}this._closeDropdown();const o={index:e,value:i};!this._adapter.emitHostEvent(s.events.SELECT,o,!0,!0)||(this._selectedValue=this._persistSelection?i:void 0)}_getSelectedValues(){const e=this._flatOptions.filter(t=>t.selected).map(t=>t.value);return this._selectedValue!==void 0&&e.push(this._selectedValue),e}_onCascadingOptionSelected(e){this._persistSelection&&(this._selectedValue=e.value),this._adapter.emitHostEvent(s.events.SELECT,e),this._closeDropdown()}_onCascadingChildOpen(e){super._clearMouseLeaveTimeout(),this._adapter.closeOtherChildMenus(e),this._childOpen=!0,this._adapter.setActiveOption(e)}_onCascadingChildClose(e){this._childOpen=!1}_closeDropdown(){this._closeMenu()}_openDropdown({fromKeyboard:e}={}){this._openMenu({fromKeyboard:e})}_setCascadeTargetInactive(){this._adapter.setCascadeTargetInactive()}_isOwnElement(e){return this._adapter.isOwnElement(e)}_createCascadingElement({index:e,options:t,parentValue:i}){const o=this._adapter.createChildMenu(e,i,this._onCascadingChildOpen.bind(this),this._onCascadingChildClose.bind(this),this._onCascadingOptionSelected.bind(this));return o.mode="cascade",o.popupOffset={mainAxis:0,crossAxis:-8},o.dense=this._dense,o.placement="right-start",o.fallbackPlacements=["left-start","right-start"],o.persistSelection=this._persistSelection,this._persistSelection&&(o.selectedValue=this._selectedValue),o.options=t,o.optionBuilder=this._optionBuilder,o.iconClass=this._iconClass,o}_mapIconToLeadingIcon(){this._flatOptions.filter(e=>e.icon).forEach(e=>e.leadingIcon=e.icon)}get open(){return this._open}set open(e){e=!!e,this._open!==e&&(this._open=e,e?this._openDropdown():this._closeDropdown())}set options(e){if(typeof e=="function")this.optionsFactory=e;else if(this.optionsFactory=void 0,this._options=e.map(t=>({...t})),this._open&&(this._mapIconToLeadingIcon(),this._adapter.setOptions(this._options),this._persistSelection)){const t=this._getSelectedValues();t.length&&this._adapter.setSelectedValues(t)}}get options(){return this._options?this._flatOptions.map(e=>({...e})):[]}set optionsFactory(e){this._optionsFactory=e}set selectedIndex(e){const t=this._nonDividerOptions[e];t&&t.value!==this._selectedValue&&(this.selectedValue=t.value)}get selectedIndex(){return this._selectedValue!==void 0?this._nonDividerOptions.findIndex(e=>e.value===this._selectedValue):-1}set selectedValue(e){this._selectedValue!==e&&(this._selectedValue=e,this._adapter.setSelectedValues(this._selectedValue))}get selectedValue(){return this._selectedValue}get placement(){return this._placement}set placement(e){this._placement!==e&&(this._placement=e||"bottom-start",this._adapter.setHostAttribute(s.attributes.PLACEMENT,this._placement))}get fallbackPlacements(){return this._fallbackPlacements}set fallbackPlacements(e){this._fallbackPlacements=Array.isArray(e)?e:[]}get dense(){return this._dense}set dense(e){this._dense=e}get iconClass(){return this._iconClass}set iconClass(e){this._iconClass=e}get persistSelection(){return this._persistSelection}set persistSelection(e){this._persistSelection!==e&&(this._persistSelection=e,this._adapter.toggleHostAttribute(s.attributes.PERSIST_SELECTION,this._persistSelection),this._persistSelection||(this._flatOptions.forEach(t=>t.selected=!1),this._selectedValue=void 0))}get mode(){return this._mode}set mode(e){this._mode!==e&&(this._mode=e,this._destroyInteractionListeners(),this._applyMode(),this._adapter.setHostAttribute(s.attributes.MODE,this._mode))}get popupOffset(){return this._popupOffset}set popupOffset(e){this._popupOffset=e}get optionBuilder(){return this._optionBuilder}set optionBuilder(e){this._optionBuilder=e}get popupElement(){return this._adapter.getDropdownElement()}}const $=`<template>
  <slot></slot>
</template>`,z=":host{display:inline-flex}:host([hidden]){display:none}";var q=Object.defineProperty,X=Object.getOwnPropertyDescriptor,a=(l,e,t,i)=>{for(var o=i>1?void 0:i?X(e,t):e,n=l.length-1,d;n>=0;n--)(d=l[n])&&(o=(i?d(e,t,o):d(o))||o);return i&&o&&q(e,t,o),o};let r=class extends O{static get observedAttributes(){return[s.attributes.OPEN,s.attributes.PLACEMENT,s.attributes.SELECTED_INDEX,s.attributes.SELECTED_VALUE,s.attributes.DENSE,s.attributes.ICON_CLASS,s.attributes.PERSIST_SELECTION,s.attributes.MODE,s.attributes.SYNC_POPUP_WIDTH,s.attributes.POPUP_CLASSES,s.attributes.OPTION_LIMIT,s.attributes.OBSERVE_SCROLL,s.attributes.OBSERVE_SCROLL_THRESHOLD]}constructor(){super(),E.define(m),this._foundation=new G(new K(this)),y(this,$,z)}connectedCallback(){this.querySelector(s.selectors.TOGGLE)?this._foundation.initialize():M(this,s.selectors.TOGGLE).then(()=>this._foundation.initialize())}attributeChangedCallback(l,e,t){switch(super.attributeChangedCallback(l,e,t),l){case s.attributes.OPEN:this._foundation.open=A(t);break;case s.attributes.PLACEMENT:this._foundation.placement=t;break;case s.attributes.SELECTED_INDEX:this._foundation.selectedIndex=Number(t);break;case s.attributes.SELECTED_VALUE:this._foundation.selectedValue=t;break;case s.attributes.DENSE:this._foundation.dense=u(t);break;case s.attributes.ICON_CLASS:this._foundation.iconClass=t;break;case s.attributes.PERSIST_SELECTION:this.persistSelection=u(t);break;case s.attributes.MODE:this.mode=t;break}}disconnectedCallback(){this._foundation.disconnect()}propagateKeyEvent(l){this._foundation.onKeydown(l)}activateFirstOption(){this._foundation.activateFirstOption()}};a([p()],r.prototype,"open",2);a([p()],r.prototype,"options",2);a([p()],r.prototype,"selectedIndex",2);a([p()],r.prototype,"selectedValue",2);a([p()],r.prototype,"placement",2);a([p()],r.prototype,"fallbackPlacements",2);a([p()],r.prototype,"dense",2);a([p()],r.prototype,"iconClass",2);a([p()],r.prototype,"persistSelection",2);a([p()],r.prototype,"mode",2);a([p()],r.prototype,"popupOffset",2);a([p()],r.prototype,"optionBuilder",2);a([p({set:!1})],r.prototype,"popupElement",2);r=a([D({name:s.elementName,dependencies:[v,g]})],r);export{s as M,r as a};
