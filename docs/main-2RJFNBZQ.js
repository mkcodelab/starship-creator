var Bw=Object.defineProperty,Vw=Object.defineProperties;var zw=Object.getOwnPropertyDescriptors;var ov=Object.getOwnPropertySymbols;var Hw=Object.prototype.hasOwnProperty,Gw=Object.prototype.propertyIsEnumerable;var av=(n,e,t)=>e in n?Bw(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Ce=(n,e)=>{for(var t in e||={})Hw.call(e,t)&&av(n,t,e[t]);if(ov)for(var t of ov(e))Gw.call(e,t)&&av(n,t,e[t]);return n},Dt=(n,e)=>Vw(n,zw(e));var Wo=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});var cv=null;var Bd=1,lv=Symbol("SIGNAL");function tt(n){let e=cv;return cv=n,e}var uv={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Ww(n){if(!(Hd(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Bd)){if(!n.producerMustRecompute(n)&&!Vd(n)){n.dirty=!1,n.lastCleanEpoch=Bd;return}n.producerRecomputeValue(n),n.dirty=!1,n.lastCleanEpoch=Bd}}function dv(n){return n&&(n.nextProducerIndex=0),tt(n)}function hv(n,e){if(tt(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(Hd(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)zd(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function Vd(n){bc(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(Ww(t),i!==t.version))return!0}return!1}function fv(n){if(bc(n),Hd(n))for(let e=0;e<n.producerNode.length;e++)zd(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function zd(n,e){if(jw(n),bc(n),n.liveConsumerNode.length===1)for(let i=0;i<n.producerNode.length;i++)zd(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];bc(r),r.producerIndexOfThis[i]=e}}function Hd(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function bc(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function jw(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function $w(){throw new Error}var qw=$w;function pv(n){qw=n}function Ge(n){return typeof n=="function"}function ys(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Ec=ys(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function jo(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var kt=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Ge(i))try{i()}catch(s){e=s instanceof Ec?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{mv(s)}catch(o){e=e??[],o instanceof Ec?e=[...e,...o.errors]:e.push(o)}}if(e)throw new Ec(e)}}add(e){var t;if(e&&e!==this)if(this.closed)mv(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&jo(t,e)}remove(e){let{_finalizers:t}=this;t&&jo(t,e),e instanceof n&&e._removeParent(this)}};kt.EMPTY=(()=>{let n=new kt;return n.closed=!0,n})();var Gd=kt.EMPTY;function Tc(n){return n instanceof kt||n&&"closed"in n&&Ge(n.remove)&&Ge(n.add)&&Ge(n.unsubscribe)}function mv(n){Ge(n)?n():n.unsubscribe()}var Wn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var _s={setTimeout(n,e,...t){let{delegate:i}=_s;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=_s;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function Cc(n){_s.setTimeout(()=>{let{onUnhandledError:e}=Wn;if(e)e(n);else throw n})}function $o(){}var gv=Wd("C",void 0,void 0);function vv(n){return Wd("E",void 0,n)}function yv(n){return Wd("N",n,void 0)}function Wd(n,e,t){return{kind:n,value:e,error:t}}var Dr=null;function xs(n){if(Wn.useDeprecatedSynchronousErrorHandling){let e=!Dr;if(e&&(Dr={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=Dr;if(Dr=null,t)throw i}}else n()}function _v(n){Wn.useDeprecatedSynchronousErrorHandling&&Dr&&(Dr.errorThrown=!0,Dr.error=n)}var Ir=class extends kt{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Tc(e)&&e.add(this)):this.destination=Zw}static create(e,t,i){return new Ms(e,t,i)}next(e){this.isStopped?$d(yv(e),this):this._next(e)}error(e){this.isStopped?$d(vv(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?$d(gv,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},Xw=Function.prototype.bind;function jd(n,e){return Xw.call(n,e)}var qd=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){Ac(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){Ac(i)}else Ac(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){Ac(t)}}},Ms=class extends Ir{constructor(e,t,i){super();let r;if(Ge(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&Wn.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&jd(e.next,s),error:e.error&&jd(e.error,s),complete:e.complete&&jd(e.complete,s)}):r=e}this.destination=new qd(r)}};function Ac(n){Wn.useDeprecatedSynchronousErrorHandling?_v(n):Cc(n)}function Yw(n){throw n}function $d(n,e){let{onStoppedNotification:t}=Wn;t&&_s.setTimeout(()=>t(n,e))}var Zw={closed:!0,next:$o,error:Yw,complete:$o};var ws=typeof Symbol=="function"&&Symbol.observable||"@@observable";function gn(n){return n}function Xd(...n){return Yd(n)}function Yd(n){return n.length===0?gn:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var pt=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=Jw(t)?t:new Ms(t,i,r);return xs(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=xv(i),new i((r,s)=>{let o=new Ms({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[ws](){return this}pipe(...t){return Yd(t)(this)}toPromise(t){return t=xv(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function xv(n){var e;return(e=n??Wn.Promise)!==null&&e!==void 0?e:Promise}function Kw(n){return n&&Ge(n.next)&&Ge(n.error)&&Ge(n.complete)}function Jw(n){return n&&n instanceof Ir||Kw(n)&&Tc(n)}function Zd(n){return Ge(n?.lift)}function it(n){return e=>{if(Zd(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function rt(n,e,t,i,r){return new Kd(n,e,t,i,r)}var Kd=class extends Ir{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function Ss(){return it((n,e)=>{let t=null;n._refCount++;let i=rt(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,s=t;t=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var bs=class extends pt{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,Zd(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new kt;let t=this.getSubject();e.add(this.source.subscribe(rt(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=kt.EMPTY)}return e}refCount(){return Ss()(this)}};var Mv=ys(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var Xt=(()=>{class n extends pt{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new Dc(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new Mv}next(t){xs(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){xs(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){xs(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?Gd:(this.currentObservers=null,s.push(t),new kt(()=>{this.currentObservers=null,jo(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new pt;return t.source=this,t}}return n.create=(e,t)=>new Dc(e,t),n})(),Dc=class extends Xt{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:Gd}};var Bt=class extends Xt{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var an=new pt(n=>n.complete());function wv(n){return n&&Ge(n.schedule)}function Jd(n){return n[n.length-1]}function Sv(n){return Ge(Jd(n))?n.pop():void 0}function fi(n){return wv(Jd(n))?n.pop():void 0}function bv(n,e){return typeof Jd(n)=="number"?n.pop():e}function Tv(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function Ev(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Rr(n){return this instanceof Rr?(this.v=n,this):new Rr(n)}function Cv(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r={},a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(f){return function(g){return Promise.resolve(g).then(f,d)}}function a(f,g){i[f]&&(r[f]=function(v){return new Promise(function(m,p){s.push([f,v,m,p])>1||c(f,v)})},g&&(r[f]=g(r[f])))}function c(f,g){try{l(i[f](g))}catch(v){h(s[0][3],v)}}function l(f){f.value instanceof Rr?Promise.resolve(f.value.v).then(u,d):h(s[0][2],f)}function u(f){c("next",f)}function d(f){c("throw",f)}function h(f,g){f(g),s.shift(),s.length&&c(s[0][0],s[0][1])}}function Av(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof Ev=="function"?Ev(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var Ic=n=>n&&typeof n.length=="number"&&typeof n!="function";function Rc(n){return Ge(n?.then)}function Pc(n){return Ge(n[ws])}function Nc(n){return Symbol.asyncIterator&&Ge(n?.[Symbol.asyncIterator])}function Oc(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function Qw(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Lc=Qw();function Fc(n){return Ge(n?.[Lc])}function Uc(n){return Cv(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield Rr(t.read());if(r)return yield Rr(void 0);yield yield Rr(i)}}finally{t.releaseLock()}})}function kc(n){return Ge(n?.getReader)}function Ot(n){if(n instanceof pt)return n;if(n!=null){if(Pc(n))return eS(n);if(Ic(n))return tS(n);if(Rc(n))return nS(n);if(Nc(n))return Dv(n);if(Fc(n))return iS(n);if(kc(n))return rS(n)}throw Oc(n)}function eS(n){return new pt(e=>{let t=n[ws]();if(Ge(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function tS(n){return new pt(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function nS(n){return new pt(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,Cc)})}function iS(n){return new pt(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function Dv(n){return new pt(e=>{sS(n,e).catch(t=>e.error(t))})}function rS(n){return Dv(Uc(n))}function sS(n,e){var t,i,r,s;return Tv(this,void 0,void 0,function*(){try{for(t=Av(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function un(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function Bc(n,e=0){return it((t,i)=>{t.subscribe(rt(i,r=>un(i,n,()=>i.next(r),e),()=>un(i,n,()=>i.complete(),e),r=>un(i,n,()=>i.error(r),e)))})}function Vc(n,e=0){return it((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function Iv(n,e){return Ot(n).pipe(Vc(e),Bc(e))}function Rv(n,e){return Ot(n).pipe(Vc(e),Bc(e))}function Pv(n,e){return new pt(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function Nv(n,e){return new pt(t=>{let i;return un(t,e,()=>{i=n[Lc](),un(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>Ge(i?.return)&&i.return()})}function zc(n,e){if(!n)throw new Error("Iterable cannot be null");return new pt(t=>{un(t,e,()=>{let i=n[Symbol.asyncIterator]();un(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function Ov(n,e){return zc(Uc(n),e)}function Lv(n,e){if(n!=null){if(Pc(n))return Iv(n,e);if(Ic(n))return Pv(n,e);if(Rc(n))return Rv(n,e);if(Nc(n))return zc(n,e);if(Fc(n))return Nv(n,e);if(kc(n))return Ov(n,e)}throw Oc(n)}function It(n,e){return e?Lv(n,e):Ot(n)}function We(...n){let e=fi(n);return It(n,e)}function Es(n,e){let t=Ge(n)?n:()=>n,i=r=>r.error(t());return new pt(e?r=>e.schedule(i,0,r):i)}function Qd(n){return!!n&&(n instanceof pt||Ge(n.lift)&&Ge(n.subscribe))}var Ii=ys(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function st(n,e){return it((t,i)=>{let r=0;t.subscribe(rt(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:oS}=Array;function aS(n,e){return oS(e)?n(...e):n(e)}function Fv(n){return st(e=>aS(n,e))}var{isArray:cS}=Array,{getPrototypeOf:lS,prototype:uS,keys:dS}=Object;function Uv(n){if(n.length===1){let e=n[0];if(cS(e))return{args:e,keys:null};if(hS(e)){let t=dS(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function hS(n){return n&&typeof n=="object"&&lS(n)===uS}function kv(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function Hc(...n){let e=fi(n),t=Sv(n),{args:i,keys:r}=Uv(n);if(i.length===0)return It([],e);let s=new pt(fS(i,e,r?o=>kv(r,o):gn));return t?s.pipe(Fv(t)):s}function fS(n,e,t=gn){return i=>{Bv(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)Bv(e,()=>{let l=It(n[c],e),u=!1;l.subscribe(rt(i,d=>{s[c]=d,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function Bv(n,e,t){n?un(t,n,e):e()}function Vv(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,h=()=>{d&&!c.length&&!l&&e.complete()},f=v=>l<i?g(v):c.push(v),g=v=>{s&&e.next(v),l++;let m=!1;Ot(t(v,u++)).subscribe(rt(e,p=>{r?.(p),s?f(p):e.next(p)},()=>{m=!0},void 0,()=>{if(m)try{for(l--;c.length&&l<i;){let p=c.shift();o?un(e,o,()=>g(p)):g(p)}h()}catch(p){e.error(p)}}))};return n.subscribe(rt(e,f,()=>{d=!0,h()})),()=>{a?.()}}function Vt(n,e,t=1/0){return Ge(e)?Vt((i,r)=>st((s,o)=>e(i,s,r,o))(Ot(n(i,r))),t):(typeof e=="number"&&(t=e),it((i,r)=>Vv(i,r,n,t)))}function qo(n=1/0){return Vt(gn,n)}function zv(){return qo(1)}function Ts(...n){return zv()(It(n,fi(n)))}function Gc(n){return new pt(e=>{Ot(n()).subscribe(e)})}function eh(...n){let e=fi(n),t=bv(n,1/0),i=n;return i.length?i.length===1?Ot(i[0]):qo(t)(It(i,e)):an}function jn(n,e){return it((t,i)=>{let r=0;t.subscribe(rt(i,s=>n.call(e,s,r++)&&i.next(s)))})}function Qi(n){return it((e,t)=>{let i=null,r=!1,s;i=e.subscribe(rt(t,void 0,void 0,o=>{s=Ot(n(o,Qi(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function Hv(n,e,t,i,r){return(s,o)=>{let a=t,c=e,l=0;s.subscribe(rt(o,u=>{let d=l++;c=a?n(c,u,d):(a=!0,u),i&&o.next(c)},r&&(()=>{a&&o.next(c),o.complete()})))}}function Cs(n,e){return Ge(e)?Vt(n,e,1):Vt(n,1)}function er(n){return it((e,t)=>{let i=!1;e.subscribe(rt(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function Ri(n){return n<=0?()=>an:it((e,t)=>{let i=0;e.subscribe(rt(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function th(n){return st(()=>n)}function Wc(n=pS){return it((e,t)=>{let i=!1;e.subscribe(rt(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function pS(){return new Ii}function Xo(n){return it((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function pi(n,e){let t=arguments.length>=2;return i=>i.pipe(n?jn((r,s)=>n(r,s,i)):gn,Ri(1),t?er(e):Wc(()=>new Ii))}function As(n){return n<=0?()=>an:it((e,t)=>{let i=[];e.subscribe(rt(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function nh(n,e){let t=arguments.length>=2;return i=>i.pipe(n?jn((r,s)=>n(r,s,i)):gn,As(1),t?er(e):Wc(()=>new Ii))}function ih(n,e){return it(Hv(n,e,arguments.length>=2,!0))}function rh(...n){let e=fi(n);return it((t,i)=>{(e?Ts(n,t,e):Ts(n,t)).subscribe(i)})}function $n(n,e){return it((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(rt(i,c=>{r?.unsubscribe();let l=0,u=s++;Ot(n(c,u)).subscribe(r=rt(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function sh(n){return it((e,t)=>{Ot(n).subscribe(rt(t,()=>t.complete(),$o)),!t.closed&&e.subscribe(t)})}function Yt(n,e,t){let i=Ge(n)||e||t?{next:n,error:e,complete:t}:n;return i?it((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(rt(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):gn}var ze=class extends Error{constructor(e,t){super(af(e,t)),this.code=e}};function af(n,e){return`${`NG0${Math.abs(n)}`}${e?": "+e:""}`}function cf(n){return{toString:n}.toString()}var Yo=globalThis;function gt(n){for(let e in n)if(n[e]===gt)return e;throw Error("Could not find renamed property on target object.")}function vn(n){if(typeof n=="string")return n;if(Array.isArray(n))return"["+n.map(vn).join(", ")+"]";if(n==null)return""+n;if(n.overriddenName)return`${n.overriddenName}`;if(n.name)return`${n.name}`;let e=n.toString();if(e==null)return""+e;let t=e.indexOf(`
`);return t===-1?e:e.substring(0,t)}function Gv(n,e){return n==null||n===""?e===null?"":e:e==null||e===""?n:n+" "+e}var mS=gt({__forward_ref__:gt});function wy(n){return n.__forward_ref__=wy,n.toString=function(){return vn(this())},n}function Dn(n){return Sy(n)?n():n}function Sy(n){return typeof n=="function"&&n.hasOwnProperty(mS)&&n.__forward_ref__===wy}function Re(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function hl(n){return Wv(n,Ey)||Wv(n,Ty)}function by(n){return hl(n)!==null}function Wv(n,e){return n.hasOwnProperty(e)?n[e]:null}function gS(n){let e=n&&(n[Ey]||n[Ty]);return e||null}function jv(n){return n&&(n.hasOwnProperty($v)||n.hasOwnProperty(vS))?n[$v]:null}var Ey=gt({\u0275prov:gt}),$v=gt({\u0275inj:gt}),Ty=gt({ngInjectableDef:gt}),vS=gt({ngInjectorDef:gt}),ot=class{constructor(e,t){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=Re({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Cy(n){return n&&!!n.\u0275providers}var yS=gt({\u0275cmp:gt}),_S=gt({\u0275dir:gt}),xS=gt({\u0275pipe:gt}),MS=gt({\u0275mod:gt}),Kc=gt({\u0275fac:gt}),Zo=gt({__NG_ELEMENT_ID__:gt}),qv=gt({__NG_ENV_ID__:gt});function Ay(n){return typeof n=="string"?n:n==null?"":String(n)}function wS(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():Ay(n)}function SS(n,e){let t=e?`. Dependency path: ${e.join(" > ")} > ${n}`:"";throw new ze(-200,n)}function lf(n,e){throw new ze(-201,!1)}var Ze=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}(Ze||{}),vh;function Dy(){return vh}function An(n){let e=vh;return vh=n,e}function Iy(n,e,t){let i=hl(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&Ze.Optional)return null;if(e!==void 0)return e;lf(n,"Injector")}var bS={},Ko=bS,ES="__NG_DI_FLAG__",Jc="ngTempTokenPath",TS="ngTokenPath",CS=/\n/gm,AS="\u0275",Xv="__source",Ps;function DS(){return Ps}function tr(n){let e=Ps;return Ps=n,e}function IS(n,e=Ze.Default){if(Ps===void 0)throw new ze(-203,!1);return Ps===null?Iy(n,void 0,e):Ps.get(n,e&Ze.Optional?null:void 0,e)}function at(n,e=Ze.Default){return(Dy()||IS)(Dn(n),e)}function ue(n,e=Ze.Default){return at(n,fl(e))}function fl(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function yh(n){let e=[];for(let t=0;t<n.length;t++){let i=Dn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new ze(900,!1);let r,s=Ze.Default;for(let o=0;o<i.length;o++){let a=i[o],c=RS(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(at(r,s))}else e.push(at(i))}return e}function RS(n){return n[ES]}function PS(n,e,t,i){let r=n[Jc];throw e[Xv]&&r.unshift(e[Xv]),n.message=NS(`
`+n.message,r,t,i),n[TS]=r,n[Jc]=null,n}function NS(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==AS?n.slice(2):n;let r=vn(e);if(Array.isArray(e))r=e.map(vn).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):vn(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(CS,`
  `)}`}function Os(n,e){let t=n.hasOwnProperty(Kc);return t?n[Kc]:null}function OS(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],s=e[i];if(t&&(r=t(r),s=t(s)),s!==r)return!1}return!0}function LS(n){return n.flat(Number.POSITIVE_INFINITY)}function uf(n,e){n.forEach(t=>Array.isArray(t)?uf(t,e):e(t))}function Ry(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function Qc(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}var Jo={},Ls=[],Fs=new ot(""),Py=new ot("",-1),Ny=new ot(""),el=class{get(e,t=Ko){if(t===Ko){let i=new Error(`NullInjectorError: No provider for ${vn(e)}!`);throw i.name="NullInjectorError",i}return t}},Oy=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(Oy||{}),vi=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(vi||{}),Pi=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(Pi||{});function FS(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}function _h(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];kS(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function US(n){return n===3||n===4||n===6}function kS(n){return n.charCodeAt(0)===64}function df(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?Yv(n,t,r,null,e[++i]):Yv(n,t,r,null,null))}}return n}function Yv(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){if(i===null){r!==null&&(n[s+1]=r);return}else if(i===n[s+1]){n[s+2]=r;return}}s++,i!==null&&s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),i!==null&&n.splice(s++,0,i),r!==null&&n.splice(s++,0,r)}var Ly="ng-template";function BS(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&FS(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(hf(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function hf(n){return n.type===4&&n.value!==Ly}function VS(n,e,t){let i=n.type===4&&!t?Ly:n.value;return e===i}function zS(n,e,t){let i=4,r=n.attrs,s=r!==null?WS(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!qn(i)&&!qn(c))return!1;if(o&&qn(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!VS(n,c,t)||c===""&&e.length===1){if(qn(i))return!1;o=!0}}else if(i&8){if(r===null||!BS(n,r,c,t)){if(qn(i))return!1;o=!0}}else{let l=e[++a],u=HS(c,r,hf(n),t);if(u===-1){if(qn(i))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(qn(i))return!1;o=!0}}}}return qn(i)||o}function qn(n){return(n&1)===0}function HS(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return jS(e,n)}function GS(n,e,t=!1){for(let i=0;i<e.length;i++)if(zS(n,e[i],t))return!0;return!1}function WS(n){for(let e=0;e<n.length;e++){let t=n[e];if(US(t))return e}return n.length}function jS(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function Zv(n,e){return n?":not("+e.trim()+")":e}function $S(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!qn(o)&&(e+=Zv(s,r),r=""),i=o,s=s||!qn(i);t++}return r!==""&&(e+=Zv(s,r)),e}function qS(n){return n.map($S).join(",")}function XS(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!qn(r))break;r=s}i++}return{attrs:e,classes:t}}function xi(n){return cf(()=>{let e=Vy(n),t=Dt(Ce({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===Oy.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||vi.Emulated,styles:n.styles||Ls,_:null,schemas:n.schemas||null,tView:null,id:""});zy(t);let i=n.dependencies;return t.directiveDefs=Jv(i,!1),t.pipeDefs=Jv(i,!0),t.id=KS(t),t})}function YS(n){return Or(n)||Fy(n)}function ZS(n){return n!==null}function Kv(n,e){if(n==null)return Jo;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a=Pi.None;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s):(s=r,o=r),e?(t[s]=a!==Pi.None?[i,a]:i,e[s]=o):t[s]=i}return t}function fa(n){return cf(()=>{let e=Vy(n);return zy(e),e})}function Or(n){return n[yS]||null}function Fy(n){return n[_S]||null}function Uy(n){return n[xS]||null}function ky(n){let e=Or(n)||Fy(n)||Uy(n);return e!==null?e.standalone:!1}function By(n,e){let t=n[MS]||null;if(!t&&e===!0)throw new Error(`Type ${vn(n)} does not have '\u0275mod' property.`);return t}function Vy(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:n.inputs||Jo,exportAs:n.exportAs||null,standalone:n.standalone===!0,signals:n.signals===!0,selectors:n.selectors||Ls,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:Kv(n.inputs,e),outputs:Kv(n.outputs),debugInfo:null}}function zy(n){n.features?.forEach(e=>e(n))}function Jv(n,e){if(!n)return null;let t=e?Uy:YS;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(ZS)}function KS(n){let e=0,t=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,n.consts,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery].join("|");for(let r of t)e=Math.imul(31,e)+r.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function pl(n){return{\u0275providers:n}}function JS(...n){return{\u0275providers:Hy(!0,n),\u0275fromNgModule:!0}}function Hy(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return uf(e,o=>{let a=o;xh(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&Gy(r,s),t}function Gy(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];ff(r,s=>{e(s,i)})}}function xh(n,e,t,i){if(n=Dn(n),!n)return!1;let r=null,s=jv(n),o=!s&&Or(n);if(!s&&!o){let c=n.ngModule;if(s=jv(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)xh(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{uf(s.imports,u=>{xh(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&Gy(l,e)}if(!a){let l=Os(r)||(()=>new r);e({provide:r,useFactory:l,deps:Ls},r),e({provide:Ny,useValue:r,multi:!0},r),e({provide:Fs,useValue:()=>at(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;ff(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function ff(n,e){for(let t of n)Cy(t)&&(t=t.\u0275providers),Array.isArray(t)?ff(t,e):e(t)}var QS=gt({provide:String,useValue:gt});function Wy(n){return n!==null&&typeof n=="object"&&QS in n}function eb(n){return!!(n&&n.useExisting)}function tb(n){return!!(n&&n.useFactory)}function Mh(n){return typeof n=="function"}var ml=new ot(""),jc={},nb={},oh;function pf(){return oh===void 0&&(oh=new el),oh}var Rn=class{},Qo=class extends Rn{get destroyed(){return this._destroyed}constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,Sh(e,o=>this.processProvider(o)),this.records.set(Py,Ds(void 0,this)),r.has("environment")&&this.records.set(Rn,Ds(void 0,this));let s=this.records.get(ml);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(Ny,Ls,Ze.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;let e=tt(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),tt(e)}}onDestroy(e){return this.assertNotDestroyed(),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){this.assertNotDestroyed();let t=tr(this),i=An(void 0),r;try{return e()}finally{tr(t),An(i)}}get(e,t=Ko,i=Ze.Default){if(this.assertNotDestroyed(),e.hasOwnProperty(qv))return e[qv](this);i=fl(i);let r,s=tr(this),o=An(void 0);try{if(!(i&Ze.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=cb(e)&&hl(e);l&&this.injectableDefInScope(l)?c=Ds(wh(e),jc):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&Ze.Self?pf():this.parent;return t=i&Ze.Optional&&t===Ko?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[Jc]=a[Jc]||[]).unshift(vn(e)),s)throw a;return PS(a,e,"R3InjectorError",this.source)}else throw a}finally{An(o),tr(s)}}resolveInjectorInitializers(){let e=tt(null),t=tr(this),i=An(void 0),r;try{let s=this.get(Fs,Ls,Ze.Self);for(let o of s)o()}finally{tr(t),An(i),tt(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(vn(i));return`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new ze(205,!1)}processProvider(e){e=Dn(e);let t=Mh(e)?e:Dn(e&&e.provide),i=rb(e);if(!Mh(e)&&e.multi===!0){let r=this.records.get(t);r||(r=Ds(void 0,jc,!0),r.factory=()=>yh(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t){let i=tt(null);try{return t.value===jc&&(t.value=nb,t.value=t.factory()),typeof t.value=="object"&&t.value&&ab(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{tt(i)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=Dn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function wh(n){let e=hl(n),t=e!==null?e.factory:Os(n);if(t!==null)return t;if(n instanceof ot)throw new ze(204,!1);if(n instanceof Function)return ib(n);throw new ze(204,!1)}function ib(n){if(n.length>0)throw new ze(204,!1);let t=gS(n);return t!==null?()=>t.factory(n):()=>new n}function rb(n){if(Wy(n))return Ds(void 0,n.useValue);{let e=sb(n);return Ds(e,jc)}}function sb(n,e,t){let i;if(Mh(n)){let r=Dn(n);return Os(r)||wh(r)}else if(Wy(n))i=()=>Dn(n.useValue);else if(tb(n))i=()=>n.useFactory(...yh(n.deps||[]));else if(eb(n))i=()=>at(Dn(n.useExisting));else{let r=Dn(n&&(n.useClass||n.provide));if(ob(n))i=()=>new r(...yh(n.deps));else return Os(r)||wh(r)}return i}function Ds(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function ob(n){return!!n.deps}function ab(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function cb(n){return typeof n=="function"||typeof n=="object"&&n instanceof ot}function Sh(n,e){for(let t of n)Array.isArray(t)?Sh(t,e):t&&Cy(t)?Sh(t.\u0275providers,e):e(t)}function Vr(n,e){n instanceof Qo&&n.assertNotDestroyed();let t,i=tr(n),r=An(void 0);try{return e()}finally{tr(i),An(r)}}function lb(){return Dy()!==void 0||DS()!=null}function ub(n){return typeof n=="function"}var Li=0,je=1,Le=2,Zt=3,Xn=4,Zn=5,ea=6,ta=7,Jt=8,Us=9,yi=10,en=11,na=12,Qv=13,zs=14,Yn=15,pa=16,Is=17,Ni=18,gl=19,jy=20,nr=21,ah=22,Lr=23,yn=25,$y=1;var Fr=7,tl=8,ks=9,Qt=10,mf=function(n){return n[n.None=0]="None",n[n.HasTransplantedViews=2]="HasTransplantedViews",n}(mf||{});function Pr(n){return Array.isArray(n)&&typeof n[$y]=="object"}function Fi(n){return Array.isArray(n)&&n[$y]===!0}function gf(n){return(n.flags&4)!==0}function vl(n){return n.componentOffset>-1}function yl(n){return(n.flags&1)===1}function ma(n){return!!n.template}function db(n){return(n[Le]&512)!==0}var bh=class{constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function qy(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}function ga(){return Xy}function Xy(n){return n.type.prototype.ngOnChanges&&(n.setInput=fb),hb}ga.ngInherit=!0;function hb(){let n=Zy(this),e=n?.current;if(e){let t=n.previous;if(t===Jo)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function fb(n,e,t,i,r){let s=this.declaredInputs[i],o=Zy(n)||pb(n,{previous:Jo,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new bh(l&&l.currentValue,t,c===Jo),qy(n,e,r,t)}var Yy="__ngSimpleChanges__";function Zy(n){return n[Yy]||null}function pb(n,e){return n[Yy]=e}var ey=null;var mi=function(n,e,t){ey?.(n,e,t)},mb="svg",gb="math",vb=!1;function yb(){return vb}function _i(n){for(;Array.isArray(n);)n=n[Li];return n}function _b(n,e){return _i(e[n])}function Kn(n,e){return _i(e[n.index])}function vf(n,e){return n.data[e]}function xb(n,e){return n[e]}function sr(n,e){let t=e[n];return Pr(t)?t:t[Li]}function Mb(n){return(n[Le]&4)===4}function yf(n){return(n[Le]&128)===128}function wb(n){return Fi(n[Zt])}function Bs(n,e){return e==null?null:n[e]}function Ky(n){n[Is]=0}function Sb(n){n[Le]&1024||(n[Le]|=1024,yf(n)&&ia(n))}function bb(n,e){for(;n>0;)e=e[zs],n--;return e}function _f(n){return!!(n[Le]&9216||n[Lr]?.dirty)}function Eh(n){n[yi].changeDetectionScheduler?.notify(1),_f(n)?ia(n):n[Le]&64&&(yb()?(n[Le]|=1024,ia(n)):n[yi].changeDetectionScheduler?.notify())}function ia(n){n[yi].changeDetectionScheduler?.notify();let e=ra(n);for(;e!==null&&!(e[Le]&8192||(e[Le]|=8192,!yf(e)));)e=ra(e)}function Jy(n,e){if((n[Le]&256)===256)throw new ze(911,!1);n[nr]===null&&(n[nr]=[]),n[nr].push(e)}function Eb(n,e){if(n[nr]===null)return;let t=n[nr].indexOf(e);t!==-1&&n[nr].splice(t,1)}function ra(n){let e=n[Zt];return Fi(e)?e[Zt]:e}var Ke={lFrame:o0(null),bindingsEnabled:!0,skipHydrationRootTNode:null};function Tb(){return Ke.lFrame.elementDepthCount}function Cb(){Ke.lFrame.elementDepthCount++}function Ab(){Ke.lFrame.elementDepthCount--}function Qy(){return Ke.bindingsEnabled}function Db(){return Ke.skipHydrationRootTNode!==null}function Ib(n){return Ke.skipHydrationRootTNode===n}function Rb(){Ke.skipHydrationRootTNode=null}function mt(){return Ke.lFrame.lView}function Jn(){return Ke.lFrame.tView}function Qn(n){return Ke.lFrame.contextLView=n,n[Jt]}function ei(n){return Ke.lFrame.contextLView=null,n}function Nn(){let n=e0();for(;n!==null&&n.type===64;)n=n.parent;return n}function e0(){return Ke.lFrame.currentTNode}function Pb(){let n=Ke.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function zr(n,e){let t=Ke.lFrame;t.currentTNode=n,t.isParent=e}function xf(){return Ke.lFrame.isParent}function t0(){Ke.lFrame.isParent=!1}function Nb(){return Ke.lFrame.contextLView}function n0(){let n=Ke.lFrame,e=n.bindingRootIndex;return e===-1&&(e=n.bindingRootIndex=n.tView.bindingStartIndex),e}function Ob(n){return Ke.lFrame.bindingIndex=n}function _l(){return Ke.lFrame.bindingIndex++}function Lb(){return Ke.lFrame.inI18n}function Fb(n,e){let t=Ke.lFrame;t.bindingIndex=t.bindingRootIndex=n,Th(e)}function Ub(){return Ke.lFrame.currentDirectiveIndex}function Th(n){Ke.lFrame.currentDirectiveIndex=n}function i0(){return Ke.lFrame.currentQueryIndex}function Mf(n){Ke.lFrame.currentQueryIndex=n}function kb(n){let e=n[je];return e.type===2?e.declTNode:e.type===1?n[Zn]:null}function r0(n,e,t){if(t&Ze.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&Ze.Host);)if(r=kb(s),r===null||(s=s[zs],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=Ke.lFrame=s0();return i.currentTNode=e,i.lView=n,!0}function wf(n){let e=s0(),t=n[je];Ke.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function s0(){let n=Ke.lFrame,e=n===null?null:n.child;return e===null?o0(n):e}function o0(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function a0(){let n=Ke.lFrame;return Ke.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var c0=a0;function Sf(){let n=a0();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function Bb(n){return(Ke.lFrame.contextLView=bb(n,Ke.lFrame.contextLView))[Jt]}function xl(){return Ke.lFrame.selectedIndex}function Ur(n){Ke.lFrame.selectedIndex=n}function Vb(){let n=Ke.lFrame;return vf(n.tView,n.selectedIndex)}function zb(){return Ke.lFrame.currentNamespace}var l0=!0;function Ml(){return l0}function wl(n){l0=n}function Hb(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=Xy(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function Sl(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function $c(n,e,t){u0(n,e,3,t)}function qc(n,e,t,i){(n[Le]&3)===t&&u0(n,e,t,i)}function ch(n,e){let t=n[Le];(t&3)===e&&(t&=16383,t+=1,n[Le]=t)}function u0(n,e,t,i){let r=i!==void 0?n[Is]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[Is]+=65536),(a<s||s==-1)&&(Gb(n,t,e,c),n[Is]=(n[Is]&4294901760)+c+2),c++}function ty(n,e){mi(4,n,e);let t=tt(null);try{e.call(n)}finally{tt(t),mi(5,n,e)}}function Gb(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[Le]>>14<n[Is]>>16&&(n[Le]&3)===e&&(n[Le]+=16384,ty(a,s)):ty(a,s)}var Ns=-1,sa=class{constructor(e,t,i){this.factory=e,this.resolving=!1,this.canSeeViewProviders=t,this.injectImpl=i}};function Wb(n){return n instanceof sa}function jb(n){return(n.flags&8)!==0}function $b(n){return(n.flags&16)!==0}function d0(n){return n!==Ns}function nl(n){return n&32767}function qb(n){return n>>16}function il(n,e){let t=qb(n),i=e;for(;t>0;)i=i[zs],t--;return i}var Ch=!0;function ny(n){let e=Ch;return Ch=n,e}var Xb=256,h0=Xb-1,f0=5,Yb=0,gi={};function Zb(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(Zo)&&(i=t[Zo]),i==null&&(i=t[Zo]=Yb++);let r=i&h0,s=1<<r;e.data[n+(r>>f0)]|=s}function p0(n,e){let t=m0(n,e);if(t!==-1)return t;let i=e[je];i.firstCreatePass&&(n.injectorIndex=e.length,lh(i.data,n),lh(e,null),lh(i.blueprint,null));let r=bf(n,e),s=n.injectorIndex;if(d0(r)){let o=nl(r),a=il(r,e),c=a[je].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function lh(n,e){n.push(0,0,0,0,0,0,0,0,e)}function m0(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function bf(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=x0(r),i===null)return Ns;if(t++,r=r[zs],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return Ns}function Kb(n,e,t){Zb(n,e,t)}function g0(n,e,t){if(t&Ze.Optional||n!==void 0)return n;lf(e,"NodeInjector")}function v0(n,e,t,i){if(t&Ze.Optional&&i===void 0&&(i=null),!(t&(Ze.Self|Ze.Host))){let r=n[Us],s=An(void 0);try{return r?r.get(e,i,t&Ze.Optional):Iy(e,i,t&Ze.Optional)}finally{An(s)}}return g0(i,e,t)}function y0(n,e,t,i=Ze.Default,r){if(n!==null){if(e[Le]&2048&&!(i&Ze.Self)){let o=tE(n,e,t,i,gi);if(o!==gi)return o}let s=_0(n,e,t,i,gi);if(s!==gi)return s}return v0(e,t,i,r)}function _0(n,e,t,i,r){let s=Qb(t);if(typeof s=="function"){if(!r0(e,n,i))return i&Ze.Host?g0(r,t,i):v0(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&Ze.Optional))lf(t);else return o}finally{c0()}}else if(typeof s=="number"){let o=null,a=m0(n,e),c=Ns,l=i&Ze.Host?e[Yn][Zn]:null;for((a===-1||i&Ze.SkipSelf)&&(c=a===-1?bf(n,e):e[a+8],c===Ns||!ry(i,!1)?a=-1:(o=e[je],a=nl(c),e=il(c,e)));a!==-1;){let u=e[je];if(iy(s,a,u.data)){let d=Jb(a,e,t,o,i,l);if(d!==gi)return d}c=e[a+8],c!==Ns&&ry(i,e[je].data[a+8]===l)&&iy(s,a,e)?(o=u,a=nl(c),e=il(c,e)):a=-1}}return r}function Jb(n,e,t,i,r,s){let o=e[je],a=o.data[n+8],c=i==null?vl(a)&&Ch:i!=o&&(a.type&3)!==0,l=r&Ze.Host&&s===a,u=Xc(a,o,t,c,l);return u!==null?Vs(e,o,u,a):gi}function Xc(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,h=r?a+u:l;for(let f=d;f<h;f++){let g=o[f];if(f<c&&t===g||f>=c&&g.type===t)return f}if(r){let f=o[c];if(f&&ma(f)&&f.type===t)return c}return null}function Vs(n,e,t,i){let r=n[t],s=e.data;if(Wb(r)){let o=r;o.resolving&&SS(wS(s[t]));let a=ny(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?An(o.injectImpl):null,u=r0(n,i,Ze.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&Hb(t,s[t],e)}finally{l!==null&&An(l),ny(a),o.resolving=!1,c0()}}return r}function Qb(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(Zo)?n[Zo]:void 0;return typeof e=="number"?e>=0?e&h0:eE:e}function iy(n,e,t){let i=1<<n;return!!(t[e+(n>>f0)]&i)}function ry(n,e){return!(n&Ze.Self)&&!(n&Ze.Host&&e)}var Nr=class{constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return y0(this._tNode,this._lView,e,fl(i),t)}};function eE(){return new Nr(Nn(),mt())}function Ef(n){return cf(()=>{let e=n.prototype.constructor,t=e[Kc]||Ah(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[Kc]||Ah(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function Ah(n){return Sy(n)?()=>{let e=Ah(Dn(n));return e&&e()}:Os(n)}function tE(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[Le]&2048&&!(o[Le]&512);){let a=_0(s,o,t,i|Ze.Self,gi);if(a!==gi)return a;let c=s.parent;if(!c){let l=o[jy];if(l){let u=l.get(t,gi,i);if(u!==gi)return u}c=x0(o),o=o[zs]}s=c}return r}function x0(n){let e=n[je],t=e.type;return t===2?e.declTNode:t===1?n[Zn]:null}function sy(n,e=null,t=null,i){let r=M0(n,e,t,i);return r.resolveInjectorInitializers(),r}function M0(n,e=null,t=null,i,r=new Set){let s=[t||Ls,JS(n)];return i=i||(typeof n=="object"?void 0:vn(n)),new Qo(s,e||pf(),i||null,r)}var va=(()=>{let e=class e{static create(i,r){if(Array.isArray(i))return sy({name:""},r,i,"");{let s=i.name??"";return sy({name:s},i.parent,i.providers,s)}}};e.THROW_IF_NOT_FOUND=Ko,e.NULL=new el,e.\u0275prov=Re({token:e,providedIn:"any",factory:()=>at(Py)}),e.__NG_ELEMENT_ID__=-1;let n=e;return n})();var nE="ngOriginalError";function uh(n){return n[nE]}var Oi=class{constructor(){this._console=console}handleError(e){let t=this._findOriginalError(e);this._console.error("ERROR",e),t&&this._console.error("ORIGINAL ERROR",t)}_findOriginalError(e){let t=e&&uh(e);for(;t&&uh(t);)t=uh(t);return t||null}},w0=new ot("",{providedIn:"root",factory:()=>ue(Oi).handleError.bind(void 0)}),S0=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=iE,e.__NG_ENV_ID__=i=>i;let n=e;return n})(),Dh=class extends S0{constructor(e){super(),this._lView=e}onDestroy(e){return Jy(this._lView,e),()=>Eb(this._lView,e)}};function iE(){return new Dh(mt())}function rE(){return Hs(Nn(),mt())}function Hs(n,e){return new or(Kn(n,e))}var or=(()=>{let e=class e{constructor(i){this.nativeElement=i}};e.__NG_ELEMENT_ID__=rE;let n=e;return n})();function sE(n){return n instanceof or?n.nativeElement:n}var Ih=class extends Xt{constructor(e=!1){super(),this.destroyRef=void 0,this.__isAsync=e,lb()&&(this.destroyRef=ue(S0,{optional:!0})??void 0)}emit(e){let t=tt(null);try{super.next(e)}finally{tt(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=dh(s),r&&(r=dh(r)),o&&(o=dh(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof kt&&e.add(a),a}};function dh(n){return e=>{setTimeout(n,void 0,e)}}var In=Ih;function oE(){return this._results[Symbol.iterator]()}var Rh=class n{get changes(){return this._changes??=new In}constructor(e=!1){this._emitDistinctChangesOnly=e,this.dirty=!0,this._onDirty=void 0,this._results=[],this._changesDetected=!1,this._changes=void 0,this.length=0,this.first=void 0,this.last=void 0;let t=n.prototype;t[Symbol.iterator]||(t[Symbol.iterator]=oE)}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=LS(e);(this._changesDetected=!OS(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}};function b0(n){return(n.flags&128)===128}var E0=new Map,aE=0;function cE(){return aE++}function lE(n){E0.set(n[gl],n)}function uE(n){E0.delete(n[gl])}var oy="__ngContext__";function ir(n,e){Pr(e)?(n[oy]=e[gl],lE(e)):n[oy]=e}function T0(n){return A0(n[na])}function C0(n){return A0(n[Xn])}function A0(n){for(;n!==null&&!Fi(n);)n=n[Xn];return n}var Ph;function D0(n){Ph=n}function dE(){if(Ph!==void 0)return Ph;if(typeof document<"u")return document;throw new ze(210,!1)}var Tf=new ot("",{providedIn:"root",factory:()=>hE}),hE="ng",Cf=new ot(""),Gs=new ot("",{providedIn:"platform",factory:()=>"unknown"});var Af=new ot("",{providedIn:"root",factory:()=>dE().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var fE="h",pE="b";var mE=()=>null;function Df(n,e,t=!1){return mE(n,e,t)}var I0=!1,gE=new ot("",{providedIn:"root",factory:()=>I0});var vE=/^>|^->|<!--|-->|--!>|<!-$/g,yE=/(<|>)/g,_E="\u200B$1\u200B";function xE(n){return n.replace(vE,e=>e.replace(yE,_E))}function R0(n){return n instanceof Function?n():n}var Hr=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(Hr||{}),ME;function If(n,e){return ME(n,e)}function Rs(n,e,t,i,r){if(i!=null){let s,o=!1;Fi(i)?s=i:Pr(i)&&(o=!0,i=i[Li]);let a=_i(i);n===0&&t!==null?r==null?L0(e,t,a):rl(e,t,a,r||null,!0):n===1&&t!==null?rl(e,t,a,r||null,!0):n===2?BE(e,a,o):n===3&&e.destroyNode(a),s!=null&&zE(e,n,s,t,r)}}function wE(n,e){return n.createText(e)}function SE(n,e,t){n.setValue(e,t)}function bE(n,e){return n.createComment(xE(e))}function P0(n,e,t){return n.createElement(e,t)}function EE(n,e){N0(n,e),e[Li]=null,e[Zn]=null}function TE(n,e,t,i,r,s){i[Li]=r,i[Zn]=e,Tl(n,i,t,1,r,s)}function N0(n,e){e[yi].changeDetectionScheduler?.notify(1),Tl(n,e,e[en],2,null,null)}function CE(n){let e=n[na];if(!e)return hh(n[je],n);for(;e;){let t=null;if(Pr(e))t=e[na];else{let i=e[Qt];i&&(t=i)}if(!t){for(;e&&!e[Xn]&&e!==n;)Pr(e)&&hh(e[je],e),e=e[Zt];e===null&&(e=n),Pr(e)&&hh(e[je],e),t=e&&e[Xn]}e=t}}function AE(n,e,t,i){let r=Qt+i,s=t.length;i>0&&(t[r-1][Xn]=e),i<s-Qt?(e[Xn]=t[r],Ry(t,Qt+i,e)):(t.push(e),e[Xn]=null),e[Zt]=t;let o=e[pa];o!==null&&t!==o&&DE(o,e);let a=e[Ni];a!==null&&a.insertView(n),Eh(e),e[Le]|=128}function DE(n,e){let t=n[ks],r=e[Zt][Zt][Yn];e[Yn]!==r&&(n[Le]|=mf.HasTransplantedViews),t===null?n[ks]=[e]:t.push(e)}function O0(n,e){let t=n[ks],i=t.indexOf(e);t.splice(i,1)}function oa(n,e){if(n.length<=Qt)return;let t=Qt+e,i=n[t];if(i){let r=i[pa];r!==null&&r!==n&&O0(r,i),e>0&&(n[t-1][Xn]=i[Xn]);let s=Qc(n,Qt+e);EE(i[je],i);let o=s[Ni];o!==null&&o.detachView(s[je]),i[Zt]=null,i[Xn]=null,i[Le]&=-129}return i}function bl(n,e){if(!(e[Le]&256)){let t=e[en];t.destroyNode&&Tl(n,e,t,3,null,null),CE(e)}}function hh(n,e){if(e[Le]&256)return;let t=tt(null);try{e[Le]&=-129,e[Le]|=256,e[Lr]&&fv(e[Lr]),RE(n,e),IE(n,e),e[je].type===1&&e[en].destroy();let i=e[pa];if(i!==null&&Fi(e[Zt])){i!==e[Zt]&&O0(i,e);let r=e[Ni];r!==null&&r.detachView(n)}uE(e)}finally{tt(t)}}function IE(n,e){let t=n.cleanup,i=e[ta];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){let o=t[s+3];o>=0?i[o]():i[-o].unsubscribe(),s+=2}else{let o=i[t[s+1]];t[s].call(o)}i!==null&&(e[ta]=null);let r=e[nr];if(r!==null){e[nr]=null;for(let s=0;s<r.length;s++){let o=r[s];o()}}}function RE(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof sa)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];mi(4,a,c);try{c.call(a)}finally{mi(5,a,c)}}else{mi(4,r,s);try{s.call(r)}finally{mi(5,r,s)}}}}}function PE(n,e,t){return NE(n,e.parent,t)}function NE(n,e,t){let i=e;for(;i!==null&&i.type&40;)e=i,i=e.parent;if(i===null)return t[Li];{let{componentOffset:r}=i;if(r>-1){let{encapsulation:s}=n.data[i.directiveStart+r];if(s===vi.None||s===vi.Emulated)return null}return Kn(i,t)}}function rl(n,e,t,i,r){n.insertBefore(e,t,i,r)}function L0(n,e,t){n.appendChild(e,t)}function ay(n,e,t,i,r){i!==null?rl(n,e,t,i,r):L0(n,e,t)}function OE(n,e,t,i){n.removeChild(e,t,i)}function Rf(n,e){return n.parentNode(e)}function LE(n,e){return n.nextSibling(e)}function FE(n,e,t){return kE(n,e,t)}function UE(n,e,t){return n.type&40?Kn(n,t):null}var kE=UE,cy;function El(n,e,t,i){let r=PE(n,i,e),s=e[en],o=i.parent||e[Zn],a=FE(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)ay(s,r,t[c],a,!1);else ay(s,r,t,a,!1);cy!==void 0&&cy(s,i,e,t,r)}function Yc(n,e){if(e!==null){let t=e.type;if(t&3)return Kn(e,n);if(t&4)return Nh(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return Yc(n,i);{let r=n[e.index];return Fi(r)?Nh(-1,r):_i(r)}}else{if(t&32)return If(e,n)()||_i(n[e.index]);{let i=F0(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=ra(n[Yn]);return Yc(r,i)}else return Yc(n,e.next)}}}return null}function F0(n,e){if(e!==null){let i=n[Yn][Zn],r=e.projection;return i.projection[r]}return null}function Nh(n,e){let t=Qt+n+1;if(t<e.length){let i=e[t],r=i[je].firstChild;if(r!==null)return Yc(i,r)}return e[Fr]}function BE(n,e,t){let i=Rf(n,e);i&&OE(n,i,e,t)}function Pf(n,e,t,i,r,s,o){for(;t!=null;){let a=i[t.index],c=t.type;if(o&&e===0&&(a&&ir(_i(a),i),t.flags|=2),(t.flags&32)!==32)if(c&8)Pf(n,e,t.child,i,r,s,!1),Rs(e,n,r,a,s);else if(c&32){let l=If(t,i),u;for(;u=l();)Rs(e,n,r,u,s);Rs(e,n,r,a,s)}else c&16?VE(n,e,i,t,r,s):Rs(e,n,r,a,s);t=o?t.projectionNext:t.next}}function Tl(n,e,t,i,r,s){Pf(t,i,n.firstChild,e,r,s,!1)}function VE(n,e,t,i,r,s){let o=t[Yn],c=o[Zn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];Rs(e,n,r,u,s)}else{let l=c,u=o[Zt];b0(i)&&(l.flags|=128),Pf(n,e,l,u,r,s,!0)}}function zE(n,e,t,i,r){let s=t[Fr],o=_i(t);s!==o&&Rs(e,n,i,s,r);for(let a=Qt;a<t.length;a++){let c=t[a];Tl(c[je],c,n,e,i,s)}}function HE(n,e,t){n.setAttribute(e,"style",t)}function U0(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function k0(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&_h(n,e,i),r!==null&&U0(n,e,r),s!==null&&HE(n,e,s)}var ya={};function _n(n=1){B0(Jn(),mt(),xl()+n,!1)}function B0(n,e,t,i){if(!i)if((e[Le]&3)===3){let s=n.preOrderCheckHooks;s!==null&&$c(e,s,t)}else{let s=n.preOrderHooks;s!==null&&qc(e,s,0,t)}Ur(t)}function Ws(n,e=Ze.Default){let t=mt();if(t===null)return at(n,e);let i=Nn();return y0(i,t,Dn(n),e)}function V0(n,e,t,i,r,s){let o=tt(null);try{let a=null;r&Pi.SignalBased&&(a=e[i][lv]),a!==null&&a.transformFn!==void 0&&(s=a.transformFn(s)),r&Pi.HasDecoratorInputTransform&&(s=n.inputTransforms[i].call(e,s)),n.setInput!==null?n.setInput(e,a,s,t,i):qy(e,a,i,s)}finally{tt(o)}}function GE(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)Ur(~r);else{let s=r,o=t[++i],a=t[++i];Fb(o,s);let c=e[s];a(2,c)}}}finally{Ur(-1)}}function Cl(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[Li]=r,d[Le]=i|4|128|8|64,(l!==null||n&&n[Le]&2048)&&(d[Le]|=2048),Ky(d),d[Zt]=d[zs]=n,d[Jt]=t,d[yi]=o||n&&n[yi],d[en]=a||n&&n[en],d[Us]=c||n&&n[Us]||null,d[Zn]=s,d[gl]=cE(),d[ea]=u,d[jy]=l,d[Yn]=e.type==2?n[Yn]:d,d}function _a(n,e,t,i,r){let s=n.data[e];if(s===null)s=WE(n,e,t,i,r),Lb()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=Pb();s.injectorIndex=o===null?-1:o.injectorIndex}return zr(s,!0),s}function WE(n,e,t,i,r){let s=e0(),o=xf(),a=o?s:s&&s.parent,c=n.data[e]=ZE(n,a,t,e,i,r);return n.firstChild===null&&(n.firstChild=c),s!==null&&(o?s.child==null&&c.parent!==null&&(s.child=c):s.next===null&&(s.next=c,c.prev=s)),c}function z0(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function H0(n,e,t,i,r){let s=xl(),o=i&2;try{Ur(-1),o&&e.length>yn&&B0(n,e,yn,!1),mi(o?2:0,r),t(i,r)}finally{Ur(s),mi(o?3:1,r)}}function Nf(n,e,t){if(gf(e)){let i=tt(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{tt(i)}}}function Of(n,e,t){Qy()&&(iT(n,e,t,Kn(t,e)),(t.flags&64)===64&&j0(n,e,t))}function Lf(n,e,t=Kn){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function G0(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=Ff(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function Ff(n,e,t,i,r,s,o,a,c,l,u){let d=yn+i,h=d+r,f=jE(d,h),g=typeof l=="function"?l():l;return f[je]={type:n,blueprint:f,template:t,queries:null,viewQuery:a,declTNode:e,data:f.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function jE(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:ya);return t}function $E(n,e,t,i){let s=i.get(gE,I0)||t===vi.ShadowDom,o=n.selectRootElement(e,s);return qE(o),o}function qE(n){XE(n)}var XE=()=>null;function YE(n,e,t,i){let r=X0(e);r.push(t),n.firstCreatePass&&Y0(n).push(i,r.length-1)}function ZE(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return Db()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function ly(n,e,t,i,r){for(let s in e){if(!e.hasOwnProperty(s))continue;let o=e[s];if(o===void 0)continue;i??={};let a,c=Pi.None;Array.isArray(o)?(a=o[0],c=o[1]):a=o;let l=s;if(r!==null){if(!r.hasOwnProperty(s))continue;l=r[s]}n===0?uy(i,t,l,a,c):uy(i,t,l,a)}return i}function uy(n,e,t,i,r){let s;n.hasOwnProperty(t)?(s=n[t]).push(e,i):s=n[t]=[e,i],r!==void 0&&s.push(r)}function KE(n,e,t){let i=e.directiveStart,r=e.directiveEnd,s=n.data,o=e.attrs,a=[],c=null,l=null;for(let u=i;u<r;u++){let d=s[u],h=t?t.get(d):null,f=h?h.inputs:null,g=h?h.outputs:null;c=ly(0,d.inputs,u,c,f),l=ly(1,d.outputs,u,l,g);let v=c!==null&&o!==null&&!hf(e)?hT(c,u,o):null;a.push(v)}c!==null&&(c.hasOwnProperty("class")&&(e.flags|=8),c.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=a,e.inputs=c,e.outputs=l}function JE(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function QE(n,e,t,i,r,s,o,a){let c=Kn(e,t),l=e.inputs,u;!a&&l!=null&&(u=l[i])?(kf(n,t,u,i,r),vl(e)&&eT(t,e.index)):e.type&3?(i=JE(i),r=o!=null?o(r,e.value||"",i):r,s.setProperty(c,i,r)):e.type&12}function eT(n,e){let t=sr(e,n);t[Le]&16||(t[Le]|=64)}function Uf(n,e,t,i){if(Qy()){let r=i===null?null:{"":-1},s=sT(n,t),o,a;s===null?o=a=null:[o,a]=s,o!==null&&W0(n,e,t,o,r,a),r&&oT(t,i,r)}t.mergedAttrs=df(t.mergedAttrs,t.attrs)}function W0(n,e,t,i,r,s){for(let l=0;l<i.length;l++)Kb(p0(t,e),n,i[l].type);cT(t,n.data.length,i.length);for(let l=0;l<i.length;l++){let u=i[l];u.providersResolver&&u.providersResolver(u)}let o=!1,a=!1,c=z0(n,e,i.length,null);for(let l=0;l<i.length;l++){let u=i[l];t.mergedAttrs=df(t.mergedAttrs,u.hostAttrs),lT(n,t,e,c,u),aT(c,u,r),u.contentQueries!==null&&(t.flags|=4),(u.hostBindings!==null||u.hostAttrs!==null||u.hostVars!==0)&&(t.flags|=64);let d=u.type.prototype;!o&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),o=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),a=!0),c++}KE(n,t,s)}function tT(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;nT(o)!=a&&o.push(a),o.push(t,i,s)}}function nT(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function iT(n,e,t,i){let r=t.directiveStart,s=t.directiveEnd;vl(t)&&uT(e,t,n.data[r+t.componentOffset]),n.firstCreatePass||p0(t,e),ir(i,e);let o=t.initialInputs;for(let a=r;a<s;a++){let c=n.data[a],l=Vs(e,n,a,t);if(ir(l,e),o!==null&&dT(e,a-r,l,c,t,o),ma(c)){let u=sr(t.index,e);u[Jt]=Vs(e,n,a,t)}}}function j0(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=Ub();try{Ur(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];Th(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&rT(c,l)}}finally{Ur(-1),Th(o)}}function rT(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function sT(n,e){let t=n.directiveRegistry,i=null,r=null;if(t)for(let s=0;s<t.length;s++){let o=t[s];if(GS(e,o.selectors,!1))if(i||(i=[]),ma(o))if(o.findHostDirectiveDefs!==null){let a=[];r=r||new Map,o.findHostDirectiveDefs(o,a,r),i.unshift(...a,o);let c=a.length;Oh(n,e,c)}else i.unshift(o),Oh(n,e,0);else r=r||new Map,o.findHostDirectiveDefs?.(o,i,r),i.push(o)}return i===null?null:[i,r]}function Oh(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function oT(n,e,t){if(e){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new ze(-301,!1);i.push(e[r],s)}}}function aT(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;ma(e)&&(t[""]=n)}}function cT(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function lT(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=Os(r.type,!0)),o=new sa(s,ma(r),Ws);n.blueprint[i]=o,t[i]=o,tT(n,e,i,z0(n,t,r.hostVars,ya),r)}function uT(n,e,t){let i=Kn(e,n),r=G0(t),s=n[yi].rendererFactory,o=16;t.signals?o=4096:t.onPush&&(o=64);let a=Al(n,Cl(n,r,null,o,i,e,null,s.createRenderer(i,t),null,null,null));n[e.index]=a}function dT(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;){let c=o[a++],l=o[a++],u=o[a++],d=o[a++];V0(i,t,c,l,u,d)}}function hT(n,e,t){let i=null,r=0;for(;r<t.length;){let s=t[r];if(s===0){r+=4;continue}else if(s===5){r+=2;continue}if(typeof s=="number")break;if(n.hasOwnProperty(s)){i===null&&(i=[]);let o=n[s];for(let a=0;a<o.length;a+=3)if(o[a]===e){i.push(s,o[a+1],o[a+2],t[r+1]);break}}r+=2}return i}function $0(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function q0(n,e){let t=n.contentQueries;if(t!==null){let i=tt(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];Mf(s),a.contentQueries(2,e[o],o)}}}finally{tt(i)}}}function Al(n,e){return n[na]?n[Qv][Xn]=e:n[na]=e,n[Qv]=e,e}function Lh(n,e,t){Mf(0);let i=tt(null);try{e(n,t)}finally{tt(i)}}function X0(n){return n[ta]||(n[ta]=[])}function Y0(n){return n.cleanup||(n.cleanup=[])}function Z0(n,e){let t=n[Us],i=t?t.get(Oi,null):null;i&&i.handleError(e)}function kf(n,e,t,i,r){for(let s=0;s<t.length;){let o=t[s++],a=t[s++],c=t[s++],l=e[o],u=n.data[o];V0(u,l,i,a,c,r)}}function fT(n,e,t){let i=_b(e,n);SE(n[en],i,t)}function pT(n,e){let t=sr(e,n),i=t[je];mT(i,t);let r=t[Li];r!==null&&t[ea]===null&&(t[ea]=Df(r,t[Us])),Bf(i,t,t[Jt])}function mT(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function Bf(n,e,t){wf(e);try{let i=n.viewQuery;i!==null&&Lh(1,i,t);let r=n.template;r!==null&&H0(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[Ni]?.finishViewCreation(n),n.staticContentQueries&&q0(n,e),n.staticViewQueries&&Lh(2,n.viewQuery,t);let s=n.components;s!==null&&gT(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Le]&=-5,Sf()}}function gT(n,e){for(let t=0;t<e.length;t++)pT(n,e[t])}function Dl(n,e,t,i){let r=tt(null);try{let s=e.tView,a=n[Le]&4096?4096:16,c=Cl(n,s,t,a,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[e.index];c[pa]=l;let u=n[Ni];return u!==null&&(c[Ni]=u.createEmbeddedView(s)),Bf(s,c,t),c}finally{tt(r)}}function K0(n,e){let t=Qt+e;if(t<n.length)return n[t]}function aa(n,e){return!e||e.firstChild===null||b0(n)}function Il(n,e,t,i=!0){let r=e[je];if(AE(r,e,n,t),i){let o=Nh(t,n),a=e[en],c=Rf(a,n[Fr]);c!==null&&TE(r,n[Zn],a,e,c,o)}let s=e[ea];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function J0(n,e){let t=oa(n,e);return t!==void 0&&bl(t[je],t),t}function sl(n,e,t,i,r=!1){for(;t!==null;){let s=e[t.index];s!==null&&i.push(_i(s)),Fi(s)&&vT(s,i);let o=t.type;if(o&8)sl(n,e,t.child,i);else if(o&32){let a=If(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=F0(e,t);if(Array.isArray(a))i.push(...a);else{let c=ra(e[Yn]);sl(c[je],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function vT(n,e){for(let t=Qt;t<n.length;t++){let i=n[t],r=i[je].firstChild;r!==null&&sl(i[je],i,r,e)}n[Fr]!==n[Li]&&e.push(n[Fr])}var Q0=[];function yT(n){return n[Lr]??_T(n)}function _T(n){let e=Q0.pop()??Object.create(MT);return e.lView=n,e}function xT(n){n.lView[Lr]!==n&&(n.lView=null,Q0.push(n))}var MT=Dt(Ce({},uv),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{ia(n.lView)},consumerOnSignalRead(){this.lView[Lr]=this}}),e_=100;function t_(n,e=!0,t=0){let i=n[yi],r=i.rendererFactory,s=!1;s||r.begin?.();try{wT(n,t)}catch(o){throw e&&Z0(n,o),o}finally{s||(r.end?.(),i.inlineEffectRunner?.flush())}}function wT(n,e){Fh(n,e);let t=0;for(;_f(n);){if(t===e_)throw new ze(103,!1);t++,Fh(n,1)}}function ST(n,e,t,i){let r=e[Le];if((r&256)===256)return;let s=!1;!s&&e[yi].inlineEffectRunner?.flush(),wf(e);let o=null,a=null;!s&&bT(n)&&(a=yT(e),o=dv(a));try{Ky(e),Ob(n.bindingStartIndex),t!==null&&H0(n,e,t,2,i);let c=(r&3)===3;if(!s)if(c){let d=n.preOrderCheckHooks;d!==null&&$c(e,d,null)}else{let d=n.preOrderHooks;d!==null&&qc(e,d,0,null),ch(e,0)}if(ET(e),n_(e,0),n.contentQueries!==null&&q0(n,e),!s)if(c){let d=n.contentCheckHooks;d!==null&&$c(e,d)}else{let d=n.contentHooks;d!==null&&qc(e,d,1),ch(e,1)}GE(n,e);let l=n.components;l!==null&&r_(e,l,0);let u=n.viewQuery;if(u!==null&&Lh(2,u,i),!s)if(c){let d=n.viewCheckHooks;d!==null&&$c(e,d)}else{let d=n.viewHooks;d!==null&&qc(e,d,2),ch(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[ah]){for(let d of e[ah])d();e[ah]=null}s||(e[Le]&=-73)}catch(c){throw ia(e),c}finally{a!==null&&(hv(a,o),xT(a)),Sf()}}function bT(n){return n.type!==2}function n_(n,e){for(let t=T0(n);t!==null;t=C0(t))for(let i=Qt;i<t.length;i++){let r=t[i];i_(r,e)}}function ET(n){for(let e=T0(n);e!==null;e=C0(e)){if(!(e[Le]&mf.HasTransplantedViews))continue;let t=e[ks];for(let i=0;i<t.length;i++){let r=t[i],s=r[Zt];Sb(r)}}}function TT(n,e,t){let i=sr(e,n);i_(i,t)}function i_(n,e){yf(n)&&Fh(n,e)}function Fh(n,e){let i=n[je],r=n[Le],s=n[Lr],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&Vd(s)),s&&(s.dirty=!1),n[Le]&=-9217,o)ST(i,n,i.template,n[Jt]);else if(r&8192){n_(n,1);let a=i.components;a!==null&&r_(n,a,1)}}function r_(n,e,t){for(let i=0;i<e.length;i++)TT(n,e[i],t)}function Vf(n){for(n[yi].changeDetectionScheduler?.notify();n;){n[Le]|=64;let e=ra(n);if(db(n)&&!e)return n;n=e}return null}var kr=class{get rootNodes(){let e=this._lView,t=e[je];return sl(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[Jt]}set context(e){this._lView[Jt]=e}get destroyed(){return(this._lView[Le]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[Zt];if(Fi(e)){let t=e[tl],i=t?t.indexOf(this):-1;i>-1&&(oa(e,i),Qc(t,i))}this._attachedToViewContainer=!1}bl(this._lView[je],this._lView)}onDestroy(e){Jy(this._lView,e)}markForCheck(){Vf(this._cdRefInjectingView||this._lView)}detach(){this._lView[Le]&=-129}reattach(){Eh(this._lView),this._lView[Le]|=128}detectChanges(){this._lView[Le]|=1024,t_(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new ze(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,N0(this._lView[je],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new ze(902,!1);this._appRef=e,Eh(this._lView)}},ca=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=DT;let n=e;return n})(),CT=ca,AT=class extends CT{constructor(e,t,i){super(),this._declarationLView=e,this._declarationTContainer=t,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,t){return this.createEmbeddedViewImpl(e,t)}createEmbeddedViewImpl(e,t,i){let r=Dl(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:t,dehydratedView:i});return new kr(r)}};function DT(){return Rl(Nn(),mt())}function Rl(n,e){return n.type&4?new AT(e,n,Hs(n,e)):null}var EV=new RegExp(`^(\\d+)*(${pE}|${fE})*(.*)`);var IT=()=>null;function la(n,e){return IT(n,e)}var Uh=class{},kh=class{},ol=class{};function RT(n){let e=Error(`No component factory found for ${vn(n)}.`);return e[PT]=n,e}var PT="ngComponent";var Bh=class{resolveComponentFactory(e){throw RT(e)}},Pl=(()=>{let e=class e{};e.NULL=new Bh;let n=e;return n})(),ua=class{},Nl=(()=>{let e=class e{constructor(){this.destroyNode=null}};e.__NG_ELEMENT_ID__=()=>NT();let n=e;return n})();function NT(){let n=mt(),e=Nn(),t=sr(e.index,n);return(Pr(t)?t:n)[en]}var OT=(()=>{let e=class e{};e.\u0275prov=Re({token:e,providedIn:"root",factory:()=>null});let n=e;return n})(),fh={};var dy=new Set;function Ol(n){dy.has(n)||(dy.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}function hy(...n){}function LT(){let n=typeof Yo.requestAnimationFrame=="function",e=Yo[n?"requestAnimationFrame":"setTimeout"],t=Yo[n?"cancelAnimationFrame":"clearTimeout"];if(typeof Zone<"u"&&e&&t){let i=e[Zone.__symbol__("OriginalDelegate")];i&&(e=i);let r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}var Et=class n{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:t=!1,shouldCoalesceRunChangeDetection:i=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new In(!1),this.onMicrotaskEmpty=new In(!1),this.onStable=new In(!1),this.onError=new In(!1),typeof Zone>"u")throw new ze(908,!1);Zone.assertZonePatched();let r=this;r._nesting=0,r._outer=r._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(r._inner=r._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(r._inner=r._inner.fork(Zone.longStackTraceZoneSpec)),r.shouldCoalesceEventChangeDetection=!i&&t,r.shouldCoalesceRunChangeDetection=i,r.lastRequestAnimationFrameId=-1,r.nativeRequestAnimationFrame=LT().nativeRequestAnimationFrame,kT(r)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get("isAngularZone")===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new ze(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new ze(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,FT,hy,hy);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},FT={};function zf(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function UT(n){n.isCheckStableRunning||n.lastRequestAnimationFrameId!==-1||(n.lastRequestAnimationFrameId=n.nativeRequestAnimationFrame.call(Yo,()=>{n.fakeTopEventTask||(n.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{n.lastRequestAnimationFrameId=-1,Vh(n),n.isCheckStableRunning=!0,zf(n),n.isCheckStableRunning=!1},void 0,()=>{},()=>{})),n.fakeTopEventTask.invoke()}),Vh(n))}function kT(n){let e=()=>{UT(n)};n._inner=n._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(t,i,r,s,o,a)=>{if(BT(a))return t.invokeTask(r,s,o,a);try{return fy(n),t.invokeTask(r,s,o,a)}finally{(n.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),py(n)}},onInvoke:(t,i,r,s,o,a,c)=>{try{return fy(n),t.invoke(r,s,o,a,c)}finally{n.shouldCoalesceRunChangeDetection&&e(),py(n)}},onHasTask:(t,i,r,s)=>{t.hasTask(r,s),i===r&&(s.change=="microTask"?(n._hasPendingMicrotasks=s.microTask,Vh(n),zf(n)):s.change=="macroTask"&&(n.hasPendingMacrotasks=s.macroTask))},onHandleError:(t,i,r,s)=>(t.handleError(r,s),n.runOutsideAngular(()=>n.onError.emit(s)),!1)})}function Vh(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.lastRequestAnimationFrameId!==-1?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function fy(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function py(n){n._nesting--,zf(n)}function BT(n){return!Array.isArray(n)||n.length!==1?!1:n[0].data?.__ignore_ng_zone__===!0}var s_=(()=>{let e=class e{constructor(){this.handler=null,this.internalCallbacks=[]}execute(){this.executeInternalCallbacks(),this.handler?.execute()}executeInternalCallbacks(){let i=[...this.internalCallbacks];this.internalCallbacks.length=0;for(let r of i)r()}ngOnDestroy(){this.handler?.destroy(),this.handler=null,this.internalCallbacks.length=0}};e.\u0275prov=Re({token:e,providedIn:"root",factory:()=>new e});let n=e;return n})();function al(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=Gv(r,a);else if(s==2){let c=a,l=e[++o];i=Gv(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}var cl=class extends Pl{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=Or(e);return new da(t,this.ngModule)}};function my(n){let e=[];for(let t in n){if(!n.hasOwnProperty(t))continue;let i=n[t];i!==void 0&&e.push({propName:Array.isArray(i)?i[0]:i,templateName:t})}return e}function VT(n){let e=n.toLowerCase();return e==="svg"?mb:e==="math"?gb:null}var zh=class{constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=fl(i);let r=this.injector.get(e,fh,i);return r!==fh||t===fh?r:this.parentInjector.get(e,t,i)}},da=class extends ol{get inputs(){let e=this.componentDef,t=e.inputTransforms,i=my(e.inputs);if(t!==null)for(let r of i)t.hasOwnProperty(r.propName)&&(r.transform=t[r.propName]);return i}get outputs(){return my(this.componentDef.outputs)}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=qS(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}create(e,t,i,r){let s=tt(null);try{r=r||this.ngModule;let o=r instanceof Rn?r:r?.injector;o&&this.componentDef.getStandaloneInjector!==null&&(o=this.componentDef.getStandaloneInjector(o)||o);let a=o?new zh(e,o):e,c=a.get(ua,null);if(c===null)throw new ze(407,!1);let l=a.get(OT,null),u=a.get(s_,null),d=a.get(Uh,null),h={rendererFactory:c,sanitizer:l,inlineEffectRunner:null,afterRenderEventManager:u,changeDetectionScheduler:d},f=c.createRenderer(null,this.componentDef),g=this.componentDef.selectors[0][0]||"div",v=i?$E(f,i,this.componentDef.encapsulation,a):P0(f,g,VT(g)),m=512;this.componentDef.signals?m|=4096:this.componentDef.onPush||(m|=16);let p=null;v!==null&&(p=Df(v,a,!0));let C=Ff(0,null,null,1,0,null,null,null,null,null,null),M=Cl(null,C,null,m,null,null,h,f,a,null,p);wf(M);let E,O;try{let D=this.componentDef,A,N=null;D.findHostDirectiveDefs?(A=[],N=new Map,D.findHostDirectiveDefs(D,A,N),A.push(D)):A=[D];let S=zT(M,v),x=HT(S,v,D,A,M,h,f);O=vf(C,yn),v&&jT(f,D,v,i),t!==void 0&&$T(O,this.ngContentSelectors,t),E=WT(x,D,A,N,M,[qT]),Bf(C,M,null)}finally{Sf()}return new Hh(this.componentType,E,Hs(O,M),M,O)}finally{tt(s)}}},Hh=class extends kh{constructor(e,t,i,r,s){super(),this.location=i,this._rootLView=r,this._tNode=s,this.previousInputValues=null,this.instance=t,this.hostView=this.changeDetectorRef=new kr(r,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode.inputs,r;if(i!==null&&(r=i[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let s=this._rootLView;kf(s[je],s,r,e,t),this.previousInputValues.set(e,t);let o=sr(this._tNode.index,s);Vf(o)}}get injector(){return new Nr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function zT(n,e){let t=n[je],i=yn;return n[i]=e,_a(t,i,2,"#host",null)}function HT(n,e,t,i,r,s,o){let a=r[je];GT(i,n,e,o);let c=null;e!==null&&(c=Df(e,r[Us]));let l=s.rendererFactory.createRenderer(e,t),u=16;t.signals?u=4096:t.onPush&&(u=64);let d=Cl(r,G0(t),null,u,r[n.index],n,s,l,null,null,c);return a.firstCreatePass&&Oh(a,n,i.length-1),Al(r,d),r[n.index]=d}function GT(n,e,t,i){for(let r of n)e.mergedAttrs=df(e.mergedAttrs,r.hostAttrs);e.mergedAttrs!==null&&(al(e,e.mergedAttrs,!0),t!==null&&k0(i,t,e))}function WT(n,e,t,i,r,s){let o=Nn(),a=r[je],c=Kn(o,r);W0(a,r,o,t,null,i);for(let u=0;u<t.length;u++){let d=o.directiveStart+u,h=Vs(r,a,d,o);ir(h,r)}j0(a,r,o),c&&ir(c,r);let l=Vs(r,a,o.directiveStart+o.componentOffset,o);if(n[Jt]=r[Jt]=l,s!==null)for(let u of s)u(l,e);return Nf(a,o,r),l}function jT(n,e,t,i){if(i)_h(n,t,["ng-version","17.3.11"]);else{let{attrs:r,classes:s}=XS(e.selectors[0]);r&&_h(n,t,r),s&&s.length>0&&U0(n,t,s.join(" "))}}function $T(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null?Array.from(s):null)}}function qT(){let n=Nn();Sl(mt()[je],n)}var Ui=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=XT;let n=e;return n})();function XT(){let n=Nn();return a_(n,mt())}var YT=Ui,o_=class extends YT{constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return Hs(this._hostTNode,this._hostLView)}get injector(){return new Nr(this._hostTNode,this._hostLView)}get parentInjector(){let e=bf(this._hostTNode,this._hostLView);if(d0(e)){let t=il(e,this._hostLView),i=nl(e),r=t[je].data[i+8];return new Nr(r,t)}else return new Nr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=gy(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-Qt}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=la(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,aa(this._hostTNode,o)),a}createComponent(e,t,i,r,s){let o=e&&!ub(e),a;if(o)a=t;else{let g=t||{};a=g.index,i=g.injector,r=g.projectableNodes,s=g.environmentInjector||g.ngModuleRef}let c=o?e:new da(Or(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let v=(o?l:this.parentInjector).get(Rn,null);v&&(s=v)}let u=Or(c.componentType??{}),d=la(this._lContainer,u?.id??null),h=d?.firstChild??null,f=c.create(l,r,h,s);return this.insertImpl(f.hostView,a,aa(this._hostTNode,d)),f}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(wb(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[Zt],l=new o_(c,c[Zn],c[Zt]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return Il(o,r,s,i),e.attachToViewContainerRef(),Ry(ph(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=gy(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=oa(this._lContainer,t);i&&(Qc(ph(this._lContainer),t),bl(i[je],i))}detach(e){let t=this._adjustIndex(e,-1),i=oa(this._lContainer,t);return i&&Qc(ph(this._lContainer),t)!=null?new kr(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function gy(n){return n[tl]}function ph(n){return n[tl]||(n[tl]=[])}function a_(n,e){let t,i=e[n.index];return Fi(i)?t=i:(t=$0(i,e,null,n),e[n.index]=t,Al(e,t)),KT(t,e,n,i),new o_(t,n,e)}function ZT(n,e){let t=n[en],i=t.createComment(""),r=Kn(e,n),s=Rf(t,r);return rl(t,s,i,LE(t,r),!1),i}var KT=eC,JT=()=>!1;function QT(n,e,t){return JT(n,e,t)}function eC(n,e,t,i){if(n[Fr])return;let r;t.type&8?r=_i(i):r=ZT(e,t),n[Fr]=r}var Gh=class n{constructor(e){this.queryList=e,this.matches=null}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},Wh=class n{constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let s=0;s<i;s++){let o=t.getByIndex(s),a=this.queries[o.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)Hf(e,t).matches!==null&&this.queries[t].setDirty()}},jh=class{constructor(e,t,i=null){this.flags=t,this.read=i,typeof e=="string"?this.predicate=cC(e):this.predicate=e}},$h=class n{constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let r=t!==null?t.length:0,s=this.getByIndex(i).embeddedTView(e,r);s&&(s.indexInDeclarationView=i,t!==null?t.push(s):t=[s])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},qh=class n{constructor(e,t=-1){this.metadata=e,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let s=i[r];this.matchTNodeWithReadOption(e,t,tC(t,s)),this.matchTNodeWithReadOption(e,t,Xc(t,e,s,!1,!1))}else i===ca?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,Xc(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===or||r===Ui||r===ca&&t.type&4)this.addMatch(t.index,-2);else{let s=Xc(t,e,r,!1,!1);s!==null&&this.addMatch(t.index,s)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function tC(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function nC(n,e){return n.type&11?Hs(n,e):n.type&4?Rl(n,e):null}function iC(n,e,t,i){return t===-1?nC(e,n):t===-2?rC(n,e,i):Vs(n,n[je],t,e)}function rC(n,e,t){if(t===or)return Hs(e,n);if(t===ca)return Rl(e,n);if(t===Ui)return a_(e,n)}function c_(n,e,t,i){let r=e[Ni].queries[i];if(r.matches===null){let s=n.data,o=t.matches,a=[];for(let c=0;o!==null&&c<o.length;c+=2){let l=o[c];if(l<0)a.push(null);else{let u=s[l];a.push(iC(e,u,o[c+1],t.metadata.read))}}r.matches=a}return r.matches}function Xh(n,e,t,i){let r=n.queries.getByIndex(t),s=r.matches;if(s!==null){let o=c_(n,e,r,t);for(let a=0;a<s.length;a+=2){let c=s[a];if(c>0)i.push(o[a/2]);else{let l=s[a+1],u=e[-c];for(let d=Qt;d<u.length;d++){let h=u[d];h[pa]===h[Zt]&&Xh(h[je],h,l,i)}if(u[ks]!==null){let d=u[ks];for(let h=0;h<d.length;h++){let f=d[h];Xh(f[je],f,l,i)}}}}}return i}function sC(n,e){return n[Ni].queries[e].queryList}function oC(n,e,t){let i=new Rh((t&4)===4);return YE(n,e,i,i.destroy),(e[Ni]??=new Wh).queries.push(new Gh(i))-1}function aC(n,e,t){let i=Jn();return i.firstCreatePass&&(lC(i,new jh(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),oC(i,mt(),e)}function cC(n){return n.split(",").map(e=>e.trim())}function lC(n,e,t){n.queries===null&&(n.queries=new $h),n.queries.track(new qh(e,t))}function Hf(n,e){return n.queries.getByIndex(e)}function uC(n,e){let t=n[je],i=Hf(t,e);return i.crossesNgTemplate?Xh(t,n,e,[]):c_(t,n,i,e)}var rr=class{},ha=class{};var Yh=class extends rr{constructor(e,t,i){super(),this._parent=t,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new cl(this);let r=By(e);this._bootstrapComponents=R0(r.bootstrap),this._r3Injector=M0(e,t,[{provide:rr,useValue:this},{provide:Pl,useValue:this.componentFactoryResolver},...i],vn(e),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(e)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},Zh=class extends ha{constructor(e){super(),this.moduleType=e}create(e){return new Yh(this.moduleType,e,[])}};var ll=class extends rr{constructor(e){super(),this.componentFactoryResolver=new cl(this),this.instance=null;let t=new Qo([...e.providers,{provide:rr,useValue:this},{provide:Pl,useValue:this.componentFactoryResolver}],e.parent||pf(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function Gf(n,e,t=null){return new ll({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var Ll=(()=>{let e=class e{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new Bt(!1)}get _hasPendingTasks(){return this.hasPendingTasks.value}add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let i=this.taskId++;return this.pendingTasks.add(i),i}remove(i){this.pendingTasks.delete(i),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function l_(n,e,t){return n[e]=t}function Br(n,e,t){let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function dC(n,e,t,i){let r=Br(n,e,t);return Br(n,e+1,i)||r}function hC(n){return(n.flags&32)===32}function fC(n,e,t,i,r,s,o,a,c){let l=e.consts,u=_a(e,n,4,o||null,Bs(l,a));Uf(e,t,u,Bs(l,c)),Sl(e,u);let d=u.tView=Ff(2,u,i,r,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,l,null);return e.queries!==null&&(e.queries.template(e,u),d.queries=e.queries.embeddedTView(u)),u}function Pn(n,e,t,i,r,s,o,a){let c=mt(),l=Jn(),u=n+yn,d=l.firstCreatePass?fC(u,l,c,e,t,i,r,s,o):l.data[u];zr(d,!1);let h=pC(l,c,d,n);Ml()&&El(l,c,h,d),ir(h,c);let f=$0(h,c,h,d);return c[u]=f,Al(c,f),QT(f,d,c),yl(d)&&Of(l,c,d),o!=null&&Lf(c,d,a),Pn}var pC=mC;function mC(n,e,t,i){return wl(!0),e[en].createComment("")}function gC(n,e,t,i){return Br(n,_l(),t)?e+Ay(t)+i:ya}function ar(n,e,t){let i=mt(),r=_l();if(Br(i,r,e)){let s=Jn(),o=Vb();QE(s,o,i,n,e,i[en],t,!1)}return ar}function vy(n,e,t,i,r){let s=e.inputs,o=r?"class":"style";kf(n,t,s[o],o,i)}var Kh=class{destroy(e){}updateValue(e,t){}swap(e,t){let i=Math.min(e,t),r=Math.max(e,t),s=this.detach(r);if(r-i>1){let o=this.detach(i);this.attach(i,s),this.attach(r,o)}else this.attach(i,s)}move(e,t){this.attach(t,this.detach(e))}};function mh(n,e,t,i,r){return n===t&&Object.is(e,i)?1:Object.is(r(n,e),r(t,i))?-1:0}function vC(n,e,t){let i,r,s=0,o=n.length-1;if(Array.isArray(e)){let a=e.length-1;for(;s<=o&&s<=a;){let c=n.at(s),l=e[s],u=mh(s,c,s,l,t);if(u!==0){u<0&&n.updateValue(s,l),s++;continue}let d=n.at(o),h=e[a],f=mh(o,d,a,h,t);if(f!==0){f<0&&n.updateValue(o,h),o--,a--;continue}let g=t(s,c),v=t(o,d),m=t(s,l);if(Object.is(m,v)){let p=t(a,h);Object.is(p,g)?(n.swap(s,o),n.updateValue(o,h),a--,o--):n.move(o,s),n.updateValue(s,l),s++;continue}if(i??=new ul,r??=_y(n,s,o,t),Jh(n,i,s,m))n.updateValue(s,l),s++,o++;else if(r.has(m))i.set(g,n.detach(s)),o--;else{let p=n.create(s,e[s]);n.attach(s,p),s++,o++}}for(;s<=a;)yy(n,i,t,s,e[s]),s++}else if(e!=null){let a=e[Symbol.iterator](),c=a.next();for(;!c.done&&s<=o;){let l=n.at(s),u=c.value,d=mh(s,l,s,u,t);if(d!==0)d<0&&n.updateValue(s,u),s++,c=a.next();else{i??=new ul,r??=_y(n,s,o,t);let h=t(s,u);if(Jh(n,i,s,h))n.updateValue(s,u),s++,o++,c=a.next();else if(!r.has(h))n.attach(s,n.create(s,u)),s++,o++,c=a.next();else{let f=t(s,l);i.set(f,n.detach(s)),o--}}}for(;!c.done;)yy(n,i,t,n.length,c.value),c=a.next()}for(;s<=o;)n.destroy(n.detach(o--));i?.forEach(a=>{n.destroy(a)})}function Jh(n,e,t,i){return e!==void 0&&e.has(i)?(n.attach(t,e.get(i)),e.delete(i),!0):!1}function yy(n,e,t,i,r){if(Jh(n,e,i,t(i,r)))n.updateValue(i,r);else{let s=n.create(i,r);n.attach(i,s)}}function _y(n,e,t,i){let r=new Set;for(let s=e;s<=t;s++)r.add(i(s,n.at(s)));return r}var ul=class{constructor(){this.kvMap=new Map,this._vMap=void 0}has(e){return this.kvMap.has(e)}delete(e){if(!this.has(e))return!1;let t=this.kvMap.get(e);return this._vMap!==void 0&&this._vMap.has(t)?(this.kvMap.set(e,this._vMap.get(t)),this._vMap.delete(t)):this.kvMap.delete(e),!0}get(e){return this.kvMap.get(e)}set(e,t){if(this.kvMap.has(e)){let i=this.kvMap.get(e);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,t)}else this.kvMap.set(e,t)}forEach(e){for(let[t,i]of this.kvMap)if(e(i,t),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),e(i,t)}}};function xa(n,e,t){Ol("NgControlFlow");let i=mt(),r=_l(),s=nf(i,yn+n),o=0;if(Br(i,r,e)){let a=tt(null);try{if(J0(s,o),e!==-1){let c=rf(i[je],yn+e),l=la(s,c.tView.ssrId),u=Dl(i,c,t,{dehydratedView:l});Il(s,u,o,aa(c,l))}}finally{tt(a)}}else{let a=K0(s,o);a!==void 0&&(a[Jt]=t)}}var Qh=class{constructor(e,t,i){this.lContainer=e,this.$implicit=t,this.$index=i}get $count(){return this.lContainer.length-Qt}};function u_(n,e){return e}var ef=class{constructor(e,t,i){this.hasEmptyBlock=e,this.trackByFn=t,this.liveCollection=i}};function d_(n,e,t,i,r,s,o,a,c,l,u,d,h){Ol("NgControlFlow");let f=c!==void 0,g=mt(),v=a?o.bind(g[Yn][Jt]):o,m=new ef(f,v);g[yn+n]=m,Pn(n+1,e,t,i,r,s),f&&Pn(n+2,c,l,u,d,h)}var tf=class extends Kh{constructor(e,t,i){super(),this.lContainer=e,this.hostLView=t,this.templateTNode=i,this.needsIndexUpdate=!1}get length(){return this.lContainer.length-Qt}at(e){return this.getLView(e)[Jt].$implicit}attach(e,t){let i=t[ea];this.needsIndexUpdate||=e!==this.length,Il(this.lContainer,t,e,aa(this.templateTNode,i))}detach(e){return this.needsIndexUpdate||=e!==this.length-1,yC(this.lContainer,e)}create(e,t){let i=la(this.lContainer,this.templateTNode.tView.ssrId);return Dl(this.hostLView,this.templateTNode,new Qh(this.lContainer,t,e),{dehydratedView:i})}destroy(e){bl(e[je],e)}updateValue(e,t){this.getLView(e)[Jt].$implicit=t}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let e=0;e<this.length;e++)this.getLView(e)[Jt].$index=e}getLView(e){return _C(this.lContainer,e)}};function h_(n){let e=tt(null),t=xl();try{let i=mt(),r=i[je],s=i[t];if(s.liveCollection===void 0){let a=t+1,c=nf(i,a),l=rf(r,a);s.liveCollection=new tf(c,i,l)}else s.liveCollection.reset();let o=s.liveCollection;if(vC(o,n,s.trackByFn),o.updateIndexes(),s.hasEmptyBlock){let a=_l(),c=o.length===0;if(Br(i,a,c)){let l=t+2,u=nf(i,l);if(c){let d=rf(r,l),h=la(u,d.tView.ssrId),f=Dl(i,d,void 0,{dehydratedView:h});Il(u,f,0,aa(d,h))}else J0(u,0)}}}finally{tt(e)}}function nf(n,e){return n[e]}function yC(n,e){return oa(n,e)}function _C(n,e){return K0(n,e)}function rf(n,e){return vf(n,e)}function xC(n,e,t,i,r,s){let o=e.consts,a=Bs(o,r),c=_a(e,n,2,i,a);return Uf(e,t,c,Bs(o,s)),c.attrs!==null&&al(c,c.attrs,!1),c.mergedAttrs!==null&&al(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function Tt(n,e,t,i){let r=mt(),s=Jn(),o=yn+n,a=r[en],c=s.firstCreatePass?xC(o,s,r,e,t,i):s.data[o],l=MC(s,r,c,a,e,n);r[o]=l;let u=yl(c);return zr(c,!0),k0(a,l,c),!hC(c)&&Ml()&&El(s,r,l,c),Tb()===0&&ir(l,r),Cb(),u&&(Of(s,r,c),Nf(s,c,r)),i!==null&&Lf(r,c),Tt}function _t(){let n=Nn();xf()?t0():(n=n.parent,zr(n,!1));let e=n;Ib(e)&&Rb(),Ab();let t=Jn();return t.firstCreatePass&&(Sl(t,n),gf(n)&&t.queries.elementEnd(n)),e.classesWithoutHost!=null&&jb(e)&&vy(t,e,mt(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&$b(e)&&vy(t,e,mt(),e.stylesWithoutHost,!1),_t}function On(n,e,t,i){return Tt(n,e,t,i),_t(),On}var MC=(n,e,t,i,r,s)=>(wl(!0),P0(i,r,zb()));function wC(n,e,t,i,r){let s=e.consts,o=Bs(s,i),a=_a(e,n,8,"ng-container",o);o!==null&&al(a,o,!0);let c=Bs(s,r);return Uf(e,t,a,c),e.queries!==null&&e.queries.elementStart(e,a),a}function f_(n,e,t){let i=mt(),r=Jn(),s=n+yn,o=r.firstCreatePass?wC(s,r,i,e,t):r.data[s];zr(o,!0);let a=SC(r,i,o,n);return i[s]=a,Ml()&&El(r,i,a,o),ir(a,i),yl(o)&&(Of(r,i,o),Nf(r,o,i)),t!=null&&Lf(i,o),f_}function p_(){let n=Nn(),e=Jn();return xf()?t0():(n=n.parent,zr(n,!1)),e.firstCreatePass&&(Sl(e,n),gf(n)&&e.queries.elementEnd(n)),p_}function Gr(n,e,t){return f_(n,e,t),p_(),Gr}var SC=(n,e,t,i)=>(wl(!0),bE(e[en],""));function cr(){return mt()}var dl="en-US";var bC=dl;function EC(n){typeof n=="string"&&(bC=n.toLowerCase().replace(/_/g,"-"))}function xn(n,e,t,i){let r=mt(),s=Jn(),o=Nn();return CC(s,r,r[en],o,n,e,i),xn}function TC(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[ta],c=r[s+2];return a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function CC(n,e,t,i,r,s,o){let a=yl(i),l=n.firstCreatePass&&Y0(n),u=e[Jt],d=X0(e),h=!0;if(i.type&3||o){let v=Kn(i,e),m=o?o(v):v,p=d.length,C=o?E=>o(_i(E[i.index])):i.index,M=null;if(!o&&a&&(M=TC(n,e,r,i.index)),M!==null){let E=M.__ngLastListenerFn__||M;E.__ngNextListenerFn__=s,M.__ngLastListenerFn__=s,h=!1}else{s=My(i,e,u,s,!1);let E=t.listen(m,r,s);d.push(s,E),l&&l.push(r,C,p,p+1)}}else s=My(i,e,u,s,!1);let f=i.outputs,g;if(h&&f!==null&&(g=f[r])){let v=g.length;if(v)for(let m=0;m<v;m+=2){let p=g[m],C=g[m+1],O=e[p][C].subscribe(s),D=d.length;d.push(s,O),l&&l.push(r,i.index,D,-(D+1))}}}function xy(n,e,t,i){let r=tt(null);try{return mi(6,e,t),t(i)!==!1}catch(s){return Z0(n,s),!1}finally{mi(7,e,t),tt(r)}}function My(n,e,t,i,r){return function s(o){if(o===Function)return i;let a=n.componentOffset>-1?sr(n.index,e):e;Vf(a);let c=xy(e,t,i,o),l=s.__ngNextListenerFn__;for(;l;)c=xy(e,t,l,o)&&c,l=l.__ngNextListenerFn__;return r&&c===!1&&o.preventDefault(),c}}function Mn(n=1){return Bb(n)}function Fl(n,e,t){aC(n,e,t)}function Ma(n){let e=mt(),t=Jn(),i=i0();Mf(i+1);let r=Hf(t,i);if(n.dirty&&Mb(e)===((r.metadata.flags&2)===2)){if(r.matches===null)n.reset([]);else{let s=uC(e,i);n.reset(s,sE),n.notifyOnChanges()}return!0}return!1}function wa(){return sC(mt(),i0())}function Ln(n){let e=Nb();return xb(e,yn+n)}function wn(n,e=""){let t=mt(),i=Jn(),r=n+yn,s=i.firstCreatePass?_a(i,r,1,e,null):i.data[r],o=AC(i,t,s,e,n);t[r]=o,Ml()&&El(i,t,o,s),zr(s,!1)}var AC=(n,e,t,i,r)=>(wl(!0),wE(e[en],i));function Wf(n){return js("",n,""),Wf}function js(n,e,t){let i=mt(),r=gC(i,n,e,t);return r!==ya&&fT(i,xl(),r),js}var DC=(()=>{let e=class e{constructor(i){this._injector=i,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(i){if(!i.standalone)return null;if(!this.cachedInjectors.has(i)){let r=Hy(!1,i.type),s=r.length>0?Gf([r],this._injector,`Standalone[${i.type.name}]`):null;this.cachedInjectors.set(i,s)}return this.cachedInjectors.get(i)}ngOnDestroy(){try{for(let i of this.cachedInjectors.values())i!==null&&i.destroy()}finally{this.cachedInjectors.clear()}}};e.\u0275prov=Re({token:e,providedIn:"environment",factory:()=>new e(at(Rn))});let n=e;return n})();function Mi(n){Ol("NgStandalone"),n.getStandaloneInjector=e=>e.get(DC).getOrCreateStandaloneInjector(n)}function m_(n,e,t,i){return IC(mt(),n0(),n,e,t,i)}function Ul(n,e,t,i,r){return RC(mt(),n0(),n,e,t,i,r)}function g_(n,e){let t=n[e];return t===ya?void 0:t}function IC(n,e,t,i,r,s){let o=e+t;return Br(n,o,r)?l_(n,o+1,s?i.call(s,r):i(r)):g_(n,o+1)}function RC(n,e,t,i,r,s,o){let a=e+t;return dC(n,a,r,s)?l_(n,a+2,o?i.call(o,r,s):i(r,s)):g_(n,a+2)}function $s(n,e){return Rl(n,e)}var kl=(()=>{let e=class e{log(i){console.log(i)}warn(i){console.warn(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"platform"});let n=e;return n})();var v_=new ot("");function Sa(n){return!!n&&typeof n.then=="function"}function y_(n){return!!n&&typeof n.subscribe=="function"}var __=new ot(""),x_=(()=>{let e=class e{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((i,r)=>{this.resolve=i,this.reject=r}),this.appInits=ue(__,{optional:!0})??[]}runInitializers(){if(this.initialized)return;let i=[];for(let s of this.appInits){let o=s();if(Sa(o))i.push(o);else if(y_(o)){let a=new Promise((c,l)=>{o.subscribe({complete:c,error:l})});i.push(a)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(i).then(()=>{r()}).catch(s=>{this.reject(s)}),i.length===0&&r(),this.initialized=!0}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),jf=new ot("");function PC(){pv(()=>{throw new ze(600,!1)})}function NC(n){return n.isBoundToModule}function OC(n,e,t){try{let i=t();return Sa(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}var ba=(()=>{let e=class e{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=ue(w0),this.afterRenderEffectManager=ue(s_),this.externalTestViews=new Set,this.beforeRender=new Xt,this.afterTick=new Xt,this.componentTypes=[],this.components=[],this.isStable=ue(Ll).hasPendingTasks.pipe(st(i=>!i)),this._injector=ue(Rn)}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(i,r){let s=i instanceof ol;if(!this._injector.get(x_).done){let f=!s&&ky(i),g=!1;throw new ze(405,g)}let a;s?a=i:a=this._injector.get(Pl).resolveComponentFactory(i),this.componentTypes.push(a.componentType);let c=NC(a)?void 0:this._injector.get(rr),l=r||a.selector,u=a.create(va.NULL,[],l,c),d=u.location.nativeElement,h=u.injector.get(v_,null);return h?.registerApplication(d),u.onDestroy(()=>{this.detachView(u.hostView),gh(this.components,u),h?.unregisterApplication(d)}),this._loadComponent(u),u}tick(){this._tick(!0)}_tick(i){if(this._runningTick)throw new ze(101,!1);let r=tt(null);try{this._runningTick=!0,this.detectChangesInAttachedViews(i)}catch(s){this.internalErrorHandler(s)}finally{this.afterTick.next(),this._runningTick=!1,tt(r)}}detectChangesInAttachedViews(i){let r=0,s=this.afterRenderEffectManager;for(;;){if(r===e_)throw new ze(103,!1);if(i){let o=r===0;this.beforeRender.next(o);for(let{_lView:a,notifyErrorHandler:c}of this._views)LC(a,o,c)}if(r++,s.executeInternalCallbacks(),![...this.externalTestViews.keys(),...this._views].some(({_lView:o})=>sf(o))&&(s.execute(),![...this.externalTestViews.keys(),...this._views].some(({_lView:o})=>sf(o))))break}}attachView(i){let r=i;this._views.push(r),r.attachToAppRef(this)}detachView(i){let r=i;gh(this._views,r),r.detachFromAppRef()}_loadComponent(i){this.attachView(i.hostView),this.tick(),this.components.push(i);let r=this._injector.get(jf,[]);[...this._bootstrapListeners,...r].forEach(s=>s(i))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(i=>i()),this._views.slice().forEach(i=>i.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(i){return this._destroyListeners.push(i),()=>gh(this._destroyListeners,i)}destroy(){if(this._destroyed)throw new ze(406,!1);let i=this._injector;i.destroy&&!i.destroyed&&i.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function gh(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function LC(n,e,t){!e&&!sf(n)||FC(n,t,e)}function sf(n){return _f(n)}function FC(n,e,t){let i;t?(i=0,n[Le]|=1024):n[Le]&64?i=0:i=1,t_(n,e,i)}var of=class{constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},$f=(()=>{let e=class e{compileModuleSync(i){return new Zh(i)}compileModuleAsync(i){return Promise.resolve(this.compileModuleSync(i))}compileModuleAndAllComponentsSync(i){let r=this.compileModuleSync(i),s=By(i),o=R0(s.declarations).reduce((a,c)=>{let l=Or(c);return l&&a.push(new da(l)),a},[]);return new of(r,o)}compileModuleAndAllComponentsAsync(i){return Promise.resolve(this.compileModuleAndAllComponentsSync(i))}clearCache(){}clearCacheFor(i){}getModuleId(i){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var UC=(()=>{let e=class e{constructor(){this.zone=ue(Et),this.applicationRef=ue(ba)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function kC(n){return[{provide:Et,useFactory:n},{provide:Fs,multi:!0,useFactory:()=>{let e=ue(UC,{optional:!0});return()=>e.initialize()}},{provide:Fs,multi:!0,useFactory:()=>{let e=ue(HC);return()=>{e.initialize()}}},{provide:w0,useFactory:BC}]}function BC(){let n=ue(Et),e=ue(Oi);return t=>n.runOutsideAngular(()=>e.handleError(t))}function VC(n){let e=kC(()=>new Et(zC(n)));return pl([[],e])}function zC(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var HC=(()=>{let e=class e{constructor(){this.subscription=new kt,this.initialized=!1,this.zone=ue(Et),this.pendingTasks=ue(Ll)}initialize(){if(this.initialized)return;this.initialized=!0;let i=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(i=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{Et.assertNotInAngularZone(),queueMicrotask(()=>{i!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(i),i=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{Et.assertInAngularZone(),i??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function GC(){return typeof $localize<"u"&&$localize.locale||dl}var qf=new ot("",{providedIn:"root",factory:()=>ue(qf,Ze.Optional|Ze.SkipSelf)||GC()});var M_=new ot("");var Zc=null;function WC(n=[],e){return va.create({name:e,providers:[{provide:ml,useValue:"platform"},{provide:M_,useValue:new Set([()=>Zc=null])},...n]})}function jC(n=[]){if(Zc)return Zc;let e=WC(n);return Zc=e,PC(),$C(e),e}function $C(n){n.get(Cf,null)?.forEach(t=>t())}var Wr=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=qC;let n=e;return n})();function qC(n){return XC(Nn(),mt(),(n&16)===16)}function XC(n,e,t){if(vl(n)&&!t){let i=sr(n.index,e);return new kr(i,i)}else if(n.type&47){let i=e[Yn];return new kr(i,e)}return null}function w_(n){try{let{rootComponent:e,appProviders:t,platformProviders:i}=n,r=jC(i),s=[VC(),...t||[]],a=new ll({providers:s,parent:r,debugName:"",runEnvironmentInitializers:!1}).injector,c=a.get(Et);return c.run(()=>{a.resolveInjectorInitializers();let l=a.get(Oi,null),u;c.runOutsideAngular(()=>{u=c.onError.subscribe({next:f=>{l.handleError(f)}})});let d=()=>a.destroy(),h=r.get(M_);return h.add(d),a.onDestroy(()=>{u.unsubscribe(),h.delete(d)}),OC(l,c,()=>{let f=a.get(x_);return f.runInitializers(),f.donePromise.then(()=>{let g=a.get(qf,dl);EC(g||dl);let v=a.get(ba);return e!==void 0&&v.bootstrap(e),v})})})}catch(e){return Promise.reject(e)}}var D_=null;function qs(){return D_}function I_(n){D_??=n}var Bl=class{};var Fn=new ot(""),R_=(()=>{let e=class e{historyGo(i){throw new Error("")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:()=>ue(QC),providedIn:"platform"});let n=e;return n})();var QC=(()=>{let e=class e extends R_{constructor(){super(),this._doc=ue(Fn),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return qs().getBaseHref(this._doc)}onPopState(i){let r=qs().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",i,!1),()=>r.removeEventListener("popstate",i)}onHashChange(i){let r=qs().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",i,!1),()=>r.removeEventListener("hashchange",i)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(i){this._location.pathname=i}pushState(i,r,s){this._history.pushState(i,r,s)}replaceState(i,r,s){this._history.replaceState(i,r,s)}forward(){this._history.forward()}back(){this._history.back()}historyGo(i=0){this._history.go(i)}getState(){return this._history.state}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:()=>new e,providedIn:"platform"});let n=e;return n})();function P_(n,e){if(n.length==0)return e;if(e.length==0)return n;let t=0;return n.endsWith("/")&&t++,e.startsWith("/")&&t++,t==2?n+e.substring(1):t==1?n+e:n+"/"+e}function S_(n){let e=n.match(/#|\?|$/),t=e&&e.index||n.length,i=t-(n[t-1]==="/"?1:0);return n.slice(0,i)+n.slice(t)}function jr(n){return n&&n[0]!=="?"?"?"+n:n}var zl=(()=>{let e=class e{historyGo(i){throw new Error("")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:()=>ue(N_),providedIn:"root"});let n=e;return n})(),eA=new ot(""),N_=(()=>{let e=class e extends zl{constructor(i,r){super(),this._platformLocation=i,this._removeListenerFns=[],this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??ue(Fn).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(i){this._removeListenerFns.push(this._platformLocation.onPopState(i),this._platformLocation.onHashChange(i))}getBaseHref(){return this._baseHref}prepareExternalUrl(i){return P_(this._baseHref,i)}path(i=!1){let r=this._platformLocation.pathname+jr(this._platformLocation.search),s=this._platformLocation.hash;return s&&i?`${r}${s}`:r}pushState(i,r,s,o){let a=this.prepareExternalUrl(s+jr(o));this._platformLocation.pushState(i,r,a)}replaceState(i,r,s,o){let a=this.prepareExternalUrl(s+jr(o));this._platformLocation.replaceState(i,r,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(i=0){this._platformLocation.historyGo?.(i)}};e.\u0275fac=function(r){return new(r||e)(at(R_),at(eA,8))},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var Ea=(()=>{let e=class e{constructor(i){this._subject=new In,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=i;let r=this._locationStrategy.getBaseHref();this._basePath=iA(S_(b_(r))),this._locationStrategy.onPopState(s=>{this._subject.emit({url:this.path(!0),pop:!0,state:s.state,type:s.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(i=!1){return this.normalize(this._locationStrategy.path(i))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(i,r=""){return this.path()==this.normalize(i+jr(r))}normalize(i){return e.stripTrailingSlash(nA(this._basePath,b_(i)))}prepareExternalUrl(i){return i&&i[0]!=="/"&&(i="/"+i),this._locationStrategy.prepareExternalUrl(i)}go(i,r="",s=null){this._locationStrategy.pushState(s,"",i,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(i+jr(r)),s)}replaceState(i,r="",s=null){this._locationStrategy.replaceState(s,"",i,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(i+jr(r)),s)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(i=0){this._locationStrategy.historyGo?.(i)}onUrlChange(i){return this._urlChangeListeners.push(i),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(i);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(i="",r){this._urlChangeListeners.forEach(s=>s(i,r))}subscribe(i,r,s){return this._subject.subscribe({next:i,error:r,complete:s})}};e.normalizeQueryParams=jr,e.joinWithSlash=P_,e.stripTrailingSlash=S_,e.\u0275fac=function(r){return new(r||e)(at(zl))},e.\u0275prov=Re({token:e,factory:()=>tA(),providedIn:"root"});let n=e;return n})();function tA(){return new Ea(at(zl))}function nA(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function b_(n){return n.replace(/\/index.html$/,"")}function iA(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}function O_(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var Xf=/\s+/,E_=[],L_=(()=>{let e=class e{constructor(i,r){this._ngEl=i,this._renderer=r,this.initialClasses=E_,this.stateMap=new Map}set klass(i){this.initialClasses=i!=null?i.trim().split(Xf):E_}set ngClass(i){this.rawClass=typeof i=="string"?i.trim().split(Xf):i}ngDoCheck(){for(let r of this.initialClasses)this._updateState(r,!0);let i=this.rawClass;if(Array.isArray(i)||i instanceof Set)for(let r of i)this._updateState(r,!0);else if(i!=null)for(let r of Object.keys(i))this._updateState(r,!!i[r]);this._applyStateDiff()}_updateState(i,r){let s=this.stateMap.get(i);s!==void 0?(s.enabled!==r&&(s.changed=!0,s.enabled=r),s.touched=!0):this.stateMap.set(i,{enabled:r,changed:!0,touched:!0})}_applyStateDiff(){for(let i of this.stateMap){let r=i[0],s=i[1];s.changed?(this._toggleClass(r,s.enabled),s.changed=!1):s.touched||(s.enabled&&this._toggleClass(r,!1),this.stateMap.delete(r)),s.touched=!1}}_toggleClass(i,r){i=i.trim(),i.length>0&&i.split(Xf).forEach(s=>{r?this._renderer.addClass(this._ngEl.nativeElement,s):this._renderer.removeClass(this._ngEl.nativeElement,s)})}};e.\u0275fac=function(r){return new(r||e)(Ws(or),Ws(Nl))},e.\u0275dir=fa({type:e,selectors:[["","ngClass",""]],inputs:{klass:[Pi.None,"class","klass"],ngClass:"ngClass"},standalone:!0});let n=e;return n})();var F_=(()=>{let e=class e{constructor(i){this._viewContainerRef=i,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null,this.ngTemplateOutletInjector=null}ngOnChanges(i){if(this._shouldRecreateView(i)){let r=this._viewContainerRef;if(this._viewRef&&r.remove(r.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let s=this._createContextForwardProxy();this._viewRef=r.createEmbeddedView(this.ngTemplateOutlet,s,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(i){return!!i.ngTemplateOutlet||!!i.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(i,r,s)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,r,s):!1,get:(i,r,s)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,r,s)}})}};e.\u0275fac=function(r){return new(r||e)(Ws(Ui))},e.\u0275dir=fa({type:e,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},standalone:!0,features:[ga]});let n=e;return n})();var U_="browser",rA="server";function Yf(n){return n===rA}var Vl=class{};var Jf=class extends Bl{constructor(){super(...arguments),this.supportsDOMEvents=!0}},Qf=class n extends Jf{static makeCurrent(){I_(new n)}onAndCancel(e,t,i){return e.addEventListener(t,i),()=>{e.removeEventListener(t,i)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=oA();return t==null?null:aA(t)}resetBaseElement(){Ta=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return O_(document.cookie,e)}},Ta=null;function oA(){return Ta=Ta||document.querySelector("base"),Ta?Ta.getAttribute("href"):null}function aA(n){return new URL(n,document.baseURI).pathname}var cA=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac});let n=e;return n})(),ep=new ot(""),z_=(()=>{let e=class e{constructor(i,r){this._zone=r,this._eventNameToPlugin=new Map,i.forEach(s=>{s.manager=this}),this._plugins=i.slice().reverse()}addEventListener(i,r,s){return this._findPluginFor(r).addEventListener(i,r,s)}getZone(){return this._zone}_findPluginFor(i){let r=this._eventNameToPlugin.get(i);if(r)return r;if(r=this._plugins.find(o=>o.supports(i)),!r)throw new ze(5101,!1);return this._eventNameToPlugin.set(i,r),r}};e.\u0275fac=function(r){return new(r||e)(at(ep),at(Et))},e.\u0275prov=Re({token:e,factory:e.\u0275fac});let n=e;return n})(),Hl=class{constructor(e){this._doc=e}},Zf="ng-app-id",H_=(()=>{let e=class e{constructor(i,r,s,o={}){this.doc=i,this.appId=r,this.nonce=s,this.platformId=o,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=Yf(o),this.resetHostNodes()}addStyles(i){for(let r of i)this.changeUsageCount(r,1)===1&&this.onStyleAdded(r)}removeStyles(i){for(let r of i)this.changeUsageCount(r,-1)<=0&&this.onStyleRemoved(r)}ngOnDestroy(){let i=this.styleNodesInDOM;i&&(i.forEach(r=>r.remove()),i.clear());for(let r of this.getAllStyles())this.onStyleRemoved(r);this.resetHostNodes()}addHost(i){this.hostNodes.add(i);for(let r of this.getAllStyles())this.addStyleToHost(i,r)}removeHost(i){this.hostNodes.delete(i)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(i){for(let r of this.hostNodes)this.addStyleToHost(r,i)}onStyleRemoved(i){let r=this.styleRef;r.get(i)?.elements?.forEach(s=>s.remove()),r.delete(i)}collectServerRenderedStyles(){let i=this.doc.head?.querySelectorAll(`style[${Zf}="${this.appId}"]`);if(i?.length){let r=new Map;return i.forEach(s=>{s.textContent!=null&&r.set(s.textContent,s)}),r}return null}changeUsageCount(i,r){let s=this.styleRef;if(s.has(i)){let o=s.get(i);return o.usage+=r,o.usage}return s.set(i,{usage:r,elements:[]}),r}getStyleElement(i,r){let s=this.styleNodesInDOM,o=s?.get(r);if(o?.parentNode===i)return s.delete(r),o.removeAttribute(Zf),o;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=r,this.platformIsServer&&a.setAttribute(Zf,this.appId),i.appendChild(a),a}}addStyleToHost(i,r){let s=this.getStyleElement(i,r),o=this.styleRef,a=o.get(r)?.elements;a?a.push(s):o.set(r,{elements:[s],usage:1})}resetHostNodes(){let i=this.hostNodes;i.clear(),i.add(this.doc.head)}};e.\u0275fac=function(r){return new(r||e)(at(Fn),at(Tf),at(Af,8),at(Gs))},e.\u0275prov=Re({token:e,factory:e.\u0275fac});let n=e;return n})(),Kf={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},np=/%COMP%/g,G_="%COMP%",lA=`_nghost-${G_}`,uA=`_ngcontent-${G_}`,dA=!0,hA=new ot("",{providedIn:"root",factory:()=>dA});function fA(n){return uA.replace(np,n)}function pA(n){return lA.replace(np,n)}function W_(n,e){return e.map(t=>t.replace(np,n))}var k_=(()=>{let e=class e{constructor(i,r,s,o,a,c,l,u=null){this.eventManager=i,this.sharedStylesHost=r,this.appId=s,this.removeStylesOnCompDestroy=o,this.doc=a,this.platformId=c,this.ngZone=l,this.nonce=u,this.rendererByCompId=new Map,this.platformIsServer=Yf(c),this.defaultRenderer=new Ca(i,a,l,this.platformIsServer)}createRenderer(i,r){if(!i||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===vi.ShadowDom&&(r=Dt(Ce({},r),{encapsulation:vi.Emulated}));let s=this.getOrCreateRenderer(i,r);return s instanceof Gl?s.applyToHost(i):s instanceof Aa&&s.applyStyles(),s}getOrCreateRenderer(i,r){let s=this.rendererByCompId,o=s.get(r.id);if(!o){let a=this.doc,c=this.ngZone,l=this.eventManager,u=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,h=this.platformIsServer;switch(r.encapsulation){case vi.Emulated:o=new Gl(l,u,r,this.appId,d,a,c,h);break;case vi.ShadowDom:return new tp(l,u,i,r,a,c,this.nonce,h);default:o=new Aa(l,u,r,d,a,c,h);break}s.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(r){return new(r||e)(at(z_),at(H_),at(Tf),at(hA),at(Fn),at(Gs),at(Et),at(Af))},e.\u0275prov=Re({token:e,factory:e.\u0275fac});let n=e;return n})(),Ca=class{constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,t){return t?this.doc.createElementNS(Kf[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(B_(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(B_(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new ze(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=Kf[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=Kf[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(Hr.DashCase|Hr.Important)?e.style.setProperty(t,i,r&Hr.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&Hr.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i){if(typeof e=="string"&&(e=qs().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(i))}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function B_(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var tp=class extends Ca{constructor(e,t,i,r,s,o,a,c){super(e,s,o,c),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=W_(r.id,r.styles);for(let u of l){let d=document.createElement("style");a&&d.setAttribute("nonce",a),d.textContent=u,this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Aa=class extends Ca{constructor(e,t,i,r,s,o,a,c){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r,this.styles=c?W_(c,i.styles):i.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},Gl=class extends Aa{constructor(e,t,i,r,s,o,a,c){let l=r+"-"+i.id;super(e,t,i,s,o,a,c,l),this.contentAttr=fA(l),this.hostAttr=pA(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},mA=(()=>{let e=class e extends Hl{constructor(i){super(i)}supports(i){return!0}addEventListener(i,r,s){return i.addEventListener(r,s,!1),()=>this.removeEventListener(i,r,s)}removeEventListener(i,r,s){return i.removeEventListener(r,s)}};e.\u0275fac=function(r){return new(r||e)(at(Fn))},e.\u0275prov=Re({token:e,factory:e.\u0275fac});let n=e;return n})(),V_=["alt","control","meta","shift"],gA={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},vA={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},yA=(()=>{let e=class e extends Hl{constructor(i){super(i)}supports(i){return e.parseEventName(i)!=null}addEventListener(i,r,s){let o=e.parseEventName(r),a=e.eventCallback(o.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>qs().onAndCancel(i,o.domEventName,a))}static parseEventName(i){let r=i.toLowerCase().split("."),s=r.shift();if(r.length===0||!(s==="keydown"||s==="keyup"))return null;let o=e._normalizeKey(r.pop()),a="",c=r.indexOf("code");if(c>-1&&(r.splice(c,1),a="code."),V_.forEach(u=>{let d=r.indexOf(u);d>-1&&(r.splice(d,1),a+=u+".")}),a+=o,r.length!=0||o.length===0)return null;let l={};return l.domEventName=s,l.fullKey=a,l}static matchEventFullKeyCode(i,r){let s=gA[i.key]||i.key,o="";return r.indexOf("code.")>-1&&(s=i.code,o="code."),s==null||!s?!1:(s=s.toLowerCase(),s===" "?s="space":s==="."&&(s="dot"),V_.forEach(a=>{if(a!==s){let c=vA[a];c(i)&&(o+=a+".")}}),o+=s,o===r)}static eventCallback(i,r,s){return o=>{e.matchEventFullKeyCode(o,i)&&s.runGuarded(()=>r(o))}}static _normalizeKey(i){return i==="esc"?"escape":i}};e.\u0275fac=function(r){return new(r||e)(at(Fn))},e.\u0275prov=Re({token:e,factory:e.\u0275fac});let n=e;return n})();function j_(n,e){return w_(Ce({rootComponent:n},_A(e)))}function _A(n){return{appProviders:[...bA,...n?.providers??[]],platformProviders:SA}}function xA(){Qf.makeCurrent()}function MA(){return new Oi}function wA(){return D0(document),document}var SA=[{provide:Gs,useValue:U_},{provide:Cf,useValue:xA,multi:!0},{provide:Fn,useFactory:wA,deps:[]}];var bA=[{provide:ml,useValue:"root"},{provide:Oi,useFactory:MA,deps:[]},{provide:ep,useClass:mA,multi:!0,deps:[Fn,Et,Gs]},{provide:ep,useClass:yA,multi:!0,deps:[Fn]},k_,H_,z_,{provide:ua,useExisting:k_},{provide:Vl,useClass:cA,deps:[]},[]];var $_=(()=>{let e=class e{constructor(i){this._doc=i}getTitle(){return this._doc.title}setTitle(i){this._doc.title=i||""}};e.\u0275fac=function(r){return new(r||e)(at(Fn))},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var qe="primary",Ga=Symbol("RouteTitle"),ap=class{constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Js(n){return new ap(n)}function TA(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let s=0;s<i.length;s++){let o=i[s],a=n[s];if(o.startsWith(":"))r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function CA(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!wi(n[t],e[t]))return!1;return!0}function wi(n,e){let t=n?cp(n):void 0,i=e?cp(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!J_(n[r],e[r]))return!1;return!0}function cp(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function J_(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function Q_(n){return n.length>0?n[n.length-1]:null}function dr(n){return Qd(n)?n:Sa(n)?It(Promise.resolve(n)):We(n)}var AA={exact:tx,subset:nx},ex={exact:DA,subset:IA,ignored:()=>!0};function q_(n,e,t){return AA[t.paths](n.root,e.root,t.matrixParams)&&ex[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function DA(n,e){return wi(n,e)}function tx(n,e,t){if(!qr(n.segments,e.segments)||!$l(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!tx(n.children[i],e.children[i],t))return!1;return!0}function IA(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>J_(n[t],e[t]))}function nx(n,e,t){return ix(n,e,e.segments,t)}function ix(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!qr(r,t)||e.hasChildren()||!$l(r,t,i))}else if(n.segments.length===t.length){if(!qr(n.segments,t)||!$l(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!nx(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!qr(n.segments,r)||!$l(n.segments,r,i)||!n.children[qe]?!1:ix(n.children[qe],e,s,i)}}function $l(n,e,t){return e.every((i,r)=>ex[t](n[r].parameters,i.parameters))}var lr=class{constructor(e=new ht([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Js(this.queryParams),this._queryParamMap}toString(){return NA.serialize(this)}},ht=class{constructor(e,t){this.segments=e,this.children=t,this.parent=null,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return ql(this)}},$r=class{constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=Js(this.parameters),this._parameterMap}toString(){return sx(this)}};function RA(n,e){return qr(n,e)&&n.every((t,i)=>wi(t.parameters,e[i].parameters))}function qr(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function PA(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===qe&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==qe&&(t=t.concat(e(r,i)))}),t}var Op=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:()=>new Yl,providedIn:"root"});let n=e;return n})(),Yl=class{parse(e){let t=new up(e);return new lr(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Da(e.root,!0)}`,i=FA(e.queryParams),r=typeof e.fragment=="string"?`#${OA(e.fragment)}`:"";return`${t}${i}${r}`}},NA=new Yl;function ql(n){return n.segments.map(e=>sx(e)).join("/")}function Da(n,e){if(!n.hasChildren())return ql(n);if(e){let t=n.children[qe]?Da(n.children[qe],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==qe&&i.push(`${r}:${Da(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=PA(n,(i,r)=>r===qe?[Da(n.children[qe],!1)]:[`${r}:${Da(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[qe]!=null?`${ql(n)}/${t[0]}`:`${ql(n)}/(${t.join("//")})`}}function rx(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Wl(n){return rx(n).replace(/%3B/gi,";")}function OA(n){return encodeURI(n)}function lp(n){return rx(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Xl(n){return decodeURIComponent(n)}function X_(n){return Xl(n.replace(/\+/g,"%20"))}function sx(n){return`${lp(n.path)}${LA(n.parameters)}`}function LA(n){return Object.entries(n).map(([e,t])=>`;${lp(e)}=${lp(t)}`).join("")}function FA(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${Wl(t)}=${Wl(r)}`).join("&"):`${Wl(t)}=${Wl(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var UA=/^[^\/()?;#]+/;function ip(n){let e=n.match(UA);return e?e[0]:""}var kA=/^[^\/()?;=#]+/;function BA(n){let e=n.match(kA);return e?e[0]:""}var VA=/^[^=?&#]+/;function zA(n){let e=n.match(VA);return e?e[0]:""}var HA=/^[^&#]+/;function GA(n){let e=n.match(HA);return e?e[0]:""}var up=class{constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new ht([],{}):new ht([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[qe]=new ht(e,t)),i}parseSegment(){let e=ip(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new ze(4009,!1);return this.capture(e),new $r(Xl(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=BA(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=ip(this.remaining);r&&(i=r,this.capture(i))}e[Xl(t)]=Xl(i)}parseQueryParam(e){let t=zA(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=GA(this.remaining);o&&(i=o,this.capture(i))}let r=X_(t),s=X_(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=ip(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new ze(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=qe);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[qe]:new ht([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new ze(4011,!1)}};function ox(n){return n.segments.length>0?new ht([],{[qe]:n}):n}function ax(n){let e={};for(let[i,r]of Object.entries(n.children)){let s=ax(r);if(i===qe&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new ht(n.segments,e);return WA(t)}function WA(n){if(n.numberOfChildren===1&&n.children[qe]){let e=n.children[qe];return new ht(n.segments.concat(e.segments),e.children)}return n}function Qs(n){return n instanceof lr}function jA(n,e,t=null,i=null){let r=cx(n);return lx(r,e,t,i)}function cx(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new ht(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=ox(i);return e??r}function lx(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return rp(r,r,r,t,i);let s=$A(e);if(s.toRoot())return rp(r,r,new ht([],{}),t,i);let o=qA(s,r,n),a=o.processChildren?Pa(o.segmentGroup,o.index,s.commands):dx(o.segmentGroup,o.index,s.commands);return rp(r,o.segmentGroup,a,t,i)}function Zl(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function La(n){return typeof n=="object"&&n!=null&&n.outlets}function rp(n,e,t,i,r){let s={};i&&Object.entries(i).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;n===e?o=t:o=ux(n,e,t);let a=ox(ax(o));return new lr(a,s,r)}function ux(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=ux(s,e,t)}),new ht(n.segments,i)}var Kl=class{constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&Zl(i[0]))throw new ze(4003,!1);let r=i.find(La);if(r&&r!==Q_(i))throw new ze(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function $A(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new Kl(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new Kl(t,e,i)}var Zs=class{constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function qA(n,e,t){if(n.isAbsolute)return new Zs(e,!0,0);if(!t)return new Zs(e,!1,NaN);if(t.parent===null)return new Zs(t,!0,0);let i=Zl(n.commands[0])?0:1,r=t.segments.length-1+i;return XA(t,r,n.numberOfDoubleDots)}function XA(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new ze(4005,!1);r=i.segments.length}return new Zs(i,!1,r-s)}function YA(n){return La(n[0])?n[0].outlets:{[qe]:n}}function dx(n,e,t){if(n??=new ht([],{}),n.segments.length===0&&n.hasChildren())return Pa(n,e,t);let i=ZA(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new ht(n.segments.slice(0,i.pathIndex),{});return s.children[qe]=new ht(n.segments.slice(i.pathIndex),n.children),Pa(s,0,r)}else return i.match&&r.length===0?new ht(n.segments,{}):i.match&&!n.hasChildren()?dp(n,e,t):i.match?Pa(n,0,r):dp(n,e,t)}function Pa(n,e,t){if(t.length===0)return new ht(n.segments,{});{let i=YA(t),r={};if(Object.keys(i).some(s=>s!==qe)&&n.children[qe]&&n.numberOfChildren===1&&n.children[qe].segments.length===0){let s=Pa(n.children[qe],e,t);return new ht(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=dx(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new ht(n.segments,r)}}function ZA(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(La(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!Z_(c,l,o))return s;i+=2}else{if(!Z_(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function dp(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(La(s)){let c=KA(s.outlets);return new ht(i,c)}if(r===0&&Zl(t[0])){let c=n.segments[e];i.push(new $r(c.path,Y_(t[0]))),r++;continue}let o=La(s)?s.outlets[qe]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&Zl(a)?(i.push(new $r(o,Y_(a))),r+=2):(i.push(new $r(o,{})),r++)}return new ht(i,{})}function KA(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=dp(new ht([],{}),0,i))}),e}function Y_(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function Z_(n,e,t){return n==t.path&&wi(e,t.parameters)}var Na="imperative",Kt=function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n}(Kt||{}),Un=class{constructor(e,t){this.id=e,this.url=t}},Fa=class extends Un{constructor(e,t,i="imperative",r=null){super(e,t),this.type=Kt.NavigationStart,this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Xr=class extends Un{constructor(e,t,i){super(e,t),this.urlAfterRedirects=i,this.type=Kt.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},bn=function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n}(bn||{}),hp=function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n}(hp||{}),ur=class extends Un{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=Kt.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Yr=class extends Un{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=Kt.NavigationSkipped}},Ua=class extends Un{constructor(e,t,i,r){super(e,t),this.error=i,this.target=r,this.type=Kt.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Jl=class extends Un{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=Kt.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},fp=class extends Un{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=Kt.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},pp=class extends Un{constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s,this.type=Kt.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},mp=class extends Un{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=Kt.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},gp=class extends Un{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=Kt.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},vp=class{constructor(e){this.route=e,this.type=Kt.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},yp=class{constructor(e){this.route=e,this.type=Kt.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},_p=class{constructor(e){this.snapshot=e,this.type=Kt.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},xp=class{constructor(e){this.snapshot=e,this.type=Kt.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Mp=class{constructor(e){this.snapshot=e,this.type=Kt.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},wp=class{constructor(e){this.snapshot=e,this.type=Kt.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var ka=class{},Ba=class{constructor(e){this.url=e}};var Sp=class{constructor(){this.outlet=null,this.route=null,this.injector=null,this.children=new ru,this.attachRef=null}},ru=(()=>{let e=class e{constructor(){this.contexts=new Map}onChildOutletCreated(i,r){let s=this.getOrCreateContext(i);s.outlet=r,this.contexts.set(i,s)}onChildOutletDestroyed(i){let r=this.getContext(i);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let i=this.contexts;return this.contexts=new Map,i}onOutletReAttached(i){this.contexts=i}getOrCreateContext(i){let r=this.getContext(i);return r||(r=new Sp,this.contexts.set(i,r)),r}getContext(i){return this.contexts.get(i)||null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Ql=class{constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=bp(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=bp(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=Ep(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return Ep(e,this._root).map(t=>t.value)}};function bp(n,e){if(n===e.value)return e;for(let t of e.children){let i=bp(n,t);if(i)return i}return null}function Ep(n,e){if(n===e.value)return[e];for(let t of e.children){let i=Ep(n,t);if(i.length)return i.unshift(e),i}return[]}var Sn=class{constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function Ys(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var eu=class extends Ql{constructor(e,t){super(e),this.snapshot=t,Fp(this,e)}toString(){return this.snapshot.toString()}};function hx(n){let e=JA(n),t=new Bt([new $r("",{})]),i=new Bt({}),r=new Bt({}),s=new Bt({}),o=new Bt(""),a=new eo(t,i,s,o,r,qe,n,e.root);return a.snapshot=e.root,new eu(new Sn(a,[]),e)}function JA(n){let e={},t={},i={},r="",s=new Va([],e,i,r,t,qe,n,null,{});return new tu("",new Sn(s,[]))}var eo=class{constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(st(l=>l[Ga]))??We(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(st(e=>Js(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(st(e=>Js(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Lp(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:Ce(Ce({},e.params),n.params),data:Ce(Ce({},e.data),n.data),resolve:Ce(Ce(Ce(Ce({},n.data),e.data),r?.data),n._resolvedData)}:i={params:Ce({},n.params),data:Ce({},n.data),resolve:Ce(Ce({},n.data),n._resolvedData??{})},r&&px(r)&&(i.resolve[Ga]=r.title),i}var Va=class{get title(){return this.data?.[Ga]}constructor(e,t,i,r,s,o,a,c,l){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Js(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Js(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},tu=class extends Ql{constructor(e,t){super(t),this.url=e,Fp(this,t)}toString(){return fx(this._root)}};function Fp(n,e){e.value._routerState=n,e.children.forEach(t=>Fp(n,t))}function fx(n){let e=n.children.length>0?` { ${n.children.map(fx).join(", ")} } `:"";return`${n.value}${e}`}function sp(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,wi(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),wi(e.params,t.params)||n.paramsSubject.next(t.params),CA(e.url,t.url)||n.urlSubject.next(t.url),wi(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Tp(n,e){let t=wi(n.params,e.params)&&RA(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||Tp(n.parent,e.parent))}function px(n){return typeof n.title=="string"||n.title===null}var QA=(()=>{let e=class e{constructor(){this.activated=null,this._activatedRoute=null,this.name=qe,this.activateEvents=new In,this.deactivateEvents=new In,this.attachEvents=new In,this.detachEvents=new In,this.parentContexts=ue(ru),this.location=ue(Ui),this.changeDetector=ue(Wr),this.environmentInjector=ue(Rn),this.inputBinder=ue(Up,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(i){if(i.name){let{firstChange:r,previousValue:s}=i.name;if(r)return;this.isTrackedInParentContexts(s)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(s)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(i){return this.parentContexts.getContext(i)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let i=this.parentContexts.getContext(this.name);i?.route&&(i.attachRef?this.attach(i.attachRef,i.route):this.activateWith(i.route,i.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new ze(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new ze(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new ze(4012,!1);this.location.detach();let i=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(i.instance),i}attach(i,r){this.activated=i,this._activatedRoute=r,this.location.insert(i.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(i.instance)}deactivate(){if(this.activated){let i=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(i)}}activateWith(i,r){if(this.isActivated)throw new ze(4013,!1);this._activatedRoute=i;let s=this.location,a=i.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,l=new Cp(i,c,s.injector);this.activated=s.createComponent(a,{index:s.length,injector:l,environmentInjector:r??this.environmentInjector}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=fa({type:e,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[ga]});let n=e;return n})(),Cp=class n{__ngOutletInjector(e){return new n(this.route,this.childContexts,e)}constructor(e,t,i){this.route=e,this.childContexts=t,this.parent=i}get(e,t){return e===eo?this.route:e===ru?this.childContexts:this.parent.get(e,t)}},Up=new ot("");function eD(n,e,t){let i=za(n,e._root,t?t._root:void 0);return new eu(i,e)}function za(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=tD(n,e,t);return new Sn(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>za(n,a)),o}}let i=nD(e.value),r=e.children.map(s=>za(n,s));return new Sn(i,r)}}function tD(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return za(n,i,r);return za(n,i)})}function nD(n){return new eo(new Bt(n.url),new Bt(n.params),new Bt(n.queryParams),new Bt(n.fragment),new Bt(n.data),n.outlet,n.component,n)}var mx="ngNavigationCancelingError";function gx(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=Qs(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=vx(!1,bn.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function vx(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[mx]=!0,t.cancellationCode=e,t}function iD(n){return yx(n)&&Qs(n.url)}function yx(n){return!!n&&n[mx]}var rD=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=xi({type:e,selectors:[["ng-component"]],standalone:!0,features:[Mi],decls:1,vars:0,template:function(r,s){r&1&&On(0,"router-outlet")},dependencies:[QA],encapsulation:2});let n=e;return n})();function sD(n,e){return n.providers&&!n._injector&&(n._injector=Gf(n.providers,e,`Route: ${n.path}`)),n._injector??e}function kp(n){let e=n.children&&n.children.map(kp),t=e?Dt(Ce({},n),{children:e}):Ce({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==qe&&(t.component=rD),t}function Si(n){return n.outlet||qe}function oD(n,e){let t=n.filter(i=>Si(i)===e);return t.push(...n.filter(i=>Si(i)!==e)),t}function Wa(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var aD=(n,e,t,i)=>st(r=>(new Ap(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),Ap=class{constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),sp(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=Ys(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Ys(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Ys(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=Ys(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new wp(s.value.snapshot))}),e.children.length&&this.forwardEvent(new xp(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(sp(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),sp(a.route.value),this.activateChildRoutes(e,null,o.children)}else{let a=Wa(r.snapshot);o.attachRef=null,o.route=r,o.injector=a,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}}else this.activateChildRoutes(e,null,i)}},nu=class{constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},Ks=class{constructor(e,t){this.component=e,this.route=t}};function cD(n,e,t){let i=n._root,r=e?e._root:null;return Ia(i,r,t,[i.value])}function lD(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function no(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!by(n)?n:e.get(n):i}function Ia(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=Ys(e);return n.children.forEach(o=>{uD(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>Oa(a,t.getContext(o),r)),r}function uD(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=dD(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new nu(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?Ia(n,e,a?a.children:null,i,r):Ia(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new Ks(a.outlet.component,o))}else o&&Oa(e,a,r),r.canActivateChecks.push(new nu(i)),s.component?Ia(n,null,a?a.children:null,i,r):Ia(n,null,t,i,r);return r}function dD(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!qr(n.url,e.url);case"pathParamsOrQueryParamsChange":return!qr(n.url,e.url)||!wi(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Tp(n,e)||!wi(n.queryParams,e.queryParams);case"paramsChange":default:return!Tp(n,e)}}function Oa(n,e,t){let i=Ys(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?Oa(o,e.children.getContext(s),t):Oa(o,null,t):Oa(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new Ks(e.outlet.component,r)):t.canDeactivateChecks.push(new Ks(null,r)):t.canDeactivateChecks.push(new Ks(null,r))}function ja(n){return typeof n=="function"}function hD(n){return typeof n=="boolean"}function fD(n){return n&&ja(n.canLoad)}function pD(n){return n&&ja(n.canActivate)}function mD(n){return n&&ja(n.canActivateChild)}function gD(n){return n&&ja(n.canDeactivate)}function vD(n){return n&&ja(n.canMatch)}function _x(n){return n instanceof Ii||n?.name==="EmptyError"}var jl=Symbol("INITIAL_VALUE");function to(){return $n(n=>Hc(n.map(e=>e.pipe(Ri(1),rh(jl)))).pipe(st(e=>{for(let t of e)if(t!==!0){if(t===jl)return jl;if(t===!1||t instanceof lr)return t}return!0}),jn(e=>e!==jl),Ri(1)))}function yD(n,e){return Vt(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?We(Dt(Ce({},t),{guardsResult:!0})):_D(o,i,r,n).pipe(Vt(a=>a&&hD(a)?xD(i,s,n,e):We(a)),st(a=>Dt(Ce({},t),{guardsResult:a})))})}function _D(n,e,t,i){return It(n).pipe(Vt(r=>ED(r.component,r.route,t,e,i)),pi(r=>r!==!0,!0))}function xD(n,e,t,i){return It(e).pipe(Cs(r=>Ts(wD(r.route.parent,i),MD(r.route,i),bD(n,r.path,t),SD(n,r.route,t))),pi(r=>r!==!0,!0))}function MD(n,e){return n!==null&&e&&e(new Mp(n)),We(!0)}function wD(n,e){return n!==null&&e&&e(new _p(n)),We(!0)}function SD(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return We(!0);let r=i.map(s=>Gc(()=>{let o=Wa(e)??t,a=no(s,o),c=pD(a)?a.canActivate(e,n):Vr(o,()=>a(e,n));return dr(c).pipe(pi())}));return We(r).pipe(to())}function bD(n,e,t){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>lD(o)).filter(o=>o!==null).map(o=>Gc(()=>{let a=o.guards.map(c=>{let l=Wa(o.node)??t,u=no(c,l),d=mD(u)?u.canActivateChild(i,n):Vr(l,()=>u(i,n));return dr(d).pipe(pi())});return We(a).pipe(to())}));return We(s).pipe(to())}function ED(n,e,t,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return We(!0);let o=s.map(a=>{let c=Wa(e)??r,l=no(a,c),u=gD(l)?l.canDeactivate(n,e,t,i):Vr(c,()=>l(n,e,t,i));return dr(u).pipe(pi())});return We(o).pipe(to())}function TD(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return We(!0);let s=r.map(o=>{let a=no(o,n),c=fD(a)?a.canLoad(e,t):Vr(n,()=>a(e,t));return dr(c)});return We(s).pipe(to(),xx(i))}function xx(n){return Xd(Yt(e=>{if(Qs(e))throw gx(n,e)}),st(e=>e===!0))}function CD(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return We(!0);let s=r.map(o=>{let a=no(o,n),c=vD(a)?a.canMatch(e,t):Vr(n,()=>a(e,t));return dr(c)});return We(s).pipe(to(),xx(i))}var Ha=class{constructor(e){this.segmentGroup=e||null}},iu=class extends Error{constructor(e){super(),this.urlTree=e}};function Xs(n){return Es(new Ha(n))}function AD(n){return Es(new ze(4e3,!1))}function DD(n){return Es(vx(!1,bn.GuardRejected))}var Dp=class{constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return We(i);if(r.numberOfChildren>1||!r.children[qe])return AD(e.redirectTo);r=r.children[qe]}}applyRedirectCommands(e,t,i){let r=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,i);if(t.startsWith("/"))throw new iu(r);return r}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new lr(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s.startsWith(":")){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new ht(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path.startsWith(":")?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new ze(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}},Ip={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function ID(n,e,t,i,r){let s=Bp(n,e,t);return s.matched?(i=sD(e,i),CD(i,e,t,r).pipe(st(o=>o===!0?s:Ce({},Ip)))):We(s)}function Bp(n,e,t){if(e.path==="**")return RD(t);if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?Ce({},Ip):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||TA)(t,n,e);if(!r)return Ce({},Ip);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?Ce(Ce({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function RD(n){return{matched:!0,parameters:n.length>0?Q_(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function K_(n,e,t,i){return t.length>0&&OD(n,t,i)?{segmentGroup:new ht(e,ND(i,new ht(t,n.children))),slicedSegments:[]}:t.length===0&&LD(n,t,i)?{segmentGroup:new ht(n.segments,PD(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new ht(n.segments,n.children),slicedSegments:t}}function PD(n,e,t,i){let r={};for(let s of t)if(su(n,e,s)&&!i[Si(s)]){let o=new ht([],{});r[Si(s)]=o}return Ce(Ce({},i),r)}function ND(n,e){let t={};t[qe]=e;for(let i of n)if(i.path===""&&Si(i)!==qe){let r=new ht([],{});t[Si(i)]=r}return t}function OD(n,e,t){return t.some(i=>su(n,e,i)&&Si(i)!==qe)}function LD(n,e,t){return t.some(i=>su(n,e,i))}function su(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function FD(n,e,t,i){return Si(n)!==i&&(i===qe||!su(e,t,n))?!1:Bp(e,n,t).matched}function UD(n,e,t){return e.length===0&&!n.children[t]}var Rp=class{};function kD(n,e,t,i,r,s,o="emptyOnly"){return new Pp(n,e,t,i,r,o,s).recognize()}var BD=31,Pp=class{constructor(e,t,i,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new Dp(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(e){return new ze(4002,`'${e.segmentGroup}'`)}recognize(){let e=K_(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(st(t=>{let i=new Va([],Object.freeze({}),Object.freeze(Ce({},this.urlTree.queryParams)),this.urlTree.fragment,{},qe,this.rootComponentType,null,{}),r=new Sn(i,t),s=new tu("",r),o=jA(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),this.inheritParamsAndData(s._root,null),{state:s,tree:o}}))}match(e){return this.processSegmentGroup(this.injector,this.config,e,qe).pipe(Qi(i=>{if(i instanceof iu)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Ha?this.noMatchError(i):i}))}inheritParamsAndData(e,t){let i=e.value,r=Lp(i,t,this.paramsInheritanceStrategy);i.params=Object.freeze(r.params),i.data=Object.freeze(r.data),e.children.forEach(s=>this.inheritParamsAndData(s,i))}processSegmentGroup(e,t,i,r){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i):this.processSegment(e,t,i,i.segments,r,!0).pipe(st(s=>s instanceof Sn?[s]:[]))}processChildren(e,t,i){let r=[];for(let s of Object.keys(i.children))s==="primary"?r.unshift(s):r.push(s);return It(r).pipe(Cs(s=>{let o=i.children[s],a=oD(t,s);return this.processSegmentGroup(e,a,o,s)}),ih((s,o)=>(s.push(...o),s)),er(null),nh(),Vt(s=>{if(s===null)return Xs(i);let o=Mx(s);return VD(o),We(o)}))}processSegment(e,t,i,r,s,o){return It(t).pipe(Cs(a=>this.processSegmentAgainstRoute(a._injector??e,t,a,i,r,s,o).pipe(Qi(c=>{if(c instanceof Ha)return We(null);throw c}))),pi(a=>!!a),Qi(a=>{if(_x(a))return UD(i,r,s)?We(new Rp):Xs(i);throw a}))}processSegmentAgainstRoute(e,t,i,r,s,o,a){return FD(i,r,s,o)?i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,o):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o):Xs(r):Xs(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o){let{matched:a,consumedSegments:c,positionalParamSegments:l,remainingSegments:u}=Bp(t,r,s);if(!a)return Xs(t);r.redirectTo.startsWith("/")&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>BD&&(this.allowRedirects=!1));let d=this.applyRedirects.applyRedirectCommands(c,r.redirectTo,l);return this.applyRedirects.lineralizeSegments(r,d).pipe(Vt(h=>this.processSegment(e,i,t,h.concat(u),o,!1)))}matchSegmentAgainstRoute(e,t,i,r,s){let o=ID(t,i,r,e,this.urlSerializer);return i.path==="**"&&(t.children={}),o.pipe($n(a=>a.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe($n(({routes:c})=>{let l=i._loadedInjector??e,{consumedSegments:u,remainingSegments:d,parameters:h}=a,f=new Va(u,h,Object.freeze(Ce({},this.urlTree.queryParams)),this.urlTree.fragment,HD(i),Si(i),i.component??i._loadedComponent??null,i,GD(i)),{segmentGroup:g,slicedSegments:v}=K_(t,u,d,c);if(v.length===0&&g.hasChildren())return this.processChildren(l,c,g).pipe(st(p=>p===null?null:new Sn(f,p)));if(c.length===0&&v.length===0)return We(new Sn(f,[]));let m=Si(i)===s;return this.processSegment(l,c,g,v,m?qe:s,!0).pipe(st(p=>new Sn(f,p instanceof Sn?[p]:[])))}))):Xs(t)))}getChildConfig(e,t,i){return t.children?We({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?We({routes:t._loadedRoutes,injector:t._loadedInjector}):TD(e,t,i,this.urlSerializer).pipe(Vt(r=>r?this.configLoader.loadChildren(e,t).pipe(Yt(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):DD(t))):We({routes:[],injector:e})}};function VD(n){n.sort((e,t)=>e.value.outlet===qe?-1:t.value.outlet===qe?1:e.value.outlet.localeCompare(t.value.outlet))}function zD(n){let e=n.value.routeConfig;return e&&e.path===""}function Mx(n){let e=[],t=new Set;for(let i of n){if(!zD(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=Mx(i.children);e.push(new Sn(i.value,r))}return e.filter(i=>!t.has(i))}function HD(n){return n.data||{}}function GD(n){return n.resolve||{}}function WD(n,e,t,i,r,s){return Vt(o=>kD(n,e,t,i,o.extractedUrl,r,s).pipe(st(({state:a,tree:c})=>Dt(Ce({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function jD(n,e){return Vt(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return We(t);let s=new Set(r.map(c=>c.route)),o=new Set;for(let c of s)if(!o.has(c))for(let l of wx(c))o.add(l);let a=0;return It(o).pipe(Cs(c=>s.has(c)?$D(c,i,n,e):(c.data=Lp(c,c.parent,n).resolve,We(void 0))),Yt(()=>a++),As(1),Vt(c=>a===o.size?We(t):an))})}function wx(n){let e=n.children.map(t=>wx(t)).flat();return[n,...e]}function $D(n,e,t,i){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!px(r)&&(s[Ga]=r.title),qD(s,n,e,i).pipe(st(o=>(n._resolvedData=o,n.data=Lp(n,n.parent,t).resolve,null)))}function qD(n,e,t,i){let r=cp(n);if(r.length===0)return We({});let s={};return It(r).pipe(Vt(o=>XD(n[o],e,t,i).pipe(pi(),Yt(a=>{s[o]=a}))),As(1),th(s),Qi(o=>_x(o)?an:Es(o)))}function XD(n,e,t,i){let r=Wa(e)??i,s=no(n,r),o=s.resolve?s.resolve(e,t):Vr(r,()=>s(e,t));return dr(o)}function op(n){return $n(e=>{let t=n(e);return t?It(t).pipe(st(()=>e)):We(e)})}var Sx=(()=>{let e=class e{buildTitle(i){let r,s=i.root;for(;s!==void 0;)r=this.getResolvedTitleForRoute(s)??r,s=s.children.find(o=>o.outlet===qe);return r}getResolvedTitleForRoute(i){return i.data[Ga]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:()=>ue(YD),providedIn:"root"});let n=e;return n})(),YD=(()=>{let e=class e extends Sx{constructor(i){super(),this.title=i}updateTitle(i){let r=this.buildTitle(i);r!==void 0&&this.title.setTitle(r)}};e.\u0275fac=function(r){return new(r||e)(at($_))},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Vp=new ot("",{providedIn:"root",factory:()=>({})}),zp=new ot(""),ZD=(()=>{let e=class e{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=ue($f)}loadComponent(i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return We(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=dr(i.loadComponent()).pipe(st(bx),Yt(o=>{this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=o}),Xo(()=>{this.componentLoaders.delete(i)})),s=new bs(r,()=>new Xt).pipe(Ss());return this.componentLoaders.set(i,s),s}loadChildren(i,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return We({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let o=KD(r,this.compiler,i,this.onLoadEndListener).pipe(Xo(()=>{this.childrenLoaders.delete(r)})),a=new bs(o,()=>new Xt).pipe(Ss());return this.childrenLoaders.set(r,a),a}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function KD(n,e,t,i){return dr(n.loadChildren()).pipe(st(bx),Vt(r=>r instanceof ha||Array.isArray(r)?We(r):It(e.compileModuleAsync(r))),st(r=>{i&&i(n);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(zp,[],{optional:!0,self:!0}).flat()),{routes:o.map(kp),injector:s}}))}function JD(n){return n&&typeof n=="object"&&"default"in n}function bx(n){return JD(n)?n.default:n}var Hp=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:()=>ue(QD),providedIn:"root"});let n=e;return n})(),QD=(()=>{let e=class e{shouldProcessUrl(i){return!0}extract(i){return i}merge(i,r){return i}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),eI=new ot("");var tI=(()=>{let e=class e{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new Xt,this.transitionAbortSubject=new Xt,this.configLoader=ue(ZD),this.environmentInjector=ue(Rn),this.urlSerializer=ue(Op),this.rootContexts=ue(ru),this.location=ue(Ea),this.inputBindingEnabled=ue(Up,{optional:!0})!==null,this.titleStrategy=ue(Sx),this.options=ue(Vp,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=ue(Hp),this.createViewTransition=ue(eI,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>We(void 0),this.rootComponentType=null;let i=s=>this.events.next(new vp(s)),r=s=>this.events.next(new yp(s));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=i}complete(){this.transitions?.complete()}handleNavigationRequest(i){let r=++this.navigationId;this.transitions?.next(Dt(Ce(Ce({},this.transitions.value),i),{id:r}))}setupNavigations(i,r,s){return this.transitions=new Bt({id:0,currentUrlTree:r,currentRawUrl:r,extractedUrl:this.urlHandlingStrategy.extract(r),urlAfterRedirects:this.urlHandlingStrategy.extract(r),rawUrl:r,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:Na,restoredState:null,currentSnapshot:s.snapshot,targetSnapshot:null,currentRouterState:s,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(jn(o=>o.id!==0),st(o=>Dt(Ce({},o),{extractedUrl:this.urlHandlingStrategy.extract(o.rawUrl)})),$n(o=>{let a=!1,c=!1;return We(o).pipe($n(l=>{if(this.navigationId>o.id)return this.cancelNavigationTransition(o,"",bn.SupersededByNewNavigation),an;this.currentTransition=o,this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?Dt(Ce({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let u=!i.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=l.extras.onSameUrlNavigation??i.onSameUrlNavigation;if(!u&&d!=="reload"){let h="";return this.events.next(new Yr(l.id,this.urlSerializer.serialize(l.rawUrl),h,hp.IgnoredSameUrlNavigation)),l.resolve(null),an}if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return We(l).pipe($n(h=>{let f=this.transitions?.getValue();return this.events.next(new Fa(h.id,this.urlSerializer.serialize(h.extractedUrl),h.source,h.restoredState)),f!==this.transitions?.getValue()?an:Promise.resolve(h)}),WD(this.environmentInjector,this.configLoader,this.rootComponentType,i.config,this.urlSerializer,this.paramsInheritanceStrategy),Yt(h=>{o.targetSnapshot=h.targetSnapshot,o.urlAfterRedirects=h.urlAfterRedirects,this.currentNavigation=Dt(Ce({},this.currentNavigation),{finalUrl:h.urlAfterRedirects});let f=new Jl(h.id,this.urlSerializer.serialize(h.extractedUrl),this.urlSerializer.serialize(h.urlAfterRedirects),h.targetSnapshot);this.events.next(f)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:h,extractedUrl:f,source:g,restoredState:v,extras:m}=l,p=new Fa(h,this.urlSerializer.serialize(f),g,v);this.events.next(p);let C=hx(this.rootComponentType).snapshot;return this.currentTransition=o=Dt(Ce({},l),{targetSnapshot:C,urlAfterRedirects:f,extras:Dt(Ce({},m),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=f,We(o)}else{let h="";return this.events.next(new Yr(l.id,this.urlSerializer.serialize(l.extractedUrl),h,hp.IgnoredByUrlHandlingStrategy)),l.resolve(null),an}}),Yt(l=>{let u=new fp(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}),st(l=>(this.currentTransition=o=Dt(Ce({},l),{guards:cD(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),o)),yD(this.environmentInjector,l=>this.events.next(l)),Yt(l=>{if(o.guardsResult=l.guardsResult,Qs(l.guardsResult))throw gx(this.urlSerializer,l.guardsResult);let u=new pp(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(u)}),jn(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",bn.GuardRejected),!1)),op(l=>{if(l.guards.canActivateChecks.length)return We(l).pipe(Yt(u=>{let d=new mp(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(d)}),$n(u=>{let d=!1;return We(u).pipe(jD(this.paramsInheritanceStrategy,this.environmentInjector),Yt({next:()=>d=!0,complete:()=>{d||this.cancelNavigationTransition(u,"",bn.NoDataFromResolver)}}))}),Yt(u=>{let d=new gp(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(d)}))}),op(l=>{let u=d=>{let h=[];d.routeConfig?.loadComponent&&!d.routeConfig._loadedComponent&&h.push(this.configLoader.loadComponent(d.routeConfig).pipe(Yt(f=>{d.component=f}),st(()=>{})));for(let f of d.children)h.push(...u(f));return h};return Hc(u(l.targetSnapshot.root)).pipe(er(null),Ri(1))}),op(()=>this.afterPreactivation()),$n(()=>{let{currentSnapshot:l,targetSnapshot:u}=o,d=this.createViewTransition?.(this.environmentInjector,l.root,u.root);return d?It(d).pipe(st(()=>o)):We(o)}),st(l=>{let u=eD(i.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=o=Dt(Ce({},l),{targetRouterState:u}),this.currentNavigation.targetRouterState=u,o}),Yt(()=>{this.events.next(new ka)}),aD(this.rootContexts,i.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),Ri(1),Yt({next:l=>{a=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new Xr(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{a=!0}}),sh(this.transitionAbortSubject.pipe(Yt(l=>{throw l}))),Xo(()=>{!a&&!c&&this.cancelNavigationTransition(o,"",bn.SupersededByNewNavigation),this.currentTransition?.id===o.id&&(this.currentNavigation=null,this.currentTransition=null)}),Qi(l=>{if(c=!0,yx(l))this.events.next(new ur(o.id,this.urlSerializer.serialize(o.extractedUrl),l.message,l.cancellationCode)),iD(l)?this.events.next(new Ba(l.url)):o.resolve(!1);else{this.events.next(new Ua(o.id,this.urlSerializer.serialize(o.extractedUrl),l,o.targetSnapshot??void 0));try{o.resolve(i.errorHandler(l))}catch(u){this.options.resolveNavigationPromiseOnError?o.resolve(!1):o.reject(u)}}return an}))}))}cancelNavigationTransition(i,r,s){let o=new ur(i.id,this.urlSerializer.serialize(i.extractedUrl),r,s);this.events.next(o),i.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString()!==this.currentTransition?.extractedUrl.toString()&&!this.currentTransition?.extras.skipLocationChange}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function nI(n){return n!==Na}var iI=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:()=>ue(rI),providedIn:"root"});let n=e;return n})(),Np=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},rI=(()=>{let e=class e extends Np{};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=Ef(e)))(s||e)}})(),e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Ex=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:()=>ue(sI),providedIn:"root"});let n=e;return n})(),sI=(()=>{let e=class e extends Ex{constructor(){super(...arguments),this.location=ue(Ea),this.urlSerializer=ue(Op),this.options=ue(Vp,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=ue(Hp),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new lr,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=hx(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(i){return this.location.subscribe(r=>{r.type==="popstate"&&i(r.url,r.state)})}handleRouterEvent(i,r){if(i instanceof Fa)this.stateMemento=this.createStateMemento();else if(i instanceof Yr)this.rawUrlTree=r.initialUrl;else if(i instanceof Jl){if(this.urlUpdateStrategy==="eager"&&!r.extras.skipLocationChange){let s=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl);this.setBrowserUrl(s,r)}}else i instanceof ka?(this.currentUrlTree=r.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl),this.routerState=r.targetRouterState,this.urlUpdateStrategy==="deferred"&&(r.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,r))):i instanceof ur&&(i.code===bn.GuardRejected||i.code===bn.NoDataFromResolver)?this.restoreHistory(r):i instanceof Ua?this.restoreHistory(r,!0):i instanceof Xr&&(this.lastSuccessfulId=i.id,this.currentPageId=this.browserPageId)}setBrowserUrl(i,r){let s=this.urlSerializer.serialize(i);if(this.location.isCurrentPathEqualTo(s)||r.extras.replaceUrl){let o=this.browserPageId,a=Ce(Ce({},r.extras.state),this.generateNgRouterState(r.id,o));this.location.replaceState(s,"",a)}else{let o=Ce(Ce({},r.extras.state),this.generateNgRouterState(r.id,this.browserPageId+1));this.location.go(s,"",o)}}restoreHistory(i,r=!1){if(this.canceledNavigationResolution==="computed"){let s=this.browserPageId,o=this.currentPageId-s;o!==0?this.location.historyGo(o):this.currentUrlTree===i.finalUrl&&o===0&&(this.resetState(i),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetState(i),this.resetUrlToCurrentUrlTree())}resetState(i){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,i.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(i,r){return this.canceledNavigationResolution==="computed"?{navigationId:i,\u0275routerPageId:r}:{navigationId:i}}};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=Ef(e)))(s||e)}})(),e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Ra=function(n){return n[n.COMPLETE=0]="COMPLETE",n[n.FAILED=1]="FAILED",n[n.REDIRECTING=2]="REDIRECTING",n}(Ra||{});function oI(n,e){n.events.pipe(jn(t=>t instanceof Xr||t instanceof ur||t instanceof Ua||t instanceof Yr),st(t=>t instanceof Xr||t instanceof Yr?Ra.COMPLETE:(t instanceof ur?t.code===bn.Redirect||t.code===bn.SupersededByNewNavigation:!1)?Ra.REDIRECTING:Ra.FAILED),jn(t=>t!==Ra.REDIRECTING),Ri(1)).subscribe(()=>{e()})}function aI(n){throw n}var cI={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},lI={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Tx=(()=>{let e=class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.isNgZoneEnabled=!1,this.console=ue(kl),this.stateManager=ue(Ex),this.options=ue(Vp,{optional:!0})||{},this.pendingTasks=ue(Ll),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=ue(tI),this.urlSerializer=ue(Op),this.location=ue(Ea),this.urlHandlingStrategy=ue(Hp),this._events=new Xt,this.errorHandler=this.options.errorHandler||aI,this.navigated=!1,this.routeReuseStrategy=ue(iI),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=ue(zp,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!ue(Up,{optional:!0}),this.eventsSubscription=new kt,this.isNgZoneEnabled=ue(Et)instanceof Et&&Et.isInAngularZone(),this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:i=>{this.console.warn(i)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let i=this.navigationTransitions.events.subscribe(r=>{try{let s=this.navigationTransitions.currentTransition,o=this.navigationTransitions.currentNavigation;if(s!==null&&o!==null){if(this.stateManager.handleRouterEvent(r,o),r instanceof ur&&r.code!==bn.Redirect&&r.code!==bn.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof Xr)this.navigated=!0;else if(r instanceof Ba){let a=this.urlHandlingStrategy.merge(r.url,s.currentRawUrl),c={info:s.extras.info,skipLocationChange:s.extras.skipLocationChange,replaceUrl:this.urlUpdateStrategy==="eager"||nI(s.source)};this.scheduleNavigation(a,Na,null,c,{resolve:s.resolve,reject:s.reject,promise:s.promise})}}dI(r)&&this._events.next(r)}catch(s){this.navigationTransitions.transitionAbortSubject.next(s)}});this.eventsSubscription.add(i)}resetRootComponentType(i){this.routerState.root.component=i,this.navigationTransitions.rootComponentType=i}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Na,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((i,r)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(i,"popstate",r)},0)})}navigateToSyncWithBrowser(i,r,s){let o={replaceUrl:!0},a=s?.navigationId?s:null;if(s){let l=Ce({},s);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let c=this.parseUrl(i);this.scheduleNavigation(c,r,a,o)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(i){this.config=i.map(kp),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(i,r={}){let{relativeTo:s,queryParams:o,fragment:a,queryParamsHandling:c,preserveFragment:l}=r,u=l?this.currentUrlTree.fragment:a,d=null;switch(c){case"merge":d=Ce(Ce({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let h;try{let f=s?s.snapshot:this.routerState.snapshot.root;h=cx(f)}catch{(typeof i[0]!="string"||!i[0].startsWith("/"))&&(i=[]),h=this.currentUrlTree.root}return lx(h,i,d,u??null)}navigateByUrl(i,r={skipLocationChange:!1}){let s=Qs(i)?i:this.parseUrl(i),o=this.urlHandlingStrategy.merge(s,this.rawUrlTree);return this.scheduleNavigation(o,Na,null,r)}navigate(i,r={skipLocationChange:!1}){return uI(i),this.navigateByUrl(this.createUrlTree(i,r),r)}serializeUrl(i){return this.urlSerializer.serialize(i)}parseUrl(i){try{return this.urlSerializer.parse(i)}catch{return this.urlSerializer.parse("/")}}isActive(i,r){let s;if(r===!0?s=Ce({},cI):r===!1?s=Ce({},lI):s=r,Qs(i))return q_(this.currentUrlTree,i,s);let o=this.parseUrl(i);return q_(this.currentUrlTree,o,s)}removeEmptyProps(i){return Object.entries(i).reduce((r,[s,o])=>(o!=null&&(r[s]=o),r),{})}scheduleNavigation(i,r,s,o,a){if(this.disposed)return Promise.resolve(!1);let c,l,u;a?(c=a.resolve,l=a.reject,u=a.promise):u=new Promise((h,f)=>{c=h,l=f});let d=this.pendingTasks.add();return oI(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:s,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:i,extras:o,resolve:c,reject:l,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(h=>Promise.reject(h))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function uI(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new ze(4008,!1)}function dI(n){return!(n instanceof ka)&&!(n instanceof Ba)}var hI=new ot("");function Cx(n,...e){return pl([{provide:zp,multi:!0,useValue:n},[],{provide:eo,useFactory:fI,deps:[Tx]},{provide:jf,multi:!0,useFactory:pI},e.map(t=>t.\u0275providers)])}function fI(n){return n.routerState.root}function pI(){let n=ue(va);return e=>{let t=n.get(ba);if(e!==t.components[0])return;let i=n.get(Tx),r=n.get(mI);n.get(gI)===1&&i.initialNavigation(),n.get(vI,null,Ze.Optional)?.setUpPreloading(),n.get(hI,null,Ze.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var mI=new ot("",{factory:()=>new Xt}),gI=new ot("",{providedIn:"root",factory:()=>1});var vI=new ot("");var Ax=[];var Dx={providers:[Cx(Ax)]};var Fg="166",fs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ps={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yI=0,Ix=1,_I=2;var xd=1,xI=2,Gi=3,Mr=0,dn=1,Wi=2,_r=0,Eo=1,Rx=2,Px=3,Nx=4,MI=5,is=100,wI=101,SI=102,bI=103,EI=104,TI=200,CI=201,AI=202,DI=203,xm=204,Mm=205,II=206,RI=207,PI=208,NI=209,OI=210,LI=211,FI=212,UI=213,kI=214,BI=0,VI=1,zI=2,Vu=3,HI=4,GI=5,WI=6,jI=7,Ug=0,$I=1,qI=2,xr=0,XI=1,YI=2,ZI=3,KI=4,JI=5,QI=6,e1=7;var Ox=300,Do=301,Io=302,wm=303,Sm=304,Md=306,rc=1e3,ss=1001,bm=1002,Bn=1003,t1=1004;var ou=1005;var ai=1006,Gp=1007;var os=1008;var qi=1009,WM=1010,jM=1011,sc=1012,kg=1013,as=1014,ji=1015,_c=1016,Bg=1017,Vg=1018,Ro=1020,$M=35902,qM=1021,XM=1022,ci=1023,YM=1024,ZM=1025,To=1026,Po=1027,KM=1028,zg=1029,JM=1030,Hg=1031;var Gg=1033,Lu=33776,Fu=33777,Uu=33778,ku=33779,Em=35840,Tm=35841,Cm=35842,Am=35843,Dm=36196,Im=37492,Rm=37496,Pm=37808,Nm=37809,Om=37810,Lm=37811,Fm=37812,Um=37813,km=37814,Bm=37815,Vm=37816,zm=37817,Hm=37818,Gm=37819,Wm=37820,jm=37821,Bu=36492,$m=36494,qm=36495,QM=36283,Xm=36284,Ym=36285,Zm=36286;var zu=2300,Km=2301,Wp=2302,Lx=2400,Fx=2401,Ux=2402;var n1=3200,i1=3201,Wg=0,r1=1,yr="",si="srgb",br="srgb-linear",jg="display-p3",wd="display-p3-linear",Hu="linear",vt="srgb",Gu="rec709",Wu="p3";var io=7680;var kx=519,s1=512,o1=513,a1=514,ew=515,c1=516,l1=517,u1=518,d1=519,Bx=35044;var Vx="300 es",$i=2e3,ju=2001,Ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zx=1234567,Ja=Math.PI/180,No=180/Math.PI;function ms(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function jt(n,e,t){return Math.max(e,Math.min(t,n))}function $g(n,e){return(n%e+e)%e}function h1(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function f1(n,e,t){return n!==e?(t-n)/(e-n):0}function Qa(n,e,t){return(1-t)*n+t*e}function p1(n,e,t,i){return Qa(n,e,1-Math.exp(-t*i))}function m1(n,e=1){return e-Math.abs($g(n,e*2)-e)}function g1(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function v1(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function y1(n,e){return n+Math.floor(Math.random()*(e-n+1))}function _1(n,e){return n+Math.random()*(e-n)}function x1(n){return n*(.5-Math.random())}function M1(n){n!==void 0&&(zx=n);let e=zx+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function w1(n){return n*Ja}function S1(n){return n*No}function b1(n){return(n&n-1)===0&&n!==0}function E1(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function T1(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function C1(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),f=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*d,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Mo(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function cn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Er={DEG2RAD:Ja,RAD2DEG:No,generateUUID:ms,clamp:jt,euclideanModulo:$g,mapLinear:h1,inverseLerp:f1,lerp:Qa,damp:p1,pingpong:m1,smoothstep:g1,smootherstep:v1,randInt:y1,randFloat:_1,randFloatSpread:x1,seededRandom:M1,degToRad:w1,radToDeg:S1,isPowerOfTwo:b1,ceilPowerOfTwo:E1,floorPowerOfTwo:T1,setQuaternionFromProperEuler:C1,normalize:cn,denormalize:Mo},re=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ye=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],v=r[0],m=r[3],p=r[6],C=r[1],M=r[4],E=r[7],O=r[2],D=r[5],A=r[8];return s[0]=o*v+a*C+c*O,s[3]=o*m+a*M+c*D,s[6]=o*p+a*E+c*A,s[1]=l*v+u*C+d*O,s[4]=l*m+u*M+d*D,s[7]=l*p+u*E+d*A,s[2]=h*v+f*C+g*O,s[5]=h*m+f*M+g*D,s[8]=h*p+f*E+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*s,f=l*s-o*c,g=t*d+i*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(r*l-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=f*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(jp.makeScale(e,t)),this}rotate(e){return this.premultiply(jp.makeRotation(-e)),this}translate(e,t){return this.premultiply(jp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},jp=new Ye;function tw(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function oc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function A1(){let n=oc("canvas");return n.style.display="block",n}var Hx={};function nw(n){n in Hx||(Hx[n]=!0,console.warn(n))}function D1(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var Gx=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wx=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),au={[br]:{transfer:Hu,primaries:Gu,toReference:n=>n,fromReference:n=>n},[si]:{transfer:vt,primaries:Gu,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[wd]:{transfer:Hu,primaries:Wu,toReference:n=>n.applyMatrix3(Wx),fromReference:n=>n.applyMatrix3(Gx)},[jg]:{transfer:vt,primaries:Wu,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Wx),fromReference:n=>n.applyMatrix3(Gx).convertLinearToSRGB()}},I1=new Set([br,wd]),ft={enabled:!0,_workingColorSpace:br,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!I1.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=au[e].toReference,r=au[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return au[n].primaries},getTransfer:function(n){return n===yr?Hu:au[n].transfer}};function Co(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $p(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ro,Jm=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ro===void 0&&(ro=oc("canvas")),ro.width=e.width,ro.height=e.height;let i=ro.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ro}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=oc("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Co(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Co(t[i]/255)*255):t[i]=Co(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},R1=0,$u=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:R1++}),this.uuid=ms(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(qp(r[o].image)):s.push(qp(r[o]))}else s=qp(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function qp(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Jm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var P1=0,Tr=(()=>{class n extends Ei{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=ss,s=ss,o=ai,a=os,c=ci,l=qi,u=n.DEFAULT_ANISOTROPY,d=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:P1++}),this.uuid=ms(),this.name="",this.source=new $u(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ox)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rc:t.x=t.x-Math.floor(t.x);break;case ss:t.x=t.x<0?0:1;break;case bm:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rc:t.y=t.y-Math.floor(t.y);break;case ss:t.y=t.y<0?0:1;break;case bm:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=Ox,n.DEFAULT_ANISOTROPY=1,n})(),zt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,E=(f+1)/2,O=(p+1)/2,D=(u+h)/4,A=(d+v)/4,N=(g+m)/4;return M>E&&M>O?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=D/i,s=A/i):E>O?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=D/r,s=N/r):O<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(O),i=A/s,r=N/s),this.set(i,r,s,t),this}let C=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(C)<.001&&(C=1),this.x=(m-g)/C,this.y=(d-v)/C,this.z=(h-u)/C,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qm=class extends Ei{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new Tr(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new $u(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xi=class extends Qm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},qu=class extends Tr{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var eg=class extends Tr{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var li=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],h=s[o+0],f=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(d!==v||c!==h||l!==f||u!==g){let m=1-a,p=c*h+l*f+u*g+d*v,C=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let O=Math.sqrt(M),D=Math.atan2(O,p*C);m=Math.sin(m*D)/O,a=Math.sin(a*D)/O}let E=a*C;if(c=c*m+h*E,l=l*m+f*E,u=u*m+g*E,d=d*m+v*E,m===1-a){let O=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=O,l*=O,u*=O,d*=O}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],h=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*f-l*h,e[t+1]=c*g+u*h+l*d-a*f,e[t+2]=l*g+u*f+a*h-c*d,e[t+3]=u*g-a*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),h=c(i/2),f=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jx.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xp.copy(this).projectOnVector(e),this.sub(Xp)}reflect(e){return this.sub(Xp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xp=new R,jx=new li,cs=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ni):ni.fromBufferAttribute(s,o),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),cu.copy(i.boundingBox)),cu.applyMatrix4(e.matrixWorld),this.union(cu)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($a),lu.subVectors(this.max,$a),so.subVectors(e.a,$a),oo.subVectors(e.b,$a),ao.subVectors(e.c,$a),hr.subVectors(oo,so),fr.subVectors(ao,oo),Zr.subVectors(so,ao);let t=[0,-hr.z,hr.y,0,-fr.z,fr.y,0,-Zr.z,Zr.y,hr.z,0,-hr.x,fr.z,0,-fr.x,Zr.z,0,-Zr.x,-hr.y,hr.x,0,-fr.y,fr.x,0,-Zr.y,Zr.x,0];return!Yp(t,so,oo,ao,lu)||(t=[1,0,0,0,1,0,0,0,1],!Yp(t,so,oo,ao,lu))?!1:(uu.crossVectors(hr,fr),t=[uu.x,uu.y,uu.z],Yp(t,so,oo,ao,lu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ki=[new R,new R,new R,new R,new R,new R,new R,new R],ni=new R,cu=new cs,so=new R,oo=new R,ao=new R,hr=new R,fr=new R,Zr=new R,$a=new R,lu=new R,uu=new R,Kr=new R;function Yp(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Kr.fromArray(n,s);let a=r.x*Math.abs(Kr.x)+r.y*Math.abs(Kr.y)+r.z*Math.abs(Kr.z),c=e.dot(Kr),l=t.dot(Kr),u=i.dot(Kr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var N1=new cs,qa=new R,Zp=new R,Oo=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):N1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qa.subVectors(e,this.center);let t=qa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(qa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qa.copy(e.center).add(Zp)),this.expandByPoint(qa.copy(e.center).sub(Zp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Bi=new R,Kp=new R,du=new R,pr=new R,Jp=new R,hu=new R,Qp=new R,Lo=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,t),Bi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Kp.copy(e).add(t).multiplyScalar(.5),du.copy(t).sub(e).normalize(),pr.copy(this.origin).sub(Kp);let s=e.distanceTo(t)*.5,o=-this.direction.dot(du),a=pr.dot(this.direction),c=-pr.dot(du),l=pr.lengthSq(),u=Math.abs(1-o*o),d,h,f,g;if(u>0)if(d=o*c-a,h=o*a-c,g=s*u,d>=0)if(h>=-g)if(h<=g){let v=1/u;d*=v,h*=v,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Kp).addScaledVector(du,h),f}intersectSphere(e,t){Bi.subVectors(e.center,this.origin);let i=Bi.dot(this.direction),r=Bi.dot(Bi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,t,i,r,s){Jp.subVectors(t,e),hu.subVectors(i,e),Qp.crossVectors(Jp,hu);let o=this.direction.dot(Qp),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pr.subVectors(this.origin,e);let c=a*this.direction.dot(hu.crossVectors(pr,hu));if(c<0)return null;let l=a*this.direction.dot(Jp.cross(pr));if(l<0||c+l>o)return null;let u=-a*pr.dot(Qp);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ct=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,h,f,g,v,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,h,f,g,v,m)}set(e,t,i,r,s,o,a,c,l,u,d,h,f,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/co.setFromMatrixColumn(e,0).length(),s=1/co.setFromMatrixColumn(e,1).length(),o=1/co.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=o*u,f=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=h-v*l,t[9]=-a*c,t[2]=v-h*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let h=c*u,f=c*d,g=l*u,v=l*d;t[0]=h+v*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=v+h*a,t[10]=o*c}else if(e.order==="ZXY"){let h=c*u,f=c*d,g=l*u,v=l*d;t[0]=h-v*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let h=o*u,f=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=g*l-f,t[8]=h*l+v,t[1]=c*d,t[5]=v*l+h,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let h=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-h*d,t[8]=g*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*d+g,t[10]=h-v*d}else if(e.order==="XZY"){let h=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+v,t[5]=o*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(O1,e,L1)}lookAt(e,t,i){let r=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),mr.crossVectors(i,En),mr.lengthSq()===0&&(Math.abs(i.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),mr.crossVectors(i,En)),mr.normalize(),fu.crossVectors(En,mr),r[0]=mr.x,r[4]=fu.x,r[8]=En.x,r[1]=mr.y,r[5]=fu.y,r[9]=En.y,r[2]=mr.z,r[6]=fu.z,r[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],C=i[3],M=i[7],E=i[11],O=i[15],D=r[0],A=r[4],N=r[8],S=r[12],x=r[1],I=r[5],H=r[9],U=r[13],j=r[2],q=r[6],G=r[10],Z=r[14],$=r[3],fe=r[7],ye=r[11],ge=r[15];return s[0]=o*D+a*x+c*j+l*$,s[4]=o*A+a*I+c*q+l*fe,s[8]=o*N+a*H+c*G+l*ye,s[12]=o*S+a*U+c*Z+l*ge,s[1]=u*D+d*x+h*j+f*$,s[5]=u*A+d*I+h*q+f*fe,s[9]=u*N+d*H+h*G+f*ye,s[13]=u*S+d*U+h*Z+f*ge,s[2]=g*D+v*x+m*j+p*$,s[6]=g*A+v*I+m*q+p*fe,s[10]=g*N+v*H+m*G+p*ye,s[14]=g*S+v*U+m*Z+p*ge,s[3]=C*D+M*x+E*j+O*$,s[7]=C*A+M*I+E*q+O*fe,s[11]=C*N+M*H+E*G+O*ye,s[15]=C*S+M*U+E*Z+O*ge,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*c*d-r*l*d-s*a*h+i*l*h+r*a*f-i*c*f)+v*(+t*c*f-t*l*h+s*o*h-r*o*f+r*l*u-s*c*u)+m*(+t*l*d-t*a*f-s*o*d+i*o*f+s*a*u-i*l*u)+p*(-r*a*u-t*c*d+t*a*h+r*o*d-i*o*h+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],C=d*m*l-v*h*l+v*c*f-a*m*f-d*c*p+a*h*p,M=g*h*l-u*m*l-g*c*f+o*m*f+u*c*p-o*h*p,E=u*v*l-g*d*l+g*a*f-o*v*f-u*a*p+o*d*p,O=g*d*c-u*v*c-g*a*h+o*v*h+u*a*m-o*d*m,D=t*C+i*M+r*E+s*O;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/D;return e[0]=C*A,e[1]=(v*h*s-d*m*s-v*r*f+i*m*f+d*r*p-i*h*p)*A,e[2]=(a*m*s-v*c*s+v*r*l-i*m*l-a*r*p+i*c*p)*A,e[3]=(d*c*s-a*h*s-d*r*l+i*h*l+a*r*f-i*c*f)*A,e[4]=M*A,e[5]=(u*m*s-g*h*s+g*r*f-t*m*f-u*r*p+t*h*p)*A,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*p-t*c*p)*A,e[7]=(o*h*s-u*c*s+u*r*l-t*h*l-o*r*f+t*c*f)*A,e[8]=E*A,e[9]=(g*d*s-u*v*s-g*i*f+t*v*f+u*i*p-t*d*p)*A,e[10]=(o*v*s-g*a*s+g*i*l-t*v*l-o*i*p+t*a*p)*A,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*f-t*a*f)*A,e[12]=O*A,e[13]=(u*v*r-g*d*r+g*i*h-t*v*h-u*i*m+t*d*m)*A,e[14]=(g*a*r-o*v*r-g*i*c+t*v*c+o*i*m-t*a*m)*A,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*h+t*a*h)*A,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,h=s*l,f=s*u,g=s*d,v=o*u,m=o*d,p=a*d,C=c*l,M=c*u,E=c*d,O=i.x,D=i.y,A=i.z;return r[0]=(1-(v+p))*O,r[1]=(f+E)*O,r[2]=(g-M)*O,r[3]=0,r[4]=(f-E)*D,r[5]=(1-(h+p))*D,r[6]=(m+C)*D,r[7]=0,r[8]=(g+M)*A,r[9]=(m-C)*A,r[10]=(1-(h+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=co.set(r[0],r[1],r[2]).length(),o=co.set(r[4],r[5],r[6]).length(),a=co.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ii.copy(this);let l=1/s,u=1/o,d=1/a;return ii.elements[0]*=l,ii.elements[1]*=l,ii.elements[2]*=l,ii.elements[4]*=u,ii.elements[5]*=u,ii.elements[6]*=u,ii.elements[8]*=d,ii.elements[9]*=d,ii.elements[10]*=d,t.setFromRotationMatrix(ii),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=$i){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r),f,g;if(a===$i)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ju)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=$i){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),h=(t+e)*l,f=(i+r)*u,g,v;if(a===$i)g=(o+s)*d,v=-2*d;else if(a===ju)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},co=new R,ii=new Ct,O1=new R(0,0,0),L1=new R(1,1,1),mr=new R,fu=new R,En=new R,$x=new Ct,qx=new li,wr=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],h=s[2],f=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return $x.makeRotationFromQuaternion(t),this.setFromRotationMatrix($x,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return qx.setFromEuler(this),this.setFromQuaternion(qx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),Xu=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},F1=0,Xx=new R,lo=new li,Vi=new Ct,pu=new R,Xa=new R,U1=new R,k1=new li,Yx=new R(1,0,0),Zx=new R(0,1,0),Kx=new R(0,0,1),Jx={type:"added"},B1={type:"removed"},uo={type:"childadded",child:null},em={type:"childremoved",child:null},fn=(()=>{class n extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:F1++}),this.uuid=ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new R,i=new wr,r=new li,s=new R(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Ye}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return lo.setFromAxisAngle(t,i),this.quaternion.multiply(lo),this}rotateOnWorldAxis(t,i){return lo.setFromAxisAngle(t,i),this.quaternion.premultiply(lo),this}rotateX(t){return this.rotateOnAxis(Yx,t)}rotateY(t){return this.rotateOnAxis(Zx,t)}rotateZ(t){return this.rotateOnAxis(Kx,t)}translateOnAxis(t,i){return Xx.copy(t).applyQuaternion(this.quaternion),this.position.add(Xx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Yx,t)}translateY(t){return this.translateOnAxis(Zx,t)}translateZ(t){return this.translateOnAxis(Kx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?pu.copy(t):pu.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),Xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Xa,pu,this.up):Vi.lookAt(pu,Xa,this.up),this.quaternion.setFromRotationMatrix(Vi),s&&(Vi.extractRotation(s.matrixWorld),lo.setFromRotationMatrix(Vi),this.quaternion.premultiply(lo.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jx),uo.child=t,this.dispatchEvent(uo),uo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(B1),em.child=t,this.dispatchEvent(em),em.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jx),uo.child=t,this.dispatchEvent(uo),uo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,t,U1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,k1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let h=l[u];o(t.shapes,h)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),h=a(t.shapes),f=a(t.skeletons),g=a(t.animations),v=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),h.length>0&&(r.shapes=h),f.length>0&&(r.skeletons=f),g.length>0&&(r.animations=g),v.length>0&&(r.nodes=v)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new R(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),ri=new R,zi=new R,tm=new R,Hi=new R,ho=new R,fo=new R,Qx=new R,nm=new R,im=new R,rm=new R,wo=class n{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ri.subVectors(e,t),r.cross(ri);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ri.subVectors(r,t),zi.subVectors(i,t),tm.subVectors(e,t);let o=ri.dot(ri),a=ri.dot(zi),c=ri.dot(tm),l=zi.dot(zi),u=zi.dot(tm),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let h=1/d,f=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Hi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Hi.x),c.addScaledVector(o,Hi.y),c.addScaledVector(a,Hi.z),c)}static isFrontFacing(e,t,i,r){return ri.subVectors(i,t),zi.subVectors(e,t),ri.cross(zi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),ri.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;ho.subVectors(r,i),fo.subVectors(s,i),nm.subVectors(e,i);let c=ho.dot(nm),l=fo.dot(nm);if(c<=0&&l<=0)return t.copy(i);im.subVectors(e,r);let u=ho.dot(im),d=fo.dot(im);if(u>=0&&d<=u)return t.copy(r);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(ho,o);rm.subVectors(e,s);let f=ho.dot(rm),g=fo.dot(rm);if(g>=0&&f<=g)return t.copy(s);let v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(fo,a);let m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Qx.subVectors(s,r),a=(d-u)/(d-u+(f-g)),t.copy(r).addScaledVector(Qx,a);let p=1/(m+v+h);return o=v*p,a=h*p,t.copy(i).addScaledVector(ho,o).addScaledVector(fo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},iw={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},mu={h:0,s:0,l:0};function sm(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Je=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,ft.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ft.workingColorSpace){if(e=$g(e,1),t=jt(t,0,1),i=jt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=sm(o,s,e+1/3),this.g=sm(o,s,e),this.b=sm(o,s,e-1/3)}return ft.toWorkingColorSpace(this,r),this}setStyle(e,t=si){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=si){let i=iw[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Co(e.r),this.g=Co(e.g),this.b=Co(e.b),this}copyLinearToSRGB(e){return this.r=$p(e.r),this.g=$p(e.g),this.b=$p(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return ft.fromWorkingColorSpace(nn.copy(this),e),Math.round(jt(nn.r*255,0,255))*65536+Math.round(jt(nn.g*255,0,255))*256+Math.round(jt(nn.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(nn.copy(this),t);let i=nn.r,r=nn.g,s=nn.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=si){ft.fromWorkingColorSpace(nn.copy(this),e);let t=nn.r,i=nn.g,r=nn.b;return e!==si?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+t,gr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(gr),e.getHSL(mu);let i=Qa(gr.h,mu.h,t),r=Qa(gr.s,mu.s,t),s=Qa(gr.l,mu.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new Je;Je.NAMES=iw;var V1=0,Yi=class extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:V1++}),this.uuid=ms(),this.name="",this.type="Material",this.blending=Eo,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xm,this.blendDst=Mm,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Vu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=io,this.stencilZFail=io,this.stencilZPass=io,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Eo&&(i.blending=this.blending),this.side!==Mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xm&&(i.blendSrc=this.blendSrc),this.blendDst!==Mm&&(i.blendDst=this.blendDst),this.blendEquation!==is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kx&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==io&&(i.stencilFail=this.stencilFail),this.stencilZFail!==io&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==io&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}},Sr=class extends Yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wr,this.combine=Ug,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Lt=new R,gu=new re,hn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Bx,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return nw("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)gu.fromBufferAttribute(this,t),gu.applyMatrix3(e),this.setXY(t,gu.x,gu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Mo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=cn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mo(t,this.array)),t}setX(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mo(t,this.array)),t}setY(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mo(t,this.array)),t}setW(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array),r=cn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array),r=cn(r,this.array),s=cn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bx&&(e.usage=this.usage),e}};var Yu=class extends hn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Zu=class extends hn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var wt=class extends hn{constructor(e,t,i){super(new Float32Array(e),t,i)}},z1=0,kn=new Ct,om=new fn,po=new R,Tn=new cs,Ya=new cs,Wt=new R,sn=class n extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z1++}),this.uuid=ms(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tw(e)?Zu:Yu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,i){return kn.makeTranslation(e,t,i),this.applyMatrix4(kn),this}scale(e,t,i){return kn.makeScale(e,t,i),this.applyMatrix4(kn),this}lookAt(e){return om.lookAt(e),om.updateMatrix(),this.applyMatrix4(om.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(po).negate(),this.translate(po.x,po.y,po.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new wt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oo);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Ya.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(Tn.min,Ya.min),Tn.expandByPoint(Wt),Wt.addVectors(Tn.max,Ya.max),Tn.expandByPoint(Wt)):(Tn.expandByPoint(Ya.min),Tn.expandByPoint(Ya.max))}Tn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Wt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Wt.fromBufferAttribute(a,l),c&&(po.fromBufferAttribute(e,l),Wt.add(po)),r=Math.max(r,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<i.count;N++)a[N]=new R,c[N]=new R;let l=new R,u=new R,d=new R,h=new re,f=new re,g=new re,v=new R,m=new R;function p(N,S,x){l.fromBufferAttribute(i,N),u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,x),h.fromBufferAttribute(s,N),f.fromBufferAttribute(s,S),g.fromBufferAttribute(s,x),u.sub(l),d.sub(l),f.sub(h),g.sub(h);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(I),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(I),a[N].add(v),a[S].add(v),a[x].add(v),c[N].add(m),c[S].add(m),c[x].add(m))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let N=0,S=C.length;N<S;++N){let x=C[N],I=x.start,H=x.count;for(let U=I,j=I+H;U<j;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let M=new R,E=new R,O=new R,D=new R;function A(N){O.fromBufferAttribute(r,N),D.copy(O);let S=a[N];M.copy(S),M.sub(O.multiplyScalar(O.dot(S))).normalize(),E.crossVectors(D,S);let I=E.dot(c[N])<0?-1:1;o.setXYZW(N,M.x,M.y,M.z,I)}for(let N=0,S=C.length;N<S;++N){let x=C[N],I=x.start,H=x.count;for(let U=I,j=I+H;U<j;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let r=new R,s=new R,o=new R,a=new R,c=new R,l=new R,u=new R,d=new R;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u),f=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new hn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let h=l[u],f=e(h,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},eM=new Ct,Jr=new Lo,vu=new Oo,tM=new R,mo=new R,go=new R,vo=new R,am=new R,yu=new R,_u=new re,xu=new re,Mu=new re,nM=new R,iM=new R,rM=new R,wu=new R,Su=new R,Mt=class extends fn{constructor(e=new sn,t=new Sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){yu.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(am.fromBufferAttribute(d,e),o?yu.addScaledVector(am,u):yu.addScaledVector(am.sub(t),u))}t.add(yu)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vu.copy(i.boundingSphere),vu.applyMatrix4(s),Jr.copy(e.ray).recast(e.near),!(vu.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(vu,tM)===null||Jr.origin.distanceToSquared(tM)>(e.far-e.near)**2))&&(eM.copy(s).invert(),Jr.copy(e.ray).applyMatrix4(eM),!(i.boundingBox!==null&&Jr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Jr)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let m=h[g],p=o[m.materialIndex],C=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let E=C,O=M;E<O;E+=3){let D=a.getX(E),A=a.getX(E+1),N=a.getX(E+2);r=bu(this,p,e,i,l,u,d,D,A,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let C=a.getX(m),M=a.getX(m+1),E=a.getX(m+2);r=bu(this,o,e,i,l,u,d,C,M,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let m=h[g],p=o[m.materialIndex],C=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let E=C,O=M;E<O;E+=3){let D=E,A=E+1,N=E+2;r=bu(this,p,e,i,l,u,d,D,A,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let C=m,M=m+1,E=m+2;r=bu(this,o,e,i,l,u,d,C,M,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function H1(n,e,t,i,r,s,o,a){let c;if(e.side===dn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Mr,a),c===null)return null;Su.copy(a),Su.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Su);return l<t.near||l>t.far?null:{distance:l,point:Su.clone(),object:n}}function bu(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,mo),n.getVertexPosition(c,go),n.getVertexPosition(l,vo);let u=H1(n,e,t,i,mo,go,vo,wu);if(u){r&&(_u.fromBufferAttribute(r,a),xu.fromBufferAttribute(r,c),Mu.fromBufferAttribute(r,l),u.uv=wo.getInterpolation(wu,mo,go,vo,_u,xu,Mu,new re)),s&&(_u.fromBufferAttribute(s,a),xu.fromBufferAttribute(s,c),Mu.fromBufferAttribute(s,l),u.uv1=wo.getInterpolation(wu,mo,go,vo,_u,xu,Mu,new re)),o&&(nM.fromBufferAttribute(o,a),iM.fromBufferAttribute(o,c),rM.fromBufferAttribute(o,l),u.normal=wo.getInterpolation(wu,mo,go,vo,nM,iM,rM,new R),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new R,materialIndex:0};wo.getNormal(mo,go,vo,d.normal),u.face=d}return u}var zn=class n extends sn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new wt(l,3)),this.setAttribute("normal",new wt(u,3)),this.setAttribute("uv",new wt(d,2));function g(v,m,p,C,M,E,O,D,A,N,S){let x=E/A,I=O/N,H=E/2,U=O/2,j=D/2,q=A+1,G=N+1,Z=0,$=0,fe=new R;for(let ye=0;ye<G;ye++){let ge=ye*I-U;for(let $e=0;$e<q;$e++){let nt=$e*x-H;fe[v]=nt*C,fe[m]=ge*M,fe[p]=j,l.push(fe.x,fe.y,fe.z),fe[v]=0,fe[m]=0,fe[p]=D>0?1:-1,u.push(fe.x,fe.y,fe.z),d.push($e/A),d.push(1-ye/N),Z+=1}}for(let ye=0;ye<N;ye++)for(let ge=0;ge<A;ge++){let $e=h+ge+q*ye,nt=h+ge+q*(ye+1),X=h+(ge+1)+q*(ye+1),ne=h+(ge+1)+q*ye;c.push($e,nt,ne),c.push(nt,X,ne),$+=6}a.addGroup(f,$,S),f+=$,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Fo(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ln(n){let e={};for(let t=0;t<n.length;t++){let i=Fo(n[t]);for(let r in i)e[r]=i[r]}return e}function G1(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function rw(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var W1={clone:Fo,merge:ln},j1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ti=class extends Yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=j1,this.fragmentShader=$1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fo(e.uniforms),this.uniformsGroups=G1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ku=class extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=$i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},vr=new R,sM=new re,oM=new re,rn=class extends Ku{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=No*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ja*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return No*2*Math.atan(Math.tan(Ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,t){return this.getViewBounds(e,sM,oM),t.subVectors(oM,sM)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ja*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},yo=-90,_o=1,tg=class extends fn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new rn(yo,_o,e,t);r.layers=this.layers,this.add(r);let s=new rn(yo,_o,e,t);s.layers=this.layers,this.add(s);let o=new rn(yo,_o,e,t);o.layers=this.layers,this.add(o);let a=new rn(yo,_o,e,t);a.layers=this.layers,this.add(a);let c=new rn(yo,_o,e,t);c.layers=this.layers,this.add(c);let l=new rn(yo,_o,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===$i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ju)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ac=class extends Tr{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Do,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ng=class extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ac(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ai}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new zn(5,5,5),s=new Ti({name:"CubemapFromEquirect",uniforms:Fo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:_r});s.uniforms.tEquirect.value=t;let o=new Mt(r,s),a=t.minFilter;return t.minFilter===os&&(t.minFilter=ai),new tg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},cm=new R,q1=new R,X1=new Ye,oi=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=cm.subVectors(i,t).cross(q1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(cm),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||X1.getNormalMatrix(e),r=this.coplanarPoint(cm).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Qr=new Oo,Eu=new R,cc=class{constructor(e=new oi,t=new oi,i=new oi,r=new oi,s=new oi,o=new oi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=$i){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],h=r[7],f=r[8],g=r[9],v=r[10],m=r[11],p=r[12],C=r[13],M=r[14],E=r[15];if(i[0].setComponents(c-s,h-l,m-f,E-p).normalize(),i[1].setComponents(c+s,h+l,m+f,E+p).normalize(),i[2].setComponents(c+o,h+u,m+g,E+C).normalize(),i[3].setComponents(c-o,h-u,m-g,E-C).normalize(),i[4].setComponents(c-a,h-d,m-v,E-M).normalize(),t===$i)i[5].setComponents(c+a,h+d,m+v,E+M).normalize();else if(t===ju)i[5].setComponents(a,d,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qr)}intersectsSprite(e){return Qr.center.set(0,0,0),Qr.radius=.7071067811865476,Qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Eu.x=r.normal.x>0?e.max.x:e.min.x,Eu.y=r.normal.y>0?e.max.y:e.min.y,Eu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Eu)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function sw(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Y1(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c._updateRange,h=c.updateRanges;if(n.bindBuffer(l,a),d.count===-1&&h.length===0&&n.bufferSubData(l,0,u),h.length!==0){for(let f=0,g=h.length;f<g;f++){let v=h[f];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(l,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Uo=class n extends sn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,h=t/c,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){let C=p*h-o;for(let M=0;M<l;M++){let E=M*d-s;g.push(E,-C,0),v.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let C=0;C<a;C++){let M=C+l*p,E=C+l*(p+1),O=C+1+l*(p+1),D=C+1+l*p;f.push(M,E,D),f.push(E,O,D)}this.setIndex(f),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(v,3)),this.setAttribute("uv",new wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Z1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,K1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,J1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Q1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_R=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,MR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ER=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TR="gl_FragColor = linearToOutputTexel( gl_FragColor );",CR=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,AR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,DR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,IR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,RR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,NR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,FR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,BR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,VR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,HR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,GR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$R=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,XR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,YR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ZR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,KR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eP=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tP=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sP=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lP=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dP=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pP=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_P=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,MP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,SP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,EP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,PP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,NP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,OP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,LP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,UP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,BP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,GP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,WP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$P=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,XP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,YP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZP=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nN=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,iN=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rN=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aN=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cN=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uN=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dN=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hN=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fN=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pN=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mN=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gN=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vN=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yN=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_N=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xN=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MN=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wN=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SN=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EN=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TN=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,CN=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:Z1,alphahash_pars_fragment:K1,alphamap_fragment:J1,alphamap_pars_fragment:Q1,alphatest_fragment:eR,alphatest_pars_fragment:tR,aomap_fragment:nR,aomap_pars_fragment:iR,batching_pars_vertex:rR,batching_vertex:sR,begin_vertex:oR,beginnormal_vertex:aR,bsdfs:cR,iridescence_fragment:lR,bumpmap_pars_fragment:uR,clipping_planes_fragment:dR,clipping_planes_pars_fragment:hR,clipping_planes_pars_vertex:fR,clipping_planes_vertex:pR,color_fragment:mR,color_pars_fragment:gR,color_pars_vertex:vR,color_vertex:yR,common:_R,cube_uv_reflection_fragment:xR,defaultnormal_vertex:MR,displacementmap_pars_vertex:wR,displacementmap_vertex:SR,emissivemap_fragment:bR,emissivemap_pars_fragment:ER,colorspace_fragment:TR,colorspace_pars_fragment:CR,envmap_fragment:AR,envmap_common_pars_fragment:DR,envmap_pars_fragment:IR,envmap_pars_vertex:RR,envmap_physical_pars_fragment:HR,envmap_vertex:PR,fog_vertex:NR,fog_pars_vertex:OR,fog_fragment:LR,fog_pars_fragment:FR,gradientmap_pars_fragment:UR,lightmap_pars_fragment:kR,lights_lambert_fragment:BR,lights_lambert_pars_fragment:VR,lights_pars_begin:zR,lights_toon_fragment:GR,lights_toon_pars_fragment:WR,lights_phong_fragment:jR,lights_phong_pars_fragment:$R,lights_physical_fragment:qR,lights_physical_pars_fragment:XR,lights_fragment_begin:YR,lights_fragment_maps:ZR,lights_fragment_end:KR,logdepthbuf_fragment:JR,logdepthbuf_pars_fragment:QR,logdepthbuf_pars_vertex:eP,logdepthbuf_vertex:tP,map_fragment:nP,map_pars_fragment:iP,map_particle_fragment:rP,map_particle_pars_fragment:sP,metalnessmap_fragment:oP,metalnessmap_pars_fragment:aP,morphinstance_vertex:cP,morphcolor_vertex:lP,morphnormal_vertex:uP,morphtarget_pars_vertex:dP,morphtarget_vertex:hP,normal_fragment_begin:fP,normal_fragment_maps:pP,normal_pars_fragment:mP,normal_pars_vertex:gP,normal_vertex:vP,normalmap_pars_fragment:yP,clearcoat_normal_fragment_begin:_P,clearcoat_normal_fragment_maps:xP,clearcoat_pars_fragment:MP,iridescence_pars_fragment:wP,opaque_fragment:SP,packing:bP,premultiplied_alpha_fragment:EP,project_vertex:TP,dithering_fragment:CP,dithering_pars_fragment:AP,roughnessmap_fragment:DP,roughnessmap_pars_fragment:IP,shadowmap_pars_fragment:RP,shadowmap_pars_vertex:PP,shadowmap_vertex:NP,shadowmask_pars_fragment:OP,skinbase_vertex:LP,skinning_pars_vertex:FP,skinning_vertex:UP,skinnormal_vertex:kP,specularmap_fragment:BP,specularmap_pars_fragment:VP,tonemapping_fragment:zP,tonemapping_pars_fragment:HP,transmission_fragment:GP,transmission_pars_fragment:WP,uv_pars_fragment:jP,uv_pars_vertex:$P,uv_vertex:qP,worldpos_vertex:XP,background_vert:YP,background_frag:ZP,backgroundCube_vert:KP,backgroundCube_frag:JP,cube_vert:QP,cube_frag:eN,depth_vert:tN,depth_frag:nN,distanceRGBA_vert:iN,distanceRGBA_frag:rN,equirect_vert:sN,equirect_frag:oN,linedashed_vert:aN,linedashed_frag:cN,meshbasic_vert:lN,meshbasic_frag:uN,meshlambert_vert:dN,meshlambert_frag:hN,meshmatcap_vert:fN,meshmatcap_frag:pN,meshnormal_vert:mN,meshnormal_frag:gN,meshphong_vert:vN,meshphong_frag:yN,meshphysical_vert:_N,meshphysical_frag:xN,meshtoon_vert:MN,meshtoon_frag:wN,points_vert:SN,points_frag:bN,shadow_vert:EN,shadow_frag:TN,sprite_vert:CN,sprite_frag:AN},he={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},bi={basic:{uniforms:ln([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:ln([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Je(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:ln([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:ln([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:ln([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Je(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:ln([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:ln([he.points,he.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:ln([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:ln([he.common,he.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:ln([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:ln([he.sprite,he.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:ln([he.common,he.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:ln([he.lights,he.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};bi.physical={uniforms:ln([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var Tu={r:0,b:0,g:0},es=new wr,DN=new Ct;function IN(n,e,t,i,r,s,o){let a=new Je(0),c=s===!0?0:1,l,u,d=null,h=0,f=null;function g(C){let M=C.isScene===!0?C.background:null;return M&&M.isTexture&&(M=(C.backgroundBlurriness>0?t:e).get(M)),M}function v(C){let M=!1,E=g(C);E===null?p(a,c):E&&E.isColor&&(p(E,1),M=!0);let O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(C,M){let E=g(M);E&&(E.isCubeTexture||E.mapping===Md)?(u===void 0&&(u=new Mt(new zn(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:Fo(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,D,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),es.copy(M.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(DN.makeRotationFromEuler(es)),u.material.toneMapped=ft.getTransfer(E.colorSpace)!==vt,(d!==E||h!==E.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=E,h=E.version,f=n.toneMapping),u.layers.enableAll(),C.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Mt(new Uo(2,2),new Ti({name:"BackgroundMaterial",uniforms:Fo(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ft.getTransfer(E.colorSpace)!==vt,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||h!==E.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=E,h=E.version,f=n.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null))}function p(C,M){C.getRGB(Tu,rw(n)),i.buffers.color.setClear(Tu.r,Tu.g,Tu.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(C,M=1){a.set(C),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(C){c=C,p(a,c)},render:v,addToRenderList:m}}function RN(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null),s=r,o=!1;function a(x,I,H,U,j){let q=!1,G=d(U,H,I);s!==G&&(s=G,l(s.object)),q=f(x,U,H,j),q&&g(x,U,H,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,E(x,I,H,U),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function d(x,I,H){let U=H.wireframe===!0,j=i[x.id];j===void 0&&(j={},i[x.id]=j);let q=j[I.id];q===void 0&&(q={},j[I.id]=q);let G=q[U];return G===void 0&&(G=h(c()),q[U]=G),G}function h(x){let I=[],H=[],U=[];for(let j=0;j<t;j++)I[j]=0,H[j]=0,U[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:H,attributeDivisors:U,object:x,attributes:{},index:null}}function f(x,I,H,U){let j=s.attributes,q=I.attributes,G=0,Z=H.getAttributes();for(let $ in Z)if(Z[$].location>=0){let ye=j[$],ge=q[$];if(ge===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(ge=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(ge=x.instanceColor)),ye===void 0||ye.attribute!==ge||ge&&ye.data!==ge.data)return!0;G++}return s.attributesNum!==G||s.index!==U}function g(x,I,H,U){let j={},q=I.attributes,G=0,Z=H.getAttributes();for(let $ in Z)if(Z[$].location>=0){let ye=q[$];ye===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(ye=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(ye=x.instanceColor));let ge={};ge.attribute=ye,ye&&ye.data&&(ge.data=ye.data),j[$]=ge,G++}s.attributes=j,s.attributesNum=G,s.index=U}function v(){let x=s.newAttributes;for(let I=0,H=x.length;I<H;I++)x[I]=0}function m(x){p(x,0)}function p(x,I){let H=s.newAttributes,U=s.enabledAttributes,j=s.attributeDivisors;H[x]=1,U[x]===0&&(n.enableVertexAttribArray(x),U[x]=1),j[x]!==I&&(n.vertexAttribDivisor(x,I),j[x]=I)}function C(){let x=s.newAttributes,I=s.enabledAttributes;for(let H=0,U=I.length;H<U;H++)I[H]!==x[H]&&(n.disableVertexAttribArray(H),I[H]=0)}function M(x,I,H,U,j,q,G){G===!0?n.vertexAttribIPointer(x,I,H,j,q):n.vertexAttribPointer(x,I,H,U,j,q)}function E(x,I,H,U){v();let j=U.attributes,q=H.getAttributes(),G=I.defaultAttributeValues;for(let Z in q){let $=q[Z];if($.location>=0){let fe=j[Z];if(fe===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(fe=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(fe=x.instanceColor)),fe!==void 0){let ye=fe.normalized,ge=fe.itemSize,$e=e.get(fe);if($e===void 0)continue;let nt=$e.buffer,X=$e.type,ne=$e.bytesPerElement,xe=X===n.INT||X===n.UNSIGNED_INT||fe.gpuType===kg;if(fe.isInterleavedBufferAttribute){let ce=fe.data,Pe=ce.stride,He=fe.offset;if(ce.isInstancedInterleavedBuffer){for(let Ie=0;Ie<$.locationSize;Ie++)p($.location+Ie,ce.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ie=0;Ie<$.locationSize;Ie++)m($.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let Ie=0;Ie<$.locationSize;Ie++)M($.location+Ie,ge/$.locationSize,X,ye,Pe*ne,(He+ge/$.locationSize*Ie)*ne,xe)}else{if(fe.isInstancedBufferAttribute){for(let ce=0;ce<$.locationSize;ce++)p($.location+ce,fe.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ce=0;ce<$.locationSize;ce++)m($.location+ce);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let ce=0;ce<$.locationSize;ce++)M($.location+ce,ge/$.locationSize,X,ye,ge*ne,ge/$.locationSize*ce*ne,xe)}}else if(G!==void 0){let ye=G[Z];if(ye!==void 0)switch(ye.length){case 2:n.vertexAttrib2fv($.location,ye);break;case 3:n.vertexAttrib3fv($.location,ye);break;case 4:n.vertexAttrib4fv($.location,ye);break;default:n.vertexAttrib1fv($.location,ye)}}}}C()}function O(){N();for(let x in i){let I=i[x];for(let H in I){let U=I[H];for(let j in U)u(U[j].object),delete U[j];delete I[H]}delete i[x]}}function D(x){if(i[x.id]===void 0)return;let I=i[x.id];for(let H in I){let U=I[H];for(let j in U)u(U[j].object),delete U[j];delete I[H]}delete i[x.id]}function A(x){for(let I in i){let H=i[I];if(H[x.id]===void 0)continue;let U=H[x.id];for(let j in U)u(U[j].object),delete U[j];delete H[x.id]}}function N(){S(),o=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:S,dispose:O,releaseStatesOfGeometry:D,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:C}}function PN(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,i,1)}function c(l,u,d,h){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];for(let v=0;v<h.length;v++)t.update(g,i,h[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function NN(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==ci&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let A=D===_c&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==qi&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==ji&&!A)}function c(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=f>0,O=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:p,maxVaryings:C,maxFragmentUniforms:M,vertexTextures:E,maxSamples:O}}function ON(n){let e=this,t=null,i=0,r=!1,s=!1,o=new oi,a=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||r;return r=h,i=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let C=s?0:i,M=C*4,E=p.clippingState||null;c.value=E,E=u(g,h,M,f);for(let O=0;O!==M;++O)E[O]=t[O];p.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=C}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=f+v*4,C=h.matrixWorldInverse;a.getNormalMatrix(C),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,E=f;M!==v;++M,E+=4)o.copy(d[M]).applyMatrix4(C,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function LN(n){let e=new WeakMap;function t(o,a){return a===wm?o.mapping=Do:a===Sm&&(o.mapping=Io),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===wm||a===Sm)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new ng(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Ju=class extends Ku{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},So=4,aM=[.125,.215,.35,.446,.526,.582],rs=20,lm=new Ju,cM=new Je,um=null,dm=0,hm=0,fm=!1,ns=(1+Math.sqrt(5))/2,xo=1/ns,lM=[new R(-ns,xo,0),new R(ns,xo,0),new R(-xo,0,ns),new R(xo,0,ns),new R(0,ns,-xo),new R(0,ns,xo),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Qu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){um=this._renderer.getRenderTarget(),dm=this._renderer.getActiveCubeFace(),hm=this._renderer.getActiveMipmapLevel(),fm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(um,dm,hm),this._renderer.xr.enabled=fm,e.scissorTest=!1,Cu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Do||e.mapping===Io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),um=this._renderer.getRenderTarget(),dm=this._renderer.getActiveCubeFace(),hm=this._renderer.getActiveMipmapLevel(),fm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:_c,format:ci,colorSpace:br,depthBuffer:!1},r=uM(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uM(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FN(s)),this._blurMaterial=UN(s,e,t)}return r}_compileMaterial(e){let t=new Mt(this._lodPlanes[0],e);this._renderer.compile(t,lm)}_sceneToCubeUV(e,t,i,r){let a=new rn(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(cM),u.toneMapping=xr,u.autoClear=!1;let f=new Sr({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),g=new Mt(new zn,f),v=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(cM),v=!0);for(let p=0;p<6;p++){let C=p%3;C===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):C===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let M=this._cubeSize;Cu(r,C*M,p>2?M:0,M,M),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Do||e.mapping===Io;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hM()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dM());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Mt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;Cu(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,lm)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=lM[(r-s-1)%lM.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Mt(this._lodPlanes[r],l),h=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*rs-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):rs;m>rs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rs}`);let p=[],C=0;for(let A=0;A<rs;++A){let N=A/v,S=Math.exp(-N*N/2);p.push(S),A===0?C+=S:A<m&&(C+=2*S)}for(let A=0;A<p.length;A++)p[A]=p[A]/C;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-i;let E=this._sizeLods[r],O=3*E*(r>M-So?r-M+So:0),D=4*(this._cubeSize-E);Cu(t,O,D,3*E,2*E),c.setRenderTarget(t),c.render(d,lm)}};function FN(n){let e=[],t=[],i=[],r=n,s=n-So+1+aM.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-So?c=aM[o-n+So-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,v=3,m=2,p=1,C=new Float32Array(v*g*f),M=new Float32Array(m*g*f),E=new Float32Array(p*g*f);for(let D=0;D<f;D++){let A=D%3*2/3-1,N=D>2?0:-1,S=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];C.set(S,v*g*D),M.set(h,m*g*D);let x=[D,D,D,D,D,D];E.set(x,p*g*D)}let O=new sn;O.setAttribute("position",new hn(C,v)),O.setAttribute("uv",new hn(M,m)),O.setAttribute("faceIndex",new hn(E,p)),e.push(O),r>So&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function uM(n,e,t){let i=new Xi(n,e,t);return i.texture.mapping=Md,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cu(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function UN(n,e,t){let i=new Float32Array(rs),r=new R(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function dM(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function hM(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function qg(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kN(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===wm||c===Sm,u=c===Do||c===Io;if(l||u){let d=e.get(a),h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Qu(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new Qu(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function BN(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&nw("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function VN(n,e,t,i){let r={},s=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);for(let g in h.morphAttributes){let v=h.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}h.removeEventListener("dispose",o),delete r[h.id];let f=s.get(h);f&&(e.remove(f),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(d){let h=d.attributes;for(let g in h)e.update(h[g],n.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],n.ARRAY_BUFFER)}}function l(d){let h=[],f=d.index,g=d.attributes.position,v=0;if(f!==null){let C=f.array;v=f.version;for(let M=0,E=C.length;M<E;M+=3){let O=C[M+0],D=C[M+1],A=C[M+2];h.push(O,D,D,A,A,O)}}else if(g!==void 0){let C=g.array;v=g.version;for(let M=0,E=C.length/3-1;M<E;M+=3){let O=M+0,D=M+1,A=M+2;h.push(O,D,D,A,A,O)}}else return;let m=new(tw(h)?Zu:Yu)(h,1);m.version=v;let p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){let h=s.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function zN(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,f){n.drawElements(i,f,s,h*o),t.update(f,i,1)}function l(h,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,h*o,g),t.update(f,i,g))}function u(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function d(h,f,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)l(h[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,h,0,v,0,g);let p=0;for(let C=0;C<g;C++)p+=f[C];for(let C=0;C<v.length;C++)t.update(p,i,v[C])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function HN(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function GN(n,e,t){let i=new WeakMap,r=new zt;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==d){let x=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var f=x;h!==void 0&&h.texture.dispose();let g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],C=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],E=0;g===!0&&(E=1),v===!0&&(E=2),m===!0&&(E=3);let O=a.attributes.position.count*E,D=1;O>e.maxTextureSize&&(D=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);let A=new Float32Array(O*D*4*d),N=new qu(A,O,D,d);N.type=ji,N.needsUpdate=!0;let S=E*4;for(let I=0;I<d;I++){let H=p[I],U=C[I],j=M[I],q=O*D*4*I;for(let G=0;G<H.count;G++){let Z=G*S;g===!0&&(r.fromBufferAttribute(H,G),A[q+Z+0]=r.x,A[q+Z+1]=r.y,A[q+Z+2]=r.z,A[q+Z+3]=0),v===!0&&(r.fromBufferAttribute(U,G),A[q+Z+4]=r.x,A[q+Z+5]=r.y,A[q+Z+6]=r.z,A[q+Z+7]=0),m===!0&&(r.fromBufferAttribute(j,G),A[q+Z+8]=r.x,A[q+Z+9]=r.y,A[q+Z+10]=r.z,A[q+Z+11]=j.itemSize===4?r.w:1)}}h={count:d,texture:N,size:new re(O,D)},i.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function WN(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var ed=class extends Tr{constructor(e,t,i,r,s,o,a,c,l,u=To){if(u!==To&&u!==Po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===To&&(i=as),i===void 0&&u===Po&&(i=Ro),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Bn,this.minFilter=c!==void 0?c:Bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ow=new Tr,fM=new ed(1,1),aw=new qu,cw=new eg,lw=new ac,pM=[],mM=[],gM=new Float32Array(16),vM=new Float32Array(9),yM=new Float32Array(4);function Vo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=pM[r];if(s===void 0&&(s=new Float32Array(r),pM[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Sd(n,e){let t=mM[e];t===void 0&&(t=new Int32Array(e),mM[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function jN(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function $N(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),Gt(t,e)}}function qN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),Gt(t,e)}}function XN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),Gt(t,e)}}function YN(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,i))return;yM.set(i),n.uniformMatrix2fv(this.addr,!1,yM),Gt(t,i)}}function ZN(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,i))return;vM.set(i),n.uniformMatrix3fv(this.addr,!1,vM),Gt(t,i)}}function KN(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,i))return;gM.set(i),n.uniformMatrix4fv(this.addr,!1,gM),Gt(t,i)}}function JN(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function QN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2iv(this.addr,e),Gt(t,e)}}function eO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3iv(this.addr,e),Gt(t,e)}}function tO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4iv(this.addr,e),Gt(t,e)}}function nO(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function iO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2uiv(this.addr,e),Gt(t,e)}}function rO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3uiv(this.addr,e),Gt(t,e)}}function sO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4uiv(this.addr,e),Gt(t,e)}}function oO(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(fM.compareFunction=ew,s=fM):s=ow,t.setTexture2D(e||s,r)}function aO(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||cw,r)}function cO(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||lw,r)}function lO(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||aw,r)}function uO(n){switch(n){case 5126:return jN;case 35664:return $N;case 35665:return qN;case 35666:return XN;case 35674:return YN;case 35675:return ZN;case 35676:return KN;case 5124:case 35670:return JN;case 35667:case 35671:return QN;case 35668:case 35672:return eO;case 35669:case 35673:return tO;case 5125:return nO;case 36294:return iO;case 36295:return rO;case 36296:return sO;case 35678:case 36198:case 36298:case 36306:case 35682:return oO;case 35679:case 36299:case 36307:return aO;case 35680:case 36300:case 36308:case 36293:return cO;case 36289:case 36303:case 36311:case 36292:return lO}}function dO(n,e){n.uniform1fv(this.addr,e)}function hO(n,e){let t=Vo(e,this.size,2);n.uniform2fv(this.addr,t)}function fO(n,e){let t=Vo(e,this.size,3);n.uniform3fv(this.addr,t)}function pO(n,e){let t=Vo(e,this.size,4);n.uniform4fv(this.addr,t)}function mO(n,e){let t=Vo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function gO(n,e){let t=Vo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function vO(n,e){let t=Vo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function yO(n,e){n.uniform1iv(this.addr,e)}function _O(n,e){n.uniform2iv(this.addr,e)}function xO(n,e){n.uniform3iv(this.addr,e)}function MO(n,e){n.uniform4iv(this.addr,e)}function wO(n,e){n.uniform1uiv(this.addr,e)}function SO(n,e){n.uniform2uiv(this.addr,e)}function bO(n,e){n.uniform3uiv(this.addr,e)}function EO(n,e){n.uniform4uiv(this.addr,e)}function TO(n,e,t){let i=this.cache,r=e.length,s=Sd(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ow,s[o])}function CO(n,e,t){let i=this.cache,r=e.length,s=Sd(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||cw,s[o])}function AO(n,e,t){let i=this.cache,r=e.length,s=Sd(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||lw,s[o])}function DO(n,e,t){let i=this.cache,r=e.length,s=Sd(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||aw,s[o])}function IO(n){switch(n){case 5126:return dO;case 35664:return hO;case 35665:return fO;case 35666:return pO;case 35674:return mO;case 35675:return gO;case 35676:return vO;case 5124:case 35670:return yO;case 35667:case 35671:return _O;case 35668:case 35672:return xO;case 35669:case 35673:return MO;case 5125:return wO;case 36294:return SO;case 36295:return bO;case 36296:return EO;case 35678:case 36198:case 36298:case 36306:case 35682:return TO;case 35679:case 36299:case 36307:return CO;case 35680:case 36300:case 36308:case 36293:return AO;case 36289:case 36303:case 36311:case 36292:return DO}}var ig=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=uO(t.type)}},rg=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=IO(t.type)}},sg=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},pm=/(\w+)(\])?(\[|\.)?/g;function _M(n,e){n.seq.push(e),n.map[e.id]=e}function RO(n,e,t){let i=n.name,r=i.length;for(pm.lastIndex=0;;){let s=pm.exec(i),o=pm.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){_M(t,l===void 0?new ig(a,n,e):new rg(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new sg(a),_M(t,d)),t=d}}}var Ao=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);RO(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function xM(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var PO=37297,NO=0;function OO(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function LO(n){let e=ft.getPrimaries(ft.workingColorSpace),t=ft.getPrimaries(n),i;switch(e===t?i="":e===Wu&&t===Gu?i="LinearDisplayP3ToLinearSRGB":e===Gu&&t===Wu&&(i="LinearSRGBToLinearDisplayP3"),n){case br:case wd:return[i,"LinearTransferOETF"];case si:case jg:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function MM(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+OO(n.getShaderSource(e),o)}else return r}function FO(n,e){let t=LO(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function UO(n,e){let t;switch(e){case XI:t="Linear";break;case YI:t="Reinhard";break;case ZI:t="OptimizedCineon";break;case KI:t="ACESFilmic";break;case QI:t="AgX";break;case e1:t="Neutral";break;case JI:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function kO(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ka).join(`
`)}function BO(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function VO(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ka(n){return n!==""}function wM(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function SM(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var zO=/^[ \t]*#include +<([\w\d./]+)>/gm;function og(n){return n.replace(zO,GO)}var HO=new Map;function GO(n,e){let t=Xe[e];if(t===void 0){let i=HO.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return og(t)}var WO=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bM(n){return n.replace(WO,jO)}function jO(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function EM(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $O(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===xd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===xI?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Gi&&(e="SHADOWMAP_TYPE_VSM"),e}function qO(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Do:case Io:e="ENVMAP_TYPE_CUBE";break;case Md:e="ENVMAP_TYPE_CUBE_UV";break}return e}function XO(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Io:e="ENVMAP_MODE_REFRACTION";break}return e}function YO(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ug:e="ENVMAP_BLENDING_MULTIPLY";break;case $I:e="ENVMAP_BLENDING_MIX";break;case qI:e="ENVMAP_BLENDING_ADD";break}return e}function ZO(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function KO(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=$O(t),l=qO(t),u=XO(t),d=YO(t),h=ZO(t),f=kO(t),g=BO(s),v=r.createProgram(),m,p,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ka).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ka).join(`
`),p.length>0&&(p+=`
`)):(m=[EM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ka).join(`
`),p=[EM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xr?"#define TONE_MAPPING":"",t.toneMapping!==xr?Xe.tonemapping_pars_fragment:"",t.toneMapping!==xr?UO("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,FO("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ka).join(`
`)),o=og(o),o=wM(o,t),o=SM(o,t),a=og(a),a=wM(a,t),a=SM(a,t),o=bM(o),a=bM(a),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Vx?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=C+m+o,E=C+p+a,O=xM(r,r.VERTEX_SHADER,M),D=xM(r,r.FRAGMENT_SHADER,E);r.attachShader(v,O),r.attachShader(v,D),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(I){if(n.debug.checkShaderErrors){let H=r.getProgramInfoLog(v).trim(),U=r.getShaderInfoLog(O).trim(),j=r.getShaderInfoLog(D).trim(),q=!0,G=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,O,D);else{let Z=MM(r,O,"vertex"),$=MM(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+Z+`
`+$)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(U===""||j==="")&&(G=!1);G&&(I.diagnostics={runnable:q,programLog:H,vertexShader:{log:U,prefix:m},fragmentShader:{log:j,prefix:p}})}r.deleteShader(O),r.deleteShader(D),N=new Ao(r,v),S=VO(r,v)}let N;this.getUniforms=function(){return N===void 0&&A(this),N};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(v,PO)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=NO++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=O,this.fragmentShader=D,this}var JO=0,ag=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new cg(e),t.set(e,i)),i}},cg=class{constructor(e){this.id=JO++,this.code=e,this.usedTimes=0}};function QO(n,e,t,i,r,s,o){let a=new Xu,c=new ag,l=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures,f=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,x,I,H,U){let j=H.fog,q=U.geometry,G=S.isMeshStandardMaterial?H.environment:null,Z=(S.isMeshStandardMaterial?t:e).get(S.envMap||G),$=Z&&Z.mapping===Md?Z.image.height:null,fe=g[S.type];S.precision!==null&&(f=r.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let ye=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ge=ye!==void 0?ye.length:0,$e=0;q.morphAttributes.position!==void 0&&($e=1),q.morphAttributes.normal!==void 0&&($e=2),q.morphAttributes.color!==void 0&&($e=3);let nt,X,ne,xe;if(fe){let ct=bi[fe];nt=ct.vertexShader,X=ct.fragmentShader}else nt=S.vertexShader,X=S.fragmentShader,c.update(S),ne=c.getVertexShaderID(S),xe=c.getFragmentShaderID(S);let ce=n.getRenderTarget(),Pe=U.isInstancedMesh===!0,He=U.isBatchedMesh===!0,Ie=!!S.map,et=!!S.matcap,b=!!Z,se=!!S.aoMap,ee=!!S.lightMap,le=!!S.bumpMap,Y=!!S.normalMap,Ae=!!S.displacementMap,de=!!S.emissiveMap,_e=!!S.metalnessMap,T=!!S.roughnessMap,_=S.anisotropy>0,B=S.clearcoat>0,Q=S.dispersion>0,J=S.iridescence>0,K=S.sheen>0,be=S.transmission>0,ae=_&&!!S.anisotropyMap,me=B&&!!S.clearcoatMap,Be=B&&!!S.clearcoatNormalMap,ie=B&&!!S.clearcoatRoughnessMap,pe=J&&!!S.iridescenceMap,Qe=J&&!!S.iridescenceThicknessMap,Ne=K&&!!S.sheenColorMap,Me=K&&!!S.sheenRoughnessMap,Fe=!!S.specularMap,Ve=!!S.specularColorMap,yt=!!S.specularIntensityMap,y=be&&!!S.transmissionMap,F=be&&!!S.thicknessMap,k=!!S.gradientMap,W=!!S.alphaMap,te=S.alphaTest>0,Ee=!!S.alphaHash,Ue=!!S.extensions,At=xr;S.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(At=n.toneMapping);let Ft={shaderID:fe,shaderType:S.type,shaderName:S.name,vertexShader:nt,fragmentShader:X,defines:S.defines,customVertexShaderID:ne,customFragmentShaderID:xe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:He,batchingColor:He&&U._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&U.instanceColor!==null,instancingMorph:Pe&&U.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:br,alphaToCoverage:!!S.alphaToCoverage,map:Ie,matcap:et,envMap:b,envMapMode:b&&Z.mapping,envMapCubeUVHeight:$,aoMap:se,lightMap:ee,bumpMap:le,normalMap:Y,displacementMap:h&&Ae,emissiveMap:de,normalMapObjectSpace:Y&&S.normalMapType===r1,normalMapTangentSpace:Y&&S.normalMapType===Wg,metalnessMap:_e,roughnessMap:T,anisotropy:_,anisotropyMap:ae,clearcoat:B,clearcoatMap:me,clearcoatNormalMap:Be,clearcoatRoughnessMap:ie,dispersion:Q,iridescence:J,iridescenceMap:pe,iridescenceThicknessMap:Qe,sheen:K,sheenColorMap:Ne,sheenRoughnessMap:Me,specularMap:Fe,specularColorMap:Ve,specularIntensityMap:yt,transmission:be,transmissionMap:y,thicknessMap:F,gradientMap:k,opaque:S.transparent===!1&&S.blending===Eo&&S.alphaToCoverage===!1,alphaMap:W,alphaTest:te,alphaHash:Ee,combine:S.combine,mapUv:Ie&&v(S.map.channel),aoMapUv:se&&v(S.aoMap.channel),lightMapUv:ee&&v(S.lightMap.channel),bumpMapUv:le&&v(S.bumpMap.channel),normalMapUv:Y&&v(S.normalMap.channel),displacementMapUv:Ae&&v(S.displacementMap.channel),emissiveMapUv:de&&v(S.emissiveMap.channel),metalnessMapUv:_e&&v(S.metalnessMap.channel),roughnessMapUv:T&&v(S.roughnessMap.channel),anisotropyMapUv:ae&&v(S.anisotropyMap.channel),clearcoatMapUv:me&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Be&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Me&&v(S.sheenRoughnessMap.channel),specularMapUv:Fe&&v(S.specularMap.channel),specularColorMapUv:Ve&&v(S.specularColorMap.channel),specularIntensityMapUv:yt&&v(S.specularIntensityMap.channel),transmissionMapUv:y&&v(S.transmissionMap.channel),thicknessMapUv:F&&v(S.thicknessMap.channel),alphaMapUv:W&&v(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Y||_),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!q.attributes.uv&&(Ie||W),fog:!!j,useFog:S.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:$e,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:At,decodeVideoTexture:Ie&&S.map.isVideoTexture===!0&&ft.getTransfer(S.map.colorSpace)===vt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Wi,flipSided:S.side===dn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ue&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&S.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function p(S){let x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(let I in S.defines)x.push(I),x.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(C(x,S),M(x,S),x.push(n.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function C(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function M(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.doubleSided&&a.enable(10),x.flipSided&&a.enable(11),x.useDepthPacking&&a.enable(12),x.dithering&&a.enable(13),x.transmission&&a.enable(14),x.sheen&&a.enable(15),x.opaque&&a.enable(16),x.pointsUvs&&a.enable(17),x.decodeVideoTexture&&a.enable(18),x.alphaToCoverage&&a.enable(19),S.push(a.mask)}function E(S){let x=g[S.type],I;if(x){let H=bi[x];I=W1.clone(H.uniforms)}else I=S.uniforms;return I}function O(S,x){let I;for(let H=0,U=u.length;H<U;H++){let j=u[H];if(j.cacheKey===x){I=j,++I.usedTimes;break}}return I===void 0&&(I=new KO(n,x,S,s),u.push(I)),I}function D(S){if(--S.usedTimes===0){let x=u.indexOf(S);u[x]=u[u.length-1],u.pop(),S.destroy()}}function A(S){c.remove(S)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:O,releaseProgram:D,releaseShaderCache:A,programs:u,dispose:N}}function eL(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function tL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function TM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function CM(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,f,g,v,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),e++,p}function a(d,h,f,g,v,m){let p=o(d,h,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function c(d,h,f,g,v,m){let p=o(d,h,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function l(d,h){t.length>1&&t.sort(d||tL),i.length>1&&i.sort(h||TM),r.length>1&&r.sort(h||TM)}function u(){for(let d=e,h=n.length;d<h;d++){let f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function nL(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new CM,n.set(i,[o])):r>=s.length?(o=new CM,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function iL(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Je};break;case"SpotLight":t={position:new R,direction:new R,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new R,halfWidth:new R,halfHeight:new R};break}return n[e.id]=t,t}}}function rL(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var sL=0;function oL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function aL(n){let e=new iL,t=rL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new R);let r=new R,s=new Ct,o=new Ct;function a(l){let u=0,d=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,C=0,M=0,E=0,O=0,D=0,A=0;l.sort(oL);for(let S=0,x=l.length;S<x;S++){let I=l[S],H=I.color,U=I.intensity,j=I.distance,q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=H.r*U,d+=H.g*U,h+=H.b*U;else if(I.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(I.sh.coefficients[G],U);A++}else if(I.isDirectionalLight){let G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Z=I.shadow,$=t.get(I);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,i.directionalShadow[f]=$,i.directionalShadowMap[f]=q,i.directionalShadowMatrix[f]=I.shadow.matrix,C++}i.directional[f]=G,f++}else if(I.isSpotLight){let G=e.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(H).multiplyScalar(U),G.distance=j,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,i.spot[v]=G;let Z=I.shadow;if(I.map&&(i.spotLightMap[O]=I.map,O++,Z.updateMatrices(I),I.castShadow&&D++),i.spotLightMatrix[v]=Z.matrix,I.castShadow){let $=t.get(I);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,i.spotShadow[v]=$,i.spotShadowMap[v]=q,E++}v++}else if(I.isRectAreaLight){let G=e.get(I);G.color.copy(H).multiplyScalar(U),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=G,m++}else if(I.isPointLight){let G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){let Z=I.shadow,$=t.get(I);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,$.shadowCameraNear=Z.camera.near,$.shadowCameraFar=Z.camera.far,i.pointShadow[g]=$,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=I.shadow.matrix,M++}i.point[g]=G,g++}else if(I.isHemisphereLight){let G=e.get(I);G.skyColor.copy(I.color).multiplyScalar(U),G.groundColor.copy(I.groundColor).multiplyScalar(U),i.hemi[p]=G,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let N=i.hash;(N.directionalLength!==f||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==C||N.numPointShadows!==M||N.numSpotShadows!==E||N.numSpotMaps!==O||N.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+O-D,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=A,N.directionalLength=f,N.pointLength=g,N.spotLength=v,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=C,N.numPointShadows=M,N.numSpotShadows=E,N.numSpotMaps=O,N.numLightProbes=A,i.version=sL++)}function c(l,u){let d=0,h=0,f=0,g=0,v=0,m=u.matrixWorldInverse;for(let p=0,C=l.length;p<C;p++){let M=l[p];if(M.isDirectionalLight){let E=i.directional[d];E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(M.isSpotLight){let E=i.spot[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(M.isRectAreaLight){let E=i.rectArea[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let E=i.point[h];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){let E=i.hemi[v];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function AM(n){let e=new aL(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function cL(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new AM(n),e.set(r,[a])):s>=o.length?(a=new AM(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var lg=class extends Yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=n1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ug=class extends Yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},lL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dL(n,e,t){let i=new cc,r=new re,s=new re,o=new zt,a=new lg({depthPacking:i1}),c=new ug,l={},u=t.maxTextureSize,d={[Mr]:dn,[dn]:Mr,[Wi]:Wi},h=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:lL,fragmentShader:uL}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new sn;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Mt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xd;let p=this.type;this.render=function(D,A,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;let S=n.getRenderTarget(),x=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),H=n.state;H.setBlending(_r),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let U=p!==Gi&&this.type===Gi,j=p===Gi&&this.type!==Gi;for(let q=0,G=D.length;q<G;q++){let Z=D[q],$=Z.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);let fe=$.getFrameExtents();if(r.multiply(fe),s.copy($.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/fe.x),r.x=s.x*fe.x,$.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/fe.y),r.y=s.y*fe.y,$.mapSize.y=s.y)),$.map===null||U===!0||j===!0){let ge=this.type!==Gi?{minFilter:Bn,magFilter:Bn}:{};$.map!==null&&$.map.dispose(),$.map=new Xi(r.x,r.y,ge),$.map.texture.name=Z.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();let ye=$.getViewportCount();for(let ge=0;ge<ye;ge++){let $e=$.getViewport(ge);o.set(s.x*$e.x,s.y*$e.y,s.x*$e.z,s.y*$e.w),H.viewport(o),$.updateMatrices(Z,ge),i=$.getFrustum(),E(A,N,$.camera,Z,this.type)}$.isPointLightShadow!==!0&&this.type===Gi&&C($,N),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,x,I)};function C(D,A){let N=e.update(v);h.defines.VSM_SAMPLES!==D.blurSamples&&(h.defines.VSM_SAMPLES=D.blurSamples,f.defines.VSM_SAMPLES=D.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Xi(r.x,r.y)),h.uniforms.shadow_pass.value=D.map.texture,h.uniforms.resolution.value=D.mapSize,h.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(A,null,N,h,v,null),f.uniforms.shadow_pass.value=D.mapPass.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(A,null,N,f,v,null)}function M(D,A,N,S){let x=null,I=N.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(I!==void 0)x=I;else if(x=N.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let H=x.uuid,U=A.uuid,j=l[H];j===void 0&&(j={},l[H]=j);let q=j[U];q===void 0&&(q=x.clone(),j[U]=q,A.addEventListener("dispose",O)),x=q}if(x.visible=A.visible,x.wireframe=A.wireframe,S===Gi?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:d[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,N.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let H=n.properties.get(x);H.light=N}return x}function E(D,A,N,S,x){if(D.visible===!1)return;if(D.layers.test(A.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&x===Gi)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,D.matrixWorld);let U=e.update(D),j=D.material;if(Array.isArray(j)){let q=U.groups;for(let G=0,Z=q.length;G<Z;G++){let $=q[G],fe=j[$.materialIndex];if(fe&&fe.visible){let ye=M(D,fe,S,x);D.onBeforeShadow(n,D,A,N,U,ye,$),n.renderBufferDirect(N,null,U,ye,D,$),D.onAfterShadow(n,D,A,N,U,ye,$)}}}else if(j.visible){let q=M(D,j,S,x);D.onBeforeShadow(n,D,A,N,U,q,null),n.renderBufferDirect(N,null,U,q,D,null),D.onAfterShadow(n,D,A,N,U,q,null)}}let H=D.children;for(let U=0,j=H.length;U<j;U++)E(H[U],A,N,S,x)}function O(D){D.target.removeEventListener("dispose",O);for(let N in l){let S=l[N],x=D.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}function hL(n){function e(){let y=!1,F=new zt,k=null,W=new zt(0,0,0,0);return{setMask:function(te){k!==te&&!y&&(n.colorMask(te,te,te,te),k=te)},setLocked:function(te){y=te},setClear:function(te,Ee,Ue,At,Ft){Ft===!0&&(te*=At,Ee*=At,Ue*=At),F.set(te,Ee,Ue,At),W.equals(F)===!1&&(n.clearColor(te,Ee,Ue,At),W.copy(F))},reset:function(){y=!1,k=null,W.set(-1,0,0,0)}}}function t(){let y=!1,F=null,k=null,W=null;return{setTest:function(te){te?xe(n.DEPTH_TEST):ce(n.DEPTH_TEST)},setMask:function(te){F!==te&&!y&&(n.depthMask(te),F=te)},setFunc:function(te){if(k!==te){switch(te){case BI:n.depthFunc(n.NEVER);break;case VI:n.depthFunc(n.ALWAYS);break;case zI:n.depthFunc(n.LESS);break;case Vu:n.depthFunc(n.LEQUAL);break;case HI:n.depthFunc(n.EQUAL);break;case GI:n.depthFunc(n.GEQUAL);break;case WI:n.depthFunc(n.GREATER);break;case jI:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}k=te}},setLocked:function(te){y=te},setClear:function(te){W!==te&&(n.clearDepth(te),W=te)},reset:function(){y=!1,F=null,k=null,W=null}}}function i(){let y=!1,F=null,k=null,W=null,te=null,Ee=null,Ue=null,At=null,Ft=null;return{setTest:function(ct){y||(ct?xe(n.STENCIL_TEST):ce(n.STENCIL_TEST))},setMask:function(ct){F!==ct&&!y&&(n.stencilMask(ct),F=ct)},setFunc:function(ct,Ut,Pt){(k!==ct||W!==Ut||te!==Pt)&&(n.stencilFunc(ct,Ut,Pt),k=ct,W=Ut,te=Pt)},setOp:function(ct,Ut,Pt){(Ee!==ct||Ue!==Ut||At!==Pt)&&(n.stencilOp(ct,Ut,Pt),Ee=ct,Ue=Ut,At=Pt)},setLocked:function(ct){y=ct},setClear:function(ct){Ft!==ct&&(n.clearStencil(ct),Ft=ct)},reset:function(){y=!1,F=null,k=null,W=null,te=null,Ee=null,Ue=null,At=null,Ft=null}}}let r=new e,s=new t,o=new i,a=new WeakMap,c=new WeakMap,l={},u={},d=new WeakMap,h=[],f=null,g=!1,v=null,m=null,p=null,C=null,M=null,E=null,O=null,D=new Je(0,0,0),A=0,N=!1,S=null,x=null,I=null,H=null,U=null,j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,G=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=G>=1):Z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=G>=2);let $=null,fe={},ye=n.getParameter(n.SCISSOR_BOX),ge=n.getParameter(n.VIEWPORT),$e=new zt().fromArray(ye),nt=new zt().fromArray(ge);function X(y,F,k,W){let te=new Uint8Array(4),Ee=n.createTexture();n.bindTexture(y,Ee),n.texParameteri(y,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(y,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ue=0;Ue<k;Ue++)y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY?n.texImage3D(F,0,n.RGBA,1,1,W,0,n.RGBA,n.UNSIGNED_BYTE,te):n.texImage2D(F+Ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,te);return Ee}let ne={};ne[n.TEXTURE_2D]=X(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=X(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[n.TEXTURE_2D_ARRAY]=X(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=X(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),xe(n.DEPTH_TEST),s.setFunc(Vu),le(!1),Y(Ix),xe(n.CULL_FACE),se(_r);function xe(y){l[y]!==!0&&(n.enable(y),l[y]=!0)}function ce(y){l[y]!==!1&&(n.disable(y),l[y]=!1)}function Pe(y,F){return u[y]!==F?(n.bindFramebuffer(y,F),u[y]=F,y===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=F),y===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=F),!0):!1}function He(y,F){let k=h,W=!1;if(y){k=d.get(F),k===void 0&&(k=[],d.set(F,k));let te=y.textures;if(k.length!==te.length||k[0]!==n.COLOR_ATTACHMENT0){for(let Ee=0,Ue=te.length;Ee<Ue;Ee++)k[Ee]=n.COLOR_ATTACHMENT0+Ee;k.length=te.length,W=!0}}else k[0]!==n.BACK&&(k[0]=n.BACK,W=!0);W&&n.drawBuffers(k)}function Ie(y){return f!==y?(n.useProgram(y),f=y,!0):!1}let et={[is]:n.FUNC_ADD,[wI]:n.FUNC_SUBTRACT,[SI]:n.FUNC_REVERSE_SUBTRACT};et[bI]=n.MIN,et[EI]=n.MAX;let b={[TI]:n.ZERO,[CI]:n.ONE,[AI]:n.SRC_COLOR,[xm]:n.SRC_ALPHA,[OI]:n.SRC_ALPHA_SATURATE,[PI]:n.DST_COLOR,[II]:n.DST_ALPHA,[DI]:n.ONE_MINUS_SRC_COLOR,[Mm]:n.ONE_MINUS_SRC_ALPHA,[NI]:n.ONE_MINUS_DST_COLOR,[RI]:n.ONE_MINUS_DST_ALPHA,[LI]:n.CONSTANT_COLOR,[FI]:n.ONE_MINUS_CONSTANT_COLOR,[UI]:n.CONSTANT_ALPHA,[kI]:n.ONE_MINUS_CONSTANT_ALPHA};function se(y,F,k,W,te,Ee,Ue,At,Ft,ct){if(y===_r){g===!0&&(ce(n.BLEND),g=!1);return}if(g===!1&&(xe(n.BLEND),g=!0),y!==MI){if(y!==v||ct!==N){if((m!==is||M!==is)&&(n.blendEquation(n.FUNC_ADD),m=is,M=is),ct)switch(y){case Eo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rx:n.blendFunc(n.ONE,n.ONE);break;case Px:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nx:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}else switch(y){case Eo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rx:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Px:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nx:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}p=null,C=null,E=null,O=null,D.set(0,0,0),A=0,v=y,N=ct}return}te=te||F,Ee=Ee||k,Ue=Ue||W,(F!==m||te!==M)&&(n.blendEquationSeparate(et[F],et[te]),m=F,M=te),(k!==p||W!==C||Ee!==E||Ue!==O)&&(n.blendFuncSeparate(b[k],b[W],b[Ee],b[Ue]),p=k,C=W,E=Ee,O=Ue),(At.equals(D)===!1||Ft!==A)&&(n.blendColor(At.r,At.g,At.b,Ft),D.copy(At),A=Ft),v=y,N=!1}function ee(y,F){y.side===Wi?ce(n.CULL_FACE):xe(n.CULL_FACE);let k=y.side===dn;F&&(k=!k),le(k),y.blending===Eo&&y.transparent===!1?se(_r):se(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),s.setFunc(y.depthFunc),s.setTest(y.depthTest),s.setMask(y.depthWrite),r.setMask(y.colorWrite);let W=y.stencilWrite;o.setTest(W),W&&(o.setMask(y.stencilWriteMask),o.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),o.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),de(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?xe(n.SAMPLE_ALPHA_TO_COVERAGE):ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function le(y){S!==y&&(y?n.frontFace(n.CW):n.frontFace(n.CCW),S=y)}function Y(y){y!==yI?(xe(n.CULL_FACE),y!==x&&(y===Ix?n.cullFace(n.BACK):y===_I?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ce(n.CULL_FACE),x=y}function Ae(y){y!==I&&(q&&n.lineWidth(y),I=y)}function de(y,F,k){y?(xe(n.POLYGON_OFFSET_FILL),(H!==F||U!==k)&&(n.polygonOffset(F,k),H=F,U=k)):ce(n.POLYGON_OFFSET_FILL)}function _e(y){y?xe(n.SCISSOR_TEST):ce(n.SCISSOR_TEST)}function T(y){y===void 0&&(y=n.TEXTURE0+j-1),$!==y&&(n.activeTexture(y),$=y)}function _(y,F,k){k===void 0&&($===null?k=n.TEXTURE0+j-1:k=$);let W=fe[k];W===void 0&&(W={type:void 0,texture:void 0},fe[k]=W),(W.type!==y||W.texture!==F)&&($!==k&&(n.activeTexture(k),$=k),n.bindTexture(y,F||ne[y]),W.type=y,W.texture=F)}function B(){let y=fe[$];y!==void 0&&y.type!==void 0&&(n.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function be(){try{n.texSubImage3D.apply(n,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Be(){try{n.texStorage2D.apply(n,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ie(){try{n.texStorage3D.apply(n,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function pe(){try{n.texImage2D.apply(n,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Qe(){try{n.texImage3D.apply(n,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Ne(y){$e.equals(y)===!1&&(n.scissor(y.x,y.y,y.z,y.w),$e.copy(y))}function Me(y){nt.equals(y)===!1&&(n.viewport(y.x,y.y,y.z,y.w),nt.copy(y))}function Fe(y,F){let k=c.get(F);k===void 0&&(k=new WeakMap,c.set(F,k));let W=k.get(y);W===void 0&&(W=n.getUniformBlockIndex(F,y.name),k.set(y,W))}function Ve(y,F){let W=c.get(F).get(y);a.get(F)!==W&&(n.uniformBlockBinding(F,W,y.__bindingPointIndex),a.set(F,W))}function yt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},$=null,fe={},u={},d=new WeakMap,h=[],f=null,g=!1,v=null,m=null,p=null,C=null,M=null,E=null,O=null,D=new Je(0,0,0),A=0,N=!1,S=null,x=null,I=null,H=null,U=null,$e.set(0,0,n.canvas.width,n.canvas.height),nt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:xe,disable:ce,bindFramebuffer:Pe,drawBuffers:He,useProgram:Ie,setBlending:se,setMaterial:ee,setFlipSided:le,setCullFace:Y,setLineWidth:Ae,setPolygonOffset:de,setScissorTest:_e,activeTexture:T,bindTexture:_,unbindTexture:B,compressedTexImage2D:Q,compressedTexImage3D:J,texImage2D:pe,texImage3D:Qe,updateUBOMapping:Fe,uniformBlockBinding:Ve,texStorage2D:Be,texStorage3D:ie,texSubImage2D:K,texSubImage3D:be,compressedTexSubImage2D:ae,compressedTexSubImage3D:me,scissor:Ne,viewport:Me,reset:yt}}function DM(n,e,t,i){let r=fL(i);switch(t){case qM:return n*e;case YM:return n*e;case ZM:return n*e*2;case KM:return n*e/r.components*r.byteLength;case zg:return n*e/r.components*r.byteLength;case JM:return n*e*2/r.components*r.byteLength;case Hg:return n*e*2/r.components*r.byteLength;case XM:return n*e*3/r.components*r.byteLength;case ci:return n*e*4/r.components*r.byteLength;case Gg:return n*e*4/r.components*r.byteLength;case Lu:case Fu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Uu:case ku:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Tm:case Am:return Math.max(n,16)*Math.max(e,8)/4;case Em:case Cm:return Math.max(n,8)*Math.max(e,8)/2;case Dm:case Im:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Rm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nm:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Om:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Lm:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Fm:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Um:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case km:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Bm:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Vm:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case zm:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Hm:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Gm:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Wm:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case jm:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Bu:case $m:case qm:return Math.ceil(n/4)*Math.ceil(e/4)*16;case QM:case Xm:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ym:case Zm:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fL(n){switch(n){case qi:case WM:return{byteLength:1,components:1};case sc:case jM:case _c:return{byteLength:2,components:1};case Bg:case Vg:return{byteLength:2,components:4};case as:case kg:case ji:return{byteLength:4,components:1};case $M:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function pL(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new re,u=new WeakMap,d,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return f?new OffscreenCanvas(T,_):oc("canvas")}function v(T,_,B){let Q=1,J=_e(T);if((J.width>B||J.height>B)&&(Q=B/Math.max(J.width,J.height)),Q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let K=Math.floor(Q*J.width),be=Math.floor(Q*J.height);d===void 0&&(d=g(K,be));let ae=_?g(K,be):d;return ae.width=K,ae.height=be,ae.getContext("2d").drawImage(T,0,0,K,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+K+"x"+be+")."),ae}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function m(T){return T.generateMipmaps&&T.minFilter!==Bn&&T.minFilter!==ai}function p(T){n.generateMipmap(T)}function C(T,_,B,Q,J=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=_;if(_===n.RED&&(B===n.FLOAT&&(K=n.R32F),B===n.HALF_FLOAT&&(K=n.R16F),B===n.UNSIGNED_BYTE&&(K=n.R8)),_===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.R8UI),B===n.UNSIGNED_SHORT&&(K=n.R16UI),B===n.UNSIGNED_INT&&(K=n.R32UI),B===n.BYTE&&(K=n.R8I),B===n.SHORT&&(K=n.R16I),B===n.INT&&(K=n.R32I)),_===n.RG&&(B===n.FLOAT&&(K=n.RG32F),B===n.HALF_FLOAT&&(K=n.RG16F),B===n.UNSIGNED_BYTE&&(K=n.RG8)),_===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RG8UI),B===n.UNSIGNED_SHORT&&(K=n.RG16UI),B===n.UNSIGNED_INT&&(K=n.RG32UI),B===n.BYTE&&(K=n.RG8I),B===n.SHORT&&(K=n.RG16I),B===n.INT&&(K=n.RG32I)),_===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),_===n.RGBA){let be=J?Hu:ft.getTransfer(Q);B===n.FLOAT&&(K=n.RGBA32F),B===n.HALF_FLOAT&&(K=n.RGBA16F),B===n.UNSIGNED_BYTE&&(K=be===vt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function M(T,_){let B;return T?_===null||_===as||_===Ro?B=n.DEPTH24_STENCIL8:_===ji?B=n.DEPTH32F_STENCIL8:_===sc&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===as||_===Ro?B=n.DEPTH_COMPONENT24:_===ji?B=n.DEPTH_COMPONENT32F:_===sc&&(B=n.DEPTH_COMPONENT16),B}function E(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Bn&&T.minFilter!==ai?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function O(T){let _=T.target;_.removeEventListener("dispose",O),A(_),_.isVideoTexture&&u.delete(_)}function D(T){let _=T.target;_.removeEventListener("dispose",D),S(_)}function A(T){let _=i.get(T);if(_.__webglInit===void 0)return;let B=T.source,Q=h.get(B);if(Q){let J=Q[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&N(T),Object.keys(Q).length===0&&h.delete(B)}i.remove(T)}function N(T){let _=i.get(T);n.deleteTexture(_.__webglTexture);let B=T.source,Q=h.get(B);delete Q[_.__cacheKey],o.memory.textures--}function S(T){let _=i.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(_.__webglFramebuffer[Q]))for(let J=0;J<_.__webglFramebuffer[Q].length;J++)n.deleteFramebuffer(_.__webglFramebuffer[Q][J]);else n.deleteFramebuffer(_.__webglFramebuffer[Q]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[Q])}else{if(Array.isArray(_.__webglFramebuffer))for(let Q=0;Q<_.__webglFramebuffer.length;Q++)n.deleteFramebuffer(_.__webglFramebuffer[Q]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Q=0;Q<_.__webglColorRenderbuffer.length;Q++)_.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[Q]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let B=T.textures;for(let Q=0,J=B.length;Q<J;Q++){let K=i.get(B[Q]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(B[Q])}i.remove(T)}let x=0;function I(){x=0}function H(){let T=x;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),x+=1,T}function U(T){let _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function j(T,_){let B=i.get(T);if(T.isVideoTexture&&Ae(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){let Q=T.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(B,T,_);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+_)}function q(T,_){let B=i.get(T);if(T.version>0&&B.__version!==T.version){nt(B,T,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+_)}function G(T,_){let B=i.get(T);if(T.version>0&&B.__version!==T.version){nt(B,T,_);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+_)}function Z(T,_){let B=i.get(T);if(T.version>0&&B.__version!==T.version){X(B,T,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+_)}let $={[rc]:n.REPEAT,[ss]:n.CLAMP_TO_EDGE,[bm]:n.MIRRORED_REPEAT},fe={[Bn]:n.NEAREST,[t1]:n.NEAREST_MIPMAP_NEAREST,[ou]:n.NEAREST_MIPMAP_LINEAR,[ai]:n.LINEAR,[Gp]:n.LINEAR_MIPMAP_NEAREST,[os]:n.LINEAR_MIPMAP_LINEAR},ye={[s1]:n.NEVER,[d1]:n.ALWAYS,[o1]:n.LESS,[ew]:n.LEQUAL,[a1]:n.EQUAL,[u1]:n.GEQUAL,[c1]:n.GREATER,[l1]:n.NOTEQUAL};function ge(T,_){if(_.type===ji&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===ai||_.magFilter===Gp||_.magFilter===ou||_.magFilter===os||_.minFilter===ai||_.minFilter===Gp||_.minFilter===ou||_.minFilter===os)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,$[_.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,$[_.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,$[_.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,fe[_.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,fe[_.minFilter]),_.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,ye[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Bn||_.minFilter!==ou&&_.minFilter!==os||_.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function $e(T,_){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",O));let Q=_.source,J=h.get(Q);J===void 0&&(J={},h.set(Q,J));let K=U(_);if(K!==T.__cacheKey){J[K]===void 0&&(J[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),J[K].usedTimes++;let be=J[T.__cacheKey];be!==void 0&&(J[T.__cacheKey].usedTimes--,be.usedTimes===0&&N(_)),T.__cacheKey=K,T.__webglTexture=J[K].texture}return B}function nt(T,_,B){let Q=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Q=n.TEXTURE_3D);let J=$e(T,_),K=_.source;t.bindTexture(Q,T.__webglTexture,n.TEXTURE0+B);let be=i.get(K);if(K.version!==be.__version||J===!0){t.activeTexture(n.TEXTURE0+B);let ae=ft.getPrimaries(ft.workingColorSpace),me=_.colorSpace===yr?null:ft.getPrimaries(_.colorSpace),Be=_.colorSpace===yr||ae===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let ie=v(_.image,!1,r.maxTextureSize);ie=de(_,ie);let pe=s.convert(_.format,_.colorSpace),Qe=s.convert(_.type),Ne=C(_.internalFormat,pe,Qe,_.colorSpace,_.isVideoTexture);ge(Q,_);let Me,Fe=_.mipmaps,Ve=_.isVideoTexture!==!0,yt=be.__version===void 0||J===!0,y=K.dataReady,F=E(_,ie);if(_.isDepthTexture)Ne=M(_.format===Po,_.type),yt&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,Ne,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Ne,ie.width,ie.height,0,pe,Qe,null));else if(_.isDataTexture)if(Fe.length>0){Ve&&yt&&t.texStorage2D(n.TEXTURE_2D,F,Ne,Fe[0].width,Fe[0].height);for(let k=0,W=Fe.length;k<W;k++)Me=Fe[k],Ve?y&&t.texSubImage2D(n.TEXTURE_2D,k,0,0,Me.width,Me.height,pe,Qe,Me.data):t.texImage2D(n.TEXTURE_2D,k,Ne,Me.width,Me.height,0,pe,Qe,Me.data);_.generateMipmaps=!1}else Ve?(yt&&t.texStorage2D(n.TEXTURE_2D,F,Ne,ie.width,ie.height),y&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,pe,Qe,ie.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,ie.width,ie.height,0,pe,Qe,ie.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ve&&yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,F,Ne,Fe[0].width,Fe[0].height,ie.depth);for(let k=0,W=Fe.length;k<W;k++)if(Me=Fe[k],_.format!==ci)if(pe!==null)if(Ve){if(y)if(_.layerUpdates.size>0){let te=DM(Me.width,Me.height,_.format,_.type);for(let Ee of _.layerUpdates){let Ue=Me.data.subarray(Ee*te/Me.data.BYTES_PER_ELEMENT,(Ee+1)*te/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,Ee,Me.width,Me.height,1,pe,Ue,0,0)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,0,Me.width,Me.height,ie.depth,pe,Me.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,k,Ne,Me.width,Me.height,ie.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?y&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,0,Me.width,Me.height,ie.depth,pe,Qe,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,k,Ne,Me.width,Me.height,ie.depth,0,pe,Qe,Me.data)}else{Ve&&yt&&t.texStorage2D(n.TEXTURE_2D,F,Ne,Fe[0].width,Fe[0].height);for(let k=0,W=Fe.length;k<W;k++)Me=Fe[k],_.format!==ci?pe!==null?Ve?y&&t.compressedTexSubImage2D(n.TEXTURE_2D,k,0,0,Me.width,Me.height,pe,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,k,Ne,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?y&&t.texSubImage2D(n.TEXTURE_2D,k,0,0,Me.width,Me.height,pe,Qe,Me.data):t.texImage2D(n.TEXTURE_2D,k,Ne,Me.width,Me.height,0,pe,Qe,Me.data)}else if(_.isDataArrayTexture)if(Ve){if(yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,F,Ne,ie.width,ie.height,ie.depth),y)if(_.layerUpdates.size>0){let k=DM(ie.width,ie.height,_.format,_.type);for(let W of _.layerUpdates){let te=ie.data.subarray(W*k/ie.data.BYTES_PER_ELEMENT,(W+1)*k/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,W,ie.width,ie.height,1,pe,Qe,te)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,pe,Qe,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,ie.width,ie.height,ie.depth,0,pe,Qe,ie.data);else if(_.isData3DTexture)Ve?(yt&&t.texStorage3D(n.TEXTURE_3D,F,Ne,ie.width,ie.height,ie.depth),y&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,pe,Qe,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,ie.width,ie.height,ie.depth,0,pe,Qe,ie.data);else if(_.isFramebufferTexture){if(yt)if(Ve)t.texStorage2D(n.TEXTURE_2D,F,Ne,ie.width,ie.height);else{let k=ie.width,W=ie.height;for(let te=0;te<F;te++)t.texImage2D(n.TEXTURE_2D,te,Ne,k,W,0,pe,Qe,null),k>>=1,W>>=1}}else if(Fe.length>0){if(Ve&&yt){let k=_e(Fe[0]);t.texStorage2D(n.TEXTURE_2D,F,Ne,k.width,k.height)}for(let k=0,W=Fe.length;k<W;k++)Me=Fe[k],Ve?y&&t.texSubImage2D(n.TEXTURE_2D,k,0,0,pe,Qe,Me):t.texImage2D(n.TEXTURE_2D,k,Ne,pe,Qe,Me);_.generateMipmaps=!1}else if(Ve){if(yt){let k=_e(ie);t.texStorage2D(n.TEXTURE_2D,F,Ne,k.width,k.height)}y&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,Qe,ie)}else t.texImage2D(n.TEXTURE_2D,0,Ne,pe,Qe,ie);m(_)&&p(Q),be.__version=K.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function X(T,_,B){if(_.image.length!==6)return;let Q=$e(T,_),J=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+B);let K=i.get(J);if(J.version!==K.__version||Q===!0){t.activeTexture(n.TEXTURE0+B);let be=ft.getPrimaries(ft.workingColorSpace),ae=_.colorSpace===yr?null:ft.getPrimaries(_.colorSpace),me=_.colorSpace===yr||be===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let Be=_.isCompressedTexture||_.image[0].isCompressedTexture,ie=_.image[0]&&_.image[0].isDataTexture,pe=[];for(let W=0;W<6;W++)!Be&&!ie?pe[W]=v(_.image[W],!0,r.maxCubemapSize):pe[W]=ie?_.image[W].image:_.image[W],pe[W]=de(_,pe[W]);let Qe=pe[0],Ne=s.convert(_.format,_.colorSpace),Me=s.convert(_.type),Fe=C(_.internalFormat,Ne,Me,_.colorSpace),Ve=_.isVideoTexture!==!0,yt=K.__version===void 0||Q===!0,y=J.dataReady,F=E(_,Qe);ge(n.TEXTURE_CUBE_MAP,_);let k;if(Be){Ve&&yt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,F,Fe,Qe.width,Qe.height);for(let W=0;W<6;W++){k=pe[W].mipmaps;for(let te=0;te<k.length;te++){let Ee=k[te];_.format!==ci?Ne!==null?Ve?y&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,te,0,0,Ee.width,Ee.height,Ne,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,te,Fe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,te,0,0,Ee.width,Ee.height,Ne,Me,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,te,Fe,Ee.width,Ee.height,0,Ne,Me,Ee.data)}}}else{if(k=_.mipmaps,Ve&&yt){k.length>0&&F++;let W=_e(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,F,Fe,W.width,W.height)}for(let W=0;W<6;W++)if(ie){Ve?y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,pe[W].width,pe[W].height,Ne,Me,pe[W].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Fe,pe[W].width,pe[W].height,0,Ne,Me,pe[W].data);for(let te=0;te<k.length;te++){let Ue=k[te].image[W].image;Ve?y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,te+1,0,0,Ue.width,Ue.height,Ne,Me,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,te+1,Fe,Ue.width,Ue.height,0,Ne,Me,Ue.data)}}else{Ve?y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,Ne,Me,pe[W]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Fe,Ne,Me,pe[W]);for(let te=0;te<k.length;te++){let Ee=k[te];Ve?y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,te+1,0,0,Ne,Me,Ee.image[W]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,te+1,Fe,Ne,Me,Ee.image[W])}}}m(_)&&p(n.TEXTURE_CUBE_MAP),K.__version=J.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ne(T,_,B,Q,J,K){let be=s.convert(B.format,B.colorSpace),ae=s.convert(B.type),me=C(B.internalFormat,be,ae,B.colorSpace);if(!i.get(_).__hasExternalTextures){let ie=Math.max(1,_.width>>K),pe=Math.max(1,_.height>>K);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,K,me,ie,pe,_.depth,0,be,ae,null):t.texImage2D(J,K,me,ie,pe,0,be,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),Y(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,J,i.get(B).__webglTexture,0,le(_)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,J,i.get(B).__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function xe(T,_,B){if(n.bindRenderbuffer(n.RENDERBUFFER,T),_.depthBuffer){let Q=_.depthTexture,J=Q&&Q.isDepthTexture?Q.type:null,K=M(_.stencilBuffer,J),be=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=le(_);Y(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,K,_.width,_.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,K,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,K,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,T)}else{let Q=_.textures;for(let J=0;J<Q.length;J++){let K=Q[J],be=s.convert(K.format,K.colorSpace),ae=s.convert(K.type),me=C(K.internalFormat,be,ae,K.colorSpace),Be=le(_);B&&Y(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,me,_.width,_.height):Y(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Be,me,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,me,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ce(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j(_.depthTexture,0);let Q=i.get(_.depthTexture).__webglTexture,J=le(_);if(_.depthTexture.format===To)Y(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(_.depthTexture.format===Po)Y(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Pe(T){let _=i.get(T),B=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ce(_.__webglFramebuffer,T)}else if(B){_.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Q]),_.__webglDepthbuffer[Q]=n.createRenderbuffer(),xe(_.__webglDepthbuffer[Q],T,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),xe(_.__webglDepthbuffer,T,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(T,_,B){let Q=i.get(T);_!==void 0&&ne(Q.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Pe(T)}function Ie(T){let _=T.texture,B=i.get(T),Q=i.get(_);T.addEventListener("dispose",D);let J=T.textures,K=T.isWebGLCubeRenderTarget===!0,be=J.length>1;if(be||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=_.version,o.memory.textures++),K){B.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[ae]=[];for(let me=0;me<_.mipmaps.length;me++)B.__webglFramebuffer[ae][me]=n.createFramebuffer()}else B.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let ae=0;ae<_.mipmaps.length;ae++)B.__webglFramebuffer[ae]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(be)for(let ae=0,me=J.length;ae<me;ae++){let Be=i.get(J[ae]);Be.__webglTexture===void 0&&(Be.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&Y(T)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ae=0;ae<J.length;ae++){let me=J[ae];B.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ae]);let Be=s.convert(me.format,me.colorSpace),ie=s.convert(me.type),pe=C(me.internalFormat,Be,ie,me.colorSpace,T.isXRRenderTarget===!0),Qe=le(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Qe,pe,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,B.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),xe(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),ge(n.TEXTURE_CUBE_MAP,_);for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0)for(let me=0;me<_.mipmaps.length;me++)ne(B.__webglFramebuffer[ae][me],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,me);else ne(B.__webglFramebuffer[ae],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(_)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ae=0,me=J.length;ae<me;ae++){let Be=J[ae],ie=i.get(Be);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),ge(n.TEXTURE_2D,Be),ne(B.__webglFramebuffer,T,Be,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,0),m(Be)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ae=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,Q.__webglTexture),ge(ae,_),_.mipmaps&&_.mipmaps.length>0)for(let me=0;me<_.mipmaps.length;me++)ne(B.__webglFramebuffer[me],T,_,n.COLOR_ATTACHMENT0,ae,me);else ne(B.__webglFramebuffer,T,_,n.COLOR_ATTACHMENT0,ae,0);m(_)&&p(ae),t.unbindTexture()}T.depthBuffer&&Pe(T)}function et(T){let _=T.textures;for(let B=0,Q=_.length;B<Q;B++){let J=_[B];if(m(J)){let K=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,be=i.get(J).__webglTexture;t.bindTexture(K,be),p(K),t.unbindTexture()}}}let b=[],se=[];function ee(T){if(T.samples>0){if(Y(T)===!1){let _=T.textures,B=T.width,Q=T.height,J=n.COLOR_BUFFER_BIT,K=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(T),ae=_.length>1;if(ae)for(let me=0;me<_.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let me=0;me<_.length;me++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[me]);let Be=i.get(_[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Be,0)}n.blitFramebuffer(0,0,B,Q,0,0,B,Q,J,n.NEAREST),c===!0&&(b.length=0,se.length=0,b.push(n.COLOR_ATTACHMENT0+me),T.depthBuffer&&T.resolveDepthBuffer===!1&&(b.push(K),se.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,se)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,b))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let me=0;me<_.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,be.__webglColorRenderbuffer[me]);let Be=i.get(_[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,Be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let _=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function le(T){return Math.min(r.maxSamples,T.samples)}function Y(T){let _=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ae(T){let _=o.render.frame;u.get(T)!==_&&(u.set(T,_),T.update())}function de(T,_){let B=T.colorSpace,Q=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==br&&B!==yr&&(ft.getTransfer(B)===vt?(Q!==ci||J!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),_}function _e(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=I,this.setTexture2D=j,this.setTexture2DArray=q,this.setTexture3D=G,this.setTextureCube=Z,this.rebindTextures=He,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Y}function mL(n,e){function t(i,r=yr){let s,o=ft.getTransfer(r);if(i===qi)return n.UNSIGNED_BYTE;if(i===Bg)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Vg)return n.UNSIGNED_SHORT_5_5_5_1;if(i===$M)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===WM)return n.BYTE;if(i===jM)return n.SHORT;if(i===sc)return n.UNSIGNED_SHORT;if(i===kg)return n.INT;if(i===as)return n.UNSIGNED_INT;if(i===ji)return n.FLOAT;if(i===_c)return n.HALF_FLOAT;if(i===qM)return n.ALPHA;if(i===XM)return n.RGB;if(i===ci)return n.RGBA;if(i===YM)return n.LUMINANCE;if(i===ZM)return n.LUMINANCE_ALPHA;if(i===To)return n.DEPTH_COMPONENT;if(i===Po)return n.DEPTH_STENCIL;if(i===KM)return n.RED;if(i===zg)return n.RED_INTEGER;if(i===JM)return n.RG;if(i===Hg)return n.RG_INTEGER;if(i===Gg)return n.RGBA_INTEGER;if(i===Lu||i===Fu||i===Uu||i===ku)if(o===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Lu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Uu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ku)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Lu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Uu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ku)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Em||i===Tm||i===Cm||i===Am)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Em)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tm)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Cm)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Am)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dm||i===Im||i===Rm)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Dm||i===Im)return o===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Rm)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Pm||i===Nm||i===Om||i===Lm||i===Fm||i===Um||i===km||i===Bm||i===Vm||i===zm||i===Hm||i===Gm||i===Wm||i===jm)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Pm)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nm)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Om)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lm)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fm)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Um)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===km)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bm)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vm)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zm)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hm)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gm)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wm)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===jm)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Bu||i===$m||i===qm)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Bu)return o===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$m)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qm)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===QM||i===Xm||i===Ym||i===Zm)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Bu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Xm)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ym)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zm)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ro?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var dg=class extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Vn=class extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}},gL={type:"move"},ec=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gL)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Vn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},vL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,hg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new Tr,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Ti({vertexShader:vL,fragmentShader:yL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new Uo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fg=class extends Ei{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null,v=new hg,m=t.getContextAttributes(),p=null,C=null,M=[],E=[],O=new re,D=null,A=new rn;A.layers.enable(1),A.viewport=new zt;let N=new rn;N.layers.enable(2),N.viewport=new zt;let S=[A,N],x=new dg;x.layers.enable(1),x.layers.enable(2);let I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ne=M[X];return ne===void 0&&(ne=new ec,M[X]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(X){let ne=M[X];return ne===void 0&&(ne=new ec,M[X]=ne),ne.getGripSpace()},this.getHand=function(X){let ne=M[X];return ne===void 0&&(ne=new ec,M[X]=ne),ne.getHandSpace()};function U(X){let ne=E.indexOf(X.inputSource);if(ne===-1)return;let xe=M[ne];xe!==void 0&&(xe.update(X.inputSource,X.frame,l||o),xe.dispatchEvent({type:X.type,data:X.inputSource}))}function j(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",q);for(let X=0;X<M.length;X++){let ne=E[X];ne!==null&&(E[X]=null,M[X].disconnect(ne))}I=null,H=null,v.reset(),e.setRenderTarget(p),f=null,h=null,d=null,r=null,C=null,nt.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(X){return Wo(this,null,function*(){if(r=X,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",j),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&(yield t.makeXRCompatible()),D=e.getPixelRatio(),e.getSize(O),r.renderState.layers===void 0){let ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),C=new Xi(f.framebufferWidth,f.framebufferHeight,{format:ci,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,xe=null,ce=null;m.depth&&(ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?Po:To,xe=m.stencil?Ro:as);let Pe={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(Pe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),C=new Xi(h.textureWidth,h.textureHeight,{format:ci,type:qi,depthTexture:new ed(h.textureWidth,h.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),nt.setContext(r),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function q(X){for(let ne=0;ne<X.removed.length;ne++){let xe=X.removed[ne],ce=E.indexOf(xe);ce>=0&&(E[ce]=null,M[ce].disconnect(xe))}for(let ne=0;ne<X.added.length;ne++){let xe=X.added[ne],ce=E.indexOf(xe);if(ce===-1){for(let He=0;He<M.length;He++)if(He>=E.length){E.push(xe),ce=He;break}else if(E[He]===null){E[He]=xe,ce=He;break}if(ce===-1)break}let Pe=M[ce];Pe&&Pe.connect(xe)}}let G=new R,Z=new R;function $(X,ne,xe){G.setFromMatrixPosition(ne.matrixWorld),Z.setFromMatrixPosition(xe.matrixWorld);let ce=G.distanceTo(Z),Pe=ne.projectionMatrix.elements,He=xe.projectionMatrix.elements,Ie=Pe[14]/(Pe[10]-1),et=Pe[14]/(Pe[10]+1),b=(Pe[9]+1)/Pe[5],se=(Pe[9]-1)/Pe[5],ee=(Pe[8]-1)/Pe[0],le=(He[8]+1)/He[0],Y=Ie*ee,Ae=Ie*le,de=ce/(-ee+le),_e=de*-ee;ne.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(_e),X.translateZ(de),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();let T=Ie+de,_=et+de,B=Y-_e,Q=Ae+(ce-_e),J=b*et/_*T,K=se*et/_*T;X.projectionMatrix.makePerspective(B,Q,J,K,T,_),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function fe(X,ne){ne===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ne.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;v.texture!==null&&(X.near=v.depthNear,X.far=v.depthFar),x.near=N.near=A.near=X.near,x.far=N.far=A.far=X.far,(I!==x.near||H!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),I=x.near,H=x.far,A.near=I,A.far=H,N.near=I,N.far=H,A.updateProjectionMatrix(),N.updateProjectionMatrix(),X.updateProjectionMatrix());let ne=X.parent,xe=x.cameras;fe(x,ne);for(let ce=0;ce<xe.length;ce++)fe(xe[ce],ne);xe.length===2?$(x,A,N):x.projectionMatrix.copy(A.projectionMatrix),ye(X,x,ne)};function ye(X,ne,xe){xe===null?X.matrix.copy(ne.matrixWorld):(X.matrix.copy(xe.matrixWorld),X.matrix.invert(),X.matrix.multiply(ne.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=No*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(X){c=X,h!==null&&(h.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let ge=null;function $e(X,ne){if(u=ne.getViewerPose(l||o),g=ne,u!==null){let xe=u.views;f!==null&&(e.setRenderTargetFramebuffer(C,f.framebuffer),e.setRenderTarget(C));let ce=!1;xe.length!==x.cameras.length&&(x.cameras.length=0,ce=!0);for(let He=0;He<xe.length;He++){let Ie=xe[He],et=null;if(f!==null)et=f.getViewport(Ie);else{let se=d.getViewSubImage(h,Ie);et=se.viewport,He===0&&(e.setRenderTargetTextures(C,se.colorTexture,h.ignoreDepthValues?void 0:se.depthStencilTexture),e.setRenderTarget(C))}let b=S[He];b===void 0&&(b=new rn,b.layers.enable(He),b.viewport=new zt,S[He]=b),b.matrix.fromArray(Ie.transform.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale),b.projectionMatrix.fromArray(Ie.projectionMatrix),b.projectionMatrixInverse.copy(b.projectionMatrix).invert(),b.viewport.set(et.x,et.y,et.width,et.height),He===0&&(x.matrix.copy(b.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ce===!0&&x.cameras.push(b)}let Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){let He=d.getDepthInformation(xe[0]);He&&He.isValid&&He.texture&&v.init(e,He,r.renderState)}}for(let xe=0;xe<M.length;xe++){let ce=E[xe],Pe=M[xe];ce!==null&&Pe!==void 0&&Pe.update(ce,ne,l||o)}ge&&ge(X,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}let nt=new sw;nt.setAnimationLoop($e),this.setAnimationLoop=function(X){ge=X},this.dispose=function(){}}},ts=new wr,_L=new Ct;function xL(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,rw(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,C,M,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,C,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===dn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===dn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let C=e.get(p),M=C.envMap,E=C.envMapRotation;M&&(m.envMap.value=M,ts.copy(E),ts.x*=-1,ts.y*=-1,ts.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),m.envMapRotation.value.setFromMatrix4(_L.makeRotationFromEuler(ts)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,C,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*C,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,C){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===dn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let C=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ML(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(C,M){let E=M.program;i.uniformBlockBinding(C,E)}function l(C,M){let E=r[C.id];E===void 0&&(g(C),E=u(C),r[C.id]=E,C.addEventListener("dispose",m));let O=M.program;i.updateUBOMapping(C,O);let D=e.render.frame;s[C.id]!==D&&(h(C),s[C.id]=D)}function u(C){let M=d();C.__bindingPointIndex=M;let E=n.createBuffer(),O=C.__size,D=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,O,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,E),E}function d(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(C){let M=r[C.id],E=C.uniforms,O=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let D=0,A=E.length;D<A;D++){let N=Array.isArray(E[D])?E[D]:[E[D]];for(let S=0,x=N.length;S<x;S++){let I=N[S];if(f(I,D,S,O)===!0){let H=I.__offset,U=Array.isArray(I.value)?I.value:[I.value],j=0;for(let q=0;q<U.length;q++){let G=U[q],Z=v(G);typeof G=="number"||typeof G=="boolean"?(I.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,H+j,I.__data)):G.isMatrix3?(I.__data[0]=G.elements[0],I.__data[1]=G.elements[1],I.__data[2]=G.elements[2],I.__data[3]=0,I.__data[4]=G.elements[3],I.__data[5]=G.elements[4],I.__data[6]=G.elements[5],I.__data[7]=0,I.__data[8]=G.elements[6],I.__data[9]=G.elements[7],I.__data[10]=G.elements[8],I.__data[11]=0):(G.toArray(I.__data,j),j+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(C,M,E,O){let D=C.value,A=M+"_"+E;if(O[A]===void 0)return typeof D=="number"||typeof D=="boolean"?O[A]=D:O[A]=D.clone(),!0;{let N=O[A];if(typeof D=="number"||typeof D=="boolean"){if(N!==D)return O[A]=D,!0}else if(N.equals(D)===!1)return N.copy(D),!0}return!1}function g(C){let M=C.uniforms,E=0,O=16;for(let A=0,N=M.length;A<N;A++){let S=Array.isArray(M[A])?M[A]:[M[A]];for(let x=0,I=S.length;x<I;x++){let H=S[x],U=Array.isArray(H.value)?H.value:[H.value];for(let j=0,q=U.length;j<q;j++){let G=U[j],Z=v(G),$=E%O;$!==0&&O-$<Z.boundary&&(E+=O-$),H.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=E,E+=Z.storage}}}let D=E%O;return D>0&&(E+=O-D),C.__size=E,C.__cache={},this}function v(C){let M={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(M.boundary=4,M.storage=4):C.isVector2?(M.boundary=8,M.storage=8):C.isVector3||C.isColor?(M.boundary=16,M.storage=12):C.isVector4?(M.boundary=16,M.storage=16):C.isMatrix3?(M.boundary=48,M.storage=48):C.isMatrix4?(M.boundary=64,M.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),M}function m(C){let M=C.target;M.removeEventListener("dispose",m);let E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(let C in r)n.deleteBuffer(r[C]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var td=class{constructor(e={}){let{canvas:t=A1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let f=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,p=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=si,this.toneMapping=xr,this.toneMappingExposure=1;let M=this,E=!1,O=0,D=0,A=null,N=-1,S=null,x=new zt,I=new zt,H=null,U=new Je(0),j=0,q=t.width,G=t.height,Z=1,$=null,fe=null,ye=new zt(0,0,q,G),ge=new zt(0,0,q,G),$e=!1,nt=new cc,X=!1,ne=!1,xe=new Ct,ce=new R,Pe=new zt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ie=!1;function et(){return A===null?Z:1}let b=i;function se(w,P){return t.getContext(w,P)}try{let w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fg}`),t.addEventListener("webglcontextlost",k,!1),t.addEventListener("webglcontextrestored",W,!1),t.addEventListener("webglcontextcreationerror",te,!1),b===null){let P="webgl2";if(b=se(P,w),b===null)throw se(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ee,le,Y,Ae,de,_e,T,_,B,Q,J,K,be,ae,me,Be,ie,pe,Qe,Ne,Me,Fe,Ve,yt;function y(){ee=new BN(b),ee.init(),Fe=new mL(b,ee),le=new NN(b,ee,e,Fe),Y=new hL(b),Ae=new HN(b),de=new eL,_e=new pL(b,ee,Y,de,le,Fe,Ae),T=new LN(M),_=new kN(M),B=new Y1(b),Ve=new RN(b,B),Q=new VN(b,B,Ae,Ve),J=new WN(b,Q,B,Ae),Qe=new GN(b,le,_e),Be=new ON(de),K=new QO(M,T,_,ee,le,Ve,Be),be=new xL(M,de),ae=new nL,me=new cL(ee),pe=new IN(M,T,_,Y,J,h,c),ie=new dL(M,J,le),yt=new ML(b,Ae,le,Y),Ne=new PN(b,ee,Ae),Me=new zN(b,ee,Ae),Ae.programs=K.programs,M.capabilities=le,M.extensions=ee,M.properties=de,M.renderLists=ae,M.shadowMap=ie,M.state=Y,M.info=Ae}y();let F=new fg(M,b);this.xr=F,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){let w=ee.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ee.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(w){w!==void 0&&(Z=w,this.setSize(q,G,!1))},this.getSize=function(w){return w.set(q,G)},this.setSize=function(w,P,V=!0){if(F.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,G=P,t.width=Math.floor(w*Z),t.height=Math.floor(P*Z),V===!0&&(t.style.width=w+"px",t.style.height=P+"px"),this.setViewport(0,0,w,P)},this.getDrawingBufferSize=function(w){return w.set(q*Z,G*Z).floor()},this.setDrawingBufferSize=function(w,P,V){q=w,G=P,Z=V,t.width=Math.floor(w*V),t.height=Math.floor(P*V),this.setViewport(0,0,w,P)},this.getCurrentViewport=function(w){return w.copy(x)},this.getViewport=function(w){return w.copy(ye)},this.setViewport=function(w,P,V,z){w.isVector4?ye.set(w.x,w.y,w.z,w.w):ye.set(w,P,V,z),Y.viewport(x.copy(ye).multiplyScalar(Z).round())},this.getScissor=function(w){return w.copy(ge)},this.setScissor=function(w,P,V,z){w.isVector4?ge.set(w.x,w.y,w.z,w.w):ge.set(w,P,V,z),Y.scissor(I.copy(ge).multiplyScalar(Z).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(w){Y.setScissorTest($e=w)},this.setOpaqueSort=function(w){$=w},this.setTransparentSort=function(w){fe=w},this.getClearColor=function(w){return w.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(w=!0,P=!0,V=!0){let z=0;if(w){let L=!1;if(A!==null){let oe=A.texture.format;L=oe===Gg||oe===Hg||oe===zg}if(L){let oe=A.texture.type,ve=oe===qi||oe===as||oe===sc||oe===Ro||oe===Bg||oe===Vg,we=pe.getClearColor(),Se=pe.getClearAlpha(),Oe=we.r,ke=we.g,De=we.b;ve?(f[0]=Oe,f[1]=ke,f[2]=De,f[3]=Se,b.clearBufferuiv(b.COLOR,0,f)):(g[0]=Oe,g[1]=ke,g[2]=De,g[3]=Se,b.clearBufferiv(b.COLOR,0,g))}else z|=b.COLOR_BUFFER_BIT}P&&(z|=b.DEPTH_BUFFER_BIT),V&&(z|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",k,!1),t.removeEventListener("webglcontextrestored",W,!1),t.removeEventListener("webglcontextcreationerror",te,!1),ae.dispose(),me.dispose(),de.dispose(),T.dispose(),_.dispose(),J.dispose(),Ve.dispose(),yt.dispose(),K.dispose(),F.dispose(),F.removeEventListener("sessionstart",Pt),F.removeEventListener("sessionend",Ki),$t.stop()};function k(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function W(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let w=Ae.autoReset,P=ie.enabled,V=ie.autoUpdate,z=ie.needsUpdate,L=ie.type;y(),Ae.autoReset=w,ie.enabled=P,ie.autoUpdate=V,ie.needsUpdate=z,ie.type=L}function te(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ee(w){let P=w.target;P.removeEventListener("dispose",Ee),Ue(P)}function Ue(w){At(w),de.remove(w)}function At(w){let P=de.get(w).programs;P!==void 0&&(P.forEach(function(V){K.releaseProgram(V)}),w.isShaderMaterial&&K.releaseShaderCache(w))}this.renderBufferDirect=function(w,P,V,z,L,oe){P===null&&(P=He);let ve=L.isMesh&&L.matrixWorld.determinant()<0,we=Lw(w,P,V,z,L);Y.setMaterial(z,ve);let Se=V.index,Oe=1;if(z.wireframe===!0){if(Se=Q.getWireframeAttribute(V),Se===void 0)return;Oe=2}let ke=V.drawRange,De=V.attributes.position,lt=ke.start*Oe,St=(ke.start+ke.count)*Oe;oe!==null&&(lt=Math.max(lt,oe.start*Oe),St=Math.min(St,(oe.start+oe.count)*Oe)),Se!==null?(lt=Math.max(lt,0),St=Math.min(St,Se.count)):De!=null&&(lt=Math.max(lt,0),St=Math.min(St,De.count));let bt=St-lt;if(bt<0||bt===1/0)return;Ve.setup(L,z,we,V,Se);let pn,ut=Ne;if(Se!==null&&(pn=B.get(Se),ut=Me,ut.setIndex(pn)),L.isMesh)z.wireframe===!0?(Y.setLineWidth(z.wireframeLinewidth*et()),ut.setMode(b.LINES)):ut.setMode(b.TRIANGLES);else if(L.isLine){let Te=z.linewidth;Te===void 0&&(Te=1),Y.setLineWidth(Te*et()),L.isLineSegments?ut.setMode(b.LINES):L.isLineLoop?ut.setMode(b.LINE_LOOP):ut.setMode(b.LINE_STRIP)}else L.isPoints?ut.setMode(b.POINTS):L.isSprite&&ut.setMode(b.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)ut.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))ut.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{let Te=L._multiDrawStarts,qt=L._multiDrawCounts,dt=L._multiDrawCount,Gn=Se?B.get(Se).bytesPerElement:1,vs=de.get(z).currentProgram.getUniforms();for(let mn=0;mn<dt;mn++)vs.setValue(b,"_gl_DrawID",mn),ut.render(Te[mn]/Gn,qt[mn])}else if(L.isInstancedMesh)ut.renderInstances(lt,bt,L.count);else if(V.isInstancedBufferGeometry){let Te=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,qt=Math.min(V.instanceCount,Te);ut.renderInstances(lt,bt,qt)}else ut.render(lt,bt)};function Ft(w,P,V){w.transparent===!0&&w.side===Wi&&w.forceSinglePass===!1?(w.side=dn,w.needsUpdate=!0,Sc(w,P,V),w.side=Mr,w.needsUpdate=!0,Sc(w,P,V),w.side=Wi):Sc(w,P,V)}this.compile=function(w,P,V=null){V===null&&(V=w),m=me.get(V),m.init(P),C.push(m),V.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(m.pushLight(L),L.castShadow&&m.pushShadow(L))}),w!==V&&w.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(m.pushLight(L),L.castShadow&&m.pushShadow(L))}),m.setupLights();let z=new Set;return w.traverse(function(L){let oe=L.material;if(oe)if(Array.isArray(oe))for(let ve=0;ve<oe.length;ve++){let we=oe[ve];Ft(we,V,L),z.add(we)}else Ft(oe,V,L),z.add(oe)}),C.pop(),m=null,z},this.compileAsync=function(w,P,V=null){let z=this.compile(w,P,V);return new Promise(L=>{function oe(){if(z.forEach(function(ve){de.get(ve).currentProgram.isReady()&&z.delete(ve)}),z.size===0){L(w);return}setTimeout(oe,10)}ee.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let ct=null;function Ut(w){ct&&ct(w)}function Pt(){$t.stop()}function Ki(){$t.start()}let $t=new sw;$t.setAnimationLoop(Ut),typeof self<"u"&&$t.setContext(self),this.setAnimationLoop=function(w){ct=w,F.setAnimationLoop(w),w===null?$t.stop():$t.start()},F.addEventListener("sessionstart",Pt),F.addEventListener("sessionend",Ki),this.render=function(w,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),F.enabled===!0&&F.isPresenting===!0&&(F.cameraAutoUpdate===!0&&F.updateCamera(P),P=F.getCamera()),w.isScene===!0&&w.onBeforeRender(M,w,P,A),m=me.get(w,C.length),m.init(P),C.push(m),xe.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),nt.setFromProjectionMatrix(xe),ne=this.localClippingEnabled,X=Be.init(this.clippingPlanes,ne),v=ae.get(w,p.length),v.init(),p.push(v),F.enabled===!0&&F.isPresenting===!0){let oe=M.xr.getDepthSensingMesh();oe!==null&&Di(oe,P,-1/0,M.sortObjects)}Di(w,P,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort($,fe),Ie=F.enabled===!1||F.isPresenting===!1||F.hasDepthSensing()===!1,Ie&&pe.addToRenderList(v,w),this.info.render.frame++,X===!0&&Be.beginShadows();let V=m.state.shadowsArray;ie.render(V,w,P),X===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=v.opaque,L=v.transmissive;if(m.setupLights(),P.isArrayCamera){let oe=P.cameras;if(L.length>0)for(let ve=0,we=oe.length;ve<we;ve++){let Se=oe[ve];Go(z,L,w,Se)}Ie&&pe.render(w);for(let ve=0,we=oe.length;ve<we;ve++){let Se=oe[ve];Ar(v,w,Se,Se.viewport)}}else L.length>0&&Go(z,L,w,P),Ie&&pe.render(w),Ar(v,w,P);A!==null&&(_e.updateMultisampleRenderTarget(A),_e.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(M,w,P),Ve.resetDefaultState(),N=-1,S=null,C.pop(),C.length>0?(m=C[C.length-1],X===!0&&Be.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Di(w,P,V,z){if(w.visible===!1)return;if(w.layers.test(P.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(P);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||nt.intersectsSprite(w)){z&&Pe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(xe);let ve=J.update(w),we=w.material;we.visible&&v.push(w,ve,we,V,Pe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||nt.intersectsObject(w))){let ve=J.update(w),we=w.material;if(z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Pe.copy(w.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Pe.copy(ve.boundingSphere.center)),Pe.applyMatrix4(w.matrixWorld).applyMatrix4(xe)),Array.isArray(we)){let Se=ve.groups;for(let Oe=0,ke=Se.length;Oe<ke;Oe++){let De=Se[Oe],lt=we[De.materialIndex];lt&&lt.visible&&v.push(w,ve,lt,V,Pe.z,De)}}else we.visible&&v.push(w,ve,we,V,Pe.z,null)}}let oe=w.children;for(let ve=0,we=oe.length;ve<we;ve++)Di(oe[ve],P,V,z)}function Ar(w,P,V,z){let L=w.opaque,oe=w.transmissive,ve=w.transparent;m.setupLightsView(V),X===!0&&Be.setGlobalState(M.clippingPlanes,V),z&&Y.viewport(x.copy(z)),L.length>0&&wc(L,P,V),oe.length>0&&wc(oe,P,V),ve.length>0&&wc(ve,P,V),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function Go(w,P,V,z){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[z.id]===void 0&&(m.state.transmissionRenderTarget[z.id]=new Xi(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?_c:qi,minFilter:os,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));let oe=m.state.transmissionRenderTarget[z.id],ve=z.viewport||x;oe.setSize(ve.z,ve.w);let we=M.getRenderTarget();M.setRenderTarget(oe),M.getClearColor(U),j=M.getClearAlpha(),j<1&&M.setClearColor(16777215,.5),Ie?pe.render(V):M.clear();let Se=M.toneMapping;M.toneMapping=xr;let Oe=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),m.setupLightsView(z),X===!0&&Be.setGlobalState(M.clippingPlanes,z),wc(w,V,z),_e.updateMultisampleRenderTarget(oe),_e.updateRenderTargetMipmap(oe),ee.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let De=0,lt=P.length;De<lt;De++){let St=P[De],bt=St.object,pn=St.geometry,ut=St.material,Te=St.group;if(ut.side===Wi&&bt.layers.test(z.layers)){let qt=ut.side;ut.side=dn,ut.needsUpdate=!0,nv(bt,V,z,pn,ut,Te),ut.side=qt,ut.needsUpdate=!0,ke=!0}}ke===!0&&(_e.updateMultisampleRenderTarget(oe),_e.updateRenderTargetMipmap(oe))}M.setRenderTarget(we),M.setClearColor(U,j),Oe!==void 0&&(z.viewport=Oe),M.toneMapping=Se}function wc(w,P,V){let z=P.isScene===!0?P.overrideMaterial:null;for(let L=0,oe=w.length;L<oe;L++){let ve=w[L],we=ve.object,Se=ve.geometry,Oe=z===null?ve.material:z,ke=ve.group;we.layers.test(V.layers)&&nv(we,P,V,Se,Oe,ke)}}function nv(w,P,V,z,L,oe){w.onBeforeRender(M,P,V,z,L,oe),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),L.transparent===!0&&L.side===Wi&&L.forceSinglePass===!1?(L.side=dn,L.needsUpdate=!0,M.renderBufferDirect(V,P,z,L,w,oe),L.side=Mr,L.needsUpdate=!0,M.renderBufferDirect(V,P,z,L,w,oe),L.side=Wi):M.renderBufferDirect(V,P,z,L,w,oe),w.onAfterRender(M,P,V,z,L,oe)}function Sc(w,P,V){P.isScene!==!0&&(P=He);let z=de.get(w),L=m.state.lights,oe=m.state.shadowsArray,ve=L.state.version,we=K.getParameters(w,L.state,oe,P,V),Se=K.getProgramCacheKey(we),Oe=z.programs;z.environment=w.isMeshStandardMaterial?P.environment:null,z.fog=P.fog,z.envMap=(w.isMeshStandardMaterial?_:T).get(w.envMap||z.environment),z.envMapRotation=z.environment!==null&&w.envMap===null?P.environmentRotation:w.envMapRotation,Oe===void 0&&(w.addEventListener("dispose",Ee),Oe=new Map,z.programs=Oe);let ke=Oe.get(Se);if(ke!==void 0){if(z.currentProgram===ke&&z.lightsStateVersion===ve)return rv(w,we),ke}else we.uniforms=K.getUniforms(w),w.onBeforeCompile(we,M),ke=K.acquireProgram(we,Se),Oe.set(Se,ke),z.uniforms=we.uniforms;let De=z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(De.clippingPlanes=Be.uniform),rv(w,we),z.needsLights=Uw(w),z.lightsStateVersion=ve,z.needsLights&&(De.ambientLightColor.value=L.state.ambient,De.lightProbe.value=L.state.probe,De.directionalLights.value=L.state.directional,De.directionalLightShadows.value=L.state.directionalShadow,De.spotLights.value=L.state.spot,De.spotLightShadows.value=L.state.spotShadow,De.rectAreaLights.value=L.state.rectArea,De.ltc_1.value=L.state.rectAreaLTC1,De.ltc_2.value=L.state.rectAreaLTC2,De.pointLights.value=L.state.point,De.pointLightShadows.value=L.state.pointShadow,De.hemisphereLights.value=L.state.hemi,De.directionalShadowMap.value=L.state.directionalShadowMap,De.directionalShadowMatrix.value=L.state.directionalShadowMatrix,De.spotShadowMap.value=L.state.spotShadowMap,De.spotLightMatrix.value=L.state.spotLightMatrix,De.spotLightMap.value=L.state.spotLightMap,De.pointShadowMap.value=L.state.pointShadowMap,De.pointShadowMatrix.value=L.state.pointShadowMatrix),z.currentProgram=ke,z.uniformsList=null,ke}function iv(w){if(w.uniformsList===null){let P=w.currentProgram.getUniforms();w.uniformsList=Ao.seqWithValue(P.seq,w.uniforms)}return w.uniformsList}function rv(w,P){let V=de.get(w);V.outputColorSpace=P.outputColorSpace,V.batching=P.batching,V.batchingColor=P.batchingColor,V.instancing=P.instancing,V.instancingColor=P.instancingColor,V.instancingMorph=P.instancingMorph,V.skinning=P.skinning,V.morphTargets=P.morphTargets,V.morphNormals=P.morphNormals,V.morphColors=P.morphColors,V.morphTargetsCount=P.morphTargetsCount,V.numClippingPlanes=P.numClippingPlanes,V.numIntersection=P.numClipIntersection,V.vertexAlphas=P.vertexAlphas,V.vertexTangents=P.vertexTangents,V.toneMapping=P.toneMapping}function Lw(w,P,V,z,L){P.isScene!==!0&&(P=He),_e.resetTextureUnits();let oe=P.fog,ve=z.isMeshStandardMaterial?P.environment:null,we=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:br,Se=(z.isMeshStandardMaterial?_:T).get(z.envMap||ve),Oe=z.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ke=!!V.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),De=!!V.morphAttributes.position,lt=!!V.morphAttributes.normal,St=!!V.morphAttributes.color,bt=xr;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(bt=M.toneMapping);let pn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ut=pn!==void 0?pn.length:0,Te=de.get(z),qt=m.state.lights;if(X===!0&&(ne===!0||w!==S)){let Cn=w===S&&z.id===N;Be.setState(z,w,Cn)}let dt=!1;z.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==qt.state.version||Te.outputColorSpace!==we||L.isBatchedMesh&&Te.batching===!1||!L.isBatchedMesh&&Te.batching===!0||L.isBatchedMesh&&Te.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Te.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Te.instancing===!1||!L.isInstancedMesh&&Te.instancing===!0||L.isSkinnedMesh&&Te.skinning===!1||!L.isSkinnedMesh&&Te.skinning===!0||L.isInstancedMesh&&Te.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Te.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Te.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Te.instancingMorph===!1&&L.morphTexture!==null||Te.envMap!==Se||z.fog===!0&&Te.fog!==oe||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Be.numPlanes||Te.numIntersection!==Be.numIntersection)||Te.vertexAlphas!==Oe||Te.vertexTangents!==ke||Te.morphTargets!==De||Te.morphNormals!==lt||Te.morphColors!==St||Te.toneMapping!==bt||Te.morphTargetsCount!==ut)&&(dt=!0):(dt=!0,Te.__version=z.version);let Gn=Te.currentProgram;dt===!0&&(Gn=Sc(z,P,L));let vs=!1,mn=!1,Fd=!1,Nt=Gn.getUniforms(),Ji=Te.uniforms;if(Y.useProgram(Gn.program)&&(vs=!0,mn=!0,Fd=!0),z.id!==N&&(N=z.id,mn=!0),vs||S!==w){Nt.setValue(b,"projectionMatrix",w.projectionMatrix),Nt.setValue(b,"viewMatrix",w.matrixWorldInverse);let Cn=Nt.map.cameraPosition;Cn!==void 0&&Cn.setValue(b,ce.setFromMatrixPosition(w.matrixWorld)),le.logarithmicDepthBuffer&&Nt.setValue(b,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Nt.setValue(b,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,mn=!0,Fd=!0)}if(L.isSkinnedMesh){Nt.setOptional(b,L,"bindMatrix"),Nt.setOptional(b,L,"bindMatrixInverse");let Cn=L.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Nt.setValue(b,"boneTexture",Cn.boneTexture,_e))}L.isBatchedMesh&&(Nt.setOptional(b,L,"batchingTexture"),Nt.setValue(b,"batchingTexture",L._matricesTexture,_e),Nt.setOptional(b,L,"batchingIdTexture"),Nt.setValue(b,"batchingIdTexture",L._indirectTexture,_e),Nt.setOptional(b,L,"batchingColorTexture"),L._colorsTexture!==null&&Nt.setValue(b,"batchingColorTexture",L._colorsTexture,_e));let Ud=V.morphAttributes;if((Ud.position!==void 0||Ud.normal!==void 0||Ud.color!==void 0)&&Qe.update(L,V,Gn),(mn||Te.receiveShadow!==L.receiveShadow)&&(Te.receiveShadow=L.receiveShadow,Nt.setValue(b,"receiveShadow",L.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Ji.envMap.value=Se,Ji.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&P.environment!==null&&(Ji.envMapIntensity.value=P.environmentIntensity),mn&&(Nt.setValue(b,"toneMappingExposure",M.toneMappingExposure),Te.needsLights&&Fw(Ji,Fd),oe&&z.fog===!0&&be.refreshFogUniforms(Ji,oe),be.refreshMaterialUniforms(Ji,z,Z,G,m.state.transmissionRenderTarget[w.id]),Ao.upload(b,iv(Te),Ji,_e)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ao.upload(b,iv(Te),Ji,_e),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Nt.setValue(b,"center",L.center),Nt.setValue(b,"modelViewMatrix",L.modelViewMatrix),Nt.setValue(b,"normalMatrix",L.normalMatrix),Nt.setValue(b,"modelMatrix",L.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let Cn=z.uniformsGroups;for(let kd=0,kw=Cn.length;kd<kw;kd++){let sv=Cn[kd];yt.update(sv,Gn),yt.bind(sv,Gn)}}return Gn}function Fw(w,P){w.ambientLightColor.needsUpdate=P,w.lightProbe.needsUpdate=P,w.directionalLights.needsUpdate=P,w.directionalLightShadows.needsUpdate=P,w.pointLights.needsUpdate=P,w.pointLightShadows.needsUpdate=P,w.spotLights.needsUpdate=P,w.spotLightShadows.needsUpdate=P,w.rectAreaLights.needsUpdate=P,w.hemisphereLights.needsUpdate=P}function Uw(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,P,V){de.get(w.texture).__webglTexture=P,de.get(w.depthTexture).__webglTexture=V;let z=de.get(w);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=V===void 0,z.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,P){let V=de.get(w);V.__webglFramebuffer=P,V.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(w,P=0,V=0){A=w,O=P,D=V;let z=!0,L=null,oe=!1,ve=!1;if(w){let Se=de.get(w);Se.__useDefaultFramebuffer!==void 0?(Y.bindFramebuffer(b.FRAMEBUFFER,null),z=!1):Se.__webglFramebuffer===void 0?_e.setupRenderTarget(w):Se.__hasExternalTextures&&_e.rebindTextures(w,de.get(w.texture).__webglTexture,de.get(w.depthTexture).__webglTexture);let Oe=w.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ve=!0);let ke=de.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ke[P])?L=ke[P][V]:L=ke[P],oe=!0):w.samples>0&&_e.useMultisampledRTT(w)===!1?L=de.get(w).__webglMultisampledFramebuffer:Array.isArray(ke)?L=ke[V]:L=ke,x.copy(w.viewport),I.copy(w.scissor),H=w.scissorTest}else x.copy(ye).multiplyScalar(Z).floor(),I.copy(ge).multiplyScalar(Z).floor(),H=$e;if(Y.bindFramebuffer(b.FRAMEBUFFER,L)&&z&&Y.drawBuffers(w,L),Y.viewport(x),Y.scissor(I),Y.setScissorTest(H),oe){let Se=de.get(w.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+P,Se.__webglTexture,V)}else if(ve){let Se=de.get(w.texture),Oe=P||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Se.__webglTexture,V||0,Oe)}N=-1},this.readRenderTargetPixels=function(w,P,V,z,L,oe,ve){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=de.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ve!==void 0&&(we=we[ve]),we){Y.bindFramebuffer(b.FRAMEBUFFER,we);try{let Se=w.texture,Oe=Se.format,ke=Se.type;if(!le.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=w.width-z&&V>=0&&V<=w.height-L&&b.readPixels(P,V,z,L,Fe.convert(Oe),Fe.convert(ke),oe)}finally{let Se=A!==null?de.get(A).__webglFramebuffer:null;Y.bindFramebuffer(b.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=function(w,P,V,z,L,oe,ve){return Wo(this,null,function*(){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=de.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ve!==void 0&&(we=we[ve]),we){Y.bindFramebuffer(b.FRAMEBUFFER,we);try{let Se=w.texture,Oe=Se.format,ke=Se.type;if(!le.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=w.width-z&&V>=0&&V<=w.height-L){let De=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,De),b.bufferData(b.PIXEL_PACK_BUFFER,oe.byteLength,b.STREAM_READ),b.readPixels(P,V,z,L,Fe.convert(Oe),Fe.convert(ke),0),b.flush();let lt=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);yield D1(b,lt,4);try{b.bindBuffer(b.PIXEL_PACK_BUFFER,De),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,oe)}finally{b.deleteBuffer(De),b.deleteSync(lt)}return oe}}finally{let Se=A!==null?de.get(A).__webglFramebuffer:null;Y.bindFramebuffer(b.FRAMEBUFFER,Se)}}})},this.copyFramebufferToTexture=function(w,P=null,V=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,w=arguments[1]);let z=Math.pow(2,-V),L=Math.floor(w.image.width*z),oe=Math.floor(w.image.height*z),ve=P!==null?P.x:0,we=P!==null?P.y:0;_e.setTexture2D(w,0),b.copyTexSubImage2D(b.TEXTURE_2D,V,0,0,ve,we,L,oe),Y.unbindTexture()},this.copyTextureToTexture=function(w,P,V=null,z=null,L=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,w=arguments[1],P=arguments[2],L=arguments[3]||0,V=null);let oe,ve,we,Se,Oe,ke;V!==null?(oe=V.max.x-V.min.x,ve=V.max.y-V.min.y,we=V.min.x,Se=V.min.y):(oe=w.image.width,ve=w.image.height,we=0,Se=0),z!==null?(Oe=z.x,ke=z.y):(Oe=0,ke=0);let De=Fe.convert(P.format),lt=Fe.convert(P.type);_e.setTexture2D(P,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,P.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,P.unpackAlignment);let St=b.getParameter(b.UNPACK_ROW_LENGTH),bt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),pn=b.getParameter(b.UNPACK_SKIP_PIXELS),ut=b.getParameter(b.UNPACK_SKIP_ROWS),Te=b.getParameter(b.UNPACK_SKIP_IMAGES),qt=w.isCompressedTexture?w.mipmaps[L]:w.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,qt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,qt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,we),b.pixelStorei(b.UNPACK_SKIP_ROWS,Se),w.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,L,Oe,ke,oe,ve,De,lt,qt.data):w.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,L,Oe,ke,qt.width,qt.height,De,qt.data):b.texSubImage2D(b.TEXTURE_2D,L,Oe,ke,oe,ve,De,lt,qt),b.pixelStorei(b.UNPACK_ROW_LENGTH,St),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,bt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,pn),b.pixelStorei(b.UNPACK_SKIP_ROWS,ut),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Te),L===0&&P.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),Y.unbindTexture()},this.copyTextureToTexture3D=function(w,P,V=null,z=null,L=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,z=arguments[1]||null,w=arguments[2],P=arguments[3],L=arguments[4]||0);let oe,ve,we,Se,Oe,ke,De,lt,St,bt=w.isCompressedTexture?w.mipmaps[L]:w.image;V!==null?(oe=V.max.x-V.min.x,ve=V.max.y-V.min.y,we=V.max.z-V.min.z,Se=V.min.x,Oe=V.min.y,ke=V.min.z):(oe=bt.width,ve=bt.height,we=bt.depth,Se=0,Oe=0,ke=0),z!==null?(De=z.x,lt=z.y,St=z.z):(De=0,lt=0,St=0);let pn=Fe.convert(P.format),ut=Fe.convert(P.type),Te;if(P.isData3DTexture)_e.setTexture3D(P,0),Te=b.TEXTURE_3D;else if(P.isDataArrayTexture||P.isCompressedArrayTexture)_e.setTexture2DArray(P,0),Te=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,P.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,P.unpackAlignment);let qt=b.getParameter(b.UNPACK_ROW_LENGTH),dt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Gn=b.getParameter(b.UNPACK_SKIP_PIXELS),vs=b.getParameter(b.UNPACK_SKIP_ROWS),mn=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,bt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,bt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Se),b.pixelStorei(b.UNPACK_SKIP_ROWS,Oe),b.pixelStorei(b.UNPACK_SKIP_IMAGES,ke),w.isDataTexture||w.isData3DTexture?b.texSubImage3D(Te,L,De,lt,St,oe,ve,we,pn,ut,bt.data):P.isCompressedArrayTexture?b.compressedTexSubImage3D(Te,L,De,lt,St,oe,ve,we,pn,bt.data):b.texSubImage3D(Te,L,De,lt,St,oe,ve,we,pn,ut,bt),b.pixelStorei(b.UNPACK_ROW_LENGTH,qt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,dt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Gn),b.pixelStorei(b.UNPACK_SKIP_ROWS,vs),b.pixelStorei(b.UNPACK_SKIP_IMAGES,mn),L===0&&P.generateMipmaps&&b.generateMipmap(Te),Y.unbindTexture()},this.initRenderTarget=function(w){de.get(w).__webglFramebuffer===void 0&&_e.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?_e.setTextureCube(w,0):w.isData3DTexture?_e.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?_e.setTexture2DArray(w,0):_e.setTexture2D(w,0),Y.unbindTexture()},this.resetState=function(){O=0,D=0,A=null,Y.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===jg?"display-p3":"srgb",t.unpackColorSpace=ft.workingColorSpace===wd?"display-p3":"srgb"}};var nd=class extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wr,this.environmentIntensity=1,this.environmentRotation=new wr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var lc=class extends Yi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},id=new R,rd=new R,IM=new Ct,Za=new Lo,Au=new Oo,mm=new R,RM=new R,uc=class extends fn{constructor(e=new sn,t=new lc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)id.fromBufferAttribute(t,r-1),rd.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=id.distanceTo(rd);e.setAttribute("lineDistance",new wt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Au.copy(i.boundingSphere),Au.applyMatrix4(r),Au.radius+=s,e.ray.intersectsSphere(Au)===!1)return;IM.copy(r).invert(),Za.copy(e.ray).applyMatrix4(IM);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){let p=u.getX(v),C=u.getX(v+1),M=Du(this,e,Za,c,p,C);M&&t.push(M)}if(this.isLineLoop){let v=u.getX(g-1),m=u.getX(f),p=Du(this,e,Za,c,v,m);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){let p=Du(this,e,Za,c,v,v+1);p&&t.push(p)}if(this.isLineLoop){let v=Du(this,e,Za,c,g-1,f);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Du(n,e,t,i,r,s){let o=n.geometry.attributes.position;if(id.fromBufferAttribute(o,r),rd.fromBufferAttribute(o,s),t.distanceSqToSegment(id,rd,mm,RM)>i)return;mm.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(mm);if(!(c<e.near||c>e.far))return{distance:c,point:RM.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}var PM=new R,NM=new R,pg=class extends uc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)PM.fromBufferAttribute(t,r),NM.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+PM.distanceTo(NM);e.setAttribute("lineDistance",new wt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ls=class extends Tr{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),r=0,s=i.length,o;t?o=t:o=e*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);let u=i[r],h=i[r+1]-u,f=(o-u)/h;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new re:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new R,r=[],s=[],o=[],a=new R,c=new Ct;for(let f=0;f<=e;f++){let g=f/e;r[f]=this.getTangentAt(g,new R)}s[0]=new R,o[0]=new R;let l=Number.MAX_VALUE,u=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(jt(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(jt(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],f*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},dc=class extends Hn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new re){let i=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},mg=class extends dc{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Xg(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,d){let h=(o-s)/l-(a-s)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+d)+(c-a)/d;h*=u,f*=u,r(o,a,h,f)},calc:function(s){let o=s*s,a=o*s;return n+e*s+t*o+i*a}}}var Iu=new R,gm=new Xg,vm=new Xg,ym=new Xg,gg=class extends Hn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new R){let i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(Iu.subVectors(r[0],r[1]).add(r[0]),l=Iu);let d=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Iu.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Iu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),gm.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,v,m),vm.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,v,m),ym.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(gm.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),vm.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),ym.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return i.set(gm.calc(c),vm.calc(c),ym.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function OM(n,e,t,i,r){let s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function wL(n,e){let t=1-n;return t*t*e}function SL(n,e){return 2*(1-n)*n*e}function bL(n,e){return n*n*e}function tc(n,e,t,i){return wL(n,e)+SL(n,t)+bL(n,i)}function EL(n,e){let t=1-n;return t*t*t*e}function TL(n,e){let t=1-n;return 3*t*t*n*e}function CL(n,e){return 3*(1-n)*n*n*e}function AL(n,e){return n*n*n*e}function nc(n,e,t,i,r){return EL(n,e)+TL(n,t)+CL(n,i)+AL(n,r)}var sd=class extends Hn{constructor(e=new re,t=new re,i=new re,r=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new re){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(nc(e,r.x,s.x,o.x,a.x),nc(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vg=class extends Hn{constructor(e=new R,t=new R,i=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new R){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(nc(e,r.x,s.x,o.x,a.x),nc(e,r.y,s.y,o.y,a.y),nc(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},od=class extends Hn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yg=class extends Hn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ad=class extends Hn{constructor(e=new re,t=new re,i=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new re){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(tc(e,r.x,s.x,o.x),tc(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_g=class extends Hn{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(tc(e,r.x,s.x,o.x),tc(e,r.y,s.y,o.y),tc(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cd=class extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(OM(a,c.x,l.x,u.x,d.x),OM(a,c.y,l.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new re().fromArray(r))}return this}},xg=Object.freeze({__proto__:null,ArcCurve:mg,CatmullRomCurve3:gg,CubicBezierCurve:sd,CubicBezierCurve3:vg,EllipseCurve:dc,LineCurve:od,LineCurve3:yg,QuadraticBezierCurve:ad,QuadraticBezierCurve3:_g,SplineCurve:cd}),Mg=class extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xg[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let o=r[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new xg[r.type]().fromJSON(r))}return this}},ld=class extends Mg{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new od(this.currentPoint.clone(),new re(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new ad(this.currentPoint.clone(),new re(e,t),new re(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){let a=new sd(this.currentPoint.clone(),new re(e,t),new re(i,r),new re(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new cd(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,r,s,o,a,c),this}absellipse(e,t,i,r,s,o,a,c){let l=new dc(e,t,i,r,s,o,a,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Zi=class n extends sn{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let u=[],d=[],h=[],f=[],g=0,v=[],m=i/2,p=0;C(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new wt(d,3)),this.setAttribute("normal",new wt(h,3)),this.setAttribute("uv",new wt(f,2));function C(){let E=new R,O=new R,D=0,A=(t-e)/i;for(let N=0;N<=s;N++){let S=[],x=N/s,I=x*(t-e)+e;for(let H=0;H<=r;H++){let U=H/r,j=U*c+a,q=Math.sin(j),G=Math.cos(j);O.x=I*q,O.y=-x*i+m,O.z=I*G,d.push(O.x,O.y,O.z),E.set(q,A,G).normalize(),h.push(E.x,E.y,E.z),f.push(U,1-x),S.push(g++)}v.push(S)}for(let N=0;N<r;N++)for(let S=0;S<s;S++){let x=v[S][N],I=v[S+1][N],H=v[S+1][N+1],U=v[S][N+1];u.push(x,I,U),u.push(I,H,U),D+=6}l.addGroup(p,D,0),p+=D}function M(E){let O=g,D=new re,A=new R,N=0,S=E===!0?e:t,x=E===!0?1:-1;for(let H=1;H<=r;H++)d.push(0,m*x,0),h.push(0,x,0),f.push(.5,.5),g++;let I=g;for(let H=0;H<=r;H++){let j=H/r*c+a,q=Math.cos(j),G=Math.sin(j);A.x=S*G,A.y=m*x,A.z=S*q,d.push(A.x,A.y,A.z),h.push(0,x,0),D.x=q*.5+.5,D.y=G*.5*x+.5,f.push(D.x,D.y),g++}for(let H=0;H<r;H++){let U=O+H,j=I+H;E===!0?u.push(j,j+1,U):u.push(j+1,j,U),N+=3}l.addGroup(p,N,E===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var hc=class extends ld{constructor(e){super(e),this.uuid=ms(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new ld().fromJSON(r))}return this}},DL={triangulate:function(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=uw(n,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l,u,d,h,f;if(i&&(s=OL(n,e,s,t)),n.length>80*t){a=l=n[0],c=u=n[1];for(let g=t;g<r;g+=t)d=n[g],h=n[g+1],d<a&&(a=d),h<c&&(c=h),d>l&&(l=d),h>u&&(u=h);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return fc(s,o,t,a,c,f,0),o}};function uw(n,e,t,i,r){let s,o;if(r===jL(n,e,t,i)>0)for(s=e;s<t;s+=i)o=LM(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=LM(s,n[s],n[s+1],o);return o&&bd(o,o.next)&&(mc(o),o=o.next),o}function us(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(bd(t,t.next)||xt(t.prev,t,t.next)===0)){if(mc(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function fc(n,e,t,i,r,s,o){if(!n)return;!o&&s&&BL(n,i,r,s);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,s?RL(n,i,r,s):IL(n)){e.push(c.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),mc(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=PL(us(n),e,t),fc(n,e,t,i,r,s,2)):o===2&&NL(n,e,t,i,r,s):fc(us(n),e,t,i,r,s,1);break}}}function IL(n){let e=n.prev,t=n,i=n.next;if(xt(e,t,i)>=0)return!1;let r=e.x,s=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=r<s?r<o?r:o:s<o?s:o,d=a<c?a<l?a:l:c<l?c:l,h=r>s?r>o?r:o:s>o?s:o,f=a>c?a>l?a:l:c>l?c:l,g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&bo(r,a,s,c,o,l,g.x,g.y)&&xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function RL(n,e,t,i){let r=n.prev,s=n,o=n.next;if(xt(r,s,o)>=0)return!1;let a=r.x,c=s.x,l=o.x,u=r.y,d=s.y,h=o.y,f=a<c?a<l?a:l:c<l?c:l,g=u<d?u<h?u:h:d<h?d:h,v=a>c?a>l?a:l:c>l?c:l,m=u>d?u>h?u:h:d>h?d:h,p=wg(f,g,e,t,i),C=wg(v,m,e,t,i),M=n.prevZ,E=n.nextZ;for(;M&&M.z>=p&&E&&E.z<=C;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==r&&M!==o&&bo(a,u,c,d,l,h,M.x,M.y)&&xt(M.prev,M,M.next)>=0||(M=M.prevZ,E.x>=f&&E.x<=v&&E.y>=g&&E.y<=m&&E!==r&&E!==o&&bo(a,u,c,d,l,h,E.x,E.y)&&xt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==r&&M!==o&&bo(a,u,c,d,l,h,M.x,M.y)&&xt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;E&&E.z<=C;){if(E.x>=f&&E.x<=v&&E.y>=g&&E.y<=m&&E!==r&&E!==o&&bo(a,u,c,d,l,h,E.x,E.y)&&xt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function PL(n,e,t){let i=n;do{let r=i.prev,s=i.next.next;!bd(r,s)&&dw(r,i,i.next,s)&&pc(r,s)&&pc(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),mc(i),mc(i.next),i=n=s),i=i.next}while(i!==n);return us(i)}function NL(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&HL(o,a)){let c=hw(o,a);o=us(o,o.next),c=us(c,c.next),fc(o,e,t,i,r,s,0),fc(c,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function OL(n,e,t,i){let r=[],s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=uw(n,a,c,i,!1),l===l.next&&(l.steiner=!0),r.push(zL(l));for(r.sort(LL),s=0;s<r.length;s++)t=FL(r[s],t);return t}function LL(n,e){return n.x-e.x}function FL(n,e){let t=UL(n,e);if(!t)return e;let i=hw(t,n);return us(i,i.next),us(t,t.next)}function UL(n,e){let t=e,i=-1/0,r,s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let h=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=s&&h>i&&(i=h,r=t.x<t.next.x?t:t.next,h===s))return r}t=t.next}while(t!==e);if(!r)return null;let a=r,c=r.x,l=r.y,u=1/0,d;t=r;do s>=t.x&&t.x>=c&&s!==t.x&&bo(o<l?s:i,o,c,l,o<l?i:s,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(s-t.x),pc(t,n)&&(d<u||d===u&&(t.x>r.x||t.x===r.x&&kL(r,t)))&&(r=t,u=d)),t=t.next;while(t!==a);return r}function kL(n,e){return xt(n.prev,n,e.prev)<0&&xt(e.next,n,n.next)<0}function BL(n,e,t,i){let r=n;do r.z===0&&(r.z=wg(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,VL(r)}function VL(n){let e,t,i,r,s,o,a,c,l=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,l*=2}while(o>1);return n}function wg(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function zL(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function bo(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function HL(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!GL(n,e)&&(pc(n,e)&&pc(e,n)&&WL(n,e)&&(xt(n.prev,n,e.prev)||xt(n,e.prev,e))||bd(n,e)&&xt(n.prev,n,n.next)>0&&xt(e.prev,e,e.next)>0)}function xt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function bd(n,e){return n.x===e.x&&n.y===e.y}function dw(n,e,t,i){let r=Pu(xt(n,e,t)),s=Pu(xt(n,e,i)),o=Pu(xt(t,i,n)),a=Pu(xt(t,i,e));return!!(r!==s&&o!==a||r===0&&Ru(n,t,e)||s===0&&Ru(n,i,e)||o===0&&Ru(t,n,i)||a===0&&Ru(t,e,i))}function Ru(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Pu(n){return n>0?1:n<0?-1:0}function GL(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&dw(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function pc(n,e){return xt(n.prev,n,n.next)<0?xt(n,e,n.next)>=0&&xt(n,n.prev,e)>=0:xt(n,e,n.prev)<0||xt(n,n.next,e)<0}function WL(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function hw(n,e){let t=new Sg(n.i,n.x,n.y),i=new Sg(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function LM(n,e,t,i){let r=new Sg(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function mc(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Sg(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function jL(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}var ic=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];FM(e),UM(i,e);let o=e.length;t.forEach(FM);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,UM(i,t[c]);let a=DL.triangulate(i,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}};function FM(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function UM(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var ud=class n extends sn{constructor(e=new hc([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new wt(r,3)),this.setAttribute("uv",new wt(s,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,C=t.UVGenerator!==void 0?t.UVGenerator:$L,M,E=!1,O,D,A,N;p&&(M=p.getSpacedPoints(u),E=!0,h=!1,O=p.computeFrenetFrames(u,!1),D=new R,A=new R,N=new R),h||(m=0,f=0,g=0,v=0);let S=a.extractPoints(l),x=S.shape,I=S.holes;if(!ic.isClockWise(x)){x=x.reverse();for(let b=0,se=I.length;b<se;b++){let ee=I[b];ic.isClockWise(ee)&&(I[b]=ee.reverse())}}let U=ic.triangulateShape(x,I),j=x;for(let b=0,se=I.length;b<se;b++){let ee=I[b];x=x.concat(ee)}function q(b,se,ee){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),b.clone().addScaledVector(se,ee)}let G=x.length,Z=U.length;function $(b,se,ee){let le,Y,Ae,de=b.x-se.x,_e=b.y-se.y,T=ee.x-b.x,_=ee.y-b.y,B=de*de+_e*_e,Q=de*_-_e*T;if(Math.abs(Q)>Number.EPSILON){let J=Math.sqrt(B),K=Math.sqrt(T*T+_*_),be=se.x-_e/J,ae=se.y+de/J,me=ee.x-_/K,Be=ee.y+T/K,ie=((me-be)*_-(Be-ae)*T)/(de*_-_e*T);le=be+de*ie-b.x,Y=ae+_e*ie-b.y;let pe=le*le+Y*Y;if(pe<=2)return new re(le,Y);Ae=Math.sqrt(pe/2)}else{let J=!1;de>Number.EPSILON?T>Number.EPSILON&&(J=!0):de<-Number.EPSILON?T<-Number.EPSILON&&(J=!0):Math.sign(_e)===Math.sign(_)&&(J=!0),J?(le=-_e,Y=de,Ae=Math.sqrt(B)):(le=de,Y=_e,Ae=Math.sqrt(B/2))}return new re(le/Ae,Y/Ae)}let fe=[];for(let b=0,se=j.length,ee=se-1,le=b+1;b<se;b++,ee++,le++)ee===se&&(ee=0),le===se&&(le=0),fe[b]=$(j[b],j[ee],j[le]);let ye=[],ge,$e=fe.concat();for(let b=0,se=I.length;b<se;b++){let ee=I[b];ge=[];for(let le=0,Y=ee.length,Ae=Y-1,de=le+1;le<Y;le++,Ae++,de++)Ae===Y&&(Ae=0),de===Y&&(de=0),ge[le]=$(ee[le],ee[Ae],ee[de]);ye.push(ge),$e=$e.concat(ge)}for(let b=0;b<m;b++){let se=b/m,ee=f*Math.cos(se*Math.PI/2),le=g*Math.sin(se*Math.PI/2)+v;for(let Y=0,Ae=j.length;Y<Ae;Y++){let de=q(j[Y],fe[Y],le);ce(de.x,de.y,-ee)}for(let Y=0,Ae=I.length;Y<Ae;Y++){let de=I[Y];ge=ye[Y];for(let _e=0,T=de.length;_e<T;_e++){let _=q(de[_e],ge[_e],le);ce(_.x,_.y,-ee)}}}let nt=g+v;for(let b=0;b<G;b++){let se=h?q(x[b],$e[b],nt):x[b];E?(A.copy(O.normals[0]).multiplyScalar(se.x),D.copy(O.binormals[0]).multiplyScalar(se.y),N.copy(M[0]).add(A).add(D),ce(N.x,N.y,N.z)):ce(se.x,se.y,0)}for(let b=1;b<=u;b++)for(let se=0;se<G;se++){let ee=h?q(x[se],$e[se],nt):x[se];E?(A.copy(O.normals[b]).multiplyScalar(ee.x),D.copy(O.binormals[b]).multiplyScalar(ee.y),N.copy(M[b]).add(A).add(D),ce(N.x,N.y,N.z)):ce(ee.x,ee.y,d/u*b)}for(let b=m-1;b>=0;b--){let se=b/m,ee=f*Math.cos(se*Math.PI/2),le=g*Math.sin(se*Math.PI/2)+v;for(let Y=0,Ae=j.length;Y<Ae;Y++){let de=q(j[Y],fe[Y],le);ce(de.x,de.y,d+ee)}for(let Y=0,Ae=I.length;Y<Ae;Y++){let de=I[Y];ge=ye[Y];for(let _e=0,T=de.length;_e<T;_e++){let _=q(de[_e],ge[_e],le);E?ce(_.x,_.y+M[u-1].y,M[u-1].x+ee):ce(_.x,_.y,d+ee)}}}X(),ne();function X(){let b=r.length/3;if(h){let se=0,ee=G*se;for(let le=0;le<Z;le++){let Y=U[le];Pe(Y[2]+ee,Y[1]+ee,Y[0]+ee)}se=u+m*2,ee=G*se;for(let le=0;le<Z;le++){let Y=U[le];Pe(Y[0]+ee,Y[1]+ee,Y[2]+ee)}}else{for(let se=0;se<Z;se++){let ee=U[se];Pe(ee[2],ee[1],ee[0])}for(let se=0;se<Z;se++){let ee=U[se];Pe(ee[0]+G*u,ee[1]+G*u,ee[2]+G*u)}}i.addGroup(b,r.length/3-b,0)}function ne(){let b=r.length/3,se=0;xe(j,se),se+=j.length;for(let ee=0,le=I.length;ee<le;ee++){let Y=I[ee];xe(Y,se),se+=Y.length}i.addGroup(b,r.length/3-b,1)}function xe(b,se){let ee=b.length;for(;--ee>=0;){let le=ee,Y=ee-1;Y<0&&(Y=b.length-1);for(let Ae=0,de=u+m*2;Ae<de;Ae++){let _e=G*Ae,T=G*(Ae+1),_=se+le+_e,B=se+Y+_e,Q=se+Y+T,J=se+le+T;He(_,B,Q,J)}}}function ce(b,se,ee){c.push(b),c.push(se),c.push(ee)}function Pe(b,se,ee){Ie(b),Ie(se),Ie(ee);let le=r.length/3,Y=C.generateTopUV(i,r,le-3,le-2,le-1);et(Y[0]),et(Y[1]),et(Y[2])}function He(b,se,ee,le){Ie(b),Ie(se),Ie(le),Ie(se),Ie(ee),Ie(le);let Y=r.length/3,Ae=C.generateSideWallUV(i,r,Y-6,Y-3,Y-2,Y-1);et(Ae[0]),et(Ae[1]),et(Ae[3]),et(Ae[1]),et(Ae[2]),et(Ae[3])}function Ie(b){r.push(c[b*3+0]),r.push(c[b*3+1]),r.push(c[b*3+2])}function et(b){s.push(b.x),s.push(b.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return qL(t,i,e)}static fromJSON(e,t){let i=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];i.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new xg[r.type]().fromJSON(r)),new n(i,e.options)}},$L={generateTopUV:function(n,e,t,i,r){let s=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],u=e[r*3+1];return[new re(s,o),new re(a,c),new re(l,u)]},generateSideWallUV:function(n,e,t,i,r,s){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[r*3],f=e[r*3+1],g=e[r*3+2],v=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new re(o,1-c),new re(l,1-d),new re(h,1-g),new re(v,1-p)]:[new re(a,1-c),new re(u,1-d),new re(f,1-g),new re(m,1-p)]}};function qL(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){let s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var dd=class n extends sn{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let o=[],a=[],c=[],l=[],u=new R,d=new R,h=new R;for(let f=0;f<=i;f++)for(let g=0;g<=r;g++){let v=g/r*s,m=f/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(v),d.y=(e+t*Math.cos(m))*Math.sin(v),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),h.subVectors(d,u).normalize(),c.push(h.x,h.y,h.z),l.push(g/r),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=r;g++){let v=(r+1)*f+g-1,m=(r+1)*(f-1)+g-1,p=(r+1)*(f-1)+g,C=(r+1)*f+g;o.push(v,m,C),o.push(m,p,C)}this.setIndex(o),this.setAttribute("position",new wt(a,3)),this.setAttribute("normal",new wt(c,3)),this.setAttribute("uv",new wt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ko=class extends Yi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wg,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var hd=class extends Yi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Je(16777215),this.specular=new Je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wg,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wr,this.combine=Ug,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Nu(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function XL(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Bo=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},bg=class extends Bo{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lx,endingEnd:Lx}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fx:s=e,a=2*t-i;break;case Ux:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Fx:o=e,c=2*i-t;break;case Ux:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(i-t)/(r-t),v=g*g,m=v*g,p=-h*m+2*h*v-h*g,C=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*g+1,M=(-1-f)*m+(1.5+f)*v+.5*g,E=f*m-f*v;for(let O=0;O!==a;++O)s[O]=p*o[u+O]+C*o[l+O]+M*o[c+O]+E*o[d+O];return s}},Eg=class extends Bo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[l+h]*d+o[c+h]*u;return s}},Tg=class extends Bo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ui=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Nu(t,this.TimeBufferType),this.values=Nu(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Nu(e.times,Array),values:Nu(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Tg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Eg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case zu:t=this.InterpolantFactoryMethodDiscrete;break;case Km:t=this.InterpolantFactoryMethodLinear;break;case Wp:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zu;case this.InterpolantFactoryMethodLinear:return Km;case this.InterpolantFactoryMethodSmooth:return Wp}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&XL(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Wp,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,h=d-i,f=d+i;for(let g=0;g!==i;++g){let v=t[d+g];if(v!==t[h+g]||v!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=Km;var ds=class extends ui{constructor(e,t,i){super(e,t,i)}};ds.prototype.ValueTypeName="bool";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=zu;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var Cg=class extends ui{};Cg.prototype.ValueTypeName="color";var Ag=class extends ui{};Ag.prototype.ValueTypeName="number";var Dg=class extends Bo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)li.slerpFlat(s,0,o,l-a,o,l,c);return s}},fd=class extends ui{InterpolantFactoryMethodLinear(e){return new Dg(this.times,this.values,this.getValueSize(),e)}};fd.prototype.ValueTypeName="quaternion";fd.prototype.InterpolantFactoryMethodSmooth=void 0;var hs=class extends ui{constructor(e,t,i){super(e,t,i)}};hs.prototype.ValueTypeName="string";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=zu;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ig=class extends ui{};Ig.prototype.ValueTypeName="vector";var kM={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Rg=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},YL=new Rg,fw=(()=>{class n{constructor(t){this.manager=t!==void 0?t:YL,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){let r=this;return new Promise(function(s,o){r.load(t,s,i,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}return n.DEFAULT_MATERIAL_NAME="__DEFAULT",n})();var Pg=class extends fw{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=kM.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=oc("img");function c(){u(),kM.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}},pd=class extends fw{constructor(e){super(e)}load(e,t,i,r){let s=new ac;s.colorSpace=si;let o=new Pg(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(e[l],function(u){s.images[l]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let l=0;l<e.length;++l)c(l);return s}};var gc=class extends fn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var _m=new Ct,BM=new R,VM=new R,md=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cc,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;BM.setFromMatrixPosition(e.matrixWorld),t.position.copy(BM),VM.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(VM),t.updateMatrixWorld(),_m.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_m),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_m)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ng=class extends md{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=No*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},vc=class extends gc{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Ng}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Og=class extends md{constructor(){super(new Ju(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gd=class extends gc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new Og}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},vd=class extends gc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Yg="\\[\\]\\.:\\/",ZL=new RegExp("["+Yg+"]","g"),Zg="[^"+Yg+"]",KL="[^"+Yg.replace("\\.","")+"]",JL=/((?:WC+[\/:])*)/.source.replace("WC",Zg),QL=/(WCOD+)?/.source.replace("WCOD",KL),eF=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zg),tF=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zg),nF=new RegExp("^"+JL+QL+eF+tF+"$"),iF=["material","materials","bones","map"],Lg=class{constructor(e,t,i){let r=i||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Rt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ZL,"")}static parseTrackName(t){let i=nF.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);iF.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=Lg,n})();Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var aH=new Float32Array(1);var yc=class{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(jt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var zM=new R,yd=class extends fn{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";let i=new sn,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,c=32;o<c;o++,a++){let l=o/c*Math.PI*2,u=a/c*Math.PI*2;r.push(Math.cos(l),Math.sin(l),1,Math.cos(u),Math.sin(u),1)}i.setAttribute("position",new wt(r,3));let s=new lc({fog:!1,toneMapped:!1});this.cone=new pg(i,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);let e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),zM.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(zM),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}};var HM=new R,Ou=new R,GM=new R,_d=class extends fn{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",t===void 0&&(t=1);let r=new sn;r.setAttribute("position",new wt([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));let s=new lc({fog:!1,toneMapped:!1});this.lightPlane=new uc(r,s),this.add(this.lightPlane),r=new sn,r.setAttribute("position",new wt([0,0,0,0,0,1],3)),this.targetLine=new uc(r,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),HM.setFromMatrixPosition(this.light.matrixWorld),Ou.setFromMatrixPosition(this.light.target.matrixWorld),GM.subVectors(Ou,HM),this.lightPlane.lookAt(Ou),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Ou),this.targetLine.scale.z=GM.length()}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fg);var pw={type:"change"},Kg={type:"start"},mw={type:"end"},Ed=new Lo,gw=new oi,rF=Math.cos(70*Er.DEG2RAD),Td=class extends Ei{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fs.ROTATE,MIDDLE:fs.DOLLY,RIGHT:fs.PAN},this.touches={ONE:ps.ROTATE,TWO:ps.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(y){y.addEventListener("keydown",me),this._domElementKeyEvents=y},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",me),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(pw),i.update(),s=r.NONE},this.update=function(){let y=new R,F=new li().setFromUnitVectors(e.up,new R(0,1,0)),k=F.clone().invert(),W=new R,te=new li,Ee=new R,Ue=2*Math.PI;return function(Ft=null){let ct=i.object.position;y.copy(ct).sub(i.target),y.applyQuaternion(F),a.setFromVector3(y),i.autoRotate&&s===r.NONE&&H(x(Ft)),i.enableDamping?(a.theta+=c.theta*i.dampingFactor,a.phi+=c.phi*i.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Ut=i.minAzimuthAngle,Pt=i.maxAzimuthAngle;isFinite(Ut)&&isFinite(Pt)&&(Ut<-Math.PI?Ut+=Ue:Ut>Math.PI&&(Ut-=Ue),Pt<-Math.PI?Pt+=Ue:Pt>Math.PI&&(Pt-=Ue),Ut<=Pt?a.theta=Math.max(Ut,Math.min(Pt,a.theta)):a.theta=a.theta>(Ut+Pt)/2?Math.max(Ut,a.theta):Math.min(Pt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Ki=!1;if(i.zoomToCursor&&D||i.object.isOrthographicCamera)a.radius=ye(a.radius);else{let $t=a.radius;a.radius=ye(a.radius*l),Ki=$t!=a.radius}if(y.setFromSpherical(a),y.applyQuaternion(k),ct.copy(i.target).add(y),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&D){let $t=null;if(i.object.isPerspectiveCamera){let Di=y.length();$t=ye(Di*l);let Ar=Di-$t;i.object.position.addScaledVector(E,Ar),i.object.updateMatrixWorld(),Ki=!!Ar}else if(i.object.isOrthographicCamera){let Di=new R(O.x,O.y,0);Di.unproject(i.object);let Ar=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),Ki=Ar!==i.object.zoom;let Go=new R(O.x,O.y,0);Go.unproject(i.object),i.object.position.sub(Go).add(Di),i.object.updateMatrixWorld(),$t=y.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;$t!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar($t).add(i.object.position):(Ed.origin.copy(i.object.position),Ed.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ed.direction))<rF?e.lookAt(i.target):(gw.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ed.intersectPlane(gw,i.target))))}else if(i.object.isOrthographicCamera){let $t=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),$t!==i.object.zoom&&(i.object.updateProjectionMatrix(),Ki=!0)}return l=1,D=!1,Ki||W.distanceToSquared(i.object.position)>o||8*(1-te.dot(i.object.quaternion))>o||Ee.distanceToSquared(i.target)>o?(i.dispatchEvent(pw),W.copy(i.object.position),te.copy(i.object.quaternion),Ee.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",pe),i.domElement.removeEventListener("pointerdown",_e),i.domElement.removeEventListener("pointercancel",_),i.domElement.removeEventListener("wheel",J),i.domElement.removeEventListener("pointermove",T),i.domElement.removeEventListener("pointerup",_),i.domElement.getRootNode().removeEventListener("keydown",be,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",me),i._domElementKeyEvents=null)};let i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},s=r.NONE,o=1e-6,a=new yc,c=new yc,l=1,u=new R,d=new re,h=new re,f=new re,g=new re,v=new re,m=new re,p=new re,C=new re,M=new re,E=new R,O=new re,D=!1,A=[],N={},S=!1;function x(y){return y!==null?2*Math.PI/60*i.autoRotateSpeed*y:2*Math.PI/60/60*i.autoRotateSpeed}function I(y){let F=Math.abs(y*.01);return Math.pow(.95,i.zoomSpeed*F)}function H(y){c.theta-=y}function U(y){c.phi-=y}let j=function(){let y=new R;return function(k,W){y.setFromMatrixColumn(W,0),y.multiplyScalar(-k),u.add(y)}}(),q=function(){let y=new R;return function(k,W){i.screenSpacePanning===!0?y.setFromMatrixColumn(W,1):(y.setFromMatrixColumn(W,0),y.crossVectors(i.object.up,y)),y.multiplyScalar(k),u.add(y)}}(),G=function(){let y=new R;return function(k,W){let te=i.domElement;if(i.object.isPerspectiveCamera){let Ee=i.object.position;y.copy(Ee).sub(i.target);let Ue=y.length();Ue*=Math.tan(i.object.fov/2*Math.PI/180),j(2*k*Ue/te.clientHeight,i.object.matrix),q(2*W*Ue/te.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(j(k*(i.object.right-i.object.left)/i.object.zoom/te.clientWidth,i.object.matrix),q(W*(i.object.top-i.object.bottom)/i.object.zoom/te.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Z(y){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function $(y){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function fe(y,F){if(!i.zoomToCursor)return;D=!0;let k=i.domElement.getBoundingClientRect(),W=y-k.left,te=F-k.top,Ee=k.width,Ue=k.height;O.x=W/Ee*2-1,O.y=-(te/Ue)*2+1,E.set(O.x,O.y,1).unproject(i.object).sub(i.object.position).normalize()}function ye(y){return Math.max(i.minDistance,Math.min(i.maxDistance,y))}function ge(y){d.set(y.clientX,y.clientY)}function $e(y){fe(y.clientX,y.clientX),p.set(y.clientX,y.clientY)}function nt(y){g.set(y.clientX,y.clientY)}function X(y){h.set(y.clientX,y.clientY),f.subVectors(h,d).multiplyScalar(i.rotateSpeed);let F=i.domElement;H(2*Math.PI*f.x/F.clientHeight),U(2*Math.PI*f.y/F.clientHeight),d.copy(h),i.update()}function ne(y){C.set(y.clientX,y.clientY),M.subVectors(C,p),M.y>0?Z(I(M.y)):M.y<0&&$(I(M.y)),p.copy(C),i.update()}function xe(y){v.set(y.clientX,y.clientY),m.subVectors(v,g).multiplyScalar(i.panSpeed),G(m.x,m.y),g.copy(v),i.update()}function ce(y){fe(y.clientX,y.clientY),y.deltaY<0?$(I(y.deltaY)):y.deltaY>0&&Z(I(y.deltaY)),i.update()}function Pe(y){let F=!1;switch(y.code){case i.keys.UP:y.ctrlKey||y.metaKey||y.shiftKey?U(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,i.keyPanSpeed),F=!0;break;case i.keys.BOTTOM:y.ctrlKey||y.metaKey||y.shiftKey?U(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,-i.keyPanSpeed),F=!0;break;case i.keys.LEFT:y.ctrlKey||y.metaKey||y.shiftKey?H(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(i.keyPanSpeed,0),F=!0;break;case i.keys.RIGHT:y.ctrlKey||y.metaKey||y.shiftKey?H(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(-i.keyPanSpeed,0),F=!0;break}F&&(y.preventDefault(),i.update())}function He(y){if(A.length===1)d.set(y.pageX,y.pageY);else{let F=Ve(y),k=.5*(y.pageX+F.x),W=.5*(y.pageY+F.y);d.set(k,W)}}function Ie(y){if(A.length===1)g.set(y.pageX,y.pageY);else{let F=Ve(y),k=.5*(y.pageX+F.x),W=.5*(y.pageY+F.y);g.set(k,W)}}function et(y){let F=Ve(y),k=y.pageX-F.x,W=y.pageY-F.y,te=Math.sqrt(k*k+W*W);p.set(0,te)}function b(y){i.enableZoom&&et(y),i.enablePan&&Ie(y)}function se(y){i.enableZoom&&et(y),i.enableRotate&&He(y)}function ee(y){if(A.length==1)h.set(y.pageX,y.pageY);else{let k=Ve(y),W=.5*(y.pageX+k.x),te=.5*(y.pageY+k.y);h.set(W,te)}f.subVectors(h,d).multiplyScalar(i.rotateSpeed);let F=i.domElement;H(2*Math.PI*f.x/F.clientHeight),U(2*Math.PI*f.y/F.clientHeight),d.copy(h)}function le(y){if(A.length===1)v.set(y.pageX,y.pageY);else{let F=Ve(y),k=.5*(y.pageX+F.x),W=.5*(y.pageY+F.y);v.set(k,W)}m.subVectors(v,g).multiplyScalar(i.panSpeed),G(m.x,m.y),g.copy(v)}function Y(y){let F=Ve(y),k=y.pageX-F.x,W=y.pageY-F.y,te=Math.sqrt(k*k+W*W);C.set(0,te),M.set(0,Math.pow(C.y/p.y,i.zoomSpeed)),Z(M.y),p.copy(C);let Ee=(y.pageX+F.x)*.5,Ue=(y.pageY+F.y)*.5;fe(Ee,Ue)}function Ae(y){i.enableZoom&&Y(y),i.enablePan&&le(y)}function de(y){i.enableZoom&&Y(y),i.enableRotate&&ee(y)}function _e(y){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(y.pointerId),i.domElement.addEventListener("pointermove",T),i.domElement.addEventListener("pointerup",_)),!Me(y)&&(Qe(y),y.pointerType==="touch"?Be(y):B(y)))}function T(y){i.enabled!==!1&&(y.pointerType==="touch"?ie(y):Q(y))}function _(y){switch(Ne(y),A.length){case 0:i.domElement.releasePointerCapture(y.pointerId),i.domElement.removeEventListener("pointermove",T),i.domElement.removeEventListener("pointerup",_),i.dispatchEvent(mw),s=r.NONE;break;case 1:let F=A[0],k=N[F];Be({pointerId:F,pageX:k.x,pageY:k.y});break}}function B(y){let F;switch(y.button){case 0:F=i.mouseButtons.LEFT;break;case 1:F=i.mouseButtons.MIDDLE;break;case 2:F=i.mouseButtons.RIGHT;break;default:F=-1}switch(F){case fs.DOLLY:if(i.enableZoom===!1)return;$e(y),s=r.DOLLY;break;case fs.ROTATE:if(y.ctrlKey||y.metaKey||y.shiftKey){if(i.enablePan===!1)return;nt(y),s=r.PAN}else{if(i.enableRotate===!1)return;ge(y),s=r.ROTATE}break;case fs.PAN:if(y.ctrlKey||y.metaKey||y.shiftKey){if(i.enableRotate===!1)return;ge(y),s=r.ROTATE}else{if(i.enablePan===!1)return;nt(y),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Kg)}function Q(y){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;X(y);break;case r.DOLLY:if(i.enableZoom===!1)return;ne(y);break;case r.PAN:if(i.enablePan===!1)return;xe(y);break}}function J(y){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(y.preventDefault(),i.dispatchEvent(Kg),ce(K(y)),i.dispatchEvent(mw))}function K(y){let F=y.deltaMode,k={clientX:y.clientX,clientY:y.clientY,deltaY:y.deltaY};switch(F){case 1:k.deltaY*=16;break;case 2:k.deltaY*=100;break}return y.ctrlKey&&!S&&(k.deltaY*=10),k}function be(y){y.key==="Control"&&(S=!0,i.domElement.getRootNode().addEventListener("keyup",ae,{passive:!0,capture:!0}))}function ae(y){y.key==="Control"&&(S=!1,i.domElement.getRootNode().removeEventListener("keyup",ae,{passive:!0,capture:!0}))}function me(y){i.enabled===!1||i.enablePan===!1||Pe(y)}function Be(y){switch(Fe(y),A.length){case 1:switch(i.touches.ONE){case ps.ROTATE:if(i.enableRotate===!1)return;He(y),s=r.TOUCH_ROTATE;break;case ps.PAN:if(i.enablePan===!1)return;Ie(y),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case ps.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;b(y),s=r.TOUCH_DOLLY_PAN;break;case ps.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;se(y),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Kg)}function ie(y){switch(Fe(y),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;ee(y),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;le(y),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ae(y),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;de(y),i.update();break;default:s=r.NONE}}function pe(y){i.enabled!==!1&&y.preventDefault()}function Qe(y){A.push(y.pointerId)}function Ne(y){delete N[y.pointerId];for(let F=0;F<A.length;F++)if(A[F]==y.pointerId){A.splice(F,1);return}}function Me(y){for(let F=0;F<A.length;F++)if(A[F]==y.pointerId)return!0;return!1}function Fe(y){let F=N[y.pointerId];F===void 0&&(F=new re,N[y.pointerId]=F),F.set(y.pageX,y.pageY)}function Ve(y){let F=y.pointerId===A[0]?A[1]:A[0];return N[F]}i.domElement.addEventListener("contextmenu",pe),i.domElement.addEventListener("pointerdown",_e),i.domElement.addEventListener("pointercancel",_),i.domElement.addEventListener("wheel",J,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",be,{passive:!0,capture:!0}),this.update()}};var Cr=class{constructor(e){this.name=e.name}};var on=class extends Cr{constructor(e,t){super(e),this.mainEngineAttachPoint=new R(0,0,-2),this.sideEngineAttachPoint=new R(0,0,-1),this.baseHP=100,this.mass=e.mass??200,this.baseHP+=e.hpModifier,this.geom=e.geom,this.material=e.material,this.mesh=new Mt(this.geom,this.material),this.mesh.receiveShadow=!0,this.mesh.castShadow=!0,t&&this.rotate()}rotate(){this.mesh.rotateX(Er.degToRad(90))}};var hi=class extends Cr{constructor(e){super(e),this.mass=50,e.group&&(this.group=e.group),this.geom=e.geom,this.material=e.material,this.mesh=new Mt(this.geom,this.material),this.mesh.receiveShadow=!0,this.mesh.castShadow=!0}};var Ci=class extends Cr{constructor(e){super(e),this.mass=50,this.geom=e.geom,this.material=e.material,this.mesh=new Mt(this.geom,this.material),this.mesh.receiveShadow=!0,this.mesh.castShadow=!0}};var Cd=class{constructor(){this.group=new Vn,this.parts={hull:void 0,mainEngine:void 0,sideEngines:void 0}}removePart(e){switch(!0){case e instanceof on:this.parts.hull&&this.group.remove(this.parts.hull.mesh);break;case e instanceof Ci:this.parts.sideEngines&&this.group.remove(this.parts.sideEngines.mesh);break;case e instanceof hi:this.parts.mainEngine&&(this.group.remove(this.parts.mainEngine.mesh),this.group.remove(this.parts.mainEngine.group));break;default:console.log(e)}}addPart(e){switch(!0){case e instanceof on:this.removePart(e),this.addHull(e);break;case e instanceof Ci:this.removePart(e),this.addSideEngines(e);break;case e instanceof hi:this.removePart(e),this.addMainEngine(e);break}}addToGroup(e){this.group.add(e.mesh)}addHull(e){this.parts.hull=e,this.group.add(this.parts.hull.mesh)}addMainEngine(e){if(this.parts.mainEngine=e,this.parts.hull){let t=this.parts.mainEngine,[i,r,s]=this.parts.hull.mainEngineAttachPoint;t.group?(this.group.add(t.group),t.group.position.set(i,r,s)):(t.mesh.position.set(i,r,s),this.group.add(t.mesh))}}addSideEngines(e){if(this.parts.sideEngines=e,this.parts.hull){let[t,i,r]=this.parts.hull.sideEngineAttachPoint;this.parts.sideEngines.mesh.position.set(t,i,r),this.group.add(this.parts.sideEngines.mesh)}}logParts(){for(let e in this.parts)console.log(this.parts[e])}moveSideEngines(e,t){this.parts.sideEngines&&(e!==0&&(this.parts.sideEngines.mesh.position.y=e),t!==0&&(this.parts.sideEngines.mesh.position.z=t))}get totalMass(){return Object.values(this.parts).reduce((e,t)=>(t&&(e+=t.mass),e),0)}};var Ad=class{constructor(){this.lightsGroup=new Vn,this.initLights()}initLights(){this.light=new vd(16777215,.2),this.light.position.z=10,this.dirLight=new gd(16777181,1),this.dirLight.position.set(-5,8,10),this.dirLight.lookAt(0,0,0),this.dirLight.shadow.bias=-.001,this.dirLight.shadow.normalBias=.1;let e=new _d(this.dirLight);this.spotlight=new vc(16777215,1,5,15,.2,1.5),this.spotlight.position.set(0,2,0),this.spotlight.castShadow=!0,this.spotlight2=new vc(16777215,1,5,15,.2,1.5),this.spotlight2.position.set(1,3,1),this.spotlight2.castShadow=!0,this.spotlightHelper=new yd(this.spotlight),this.spotlight.lookAt(0,0,0),this.lightsGroup.add(this.light,this.spotlight,this.spotlight2,this.dirLight)}moveSpotlight(e){this.spotlight.position.y=e}};function Jg(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,c=new sn,l=0;for(let u=0;u<n.length;++u){let d=n[u],h=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(d.attributes[f]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(t){let u=0,d=[];for(let h=0;h<n.length;++h){let f=n[h].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+u);u+=n[h].attributes.position.count}c.setIndex(d)}for(let u in s){let d=vw(s[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<d;++h){let f=[];for(let v=0;v<o[u].length;++v)f.push(o[u][v][h]);let g=vw(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function vw(n){let e,t,i,r=-1,s=0;for(let l=0;l<n.length;++l){let u=n[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}let o=new e(s),a=new hn(o,t,i),c=0;for(let l=0;l<n.length;++l){let u=n[l];if(u.isInterleavedBufferAttribute){let d=c/t;for(let h=0,f=u.count;h<f;h++)for(let g=0;g<t;g++){let v=u.getComponent(h,g);a.setComponent(h+d,g,v)}}else o.set(u.array,c);c+=u.count*t}return r!==void 0&&(a.gpuType=r),a}function yw(n){for(var e=n.getContext("2d"),t=n.width,i=n.height,r=e.getImageData(0,0,t,i),s=e.createImageData(t,i),o=0,a=t*i*4;o<a;o+=4){var c,l,u,d;o%(t*4)==0?(c=r.data[o],l=r.data[o+4]):o%(t*4)==(t-1)*4?(c=r.data[o-4],l=r.data[o]):(c=r.data[o-4],l=r.data[o+4]),o<t*4?(u=r.data[o],d=r.data[o+t*4]):o>t*(i-1)*4?(u=r.data[o-t*4],d=r.data[o]):(u=r.data[o-t*4],d=r.data[o+t*4]),s.data[o]=c-l+127,s.data[o+1]=u-d+127,s.data[o+2]=255,s.data[o+3]=255}e.putImageData(s,0,0)}function Qg(n,e){let t=n.canvas.width,i=n.canvas.height,r=n.createImageData(t,i),s=new Uint32Array(r.data.buffer),o=s.length,a=0;for(;a<o;a++)Math.random()<e&&(s[a]=4294967295);n.putImageData(r,0,0)}var Dd=class{constructor(e=1024){this.res=e,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.normalMapCanvas=document.createElement("canvas"),this.normalCtx=this.normalMapCanvas.getContext("2d"),this.initCanvas(),this.generate(),this.generateNormalMap()}initCanvas(){this.normalMapCanvas.width=this.res,this.normalMapCanvas.height=this.res,this.canvas.width=this.res,this.canvas.height=this.res,this.ctx&&(this.ctx.fillStyle="#333",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height))}generateNormalMap(){this.normalCtx&&(this.normalCtx.drawImage(this.canvas,0,0),yw(this.normalMapCanvas))}},Id=class extends Dd{generate(){this.ctx&&Qg(this.ctx,.5);for(let e=0;e<1e3;e++){let i=Math.random()*this.res,r=Math.random()*this.res,s=Math.random()*30,a=`hsla(0, 0%, ${Math.floor(Math.random()*60+40)}%, 1)`;this.ctx&&(this.ctx.fillStyle=a,this.ctx.beginPath(),this.ctx.arc(i,r,s,0,Math.PI*2),this.ctx.fill(),this.ctx.closePath())}}},Rd=class extends Dd{generate(){this.ctx&&Qg(this.ctx,.9);for(let e=0;e<400;e++){let i=Math.random()*this.res-20,r=Math.random()*this.res-20,s=Math.random()*60,a=`hsla(0, 0%, ${Math.floor(Math.random()*60+40)}%, 1)`;this.ctx&&(this.ctx.fillStyle=a,this.ctx.fillRect(i,r,s*2,s*2))}}};var _w=new Id,xc=new ls(_w.canvas);Nd(2,2,xc);var Pd=new ls(_w.normalMapCanvas);Nd(2,2,Pd);var xw=new Rd,ev=new ls(xw.canvas);Nd(2,2,ev);var tv=new ls(xw.normalMapCanvas);Nd(2,2,tv);function Nd(n,e,t){t.wrapS=t.wrapT=rc,t.repeat.set(n,e)}var Ai=new ko({color:16777215,metalness:.9,roughness:.2,map:ev,normalMap:tv,flatShading:!0}),Mw=new ko({color:14548957,metalness:.8,roughness:.2,map:xc,normalMap:Pd,bumpMap:xc}),Mc=new ko({map:xc,normalMap:Pd,color:16433067,metalness:.8,roughness:.3,flatShading:!0}),ww=new Sr({color:13421772});function Sw(){let n=new zn(.5,.5,2),e=new zn(.5,.5,2),t=new zn(2,.4,.6);return n.translate(1,0,0),e.translate(-1,0,0),Jg([n,e,t])}function bw(n,e,t){let i=new hc;i.moveTo(0,0),i.lineTo(0,n),i.lineTo(e,n),i.lineTo(e,0),i.lineTo(0,0);let r={steps:2,depth:t,bevelEnabled:!0,bevelThickness:.8,bevelSize:.2,bevelOffset:0,bevelSegments:1},s=new ud(i,r);return s.translate(-e/2,0,-t/2),s}function zo(n,e,t){let i=[];for(let s=0;s<n;s++){let o=new dd(.5,e,6,6);o.translate(0,0,s/t),i.push(o)}return Jg(i)}function Ew(){let e=new Zi(.3,.6,3,3,2,!1,0,Math.PI);return e.rotateX(Er.degToRad(90)),e.rotateZ(Er.degToRad(90)),e.translate(0,0,-3/10),e}function Tw(){let n=zo(4,.2,4),e=new Zi(.3,.3,.4),t=new Mt(n,Ai),i=new Mt(e,new hd({color:16746530,emissive:16746530,emissiveIntensity:.5}));i.rotateX(Er.degToRad(90));let r=new Vn;return r.add(t,i),r}var sF=new on({name:"Standard Hull",hpModifier:10,geom:new zn(1,1,3),material:Ai}),oF=new on({name:"Improved Hull",hpModifier:90,geom:new zn(1,2,4),material:Mw,mass:300}),aF=new on({name:"Hex Hull",hpModifier:50,geom:new Zi(.5,.8,4,6),material:Ai},!0),cF=new on({name:"Bevel Hull",hpModifier:60,geom:bw(.4,1,3),material:Mc,mass:230}),lF=new on({name:"Torus Hull",hpModifier:100,geom:zo(10,.4,4),material:Mc,mass:150}),uF=new on({name:"Trapezoid",hpModifier:20,geom:Ew(),material:Ai}),Cw=[sF,oF,aF,cF,lF,uF];var dF=new Ci({name:"Standard Side Engine",geom:Sw(),material:Ai}),Aw=[dF];var hF=new hi({name:"Standard Main Engine",geom:zo(4,.2,4),material:Ai}),fF=new hi({name:"testEngine",geom:zo(4,.2,4),material:ww,group:Tw()}),Dw=[hF,fF];var Od=(()=>{let e=class e{constructor(){this.isHullAdded=!1,this.hulls=Cw,this.sideEngines=Aw,this.mainEngines=Dw,this.totalShipMass=0,this.sideEnginePosition$=new Bt({y:0,z:0}),this.moveSideEngineEvent$=this.sideEnginePosition$.asObservable(),this.selectedPart$=new Xt,this.partSelectionEvent$=this.selectedPart$.asObservable(),this.creatorServiceEvents$=eh(this.partSelectionEvent$)}moveSideEngine(i,r){this.sideEnginePosition$.next({y:i,z:r})}addPart(i){i instanceof on&&(this.isHullAdded=!0),this.selectedPart$.next(i)}selectPart(i){switch(!0){case i instanceof on:this.selectedHull=i;break;case i instanceof hi:this.selectedMainEngine=i;break;case i instanceof Ci:this.selectedSideEngines=i;break;default:console.warn("not a part")}}isPartSelected(i){switch(!0){case i instanceof on:return this.selectedHull===i;case i instanceof hi:return this.selectedMainEngine===i;case i instanceof Ci:return this.selectedSideEngines===i;default:return!1}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var Iw=(()=>{let e=class e{constructor(){this.scene=new nd,this.cubeRotation=!0,this.camera=new rn(75,gs.aspect,.1,1e3),this.creatorSvc=ue(Od),this.camera.position.set(2,2,2),this.scene.add(this.camera),this.createSkybox(),this.lights=new Ad,this.scene.add(this.lights.lightsGroup),this.createBasePlate(),this.addStarship(),this.creatorSvc.moveSideEngineEvent$.subscribe(i=>{this.starshipModel.moveSideEngines(i.y,i.z)}),this.creatorSvc.creatorServiceEvents$.subscribe(i=>{this.starshipModel.addPart(i),this.creatorSvc.totalShipMass=this.starshipModel.totalMass})}resize(){this.camera.aspect=gs.aspect,this.camera.updateProjectionMatrix()}addStarship(){this.starshipModel=new Cd,this.scene.add(this.starshipModel.group),this.starshipModel.group.position.y=1}update(){this.cubeRotation}moveSpotlight(i){this.lights.moveSpotlight(i)}createBasePlate(){let i=new Zi(5,5.5,.2);this.basePlate=new Mt(i,Mc),this.basePlate.receiveShadow=!0,this.scene.add(this.basePlate)}createSkybox(){let i=new pd;i.setPath("assets/textures/skybox/");let r=i.load(["arid2_ft.jpg","arid2_bk.jpg","arid2_up.jpg","arid2_dn.jpg","arid2_rt.jpg","arid2_lf.jpg"]);this.scene.background=r}createTestTexturePlane(i,r,s,o){let a=new Uo(5,5),c=new Sr({map:i}),l=new Mt(a,c);l.position.set(r,s,o),this.scene.add(l)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var gs={width:1e3,height:800,get aspect(){return this.width/this.height}},Ld=(()=>{let e=class e{constructor(){this.mainScene=ue(Iw),this.cubeRotation=!0,this.frameId=0,this.ngZone=ue(Et)}ngOnDestroy(){this.frameId!=null&&cancelAnimationFrame(this.frameId),this.renderer!=null&&this.renderer.dispose()}createScene(i){this.canvas=i.nativeElement,this.renderer=new td({canvas:this.canvas,alpha:!0,antialias:!0}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=xd,this.renderer.setSize(gs.width,gs.height),this.renderer.setClearColor(12430462),this.initOrbitControls()}animate(){this.ngZone.runOutsideAngular(()=>{document.readyState!=="loading"?this.render():window.addEventListener("DOMContentLoaded",()=>{this.render()}),window.addEventListener("resize",()=>{this.resize()})})}render(){this.frameId=requestAnimationFrame(()=>{this.render()}),this.mainScene.update(),this.renderer.render(this.mainScene.scene,this.mainScene.camera)}resize(){this.mainScene.resize(),this.renderer.setSize(gs.width,gs.height)}initOrbitControls(){this.orbitControls=new Td(this.mainScene.camera,this.canvas)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var pF=["rendererCanvas"],Rw=(()=>{let e=class e{constructor(){this.engineSvc=ue(Ld)}ngOnInit(){this.engineSvc.createScene(this.rendererCanvas),this.engineSvc.animate()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=xi({type:e,selectors:[["engine"]],viewQuery:function(r,s){if(r&1&&Fl(pF,7),r&2){let o;Ma(o=wa())&&(s.rendererCanvas=o.first)}},standalone:!0,features:[Mi],decls:3,vars:0,consts:[["rendererCanvas",""],[1,"engine-wrapper","w-full","h-full"],["id","renderCanvas"]],template:function(r,s){r&1&&(Tt(0,"div",1),On(1,"canvas",2,0),_t())},styles:[`#renderCanvas{border:1px solid #666}
`],encapsulation:2,changeDetection:0});let n=e;return n})();var Ho=(()=>{let e=class e{constructor(){this.isOpen=!1}open(i,r){this.config=r,this.isOpen=!0,this.template=i}get view(){return this._view}close(){this.isOpen=!1}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var mF=(n,e)=>({name:"Hull",parts:n,partToAdd:e}),gF=(n,e)=>({name:"Main Engine",parts:n,partToAdd:e}),vF=(n,e)=>({name:"Side Engines",parts:n,partToAdd:e}),yF=n=>({"part-selected":n});function _F(n,e){if(n&1){let t=cr();Tt(0,"div")(1,"button",9),xn("click",function(){Qn(t);let r=Mn(),s=Ln(11);return ei(r.openModal(s,{title:"Add Main Engine"}))}),wn(2,"Add Main Engine"),_t()(),Tt(3,"div")(4,"button",9),xn("click",function(){Qn(t);let r=Mn(),s=Ln(13);return ei(r.openModal(s,{title:"Add Side Engines"}))}),wn(5,"Add Side Engines"),_t(),Tt(6,"button",9),xn("click",function(){Qn(t);let r=Mn(),s=Ln(17);return ei(r.openModal(s,{title:"side engines options"}))}),wn(7," opts "),_t()()}}function xF(n,e){n&1&&Gr(0)}function MF(n,e){if(n&1&&Pn(0,xF,1,0,"ng-container",10),n&2){let t=Mn(),i=Ln(15);ar("ngTemplateOutlet",i)("ngTemplateOutletContext",Ul(2,mF,t.hulls,t.selectedHull))}}function wF(n,e){n&1&&Gr(0)}function SF(n,e){if(n&1&&Pn(0,wF,1,0,"ng-container",10),n&2){let t=Mn(),i=Ln(15);ar("ngTemplateOutlet",i)("ngTemplateOutletContext",Ul(2,gF,t.mainEngines,t.selectedMainEngine))}}function bF(n,e){n&1&&Gr(0)}function EF(n,e){if(n&1&&Pn(0,bF,1,0,"ng-container",10),n&2){let t=Mn(),i=Ln(15);ar("ngTemplateOutlet",i)("ngTemplateOutletContext",Ul(2,vF,t.sideEngines,t.selectedSideEngines))}}function TF(n,e){if(n&1){let t=cr();Tt(0,"button",14),xn("click",function(){let r=Qn(t).$implicit,s=Mn(3);return ei(s.selectPart(r))}),wn(1),_t()}if(n&2){let t=e.$implicit,i=Mn(3);ar("ngClass",m_(2,yF,i.isPartSelected(t))),_n(),js(" ",t.name," ")}}function CF(n,e){if(n&1&&(Tt(0,"div",7),d_(1,TF,2,4,"button",13,u_),_t()),n&2){let t=Mn().parts;_n(),h_(t)}}function AF(n,e){if(n&1){let t=cr();Tt(0,"div",11),Pn(1,CF,3,0,"div",7),Tt(2,"div",12)(3,"button",9),xn("click",function(){let r=Qn(t).partToAdd,s=Mn();return ei(s.addPart(r))}),wn(4),_t()()()}if(n&2){let t=e.name,i=e.parts;_n(),xa(1,i?1:-1),_n(3),js("Add ",t,"")}}function DF(n,e){if(n&1){let t=cr();Tt(0,"div")(1,"p"),wn(2,"side engine position"),_t(),Tt(3,"label",15),wn(4,"Y pos"),_t(),Tt(5,"input",16,5),xn("input",function(){Qn(t);let r=Ln(6),s=Mn();return ei(s.moveSideEngine(+r.value,0))}),_t(),Tt(7,"label",15),wn(8,"Z pos"),_t(),Tt(9,"input",16,6),xn("input",function(){Qn(t);let r=Ln(10),s=Mn();return ei(s.moveSideEngine(0,+r.value))}),_t()()}if(n&2){let t=Ln(6),i=Ln(10);_n(3),ar("for",t),_n(4),ar("for",i)}}var Pw=(()=>{let e=class e{constructor(){this.creatorSvc=ue(Od),this.engineSvc=ue(Ld),this.modalSvc=ue(Ho)}moveSpotlight(i){}moveSideEngine(i,r){this.creatorSvc.moveSideEngine(i,r)}addPart(i){this.creatorSvc.addPart(i),this.modalSvc.close()}selectPart(i){this.creatorSvc.selectPart(i)}openModal(i,r){this.modalSvc.open(i,r)}isPartSelected(i){return this.creatorSvc.isPartSelected(i)}get isHullAdded(){return this.creatorSvc.isHullAdded}get hulls(){return this.creatorSvc.hulls}get mainEngines(){return this.creatorSvc.mainEngines}get sideEngines(){return this.creatorSvc.sideEngines}get selectedHull(){return this.creatorSvc.selectedHull}get selectedMainEngine(){return this.creatorSvc.selectedMainEngine}get selectedSideEngines(){return this.creatorSvc.selectedSideEngines}get totalMass(){return this.creatorSvc.totalShipMass}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=xi({type:e,selectors:[["creator"]],standalone:!0,features:[Mi],decls:18,vars:2,consts:[["addHullModal",""],["addMainEngineModal",""],["addSideEnginesModal",""],["modalBody",""],["sideEngineOptionsModal",""],["sideEngineY",""],["sideEngineZ",""],[1,"flex"],[1,"flex","flex-col","bg-neutral-400","w-1/4"],[1,"bg-neutral-600","hover:bg-neutral-500","p-2","m-2","cursor-pointer","rounded-full",3,"click"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"flex","flex-col","justify-between","h-full"],[1,"flex","justify-center"],[1,"bg-neutral-600","hover:bg-neutral-500","p-2","m-2","cursor-pointer","rounded-full",3,"ngClass"],[1,"bg-neutral-600","hover:bg-neutral-500","p-2","m-2","cursor-pointer","rounded-full",3,"click","ngClass"],[3,"for"],["type","range","min","-1","max","1","step","0.1",3,"input"]],template:function(r,s){if(r&1){let o=cr();Tt(0,"div",7)(1,"div",8)(2,"button",9),xn("click",function(){Qn(o);let c=Ln(9);return ei(s.openModal(c,{title:"Hull Selection"}))}),wn(3,"Select Hull"),_t(),Pn(4,_F,8,0),Tt(5,"p"),wn(6),_t()(),On(7,"engine"),_t(),Pn(8,MF,1,5,"ng-template",null,0,$s)(10,SF,1,5,"ng-template",null,1,$s)(12,EF,1,5,"ng-template",null,2,$s)(14,AF,5,2,"ng-template",null,3,$s)(16,DF,11,2,"ng-template",null,4,$s)}r&2&&(_n(4),xa(4,s.isHullAdded?4:-1),_n(2),js("total vessel mass: ",s.totalMass,""))},dependencies:[Rw,L_,F_],styles:[".part-selected[_ngcontent-%COMP%]{box-shadow:0 0 5px 5px #95bf40}"]});let n=e;return n})();var IF=["modalContent"],Nw=(()=>{let e=class e{constructor(){this.modalSvc=ue(Ho),this.cdr=ue(Wr)}ngAfterViewInit(){this.modalContent.createEmbeddedView(this.template),this.cdr.detectChanges()}get template(){return this.modalSvc.template}get isOpen(){return this.modalSvc.isOpen}get config(){return this.modalSvc.config}close(){this.modalSvc.close()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=xi({type:e,selectors:[["modal-container"]],viewQuery:function(r,s){if(r&1&&Fl(IF,5,Ui),r&2){let o;Ma(o=wa())&&(s.modalContent=o.first)}},standalone:!0,features:[Mi],decls:8,vars:1,consts:[["modalContent",""],[1,"bg-neutral-400","rounded-lg","p-2","absolute","top-1/2","left-1/2","-translate-x-1/2","-translate-y-1/2","z-50","w-1/2","h-1/2","flex","flex-col","animation-appear","shadow-xl"],[1,"flex","justify-between"],[1,"text-2xl","text-white"],[1,"bg-neutral-600","hover:bg-red-500","p-2","rounded-lg",3,"click"],[1,"icon-clear"]],template:function(r,s){if(r&1){let o=cr();Tt(0,"div",1)(1,"div",2)(2,"p",3),wn(3),_t(),Tt(4,"button",4),xn("click",function(){return Qn(o),ei(s.close())}),On(5,"i",5),_t()(),Gr(6,null,0),_t()}r&2&&(_n(3),Wf(s.config.title))},encapsulation:2});let n=e;return n})();function RF(n,e){n&1&&On(0,"modal-container")}var Ow=(()=>{let e=class e{constructor(){this.title="starship-creator",this.modalSvc=ue(Ho)}get modalOpen(){return this.modalSvc.isOpen}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=xi({type:e,selectors:[["app-root"]],standalone:!0,features:[Mi],decls:2,vars:1,template:function(r,s){r&1&&(On(0,"creator"),Pn(1,RF,1,0,"modal-container")),r&2&&(_n(),xa(1,s.modalOpen?1:-1))},dependencies:[Pw,Nw]});let n=e;return n})();j_(Ow,Dx).catch(n=>console.error(n));
