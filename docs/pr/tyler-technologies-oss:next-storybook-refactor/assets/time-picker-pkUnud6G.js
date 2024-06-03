import{t as F}from"./index-nygIasyA.js";import{n as x}from"./index-DtXrtb0D.js";import{B as U,F as p}from"./base-adapter-CMsBmfZ6.js";import{I as W,c as R,a as C}from"./index-Dh0vMUMR.js";import{_ as $,C as z,F as B,t as K,k as X,z as G,P as q,S as Y,n as j,B as J,o as Q,N as Z,b as m,d as tt}from"./constants-Di1oYYV9.js";import{T as O}from"./text-field-BHC13Srn.js";import"./base-field-DPgBJd7g.js";import"./focus-indicator-jd-AY9Jk.js";import"./label-BA5TfD5u.js";import"./button-C7MGFuVn.js";import"./state-layer-DzrxdbUp.js";import"./button-toggle-group-BikuhhTp.js";import"./checkbox-D4e4C5g3.js";import{a as A,I as et}from"./icon-button-BOD2hkMM.js";import{b as st,I as it,a as v}from"./icon-Cn5siE75.js";import"./switch-z_rlF74_.js";import{a as nt,c as ot}from"./list-dropdown-nQtnAvpJ.js";import"./linear-progress-De0XZzjv.js";import{L as rt,a as at}from"./list-B8boNWcU.js";import{P as lt}from"./popover-Dh31glfv.js";import"./overlay-CRRs1KxA.js";import"./skeleton-CbdcwsWz.js";import{a as ut}from"./dialog-B36BZilC.js";import"./backdrop-BPLpOU6H.js";const T=/^(0?[0-9]|1\d|2[0-3]):([0-5]\d)(:([0-5]\d))?$/,E=/^(0?[1-9]|1[0-2]):([0-5]\d)(:([0-5]\d))?\s*([AaPp][Mm])?$/,ht=/^(\d?\d?):?(\d?\d?)(:?(\d?\d?))?\s*([AaPp][Mm]?)?$/,D=/[AaPp][Mm]?/;function pt(n){const t=n.match(T)||[null,0,0,null,0],e=t[1],s=t[2],i=t[4];return{hours:e,minutes:s,seconds:i}}function _t(n){const t=n.match(E)||[null,0,0,null,0,"AM"],e=t[1],s=t[2],i=t[4],o=t[5];return{hours:e,minutes:s,seconds:i,meridiem:o}}function mt(n){return T.test(n)||E.test(n)}function dt(n,t,e){if(n=n&&typeof n=="string"?n.replace(/_|\s/g,""):"",/^\s*$/.test(n)||/^:+$/.test(n))return"";const s=n.match(ht);if(!s)return"";let i=s[1],o=s[2],a=s[4],l=s[5];const d=n.match(D);d&&(l=d[0],n=n.replace(l,""),l.length===1&&(l+="m")),n.length===3&&!n.includes(":")&&(i=n[0],o=n.substring(1)),t?l="":D.test(l)?l=l.toUpperCase():/^[AaPp]/.test(l)?l.toLowerCase().startsWith("a")?l="AM":l.toLowerCase().startsWith("p")&&(l="PM"):l="";const g=+i||0,w=+o||0,S=!l||t?23:12;if(g>=S?i=String(S):g<0&&(i="00"),i=i.padStart(2,"0"),o!==void 0&&(w>59?o="59":w<0?o="00":o=o.padStart(2,"0")),a!==void 0){const y=+a||0;y>59?a="59":y<0?a="00":a=a.padStart(2,"0")}let I=i;return o!==void 0&&(I+=`:${o}`,a===void 0&&e&&(a="00")),a!==void 0&&(I+=`:${a}`),l&&(I+=` ${l}`),I}const c={hours:0,minutes:1,seconds:2,meridiem:3};class ct{constructor(t){this._segments=this._parseSegments(t)}get hours(){return this._segments[c.hours]}get minutes(){return this._segments[c.minutes]}get seconds(){return this._segments[c.seconds]}get meridiem(){return this._segments[c.meridiem]}applyValue(t){this._segments=this._parseSegments(t)}patchSegmentValue(t,e){const s=c[t];return this._segments[s]=e.padStart(2,"0"),this._segments[s]}toString(){const[t,e,s,i]=this._segments;return`${[t,e,s].filter(a=>!!a.length).join(":")}${i}`}_parseSegments(t){const[e,s=""]=t.trim().replace(/\s+|_/g,"").split(/([AaPp][Mm]?)/),[i="",o="",a=""]=e.split(":");return[i,o,a,s]}}const ft={"hours-start":0,"hours-end":2,"minutes-start":3,"minutes-end":5,"seconds-start":6,"seconds-end":8,"meridiem-start":9,"meridiem-end":11};class gt{constructor(t,e){this._char=t,this._mask=e,this.segmentParser=new ct(this._mask.value)}get value(){return this.isAllSelected?"":this._normalizeTimeString(this._mask.value)}get numChar(){return Number(this._char)}get asPaddedChar(){return String(this.numChar).padStart(2,"0")}_normalizeTimeString(t){let e=t.replace(/\s+|_/g,"");return/^:+$/.test(e)&&(e=""),e}get isAllSelected(){const{start:t,end:e}=this._mask._selection;return t===0&&e>0&&e===this._mask.value.length}get isFirstHoursChar(){return this._mask.cursorPos===1&&this.numChar>0}get isFirstMinutesChar(){return[3,4].includes(this._mask.cursorPos)&&this.segmentParser.minutes.length!==2}get isFirstSecondsChar(){return[6,7].includes(this._mask.cursorPos)&&this.segmentParser.seconds.length!==2}get isFinalHoursChar(){return this._mask.cursorPos===3&&this.segmentParser.hours.length===2}get isFinalMinutesChar(){return this._mask.cursorPos===6&&this.segmentParser.minutes.length===2}get isFinalSecondsChar(){return this._mask.cursorPos===9&&this.segmentParser.seconds.length===2}get isInitialHoursEntry(){return this.segmentParser.hours.length===0}get hasOnlyHoursSegment(){return!!this.segmentParser.hours&&!this.segmentParser.minutes&&!this.segmentParser.seconds}get hoursSegmentNum(){return Number(this.segmentParser.hours)}get minutesSegmentNum(){return Number(this.segmentParser.minutes)}get secondsSegmentNum(){return Number(this.segmentParser.seconds)}get canOverwriteHoursChar(){return this._mask.cursorPos===3&&!!this.segmentParser.hours.length&&this.hoursSegmentNum<3}get canOverwriteMinutesChar(){return[5,6].includes(this._mask.cursorPos)&&!!this.segmentParser.minutes.length&&this.minutesSegmentNum<60}get canOverwriteSecondsChar(){return[8,9].includes(this._mask.cursorPos)&&!!this.segmentParser.seconds.length&&this.secondsSegmentNum<60}reset(){this.segmentParser.applyValue("")}patchSegmentValue(t,e,{overwrite:s=!1}={}){return s&&this.reset(),this.segmentParser.patchSegmentValue(t,e),this.segmentParser.toString()}applyValue(t,e){this._mask.unmaskedValue=t,e!==void 0&&window.requestAnimationFrame(()=>this._mask.updateCursor(ft[e]))}}const wt="0`0{:}`0`0 `AM",St="0`0{:}`0`0{:}`0`0 `AM",It="0`0{:}`0`0",Tt="0`0{:}`0`0{:}`0`0";class bt{constructor(t,e={}){this._element=t,this._options=e,this._maskOptions=this._createOptions(),this._mask=new W(this._element,this._maskOptions),this._options.onChange&&(this._acceptListener=()=>this._onAccept(),this._mask.on("accept",this._acceptListener))}destroy(){this._acceptListener&&this._mask.off("accept",this._acceptListener),this._mask.destroy()}resolve(t){return R(this._maskOptions).resolve(t)}update(){this._mask.updateValue()}_onAccept(){typeof this._options.onChange=="function"&&this._options.onChange(this._mask.value)}_createOptions(){return{mask:this._getMaskFormat(),overwrite:!0,lazy:!this._options.showMaskFormat,prepare:(t,e,s)=>this._prepare(t,e,s,this._mask),blocks:{A:{mask:C,enum:["a","A","p","P"]},M:{mask:C,enum:["m","M"]}}}}_prepare(t,e,s,i){var o;return typeof this._options.prepareCallback=="function"?this._options.prepareCallback.call(null,t,e,s,this._mask):!s.input||!t.length||!i?t.toUpperCase():((o=i._inputEvent)==null?void 0:o.inputType)!=="insertText"?t:this._prepareDefault(t,i).toUpperCase()}_prepareDefault(t,e){const s=new gt(t,e);if(!$(t)){if(t===":"){if(s.isFinalHoursChar){const i=s.patchSegmentValue("hours",s.value);return s.applyValue(i,"minutes-start"),t}if(s.isFinalMinutesChar){const i=s.patchSegmentValue("minutes",String(s.minutesSegmentNum));return s.applyValue(i,this._options.showSeconds?"seconds-start":"minutes-end"),t}if(this._options.showSeconds&&s.isFinalSecondsChar){const i=s.patchSegmentValue("seconds",String(s.secondsSegmentNum));return s.applyValue(i,"meridiem-start"),t}}return t}if(s.isAllSelected&&s.reset(),s.isInitialHoursEntry&&s.isFirstHoursChar){const i=s.patchSegmentValue("hours",s.asPaddedChar);return s.applyValue(i,"hours-end"),":"}if(s.hasOnlyHoursSegment&&s.canOverwriteHoursChar){const i=+`${s.hoursSegmentNum}${s.numChar}`;if(i<=12||this._options.use24HourTime&&i<=23){const o=s.patchSegmentValue("hours",String(i));return s.applyValue(o,"minutes-start"),":"}}if(s.value.length+1===2)return`${t}:`;if(s.isFirstMinutesChar){const i=s.patchSegmentValue("minutes",s.asPaddedChar);return s.applyValue(i,"minutes-end"),":"}if(s.canOverwriteMinutesChar){const i=+`${s.minutesSegmentNum}${s.numChar}`;if(i<60){const o=s.patchSegmentValue("minutes",String(i));return s.applyValue(o,"minutes-end"),":"}}if(this._options.showSeconds){if(s.isFirstSecondsChar){const i=s.patchSegmentValue("seconds",s.asPaddedChar);return s.applyValue(i,"seconds-end"),":"}if(s.canOverwriteSecondsChar){const i=+`${s.secondsSegmentNum}${s.numChar}`;if(i<60){const o=s.patchSegmentValue("seconds",String(i));return s.applyValue(o,"seconds-end"),":"}}}return t}_getMaskFormat(){return this._options.use24HourTime?this._options.showSeconds?Tt:It:this._options.showSeconds?St:wt}get maskedValue(){return this._mask.value}set maskedValue(t){this._mask.value=t}get unmaskedValue(){return this._mask.unmaskedValue}set unmaskedValue(t){this._mask.unmaskedValue=t}}const f=`${z}time-picker`,P={TOGGLE:"forge-time-picker-toggle",VALUE:"value",OPEN:"open",ALLOW_SECONDS:"allow-seconds",MASKED:"masked",SHOW_MASK_FORMAT:"show-mask-format",USE_24_HOUR_TIME:"use-24-hour-time",ALLOW_INVALID_TIME:"allow-invalid-time",MIN:"min",MAX:"max",START_TIME:"start-time",STEP:"step",ALLOW_INPUT:"allow-input",SHOW_NOW:"show-now",SHOW_HOUR_OPTIONS:"show-hour-options",DISABLED:"disabled",POPUP_CLASSES:"popup-classes",ALLOW_DROPDOWN:"allow-dropdown"},Et={INPUT:"input, input[forge-time-picker-input]",TOGGLE:`[${P.TOGGLE}]`},Mt={OPEN:`${f}-open`,CLOSE:`${f}-close`,INPUT:`${f}-input`,CHANGE:`${f}-change`},kt={DEFAULT_MINUTE_STEP:60,MAX_DAY_MILLIS:864e5,MAX_DAY_MINUTES:1440},r={elementName:f,attributes:P,selectors:Et,events:Mt,numbers:kt};class yt extends U{constructor(t){super(t)}initialize(){this._inputElement=this._component.querySelector(r.selectors.INPUT)}initializeMask(t){this.destroyMask(),this._inputMask=new bt(this._inputElement,t)}destroy(){this._targetElement=void 0,this._toggleElement=void 0,this._inputElement=void 0}destroyMask(){var t;(t=this._inputMask)==null||t.destroy(),this._inputMask=void 0}initializeAccessibility(t){this._inputElement.setAttribute("autocomplete","off"),this._inputElement.setAttribute("autocorrect","off"),this._inputElement.setAttribute("autocapitalize","off"),this._inputElement.setAttribute("spellcheck","false"),this._inputElement.setAttribute("role","combobox"),this._inputElement.setAttribute("aria-live","assertive"),this._inputElement.setAttribute("aria-atomic","true"),this._inputElement.setAttribute("aria-haspopup","true"),this._inputElement.setAttribute("aria-expanded","false")}addInputListener(t,e,s){this._inputElement.addEventListener(t,e,{capture:s})}removeInputListener(t,e,s){this._inputElement&&this._inputElement.removeEventListener(t,e,{capture:s})}addToggleListener(t,e){this._toggleElement&&this._toggleElement.addEventListener(t,e)}removeToggleListener(t,e){this._toggleElement&&this._toggleElement.removeEventListener(t,e)}hasInputElement(){return!!this._inputElement}tryCreateToggle(){const t=this._component.querySelector(O.elementName),e=this._component.querySelector(r.selectors.TOGGLE);if(t){const s=t.querySelector(`${A.elementName}[slot=trailing]`);if(s||e){this._toggleElement=s||e;return}const i=document.createElement(A.elementName);i.slot="trailing",i.density="medium",i.type="button",i.tabIndex=-1,i.style.marginRight="4px",i.setAttribute("aria-label","Toggle time dropdown");const o=document.createElement(st.elementName);o.name="clock_outline",i.appendChild(o),t.appendChild(i),this._toggleElement=i}else e&&(this._toggleElement=e)}tryFocusInput(){this._inputElement.select()}tryBlurInput(){this._inputElement.blur()}selectInputText(){this._inputElement.select()}isInputDisabled(){return this._inputElement.disabled}isInputFocused(){return B(this._component.ownerDocument)===this._inputElement}setInputValue(t,e){this._inputElement.value!==t&&(this._inputElement.value=t,this._inputMask&&this._inputMask.update(),e&&(this._emitInputEvent("change"),this._emitInputEvent("input")))}getInputValue(){return this._inputMask?this._inputMask.maskedValue:this._inputElement.value}setDisabled(t){this._inputElement.disabled=t,this._inputElement.setAttribute("aria-disabled",t.toString()),this.setToggleDisabled(t)}attachDropdown(t){this._targetElement||(this._targetElement=this._getTargetElement(this._component.popupTarget)),this._listDropdown=new nt(this._targetElement,t),this._listDropdown.open(),this._inputElement.setAttribute("aria-controls",`list-dropdown-popup-${t.id}`)}async detachDropdown({destroy:t=!1}={}){this._listDropdown&&(t?this._listDropdown.destroy():await this._listDropdown.close(),this._listDropdown=void 0),this._inputElement.removeAttribute("aria-controls")}propagateKey(t){var e;(e=this._listDropdown)==null||e.handleKey(t)}setActiveDescendant(t){K(this._inputElement,!!t,"aria-activedescendant",t)}getTargetElementWidth(t){return this._getTargetElement(t).getBoundingClientRect().width}_emitInputEvent(t){this._inputElement.dispatchEvent(new Event(t))}emitInputEvent(t,e){X(this._inputElement,t,e)}setInputReadonly(t){this._inputElement.readOnly=t}setToggleDisabled(t){if(this._toggleElement)if(this._toggleElement.setAttribute("aria-disabled",t.toString()),"disabled"in this._toggleElement)this._toggleElement.disabled=t;else{const e=this._toggleElement.querySelector("button");e&&(e.disabled=t)}}hasActiveOption(){var t;return(((t=this._listDropdown)==null?void 0:t.getActiveOptionIndex())??-1)>=0}activateOptionByIndex(t){var e;(e=this._listDropdown)==null||e.activateOption(t)}activateFirstOption(){var t;(t=this._listDropdown)==null||t.activateFirstOption()}getActiveOption(){var t;return(t=this._listDropdown)==null?void 0:t.getActiveOption()}_getTargetElement(t){return this._targetElement?this._targetElement:(this._targetElement=t?this._component.querySelector(t)||this._getDefaultTargetElement():this._getDefaultTargetElement(),this._targetElement)}_getDefaultTargetElement(){const t=this._component.querySelector(O.elementName);return(t==null?void 0:t.popoverTargetElement)??this._component}}function L(n,t,e){if(!n||/^\s*$/.test(n))return null;let s=0,i=0,o=0;if(T.test(n)){const a=pt(n);s=+a.hours||0,i=+a.minutes||0,o=+a.seconds||0}else if(E.test(n)){const a=_t(n);s=+a.hours||0,i=+a.minutes||0,o=+a.seconds||0,s===12&&a.meridiem==="AM"&&(s=0),s<12&&a.meridiem==="PM"&&(s+=12)}else return null;return H(s)+M(i)+(e?k(o):0)}function _(n,t,e){if(typeof n!="number"||n<0)return null;let s=Math.min(Ct(n),23);const i=Math.min(Ot(n),59),a=n/(1e3*60)<720?"AM":"PM";t||(s=s<=12?s:s-12,s===0&&(s=12));let l=`${String(s).padStart(2,"0")}:${String(i).padStart(2,"0")}`;if(e){const d=Math.min(V(n),59);l+=`:${String(d).padStart(2,"0")}`}return t||(l+=` ${a}`),l}function Ct(n){return Math.abs(Math.floor(n/(1e3*60*60)))}function Ot(n){return Math.abs(Math.floor(b(n)%60))}function b(n){return n/(1e3*60)}function V(n){return Math.abs(Math.floor(At(n)%60))}function At(n){return n/1e3}function H(n){return n*60*60*1e3}function M(n){return n*60*1e3}function k(n){return n*1e3}function vt(n){return n-k(V(n))}function N(n){const t=new Date,e=t.getHours(),s=t.getMinutes();return H(e)+M(s)+(n?k(t.getSeconds()):0)}class Dt{constructor(t){this._adapter=t,this._value=null,this._masked=!0,this._use24HourTime=!1,this._showMaskFormat=!1,this._min=null,this._max=null,this._restrictedTimes=[],this._startTime=null,this._step=r.numbers.DEFAULT_MINUTE_STEP,this._allowInput=!0,this._open=!1,this._allowSeconds=!1,this._allowInvalidTime=!1,this._showNow=!1,this._showHourOptions=!0,this._customOptions=[],this._disabled=!1,this._popupClasses=[],this._allowDropdown=!0,this._isInitialized=!1,this._identifier=G(),this._inputListener=e=>this._onInput(e),this._inputKeydownListener=e=>this._onInputKeydown(e),this._toggleMousedownListener=e=>this._onToggleMousedown(e),this._inputFocusListener=e=>this._onInputFocus(e),this._inputBlurListener=e=>this._onInputBlur(e),this._inputMousedownListener=e=>this._onInputMousedown(e)}initialize(){if(this._adapter.initialize(),!this._adapter.hasInputElement())throw new Error("Unable to locate <input> element to attach to.");if(this._adapter.initializeAccessibility(this._identifier),!this._value){const t=this._adapter.getInputValue();this._setValue(this._convertTimeStringToMillis(t,this._use24HourTime,this._allowSeconds))}this._adapter.addInputListener("focus",this._inputFocusListener),this._adapter.addInputListener("blur",this._inputBlurListener),this._adapter.addInputListener("keydown",this._inputKeydownListener,!0),this._formatInputValue(!1),typeof this._value=="number"&&this._applyValue(this._value,!1),this._applyAllowInput(),this._applyAllowDropdown(),this._applyDisabled(),this._applyMask(),this._isInitialized=!0}disconnect(){this._isInitialized=!1,this._adapter.removeInputListener("input",this._inputListener),this._adapter.removeInputListener("focus",this._inputFocusListener),this._adapter.removeInputListener("blur",this._inputBlurListener),this._adapter.removeToggleListener("mousedown",this._toggleMousedownListener),this._adapter.removeInputListener("keydown",this._inputKeydownListener,!0),this._masked&&this._adapter.destroyMask(),this._closeDropdown({destroy:!0}),this._adapter.destroy()}_onInput(t){this._handleInput(this._adapter.getInputValue())}_onInputKeydown(t){var e,s;if(t.shiftKey)switch(t.code){case"Backspace":case"Delete":t.preventDefault(),this._trySetValue(null)&&this._formatInputValue();return}switch(t.code){case"Tab":this._open&&this._selectActiveOption();break;case"Esc":case"Escape":this._open&&(t.preventDefault(),t.stopPropagation(),this._closeDropdown({emitCloseEvent:!0}));break;case"Down":case"ArrowDown":this._allowDropdown&&(t.preventDefault(),this._open?this._adapter.hasActiveOption()?this._adapter.propagateKey(t.code):this._trySetActiveOption():(this._openDropdown(),typeof((e=this._dropdownConfig)==null?void 0:e.visibleStartIndex)=="number"&&this._dropdownConfig.visibleStartIndex>=0?this._adapter.activateOptionByIndex((s=this._dropdownConfig)==null?void 0:s.visibleStartIndex):this._adapter.activateFirstOption()));break;case"ArrowUp":this._allowDropdown&&(t.preventDefault(),this._open&&(this._adapter.hasActiveOption()?this._adapter.propagateKey(t.code):this._trySetActiveOption()));break;case"Enter":case"NumpadEnter":case"Home":case"End":this._open&&((t.code==="Enter"||t.code==="NumpadEnter")&&t.stopPropagation(),t.preventDefault(),this._adapter.propagateKey(t.code));break;case"KeyN":t.preventDefault();const i=N(this._allowSeconds);if(this._value!==i){const o=_(i,!0,this._allowSeconds);this._emitChangeEvent(o)&&(this._applyValue(i),this._selectInputText())}break}}_trySetActiveOption(){var t,e;!this._adapter.hasActiveOption()&&typeof((t=this._dropdownConfig)==null?void 0:t.visibleStartIndex)=="number"&&this._dropdownConfig.visibleStartIndex>=0&&this._adapter.activateOptionByIndex((e=this._dropdownConfig)==null?void 0:e.visibleStartIndex)}_selectActiveOption(){const t=this._adapter.getActiveOption();t&&this._onSelect(t.value)}_onToggleMousedown(t){this._disabled||!this.allowDropdown||(t.stopPropagation(),!this._adapter.isInputDisabled()&&(t.preventDefault(),this._open?this._closeDropdown({emitCloseEvent:!0}):(q.isMobile?this._adapter.tryBlurInput():this._adapter.tryFocusInput(),this._openDropdown())))}_onInputFocus(t){this.masked&&this._showMaskFormat&&this._applyMask(),this._allowInput&&this._adapter.selectInputText()}_onInputBlur(t){this.masked&&this._showMaskFormat&&this._applyMask(),this._formatInputValue(),this._open&&!this._adapter.isInputFocused()&&this._closeDropdown({emitCloseEvent:!0})}_onInputMousedown(t){!this._allowInput&&!this._open&&(this._openDropdown(),this._adapter.tryFocusInput(),window.requestAnimationFrame(()=>this._adapter.selectInputText()))}_applyDisabled(){this._adapter.setDisabled(this._disabled)}_applyMask(){if(this._masked&&this._allowInput){this._adapter.destroyMask();const t={showMaskFormat:this._showMaskFormat&&this._adapter.isInputFocused(),use24HourTime:this._use24HourTime,showSeconds:this._allowSeconds,prepareCallback:this._prepareMaskCallback,onChange:Y(e=>this._handleInput(e),0,!0)};this._adapter.initializeMask(t)}else this._adapter.destroyMask(),this._formatInputValue()}_applyAllowInput(){this._adapter.setInputReadonly(!this._allowInput),this._allowInput?(this._adapter.removeInputListener("mousedown",this._inputMousedownListener),this._masked||this._adapter.addInputListener("input",this._inputListener)):(this._adapter.addInputListener("mousedown",this._inputMousedownListener),this._adapter.removeInputListener("input",this._inputListener))}_applyAllowDropdown(){this._adapter.setToggleDisabled(!this._allowDropdown),this._allowDropdown?(this._adapter.removeToggleListener("mousedown",this._toggleMousedownListener),this._adapter.tryCreateToggle(),this._adapter.addToggleListener("mousedown",this._toggleMousedownListener)):this._open&&this._closeDropdown({emitCloseEvent:!0})}_applyAllowSeconds(){const t=this._value;if(this._allowSeconds){if(this._isInitialized&&t!==this._value){const e=_(this._value,!0,!0);this._emitChangeEvent(e)}}else{if(typeof this._value!="number")return;if(this._setValue(vt(this._value)),this._isInitialized&&t!==this._value){const e=_(this._value,!0,!1);this._emitChangeEvent(e)}}}_handleInput(t){const e=t;if(!this._allowInput)return;this._open&&this._closeDropdown({emitCloseEvent:!0}),t=dt(t,this._use24HourTime,this._allowSeconds),typeof this._coercionCallback=="function"&&(t=this._coercionCallback.call(null,e,t,this._allowSeconds)),this._isValidTimeFormat(t)||(t="");let s;!this._masked&&typeof this._parseCallback=="function"?s=this._parseCallback.call(null,t):s=this._convertTimeStringToMillis(t,this._use24HourTime,this._allowSeconds),s=this._validateMillis(s),this._trySetValue(s)}_emitChangeEvent(t,e=!1){return this._adapter.emitHostEvent(r.events.CHANGE,t,!0,!e)}_trySetValue(t){if(t===this._value)return!1;const e=_(t,!0,this._allowSeconds);return this._adapter.emitInputEvent(r.events.INPUT,e),this._value!==t&&this._emitChangeEvent(e)?(this._setValue(t),!0):!1}_setValue(t){this._value=this._normalizeTimeValue(t)}_validateMillis(t){if(typeof t=="number"){const e=typeof this._min=="number"&&t<this._min,s=typeof this._max=="number"&&t>this._max;(e||s)&&(t=null)}return typeof t=="number"&&this._restrictedTimes.length&&this._restrictedTimes.includes(t)&&(t=null),t}_isValidTimeFormat(t){return!this._masked&&typeof this._validationCallback=="function"?this._validationCallback.call(this,t):mt(t)}_isValidInputValue(t){return T.test(t)}_onSelect(t){if(this._closeDropdown({emitCloseEvent:!0}),!t.isCustom&&t.metadata==="now"&&(t.time=N(this._allowSeconds)),t.isCustom)if(typeof t.customCallback=="function"){const i=t.customCallback.call(null,t.metadata);if(typeof i!="number")throw new Error("Custom options must provide a time of day value in milliseconds.");t.time=i}else throw new Error("You must implement a `toMilliseconds` callback that returns the time value to use for this custom option.");if(this._value===t.time)return;const e=_(t.time,!0,this._allowSeconds);this._emitChangeEvent(e)&&(this._applyValue(t.time),this._selectInputText())}_selectInputText(){window.requestAnimationFrame(()=>{window.requestAnimationFrame(()=>{this._adapter.isInputFocused()&&this._adapter.selectInputText()})})}_applyValue(t,e=!0){this._setValue(t);const s=this._formatValue(this._value);this._adapter.getInputValue()!==s&&this._adapter.setInputValue(s,e)}_normalizeTimeValue(t){return t==null?null:t<0?0:t>r.numbers.MAX_DAY_MILLIS?r.numbers.MAX_DAY_MILLIS:t}_openDropdown(){const t=this._generateTimeOptions();if(!this.allowDropdown||!t.length)return;this._formatInputValue(),this._open=!0,this._adapter.setHostAttribute(r.attributes.OPEN);const e=t.filter(o=>!o.divider&&!o.disabled);let s=[],i=0;if(t.length)if(this._value!=null){const o=this._findClosestOptionIndex(this._value,e);o>=0&&(e[o].value.time===this._value?s=[e[o].value]:i=o)}else if(typeof this._startTime=="number"){const o=this._findClosestOptionIndex(this._startTime,e);o>=0&&o<e.length&&(i=o)}else this._startTime==null&&(i=this._getOptionIndexClosestCurrent(e));this._dropdownConfig={id:`forge-time-picker-${this._identifier}`,selectedValues:s,syncWidth:!0,visibleStartIndex:i,popupClasses:this._popupClasses,popupStatic:!0,type:ot.Standard,options:t,selectCallback:o=>this._onSelect(o),closeCallback:()=>this._closeDropdown({emitCloseEvent:!0}),activeChangeCallback:o=>this._adapter.setActiveDescendant(o),targetWidthCallback:()=>this._adapter.getTargetElementWidth(this._popupTarget)},this._adapter.attachDropdown(this._dropdownConfig),this._adapter.emitHostEvent(r.events.OPEN,void 0,!1)}_closeDropdown({destroy:t=!1,emitCloseEvent:e=!1}={}){this._open=!1,this._dropdownConfig=void 0,this._adapter.removeHostAttribute(r.attributes.OPEN),this._adapter.detachDropdown({destroy:t}),e&&this._adapter.emitHostEvent(r.events.CLOSE,!0,!1)}_getOptionIndexClosestCurrent(t){const e=new Date,s=`${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}`,i=L(s,!0,!1);return this._findClosestOptionIndex(i,t)}_findClosestOptionIndex(t,e){const s=e.reduce((i,o)=>Math.abs((o.value.time||0)-t)<Math.abs((i.value.time||0)-t)?o:i);return e.indexOf(s)}_formatInputValue(t=!0){const e=this._adapter.getInputValue();if(this._allowInvalidTime&&!this._masked&&e&&!this._value)return;const s=this._formatValue(this._value);e!==s&&(this._adapter.setInputValue(s,t),this._adapter.emitInputEvent(r.events.INPUT,s))}_generateTimeOptions(){const t=this._min!=null?Math.max(b(this._min),0):0,e=this._max!=null?Math.min(b(this._max),r.numbers.MAX_DAY_MINUTES):r.numbers.MAX_DAY_MINUTES,s=this._step,i=[];let o=[];if(this._showHourOptions){for(let l=t;l<=e&&l!==r.numbers.MAX_DAY_MINUTES;l+=s){const d=M(l),g=this._restrictedTimes.includes(d),w=_(d,this._use24HourTime,!1)||"",S={time:d};i.push({label:w,value:S,disabled:g})}const a=i.findIndex(l=>l.value.time/1e3/60>=720);a>=0&&a<i.length-1&&i.splice(a,0,{label:"",value:null,divider:!0})}if(this._showNow){const a={time:null,metadata:"now"};o.push({label:"Now",value:a})}if(Array.isArray(this._customOptions)&&this._customOptions.length){const a=this._customOptions.map(l=>{const d={time:null,metadata:l.value,isCustom:!0,customCallback:l.toMilliseconds};return{label:l.label,value:d}});o=[...o,...a]}return o.length&&(i.length&&i.splice(0,0,{label:"",value:null,divider:!0}),o.forEach((a,l)=>i.splice(l,0,a))),i}_convertTimeStringToMillis(t,e,s){return(!t||!this._isValidTimeFormat(t))&&(t=""),L(t,e,s)}_formatValue(t){return!this._masked&&typeof this._formatCallback=="function"?this._formatCallback.call(null,t,this._use24HourTime,this._allowSeconds):_(this._value,this._use24HourTime,this._allowSeconds)||""}_warnInvalidFormat(t){console.warn(`The specified value "${t}" does not conform to the required format. The format is "HH:mm", "HH:mm:ss" where HH is 00-23, mm is 00-59, and ss is 00-59.`)}get open(){return this._open}set open(t){this._open!==t&&this._isInitialized&&(this._open=t,this._open?this._openDropdown():this._closeDropdown())}get masked(){return this._masked}set masked(t){this._masked!==t&&(this._masked=t,this._isInitialized&&(this._masked?(this._adapter.removeInputListener("input",this._inputListener),this._applyMask()):(this._adapter.destroyMask(),this._formatInputValue(),this._adapter.addInputListener("input",this._inputListener))))}get showMaskFormat(){return this._showMaskFormat}set showMaskFormat(t){this._showMaskFormat!==t&&(this._showMaskFormat=t)}get allowSeconds(){return this._allowSeconds}set allowSeconds(t){this._allowSeconds!==t&&(this._allowSeconds=!!t,this._applyAllowSeconds(),this._isInitialized&&(this._applyMask(),this._formatInputValue()),this._adapter.setHostAttribute(r.attributes.ALLOW_SECONDS,`${!!t}`))}get use24HourTime(){return this._use24HourTime}set use24HourTime(t){this._use24HourTime!==t&&(this._use24HourTime=!!t,this._isInitialized&&(this._applyMask(),this._formatInputValue()),this._adapter.setHostAttribute(r.attributes.USE_24_HOUR_TIME,`${!!t}`))}get allowInvalidTime(){return this._allowInvalidTime}set allowInvalidTime(t){this._allowInvalidTime!==t&&(this._allowInvalidTime=!!t,this._adapter.setHostAttribute(r.attributes.ALLOW_INVALID_TIME,`${!!t}`))}get value(){return _(this._value,!0,this._allowSeconds)}set value(t){if(t&&!this._isValidInputValue(t)){this._warnInvalidFormat(t);return}const e=this._validateMillis(this._convertTimeStringToMillis(t,!0,!0));this._setValue(e),this._isInitialized&&this._applyValue(this._value)}get min(){return _(this._min,!0,this._allowSeconds)}set min(t){if(this._min!==t){if(t&&!this._isValidInputValue(t)){this._warnInvalidFormat(t);return}this._min=this._convertTimeStringToMillis(t,!0,this._allowSeconds);const e=this._validateMillis(this._value);this._setValue(e),this._isInitialized&&this._applyValue(e)}}get max(){return _(this._max,!0,this._allowSeconds)}set max(t){if(this._max!==t){if(t&&!this._isValidInputValue(t)){this._warnInvalidFormat(t);return}this._max=this._convertTimeStringToMillis(t,!0,this._allowSeconds);const e=this._validateMillis(this._value);this._setValue(e),this._isInitialized&&this._applyValue(e)}}get restrictedTimes(){return this._restrictedTimes.map(t=>_(t,!0,this._allowSeconds)).filter(t=>typeof t=="string")}set restrictedTimes(t){Array.isArray(t)||(t=[]),this._restrictedTimes=t.filter(e=>typeof e=="string").map(e=>this._convertTimeStringToMillis(e,!0,!0)).filter(e=>typeof e=="number")}get startTime(){return _(this._startTime,!0,this._allowSeconds)}set startTime(t){if(this._startTime!==t){if(t&&!this._isValidInputValue(t)){this._warnInvalidFormat(t);return}this._startTime=this._convertTimeStringToMillis(t,!0,this._allowSeconds)}}get step(){return this._step}set step(t){this._step=t}get allowInput(){return this._allowInput}set allowInput(t){this._allowInput!==t&&(this._allowInput=t,this._isInitialized&&(this._applyAllowInput(),this._applyMask()))}get popupTarget(){return this._popupTarget}set popupTarget(t){this._popupTarget!==t&&(this._popupTarget=t)}get showNow(){return this._showNow}set showNow(t){this._showNow!==t&&(this._showNow=t)}get showHourOptions(){return this._showHourOptions}set showHourOptions(t){this._showHourOptions!==t&&(this._showHourOptions=t)}get customOptions(){return this._customOptions}set customOptions(t){this._customOptions=Array.isArray(t)?t:[]}set validationCallback(t){this._validationCallback=t,this._isInitialized&&this._applyMask()}set parseCallback(t){this._parseCallback=t}set formatCallback(t){this._formatCallback=t}set coercionCallback(t){this._coercionCallback=t}set prepareMaskCallback(t){this._prepareMaskCallback=t,this._isInitialized&&this._applyMask()}get disabled(){return this._disabled}set disabled(t){this._disabled!==t&&(this._disabled=!!t,this._isInitialized&&this._applyDisabled(),this._adapter.toggleHostAttribute(r.attributes.DISABLED,this._disabled))}get popupClasses(){return Array.isArray(this._popupClasses)?[...this._popupClasses]:this._popupClasses}set popupClasses(t){Array.isArray(t)?this._popupClasses=[...t]:this._popupClasses=[t]}get allowDropdown(){return this._allowDropdown}set allowDropdown(t){this._allowDropdown!==t&&(this._allowDropdown=t,this._isInitialized&&this._applyAllowDropdown())}}const Lt=`<template>
  <slot></slot>
</template>
`,Nt=":host{display:block}:host([hidden]){display:none}";var Pt=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,h=(n,t,e,s)=>{for(var i=s>1?void 0:s?Vt(t,e):t,o=n.length-1,a;o>=0;o--)(a=n[o])&&(i=(s?a(t,e,i):a(i))||i);return s&&i&&Pt(t,e,i),i};let u=class extends J{static get observedAttributes(){return[r.attributes.VALUE,r.attributes.OPEN,r.attributes.ALLOW_SECONDS,r.attributes.MASKED,r.attributes.SHOW_MASK_FORMAT,r.attributes.USE_24_HOUR_TIME,r.attributes.ALLOW_INVALID_TIME,r.attributes.MIN,r.attributes.MAX,r.attributes.START_TIME,r.attributes.STEP,r.attributes.ALLOW_INPUT,r.attributes.SHOW_NOW,r.attributes.SHOW_HOUR_OPTIONS,r.attributes.DISABLED,r.attributes.POPUP_CLASSES,r.attributes.ALLOW_DROPDOWN]}constructor(){super(),it.define([F,x]),Q(this,Lt,Nt),this._foundation=new Dt(new yt(this))}connectedCallback(){this.querySelector(r.selectors.INPUT)?this._foundation.initialize():Z(this,r.selectors.INPUT).then(()=>this._foundation.initialize())}disconnectedCallback(){this._foundation.disconnect()}attributeChangedCallback(n,t,e){switch(n){case r.attributes.VALUE:this.value=e;break;case r.attributes.OPEN:this.open=m(e);break;case r.attributes.ALLOW_SECONDS:this.allowSeconds=m(e);break;case r.attributes.MASKED:this.masked=m(e);break;case r.attributes.SHOW_MASK_FORMAT:this.showMaskFormat=m(e);break;case r.attributes.USE_24_HOUR_TIME:this.use24HourTime=m(e);break;case r.attributes.ALLOW_INVALID_TIME:this.allowInvalidTime=m(e);break;case r.attributes.SHOW_NOW:this.showNow=m(e);break;case r.attributes.SHOW_HOUR_OPTIONS:this.showHourOptions=m(e);break;case r.attributes.MIN:this.min=e;break;case r.attributes.MAX:this.max=e;break;case r.attributes.START_TIME:this.startTime=e;break;case r.attributes.STEP:this.step=tt(e);break;case r.attributes.ALLOW_INPUT:this.allowInput=m(e);break;case r.attributes.DISABLED:this.disabled=m(e);break;case r.attributes.POPUP_CLASSES:this.popupClasses=e;break;case r.attributes.ALLOW_DROPDOWN:this.allowDropdown=m(e);break}}};h([p()],u.prototype,"value",2);h([p()],u.prototype,"open",2);h([p()],u.prototype,"allowSeconds",2);h([p()],u.prototype,"masked",2);h([p()],u.prototype,"showMaskFormat",2);h([p()],u.prototype,"use24HourTime",2);h([p()],u.prototype,"allowInvalidTime",2);h([p()],u.prototype,"min",2);h([p()],u.prototype,"max",2);h([p()],u.prototype,"restrictedTimes",2);h([p()],u.prototype,"startTime",2);h([p()],u.prototype,"step",2);h([p()],u.prototype,"allowInput",2);h([p()],u.prototype,"showNow",2);h([p()],u.prototype,"showHourOptions",2);h([p()],u.prototype,"customOptions",2);h([p()],u.prototype,"validationCallback",2);h([p()],u.prototype,"parseCallback",2);h([p()],u.prototype,"formatCallback",2);h([p()],u.prototype,"coercionCallback",2);h([p()],u.prototype,"prepareMaskCallback",2);h([p()],u.prototype,"disabled",2);h([p()],u.prototype,"popupClasses",2);h([p()],u.prototype,"allowDropdown",2);h([p()],u.prototype,"popupTarget",2);u=h([j({name:r.elementName,dependencies:[rt,at,et,v,lt,v,ut]})],u);
