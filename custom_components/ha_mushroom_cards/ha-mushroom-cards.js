function t(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new r(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:c,defineProperty:l,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,_=globalThis,m=_.trustedTypes,f=m?m.emptyScript:"",g=_.reactiveElementPolyfillSupport,y=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!c(t,e),$={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const r=s?.call(this);o?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=s;const r=o.fromAttribute(e,t.type);this[s]=r??this._$Ej?.get(s)??r,this._$Em=null}}requestUpdate(t,e,i,s=!1,o){if(void 0!==t){const r=this.constructor;if(!1===s&&(o=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??b)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==o||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[y("elementProperties")]=new Map,x[y("finalized")]=new Map,g?.({ReactiveElement:x}),(_.reactiveElementVersions??=[]).push("2.1.2");const w=globalThis,k=t=>t,C=w.trustedTypes,S=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,A="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,z="?"+E,O=`<${z}>`,M=document,P=()=>M.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,L="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,H=/>/g,D=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,R=/"/g,F=/^(?:script|style|textarea|title)$/i,q=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),K=new WeakMap,W=M.createTreeWalker(M,129);function X(t,e){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const J=(t,e)=>{const i=t.length-1,s=[];let o,r=2===e?"<svg>":3===e?"<math>":"",n=I;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,h=0;for(;h<i.length&&(n.lastIndex=h,c=n.exec(i),null!==c);)h=n.lastIndex,n===I?"!--"===c[1]?n=N:void 0!==c[1]?n=H:void 0!==c[2]?(F.test(c[2])&&(o=RegExp("</"+c[2],"g")),n=D):void 0!==c[3]&&(n=D):n===D?">"===c[0]?(n=o??I,l=-1):void 0===c[1]?l=-2:(l=n.lastIndex-c[2].length,a=c[1],n=void 0===c[3]?D:'"'===c[3]?R:j):n===R||n===j?n=D:n===N||n===H?n=I:(n=D,o=void 0);const d=n===D&&t[e+1].startsWith("/>")?" ":"";r+=n===I?i+O:l>=0?(s.push(a),i.slice(0,l)+A+i.slice(l)+E+d):i+E+(-2===l?e:d)}return[X(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class Y{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const n=t.length-1,a=this.parts,[c,l]=J(t,e);if(this.el=Y.createElement(c,i),W.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=W.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(A)){const e=l[r++],i=s.getAttribute(t).split(E),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:n[2],strings:i,ctor:"."===n[1]?et:"?"===n[1]?it:"@"===n[1]?st:tt}),s.removeAttribute(t)}else t.startsWith(E)&&(a.push({type:6,index:o}),s.removeAttribute(t));if(F.test(s.tagName)){const t=s.textContent.split(E),e=t.length-1;if(e>0){s.textContent=C?C.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],P()),W.nextNode(),a.push({type:2,index:++o});s.append(t[e],P())}}}else if(8===s.nodeType)if(s.data===z)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(E,t+1));)a.push({type:7,index:o}),t+=E.length-1}o++}}static createElement(t,e){const i=M.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,s){if(e===B)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const r=T(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=Z(t,o._$AS(t,e.values),o,s)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??M).importNode(e,!0);W.currentNode=s;let o=W.nextNode(),r=0,n=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new Q(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new ot(o,this,t)),this._$AV.push(e),a=i[++n]}r!==a?.index&&(o=W.nextNode(),r++)}return W.currentNode=M,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),T(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Y.createElement(X(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new G(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new Y(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Q(this.O(P()),this.O(P()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=k(t).nextSibling;k(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(void 0===o)t=Z(this,t,e,0),r=!T(t)||t!==this._$AH&&t!==B,r&&(this._$AH=t);else{const s=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=Z(this,s[i+n],e,n),a===B&&(a=this._$AH[n]),r||=!T(a)||a!==this._$AH[n],a===V?t=V:t!==V&&(t+=(a??"")+o[n+1]),this._$AH[n]=a}r&&!s&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class st extends tt{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??V)===B)return;const i=this._$AH,s=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==V&&(i===V||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const rt=w.litHtmlPolyfillSupport;rt?.(Y,Q),(w.litHtmlVersions??=[]).push("3.3.2");const nt=globalThis;class at extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new Q(e.insertBefore(P(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}at._$litElement$=!0,at.finalized=!0,nt.litElementHydrateSupport?.({LitElement:at});const ct=nt.litElementPolyfillSupport;ct?.({LitElement:at}),(nt.litElementVersions??=[]).push("4.2.2");const lt=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ht={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:b},dt=(t=ht,e,i)=>{const{kind:s,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,o,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];e.call(this,i),this.requestUpdate(s,o,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};function pt(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ut(t){return pt({...t,state:!0,attribute:!1})}const _t={en:{"card.name":"Air Purifier","card.description":"Card for Xiaomi Air Purifier","state.on":"On","state.off":"Off","state.unavailable":"Unavailable","stats.pm25":"PM2.5","stats.temperature":"Temp","stats.humidity":"Humidity","stats.motor_speed":"Motor","filter.life":"Filter Life","filter.used_time":"Used","filter.hours":"h","settings.child_lock":"Child Lock","settings.led":"LED","settings.buzzer":"Sound","aqi.good":"Good","aqi.moderate":"Moderate","aqi.unhealthy_sensitive":"Sensitive","aqi.unhealthy":"Unhealthy","aqi.very_unhealthy":"Very Unhealthy","aqi.hazardous":"Hazardous","editor.entity":"Entity (required)","editor.name":"Name","editor.show_name":"Show Name","editor.show_state":"Show State","editor.show_toolbar":"Show Toolbar","editor.show_stats":"Show Stats","editor.show_settings":"Show Settings","editor.show_filter_info":"Show Filter Info","editor.compact_view":"Compact View","editor.icon_animation":"Icon Animation","editor.entity_overrides":"Entity Overrides","editor.pm25_entity":"PM2.5 Entity","editor.temperature_entity":"Temperature Entity","editor.humidity_entity":"Humidity Entity","editor.motor_speed_entity":"Motor Speed Entity","editor.filter_life_entity":"Filter Life Entity","editor.filter_used_time_entity":"Filter Used Time Entity","editor.favorite_level_entity":"Favorite Level Entity","editor.child_lock_entity":"Child Lock Entity","editor.led_entity":"LED Entity","editor.buzzer_entity":"Buzzer Entity","light.card.name":"Light","light.card.description":"Card for light entities","editor.show_brightness_control":"Brightness Control","editor.show_color_temp_control":"Color Temp Control","editor.show_color_control":"Color Control","editor.use_light_color":"Use Light Color","editor.hide_controls_when_off":"Hide controls when off","plug.card.name":"Plug","plug.card.description":"Card for smart plug/socket entities","stats.power":"Power","stats.daily":"Daily","stats.monthly":"Monthly","stats.yearly":"Yearly","settings.power_on_behavior":"Power-On","editor.show_power_on_behavior":"Power-On Behavior","editor.power_entity":"Power Entity","editor.daily_consumption_entity":"Daily Consumption","editor.monthly_consumption_entity":"Monthly Consumption","editor.yearly_consumption_entity":"Yearly Consumption","editor.power_on_behavior_entity":"Power-On Behavior Entity","timer.card.name":"Timer","timer.card.description":"Schedule on/off timers for any entity","timer.title":"Timer","timer.duration_mode":"After","timer.time_mode":"At time","timer.hours":"h","timer.minutes":"min","timer.start":"Start Timer","timer.cancel":"Cancel","timer.active":"Active timers","timer.turn_on":"Turn On","timer.turn_off":"Turn Off","timer.toggle":"Toggle","timer.custom":"Custom","timer.action":"Action","timer.no_active":"No active timers","editor.show_timer":"Show timer","editor.default_action":"Default action","editor.show_presets":"Show presets"},ru:{"card.name":"Очиститель воздуха","card.description":"Карточка для Xiaomi Air Purifier","state.on":"Вкл","state.off":"Выкл","state.unavailable":"Недоступен","stats.pm25":"PM2.5","stats.temperature":"Темп.","stats.humidity":"Влажн.","stats.motor_speed":"Мотор","filter.life":"Ресурс фильтра","filter.used_time":"Использован","filter.hours":"ч","settings.child_lock":"Блокировка","settings.led":"Подсветка","settings.buzzer":"Звук","aqi.good":"Отлично","aqi.moderate":"Нормально","aqi.unhealthy_sensitive":"Вредно (чувств.)","aqi.unhealthy":"Вредно","aqi.very_unhealthy":"Очень вредно","aqi.hazardous":"Опасно","editor.entity":"Объект (обязательно)","editor.name":"Название","editor.show_name":"Показать название","editor.show_state":"Показать состояние","editor.show_toolbar":"Показать режимы","editor.show_stats":"Показать датчики","editor.show_settings":"Показать настройки","editor.show_filter_info":"Показать фильтр","editor.compact_view":"Компактный вид","editor.icon_animation":"Анимация иконки","editor.entity_overrides":"Переопределение объектов","editor.pm25_entity":"PM2.5","editor.temperature_entity":"Температура","editor.humidity_entity":"Влажность","editor.motor_speed_entity":"Скорость мотора","editor.filter_life_entity":"Ресурс фильтра","editor.filter_used_time_entity":"Время использования фильтра","editor.favorite_level_entity":"Уровень Favorite","editor.child_lock_entity":"Детский замок","editor.led_entity":"LED индикатор","editor.buzzer_entity":"Звуковой сигнал","light.card.name":"Свет","light.card.description":"Карточка для управления светом","editor.show_brightness_control":"Яркость","editor.show_color_temp_control":"Цвет. температура","editor.show_color_control":"Цвет","editor.use_light_color":"Цвет лампы","editor.hide_controls_when_off":"Скрывать управление при выключении","plug.card.name":"Розетка","plug.card.description":"Карточка для умной розетки","stats.power":"Мощность","stats.daily":"Сегодня","stats.monthly":"За месяц","stats.yearly":"За год","settings.power_on_behavior":"При вкл.","editor.show_power_on_behavior":"Поведение при включении","editor.power_entity":"Мощность","editor.daily_consumption_entity":"Потребление за день","editor.monthly_consumption_entity":"Потребление за месяц","editor.yearly_consumption_entity":"Потребление за год","editor.power_on_behavior_entity":"Поведение при включении","timer.card.name":"Таймер","timer.card.description":"Таймеры включения/выключения устройств","timer.title":"Таймер","timer.duration_mode":"Через","timer.time_mode":"В конкретное время","timer.hours":"ч","timer.minutes":"мин","timer.start":"Запустить","timer.cancel":"Отменить","timer.active":"Активные таймеры","timer.turn_on":"Включить","timer.turn_off":"Выключить","timer.toggle":"Переключить","timer.custom":"Кастомное","timer.action":"Действие","timer.no_active":"Нет активных таймеров","editor.show_timer":"Показывать таймер","editor.default_action":"Действие по умолчанию","editor.show_presets":"Показывать пресеты"}};function mt(t,e="en"){return _t[e]?.[t]??_t.en?.[t]??t}const ft=n`
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
`,bt=n`
  .not-found {
    padding: 16px;
    text-align: center;
    color: var(--secondary-text-color);
    font-size: 14px;
  }
`,$t=[vt,bt,n`
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

`];function xt(t){return(t.split(".")[1]||"").split("_").slice(0,-2).join("_")}function wt(t,e,i){for(const s of i){const i=s.replace("{prefix}",e);if(t.states[i])return i}}function kt(t,e){const i=function(t,e){const i=xt(e);return{pm25:wt(t,i,["sensor.{prefix}_pm25_density","sensor.{prefix}_pm25","sensor.{prefix}_pm2_5"]),temperature:wt(t,i,["sensor.{prefix}_temperature","sensor.{prefix}_environment_temperature"]),humidity:wt(t,i,["sensor.{prefix}_relative_humidity","sensor.{prefix}_humidity"]),motorSpeed:wt(t,i,["sensor.{prefix}_motor_speed","sensor.{prefix}_fan_motor_speed"]),filterLife:wt(t,i,["sensor.{prefix}_filter_life_level","sensor.{prefix}_filter_life"]),filterUsedTime:wt(t,i,["sensor.{prefix}_filter_used_time"]),favoriteLevel:wt(t,i,["number.{prefix}_favorite_level","number.{prefix}_favorite_fan_level"]),childLock:wt(t,i,["switch.{prefix}_physical_control_locked","switch.{prefix}_child_lock"]),led:wt(t,i,["light.{prefix}_indicator_light","switch.{prefix}_led"]),buzzer:wt(t,i,["switch.{prefix}_alarm","switch.{prefix}_buzzer"])}}(t,e.entity);return{pm25:e.pm25_entity||i.pm25,temperature:e.temperature_entity||i.temperature,humidity:e.humidity_entity||i.humidity,motorSpeed:e.motor_speed_entity||i.motorSpeed,filterLife:e.filter_life_entity||i.filterLife,filterUsedTime:e.filter_used_time_entity||i.filterUsedTime,favoriteLevel:e.favorite_level_entity||i.favoriteLevel,childLock:e.child_lock_entity||i.childLock,led:e.led_entity||i.led,buzzer:e.buzzer_entity||i.buzzer}}function Ct(t){return t.attributes.preset_mode}function St(t,e){const i=function(t,e){if(!e)return;const i=t.states[e];return i&&"unavailable"!==i.state&&"unknown"!==i.state?i.state:void 0}(t,e);if(void 0===i)return;const s=parseFloat(i);return isNaN(s)?void 0:s}function At(t){const e=window;e.customCards=e.customCards||[],e.customCards.push(t)}function Et(t,e,i,s,o){t.callService(e,i,{entity_id:s,...o})}function zt(t,e){Et(t,e.split(".")[0],"toggle",e)}function Ot(t,e,i){Et(t,e.split(".")[0],"turn_on",e,i)}function Mt(t,e,i,s,o){if(0===i.length)return V;const r=i=>{o||Ot(t,e),function(t,e,i){Et(t,"fan","set_preset_mode",e,{preset_mode:i})}(t,e,i)};return q`
    <div class="toolbar">
      ${i.map(t=>{const e=s?.toLowerCase()===t.toLowerCase();return q`
          <button
            class=${e?"active":""}
            @click=${()=>r(t)}
          >${t}</button>
        `})}
    </div>
  `}function Pt(t,e){if(!e)return V;const i=t.states[e];if(!i)return V;const s=St(t,e)??0,o=i.attributes.min??0,r=i.attributes.max??14,n=i.attributes.step??1;return q`
    <div class="favorite-row">
      <hac-slider
        .value=${s}
        .min=${o}
        .max=${r}
        .step=${n}
        @value-changed=${i=>{!function(t,e,i){Et(t,"number","set_value",e,{value:i})}(t,e,i.detail.value)}}
      ></hac-slider>
      <span class="favorite-label">${Math.round(s)}</span>
    </div>
  `}const Tt=new class{constructor(){this._schedules=new Map,this._subscribers=new Set,this._unsubscribe=null,this._connected=!1,this._pollInterval=null,this._hass=null,this._pollFailures=0}async connect(t){if(!this._connected){this._connected=!0,this._hass=t;try{const e=await t.callWS({type:"hac/scheduler/list"});this._updateFromList(e.schedules)}catch(t){return void(this._connected=!1)}try{const e=await t.connection.subscribeMessage(t=>{const e=t.schedule;"created"===t.type||"updated"===t.type?(this._removeSchedule(e.id),"active"===e.status&&this._addSchedule(e)):"cancelled"!==t.type&&"triggered"!==t.type||this._removeSchedule(e.id),this._notifySubscribers()},{type:"hac/scheduler/subscribe"});this._unsubscribe=e}catch{this._startPolling()}}}disconnect(){this._unsubscribe&&(this._unsubscribe(),this._unsubscribe=null),this._stopPolling(),this._connected=!1,this._hass=null,this._schedules.clear()}_startPolling(){this._stopPolling(),this._pollFailures=0,this._schedulePoll()}_schedulePoll(){const t=Math.min(15e3*Math.pow(2,this._pollFailures),3e5);this._pollInterval=setTimeout(async()=>{if(this._hass){try{const t=await this._hass.callWS({type:"hac/scheduler/list"});this._updateFromList(t.schedules),this._pollFailures=0}catch{this._pollFailures++}this._schedulePoll()}},t)}_stopPolling(){this._pollInterval&&(clearTimeout(this._pollInterval),this._pollInterval=null)}async createSchedule(t,e){try{const i=await t.callWS({type:"hac/scheduler/create",...e});return{id:i.schedule_id,target_entity:e.target_entity,action:e.action,trigger_at:i.trigger_at,created_at:(new Date).toISOString(),status:i.status,duration:e.duration,service:e.service,service_data:e.service_data}}catch(t){return console.error("[hac-scheduler] Failed to create schedule:",t),null}}async cancelSchedule(t,e){try{return await t.callWS({type:"hac/scheduler/cancel",schedule_id:e}),!0}catch(t){return console.error("[hac-scheduler] Failed to cancel schedule:",t),!1}}getSchedulesForEntity(t){return this._schedules.get(t)||[]}subscribe(t){return this._subscribers.add(t),()=>this._subscribers.delete(t)}_updateFromList(t){this._schedules.clear();for(const e of t)if("active"===e.status){const t=this._schedules.get(e.target_entity)||[];t.push(e),this._schedules.set(e.target_entity,t)}this._notifySubscribers()}_addSchedule(t){const e=this._schedules.get(t.target_entity)||[];e.push(t),this._schedules.set(t.target_entity,e)}_removeSchedule(t){for(const[e,i]of this._schedules.entries()){const s=i.findIndex(e=>e.id===t);if(-1!==s){i.splice(s,1),0===i.length&&this._schedules.delete(e);break}}}_notifySubscribers(){const t=[];for(const e of this._schedules.values())t.push(...e);for(const e of this._subscribers)e(t)}};function Ut(t,e){switch(t){case"turn_on":return mt("timer.turn_on",e);case"turn_off":return mt("timer.turn_off",e);case"toggle":return mt("timer.toggle",e);default:return t}}function Lt(t,e){const i={target_entity:t,action:e.action};return e.duration?i.duration=e.duration:e.time&&(i.time=e.time),i}const It=[300,600,900,1800,3600,7200];let Nt=class extends at{constructor(){super(...arguments),this.lang="en",this.presets=It,this.action="turn_off",this.disabled=!1,this._mode="duration",this._hours=0,this._minutes=10,this._timeValue="",this._selectedAction="turn_off"}connectedCallback(){super.connectedCallback(),this._selectedAction=this.action}_formatPreset(t){if(t>=3600){return`${t/3600}${mt("timer.hours",this.lang)}`}return`${t/60}${mt("timer.minutes",this.lang)}`}_setMode(t){this._mode=t}_selectPreset(t){this._hours=Math.floor(t/3600),this._minutes=Math.floor(t%3600/60)}_onHoursChange(t){const e=t.target;this._hours=Math.max(0,Math.min(23,parseInt(e.value)||0))}_onMinutesChange(t){const e=t.target;this._minutes=Math.max(0,Math.min(59,parseInt(e.value)||0))}_onTimeChange(t){const e=t.target;this._timeValue=e.value}_onActionChange(t){const e=t.target;this._selectedAction=e.value}_startTimer(){if(!this.disabled)if("duration"===this._mode){const t=3600*this._hours+60*this._minutes;if(t<=0)return;this.dispatchEvent(new CustomEvent("timer-start",{detail:{duration:t,action:this._selectedAction},bubbles:!0,composed:!0}))}else{if(!this._timeValue)return;this.dispatchEvent(new CustomEvent("timer-start",{detail:{time:this._timeValue,action:this._selectedAction},bubbles:!0,composed:!0}))}}render(){const t=this.lang;return q`
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
    `}_renderDuration(t){return q`
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
      ${this.presets.length>0?q`
            <div class="presets">
              ${this.presets.map(t=>q`
                  <button
                    class="preset-chip"
                    @click=${()=>this._selectPreset(t)}
                  >
                    ${this._formatPreset(t)}
                  </button>
                `)}
            </div>
          `:V}
    `}_renderTime(){return q`
      <div class="time-input">
        <input
          type="time"
          .value=${this._timeValue}
          @change=${this._onTimeChange}
        />
      </div>
    `}};Nt.styles=n`
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
  `,t([pt()],Nt.prototype,"lang",void 0),t([pt({type:Array})],Nt.prototype,"presets",void 0),t([pt()],Nt.prototype,"action",void 0),t([pt({type:Boolean})],Nt.prototype,"disabled",void 0),t([ut()],Nt.prototype,"_mode",void 0),t([ut()],Nt.prototype,"_hours",void 0),t([ut()],Nt.prototype,"_minutes",void 0),t([ut()],Nt.prototype,"_timeValue",void 0),t([ut()],Nt.prototype,"_selectedAction",void 0),Nt=t([lt("hac-timer-picker")],Nt);let Ht=class extends at{constructor(){super(...arguments),this.compact=!1,this._remaining=""}connectedCallback(){super.connectedCallback(),this._updateCountdown(),this._interval=setInterval(()=>this._updateCountdown(),1e3)}disconnectedCallback(){super.disconnectedCallback(),this._interval&&(clearInterval(this._interval),this._interval=void 0)}updated(t){t.has("schedule")&&this._updateCountdown()}_updateCountdown(){if(!this.schedule)return;const t=Date.now(),e=new Date(this.schedule.trigger_at).getTime(),i=Math.max(0,e-t);if(0===i)return this._remaining="00:00",void(this._interval&&(clearInterval(this._interval),this._interval=void 0));const s=Math.floor(i/1e3),o=Math.floor(s/3600),r=Math.floor(s%3600/60),n=s%60,a=t=>String(t).padStart(2,"0");this._remaining=o>0?`${a(o)}:${a(r)}:${a(n)}`:`${a(r)}:${a(n)}`}_cancel(){this.dispatchEvent(new CustomEvent("timer-cancel",{detail:{scheduleId:this.schedule.id},bubbles:!0,composed:!0}))}render(){return this.compact?q`
        <span class="badge compact" @click=${this._cancel}>
          <ha-icon icon="mdi:timer-outline"></ha-icon>
          ${this._remaining}
        </span>
      `:q`
      <span class="badge" @click=${this._cancel}>
        <ha-icon icon="mdi:timer-outline"></ha-icon>
        ${this._remaining}
      </span>
    `}};Ht.styles=n`
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
    .compact {
      padding: 2px 8px;
      font-size: 11px;
    }
    .compact ha-icon {
      --mdc-icon-size: 12px;
    }
  `,t([pt({attribute:!1})],Ht.prototype,"schedule",void 0),t([pt({type:Boolean})],Ht.prototype,"compact",void 0),t([ut()],Ht.prototype,"_remaining",void 0),Ht=t([lt("hac-timer-badge")],Ht);let Dt=class extends at{constructor(){super(...arguments),this.entityId="",this.entityName="",this.open=!1,this.defaultAction="turn_off",this._schedules=[]}connectedCallback(){super.connectedCallback(),this._unsubscribe=Tt.subscribe(()=>{this._schedules=Tt.getSchedulesForEntity(this.entityId)})}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribe?.()}updated(t){t.has("hass")&&this.hass&&Tt.connect(this.hass),t.has("entityId")&&(this._schedules=Tt.getSchedulesForEntity(this.entityId))}_close(){this.open=!1,this.dispatchEvent(new CustomEvent("dialog-closed",{bubbles:!0,composed:!0}))}async _onTimerStart(t){const e=Lt(this.entityId,t.detail);await Tt.createSchedule(this.hass,e)}async _cancelSchedule(t){await Tt.cancelSchedule(this.hass,t)}render(){if(!this.open)return V;const t=this.hass?.language||"en";return q`
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

          ${this._schedules.length>0?q`
                <div class="active-section">
                  <div class="section-title">
                    ${mt("timer.active",t)}
                  </div>
                  ${this._schedules.map(e=>q`
                      <div class="active-item">
                        <hac-timer-badge
                          .schedule=${e}
                        ></hac-timer-badge>
                        <span class="action-text">
                          ${Ut(e.action,t)}
                        </span>
                        <button
                          class="cancel-btn"
                          @click=${()=>this._cancelSchedule(e.id)}
                        >
                          <ha-icon icon="mdi:close"></ha-icon>
                        </button>
                      </div>
                    `)}
                </div>
              `:V}
        </div>
      </ha-dialog>
    `}};function jt(t,e){const i=t.length>0,s=t[0];return q`
    <div class="timer-control">
      <button class="timer-btn ${i?"active":""}" @click=${e}>
        <ha-icon icon="mdi:timer-outline"></ha-icon>
      </button>
      ${i&&s?q`
            <hac-timer-badge
              .schedule=${s}
              compact
            ></hac-timer-badge>
          `:V}
    </div>
  `}function Rt(t,e,i,s,o,r){return q`
    <hac-timer-dialog
      .hass=${t}
      .entityId=${e}
      .entityName=${i}
      .open=${s}
      .defaultAction=${o}
      @dialog-closed=${r}
    ></hac-timer-dialog>
  `}Dt.styles=n`
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
  `,t([pt({attribute:!1})],Dt.prototype,"hass",void 0),t([pt()],Dt.prototype,"entityId",void 0),t([pt()],Dt.prototype,"entityName",void 0),t([pt({type:Boolean})],Dt.prototype,"open",void 0),t([pt()],Dt.prototype,"defaultAction",void 0),t([ut()],Dt.prototype,"_schedules",void 0),Dt=t([lt("hac-timer-dialog")],Dt);const Ft=n`
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
`;let qt=class extends at{constructor(){super(...arguments),this.icon="mdi:air-purifier",this.active=!1,this.animated=!0,this.animation="spin"}render(){const t=this.active&&this.animated?this.animation:"";return q`
      <div class="shape ${this.active?"active":""}">
        <ha-icon .icon=${this.icon} class=${t}></ha-icon>
      </div>
    `}};qt.styles=[Ft,n`
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
  `],t([pt()],qt.prototype,"icon",void 0),t([pt({type:Boolean})],qt.prototype,"active",void 0),t([pt({type:Boolean})],qt.prototype,"animated",void 0),t([pt()],qt.prototype,"animation",void 0),qt=t([lt("hac-shape-icon")],qt);let Bt=class extends at{constructor(){super(...arguments),this.primary="",this.secondary=""}render(){return q`
      ${this.primary?q`<span class="primary">${this.primary}</span>`:V}
      ${this.secondary?q`<span class="secondary">${this.secondary}</span>`:V}
    `}};Bt.styles=n`
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
  `,t([pt()],Bt.prototype,"primary",void 0),t([pt()],Bt.prototype,"secondary",void 0),Bt=t([lt("hac-state-info")],Bt);let Vt=class extends at{render(){return q`
      <div class="container">
        <slot name="icon"></slot>
        <slot name="info"></slot>
      </div>
    `}};Vt.styles=n`
    :host {
      display: block;
    }
    .container {
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 0;
    }
  `,Vt=t([lt("hac-state-item")],Vt);let Kt=class extends at{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.step=1,this.disabled=!1}_onChange(t){const e=t.target,i=Number(e.value);this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:i},bubbles:!0,composed:!0}))}render(){const t=(this.value-this.min)/(this.max-this.min)*100;return q`
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
    `}};Kt.styles=n`
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
  `,t([pt({type:Number})],Kt.prototype,"value",void 0),t([pt({type:Number})],Kt.prototype,"min",void 0),t([pt({type:Number})],Kt.prototype,"max",void 0),t([pt({type:Number})],Kt.prototype,"step",void 0),t([pt({type:Boolean})],Kt.prototype,"disabled",void 0),Kt=t([lt("hac-slider")],Kt);let Wt=class extends at{constructor(){super(...arguments),this.value=0,this.color="var(--primary-color)"}render(){const t=Math.min(100,Math.max(0,this.value));return q`
      <div class="bar">
        <div class="fill" style="width: ${t}%; background: ${this.color}"></div>
      </div>
    `}};Wt.styles=n`
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
  `,t([pt({type:Number})],Wt.prototype,"value",void 0),t([pt()],Wt.prototype,"color",void 0),Wt=t([lt("hac-progress-bar")],Wt);let Xt=class extends at{constructor(){super(...arguments),this.icon="",this.active=!1,this.label=""}_handleClick(){this.dispatchEvent(new CustomEvent("toggle",{bubbles:!0,composed:!0}))}render(){return q`
      <button
        class=${this.active?"active":""}
        @click=${this._handleClick}
        title=${this.label}
      >
        <ha-icon .icon=${this.icon}></ha-icon>
      </button>
    `}};Xt.styles=n`
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
  `,t([pt()],Xt.prototype,"icon",void 0),t([pt({type:Boolean})],Xt.prototype,"active",void 0),t([pt()],Xt.prototype,"label",void 0),Xt=t([lt("hac-toggle-button")],Xt);const Jt=n`
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
`;function Yt(t,e){const i=t?.language||"en";return mt(`editor.${e.name}`,i)||e.name}function Zt(t,e){t.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))}const Gt=[{name:"entity",required:!0,selector:{entity:{domain:"fan"}}},{name:"name",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"show_name",selector:{boolean:{}}},{name:"show_state",selector:{boolean:{}}},{name:"show_toolbar",selector:{boolean:{}}},{name:"show_stats",selector:{boolean:{}}},{name:"show_settings",selector:{boolean:{}}},{name:"show_filter_info",selector:{boolean:{}}},{name:"compact_view",selector:{boolean:{}}},{name:"icon_animation",selector:{boolean:{}}},{name:"show_timer",selector:{boolean:{}}}]}],Qt=[{name:"pm25_entity",selector:{entity:{domain:"sensor"}}},{name:"temperature_entity",selector:{entity:{domain:"sensor"}}},{name:"humidity_entity",selector:{entity:{domain:"sensor"}}},{name:"motor_speed_entity",selector:{entity:{domain:"sensor"}}},{name:"filter_life_entity",selector:{entity:{domain:"sensor"}}},{name:"filter_used_time_entity",selector:{entity:{domain:"sensor"}}},{name:"favorite_level_entity",selector:{entity:{domain:"number"}}},{name:"child_lock_entity",selector:{entity:{domain:"switch"}}},{name:"led_entity",selector:{entity:{}}},{name:"buzzer_entity",selector:{entity:{domain:"switch"}}}];let te=class extends at{constructor(){super(...arguments),this._expandedOverrides=!1,this._computeLabel=t=>Yt(this.hass,t)}setConfig(t){this._config=t}_valueChanged(t){Zt(this,t.detail.value)}_overrideValueChanged(t){Zt(this,{...this._config,...t.detail.value})}_toggleOverrides(){this._expandedOverrides=!this._expandedOverrides}render(){if(!this.hass||!this._config)return V;const t=this.hass.language||"en",e={show_name:!0,show_state:!0,show_toolbar:!0,show_stats:!0,show_settings:!0,show_filter_info:!0,compact_view:!1,icon_animation:!0,...this._config};return q`
      <ha-form
        .hass=${this.hass}
        .data=${e}
        .schema=${Gt}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>

      <div class="overrides-section">
        <button class="overrides-toggle" @click=${this._toggleOverrides}>
          <ha-icon icon=${this._expandedOverrides?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
          ${mt("editor.entity_overrides",t)}
        </button>
        ${this._expandedOverrides?q`
          <ha-form
            .hass=${this.hass}
            .data=${this._config}
            .schema=${Qt}
            .computeLabel=${this._computeLabel}
            @value-changed=${this._overrideValueChanged}
          ></ha-form>
        `:V}
      </div>
    `}};te.styles=[Jt,n`
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
  `],t([pt({attribute:!1})],te.prototype,"hass",void 0),t([ut()],te.prototype,"_config",void 0),t([ut()],te.prototype,"_expandedOverrides",void 0),te=t([lt(yt)],te),At({type:gt,name:"Air Purifier Card",description:"Custom card for Xiaomi Air Purifier"});let ee=class extends at{constructor(){super(...arguments),this._timerDialogOpen=!1,this._schedules=[],this._schedulerConnected=!1}static getConfigElement(){return document.createElement(yt)}static getStubConfig(t){const e=Object.keys(t.states).filter(e=>e.startsWith("fan.")&&t.states[e].attributes.preset_modes);return{entity:e[0]||""}}setConfig(t){if(!t.entity)throw new Error("Entity is required");this._config=t}getCardSize(){return this._config?.compact_view?2:4}disconnectedCallback(){super.disconnectedCallback(),this._schedulerUnsub?.()}shouldUpdate(t){if(t.has("_config")||t.has("_timerDialogOpen")||t.has("_schedules"))return!0;if(!t.has("hass"))return!0;const e=t.get("hass");if(!e)return!0;const i=this._config.entity;if(e.states[i]!==this.hass.states[i])return!0;const s=this._getResolved();for(const t of Object.values(s))if(t&&e.states[t]!==this.hass.states[t])return!0;return!1}updated(t){t.has("hass")&&this.hass&&!this._schedulerConnected&&this._config?.show_timer&&(this._schedulerConnected=!0,this._schedulerUnsub=Tt.subscribe(()=>{this._schedules=Tt.getSchedulesForEntity(this._config?.entity)}),Tt.connect(this.hass),this._schedules=Tt.getSchedulesForEntity(this._config.entity))}_getResolved(){return this._resolved&&this._lastEntity===this._config.entity||(this._lastEntity=this._config.entity,this._resolved=kt(this.hass,this._config)),this._resolved}get _lang(){return this.hass?.language||"en"}render(){if(!this.hass||!this._config)return V;const t=this.hass.states[this._config.entity];if(!t)return q`
        <ha-card>
          <div class="not-found">Entity not found: ${this._config.entity}</div>
        </ha-card>
      `;const e=this._getResolved(),i=function(t){return"on"===t.state}(t),s=this._config.name||t.attributes.friendly_name||"Air Purifier",o=function(t){return t.attributes.preset_modes||[]}(t),r=Ct(t),n="favorite"===r?.toLowerCase(),a=this._lang,c=this._config.compact_view;return q`
      <ha-card>
        <div class="container">
          ${this._renderHeader(t,i,s,a)}
          ${c||!1===this._config.show_stats?V:function(t,e,i){const s=[{key:"pm25",entityId:e.pm25,labelKey:"stats.pm25",icon:"mdi:blur"},{key:"temperature",entityId:e.temperature,labelKey:"stats.temperature",icon:"mdi:thermometer"},{key:"humidity",entityId:e.humidity,labelKey:"stats.humidity",icon:"mdi:water-percent"},{key:"motorSpeed",entityId:e.motorSpeed,labelKey:"stats.motor_speed",icon:"mdi:fan"}].filter(e=>!!e.entityId&&void 0!==St(t,e.entityId));return 0===s.length?V:q`
    <div class="stats-grid">
      ${s.map(e=>{const s=St(t,e.entityId),o=function(t,e){if(!e)return"";const i=t.states[e];return i?.attributes.unit_of_measurement||""}(t,e.entityId),r="pm25"===e.key&&void 0!==s,n=r?`background: ${a=s,a<=12?"var(--green-color, #4caf50)":a<=35?"var(--light-green-color, #8bc34a)":a<=55?"var(--yellow-color, #ffeb3b)":a<=150?"var(--orange-color, #ff9800)":a<=250?"var(--deep-orange-color, #ff5722)":"var(--red-color, #f44336)"}; color: #fff;`:"";var a;return q`
          <div class="stat-item" style=${n}>
            <span class="stat-value">
              ${void 0!==s?Math.round(s):"—"}
              ${o?q`<span class="stat-unit" style=${r?"color: inherit;":""}>${o}</span>`:""}
            </span>
            <span class="stat-label" style=${r?"color: inherit;":""}>${mt(e.labelKey,i)}</span>
          </div>
        `})}
    </div>
  `}(this.hass,e,a)}
          ${!1!==this._config.show_toolbar?Mt(this.hass,this._config.entity,o,r,i):V}
          ${i&&n?Pt(this.hass,e.favoriteLevel):V}
          ${c||!1===this._config.show_filter_info?V:function(t,e,i,s){const o=St(t,e),r=St(t,i);if(void 0===o&&void 0===r)return V;const n=o??0,a=(c=n)>50?"var(--green-color, #4caf50)":c>20?"var(--orange-color, #ff9800)":"var(--red-color, #f44336)";var c;return q`
    <div class="filter-section">
      <div class="filter-header">
        <span>${mt("filter.life",s)}</span>
        <span>
          ${void 0!==o?q`<span class="value">${Math.round(o)}%</span>`:""}
          ${void 0!==r?q` · ${Math.round(r)} ${mt("filter.hours",s)}`:""}
        </span>
      </div>
      ${void 0!==o?q`<hac-progress-bar .value=${n} .color=${a}></hac-progress-bar>`:V}
    </div>
  `}(this.hass,e.filterLife,e.filterUsedTime,a)}
          ${c||!1===this._config.show_settings?V:function(t,e,i,s,o){const r=[{entityId:e,icon:"mdi:lock",labelKey:"settings.child_lock"},{entityId:i,icon:"mdi:lightbulb-outline",labelKey:"settings.led"},{entityId:s,icon:"mdi:volume-high",labelKey:"settings.buzzer"}].filter(e=>e.entityId&&t.states[e.entityId]);return 0===r.length?V:q`
    <div class="settings-row">
      ${r.map(e=>q`
        <hac-toggle-button
          .icon=${e.icon}
          ?active=${function(t,e){const i=t.states[e];return"on"===i?.state}(t,e.entityId)}
          .label=${mt(e.labelKey,o)}
          @toggle=${()=>zt(t,e.entityId)}
        ></hac-toggle-button>
      `)}
    </div>
  `}(this.hass,e.childLock,e.led,e.buzzer,a)}
        </div>
        ${this._config.show_timer?Rt(this.hass,this._config.entity,s,this._timerDialogOpen,this._config.timer_default_action||"turn_off",()=>{this._timerDialogOpen=!1}):V}
      </ha-card>
    `}_renderHeader(t,e,i,s){const o=mt(e?"state.on":"state.off",s),r=e?Ct(t):void 0,n=r?`${o} · ${r}`:o;return q`
      <div class="header">
        ${function(t,e,i,s){return q`
    <hac-shape-icon
      icon="mdi:air-purifier"
      ?active=${i}
      .animated=${s}
      @click=${()=>zt(t,e)}
    ></hac-shape-icon>
  `}(this.hass,this._config.entity,e,!1!==this._config.icon_animation)}
        ${!1!==this._config.show_name||!1!==this._config.show_state?q`
            <hac-state-info
              .primary=${!1!==this._config.show_name?i:""}
              .secondary=${!1!==this._config.show_state?n:""}
            ></hac-state-info>
          `:V}
        ${this._config.show_timer?jt(this._schedules,()=>{this._timerDialogOpen=!0}):V}
      </div>
    `}};ee.styles=[ft,$t],t([pt({attribute:!1})],ee.prototype,"hass",void 0),t([ut()],ee.prototype,"_config",void 0),t([ut()],ee.prototype,"_timerDialogOpen",void 0),t([ut()],ee.prototype,"_schedules",void 0),ee=t([lt(gt)],ee);const ie="light-card",se="light-card-editor",oe=[vt,bt,n`
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

`];function re(t){return t.attributes.supported_color_modes||[]}function ne(t){return"on"===t.state}function ae(t){const e=t.attributes.brightness;return null==e?ne(t)?100:0:Math.max(1,Math.round(e/255*100))}function ce(t){const e=t/100;let i,s,o;return i=e<=66?255:329.698727446*Math.pow(e-60,-.1332047592),s=e<=66?99.4708025861*Math.log(e)-161.1195681661:288.1221695283*Math.pow(e-60,-.0755148492),o=e>=66?255:e<=19?0:138.5177312231*Math.log(e-10)-305.0447927307,[Math.round(Math.min(255,Math.max(0,i))),Math.round(Math.min(255,Math.max(0,s))),Math.round(Math.min(255,Math.max(0,o)))]}function le(t,e,i,s,o,r){const n=r&&s?function(t){if(!ne(t))return;const e=function(t){return t.attributes.rgb_color}(t);if(e)return`rgb(${e[0]}, ${e[1]}, ${e[2]})`;const i=t.attributes.color_temp_kelvin;if(i){const[t,e,s]=ce(i);return`rgb(${t}, ${e}, ${s})`}}(i):void 0;return q`
    <hac-shape-icon
      icon="mdi:lightbulb"
      ?active=${s}
      .animated=${o}
      animation="pulse"
      style=${n?`--hac-shape-active-bg: ${n}`:""}
      @click=${()=>zt(t,e)}
    ></hac-shape-icon>
  `}function he(t,e,i,s,o){const r=function(t,e){const i=[];for(let s=0;s<=5;s++){const o=t+s/5*(e-t),[r,n,a]=ce(o);i.push(`rgb(${r}, ${n}, ${a})`)}return`linear-gradient(to right, ${i.join(", ")})`}(s,o);return q`
    <div class="control-row">
      <ha-icon icon="mdi:thermometer"></ha-icon>
      <hac-gradient-slider
        .value=${i}
        .min=${s}
        .max=${o}
        .step=${100}
        .gradient=${r}
        @value-changed=${i=>{const s=i.detail.value;Ot(t,e,{color_temp_kelvin:s})}}
      ></hac-gradient-slider>
      <span class="value">${i}K</span>
    </div>
  `}function de(t,e,i){return q`
    <div class="control-row">
      <ha-icon icon="mdi:palette"></ha-icon>
      <hac-gradient-slider
        .value=${i}
        .min=${0}
        .max=${360}
        .step=${1}
        .gradient=${"linear-gradient(to right, hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(360, 100%, 50%))"}
        @value-changed=${i=>{const s=i.detail.value,[o,r,n]=function(t,e,i){const s=i/100,o=s*(e/100),r=o*(1-Math.abs(t/60%2-1)),n=s-o;let a,c,l;return t<60?(a=o,c=r,l=0):t<120?(a=r,c=o,l=0):t<180?(a=0,c=o,l=r):t<240?(a=0,c=r,l=o):t<300?(a=r,c=0,l=o):(a=o,c=0,l=r),[Math.round(255*(a+n)),Math.round(255*(c+n)),Math.round(255*(l+n))]}(s,100,100);Ot(t,e,{rgb_color:[o,r,n]})}}
      ></hac-gradient-slider>
      <span class="value">${Math.round(i)}°</span>
    </div>
  `}let pe=class extends at{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.step=1,this.disabled=!1,this.gradient=""}_onChange(t){const e=t.target,i=Number(e.value);this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:i},bubbles:!0,composed:!0}))}render(){return q`
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
    `}};pe.styles=n`
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
  `,t([pt({type:Number})],pe.prototype,"value",void 0),t([pt({type:Number})],pe.prototype,"min",void 0),t([pt({type:Number})],pe.prototype,"max",void 0),t([pt({type:Number})],pe.prototype,"step",void 0),t([pt({type:Boolean})],pe.prototype,"disabled",void 0),t([pt()],pe.prototype,"gradient",void 0),pe=t([lt("hac-gradient-slider")],pe);const ue=[{name:"entity",required:!0,selector:{entity:{domain:"light"}}},{name:"name",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"show_name",selector:{boolean:{}}},{name:"show_state",selector:{boolean:{}}},{name:"show_brightness_control",selector:{boolean:{}}},{name:"show_color_temp_control",selector:{boolean:{}}},{name:"show_color_control",selector:{boolean:{}}},{name:"use_light_color",selector:{boolean:{}}},{name:"icon_animation",selector:{boolean:{}}},{name:"compact_view",selector:{boolean:{}}},{name:"hide_controls_when_off",selector:{boolean:{}}},{name:"show_timer",selector:{boolean:{}}}]}];let _e=class extends at{constructor(){super(...arguments),this._computeLabel=t=>Yt(this.hass,t)}setConfig(t){this._config=t}_valueChanged(t){Zt(this,t.detail.value)}render(){if(!this.hass||!this._config)return V;const t={show_name:!0,show_state:!0,show_brightness_control:!0,show_color_temp_control:!0,show_color_control:!0,use_light_color:!0,icon_animation:!0,compact_view:!1,hide_controls_when_off:!0,...this._config};return q`
      <ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${ue}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}};_e.styles=Jt,t([pt({attribute:!1})],_e.prototype,"hass",void 0),t([ut()],_e.prototype,"_config",void 0),_e=t([lt(se)],_e),At({type:ie,name:"Light Card",description:"Custom card for light entities with brightness and color controls"});let me=class extends at{constructor(){super(...arguments),this._timerDialogOpen=!1,this._schedules=[],this._schedulerConnected=!1}disconnectedCallback(){super.disconnectedCallback(),this._schedulerUnsub?.()}static getConfigElement(){return document.createElement(se)}static getStubConfig(t){const e=Object.keys(t.states).filter(t=>t.startsWith("light."));return{entity:e[0]||""}}setConfig(t){if(!t.entity)throw new Error("Entity is required");this._config=t}getCardSize(){return this._config?.compact_view?1:3}shouldUpdate(t){if(t.has("_config")||t.has("_timerDialogOpen")||t.has("_schedules"))return!0;if(!t.has("hass"))return!0;const e=t.get("hass");if(!e)return!0;const i=this._config.entity;return e.states[i]!==this.hass.states[i]}updated(t){t.has("hass")&&this.hass&&!this._schedulerConnected&&this._config?.show_timer&&(this._schedulerConnected=!0,this._schedulerUnsub=Tt.subscribe(()=>{this._schedules=Tt.getSchedulesForEntity(this._config?.entity)}),Tt.connect(this.hass),this._schedules=Tt.getSchedulesForEntity(this._config.entity))}get _lang(){return this.hass?.language||"en"}render(){if(!this.hass||!this._config)return V;const t=this.hass.states[this._config.entity];if(!t)return q`
        <ha-card>
          <div class="not-found">Entity not found: ${this._config.entity}</div>
        </ha-card>
      `;const e=ne(t),i=this._config.name||t.attributes.friendly_name||"Light",s=this._lang,o=this._config.compact_view;return q`
      <ha-card>
        <div class="container">
          ${this._renderHeader(t,e,i,s)}
          ${o||!e&&!1!==this._config.hide_controls_when_off?V:this._renderControls(t)}
        </div>
        ${this._config.show_timer?Rt(this.hass,this._config.entity,i,this._timerDialogOpen,this._config.timer_default_action||"turn_off",()=>{this._timerDialogOpen=!1}):V}
      </ha-card>
    `}_renderHeader(t,e,i,s){const o=mt(e?"state.on":"state.off",s),r=e?ae(t):0,n=e&&r?`${o} · ${r}%`:o;return q`
      <div class="header">
        ${le(this.hass,this._config.entity,t,e,!1!==this._config.icon_animation,!1!==this._config.use_light_color)}
        ${!1!==this._config.show_name||!1!==this._config.show_state?q`
            <hac-state-info
              .primary=${!1!==this._config.show_name?i:""}
              .secondary=${!1!==this._config.show_state?n:""}
            ></hac-state-info>
          `:V}
        ${this._config.show_timer?jt(this._schedules,()=>{this._timerDialogOpen=!0}):V}
      </div>
    `}_renderControls(t){const e=this._config.entity;return q`
      ${!1!==this._config.show_brightness_control&&function(t){const e=re(t);return e.length>0&&!e.every(t=>"onoff"===t)}(t)?function(t,e,i){return q`
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
  `}(this.hass,e,ae(t)):V}
      ${!1!==this._config.show_color_temp_control&&function(t){return re(t).includes("color_temp")}(t)?this._renderColorTemp(t,e):V}
      ${!1!==this._config.show_color_control&&function(t){const e=["hs","xy","rgb","rgbw","rgbww"];return re(t).some(t=>e.includes(t))}(t)?de(this.hass,e,function(t){return t.attributes.hs_color}(t)?.[0]??0):V}
    `}_renderColorTemp(t,e){const{min:i,max:s}=function(t){return{min:t.attributes.min_color_temp_kelvin??2e3,max:t.attributes.max_color_temp_kelvin??6500}}(t);return he(this.hass,e,function(t){return t.attributes.color_temp_kelvin??4e3}(t),i,s)}};me.styles=[ft,oe],t([pt({attribute:!1})],me.prototype,"hass",void 0),t([ut()],me.prototype,"_config",void 0),t([ut()],me.prototype,"_timerDialogOpen",void 0),t([ut()],me.prototype,"_schedules",void 0),me=t([lt(ie)],me);const fe="plug-card",ge="plug-card-editor",ye=[vt,bt,n`
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

  /* Power-on behavior toolbar */
  .toolbar-section {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .toolbar-label {
    font-size: 11px;
    font-weight: 500;
    color: var(--secondary-text-color);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
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

  /* Settings row */
  .settings-row {
    display: flex;
    gap: 8px;
    justify-content: center;
  }
`];function ve(t,e){if(!e)return;const i=t.states[e];if(!i||"unavailable"===i.state||"unknown"===i.state)return;const s=parseFloat(i.state);return isNaN(s)?void 0:s}function be(t,e,i,s,o){if(!e||0===i.length)return V;return q`
    <div class="toolbar-section">
      <div class="toolbar-label">${mt("settings.power_on_behavior",o)}</div>
      <div class="toolbar">
        ${i.map(i=>q`
          <button
            class=${s===i?"active":""}
            @click=${()=>(i=>{t.callService("select","select_option",{entity_id:e,option:i})})(i)}
          >${i}</button>
        `)}
      </div>
    </div>
  `}const $e=[{name:"entity",required:!0,selector:{entity:{domain:"switch"}}},{name:"name",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"show_name",selector:{boolean:{}}},{name:"show_state",selector:{boolean:{}}},{name:"show_stats",selector:{boolean:{}}},{name:"show_power_on_behavior",selector:{boolean:{}}},{name:"show_settings",selector:{boolean:{}}},{name:"icon_animation",selector:{boolean:{}}},{name:"compact_view",selector:{boolean:{}}},{name:"show_timer",selector:{boolean:{}}}]}],xe=[{name:"power_entity",selector:{entity:{domain:"sensor"}}},{name:"daily_consumption_entity",selector:{entity:{domain:"sensor"}}},{name:"monthly_consumption_entity",selector:{entity:{domain:"sensor"}}},{name:"yearly_consumption_entity",selector:{entity:{domain:"sensor"}}},{name:"child_lock_entity",selector:{entity:{domain:"switch"}}},{name:"power_on_behavior_entity",selector:{entity:{domain:"select"}}}];let we=class extends at{constructor(){super(...arguments),this._expandedOverrides=!1,this._computeLabel=t=>Yt(this.hass,t)}setConfig(t){this._config=t}_valueChanged(t){Zt(this,t.detail.value)}_overrideValueChanged(t){Zt(this,{...this._config,...t.detail.value})}_toggleOverrides(){this._expandedOverrides=!this._expandedOverrides}render(){if(!this.hass||!this._config)return V;const t=this.hass.language||"en",e={show_name:!0,show_state:!0,show_stats:!0,show_power_on_behavior:!0,show_settings:!0,compact_view:!1,icon_animation:!0,...this._config};return q`
      <ha-form
        .hass=${this.hass}
        .data=${e}
        .schema=${$e}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>

      <div class="overrides-section">
        <button class="overrides-toggle" @click=${this._toggleOverrides}>
          <ha-icon icon=${this._expandedOverrides?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
          ${mt("editor.entity_overrides",t)}
        </button>
        ${this._expandedOverrides?q`
          <ha-form
            .hass=${this.hass}
            .data=${this._config}
            .schema=${xe}
            .computeLabel=${this._computeLabel}
            @value-changed=${this._overrideValueChanged}
          ></ha-form>
        `:V}
      </div>
    `}};we.styles=[Jt,n`
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
  `],t([pt({attribute:!1})],we.prototype,"hass",void 0),t([ut()],we.prototype,"_config",void 0),t([ut()],we.prototype,"_expandedOverrides",void 0),we=t([lt(ge)],we),At({type:fe,name:"Plug Card",description:"Custom card for smart plug/socket entities"});let ke=class extends at{constructor(){super(...arguments),this._timerDialogOpen=!1,this._schedules=[],this._schedulerConnected=!1}static getConfigElement(){return document.createElement(ge)}static getStubConfig(t){const e=Object.keys(t.states).filter(t=>t.startsWith("switch."));return{entity:e[0]||""}}setConfig(t){if(!t.entity)throw new Error("Entity is required");this._config=t}getCardSize(){return this._config?.compact_view?2:4}disconnectedCallback(){super.disconnectedCallback(),this._schedulerUnsub?.()}shouldUpdate(t){if(t.has("_config")||t.has("_timerDialogOpen")||t.has("_schedules"))return!0;if(!t.has("hass"))return!0;const e=t.get("hass");if(!e)return!0;const i=this._config.entity;if(e.states[i]!==this.hass.states[i])return!0;const s=this._getResolved();for(const t of Object.values(s))if(t&&e.states[t]!==this.hass.states[t])return!0;return!1}updated(t){t.has("hass")&&this.hass&&!this._schedulerConnected&&this._config?.show_timer&&(this._schedulerConnected=!0,this._schedulerUnsub=Tt.subscribe(()=>{this._schedules=Tt.getSchedulesForEntity(this._config?.entity)}),Tt.connect(this.hass),this._schedules=Tt.getSchedulesForEntity(this._config.entity))}_getResolved(){return this._resolved&&this._lastEntity===this._config.entity||(this._lastEntity=this._config.entity,this._resolved=function(t,e){const i=xt(e.entity);return{power:e.power_entity||wt(t,i,["sensor.{prefix}_power","sensor.{prefix}_electric_power"]),dailyConsumption:e.daily_consumption_entity||wt(t,i,["sensor.{prefix}_daily_consumption","sensor.{prefix}_daily_energy"]),monthlyConsumption:e.monthly_consumption_entity||wt(t,i,["sensor.{prefix}_monthly_consumption","sensor.{prefix}_monthly_energy"]),yearlyConsumption:e.yearly_consumption_entity||wt(t,i,["sensor.{prefix}_yearly_consumption","sensor.{prefix}_yearly_energy"]),childLock:e.child_lock_entity||wt(t,i,["switch.{prefix}_physical_control_locked","switch.{prefix}_child_lock"]),powerOnBehavior:e.power_on_behavior_entity||wt(t,i,["select.{prefix}_power_on_behavior","select.{prefix}_power_on_state"])}}(this.hass,this._config)),this._resolved}get _lang(){return this.hass?.language||"en"}render(){if(!this.hass||!this._config)return V;const t=this.hass.states[this._config.entity];if(!t)return q`
        <ha-card>
          <div class="not-found">Entity not found: ${this._config.entity}</div>
        </ha-card>
      `;const e=this._getResolved(),i=function(t){return"on"===t.state}(t),s=this._config.name||t.attributes.friendly_name||"Plug",o=this._lang,r=this._config.compact_view,n=function(t,e){if(!e)return[];const i=t.states[e];return i?.attributes.options||[]}(this.hass,e.powerOnBehavior),a=function(t,e){if(!e)return;const i=t.states[e];return i&&"unavailable"!==i.state&&"unknown"!==i.state?i.state:void 0}(this.hass,e.powerOnBehavior);return q`
      <ha-card>
        <div class="container">
          ${this._renderHeader(t,i,s,o,e)}
          ${r||!1===this._config.show_stats?V:function(t,e,i){const s=[{entityId:e.power,labelKey:"stats.power"},{entityId:e.dailyConsumption,labelKey:"stats.daily",decimals:2},{entityId:e.monthlyConsumption,labelKey:"stats.monthly",decimals:2}].filter(e=>!!e.entityId&&void 0!==ve(t,e.entityId));return 0===s.length?V:q`
    <div class="stats-grid">
      ${s.map(e=>{const s=ve(t,e.entityId),o=function(t,e){if(!e)return"";const i=t.states[e];return i?.attributes.unit_of_measurement||""}(t,e.entityId),r=void 0!==s?void 0!==e.decimals?s.toFixed(e.decimals):Math.round(s).toString():"—";return q`
          <div class="stat-item">
            <span class="stat-value">
              ${r}
              ${o?q`<span class="stat-unit">${o}</span>`:""}
            </span>
            <span class="stat-label">${mt(e.labelKey,i)}</span>
          </div>
        `})}
    </div>
  `}(this.hass,e,o)}
          ${r||!1===this._config.show_power_on_behavior?V:be(this.hass,e.powerOnBehavior,n,a,o)}
          ${r||!1===this._config.show_settings?V:function(t,e,i){if(!e||!t.states[e])return V;const s="on"===t.states[e]?.state;return q`
    <div class="settings-row">
      <hac-toggle-button
        .icon=${"mdi:lock"}
        ?active=${s}
        .label=${mt("settings.child_lock",i)}
        @toggle=${()=>zt(t,e)}
      ></hac-toggle-button>
    </div>
  `}(this.hass,e.childLock,o)}
        </div>
        ${this._config.show_timer?Rt(this.hass,this._config.entity,s,this._timerDialogOpen,this._config.timer_default_action||"turn_off",()=>{this._timerDialogOpen=!1}):V}
      </ha-card>
    `}_renderHeader(t,e,i,s,o){const r=mt(e?"state.on":"state.off",s),n=e?ve(this.hass,o.power):void 0,a=e&&void 0!==n?`${r} · ${Math.round(n)} W`:r;return q`
      <div class="header">
        ${function(t,e,i,s){return q`
    <hac-shape-icon
      icon="mdi:power-plug"
      ?active=${i}
      .animated=${s}
      @click=${()=>zt(t,e)}
    ></hac-shape-icon>
  `}(this.hass,this._config.entity,e,!1!==this._config.icon_animation)}
        ${!1!==this._config.show_name||!1!==this._config.show_state?q`
            <hac-state-info
              .primary=${!1!==this._config.show_name?i:""}
              .secondary=${!1!==this._config.show_state?a:""}
            ></hac-state-info>
          `:V}
        ${this._config.show_timer?jt(this._schedules,()=>{this._timerDialogOpen=!0}):V}
      </div>
    `}};ke.styles=[ft,ye],t([pt({attribute:!1})],ke.prototype,"hass",void 0),t([ut()],ke.prototype,"_config",void 0),t([ut()],ke.prototype,"_timerDialogOpen",void 0),t([ut()],ke.prototype,"_schedules",void 0),ke=t([lt(fe)],ke);const Ce="hac-timer-card",Se="hac-timer-card-editor",Ae=[bt,n`
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

`],Ee=[{name:"entity",required:!0,selector:{entity:{}}},{name:"name",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"show_name",selector:{boolean:{}}},{name:"show_state",selector:{boolean:{}}},{name:"show_presets",selector:{boolean:{}}}]},{name:"default_action",selector:{select:{options:[{value:"turn_off",label:"Turn Off"},{value:"turn_on",label:"Turn On"},{value:"toggle",label:"Toggle"}]}}}];let ze=class extends at{constructor(){super(...arguments),this._computeLabel=t=>Yt(this.hass,t)}setConfig(t){this._config=t}_valueChanged(t){Zt(this,t.detail.value)}render(){if(!this.hass||!this._config)return V;const t={show_name:!0,show_state:!0,show_presets:!0,default_action:"turn_off",...this._config};return q`
      <ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${Ee}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}};ze.styles=Jt,t([pt({attribute:!1})],ze.prototype,"hass",void 0),t([ut()],ze.prototype,"_config",void 0),ze=t([lt(Se)],ze),At({type:Ce,name:"Timer Card",description:"Schedule on/off timers for any entity"});let Oe=class extends at{constructor(){super(...arguments),this._schedules=[],this._schedulerConnected=!1}static getConfigElement(){return document.createElement(Se)}static getStubConfig(t){return{entity:Object.keys(t.states)[0]||""}}setConfig(t){if(!t.entity)throw new Error("Entity is required");this._config={show_name:!0,show_state:!0,default_action:"turn_off",show_presets:!0,...t}}getCardSize(){return 4}connectedCallback(){super.connectedCallback(),this._unsubscribe=Tt.subscribe(()=>{this._schedules=Tt.getSchedulesForEntity(this._config?.entity)})}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribe?.()}shouldUpdate(t){if(t.has("_config")||t.has("_schedules"))return!0;if(!t.has("hass"))return!0;const e=t.get("hass");if(!e)return!0;const i=this._config.entity;return e.states[i]!==this.hass.states[i]}updated(t){t.has("hass")&&this.hass&&!this._schedulerConnected&&(this._schedulerConnected=!0,Tt.connect(this.hass),this._schedules=Tt.getSchedulesForEntity(this._config.entity))}get _lang(){return this.hass?.language||"en"}_togglePower(){zt(this.hass,this._config.entity)}async _onTimerStart(t){const e=Lt(this._config.entity,t.detail);"custom"===t.detail.action&&this._config.custom_service&&(e.service=this._config.custom_service,e.service_data=this._config.custom_service_data),await Tt.createSchedule(this.hass,e)}async _cancelSchedule(t){await Tt.cancelSchedule(this.hass,t)}render(){if(!this.hass||!this._config)return V;const t=this.hass.states[this._config.entity];if(!t)return q`
        <ha-card>
          <div class="not-found">
            Entity not found: ${this._config.entity}
          </div>
        </ha-card>
      `;const e="on"===t.state,i=this._config.name||t.attributes.friendly_name||"Device",s=this._lang,o=mt(e?"state.on":"state.off",s),r=!1!==this._config.show_presets?this._config.presets||[300,600,900,1800,3600,7200]:[];return q`
      <ha-card>
        <div class="container">
          ${this._renderHeader(t,e,i,o,s)}

          <div class="timer-section">
            <hac-timer-picker
              .lang=${s}
              .action=${this._config.default_action||"turn_off"}
              .presets=${r}
              @timer-start=${this._onTimerStart}
            ></hac-timer-picker>
          </div>

          ${this._renderActiveTimers(s)}
        </div>
      </ha-card>
    `}_renderHeader(t,e,i,s,o){const r=this._schedules.length>0?this._schedules[0]:null;let n=s;if(r){n=`${s} · ${Ut(r.action,o)}`}return q`
      <div class="header">
        <button
          class="power-btn ${e?"active":""}"
          @click=${this._togglePower}
        >
          <ha-icon icon="mdi:power"></ha-icon>
        </button>
        ${!1!==this._config.show_name||!1!==this._config.show_state?q`
              <hac-state-info
                .primary=${!1!==this._config.show_name?i:""}
                .secondary=${!1!==this._config.show_state?n:""}
              ></hac-state-info>
            `:V}
        ${r?q`
              <hac-timer-badge
                .schedule=${r}
                compact
              ></hac-timer-badge>
            `:V}
      </div>
    `}_renderActiveTimers(t){return q`
      <div class="active-timers">
        <div class="active-timers-title">
          ${mt("timer.active",t)}
        </div>
        ${this._schedules.length>0?this._schedules.map(e=>q`
                <div class="timer-item">
                  <hac-timer-badge .schedule=${e}></hac-timer-badge>
                  <span class="action-text">
                    ${Ut(e.action,t)}
                  </span>
                  <button
                    class="cancel-btn"
                    @click=${()=>this._cancelSchedule(e.id)}
                  >
                    <ha-icon icon="mdi:close"></ha-icon>
                  </button>
                </div>
              `):q`
              <div class="no-active">
                ${mt("timer.no_active",t)}
              </div>
            `}
      </div>
    `}};Oe.styles=[ft,Ae],t([pt({attribute:!1})],Oe.prototype,"hass",void 0),t([ut()],Oe.prototype,"_config",void 0),t([ut()],Oe.prototype,"_schedules",void 0),Oe=t([lt(Ce)],Oe);console.info("%c HA-CARDS %c v1.0.0 ","color: white; background: #555; font-weight: bold; padding: 2px 6px; border-radius: 4px 0 0 4px;","color: white; background: #1976d2; font-weight: bold; padding: 2px 6px; border-radius: 0 4px 4px 0;");
