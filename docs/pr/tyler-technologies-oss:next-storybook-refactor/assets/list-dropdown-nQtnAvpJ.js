import{E as N,F as B}from"./index-DtXrtb0D.js";import{V as F,v,T as U,Q as S,u as V,R as W,M as $,W as z,p as A,X as x,r as q,a as G,Y as T,Z as j}from"./constants-Di1oYYV9.js";import{a as K}from"./linear-progress-De0XZzjv.js";import{b as X,c as Y}from"./list-B8boNWcU.js";import{a as O}from"./popover-Dh31glfv.js";import"./overlay-CRRs1KxA.js";import"./index-Dh0vMUMR.js";import{a as Q}from"./skeleton-CbdcwsWz.js";import{g as Z}from"./event-utils-C1SDeUaq.js";import{b as J,I as tt}from"./icon-Cn5siE75.js";import{c as et}from"./a11y-BxM9_46k.js";class it{constructor(){this._listenerMap=new Map}_emit(t,e){const s=this._listenerMap.get(t);s&&s.length&&s.forEach(n=>n({type:t,data:e}))}hasListeners(t){return t?this._listenerMap.has(t):this._listenerMap.size>0}addListener(t,e){if(!this._listenerMap.has(t))this._listenerMap.set(t,[e]);else{const s=this._listenerMap.get(t);s&&s.push(e)}}removeListener(t,e){const s=this._listenerMap.get(t);s&&s.length&&s.includes(e)&&(s.splice(s.indexOf(e),1),s.length||this._listenerMap.delete(t))}}var E;(function(i){i.Up="up",i.Down="down",i.Left="left",i.Right="right"})(E||(E={}));var m;(function(i){i.Scroll="scroll",i.Scrolled="scrolled",i.ScrolledStart="scrolled-start",i.ScrolledEnd="scrolled-end"})(m||(m={}));const st=100;class nt extends it{constructor(t,e={}){super(),this._element=t,this._config=e,this._axis="vertical",this._scrollThreshold=0,this._lastScrollPosition=0,this._lastScrollTop=0,this._lastScrollLeft=0,this._isListening=!1,this._initialize()}destroy(){this.stop()}start(){this._isListening||(this._element.addEventListener("scroll",this._scrollListener),this._isListening=!0)}stop(){this._element.removeEventListener("scroll",this._scrollListener),this._isListening=!1}_initialize(){if(this._config.throttle){const t=this._config.throttleTime||st;this._scrollListener=F(()=>this._onScroll(),t)}else this._scrollListener=()=>this._onScroll();(!v(this._config.paused)||!this._config.paused)&&this.start(),v(this._config.axis)&&(this._axis=this._config.axis),v(this._config.scrollThreshold)&&U(this._config.scrollThreshold)&&(this._scrollThreshold=this._config.scrollThreshold)}_isScrollAxis(){const t=this._lastScrollTop!==this._element.scrollTop,e=this._lastScrollLeft!==this._element.scrollLeft;return this._axis==="vertical"&&t||this._axis==="horizontal"&&e}_onScroll(){if(!this._isScrollAxis())return;const t=this.scrollPosition,e=this._lastScrollPosition-t<0?this._axis==="vertical"?E.Down:E.Right:this._axis==="vertical"?E.Up:E.Left;this._emit(m.Scroll,{direction:e,position:t}),this._lastScrollPosition<=this._scrollThreshold&&t>this._scrollThreshold?this._emit(m.Scrolled,!0):this._lastScrollPosition>=this._scrollThreshold&&(this._scrollThreshold>0?t<this._scrollThreshold:t===0)&&this._emit(m.Scrolled,!1);const s=Math.round(t-this._scrollThreshold),n=Math.round(this.scrollSize-t);this._lastScrollPosition>=this._scrollThreshold&&s<=0?this._emit(m.ScrolledStart):this._lastScrollPosition<=this.scrollSize-this._scrollThreshold&&n<=this._scrollThreshold&&this._emit(m.ScrolledEnd),this._lastScrollPosition=t||0,this._lastScrollTop=this._element.scrollTop||0,this._lastScrollLeft=this._element.scrollLeft||0}get scrollPosition(){return this._axis==="vertical"?this._element.scrollTop:this._element.scrollLeft}get isScrolled(){return this.scrollPosition>this._scrollThreshold}get isScrolledStart(){return this.scrollPosition===0}get isScrolledEnd(){return this.scrollPosition===this._element.scrollWidth}get isScrollable(){return this._axis==="vertical"?this._element.scrollHeight>this._element.clientHeight:this._element.scrollWidth>this._element.clientWidth}get scrollSize(){return(this._axis==="vertical"?this._element.scrollHeight:this._element.scrollWidth)-this.elementSize}get elementSize(){return this._axis==="vertical"?this._element.clientHeight:this._element.clientWidth}setScrollPosition(t){this._axis==="vertical"?this._element.scrollTop=t:this._element.scrollLeft=t}}const ot={POPUP_CLASSES:"popup-classes",OPTION_LIMIT:"option-limit",OBSERVE_SCROLL:"observe-scroll",OBSERVE_SCROLL_THRESHOLD:"observe-scroll-threshold",SYNC_POPUP_WIDTH:"sync-popup-width",CONSTRAIN_POPUP_WIDTH:"constrain-popup-width",WRAP_OPTION_TEXT:"wrap-option-text",CHECKBOX_ELEMENT:"data-list-dropdown-checkbox",DATA_ALLOW_FOCUS:"data-list-dropdown-allow-focus"},lt={GROUP_WRAPPER:"forge-list-dropdown__group-wrapper"},f={attributes:ot,classes:lt},rt={options:[],syncWidth:!1,selectedValues:[],multiple:!1};var g=(i=>(i.None="none",i.Standard="standard",i.Menu="menu",i))(g||{}),D=(i=>(i.Spinner="spinner",i.Skeleton="skeleton",i))(D||{}),at=(i=>(i[i.Option=0]="Option",i[i.Group=1]="Group",i))(at||{});function ct(i,t){const e=dt(i,t),s=`list-dropdown-popup-${i.id}`;return e.addEventListener("mousedown",n=>{const r=Z(n);if(r.find(_=>_.nodeType===1&&_.hasAttribute(f.attributes.DATA_ALLOW_FOCUS)))return;r.find(_=>_.id===s||_.id===i.id)&&n.preventDefault()}),i.id&&(e.id=s),i.popupClasses&&V(i.popupClasses,e),e}function dt(i,t){var s;const e=document.createElement("forge-popover");return e.anchorElement=t,e.placement=i.popupPlacement||"bottom-start",e.persistent=!!i.popupStatic,(s=i.popupFallbackPlacements)!=null&&s.length&&(e.fallbackPlacements=i.popupFallbackPlacements),i.constrainViewportWidth&&e.setAttribute(O.attributes.CONSTRAIN_VIEWPORT_WIDTH,""),i.popupOffset&&(e.offset=i.popupOffset),i.type===g.None&&(e.animationType="none"),e}function ht(i){const t=document.createElement(X.elementName);switch(t.id=`list-dropdown-list-${i.id}`,i.type){case g.Menu:t.setAttribute("role","menu"),t.setAttribute("aria-orientation","vertical");break;default:t.setAttribute("role","listbox")}return t}function y(i,t,e,s=0,n=!0){const r=Et(e||i.options),a=k(r),p=!!i.optionLimit;let _=i.optionLimit||0,L=s;for(const u of r){let b=t;if(u.builder&&typeof u.builder=="function"){const o=u.builder(u);if(o){const c=document.createElement("div");c.classList.add(f.classes.GROUP_WRAPPER),b=c,typeof o=="string"?c.innerHTML=o:o instanceof HTMLElement&&c.appendChild(o),t.appendChild(c)}}else if(u.text){const o=document.createElement("div");o.classList.add(f.classes.GROUP_WRAPPER);const c=document.createElement("div");c.textContent=u.text,c.classList.add("forge-typography--overline"),c.style.fontFamily="Roboto,sans-serif",c.style.fontSize="0.75rem",c.style.lineHeight="2rem",c.style.letterSpacing="0.16667em",c.style.fontWeight="500",c.style.margin="4px 8px",b=o,o.appendChild(c),t.appendChild(o)}for(const o of u.options){if(o.divider){const l=pt();t.appendChild(l);continue}if(p&&--_<0)break;const c=i.selectedValues?i.selectedValues.some(l=>W(l,o.value)):!1;if(!n&&c)continue;let d=document.createElement("forge-list-item");d.value=o.value,d.setAttribute("role","presentation");const h=document.createElement("button");if(h.type="button",h.id=`list-dropdown-option-${i.id}-${L++}`,h.setAttribute("role",i.type==="menu"?"menuitem":"option"),d.appendChild(h),i.wrapOptionText&&(d.wrap=!0),o.optionClass&&(typeof o.optionClass=="string"||Array.isArray(o.optionClass)&&o.optionClass.length)&&V(o.optionClass,d),i.dense&&(d.dense=!0),i.optionBuilder&&typeof i.optionBuilder=="function"){const l=i.optionBuilder(o,d);l&&(typeof l=="string"?h.innerHTML=l:h.appendChild(l))}else if(typeof i.transform!="function")h.textContent=o.label||"";else{const l=i.transform(o.label);typeof l=="string"?h.textContent=l:typeof l=="object"&&l.nodeType!==void 0&&h.appendChild(l)}if(o.secondaryLabel){const l=document.createElement("span");l.slot="subtitle",l.textContent=o.secondaryLabel,l.id=`list-dropdown-option-${i.id}-${L++}-secondary`,d.twoLine=!0,d.appendChild(l),h.setAttribute("aria-describedby",l.id)}if(i.multiple){const l=I(c);d.appendChild(l),h.setAttribute("aria-selected",`${c}`),h.setAttribute("aria-checked",`${c}`)}if(o.elementAttributes&&o.elementAttributes.forEach((l,w)=>{d.setAttribute(w,l)}),o.leadingBuilder){const l=o.leadingBuilder();S(l)&&(l.slot="leading",d.appendChild(l))}else if(o.leadingIcon){const l=P(o.leadingIconType,o.leadingIcon,o.leadingIconClass||i.iconClass,o.leadingIconComponentProps);l.slot="leading",d.appendChild(l)}if(o.trailingBuilder){const l=o.trailingBuilder();S(l)&&(l.slot="trailing",d.appendChild(l))}else if(o.trailingIcon){const l=P(o.trailingIconType,o.trailingIcon,o.trailingIconClass||i.iconClass,o.trailingIconComponentProps);l.slot="trailing",d.appendChild(l)}if(o.disabled&&(h.disabled=o.disabled),c&&(d.selected=!0),!o.disabled&&typeof i.cascadingElementFactory=="function"&&Array.isArray(o.options)&&o.options.length){const l=document.createElement("forge-icon");l.name="arrow_right",l.slot="trailing",d.appendChild(l);const M={index:a.filter(H=>!H.divider).indexOf(o),options:o.options,parentValue:o.value},C=i.cascadingElementFactory.call(null,M);C.appendChild(d),d=C}b.appendChild(d)}}}function I(i){const t=document.createElement("forge-icon");return t.setAttribute(f.attributes.CHECKBOX_ELEMENT,""),t.name=i?N.name:B.name,t.slot="leading",t.style.marginRight="16px",t.style.verticalAlign="middle",t}function pt(){return document.createElement("forge-divider")}function P(i="font",t,e,s){if(i==="component"){const r=document.createElement("forge-icon");return e&&r.classList.add(e),r.setAttribute("aria-hidden","true"),r.name=t,s&&Object.assign(r,s),r}const n=document.createElement("i");return n.classList.add(e||$),n.setAttribute("aria-hidden","true"),n.textContent=t,n}function _t(i){switch(i){case D.Skeleton:return ut();default:return mt()}}function mt(){const i=document.createElement("div");i.style.display="flex",i.style.justifyContent="center",i.style.alignItems="center",i.style.padding="8px",i.style.boxSizing="border-box";const t=document.createElement("forge-circular-progress");return t.style.setProperty("--forge-circular-progress-size","24px"),i.appendChild(t),i}function ut(){const i=document.createElement("forge-list"),t=document.createElement("div");t.style.minWidth="192px";for(let e=0;e<3;e++){const s=document.createElement(Q.elementName);s.setAttribute("list-item",""),t.appendChild(s)}return i.appendChild(t),i}function ft(){const i=document.createElement(K.elementName);return i.determinate=!1,i.style.position="absolute",i.style.top="0",i.style.left="0",i.style.right="0",i.style.width="100%",i}function Et(i){return R(i,1)?i:[{text:"",options:i}]}function R(i,t){const e=i.some(n=>v(n)&&S(n)&&n.hasOwnProperty("options")&&(n.hasOwnProperty("text")||n.hasOwnProperty("builder"))),s=i.some(n=>v(n)&&S(n)&&n.hasOwnProperty("label")&&n.hasOwnProperty("value"));return e&&t===1||s&&t===0}function k(i){return R(i,1)?i.reduce((e,s)=>e.concat(s.options),[]):[...i]}class gt{constructor(t,e){this._adapter=t,this._open=!1,this._config=Object.assign({...rt},{...e}),this._selectListener=(s,n)=>this._onSelect(s,n),this._closeListener=()=>{typeof this._config.closeCallback=="function"&&this._config.closeCallback()},this._scrollEndListener=()=>{this._config.observeScroll&&typeof this._config.scrollEndListener=="function"&&this._config.scrollEndListener()}}destroy(){this._adapter.remove()}open(){this._open||(this._open=!0,this._adapter.open(this._config,this._selectListener,this._closeListener),window.requestAnimationFrame(()=>{this._open&&this.activateInitialOption()}),this._config.observeScroll&&this._config.scrollEndListener&&this._adapter.setScrollBottomListener(this._scrollEndListener,this._config.observeScrollThreshold||0))}async close(){this._open&&(this._open=!1,this._config.observeScroll&&this._config.scrollEndListener&&this._adapter.removeScrollBottomListener(this._scrollEndListener),await this._adapter.close())}_onSelect(t,e){if(typeof this._config.activeChangeCallback=="function"&&this._config.activeChangeCallback(e),typeof this._config.selectCallback=="function"&&this._config.selectCallback(t),this._open){const s=this._config.syncWidth===void 0;this._adapter.syncWidth(s)}}getActiveOptionIndex(){return this._adapter.getActiveOptionIndex()}getActiveOption(){const t=this.getActiveOptionIndex();return t>=0?this._nonDividerOptions[t]:void 0}toggleOptionMultiple(t,e){return this._adapter.toggleOptionMultiple(t,e)}activateSelectedOption(){this._adapter.activateSelectedOption(this._config)}activateFirstOption(){const t=this._nonDividerOptions.findIndex(e=>!e.disabled);return t!==-1&&this.activateOption(t),t}activateLastOption(){const t=this._nonDividerOptions,e=t.length-1-t.findIndex(s=>!s.disabled);return e!==-1&&this.activateOption(e),e}activateOption(t,e){return this._adapter.activateOption(t,this._config.activeChangeCallback,e)}activateInitialOption(){typeof this._config.activeStartIndex=="number"&&this._nonDividerOptions[this._config.activeStartIndex]?(this.activateOption(this._config.activeStartIndex,!1),this._adapter.scrollSelectedOptionIntoView(!1)):this._config.selectedValues&&this._config.selectedValues.length?this._adapter.scrollSelectedOptionIntoView(!1):typeof this._config.visibleStartIndex=="number"&&this._nonDividerOptions[this._config.visibleStartIndex]&&this._adapter.scrollOptionIntoView(this._config.visibleStartIndex)}setSelectedValues(t){Array.isArray(t)||(t=[t]),!this._config.multiple&&t.length>1&&(t=[t[0]]),this._config.selectedValues=t,this._adapter.setSelectedValues(t,this._config.multiple)}clearActiveOption(){this._adapter.clearActiveOption()}setOptions(t){this._config.options=t,this._open&&(this._adapter.setOptions(this._config),this.activateInitialOption())}appendOptions(t){this._config.options=[...this._config.options,...t],this._open&&this._adapter.appendOptions(t,this._config)}get dropdownElement(){return this._adapter.dropdownElement}scrollSelectedOptionIntoView(t=!0){this._adapter.scrollSelectedOptionIntoView(t)}setScrollBottomListener(t,e){this._config.scrollEndListener=t,this._config.observeScroll=!0,this._config.observeScrollThreshold=e,this._adapter.setScrollBottomListener(this._scrollEndListener,this._config.observeScrollThreshold||0)}removeScrollBottomListener(){this._config.scrollEndListener=void 0,this._adapter.removeScrollBottomListener(this._scrollEndListener)}setBusyVisibility(t){this._config.allowBusy&&this._adapter.setBusyVisibility(t)}handleKey(t){switch(t){case"Enter":case"NumpadEnter":const e=this.getActiveOptionIndex(),s=this._nonDividerOptions[e];if(this._canSelectOption(s)){const a=this._adapter.getActiveOptionIdByIndex(e);a&&this._onSelect(s.value,a)}break;case"Up":case"ArrowUp":case"Down":case"ArrowDown":const n=this._nonDividerOptions;if(n.length&&n.every(a=>!this._canSelectOption(a)))return;const r=this._getNextActiveOptionIndex(t);this.activateOption(r);break;case"Home":this.activateFirstOption();break;case"End":this.activateLastOption();break}}_canSelectOption(t){return t&&!t.disabled&&!t.divider}_getNextActiveOptionIndex(t){let e=this._adapter.getActiveOptionIndex();return e===-1&&(e=this._adapter.getSelectedOptionIndex()),t==="ArrowUp"||t==="Up"?this._getPreviousHighlightableOptionIndex(e,this._nonDividerOptions):this._getNextHighlightableOptionIndex(e,this._nonDividerOptions)}_getPreviousHighlightableOptionIndex(t,e){const s=t<=0?e.length-1:t-1;return e[s].disabled?this._getPreviousHighlightableOptionIndex(s,e):s}_getNextHighlightableOptionIndex(t,e){const s=t===e.length-1?0:t+1;return e[s].disabled?this._getNextHighlightableOptionIndex(s,e):s}get _flatOptions(){return k(this._config.options)}get _nonDividerOptions(){return this._flatOptions.filter(t=>!t.divider)}}class Ot{constructor(t){this._targetElement=t}get dropdownElement(){return this._dropdownElement}open(t,e,s){this._dropdownElement=ct(t,this._targetElement),t.type!==g.None&&t.type!==g.Menu?this._dropdownElement.preset="dropdown":t.type===g.Menu&&(this._dropdownElement.preset="list"),this.syncWidth(!!t.syncWidth,t.targetWidthCallback),t.allowBusy&&(this._busyElement=ft(),this._busyElement.style.display="none",this._dropdownElement.appendChild(this._busyElement)),t.headerBuilder&&(this._headerElement=t.headerBuilder(),this._headerElement&&this._headerElement.setAttribute(f.attributes.DATA_ALLOW_FOCUS,"")),t.footerBuilder&&(this._footerElement=t.footerBuilder(),this._footerElement&&this._footerElement.setAttribute(f.attributes.DATA_ALLOW_FOCUS,"")),this._listElement=ht(t),this._listElement.addEventListener("forge-list-item-select",a=>{const _=a.target.querySelector("button");_.setAttribute("aria-selected","true"),e(a.detail.value,_.id)}),t.options.length?(y(t,this._listElement),this._dropdownElement.appendChild(this._listElement),this._headerElement&&this._dropdownElement.insertAdjacentElement("afterbegin",this._headerElement),this._footerElement&&this._dropdownElement.appendChild(this._footerElement)):t.allowBusy&&(this._asyncElement=_t(t.asyncStyle),this._dropdownElement.appendChild(this._asyncElement)),this._announcerElement=et(),this._announcerElement.id=`${t.id}-activedescendant`,this._dropdownElement.appendChild(this._announcerElement);const n=this._targetElement.ownerDocument??document;(z(O.selectors.HOST,this._targetElement)??n.body).appendChild(this._dropdownElement),this._dropdownElement.setAttribute(O.attributes.HOST,""),this._dropdownElement.open=!0}async close(){this._dropdownElement&&(await this._dropdownElement.hideAsync(),this.remove())}remove(){var t;(t=this._dropdownElement)==null||t.remove(),this._dropdownElement=void 0,this._listElement=void 0,this._announcerElement=void 0}setScrollBottomListener(t,e){if(this._dropdownElement&&!this._scrollObserver){const s={scrollThreshold:e},n=A(this._dropdownElement,O.selectors.SURFACE);this._scrollObserver=new nt(n,s),this._scrollObserver.addListener(m.ScrolledEnd,t)}}removeScrollBottomListener(t){this._scrollObserver&&this._scrollObserver.removeListener(m.ScrolledEnd,t)}getActiveOptionIndex(){if(!this._dropdownElement)return-1;const t=this._getListItemElements(),e=[...t].reverse().find(s=>s.active);return e?t.indexOf(e):-1}getSelectedOptionIndex(){return this._getListItemElements().findIndex(e=>e.selected)}getActiveOptionIdByIndex(t){if(!this._dropdownElement)return null;const s=this._getListItemElements()[t],n=s==null?void 0:s.querySelector("button");return n?n.id:null}toggleOptionMultiple(t,e){if(!this._dropdownElement)return;const s=this._getListItemElements();s.length&&s[t]&&this._toggleSelectedOption(s[t],e)}scrollOptionIntoView(t,e=!0){const s=this._getListItemElements()[t];s&&this._scrollListItemIntoView(s,e?"smooth":"auto","center")}scrollSelectedOptionIntoView(t=!0){const e=this._getSelectedListItem();this._scrollListItemIntoView(e,t?"smooth":"auto","center")}activateSelectedOption(t){const e=this._getListItemElements();e.length&&e.filter(r=>r.active).forEach(r=>r.active=!1);const s=this._getSelectedListItem();s&&this._activateListOption(s,t.activeChangeCallback)}activateOption(t,e,s=!0){if(!this._dropdownElement)return;const n=this._getListItemElements();n.length&&(n.filter(a=>a.active).forEach(a=>a.active=!1),this._activateListOption(n[t],e),this._scrollListItemIntoView(n[t],s?"smooth":"auto"))}setSelectedValues(t,e=!1){if(!this._dropdownElement)return;const s=this._getListItemElements();for(const n of s){const r=t.some(a=>W(a,n.value));if(n.selected=r,e){const a=n.querySelector(`[${f.attributes.CHECKBOX_ELEMENT}]`);if(a){const p=I(r);x(p,a)}}}}clearActiveOption(){this._getListItemElements().forEach(e=>e.active=!1)}syncWidth(t,e){if(this._dropdownElement){const s=t?"--forge-popover-width":"--forge-popover-min-width";this._dropdownElement.style.setProperty(s,`${this._getTargetElementWidth(e)}px`)}}setOptions(t){!this._dropdownElement||!this._listElement||(this._asyncElement&&this._asyncElement.isConnected&&q(this._asyncElement),this._busyElement&&(this._busyElement.style.display="none"),this._listElement.isConnected||this._dropdownElement.appendChild(this._listElement),G(this._listElement),y(t,this._listElement),this._headerElement&&!this._headerElement.isConnected&&this._dropdownElement.insertAdjacentElement("afterbegin",this._headerElement),this._footerElement&&!this._footerElement.isConnected&&this._dropdownElement.insertAdjacentElement("beforeend",this._footerElement),"position"in this._dropdownElement&&typeof this._dropdownElement.position=="function"&&this._dropdownElement.position())}appendOptions(t,e){!this._dropdownElement||!this._listElement||y(e,this._listElement,t,this._listElement.childElementCount,!1)}setBusyVisibility(t){this._dropdownElement&&(t?this._busyElement.style.removeProperty("display"):this._busyElement.style.display="none")}getScreenWidth(){return window.innerWidth}_getListItemElements(){return this._dropdownElement?Array.from(this._dropdownElement.querySelectorAll(Y.elementName)):[]}_toggleSelectedOption(t,e){if(!this._dropdownElement)return;const s=this._getListItemElements();s.length&&s.filter(p=>p!==t&&p.active).forEach(p=>p.active=!1),t.selected=e;const n=t.querySelector("button");n.setAttribute("aria-selected",`${e}`),n.setAttribute("aria-checked",`${e}`);const r=t.querySelector(`${J.elementName}[slot=leading]`);if(r){const a=I(e);x(a,r)}}_getTargetElementWidth(t){return t&&T(t)?t():this._targetElement.getBoundingClientRect().width}_activateListOption(t,e){const s=t==null?void 0:t.querySelector("button");t&&s&&!s.disabled&&(t.active=!0,e&&T(e)&&e(s.id))}_scrollListItemIntoView(t,e="auto",s="nearest"){if(t&&this._dropdownElement&&this._dropdownElement.isConnected){const n=A(this._dropdownElement,O.selectors.SURFACE);n&&j(n,t,e,s)}}_getSelectedListItem(){return this._getListItemElements().find(e=>e.selected)}}class Pt{constructor(t,e){this._targetElement=t,tt.define([N,B]),this._foundation=new gt(new Ot(this._targetElement),e)}destroy(){this._foundation.destroy()}open(){this._foundation.open()}close(){return this._foundation.close()}getActiveOptionIndex(){return this._foundation.getActiveOptionIndex()}getActiveOption(){return this._foundation.getActiveOption()}toggleOptionMultiple(t,e){return this._foundation.toggleOptionMultiple(t,e)}activateSelectedOption(){this._foundation.activateSelectedOption()}activateFirstOption(){return this._foundation.activateFirstOption()}activateOption(t){return this._foundation.activateOption(t)}activateInitialOption(){return this._foundation.activateInitialOption()}clearActiveOption(){this._foundation.clearActiveOption()}setSelectedValues(t){return this._foundation.setSelectedValues(t)}get dropdownElement(){return this._foundation.dropdownElement}setOptions(t){this._foundation.setOptions(t)}appendOptions(t){this._foundation.appendOptions(t)}scrollSelectedOptionIntoView(t){this._foundation.scrollSelectedOptionIntoView()}setScrollBottomListener(t,e){this._foundation.setScrollBottomListener(t,e)}removeScrollBottomListener(){this._foundation.removeScrollBottomListener()}setBusyVisibility(t){this._foundation.setBusyVisibility(t)}handleKey(t){this._foundation.handleKey(t)}}export{f as L,Pt as a,at as b,g as c,D as d,R as i};
