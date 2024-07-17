import{r as n,a as o}from"./constants-DjE6emXm.js";class r{constructor(t={}){this._config=t,this._initialize()}get element(){return this._element}destroy(){this.disconnect()}disconnect(){this._element.isConnected&&n(this._element)}_initialize(){var t,i,s,e;if(this._element=this._build(),!this._element)throw new Error(`Invalid component instance: ${this._element}`);this._applyProps(),this._applyStyle(),this._applyAttrs(),(i=(t=this._config.options)==null?void 0:t.parent)==null||i.append(this._element),(s=this._config.options)!=null&&s.children&&this._applyChildren(),(e=this._configure)==null||e.call(this)}_applyProps(){this._config.props&&Object.assign(this._element,this._config.props)}_applyStyle(){var t,i;if((t=this._config.options)!=null&&t.style){const s=Object.keys(this._config.options.style);for(const e of s)(i=this._element)==null||i.style.setProperty(e,this._config.options.style[e])}}_applyAttrs(){var t,i;if((t=this._config.options)!=null&&t.attributes)if(this._config.options.attributes instanceof Map)for(const[s,e]of Array.from(this._config.options.attributes))this._element.setAttribute(s,e);else{const s=Object.keys(this._config.options.attributes);for(const e of s)(i=this._element)==null||i.setAttribute(e,this._config.options.attributes[e])}}_applyChildren(){var t;this._element.hasChildNodes()&&o(this._element),(t=this._config.options)!=null&&t.children&&(typeof this._config.options.children=="string"?this._element.innerHTML=this._config.options.children:this._element.appendChild(this._config.options.children))}}export{r as B};
