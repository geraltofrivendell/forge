import{C as y,q as m,G as x,t as L,w as A,o as S,B as C,p as N,b as c,d as O,P as R,x as D,T as P,a4 as w}from"./constants-DjE6emXm.js";import{B as I,c as a}from"./base-adapter-F7QHxK2H.js";import{R as F,w as Y,S as K,T as k,N as X}from"./index-ByifSpfC.js";import{a as H,S as M}from"./state-layer-DkOkOFSZ.js";import{I as U,a as B}from"./icon-DHpZ4R73.js";import"./index-Dh0vMUMR.js";import{a as z}from"./expansion-panel-Da14WzAs.js";import{F as G}from"./focus-indicator-BpCDYqsq.js";import{g as W}from"./event-utils-C1SDeUaq.js";const v=`${y}step`,g={STEP:"forge-step",STEP_CONTAINER:"container",ERROR:"error",SELECTED:"selected",COMPLETED:"completed",EDITABLE:"editable",ALTERNATIVE:"alternative",ICON_CONTENT:"icon-content",ICON:"icon",LABEL_CONTAINER:"label-container",LABEL:"label",OPTIONAL_LABEL:"optional-label",INDEX:"index",CLUSTERED:"clustered",DISABLED:"disabled",VERTICAL:"vertical",EXPANDED:"expanded",EXPANDABLE:"expandable",EXPANSION_PANEL:"expansion-panel",EXPANSION_ICON:"expanded-icon",EXPANSION_ICON_EXPANDED:"expanded-icon--expanded",EXPANSION_CONTENT:"expansion-content"},$={SELECTED:"selected",INDEX:"index",EDITABLE:"editable",COMPLETED:"completed",ERROR:"error",ALTERNATIVE:"alternative",FIRST:"first",LAST:"last",ARIA_SELECTED:"aria-selected",CLUSTERED:"clustered",DISABLED:"disabled",VERTICAL:"vertical",EXPANDED:"expanded",EXPANDABLE:"expandable",IGNORE_USER_EXPANSION:"ignore-user-expansion"},V={STEP:`.${g.STEP}`,STEP_CONTAINER:`.${g.STEP_CONTAINER}`,INDEX:`.${g.INDEX}`,ICON:`.${g.ICON}`,ICON_CONTENT:`.${g.ICON_CONTENT}`,EXPANSION_SLOT:'slot[name="expansion-content"]',EXPANSION_PANEL:`.${g.EXPANSION_PANEL}`,EXPANSION_ICON:`.${g.EXPANSION_ICON}`},q={ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",ARROW_UP_KEY:"ArrowUp",ARROW_DOWN_KEY:"ArrowDown",END_KEY:"End",ENTER_KEY:"Enter",HOME_KEY:"Home",SPACE_KEY:"Space",EXPANSION_CONTENT_SLOT_NAME:"expansion-content"},j={SELECT:`${v}-select`,EXPANDED_CONTENT_FOCUSIN:`${v}-expanded-content-focusin`,EXPANDED_CONTENT_FOCUSOUT:`${v}-expanded-content-focusout`},s={elementName:v,classes:g,selectors:V,attributes:$,events:j,strings:q};class J extends I{constructor(e){super(e),this._stepContainer=m(e,s.selectors.STEP),this._container=m(e,s.selectors.STEP_CONTAINER),this._stateLayerElement=m(this._component,H.elementName)}get component(){return this._component}initialize(){this._component.hasAttribute("role")||this._component.setAttribute("role","tab")}setIndex(e){this._stepContainer.querySelector(s.selectors.INDEX).innerHTML=(e+1||"").toString()}toggleRootClass(e,t){x(this._stepContainer,t,e)}toggleDisabled(e){x(this._stepContainer,e,s.classes.DISABLED),L(this._component,e,"aria-disabled"),this._stateLayerElement.disabled=e}toggleIcon(e,t){const r=this._stepContainer.querySelector(s.selectors.INDEX),o=this._stepContainer.querySelector(s.selectors.ICON);if(!t){r.style.display="inherit",o.style.display="none";return}r.style.display="none",o.style.display="inherit",o.name=e}slotHasContent(){return this._expansionSlot.assignedElements({flatten:!0}).length>0}setClickListener(e){this._component.addEventListener("click",e)}removeClickListener(e){this._component.removeEventListener("click",e)}setSlotListener(e){this._expansionSlot.addEventListener("slotchange",e)}removeSlotListener(e){this._expansionSlot&&this._expansionSlot.removeEventListener("slotchange",e)}setExpanded(e){this._expansionPanel&&(this._expansionPanel.open=e,L(this._expansionPanel,!e,"tabindex","-1")),x(this._stepContainer,e,s.classes.EXPANDED)}setExpansionPanelAnimations(e){this._expansionPanel.animationType=e?"default":"none"}addExpansionPanel(){this._container.querySelector(s.selectors.EXPANSION_PANEL)||(this._expansionPanel=this._container.appendChild(this._createExpansionPanel()),this._expansionSlot=this._expansionPanel.querySelector(s.selectors.EXPANSION_SLOT))}removeExpansionPanel(){const e=this._container.querySelector(s.selectors.EXPANSION_PANEL);e&&this._container.removeChild(e)}addExpansionIcon(){this._stepContainer.querySelector(s.selectors.EXPANSION_ICON)||this._stepContainer.appendChild(this._createExpansionIcon())}removeExpansionIcon(){const e=this._stepContainer.querySelector(s.selectors.EXPANSION_ICON);e&&this._stepContainer.removeChild(e)}addExpansionPanelListener(e,t){this._expansionPanel.addEventListener(e,t)}removeExpansionPanelListener(e,t){this._expansionPanel&&this._expansionPanel.removeEventListener(e,t)}isExpandedContentInFocus(e){return this._expansionSlot.assignedElements().some(t=>t.contains(e||document.activeElement))}_createExpansionPanel(){const e=document.createElement("forge-expansion-panel");e.animationType="none",e.setAttribute("part","expansion-panel"),A(s.classes.EXPANSION_PANEL,e);const t=document.createElement("slot");return t.setAttribute("name","expansion-content"),A(s.classes.EXPANSION_CONTENT,t),e.appendChild(t),e}_createExpansionIcon(){const e=document.createElement("forge-icon");return A(s.classes.EXPANSION_ICON,e),e.name="keyboard_arrow_down",e.setAttribute("part","expanded-icon"),e}}class Q{constructor(e){this._adapter=e,this._clickListener=()=>this._onClickListener(),this._expansionContentSlotChangeListener=t=>this._onExpansionContentSlotChange(t),this._expansionContentFocusInListener=t=>this._onExpansionContentFocusIn(t),this._expansionContentFocusOutListener=t=>this._onExpansionContentFocusOut(t)}initialize(){this._adapter.initialize(),this._applySelected(),this._toggleIcon(),this._vertical&&(this._adapter.addExpansionPanel(),this._adapter.addExpansionIcon(),this._adapter.setClickListener(this._clickListener),this._adapter.setSlotListener(this._expansionContentSlotChangeListener),this._adapter.addExpansionPanelListener("focusin",this._expansionContentFocusInListener),this._adapter.addExpansionPanelListener("focusout",this._expansionContentFocusOutListener)),this._initialized=!0}destroy(){this._adapter.removeClickListener(this._clickListener),this._adapter.removeSlotListener(this._expansionContentSlotChangeListener),this._adapter.removeExpansionPanelListener("focusin",this._onExpansionContentFocusIn),this._adapter.removeExpansionPanelListener("focusout",this._onExpansionContentFocusOut)}get index(){return this._index}set index(e){this._index!==e&&(this._index=e,this._applyIndex(),this._adapter.setHostAttribute(s.attributes.INDEX,e.toString()))}get editable(){return this._editable}set editable(e){this._editable!==e&&(this._editable=e,this._adapter.toggleHostAttribute(s.attributes.EDITABLE,e),this._applyEditable())}get completed(){return this._completed}set completed(e){this._completed!==e&&(this._completed=e,this._adapter.toggleHostAttribute(s.attributes.COMPLETED,e),this._applyCompleted())}get error(){return this._error}set error(e){this._error!==e&&(this._error=e,this._adapter.toggleHostAttribute(s.attributes.ERROR,e),this._applyError())}get selected(){return this._selected}set selected(e){this._selected!==e&&(this._selected=e,this._adapter.toggleHostAttribute(s.attributes.SELECTED,e),this._applySelected())}get alternative(){return this._alternative}set alternative(e){this._alternative!==e&&(this._alternative=e,this._adapter.toggleHostAttribute(s.attributes.ALTERNATIVE,e),this._applyAlternative())}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._applyDisabled()}get vertical(){return this._vertical}set vertical(e){e!==this._vertical&&(this._vertical=e,this._applyVertical(),this._initialized&&(this._vertical?(this._adapter.addExpansionPanel(),this._adapter.addExpansionIcon(),this._adapter.setClickListener(this._clickListener),this._adapter.setSlotListener(this._expansionContentSlotChangeListener)):(this._adapter.removeClickListener(this._clickListener),this._adapter.removeSlotListener(this._expansionContentSlotChangeListener),this._adapter.removeExpansionPanel(),this._adapter.removeExpansionIcon())))}get expanded(){return this._expanded}set expanded(e){e!==this._expanded&&(this._expanded=e,this._adapter.toggleHostAttribute(s.attributes.EXPANDED,this._expanded),this._initialized&&this._applyExpanded())}get ignoreUserExpansion(){return this._ignoreUserExpansion}set ignoreUserExpansion(e){e!==this._ignoreUserExpansion&&(this._ignoreUserExpansion=e)}_applyExpanded(){this._adapter.setExpanded(this._expanded)}_applyVertical(){this._adapter.toggleHostAttribute(s.attributes.VERTICAL,this._vertical),this._adapter.toggleRootClass(s.classes.VERTICAL,this._vertical)}_applyAlternative(){this._adapter.toggleRootClass(s.classes.ALTERNATIVE,this._alternative)}_applySelected(){this._adapter.toggleRootClass(s.classes.SELECTED,this._selected),this._adapter.setHostAttribute(s.attributes.ARIA_SELECTED,(this._selected||!1).toString()),this._adapter.hostElement.tabIndex=this._selected?0:-1,this._toggleIcon()}_applyIndex(){this._adapter.setIndex(this._index)}_applyEditable(){this._adapter.toggleRootClass(s.classes.EDITABLE,this._editable),this._toggleIcon()}_applyCompleted(){this._adapter.toggleRootClass(s.classes.COMPLETED,this._completed),this._toggleIcon()}_applyError(){this._adapter.toggleRootClass(s.classes.ERROR,this._error),this._toggleIcon()}_applyDisabled(){this._adapter.toggleDisabled(this._disabled),this._toggleIcon()}_getIconState(){return this._error?"warning":this._completed?this._editable?"mode_edit":"check":this._editable&&this._selected&&!this._disabled?"mode_edit":this._disabled?"block":""}_toggleIcon(){this._iconState=this._getIconState(),this._adapter.toggleIcon(this._iconState,this._iconState!=="")}_toggleExpanded(){this._adapter.slotHasContent()&&(this._expanded=!this._expanded,this._applyExpanded(),this._adapter.toggleHostAttribute(s.attributes.EXPANDED,this._expanded))}_onClickListener(){this._vertical&&!this._ignoreUserExpansion&&this._toggleExpanded()}_onExpansionContentSlotChange(e){const t=this._adapter.slotHasContent();t?(this._adapter.setHostAttribute(s.attributes.EXPANDABLE),this._applyExpanded(),this._adapter.setExpansionPanelAnimations(!0)):(this._adapter.removeHostAttribute(s.attributes.EXPANDABLE),this._adapter.setExpansionPanelAnimations(!1)),this._adapter.toggleRootClass(s.classes.EXPANDABLE,t)}_onExpansionContentFocusIn(e){!this._expandedContentFocused&&this._adapter.isExpandedContentInFocus(e.target)&&(this._adapter.emitHostEvent(s.events.EXPANDED_CONTENT_FOCUSIN,this._adapter.component),this._expandedContentFocused=!0)}_onExpansionContentFocusOut(e){e.relatedTarget&&!this._adapter.isExpandedContentInFocus(e.relatedTarget)&&(this._adapter.emitHostEvent(s.events.EXPANDED_CONTENT_FOCUSOUT,this._adapter.component),this._expandedContentFocused=!1)}}const Z=`<template>
  <div class="container" part="root">
    <div class="forge-step" part="step">
      <!-- The before and after are here for simulating the line to overlay the button since the ripple is taking over the button::after/before -->
      <div class="before" part="before"></div>
      <div class="icon-container" part="icon-container">
        <div class="icon-content" part="icon-content">
          <span class="index" part="index"></span>
          <forge-icon class="icon" part="icon"></forge-icon>
        </div>
      </div>
      <div class="text-container" part="text-container">
        <div class="title" part="title-container">
          <slot></slot>
        </div>
        <div class="subtitle" part="subtitle-container">
          <slot name="optional"></slot>
        </div>
      </div>
      <div class="after" part="after"></div>
      <forge-state-layer exportparts="surface:state-layer" target=":host"></forge-state-layer>
      <forge-focus-indicator part="focus-indicator" target=":host" inward></forge-focus-indicator>
    </div>
  </div>
</template>
`,ee=':host{--_step-primary-color: var(--forge-step-primary-color, var(--forge-theme-primary, #3f51b5));--_step-text-color: var(--forge-step-text-color, var(--forge-theme-on-primary, #ffffff));--_step-border-radius: var(--forge-step-border-radius, var(--forge-shape-extra-large, 16px));--_step-border-radius-vertical: var(--forge-step-border-radius-vertical, var(--forge-shape-medium, 4px));--_step-disabled-text-color: var(--forge-step-disabled-text-color, var(--forge-theme-text-low, rgba(0, 0, 0, .38)));--_step-disabled-color: var(--forge-step-disabled-color, var(--forge-theme-surface-container-minimum, #f5f5f5));--_step-icon-fill: var(--forge-step-icon-fill, unset);--_step-icon-fill-active: var(--forge-step-icon-fill-active, var(--_step-primary-color));--_step-icon-text-color: var(--forge-step-icon-text-color, var(--forge-theme-primary, #3f51b5));--_step-icon-text-color-active: var(--forge-step-icon-text-color-active, var(--forge-theme-on-primary, #ffffff));--_step-icon-content-size: var(--forge-step-icon-content-size, 24px);--_step-icon-size: var(--forge-step-icon-size, calc(var(--forge-typography-font-size, 1rem) * .875));--_step-icon-transition-duration: var(--forge-step-icon-transition-duration, var(--forge-animation-duration-medium4, .4s));--_step-icon-transition-easing: var(--forge-step-icon-transition-easing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_step-line-color: var(--forge-step-line-color, var(--forge-theme-outline, #e0e0e0));--_step-line-min-width: var(--forge-step-line-min-width, 10px);--_step-line-min-width-clustered: var(--forge-step-line-min-width-clustered, 25px);--_step-label-color: var(--forge-step-label-color, var(--forge-theme-text-high, rgba(0, 0, 0, .87)));--_step-sub-label-color: var(--forge-step-sub-label-color, var(--forge-theme-text-medium, rgba(0, 0, 0, .6)));--_step-error-color: var(--forge-step-error-color, var(--forge-theme-error, #b00020));--_step-error-text-color: var(--forge-step-error-text-color, var(--forge-theme-on-error, #ffffff));--_step-expansion-panel-border-left-width: var(--forge-step-expansion-panel-border-left-width, 1px);--_step-expansion-panel-margin-bottom: var(--forge-step-expansion-panel-margin-bottom, 4px);--_step-expansion-panel-margin-left: var(--forge-step-expansion-panel-margin-left, 60px);--_step-expansion-panel-margin-top: var(--forge-step-expansion-panel-margin-top, 4px);--_step-expansion-panel-icon-color: var(--forge-step-expansion-panel-icon-color, var(--forge-theme-text-medium, rgba(0, 0, 0, .6)))}:host(:focus){outline:none}:host([error]){--forge-state-layer-color: var(--_step-error-color)}:host(:first-child[alternative]):after{align-self:flex-start;top:22px;margin:0}:host(:last-child[alternative]):before{align-self:flex-start;top:22px;margin:0}:host(:not(:first-child):not(:last-child)[alternative]):before,:host(:not(:first-child):not(:last-child)[alternative]):after{align-self:flex-start;top:22px;min-width:7px;margin:0}:host(:not(:last-child)[alternative]) .after{align-self:flex-start;top:22px;position:absolute;width:calc(50% - 18px);left:calc(50% + 18px);height:0;right:0}:host(:not(:first-child)[alternative]) .before{align-self:flex-start;top:22px;position:absolute;left:0;width:calc(50% - 18px);height:0}:host(:not(:first-child):not(:last-child)):host(:not([vertical])):before,:host(:not(:first-child):not(:last-child)):host(:not([vertical])):after{border-color:var(--_step-line-color);min-width:var(--_step-line-min-width);content:"";position:relative;height:0;flex:1;flex-basis:.000000001px;border-top-style:solid;border-top-width:1px;border-radius:1px 0 0 1px;margin:0 -10px}:host(:last-child):host(:not([vertical])):before{border-color:var(--_step-line-color);min-width:var(--_step-line-min-width);content:"";position:relative;height:0;flex:1;flex-basis:.000000001px;border-top-style:solid;border-top-width:1px;border-radius:1px 0 0 1px;margin:0 -10px 0 0}:host(:is(:first-child)):host(:not([vertical])):after{border-color:var(--_step-line-color);min-width:var(--_step-line-min-width);content:"";position:relative;height:0;flex:1;flex-basis:.000000001px;border-top-style:solid;border-top-width:1px;border-radius:1px 0 0 1px;margin:0 -10px}:host([vertical]){flex-direction:column}:host([vertical]):after{content:none}:host([vertical]):before{content:none}:host([vertical]) .forge-step{--_step-border-radius: var(--_step-border-radius-vertical);width:100%;min-height:52px}:host([vertical]) .forge-step .text-container{white-space:normal}:host([vertical]) .icon-container .icon-content{margin:0 16px 0 0}:host([vertical]) .expansion-panel{display:none}:host([vertical]) .expanded-icon{color:var(--_step-expansion-panel-icon-color);display:none;margin-left:auto}:host([vertical][expandable]) .expansion-panel{display:block}:host([ignore-user-expansion]) .forge-step .expanded-icon{display:none}forge-expansion-panel::part(root){border-color:var(--_step-line-color);margin-left:var(--_step-expansion-panel-margin-left);margin-top:var(--_step-expansion-panel-margin-top);margin-bottom:var(--_step-expansion-panel-margin-bottom);border-left-width:var(--_step-expansion-panel-border-left-width);border-left-style:solid}forge-focus-indicator{--forge-focus-indicator-color: var(--_step-primary-color);--forge-focus-indicator-shape: 16px}.container{display:contents}.forge-step{-webkit-tap-highlight-color:transparent;padding:12px 16px;outline:none;background:none;border:none;border-radius:var(--_step-border-radius);position:relative;display:flex;overflow:hidden;align-items:center;z-index:1;cursor:pointer}.forge-step:focus{outline:none}.forge-step::-moz-focus-inner,.forge-step::-moz-focus-outer{padding:0;border:0}.forge-step.error forge-focus-indicator{--forge-focus-indicator-color: var(--_step-error-color)}.forge-step.vertical forge-focus-indicator{--forge-focus-indicator-shape: 4px}.forge-step.selected:not(.disabled){--forge-state-layer-color: var(--_step-primary-color)}.forge-step.selected:not(.disabled):before{background-color:var(--_step-primary-color);content:"";position:absolute;top:0;right:0;bottom:0;left:0;opacity:.08;height:100%;width:100%}.forge-step.selected:not(.disabled).error{--_step-primary-color: var(--_step-error-color)}.forge-step .title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, .875)));font-weight:var(--forge-typography-body1-font-weight, 400);line-height:var(--forge-typography-body1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-body1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-body1-text-transform, inherit);text-decoration:var(--forge-typography-body1-text-decoration, inherit);color:var(--_step-label-color);text-align:left;overflow:hidden;text-overflow:ellipsis}.forge-step .subtitle{text-align:left;overflow:hidden;text-overflow:ellipsis}.forge-step .subtitle ::slotted(*){color:var(--_step-sub-label-color);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-label1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-label1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-font-size-scale, .75)));font-weight:var(--forge-typography-label1-font-weight, 400);line-height:var(--forge-typography-label1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-label1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-label1-text-transform, inherit);text-decoration:var(--forge-typography-label1-text-decoration, inherit)}.forge-step .icon-container .icon-content{color:var(--_step-icon-text-color);background-color:var(--_step-icon-fill);height:var(--_step-icon-content-size);width:var(--_step-icon-content-size);border-style:solid;border-width:2px;border-color:transparent;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:background-color var(--_step-icon-transition-duration) var(--_step-icon-transition-easing);margin:0 8px 0 0;flex:none}.forge-step .icon-container .icon-content forge-icon{font-size:var(--_step-icon-size)}.forge-step.disabled{color:var(--_step-disabled-text-color);cursor:not-allowed}.forge-step.disabled.forge-step .icon-container .icon-content{--_step-icon-fill: var(--_step-disabled-color);--_step-icon-text-color: var(--_step-disabled-text-color)}.forge-step.disabled .text-container .title{color:var(--_step-disabled-text-color)}.forge-step.disabled .text-container .subtitle ::slotted(*){color:var(--_step-disabled-text-color)}.forge-step.alternative{flex-direction:column}.forge-step.alternative .icon-container .icon-content{margin:0}.forge-step.alternative .text-container{margin-top:8px;place-items:center}.forge-step:not(.selected):not(.disabled):not(.editable):not(.completed):not(.error) .icon-content,.forge-step:not(.selected):not(.disabled).editable:not(.completed):not(.error) .icon-content{border-color:var(--_step-primary-color)}.forge-step:not(.selected):not(.disabled):not(.editable):not(.completed):not(.error) .icon-content .index,.forge-step:not(.selected):not(.disabled).editable:not(.completed):not(.error) .icon-content .index{color:var(--_step-primary-color)}.forge-step.selected.disabled .icon-content{--_step-icon-fill: var(--_step-disabled-color);--_step-icon-text-color: var(--_step-disabled-text-color)}.forge-step.selected:not(.disabled) .icon-container .icon-content{--_step-icon-fill: var(--_step-icon-fill-active);--_step-icon-text-color: var(--_step-icon-text-color-active)}.forge-step.selected:not(.disabled) .title{color:var(--_step-primary-color);font-weight:500}.forge-step.selected:not(.disabled) .subtitle ::slotted(*){color:var(--_step-primary-color);font-weight:500}.forge-step.error:not(.disabled) .title{color:var(--_step-error-color)}.forge-step.error:not(.disabled) .subtitle ::slotted(*){color:var(--_step-error-color)}.forge-step.error:not(.disabled) .icon-container .icon-content{--_step-icon-fill: var(--_step-error-color);--_step-icon-text-color: var(--_step-error-text-color)}.forge-step.completed:not(.disabled):not(.error):not(.editable) .icon-content{--_step-icon-fill: var(--_step-icon-fill-active);--_step-icon-text-color: var(--_step-icon-text-color-active)}.forge-step.completed:not(.disabled):not(.error).editable .icon-content{--_step-icon-fill: var(--_step-icon-fill-active);--_step-icon-text-color: var(--_step-icon-text-color-active)}.forge-step.expandable .expanded-icon{display:inline-block;transition:transform .3s ease-in-out}.forge-step.expandable.expanded .expanded-icon{transform:rotate(180deg)}.forge-step.expandable .icon-container .icon-content{margin:0 16px 0 0}.forge-step .text-container{display:flex;flex-direction:column;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(:not(:last-child)[clustered]):after{--_step-line-min-width: var(--_step-line-min-width-clustered)}:host(:last-child[clustered]):before{--_step-line-min-width: var(--_step-line-min-width-clustered)}:host(:not(:first-child):not(:last-child)[clustered]):before,:host(:not(:first-child):not(:last-child)[clustered]):after{--_step-line-min-width: var(--_step-line-min-width-clustered)}';var te=Object.defineProperty,se=Object.getOwnPropertyDescriptor,d=(l,e,t,r)=>{for(var o=r>1?void 0:r?se(e,t):e,h=l.length-1,f;h>=0;h--)(f=l[h])&&(o=(r?f(e,t,o):f(o))||o);return r&&o&&te(e,t,o),o};let p=class extends C{static get observedAttributes(){return[s.attributes.COMPLETED,s.attributes.EDITABLE,s.attributes.ERROR,s.attributes.INDEX,s.attributes.SELECTED,s.attributes.ALTERNATIVE,s.attributes.DISABLED,s.attributes.VERTICAL,s.attributes.EXPANDED,s.attributes.IGNORE_USER_EXPANSION]}constructor(){super(),U.define([F,Y,K,k,X]),N(this,Z,ee),this._core=new Q(new J(this))}connectedCallback(){this._core.initialize()}disconnectedCallback(){this._core.destroy()}attributeChangedCallback(l,e,t){switch(l){case s.attributes.INDEX:this.index=O(t);break;case s.attributes.COMPLETED:this.completed=c(t);break;case s.attributes.EDITABLE:this.editable=c(t);break;case s.attributes.ERROR:this.error=c(t);break;case s.attributes.SELECTED:this.selected=c(t);break;case s.attributes.ALTERNATIVE:this.alternative=c(t);break;case s.attributes.DISABLED:this.disabled=c(t);break;case s.attributes.VERTICAL:this.vertical=c(t);break;case s.attributes.EXPANDED:this.expanded=c(t);break;case s.attributes.IGNORE_USER_EXPANSION:this.ignoreUserExpansion=c(t);break}}};d([a()],p.prototype,"alternative",2);d([a()],p.prototype,"index",2);d([a()],p.prototype,"editable",2);d([a()],p.prototype,"completed",2);d([a()],p.prototype,"error",2);d([a()],p.prototype,"selected",2);d([a()],p.prototype,"disabled",2);d([a()],p.prototype,"vertical",2);d([a()],p.prototype,"expanded",2);d([a()],p.prototype,"ignoreUserExpansion",2);p=d([S({name:s.elementName,dependencies:[B,z,M,G]})],p);const ie=`${y}stepper`,T={STEPPER:"forge-stepper",LINEAR:"linear",ALTERNATIVE:"alternative",CLUSTERED:"clustered",FIXED:"fixed",ALIGN_LEFT:"align-left",ALIGN_CENTER:"align-center",ALIGN_RIGHT:"align-right",VERTICAL:"vertical",FOCUSED:"focused"},re={STEPPER:`.${T.STEPPER}`},oe={SELECTED_INDEX:"selected-index",LINEAR:"linear",ALTERNATIVE:"alternative",LAYOUT_MODE:"layout-mode",LAYOUT_ALIGN:"layout-align",DISABLED:"disabled",VERTICAL:"vertical"},n={ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",ARROW_UP_KEY:"ArrowUp",ARROW_DOWN_KEY:"ArrowDown",END_KEY:"End",ENTER_KEY:"Enter",HOME_KEY:"Home",SPACE_KEY:"Space",TAB_KEY:"Tab"},u={ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,HOME_KEYCODE:36,ENTER_KEYCODE:13,SPACE_KEYCODE:32},ae=[n.ARROW_LEFT_KEY,n.ARROW_RIGHT_KEY,n.ARROW_DOWN_KEY,n.ARROW_UP_KEY,n.END_KEY,n.HOME_KEY,n.ENTER_KEY,n.SPACE_KEY,n.TAB_KEY],ne={[u.ARROW_LEFT_KEYCODE]:n.ARROW_LEFT_KEY,[u.ARROW_RIGHT_KEYCODE]:n.ARROW_RIGHT_KEY,[u.END_KEYCODE]:n.END_KEY,[u.HOME_KEYCODE]:n.HOME_KEY,[u.ENTER_KEYCODE]:n.ENTER_KEY,[u.SPACE_KEYCODE]:n.SPACE_KEY},i={elementName:ie,classes:T,selectors:re,attributes:oe,numbers:u,strings:n,ACCEPTABLE_KEYS:ae,KEYCODE_MAP:ne};class b{static createStepElement(e,t,r){const o=document.createElement(s.elementName);return o.index=t,o.completed=e.completed||!1,o.editable=e.editable||!1,o.selected=r.selectedIndex===t,o.alternative=r.alternative,o.error=e.error||!1,o.disabled=e.disabled||!1,o.vertical=e.vertical??r.vertical??!1,o.ignoreUserExpansion=e.ignoreUserExpansion||!1,o.expanded=e.expanded||!1,r.linear&&t>r.selectedIndex&&(o.tabIndex=-1),o.textContent=e.label,e.optionalLabel&&o.appendChild(this.createStepOptionalLabel(e.optionalLabel)),o}static createStepOptionalLabel(e){const t=document.createElement("span");return t.slot="optional",t.textContent=e||"",t}static setLinearState(e,t){let r=e.classList.contains(i.classes.LINEAR);r&&!t&&(e.classList.remove(i.classes.LINEAR),r=!1),!r&&t&&e.classList.add(i.classes.LINEAR)}static setAlternativeState(e,t){let r=e.classList.contains(i.classes.ALTERNATIVE);r&&!t&&(e.classList.remove(i.classes.ALTERNATIVE),r=!1),!r&&t&&e.classList.add(i.classes.ALTERNATIVE)}static setLayoutMode(e,t){switch(t){case"clustered":e.classList.contains(i.classes.FIXED)&&e.classList.remove(i.classes.FIXED),e.classList.add(i.classes.CLUSTERED);break;case"fixed":e.classList.contains(i.classes.CLUSTERED)&&e.classList.remove(i.classes.CLUSTERED),e.classList.add(i.classes.FIXED);break}}static setLayoutAlign(e,t){switch(e.classList.contains(i.classes.ALIGN_LEFT)&&e.classList.remove(i.classes.ALIGN_LEFT),e.classList.contains(i.classes.ALIGN_CENTER)&&e.classList.remove(i.classes.ALIGN_CENTER),e.classList.contains(i.classes.ALIGN_RIGHT)&&e.classList.remove(i.classes.ALIGN_RIGHT),t){case"left":e.classList.add(i.classes.ALIGN_LEFT);break;case"center":e.classList.add(i.classes.ALIGN_CENTER);break;case"right":e.classList.add(i.classes.ALIGN_RIGHT);break}}static createSteps(e){const t=[];return e.steps.forEach((r,o)=>{const h=b.createStepElement(r,o,e);t.push(h)}),t[0].setAttribute(s.attributes.FIRST,""),t[t.length-1].setAttribute(s.attributes.LAST,""),t}}class le extends I{constructor(e){super(e),this._rootElement=m(e,i.selectors.STEPPER),this._slotElement=this._rootElement.querySelector("slot")}initializeAccessibility(){this._component.hasAttribute("role")||this._component.setAttribute("role","tablist")}patchSafari(){this._applyToSteps(e=>e.setAttribute("safari",""))}addSlotChangeListener(e){this._slotElement.addEventListener("slotchange",e)}removeSlotChangeListener(e){this._slotElement.addEventListener("slotchange",e)}getLastStep(){const e=this._getSteps();return e.item(e.length-1)}setSelected(e){this._getSteps().forEach(t=>{t===e?t.selected=!0:t.selected=!1})}assignIndices(){this._getSteps().forEach((t,r)=>{t.index=r})}assignFirstLastStep(){const e=this._getSteps();e&&e.length>1&&(e[0].setAttribute("first",""),e[e.length-1].setAttribute("last",""))}setLayoutAlign(e){b.setLayoutAlign(this._rootElement,e)}setLayoutMode(e){b.setLayoutMode(this._rootElement,e),this._applyToSteps(t=>t.setAttribute(s.attributes.CLUSTERED,""))}setAlternativeState(e){b.setAlternativeState(this._rootElement,e),this._applyToSteps(t=>t.alternative=e)}setVertical(e){x(this._rootElement,e,i.classes.VERTICAL),this._applyToSteps(t=>t.vertical=e)}setLinearState(e){b.setLinearState(this._rootElement,e)}removeRootListener(e,t){this._rootElement.removeEventListener("click",t)}addRootListener(e,t){this._rootElement.addEventListener(e,t)}setSelectedByIndex(e){this._applyToSteps(t=>{t.selected&&t.index!==e&&(t.selected=!1),t.index===e&&(t.selected=!0)})}applyConfiguredSteps(e){this._component.querySelectorAll(s.elementName).forEach(t=>{this._component.removeChild(t)}),e.forEach(t=>this._component.appendChild(t))}tryGetFocusedStep(){let e;return this._applyToSteps(t=>{t.matches(":focus-within")&&(e=t)}),e}getFocusedOrSelectedStep(){let e=this.tryGetFocusedStep();return e||(e=this._getSteps()[0],e.focus()),e}getStep(e){let t=0;const r=this._getSteps();return e<0?r.item(r.length-1):(r.length>e&&(t=e),r.item(t))}toggleDisabled(e){this._applyToSteps(t=>t.disabled=e)}toggleRootClass(e,t){x(this._rootElement,t,e)}isStepperFocused(){return this._rootElement.classList.contains(i.classes.FOCUSED)}setStepsListener(e,t){this._applyToSteps(r=>r.addEventListener(e,t))}removeStepsListener(e,t){this._applyToSteps(r=>r.removeEventListener(e,t))}_applyToSteps(e){this._getSteps().forEach(e)}_getSteps(){return this._component.querySelectorAll(s.elementName)}}class ce{constructor(e){this._adapter=e,this._steps=[],this._selectedIndex=0,this._linear=!1,this._alternative=!1,this._layoutMode="fixed",this._layoutAlign="center",this._initialize=!1,this._clickListener=t=>this._handleClick(t),this._keyListener=t=>this._onKeydown(t),this._stepFocusListener=()=>this._onStepFocus(),this._stepBlurListener=()=>this._onStepBlur(),this._stepExpandedContentFocusInListener=t=>this._onStepExpandedContentFocusIn(t),this._stepExpandedContentFocusOutListener=t=>this._onStepExpandedContentFocusOut(t),this._slotChangeListener=t=>this._onSlotChange(t)}initialize(){this._adapter.initializeAccessibility(),this._adapter.assignIndices(),this._adapter.setLinearState(this._linear),this._adapter.setAlternativeState(this._alternative),this._adapter.setLayoutAlign(this._layoutAlign),this._adapter.setLayoutMode(this._layoutMode),this._adapter.addRootListener("click",this._clickListener),this._adapter.addHostListener("keydown",this._keyListener),this._adapter.assignFirstLastStep(),this._adapter.addRootListener(s.events.EXPANDED_CONTENT_FOCUSIN,this._stepExpandedContentFocusInListener),this._adapter.addRootListener(s.events.EXPANDED_CONTENT_FOCUSOUT,this._stepExpandedContentFocusOutListener),this._applySelectedIndex(),this._patchBrowser(),this._adapter.setStepsListener("blur",this._stepBlurListener),this._adapter.setStepsListener("focus",this._stepFocusListener),this._initialize||this._adapter.addSlotChangeListener(this._slotChangeListener),this._initialize=!0}destroy(){this._adapter.removeRootListener("click",this._clickListener),this._adapter.removeHostListener("keydown",this._keyListener),this._adapter.removeSlotChangeListener(this._slotChangeListener),this._adapter.removeStepsListener("blur",this._stepBlurListener),this._adapter.removeStepsListener("focus",this._stepFocusListener)}get steps(){return this._steps.map(e=>({...e}))}set steps(e){if(Array.isArray(e)&&e.length>0)this._steps=[...e.map(t=>({...t}))];else{this._steps=[];return}this._renderConfiguration()}get selectedIndex(){return this._selectedIndex}set selectedIndex(e){if(!D(e))e=0;else if(!P(e)){const t=Number(e);e=isNaN(t)?0:t}this._selectedIndex!==e&&(this._selectedIndex=e,this._adapter.setHostAttribute(i.attributes.SELECTED_INDEX,this._selectedIndex.toString()),this._applySelectedIndex())}get linear(){return this._linear}set linear(e){e=!!e,this._linear!==e&&(this._linear=e,this._adapter.setLinearState(this._linear),this._adapter.setHostAttribute(i.attributes.LINEAR,this._linear.toString()))}get alternative(){return this._alternative}set alternative(e){e=!!e,this._alternative!==e&&(this._alternative=e,this._adapter.setAlternativeState(this._alternative),this._adapter.setHostAttribute(i.attributes.ALTERNATIVE,this._alternative.toString()))}get layoutMode(){return this._layoutMode}set layoutMode(e){/^(fixed|clustered)$/.test(e)&&this._layoutMode!==e&&(this._layoutMode=e,this._adapter.setHostAttribute(i.attributes.LAYOUT_MODE,this._layoutMode),this._adapter.setLayoutMode(this._layoutMode))}get layoutAlign(){return this._layoutAlign}set layoutAlign(e){/^(left|center|right)$/.test(e)&&this._layoutAlign!==e&&(this._layoutAlign=e,this._adapter.setLayoutAlign(this._layoutAlign),this._adapter.setHostAttribute(i.attributes.LAYOUT_ALIGN,this._layoutAlign))}get disabled(){return this._disabled}set disabled(e){e!==this._disabled&&(this._disabled=e,this._applyDisabled())}get vertical(){return this._vertical}set vertical(e){e!==this._vertical&&(this._vertical=e,this._applyVertical(),this._adapter.toggleHostAttribute(i.attributes.VERTICAL,this._vertical))}_applyVertical(){this._adapter.setVertical(this._vertical)}_applyDisabled(){this._disabled?this._adapter.setHostAttribute(i.attributes.DISABLED,"disabled"):this._adapter.removeHostAttribute(i.attributes.DISABLED),this._adapter.toggleDisabled(this._disabled)}_applySelectedIndex(){this._adapter.setSelectedByIndex(this._selectedIndex)}_handleClick(e){if(e.preventDefault(),this._linear)return;const r=W(e).filter(o=>o.nodeType===Node.ELEMENT_NODE).find(o=>o.matches(s.elementName));r&&!r.selected&&!r.disabled&&this._adapter.emitHostEvent(s.events.SELECT,r.index,!0,!0)&&(this._adapter.setSelected(r),this.selectedIndex=r.index)}_renderConfiguration(){const e=b.createSteps({steps:this._steps,vertical:this._vertical,selectedIndex:this._selectedIndex,alternative:this._alternative,layoutAlign:this._layoutAlign,layoutMode:this._layoutMode,linear:this._linear});this.destroy(),this._adapter.applyConfiguredSteps(e),this.initialize()}_onKeydown(e){var o;if(this._linear)return;const t=this._getKeyFromEvent(e);if(!this._adapter.isStepperFocused()||!t)return;if([s.strings.HOME_KEY,s.strings.END_KEY,s.strings.ARROW_DOWN_KEY,i.strings.ARROW_UP_KEY,i.strings.ENTER_KEY,i.strings.SPACE_KEY].includes(t)&&e.preventDefault(),[i.strings.ENTER_KEY,i.strings.SPACE_KEY].includes(t)){(o=this._adapter.getFocusedOrSelectedStep())==null||o.click();return}const r=this._vertical?this._determineVerticalMoveTarget(t):this._determineMoveTarget(t);r&&this._moveFocusTo(r)}_moveFocusTo(e){e.focus()}_getKeyFromEvent(e){return i.ACCEPTABLE_KEYS.includes(e.key)?e.key:i.KEYCODE_MAP[e.keyCode]}_determineMoveTarget(e){const t=this._adapter.getFocusedOrSelectedStep();if(t)switch(e){case i.strings.ARROW_RIGHT_KEY:return this._adapter.getStep(t.index+1);case i.strings.ARROW_LEFT_KEY:return this._adapter.getStep(t.index-1);case i.strings.HOME_KEY:return this._adapter.getStep(0);case i.strings.END_KEY:return this._adapter.getLastStep()}return t}_determineVerticalMoveTarget(e){const t=this._adapter.getFocusedOrSelectedStep();if(t)switch(e){case i.strings.ARROW_DOWN_KEY:return this._adapter.getStep(t.index+1);case i.strings.ARROW_UP_KEY:return this._adapter.getStep(t.index-1);case i.strings.HOME_KEY:return this._adapter.getStep(0);case i.strings.END_KEY:return this._adapter.getLastStep()}return t}_onSlotChange(e){this.destroy(),this.initialize()}_onStepExpandedContentFocusIn(e){const t=this._adapter.getStep(e.detail.index+1);t&&(t.tabIndex=0),e.detail.tabIndex=0}_onStepExpandedContentFocusOut(e){const t=e.target,r=this._adapter.getStep(t.index+1);r&&(r.tabIndex=-1),t.tabIndex=-1}_onStepFocus(){this._adapter.toggleRootClass(i.classes.FOCUSED,!0)}_onStepBlur(){this._adapter.toggleRootClass(i.classes.FOCUSED,!1)}_patchBrowser(){new R().SAFARI()&&this._adapter.patchSafari()}}const pe=`<template>
  <div class="forge-stepper" part="root">
    <slot></slot>
  </div>
</template>
`,de=":host{display:block}:host([hidden]){display:none}:host([vertical]) .forge-stepper{display:unset;align-items:unset;white-space:unset;overflow:unset}.forge-stepper{display:flex;align-items:center;white-space:nowrap;overflow:hidden}.forge-stepper:not(.vertical) ::slotted(*){display:flex;align-items:center;position:relative;min-width:112px}.forge-stepper.fixed ::slotted(*){flex:1}.forge-stepper.alternative{align-items:flex-start}.forge-stepper.alternative ::slotted(*){min-width:160px}.forge-stepper.align-left{justify-content:flex-start}.forge-stepper.align-center{justify-content:center}.forge-stepper.align-right{justify-content:flex-end}";var _e=Object.defineProperty,he=Object.getOwnPropertyDescriptor,E=(l,e,t,r)=>{for(var o=r>1?void 0:r?he(e,t):e,h=l.length-1,f;h>=0;h--)(f=l[h])&&(o=(r?f(e,t,o):f(o))||o);return r&&o&&_e(e,t,o),o};let _=class extends C{static get observedAttributes(){return[i.attributes.SELECTED_INDEX,i.attributes.LINEAR,i.attributes.ALTERNATIVE,i.attributes.LAYOUT_MODE,i.attributes.LAYOUT_ALIGN,i.attributes.DISABLED,i.attributes.VERTICAL]}constructor(){super(),N(this,pe,de),this._core=new ce(new le(this))}async connectedCallback(){await w(this),this._core.initialize()}disconnectedCallback(){this._core.destroy()}attributeChangedCallback(l,e,t){switch(l){case i.attributes.SELECTED_INDEX:this.selectedIndex=Number(t)||0;break;case i.attributes.LINEAR:this.linear=c(t);break;case i.attributes.ALTERNATIVE:this.alternative=c(t);break;case i.attributes.LAYOUT_MODE:this.layoutMode=t;break;case i.attributes.LAYOUT_ALIGN:this.layoutAlign=t;break;case i.attributes.DISABLED:this.disabled=c(t);break;case i.attributes.VERTICAL:this.vertical=c(t);break}}};E([a()],_.prototype,"steps",2);E([a()],_.prototype,"selectedIndex",2);E([a()],_.prototype,"linear",2);E([a()],_.prototype,"alternative",2);E([a()],_.prototype,"layoutMode",2);E([a()],_.prototype,"layoutAlign",2);E([a()],_.prototype,"disabled",2);E([a()],_.prototype,"vertical",2);_=E([S({name:i.elementName,dependencies:[p]})],_);
