import{B as Vt,F as x}from"./base-adapter-BIKyOSkq.js";import{r as Ot,l as Gt,c as Kt}from"./focus-indicator-By3BQe1w.js";import{w as qt,C as Jt,p as Qt,B as Zt,b as et,o as te,n as ee}from"./constants-C96o6uhb.js";import"./index-Dh0vMUMR.js";const ne=["top","right","bottom","left"],V=Math.min,z=Math.max,at=Math.round,rt=Math.floor,M=e=>({x:e,y:e}),oe={left:"right",right:"left",bottom:"top",top:"bottom"},ie={start:"end",end:"start"};function mt(e,t,o){return z(e,V(t,o))}function K(e,t){return typeof e=="function"?e(t):e}function Y(e){return e.split("-")[0]}function it(e){return e.split("-")[1]}function Nt(e){return e==="x"?"y":"x"}function bt(e){return e==="y"?"height":"width"}function pt(e){return["top","bottom"].includes(Y(e))?"y":"x"}function _t(e){return Nt(pt(e))}function se(e,t,o){o===void 0&&(o=!1);const n=it(e),i=_t(e),s=bt(i);let r=i==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(r=lt(r)),[r,lt(r)]}function re(e){const t=lt(e);return[gt(e),t,gt(t)]}function gt(e){return e.replace(/start|end/g,t=>ie[t])}function ae(e,t,o){const n=["left","right"],i=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(e){case"top":case"bottom":return o?t?i:n:t?n:i;case"left":case"right":return t?s:r;default:return[]}}function le(e,t,o,n){const i=it(e);let s=ae(Y(e),o==="start",n);return i&&(s=s.map(r=>r+"-"+i),t&&(s=s.concat(s.map(gt)))),s}function lt(e){return e.replace(/left|right|bottom|top/g,t=>oe[t])}function ce(e){return{top:0,right:0,bottom:0,left:0,...e}}function kt(e){return typeof e!="number"?ce(e):{top:e,right:e,bottom:e,left:e}}function ct(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Ct(e,t,o){let{reference:n,floating:i}=e;const s=pt(t),r=_t(t),a=bt(r),l=Y(t),c=s==="y",p=n.x+n.width/2-i.width/2,h=n.y+n.height/2-i.height/2,m=n[a]/2-i[a]/2;let f;switch(l){case"top":f={x:p,y:n.y-i.height};break;case"bottom":f={x:p,y:n.y+n.height};break;case"right":f={x:n.x+n.width,y:h};break;case"left":f={x:n.x-i.width,y:h};break;default:f={x:n.x,y:n.y}}switch(it(t)){case"start":f[r]-=m*(o&&c?-1:1);break;case"end":f[r]+=m*(o&&c?-1:1);break}return f}const fe=async(e,t,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:s=[],platform:r}=o,a=s.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(t));let c=await r.getElementRects({reference:e,floating:t,strategy:i}),{x:p,y:h}=Ct(c,n,l),m=n,f={},d=0;for(let u=0;u<a.length;u++){const{name:b,fn:g}=a[u],{x:_,y:v,data:E,reset:w}=await g({x:p,y:h,initialPlacement:n,placement:m,strategy:i,middlewareData:f,rects:c,platform:r,elements:{reference:e,floating:t}});p=_??p,h=v??h,f={...f,[b]:{...f[b],...E}},w&&d<=50&&(d++,typeof w=="object"&&(w.placement&&(m=w.placement),w.rects&&(c=w.rects===!0?await r.getElementRects({reference:e,floating:t,strategy:i}):w.rects),{x:p,y:h}=Ct(c,m,l)),u=-1)}return{x:p,y:h,placement:m,strategy:i,middlewareData:f}};async function ft(e,t){var o;t===void 0&&(t={});const{x:n,y:i,platform:s,rects:r,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:p="viewport",elementContext:h="floating",altBoundary:m=!1,padding:f=0}=K(t,e),d=kt(f),b=a[m?h==="floating"?"reference":"floating":h],g=ct(await s.getClippingRect({element:(o=await(s.isElement==null?void 0:s.isElement(b)))==null||o?b:b.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:c,rootBoundary:p,strategy:l})),_=h==="floating"?{...r.floating,x:n,y:i}:r.reference,v=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),E=await(s.isElement==null?void 0:s.isElement(v))?await(s.getScale==null?void 0:s.getScale(v))||{x:1,y:1}:{x:1,y:1},w=ct(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:_,offsetParent:v,strategy:l}):_);return{top:(g.top-w.top+d.top)/E.y,bottom:(w.bottom-g.bottom+d.bottom)/E.y,left:(g.left-w.left+d.left)/E.x,right:(w.right-g.right+d.right)/E.x}}const he=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:n,placement:i,rects:s,platform:r,elements:a,middlewareData:l}=t,{element:c,padding:p=0}=K(e,t)||{};if(c==null)return{};const h=kt(p),m={x:o,y:n},f=_t(i),d=bt(f),u=await r.getDimensions(c),b=f==="y",g=b?"top":"left",_=b?"bottom":"right",v=b?"clientHeight":"clientWidth",E=s.reference[d]+s.reference[f]-m[f]-s.floating[d],w=m[f]-s.reference[f],C=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c));let D=C?C[v]:0;(!D||!await(r.isElement==null?void 0:r.isElement(C)))&&(D=a.floating[v]||s.floating[d]);const W=E/2-w/2,J=D/2-u[d]/2-1,Q=V(h[g],J),Z=V(h[_],J),S=Q,tt=D-u[d]-Z,L=D/2-u[d]/2+W,N=mt(S,L,tt),k=!l.arrow&&it(i)!=null&&L!==N&&s.reference[d]/2-(L<S?Q:Z)-u[d]/2<0,F=k?L<S?L-S:L-tt:0;return{[f]:m[f]+F,data:{[f]:N,centerOffset:L-N-F,...k&&{alignmentOffset:F}},reset:k}}}),pe=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var o,n;const{placement:i,middlewareData:s,rects:r,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:p=!0,crossAxis:h=!0,fallbackPlacements:m,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:d="none",flipAlignment:u=!0,...b}=K(e,t);if((o=s.arrow)!=null&&o.alignmentOffset)return{};const g=Y(i),_=Y(a)===a,v=await(l.isRTL==null?void 0:l.isRTL(c.floating)),E=m||(_||!u?[lt(a)]:re(a));!m&&d!=="none"&&E.push(...le(a,u,d,v));const w=[a,...E],C=await ft(t,b),D=[];let W=((n=s.flip)==null?void 0:n.overflows)||[];if(p&&D.push(C[g]),h){const S=se(i,r,v);D.push(C[S[0]],C[S[1]])}if(W=[...W,{placement:i,overflows:D}],!D.every(S=>S<=0)){var J,Q;const S=(((J=s.flip)==null?void 0:J.index)||0)+1,tt=w[S];if(tt)return{data:{index:S,overflows:W},reset:{placement:tt}};let L=(Q=W.filter(N=>N.overflows[0]<=0).sort((N,k)=>N.overflows[1]-k.overflows[1])[0])==null?void 0:Q.placement;if(!L)switch(f){case"bestFit":{var Z;const N=(Z=W.map(k=>[k.placement,k.overflows.filter(F=>F>0).reduce((F,Xt)=>F+Xt,0)]).sort((k,F)=>k[1]-F[1])[0])==null?void 0:Z[0];N&&(L=N);break}case"initialPlacement":L=a;break}if(i!==L)return{reset:{placement:L}}}return{}}}};function Lt(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Pt(e){return ne.some(t=>e[t]>=0)}const de=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:o}=t,{strategy:n="referenceHidden",...i}=K(e,t);switch(n){case"referenceHidden":{const s=await ft(t,{...i,elementContext:"reference"}),r=Lt(s,o.reference);return{data:{referenceHiddenOffsets:r,referenceHidden:Pt(r)}}}case"escaped":{const s=await ft(t,{...i,altBoundary:!0}),r=Lt(s,o.floating);return{data:{escapedOffsets:r,escaped:Pt(r)}}}default:return{}}}}};async function ue(e,t){const{placement:o,platform:n,elements:i}=e,s=await(n.isRTL==null?void 0:n.isRTL(i.floating)),r=Y(o),a=it(o),l=pt(o)==="y",c=["left","top"].includes(r)?-1:1,p=s&&l?-1:1,h=K(t,e);let{mainAxis:m,crossAxis:f,alignmentAxis:d}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return a&&typeof d=="number"&&(f=a==="end"?d*-1:d),l?{x:f*p,y:m*c}:{x:m*c,y:f*p}}const me=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var o,n;const{x:i,y:s,placement:r,middlewareData:a}=t,l=await ue(t,e);return r===((o=a.offset)==null?void 0:o.placement)&&(n=a.arrow)!=null&&n.alignmentOffset?{}:{x:i+l.x,y:s+l.y,data:{...l,placement:r}}}}},ge=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:n,placement:i}=t,{mainAxis:s=!0,crossAxis:r=!1,limiter:a={fn:b=>{let{x:g,y:_}=b;return{x:g,y:_}}},...l}=K(e,t),c={x:o,y:n},p=await ft(t,l),h=pt(Y(i)),m=Nt(h);let f=c[m],d=c[h];if(s){const b=m==="y"?"top":"left",g=m==="y"?"bottom":"right",_=f+p[b],v=f-p[g];f=mt(_,f,v)}if(r){const b=h==="y"?"top":"left",g=h==="y"?"bottom":"right",_=d+p[b],v=d-p[g];d=mt(_,d,v)}const u=a.fn({...t,[m]:f,[h]:d});return{...u,data:{x:u.x-o,y:u.y-n}}}}};function q(e){return It(e)?(e.nodeName||"").toLowerCase():"#document"}function P(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function B(e){var t;return(t=(It(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function It(e){return e instanceof Node||e instanceof P(e).Node}function I(e){return e instanceof Element||e instanceof P(e).Element}function H(e){return e instanceof HTMLElement||e instanceof P(e).HTMLElement}function St(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof P(e).ShadowRoot}function st(e){const{overflow:t,overflowX:o,overflowY:n,display:i}=R(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+o)&&!["inline","contents"].includes(i)}function ye(e){return["table","td","th"].includes(q(e))}function vt(e){const t=wt(),o=R(e);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!t&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!t&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function be(e){let t=$(e);for(;H(t)&&!G(t);){if(vt(t))return t;t=$(t)}return null}function wt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function G(e){return["html","body","#document"].includes(q(e))}function R(e){return P(e).getComputedStyle(e)}function dt(e){return I(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function $(e){if(q(e)==="html")return e;const t=e.assignedSlot||e.parentNode||St(e)&&e.host||B(e);return St(t)?t.host:t}function Ht(e){const t=$(e);return G(t)?e.ownerDocument?e.ownerDocument.body:e.body:H(t)&&st(t)?t:Ht(t)}function ot(e,t,o){var n;t===void 0&&(t=[]),o===void 0&&(o=!0);const i=Ht(e),s=i===((n=e.ownerDocument)==null?void 0:n.body),r=P(i);return s?t.concat(r,r.visualViewport||[],st(i)?i:[],r.frameElement&&o?ot(r.frameElement):[]):t.concat(i,ot(i,[],o))}function Ft(e){const t=R(e);let o=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const i=H(e),s=i?e.offsetWidth:o,r=i?e.offsetHeight:n,a=at(o)!==s||at(n)!==r;return a&&(o=s,n=r),{width:o,height:n,$:a}}function Et(e){return I(e)?e:e.contextElement}function X(e){const t=Et(e);if(!H(t))return M(1);const o=t.getBoundingClientRect(),{width:n,height:i,$:s}=Ft(t);let r=(s?at(o.width):o.width)/n,a=(s?at(o.height):o.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!a||!Number.isFinite(a))&&(a=1),{x:r,y:a}}const _e=M(0);function Bt(e){const t=P(e);return!wt()||!t.visualViewport?_e:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ve(e,t,o){return t===void 0&&(t=!1),!o||t&&o!==P(e)?!1:t}function U(e,t,o,n){t===void 0&&(t=!1),o===void 0&&(o=!1);const i=e.getBoundingClientRect(),s=Et(e);let r=M(1);t&&(n?I(n)&&(r=X(n)):r=X(e));const a=ve(s,o,n)?Bt(s):M(0);let l=(i.left+a.x)/r.x,c=(i.top+a.y)/r.y,p=i.width/r.x,h=i.height/r.y;if(s){const m=P(s),f=n&&I(n)?P(n):n;let d=m,u=d.frameElement;for(;u&&n&&f!==d;){const b=X(u),g=u.getBoundingClientRect(),_=R(u),v=g.left+(u.clientLeft+parseFloat(_.paddingLeft))*b.x,E=g.top+(u.clientTop+parseFloat(_.paddingTop))*b.y;l*=b.x,c*=b.y,p*=b.x,h*=b.y,l+=v,c+=E,d=P(u),u=d.frameElement}}return ct({width:p,height:h,x:l,y:c})}const we=[":popover-open",":modal"];function xt(e){return we.some(t=>{try{return e.matches(t)}catch{return!1}})}function Ee(e){let{elements:t,rect:o,offsetParent:n,strategy:i}=e;const s=i==="fixed",r=B(n),a=t?xt(t.floating):!1;if(n===r||a&&s)return o;let l={scrollLeft:0,scrollTop:0},c=M(1);const p=M(0),h=H(n);if((h||!h&&!s)&&((q(n)!=="body"||st(r))&&(l=dt(n)),H(n))){const m=U(n);c=X(n),p.x=m.x+n.clientLeft,p.y=m.y+n.clientTop}return{width:o.width*c.x,height:o.height*c.y,x:o.x*c.x-l.scrollLeft*c.x+p.x,y:o.y*c.y-l.scrollTop*c.y+p.y}}function xe(e){return Array.from(e.getClientRects())}function Mt(e){return U(B(e)).left+dt(e).scrollLeft}function Ae(e){const t=B(e),o=dt(e),n=e.ownerDocument.body,i=z(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),s=z(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let r=-o.scrollLeft+Mt(e);const a=-o.scrollTop;return R(n).direction==="rtl"&&(r+=z(t.clientWidth,n.clientWidth)-i),{width:i,height:s,x:r,y:a}}function Oe(e,t){const o=P(e),n=B(e),i=o.visualViewport;let s=n.clientWidth,r=n.clientHeight,a=0,l=0;if(i){s=i.width,r=i.height;const c=wt();(!c||c&&t==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:s,height:r,x:a,y:l}}function Ce(e,t){const o=U(e,!0,t==="fixed"),n=o.top+e.clientTop,i=o.left+e.clientLeft,s=H(e)?X(e):M(1),r=e.clientWidth*s.x,a=e.clientHeight*s.y,l=i*s.x,c=n*s.y;return{width:r,height:a,x:l,y:c}}function Tt(e,t,o){let n;if(t==="viewport")n=Oe(e,o);else if(t==="document")n=Ae(B(e));else if(I(t))n=Ce(t,o);else{const i=Bt(e);n={...t,x:t.x-i.x,y:t.y-i.y}}return ct(n)}function $t(e,t){const o=$(e);return o===t||!I(o)||G(o)?!1:R(o).position==="fixed"||$t(o,t)}function Le(e,t){const o=t.get(e);if(o)return o;let n=ot(e,[],!1).filter(a=>I(a)&&q(a)!=="body"),i=null;const s=R(e).position==="fixed";let r=s?$(e):e;for(;I(r)&&!G(r);){const a=R(r),l=vt(r);!l&&a.position==="fixed"&&(i=null),(s?!l&&!i:!l&&a.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||st(r)&&!l&&$t(e,r))?n=n.filter(p=>p!==r):i=a,r=$(r)}return t.set(e,n),n}function Pe(e){let{element:t,boundary:o,rootBoundary:n,strategy:i}=e;const r=[...o==="clippingAncestors"?xt(t)?[]:Le(t,this._c):[].concat(o),n],a=r[0],l=r.reduce((c,p)=>{const h=Tt(t,p,i);return c.top=z(h.top,c.top),c.right=V(h.right,c.right),c.bottom=V(h.bottom,c.bottom),c.left=z(h.left,c.left),c},Tt(t,a,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Se(e){const{width:t,height:o}=Ft(e);return{width:t,height:o}}function Te(e,t,o){const n=H(t),i=B(t),s=o==="fixed",r=U(e,!0,s,t);let a={scrollLeft:0,scrollTop:0};const l=M(0);if(n||!n&&!s)if((q(t)!=="body"||st(i))&&(a=dt(t)),n){const h=U(t,!0,s,t);l.x=h.x+t.clientLeft,l.y=h.y+t.clientTop}else i&&(l.x=Mt(i));const c=r.left+a.scrollLeft-l.x,p=r.top+a.scrollTop-l.y;return{x:c,y:p,width:r.width,height:r.height}}function ut(e){return R(e).position==="static"}function Rt(e,t){return!H(e)||R(e).position==="fixed"?null:t?t(e):e.offsetParent}function Wt(e,t){const o=P(e);if(xt(e))return o;if(!H(e)){let i=$(e);for(;i&&!G(i);){if(I(i)&&!ut(i))return i;i=$(i)}return o}let n=Rt(e,t);for(;n&&ye(n)&&ut(n);)n=Rt(n,t);return n&&G(n)&&ut(n)&&!vt(n)?o:n||be(e)||o}const Re=async function(e){const t=this.getOffsetParent||Wt,o=this.getDimensions,n=await o(e.floating);return{reference:Te(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function De(e){return R(e).direction==="rtl"}const Ne={convertOffsetParentRelativeRectToViewportRelativeRect:Ee,getDocumentElement:B,getClippingRect:Pe,getOffsetParent:Wt,getElementRects:Re,getClientRects:xe,getDimensions:Se,getScale:X,isElement:I,isRTL:De};function ke(e,t){let o=null,n;const i=B(e);function s(){var a;clearTimeout(n),(a=o)==null||a.disconnect(),o=null}function r(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),s();const{left:c,top:p,width:h,height:m}=e.getBoundingClientRect();if(a||t(),!h||!m)return;const f=rt(p),d=rt(i.clientWidth-(c+h)),u=rt(i.clientHeight-(p+m)),b=rt(c),_={rootMargin:-f+"px "+-d+"px "+-u+"px "+-b+"px",threshold:z(0,V(1,l))||1};let v=!0;function E(w){const C=w[0].intersectionRatio;if(C!==l){if(!v)return r();C?r(!1,C):n=setTimeout(()=>{r(!1,1e-7)},1e3)}v=!1}try{o=new IntersectionObserver(E,{..._,root:i.ownerDocument})}catch{o=new IntersectionObserver(E,_)}o.observe(e)}return r(!0),s}function Ie(e,t,o,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,c=Et(e),p=i||s?[...c?ot(c):[],...ot(t)]:[];p.forEach(g=>{i&&g.addEventListener("scroll",o,{passive:!0}),s&&g.addEventListener("resize",o)});const h=c&&a?ke(c,o):null;let m=-1,f=null;r&&(f=new ResizeObserver(g=>{let[_]=g;_&&_.target===c&&f&&(f.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var v;(v=f)==null||v.observe(t)})),o()}),c&&!l&&f.observe(c),f.observe(t));let d,u=l?U(e):null;l&&b();function b(){const g=U(e);u&&(g.x!==u.x||g.y!==u.y||g.width!==u.width||g.height!==u.height)&&o(),u=g,d=requestAnimationFrame(b)}return o(),()=>{var g;p.forEach(_=>{i&&_.removeEventListener("scroll",o),s&&_.removeEventListener("resize",o)}),h==null||h(),(g=f)==null||g.disconnect(),f=null,l&&cancelAnimationFrame(d)}}const He=me,Fe=ge,Be=pe,Me=de,$e=he,We=(e,t,o)=>{const n=new Map,i={platform:Ne,...o},s={...i.platform,_c:n};return fe(e,t,{...i,platform:s})},zt=["top-start","top","top-end","left-start","left","left-end","right-start","right","right-end"];class nt{constructor(t,o,n=0,i=0){this.x=t,this.y=o,this.height=n,this.width=i}getBoundingClientRect(){return{x:this.x,y:this.y,top:this.y,left:this.x,bottom:this.y,right:this.x,width:this.height,height:this.width,toJSON(){}}}static fromElement(t){const o=t.getBoundingClientRect();return new nt(o.left,o.top,o.height,o.width)}static fromEvent(t){if(t instanceof MouseEvent)return new nt(t.clientX,t.clientY);if(t instanceof TouchEvent)return new nt(t.touches[0].clientX,t.touches[0].clientY);throw new Error("Unsupported event type")}}async function ze({element:e,anchorElement:t,placement:o="bottom",offset:n=!1,offsetOptions:i,strategy:s="fixed",apply:r=!0,flip:a=!0,flipOptions:l={fallbackPlacements:zt,fallbackStrategy:"initialPlacement"},shift:c=!0,shiftOptions:p,hide:h=!1,hideOptions:m,arrowElement:f,arrowOptions:d={}}){var E,w;const u=[];n&&u.push(He(i)),c&&u.push(Fe(p)),a&&u.push(Be(l)),h&&u.push(Me(m)),f&&u.push($e({...d,element:f}));const{x:b,y:g,placement:_,middlewareData:v}=await We(t,e,{strategy:s,placement:o,middleware:u});if(r){const C={left:"0",top:"0",translate:`${Ot(b)}px ${Ot(g)}px`};Object.assign(e.style,C),(E=v.hide)!=null&&E.referenceHidden?e.style.display="none":e.style.removeProperty("display")}return{x:b,y:g,hidden:((w=v.hide)==null?void 0:w.referenceHidden)??!1,placement:_,arrow:v.arrow}}const yt=`${Jt}overlay`,Yt={ANCHOR:"anchor",NO_ANCHOR:"no-anchor",OPEN:"open",INLINE:"inline",PLACEMENT:"placement",POSITION_STRATEGY:"position-strategy",HIDE:"hide",PERSISTENT:"persistent",SHIFT:"shift",FLIP:"flip",BOUNDARY:"boundary",FALLBACK_PLACEMENTS:"fallback-placements"},Ye={...Yt,POSITION_PLACEMENT:"position-placement"},Ut={OVERLAY:"forge-overlay"},Ue={ROOT:`.${Ut.OVERLAY}`},je={LIGHT_DISMISS:`${yt}-light-dismiss`,DESCENDANT_TEST:`${yt}-descendant-test`},Xe={HIDE:"anchor-hidden",FLIP:"auto"},y={elementName:yt,observedAttributes:Yt,attributes:Ye,classes:Ut,selectors:Ue,events:je,defaults:Xe},ht=qt(),j=Symbol("overlayStack"),Ve={left:["right","bottom","top","top-start","top-end","left-start","left-end","right-start","right-end"],"left-start":["left-end","right-start","right-end","bottom","top"],"left-end":["left-start","right-end","right-start","bottom","top","bottom-start","bottom-end"],right:["left","bottom","top","top-start","top-end","left-start","left-end","right-start","right-end"],"right-start":["right-end","left-start","left-end","bottom","top"],"right-end":["right-start","left-end","left-start","bottom","top","bottom-start","bottom-end"],top:["bottom","left","right","bottom-start","left-start","left-end","right-start","right-end"],"top-start":["bottom-start","left","right","left-start","left-end","right-start","right-end"],"top-end":["bottom-end","left","right","right-start","right-end","left-start","left-end"],bottom:["top","left","right","top-start","left-start","left-end","right-start","right-end"],"bottom-start":["top-start","left","right","left-start","left-end","right-start","right-end"],"bottom-end":["top-end","left","right","right-start","right-end","left-start","left-end"]};class Ge extends Vt{constructor(t){super(t),this._lightDismissController=new AbortController,this._rootElement=Qt(t,y.selectors.ROOT)}async show(){!this._component.inline&&ht?(this._rootElement.popover="manual",this._rootElement.showPopover()):this._rootElement.removeAttribute("popover"),T[j].add(this._component)}hide(){var t;this.tryCleanupAutoUpdate(),ht&&this._rootElement.matches(":popover-open")&&(this._rootElement.hidePopover(),this._rootElement.removeAttribute("popover")),this._rootElement.style.removeProperty("top"),this._rootElement.style.removeProperty("left"),this._rootElement.style.removeProperty("display"),(t=this._component.arrowElement)==null||t.removeAttribute("style"),this._component.removeAttribute(y.attributes.POSITION_PLACEMENT),T[j].delete(this._component)}tryHideDescendantOverlays(){this._findDescendantOverlays().filter(o=>!o.persistent).forEach(o=>o.open=!1)}locateAnchorElement(t){return Gt(this._component,t)}positionElement({anchorElement:t,strategy:o,placement:n,hide:i,offset:s,shift:r,flip:a,boundary:l,boundaryElement:c,fallbackPlacements:p}){this.tryCleanupAutoUpdate();const h={...s},m=(c||(l?this._component.closest(`#${l}`):null))??"clippingAncestors";this._autoUpdateCleanup=Ie(t,this._rootElement,async()=>{const f={...h};if(this._component.arrowElement){const g=this._component.arrowElementOffset||Math.sqrt(2*this._component.arrowElement.offsetWidth**2)/2;f.mainAxis==null&&(f.mainAxis=0),f.mainAxis+=g}const d=await ze({element:this._rootElement,anchorElement:t,strategy:o,placement:n,hide:i!=="never",shift:r,shiftOptions:{boundary:m},flip:a!=="never",flipOptions:{fallbackStrategy:"bestFit",fallbackPlacements:p??Ve[n]??zt,crossAxis:a==="cross"||a==="auto",mainAxis:a==="main"||a==="auto"},arrowElement:this._component.arrowElement,offset:!!f,offsetOptions:f}),u=d.placement.split("-")[0],b={top:"bottom",right:"left",bottom:"top",left:"right"}[u];if(b&&this._component.setAttribute(y.attributes.POSITION_PLACEMENT,d.placement),this._component.arrowElement&&d.arrow){const{x:g,y:_}=d.arrow,v=this._component.arrowElement.offsetWidth,{borderWidth:E="0"}=getComputedStyle(this._component.arrowElement),w=parseFloat(E);Object.assign(this._component.arrowElement.style,{top:_!=null?`${_}px`:"",left:g!=null?`${g}px`:"",right:"",bottom:"",[b]:`${-v/2-w}px`})}})}tryCleanupAutoUpdate(){var t;(t=this._autoUpdateCleanup)==null||t.call(this),this._autoUpdateCleanup=void 0}isMostRecentOpenOverlay(){return Array.from(T[j]).at(-1)===this._component}addLightDismissListener(t){this.removeLightDismissListener();const o=i=>{i.key==="Escape"&&this.isMostRecentOpenOverlay()&&(i.preventDefault(),i.stopPropagation(),t("escape"))};this._component.ownerDocument.addEventListener("keydown",o,{signal:this._lightDismissController.signal});const n=i=>{const s=i.composedPath(),r=Array.from(T[j]),a=r.indexOf(this._component),l=s.some(m=>m instanceof T&&r.indexOf(m)>a),c=i.button===2;if(l||c)return;const p=this._component.anchorElement instanceof nt?!1:this._component.anchorElement&&s.includes(this._component.anchorElement),h=s.includes(this._rootElement);!p&&!h&&t("click")};this._component.ownerDocument.addEventListener("pointerup",n,{capture:!0,signal:this._lightDismissController.signal})}removeLightDismissListener(){this._lightDismissController.abort(),this._lightDismissController=new AbortController}_findDescendantOverlays(){const t=Array.from(T[j]),o=t.slice(t.indexOf(this._component)+1).reverse(),n=[];if(o.length){const i=s=>n.push(s.target);this._component.addEventListener(y.events.DESCENDANT_TEST,i),o.forEach(s=>s.dispatchEvent(new CustomEvent(y.events.DESCENDANT_TEST,{bubbles:!0,composed:!0}))),this._component.removeEventListener(y.events.DESCENDANT_TEST,i)}return n}}class Ke{constructor(t){this._adapter=t}initialize(){}}class qe extends Ke{constructor(t){super(t),this._noAnchor=!1,this._open=!1,this._inline=!1,this._placement="bottom",this._positionStrategy="fixed",this._offset={},this._shift=!1,this._hide=y.defaults.HIDE,this._flip=y.defaults.FLIP,this._fallbackPlacements=null,this._persistent=!1,this._arrowElementOffset=0,this._lightDismissListener=this._onLightDismiss.bind(this)}initialize(){this._adapter.tryApplyGlobalConfiguration(["placement","positionStrategy","shift","hide","flip","boundaryElement","fallbackPlacements","persistent"]),!this._noAnchor&&!this._anchorElement&&this._anchor&&(this._anchorElement=this._adapter.locateAnchorElement(this._anchor)),ht||(this.inline=!0),this._adapter.hasHostAttribute(y.attributes.OPEN)&&this._applyOpen(!0)}destroy(){this._open&&this._hideOverlay()}position(){!this._open||this._noAnchor||!this._anchorElement||this._adapter.positionElement({anchorElement:this._anchorElement,strategy:this._positionStrategy,placement:this._placement,hide:this._hide,offset:this._offset,shift:this._shift,flip:this._flip,boundary:this._boundary,boundaryElement:this._boundaryElement,fallbackPlacements:this._fallbackPlacements??void 0})}_onLightDismiss(t){const o={reason:t},n=new CustomEvent(y.events.LIGHT_DISMISS,{bubbles:!1,cancelable:!0,detail:o});this._adapter.dispatchHostEvent(n),!n.defaultPrevented&&this._applyOpen(!1)}_applyOpen(t){this._adapter.isConnected&&(this._open=t,this._open?this._showOverlay():this._hideOverlay(),this._adapter.toggleHostAttribute(y.attributes.OPEN,this._open))}_showOverlay(){this._adapter.show(),this._persistent||this._applyLightDismissListener(),!this._noAnchor&&this._anchorElement&&this.position()}_hideOverlay(){this._adapter.tryHideDescendantOverlays(),this._adapter.hide(),this._adapter.removeLightDismissListener()}_applyLightDismissListener(){this._adapter.addLightDismissListener(this._lightDismissListener)}get anchorElement(){return this._anchorElement}set anchorElement(t){this._anchorElement=t,this._open&&this.position()}get anchor(){return this._anchor}set anchor(t){this._anchor!==t&&(this._anchor=t,this._adapter.isConnected&&(this._anchorElement=this._anchor?this._adapter.locateAnchorElement(this._anchor):null),this._adapter.toggleHostAttribute(y.attributes.ANCHOR,!!this._anchor,this._anchor))}get noAnchor(){return this._noAnchor}set noAnchor(t){t=!!t,this._noAnchor!==t&&(this._noAnchor=t,this._adapter.toggleHostAttribute(y.attributes.NO_ANCHOR,this._noAnchor))}get open(){return this._open}set open(t){t=!!t,this._open!==t&&this._applyOpen(t)}get arrowElement(){return this._arrowElement}set arrowElement(t){this._arrowElement=t,this._open&&this.position()}get arrowElementOffset(){return this._arrowElementOffset}set arrowElementOffset(t){this._arrowElementOffset=t,this._open&&this.position()}get inline(){return this._inline}set inline(t){t=ht?!!t:!0,this._inline!==t&&(this._inline=t,this._adapter.toggleHostAttribute(y.attributes.INLINE,this._inline))}get placement(){return this._placement}set placement(t){this._placement!==t&&(this._placement=t,this._open&&this.position(),this._adapter.setHostAttribute(y.attributes.PLACEMENT,this._placement))}get positionStrategy(){return this._positionStrategy}set positionStrategy(t){this._positionStrategy!==t&&(this._positionStrategy=t,this._open&&this.position(),this._adapter.setHostAttribute(y.attributes.POSITION_STRATEGY,this._positionStrategy))}get offset(){return this._offset}set offset(t){this._offset=t,this._open&&this.position()}get shift(){return this._shift}set shift(t){t=!!t,this._shift!==t&&(this._shift=t,this._open&&this.position(),this._adapter.toggleHostAttribute(y.attributes.SHIFT,this._shift))}get hide(){return this._hide}set hide(t){this._hide!==t&&(this._hide=t??y.defaults.HIDE,this._open&&this.position(),this._adapter.toggleHostAttribute(y.attributes.HIDE,this._hide!==y.defaults.HIDE,String(this._hide)))}get persistent(){return this._persistent}set persistent(t){t=!!t,this._persistent!==t&&(this._persistent=t,this._persistent?this._adapter.removeLightDismissListener():this._open&&this._applyLightDismissListener(),this._adapter.toggleHostAttribute(y.attributes.PERSISTENT,this._persistent))}get flip(){return this._flip}set flip(t){this._flip!==t&&(this._flip=t??y.defaults.FLIP,this._open&&this.position(),this._adapter.toggleHostAttribute(y.attributes.FLIP,this._flip!==y.defaults.FLIP,String(this._flip)))}get boundary(){return this._boundary}set boundary(t){this._boundary!==t&&(this._boundary=t,this._open&&this.position(),this._adapter.toggleHostAttribute(y.attributes.BOUNDARY,!!this._boundary,this._boundary))}get boundaryElement(){return this._boundaryElement}set boundaryElement(t){this._boundaryElement=t,this._open&&this.position()}get fallbackPlacements(){return this._fallbackPlacements}set fallbackPlacements(t){this._fallbackPlacements=t,this._open&&this.position()}}var Je=Object.defineProperty,O=(e,t,o,n)=>{for(var i=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(i=r(t,o,i)||i);return i&&Je(t,o,i),i};class A extends Zt{constructor(){super()}position(){this._foundation.position()}attributeChangedCallback(t,o,n){switch(t){case y.observedAttributes.ANCHOR:this.anchor=n;break;case y.observedAttributes.NO_ANCHOR:this.noAnchor=et(n);break;case y.observedAttributes.OPEN:this.open=et(n);break;case y.observedAttributes.INLINE:this.inline=et(n);break;case y.observedAttributes.PLACEMENT:this.placement=n;break;case y.observedAttributes.POSITION_STRATEGY:this.positionStrategy=n;break;case y.observedAttributes.HIDE:this.hide=n;break;case y.observedAttributes.PERSISTENT:this.persistent=et(n);break;case y.observedAttributes.SHIFT:this.shift=et(n);break;case y.observedAttributes.FLIP:this.flip=n;break;case y.observedAttributes.BOUNDARY:this.boundary=n;break;case y.observedAttributes.FALLBACK_PLACEMENTS:this.fallbackPlacements=n!=null&&n.trim()?Kt(n):null;break}}}O([x()],A.prototype,"anchorElement");O([x()],A.prototype,"anchor");O([x()],A.prototype,"noAnchor");O([x()],A.prototype,"open");O([x()],A.prototype,"inline");O([x()],A.prototype,"placement");O([x()],A.prototype,"positionStrategy");O([x()],A.prototype,"offset");O([x()],A.prototype,"shift");O([x()],A.prototype,"hide");O([x()],A.prototype,"persistent");O([x()],A.prototype,"flip");O([x()],A.prototype,"boundary");O([x()],A.prototype,"boundaryElement");O([x()],A.prototype,"fallbackPlacements");const Qe=`<template>
  <div class="forge-overlay" part="root">
    <slot></slot>
  </div>
</template>
`,Ze=":host{display:contents}:host([hidden]){display:none}.forge-overlay{--_overlay-position: var(--forge-overlay-position, fixed);--_overlay-z-index: var(--forge-overlay-z-index, var(--forge-z-index-popup, 10));--_overlay-height: var(--forge-overlay-height, fit-content);--_overlay-width: var(--forge-overlay-width, fit-content);--_overlay-position-inline-start: var(--forge-overlay-position-inline-start, auto);--_overlay-position-inline-end: var(--forge-overlay-position-inline-end, auto);--_overlay-position-block-start: var(--forge-overlay-position-block-start, auto);--_overlay-position-block-end: var(--forge-overlay-position-block-end, auto)}.forge-overlay{display:none;box-sizing:border-box;height:var(--_overlay-height);width:var(--_overlay-width);border-radius:inherit;position:var(--_overlay-position);top:0;left:0;z-index:var(--_overlay-z-index);background:inherit;color:inherit}:host([position-strategy=absolute]) .forge-overlay{--_overlay-position: var(--forge-overlay-position, absolute)}:host([open][inline]) .forge-overlay{display:block;padding:0;margin:0;border:none;overflow:visible;inset:unset}:host([open]) .forge-overlay:popover-open{display:block;padding:0;margin:0;border:none;overflow:visible;inset:unset}:host([open][no-anchor]) .forge-overlay:popover-open{top:0;right:0;bottom:0;left:0;margin:auto;margin-inline-start:var(--_overlay-position-inline-start);margin-inline-end:var(--_overlay-position-inline-end);margin-block-start:var(--_overlay-position-block-start);margin-block-end:var(--_overlay-position-block-end)}";var tn=Object.defineProperty,en=Object.getOwnPropertyDescriptor,At=(e,t,o,n)=>{for(var i=n>1?void 0:n?en(t,o):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&tn(t,o,i),i},jt,Dt;let T=(Dt=class extends A{static get observedAttributes(){return Object.values(y.observedAttributes)}constructor(){super(),te(this,Qe,Ze),this._foundation=new qe(new Ge(this))}connectedCallback(){this._foundation.initialize()}disconnectedCallback(){this._foundation.destroy()}},jt=j,Dt);T[jt]=new Set;At([x()],T.prototype,"arrowElement",2);At([x()],T.prototype,"arrowElementOffset",2);T=At([ee({name:y.elementName})],T);export{y as O,nt as V,T as a};
