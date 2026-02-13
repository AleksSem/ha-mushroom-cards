function t(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new n(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:c,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,_=globalThis,m=_.trustedTypes,g=m?m.emptyScript:"",f=_.reactiveElementPolyfillSupport,y=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!c(t,e),$={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);o?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...h(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=s;const n=o.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i,s=!1,o){if(void 0!==t){const n=this.constructor;if(!1===s&&(o=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??b)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==o||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[y("elementProperties")]=new Map,w[y("finalized")]=new Map,f?.({ReactiveElement:w}),(_.reactiveElementVersions??=[]).push("2.1.2");const x=globalThis,k=t=>t,C=x.trustedTypes,S=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+A,z=`<${O}>`,M=document,P=()=>M.createComment(""),D=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,L="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,H=/>/g,N=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,j=/"/g,F=/^(?:script|style|textarea|title)$/i,K=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),W=new WeakMap,V=M.createTreeWalker(M,129);function Y(t,e){if(!T(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const G=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":3===e?"<math>":"",r=I;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,d=0;for(;d<i.length&&(r.lastIndex=d,c=r.exec(i),null!==c);)d=r.lastIndex,r===I?"!--"===c[1]?r=U:void 0!==c[1]?r=H:void 0!==c[2]?(F.test(c[2])&&(o=RegExp("</"+c[2],"g")),r=N):void 0!==c[3]&&(r=N):r===N?">"===c[0]?(r=o??I,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?N:'"'===c[3]?j:R):r===j||r===R?r=N:r===U||r===H?r=I:(r=N,o=void 0);const h=r===N&&t[e+1].startsWith("/>")?" ":"";n+=r===I?i+z:l>=0?(s.push(a),i.slice(0,l)+E+i.slice(l)+A+h):i+A+(-2===l?e:h)}return[Y(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class J{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[c,l]=G(t,e);if(this.el=J.createElement(c,i),V.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=V.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(E)){const e=l[n++],i=s.getAttribute(t).split(A),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:r[2],strings:i,ctor:"."===r[1]?et:"?"===r[1]?it:"@"===r[1]?st:tt}),s.removeAttribute(t)}else t.startsWith(A)&&(a.push({type:6,index:o}),s.removeAttribute(t));if(F.test(s.tagName)){const t=s.textContent.split(A),e=t.length-1;if(e>0){s.textContent=C?C.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],P()),V.nextNode(),a.push({type:2,index:++o});s.append(t[e],P())}}}else if(8===s.nodeType)if(s.data===O)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(A,t+1));)a.push({type:7,index:o}),t+=A.length-1}o++}}static createElement(t,e){const i=M.createElement("template");return i.innerHTML=t,i}}function X(t,e,i=t,s){if(e===B)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const n=D(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=X(t,o._$AS(t,e.values),o,s)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??M).importNode(e,!0);V.currentNode=s;let o=V.nextNode(),n=0,r=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Q(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new ot(o,this,t)),this._$AV.push(e),a=i[++r]}n!==a?.index&&(o=V.nextNode(),n++)}return V.currentNode=M,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),D(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>T(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&D(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=J.createElement(Y(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Z(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new J(t)),e}k(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Q(this.O(P()),this.O(P()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=k(t).nextSibling;k(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=X(this,t,e,0),n=!D(t)||t!==this._$AH&&t!==B,n&&(this._$AH=t);else{const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=X(this,s[i+r],e,r),a===B&&(a=this._$AH[r]),n||=!D(a)||a!==this._$AH[r],a===q?t=q:t!==q&&(t+=(a??"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class st extends tt{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??q)===B)return;const i=this._$AH,s=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==q&&(i===q||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const nt=x.litHtmlPolyfillSupport;nt?.(J,Q),(x.litHtmlVersions??=[]).push("3.3.2");const rt=globalThis;class at extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new Q(e.insertBefore(P(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}at._$litElement$=!0,at.finalized=!0,rt.litElementHydrateSupport?.({LitElement:at});const ct=rt.litElementPolyfillSupport;ct?.({LitElement:at}),(rt.litElementVersions??=[]).push("4.2.2");const lt={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:b},dt=(t=lt,e,i)=>{const{kind:s,metadata:o}=i;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,o,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];e.call(this,i),this.requestUpdate(s,o,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};function ht(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ut(t){return ht({...t,state:!0,attribute:!1})}function pt(t){return e=>{customElements.get(t)||customElements.define(t,e)}}const _t={en:{"card.name":"Air Purifier","card.description":"Card for Xiaomi Air Purifier","state.on":"On","state.off":"Off","state.unavailable":"Unavailable","stats.pm25":"PM2.5","stats.temperature":"Temp","stats.humidity":"Humidity","stats.motor_speed":"Motor","filter.life":"Filter Life","filter.used_time":"Used","filter.hours":"h","settings.child_lock":"Child Lock","settings.led":"LED","settings.buzzer":"Sound","aqi.good":"Good","aqi.moderate":"Moderate","aqi.unhealthy_sensitive":"Sensitive","aqi.unhealthy":"Unhealthy","aqi.very_unhealthy":"Very Unhealthy","aqi.hazardous":"Hazardous","editor.entity":"Entity (required)","editor.name":"Name","editor.show_name":"Show Name","editor.show_state":"Show State","editor.show_toolbar":"Show Toolbar","editor.show_power":"Show Power","editor.show_daily_consumption":"Show Daily","editor.show_monthly_consumption":"Show Monthly","editor.show_yearly_consumption":"Show Yearly","editor.show_settings":"Show Settings","editor.show_filter_info":"Show Filter Info","editor.compact_view":"Compact View","editor.icon_animation":"Icon Animation","editor.entity_overrides":"Entity Overrides","editor.pm25_entity":"PM2.5 Entity","editor.temperature_entity":"Temperature Entity","editor.humidity_entity":"Humidity Entity","editor.motor_speed_entity":"Motor Speed Entity","editor.filter_life_entity":"Filter Life Entity","editor.filter_used_time_entity":"Filter Used Time Entity","editor.favorite_level_entity":"Favorite Level Entity","editor.child_lock_entity":"Child Lock Entity","editor.led_entity":"LED Entity","editor.buzzer_entity":"Buzzer Entity","light.card.name":"Light","light.card.description":"Card for light entities","editor.show_brightness_control":"Brightness Control","editor.show_color_temp_control":"Color Temp Control","editor.show_color_control":"Color Control","editor.use_light_color":"Use Light Color","editor.hide_controls_when_off":"Hide controls when off","plug.card.name":"Plug","plug.card.description":"Card for smart plug/socket entities","stats.power":"Power","stats.daily":"Daily","stats.monthly":"Monthly","stats.yearly":"Yearly","settings.power_on_behavior":"Power-On","editor.power_on_behavior":"Power-On Behavior","editor.power_entity":"Power Entity","editor.daily_consumption_entity":"Daily Consumption","editor.monthly_consumption_entity":"Monthly Consumption","editor.yearly_consumption_entity":"Yearly Consumption","editor.power_on_behavior_entity":"Power-On Behavior Entity","plug-group.card.name":"Plug Group","plug-group.card.description":"Group card for multiple smart plugs","editor.entities":"Entities","editor.show_individual":"Show Individual","editor.device_controls":"Device Controls","timer.card.name":"Timer","timer.card.description":"Schedule on/off timers for any entity","timer.title":"Timer","timer.duration_mode":"After","timer.time_mode":"At time","timer.hours":"h","timer.minutes":"min","timer.start":"Start Timer","timer.cancel":"Cancel","timer.active":"Active timers","timer.turn_on":"Turn On","timer.turn_off":"Turn Off","timer.toggle":"Toggle","timer.custom":"Custom","timer.action":"Action","timer.no_active":"No active timers","timer.recurring":"Recurring timers","timer.day_mon":"Mon","timer.day_tue":"Tue","timer.day_wed":"Wed","timer.day_thu":"Thu","timer.day_fri":"Fri","timer.day_sat":"Sat","timer.day_sun":"Sun","editor.show_timer":"Show timer","editor.default_action":"Default action","editor.show_presets":"Show presets"},ru:{"card.name":"Очиститель воздуха","card.description":"Карточка для Xiaomi Air Purifier","state.on":"Вкл","state.off":"Выкл","state.unavailable":"Недоступен","stats.pm25":"PM2.5","stats.temperature":"Темп.","stats.humidity":"Влажн.","stats.motor_speed":"Мотор","filter.life":"Ресурс фильтра","filter.used_time":"Использован","filter.hours":"ч","settings.child_lock":"Блокировка","settings.led":"Подсветка","settings.buzzer":"Звук","aqi.good":"Отлично","aqi.moderate":"Нормально","aqi.unhealthy_sensitive":"Вредно (чувств.)","aqi.unhealthy":"Вредно","aqi.very_unhealthy":"Очень вредно","aqi.hazardous":"Опасно","editor.entity":"Объект (обязательно)","editor.name":"Название","editor.show_name":"Показать название","editor.show_state":"Показать состояние","editor.show_toolbar":"Показать режимы","editor.show_power":"Мощность","editor.show_daily_consumption":"За день","editor.show_monthly_consumption":"За месяц","editor.show_yearly_consumption":"За год","editor.show_settings":"Показать настройки","editor.show_filter_info":"Показать фильтр","editor.compact_view":"Компактный вид","editor.icon_animation":"Анимация иконки","editor.entity_overrides":"Переопределение объектов","editor.pm25_entity":"PM2.5","editor.temperature_entity":"Температура","editor.humidity_entity":"Влажность","editor.motor_speed_entity":"Скорость мотора","editor.filter_life_entity":"Ресурс фильтра","editor.filter_used_time_entity":"Время использования фильтра","editor.favorite_level_entity":"Уровень Favorite","editor.child_lock_entity":"Детский замок","editor.led_entity":"LED индикатор","editor.buzzer_entity":"Звуковой сигнал","light.card.name":"Свет","light.card.description":"Карточка для управления светом","editor.show_brightness_control":"Яркость","editor.show_color_temp_control":"Цвет. температура","editor.show_color_control":"Цвет","editor.use_light_color":"Цвет лампы","editor.hide_controls_when_off":"Скрывать управление при выключении","plug.card.name":"Розетка","plug.card.description":"Карточка для умной розетки","stats.power":"Мощность","stats.daily":"Сегодня","stats.monthly":"За месяц","stats.yearly":"За год","settings.power_on_behavior":"При вкл.","editor.power_on_behavior":"Поведение при включении","editor.power_entity":"Мощность","editor.daily_consumption_entity":"Потребление за день","editor.monthly_consumption_entity":"Потребление за месяц","editor.yearly_consumption_entity":"Потребление за год","editor.power_on_behavior_entity":"Поведение при включении","plug-group.card.name":"Группа розеток","plug-group.card.description":"Карточка для группы розеток","editor.entities":"Устройства","editor.show_individual":"Отдельные розетки","editor.device_controls":"Управление устройствами","timer.card.name":"Таймер","timer.card.description":"Таймеры включения/выключения устройств","timer.title":"Таймер","timer.duration_mode":"Через","timer.time_mode":"В конкретное время","timer.hours":"ч","timer.minutes":"мин","timer.start":"Запустить","timer.cancel":"Отменить","timer.active":"Активные таймеры","timer.turn_on":"Включить","timer.turn_off":"Выключить","timer.toggle":"Переключить","timer.custom":"Кастомное","timer.action":"Действие","timer.no_active":"Нет активных таймеров","timer.recurring":"Повторяющиеся","timer.day_mon":"ПН","timer.day_tue":"ВТ","timer.day_wed":"СР","timer.day_thu":"ЧТ","timer.day_fri":"ПТ","timer.day_sat":"СБ","timer.day_sun":"ВС","editor.show_timer":"Показывать таймер","editor.default_action":"Действие по умолчанию","editor.show_presets":"Показывать пресеты"}};function mt(t,e="en"){return _t[e]?.[t]??_t.en?.[t]??t}const gt=r`
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
`,ft="hac-air-purifier-card",yt="hac-air-purifier-card-editor",vt=r`
  .timer-control {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-left: auto;
    flex-shrink: 0;
  }
  .timer-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
    background: var(--secondary-background-color, rgba(111, 111, 111, 0.12));
    color: var(--secondary-text-color);
    cursor: pointer;
    transition: background 0.2s;
  }
  .timer-btn:hover {
    background: rgba(111, 111, 111, 0.2);
  }
  .timer-btn.active {
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
  }
  .timer-btn ha-icon {
    --mdc-icon-size: 20px;
  }
`,bt=r`
  .not-found {
    padding: 16px;
    text-align: center;
    color: var(--secondary-text-color);
    font-size: 14px;
  }
`,$t=[vt,bt,r`
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

`];function wt(t,e){if(!t.entities)return[];const i=t.entities[e];if(!i?.device_id)return[];const s=i.device_id;return Object.values(t.entities).filter(t=>t.device_id===s).map(t=>t.entity_id)}function xt(t,e,i,s){const o=i.endsWith(".")?i:i+".",n=e.filter(e=>e.startsWith(o)&&t.states[e]);if(0===n.length)return;if(!s)return n[0];const{deviceClass:r,keywords:a}=s,c=e=>!!r&&t.states[e]?.attributes.device_class===r,l=t=>!(!a||0===a.length)&&a.some(e=>t.includes(e)),d=n.find(t=>c(t)&&l(t));if(d)return d;const h=n.find(t=>c(t));if(h)return h;const u=n.find(t=>l(t));return u||void 0}function kt(t){return t.attributes.preset_mode}function Ct(t,e){const i=function(t,e){if(!e)return;const i=t.states[e];return i&&"unavailable"!==i.state&&"unknown"!==i.state?i.state:void 0}(t,e);if(void 0===i)return;const s=parseFloat(i);return isNaN(s)?void 0:s}function St(t){const e=window;e.customCards=e.customCards||[],e.customCards.some(e=>e.type===t.type)||e.customCards.push(t)}function Et(t,e,i,s,o){t.callService(e,i,{entity_id:s,...o})}function At(t,e){Et(t,e.split(".")[0],"toggle",e)}function Ot(t,e,i){Et(t,e.split(".")[0],"turn_on",e,i)}function zt(t,e,i,s,o){if(0===i.length)return q;const n=i=>{o||Ot(t,e),function(t,e,i){Et(t,"fan","set_preset_mode",e,{preset_mode:i})}(t,e,i)};return K`
    <div class="toolbar">
      ${i.map(t=>{const e=s?.toLowerCase()===t.toLowerCase();return K`
          <button
            class=${e?"active":""}
            @click=${()=>n(t)}
          >${t}</button>
        `})}
    </div>
  `}function Mt(t,e){if(!e)return q;const i=t.states[e];if(!i)return q;const s=Ct(t,e)??0,o=i.attributes.min??0,n=i.attributes.max??14,r=i.attributes.step??1;return K`
    <div class="favorite-row">
      <hac-slider
        .value=${s}
        .min=${o}
        .max=${n}
        .step=${r}
        @value-changed=${i=>{!function(t,e,i){Et(t,"number","set_value",e,{value:i})}(t,e,i.detail.value)}}
      ></hac-slider>
      <span class="favorite-label">${Math.round(s)}</span>
    </div>
  `}const Pt=new class{constructor(){this._schedules=new Map,this._subscribers=new Set,this._unsubscribe=null,this._connected=!1,this._pollInterval=null,this._hass=null,this._pollFailures=0}async connect(t){if(!this._connected){this._connected=!0,this._hass=t;try{const e=await t.callWS({type:"hac/scheduler/list"});this._updateFromList(e.schedules)}catch(t){return void(this._connected=!1)}try{const e=await t.connection.subscribeMessage(t=>{const e=t.schedule;"created"===t.type||"updated"===t.type?(this._removeSchedule(e.id),"active"===e.status&&this._addSchedule(e)):"cancelled"!==t.type&&"triggered"!==t.type||this._removeSchedule(e.id),this._notifySubscribers()},{type:"hac/scheduler/subscribe"});this._unsubscribe=e}catch{this._startPolling()}}}disconnect(){this._unsubscribe&&(this._unsubscribe(),this._unsubscribe=null),this._stopPolling(),this._connected=!1,this._hass=null,this._schedules.clear()}_startPolling(){this._stopPolling(),this._pollFailures=0,this._schedulePoll()}_schedulePoll(){const t=Math.min(15e3*Math.pow(2,this._pollFailures),3e5);this._pollInterval=setTimeout(async()=>{if(this._hass){try{const t=await this._hass.callWS({type:"hac/scheduler/list"});this._updateFromList(t.schedules),this._pollFailures=0}catch{this._pollFailures++}this._schedulePoll()}},t)}_stopPolling(){this._pollInterval&&(clearTimeout(this._pollInterval),this._pollInterval=null)}async createSchedule(t,e){try{const i=await t.callWS({type:"hac/scheduler/create",...e});return{id:i.schedule_id,target_entity:e.target_entity,action:e.action,trigger_at:i.trigger_at,created_at:(new Date).toISOString(),status:i.status,duration:e.duration,service:e.service,service_data:e.service_data,recurring:!!e.days_of_week||void 0,days_of_week:e.days_of_week}}catch(t){return console.error("[hac-scheduler] Failed to create schedule:",t),null}}async cancelSchedule(t,e){try{return await t.callWS({type:"hac/scheduler/cancel",schedule_id:e}),!0}catch(t){return console.error("[hac-scheduler] Failed to cancel schedule:",t),!1}}getSchedulesForEntity(t){return[...this._schedules.get(t)||[]]}subscribe(t){return this._subscribers.add(t),()=>this._subscribers.delete(t)}_updateFromList(t){this._schedules.clear();for(const e of t)if("active"===e.status){const t=this._schedules.get(e.target_entity)||[];t.push(e),this._schedules.set(e.target_entity,t)}this._notifySubscribers()}_addSchedule(t){const e=this._schedules.get(t.target_entity)||[];e.push(t),this._schedules.set(t.target_entity,e)}_removeSchedule(t){for(const[e,i]of this._schedules.entries()){const s=i.findIndex(e=>e.id===t);if(-1!==s){i.splice(s,1),0===i.length&&this._schedules.delete(e);break}}}_notifySubscribers(){const t=[];for(const e of this._schedules.values())t.push(...e);for(const e of this._subscribers)e(t)}};function Dt(t,e){switch(t){case"turn_on":return mt("timer.turn_on",e);case"turn_off":return mt("timer.turn_off",e);case"toggle":return mt("timer.toggle",e);default:return t}}function Tt(t,e){const i={target_entity:t,action:e.action};return e.duration?i.duration=e.duration:e.time&&(i.time=e.time),e.days_of_week?.length&&(i.days_of_week=e.days_of_week),i}var Lt;const It=[300,600,900,1800,3600,7200];let Ut=Lt=class extends at{constructor(){super(...arguments),this.lang="en",this.presets=It,this.action="turn_off",this.disabled=!1,this._mode="duration",this._hours=0,this._minutes=10,this._timeValue="",this._selectedAction="turn_off",this._selectedDays=[]}connectedCallback(){super.connectedCallback(),this._selectedAction=this.action}_formatPreset(t){if(t>=3600){return`${t/3600}${mt("timer.hours",this.lang)}`}return`${t/60}${mt("timer.minutes",this.lang)}`}_setMode(t){this._mode=t,"duration"===t&&(this._selectedDays=[])}_toggleDay(t){this._selectedDays.includes(t)?this._selectedDays=this._selectedDays.filter(e=>e!==t):this._selectedDays=[...this._selectedDays,t].sort()}_selectPreset(t){this._hours=Math.floor(t/3600),this._minutes=Math.floor(t%3600/60)}_onHoursChange(t){const e=t.target;this._hours=Math.max(0,Math.min(23,parseInt(e.value)||0))}_onMinutesChange(t){const e=t.target;this._minutes=Math.max(0,Math.min(59,parseInt(e.value)||0))}_onTimeChange(t){const e=t.target;this._timeValue=e.value}_onActionChange(t){const e=t.target;this._selectedAction=e.value}_startTimer(){if(!this.disabled)if("duration"===this._mode){const t=3600*this._hours+60*this._minutes;if(t<=0)return;this.dispatchEvent(new CustomEvent("timer-start",{detail:{duration:t,action:this._selectedAction},bubbles:!0,composed:!0}))}else{if(!this._timeValue)return;const t={time:this._timeValue,action:this._selectedAction};t.days_of_week=this._selectedDays.length>0?this._selectedDays:[0,1,2,3,4,5,6],this.dispatchEvent(new CustomEvent("timer-start",{detail:t,bubbles:!0,composed:!0}))}}render(){const t=this.lang;return K`
      <div class="picker">
        <div class="mode-toggle">
          <button
            class=${"duration"===this._mode?"active":""}
            @click=${()=>this._setMode("duration")}
          >
            ${mt("timer.duration_mode",t)}
          </button>
          <button
            class=${"time"===this._mode?"active":""}
            @click=${()=>this._setMode("time")}
          >
            ${mt("timer.time_mode",t)}
          </button>
        </div>

        ${"duration"===this._mode?this._renderDuration(t):this._renderTime()}

        <div class="action-row">
          <span class="action-label">${mt("timer.action",t)}</span>
          <select .value=${this._selectedAction} @change=${this._onActionChange}>
            <option value="turn_off">${mt("timer.turn_off",t)}</option>
            <option value="turn_on">${mt("timer.turn_on",t)}</option>
            <option value="toggle">${mt("timer.toggle",t)}</option>
          </select>
        </div>

        <button
          class="start-btn"
          ?disabled=${this.disabled}
          @click=${this._startTimer}
        >
          ${mt("timer.start",t)}
        </button>
      </div>
    `}_renderDuration(t){return K`
      <div class="duration-inputs">
        <div class="input-group">
          <input
            type="number"
            min="0"
            max="23"
            .value=${String(this._hours)}
            @change=${this._onHoursChange}
          />
          <span>${mt("timer.hours",t)}</span>
        </div>
        <div class="input-group">
          <input
            type="number"
            min="0"
            max="59"
            .value=${String(this._minutes)}
            @change=${this._onMinutesChange}
          />
          <span>${mt("timer.minutes",t)}</span>
        </div>
      </div>
      ${this.presets.length>0?K`
            <div class="presets">
              ${this.presets.map(t=>K`
                  <button
                    class="preset-chip"
                    @click=${()=>this._selectPreset(t)}
                  >
                    ${this._formatPreset(t)}
                  </button>
                `)}
            </div>
          `:q}
    `}_renderTime(){const t=this.lang;return K`
      <div class="time-input">
        <input
          type="time"
          .value=${this._timeValue}
          @change=${this._onTimeChange}
        />
      </div>
      <div class="day-chips">
        ${Lt.DAY_KEYS.map((e,i)=>K`
          <button
            class="day-chip ${this._selectedDays.includes(i)?"selected":""}"
            @click=${()=>this._toggleDay(i)}
          >${mt(e,t)}</button>
        `)}
      </div>
    `}};Ut.DAY_KEYS=["timer.day_mon","timer.day_tue","timer.day_wed","timer.day_thu","timer.day_fri","timer.day_sat","timer.day_sun"],Ut.styles=r`
    :host {
      display: block;
    }
    .picker {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .mode-toggle {
      display: flex;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
    }
    .mode-toggle button {
      flex: 1;
      padding: 8px 12px;
      border: none;
      background: transparent;
      color: var(--primary-text-color);
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.2s, color 0.2s;
    }
    .mode-toggle button.active {
      background: var(--primary-color);
      color: var(--text-primary-color, #fff);
    }
    .duration-inputs {
      display: flex;
      gap: 12px;
      align-items: center;
    }
    .input-group {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .input-group input {
      width: 56px;
      padding: 8px;
      border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
      border-radius: 8px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font-size: 16px;
      text-align: center;
      outline: none;
    }
    .input-group input:focus {
      border-color: var(--primary-color);
    }
    .input-group span {
      font-size: 13px;
      color: var(--secondary-text-color);
    }
    .time-input input {
      width: 100%;
      padding: 10px;
      border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
      border-radius: 8px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font-size: 16px;
      outline: none;
      box-sizing: border-box;
    }
    .time-input input:focus {
      border-color: var(--primary-color);
    }
    .presets {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .preset-chip {
      padding: 6px 14px;
      border-radius: 16px;
      border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
      background: var(--secondary-background-color, rgba(111, 111, 111, 0.12));
      color: var(--primary-text-color);
      font-size: 13px;
      cursor: pointer;
      transition: background 0.2s;
    }
    .preset-chip:hover {
      background: var(--primary-color);
      color: var(--text-primary-color, #fff);
      border-color: var(--primary-color);
    }
    .action-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }
    .action-label {
      font-size: 13px;
      color: var(--secondary-text-color);
    }
    .action-row select {
      padding: 6px 10px;
      border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
      border-radius: 8px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font-size: 13px;
      outline: none;
    }
    .day-chips {
      display: flex;
      gap: 6px;
      justify-content: center;
    }
    .day-chip {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
      background: var(--secondary-background-color, rgba(111, 111, 111, 0.12));
      color: var(--primary-text-color);
      font-size: 11px;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.2s, color 0.2s, border-color 0.2s;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .day-chip.selected {
      background: var(--primary-color);
      color: var(--text-primary-color, #fff);
      border-color: var(--primary-color);
    }
    .start-btn {
      width: 100%;
      padding: 10px;
      border: none;
      border-radius: 8px;
      background: var(--primary-color);
      color: var(--text-primary-color, #fff);
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: opacity 0.2s;
    }
    .start-btn:hover {
      opacity: 0.9;
    }
    .start-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `,t([ht()],Ut.prototype,"lang",void 0),t([ht({type:Array})],Ut.prototype,"presets",void 0),t([ht()],Ut.prototype,"action",void 0),t([ht({type:Boolean})],Ut.prototype,"disabled",void 0),t([ut()],Ut.prototype,"_mode",void 0),t([ut()],Ut.prototype,"_hours",void 0),t([ut()],Ut.prototype,"_minutes",void 0),t([ut()],Ut.prototype,"_timeValue",void 0),t([ut()],Ut.prototype,"_selectedAction",void 0),t([ut()],Ut.prototype,"_selectedDays",void 0),Ut=Lt=t([pt("hac-timer-picker")],Ut);const Ht=["timer.day_mon","timer.day_tue","timer.day_wed","timer.day_thu","timer.day_fri","timer.day_sat","timer.day_sun"];let Nt=class extends at{constructor(){super(...arguments),this.compact=!1,this.lang="en",this._remaining=""}connectedCallback(){super.connectedCallback(),this._updateCountdown(),this.schedule?.recurring||(this._interval=setInterval(()=>this._updateCountdown(),1e3))}disconnectedCallback(){super.disconnectedCallback(),this._interval&&(clearInterval(this._interval),this._interval=void 0)}updated(t){t.has("schedule")&&this._updateCountdown()}_updateCountdown(){if(!this.schedule)return;if(this.schedule.recurring)return void(this._remaining=this._formatRecurring());const t=Date.now(),e=new Date(this.schedule.trigger_at).getTime(),i=Math.max(0,e-t);if(0===i)return this._remaining="00:00",void(this._interval&&(clearInterval(this._interval),this._interval=void 0));const s=Math.floor(i/1e3),o=Math.floor(s/3600),n=Math.floor(s%3600/60),r=s%60,a=t=>String(t).padStart(2,"0");this._remaining=o>0?`${a(o)}:${a(n)}:${a(r)}`:`${a(n)}:${a(r)}`}_formatRecurring(){const t=new Date(this.schedule.trigger_at),e=`${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`,i=this.schedule.days_of_week;if(!i||7===i.length)return e;const s=(t.getDay()+6)%7;return`${mt(Ht[s],this.lang)} ${e}`}get _actionClass(){switch(this.schedule?.action){case"turn_on":return"action-on";case"turn_off":return"action-off";case"toggle":return"action-toggle";default:return""}}_cancel(){this.dispatchEvent(new CustomEvent("timer-cancel",{detail:{scheduleId:this.schedule.id},bubbles:!0,composed:!0}))}get _icon(){return this.schedule?.recurring?"mdi:calendar-clock":"mdi:timer-outline"}render(){return this.compact?K`
        <span class="badge compact ${this._actionClass}" @click=${this._cancel}>
          <ha-icon icon=${this._icon}></ha-icon>
          ${this._remaining}
        </span>
      `:K`
      <span class="badge ${this._actionClass}" @click=${this._cancel}>
        <ha-icon icon=${this._icon}></ha-icon>
        ${this._remaining}
      </span>
    `}};Nt.styles=r`
    :host {
      display: inline-flex;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 4px 10px;
      border-radius: 16px;
      background: var(--primary-color);
      color: var(--text-primary-color, #fff);
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      transition: opacity 0.2s;
      white-space: nowrap;
    }
    .badge:hover {
      opacity: 0.85;
    }
    .badge ha-icon {
      --mdc-icon-size: 14px;
    }
    .action-on { background: #4caf50; }
    .action-off { background: #f44336; }
    .action-toggle { background: #ff9800; }
    .compact {
      padding: 2px 8px;
      font-size: 11px;
    }
    .compact ha-icon {
      --mdc-icon-size: 12px;
    }
  `,t([ht({attribute:!1})],Nt.prototype,"schedule",void 0),t([ht({type:Boolean})],Nt.prototype,"compact",void 0),t([ht()],Nt.prototype,"lang",void 0),t([ut()],Nt.prototype,"_remaining",void 0),Nt=t([pt("hac-timer-badge")],Nt);const Rt=["timer.day_mon","timer.day_tue","timer.day_wed","timer.day_thu","timer.day_fri","timer.day_sat","timer.day_sun"];let jt=class extends at{constructor(){super(...arguments),this.entityId="",this.entityName="",this.open=!1,this.defaultAction="turn_off",this._schedules=[]}get _primaryEntityId(){return Array.isArray(this.entityId)?this.entityId[0]:this.entityId}connectedCallback(){super.connectedCallback(),this._unsubscribe=Pt.subscribe(()=>{this._schedules=Pt.getSchedulesForEntity(this._primaryEntityId)})}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribe?.()}updated(t){t.has("hass")&&this.hass&&Pt.connect(this.hass),t.has("entityId")&&(this._schedules=Pt.getSchedulesForEntity(this._primaryEntityId))}_close(){this.open=!1,this.dispatchEvent(new CustomEvent("dialog-closed",{bubbles:!0,composed:!0}))}async _onTimerStart(t){const e=Array.isArray(this.entityId)&&this.entityId.length>1?function(t,e){const i=t[0].split(".")[0],s={target_entity:t[0],action:"custom",service:`${i}.${e.action}`,service_data:{entity_id:t}};return e.duration?s.duration=e.duration:e.time&&(s.time=e.time),e.days_of_week?.length&&(s.days_of_week=e.days_of_week),s}(this.entityId,t.detail):Tt(this._primaryEntityId,t.detail);await Pt.createSchedule(this.hass,e)}async _cancelSchedule(t){await Pt.cancelSchedule(this.hass,t)}render(){if(!this.open)return q;const t=this.hass?.language||"en";return K`
      <ha-dialog
        .open=${this.open}
        @closed=${this._close}
        .heading=${mt("timer.title",t)}
      >
        <div class="dialog-content">
          <div class="entity-header">
            <span class="entity-name">${this.entityName}</span>
          </div>

          <hac-timer-picker
            .lang=${t}
            .action=${this.defaultAction}
            @timer-start=${this._onTimerStart}
          ></hac-timer-picker>

          ${this._renderOneShotSection(t)}
          ${this._renderRecurringSection(t)}
        </div>
      </ha-dialog>
    `}_renderOneShotSection(t){const e=this._schedules.filter(t=>!t.recurring);return 0===e.length?q:K`
      <div class="active-section">
        <div class="section-title">${mt("timer.active",t)}</div>
        ${e.map(e=>K`
            <div class="active-item">
              <hac-timer-badge .schedule=${e}></hac-timer-badge>
              <span class="action-text">${Dt(e.action,t)}</span>
              <button class="cancel-btn" @click=${()=>this._cancelSchedule(e.id)}>
                <ha-icon icon="mdi:close"></ha-icon>
              </button>
            </div>
          `)}
      </div>
    `}_renderRecurringSection(t){const e=this._schedules.filter(t=>t.recurring);return 0===e.length?q:K`
      <div class="active-section">
        <div class="section-title">${mt("timer.recurring",t)}</div>
        ${e.map(e=>K`
            <div class="active-item">
              <ha-icon class="recurring-icon" icon="mdi:calendar-clock"></ha-icon>
              <span class="recurring-info">
                ${e.days_of_week?function(t,e){return t.map(t=>mt(Rt[t],e)).join(", ")}(e.days_of_week,t):""}
                ${e.trigger_at?function(t){const e=new Date(t);return`${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}`}(e.trigger_at):""}
              </span>
              <span class="action-text">${Dt(e.action,t)}</span>
              <button class="cancel-btn" @click=${()=>this._cancelSchedule(e.id)}>
                <ha-icon icon="mdi:close"></ha-icon>
              </button>
            </div>
          `)}
      </div>
    `}};function Ft(t,e,i="en"){const s=t.length>0;return K`
    <div class="timer-control">
      <button class="timer-btn ${s?"active":""}" @click=${e}>
        <ha-icon icon="mdi:timer-outline"></ha-icon>
      </button>
      ${s?t.map(t=>K`<hac-timer-badge .schedule=${t} .lang=${i} compact></hac-timer-badge>`):q}
    </div>
  `}function Kt(t,e,i,s,o,n){return K`
    <hac-timer-dialog
      .hass=${t}
      .entityId=${e}
      .entityName=${i}
      .open=${s}
      .defaultAction=${o}
      @dialog-closed=${n}
    ></hac-timer-dialog>
  `}jt.styles=r`
    :host {
      display: block;
    }
    .dialog-content {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 0 8px 8px;
      min-width: 280px;
    }
    .entity-header {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .entity-name {
      font-size: 16px;
      font-weight: 500;
      color: var(--primary-text-color);
    }
    .active-section {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .section-title {
      font-size: 13px;
      font-weight: 500;
      color: var(--secondary-text-color);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .active-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 0;
    }
    .action-text {
      flex: 1;
      font-size: 13px;
      color: var(--primary-text-color);
    }
    .cancel-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px;
      border: none;
      background: none;
      color: var(--secondary-text-color);
      cursor: pointer;
      border-radius: 50%;
      transition: background 0.2s;
    }
    .cancel-btn:hover {
      background: var(--secondary-background-color, rgba(111, 111, 111, 0.12));
    }
    .cancel-btn ha-icon {
      --mdc-icon-size: 18px;
    }
    .recurring-icon {
      --mdc-icon-size: 20px;
      color: var(--primary-color);
      flex-shrink: 0;
    }
    .recurring-info {
      font-size: 13px;
      color: var(--primary-text-color);
      white-space: nowrap;
    }
  `,t([ht({attribute:!1})],jt.prototype,"hass",void 0),t([ht({attribute:!1})],jt.prototype,"entityId",void 0),t([ht()],jt.prototype,"entityName",void 0),t([ht({type:Boolean})],jt.prototype,"open",void 0),t([ht()],jt.prototype,"defaultAction",void 0),t([ut()],jt.prototype,"_schedules",void 0),jt=t([pt("hac-timer-dialog")],jt);const Bt=r`
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
  }
  .spin {
    animation: spin 1.5s linear infinite;
  }
  .pulse {
    animation: pulse 2s ease-in-out infinite;
  }
`;let qt=class extends at{constructor(){super(...arguments),this.icon="mdi:air-purifier",this.active=!1,this.animated=!0,this.animation="spin"}render(){const t=this.active&&this.animated?this.animation:"";return K`
      <div class="shape ${this.active?"active":""}">
        <ha-icon .icon=${this.icon} class=${t}></ha-icon>
      </div>
    `}};qt.styles=[Bt,r`
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
  `],t([ht()],qt.prototype,"icon",void 0),t([ht({type:Boolean})],qt.prototype,"active",void 0),t([ht({type:Boolean})],qt.prototype,"animated",void 0),t([ht()],qt.prototype,"animation",void 0),qt=t([pt("hac-shape-icon")],qt);let Wt=class extends at{constructor(){super(...arguments),this.primary="",this.secondary=""}render(){return K`
      ${this.primary?K`<span class="primary">${this.primary}</span>`:q}
      ${this.secondary?K`<span class="secondary">${this.secondary}</span>`:q}
    `}};Wt.styles=r`
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
  `,t([ht()],Wt.prototype,"primary",void 0),t([ht()],Wt.prototype,"secondary",void 0),Wt=t([pt("hac-state-info")],Wt);let Vt=class extends at{render(){return K`
      <div class="container">
        <slot name="icon"></slot>
        <slot name="info"></slot>
      </div>
    `}};Vt.styles=r`
    :host {
      display: block;
    }
    .container {
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 0;
    }
  `,Vt=t([pt("hac-state-item")],Vt);let Yt=class extends at{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.step=1,this.disabled=!1}_onChange(t){const e=t.target,i=Number(e.value);this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:i},bubbles:!0,composed:!0}))}render(){const t=(this.value-this.min)/(this.max-this.min)*100;return K`
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
    `}};Yt.styles=r`
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
  `,t([ht({type:Number})],Yt.prototype,"value",void 0),t([ht({type:Number})],Yt.prototype,"min",void 0),t([ht({type:Number})],Yt.prototype,"max",void 0),t([ht({type:Number})],Yt.prototype,"step",void 0),t([ht({type:Boolean})],Yt.prototype,"disabled",void 0),Yt=t([pt("hac-slider")],Yt);let Gt=class extends at{constructor(){super(...arguments),this.value=0,this.color="var(--primary-color)"}render(){const t=Math.min(100,Math.max(0,this.value));return K`
      <div class="bar">
        <div class="fill" style="width: ${t}%; background: ${this.color}"></div>
      </div>
    `}};Gt.styles=r`
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
  `,t([ht({type:Number})],Gt.prototype,"value",void 0),t([ht()],Gt.prototype,"color",void 0),Gt=t([pt("hac-progress-bar")],Gt);let Jt=class extends at{constructor(){super(...arguments),this.icon="",this.active=!1,this.label=""}_handleClick(){this.dispatchEvent(new CustomEvent("toggle",{bubbles:!0,composed:!0}))}render(){return K`
      <button
        class=${this.active?"active":""}
        @click=${this._handleClick}
        title=${this.label}
      >
        <ha-icon .icon=${this.icon}></ha-icon>
      </button>
    `}};Jt.styles=r`
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
  `,t([ht()],Jt.prototype,"icon",void 0),t([ht({type:Boolean})],Jt.prototype,"active",void 0),t([ht()],Jt.prototype,"label",void 0),Jt=t([pt("hac-toggle-button")],Jt);const Xt=r`
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
`;function Zt(t,e){const i=t?.language||"en";return mt(`editor.${e.name}`,i)||e.name}function Qt(t,e){t.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))}const te=[{name:"entity",required:!0,selector:{entity:{domain:"fan"}}},{name:"name",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"show_name",selector:{boolean:{}}},{name:"show_state",selector:{boolean:{}}},{name:"show_toolbar",selector:{boolean:{}}},{name:"show_stats",selector:{boolean:{}}},{name:"show_settings",selector:{boolean:{}}},{name:"show_filter_info",selector:{boolean:{}}},{name:"compact_view",selector:{boolean:{}}},{name:"icon_animation",selector:{boolean:{}}},{name:"show_timer",selector:{boolean:{}}}]}],ee=[{name:"pm25_entity",selector:{entity:{domain:"sensor"}}},{name:"temperature_entity",selector:{entity:{domain:"sensor"}}},{name:"humidity_entity",selector:{entity:{domain:"sensor"}}},{name:"motor_speed_entity",selector:{entity:{domain:"sensor"}}},{name:"filter_life_entity",selector:{entity:{domain:"sensor"}}},{name:"filter_used_time_entity",selector:{entity:{domain:"sensor"}}},{name:"favorite_level_entity",selector:{entity:{domain:"number"}}},{name:"child_lock_entity",selector:{entity:{domain:"switch"}}},{name:"led_entity",selector:{entity:{}}},{name:"buzzer_entity",selector:{entity:{domain:"switch"}}}];let ie=class extends at{constructor(){super(...arguments),this._expandedOverrides=!1,this._computeLabel=t=>Zt(this.hass,t)}setConfig(t){this._config=t}_valueChanged(t){Qt(this,t.detail.value)}_overrideValueChanged(t){Qt(this,{...this._config,...t.detail.value})}_toggleOverrides(){this._expandedOverrides=!this._expandedOverrides}render(){if(!this.hass||!this._config)return q;const t=this.hass.language||"en",e={show_name:!0,show_state:!0,show_toolbar:!0,show_stats:!0,show_settings:!0,show_filter_info:!0,compact_view:!1,icon_animation:!0,...this._config};return K`
      <ha-form
        .hass=${this.hass}
        .data=${e}
        .schema=${te}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>

      <div class="overrides-section">
        <button class="overrides-toggle" @click=${this._toggleOverrides}>
          <ha-icon icon=${this._expandedOverrides?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
          ${mt("editor.entity_overrides",t)}
        </button>
        ${this._expandedOverrides?K`
          <ha-form
            .hass=${this.hass}
            .data=${this._config}
            .schema=${ee}
            .computeLabel=${this._computeLabel}
            @value-changed=${this._overrideValueChanged}
          ></ha-form>
        `:q}
      </div>
    `}};ie.styles=[Xt,r`
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
  `],t([ht({attribute:!1})],ie.prototype,"hass",void 0),t([ut()],ie.prototype,"_config",void 0),t([ut()],ie.prototype,"_expandedOverrides",void 0),ie=t([pt(yt)],ie),St({type:ft,name:"Air Purifier Card",description:"Custom card for Xiaomi Air Purifier"});let se=class extends at{constructor(){super(...arguments),this._timerDialogOpen=!1,this._schedules=[],this._schedulerConnected=!1}static getConfigElement(){return document.createElement(yt)}static getStubConfig(t){const e=Object.keys(t.states).filter(e=>e.startsWith("fan.")&&t.states[e].attributes.preset_modes);return{entity:e[0]||""}}setConfig(t){if(!t.entity)throw new Error("Entity is required");this._config=t}getCardSize(){return this._config?.compact_view?2:4}disconnectedCallback(){super.disconnectedCallback(),this._schedulerUnsub?.()}shouldUpdate(t){if(t.has("_config")||t.has("_timerDialogOpen")||t.has("_schedules"))return!0;if(!t.has("hass"))return!0;const e=t.get("hass");if(!e)return!0;const i=this._config.entity;if(e.states[i]!==this.hass.states[i])return!0;const s=this._getResolved();for(const t of Object.values(s))if(t&&e.states[t]!==this.hass.states[t])return!0;return!1}updated(t){t.has("hass")&&this.hass&&!this._schedulerConnected&&this._config?.show_timer&&(this._schedulerConnected=!0,this._schedulerUnsub=Pt.subscribe(()=>{this._schedules=Pt.getSchedulesForEntity(this._config?.entity)}),Pt.connect(this.hass),this._schedules=Pt.getSchedulesForEntity(this._config.entity))}_getResolved(){return this._resolved&&this._lastEntity===this._config.entity||(this._lastEntity=this._config.entity,this._resolved=function(t,e){const i=wt(t,e.entity);return{pm25:e.pm25_entity||xt(t,i,"sensor",{deviceClass:"pm25"}),temperature:e.temperature_entity||xt(t,i,"sensor",{deviceClass:"temperature"}),humidity:e.humidity_entity||xt(t,i,"sensor",{deviceClass:"humidity"}),motorSpeed:e.motor_speed_entity||xt(t,i,"sensor",{keywords:["motor_speed"]}),filterLife:e.filter_life_entity||xt(t,i,"sensor",{keywords:["filter_life_level","filter_life"]}),filterUsedTime:e.filter_used_time_entity||xt(t,i,"sensor",{keywords:["filter_used_time"]}),favoriteLevel:e.favorite_level_entity||xt(t,i,"number",{keywords:["favorite"]}),childLock:e.child_lock_entity||xt(t,i,"switch",{keywords:["child_lock","physical_control_locked"]}),led:e.led_entity||xt(t,i,"light",{keywords:["indicator"]})||xt(t,i,"switch",{keywords:["led"]}),buzzer:e.buzzer_entity||xt(t,i,"switch",{keywords:["alarm","buzzer"]})}}(this.hass,this._config)),this._resolved}get _lang(){return this.hass?.language||"en"}render(){if(!this.hass||!this._config)return q;const t=this.hass.states[this._config.entity];if(!t)return K`
        <ha-card>
          <div class="not-found">Entity not found: ${this._config.entity}</div>
        </ha-card>
      `;const e=this._getResolved(),i=function(t){return"on"===t.state}(t),s=this._config.name||t.attributes.friendly_name||"Air Purifier",o=function(t){return t.attributes.preset_modes||[]}(t),n=kt(t),r="favorite"===n?.toLowerCase(),a=this._lang,c=this._config.compact_view;return K`
      <ha-card>
        <div class="container">
          ${this._renderHeader(t,i,s,a)}
          ${c||!1===this._config.show_stats?q:function(t,e,i){const s=[{key:"pm25",entityId:e.pm25,labelKey:"stats.pm25",icon:"mdi:blur"},{key:"temperature",entityId:e.temperature,labelKey:"stats.temperature",icon:"mdi:thermometer"},{key:"humidity",entityId:e.humidity,labelKey:"stats.humidity",icon:"mdi:water-percent"},{key:"motorSpeed",entityId:e.motorSpeed,labelKey:"stats.motor_speed",icon:"mdi:fan"}].filter(e=>!!e.entityId&&void 0!==Ct(t,e.entityId));return 0===s.length?q:K`
    <div class="stats-grid">
      ${s.map(e=>{const s=Ct(t,e.entityId),o=function(t,e){if(!e)return"";const i=t.states[e];return i?.attributes.unit_of_measurement||""}(t,e.entityId),n="pm25"===e.key&&void 0!==s,r=n?`background: ${a=s,a<=12?"var(--green-color, #4caf50)":a<=35?"var(--light-green-color, #8bc34a)":a<=55?"var(--yellow-color, #ffeb3b)":a<=150?"var(--orange-color, #ff9800)":a<=250?"var(--deep-orange-color, #ff5722)":"var(--red-color, #f44336)"}; color: #fff;`:"";var a;return K`
          <div class="stat-item" style=${r}>
            <span class="stat-value">
              ${void 0!==s?Math.round(s):"—"}
              ${o?K`<span class="stat-unit" style=${n?"color: inherit;":""}>${o}</span>`:""}
            </span>
            <span class="stat-label" style=${n?"color: inherit;":""}>${mt(e.labelKey,i)}</span>
          </div>
        `})}
    </div>
  `}(this.hass,e,a)}
          ${!1!==this._config.show_toolbar?zt(this.hass,this._config.entity,o,n,i):q}
          ${i&&r?Mt(this.hass,e.favoriteLevel):q}
          ${c||!1===this._config.show_filter_info?q:function(t,e,i,s){const o=Ct(t,e),n=Ct(t,i);if(void 0===o&&void 0===n)return q;const r=o??0,a=(c=r)>50?"var(--green-color, #4caf50)":c>20?"var(--orange-color, #ff9800)":"var(--red-color, #f44336)";var c;return K`
    <div class="filter-section">
      <div class="filter-header">
        <span>${mt("filter.life",s)}</span>
        <span>
          ${void 0!==o?K`<span class="value">${Math.round(o)}%</span>`:""}
          ${void 0!==n?K` · ${Math.round(n)} ${mt("filter.hours",s)}`:""}
        </span>
      </div>
      ${void 0!==o?K`<hac-progress-bar .value=${r} .color=${a}></hac-progress-bar>`:q}
    </div>
  `}(this.hass,e.filterLife,e.filterUsedTime,a)}
          ${c||!1===this._config.show_settings?q:function(t,e,i,s,o){const n=[{entityId:e,icon:"mdi:lock",labelKey:"settings.child_lock"},{entityId:i,icon:"mdi:lightbulb-outline",labelKey:"settings.led"},{entityId:s,icon:"mdi:volume-high",labelKey:"settings.buzzer"}].filter(e=>e.entityId&&t.states[e.entityId]);return 0===n.length?q:K`
    <div class="settings-row">
      ${n.map(e=>K`
        <hac-toggle-button
          .icon=${e.icon}
          ?active=${function(t,e){const i=t.states[e];return"on"===i?.state}(t,e.entityId)}
          .label=${mt(e.labelKey,o)}
          @toggle=${()=>At(t,e.entityId)}
        ></hac-toggle-button>
      `)}
    </div>
  `}(this.hass,e.childLock,e.led,e.buzzer,a)}
        </div>
        ${this._config.show_timer?Kt(this.hass,this._config.entity,s,this._timerDialogOpen,this._config.timer_default_action||"turn_off",()=>{this._timerDialogOpen=!1}):q}
      </ha-card>
    `}_renderHeader(t,e,i,s){const o=mt(e?"state.on":"state.off",s),n=e?kt(t):void 0,r=n?`${o} · ${n}`:o;return K`
      <div class="header">
        ${function(t,e,i,s){return K`
    <hac-shape-icon
      icon="mdi:air-purifier"
      ?active=${i}
      .animated=${s}
      @click=${()=>At(t,e)}
    ></hac-shape-icon>
  `}(this.hass,this._config.entity,e,!1!==this._config.icon_animation)}
        ${!1!==this._config.show_name||!1!==this._config.show_state?K`
            <hac-state-info
              .primary=${!1!==this._config.show_name?i:""}
              .secondary=${!1!==this._config.show_state?r:""}
            ></hac-state-info>
          `:q}
        ${this._config.show_timer?Ft(this._schedules,()=>{this._timerDialogOpen=!0},s):q}
      </div>
    `}};se.styles=[gt,$t],t([ht({attribute:!1})],se.prototype,"hass",void 0),t([ut()],se.prototype,"_config",void 0),t([ut()],se.prototype,"_timerDialogOpen",void 0),t([ut()],se.prototype,"_schedules",void 0),se=t([pt(ft)],se);const oe="hac-light-card",ne="hac-light-card-editor",re=[vt,bt,r`
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

`];function ae(t){return t.attributes.supported_color_modes||[]}function ce(t){return"on"===t.state}function le(t){const e=t.attributes.brightness;return null==e?ce(t)?100:0:Math.max(1,Math.round(e/255*100))}function de(t){const e=t/100;let i,s,o;return i=e<=66?255:329.698727446*Math.pow(e-60,-.1332047592),s=e<=66?99.4708025861*Math.log(e)-161.1195681661:288.1221695283*Math.pow(e-60,-.0755148492),o=e>=66?255:e<=19?0:138.5177312231*Math.log(e-10)-305.0447927307,[Math.round(Math.min(255,Math.max(0,i))),Math.round(Math.min(255,Math.max(0,s))),Math.round(Math.min(255,Math.max(0,o)))]}function he(t,e,i,s,o,n){const r=n&&s?function(t){if(!ce(t))return;const e=function(t){return t.attributes.rgb_color}(t);if(e)return`rgb(${e[0]}, ${e[1]}, ${e[2]})`;const i=t.attributes.color_temp_kelvin;if(i){const[t,e,s]=de(i);return`rgb(${t}, ${e}, ${s})`}}(i):void 0;return K`
    <hac-shape-icon
      icon="mdi:lightbulb"
      ?active=${s}
      .animated=${o}
      animation="pulse"
      style=${r?`--hac-shape-active-bg: ${r}`:""}
      @click=${()=>At(t,e)}
    ></hac-shape-icon>
  `}function ue(t,e,i,s,o){const n=function(t,e){const i=[];for(let s=0;s<=5;s++){const o=t+s/5*(e-t),[n,r,a]=de(o);i.push(`rgb(${n}, ${r}, ${a})`)}return`linear-gradient(to right, ${i.join(", ")})`}(s,o);return K`
    <div class="control-row">
      <ha-icon icon="mdi:thermometer"></ha-icon>
      <hac-gradient-slider
        .value=${i}
        .min=${s}
        .max=${o}
        .step=${100}
        .gradient=${n}
        @value-changed=${i=>{const s=i.detail.value;Ot(t,e,{color_temp_kelvin:s})}}
      ></hac-gradient-slider>
      <span class="value">${i}K</span>
    </div>
  `}function pe(t,e,i){return K`
    <div class="control-row">
      <ha-icon icon="mdi:palette"></ha-icon>
      <hac-gradient-slider
        .value=${i}
        .min=${0}
        .max=${360}
        .step=${1}
        .gradient=${"linear-gradient(to right, hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(360, 100%, 50%))"}
        @value-changed=${i=>{const s=i.detail.value,[o,n,r]=function(t,e,i){const s=i/100,o=s*(e/100),n=o*(1-Math.abs(t/60%2-1)),r=s-o;let a,c,l;return t<60?(a=o,c=n,l=0):t<120?(a=n,c=o,l=0):t<180?(a=0,c=o,l=n):t<240?(a=0,c=n,l=o):t<300?(a=n,c=0,l=o):(a=o,c=0,l=n),[Math.round(255*(a+r)),Math.round(255*(c+r)),Math.round(255*(l+r))]}(s,100,100);Ot(t,e,{rgb_color:[o,n,r]})}}
      ></hac-gradient-slider>
      <span class="value">${Math.round(i)}°</span>
    </div>
  `}let _e=class extends at{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.step=1,this.disabled=!1,this.gradient=""}_onChange(t){const e=t.target,i=Number(e.value);this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:i},bubbles:!0,composed:!0}))}render(){return K`
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
    `}};_e.styles=r`
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
  `,t([ht({type:Number})],_e.prototype,"value",void 0),t([ht({type:Number})],_e.prototype,"min",void 0),t([ht({type:Number})],_e.prototype,"max",void 0),t([ht({type:Number})],_e.prototype,"step",void 0),t([ht({type:Boolean})],_e.prototype,"disabled",void 0),t([ht()],_e.prototype,"gradient",void 0),_e=t([pt("hac-gradient-slider")],_e);const me=[{name:"entity",required:!0,selector:{entity:{domain:"light"}}},{name:"name",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"show_name",selector:{boolean:{}}},{name:"show_state",selector:{boolean:{}}},{name:"show_brightness_control",selector:{boolean:{}}},{name:"show_color_temp_control",selector:{boolean:{}}},{name:"show_color_control",selector:{boolean:{}}},{name:"use_light_color",selector:{boolean:{}}},{name:"icon_animation",selector:{boolean:{}}},{name:"compact_view",selector:{boolean:{}}},{name:"hide_controls_when_off",selector:{boolean:{}}},{name:"show_timer",selector:{boolean:{}}}]}];let ge=class extends at{constructor(){super(...arguments),this._computeLabel=t=>Zt(this.hass,t)}setConfig(t){this._config=t}_valueChanged(t){Qt(this,t.detail.value)}render(){if(!this.hass||!this._config)return q;const t={show_name:!0,show_state:!0,show_brightness_control:!0,show_color_temp_control:!0,show_color_control:!0,use_light_color:!0,icon_animation:!0,compact_view:!1,hide_controls_when_off:!0,...this._config};return K`
      <ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${me}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}};ge.styles=Xt,t([ht({attribute:!1})],ge.prototype,"hass",void 0),t([ut()],ge.prototype,"_config",void 0),ge=t([pt(ne)],ge),St({type:oe,name:"Light Card",description:"Custom card for light entities with brightness and color controls"});let fe=class extends at{constructor(){super(...arguments),this._timerDialogOpen=!1,this._schedules=[],this._schedulerConnected=!1}disconnectedCallback(){super.disconnectedCallback(),this._schedulerUnsub?.()}static getConfigElement(){return document.createElement(ne)}static getStubConfig(t){const e=Object.keys(t.states).filter(t=>t.startsWith("light."));return{entity:e[0]||""}}setConfig(t){if(!t.entity)throw new Error("Entity is required");this._config=t}getCardSize(){return this._config?.compact_view?1:3}shouldUpdate(t){if(t.has("_config")||t.has("_timerDialogOpen")||t.has("_schedules"))return!0;if(!t.has("hass"))return!0;const e=t.get("hass");if(!e)return!0;const i=this._config.entity;return e.states[i]!==this.hass.states[i]}updated(t){t.has("hass")&&this.hass&&!this._schedulerConnected&&this._config?.show_timer&&(this._schedulerConnected=!0,this._schedulerUnsub=Pt.subscribe(()=>{this._schedules=Pt.getSchedulesForEntity(this._config?.entity)}),Pt.connect(this.hass),this._schedules=Pt.getSchedulesForEntity(this._config.entity))}get _lang(){return this.hass?.language||"en"}render(){if(!this.hass||!this._config)return q;const t=this.hass.states[this._config.entity];if(!t)return K`
        <ha-card>
          <div class="not-found">Entity not found: ${this._config.entity}</div>
        </ha-card>
      `;const e=ce(t),i=this._config.name||t.attributes.friendly_name||"Light",s=this._lang,o=this._config.compact_view;return K`
      <ha-card>
        <div class="container">
          ${this._renderHeader(t,e,i,s)}
          ${o||!e&&!1!==this._config.hide_controls_when_off?q:this._renderControls(t)}
        </div>
        ${this._config.show_timer?Kt(this.hass,this._config.entity,i,this._timerDialogOpen,this._config.timer_default_action||"turn_off",()=>{this._timerDialogOpen=!1}):q}
      </ha-card>
    `}_renderHeader(t,e,i,s){const o=mt(e?"state.on":"state.off",s),n=e?le(t):0,r=e&&n?`${o} · ${n}%`:o;return K`
      <div class="header">
        ${he(this.hass,this._config.entity,t,e,!1!==this._config.icon_animation,!1!==this._config.use_light_color)}
        ${!1!==this._config.show_name||!1!==this._config.show_state?K`
            <hac-state-info
              .primary=${!1!==this._config.show_name?i:""}
              .secondary=${!1!==this._config.show_state?r:""}
            ></hac-state-info>
          `:q}
        ${this._config.show_timer?Ft(this._schedules,()=>{this._timerDialogOpen=!0},s):q}
      </div>
    `}_renderControls(t){const e=this._config.entity;return K`
      ${!1!==this._config.show_brightness_control&&function(t){const e=ae(t);return e.length>0&&!e.every(t=>"onoff"===t)}(t)?function(t,e,i){return K`
    <div class="control-row">
      <ha-icon icon="mdi:brightness-6"></ha-icon>
      <hac-slider
        .value=${i}
        .min=${1}
        .max=${100}
        .step=${1}
        @value-changed=${i=>{const s=i.detail.value;Ot(t,e,{brightness_pct:s})}}
      ></hac-slider>
      <span class="value">${i}%</span>
    </div>
  `}(this.hass,e,le(t)):q}
      ${!1!==this._config.show_color_temp_control&&function(t){return ae(t).includes("color_temp")}(t)?this._renderColorTemp(t,e):q}
      ${!1!==this._config.show_color_control&&function(t){const e=["hs","xy","rgb","rgbw","rgbww"];return ae(t).some(t=>e.includes(t))}(t)?pe(this.hass,e,function(t){return t.attributes.hs_color}(t)?.[0]??0):q}
    `}_renderColorTemp(t,e){const{min:i,max:s}=function(t){return{min:t.attributes.min_color_temp_kelvin??2e3,max:t.attributes.max_color_temp_kelvin??6500}}(t);return ue(this.hass,e,function(t){return t.attributes.color_temp_kelvin??4e3}(t),i,s)}};fe.styles=[gt,re],t([ht({attribute:!1})],fe.prototype,"hass",void 0),t([ut()],fe.prototype,"_config",void 0),t([ut()],fe.prototype,"_timerDialogOpen",void 0),t([ut()],fe.prototype,"_schedules",void 0),fe=t([pt(oe)],fe);const ye="hac-plug-card",ve="hac-plug-card-editor",be=[vt,bt,r`
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

  /* Settings row */
  .settings-row {
    display: flex;
    gap: 8px;
    justify-content: center;
  }
`];function $e(t,e){const i=wt(t,e.entity);return{power:e.power_entity||xt(t,i,"sensor",{deviceClass:"power"}),dailyConsumption:e.daily_consumption_entity||xt(t,i,"sensor",{keywords:["daily"]}),monthlyConsumption:e.monthly_consumption_entity||xt(t,i,"sensor",{keywords:["monthly"]}),yearlyConsumption:e.yearly_consumption_entity||xt(t,i,"sensor",{keywords:["yearly"]}),childLock:e.child_lock_entity||xt(t,i,"switch",{keywords:["child_lock","physical_control_locked"]}),powerOnBehavior:e.power_on_behavior_entity||xt(t,i,"select",{keywords:["power_on"]})}}function we(t,e){if(!e)return;const i=t.states[e];if(!i||"unavailable"===i.state||"unknown"===i.state)return;const s=parseFloat(i.state);return isNaN(s)?void 0:s}const xe=[{name:"entity",required:!0,selector:{entity:{domain:"switch"}}},{name:"name",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"show_name",selector:{boolean:{}}},{name:"show_state",selector:{boolean:{}}},{name:"show_power",selector:{boolean:{}}},{name:"show_daily_consumption",selector:{boolean:{}}},{name:"show_monthly_consumption",selector:{boolean:{}}},{name:"show_yearly_consumption",selector:{boolean:{}}},{name:"show_settings",selector:{boolean:{}}},{name:"icon_animation",selector:{boolean:{}}},{name:"compact_view",selector:{boolean:{}}},{name:"show_timer",selector:{boolean:{}}}]}],ke=[{name:"power_entity",selector:{entity:{domain:"sensor"}}},{name:"daily_consumption_entity",selector:{entity:{domain:"sensor"}}},{name:"monthly_consumption_entity",selector:{entity:{domain:"sensor"}}},{name:"yearly_consumption_entity",selector:{entity:{domain:"sensor"}}},{name:"child_lock_entity",selector:{entity:{domain:"switch"}}},{name:"power_on_behavior_entity",selector:{entity:{domain:"select"}}}];let Ce=class extends at{constructor(){super(...arguments),this._expandedOverrides=!1,this._computeLabel=t=>Zt(this.hass,t)}setConfig(t){this._config=t}_valueChanged(t){Qt(this,t.detail.value)}_overrideValueChanged(t){Qt(this,{...this._config,...t.detail.value})}_toggleOverrides(){this._expandedOverrides=!this._expandedOverrides}_powerOnBehaviorChanged(t){const e=t.target,i=this._resolvedEntities.powerOnBehavior;i&&e.value&&this.hass.callService("select","select_option",{entity_id:i,option:e.value})}_childLockChanged(){const t=this._resolvedEntities.childLock;t&&this.hass.callService("switch","toggle",{entity_id:t})}get _resolvedEntities(){return $e(this.hass,this._config)}render(){if(!this.hass||!this._config)return q;const t=this.hass.language||"en",e={show_name:!0,show_state:!0,show_power:!0,show_daily_consumption:!0,show_monthly_consumption:!0,show_yearly_consumption:!0,show_settings:!0,compact_view:!1,icon_animation:!0,...this._config},i=this._resolvedEntities,s=i.childLock,o=!!s&&"on"===this.hass.states[s]?.state,n=i.powerOnBehavior,r=n?this.hass.states[n]:void 0,a=r?.attributes.options||[],c=r?.state;return K`
      <ha-form
        .hass=${this.hass}
        .data=${e}
        .schema=${xe}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>

      ${a.length>0?K`
        <ha-select
          .label=${mt("editor.power_on_behavior",t)}
          .value=${c}
          @selected=${this._powerOnBehaviorChanged}
        >
          ${a.map(t=>K`<mwc-list-item .value=${t}>${t}</mwc-list-item>`)}
        </ha-select>
      `:q}

      ${s?K`
        <ha-formfield .label=${mt("settings.child_lock",t)}>
          <ha-switch
            .checked=${o}
            @change=${this._childLockChanged}
          ></ha-switch>
        </ha-formfield>
      `:q}

      <div class="overrides-section">
        <button class="overrides-toggle" @click=${this._toggleOverrides}>
          <ha-icon icon=${this._expandedOverrides?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
          ${mt("editor.entity_overrides",t)}
        </button>
        ${this._expandedOverrides?K`
          <ha-form
            .hass=${this.hass}
            .data=${this._config}
            .schema=${ke}
            .computeLabel=${this._computeLabel}
            @value-changed=${this._overrideValueChanged}
          ></ha-form>
        `:q}
      </div>
    `}};Ce.styles=[Xt,r`
    ha-formfield {
      display: block;
      margin-top: 16px;
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
  `],t([ht({attribute:!1})],Ce.prototype,"hass",void 0),t([ut()],Ce.prototype,"_config",void 0),t([ut()],Ce.prototype,"_expandedOverrides",void 0),Ce=t([pt(ve)],Ce),St({type:ye,name:"Plug Card",description:"Custom card for smart plug/socket entities"});let Se=class extends at{constructor(){super(...arguments),this._timerDialogOpen=!1,this._schedules=[],this._schedulerConnected=!1}static getConfigElement(){return document.createElement(ve)}static getStubConfig(t){const e=Object.keys(t.states).filter(t=>t.startsWith("switch."));return{entity:e[0]||""}}setConfig(t){if(!t.entity)throw new Error("Entity is required");this._config=t}getCardSize(){return this._config?.compact_view?2:4}disconnectedCallback(){super.disconnectedCallback(),this._schedulerUnsub?.()}shouldUpdate(t){if(t.has("_config")||t.has("_timerDialogOpen")||t.has("_schedules"))return!0;if(!t.has("hass"))return!0;const e=t.get("hass");if(!e)return!0;const i=this._config.entity;if(e.states[i]!==this.hass.states[i])return!0;const s=this._getResolved();for(const t of Object.values(s))if(t&&e.states[t]!==this.hass.states[t])return!0;return!1}updated(t){t.has("hass")&&this.hass&&!this._schedulerConnected&&this._config?.show_timer&&(this._schedulerConnected=!0,this._schedulerUnsub=Pt.subscribe(()=>{this._schedules=Pt.getSchedulesForEntity(this._config?.entity)}),Pt.connect(this.hass),this._schedules=Pt.getSchedulesForEntity(this._config.entity))}_getResolved(){return this._resolved&&this._lastEntity===this._config.entity||(this._lastEntity=this._config.entity,this._resolved=$e(this.hass,this._config)),this._resolved}get _lang(){return this.hass?.language||"en"}render(){if(!this.hass||!this._config)return q;const t=this.hass.states[this._config.entity];if(!t)return K`
        <ha-card>
          <div class="not-found">Entity not found: ${this._config.entity}</div>
        </ha-card>
      `;const e=this._getResolved(),i=function(t){return"on"===t.state}(t),s=this._config.name||t.attributes.friendly_name||"Plug",o=this._lang,n=this._config.compact_view;return K`
      <ha-card>
        <div class="container">
          ${this._renderHeader(t,i,s,o,e)}
          ${n?q:function(t,e,i,s){const o=[{entityId:e.power,labelKey:"stats.power",configKey:"show_power"},{entityId:e.dailyConsumption,labelKey:"stats.daily",decimals:2,configKey:"show_daily_consumption"},{entityId:e.monthlyConsumption,labelKey:"stats.monthly",decimals:2,configKey:"show_monthly_consumption"},{entityId:e.yearlyConsumption,labelKey:"stats.yearly",decimals:2,configKey:"show_yearly_consumption"}].filter(e=>!1!==s[e.configKey]&&(!!e.entityId&&void 0!==we(t,e.entityId)));return 0===o.length?q:K`
    <div class="stats-grid">
      ${o.map(e=>{const s=we(t,e.entityId),o=function(t,e){if(!e)return"";const i=t.states[e];return i?.attributes.unit_of_measurement||""}(t,e.entityId),n=void 0!==s?void 0!==e.decimals?s.toFixed(e.decimals):Math.round(s).toString():"—";return K`
          <div class="stat-item">
            <span class="stat-value">
              ${n}
              ${o?K`<span class="stat-unit">${o}</span>`:""}
            </span>
            <span class="stat-label">${mt(e.labelKey,i)}</span>
          </div>
        `})}
    </div>
  `}(this.hass,e,o,this._config)}
          ${n||!1===this._config.show_settings?q:function(t,e,i){if(!e||!t.states[e])return q;const s="on"===t.states[e]?.state;return K`
    <div class="settings-row">
      <hac-toggle-button
        .icon=${"mdi:lock"}
        ?active=${s}
        .label=${mt("settings.child_lock",i)}
        @toggle=${()=>At(t,e)}
      ></hac-toggle-button>
    </div>
  `}(this.hass,e.childLock,o)}
        </div>
        ${this._config.show_timer?Kt(this.hass,this._config.entity,s,this._timerDialogOpen,this._config.timer_default_action||"turn_off",()=>{this._timerDialogOpen=!1}):q}
      </ha-card>
    `}_renderHeader(t,e,i,s,o){const n=mt(e?"state.on":"state.off",s),r=e?we(this.hass,o.power):void 0,a=e&&void 0!==r?`${n} · ${Math.round(r)} W`:n;return K`
      <div class="header">
        ${function(t,e,i,s){return K`
    <hac-shape-icon
      icon="mdi:power-plug"
      ?active=${i}
      .animated=${s}
      @click=${()=>At(t,e)}
    ></hac-shape-icon>
  `}(this.hass,this._config.entity,e,!1!==this._config.icon_animation)}
        ${!1!==this._config.show_name||!1!==this._config.show_state?K`
            <hac-state-info
              .primary=${!1!==this._config.show_name?i:""}
              .secondary=${!1!==this._config.show_state?a:""}
            ></hac-state-info>
          `:q}
        ${this._config.show_timer?Ft(this._schedules,()=>{this._timerDialogOpen=!0},s):q}
      </div>
    `}};Se.styles=[gt,be],t([ht({attribute:!1})],Se.prototype,"hass",void 0),t([ut()],Se.prototype,"_config",void 0),t([ut()],Se.prototype,"_timerDialogOpen",void 0),t([ut()],Se.prototype,"_schedules",void 0),Se=t([pt(ye)],Se);const Ee="hac-plug-group-card",Ae="hac-plug-group-card-editor",Oe=[vt,bt,r`
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

  /* Plug list */
  .plug-list {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .plug-row {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 12px;
    border-radius: 12px;
    cursor: pointer;
    transition: background 0.2s;
  }
  .plug-row:hover {
    background: var(--secondary-background-color, rgba(111, 111, 111, 0.12));
  }
  .plug-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--disabled-text-color, #999);
    flex-shrink: 0;
  }
  .plug-dot.on {
    background: var(--apc-active-color);
  }
  .plug-name {
    flex: 1;
    font-size: 14px;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .plug-power {
    font-size: 13px;
    color: var(--secondary-text-color);
    flex-shrink: 0;
  }

  /* Settings row */
  .settings-row {
    display: flex;
    gap: 8px;
    justify-content: center;
  }
`];function ze(t,e){return e.map(e=>{const i=wt(t,e),s=t.states[e];return{entityId:e,name:s?.attributes.friendly_name||e,power:xt(t,i,"sensor",{deviceClass:"power"}),dailyConsumption:xt(t,i,"sensor",{keywords:["daily"]}),monthlyConsumption:xt(t,i,"sensor",{keywords:["monthly"]}),yearlyConsumption:xt(t,i,"sensor",{keywords:["yearly"]}),childLock:xt(t,i,"switch",{keywords:["child_lock","physical_control_locked"]}),powerOnBehavior:xt(t,i,"select",{keywords:["power_on"]})}})}function Me(t,e){if(!e)return;const i=t.states[e];if(!i||"unavailable"===i.state||"unknown"===i.state)return;const s=parseFloat(i.state);return isNaN(s)?void 0:s}function Pe(t,e){if(!e)return"";const i=t.states[e];return i?.attributes.unit_of_measurement||""}function De(t,e,i){let s=0,o=!1;for(const n of e){const e=n[i];if(!e)continue;const r=Me(t,e);void 0!==r&&(s+=r,o=!0)}return o?s:void 0}function Te(t,e){return e.some(e=>"on"===t.states[e]?.state)}function Le(t,e,i,s){const o=[{key:"power",labelKey:"stats.power",configKey:"show_power"},{key:"dailyConsumption",labelKey:"stats.daily",decimals:2,configKey:"show_daily_consumption"},{key:"monthlyConsumption",labelKey:"stats.monthly",decimals:2,configKey:"show_monthly_consumption"},{key:"yearlyConsumption",labelKey:"stats.yearly",decimals:2,configKey:"show_yearly_consumption"}].filter(i=>!1!==s[i.configKey]&&void 0!==De(t,e,i.key));return 0===o.length?q:K`
    <div class="stats-grid">
      ${o.map(s=>{const o=De(t,e,s.key),n=function(t,e,i){for(const s of e){const e=s[i];if(e){const i=Pe(t,e);if(i)return i}}return""}(t,e,s.key),r=void 0!==o?void 0!==s.decimals?o.toFixed(s.decimals):Math.round(o).toString():"—";return K`
          <div class="stat-item">
            <span class="stat-value">
              ${r}
              ${n?K`<span class="stat-unit">${n}</span>`:""}
            </span>
            <span class="stat-label">${mt(s.labelKey,i)}</span>
          </div>
        `})}
    </div>
  `}const Ie=[{name:"entities",required:!0,selector:{entity:{domain:"switch",multiple:!0}}},{name:"name",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"show_name",selector:{boolean:{}}},{name:"show_state",selector:{boolean:{}}},{name:"show_power",selector:{boolean:{}}},{name:"show_daily_consumption",selector:{boolean:{}}},{name:"show_monthly_consumption",selector:{boolean:{}}},{name:"show_yearly_consumption",selector:{boolean:{}}},{name:"show_settings",selector:{boolean:{}}},{name:"show_individual",selector:{boolean:{}}},{name:"icon_animation",selector:{boolean:{}}},{name:"compact_view",selector:{boolean:{}}},{name:"show_timer",selector:{boolean:{}}}]}];let Ue=class extends at{constructor(){super(...arguments),this._computeLabel=t=>"entities"===t.name?mt("editor.entities",this.hass?.language||"en"):"show_individual"===t.name?mt("editor.show_individual",this.hass?.language||"en"):Zt(this.hass,t)}setConfig(t){this._config=t}_valueChanged(t){Qt(this,t.detail.value)}_powerOnBehaviorChanged(t,e){const i=t.target;i.value&&this.hass.callService("select","select_option",{entity_id:e,option:i.value})}_childLockChanged(t){this.hass.callService("switch","toggle",{entity_id:t})}render(){if(!this.hass||!this._config)return q;const t=this.hass.language||"en",e={show_name:!0,show_state:!0,show_power:!0,show_daily_consumption:!0,show_monthly_consumption:!0,show_yearly_consumption:!0,show_settings:!0,show_individual:!0,compact_view:!1,icon_animation:!0,...this._config},i=this._config.entities||[],s=(i.length>0?ze(this.hass,i):[]).filter(t=>t.powerOnBehavior||t.childLock);return K`
      <ha-form
        .hass=${this.hass}
        .data=${e}
        .schema=${Ie}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>

      ${s.length>0?K`
        <div class="device-controls">
          <div class="device-controls-title">${mt("editor.device_controls",t)}</div>
          ${s.map(e=>{const i=e.powerOnBehavior,s=i?this.hass.states[i]:void 0,o=s?.attributes.options||[],n=s?.state,r=e.childLock,a=!!r&&"on"===this.hass.states[r]?.state;return K`
              <div class="device-row">
                <span class="device-name">${e.name}</span>
                <div class="device-actions">
                  ${o.length>0?K`
                    <ha-select
                      .label=${mt("editor.power_on_behavior",t)}
                      .value=${n}
                      @selected=${t=>this._powerOnBehaviorChanged(t,i)}
                    >
                      ${o.map(t=>K`<mwc-list-item .value=${t}>${t}</mwc-list-item>`)}
                    </ha-select>
                  `:q}
                  ${r?K`
                    <ha-formfield .label=${mt("settings.child_lock",t)}>
                      <ha-switch
                        .checked=${a}
                        @change=${()=>this._childLockChanged(r)}
                      ></ha-switch>
                    </ha-formfield>
                  `:q}
                </div>
              </div>
            `})}
        </div>
      `:q}
    `}};Ue.styles=[Xt,r`
    .device-controls {
      margin-top: 16px;
    }
    .device-controls-title {
      font-size: 14px;
      font-weight: 500;
      color: var(--primary-text-color);
      margin-bottom: 8px;
    }
    .device-row {
      padding: 8px 0;
      border-bottom: 1px solid var(--divider-color, rgba(0,0,0,0.12));
    }
    .device-row:last-child {
      border-bottom: none;
    }
    .device-name {
      font-size: 13px;
      font-weight: 500;
      color: var(--secondary-text-color);
      display: block;
      margin-bottom: 4px;
    }
    .device-actions {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
    }
    ha-formfield {
      min-height: 20px;
    }
  `],t([ht({attribute:!1})],Ue.prototype,"hass",void 0),t([ut()],Ue.prototype,"_config",void 0),Ue=t([pt(Ae)],Ue),St({type:Ee,name:"Plug Group",description:"Group card for multiple smart plugs"});let He=class extends at{constructor(){super(...arguments),this._timerDialogOpen=!1,this._schedules=[],this._schedulerConnected=!1}static getConfigElement(){return document.createElement(Ae)}static getStubConfig(t){const e=Object.keys(t.states).filter(t=>t.startsWith("switch."));return{entities:e.slice(0,2)}}setConfig(t){if(!t.entities||!Array.isArray(t.entities)||0===t.entities.length)throw new Error("At least one entity is required");this._config=t}getCardSize(){return this._config?.compact_view?2:4}disconnectedCallback(){super.disconnectedCallback(),this._schedulerUnsub?.()}shouldUpdate(t){if(t.has("_config")||t.has("_timerDialogOpen")||t.has("_schedules"))return!0;if(!t.has("hass"))return!0;const e=t.get("hass");if(!e)return!0;for(const t of this._config.entities)if(e.states[t]!==this.hass.states[t])return!0;const i=this._getResolved();for(const t of i)for(const i of[t.power,t.dailyConsumption,t.monthlyConsumption,t.yearlyConsumption,t.childLock])if(i&&e.states[i]!==this.hass.states[i])return!0;return!1}updated(t){if(t.has("hass")&&this.hass&&!this._schedulerConnected&&this._config?.show_timer){this._schedulerConnected=!0;const t=this._config.entities[0];this._schedulerUnsub=Pt.subscribe(()=>{this._schedules=Pt.getSchedulesForEntity(t)}),Pt.connect(this.hass),this._schedules=Pt.getSchedulesForEntity(t)}}_getResolved(){const t=JSON.stringify(this._config.entities);return this._resolved&&this._lastEntitiesKey===t||(this._lastEntitiesKey=t,this._resolved=ze(this.hass,this._config.entities)),this._resolved}get _lang(){return this.hass?.language||"en"}_handleMasterToggle(){const t=this._config.entities,e=Te(this.hass,t)?"turn_off":"turn_on";this.hass.callService("switch",e,{entity_id:t})}render(){if(!this.hass||!this._config)return q;if(0===this._config.entities.filter(t=>this.hass.states[t]).length)return K`
        <ha-card>
          <div class="not-found">No entities found</div>
        </ha-card>
      `;const t=this._getResolved(),e=Te(this.hass,this._config.entities),i=this._config.name||mt("plug-group.card.name",this._lang),s=this._lang,o=this._config.compact_view;return K`
      <ha-card>
        <div class="container">
          ${this._renderHeader(e,i,s,t)}
          ${o?q:Le(this.hass,t,s,this._config)}
          ${o||!1===this._config.show_individual?q:function(t,e,i){return 0===e.length?q:K`
    <div class="plug-list">
      ${e.map(e=>{const s=t.states[e.entityId];if(!s)return q;const o="on"===s.state,n=o?Me(t,e.power):void 0,r=void 0!==n?`${Math.round(n)} W`:"",a=o?r||mt("state.on",i):mt("state.off",i);return K`
          <div class="plug-row" @click=${()=>At(t,e.entityId)}>
            <span class="plug-dot ${o?"on":""}"></span>
            <span class="plug-name">${e.name}</span>
            <span class="plug-power">${a}</span>
          </div>
        `})}
    </div>
  `}(this.hass,t,s)}
          ${o||!1===this._config.show_settings?q:function(t,e,i){const s=e.map(t=>t.childLock).filter(e=>!!e&&!!t.states[e]);if(0===s.length)return q;const o=s.some(e=>"on"!==t.states[e]?.state);return K`
    <div class="settings-row">
      <hac-toggle-button
        .icon=${"mdi:lock"}
        ?active=${!o}
        .label=${mt("settings.child_lock",i)}
        @toggle=${()=>{const e=o?"turn_on":"turn_off";t.callService("switch",e,{entity_id:s})}}
      ></hac-toggle-button>
    </div>
  `}(this.hass,t,s)}
        </div>
        ${this._config.show_timer?Kt(this.hass,this._config.entities,i,this._timerDialogOpen,this._config.timer_default_action||"turn_off",()=>{this._timerDialogOpen=!1}):q}
      </ha-card>
    `}_renderHeader(t,e,i,s){const o=(n=this.hass,this._config.entities.filter(t=>"on"===n.states[t]?.state).length);var n;const r=this._config.entities.length,a=t?`${o} / ${r} ${mt("state.on",i)}`:mt("state.off",i),c=t?De(this.hass,s,"power"):void 0,l=t&&void 0!==c?`${a} · ${Math.round(c)} W`:a;return K`
      <div class="header">
        <hac-shape-icon
          icon="mdi:power-plug"
          ?active=${t}
          .animated=${!1!==this._config.icon_animation}
          @click=${()=>this._handleMasterToggle()}
        ></hac-shape-icon>
        ${!1!==this._config.show_name||!1!==this._config.show_state?K`
            <hac-state-info
              .primary=${!1!==this._config.show_name?e:""}
              .secondary=${!1!==this._config.show_state?l:""}
            ></hac-state-info>
          `:q}
        ${this._config.show_timer?Ft(this._schedules,()=>{this._timerDialogOpen=!0},i):q}
      </div>
    `}};He.styles=[gt,Oe],t([ht({attribute:!1})],He.prototype,"hass",void 0),t([ut()],He.prototype,"_config",void 0),t([ut()],He.prototype,"_timerDialogOpen",void 0),t([ut()],He.prototype,"_schedules",void 0),He=t([pt(Ee)],He);const Ne="hac-timer-card",Re="hac-timer-card-editor",je=[bt,r`
  .header {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .power-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--apc-icon-size, 42px);
    height: var(--apc-icon-size, 42px);
    border-radius: 50%;
    border: none;
    background: var(--secondary-background-color, rgba(111, 111, 111, 0.12));
    color: var(--secondary-text-color);
    cursor: pointer;
    flex-shrink: 0;
    transition: background 0.3s, color 0.3s;
  }
  .power-btn.active {
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
  }
  .power-btn ha-icon {
    --mdc-icon-size: 24px;
  }

  .timer-section {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .active-timers {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .active-timers-title {
    font-size: 13px;
    font-weight: 500;
    color: var(--secondary-text-color);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .timer-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 8px;
    background: var(--secondary-background-color, rgba(111, 111, 111, 0.12));
  }
  .timer-item .action-text {
    flex: 1;
    font-size: 13px;
    color: var(--primary-text-color);
  }
  .timer-item .cancel-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    border: none;
    background: none;
    color: var(--secondary-text-color);
    cursor: pointer;
    border-radius: 50%;
    transition: background 0.2s;
  }
  .timer-item .cancel-btn:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  .timer-item .cancel-btn ha-icon {
    --mdc-icon-size: 18px;
  }

  .no-active {
    font-size: 13px;
    color: var(--secondary-text-color);
    text-align: center;
    padding: 8px;
  }

  .recurring-icon {
    --mdc-icon-size: 20px;
    color: var(--primary-color);
    flex-shrink: 0;
  }
  .recurring-info {
    font-size: 13px;
    color: var(--primary-text-color);
    white-space: nowrap;
  }

`],Fe=[{name:"entity",required:!0,selector:{entity:{}}},{name:"name",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"show_name",selector:{boolean:{}}},{name:"show_state",selector:{boolean:{}}},{name:"show_presets",selector:{boolean:{}}}]},{name:"default_action",selector:{select:{options:[{value:"turn_off",label:"Turn Off"},{value:"turn_on",label:"Turn On"},{value:"toggle",label:"Toggle"}]}}}];let Ke=class extends at{constructor(){super(...arguments),this._computeLabel=t=>Zt(this.hass,t)}setConfig(t){this._config=t}_valueChanged(t){Qt(this,t.detail.value)}render(){if(!this.hass||!this._config)return q;const t={show_name:!0,show_state:!0,show_presets:!0,default_action:"turn_off",...this._config};return K`
      <ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${Fe}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}};Ke.styles=Xt,t([ht({attribute:!1})],Ke.prototype,"hass",void 0),t([ut()],Ke.prototype,"_config",void 0),Ke=t([pt(Re)],Ke);const Be=["timer.day_mon","timer.day_tue","timer.day_wed","timer.day_thu","timer.day_fri","timer.day_sat","timer.day_sun"];St({type:Ne,name:"Timer Card",description:"Schedule on/off timers for any entity"});let qe=class extends at{constructor(){super(...arguments),this._schedules=[],this._schedulerConnected=!1}static getConfigElement(){return document.createElement(Re)}static getStubConfig(t){return{entity:Object.keys(t.states)[0]||""}}setConfig(t){if(!t.entity)throw new Error("Entity is required");this._config={show_name:!0,show_state:!0,default_action:"turn_off",show_presets:!0,...t}}getCardSize(){return 4}connectedCallback(){super.connectedCallback(),this._unsubscribe=Pt.subscribe(()=>{this._schedules=Pt.getSchedulesForEntity(this._config?.entity)})}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribe?.()}shouldUpdate(t){if(t.has("_config")||t.has("_schedules"))return!0;if(!t.has("hass"))return!0;const e=t.get("hass");if(!e)return!0;const i=this._config.entity;return e.states[i]!==this.hass.states[i]}updated(t){t.has("hass")&&this.hass&&!this._schedulerConnected&&(this._schedulerConnected=!0,Pt.connect(this.hass),this._schedules=Pt.getSchedulesForEntity(this._config.entity))}get _lang(){return this.hass?.language||"en"}_togglePower(){At(this.hass,this._config.entity)}async _onTimerStart(t){const e=Tt(this._config.entity,t.detail);"custom"===t.detail.action&&this._config.custom_service&&(e.service=this._config.custom_service,e.service_data=this._config.custom_service_data),await Pt.createSchedule(this.hass,e)}async _cancelSchedule(t){await Pt.cancelSchedule(this.hass,t)}render(){if(!this.hass||!this._config)return q;const t=this.hass.states[this._config.entity];if(!t)return K`
        <ha-card>
          <div class="not-found">
            Entity not found: ${this._config.entity}
          </div>
        </ha-card>
      `;const e="on"===t.state,i=this._config.name||t.attributes.friendly_name||"Device",s=this._lang,o=mt(e?"state.on":"state.off",s),n=!1!==this._config.show_presets?this._config.presets||[300,600,900,1800,3600,7200]:[];return K`
      <ha-card>
        <div class="container">
          ${this._renderHeader(t,e,i,o,s)}

          <div class="timer-section">
            <hac-timer-picker
              .lang=${s}
              .action=${this._config.default_action||"turn_off"}
              .presets=${n}
              @timer-start=${this._onTimerStart}
            ></hac-timer-picker>
          </div>

          ${this._renderActiveTimers(s)}
        </div>
      </ha-card>
    `}_renderHeader(t,e,i,s,o){const n=this._schedules.length>0?this._schedules[0]:null;let r=s;if(n){r=`${s} · ${Dt(n.action,o)}`}return K`
      <div class="header">
        <button
          class="power-btn ${e?"active":""}"
          @click=${this._togglePower}
        >
          <ha-icon icon="mdi:power"></ha-icon>
        </button>
        ${!1!==this._config.show_name||!1!==this._config.show_state?K`
              <hac-state-info
                .primary=${!1!==this._config.show_name?i:""}
                .secondary=${!1!==this._config.show_state?r:""}
              ></hac-state-info>
            `:q}
        ${n?K`
              <hac-timer-badge
                .schedule=${n}
                .lang=${o}
                compact
              ></hac-timer-badge>
            `:q}
      </div>
    `}_renderActiveTimers(t){const e=this._schedules.filter(t=>!t.recurring),i=this._schedules.filter(t=>t.recurring);return K`
      <div class="active-timers">
        <div class="active-timers-title">
          ${mt("timer.active",t)}
        </div>
        ${e.length>0?e.map(e=>K`
                <div class="timer-item">
                  <hac-timer-badge .schedule=${e} .lang=${t}></hac-timer-badge>
                  <span class="action-text">
                    ${Dt(e.action,t)}
                  </span>
                  <button
                    class="cancel-btn"
                    @click=${()=>this._cancelSchedule(e.id)}
                  >
                    <ha-icon icon="mdi:close"></ha-icon>
                  </button>
                </div>
              `):0===i.length?K`<div class="no-active">${mt("timer.no_active",t)}</div>`:q}
        ${i.length>0?K`
              <div class="active-timers-title" style="margin-top: 8px;">
                ${mt("timer.recurring",t)}
              </div>
              ${i.map(e=>K`
                  <div class="timer-item">
                    <ha-icon class="recurring-icon" icon="mdi:calendar-clock"></ha-icon>
                    <span class="recurring-info">
                      ${e.days_of_week?function(t,e){return t.map(t=>mt(Be[t],e)).join(", ")}(e.days_of_week,t):""}
                      ${e.trigger_at?function(t){const e=new Date(t);return`${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}`}(e.trigger_at):""}
                    </span>
                    <span class="action-text">
                      ${Dt(e.action,t)}
                    </span>
                    <button
                      class="cancel-btn"
                      @click=${()=>this._cancelSchedule(e.id)}
                    >
                      <ha-icon icon="mdi:close"></ha-icon>
                    </button>
                  </div>
                `)}
            `:q}
      </div>
    `}};qe.styles=[gt,je],t([ht({attribute:!1})],qe.prototype,"hass",void 0),t([ut()],qe.prototype,"_config",void 0),t([ut()],qe.prototype,"_schedules",void 0),qe=t([pt(Ne)],qe),console.info("%c HA-CARDS %c v1.0.0 ","color: white; background: #555; font-weight: bold; padding: 2px 6px; border-radius: 4px 0 0 4px;","color: white; background: #1976d2; font-weight: bold; padding: 2px 6px; border-radius: 0 4px 4px 0;");
