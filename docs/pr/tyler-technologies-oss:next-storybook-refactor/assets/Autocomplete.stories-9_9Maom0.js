import{C as P,a7 as x,U as B,V as N,t as U,H as d,a1 as b,a2 as L,L as k,a8 as R,W as y,K as H,z as M,A as V,T as W,l as f,m as K,c as q,g as z}from"./constants-CYeMfgsl.js";import{h as G,D as $,E as j}from"./index-Dd7dh6lc.js";import{D as Y}from"./divider-Mu7r5syl.js";import{I as X,a as Q}from"./icon-Cl4LFQNy.js";import"./index-Dh0vMUMR.js";import{a as Z}from"./linear-progress-Cj7EgNE2.js";import{b as J,c as tt}from"./list-AKznUQR6.js";import{L as et,a as it}from"./list-dropdown-aware-foundation-BJh0PPyV.js";import{a as C,P as st}from"./popover-BYOA7f1d.js";import{a as ot}from"./skeleton-DlZvZ332.js";import{T as nt,a as rt}from"./text-field-BBNYKpf-.js";import"./base-field-CpQYlI8i.js";import"./focus-indicator-Cam4qI9V.js";import"./label-C3nmKxIT.js";import"./button-Cmiqf2xE.js";import"./state-layer-02o5UE3p.js";import"./button-toggle-group-CXa8SFzQ.js";import"./checkbox-DcEhJZrQ.js";import"./icon-button-DHRKLwKL.js";import"./switch-Dc7CZ5CH.js";import{B as lt,F as h}from"./base-adapter-BhMU2jjH.js";import{a as at,d as pt}from"./list-dropdown-DI0wnNC6.js";import"./overlay-Dg3gyJj4.js";import{C as S}from"./chip-field-CB9Ep5IT.js";import{h as ht}from"./utils-_KxxXSob.js";const T=`${P}autocomplete`,_t={MODE:"mode",MULTIPLE:"multiple",DEBOUNCE:"debounce",FILTER_ON_FOCUS:"filter-on-focus",FILTER_FOCUS_FIRST:"filter-focus-first",ALLOW_UNMATCHED:"allow-unmatched",POPUP_TARGET:"popup-target",POPUP_CLASSES:"popup-classes",OPTION_LIMIT:"option-limit",OBSERVE_SCROLL:"observe-scroll",OBSERVE_SCROLL_THRESHOLD:"observe-scroll-threshold",SYNC_POPUP_WIDTH:"sync-popup-width",OPEN:"open",MATCH_KEY:"match-key",FILTER_TEXT:"filter-text",DROPDOWN_ICON_OPEN:"data-forge-dropdown-icon-open"},dt={INPUT:"input",DROPDOWN_ICON:"[data-forge-dropdown-icon],[data-forge-dropdown-icon],[forge-dropdown-icon],.forge-dropdown-icon",CLEAR_BUTTON:"[data-forge-autocomplete-clear],[forge-autocomplete-clear]"},ct={DEFAULT_DEBOUNCE_TIME:x,NUM_SKELETON_ITEMS:3},ut={CHANGE:`${T}-change`,SELECT:`${T}-select`,SCROLLED_BOTTOM:`${T}-scrolled-bottom`},o={elementName:T,attributes:_t,selectors:dt,numbers:ct,events:ut};var m=(n=>(n.Default="default",n.Stateless="stateless",n))(m||{});class ft extends lt{constructor(t){super(t),this.setInputElement()}setInputElement(){const t=B(this._component,o.selectors.INPUT,!1);return t.length&&(this._inputElement=t[0]),this._inputElement}setInputAttribute(t,e){this._inputElement.setAttribute(t,e)}addInputListener(t,e){this._inputElement.addEventListener(t,e)}removeInputListener(t,e){this._inputElement.removeEventListener(t,e)}initializeInputAccessibility(t){this._inputElement.setAttribute("autocomplete","off"),this._inputElement.setAttribute("role","combobox"),this._inputElement.setAttribute("aria-live","polite"),this._inputElement.setAttribute("aria-atomic","true"),this._inputElement.setAttribute("aria-haspopup","true"),this._inputElement.setAttribute("aria-expanded","false"),this._inputElement.setAttribute("aria-autocomplete","list")}isWrappingChipField(){return!!this._component.querySelector(S.elementName)}show(t,e){this._targetElement=this._getTargetElement(e),this._targetElement&&(this._listDropdown=new at(this._targetElement,t),this._listDropdown.open(),this._inputElement.setAttribute("aria-expanded","true"),this._inputElement.setAttribute("aria-controls",`list-dropdown-popup-${t.id}`),this._tryToggleDropdownIconRotation(!0))}async hide(t,{destroy:e=!1}={}){var s,r,_;if(this.setBusyVisibility(!1),this._tryToggleDropdownIconRotation(!1),(s=this._inputElement)==null||s.removeAttribute("aria-activedescendant"),(r=this._inputElement)==null||r.removeAttribute("aria-controls"),(_=this._inputElement)==null||_.setAttribute("aria-expanded","false"),!this._listDropdown)return;const{anchorElement:i}=this._listDropdown.dropdownElement;i&&i instanceof HTMLElement&&(i==null||i.removeEventListener(C.events.TOGGLE,t)),e?this._listDropdown.destroy():await this._listDropdown.close(),this._listDropdown=void 0}setBusyVisibility(t){var e;(e=this._listDropdown)==null||e.setBusyVisibility(t)}setDismissListener(t){if(!this._listDropdown||!this._listDropdown.dropdownElement)return;const e=this._listDropdown.dropdownElement;e.anchorElement&&e.anchorElement instanceof HTMLElement&&e.anchorElement.addEventListener(C.events.TOGGLE,t)}focus(){window.requestAnimationFrame(()=>this._inputElement.focus())}setOptions(t){var e;(e=this._listDropdown)==null||e.setOptions(t)}appendOptions(t){var e;(e=this._listDropdown)==null||e.appendOptions(t)}setSelectedText(t){this._inputElement.value=t}getInputValue(){return this._inputElement.value}setInputValue(t){this._inputElement.value=t}selectInputValue(){window.requestAnimationFrame(()=>this._inputElement.select())}isFocusWithinPopup(t){return!this._listDropdown||!this._listDropdown.dropdownElement?!1:this._listDropdown.dropdownElement.contains(t)}hasFocus(){const t=N(this._component.ownerDocument);return t===this._inputElement||this.isFocusWithinPopup(t)}hasInputElement(){return!!this._inputElement}setDropdownIconListener(t,e){window.requestAnimationFrame(()=>{const i=this._component.querySelector(o.selectors.DROPDOWN_ICON);i&&i.addEventListener(t,e)})}removeDropdownIconListener(t,e){const i=this._component.querySelector(o.selectors.DROPDOWN_ICON);i&&i.removeEventListener(t,e)}setClearButtonListener(t,e){window.requestAnimationFrame(()=>{const i=this._component.querySelector(o.selectors.CLEAR_BUTTON);i&&i.addEventListener(t,e)})}removeClearButtonListener(t,e){const i=this._component.querySelector(o.selectors.CLEAR_BUTTON);i&&i.removeEventListener(t,e)}propagateKey(t){var e;(e=this._listDropdown)==null||e.handleKey(t)}updateActiveDescendant(t){this._targetElement&&U(this._inputElement,!!t,"aria-activedescendant",t)}getTargetElementWidth(t){return this._targetElement||(this._targetElement=this._getTargetElement(t)),this._targetElement.getBoundingClientRect().width}getPopupElement(){var t;return((t=this._listDropdown)==null?void 0:t.dropdownElement)??null}activateFirstOption(){var t;(t=this._listDropdown)==null||t.activateFirstOption()}activateSelectedOption(){var t;(t=this._listDropdown)==null||t.activateSelectedOption()}activateOptionByIndex(t){var e;(e=this._listDropdown)==null||e.activateOption(t)}getActiveOptionIndex(){var t;return((t=this._listDropdown)==null?void 0:t.getActiveOptionIndex())??null}clearActiveOption(){var t;(t=this._listDropdown)==null||t.clearActiveOption()}setSelectedOptions(t){if(this._listDropdown){const e=t.map(i=>i.value);this._listDropdown.setSelectedValues(e)}}queueDropdownPositionUpdate(){this.getPopupElement()&&window.requestAnimationFrame(()=>{const t=this.getPopupElement();t==null||t.position()})}_getTargetElement(t){return t?this._component.querySelector(t)||this._getDefaultTargetElement():this._getDefaultTargetElement()}_getDefaultTargetElement(){const t=this._tryGetFieldLikeChild();return t!=null&&t.popoverTargetElement?t.popoverTargetElement:this._component.querySelector("input")||this._component}_tryToggleDropdownIconRotation(t){const e=this._tryGetFieldLikeChild();e!=null&&e.popoverIcon&&(e.popoverExpanded=t);const i=this._component.querySelector(o.selectors.DROPDOWN_ICON);i&&(i.style.transition="transform 120ms linear",i.style.transform=t?"rotateZ(180deg)":"")}_tryGetFieldLikeChild(){const t=[nt.elementName,S.elementName];return this._component.querySelector(`:is(${t.join(",")})`)}}var O=(n=>(n[n.Option=0]="Option",n[n.Group=1]="Group",n))(O||{});function w(n,t){const e=n.some(s=>d(s)&&b(s)&&s.hasOwnProperty("options")&&(s.hasOwnProperty("text")||s.hasOwnProperty("builder"))),i=n.some(s=>d(s)&&b(s)&&s.hasOwnProperty("label")&&s.hasOwnProperty("value"));return e&&t===1||i&&t===0}function mt(n,t){return n.find(e=>e.value===t)}function E(n,t,e=null){return e?!(e in n.value)||!(e in t)?!1:L(n.value[e],t[e]):L(n.value,t)}class Ot extends et{constructor(t){super(),this._adapter=t,this._isInitialized=!1,this._isDropdownOpen=!1,this._mode=m.Default,this._multiple=!1,this._debounce=o.numbers.DEFAULT_DEBOUNCE_TIME,this._allowUnmatched=!1,this._filterOnFocus=!0,this._filterFocusFirst=!0,this._options=[],this._filterText="",this._selectedOptions=[],this._values=[],this._pendingFilterPromises=[],this._matchKey=null,this._clickListener=e=>this._onClick(e),this._focusListener=()=>this._onFocus(),this._blurListener=e=>this._onBlur(e),this._keydownListener=e=>this._onKeydown(e),this._dropdownIconClickListener=e=>this._onDropdownIconClick(e),this._dropdownScrollEndListener=()=>this._onDropdownScrollEnd(),this._dropdownIconMouseDownListener=e=>this._onDropdownIconMouseDown(e),this._clearButtonListener=e=>this._onClear(e),this._dismissListener=()=>this._onDismiss(),this._activeChangeListener=e=>this._adapter.updateActiveDescendant(e),this._targetWidthCallback=()=>this._adapter.getTargetElementWidth(this._popupTarget),this._identifier=k()}async initialize(){if(!this._adapter.hasInputElement()&&!this._adapter.setInputElement())throw new Error("An input element is required as a child of the autocomplete component.");if(this._setInputListener(),this._setFilterCallback(),this._attachListeners(),this._initializeAccessibility(),this._values.length){if(!this._selectedOptions.length){try{await this._executeFilter()}catch(t){console.error(t)}this._updateSelectedOptions(this._values)}this._adapter.setSelectedText(this._getSelectedText())}this._isInitialized=!0}disconnect(){this._isInitialized&&(this._detachListeners(),this._isInitialized=!1),this._closeDropdown({destroy:!0})}async forceFilter({preserveValue:t}){this._options=[],await this._executeFilter(!0,!0),t&&this._options.push(...this._selectedOptions),this._applyValue(this._values)}_attachListeners(){this._adapter.addInputListener("click",this._clickListener),this._adapter.addInputListener("focus",this._focusListener),this._adapter.addInputListener("blur",this._blurListener),this._adapter.addInputListener("input",this._inputListener),this._adapter.addInputListener("keydown",this._keydownListener),this._adapter.setDropdownIconListener("click",this._dropdownIconClickListener),this._adapter.setDropdownIconListener("mousedown",this._dropdownIconMouseDownListener),this._adapter.setClearButtonListener("click",this._clearButtonListener)}_detachListeners(){this._adapter.removeInputListener("click",this._clickListener),this._adapter.removeInputListener("focus",this._focusListener),this._adapter.removeInputListener("blur",this._blurListener),this._adapter.removeInputListener("input",this._inputListener),this._adapter.removeInputListener("keydown",this._keydownListener),this._adapter.removeDropdownIconListener("click",this._dropdownIconClickListener),this._adapter.removeDropdownIconListener("mousedown",this._dropdownIconMouseDownListener),this._adapter.removeClearButtonListener("click",this._clearButtonListener)}_setInputListener(){this._inputListener=t=>this._onInput(t)}_setFilterCallback(){this._filterFn=d(this._debounce)&&this._debounce>0?R(this._debounceFilter,this._debounce,!1):this._debounceFilter}_initializeAccessibility(){this._adapter.initializeInputAccessibility(this._identifier)}get _flatOptions(){return w(this._options,O.Group)?this._options.reduce((t,e)=>t.concat(e.options),[]):this._options}_onClick(t){!this._isDropdownOpen&&this._filterOnFocus&&this._showDropdown()}_onDropdownIconMouseDown(t){t.preventDefault()}_onDropdownIconClick(t){this._isDropdownOpen?this._closeDropdown():(this._adapter.focus(),window.requestAnimationFrame(()=>this._showDropdown()))}_onClear(t){this._filterText="",this._clearValue(),this._adapter.setSelectedText(this._getSelectedText())}_onDropdownScrollEnd(){this._adapter.emitHostEvent(o.events.SCROLLED_BOTTOM)}_onFocus(){!this._isDropdownOpen&&this._adapter.getInputValue()&&!y.isMobile&&this._adapter.selectInputValue()}_onBlur(t){this._adapter.isFocusWithinPopup(t.relatedTarget)||this._applyBlur()}_applyBlur(){this._isDropdownOpen&&this._closeDropdown(),this._mode!==m.Stateless&&(this._selectedOptions.length?this._adapter.setSelectedText(this._getSelectedText()):this._allowUnmatched||(this._filterText="",this._adapter.setSelectedText("")))}_onInput(t){this._selectedOptions.length&&!this._multiple&&(!this._adapter.getInputValue()||this._allowUnmatched)&&!this._adapter.isWrappingChipField()&&(this._selectedOptions=[],this._values=[],this._emitChangeEvent()),this._filterText=this._adapter.getInputValue(),this._filterFn()}async _debounceFilter({checkFocus:t=!0}={}){if(!t&&!this._adapter.hasFocus()){this._pendingFilterPromises=[],this._isDropdownOpen&&this._closeDropdown();return}const e=this._filterText,i=this._executeFilter();this._pendingFilterPromises.push(i),this._isDropdownOpen?this._adapter.setBusyVisibility(!0):this._showDropdown({filter:!1});try{await i}catch{this._pendingFilterPromises=[],this._isDropdownOpen&&this._closeDropdown();return}if(e===this._filterText)this._pendingFilterPromises=[],this._onFilterComplete();else{const s=this._pendingFilterPromises.indexOf(i);s!==-1&&this._pendingFilterPromises.splice(s,1)}}_onKeydown(t){switch(t.key){case"Tab":this._isDropdownOpen&&!this._multiple&&this._selectActiveOption(!1);break;case"Esc":case"Escape":this._isDropdownOpen&&(t.preventDefault(),t.stopPropagation(),this._closeDropdown());break;case"Down":case"ArrowDown":t.preventDefault(),this._isDropdownOpen?this._adapter.propagateKey(t.key):this._showDropdown({activateFirst:!0,activateSelected:!0});break;case"Up":case"ArrowUp":t.preventDefault(),this._isDropdownOpen&&this._adapter.propagateKey(t.key);break;case"Enter":case"Home":case"End":this._isDropdownOpen&&(t.key==="Enter"&&t.stopPropagation(),t.preventDefault(),this._adapter.propagateKey(t.key));break;case"Backspace":case"Delete":const e=t.target,i=this._adapter.getInputValue(),s=e.value.substring(e.selectionStart,e.selectionEnd)===e.value,r=i.length===1&&e.selectionEnd===1,_=i.length===1&&e.selectionEnd===0,c=!i||s||r||_;!this._adapter.isWrappingChipField()&&c&&!this._multiple&&this._values.length&&this._clearValue();break}}_executeFilter(t=!0,e=!1){if(!this._filter||typeof this._filter!="function")throw new Error('A filter callback must be provided. Did you set the "filter" property?');const i=this._filter,s=t?this._filterText:"",r=e?this._getValue():null;return new Promise((_,c)=>Promise.resolve(i(s,r)).then(l=>{this._options=l,_(this._options)}).catch(l=>c(`An unexpected error occurred while filtering: ${l}`)))}_onFilterComplete(){if(!this._adapter.hasFocus()){this._isDropdownOpen&&this._closeDropdown();return}if(this._options.length){const t=this._allowUnmatched&&!this._selectedOptions.length;this._dropdownReady({userTriggered:t}),this._filterFocusFirst&&this._filterText&&this._adapter.activateFirstOption()}else this._closeDropdown()}_clearValue(){this._selectedOptions=[],this._values=[],this._isDropdownOpen&&(this._adapter.setSelectedOptions([]),this._adapter.clearActiveOption()),this._emitChangeEvent()}async _showDropdown({filter:t=!0,userTriggered:e=!0,activateFirst:i=!1,activateSelected:s=!1}={}){const r=this._allowUnmatched&&!this._selectedOptions.length;this._isDropdownOpen=!0;let _;if(this._optionBuilder){const l=this._optionBuilder;_=(u,A)=>l(u,this._filterText,A)}const c={options:this._options,multiple:this._multiple,selectedValues:[...this._values],id:`forge-autocomplete-${this._identifier}`,asyncStyle:pt.Skeleton,optionLimit:this._optionLimit,popupClasses:this._popupClasses,headerBuilder:this._popupHeaderBuilder,footerBuilder:this._popupFooterBuilder,transform:l=>{if(this._filterText){const u=ht(l,this._filterText);if(u)return u}return l},allowBusy:!0,optionBuilder:_,syncWidth:this._syncPopupWidth,observeScroll:this._observeScroll,observeScrollThreshold:this._observeScrollThreshold,scrollEndListener:this._dropdownScrollEndListener,activeChangeCallback:this._activeChangeListener,targetWidthCallback:this._targetWidthCallback,selectCallback:l=>this._onSelect(l),closeCallback:()=>this._closeDropdown()};if(this._adapter.show(c,this._popupTarget),this._adapter.toggleHostAttribute(o.attributes.OPEN,this._isDropdownOpen),t){this._options.length&&this._adapter.setBusyVisibility(!0);try{await this._executeFilter(r)}catch(l){console.error(l)}this._updateSelectedOptions(this._values)}this._pendingFilterPromises.length||this._dropdownReady({userTriggered:e,activateFirst:i,activateSelected:s})}_dropdownReady({userTriggered:t=!0,activateFirst:e=!1,activateSelected:i=!1}={}){if(!this._isDropdownOpen||!this._options.length||t&&!this._adapter.hasFocus()){this._closeDropdown();return}this._sortSelectedOptions(),this._adapter.setBusyVisibility(!1),this._adapter.setOptions(this._options),this._adapter.setSelectedOptions(this._selectedOptions),this._adapter.setDismissListener(this._dismissListener),i&&this._selectedOptions.length?this._adapter.activateSelectedOption():e&&this._adapter.activateFirstOption()}_closeDropdown({destroy:t=!1}={}){this._multiple&&(this._filterText=""),this._isDropdownOpen=!1,this._adapter.hide(this._dismissListener,{destroy:t}),this._sortSelectedOptions(),this._adapter.toggleHostAttribute(o.attributes.OPEN,this._isDropdownOpen)}_sortSelectedOptions(){if(this._multiple&&this._selectedOptions.length&&w(this._options,O.Option)){const t=[],e=[];this._options.forEach(i=>{this._selectedOptions.find(s=>E(s,i.value,this._matchKey))?t.push(i):e.push(i)}),this._options=[...t,...e]}}async _onSelect(t,e=!0){if(this._valueChanging)return;if(this._mode===m.Stateless){const s={value:t};this._adapter.emitHostEvent(o.events.SELECT,s,!0,!0)&&(this._filterText="",this._multiple||this._closeDropdown());return}const i=()=>{const r=this._flatOptions.find(l=>E(l,t,this._matchKey)),_=r?r.value:"",c=r?r.label:"";if(this._multiple){const l=mt(this._selectedOptions,_);if(l){const u=this._selectedOptions.indexOf(l);this._selectedOptions.splice(u,1)}else this._selectedOptions.push(r)}else d(_)?(this._selectedOptions[0]=r,this._filterText=c):(this._selectedOptions=[],this._filterText="");this._isDropdownOpen&&this._adapter.setSelectedOptions(this._selectedOptions),this._values=this._selectedOptions.map(l=>l.value),this._adapter.setSelectedText(this._getSelectedText()),!y.isMobile&&e&&this._adapter.selectInputValue(),this._emitChangeEvent(),this._tryUpdateDropdownPosition()};this._isDropdownOpen&&!this._multiple&&this._closeDropdown(),typeof this._beforeValueChange=="function"?(this._valueChanging=Promise.resolve(this._beforeValueChange.call(null,t,this._matchKey)),await this._valueChanging?i():this._tryUpdateDropdownPosition(),this._valueChanging=void 0):i()}_selectActiveOption(t=!0){const e=this._adapter.getActiveOptionIndex();if(typeof e=="number"&&e>=0){const i=this._flatOptions[e];i&&this._onSelect(i.value,t)}}_emitChangeEvent(){this._adapter.emitHostEvent(o.events.CHANGE,this._getValue(),!0)}_tryUpdateDropdownPosition(){this._isDropdownOpen&&this._adapter.queueDropdownPositionUpdate()}_getValue(){return this._values?this._values.length?this._multiple?[...this._values]:this._values[0]:this._multiple?[]:null:null}_getSelectedText(){var t;return this._adapter.isWrappingChipField()?"":this._selectedTextBuilder?this._selectedTextBuilder(this._selectedOptions):this._multiple?this._values.length?this._values.length===1?((t=this._selectedOptions[0])==null?void 0:t.label)??"":`${this._values.length} options selected`:"":this._selectedOptions.filter(e=>e&&e.label).map(e=>e.label).join(" ").trim()}_onDismiss(){this._closeDropdown()}async _applyValue(t){let e=[];this._selectedOptions=[],Array.isArray(t)?e=t:e=d(t)?[t]:[],!this._multiple&&e.length>1&&(e=[e[0]]),w(e,O.Option)?(this._values=e.map(s=>s.value),this._selectedOptions=e):this._values=e;const i=this._flatOptions;if(e.length&&i.length&&this._updateSelectedOptions(e),this._values.length&&!this._selectedOptions.length&&this._filter&&this._isInitialized){try{await this._executeFilter(!1,!0)}catch(s){console.error(s)}this._updateSelectedOptions(this._values)}this._multiple?this._filterText="":this._filterText=this._selectedOptions.length?this._selectedOptions[0].label:"",this._isInitialized&&this._adapter.setSelectedText(this._getSelectedText()),this._isDropdownOpen&&this._adapter.setSelectedOptions(this._selectedOptions)}_updateSelectedOptions(t){const e=[...this._flatOptions,...this._selectedOptions];if(this._selectedOptions.length&&(this._selectedOptions=[]),w(t,O.Option))for(const i of t){const s=e.find(r=>E(r,i.value,this._matchKey));s?this._selectedOptions.push(s):this._selectedOptions.push(i)}else for(const i of t){const s=e.find(r=>E(r,i,this._matchKey));s?this._selectedOptions.push(s):this._allowUnmatched&&this._selectedOptions.push({label:i,value:i})}}get mode(){return this._mode}set mode(t){this._mode!==t&&(this._mode=t,this._mode===m.Stateless&&(this._selectedOptions=[],this._isDropdownOpen&&this._closeDropdown()),this._adapter.setHostAttribute(o.attributes.MODE,this._mode))}get multiple(){return this._multiple}set multiple(t){this._multiple!==t&&(this._multiple=t,this._adapter.setHostAttribute(o.attributes.MULTIPLE,d(this._multiple)?this._multiple.toString():""))}get value(){return this._getValue()}set value(t){let e=[];t==null?e=[]:Array.isArray(t)?e=structuredClone(t):H(t)?e=[t]:e=[structuredClone(t)],(e.length!==this._values.length||e.some(s=>!this._values.includes(s)))&&this._applyValue(t)}get filterOnFocus(){return this._filterOnFocus}set filterOnFocus(t){this._filterOnFocus!==t&&(this._filterOnFocus=t,this._adapter.setHostAttribute(o.attributes.FILTER_ON_FOCUS,d(this._filterOnFocus)?this._filterOnFocus.toString():""))}get filterFocusFirst(){return this._filterFocusFirst}set filterFocusFirst(t){this._filterFocusFirst!==t&&(this._filterFocusFirst=t,this._adapter.toggleHostAttribute(o.attributes.FILTER_FOCUS_FIRST,this._filterFocusFirst))}get allowUnmatched(){return this._allowUnmatched}set allowUnmatched(t){this._allowUnmatched!==t&&(this._allowUnmatched=t,d(this._allowUnmatched)&&this._adapter.setHostAttribute(o.attributes.ALLOW_UNMATCHED,this._allowUnmatched.toString()))}get matchKey(){return this._matchKey}set matchKey(t){this._matchKey!==t&&(this._matchKey=t)}get popupTarget(){return this._popupTarget}set popupTarget(t){this._popupTarget!==t&&(this._popupTarget=t)}get filterText(){return this._filterText}set filterText(t){this._filterText!==t&&(this._filterText=this._allowUnmatched?t:"",this._isInitialized&&this._allowUnmatched&&(this._adapter.setInputValue(this._filterText),this._isDropdownOpen&&this._debounceFilter({checkFocus:!1})))}get popupClasses(){return Array.isArray(this._popupClasses)?[...this._popupClasses]:[this._popupClasses]}set popupClasses(t){this._popupClasses!==t&&(this._popupClasses=Array.isArray(t)?[...t]:[t])}set popupHeaderBuilder(t){this._popupHeaderBuilder=t}set popupFooterBuilder(t){this._popupFooterBuilder=t}get syncPopupWidth(){return this._syncPopupWidth}set syncPopupWidth(t){this._syncPopupWidth!==t&&(this._syncPopupWidth=t)}get optionLimit(){return this._optionLimit}set optionLimit(t){this._optionLimit!==t&&(this._optionLimit=t)}get debounce(){return this._debounce}set debounce(t){this._debounce!==t&&(this._debounce=t,this._isInitialized&&this._setFilterCallback(),this._adapter.setHostAttribute(o.attributes.DEBOUNCE,d(this._debounce)?this._debounce.toString():""))}get optionBuilder(){return this._optionBuilder}set optionBuilder(t){this._optionBuilder=t}get filter(){return this._filter}set filter(t){this._filter!==t&&(this._filter=t,this._isInitialized&&this._values.length&&!this._flatOptions.length&&this._filter&&this._executeFilter().then(()=>{this._updateSelectedOptions(this._values),this._adapter.setSelectedText(this._getSelectedText())}))}get selectedTextBuilder(){return this._selectedTextBuilder}set selectedTextBuilder(t){this._selectedTextBuilder=t,this._selectedOptions.length&&this._adapter.setSelectedText(this._getSelectedText())}get observeScroll(){return this._observeScroll}set observeScroll(t){this._observeScroll=t}get observeScrollThreshold(){return this._observeScrollThreshold}set observeScrollThreshold(t){this._observeScrollThreshold=t}appendOptions(t){this._isDropdownOpen&&(this._options=[...this._options,...t],this._adapter.appendOptions(t))}get isInitialized(){return this._isInitialized}get open(){return this._isDropdownOpen}set open(t){this._isDropdownOpen!==t&&(t?this._showDropdown({userTriggered:!1}):this._closeDropdown())}get beforeValueChange(){return this._beforeValueChange}set beforeValueChange(t){t!==this._beforeValueChange&&(this._beforeValueChange=t)}get popupElement(){return this._adapter.getPopupElement()}}const gt=`<template>
  <slot></slot>
</template>`,wt=":host{display:block}:host([hidden]){display:none}";var Et=Object.defineProperty,Tt=Object.getOwnPropertyDescriptor,p=(n,t,e,i)=>{for(var s=i>1?void 0:i?Tt(t,e):t,r=n.length-1,_;r>=0;r--)(_=n[r])&&(s=(i?_(t,e,s):_(s))||s);return i&&s&&Et(t,e,s),s};let a=class extends it{static get observedAttributes(){return[o.attributes.MODE,o.attributes.MULTIPLE,o.attributes.DEBOUNCE,o.attributes.FILTER_ON_FOCUS,o.attributes.FILTER_FOCUS_FIRST,o.attributes.ALLOW_UNMATCHED,o.attributes.POPUP_TARGET,o.attributes.POPUP_CLASSES,o.attributes.OBSERVE_SCROLL,o.attributes.OBSERVE_SCROLL_THRESHOLD,o.attributes.OPTION_LIMIT,o.attributes.SYNC_POPUP_WIDTH,o.attributes.OPEN,o.attributes.MATCH_KEY,o.attributes.FILTER_TEXT]}constructor(){super(),X.define([G,$,j]),V(this,gt,wt),this._foundation=new Ot(new ft(this))}connectedCallback(){this.querySelector(o.selectors.INPUT)?this._foundation.initialize():W(this,o.selectors.INPUT).then(()=>this._foundation.initialize())}disconnectedCallback(){this._foundation.disconnect()}attributeChangedCallback(n,t,e){switch(super.attributeChangedCallback(n,t,e),n){case o.attributes.MODE:this.mode=e;break;case o.attributes.MULTIPLE:this.multiple=f(e);break;case o.attributes.DEBOUNCE:this.debounce=K(e);break;case o.attributes.FILTER_ON_FOCUS:this.filterOnFocus=f(e);break;case o.attributes.FILTER_FOCUS_FIRST:this.filterFocusFirst=f(e);break;case o.attributes.ALLOW_UNMATCHED:this.allowUnmatched=f(e);break;case o.attributes.POPUP_TARGET:this.popupTarget=e;break;case o.attributes.OPEN:this.open=f(e);break;case o.attributes.MATCH_KEY:this.matchKey=e;break;case o.attributes.FILTER_TEXT:this.filterText=e;break}}appendOptions(n){this._foundation.appendOptions(n)}openDropdown(){this.open=!0}closeDropdown(){this.open=!1}forceFilter(n={preserveValue:!1}){this._foundation.forceFilter(n)}};p([h()],a.prototype,"mode",2);p([h()],a.prototype,"multiple",2);p([h()],a.prototype,"value",2);p([h()],a.prototype,"debounce",2);p([h()],a.prototype,"filterOnFocus",2);p([h()],a.prototype,"filterFocusFirst",2);p([h()],a.prototype,"allowUnmatched",2);p([h()],a.prototype,"popupTarget",2);p([h()],a.prototype,"filterText",2);p([h()],a.prototype,"optionBuilder",2);p([h()],a.prototype,"filter",2);p([h()],a.prototype,"selectedTextBuilder",2);p([h()],a.prototype,"open",2);p([h()],a.prototype,"matchKey",2);p([h({set:!1})],a.prototype,"isInitialized",2);p([h({set:!1})],a.prototype,"popupElement",2);p([h()],a.prototype,"beforeValueChange",2);a=p([M({name:o.elementName,dependencies:[rt,st,J,tt,Y,ot,Z,Q]})],a);const D="forge-autocomplete",Dt={title:"Components/Autocomplete",render:n=>q(D,n),component:D,parameters:{actions:{disable:!0}},argTypes:{...z({tagName:D})},args:{}},g={};var v,F,I;g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(I=(F=g.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};const bt=["Demo"],Yt=Object.freeze(Object.defineProperty({__proto__:null,Demo:g,__namedExportsOrder:bt,default:Dt},Symbol.toStringTag,{value:"Module"}));export{Yt as A,g as D};
