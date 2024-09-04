import{a0 as k,L as y,Y as w,B as A,R as E,N as L,b as c,E as M,P as I,K as m}from"./constants-DjE6emXm.js";import{c as T}from"./a11y-BxM9_46k.js";import{a as b}from"./popover-BJdewMbT.js";import{a as u,g as O,f as S,p as v}from"./calendar-DFaVMMh3.js";import{c as r,B as F}from"./base-adapter-F7QHxK2H.js";import{I as V,c as P,M as f}from"./index-Dh0vMUMR.js";import{a as N}from"./icon-button-B5lcHsAP.js";import"./focus-indicator-BpCDYqsq.js";import"./state-layer-DkOkOFSZ.js";import"./icon-DHpZ4R73.js";import{T as x}from"./text-field-R8sNW8Ph.js";import"./base-field-BB2ajAbv.js";import"./label-BzpargFq.js";import"./button-CoZ69e4-.js";import"./button-toggle-group-pGGDU2pF.js";import"./checkbox-Dsowcwzy.js";import"./switch-DwfRMwQ7.js";const D="0`0{/}`0`0{/}`0`0`0`0";class he{constructor(e,t={}){this._element=e,this._options=t,this._maskOptions=this._createOptions(),this._mask=new V(this._element,this._maskOptions),this._options.onChange&&(this._acceptListener=()=>this._onAccept(),this._mask.on("accept",this._acceptListener))}destroy(){this._acceptListener&&this._mask.off("accept",this._acceptListener),this._mask.destroy()}resolve(e){return P(this._maskOptions).resolve(e)}_onAccept(){typeof this._options.onChange=="function"&&this._options.onChange(this._mask.value)}get _isDefaultMask(){return this._options.pattern===D}_createOptions(){return{mask:this._options.pattern||D,lazy:this._options.showMaskFormat===void 0?!1:!this._options.showMaskFormat,overwrite:!0,prepare:(t,a,s)=>this._prepare(t,a,s,this._mask),blocks:{MM:{mask:f,autofix:!0,from:1,to:12,maxLength:2},DD:{mask:f,autofix:!0,from:1,to:31,maxLength:2},YYYY:{mask:f,autofix:!0,from:0,to:9999,maxLength:4}}}}_prepare(e,t,a,s){return typeof this._options.prepareCallback=="function"?this._options.prepareCallback.call(null,e,t,a,this._mask):this._isDefaultMask?this._prepareDefault(e,t,a,s):e}_prepareDefault(e,t,a,s){if(!a.input||!e.length||!s)return e;const l=s._selection&&s._selection.end===10?"":s.value;if(!k(e)){if(e==="/"){if(s.cursorPos===2&&l.length===1)return this._setMaskedValueAdjusted(l.padStart(2,"0"),3),"/";if(s.cursorPos===5&&l.length===4){const C=`${l.substring(0,3)}${l[3].padStart(2,"0").padStart(2,"0")}`;return this._setMaskedValueAdjusted(C,3),"/"}}return e}const p=+e;if(s.cursorPos===1&&p>1){const _=`${String(p).padStart(2,"0")}${l.slice(2)}`;return this._setMaskedValueAdjusted(_,3),"/"}if((s.cursorPos===3||s.cursorPos===4)&&p>3){const _=`${l.substring(0,3)}${String(p).padStart(2,"0")}${l.slice(5)}`;return this._setMaskedValueAdjusted(_,3),"/"}if(!this._options.showMaskFormat&&(s.cursorPos===2||s.cursorPos===5)){let _;return s.cursorPos===2?_=`${l.substring(0,1)}${p}/${l.slice(3)}`:_=`${l.substring(0,4)}${p}/${l.slice(6)}`,this._setMaskedValueAdjusted(_,2),""}return e}_setMaskedValueAdjusted(e,t){this._mask.unmaskedValue=e,window.requestAnimationFrame(()=>this._mask.updateCursor(this._mask.cursorPos+t))}updateMask(){this._mask.updateValue()}get maskedValue(){return this._mask.value}set maskedValue(e){this._mask.value=e}get unmaskedValue(){return this._mask.unmaskedValue}set unmaskedValue(e){this._mask.unmaskedValue=e}}const z={POPUP:"forge-calendar-dropdown__popup"},R={classes:z};class pe{constructor(e,t){this._popupClasses=[],this.targetElement=e,this.id=t}get isOpen(){var e;return((e=this.dropdownElement)==null?void 0:e.open)??!1}get popupClasses(){return this._popupClasses}set popupClasses(e){this._popupClasses=e?y(e)?[...e]:[e]:[]}get locale(){var e;return(e=this.calendar)==null?void 0:e.locale}set locale(e){this.calendar&&(this.calendar.locale=e)}async close({force:e=!1}={}){this.dropdownElement&&(e?this.dropdownElement.open=!1:await this.dropdownElement.hideAsync(),this.dropdownElement.remove(),this.dropdownElement=void 0,this.calendar=void 0)}destroy(){this.close({force:!0})}open(e){this.calendar=this._createCalendar(e),this._announcerElement=T(),this._announcerElement.id=`${this.id}-activedescendant`,this.dropdownElement=this._createDropdown(),this.dropdownElement.appendChild(this.calendar),this.dropdownElement.appendChild(this._announcerElement),this.calendar.addEventListener(u.events.FOCUS_CHANGE,s=>{var l;let d=`${this.id}-activedescendent-`;switch(s.detail.type){case"date":d+=O(s.detail.value);break;case"month":d+=`month-${s.detail.value.toString()}`;break;case"year":d+=`year-${s.detail.value.toString()}`;break}(l=this.activeChangeCallback)==null||l.call(this,d),this._announcerElement&&(this._announcerElement.id=d,this._announcerElement.setAttribute("aria-selected",s.detail.selected.toString()),this._announcerElement.textContent=s.detail.text)});const t=this.targetElement.ownerDocument??document;(w(b.selectors.HOST,this.targetElement)??t.body).appendChild(this.dropdownElement),this.dropdownElement.open=!0}propagateKeyboardEvent(e){var t;(t=this.calendar)==null||t.handleKey(e)}_createCalendar(e){const t=document.createElement(u.elementName);return Object.assign(t,e),t}_createDropdown(){const e=document.createElement("forge-popover");return e.anchorElement=this.targetElement,e.placement="bottom-start",e.persistent=!0,e.classList.add(R.classes.POPUP),e.id=this.id,e.classList.add(...this._popupClasses),e.addEventListener(b.events.TOGGLE,()=>{var t;return(t=this.closeCallback)==null?void 0:t.call(this)}),e}}const B={MIN:"min",MAX:"max",OPEN:"open",DISABLED:"disabled",POPUP_CLASSES:"popup-classes",MASKED:"masked",MASK_FORMAT:"mask-format",SHOW_MASK_FORMAT:"show-mask-format",VALUE_MODE:"value-mode",ALLOW_INVALID_DATE:"allow-invalid-date",SHOW_TODAY:"show-today",SHOW_CLEAR:"show-clear",DISABLED_DAYS_OF_WEEK:"disabled-days-of-week",YEAR_RANGE:"year-range",LOCALE:"locale"},W={TOGGLE:"forge-date-picker-toggle"},K={INPUT:"input",TOGGLE:"[forge-date-picker-toggle],[data-forge-date-picker-toggle]"},i={observedAttributes:B,attributes:W,selectors:K};var H=Object.defineProperty,n=(h,e,t,a)=>{for(var s=void 0,d=h.length-1,l;d>=0;d--)(l=h[d])&&(s=l(e,t,s)||s);return s&&H(e,t,s),s};class o extends A{constructor(){super()}connectedCallback(){this.querySelector(i.selectors.INPUT)?this._core.initialize():E(this,i.selectors.INPUT).then(()=>{this._core.initialize()})}disconnectedCallback(){this._core.destroy()}attributeChangedCallback(e,t,a){switch(e){case i.observedAttributes.MIN:this.min=a;break;case i.observedAttributes.MAX:this.max=a;break;case i.observedAttributes.OPEN:this.open=c(a);break;case i.observedAttributes.POPUP_CLASSES:this.popupClasses=a;break;case i.observedAttributes.DISABLED:this.disabled=c(a);break;case i.observedAttributes.MASKED:this.masked=c(a);break;case i.observedAttributes.SHOW_MASK_FORMAT:this.showMaskFormat=c(a);break;case i.observedAttributes.MASK_FORMAT:this.maskFormat=a;break;case i.observedAttributes.VALUE_MODE:this.valueMode=a;break;case i.observedAttributes.ALLOW_INVALID_DATE:this.allowInvalidDate=c(a);break;case i.observedAttributes.SHOW_TODAY:this.showToday=c(a);break;case i.observedAttributes.SHOW_CLEAR:this.showClear=c(a);break;case i.observedAttributes.DISABLED_DAYS_OF_WEEK:this.disabledDaysOfWeek=L(a);break;case i.observedAttributes.YEAR_RANGE:this.yearRange=a;break;case i.observedAttributes.LOCALE:this.locale=a;break}}}n([r()],o.prototype,"value");n([r()],o.prototype,"min");n([r()],o.prototype,"max");n([r()],o.prototype,"disabledDates");n([r()],o.prototype,"open");n([r()],o.prototype,"popupClasses");n([r()],o.prototype,"disabled");n([r()],o.prototype,"masked");n([r()],o.prototype,"maskFormat");n([r()],o.prototype,"showMaskFormat");n([r()],o.prototype,"valueMode");n([r()],o.prototype,"notifyInputValueChanges");n([r()],o.prototype,"allowInvalidDate");n([r()],o.prototype,"showToday");n([r()],o.prototype,"showClear");n([r()],o.prototype,"parseCallback");n([r()],o.prototype,"formatCallback");n([r()],o.prototype,"prepareMaskCallback");n([r()],o.prototype,"disabledDaysOfWeek");n([r()],o.prototype,"disableDayCallback");n([r()],o.prototype,"yearRange");n([r()],o.prototype,"locale");function $(h){const e=document.createElement("forge-icon-button");e.type="button",e.tabIndex=-1,e.setAttribute("aria-label","Toggle calendar"),e.slot="end",e.density="medium";const t=document.createElement("forge-icon");return t.name=h,e.appendChild(t),e}class _e extends F{constructor(e){super(e),this._valueChangeListeners=[],this._identifier=M()}initialize(){this._initializeInput()}destroy(){var e;(e=this._calendarDropdown)==null||e.destroy(),this.destroyValueChangeListener()}destroyValueChangeListener(){this._valueChangeListeners.forEach(e=>e())}addToggleListener(e,t){var a;(a=this._toggleElement)==null||a.addEventListener(e,t)}removeToggleListener(e,t){var a;(a=this._toggleElement)==null||a.removeEventListener(e,t)}attachCalendar(e,t){var a,s,d;if((a=this._calendarDropdown)==null||a.destroy(),this._initializeCalendarDropdown(),!this._calendarDropdown)throw new Error("CalendarDropdown was not initialized.");t&&Object.assign(this._calendarDropdown,t),this._calendarDropdown.open(e),(s=this._calendarDropdown.dropdownElement)==null||s.style.setProperty("--forge-calendar-width","320px"),(d=this._calendarDropdown.calendar)==null||d.style.setProperty("margin","8px")}detachCalendar(){this._calendarDropdown&&this._calendarDropdown.isOpen&&this._calendarDropdown.close()}goToCalendarDate(e){var t,a;(a=(t=this._calendarDropdown)==null?void 0:t.calendar)==null||a.goToDate(e,!0)}addCalendarListener(e,t){var a,s;(s=(a=this._calendarDropdown)==null?void 0:a.calendar)==null||s.addEventListener(e,t)}removeCalendarListener(e,t){var a,s;(s=(a=this._calendarDropdown)==null?void 0:a.calendar)==null||s.removeEventListener(e,t)}setCalendarValue(e){var t;(t=this._calendarDropdown)!=null&&t.calendar&&(this._calendarDropdown.calendar.value=e)}setCalendarMinDate(e){var t;(t=this._calendarDropdown)!=null&&t.calendar&&(this._calendarDropdown.calendar.min=e)}setCalendarMaxDate(e){var t;(t=this._calendarDropdown)!=null&&t.calendar&&(this._calendarDropdown.calendar.max=e)}setCalendarDisabledDates(e){var t;(t=this._calendarDropdown)!=null&&t.calendar&&(this._calendarDropdown.calendar.disabledDates=e)}setCalendarDisabledDaysOfWeek(e){var t;(t=this._calendarDropdown)!=null&&t.calendar&&(this._calendarDropdown.calendar.disabledDaysOfWeek=e)}setCalendarDisableDayCallback(e){var t;(t=this._calendarDropdown)!=null&&t.calendar&&(this._calendarDropdown.calendar.disabledDateBuilder=e)}setCalendarActiveDate(e){var t,a;(a=(t=this._calendarDropdown)==null?void 0:t.calendar)==null||a.setActiveDate(e)}getCalendarActiveDate(){var e,t;return(t=(e=this._calendarDropdown)==null?void 0:e.calendar)==null?void 0:t.activeDate}setCalendarYearRange(e){var t,a;(a=(t=this._calendarDropdown)==null?void 0:t.calendar)!=null&&a.yearRange&&(this._calendarDropdown.calendar.yearRange=e)}setCalendarLocale(e){var t;(t=this._calendarDropdown)!=null&&t.calendar&&(this._calendarDropdown.locale=e)}propagateCalendarKey(e){var t,a;(a=(t=this._calendarDropdown)==null?void 0:t.calendar)==null||a.handleKey(e)}tryCreateToggle(){const e=this._component.querySelector("forge-text-field"),t=this._component.querySelector(i.selectors.TOGGLE);if(e){const a=e.querySelector(`${N.elementName}[slot=end]`);if(a||t){this._toggleElement=a||t;return}const s=this._createToggleElement();e.appendChild(s),this._toggleElement=s}else t&&(this._toggleElement=t)}_createToggleElement(){return $("insert_invitation")}_getDefaultTargetElement(){const e=this._component.querySelector(x.elementName);return e!=null&&e.popoverTargetElement?e.popoverTargetElement:this._component.querySelector("input")||this._component}}class ce{constructor(e){this._adapter=e,this._value=null,this._min=null,this._max=null,this._disabledDates=null,this._open=!1,this._disabled=!1,this._masked=!0,this._maskFormat=D,this._showMaskFormat=!1,this._valueMode="object",this._notifyInputValueChanges=!0,this._allowInvalidDate=!1,this._showToday=!1,this._showClear=!1,this._yearRange="-50:+50",this._isInitialized=!1,this._inputListener=t=>this._onInput(t),this._inputKeydownListener=t=>this._onInputKeydown(t),this._inputFocusListener=t=>this._onInputFocus(t),this._inputBlurListener=t=>this._onInputBlur(t),this._inputValueChangedListener=t=>this._onInputValueChanged(t),this._dropdownCloseListener=()=>this._onDropdownClose(),this._toggleMousedownListener=t=>this._onToggleMousedown(t),this._dateSelectListener=t=>this._onDateSelected(t.detail),this._monthChangeListener=t=>this._onMonthChanged(t),this._activeChangeListener=t=>this._onActiveDescendantChanged(t),this._todayListener=()=>this._onToday(),this._clearListener=()=>this._onClear()}initialize(){var e;if(this._adapter.initialize(),this._adapter.initializeAccessibility(),!this._adapter.hasInputElement())throw new Error("Unable to locate child <input> element.");(e=this._initializeState)==null||e.call(this),this._adapter.tryCreateToggle(),this._masked||this._setInputChangeListeners(),this._initializeListeners(),this._setFormattedInputValue(!0),this._applyDisabled(),this._applyMask(),this._initializeValueChangedListeners(),this._isInitialized=!0}destroy(){this._isInitialized=!1,this._destroyListeners(),this._masked&&this._adapter.destroyMask(),this._closeCalendar(),this._adapter.destroy()}_initializeListeners(){this._adapter.addToggleListener("mousedown",this._toggleMousedownListener),this._adapter.addInputListener("keydown",this._inputKeydownListener,!0),this._adapter.addInputListener("focus",this._inputFocusListener),this._adapter.addInputListener("blur",this._inputBlurListener)}_initializeValueChangedListeners(){this._adapter.setInputValueChangedListener(this,this._inputValueChangedListener)}_setInputChangeListeners(){this._adapter.addInputListener("input",this._inputListener)}_removeInputChangeListeners(){this._adapter.removeInputListener("input",this._inputListener)}_destroyListeners(){this._adapter.removeToggleListener("mousedown",this._toggleMousedownListener),this._adapter.removeInputListener("keydown",this._inputKeydownListener,!0),this._adapter.removeInputListener("focus",this._inputFocusListener),this._adapter.removeInputListener("blur",this._inputBlurListener),this._removeInputChangeListeners()}_onInput(e){this._handleInput(this._adapter.getInputValue())}_onInputFocus(e){this.masked&&this.showMaskFormat&&this._applyMask(),this._adapter.selectInputText()}_onInputBlur(e){this.masked&&this.showMaskFormat&&this._applyMask(),this._formatInputValue(),this._open&&!this._adapter.isInputFocused()&&this._closeCalendar(!0)}_openCalendar(e=!1){this._formatInputValue();const t={mode:this._mode,value:this._getCurrentValue(),min:this._min,max:this._max,disabledDates:this._disabledDates,yearRange:this._yearRange,todayButton:this._showToday,clearButton:this._showClear,todayCallback:this._todayListener,clearCallback:this._clearListener,disabledDateBuilder:this._disableDayCallback,disabledDaysOfWeek:this._disabledDaysOfWeek,preventFocus:!0,menuAnimation:"fade",fixedHeight:!0,selectionFollowsMonth:!0,locale:this._locale},a={popupClasses:this._popupClasses,closeCallback:this._dropdownCloseListener,activeChangeCallback:this._activeChangeListener},s=new Date().getTime();this._min&&this._max&&this._max.getTime()<s&&(t.year=this._min.getFullYear(),t.month=this._min.getMonth()),this._adapter.attachCalendar(t,a),this._adapter.addCalendarListener(u.events.DATE_SELECT,this._dateSelectListener),this._adapter.addCalendarListener(u.events.MONTH_CHANGE,this._monthChangeListener),this._open=!0,this._adapter.setHostAttribute(i.observedAttributes.OPEN),e&&this._emitOpenEvent()}_closeCalendar(e=!1){this._open=!1,this._adapter.removeHostAttribute(i.observedAttributes.OPEN),this._adapter.removeCalendarListener(u.events.DATE_SELECT,this._dateSelectListener),this._adapter.removeCalendarListener(u.events.MONTH_CHANGE,this._monthChangeListener),this._adapter.detachCalendar(),e&&this._emitCloseEvent()}_onInputKeydown(e){if(e.shiftKey)switch(e.key){case"Delete":case"Backspace":e.preventDefault(),this._onClear(),this._open&&this._closeCalendar(!0);return;case"ArrowLeft":case"ArrowRight":case"m":case"M":case"y":case"Y":case"d":case"D":if(this._open){e.preventDefault(),this._adapter.propagateCalendarKey(e);return}break}switch(e.key){case"Escape":this._open&&(e.preventDefault(),e.stopPropagation(),this._closeCalendar(!0));break;case"ArrowDown":e.preventDefault(),this._open?this._adapter.propagateCalendarKey(e):(this._adapter.selectInputText(),this._openCalendar(!0));break;case"ArrowUp":this._open&&(e.preventDefault(),this._adapter.propagateCalendarKey(e));break;case"ArrowLeft":case"ArrowRight":case"Enter":case"Home":case"End":if(this._open){e.key==="Enter"&&e.stopPropagation(),e.preventDefault();const t=["ArrowLeft","ArrowRight"].includes(e.key);this._masked&&t&&e.stopImmediatePropagation(),this._adapter.propagateCalendarKey(e)}break;case"n":case"t":e.preventDefault(),this._onToday(),this._open&&this._closeCalendar(!0);break;case"PageUp":case"PageDown":this._open&&(e.preventDefault(),this._adapter.propagateCalendarKey(e));break;case"Tab":if(this._open){const t=this._adapter.getCalendarActiveDate();t&&this._onDateSelected({date:t,selected:!0,type:"date"})}break}}_getSanitizedDateString(e){return e.replace(/_|[a-z]|[A-Z]/g,"").replace(/\/$|\/\/$/,"")}_onToggleMousedown(e){this._disabled||(e.stopPropagation(),!this._adapter.isInputDisabled()&&(e.preventDefault(),this._open?this._closeCalendar(!0):(I.isMobile?this._adapter.tryBlurInput():this._adapter.tryFocusInput(),this._openCalendar(!0))))}_onDropdownClose(){this._closeCalendar(!0)}_onMonthChanged(e){this._adapter.redispatchEvent(e)}_onActiveDescendantChanged(e){this._adapter.setActiveDescendant(e)}_formatInputValue(){const e=this._adapter.getInputValue();if(e){const t=this._parseDateString(e);if(m(t)&&this._isDateValueAcceptable(t)){const a=this._formatDate(t);a&&a!==e&&this._adapter.setInputValue(a,this._notifyInputValueChanges)}else this._allowInvalidDate||this._adapter.setInputValue("",this._notifyInputValueChanges)}}_formatDate(e){return m(e)?typeof this._formatCallback=="function"?this._formatCallback(e):S(e):""}_parseDateString(e){if(e=e.replace(/_|\s/g,""),!e||!e.length)return null;const t=typeof this._parseCallback=="function"?this._parseCallback(e):v(e);return m(t)?t:null}_coerceDateValue(e){return typeof e=="string"?this._parseDateString(e):e}_getTypedValue(e){switch(this._valueMode){case"object":return e;case"string":return this._formatDate(e);case"iso-string":return e&&e.setHours(0,0,0,0),e?e.toISOString():null;default:return e}}_isDateValueAcceptable(e){if(!e||this._allowInvalidDate)return!0;const t=()=>this._min&&!this._allowInvalidDate?this._min.getTime()<=e.getTime():!0,a=()=>this._max&&!this._allowInvalidDate?this._max.getTime()>=e.getTime():!0,s=()=>Array.isArray(this._disabledDates)?this._disabledDates:this._disabledDates?[this._disabledDates]:[],d=()=>!s().some(g=>g.getTime()===e.getTime()),l=()=>!(this._disabledDaysOfWeek&&this._disabledDaysOfWeek.includes(e.getDay())),p=()=>typeof this._disableDayCallback!="function"||!this._disableDayCallback(e);return t()&&a()&&d()&&l()&&p()}_initializeMask(){const e={showMaskFormat:this._showMaskFormat&&this._adapter.isInputFocused(),pattern:this._maskFormat,onChange:t=>this._handleInput(t)};this._prepareMaskCallback&&(e.prepareCallback=(t,a,s,d)=>this._prepareMaskCallback.call(null,t,a,s,d)),this._adapter.initializeMask(e)}_applyMask(){this._masked?this._initializeMask():(this._adapter.destroyMask(),this._formatInputValue())}_applyMin(){this._isInitialized&&this._adapter.setCalendarMinDate(this._min)}_applyMax(){this._isInitialized&&this._adapter.setCalendarMaxDate(this._max)}_applyDisableDayCallback(){this._adapter.setCalendarDisableDayCallback(this._disableDayCallback)}_applyDisabled(){this._adapter.setDisabled(this._disabled)}get valueMode(){return this._valueMode}set valueMode(e){if(this._valueMode!==e){if(!["object","string","iso-string"].includes(e))return;this._valueMode=e,this._emitChangeEvent(this._value),this._adapter.setHostAttribute(i.observedAttributes.VALUE_MODE,this._valueMode)}}get min(){return this._min?new Date(this._min.getTime()):null}set min(e){if(this._min!==e){const t=this._coerceDateValue(e);this._min=t?new Date(t.getTime()):null,this._applyMin(),this._isInitialized&&this._open&&this._adapter.setCalendarMinDate(this._min)}}get max(){return this._max?new Date(this._max.getTime()):null}set max(e){this._max!==e&&(this._max=this._coerceDateValue(e),this._applyMax(),this._isInitialized&&this._open&&this._adapter.setCalendarMaxDate(this._max))}get open(){return this._open}set open(e){this._open!==e&&this._isInitialized&&(this._open=e,this._open?this._openCalendar():this._closeCalendar())}get disabled(){return this._disabled}set disabled(e){this._disabled!==e&&(this._disabled=e,this._isInitialized&&this._applyDisabled())}get disabledDates(){return this._disabledDates?Array.isArray(this._disabledDates)?this._disabledDates.map(e=>new Date(e.getTime())):new Date(this._disabledDates.getTime()):null}set disabledDates(e){e?Array.isArray(e)?this._disabledDates=e.map(t=>new Date(t.getTime())):this._disabledDates=new Date(e.getTime()):this._disabledDates=null,this._isInitialized&&this._open&&this._adapter.setCalendarDisabledDates(this._disabledDates),this._applyDisabledDates()}get popupClasses(){return Array.isArray(this._popupClasses)?[...this._popupClasses]:this._popupClasses}set popupClasses(e){Array.isArray(e)?this._popupClasses=[...e]:this._popupClasses=e}get masked(){return this._masked}set masked(e){this._masked!==e&&(this._masked=e,this._isInitialized&&(this._masked?(this._removeInputChangeListeners(),this._applyMask()):(this._adapter.destroyMask(),this._setInputChangeListeners(),this._formatInputValue())))}get maskFormat(){return this._maskFormat}set maskFormat(e){this._maskFormat!==e&&(this._maskFormat=e,this._isInitialized&&this._applyMask())}get showMaskFormat(){return this._showMaskFormat}set showMaskFormat(e){this._showMaskFormat!==e&&(this._showMaskFormat=e)}get notifyInputValueChanges(){return this._notifyInputValueChanges}set notifyInputValueChanges(e){this._notifyInputValueChanges=e}get allowInvalidDate(){return this._allowInvalidDate}set allowInvalidDate(e){this._allowInvalidDate!==e&&(this._allowInvalidDate=e,this._adapter.toggleHostAttribute(i.observedAttributes.ALLOW_INVALID_DATE,this._allowInvalidDate))}get disabledDaysOfWeek(){return this._disabledDaysOfWeek}set disabledDaysOfWeek(e){this._disabledDaysOfWeek!==e&&(this._disabledDaysOfWeek=e,this._isInitialized&&this._open&&this._adapter.setCalendarDisabledDaysOfWeek(this._disabledDaysOfWeek),this._applyDisabledDaysOfWeek())}get disableDayCallback(){return this._disableDayCallback}set disableDayCallback(e){e!==this._disableDayCallback&&(this._disableDayCallback=e,this._applyDisableDayCallback())}get parseCallback(){return this._parseCallback}set parseCallback(e){this._parseCallback=e,this._isInitialized&&this._applyMask()}get formatCallback(){return this._formatCallback}set formatCallback(e){this._formatCallback=e,this._isInitialized&&this._applyMask()}get prepareMaskCallback(){return this._prepareMaskCallback}set prepareMaskCallback(e){this._prepareMaskCallback=e,this._isInitialized&&this._applyMask()}get showToday(){return this._showToday}set showToday(e){this._showToday=e}get showClear(){return this._showClear}set showClear(e){this._showClear=e}get yearRange(){return this._yearRange}set yearRange(e){this._yearRange!==e&&(this._yearRange=e,this._isInitialized&&this._open&&this._adapter.setCalendarYearRange(this._yearRange))}get locale(){return this._locale}set locale(e){this._locale!==e&&(this._locale=e,this._isInitialized&&this._open&&this._adapter.setCalendarLocale(this._locale))}}export{_e as B,pe as C,he as D,ce as a,o as b,i as c,$ as d};
