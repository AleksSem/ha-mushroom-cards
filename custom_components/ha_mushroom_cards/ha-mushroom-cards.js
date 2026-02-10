function t(t,e,i,o){var s,r=arguments.length,n=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),s=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new r(i,t,o)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,o))(e)})(t):t,{is:c,defineProperty:l,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,f=globalThis,_=f.trustedTypes,m=_?_.emptyScript:"",g=f.reactiveElementPolyfillSupport,y=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!c(t,e),$={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&l(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:s}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:o,set(e){const r=o?.call(this);s?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{if(i)t.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of o){const o=document.createElement("style"),s=e.litNonce;void 0!==s&&o.setAttribute("nonce",s),o.textContent=i.cssText,t.appendChild(o)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=o;const r=s.fromAttribute(e,t.type);this[o]=r??this._$Ej?.get(o)??r,this._$Em=null}}requestUpdate(t,e,i,o=!1,s){if(void 0!==t){const r=this.constructor;if(!1===o&&(s=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??b)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:o,wrapped:s},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==s||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===o&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,i,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[y("elementProperties")]=new Map,x[y("finalized")]=new Map,g?.({ReactiveElement:x}),(f.reactiveElementVersions??=[]).push("2.1.2");const w=globalThis,A=t=>t,E=w.trustedTypes,S=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,M="?"+k,z=`<${M}>`,P=document,O=()=>P.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,L=Array.isArray,N="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,R=/>/g,j=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,q=/"/g,D=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),K=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),F=new WeakMap,W=P.createTreeWalker(P,129);function X(t,e){if(!L(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const J=(t,e)=>{const i=t.length-1,o=[];let s,r=2===e?"<svg>":3===e?"<math>":"",n=H;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,h=0;for(;h<i.length&&(n.lastIndex=h,c=n.exec(i),null!==c);)h=n.lastIndex,n===H?"!--"===c[1]?n=T:void 0!==c[1]?n=R:void 0!==c[2]?(D.test(c[2])&&(s=RegExp("</"+c[2],"g")),n=j):void 0!==c[3]&&(n=j):n===j?">"===c[0]?(n=s??H,l=-1):void 0===c[1]?l=-2:(l=n.lastIndex-c[2].length,a=c[1],n=void 0===c[3]?j:'"'===c[3]?q:I):n===q||n===I?n=j:n===T||n===R?n=H:(n=j,s=void 0);const d=n===j&&t[e+1].startsWith("/>")?" ":"";r+=n===H?i+z:l>=0?(o.push(a),i.slice(0,l)+C+i.slice(l)+k+d):i+k+(-2===l?e:d)}return[X(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]};class Z{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let s=0,r=0;const n=t.length-1,a=this.parts,[c,l]=J(t,e);if(this.el=Z.createElement(c,i),W.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=W.nextNode())&&a.length<n;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(C)){const e=l[r++],i=o.getAttribute(t).split(k),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:s,name:n[2],strings:i,ctor:"."===n[1]?et:"?"===n[1]?it:"@"===n[1]?ot:tt}),o.removeAttribute(t)}else t.startsWith(k)&&(a.push({type:6,index:s}),o.removeAttribute(t));if(D.test(o.tagName)){const t=o.textContent.split(k),e=t.length-1;if(e>0){o.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],O()),W.nextNode(),a.push({type:2,index:++s});o.append(t[e],O())}}}else if(8===o.nodeType)if(o.data===M)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=o.data.indexOf(k,t+1));)a.push({type:7,index:s}),t+=k.length-1}s++}}static createElement(t,e){const i=P.createElement("template");return i.innerHTML=t,i}}function G(t,e,i=t,o){if(e===K)return e;let s=void 0!==o?i._$Co?.[o]:i._$Cl;const r=U(e)?void 0:e._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),void 0===r?s=void 0:(s=new r(t),s._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=s:i._$Cl=s),void 0!==s&&(e=G(t,s._$AS(t,e.values),s,o)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??P).importNode(e,!0);W.currentNode=o;let s=W.nextNode(),r=0,n=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new Y(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new st(s,this,t)),this._$AV.push(e),a=i[++n]}r!==a?.index&&(s=W.nextNode(),r++)}return W.currentNode=P,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),U(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==K&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>L(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Z.createElement(X(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new Q(o,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new Z(t)),e}k(t){L(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const s of t)o===e.length?e.push(i=new Y(this.O(O()),this.O(O()),this,this.options)):i=e[o],i._$AI(s),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,s){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,o){const s=this.strings;let r=!1;if(void 0===s)t=G(this,t,e,0),r=!U(t)||t!==this._$AH&&t!==K,r&&(this._$AH=t);else{const o=t;let n,a;for(t=s[0],n=0;n<s.length-1;n++)a=G(this,o[i+n],e,n),a===K&&(a=this._$AH[n]),r||=!U(a)||a!==this._$AH[n],a===V?t=V:t!==V&&(t+=(a??"")+s[n+1]),this._$AH[n]=a}r&&!o&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class ot extends tt{constructor(t,e,i,o,s){super(t,e,i,o,s),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??V)===K)return;const i=this._$AH,o=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==V&&(i===V||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const rt=w.litHtmlPolyfillSupport;rt?.(Z,Y),(w.litHtmlVersions??=[]).push("3.3.2");const nt=globalThis;class at extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const o=i?.renderBefore??e;let s=o._$litPart$;if(void 0===s){const t=i?.renderBefore??null;o._$litPart$=s=new Y(e.insertBefore(O(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return K}}at._$litElement$=!0,at.finalized=!0,nt.litElementHydrateSupport?.({LitElement:at});const ct=nt.litElementPolyfillSupport;ct?.({LitElement:at}),(nt.litElementVersions??=[]).push("4.2.2");const lt=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ht={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:b},dt=(t=ht,e,i)=>{const{kind:o,metadata:s}=i;let r=globalThis.litPropertyMetadata.get(s);if(void 0===r&&globalThis.litPropertyMetadata.set(s,r=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===o){const{name:o}=i;return{set(i){const s=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,s,t,!0,i)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===o){const{name:o}=i;return function(i){const s=this[o];e.call(this,i),this.requestUpdate(o,s,t,!0,i)}}throw Error("Unsupported decorator location: "+o)};function pt(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const o=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ut(t){return pt({...t,state:!0,attribute:!1})}const ft={en:{"card.name":"Air Purifier","card.description":"Card for Xiaomi Air Purifier","state.on":"On","state.off":"Off","state.unavailable":"Unavailable","stats.pm25":"PM2.5","stats.temperature":"Temp","stats.humidity":"Humidity","stats.motor_speed":"Motor","filter.life":"Filter Life","filter.used_time":"Used","filter.hours":"h","settings.child_lock":"Child Lock","settings.led":"LED","settings.buzzer":"Sound","aqi.good":"Good","aqi.moderate":"Moderate","aqi.unhealthy_sensitive":"Sensitive","aqi.unhealthy":"Unhealthy","aqi.very_unhealthy":"Very Unhealthy","aqi.hazardous":"Hazardous","editor.entity":"Entity (required)","editor.name":"Name","editor.show_name":"Show Name","editor.show_state":"Show State","editor.show_toolbar":"Show Toolbar","editor.show_stats":"Show Stats","editor.show_settings":"Show Settings","editor.show_filter_info":"Show Filter Info","editor.compact_view":"Compact View","editor.icon_animation":"Icon Animation","editor.entity_overrides":"Entity Overrides","editor.pm25_entity":"PM2.5 Entity","editor.temperature_entity":"Temperature Entity","editor.humidity_entity":"Humidity Entity","editor.motor_speed_entity":"Motor Speed Entity","editor.filter_life_entity":"Filter Life Entity","editor.filter_used_time_entity":"Filter Used Time Entity","editor.favorite_level_entity":"Favorite Level Entity","editor.child_lock_entity":"Child Lock Entity","editor.led_entity":"LED Entity","editor.buzzer_entity":"Buzzer Entity","light.card.name":"Light","light.card.description":"Card for light entities","editor.show_brightness_control":"Brightness Control","editor.show_color_temp_control":"Color Temp Control","editor.show_color_control":"Color Control","editor.use_light_color":"Use Light Color","editor.hide_controls_when_off":"Hide controls when off"},ru:{"card.name":"Очиститель воздуха","card.description":"Карточка для Xiaomi Air Purifier","state.on":"Вкл","state.off":"Выкл","state.unavailable":"Недоступен","stats.pm25":"PM2.5","stats.temperature":"Темп.","stats.humidity":"Влажн.","stats.motor_speed":"Мотор","filter.life":"Ресурс фильтра","filter.used_time":"Использован","filter.hours":"ч","settings.child_lock":"Блокировка","settings.led":"Подсветка","settings.buzzer":"Звук","aqi.good":"Отлично","aqi.moderate":"Нормально","aqi.unhealthy_sensitive":"Вредно (чувств.)","aqi.unhealthy":"Вредно","aqi.very_unhealthy":"Очень вредно","aqi.hazardous":"Опасно","editor.entity":"Объект (обязательно)","editor.name":"Название","editor.show_name":"Показать название","editor.show_state":"Показать состояние","editor.show_toolbar":"Показать режимы","editor.show_stats":"Показать датчики","editor.show_settings":"Показать настройки","editor.show_filter_info":"Показать фильтр","editor.compact_view":"Компактный вид","editor.icon_animation":"Анимация иконки","editor.entity_overrides":"Переопределение объектов","editor.pm25_entity":"PM2.5","editor.temperature_entity":"Температура","editor.humidity_entity":"Влажность","editor.motor_speed_entity":"Скорость мотора","editor.filter_life_entity":"Ресурс фильтра","editor.filter_used_time_entity":"Время использования фильтра","editor.favorite_level_entity":"Уровень Favorite","editor.child_lock_entity":"Детский замок","editor.led_entity":"LED индикатор","editor.buzzer_entity":"Звуковой сигнал","light.card.name":"Свет","light.card.description":"Карточка для управления светом","editor.show_brightness_control":"Яркость","editor.show_color_temp_control":"Цвет. температура","editor.show_color_control":"Цвет","editor.use_light_color":"Цвет лампы","editor.hide_controls_when_off":"Скрывать управление при выключении"}};function _t(t,e="en"){return ft[e]?.[t]??ft.en?.[t]??t}const mt=n`
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
`,gt="air-purifier-card",yt="air-purifier-card-editor",vt=n`
  /* Header */
  .header {
    display: flex;
    align-items: center;
    gap: 12px;
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
`;function bt(t,e,i){for(const o of i){const i=o.replace("{prefix}",e);if(t.states[i])return i}}function $t(t,e){const i=function(t,e){const i=(e.split(".")[1]||"").split("_").slice(0,-2).join("_");return{pm25:bt(t,i,["sensor.{prefix}_pm25_density","sensor.{prefix}_pm25","sensor.{prefix}_pm2_5"]),temperature:bt(t,i,["sensor.{prefix}_temperature","sensor.{prefix}_environment_temperature"]),humidity:bt(t,i,["sensor.{prefix}_relative_humidity","sensor.{prefix}_humidity"]),motorSpeed:bt(t,i,["sensor.{prefix}_motor_speed","sensor.{prefix}_fan_motor_speed"]),filterLife:bt(t,i,["sensor.{prefix}_filter_life_level","sensor.{prefix}_filter_life"]),filterUsedTime:bt(t,i,["sensor.{prefix}_filter_used_time"]),favoriteLevel:bt(t,i,["number.{prefix}_favorite_level","number.{prefix}_favorite_fan_level"]),childLock:bt(t,i,["switch.{prefix}_physical_control_locked","switch.{prefix}_child_lock"]),led:bt(t,i,["light.{prefix}_indicator_light","switch.{prefix}_led"]),buzzer:bt(t,i,["switch.{prefix}_alarm","switch.{prefix}_buzzer"])}}(t,e.entity);return{pm25:e.pm25_entity||i.pm25,temperature:e.temperature_entity||i.temperature,humidity:e.humidity_entity||i.humidity,motorSpeed:e.motor_speed_entity||i.motorSpeed,filterLife:e.filter_life_entity||i.filterLife,filterUsedTime:e.filter_used_time_entity||i.filterUsedTime,favoriteLevel:e.favorite_level_entity||i.favoriteLevel,childLock:e.child_lock_entity||i.childLock,led:e.led_entity||i.led,buzzer:e.buzzer_entity||i.buzzer}}function xt(t){return t.attributes.preset_mode}function wt(t,e){const i=function(t,e){if(!e)return;const i=t.states[e];return i&&"unavailable"!==i.state&&"unknown"!==i.state?i.state:void 0}(t,e);if(void 0===i)return;const o=parseFloat(i);return isNaN(o)?void 0:o}function At(t){const e=window;e.customCards=e.customCards||[],e.customCards.push(t)}function Et(t,e,i,o,s){t.callService(e,i,{entity_id:o,...s})}function St(t,e){Et(t,e.split(".")[0],"toggle",e)}function Ct(t,e,i){Et(t,e.split(".")[0],"turn_on",e,i)}function kt(t,e,i,o,s){if(0===i.length)return V;const r=i=>{s||Ct(t,e),function(t,e,i){Et(t,"fan","set_preset_mode",e,{preset_mode:i})}(t,e,i)};return B`
    <div class="toolbar">
      ${i.map(t=>{const e=o?.toLowerCase()===t.toLowerCase();return B`
          <button
            class=${e?"active":""}
            @click=${()=>r(t)}
          >${t}</button>
        `})}
    </div>
  `}function Mt(t,e){if(!e)return V;const i=t.states[e];if(!i)return V;const o=wt(t,e)??0,s=i.attributes.min??0,r=i.attributes.max??14,n=i.attributes.step??1;return B`
    <div class="favorite-row">
      <hac-slider
        .value=${o}
        .min=${s}
        .max=${r}
        .step=${n}
        @value-changed=${i=>{!function(t,e,i){Et(t,"number","set_value",e,{value:i})}(t,e,i.detail.value)}}
      ></hac-slider>
      <span class="favorite-label">${Math.round(o)}</span>
    </div>
  `}let zt=class extends at{constructor(){super(...arguments),this.icon="mdi:air-purifier",this.active=!1,this.animated=!0,this.animation="spin"}render(){const t=this.active&&this.animated?this.animation:"";return B`
      <div class="shape ${this.active?"active":""}">
        <ha-icon .icon=${this.icon} class=${t}></ha-icon>
      </div>
    `}};zt.styles=n`
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
      background: var(--hac-shape-active-bg, var(--state-fan-active-color, var(--primary-color)));
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
    .pulse {
      animation: pulse 2s ease-in-out infinite;
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.6; }
    }
  `,t([pt()],zt.prototype,"icon",void 0),t([pt({type:Boolean})],zt.prototype,"active",void 0),t([pt({type:Boolean})],zt.prototype,"animated",void 0),t([pt()],zt.prototype,"animation",void 0),zt=t([lt("hac-shape-icon")],zt);let Pt=class extends at{constructor(){super(...arguments),this.primary="",this.secondary=""}render(){return B`
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
  `,t([pt()],Pt.prototype,"primary",void 0),t([pt()],Pt.prototype,"secondary",void 0),Pt=t([lt("hac-state-info")],Pt);let Ot=class extends at{render(){return B`
      <div class="container">
        <slot name="icon"></slot>
        <slot name="info"></slot>
      </div>
    `}};Ot.styles=n`
    :host {
      display: block;
    }
    .container {
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 0;
    }
  `,Ot=t([lt("hac-state-item")],Ot);let Ut=class extends at{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.step=1,this.disabled=!1}_onChange(t){const e=t.target,i=Number(e.value);this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:i},bubbles:!0,composed:!0}))}render(){const t=(this.value-this.min)/(this.max-this.min)*100;return B`
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
    `}};Ut.styles=n`
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
  `,t([pt({type:Number})],Ut.prototype,"value",void 0),t([pt({type:Number})],Ut.prototype,"min",void 0),t([pt({type:Number})],Ut.prototype,"max",void 0),t([pt({type:Number})],Ut.prototype,"step",void 0),t([pt({type:Boolean})],Ut.prototype,"disabled",void 0),Ut=t([lt("hac-slider")],Ut);let Lt=class extends at{constructor(){super(...arguments),this.value=0,this.color="var(--primary-color)"}render(){const t=Math.min(100,Math.max(0,this.value));return B`
      <div class="bar">
        <div class="fill" style="width: ${t}%; background: ${this.color}"></div>
      </div>
    `}};Lt.styles=n`
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
  `,t([pt({type:Number})],Lt.prototype,"value",void 0),t([pt()],Lt.prototype,"color",void 0),Lt=t([lt("hac-progress-bar")],Lt);let Nt=class extends at{constructor(){super(...arguments),this.icon="",this.active=!1,this.label=""}_handleClick(){this.dispatchEvent(new CustomEvent("toggle",{bubbles:!0,composed:!0}))}render(){return B`
      <button
        class=${this.active?"active":""}
        @click=${this._handleClick}
        title=${this.label}
      >
        <ha-icon .icon=${this.icon}></ha-icon>
      </button>
    `}};Nt.styles=n`
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
  `,t([pt()],Nt.prototype,"icon",void 0),t([pt({type:Boolean})],Nt.prototype,"active",void 0),t([pt()],Nt.prototype,"label",void 0),Nt=t([lt("hac-toggle-button")],Nt);const Ht=[{name:"entity",required:!0,selector:{entity:{domain:"fan"}}},{name:"name",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"show_name",selector:{boolean:{}}},{name:"show_state",selector:{boolean:{}}},{name:"show_toolbar",selector:{boolean:{}}},{name:"show_stats",selector:{boolean:{}}},{name:"show_settings",selector:{boolean:{}}},{name:"show_filter_info",selector:{boolean:{}}},{name:"compact_view",selector:{boolean:{}}},{name:"icon_animation",selector:{boolean:{}}}]}],Tt=[{name:"pm25_entity",selector:{entity:{domain:"sensor"}}},{name:"temperature_entity",selector:{entity:{domain:"sensor"}}},{name:"humidity_entity",selector:{entity:{domain:"sensor"}}},{name:"motor_speed_entity",selector:{entity:{domain:"sensor"}}},{name:"filter_life_entity",selector:{entity:{domain:"sensor"}}},{name:"filter_used_time_entity",selector:{entity:{domain:"sensor"}}},{name:"favorite_level_entity",selector:{entity:{domain:"number"}}},{name:"child_lock_entity",selector:{entity:{domain:"switch"}}},{name:"led_entity",selector:{entity:{}}},{name:"buzzer_entity",selector:{entity:{domain:"switch"}}}];let Rt=class extends at{constructor(){super(...arguments),this._expandedOverrides=!1,this._computeLabel=t=>{const e=this.hass?.language||"en";return _t(`editor.${t.name}`,e)||t.name}}setConfig(t){this._config=t}_valueChanged(t){const e=t.detail.value;this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))}_overrideValueChanged(t){const e=t.detail.value,i={...this._config,...e};this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0}))}_toggleOverrides(){this._expandedOverrides=!this._expandedOverrides}render(){if(!this.hass||!this._config)return V;const t=this.hass.language||"en",e={show_name:!0,show_state:!0,show_toolbar:!0,show_stats:!0,show_settings:!0,show_filter_info:!0,compact_view:!1,icon_animation:!0,...this._config};return B`
      <ha-form
        .hass=${this.hass}
        .data=${e}
        .schema=${Ht}
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
            .schema=${Tt}
            .computeLabel=${this._computeLabel}
            @value-changed=${this._overrideValueChanged}
          ></ha-form>
        `:V}
      </div>
    `}};Rt.styles=n`
    :host {
      display: block;
      --ha-space-6: 4px;
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
    ha-selector-boolean {
      display: flex;
      justify-content: flex-start;
    }
    ha-formfield {
      min-height: 20px;
    }
  `,t([pt({attribute:!1})],Rt.prototype,"hass",void 0),t([ut()],Rt.prototype,"_config",void 0),t([ut()],Rt.prototype,"_expandedOverrides",void 0),Rt=t([lt(yt)],Rt),At({type:gt,name:"Air Purifier Card",description:"Custom card for Xiaomi Air Purifier"});let jt=class extends at{static getConfigElement(){return document.createElement(yt)}static getStubConfig(t){const e=Object.keys(t.states).filter(e=>e.startsWith("fan.")&&t.states[e].attributes.preset_modes);return{entity:e[0]||""}}setConfig(t){if(!t.entity)throw new Error("Entity is required");this._config={show_name:!0,show_state:!0,show_toolbar:!0,show_stats:!0,show_settings:!0,show_filter_info:!0,compact_view:!1,icon_animation:!0,...t}}getCardSize(){return this._config?.compact_view?2:4}shouldUpdate(t){if(t.has("_config"))return!0;if(!t.has("hass"))return!0;const e=t.get("hass");if(!e)return!0;const i=this._config.entity;if(e.states[i]!==this.hass.states[i])return!0;const o=this._getResolved();for(const t of Object.values(o))if(t&&e.states[t]!==this.hass.states[t])return!0;return!1}_getResolved(){return this._resolved&&this._lastEntity===this._config.entity||(this._lastEntity=this._config.entity,this._resolved=$t(this.hass,this._config)),this._resolved}get _lang(){return this.hass?.language||"en"}render(){if(!this.hass||!this._config)return V;const t=this.hass.states[this._config.entity];if(!t)return B`
        <ha-card>
          <div class="not-found">Entity not found: ${this._config.entity}</div>
        </ha-card>
      `;const e=this._getResolved(),i=function(t){return"on"===t.state}(t),o=this._config.name||t.attributes.friendly_name||"Air Purifier",s=function(t){return t.attributes.preset_modes||[]}(t),r=xt(t),n="favorite"===r?.toLowerCase(),a=this._lang,c=this._config.compact_view;return B`
      <ha-card>
        <div class="container">
          ${this._renderHeader(t,i,o,a)}
          ${!c&&this._config.show_stats?function(t,e,i){const o=[{key:"pm25",entityId:e.pm25,labelKey:"stats.pm25",icon:"mdi:blur"},{key:"temperature",entityId:e.temperature,labelKey:"stats.temperature",icon:"mdi:thermometer"},{key:"humidity",entityId:e.humidity,labelKey:"stats.humidity",icon:"mdi:water-percent"},{key:"motorSpeed",entityId:e.motorSpeed,labelKey:"stats.motor_speed",icon:"mdi:fan"}].filter(e=>!!e.entityId&&void 0!==wt(t,e.entityId));return 0===o.length?V:B`
    <div class="stats-grid">
      ${o.map(e=>{const o=wt(t,e.entityId),s=function(t,e){if(!e)return"";const i=t.states[e];return i?.attributes.unit_of_measurement||""}(t,e.entityId),r="pm25"===e.key&&void 0!==o,n=r?`background: ${a=o,a<=12?"var(--green-color, #4caf50)":a<=35?"var(--light-green-color, #8bc34a)":a<=55?"var(--yellow-color, #ffeb3b)":a<=150?"var(--orange-color, #ff9800)":a<=250?"var(--deep-orange-color, #ff5722)":"var(--red-color, #f44336)"}; color: #fff;`:"";var a;return B`
          <div class="stat-item" style=${n}>
            <span class="stat-value">
              ${void 0!==o?Math.round(o):"—"}
              ${s?B`<span class="stat-unit" style=${r?"color: inherit;":""}>${s}</span>`:""}
            </span>
            <span class="stat-label" style=${r?"color: inherit;":""}>${_t(e.labelKey,i)}</span>
          </div>
        `})}
    </div>
  `}(this.hass,e,a):V}
          ${this._config.show_toolbar?kt(this.hass,this._config.entity,s,r,i):V}
          ${i&&n?Mt(this.hass,e.favoriteLevel):V}
          ${!c&&this._config.show_filter_info?function(t,e,i,o){const s=wt(t,e),r=wt(t,i);if(void 0===s&&void 0===r)return V;const n=s??0,a=(c=n)>50?"var(--green-color, #4caf50)":c>20?"var(--orange-color, #ff9800)":"var(--red-color, #f44336)";var c;return B`
    <div class="filter-section">
      <div class="filter-header">
        <span>${_t("filter.life",o)}</span>
        <span>
          ${void 0!==s?B`<span class="value">${Math.round(s)}%</span>`:""}
          ${void 0!==r?B` · ${Math.round(r)} ${_t("filter.hours",o)}`:""}
        </span>
      </div>
      ${void 0!==s?B`<hac-progress-bar .value=${n} .color=${a}></hac-progress-bar>`:V}
    </div>
  `}(this.hass,e.filterLife,e.filterUsedTime,a):V}
          ${!c&&this._config.show_settings?function(t,e,i,o,s){const r=[{entityId:e,icon:"mdi:lock",labelKey:"settings.child_lock"},{entityId:i,icon:"mdi:lightbulb-outline",labelKey:"settings.led"},{entityId:o,icon:"mdi:volume-high",labelKey:"settings.buzzer"}].filter(e=>e.entityId&&t.states[e.entityId]);return 0===r.length?V:B`
    <div class="settings-row">
      ${r.map(e=>B`
        <hac-toggle-button
          .icon=${e.icon}
          ?active=${function(t,e){const i=t.states[e];return"on"===i?.state}(t,e.entityId)}
          .label=${_t(e.labelKey,s)}
          @toggle=${()=>St(t,e.entityId)}
        ></hac-toggle-button>
      `)}
    </div>
  `}(this.hass,e.childLock,e.led,e.buzzer,a):V}
        </div>
      </ha-card>
    `}_renderHeader(t,e,i,o){const s=_t(e?"state.on":"state.off",o),r=e?xt(t):void 0,n=r?`${s} · ${r}`:s;return B`
      <div class="header">
        ${function(t,e,i,o){return B`
    <hac-shape-icon
      icon="mdi:air-purifier"
      ?active=${i}
      ?animated=${o}
      @click=${()=>St(t,e)}
    ></hac-shape-icon>
  `}(this.hass,this._config.entity,e,!1!==this._config.icon_animation)}
        ${!1!==this._config.show_name||!1!==this._config.show_state?B`
            <hac-state-info
              .primary=${!1!==this._config.show_name?i:""}
              .secondary=${!1!==this._config.show_state?n:""}
            ></hac-state-info>
          `:V}
      </div>
    `}};jt.styles=[mt,vt],t([pt({attribute:!1})],jt.prototype,"hass",void 0),t([ut()],jt.prototype,"_config",void 0),jt=t([lt(gt)],jt);const It="light-card",qt="light-card-editor",Dt=n`
  /* Header */
  .header {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  /* Control rows */
  .control-row {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .control-row ha-icon {
    --mdc-icon-size: 20px;
    color: var(--secondary-text-color);
    flex-shrink: 0;
  }
  .control-row .value {
    font-size: 12px;
    font-weight: 500;
    color: var(--primary-text-color);
    min-width: 36px;
    text-align: right;
    flex-shrink: 0;
  }

  /* Not found */
  .not-found {
    padding: 16px;
    text-align: center;
    color: var(--secondary-text-color);
    font-size: 14px;
  }
`;function Bt(t){return t.attributes.supported_color_modes||[]}function Kt(t){return"on"===t.state}function Vt(t){const e=t.attributes.brightness;return null==e?Kt(t)?100:0:Math.max(1,Math.round(e/255*100))}function Ft(t){const e=t/100;let i,o,s;return i=e<=66?255:329.698727446*Math.pow(e-60,-.1332047592),o=e<=66?99.4708025861*Math.log(e)-161.1195681661:288.1221695283*Math.pow(e-60,-.0755148492),s=e>=66?255:e<=19?0:138.5177312231*Math.log(e-10)-305.0447927307,[Math.round(Math.min(255,Math.max(0,i))),Math.round(Math.min(255,Math.max(0,o))),Math.round(Math.min(255,Math.max(0,s)))]}function Wt(t,e,i,o,s,r){const n=r&&o?function(t){if(!Kt(t))return;const e=function(t){return t.attributes.rgb_color}(t);if(e)return`rgb(${e[0]}, ${e[1]}, ${e[2]})`;const i=t.attributes.color_temp_kelvin;if(i){const[t,e,o]=Ft(i);return`rgb(${t}, ${e}, ${o})`}}(i):void 0;return B`
    <hac-shape-icon
      icon="mdi:lightbulb"
      ?active=${o}
      ?animated=${s}
      animation="pulse"
      style=${n?`--hac-shape-active-bg: ${n}`:""}
      @click=${()=>St(t,e)}
    ></hac-shape-icon>
  `}function Xt(t,e,i,o,s){const r=function(t,e){const i=[];for(let o=0;o<=5;o++){const s=t+o/5*(e-t),[r,n,a]=Ft(s);i.push(`rgb(${r}, ${n}, ${a})`)}return`linear-gradient(to right, ${i.join(", ")})`}(o,s);return B`
    <div class="control-row">
      <ha-icon icon="mdi:thermometer"></ha-icon>
      <hac-gradient-slider
        .value=${i}
        .min=${o}
        .max=${s}
        .step=${100}
        .gradient=${r}
        @value-changed=${i=>{const o=i.detail.value;Ct(t,e,{color_temp_kelvin:o})}}
      ></hac-gradient-slider>
      <span class="value">${i}K</span>
    </div>
  `}function Jt(t,e,i){return B`
    <div class="control-row">
      <ha-icon icon="mdi:palette"></ha-icon>
      <hac-gradient-slider
        .value=${i}
        .min=${0}
        .max=${360}
        .step=${1}
        .gradient=${"linear-gradient(to right, hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(360, 100%, 50%))"}
        @value-changed=${i=>{const o=i.detail.value,[s,r,n]=function(t,e,i){const o=i/100,s=o*(e/100),r=s*(1-Math.abs(t/60%2-1)),n=o-s;let a,c,l;return t<60?(a=s,c=r,l=0):t<120?(a=r,c=s,l=0):t<180?(a=0,c=s,l=r):t<240?(a=0,c=r,l=s):t<300?(a=r,c=0,l=s):(a=s,c=0,l=r),[Math.round(255*(a+n)),Math.round(255*(c+n)),Math.round(255*(l+n))]}(o,100,100);Ct(t,e,{rgb_color:[s,r,n]})}}
      ></hac-gradient-slider>
      <span class="value">${Math.round(i)}°</span>
    </div>
  `}let Zt=class extends at{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.step=1,this.disabled=!1,this.gradient=""}_onChange(t){const e=t.target,i=Number(e.value);this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:i},bubbles:!0,composed:!0}))}render(){return B`
      <div class="slider-container">
        <input
          type="range"
          .value=${String(this.value)}
          .min=${String(this.min)}
          .max=${String(this.max)}
          .step=${String(this.step)}
          ?disabled=${this.disabled}
          @change=${this._onChange}
          style="--gradient: ${this.gradient}"
        />
      </div>
    `}};Zt.styles=n`
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
      background: var(--gradient, linear-gradient(to right, #fff, #ff0));
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
      background: #fff;
      border: 2px solid rgba(0, 0, 0, 0.2);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }
    input[type="range"]::-moz-range-thumb {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #fff;
      border: 2px solid rgba(0, 0, 0, 0.2);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }
  `,t([pt({type:Number})],Zt.prototype,"value",void 0),t([pt({type:Number})],Zt.prototype,"min",void 0),t([pt({type:Number})],Zt.prototype,"max",void 0),t([pt({type:Number})],Zt.prototype,"step",void 0),t([pt({type:Boolean})],Zt.prototype,"disabled",void 0),t([pt()],Zt.prototype,"gradient",void 0),Zt=t([lt("hac-gradient-slider")],Zt);const Gt=[{name:"entity",required:!0,selector:{entity:{domain:"light"}}},{name:"name",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"show_name",selector:{boolean:{}}},{name:"show_state",selector:{boolean:{}}},{name:"show_brightness_control",selector:{boolean:{}}},{name:"show_color_temp_control",selector:{boolean:{}}},{name:"show_color_control",selector:{boolean:{}}},{name:"use_light_color",selector:{boolean:{}}},{name:"icon_animation",selector:{boolean:{}}},{name:"compact_view",selector:{boolean:{}}},{name:"hide_controls_when_off",selector:{boolean:{}}}]}];let Qt=class extends at{constructor(){super(...arguments),this._computeLabel=t=>{const e=this.hass?.language||"en";return _t(`editor.${t.name}`,e)||t.name}}setConfig(t){this._config=t}_valueChanged(t){const e=t.detail.value;this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))}render(){if(!this.hass||!this._config)return V;const t={show_name:!0,show_state:!0,show_brightness_control:!0,show_color_temp_control:!0,show_color_control:!0,use_light_color:!0,icon_animation:!0,compact_view:!1,hide_controls_when_off:!0,...this._config};return B`
      <ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${Gt}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}};Qt.styles=n`
    :host {
      display: block;
      --ha-space-6: 4px;
    }
    ha-selector-boolean {
      display: flex;
      justify-content: flex-start;
    }
    ha-formfield {
      min-height: 20px;
    }
  `,t([pt({attribute:!1})],Qt.prototype,"hass",void 0),t([ut()],Qt.prototype,"_config",void 0),Qt=t([lt(qt)],Qt),At({type:It,name:"Light Card",description:"Custom card for light entities with brightness and color controls"});let Yt=class extends at{static getConfigElement(){return document.createElement(qt)}static getStubConfig(t){const e=Object.keys(t.states).filter(t=>t.startsWith("light."));return{entity:e[0]||""}}setConfig(t){if(!t.entity)throw new Error("Entity is required");this._config={show_name:!0,show_state:!0,show_brightness_control:!0,show_color_temp_control:!0,show_color_control:!0,use_light_color:!0,icon_animation:!0,compact_view:!1,hide_controls_when_off:!0,...t}}getCardSize(){return this._config?.compact_view?1:3}shouldUpdate(t){if(t.has("_config"))return!0;if(!t.has("hass"))return!0;const e=t.get("hass");if(!e)return!0;const i=this._config.entity;return e.states[i]!==this.hass.states[i]}get _lang(){return this.hass?.language||"en"}render(){if(!this.hass||!this._config)return V;const t=this.hass.states[this._config.entity];if(!t)return B`
        <ha-card>
          <div class="not-found">Entity not found: ${this._config.entity}</div>
        </ha-card>
      `;const e=Kt(t),i=this._config.name||t.attributes.friendly_name||"Light",o=this._lang,s=this._config.compact_view;return B`
      <ha-card>
        <div class="container">
          ${this._renderHeader(t,e,i,o)}
          ${s||!e&&!1!==this._config.hide_controls_when_off?V:this._renderControls(t)}
        </div>
      </ha-card>
    `}_renderHeader(t,e,i,o){const s=_t(e?"state.on":"state.off",o),r=e?Vt(t):0,n=e&&r?`${s} · ${r}%`:s;return B`
      <div class="header">
        ${Wt(this.hass,this._config.entity,t,e,!1!==this._config.icon_animation,!1!==this._config.use_light_color)}
        ${!1!==this._config.show_name||!1!==this._config.show_state?B`
            <hac-state-info
              .primary=${!1!==this._config.show_name?i:""}
              .secondary=${!1!==this._config.show_state?n:""}
            ></hac-state-info>
          `:V}
      </div>
    `}_renderControls(t){const e=this._config.entity;return B`
      ${!1!==this._config.show_brightness_control&&function(t){const e=Bt(t);return e.length>0&&!e.every(t=>"onoff"===t)}(t)?function(t,e,i){return B`
    <div class="control-row">
      <ha-icon icon="mdi:brightness-6"></ha-icon>
      <hac-slider
        .value=${i}
        .min=${1}
        .max=${100}
        .step=${1}
        @value-changed=${i=>{const o=i.detail.value;Ct(t,e,{brightness_pct:o})}}
      ></hac-slider>
      <span class="value">${i}%</span>
    </div>
  `}(this.hass,e,Vt(t)):V}
      ${!1!==this._config.show_color_temp_control&&function(t){return Bt(t).includes("color_temp")}(t)?this._renderColorTemp(t,e):V}
      ${!1!==this._config.show_color_control&&function(t){const e=["hs","xy","rgb","rgbw","rgbww"];return Bt(t).some(t=>e.includes(t))}(t)?Jt(this.hass,e,function(t){return t.attributes.hs_color}(t)?.[0]??0):V}
    `}_renderColorTemp(t,e){const{min:i,max:o}=function(t){return{min:t.attributes.min_color_temp_kelvin??2e3,max:t.attributes.max_color_temp_kelvin??6500}}(t);return Xt(this.hass,e,function(t){return t.attributes.color_temp_kelvin??4e3}(t),i,o)}};Yt.styles=[mt,Dt],t([pt({attribute:!1})],Yt.prototype,"hass",void 0),t([ut()],Yt.prototype,"_config",void 0),Yt=t([lt(It)],Yt);console.info("%c HA-CARDS %c v1.0.0 ","color: white; background: #555; font-weight: bold; padding: 2px 6px; border-radius: 4px 0 0 4px;","color: white; background: #1976d2; font-weight: bold; padding: 2px 6px; border-radius: 0 4px 4px 0;");
