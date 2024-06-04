import{B as n}from"./base-adapter-BIKyOSkq.js";import{B as e}from"./base-field-CXwdj0lH.js";function l(i,t){let s=t.replace(/\[(\w+)\]/g,".$1");s=s.replace(/^\./,"");const r=s.split(".");for(let o=0;o<r.length;++o){const a=r[o];if(i&&typeof i=="object"&&a in i)i=i[a];else{i="";break}}return i}function _(i,t){return i.find(s=>p(s,t))}function b(i,t){if(!i||!i.length)throw new Error("Invalid key");const s={};for(const r of i)if(Object.prototype.hasOwnProperty.call(t,r))s[r]=t[r];else throw new Error(`Invalid key. The property "${r}" does not exist in the data.`);return s}function p(i,t){return Object.keys(t).every(s=>i[s]===t[s])}function f(i,t,s,r){let o=t;t.hasOwnProperty(s)||(o=Object.getPrototypeOf(t));const a=Object.getOwnPropertyDescriptor(o,s);if(!a)throw new Error(`Property ${s} does not exist.`);return Object.defineProperty(t,s,{configurable:!0,get(){return a.get?a.get.apply(this,arguments):void 0},set(){a.set&&a.set.apply(this,arguments),r.apply(i,arguments)}}),()=>Object.defineProperty(t,s,a)}class y extends n{setFieldProperty(t,s){this._fieldElement[t]=s}floatLabelWithoutAnimation(t){this._fieldElement.floatLabelWithoutAnimation(t)}}class g{constructor(t){this._adapter=t,this._labelPosition=e.defaults.DEFAULT_LABEL_POSITION,this._labelAlignment=e.defaults.DEFAULT_LABEL_ALIGNMENT,this._invalid=!1,this._required=!1,this._optional=!1,this._disabled=!1,this._variant=e.defaults.DEFAULT_VARIANT,this._theme=e.defaults.DEFAULT_THEME,this._shape=e.defaults.DEFAULT_SHAPE,this._density=e.defaults.DEFAULT_DENSITY,this._dense=!1,this._popoverIcon=!1,this._popoverExpanded=!1,this._supportTextInset=e.defaults.DEFAULT_SUPPORT_TEXT_INSET,this._permanentlyFloatLabel=!1}get _hasValue(){return this._adapter.hasValue}get _hasPlaceholder(){return this._adapter.hasPlaceholder}click(){this._adapter.click()}applyLabel(t){this._adapter.applyLabel(t)}floatLabelWithoutAnimation(t){this._adapter.floatLabelWithoutAnimation(this._hasValue||this._hasPlaceholder||t)}_tryFloatLabel(t){if(!this._permanentlyFloatLabel){if(this._labelPosition!=="inset"){this._adapter.tryFloatLabel(!1);return}this._adapter.tryFloatLabel(t)}}get labelPosition(){return this._labelPosition}set labelPosition(t){this._labelPosition!==t&&(this._labelPosition=t,this._adapter.setFieldProperty("labelPosition",t),this._adapter.setHostAttribute(e.attributes.LABEL_POSITION,t))}get labelAlignment(){return this._labelAlignment}set labelAlignment(t){this._labelAlignment!==t&&(this._labelAlignment=t,this._adapter.setFieldProperty("labelAlignment",t),this._adapter.setHostAttribute(e.attributes.LABEL_ALIGNMENT,t))}get invalid(){return this._invalid}set invalid(t){this._invalid!==t&&(this._invalid=t,this._adapter.setFieldProperty("invalid",t),this._adapter.toggleHostAttribute(e.attributes.INVALID,t))}get required(){return this._required}set required(t){this._required!==t&&(this._required=t,this._adapter.setFieldProperty("required",t),this._adapter.toggleHostAttribute(e.attributes.REQUIRED,t))}get optional(){return this._optional}set optional(t){this._optional!==t&&(this._optional=t,this._adapter.setFieldProperty("optional",t),this._adapter.toggleHostAttribute(e.attributes.OPTIONAL,t))}get disabled(){return this._disabled}set disabled(t){this._disabled!==t&&(this._disabled=t,this._adapter.setFieldProperty("disabled",t),this._adapter.toggleHostAttribute(e.attributes.DISABLED,t))}get permanentlyFloatLabel(){return this._permanentlyFloatLabel}set permanentlyFloatLabel(t){this._permanentlyFloatLabel!==t&&(this._permanentlyFloatLabel=t,this._adapter.setFieldProperty("floatLabel",t||this._hasValue||this._hasPlaceholder),this._adapter.toggleHostAttribute(e.attributes.FLOAT_LABEL,t))}get variant(){return this._variant}set variant(t){this._variant!==t&&(this._variant=t,this._adapter.setFieldProperty("variant",t),this._adapter.setHostAttribute(e.attributes.VARIANT,t))}get theme(){return this._theme}set theme(t){this._theme!==t&&(this._theme=t,this._adapter.setFieldProperty("theme",t),this._adapter.setHostAttribute(e.attributes.THEME,t))}get shape(){return this._shape}set shape(t){this._shape!==t&&(this._shape=t,this._adapter.setFieldProperty("shape",t),this._adapter.setHostAttribute(e.attributes.SHAPE,t))}get density(){return this._density}set density(t){this._density!==t&&(this._density=t,this._adapter.setFieldProperty("density",t),this._adapter.setHostAttribute(e.attributes.DENSITY,t))}get dense(){return this._dense}set dense(t){this._dense!==t&&(this._dense=t,this._adapter.setFieldProperty("dense",t),this._adapter.toggleHostAttribute(e.attributes.DENSE,t))}get popoverIcon(){return this._popoverIcon}set popoverIcon(t){this._popoverIcon!==t&&(this._popoverIcon=t,this._adapter.setFieldProperty("popoverIcon",t),this._adapter.toggleHostAttribute(e.attributes.POPOVER_ICON,t))}get popoverExpanded(){return this._popoverExpanded}set popoverExpanded(t){this._popoverExpanded!==t&&(this._popoverExpanded=t,this._adapter.setFieldProperty("popoverExpanded",t))}get supportTextInset(){return this._supportTextInset}set supportTextInset(t){this._supportTextInset!==t&&(this._supportTextInset=t,this._adapter.setFieldProperty("supportTextInset",t),this._adapter.setHostAttribute(e.attributes.SUPPORT_TEXT_INSET,t))}}export{y as B,g as a,b as c,_ as f,l as g,f as l,p as m};
