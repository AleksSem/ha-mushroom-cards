function t(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),r=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new o(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:c,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,f=globalThis,_=f.trustedTypes,m=_?_.emptyScript:"",y=f.reactiveElementPolyfillSupport,v=(t,e)=>t,g={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!c(t,e),$={attribute:!0,type:String,converter:g,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const o=s?.call(this);r?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...h(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),r=e.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:g).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:g;this._$Em=s;const o=r.fromAttribute(e,t.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){const o=this.constructor;if(!1===s&&(r=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??b)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==r||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[v("elementProperties")]=new Map,x[v("finalized")]=new Map,y?.({ReactiveElement:x}),(f.reactiveElementVersions??=[]).push("2.1.2");const w=globalThis,A=t=>t,E=w.trustedTypes,S=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+C,z=`<${P}>`,O=document,U=()=>O.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,L=Array.isArray,N="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,R=/>/g,I=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,q=/"/g,D=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),K=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),F=new WeakMap,W=O.createTreeWalker(O,129);function X(t,e){if(!L(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const J=(t,e)=>{const i=t.length-1,s=[];let r,o=2===e?"<svg>":3===e?"<math>":"",n=T;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,d=0;for(;d<i.length&&(n.lastIndex=d,c=n.exec(i),null!==c);)d=n.lastIndex,n===T?"!--"===c[1]?n=H:void 0!==c[1]?n=R:void 0!==c[2]?(D.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=I):void 0!==c[3]&&(n=I):n===I?">"===c[0]?(n=r??T,l=-1):void 0===c[1]?l=-2:(l=n.lastIndex-c[2].length,a=c[1],n=void 0===c[3]?I:'"'===c[3]?q:j):n===q||n===j?n=I:n===H||n===R?n=T:(n=I,r=void 0);const h=n===I&&t[e+1].startsWith("/>")?" ":"";o+=n===T?i+z:l>=0?(s.push(a),i.slice(0,l)+k+i.slice(l)+C+h):i+C+(-2===l?e:h)}return[X(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class Z{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[c,l]=J(t,e);if(this.el=Z.createElement(c,i),W.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=W.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(k)){const e=l[o++],i=s.getAttribute(t).split(C),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:i,ctor:"."===n[1]?et:"?"===n[1]?it:"@"===n[1]?st:tt}),s.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:r}),s.removeAttribute(t));if(D.test(s.tagName)){const t=s.textContent.split(C),e=t.length-1;if(e>0){s.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],U()),W.nextNode(),a.push({type:2,index:++r});s.append(t[e],U())}}}else if(8===s.nodeType)if(s.data===P)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(C,t+1));)a.push({type:7,index:r}),t+=C.length-1}r++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function G(t,e,i=t,s){if(e===K)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const o=M(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=G(t,r._$AS(t,e.values),r,s)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??O).importNode(e,!0);W.currentNode=s;let r=W.nextNode(),o=0,n=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new Y(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new rt(r,this,t)),this._$AV.push(e),a=i[++n]}o!==a?.index&&(r=W.nextNode(),o++)}return W.currentNode=O,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),M(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==K&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>L(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Z.createElement(X(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Q(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new Z(t)),e}k(t){L(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new Y(this.O(U()),this.O(U()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(void 0===r)t=G(this,t,e,0),o=!M(t)||t!==this._$AH&&t!==K,o&&(this._$AH=t);else{const s=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=G(this,s[i+n],e,n),a===K&&(a=this._$AH[n]),o||=!M(a)||a!==this._$AH[n],a===V?t=V:t!==V&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!s&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class st extends tt{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??V)===K)return;const i=this._$AH,s=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==V&&(i===V||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const ot=w.litHtmlPolyfillSupport;ot?.(Z,Y),(w.litHtmlVersions??=[]).push("3.3.2");const nt=globalThis;class at extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new Y(e.insertBefore(U(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return K}}at._$litElement$=!0,at.finalized=!0,nt.litElementHydrateSupport?.({LitElement:at});const ct=nt.litElementPolyfillSupport;ct?.({LitElement:at}),(nt.litElementVersions??=[]).push("4.2.2");const lt=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},dt={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:b},ht=(t=dt,e,i)=>{const{kind:s,metadata:r}=i;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};function pt(t){return(e,i)=>"object"==typeof i?ht(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ut(t){return pt({...t,state:!0,attribute:!1})}const ft={en:{"card.name":"Air Purifier","card.description":"Card for Xiaomi Air Purifier","state.on":"On","state.off":"Off","state.unavailable":"Unavailable","stats.pm25":"PM2.5","stats.temperature":"Temp","stats.humidity":"Humidity","stats.motor_speed":"Motor","filter.life":"Filter Life","filter.used_time":"Used","filter.hours":"h","settings.child_lock":"Child Lock","settings.led":"LED","settings.buzzer":"Sound","aqi.good":"Good","aqi.moderate":"Moderate","aqi.unhealthy_sensitive":"Sensitive","aqi.unhealthy":"Unhealthy","aqi.very_unhealthy":"Very Unhealthy","aqi.hazardous":"Hazardous","editor.entity":"Entity (required)","editor.name":"Name","editor.show_name":"Show Name","editor.show_state":"Show State","editor.show_toolbar":"Show Toolbar","editor.show_stats":"Show Stats","editor.show_settings":"Show Settings","editor.show_filter_info":"Show Filter Info","editor.compact_view":"Compact View","editor.icon_animation":"Icon Animation","editor.entity_overrides":"Entity Overrides","editor.pm25_entity":"PM2.5 Entity","editor.temperature_entity":"Temperature Entity","editor.humidity_entity":"Humidity Entity","editor.motor_speed_entity":"Motor Speed Entity","editor.filter_life_entity":"Filter Life Entity","editor.filter_used_time_entity":"Filter Used Time Entity","editor.favorite_level_entity":"Favorite Level Entity","editor.child_lock_entity":"Child Lock Entity","editor.led_entity":"LED Entity","editor.buzzer_entity":"Buzzer Entity"},ru:{"card.name":"Очиститель воздуха","card.description":"Карточка для Xiaomi Air Purifier","state.on":"Вкл","state.off":"Выкл","state.unavailable":"Недоступен","stats.pm25":"PM2.5","stats.temperature":"Темп.","stats.humidity":"Влажн.","stats.motor_speed":"Мотор","filter.life":"Ресурс фильтра","filter.used_time":"Использован","filter.hours":"ч","settings.child_lock":"Блокировка","settings.led":"Подсветка","settings.buzzer":"Звук","aqi.good":"Отлично","aqi.moderate":"Нормально","aqi.unhealthy_sensitive":"Вредно (чувств.)","aqi.unhealthy":"Вредно","aqi.very_unhealthy":"Очень вредно","aqi.hazardous":"Опасно","editor.entity":"Объект (обязательно)","editor.name":"Название","editor.show_name":"Показать название","editor.show_state":"Показать состояние","editor.show_toolbar":"Показать режимы","editor.show_stats":"Показать датчики","editor.show_settings":"Показать настройки","editor.show_filter_info":"Показать фильтр","editor.compact_view":"Компактный вид","editor.icon_animation":"Анимация иконки","editor.entity_overrides":"Переопределение объектов","editor.pm25_entity":"PM2.5","editor.temperature_entity":"Температура","editor.humidity_entity":"Влажность","editor.motor_speed_entity":"Скорость мотора","editor.filter_life_entity":"Ресурс фильтра","editor.filter_used_time_entity":"Время использования фильтра","editor.favorite_level_entity":"Уровень Favorite","editor.child_lock_entity":"Детский замок","editor.led_entity":"LED индикатор","editor.buzzer_entity":"Звуковой сигнал"}};function _t(t,e="en"){return ft[e]?.[t]??ft.en?.[t]??t}const mt=n`
  :host {
    --apc-spacing: 12px;
    --apc-border-radius: 12px;
    --apc-icon-size: 42px;
    --apc-bg-secondary: var(--secondary-background-color, rgba(111, 111, 111, 0.12));
    --apc-active-color: var(--state-fan-active-color, var(--primary-color));
  }
  ha-card {
    padding: var(--apc-spacing);
    box-sizing: border-box;
    overflow: hidden;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: var(--apc-spacing);
  }
`,yt="air-purifier-card",vt="air-purifier-card-editor",gt=n`
  /* Header */
  .header {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .aqi-badge {
    min-width: 36px;
    height: 24px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 600;
    color: #fff;
    padding: 0 8px;
    flex-shrink: 0;
  }

  /* Stats grid */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
    gap: 8px;
  }
  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    padding: 8px 4px;
    border-radius: 12px;
    background: var(--secondary-background-color, rgba(111, 111, 111, 0.12));
  }
  .stat-value {
    font-size: 14px;
    font-weight: 600;
    color: var(--primary-text-color);
    line-height: 1.2;
  }
  .stat-unit {
    font-size: 10px;
    font-weight: 400;
    color: var(--secondary-text-color);
  }
  .stat-label {
    font-size: 10px;
    color: var(--secondary-text-color);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  /* Preset toolbar */
  .toolbar {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  }
  .toolbar button {
    flex: 1;
    min-width: 0;
    padding: 8px 6px;
    border: none;
    border-radius: 12px;
    background: var(--secondary-background-color, rgba(111, 111, 111, 0.12));
    color: var(--primary-text-color);
    font-size: 11px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    outline: none;
  }
  .toolbar button.active {
    background: var(--state-fan-active-color, var(--primary-color));
    color: var(--text-primary-color, #fff);
  }
  .toolbar button:hover {
    opacity: 0.8;
  }

  /* Favorite slider */
  .favorite-row {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .favorite-label {
    font-size: 13px;
    font-weight: 500;
    color: var(--primary-text-color);
    min-width: 20px;
    text-align: right;
  }

  /* Filter section */
  .filter-section {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .filter-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: var(--secondary-text-color);
  }
  .filter-header .value {
    font-weight: 500;
    color: var(--primary-text-color);
  }

  /* Settings row */
  .settings-row {
    display: flex;
    gap: 8px;
    justify-content: center;
  }

  /* Not found */
  .not-found {
    padding: 16px;
    text-align: center;
    color: var(--secondary-text-color);
    font-size: 14px;
  }
`;function bt(t,e,i){for(const s of i){const i=s.replace("{prefix}",e);if(t.states[i])return i}}function $t(t,e){const i=function(t,e){const i=(e.split(".")[1]||"").split("_").slice(0,-2).join("_");return{pm25:bt(t,i,["sensor.{prefix}_pm25_density","sensor.{prefix}_pm25","sensor.{prefix}_pm2_5"]),temperature:bt(t,i,["sensor.{prefix}_temperature","sensor.{prefix}_environment_temperature"]),humidity:bt(t,i,["sensor.{prefix}_relative_humidity","sensor.{prefix}_humidity"]),motorSpeed:bt(t,i,["sensor.{prefix}_motor_speed","sensor.{prefix}_fan_motor_speed"]),filterLife:bt(t,i,["sensor.{prefix}_filter_life_level","sensor.{prefix}_filter_life"]),filterUsedTime:bt(t,i,["sensor.{prefix}_filter_used_time"]),favoriteLevel:bt(t,i,["number.{prefix}_favorite_level","number.{prefix}_favorite_fan_level"]),childLock:bt(t,i,["switch.{prefix}_physical_control_locked","switch.{prefix}_child_lock"]),led:bt(t,i,["light.{prefix}_indicator_light","switch.{prefix}_led"]),buzzer:bt(t,i,["switch.{prefix}_alarm","switch.{prefix}_buzzer"])}}(t,e.entity);return{pm25:e.pm25_entity||i.pm25,temperature:e.temperature_entity||i.temperature,humidity:e.humidity_entity||i.humidity,motorSpeed:e.motor_speed_entity||i.motorSpeed,filterLife:e.filter_life_entity||i.filterLife,filterUsedTime:e.filter_used_time_entity||i.filterUsedTime,favoriteLevel:e.favorite_level_entity||i.favoriteLevel,childLock:e.child_lock_entity||i.childLock,led:e.led_entity||i.led,buzzer:e.buzzer_entity||i.buzzer}}function xt(t){return t.attributes.preset_mode}function wt(t,e){const i=function(t,e){if(!e)return;const i=t.states[e];return i&&"unavailable"!==i.state&&"unknown"!==i.state?i.state:void 0}(t,e);if(void 0===i)return;const s=parseFloat(i);return isNaN(s)?void 0:s}function At(t,e,i,s,r){t.callService(e,i,{entity_id:s,...r})}function Et(t,e){At(t,e.split(".")[0],"toggle",e)}function St(t,e,i,s,r){if(0===i.length)return V;const o=i=>{r||function(t,e,i){At(t,e.split(".")[0],"turn_on",e,i)}(t,e),function(t,e,i){At(t,"fan","set_preset_mode",e,{preset_mode:i})}(t,e,i)};return B`
    <div class="toolbar">
      ${i.map(t=>{const e=s?.toLowerCase()===t.toLowerCase();return B`
          <button
            class=${e?"active":""}
            @click=${()=>o(t)}
          >${t}</button>
        `})}
    </div>
  `}function kt(t,e){if(!e)return V;const i=t.states[e];if(!i)return V;const s=wt(t,e)??0,r=i.attributes.min??0,o=i.attributes.max??14,n=i.attributes.step??1;return B`
    <div class="favorite-row">
      <hac-slider
        .value=${s}
        .min=${r}
        .max=${o}
        .step=${n}
        @value-changed=${i=>{!function(t,e,i){At(t,"number","set_value",e,{value:i})}(t,e,i.detail.value)}}
      ></hac-slider>
      <span class="favorite-label">${Math.round(s)}</span>
    </div>
  `}let Ct=class extends at{constructor(){super(...arguments),this.icon="mdi:air-purifier",this.active=!1,this.animated=!0}render(){const t=this.active&&this.animated?"spin":"";return B`
      <div class="shape ${this.active?"active":""}">
        <ha-icon .icon=${this.icon} class=${t}></ha-icon>
      </div>
    `}};Ct.styles=n`
    :host {
      display: block;
      flex-shrink: 0;
    }
    .shape {
      width: var(--hac-icon-size, 42px);
      height: var(--hac-icon-size, 42px);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--secondary-background-color, rgba(111, 111, 111, 0.12));
      cursor: pointer;
      transition: background 0.3s ease;
    }
    .shape.active {
      background: var(--state-fan-active-color, var(--primary-color));
    }
    .shape.active ha-icon {
      color: var(--text-primary-color, #fff);
    }
    ha-icon {
      --mdc-icon-size: 24px;
      color: var(--secondary-text-color);
    }
    .spin {
      animation: spin 1.5s linear infinite;
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `,t([pt()],Ct.prototype,"icon",void 0),t([pt({type:Boolean})],Ct.prototype,"active",void 0),t([pt({type:Boolean})],Ct.prototype,"animated",void 0),Ct=t([lt("hac-shape-icon")],Ct);let Pt=class extends at{constructor(){super(...arguments),this.primary="",this.secondary=""}render(){return B`
      ${this.primary?B`<span class="primary">${this.primary}</span>`:V}
      ${this.secondary?B`<span class="secondary">${this.secondary}</span>`:V}
    `}};Pt.styles=n`
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-width: 0;
      flex: 1;
    }
    .primary {
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      color: var(--primary-text-color);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .secondary {
      font-size: 12px;
      line-height: 16px;
      color: var(--secondary-text-color);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `,t([pt()],Pt.prototype,"primary",void 0),t([pt()],Pt.prototype,"secondary",void 0),Pt=t([lt("hac-state-info")],Pt);let zt=class extends at{render(){return B`
      <div class="container">
        <slot name="icon"></slot>
        <slot name="info"></slot>
      </div>
    `}};zt.styles=n`
    :host {
      display: block;
    }
    .container {
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 0;
    }
  `,zt=t([lt("hac-state-item")],zt);let Ot=class extends at{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.step=1,this.disabled=!1}_onChange(t){const e=t.target,i=Number(e.value);this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:i},bubbles:!0,composed:!0}))}render(){const t=(this.value-this.min)/(this.max-this.min)*100;return B`
      <div class="slider-container">
        <input
          type="range"
          .value=${String(this.value)}
          .min=${String(this.min)}
          .max=${String(this.max)}
          .step=${String(this.step)}
          ?disabled=${this.disabled}
          @change=${this._onChange}
          style="--slider-pct: ${t}%"
        />
      </div>
    `}};Ot.styles=n`
    :host {
      display: block;
      flex: 1;
    }
    .slider-container {
      display: flex;
      align-items: center;
    }
    input[type="range"] {
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      height: 6px;
      border-radius: 3px;
      background: linear-gradient(
        to right,
        var(--state-fan-active-color, var(--primary-color)) 0%,
        var(--state-fan-active-color, var(--primary-color)) var(--slider-pct, 0%),
        var(--secondary-background-color, rgba(111, 111, 111, 0.12)) var(--slider-pct, 0%),
        var(--secondary-background-color, rgba(111, 111, 111, 0.12)) 100%
      );
      outline: none;
      cursor: pointer;
    }
    input[type="range"]:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: var(--state-fan-active-color, var(--primary-color));
      border: 2px solid var(--card-background-color, #fff);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
    input[type="range"]::-moz-range-thumb {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: var(--state-fan-active-color, var(--primary-color));
      border: 2px solid var(--card-background-color, #fff);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
  `,t([pt({type:Number})],Ot.prototype,"value",void 0),t([pt({type:Number})],Ot.prototype,"min",void 0),t([pt({type:Number})],Ot.prototype,"max",void 0),t([pt({type:Number})],Ot.prototype,"step",void 0),t([pt({type:Boolean})],Ot.prototype,"disabled",void 0),Ot=t([lt("hac-slider")],Ot);let Ut=class extends at{constructor(){super(...arguments),this.value=0,this.color="var(--primary-color)"}render(){const t=Math.min(100,Math.max(0,this.value));return B`
      <div class="bar">
        <div class="fill" style="width: ${t}%; background: ${this.color}"></div>
      </div>
    `}};Ut.styles=n`
    :host {
      display: block;
    }
    .bar {
      height: 6px;
      border-radius: 3px;
      background: var(--secondary-background-color, rgba(111, 111, 111, 0.12));
      overflow: hidden;
    }
    .fill {
      height: 100%;
      border-radius: 3px;
      transition: width 0.3s ease, background 0.3s ease;
    }
  `,t([pt({type:Number})],Ut.prototype,"value",void 0),t([pt()],Ut.prototype,"color",void 0),Ut=t([lt("hac-progress-bar")],Ut);let Mt=class extends at{constructor(){super(...arguments),this.icon="",this.active=!1,this.label=""}_handleClick(){this.dispatchEvent(new CustomEvent("toggle",{bubbles:!0,composed:!0}))}render(){return B`
      <button
        class=${this.active?"active":""}
        @click=${this._handleClick}
        title=${this.label}
      >
        <ha-icon .icon=${this.icon}></ha-icon>
      </button>
    `}};Mt.styles=n`
    :host {
      display: inline-block;
    }
    button {
      width: 40px;
      height: 40px;
      border: none;
      border-radius: 50%;
      background: var(--secondary-background-color, rgba(111, 111, 111, 0.12));
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      padding: 0;
      outline: none;
    }
    button ha-icon {
      --mdc-icon-size: 20px;
      color: var(--secondary-text-color);
    }
    button.active {
      background: var(--state-fan-active-color, var(--primary-color));
    }
    button.active ha-icon {
      color: var(--text-primary-color, #fff);
    }
    button:hover {
      opacity: 0.8;
    }
  `,t([pt()],Mt.prototype,"icon",void 0),t([pt({type:Boolean})],Mt.prototype,"active",void 0),t([pt()],Mt.prototype,"label",void 0),Mt=t([lt("hac-toggle-button")],Mt);const Lt=[{name:"entity",required:!0,selector:{entity:{domain:"fan"}}},{name:"name",selector:{text:{}}},{name:"show_name",selector:{boolean:{}}},{name:"show_state",selector:{boolean:{}}},{name:"show_toolbar",selector:{boolean:{}}},{name:"show_stats",selector:{boolean:{}}},{name:"show_settings",selector:{boolean:{}}},{name:"show_filter_info",selector:{boolean:{}}},{name:"compact_view",selector:{boolean:{}}},{name:"icon_animation",selector:{boolean:{}}}],Nt=[{name:"pm25_entity",selector:{entity:{domain:"sensor"}}},{name:"temperature_entity",selector:{entity:{domain:"sensor"}}},{name:"humidity_entity",selector:{entity:{domain:"sensor"}}},{name:"motor_speed_entity",selector:{entity:{domain:"sensor"}}},{name:"filter_life_entity",selector:{entity:{domain:"sensor"}}},{name:"filter_used_time_entity",selector:{entity:{domain:"sensor"}}},{name:"favorite_level_entity",selector:{entity:{domain:"number"}}},{name:"child_lock_entity",selector:{entity:{domain:"switch"}}},{name:"led_entity",selector:{entity:{}}},{name:"buzzer_entity",selector:{entity:{domain:"switch"}}}];let Tt=class extends at{constructor(){super(...arguments),this._expandedOverrides=!1,this._computeLabel=t=>{const e=this.hass?.language||"en";return _t(`editor.${t.name}`,e)||t.name}}setConfig(t){this._config=t}_valueChanged(t){const e=t.detail.value;this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))}_overrideValueChanged(t){const e=t.detail.value,i={...this._config,...e};this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0}))}_toggleOverrides(){this._expandedOverrides=!this._expandedOverrides}render(){if(!this.hass||!this._config)return V;const t=this.hass.language||"en";return B`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${Lt}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>

      <div class="overrides-section">
        <button class="overrides-toggle" @click=${this._toggleOverrides}>
          <ha-icon icon=${this._expandedOverrides?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
          ${_t("editor.entity_overrides",t)}
        </button>
        ${this._expandedOverrides?B`
          <ha-form
            .hass=${this.hass}
            .data=${this._config}
            .schema=${Nt}
            .computeLabel=${this._computeLabel}
            @value-changed=${this._overrideValueChanged}
          ></ha-form>
        `:V}
      </div>
    `}};Tt.styles=n`
    :host {
      display: block;
    }
    .overrides-section {
      margin-top: 16px;
    }
    .overrides-toggle {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      padding: 8px 0;
      border: none;
      background: none;
      color: var(--primary-text-color);
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      outline: none;
    }
    .overrides-toggle ha-icon {
      --mdc-icon-size: 20px;
    }
  `,t([pt({attribute:!1})],Tt.prototype,"hass",void 0),t([ut()],Tt.prototype,"_config",void 0),t([ut()],Tt.prototype,"_expandedOverrides",void 0),Tt=t([lt(vt)],Tt),function(t){const e=window;e.customCards=e.customCards||[],e.customCards.push(t)}({type:yt,name:"Air Purifier Card",description:"Custom card for Xiaomi Air Purifier"});let Ht=class extends at{static getConfigElement(){return document.createElement(vt)}static getStubConfig(t){const e=Object.keys(t.states).filter(e=>e.startsWith("fan.")&&t.states[e].attributes.preset_modes);return{entity:e[0]||""}}setConfig(t){if(!t.entity)throw new Error("Entity is required");this._config={show_name:!0,show_state:!0,show_toolbar:!0,show_stats:!0,show_settings:!0,show_filter_info:!0,compact_view:!1,icon_animation:!0,...t}}getCardSize(){return this._config?.compact_view?2:4}shouldUpdate(t){if(t.has("_config"))return!0;if(!t.has("hass"))return!0;const e=t.get("hass");if(!e)return!0;const i=this._config.entity;if(e.states[i]!==this.hass.states[i])return!0;const s=this._getResolved();for(const t of Object.values(s))if(t&&e.states[t]!==this.hass.states[t])return!0;return!1}_getResolved(){return this._resolved&&this._lastEntity===this._config.entity||(this._lastEntity=this._config.entity,this._resolved=$t(this.hass,this._config)),this._resolved}get _lang(){return this.hass?.language||"en"}render(){if(!this.hass||!this._config)return V;const t=this.hass.states[this._config.entity];if(!t)return B`
        <ha-card>
          <div class="not-found">Entity not found: ${this._config.entity}</div>
        </ha-card>
      `;const e=this._getResolved(),i=function(t){return"on"===t.state}(t),s=this._config.name||t.attributes.friendly_name||"Air Purifier",r=function(t){return t.attributes.preset_modes||[]}(t),o=xt(t),n=wt(this.hass,e.pm25),a="favorite"===o?.toLowerCase(),c=this._lang,l=this._config.compact_view;return B`
      <ha-card>
        <div class="container">
          ${this._renderHeader(t,i,s,n,c)}
          ${!l&&this._config.show_stats?function(t,e,i){const s=[{key:"pm25",entityId:e.pm25,labelKey:"stats.pm25",icon:"mdi:blur"},{key:"temperature",entityId:e.temperature,labelKey:"stats.temperature",icon:"mdi:thermometer"},{key:"humidity",entityId:e.humidity,labelKey:"stats.humidity",icon:"mdi:water-percent"},{key:"motorSpeed",entityId:e.motorSpeed,labelKey:"stats.motor_speed",icon:"mdi:fan"}].filter(e=>!!e.entityId&&void 0!==wt(t,e.entityId));return 0===s.length?V:B`
    <div class="stats-grid">
      ${s.map(e=>{const s=wt(t,e.entityId),r=function(t,e){if(!e)return"";const i=t.states[e];return i?.attributes.unit_of_measurement||""}(t,e.entityId);return B`
          <div class="stat-item">
            <span class="stat-value">
              ${void 0!==s?Math.round(s):"—"}
              ${r?B`<span class="stat-unit">${r}</span>`:""}
            </span>
            <span class="stat-label">${_t(e.labelKey,i)}</span>
          </div>
        `})}
    </div>
  `}(this.hass,e,c):V}
          ${this._config.show_toolbar?St(this.hass,this._config.entity,r,o,i):V}
          ${i&&a?kt(this.hass,e.favoriteLevel):V}
          ${!l&&this._config.show_filter_info?function(t,e,i,s){const r=wt(t,e),o=wt(t,i);if(void 0===r&&void 0===o)return V;const n=r??0,a=(c=n)>50?"var(--green-color, #4caf50)":c>20?"var(--orange-color, #ff9800)":"var(--red-color, #f44336)";var c;return B`
    <div class="filter-section">
      <div class="filter-header">
        <span>${_t("filter.life",s)}</span>
        <span>
          ${void 0!==r?B`<span class="value">${Math.round(r)}%</span>`:""}
          ${void 0!==o?B` · ${Math.round(o)} ${_t("filter.hours",s)}`:""}
        </span>
      </div>
      ${void 0!==r?B`<hac-progress-bar .value=${n} .color=${a}></hac-progress-bar>`:V}
    </div>
  `}(this.hass,e.filterLife,e.filterUsedTime,c):V}
          ${!l&&this._config.show_settings?function(t,e,i,s,r){const o=[{entityId:e,icon:"mdi:lock",labelKey:"settings.child_lock"},{entityId:i,icon:"mdi:lightbulb-outline",labelKey:"settings.led"},{entityId:s,icon:"mdi:volume-high",labelKey:"settings.buzzer"}].filter(e=>e.entityId&&t.states[e.entityId]);return 0===o.length?V:B`
    <div class="settings-row">
      ${o.map(e=>B`
        <hac-toggle-button
          .icon=${e.icon}
          ?active=${function(t,e){const i=t.states[e];return"on"===i?.state}(t,e.entityId)}
          .label=${_t(e.labelKey,r)}
          @toggle=${()=>Et(t,e.entityId)}
        ></hac-toggle-button>
      `)}
    </div>
  `}(this.hass,e.childLock,e.led,e.buzzer,c):V}
        </div>
      </ha-card>
    `}_renderHeader(t,e,i,s,r){const o=_t(e?"state.on":"state.off",r),n=e?xt(t):void 0,a=n?`${o} · ${n}`:o;return B`
      <div class="header">
        ${function(t,e,i,s){return B`
    <hac-shape-icon
      icon="mdi:air-purifier"
      ?active=${i}
      ?animated=${s}
      @click=${()=>Et(t,e)}
    ></hac-shape-icon>
  `}(this.hass,this._config.entity,e,!1!==this._config.icon_animation)}
        ${!1!==this._config.show_name||!1!==this._config.show_state?B`
            <hac-state-info
              .primary=${!1!==this._config.show_name?i:""}
              .secondary=${!1!==this._config.show_state?a:""}
            ></hac-state-info>
          `:V}
        ${void 0!==s?B`
            <div
              class="aqi-badge"
              style="background: ${function(t){return t<=12?"var(--green-color, #4caf50)":t<=35?"var(--light-green-color, #8bc34a)":t<=55?"var(--yellow-color, #ffeb3b)":t<=150?"var(--orange-color, #ff9800)":t<=250?"var(--deep-orange-color, #ff5722)":"var(--red-color, #f44336)"}(s)}"
              title=${_t(`aqi.${function(t){return t<=12?"good":t<=35?"moderate":t<=55?"unhealthy_sensitive":t<=150?"unhealthy":t<=250?"very_unhealthy":"hazardous"}(s)}`,r)}
            >${Math.round(s)}</div>
          `:V}
      </div>
    `}};Ht.styles=[mt,gt],t([pt({attribute:!1})],Ht.prototype,"hass",void 0),t([ut()],Ht.prototype,"_config",void 0),Ht=t([lt(yt)],Ht);console.info("%c HA-CARDS %c v1.0.0 ","color: white; background: #555; font-weight: bold; padding: 2px 6px; border-radius: 4px 0 0 4px;","color: white; background: #1976d2; font-weight: bold; padding: 2px 6px; border-radius: 0 4px 4px 0;");
