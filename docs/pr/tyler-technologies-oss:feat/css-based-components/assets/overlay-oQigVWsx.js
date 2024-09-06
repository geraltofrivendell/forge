import{y as Gt,C as Kt,q as qt,B as Jt,b as et,p as Qt,o as Zt}from"./constants-DjE6emXm.js";import{B as te,c as x}from"./base-adapter-F7QHxK2H.js";import{h as Ct,l as ee,c as ne}from"./focus-indicator-BpCDYqsq.js";import"./index-Dh0vMUMR.js";const oe=["top","right","bottom","left"],V=Math.min,z=Math.max,lt=Math.round,rt=Math.floor,M=e=>({x:e,y:e}),ie={left:"right",right:"left",bottom:"top",top:"bottom"},se={start:"end",end:"start"};function gt(e,t,o){return z(e,V(t,o))}function K(e,t){return typeof e=="function"?e(t):e}function Y(e){return e.split("-")[0]}function it(e){return e.split("-")[1]}function kt(e){return e==="x"?"y":"x"}function vt(e){return e==="y"?"height":"width"}function pt(e){return["top","bottom"].includes(Y(e))?"y":"x"}function wt(e){return kt(pt(e))}function re(e,t,o){o===void 0&&(o=!1);const n=it(e),i=wt(e),s=vt(i);let r=i==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(r=at(r)),[r,at(r)]}function le(e){const t=at(e);return[yt(e),t,yt(t)]}function yt(e){return e.replace(/start|end/g,t=>se[t])}function ae(e,t,o){const n=["left","right"],i=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(e){case"top":case"bottom":return o?t?i:n:t?n:i;case"left":case"right":return t?s:r;default:return[]}}function ce(e,t,o,n){const i=it(e);let s=ae(Y(e),o==="start",n);return i&&(s=s.map(r=>r+"-"+i),t&&(s=s.concat(s.map(yt)))),s}function at(e){return e.replace(/left|right|bottom|top/g,t=>ie[t])}function fe(e){return{top:0,right:0,bottom:0,left:0,...e}}function It(e){return typeof e!="number"?fe(e):{top:e,right:e,bottom:e,left:e}}function ct(e){const{x:t,y:o,width:n,height:i}=e;return{width:n,height:i,top:o,left:t,right:t+n,bottom:o+i,x:t,y:o}}function Pt(e,t,o){let{reference:n,floating:i}=e;const s=pt(t),r=wt(t),l=vt(r),a=Y(t),c=s==="y",p=n.x+n.width/2-i.width/2,h=n.y+n.height/2-i.height/2,m=n[l]/2-i[l]/2;let f;switch(a){case"top":f={x:p,y:n.y-i.height};break;case"bottom":f={x:p,y:n.y+n.height};break;case"right":f={x:n.x+n.width,y:h};break;case"left":f={x:n.x-i.width,y:h};break;default:f={x:n.x,y:n.y}}switch(it(t)){case"start":f[r]-=m*(o&&c?-1:1);break;case"end":f[r]+=m*(o&&c?-1:1);break}return f}const he=async(e,t,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:s=[],platform:r}=o,l=s.filter(Boolean),a=await(r.isRTL==null?void 0:r.isRTL(t));let c=await r.getElementRects({reference:e,floating:t,strategy:i}),{x:p,y:h}=Pt(c,n,a),m=n,f={},d=0;for(let u=0;u<l.length;u++){const{name:b,fn:g}=l[u],{x:_,y:v,data:E,reset:w}=await g({x:p,y:h,initialPlacement:n,placement:m,strategy:i,middlewareData:f,rects:c,platform:r,elements:{reference:e,floating:t}});p=_??p,h=v??h,f={...f,[b]:{...f[b],...E}},w&&d<=50&&(d++,typeof w=="object"&&(w.placement&&(m=w.placement),w.rects&&(c=w.rects===!0?await r.getElementRects({reference:e,floating:t,strategy:i}):w.rects),{x:p,y:h}=Pt(c,m,a)),u=-1)}return{x:p,y:h,placement:m,strategy:i,middlewareData:f}};async function ft(e,t){var o;t===void 0&&(t={});const{x:n,y:i,platform:s,rects:r,elements:l,strategy:a}=e,{boundary:c="clippingAncestors",rootBoundary:p="viewport",elementContext:h="floating",altBoundary:m=!1,padding:f=0}=K(t,e),d=It(f),b=l[m?h==="floating"?"reference":"floating":h],g=ct(await s.getClippingRect({element:(o=await(s.isElement==null?void 0:s.isElement(b)))==null||o?b:b.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:c,rootBoundary:p,strategy:a})),_=h==="floating"?{...r.floating,x:n,y:i}:r.reference,v=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),E=await(s.isElement==null?void 0:s.isElement(v))?await(s.getScale==null?void 0:s.getScale(v))||{x:1,y:1}:{x:1,y:1},w=ct(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:_,offsetParent:v,strategy:a}):_);return{top:(g.top-w.top+d.top)/E.y,bottom:(w.bottom-g.bottom+d.bottom)/E.y,left:(g.left-w.left+d.left)/E.x,right:(w.right-g.right+d.right)/E.x}}const pe=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:n,placement:i,rects:s,platform:r,elements:l,middlewareData:a}=t,{element:c,padding:p=0}=K(e,t)||{};if(c==null)return{};const h=It(p),m={x:o,y:n},f=wt(i),d=vt(f),u=await r.getDimensions(c),b=f==="y",g=b?"top":"left",_=b?"bottom":"right",v=b?"clientHeight":"clientWidth",E=s.reference[d]+s.reference[f]-m[f]-s.floating[d],w=m[f]-s.reference[f],C=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c));let N=C?C[v]:0;(!N||!await(r.isElement==null?void 0:r.isElement(C)))&&(N=l.floating[v]||s.floating[d]);const W=E/2-w/2,J=N/2-u[d]/2-1,Q=V(h[g],J),Z=V(h[_],J),S=Q,tt=N-u[d]-Z,P=N/2-u[d]/2+W,k=gt(S,P,tt),I=!a.arrow&&it(i)!=null&&P!==k&&s.reference[d]/2-(P<S?Q:Z)-u[d]/2<0,B=I?P<S?P-S:P-tt:0;return{[f]:m[f]+B,data:{[f]:k,centerOffset:P-k-B,...I&&{alignmentOffset:B}},reset:I}}}),de=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var o,n;const{placement:i,middlewareData:s,rects:r,initialPlacement:l,platform:a,elements:c}=t,{mainAxis:p=!0,crossAxis:h=!0,fallbackPlacements:m,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:d="none",flipAlignment:u=!0,...b}=K(e,t);if((o=s.arrow)!=null&&o.alignmentOffset)return{};const g=Y(i),_=Y(l)===l,v=await(a.isRTL==null?void 0:a.isRTL(c.floating)),E=m||(_||!u?[at(l)]:le(l));!m&&d!=="none"&&E.push(...ce(l,u,d,v));const w=[l,...E],C=await ft(t,b),N=[];let W=((n=s.flip)==null?void 0:n.overflows)||[];if(p&&N.push(C[g]),h){const S=re(i,r,v);N.push(C[S[0]],C[S[1]])}if(W=[...W,{placement:i,overflows:N}],!N.every(S=>S<=0)){var J,Q;const S=(((J=s.flip)==null?void 0:J.index)||0)+1,tt=w[S];if(tt)return{data:{index:S,overflows:W},reset:{placement:tt}};let P=(Q=W.filter(k=>k.overflows[0]<=0).sort((k,I)=>k.overflows[1]-I.overflows[1])[0])==null?void 0:Q.placement;if(!P)switch(f){case"bestFit":{var Z;const k=(Z=W.map(I=>[I.placement,I.overflows.filter(B=>B>0).reduce((B,Vt)=>B+Vt,0)]).sort((I,B)=>I[1]-B[1])[0])==null?void 0:Z[0];k&&(P=k);break}case"initialPlacement":P=l;break}if(i!==P)return{reset:{placement:P}}}return{}}}};function Lt(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function St(e){return oe.some(t=>e[t]>=0)}const ue=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:o}=t,{strategy:n="referenceHidden",...i}=K(e,t);switch(n){case"referenceHidden":{const s=await ft(t,{...i,elementContext:"reference"}),r=Lt(s,o.reference);return{data:{referenceHiddenOffsets:r,referenceHidden:St(r)}}}case"escaped":{const s=await ft(t,{...i,altBoundary:!0}),r=Lt(s,o.floating);return{data:{escapedOffsets:r,escaped:St(r)}}}default:return{}}}}};async function me(e,t){const{placement:o,platform:n,elements:i}=e,s=await(n.isRTL==null?void 0:n.isRTL(i.floating)),r=Y(o),l=it(o),a=pt(o)==="y",c=["left","top"].includes(r)?-1:1,p=s&&a?-1:1,h=K(t,e);let{mainAxis:m,crossAxis:f,alignmentAxis:d}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return l&&typeof d=="number"&&(f=l==="end"?d*-1:d),a?{x:f*p,y:m*c}:{x:m*c,y:f*p}}const ge=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var o,n;const{x:i,y:s,placement:r,middlewareData:l}=t,a=await me(t,e);return r===((o=l.offset)==null?void 0:o.placement)&&(n=l.arrow)!=null&&n.alignmentOffset?{}:{x:i+a.x,y:s+a.y,data:{...a,placement:r}}}}},ye=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:n,placement:i}=t,{mainAxis:s=!0,crossAxis:r=!1,limiter:l={fn:b=>{let{x:g,y:_}=b;return{x:g,y:_}}},...a}=K(e,t),c={x:o,y:n},p=await ft(t,a),h=pt(Y(i)),m=kt(h);let f=c[m],d=c[h];if(s){const b=m==="y"?"top":"left",g=m==="y"?"bottom":"right",_=f+p[b],v=f-p[g];f=gt(_,f,v)}if(r){const b=h==="y"?"top":"left",g=h==="y"?"bottom":"right",_=d+p[b],v=d-p[g];d=gt(_,d,v)}const u=l.fn({...t,[m]:f,[h]:d});return{...u,data:{x:u.x-o,y:u.y-n}}}}};function q(e){return Ht(e)?(e.nodeName||"").toLowerCase():"#document"}function L(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function F(e){var t;return(t=(Ht(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Ht(e){return e instanceof Node||e instanceof L(e).Node}function R(e){return e instanceof Element||e instanceof L(e).Element}function H(e){return e instanceof HTMLElement||e instanceof L(e).HTMLElement}function Tt(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof L(e).ShadowRoot}function st(e){const{overflow:t,overflowX:o,overflowY:n,display:i}=D(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+o)&&!["inline","contents"].includes(i)}function be(e){return["table","td","th"].includes(q(e))}function dt(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Et(e){const t=xt(),o=R(e)?D(e):e;return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!t&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!t&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function _e(e){let t=$(e);for(;H(t)&&!G(t);){if(Et(t))return t;if(dt(t))return null;t=$(t)}return null}function xt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function G(e){return["html","body","#document"].includes(q(e))}function D(e){return L(e).getComputedStyle(e)}function ut(e){return R(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function $(e){if(q(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Tt(e)&&e.host||F(e);return Tt(t)?t.host:t}function Bt(e){const t=$(e);return G(t)?e.ownerDocument?e.ownerDocument.body:e.body:H(t)&&st(t)?t:Bt(t)}function ot(e,t,o){var n;t===void 0&&(t=[]),o===void 0&&(o=!0);const i=Bt(e),s=i===((n=e.ownerDocument)==null?void 0:n.body),r=L(i);if(s){const l=bt(r);return t.concat(r,r.visualViewport||[],st(i)?i:[],l&&o?ot(l):[])}return t.concat(i,ot(i,[],o))}function bt(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ft(e){const t=D(e);let o=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const i=H(e),s=i?e.offsetWidth:o,r=i?e.offsetHeight:n,l=lt(o)!==s||lt(n)!==r;return l&&(o=s,n=r),{width:o,height:n,$:l}}function At(e){return R(e)?e:e.contextElement}function X(e){const t=At(e);if(!H(t))return M(1);const o=t.getBoundingClientRect(),{width:n,height:i,$:s}=Ft(t);let r=(s?lt(o.width):o.width)/n,l=(s?lt(o.height):o.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const ve=M(0);function Mt(e){const t=L(e);return!xt()||!t.visualViewport?ve:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function we(e,t,o){return t===void 0&&(t=!1),!o||t&&o!==L(e)?!1:t}function U(e,t,o,n){t===void 0&&(t=!1),o===void 0&&(o=!1);const i=e.getBoundingClientRect(),s=At(e);let r=M(1);t&&(n?R(n)&&(r=X(n)):r=X(e));const l=we(s,o,n)?Mt(s):M(0);let a=(i.left+l.x)/r.x,c=(i.top+l.y)/r.y,p=i.width/r.x,h=i.height/r.y;if(s){const m=L(s),f=n&&R(n)?L(n):n;let d=m,u=bt(d);for(;u&&n&&f!==d;){const b=X(u),g=u.getBoundingClientRect(),_=D(u),v=g.left+(u.clientLeft+parseFloat(_.paddingLeft))*b.x,E=g.top+(u.clientTop+parseFloat(_.paddingTop))*b.y;a*=b.x,c*=b.y,p*=b.x,h*=b.y,a+=v,c+=E,d=L(u),u=bt(d)}}return ct({width:p,height:h,x:a,y:c})}function Ee(e){let{elements:t,rect:o,offsetParent:n,strategy:i}=e;const s=i==="fixed",r=F(n),l=t?dt(t.floating):!1;if(n===r||l&&s)return o;let a={scrollLeft:0,scrollTop:0},c=M(1);const p=M(0),h=H(n);if((h||!h&&!s)&&((q(n)!=="body"||st(r))&&(a=ut(n)),H(n))){const m=U(n);c=X(n),p.x=m.x+n.clientLeft,p.y=m.y+n.clientTop}return{width:o.width*c.x,height:o.height*c.y,x:o.x*c.x-a.scrollLeft*c.x+p.x,y:o.y*c.y-a.scrollTop*c.y+p.y}}function xe(e){return Array.from(e.getClientRects())}function $t(e){return U(F(e)).left+ut(e).scrollLeft}function Ae(e){const t=F(e),o=ut(e),n=e.ownerDocument.body,i=z(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),s=z(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let r=-o.scrollLeft+$t(e);const l=-o.scrollTop;return D(n).direction==="rtl"&&(r+=z(t.clientWidth,n.clientWidth)-i),{width:i,height:s,x:r,y:l}}function Oe(e,t){const o=L(e),n=F(e),i=o.visualViewport;let s=n.clientWidth,r=n.clientHeight,l=0,a=0;if(i){s=i.width,r=i.height;const c=xt();(!c||c&&t==="fixed")&&(l=i.offsetLeft,a=i.offsetTop)}return{width:s,height:r,x:l,y:a}}function Ce(e,t){const o=U(e,!0,t==="fixed"),n=o.top+e.clientTop,i=o.left+e.clientLeft,s=H(e)?X(e):M(1),r=e.clientWidth*s.x,l=e.clientHeight*s.y,a=i*s.x,c=n*s.y;return{width:r,height:l,x:a,y:c}}function Rt(e,t,o){let n;if(t==="viewport")n=Oe(e,o);else if(t==="document")n=Ae(F(e));else if(R(t))n=Ce(t,o);else{const i=Mt(e);n={...t,x:t.x-i.x,y:t.y-i.y}}return ct(n)}function Wt(e,t){const o=$(e);return o===t||!R(o)||G(o)?!1:D(o).position==="fixed"||Wt(o,t)}function Pe(e,t){const o=t.get(e);if(o)return o;let n=ot(e,[],!1).filter(l=>R(l)&&q(l)!=="body"),i=null;const s=D(e).position==="fixed";let r=s?$(e):e;for(;R(r)&&!G(r);){const l=D(r),a=Et(r);!a&&l.position==="fixed"&&(i=null),(s?!a&&!i:!a&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||st(r)&&!a&&Wt(e,r))?n=n.filter(p=>p!==r):i=l,r=$(r)}return t.set(e,n),n}function Le(e){let{element:t,boundary:o,rootBoundary:n,strategy:i}=e;const r=[...o==="clippingAncestors"?dt(t)?[]:Pe(t,this._c):[].concat(o),n],l=r[0],a=r.reduce((c,p)=>{const h=Rt(t,p,i);return c.top=z(h.top,c.top),c.right=V(h.right,c.right),c.bottom=V(h.bottom,c.bottom),c.left=z(h.left,c.left),c},Rt(t,l,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function Se(e){const{width:t,height:o}=Ft(e);return{width:t,height:o}}function Te(e,t,o){const n=H(t),i=F(t),s=o==="fixed",r=U(e,!0,s,t);let l={scrollLeft:0,scrollTop:0};const a=M(0);if(n||!n&&!s)if((q(t)!=="body"||st(i))&&(l=ut(t)),n){const h=U(t,!0,s,t);a.x=h.x+t.clientLeft,a.y=h.y+t.clientTop}else i&&(a.x=$t(i));const c=r.left+l.scrollLeft-a.x,p=r.top+l.scrollTop-a.y;return{x:c,y:p,width:r.width,height:r.height}}function mt(e){return D(e).position==="static"}function Dt(e,t){return!H(e)||D(e).position==="fixed"?null:t?t(e):e.offsetParent}function zt(e,t){const o=L(e);if(dt(e))return o;if(!H(e)){let i=$(e);for(;i&&!G(i);){if(R(i)&&!mt(i))return i;i=$(i)}return o}let n=Dt(e,t);for(;n&&be(n)&&mt(n);)n=Dt(n,t);return n&&G(n)&&mt(n)&&!Et(n)?o:n||_e(e)||o}const Re=async function(e){const t=this.getOffsetParent||zt,o=this.getDimensions,n=await o(e.floating);return{reference:Te(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function De(e){return D(e).direction==="rtl"}const Ne={convertOffsetParentRelativeRectToViewportRelativeRect:Ee,getDocumentElement:F,getClippingRect:Le,getOffsetParent:zt,getElementRects:Re,getClientRects:xe,getDimensions:Se,getScale:X,isElement:R,isRTL:De};function ke(e,t){let o=null,n;const i=F(e);function s(){var l;clearTimeout(n),(l=o)==null||l.disconnect(),o=null}function r(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),s();const{left:c,top:p,width:h,height:m}=e.getBoundingClientRect();if(l||t(),!h||!m)return;const f=rt(p),d=rt(i.clientWidth-(c+h)),u=rt(i.clientHeight-(p+m)),b=rt(c),_={rootMargin:-f+"px "+-d+"px "+-u+"px "+-b+"px",threshold:z(0,V(1,a))||1};let v=!0;function E(w){const C=w[0].intersectionRatio;if(C!==a){if(!v)return r();C?r(!1,C):n=setTimeout(()=>{r(!1,1e-7)},1e3)}v=!1}try{o=new IntersectionObserver(E,{..._,root:i.ownerDocument})}catch{o=new IntersectionObserver(E,_)}o.observe(e)}return r(!0),s}function Ie(e,t,o,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=n,c=At(e),p=i||s?[...c?ot(c):[],...ot(t)]:[];p.forEach(g=>{i&&g.addEventListener("scroll",o,{passive:!0}),s&&g.addEventListener("resize",o)});const h=c&&l?ke(c,o):null;let m=-1,f=null;r&&(f=new ResizeObserver(g=>{let[_]=g;_&&_.target===c&&f&&(f.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var v;(v=f)==null||v.observe(t)})),o()}),c&&!a&&f.observe(c),f.observe(t));let d,u=a?U(e):null;a&&b();function b(){const g=U(e);u&&(g.x!==u.x||g.y!==u.y||g.width!==u.width||g.height!==u.height)&&o(),u=g,d=requestAnimationFrame(b)}return o(),()=>{var g;p.forEach(_=>{i&&_.removeEventListener("scroll",o),s&&_.removeEventListener("resize",o)}),h==null||h(),(g=f)==null||g.disconnect(),f=null,a&&cancelAnimationFrame(d)}}const He=ge,Be=ye,Fe=de,Me=ue,$e=pe,We=(e,t,o)=>{const n=new Map,i={platform:Ne,...o},s={...i.platform,_c:n};return he(e,t,{...i,platform:s})},Yt=["top-start","top","top-end","left-start","left","left-end","right-start","right","right-end"];class nt{constructor(t,o,n=0,i=0){this.x=t,this.y=o,this.height=n,this.width=i}getBoundingClientRect(){return{x:this.x,y:this.y,top:this.y,left:this.x,bottom:this.y,right:this.x,width:this.height,height:this.width,toJSON(){}}}static fromElement(t){const o=t.getBoundingClientRect();return new nt(o.left,o.top,o.height,o.width)}static fromEvent(t){if(t instanceof MouseEvent)return new nt(t.clientX,t.clientY);if(t instanceof TouchEvent)return new nt(t.touches[0].clientX,t.touches[0].clientY);throw new Error("Unsupported event type")}}async function ze({element:e,anchorElement:t,placement:o="bottom",offset:n=!1,offsetOptions:i,strategy:s="fixed",apply:r=!0,flip:l=!0,flipOptions:a={fallbackPlacements:Yt,fallbackStrategy:"initialPlacement"},shift:c=!0,shiftOptions:p,hide:h=!1,hideOptions:m,arrowElement:f,arrowOptions:d={}}){var E,w;const u=[];n&&u.push(He(i)),c&&u.push(Be(p)),l&&u.push(Fe(a)),h&&u.push(Me(m)),f&&u.push($e({...d,element:f}));const{x:b,y:g,placement:_,middlewareData:v}=await We(t,e,{strategy:s,placement:o,middleware:u});if(r){const C={left:"0",top:"0",translate:`${Ct(b)}px ${Ct(g)}px`};Object.assign(e.style,C),(E=v.hide)!=null&&E.referenceHidden?e.style.display="none":e.style.removeProperty("display")}return{x:b,y:g,hidden:((w=v.hide)==null?void 0:w.referenceHidden)??!1,placement:_,arrow:v.arrow}}const _t=`${Kt}overlay`,Ut={ANCHOR:"anchor",NO_ANCHOR:"no-anchor",OPEN:"open",INLINE:"inline",PLACEMENT:"placement",POSITION_STRATEGY:"position-strategy",HIDE:"hide",PERSISTENT:"persistent",SHIFT:"shift",FLIP:"flip",BOUNDARY:"boundary",FALLBACK_PLACEMENTS:"fallback-placements"},Ye={...Ut,POSITION_PLACEMENT:"position-placement"},jt={OVERLAY:"forge-overlay"},Ue={ROOT:`.${jt.OVERLAY}`},je={LIGHT_DISMISS:`${_t}-light-dismiss`,DESCENDANT_TEST:`${_t}-descendant-test`},Xe={HIDE:"anchor-hidden",FLIP:"auto"},y={elementName:_t,observedAttributes:Ut,attributes:Ye,classes:jt,selectors:Ue,events:je,defaults:Xe},ht=Gt(),j=Symbol("overlayStack"),Ve={left:["right","bottom","top","top-start","top-end","left-start","left-end","right-start","right-end"],"left-start":["left-end","right-start","right-end","bottom","top"],"left-end":["left-start","right-end","right-start","bottom","top","bottom-start","bottom-end"],right:["left","bottom","top","top-start","top-end","left-start","left-end","right-start","right-end"],"right-start":["right-end","left-start","left-end","bottom","top"],"right-end":["right-start","left-end","left-start","bottom","top","bottom-start","bottom-end"],top:["bottom","left","right","bottom-start","left-start","left-end","right-start","right-end"],"top-start":["bottom-start","left","right","left-start","left-end","right-start","right-end"],"top-end":["bottom-end","left","right","right-start","right-end","left-start","left-end"],bottom:["top","left","right","top-start","left-start","left-end","right-start","right-end"],"bottom-start":["top-start","left","right","left-start","left-end","right-start","right-end"],"bottom-end":["top-end","left","right","right-start","right-end","left-start","left-end"]};class Ge extends te{constructor(t){super(t),this._lightDismissController=new AbortController,this._rootElement=qt(t,y.selectors.ROOT)}async show(){!this._component.inline&&ht?(this._rootElement.popover="manual",this._rootElement.showPopover()):this._rootElement.removeAttribute("popover"),T[j].add(this._component)}hide(){var t;this.tryCleanupAutoUpdate(),ht&&this._rootElement.matches(":popover-open")&&(this._rootElement.hidePopover(),this._rootElement.removeAttribute("popover")),this._rootElement.style.removeProperty("top"),this._rootElement.style.removeProperty("left"),this._rootElement.style.removeProperty("display"),(t=this._component.arrowElement)==null||t.removeAttribute("style"),this._component.removeAttribute(y.attributes.POSITION_PLACEMENT),T[j].delete(this._component)}tryHideDescendantOverlays(){this._findDescendantOverlays().filter(o=>!o.persistent).forEach(o=>o.open=!1)}locateAnchorElement(t){return ee(this._component,t)}positionElement({anchorElement:t,strategy:o,placement:n,hide:i,offset:s,shift:r,flip:l,boundary:a,boundaryElement:c,fallbackPlacements:p}){this.tryCleanupAutoUpdate();const h={...s},m=(c||(a?this._component.closest(`#${a}`):null))??"clippingAncestors";this._autoUpdateCleanup=Ie(t,this._rootElement,async()=>{const f={...h};if(this._component.arrowElement){const g=this._component.arrowElementOffset||Math.sqrt(2*this._component.arrowElement.offsetWidth**2)/2;f.mainAxis==null&&(f.mainAxis=0),f.mainAxis+=g}const d=await ze({element:this._rootElement,anchorElement:t,strategy:o,placement:n,hide:i!=="never",shift:r,shiftOptions:{boundary:m},flip:l!=="never",flipOptions:{fallbackStrategy:"bestFit",fallbackPlacements:p??Ve[n]??Yt,crossAxis:l==="cross"||l==="auto",mainAxis:l==="main"||l==="auto"},arrowElement:this._component.arrowElement,offset:!!f,offsetOptions:f}),u=d.placement.split("-")[0],b={top:"bottom",right:"left",bottom:"top",left:"right"}[u];if(b&&this._component.setAttribute(y.attributes.POSITION_PLACEMENT,d.placement),this._component.arrowElement&&d.arrow){const{x:g,y:_}=d.arrow,v=this._component.arrowElement.offsetWidth,{borderWidth:E="0"}=getComputedStyle(this._component.arrowElement),w=parseFloat(E);Object.assign(this._component.arrowElement.style,{top:_!=null?`${_}px`:"",left:g!=null?`${g}px`:"",right:"",bottom:"",[b]:`${-v/2-w}px`})}})}tryCleanupAutoUpdate(){var t;(t=this._autoUpdateCleanup)==null||t.call(this),this._autoUpdateCleanup=void 0}isMostRecentOpenOverlay(){return Array.from(T[j]).at(-1)===this._component}addLightDismissListener(t){this.removeLightDismissListener();const o=i=>{i.key==="Escape"&&this.isMostRecentOpenOverlay()&&(i.preventDefault(),i.stopPropagation(),t("escape"))};this._component.ownerDocument.addEventListener("keydown",o,{signal:this._lightDismissController.signal});const n=i=>{const s=i.composedPath(),r=Array.from(T[j]),l=r.indexOf(this._component),a=s.some(m=>m instanceof T&&r.indexOf(m)>l),c=i.button===2;if(a||c)return;const p=this._component.anchorElement instanceof nt?!1:this._component.anchorElement&&s.includes(this._component.anchorElement),h=s.includes(this._rootElement);!p&&!h&&t("click")};this._component.ownerDocument.addEventListener("pointerup",n,{capture:!0,signal:this._lightDismissController.signal})}removeLightDismissListener(){this._lightDismissController.abort(),this._lightDismissController=new AbortController}_findDescendantOverlays(){const t=Array.from(T[j]),o=t.slice(t.indexOf(this._component)+1).reverse(),n=[];if(o.length){const i=s=>n.push(s.target);this._component.addEventListener(y.events.DESCENDANT_TEST,i),o.forEach(s=>s.dispatchEvent(new CustomEvent(y.events.DESCENDANT_TEST,{bubbles:!0,composed:!0}))),this._component.removeEventListener(y.events.DESCENDANT_TEST,i)}return n}}class Ke{constructor(t){this._adapter=t}initialize(){}}class qe extends Ke{constructor(t){super(t),this._noAnchor=!1,this._open=!1,this._inline=!1,this._placement="bottom",this._positionStrategy="fixed",this._offset={},this._shift=!1,this._hide=y.defaults.HIDE,this._flip=y.defaults.FLIP,this._fallbackPlacements=null,this._persistent=!1,this._arrowElementOffset=0,this._lightDismissListener=this._onLightDismiss.bind(this)}initialize(){this._adapter.tryApplyGlobalConfiguration(["placement","positionStrategy","shift","hide","flip","boundaryElement","fallbackPlacements","persistent"]),!this._noAnchor&&!this._anchorElement&&this._anchor&&(this._anchorElement=this._adapter.locateAnchorElement(this._anchor)),ht||(this.inline=!0),this._adapter.hasHostAttribute(y.attributes.OPEN)&&this._applyOpen(!0)}destroy(){this._open&&this._hideOverlay()}position(){!this._open||this._noAnchor||!this._anchorElement||this._adapter.positionElement({anchorElement:this._anchorElement,strategy:this._positionStrategy,placement:this._placement,hide:this._hide,offset:this._offset,shift:this._shift,flip:this._flip,boundary:this._boundary,boundaryElement:this._boundaryElement,fallbackPlacements:this._fallbackPlacements??void 0})}_onLightDismiss(t){const o={reason:t},n=new CustomEvent(y.events.LIGHT_DISMISS,{bubbles:!1,cancelable:!0,detail:o});this._adapter.dispatchHostEvent(n),!n.defaultPrevented&&this._applyOpen(!1)}_applyOpen(t){this._adapter.isConnected&&(this._open=t,this._open?this._showOverlay():this._hideOverlay(),this._adapter.toggleHostAttribute(y.attributes.OPEN,this._open))}_showOverlay(){this._adapter.show(),this._persistent||this._applyLightDismissListener(),!this._noAnchor&&this._anchorElement&&this.position()}_hideOverlay(){this._adapter.tryHideDescendantOverlays(),this._adapter.hide(),this._adapter.removeLightDismissListener()}_applyLightDismissListener(){this._adapter.addLightDismissListener(this._lightDismissListener)}get anchorElement(){return this._anchorElement}set anchorElement(t){this._anchorElement=t,this._open&&this.position()}get anchor(){return this._anchor}set anchor(t){this._anchor!==t&&(this._anchor=t,this._adapter.isConnected&&(this._anchorElement=this._anchor?this._adapter.locateAnchorElement(this._anchor):null),this._adapter.toggleHostAttribute(y.attributes.ANCHOR,!!this._anchor,this._anchor))}get noAnchor(){return this._noAnchor}set noAnchor(t){t=!!t,this._noAnchor!==t&&(this._noAnchor=t,this._adapter.toggleHostAttribute(y.attributes.NO_ANCHOR,this._noAnchor))}get open(){return this._open}set open(t){t=!!t,this._open!==t&&this._applyOpen(t)}get arrowElement(){return this._arrowElement}set arrowElement(t){this._arrowElement=t,this._open&&this.position()}get arrowElementOffset(){return this._arrowElementOffset}set arrowElementOffset(t){this._arrowElementOffset=t,this._open&&this.position()}get inline(){return this._inline}set inline(t){t=ht?!!t:!0,this._inline!==t&&(this._inline=t,this._adapter.toggleHostAttribute(y.attributes.INLINE,this._inline))}get placement(){return this._placement}set placement(t){this._placement!==t&&(this._placement=t,this._open&&this.position(),this._adapter.setHostAttribute(y.attributes.PLACEMENT,this._placement))}get positionStrategy(){return this._positionStrategy}set positionStrategy(t){this._positionStrategy!==t&&(this._positionStrategy=t,this._open&&this.position(),this._adapter.setHostAttribute(y.attributes.POSITION_STRATEGY,this._positionStrategy))}get offset(){return this._offset}set offset(t){this._offset=t,this._open&&this.position()}get shift(){return this._shift}set shift(t){t=!!t,this._shift!==t&&(this._shift=t,this._open&&this.position(),this._adapter.toggleHostAttribute(y.attributes.SHIFT,this._shift))}get hide(){return this._hide}set hide(t){this._hide!==t&&(this._hide=t??y.defaults.HIDE,this._open&&this.position(),this._adapter.toggleHostAttribute(y.attributes.HIDE,this._hide!==y.defaults.HIDE,String(this._hide)))}get persistent(){return this._persistent}set persistent(t){t=!!t,this._persistent!==t&&(this._persistent=t,this._persistent?this._adapter.removeLightDismissListener():this._open&&this._applyLightDismissListener(),this._adapter.toggleHostAttribute(y.attributes.PERSISTENT,this._persistent))}get flip(){return this._flip}set flip(t){this._flip!==t&&(this._flip=t??y.defaults.FLIP,this._open&&this.position(),this._adapter.toggleHostAttribute(y.attributes.FLIP,this._flip!==y.defaults.FLIP,String(this._flip)))}get boundary(){return this._boundary}set boundary(t){this._boundary!==t&&(this._boundary=t,this._open&&this.position(),this._adapter.toggleHostAttribute(y.attributes.BOUNDARY,!!this._boundary,this._boundary))}get boundaryElement(){return this._boundaryElement}set boundaryElement(t){this._boundaryElement=t,this._open&&this.position()}get fallbackPlacements(){return this._fallbackPlacements}set fallbackPlacements(t){this._fallbackPlacements=t,this._open&&this.position()}}var Je=Object.defineProperty,O=(e,t,o,n)=>{for(var i=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(i=r(t,o,i)||i);return i&&Je(t,o,i),i};class A extends Jt{constructor(){super()}position(){this._core.position()}attributeChangedCallback(t,o,n){switch(t){case y.observedAttributes.ANCHOR:this.anchor=n;break;case y.observedAttributes.NO_ANCHOR:this.noAnchor=et(n);break;case y.observedAttributes.OPEN:this.open=et(n);break;case y.observedAttributes.INLINE:this.inline=et(n);break;case y.observedAttributes.PLACEMENT:this.placement=n;break;case y.observedAttributes.POSITION_STRATEGY:this.positionStrategy=n;break;case y.observedAttributes.HIDE:this.hide=n;break;case y.observedAttributes.PERSISTENT:this.persistent=et(n);break;case y.observedAttributes.SHIFT:this.shift=et(n);break;case y.observedAttributes.FLIP:this.flip=n;break;case y.observedAttributes.BOUNDARY:this.boundary=n;break;case y.observedAttributes.FALLBACK_PLACEMENTS:this.fallbackPlacements=n!=null&&n.trim()?ne(n):null;break}}}O([x()],A.prototype,"anchorElement");O([x()],A.prototype,"anchor");O([x()],A.prototype,"noAnchor");O([x()],A.prototype,"open");O([x()],A.prototype,"inline");O([x()],A.prototype,"placement");O([x()],A.prototype,"positionStrategy");O([x()],A.prototype,"offset");O([x()],A.prototype,"shift");O([x()],A.prototype,"hide");O([x()],A.prototype,"persistent");O([x()],A.prototype,"flip");O([x()],A.prototype,"boundary");O([x()],A.prototype,"boundaryElement");O([x()],A.prototype,"fallbackPlacements");const Qe=`<template>
  <div class="forge-overlay" part="root">
    <slot></slot>
  </div>
</template>
`,Ze=":host{display:contents}:host([hidden]){display:none}.forge-overlay{--_overlay-position: var(--forge-overlay-position, fixed);--_overlay-z-index: var(--forge-overlay-z-index, var(--forge-z-index-popup, 10));--_overlay-height: var(--forge-overlay-height, fit-content);--_overlay-width: var(--forge-overlay-width, fit-content);--_overlay-position-inline-start: var(--forge-overlay-position-inline-start, auto);--_overlay-position-inline-end: var(--forge-overlay-position-inline-end, auto);--_overlay-position-block-start: var(--forge-overlay-position-block-start, auto);--_overlay-position-block-end: var(--forge-overlay-position-block-end, auto)}.forge-overlay{display:none;box-sizing:border-box;height:var(--_overlay-height);width:var(--_overlay-width);border-radius:inherit;position:var(--_overlay-position);top:0;left:0;z-index:var(--_overlay-z-index);background:inherit;color:inherit}:host([position-strategy=absolute]) .forge-overlay{--_overlay-position: var(--forge-overlay-position, absolute)}:host([open][inline]) .forge-overlay{display:block;padding:0;margin:0;border:none;overflow:visible;inset:unset}:host([open]) .forge-overlay:popover-open{display:block;padding:0;margin:0;border:none;overflow:visible;inset:unset}:host([open][no-anchor]) .forge-overlay:popover-open{top:0;right:0;bottom:0;left:0;margin:auto;margin-inline-start:var(--_overlay-position-inline-start);margin-inline-end:var(--_overlay-position-inline-end);margin-block-start:var(--_overlay-position-block-start);margin-block-end:var(--_overlay-position-block-end)}";var tn=Object.defineProperty,en=Object.getOwnPropertyDescriptor,Ot=(e,t,o,n)=>{for(var i=n>1?void 0:n?en(t,o):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&tn(t,o,i),i},Xt,Nt;let T=class extends(Nt=A,Xt=j,Nt){static get observedAttributes(){return Object.values(y.observedAttributes)}constructor(){super(),Qt(this,Qe,Ze),this._core=new qe(new Ge(this))}connectedCallback(){this._core.initialize()}disconnectedCallback(){this._core.destroy()}};T[Xt]=new Set;Ot([x()],T.prototype,"arrowElement",2);Ot([x()],T.prototype,"arrowElementOffset",2);T=Ot([Zt({name:y.elementName})],T);export{y as O,nt as V,T as a};
