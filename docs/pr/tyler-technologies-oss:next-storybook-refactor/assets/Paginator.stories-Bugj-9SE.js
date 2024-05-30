import{C as m,D as b,L as y,i as p,x as r,b as v,T as d,v as T,B as I,w as x,h as f,U as z,c as N,g as B}from"./constants-D0Eltsy8.js";import{n as O,o as F,p as C,q as R}from"./index-CsmkSriH.js";import{B as G,F as l}from"./base-adapter-BFL5IvdM.js";import{I as D}from"./icon-button-CMwP1Xva.js";import{S as U}from"./select-C-S1dZZY.js";import"./linear-progress-ePNFw6tT.js";import"./list-CqyEZ-EU.js";import"./popover-D-4moE3V.js";import"./overlay-ax6hnCXS.js";import"./index-Dh0vMUMR.js";import"./skeleton-CqMXvMAT.js";import{I as k}from"./icon-C1xqk65D.js";import"./base-field-DASe_4uB.js";import"./focus-indicator-D_TCP8aG.js";import"./label-BgftP6_b.js";import"./button-ByIHzhvH.js";import"./state-layer-B1BJyO_z.js";import"./checkbox-dwCFPW2c.js";import"./switch-DxVxOG0G.js";import{a as w}from"./tooltip-DQJHF6_l.js";const A=`${m}paginator`,L={PAGE_INDEX:"page-index",PAGE_SIZE:"page-size",OFFSET:"offset",TOTAL:"total",PAGE_SIZE_OPTIONS:"page-size-options",LABEL:"label",FIRST_LAST:"first-last",FIRST:"first",DISABLED:"disabled",ALTERNATIVE:"alternative"},H={...L},M={LABEL:".label > slot[name=label]",PAGE_SIZE_SELECT:".page-size-options",RANGE_LABEL:".range-label > slot[name=range-label]",FIRST_PAGE_BUTTON:".first-page",FIRST_PAGE_CONTAINER:"#first-page-container",PREVIOUS_PAGE_BUTTON:".previous-page",PREVIOUS_PAGE_CONTAINER:"#previous-page-container",NEXT_PAGE_BUTTON:".next-page",NEXT_PAGE_CONTAINER:"#next-page-container",LAST_PAGE_BUTTON:".last-page",LAST_PAGE_CONTAINER:"#last-page-container",RANGE_LABEL_ALTERNATIVE:".alternative-range-label > slot[name=alternative-range-label]"},Z={CHANGE:`${A}-change`},$={DEFAULT_PAGE_INDEX:0,DEFAULT_TOTAL:0,DEFAULT_PAGE_SIZE:25,DEFAULT_PAGE_SIZE_OPTIONS:[5,15,25,50,100]},X={DEFAULT_LABEL:"Rows per page:",RANGE_SEPARATOR_LABEL:"of"},a={elementName:A,observedAttributes:L,attributes:H,selectors:M,events:Z,numbers:$,strings:X};class j{constructor(t){this._adapter=t,this._pageIndex=a.numbers.DEFAULT_PAGE_INDEX,this._pageSize=a.numbers.DEFAULT_PAGE_SIZE,this._offset=0,this._total=a.numbers.DEFAULT_TOTAL,this._pageSizeOptions=a.numbers.DEFAULT_PAGE_SIZE_OPTIONS.map(e=>({label:`${e}`,value:`${e}`})),this._label=a.strings.DEFAULT_LABEL,this._firstLast=!1,this._first=!1,this._disabled=!1,this._alternative=!1,this._firstPageListener=this._onFirstPage.bind(this),this._previousPageListener=this._onPreviousPage.bind(this),this._nextPageListener=this._onNextPage.bind(this),this._lastPageListener=this._onLastPage.bind(this),this._pageSizeListener=this._onPageSizeChanged.bind(this)}initialize(){this._updateRangeLabel(),this._adapter.setLabel(this._label),this._adapter.setPageSizeOptions(this._pageSizeOptions),this._adapter.setPageSize(this._pageSize),this._attachListeners(),this._toggleFirstLastButtons(),this._syncInteractionState()}focus(t){this._adapter.setFocus(t)}_attachListeners(){this._adapter.attachPageSizeChangeListener(this._pageSizeListener),this._adapter.attachFirstPageListener(this._firstPageListener),this._adapter.attachPreviousPageListener(this._previousPageListener),this._adapter.attachNextPageListener(this._nextPageListener),this._adapter.attachLastPageListener(this._lastPageListener)}_onFirstPage(t){if(t.stopPropagation(),!this._hasFirstPage())return;const e=0;this._dispatchChangeEvent("first-page",{pageIndex:e})&&this._applyPageIndex(e)}_onPreviousPage(t){if(t.stopPropagation(),!this._hasPreviousPage())return;const e=this._pageIndex-1;this._dispatchChangeEvent("previous-page",{pageIndex:e})&&this._applyPageIndex(e)}_onNextPage(t){if(t.stopPropagation(),!this._hasNextPage())return;const e=this._pageIndex+1;this._dispatchChangeEvent("next-page",{pageIndex:e})&&this._applyPageIndex(e)}_onLastPage(t){if(t.stopPropagation(),!this._hasLastPage())return;const e=this._getMaxPages();this._dispatchChangeEvent("last-page",{pageIndex:e})&&this._applyPageIndex(e)}_onPageSizeChanged(t){t.stopPropagation();const e=Number(t.detail);this._dispatchChangeEvent("page-size",{pageIndex:0,pageSize:e})?(this._applyPageIndex(0),this._applyPageSize(e)):t.preventDefault()}_dispatchChangeEvent(t,{pageSize:e=this._pageSize,pageIndex:s=this._pageIndex}={}){const i=s*e,h={type:t,pageSize:e,pageIndex:s,offset:i},_=new CustomEvent(a.events.CHANGE,{detail:h,bubbles:!0,cancelable:!0});return this._adapter.dispatchHostEvent(_),!_.defaultPrevented}_getMaxPages(){return Math.ceil(this._total/this._pageSize)-1}_updateRangeLabel(){let t;if(typeof this._rangeLabelCallback=="function"){const e={pageSize:this._pageSize,pageIndex:this._pageIndex,offset:this._offset,pageStart:this._pageIndex*this._pageSize+1,pageEnd:Math.min((this._pageIndex+1)*this._pageSize,this._total),total:this._total};t=this._rangeLabelCallback.call(null,e)}else if(this.pageSize>1){const e=this._pageIndex*this._pageSize,i=(Math.floor(e/this._pageSize)||0)*this._pageSize+1,h=e<this._total?Math.min(e+this._pageSize,this._total):e+this._pageSize;t=`${i}-${h} ${a.strings.RANGE_SEPARATOR_LABEL} ${this._total}`}else t=`${this._pageIndex+1} ${a.strings.RANGE_SEPARATOR_LABEL} ${this._total}`;this._adapter.setRangeLabel(t)}_syncInteractionState(){this._adapter.setFirstPageButtonEnabled(!0),this._adapter.setPreviousPageButtonEnabled(!0),this._adapter.setNextPageButtonEnabled(!0),this._adapter.setLastPageButtonEnabled(!0);const t=[];this._hasFirstPage()||t.push("first"),this._hasPreviousPage()||t.push("previous"),this._hasNextPage()||t.push("next"),this._hasLastPage()||t.push("last"),this._adapter.tryDisableFields(t)}_toggleFirstLastButtons(){this._toggleFirstButton(),this._firstLast?this._adapter.hasLastPageButton()||this._adapter.showLastPageButton():this._adapter.hasLastPageButton()&&this._adapter.hideLastPageButton()}_toggleFirstButton(){this._first||this._firstLast?this._adapter.hasFirstPageButton()||this._adapter.showFirstPageButton():this._adapter.hasFirstPageButton()&&this._adapter.hideFirstPageButton()}_hasFirstPage(){return this._hasPreviousPage()}_hasPreviousPage(){return this._pageIndex>0&&this._pageSize>0}_hasNextPage(){const t=this._getMaxPages();return this._pageIndex<t&&this._pageSize>0}_hasLastPage(){return this._hasNextPage()}_computePageIndexFromOffset(t){t>=this._total&&(this._total>=this._pageSize?t=this._total-this._pageSize:t=0);const e=Math.min(Math.max(t,0),this._total),s=Math.floor(e/this._pageSize);this._applyPageIndex(s)}_computeOffset(){this._total>0&&(this._offset=this._pageIndex*this._pageSize)}_applyPageIndex(t){this._pageIndex=t,this._computeOffset(),this._updateRangeLabel(),this._syncInteractionState(),this._adapter.toggleHostAttribute(a.attributes.PAGE_INDEX,this._pageIndex!=null,this._pageIndex.toString())}_applyPageSize(t){this._pageSize=t,this._adapter.setPageSize(this._pageSize),this._computeOffset(),this._updateRangeLabel(),this._syncInteractionState()}_applyTotal(t){this._total=t,this._updateRangeLabel(),this._offset>0&&this._total>0&&this._computePageIndexFromOffset(this._offset),this._syncInteractionState()}_applyDisabled(t){this._disabled=t,t?(this._adapter.setPageSizeSelectEnabled(!1),this._adapter.setFirstPageButtonEnabled(!1),this._adapter.setPreviousPageButtonEnabled(!1),this._adapter.setNextPageButtonEnabled(!1),this._adapter.setLastPageButtonEnabled(!1)):(this._adapter.setPageSizeSelectEnabled(!0),this._syncInteractionState())}get pageIndex(){return this._pageIndex}set pageIndex(t){this._pageIndex!==t&&(b(t)?this._applyPageIndex(t):this._adapter.removeHostAttribute(a.attributes.PAGE_INDEX))}get pageSize(){return this._pageSize}set pageSize(t){this._pageSize!==t&&(this._applyPageSize(t),this._adapter.setHostAttribute(a.attributes.PAGE_SIZE,`${this._pageSize}`))}get offset(){return this._offset}set offset(t){this._offset!==t&&(this._offset=t,this._computePageIndexFromOffset(t))}get total(){return this._total}set total(t){this._total!==t&&(this._applyTotal(t),this._adapter.setHostAttribute(a.attributes.TOTAL,`${this._total}`))}get pageSizeOptions(){return this._pageSizeOptions.map(t=>Number(t.value))}set pageSizeOptions(t){if(y(t)&&t.length){if(this._pageSizeOptions=t.map(e=>({label:e.toString(),value:e.toString()})).sort((e,s)=>p(e.value)-p(s.value)),this._adapter.setPageSizeOptions(this._pageSizeOptions),this._adapter.attachPageSizeChangeListener(this._pageSizeListener),this._adapter.setPageSizeVisibility(!0),b(this._pageSize)&&this._pageSizeOptions.length&&!this._pageSizeOptions.find(e=>p(e.value)===this._pageSize)){const e=p(this._pageSizeOptions[0].value);this._applyPageSize(e)}}else t!=null&&t.length||(this._adapter.detachPageSizeChangeListener(this._pageSizeListener),this._adapter.setPageSizeVisibility(!1))}get label(){return this._label}set label(t){this._label!==t&&(this._label=t,this._adapter.setLabel(this._label),b(this._label)&&this._label.length?this._adapter.setHostAttribute(a.attributes.LABEL,String(this._label)):this._adapter.removeHostAttribute(a.attributes.LABEL))}get firstLast(){return this._firstLast}set firstLast(t){t=!!t,this._firstLast!==t&&(this._firstLast=t,this._toggleFirstLastButtons(),this._adapter.toggleHostAttribute(a.attributes.FIRST_LAST,this._firstLast))}get first(){return this._first}set first(t){t=!!t,this._first!==t&&(this._first=t,this._toggleFirstButton(),this._adapter.toggleHostAttribute(a.attributes.FIRST,this._first))}get disabled(){return this._disabled}set disabled(t){t=!!t,this._disabled!==t&&(this._applyDisabled(t),this._adapter.toggleHostAttribute(a.attributes.DISABLED,this._disabled))}get alternative(){return this._alternative}set alternative(t){t=!!t,t!==this._alternative&&(this._alternative=t,this._adapter.toggleHostAttribute(a.attributes.ALTERNATIVE,this._alternative))}get rangeLabelCallback(){return this._rangeLabelCallback}set rangeLabelCallback(t){this._rangeLabelCallback=t,this._updateRangeLabel()}}class V extends G{constructor(t){super(t),this._labelElement=r(t,a.selectors.LABEL),this._pageSizeSelect=r(t,a.selectors.PAGE_SIZE_SELECT),this._rangeLabel=r(t,a.selectors.RANGE_LABEL),this._rangeLabelAlternative=r(t,a.selectors.RANGE_LABEL_ALTERNATIVE),this._firstPageButton=r(t,a.selectors.FIRST_PAGE_BUTTON),this._firstPageContainer=r(t,a.selectors.FIRST_PAGE_CONTAINER),this._previousPageButton=r(t,a.selectors.PREVIOUS_PAGE_BUTTON),this._previousPageContainer=r(t,a.selectors.PREVIOUS_PAGE_CONTAINER),this._nextPageButton=r(t,a.selectors.NEXT_PAGE_BUTTON),this._nextPageContainer=r(t,a.selectors.NEXT_PAGE_CONTAINER),this._lastPageButton=r(t,a.selectors.LAST_PAGE_BUTTON),this._lastPageContainer=r(t,a.selectors.LAST_PAGE_CONTAINER)}setLabel(t){this._labelElement.textContent=t}setPageSizeOptions(t){v(this._pageSizeSelect),this._pageSizeSelect.options=t}setPageSize(t){this._pageSizeSelect.value=t.toString()}setRangeLabel(t){this._rangeLabel.innerText=t,this._rangeLabelAlternative.innerText=t}hasFirstPageButton(){return!!r(this._component,a.selectors.FIRST_PAGE_BUTTON)}showFirstPageButton(){this._firstPagePlaceholder=d(this._component,!0,a.elementName,a.selectors.FIRST_PAGE_CONTAINER,this._firstPageContainer,this._firstPagePlaceholder)}hideFirstPageButton(){this._firstPagePlaceholder=d(this._component,!1,a.elementName,a.selectors.FIRST_PAGE_CONTAINER,this._firstPageContainer,this._firstPagePlaceholder)}hasLastPageButton(){return!!r(this._component,a.selectors.LAST_PAGE_BUTTON)}showLastPageButton(){this._lastPagePlaceholder=d(this._component,!0,a.elementName,a.selectors.LAST_PAGE_CONTAINER,this._lastPageContainer,this._lastPagePlaceholder)}hideLastPageButton(){this._lastPagePlaceholder=d(this._component,!1,a.elementName,a.selectors.LAST_PAGE_CONTAINER,this._lastPageContainer,this._lastPagePlaceholder)}attachPageSizeChangeListener(t){this._pageSizeSelect.addEventListener("change",t)}detachPageSizeChangeListener(t){this._pageSizeSelect.removeEventListener("change",t)}attachFirstPageListener(t){this._firstPageButton.addEventListener("click",t)}attachPreviousPageListener(t){this._previousPageButton.addEventListener("click",t)}attachNextPageListener(t){this._nextPageButton.addEventListener("click",t)}attachLastPageListener(t){this._lastPageButton.addEventListener("click",t)}setFirstPageButtonEnabled(t){this._firstPageButton.disabled=!t}setPreviousPageButtonEnabled(t){this._previousPageButton.disabled=!t}setNextPageButtonEnabled(t){this._nextPageButton.disabled=!t}setLastPageButtonEnabled(t){this._lastPageButton.disabled=!t}setPageSizeSelectEnabled(t){this._pageSizeSelect.disabled=!t}setPageSizeVisibility(t){this._pageSizeSelect.hidden=!t}setFocus(t){this._tryFocus([this._pageSizeSelect,this._firstPageButton,this._previousPageButton,this._nextPageButton,this._lastPageButton],t)}tryDisableFields(t){const e={first:()=>this.setFirstPageButtonEnabled(!1),last:()=>this.setLastPageButtonEnabled(!1),previous:()=>this.setPreviousPageButtonEnabled(!1),next:()=>this.setNextPageButtonEnabled(!1)};t.forEach(s=>{var i;return(i=e[s])==null?void 0:i.call(e)})}_tryFocus(t,e){const s=typeof(e==null?void 0:e.preventScroll)=="boolean"?e.preventScroll:!0;for(const i of t)if(i&&i.isConnected&&!i.disabled&&i.style.display!=="none"){i.focus({...e,preventScroll:s});return}}}const K=`<template>
  <div class="forge-paginator" part="root">
    <div class="container" part="container">
      <div class="label" part="label" id="label">
        <slot name="label"></slot>
      </div>
      
      <forge-select class="page-size-options" aria-labelledby="label" label-position="none" density="extra-small" part="page-size-options"></forge-select>

      <div class="range-label" part="range-label">
        <slot name="range-label"></slot>
      </div>
    </div>

    <div class="actions" part="actions">
      <div id="first-page-container">
        <forge-icon-button class="first-page" part="first-page-button" part="first-page-button-element">
          <forge-icon name="first_page" part="first-page-icon"></forge-icon>
        </forge-icon-button>
        <forge-tooltip type="label" placement="top">
          <slot name="first-page-tooltip">Go to the first page</slot>
        </forge-tooltip>
      </div>

      <div id="previous-page-container">
        <forge-icon-button class="previous-page" part="previous-page-button" part="previous-page-button-element">
          <forge-icon name="keyboard_arrow_left" part="previous-page-button-icon"></forge-icon>
        </forge-icon-button>
        <forge-tooltip type="label" placement="top">
          <slot name="previous-page-tooltip">Go to the previous page</slot>
        </forge-tooltip>
      </div>

      <div class="alternative-range-label" part="alternative-range-label">
        <slot name="alternative-range-label"></slot>
      </div>

      <div id="next-page-container">
        <forge-icon-button class="next-page" part="next-page-button" part="next-page-button-element">
          <forge-icon name="keyboard_arrow_right" part="next-page-icon"></forge-icon>
        </forge-icon-button>
        <forge-tooltip type="label" placement="top">
          <slot name="next-page-tooltip">Go to the next page</slot>
        </forge-tooltip>
      </div>

      <div id="last-page-container">
        <forge-icon-button class="last-page" part="last-page-button" part="last-page-button-element">
          <forge-icon name="last_page" part="last-page-icon"></forge-icon>
        </forge-icon-button>
        <forge-tooltip type="label" placement="top">
          <slot name="last-page-tooltip">Go to the last page</slot>
        </forge-tooltip>
      </div>
    </div>
  </div>
</template>`,q=':host{display:block}:host([hidden]){display:none}.forge-paginator{display:flex;gap:var(--forge-spacing-xsmall, 8px)}.container{display:flex;gap:var(--forge-spacing-medium, 16px);align-items:center}.label,.range-label,.alternative-range-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-label1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-label1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-font-size-scale, .75)));font-weight:var(--forge-typography-label1-font-weight, 400);line-height:var(--forge-typography-label1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-label1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-label1-text-transform, inherit);text-decoration:var(--forge-typography-label1-text-decoration, inherit)}.actions{display:flex;align-items:center}.alternative-range-label{display:none}:host([alternative]) .alternative-range-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, .875)));font-weight:var(--forge-typography-body1-font-weight, 400);line-height:var(--forge-typography-body1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-body1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-body1-text-transform, inherit);text-decoration:var(--forge-typography-body1-text-decoration, inherit);display:inline-block}:host([alternative]) .container{display:none}:host([alternative]) .actions{width:100%;justify-content:var(--forge-paginator-alternative-alignment, start)}';var J=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,o=(g,t,e,s)=>{for(var i=s>1?void 0:s?Q(t,e):t,h=g.length-1,_;h>=0;h--)(_=g[h])&&(i=(s?_(t,e,i):_(i))||i);return s&&i&&J(t,e,i),i};let n=class extends I{static get observedAttributes(){return Object.values(a.observedAttributes)}constructor(){super(),k.define([O,F,C,R]),x(this,K,q),this._foundation=new j(new V(this))}connectedCallback(){this._foundation.initialize()}attributeChangedCallback(g,t,e){switch(g){case a.observedAttributes.PAGE_INDEX:this.pageIndex=p(e)??a.numbers.DEFAULT_PAGE_INDEX;break;case a.observedAttributes.PAGE_SIZE:this.pageSize=p(e)??a.numbers.DEFAULT_PAGE_SIZE;break;case a.observedAttributes.OFFSET:this.offset=p(e);break;case a.observedAttributes.TOTAL:this.total=p(e)??a.numbers.DEFAULT_TOTAL;break;case a.observedAttributes.PAGE_SIZE_OPTIONS:this.pageSizeOptions=z(e)??a.numbers.DEFAULT_PAGE_SIZE_OPTIONS;break;case a.observedAttributes.LABEL:this.label=e;break;case a.observedAttributes.FIRST_LAST:this.firstLast=f(e);break;case a.observedAttributes.FIRST:this.first=f(e);break;case a.observedAttributes.DISABLED:this.disabled=f(e);break;case a.observedAttributes.ALTERNATIVE:this.alternative=f(e);break}}focus(g){this._foundation.focus(g)}};o([l()],n.prototype,"pageIndex",2);o([l()],n.prototype,"pageSize",2);o([l()],n.prototype,"offset",2);o([l()],n.prototype,"total",2);o([l()],n.prototype,"pageSizeOptions",2);o([l()],n.prototype,"label",2);o([l()],n.prototype,"firstLast",2);o([l()],n.prototype,"first",2);o([l()],n.prototype,"disabled",2);o([l()],n.prototype,"alternative",2);o([l()],n.prototype,"rangeLabelCallback",2);n=o([T({name:a.elementName,dependencies:[D,U,w]})],n);const P="forge-paginator",W={title:"Components/Paginator",render:g=>N(P,g),component:P,parameters:{actions:{disable:!0}},argTypes:{...B({tagName:P})},args:{}},c={};var u,E,S;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(S=(E=c.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};const Y=["Demo"],St=Object.freeze(Object.defineProperty({__proto__:null,Demo:c,__namedExportsOrder:Y,default:W},Symbol.toStringTag,{value:"Module"}));export{c as D,St as P};
