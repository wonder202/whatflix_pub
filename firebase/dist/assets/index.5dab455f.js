const sI=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),op={},oI="/",Ae=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${oI}${r}`,r in op)return;op[r]=!0;const i=r.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":sI,i||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),i)return new Promise((a,l)=>{o.addEventListener("load",a),o.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};function Zh(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Ve={},Vi=[],un=()=>{},aI=()=>!1,lI=/^on[^a-z]/,$l=t=>lI.test(t),ed=t=>t.startsWith("onUpdate:"),nt=Object.assign,td=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},cI=Object.prototype.hasOwnProperty,be=(t,e)=>cI.call(t,e),re=Array.isArray,Mi=t=>ql(t)==="[object Map]",x_=t=>ql(t)==="[object Set]",ce=t=>typeof t=="function",Ue=t=>typeof t=="string",Bl=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",O_=t=>(Le(t)||ce(t))&&ce(t.then)&&ce(t.catch),D_=Object.prototype.toString,ql=t=>D_.call(t),uI=t=>ql(t).slice(8,-1),N_=t=>ql(t)==="[object Object]",nd=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ma=Zh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),jl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},hI=/-(\w)/g,xn=jl(t=>t.replace(hI,(e,n)=>n?n.toUpperCase():"")),dI=/\B([A-Z])/g,pi=jl(t=>t.replace(dI,"-$1").toLowerCase()),zl=jl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Gc=jl(t=>t?`on${zl(t)}`:""),ni=(t,e)=>!Object.is(t,e),Qc=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Za=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},fI=t=>{const e=parseFloat(t);return isNaN(e)?t:e},pI=t=>{const e=Ue(t)?Number(t):NaN;return isNaN(e)?t:e};let ap;const Wu=()=>ap||(ap=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function Lo(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Ue(r)?yI(r):Lo(r);if(i)for(const s in i)e[s]=i[s]}return e}else if(Ue(t)||Le(t))return t}const mI=/;(?![^(]*\))/g,gI=/:([^]+)/,_I=/\/\*[^]*?\*\//g;function yI(t){const e={};return t.replace(_I,"").split(mI).forEach(n=>{if(n){const r=n.split(gI);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Vo(t){let e="";if(Ue(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=Vo(t[n]);r&&(e+=r+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function LU(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ue(e)&&(t.class=Vo(e)),n&&(t.style=Lo(n)),t}const vI="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wI=Zh(vI);function L_(t){return!!t||t===""}const EI=t=>Ue(t)?t:t==null?"":re(t)||Le(t)&&(t.toString===D_||!ce(t.toString))?JSON.stringify(t,V_,2):String(t),V_=(t,e)=>e&&e.__v_isRef?V_(t,e.value):Mi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:x_(e)?{[`Set(${e.size})`]:[...e.values()]}:Le(e)&&!re(e)&&!N_(e)?String(e):e;let Ut;class M_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ut,!e&&Ut&&(this.index=(Ut.scopes||(Ut.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ut;try{return Ut=this,e()}finally{Ut=n}}}on(){Ut=this}off(){Ut=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function F_(t){return new M_(t)}function TI(t,e=Ut){e&&e.active&&e.effects.push(t)}function rd(){return Ut}function U_(t){Ut&&Ut.cleanups.push(t)}const id=t=>{const e=new Set(t);return e.w=0,e.n=0,e},$_=t=>(t.w&Ir)>0,B_=t=>(t.n&Ir)>0,II=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ir},bI=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];$_(i)&&!B_(i)?i.delete(t):e[n++]=i,i.w&=~Ir,i.n&=~Ir}e.length=n}},el=new WeakMap;let ks=0,Ir=1;const Ku=30;let an;const Gr=Symbol(""),Gu=Symbol("");class sd{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,TI(this,r)}run(){if(!this.active)return this.fn();let e=an,n=_r;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=an,an=this,_r=!0,Ir=1<<++ks,ks<=Ku?II(this):lp(this),this.fn()}finally{ks<=Ku&&bI(this),Ir=1<<--ks,an=this.parent,_r=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){an===this?this.deferStop=!0:this.active&&(lp(this),this.onStop&&this.onStop(),this.active=!1)}}function lp(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let _r=!0;const q_=[];function fs(){q_.push(_r),_r=!1}function ps(){const t=q_.pop();_r=t===void 0?!0:t}function Mt(t,e,n){if(_r&&an){let r=el.get(t);r||el.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=id()),j_(i)}}function j_(t,e){let n=!1;ks<=Ku?B_(t)||(t.n|=Ir,n=!$_(t)):n=!t.has(an),n&&(t.add(an),an.deps.push(t))}function qn(t,e,n,r,i,s){const o=el.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&re(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!Bl(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":re(t)?nd(n)&&a.push(o.get("length")):(a.push(o.get(Gr)),Mi(t)&&a.push(o.get(Gu)));break;case"delete":re(t)||(a.push(o.get(Gr)),Mi(t)&&a.push(o.get(Gu)));break;case"set":Mi(t)&&a.push(o.get(Gr));break}if(a.length===1)a[0]&&Qu(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Qu(id(l))}}function Qu(t,e){const n=re(t)?t:[...t];for(const r of n)r.computed&&cp(r);for(const r of n)r.computed||cp(r)}function cp(t,e){(t!==an||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function AI(t,e){var n;return(n=el.get(t))==null?void 0:n.get(e)}const RI=Zh("__proto__,__v_isRef,__isVue"),z_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Bl)),up=SI();function SI(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=we(this);for(let s=0,o=this.length;s<o;s++)Mt(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(we)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){fs();const r=we(this)[e].apply(this,n);return ps(),r}}),t}function PI(t){const e=we(this);return Mt(e,"has",t),e.hasOwnProperty(t)}class H_{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const i=this._isReadonly,s=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw"&&r===(i?s?BI:Q_:s?G_:K_).get(e))return e;const o=re(e);if(!i){if(o&&be(up,n))return Reflect.get(up,n,r);if(n==="hasOwnProperty")return PI}const a=Reflect.get(e,n,r);return(Bl(n)?z_.has(n):RI(n))||(i||Mt(e,"get",n),s)?a:Fe(a)?o&&nd(n)?a:a.value:Le(a)?i?Wl(a):ln(a):a}}class W_ extends H_{constructor(e=!1){super(!1,e)}set(e,n,r,i){let s=e[n];if(Qi(s)&&Fe(s)&&!Fe(r))return!1;if(!this._shallow&&(!tl(r)&&!Qi(r)&&(s=we(s),r=we(r)),!re(e)&&Fe(s)&&!Fe(r)))return s.value=r,!0;const o=re(e)&&nd(n)?Number(n)<e.length:be(e,n),a=Reflect.set(e,n,r,i);return e===we(i)&&(o?ni(r,s)&&qn(e,"set",n,r):qn(e,"add",n,r)),a}deleteProperty(e,n){const r=be(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&qn(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!Bl(n)||!z_.has(n))&&Mt(e,"has",n),r}ownKeys(e){return Mt(e,"iterate",re(e)?"length":Gr),Reflect.ownKeys(e)}}class CI extends H_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const kI=new W_,xI=new CI,OI=new W_(!0),od=t=>t,Hl=t=>Reflect.getPrototypeOf(t);function da(t,e,n=!1,r=!1){t=t.__v_raw;const i=we(t),s=we(e);n||(ni(e,s)&&Mt(i,"get",e),Mt(i,"get",s));const{has:o}=Hl(i),a=r?od:n?cd:no;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function fa(t,e=!1){const n=this.__v_raw,r=we(n),i=we(t);return e||(ni(t,i)&&Mt(r,"has",t),Mt(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function pa(t,e=!1){return t=t.__v_raw,!e&&Mt(we(t),"iterate",Gr),Reflect.get(t,"size",t)}function hp(t){t=we(t);const e=we(this);return Hl(e).has.call(e,t)||(e.add(t),qn(e,"add",t,t)),this}function dp(t,e){e=we(e);const n=we(this),{has:r,get:i}=Hl(n);let s=r.call(n,t);s||(t=we(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?ni(e,o)&&qn(n,"set",t,e):qn(n,"add",t,e),this}function fp(t){const e=we(this),{has:n,get:r}=Hl(e);let i=n.call(e,t);i||(t=we(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&qn(e,"delete",t,void 0),s}function pp(){const t=we(this),e=t.size!==0,n=t.clear();return e&&qn(t,"clear",void 0,void 0),n}function ma(t,e){return function(r,i){const s=this,o=s.__v_raw,a=we(o),l=e?od:t?cd:no;return!t&&Mt(a,"iterate",Gr),o.forEach((c,u)=>r.call(i,l(c),l(u),s))}}function ga(t,e,n){return function(...r){const i=this.__v_raw,s=we(i),o=Mi(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...r),u=n?od:e?cd:no;return!e&&Mt(s,"iterate",l?Gu:Gr),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function tr(t){return function(...e){return t==="delete"?!1:this}}function DI(){const t={get(s){return da(this,s)},get size(){return pa(this)},has:fa,add:hp,set:dp,delete:fp,clear:pp,forEach:ma(!1,!1)},e={get(s){return da(this,s,!1,!0)},get size(){return pa(this)},has:fa,add:hp,set:dp,delete:fp,clear:pp,forEach:ma(!1,!0)},n={get(s){return da(this,s,!0)},get size(){return pa(this,!0)},has(s){return fa.call(this,s,!0)},add:tr("add"),set:tr("set"),delete:tr("delete"),clear:tr("clear"),forEach:ma(!0,!1)},r={get(s){return da(this,s,!0,!0)},get size(){return pa(this,!0)},has(s){return fa.call(this,s,!0)},add:tr("add"),set:tr("set"),delete:tr("delete"),clear:tr("clear"),forEach:ma(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=ga(s,!1,!1),n[s]=ga(s,!0,!1),e[s]=ga(s,!1,!0),r[s]=ga(s,!0,!0)}),[t,n,e,r]}const[NI,LI,VI,MI]=DI();function ad(t,e){const n=e?t?MI:VI:t?LI:NI;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(be(n,i)&&i in r?n:r,i,s)}const FI={get:ad(!1,!1)},UI={get:ad(!1,!0)},$I={get:ad(!0,!1)},K_=new WeakMap,G_=new WeakMap,Q_=new WeakMap,BI=new WeakMap;function qI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jI(t){return t.__v_skip||!Object.isExtensible(t)?0:qI(uI(t))}function ln(t){return Qi(t)?t:ld(t,!1,kI,FI,K_)}function Y_(t){return ld(t,!1,OI,UI,G_)}function Wl(t){return ld(t,!0,xI,$I,Q_)}function ld(t,e,n,r,i){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=jI(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function jn(t){return Qi(t)?jn(t.__v_raw):!!(t&&t.__v_isReactive)}function Qi(t){return!!(t&&t.__v_isReadonly)}function tl(t){return!!(t&&t.__v_isShallow)}function X_(t){return jn(t)||Qi(t)}function we(t){const e=t&&t.__v_raw;return e?we(e):t}function Pr(t){return Za(t,"__v_skip",!0),t}const no=t=>Le(t)?ln(t):t,cd=t=>Le(t)?Wl(t):t;function ud(t){_r&&an&&(t=we(t),j_(t.dep||(t.dep=id())))}function hd(t,e){t=we(t);const n=t.dep;n&&Qu(n)}function Fe(t){return!!(t&&t.__v_isRef===!0)}function ue(t){return J_(t,!1)}function nl(t){return J_(t,!0)}function J_(t,e){return Fe(t)?t:new zI(t,e)}class zI{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:we(e),this._value=n?e:no(e)}get value(){return ud(this),this._value}set value(e){const n=this.__v_isShallow||tl(e)||Qi(e);e=n?e:we(e),ni(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:no(e),hd(this))}}function St(t){return Fe(t)?t.value:t}const HI={get:(t,e,n)=>St(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Fe(i)&&!Fe(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Z_(t){return jn(t)?t:new Proxy(t,HI)}class WI{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>ud(this),()=>hd(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function KI(t){return new WI(t)}function GI(t){const e=re(t)?new Array(t.length):{};for(const n in t)e[n]=ty(t,n);return e}class QI{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return AI(we(this._object),this._key)}}class YI{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function ey(t,e,n){return Fe(t)?t:ce(t)?new YI(t):Le(t)&&arguments.length>1?ty(t,e,n):ue(t)}function ty(t,e,n){const r=t[e];return Fe(r)?r:new QI(t,e,n)}class XI{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new sd(e,()=>{this._dirty||(this._dirty=!0,hd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=we(this);return ud(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function JI(t,e,n=!1){let r,i;const s=ce(t);return s?(r=t,i=un):(r=t.get,i=t.set),new XI(r,i,s||!i,n)}function yr(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Mo(s,e,n)}return i}function Yt(t,e,n,r){if(ce(t)){const s=yr(t,e,n,r);return s&&O_(s)&&s.catch(o=>{Mo(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(Yt(t[s],e,n,r));return i}function Mo(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){yr(l,null,10,[t,o,a]);return}}ZI(t,n,i,r)}function ZI(t,e,n,r=!0){console.error(t)}let ro=!1,Yu=!1;const wt=[];let Tn=0;const Fi=[];let Vn=null,Fr=0;const ny=Promise.resolve();let dd=null;function hn(t){const e=dd||ny;return t?e.then(this?t.bind(this):t):e}function eb(t){let e=Tn+1,n=wt.length;for(;e<n;){const r=e+n>>>1,i=wt[r],s=io(i);s<t||s===t&&i.pre?e=r+1:n=r}return e}function Kl(t){(!wt.length||!wt.includes(t,ro&&t.allowRecurse?Tn+1:Tn))&&(t.id==null?wt.push(t):wt.splice(eb(t.id),0,t),ry())}function ry(){!ro&&!Yu&&(Yu=!0,dd=ny.then(sy))}function tb(t){const e=wt.indexOf(t);e>Tn&&wt.splice(e,1)}function nb(t){re(t)?Fi.push(...t):(!Vn||!Vn.includes(t,t.allowRecurse?Fr+1:Fr))&&Fi.push(t),ry()}function mp(t,e=ro?Tn+1:0){for(;e<wt.length;e++){const n=wt[e];n&&n.pre&&(wt.splice(e,1),e--,n())}}function iy(t){if(Fi.length){const e=[...new Set(Fi)];if(Fi.length=0,Vn){Vn.push(...e);return}for(Vn=e,Vn.sort((n,r)=>io(n)-io(r)),Fr=0;Fr<Vn.length;Fr++)Vn[Fr]();Vn=null,Fr=0}}const io=t=>t.id==null?1/0:t.id,rb=(t,e)=>{const n=io(t)-io(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function sy(t){Yu=!1,ro=!0,wt.sort(rb);const e=un;try{for(Tn=0;Tn<wt.length;Tn++){const n=wt[Tn];n&&n.active!==!1&&yr(n,null,14)}}finally{Tn=0,wt.length=0,iy(),ro=!1,dd=null,(wt.length||Fi.length)&&sy()}}function ib(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ve;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Ve;d&&(i=n.map(f=>Ue(f)?f.trim():f)),h&&(i=n.map(fI))}let a,l=r[a=Gc(e)]||r[a=Gc(xn(e))];!l&&s&&(l=r[a=Gc(pi(e))]),l&&Yt(l,t,6,i);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Yt(c,t,6,i)}}function oy(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!ce(t)){const l=c=>{const u=oy(c,e,!0);u&&(a=!0,nt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(Le(t)&&r.set(t,null),null):(re(s)?s.forEach(l=>o[l]=null):nt(o,s),Le(t)&&r.set(t,o),o)}function Gl(t,e){return!t||!$l(e)?!1:(e=e.slice(2).replace(/Once$/,""),be(t,e[0].toLowerCase()+e.slice(1))||be(t,pi(e))||be(t,e))}let st=null,Ql=null;function rl(t){const e=st;return st=t,Ql=t&&t.type.__scopeId||null,e}function VU(t){Ql=t}function MU(){Ql=null}function Ge(t,e=st,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Pp(-1);const s=rl(e);let o;try{o=t(...i)}finally{rl(s),r._d&&Pp(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Yc(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:p,inheritAttrs:v}=t;let g,w;const _=rl(t);try{if(n.shapeFlag&4){const E=i||r;g=En(u.call(E,E,h,s,f,d,p)),w=l}else{const E=e;g=En(E.length>1?E(s,{attrs:l,slots:a,emit:c}):E(s,null)),w=e.props?l:sb(l)}}catch(E){zs.length=0,Mo(E,t,1),g=fe(Xt)}let T=g;if(w&&v!==!1){const E=Object.keys(w),{shapeFlag:b}=T;E.length&&b&7&&(o&&E.some(ed)&&(w=ob(w,o)),T=br(T,w))}return n.dirs&&(T=br(T),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&(T.transition=n.transition),g=T,rl(_),g}const sb=t=>{let e;for(const n in t)(n==="class"||n==="style"||$l(n))&&((e||(e={}))[n]=t[n]);return e},ob=(t,e)=>{const n={};for(const r in t)(!ed(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ab(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?gp(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!Gl(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?gp(r,o,c):!0:!!o;return!1}function gp(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Gl(n,s))return!0}return!1}function lb({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const fd="components";function ay(t,e){return cy(fd,t,!0,e)||t}const ly=Symbol.for("v-ndc");function cb(t){return Ue(t)?cy(fd,t,!1)||t:t||ly}function cy(t,e,n=!0,r=!1){const i=st||et;if(i){const s=i.type;if(t===fd){const a=nA(s,!1);if(a&&(a===e||a===xn(e)||a===zl(xn(e))))return s}const o=_p(i[t]||s[t],e)||_p(i.appContext[t],e);return!o&&r?s:o}}function _p(t,e){return t&&(t[e]||t[xn(e)]||t[zl(xn(e))])}const ub=t=>t.__isSuspense;function hb(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):nb(t)}function FU(t,e){return pd(t,null,e)}const _a={};function ke(t,e,n){return pd(t,e,n)}function pd(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=Ve){var a;const l=rd()===((a=et)==null?void 0:a.scope)?et:null;let c,u=!1,h=!1;if(Fe(t)?(c=()=>t.value,u=tl(t)):jn(t)?(c=()=>t,r=!0):re(t)?(h=!0,u=t.some(E=>jn(E)||tl(E)),c=()=>t.map(E=>{if(Fe(E))return E.value;if(jn(E))return Br(E);if(ce(E))return yr(E,l,2)})):ce(t)?e?c=()=>yr(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),Yt(t,l,3,[f])}:c=un,e&&r){const E=c;c=()=>Br(E())}let d,f=E=>{d=_.onStop=()=>{yr(E,l,4)}},p;if(Xi)if(f=un,e?n&&Yt(e,l,3,[c(),h?[]:void 0,f]):c(),i==="sync"){const E=sA();p=E.__watcherHandles||(E.__watcherHandles=[])}else return un;let v=h?new Array(t.length).fill(_a):_a;const g=()=>{if(!!_.active)if(e){const E=_.run();(r||u||(h?E.some((b,M)=>ni(b,v[M])):ni(E,v)))&&(d&&d(),Yt(e,l,3,[E,v===_a?void 0:h&&v[0]===_a?[]:v,f]),v=E)}else _.run()};g.allowRecurse=!!e;let w;i==="sync"?w=g:i==="post"?w=()=>Ot(g,l&&l.suspense):(g.pre=!0,l&&(g.id=l.uid),w=()=>Kl(g));const _=new sd(c,w);e?n?g():v=_.run():i==="post"?Ot(_.run.bind(_),l&&l.suspense):_.run();const T=()=>{_.stop(),l&&l.scope&&td(l.scope.effects,_)};return p&&p.push(T),T}function db(t,e,n){const r=this.proxy,i=Ue(t)?t.includes(".")?uy(r,t):()=>r[t]:t.bind(r,r);let s;ce(e)?s=e:(s=e.handler,n=e);const o=et;Yi(this);const a=pd(i,s.bind(r),n);return o?Yi(o):Qr(),a}function uy(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Br(t,e){if(!Le(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Fe(t))Br(t.value,e);else if(re(t))for(let n=0;n<t.length;n++)Br(t[n],e);else if(x_(t)||Mi(t))t.forEach(n=>{Br(n,e)});else if(N_(t))for(const n in t)Br(t[n],e);return t}function Ui(t,e){const n=st;if(n===null)return t;const r=ec(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=Ve]=e[s];o&&(ce(o)&&(o={mounted:o,updated:o}),o.deep&&Br(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Dr(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(fs(),Yt(l,n,8,[t.el,a,t,e]),ps())}}const ar=Symbol("_leaveCb"),ya=Symbol("_enterCb");function hy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return On(()=>{t.isMounted=!0}),xt(()=>{t.isUnmounting=!0}),t}const Kt=[Function,Array],dy={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Kt,onEnter:Kt,onAfterEnter:Kt,onEnterCancelled:Kt,onBeforeLeave:Kt,onLeave:Kt,onAfterLeave:Kt,onLeaveCancelled:Kt,onBeforeAppear:Kt,onAppear:Kt,onAfterAppear:Kt,onAppearCancelled:Kt},fb={name:"BaseTransition",props:dy,setup(t,{slots:e}){const n=We(),r=hy();let i;return()=>{const s=e.default&&md(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const v of s)if(v.type!==Xt){o=v;break}}const a=we(t),{mode:l}=a;if(r.isLeaving)return Xc(o);const c=yp(o);if(!c)return Xc(o);const u=so(c,a,r,n);oo(c,u);const h=n.subTree,d=h&&yp(h);let f=!1;const{getTransitionKey:p}=c.type;if(p){const v=p();i===void 0?i=v:v!==i&&(i=v,f=!0)}if(d&&d.type!==Xt&&(!Ur(c,d)||f)){const v=so(d,a,r,n);if(oo(d,v),l==="out-in")return r.isLeaving=!0,v.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Xc(o);l==="in-out"&&c.type!==Xt&&(v.delayLeave=(g,w,_)=>{const T=fy(r,d);T[String(d.key)]=d,g[ar]=()=>{w(),g[ar]=void 0,delete u.delayedLeave},u.delayedLeave=_})}return o}}},pb=fb;function fy(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function so(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:v,onAppear:g,onAfterAppear:w,onAppearCancelled:_}=e,T=String(t.key),E=fy(n,t),b=(A,R)=>{A&&Yt(A,r,9,R)},M=(A,R)=>{const U=R[1];b(A,R),re(A)?A.every(G=>G.length<=1)&&U():A.length<=1&&U()},V={mode:s,persisted:o,beforeEnter(A){let R=a;if(!n.isMounted)if(i)R=v||a;else return;A[ar]&&A[ar](!0);const U=E[T];U&&Ur(t,U)&&U.el[ar]&&U.el[ar](),b(R,[A])},enter(A){let R=l,U=c,G=u;if(!n.isMounted)if(i)R=g||l,U=w||c,G=_||u;else return;let $=!1;const ie=A[ya]=j=>{$||($=!0,j?b(G,[A]):b(U,[A]),V.delayedLeave&&V.delayedLeave(),A[ya]=void 0)};R?M(R,[A,ie]):ie()},leave(A,R){const U=String(t.key);if(A[ya]&&A[ya](!0),n.isUnmounting)return R();b(h,[A]);let G=!1;const $=A[ar]=ie=>{G||(G=!0,R(),ie?b(p,[A]):b(f,[A]),A[ar]=void 0,E[U]===t&&delete E[U])};E[U]=t,d?M(d,[A,$]):$()},clone(A){return so(A,e,n,r)}};return V}function Xc(t){if(Uo(t))return t=br(t),t.children=null,t}function yp(t){return Uo(t)?t.children?t.children[0]:void 0:t}function oo(t,e){t.shapeFlag&6&&t.component?oo(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function md(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Bt?(o.patchFlag&128&&i++,r=r.concat(md(o.children,e,a))):(e||o.type!==Xt)&&r.push(a!=null?br(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Fo(t,e){return ce(t)?(()=>nt({name:t.name},e,{setup:t}))():t}const Bs=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Jc(t){ce(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:i=200,timeout:s,suspensible:o=!0,onError:a}=t;let l=null,c,u=0;const h=()=>(u++,l=null,d()),d=()=>{let f;return l||(f=l=e().catch(p=>{if(p=p instanceof Error?p:new Error(String(p)),a)return new Promise((v,g)=>{a(p,()=>v(h()),()=>g(p),u+1)});throw p}).then(p=>f!==l&&l?l:(p&&(p.__esModule||p[Symbol.toStringTag]==="Module")&&(p=p.default),c=p,p)))};return Fo({name:"AsyncComponentWrapper",__asyncLoader:d,get __asyncResolved(){return c},setup(){const f=et;if(c)return()=>Zc(c,f);const p=_=>{l=null,Mo(_,f,13,!r)};if(o&&f.suspense||Xi)return d().then(_=>()=>Zc(_,f)).catch(_=>(p(_),()=>r?fe(r,{error:_}):null));const v=ue(!1),g=ue(),w=ue(!!i);return i&&setTimeout(()=>{w.value=!1},i),s!=null&&setTimeout(()=>{if(!v.value&&!g.value){const _=new Error(`Async component timed out after ${s}ms.`);p(_),g.value=_}},s),d().then(()=>{v.value=!0,f.parent&&Uo(f.parent.vnode)&&Kl(f.parent.update)}).catch(_=>{p(_),g.value=_}),()=>{if(v.value&&c)return Zc(c,f);if(g.value&&r)return fe(r,{error:g.value});if(n&&!w.value)return fe(n)}}})}function Zc(t,e){const{ref:n,props:r,children:i,ce:s}=e.vnode,o=fe(t,r,i);return o.ref=n,o.ce=s,delete e.vnode.ce,o}const Uo=t=>t.type.__isKeepAlive;function mb(t,e){py(t,"a",e)}function gd(t,e){py(t,"da",e)}function py(t,e,n=et){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Yl(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Uo(i.parent.vnode)&&gb(r,e,n,i),i=i.parent}}function gb(t,e,n,r){const i=Yl(e,t,r,!0);Xl(()=>{td(r[e],i)},n)}function Yl(t,e,n=et,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;fs(),Yi(n);const a=Yt(e,n,t,o);return Qr(),ps(),a});return r?i.unshift(s):i.push(s),s}}const Yn=t=>(e,n=et)=>(!Xi||t==="sp")&&Yl(t,(...r)=>e(...r),n),_b=Yn("bm"),On=Yn("m"),yb=Yn("bu"),my=Yn("u"),xt=Yn("bum"),Xl=Yn("um"),vb=Yn("sp"),wb=Yn("rtg"),Eb=Yn("rtc");function Tb(t,e=et){Yl("ec",t,e)}function UU(t,e,n,r){let i;const s=n&&n[r];if(re(t)||Ue(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Le(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}function $U(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(re(r))for(let i=0;i<r.length;i++)t[r[i].name]=r[i].fn;else r&&(t[r.name]=r.key?(...i)=>{const s=r.fn(...i);return s&&(s.key=r.key),s}:r.fn)}return t}function BU(t,e,n={},r,i){if(st.isCE||st.parent&&Bs(st.parent)&&st.parent.isCE)return e!=="default"&&(n.name=e),fe("slot",n,r&&r());let s=t[e];s&&s._c&&(s._d=!1),$t();const o=s&&gy(s(n)),a=on(Bt,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function gy(t){return t.some(e=>sl(e)?!(e.type===Xt||e.type===Bt&&!gy(e.children)):!0)?t:null}const Xu=t=>t?Sy(t)?ec(t)||t.proxy:Xu(t.parent):null,qs=nt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Xu(t.parent),$root:t=>Xu(t.root),$emit:t=>t.emit,$options:t=>_d(t),$forceUpdate:t=>t.f||(t.f=()=>Kl(t.update)),$nextTick:t=>t.n||(t.n=hn.bind(t.proxy)),$watch:t=>db.bind(t)}),eu=(t,e)=>t!==Ve&&!t.__isScriptSetup&&be(t,e),Ib={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(eu(r,e))return o[e]=1,r[e];if(i!==Ve&&be(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&be(c,e))return o[e]=3,s[e];if(n!==Ve&&be(n,e))return o[e]=4,n[e];Ju&&(o[e]=0)}}const u=qs[e];let h,d;if(u)return e==="$attrs"&&Mt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ve&&be(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,be(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return eu(i,e)?(i[e]=n,!0):r!==Ve&&be(r,e)?(r[e]=n,!0):be(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==Ve&&be(t,o)||eu(e,o)||(a=s[0])&&be(a,o)||be(r,o)||be(qs,o)||be(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:be(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function vp(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ju=!0;function bb(t){const e=_d(t),n=t.proxy,r=t.ctx;Ju=!1,e.beforeCreate&&wp(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:p,activated:v,deactivated:g,beforeDestroy:w,beforeUnmount:_,destroyed:T,unmounted:E,render:b,renderTracked:M,renderTriggered:V,errorCaptured:A,serverPrefetch:R,expose:U,inheritAttrs:G,components:$,directives:ie,filters:j}=e;if(c&&Ab(c,r,null),o)for(const ge in o){const he=o[ge];ce(he)&&(r[ge]=he.bind(n))}if(i){const ge=i.call(n,n);Le(ge)&&(t.data=ln(ge))}if(Ju=!0,s)for(const ge in s){const he=s[ge],Be=ce(he)?he.bind(n,n):ce(he.get)?he.get.bind(n,n):un,lt=!ce(he)&&ce(he.set)?he.set.bind(n):un,ct=O({get:Be,set:lt});Object.defineProperty(r,ge,{enumerable:!0,configurable:!0,get:()=>ct.value,set:qe=>ct.value=qe})}if(a)for(const ge in a)_y(a[ge],r,n,ge);if(l){const ge=ce(l)?l.call(n):l;Reflect.ownKeys(ge).forEach(he=>{$i(he,ge[he])})}u&&wp(u,t,"c");function Z(ge,he){re(he)?he.forEach(Be=>ge(Be.bind(n))):he&&ge(he.bind(n))}if(Z(_b,h),Z(On,d),Z(yb,f),Z(my,p),Z(mb,v),Z(gd,g),Z(Tb,A),Z(Eb,M),Z(wb,V),Z(xt,_),Z(Xl,E),Z(vb,R),re(U))if(U.length){const ge=t.exposed||(t.exposed={});U.forEach(he=>{Object.defineProperty(ge,he,{get:()=>n[he],set:Be=>n[he]=Be})})}else t.exposed||(t.exposed={});b&&t.render===un&&(t.render=b),G!=null&&(t.inheritAttrs=G),$&&(t.components=$),ie&&(t.directives=ie)}function Ab(t,e,n=un){re(t)&&(t=Zu(t));for(const r in t){const i=t[r];let s;Le(i)?"default"in i?s=Ct(i.from||r,i.default,!0):s=Ct(i.from||r):s=Ct(i),Fe(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function wp(t,e,n){Yt(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function _y(t,e,n,r){const i=r.includes(".")?uy(n,r):()=>n[r];if(Ue(t)){const s=e[t];ce(s)&&ke(i,s)}else if(ce(t))ke(i,t.bind(n));else if(Le(t))if(re(t))t.forEach(s=>_y(s,e,n,r));else{const s=ce(t.handler)?t.handler.bind(n):e[t.handler];ce(s)&&ke(i,s,t)}}function _d(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(c=>il(l,c,o,!0)),il(l,e,o)),Le(e)&&s.set(e,l),l}function il(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&il(t,s,n,!0),i&&i.forEach(o=>il(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Rb[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Rb={data:Ep,props:Tp,emits:Tp,methods:xs,computed:xs,beforeCreate:Rt,created:Rt,beforeMount:Rt,mounted:Rt,beforeUpdate:Rt,updated:Rt,beforeDestroy:Rt,beforeUnmount:Rt,destroyed:Rt,unmounted:Rt,activated:Rt,deactivated:Rt,errorCaptured:Rt,serverPrefetch:Rt,components:xs,directives:xs,watch:Pb,provide:Ep,inject:Sb};function Ep(t,e){return e?t?function(){return nt(ce(t)?t.call(this,this):t,ce(e)?e.call(this,this):e)}:e:t}function Sb(t,e){return xs(Zu(t),Zu(e))}function Zu(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Rt(t,e){return t?[...new Set([].concat(t,e))]:e}function xs(t,e){return t?nt(Object.create(null),t,e):e}function Tp(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:nt(Object.create(null),vp(t),vp(e!=null?e:{})):e}function Pb(t,e){if(!t)return e;if(!e)return t;const n=nt(Object.create(null),t);for(const r in e)n[r]=Rt(t[r],e[r]);return n}function yy(){return{app:null,config:{isNativeTag:aI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cb=0;function kb(t,e){return function(r,i=null){ce(r)||(r=nt({},r)),i!=null&&!Le(i)&&(i=null);const s=yy(),o=new WeakSet;let a=!1;const l=s.app={_uid:Cb++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:oA,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&ce(c.install)?(o.add(c),c.install(l,...u)):ce(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const d=fe(r,i);return d.appContext=s,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,ec(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){ao=l;try{return c()}finally{ao=null}}};return l}}let ao=null;function $i(t,e){if(et){let n=et.provides;const r=et.parent&&et.parent.provides;r===n&&(n=et.provides=Object.create(r)),n[t]=e}}function Ct(t,e,n=!1){const r=et||st;if(r||ao){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ao._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ce(e)?e.call(r&&r.proxy):e}}function xb(){return!!(et||st||ao)}function Ob(t,e,n,r=!1){const i={},s={};Za(s,Zl,1),t.propsDefaults=Object.create(null),vy(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:Y_(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function Db(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=we(i),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Gl(t.emitsOptions,d))continue;const f=e[d];if(l)if(be(s,d))f!==s[d]&&(s[d]=f,c=!0);else{const p=xn(d);i[p]=eh(l,a,p,f,t,!1)}else f!==s[d]&&(s[d]=f,c=!0)}}}else{vy(t,e,i,s)&&(c=!0);let u;for(const h in a)(!e||!be(e,h)&&((u=pi(h))===h||!be(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=eh(l,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!be(e,h)&&!0)&&(delete s[h],c=!0)}c&&qn(t,"set","$attrs")}function vy(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ma(l))continue;const c=e[l];let u;i&&be(i,u=xn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Gl(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=we(n),c=a||Ve;for(let u=0;u<s.length;u++){const h=s[u];n[h]=eh(i,l,h,c[h],t,!be(c,h))}}return o}function eh(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=be(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ce(l)){const{propsDefaults:c}=i;n in c?r=c[n]:(Yi(i),r=c[n]=l.call(null,e),Qr())}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===pi(n))&&(r=!0))}return r}function wy(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let l=!1;if(!ce(t)){const u=h=>{l=!0;const[d,f]=wy(h,e,!0);nt(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return Le(t)&&r.set(t,Vi),Vi;if(re(s))for(let u=0;u<s.length;u++){const h=xn(s[u]);Ip(h)&&(o[h]=Ve)}else if(s)for(const u in s){const h=xn(u);if(Ip(h)){const d=s[u],f=o[h]=re(d)||ce(d)?{type:d}:nt({},d);if(f){const p=Rp(Boolean,f.type),v=Rp(String,f.type);f[0]=p>-1,f[1]=v<0||p<v,(p>-1||be(f,"default"))&&a.push(h)}}}const c=[o,a];return Le(t)&&r.set(t,c),c}function Ip(t){return t[0]!=="$"}function bp(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ap(t,e){return bp(t)===bp(e)}function Rp(t,e){return re(e)?e.findIndex(n=>Ap(n,t)):ce(e)&&Ap(e,t)?0:-1}const Ey=t=>t[0]==="_"||t==="$stable",yd=t=>re(t)?t.map(En):[En(t)],Nb=(t,e,n)=>{if(e._n)return e;const r=Ge((...i)=>yd(e(...i)),n);return r._c=!1,r},Ty=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Ey(i))continue;const s=t[i];if(ce(s))e[i]=Nb(i,s,r);else if(s!=null){const o=yd(s);e[i]=()=>o}}},Iy=(t,e)=>{const n=yd(e);t.slots.default=()=>n},Lb=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=we(e),Za(e,"_",n)):Ty(e,t.slots={})}else t.slots={},e&&Iy(t,e);Za(t.slots,Zl,1)},Vb=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=Ve;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(nt(i,e),!n&&a===1&&delete i._):(s=!e.$stable,Ty(e,i)),o=e}else e&&(Iy(t,e),o={default:1});if(s)for(const a in i)!Ey(a)&&o[a]==null&&delete i[a]};function th(t,e,n,r,i=!1){if(re(t)){t.forEach((d,f)=>th(d,e&&(re(e)?e[f]:e),n,r,i));return}if(Bs(r)&&!i)return;const s=r.shapeFlag&4?ec(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ve?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Ue(c)?(u[c]=null,be(h,c)&&(h[c]=null)):Fe(c)&&(c.value=null)),ce(l))yr(l,a,12,[o,u]);else{const d=Ue(l),f=Fe(l);if(d||f){const p=()=>{if(t.f){const v=d?be(h,l)?h[l]:u[l]:l.value;i?re(v)&&td(v,s):re(v)?v.includes(s)||v.push(s):d?(u[l]=[s],be(h,l)&&(h[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,be(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,Ot(p,n)):p()}}}const Ot=hb;function Mb(t){return Fb(t)}function Fb(t,e){const n=Wu();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=un,insertStaticContent:p}=t,v=(m,y,I,C=null,x=null,D=null,K=!1,F=null,B=!!y.dynamicChildren)=>{if(m===y)return;m&&!Ur(m,y)&&(C=S(m),qe(m,x,D,!0),m=null),y.patchFlag===-2&&(B=!1,y.dynamicChildren=null);const{type:L,ref:ee,shapeFlag:X}=y;switch(L){case Jl:g(m,y,I,C);break;case Xt:w(m,y,I,C);break;case Fa:m==null&&_(y,I,C,K);break;case Bt:$(m,y,I,C,x,D,K,F,B);break;default:X&1?b(m,y,I,C,x,D,K,F,B):X&6?ie(m,y,I,C,x,D,K,F,B):(X&64||X&128)&&L.process(m,y,I,C,x,D,K,F,B,P)}ee!=null&&x&&th(ee,m&&m.ref,D,y||m,!y)},g=(m,y,I,C)=>{if(m==null)r(y.el=a(y.children),I,C);else{const x=y.el=m.el;y.children!==m.children&&c(x,y.children)}},w=(m,y,I,C)=>{m==null?r(y.el=l(y.children||""),I,C):y.el=m.el},_=(m,y,I,C)=>{[m.el,m.anchor]=p(m.children,y,I,C,m.el,m.anchor)},T=({el:m,anchor:y},I,C)=>{let x;for(;m&&m!==y;)x=d(m),r(m,I,C),m=x;r(y,I,C)},E=({el:m,anchor:y})=>{let I;for(;m&&m!==y;)I=d(m),i(m),m=I;i(y)},b=(m,y,I,C,x,D,K,F,B)=>{K=K||y.type==="svg",m==null?M(y,I,C,x,D,K,F,B):R(m,y,x,D,K,F,B)},M=(m,y,I,C,x,D,K,F)=>{let B,L;const{type:ee,props:X,shapeFlag:te,transition:de,dirs:ye}=m;if(B=m.el=o(m.type,D,X&&X.is,X),te&8?u(B,m.children):te&16&&A(m.children,B,null,C,x,D&&ee!=="foreignObject",K,F),ye&&Dr(m,null,C,"created"),V(B,m,m.scopeId,K,C),X){for(const Ce in X)Ce!=="value"&&!Ma(Ce)&&s(B,Ce,null,X[Ce],D,m.children,C,x,_e);"value"in X&&s(B,"value",null,X.value),(L=X.onVnodeBeforeMount)&&wn(L,C,m)}ye&&Dr(m,null,C,"beforeMount");const Oe=Ub(x,de);Oe&&de.beforeEnter(B),r(B,y,I),((L=X&&X.onVnodeMounted)||Oe||ye)&&Ot(()=>{L&&wn(L,C,m),Oe&&de.enter(B),ye&&Dr(m,null,C,"mounted")},x)},V=(m,y,I,C,x)=>{if(I&&f(m,I),C)for(let D=0;D<C.length;D++)f(m,C[D]);if(x){let D=x.subTree;if(y===D){const K=x.vnode;V(m,K,K.scopeId,K.slotScopeIds,x.parent)}}},A=(m,y,I,C,x,D,K,F,B=0)=>{for(let L=B;L<m.length;L++){const ee=m[L]=F?lr(m[L]):En(m[L]);v(null,ee,y,I,C,x,D,K,F)}},R=(m,y,I,C,x,D,K)=>{const F=y.el=m.el;let{patchFlag:B,dynamicChildren:L,dirs:ee}=y;B|=m.patchFlag&16;const X=m.props||Ve,te=y.props||Ve;let de;I&&Nr(I,!1),(de=te.onVnodeBeforeUpdate)&&wn(de,I,y,m),ee&&Dr(y,m,I,"beforeUpdate"),I&&Nr(I,!0);const ye=x&&y.type!=="foreignObject";if(L?U(m.dynamicChildren,L,F,I,C,ye,D):K||he(m,y,F,null,I,C,ye,D,!1),B>0){if(B&16)G(F,y,X,te,I,C,x);else if(B&2&&X.class!==te.class&&s(F,"class",null,te.class,x),B&4&&s(F,"style",X.style,te.style,x),B&8){const Oe=y.dynamicProps;for(let Ce=0;Ce<Oe.length;Ce++){const Ye=Oe[Ce],nn=X[Ye],Ti=te[Ye];(Ti!==nn||Ye==="value")&&s(F,Ye,nn,Ti,x,m.children,I,C,_e)}}B&1&&m.children!==y.children&&u(F,y.children)}else!K&&L==null&&G(F,y,X,te,I,C,x);((de=te.onVnodeUpdated)||ee)&&Ot(()=>{de&&wn(de,I,y,m),ee&&Dr(y,m,I,"updated")},C)},U=(m,y,I,C,x,D,K)=>{for(let F=0;F<y.length;F++){const B=m[F],L=y[F],ee=B.el&&(B.type===Bt||!Ur(B,L)||B.shapeFlag&70)?h(B.el):I;v(B,L,ee,null,C,x,D,K,!0)}},G=(m,y,I,C,x,D,K)=>{if(I!==C){if(I!==Ve)for(const F in I)!Ma(F)&&!(F in C)&&s(m,F,I[F],null,K,y.children,x,D,_e);for(const F in C){if(Ma(F))continue;const B=C[F],L=I[F];B!==L&&F!=="value"&&s(m,F,L,B,K,y.children,x,D,_e)}"value"in C&&s(m,"value",I.value,C.value)}},$=(m,y,I,C,x,D,K,F,B)=>{const L=y.el=m?m.el:a(""),ee=y.anchor=m?m.anchor:a("");let{patchFlag:X,dynamicChildren:te,slotScopeIds:de}=y;de&&(F=F?F.concat(de):de),m==null?(r(L,I,C),r(ee,I,C),A(y.children,I,ee,x,D,K,F,B)):X>0&&X&64&&te&&m.dynamicChildren?(U(m.dynamicChildren,te,I,x,D,K,F),(y.key!=null||x&&y===x.subTree)&&vd(m,y,!0)):he(m,y,I,ee,x,D,K,F,B)},ie=(m,y,I,C,x,D,K,F,B)=>{y.slotScopeIds=F,m==null?y.shapeFlag&512?x.ctx.activate(y,I,C,K,B):j(y,I,C,x,D,K,B):se(m,y,B)},j=(m,y,I,C,x,D,K)=>{const F=m.component=Xb(m,C,x);if(Uo(m)&&(F.ctx.renderer=P),Jb(F),F.asyncDep){if(x&&x.registerDep(F,Z),!m.el){const B=F.subTree=fe(Xt);w(null,B,y,I)}return}Z(F,m,y,I,x,D,K)},se=(m,y,I)=>{const C=y.component=m.component;if(ab(m,y,I))if(C.asyncDep&&!C.asyncResolved){ge(C,y,I);return}else C.next=y,tb(C.update),C.update();else y.el=m.el,C.vnode=y},Z=(m,y,I,C,x,D,K)=>{const F=()=>{if(m.isMounted){let{next:ee,bu:X,u:te,parent:de,vnode:ye}=m,Oe=ee,Ce;Nr(m,!1),ee?(ee.el=ye.el,ge(m,ee,K)):ee=ye,X&&Qc(X),(Ce=ee.props&&ee.props.onVnodeBeforeUpdate)&&wn(Ce,de,ee,ye),Nr(m,!0);const Ye=Yc(m),nn=m.subTree;m.subTree=Ye,v(nn,Ye,h(nn.el),S(nn),m,x,D),ee.el=Ye.el,Oe===null&&lb(m,Ye.el),te&&Ot(te,x),(Ce=ee.props&&ee.props.onVnodeUpdated)&&Ot(()=>wn(Ce,de,ee,ye),x)}else{let ee;const{el:X,props:te}=y,{bm:de,m:ye,parent:Oe}=m,Ce=Bs(y);if(Nr(m,!1),de&&Qc(de),!Ce&&(ee=te&&te.onVnodeBeforeMount)&&wn(ee,Oe,y),Nr(m,!0),X&&Ee){const Ye=()=>{m.subTree=Yc(m),Ee(X,m.subTree,m,x,null)};Ce?y.type.__asyncLoader().then(()=>!m.isUnmounted&&Ye()):Ye()}else{const Ye=m.subTree=Yc(m);v(null,Ye,I,C,m,x,D),y.el=Ye.el}if(ye&&Ot(ye,x),!Ce&&(ee=te&&te.onVnodeMounted)){const Ye=y;Ot(()=>wn(ee,Oe,Ye),x)}(y.shapeFlag&256||Oe&&Bs(Oe.vnode)&&Oe.vnode.shapeFlag&256)&&m.a&&Ot(m.a,x),m.isMounted=!0,y=I=C=null}},B=m.effect=new sd(F,()=>Kl(L),m.scope),L=m.update=()=>B.run();L.id=m.uid,Nr(m,!0),L()},ge=(m,y,I)=>{y.component=m;const C=m.vnode.props;m.vnode=y,m.next=null,Db(m,y.props,C,I),Vb(m,y.children,I),fs(),mp(),ps()},he=(m,y,I,C,x,D,K,F,B=!1)=>{const L=m&&m.children,ee=m?m.shapeFlag:0,X=y.children,{patchFlag:te,shapeFlag:de}=y;if(te>0){if(te&128){lt(L,X,I,C,x,D,K,F,B);return}else if(te&256){Be(L,X,I,C,x,D,K,F,B);return}}de&8?(ee&16&&_e(L,x,D),X!==L&&u(I,X)):ee&16?de&16?lt(L,X,I,C,x,D,K,F,B):_e(L,x,D,!0):(ee&8&&u(I,""),de&16&&A(X,I,C,x,D,K,F,B))},Be=(m,y,I,C,x,D,K,F,B)=>{m=m||Vi,y=y||Vi;const L=m.length,ee=y.length,X=Math.min(L,ee);let te;for(te=0;te<X;te++){const de=y[te]=B?lr(y[te]):En(y[te]);v(m[te],de,I,null,x,D,K,F,B)}L>ee?_e(m,x,D,!0,!1,X):A(y,I,C,x,D,K,F,B,X)},lt=(m,y,I,C,x,D,K,F,B)=>{let L=0;const ee=y.length;let X=m.length-1,te=ee-1;for(;L<=X&&L<=te;){const de=m[L],ye=y[L]=B?lr(y[L]):En(y[L]);if(Ur(de,ye))v(de,ye,I,null,x,D,K,F,B);else break;L++}for(;L<=X&&L<=te;){const de=m[X],ye=y[te]=B?lr(y[te]):En(y[te]);if(Ur(de,ye))v(de,ye,I,null,x,D,K,F,B);else break;X--,te--}if(L>X){if(L<=te){const de=te+1,ye=de<ee?y[de].el:C;for(;L<=te;)v(null,y[L]=B?lr(y[L]):En(y[L]),I,ye,x,D,K,F,B),L++}}else if(L>te)for(;L<=X;)qe(m[L],x,D,!0),L++;else{const de=L,ye=L,Oe=new Map;for(L=ye;L<=te;L++){const Ft=y[L]=B?lr(y[L]):En(y[L]);Ft.key!=null&&Oe.set(Ft.key,L)}let Ce,Ye=0;const nn=te-ye+1;let Ti=!1,rp=0;const Es=new Array(nn);for(L=0;L<nn;L++)Es[L]=0;for(L=de;L<=X;L++){const Ft=m[L];if(Ye>=nn){qe(Ft,x,D,!0);continue}let vn;if(Ft.key!=null)vn=Oe.get(Ft.key);else for(Ce=ye;Ce<=te;Ce++)if(Es[Ce-ye]===0&&Ur(Ft,y[Ce])){vn=Ce;break}vn===void 0?qe(Ft,x,D,!0):(Es[vn-ye]=L+1,vn>=rp?rp=vn:Ti=!0,v(Ft,y[vn],I,null,x,D,K,F,B),Ye++)}const ip=Ti?$b(Es):Vi;for(Ce=ip.length-1,L=nn-1;L>=0;L--){const Ft=ye+L,vn=y[Ft],sp=Ft+1<ee?y[Ft+1].el:C;Es[L]===0?v(null,vn,I,sp,x,D,K,F,B):Ti&&(Ce<0||L!==ip[Ce]?ct(vn,I,sp,2):Ce--)}}},ct=(m,y,I,C,x=null)=>{const{el:D,type:K,transition:F,children:B,shapeFlag:L}=m;if(L&6){ct(m.component.subTree,y,I,C);return}if(L&128){m.suspense.move(y,I,C);return}if(L&64){K.move(m,y,I,P);return}if(K===Bt){r(D,y,I);for(let X=0;X<B.length;X++)ct(B[X],y,I,C);r(m.anchor,y,I);return}if(K===Fa){T(m,y,I);return}if(C!==2&&L&1&&F)if(C===0)F.beforeEnter(D),r(D,y,I),Ot(()=>F.enter(D),x);else{const{leave:X,delayLeave:te,afterLeave:de}=F,ye=()=>r(D,y,I),Oe=()=>{X(D,()=>{ye(),de&&de()})};te?te(D,ye,Oe):Oe()}else r(D,y,I)},qe=(m,y,I,C=!1,x=!1)=>{const{type:D,props:K,ref:F,children:B,dynamicChildren:L,shapeFlag:ee,patchFlag:X,dirs:te}=m;if(F!=null&&th(F,null,I,m,!0),ee&256){y.ctx.deactivate(m);return}const de=ee&1&&te,ye=!Bs(m);let Oe;if(ye&&(Oe=K&&K.onVnodeBeforeUnmount)&&wn(Oe,y,m),ee&6)me(m.component,I,C);else{if(ee&128){m.suspense.unmount(I,C);return}de&&Dr(m,null,y,"beforeUnmount"),ee&64?m.type.remove(m,y,I,x,P,C):L&&(D!==Bt||X>0&&X&64)?_e(L,y,I,!1,!0):(D===Bt&&X&384||!x&&ee&16)&&_e(B,y,I),C&&mt(m)}(ye&&(Oe=K&&K.onVnodeUnmounted)||de)&&Ot(()=>{Oe&&wn(Oe,y,m),de&&Dr(m,null,y,"unmounted")},I)},mt=m=>{const{type:y,el:I,anchor:C,transition:x}=m;if(y===Bt){Wt(I,C);return}if(y===Fa){E(m);return}const D=()=>{i(I),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(m.shapeFlag&1&&x&&!x.persisted){const{leave:K,delayLeave:F}=x,B=()=>K(I,D);F?F(m.el,D,B):B()}else D()},Wt=(m,y)=>{let I;for(;m!==y;)I=d(m),i(m),m=I;i(y)},me=(m,y,I)=>{const{bum:C,scope:x,update:D,subTree:K,um:F}=m;C&&Qc(C),x.stop(),D&&(D.active=!1,qe(K,m,y,I)),F&&Ot(F,y),Ot(()=>{m.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},_e=(m,y,I,C=!1,x=!1,D=0)=>{for(let K=D;K<m.length;K++)qe(m[K],y,I,C,x)},S=m=>m.shapeFlag&6?S(m.component.subTree):m.shapeFlag&128?m.suspense.next():d(m.anchor||m.el),W=(m,y,I)=>{m==null?y._vnode&&qe(y._vnode,null,null,!0):v(y._vnode||null,m,y,null,null,null,I),mp(),iy(),y._vnode=m},P={p:v,um:qe,m:ct,r:mt,mt:j,mc:A,pc:he,pbc:U,n:S,o:t};let Q,Ee;return e&&([Q,Ee]=e(P)),{render:W,hydrate:Q,createApp:kb(W,Q)}}function Nr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ub(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function vd(t,e,n=!1){const r=t.children,i=e.children;if(re(r)&&re(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=lr(i[s]),a.el=o.el),n||vd(o,a)),a.type===Jl&&(a.el=o.el)}}function $b(t){const e=t.slice(),n=[0];let r,i,s,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const Bb=t=>t.__isTeleport,js=t=>t&&(t.disabled||t.disabled===""),Sp=t=>typeof SVGElement!="undefined"&&t instanceof SVGElement,nh=(t,e)=>{const n=t&&t.to;return Ue(n)?e?e(n):null:n},qb={__isTeleport:!0,process(t,e,n,r,i,s,o,a,l,c){const{mc:u,pc:h,pbc:d,o:{insert:f,querySelector:p,createText:v,createComment:g}}=c,w=js(e.props);let{shapeFlag:_,children:T,dynamicChildren:E}=e;if(t==null){const b=e.el=v(""),M=e.anchor=v("");f(b,n,r),f(M,n,r);const V=e.target=nh(e.props,p),A=e.targetAnchor=v("");V&&(f(A,V),o=o||Sp(V));const R=(U,G)=>{_&16&&u(T,U,G,i,s,o,a,l)};w?R(n,M):V&&R(V,A)}else{e.el=t.el;const b=e.anchor=t.anchor,M=e.target=t.target,V=e.targetAnchor=t.targetAnchor,A=js(t.props),R=A?n:M,U=A?b:V;if(o=o||Sp(M),E?(d(t.dynamicChildren,E,R,i,s,o,a),vd(t,e,!0)):l||h(t,e,R,U,i,s,o,a,!1),w)A?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):va(e,n,b,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const G=e.target=nh(e.props,p);G&&va(e,G,null,c,0)}else A&&va(e,M,V,c,1)}by(e)},remove(t,e,n,r,{um:i,o:{remove:s}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:h,props:d}=t;if(h&&s(u),o&&s(c),a&16){const f=o||!js(d);for(let p=0;p<l.length;p++){const v=l[p];i(v,e,n,f,!!v.dynamicChildren)}}},move:va,hydrate:jb};function va(t,e,n,{o:{insert:r},m:i},s=2){s===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,h=s===2;if(h&&r(o,e,n),(!h||js(u))&&l&16)for(let d=0;d<c.length;d++)i(c[d],e,n,2);h&&r(a,e,n)}function jb(t,e,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=nh(e.props,l);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(js(e.props))e.anchor=c(o(t),e,a(t),n,r,i,s),e.targetAnchor=h;else{e.anchor=o(t);let d=h;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(h,e,u,n,r,i,s)}by(e)}return e.anchor&&o(e.anchor)}const zb=qb;function by(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Bt=Symbol.for("v-fgt"),Jl=Symbol.for("v-txt"),Xt=Symbol.for("v-cmt"),Fa=Symbol.for("v-stc"),zs=[];let cn=null;function $t(t=!1){zs.push(cn=t?null:[])}function Hb(){zs.pop(),cn=zs[zs.length-1]||null}let lo=1;function Pp(t){lo+=t}function Ay(t){return t.dynamicChildren=lo>0?cn||Vi:null,Hb(),lo>0&&cn&&cn.push(t),t}function Cp(t,e,n,r,i,s){return Ay(wd(t,e,n,r,i,s,!0))}function on(t,e,n,r,i){return Ay(fe(t,e,n,r,i,!0))}function sl(t){return t?t.__v_isVNode===!0:!1}function Ur(t,e){return t.type===e.type&&t.key===e.key}const Zl="__vInternal",Ry=({key:t})=>t!=null?t:null,Ua=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ue(t)||Fe(t)||ce(t)?{i:st,r:t,k:e,f:!!n}:t:null);function wd(t,e=null,n=null,r=0,i=null,s=t===Bt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ry(e),ref:e&&Ua(e),scopeId:Ql,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:st};return a?(Ed(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Ue(n)?8:16),lo>0&&!o&&cn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&cn.push(l),l}const fe=Wb;function Wb(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===ly)&&(t=Xt),sl(t)){const a=br(t,e,!0);return n&&Ed(a,n),lo>0&&!s&&cn&&(a.shapeFlag&6?cn[cn.indexOf(t)]=a:cn.push(a)),a.patchFlag|=-2,a}if(rA(t)&&(t=t.__vccOpts),e){e=Kb(e);let{class:a,style:l}=e;a&&!Ue(a)&&(e.class=Vo(a)),Le(l)&&(X_(l)&&!re(l)&&(l=nt({},l)),e.style=Lo(l))}const o=Ue(t)?1:ub(t)?128:Bb(t)?64:Le(t)?4:ce(t)?2:0;return wd(t,e,n,r,i,o,s,!0)}function Kb(t){return t?X_(t)||Zl in t?nt({},t):t:null}function br(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?Gb(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ry(a),ref:e&&e.ref?n&&i?re(i)?i.concat(Ua(e)):[i,Ua(e)]:Ua(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Bt?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&br(t.ssContent),ssFallback:t.ssFallback&&br(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Os(t=" ",e=0){return fe(Jl,null,t,e)}function qU(t,e){const n=fe(Fa,null,t);return n.staticCount=e,n}function kp(t="",e=!1){return e?($t(),on(Xt,null,t)):fe(Xt,null,t)}function En(t){return t==null||typeof t=="boolean"?fe(Xt):re(t)?fe(Bt,null,t.slice()):typeof t=="object"?lr(t):fe(Jl,null,String(t))}function lr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:br(t)}function Ed(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Ed(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Zl in e)?e._ctx=st:i===3&&st&&(st.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ce(e)?(e={default:e,_ctx:st},n=32):(e=String(e),r&64?(n=16,e=[Os(e)]):n=8);t.children=e,t.shapeFlag|=n}function Gb(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Vo([e.class,r.class]));else if(i==="style")e.style=Lo([e.style,r.style]);else if($l(i)){const s=e[i],o=r[i];o&&s!==o&&!(re(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function wn(t,e,n,r=null){Yt(t,e,7,[n,r])}const Qb=yy();let Yb=0;function Xb(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||Qb,s={uid:Yb++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new M_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wy(r,i),emitsOptions:oy(r,i),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:r.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=ib.bind(null,s),t.ce&&t.ce(s),s}let et=null;const We=()=>et||st;let Td,Ii,xp="__VUE_INSTANCE_SETTERS__";(Ii=Wu()[xp])||(Ii=Wu()[xp]=[]),Ii.push(t=>et=t),Td=t=>{Ii.length>1?Ii.forEach(e=>e(t)):Ii[0](t)};const Yi=t=>{Td(t),t.scope.on()},Qr=()=>{et&&et.scope.off(),Td(null)};function Sy(t){return t.vnode.shapeFlag&4}let Xi=!1;function Jb(t,e=!1){Xi=e;const{props:n,children:r}=t.vnode,i=Sy(t);Ob(t,n,i,e),Lb(t,r);const s=i?Zb(t,e):void 0;return Xi=!1,s}function Zb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Pr(new Proxy(t.ctx,Ib));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?tA(t):null;Yi(t),fs();const s=yr(r,t,0,[t.props,i]);if(ps(),Qr(),O_(s)){if(s.then(Qr,Qr),e)return s.then(o=>{Op(t,o,e)}).catch(o=>{Mo(o,t,0)});t.asyncDep=s}else Op(t,s,e)}else Py(t,e)}function Op(t,e,n){ce(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=Z_(e)),Py(t,n)}let Dp;function Py(t,e,n){const r=t.type;if(!t.render){if(!e&&Dp&&!r.render){const i=r.template||_d(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=nt(nt({isCustomElement:s,delimiters:a},o),l);r.render=Dp(i,c)}}t.render=r.render||un}{Yi(t),fs();try{bb(t)}finally{ps(),Qr()}}}function eA(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Mt(t,"get","$attrs"),e[n]}}))}function tA(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return eA(t)},slots:t.slots,emit:t.emit,expose:e}}function ec(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Z_(Pr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qs)return qs[n](t)},has(e,n){return n in e||n in qs}}))}function nA(t,e=!0){return ce(t)?t.displayName||t.name:t.name||e&&t.__name}function rA(t){return ce(t)&&"__vccOpts"in t}const O=(t,e)=>JI(t,e,Xi);function q(t,e,n){const r=arguments.length;return r===2?Le(e)&&!re(e)?sl(e)?fe(t,null,[e]):fe(t,e):fe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&sl(n)&&(n=[n]),fe(t,e,n))}const iA=Symbol.for("v-scx"),sA=()=>Ct(iA),oA="3.3.8",aA="http://www.w3.org/2000/svg",$r=typeof document!="undefined"?document:null,Np=$r&&$r.createElement("template"),lA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?$r.createElementNS(aA,t):$r.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>$r.createTextNode(t),createComment:t=>$r.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>$r.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Np.innerHTML=r?`<svg>${t}</svg>`:t;const a=Np.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},nr="transition",Ts="animation",Ji=Symbol("_vtc"),Zi=(t,{slots:e})=>q(pb,ky(t),e);Zi.displayName="Transition";const Cy={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},cA=Zi.props=nt({},dy,Cy),Lr=(t,e=[])=>{re(t)?t.forEach(n=>n(...e)):t&&t(...e)},Lp=t=>t?re(t)?t.some(e=>e.length>1):t.length>1:!1;function ky(t){const e={};for(const $ in t)$ in Cy||(e[$]=t[$]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,p=uA(i),v=p&&p[0],g=p&&p[1],{onBeforeEnter:w,onEnter:_,onEnterCancelled:T,onLeave:E,onLeaveCancelled:b,onBeforeAppear:M=w,onAppear:V=_,onAppearCancelled:A=T}=e,R=($,ie,j)=>{sr($,ie?u:a),sr($,ie?c:o),j&&j()},U=($,ie)=>{$._isLeaving=!1,sr($,h),sr($,f),sr($,d),ie&&ie()},G=$=>(ie,j)=>{const se=$?V:_,Z=()=>R(ie,$,j);Lr(se,[ie,Z]),Vp(()=>{sr(ie,$?l:s),Ln(ie,$?u:a),Lp(se)||Mp(ie,r,v,Z)})};return nt(e,{onBeforeEnter($){Lr(w,[$]),Ln($,s),Ln($,o)},onBeforeAppear($){Lr(M,[$]),Ln($,l),Ln($,c)},onEnter:G(!1),onAppear:G(!0),onLeave($,ie){$._isLeaving=!0;const j=()=>U($,ie);Ln($,h),Oy(),Ln($,d),Vp(()=>{!$._isLeaving||(sr($,h),Ln($,f),Lp(E)||Mp($,r,g,j))}),Lr(E,[$,j])},onEnterCancelled($){R($,!1),Lr(T,[$])},onAppearCancelled($){R($,!0),Lr(A,[$])},onLeaveCancelled($){U($),Lr(b,[$])}})}function uA(t){if(t==null)return null;if(Le(t))return[tu(t.enter),tu(t.leave)];{const e=tu(t);return[e,e]}}function tu(t){return pI(t)}function Ln(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ji]||(t[Ji]=new Set)).add(e)}function sr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Ji];n&&(n.delete(e),n.size||(t[Ji]=void 0))}function Vp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let hA=0;function Mp(t,e,n,r){const i=t._endId=++hA,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=xy(t,e);if(!o)return r();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),s()},d=f=>{f.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function xy(t,e){const n=window.getComputedStyle(t),r=p=>(n[p]||"").split(", "),i=r(`${nr}Delay`),s=r(`${nr}Duration`),o=Fp(i,s),a=r(`${Ts}Delay`),l=r(`${Ts}Duration`),c=Fp(a,l);let u=null,h=0,d=0;e===nr?o>0&&(u=nr,h=o,d=s.length):e===Ts?c>0&&(u=Ts,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?nr:Ts:null,d=u?u===nr?s.length:l.length:0);const f=u===nr&&/\b(transform|all)(,|$)/.test(r(`${nr}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function Fp(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Up(n)+Up(t[r])))}function Up(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Oy(){return document.body.offsetHeight}function dA(t,e,n){const r=t[Ji];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const fA=Symbol("_vod");function pA(t,e,n){const r=t.style,i=Ue(n);if(n&&!i){if(e&&!Ue(e))for(const s in e)n[s]==null&&rh(r,s,"");for(const s in n)rh(r,s,n[s])}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),fA in t&&(r.display=s)}}const $p=/\s*!important$/;function rh(t,e,n){if(re(n))n.forEach(r=>rh(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=mA(t,e);$p.test(n)?t.setProperty(pi(r),n.replace($p,""),"important"):t[r]=n}}const Bp=["Webkit","Moz","ms"],nu={};function mA(t,e){const n=nu[e];if(n)return n;let r=xn(e);if(r!=="filter"&&r in t)return nu[e]=r;r=zl(r);for(let i=0;i<Bp.length;i++){const s=Bp[i]+r;if(s in t)return nu[e]=s}return e}const qp="http://www.w3.org/1999/xlink";function gA(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(qp,e.slice(6,e.length)):t.setAttributeNS(qp,e,n);else{const s=wI(e);n==null||s&&!L_(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function _A(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n==null?"":n;c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=L_(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function yA(t,e,n,r){t.addEventListener(e,n,r)}function vA(t,e,n,r){t.removeEventListener(e,n,r)}const jp=Symbol("_vei");function wA(t,e,n,r,i=null){const s=t[jp]||(t[jp]={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=EA(e);if(r){const c=s[e]=bA(r,i);yA(t,a,c,l)}else o&&(vA(t,a,o,l),s[e]=void 0)}}const zp=/(?:Once|Passive|Capture)$/;function EA(t){let e;if(zp.test(t)){e={};let r;for(;r=t.match(zp);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):pi(t.slice(2)),e]}let ru=0;const TA=Promise.resolve(),IA=()=>ru||(TA.then(()=>ru=0),ru=Date.now());function bA(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Yt(AA(r,n.value),e,5,[r])};return n.value=t,n.attached=IA(),n}function AA(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Hp=/^on[a-z]/,RA=(t,e,n,r,i=!1,s,o,a,l)=>{e==="class"?dA(t,r,i):e==="style"?pA(t,n,r):$l(e)?ed(e)||wA(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):SA(t,e,r,i))?_A(t,e,r,s,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),gA(t,e,r,i))};function SA(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Hp.test(e)&&ce(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Hp.test(e)&&Ue(n)?!1:e in t}const Dy=new WeakMap,Ny=new WeakMap,ol=Symbol("_moveCb"),Wp=Symbol("_enterCb"),Ly={name:"TransitionGroup",props:nt({},cA,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=We(),r=hy();let i,s;return my(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!DA(i[0].el,n.vnode.el,o))return;i.forEach(kA),i.forEach(xA);const a=i.filter(OA);Oy(),a.forEach(l=>{const c=l.el,u=c.style;Ln(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c[ol]=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",h),c[ol]=null,sr(c,o))};c.addEventListener("transitionend",h)})}),()=>{const o=we(t),a=ky(o);let l=o.tag||Bt;i=s,s=e.default?md(e.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&oo(u,so(u,a,r,n))}if(i)for(let c=0;c<i.length;c++){const u=i[c];oo(u,so(u,a,r,n)),Dy.set(u,u.el.getBoundingClientRect())}return fe(l,null,s)}}},PA=t=>delete t.mode;Ly.props;const CA=Ly;function kA(t){const e=t.el;e[ol]&&e[ol](),e[Wp]&&e[Wp]()}function xA(t){Ny.set(t,t.el.getBoundingClientRect())}function OA(t){const e=Dy.get(t),n=Ny.get(t),r=e.left-n.left,i=e.top-n.top;if(r||i){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${r}px,${i}px)`,s.transitionDuration="0s",t}}function DA(t,e,n){const r=t.cloneNode(),i=t[Ji];i&&i.forEach(a=>{a.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&r.classList.add(a)),r.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(r);const{hasTransform:o}=xy(r);return s.removeChild(r),o}const NA=["ctrl","shift","alt","meta"],LA={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>NA.some(n=>t[`${n}Key`]&&!e.includes(n))},jU=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=LA[e[i]];if(s&&s(n,e))return}return t(n,...r)},VA={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},zU=(t,e)=>n=>{if(!("key"in n))return;const r=pi(n.key);if(e.some(i=>i===r||VA[i]===r))return t(n)},MA=nt({patchProp:RA},lA);let Kp;function FA(){return Kp||(Kp=Mb(MA))}const Vy=(...t)=>{const e=FA().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=UA(r);if(!i)return;const s=e._component;!ce(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function UA(t){return Ue(t)?document.querySelector(t):t}function tc(t,e,n,r){return Object.defineProperty(t,e,{get:n,set:r,enumerable:!0}),t}const Hn=ue(!1);let nc;function $A(t,e){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(t)||/(opr)[\/]([\w.]+)/.exec(t)||/(vivaldi)[\/]([\w.]+)/.exec(t)||/(chrome|crios)[\/]([\w.]+)/.exec(t)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(firefox|fxios)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(t)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[2]||n[4]||"0",versionNumber:n[4]||n[2]||"0",platform:e[0]||""}}function BA(t){return/(ipad)/.exec(t)||/(ipod)/.exec(t)||/(windows phone)/.exec(t)||/(iphone)/.exec(t)||/(kindle)/.exec(t)||/(silk)/.exec(t)||/(android)/.exec(t)||/(win)/.exec(t)||/(mac)/.exec(t)||/(linux)/.exec(t)||/(cros)/.exec(t)||/(playbook)/.exec(t)||/(bb)/.exec(t)||/(blackberry)/.exec(t)||[]}const My="ontouchstart"in window||window.navigator.maxTouchPoints>0;function qA(t){nc={is:{...t}},delete t.mac,delete t.desktop;const e=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(t,{mobile:!0,ios:!0,platform:e,[e]:!0})}function jA(t){const e=t.toLowerCase(),n=BA(e),r=$A(e,n),i={};r.browser&&(i[r.browser]=!0,i.version=r.version,i.versionNumber=parseInt(r.versionNumber,10)),r.platform&&(i[r.platform]=!0);const s=i.android||i.ios||i.bb||i.blackberry||i.ipad||i.iphone||i.ipod||i.kindle||i.playbook||i.silk||i["windows phone"];return s===!0||e.indexOf("mobile")>-1?(i.mobile=!0,i.edga||i.edgios?(i.edge=!0,r.browser="edge"):i.crios?(i.chrome=!0,r.browser="chrome"):i.fxios&&(i.firefox=!0,r.browser="firefox")):i.desktop=!0,(i.ipod||i.ipad||i.iphone)&&(i.ios=!0),i["windows phone"]&&(i.winphone=!0,delete i["windows phone"]),(i.chrome||i.opr||i.safari||i.vivaldi||i.mobile===!0&&i.ios!==!0&&s!==!0)&&(i.webkit=!0),i.edg&&(r.browser="edgechromium",i.edgeChromium=!0),(i.safari&&i.blackberry||i.bb)&&(r.browser="blackberry",i.blackberry=!0),i.safari&&i.playbook&&(r.browser="playbook",i.playbook=!0),i.opr&&(r.browser="opera",i.opera=!0),i.safari&&i.android&&(r.browser="android",i.android=!0),i.safari&&i.kindle&&(r.browser="kindle",i.kindle=!0),i.safari&&i.silk&&(r.browser="silk",i.silk=!0),i.vivaldi&&(r.browser="vivaldi",i.vivaldi=!0),i.name=r.browser,i.platform=r.platform,e.indexOf("electron")>-1?i.electron=!0:document.location.href.indexOf("-extension://")>-1?i.bex=!0:(window.Capacitor!==void 0?(i.capacitor=!0,i.nativeMobile=!0,i.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(i.cordova=!0,i.nativeMobile=!0,i.nativeMobileWrapper="cordova"),My===!0&&i.mac===!0&&(i.desktop===!0&&i.safari===!0||i.nativeMobile===!0&&i.android!==!0&&i.ios!==!0&&i.ipad!==!0)&&qA(i)),i}const Gp=navigator.userAgent||navigator.vendor||window.opera,zA={has:{touch:!1,webStorage:!1},within:{iframe:!1}},je={userAgent:Gp,is:jA(Gp),has:{touch:My},within:{iframe:window.self!==window.top}},al={install(t){const{$q:e}=t;Hn.value===!0?(t.onSSRHydrated.push(()=>{Object.assign(e.platform,je),Hn.value=!1,nc=void 0}),e.platform=ln(this)):e.platform=this}};{let t;tc(je.has,"webStorage",()=>{if(t!==void 0)return t;try{if(window.localStorage)return t=!0,!0}catch{}return t=!1,!1}),je.is.ios===!0&&window.navigator.vendor.toLowerCase().indexOf("apple"),Hn.value===!0?Object.assign(al,je,nc,zA):Object.assign(al,je)}var $o=(t,e)=>{const n=ln(t);for(const r in t)tc(e,r,()=>n[r],i=>{n[r]=i});return e};const Ze={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const t=Object.defineProperty({},"passive",{get(){Object.assign(Ze,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,t),window.removeEventListener("qtest",null,t)}catch{}function Nt(){}function HU(t){return t.button===0}function Fy(t){return t.touches&&t.touches[0]?t=t.touches[0]:t.changedTouches&&t.changedTouches[0]?t=t.changedTouches[0]:t.targetTouches&&t.targetTouches[0]&&(t=t.targetTouches[0]),{top:t.clientY,left:t.clientX}}function HA(t){if(t.path)return t.path;if(t.composedPath)return t.composedPath();const e=[];let n=t.target;for(;n;){if(e.push(n),n.tagName==="HTML")return e.push(document),e.push(window),e;n=n.parentElement}}function Uy(t){t.stopPropagation()}function co(t){t.cancelable!==!1&&t.preventDefault()}function Mn(t){t.cancelable!==!1&&t.preventDefault(),t.stopPropagation()}function WU(t,e){if(t===void 0||e===!0&&t.__dragPrevented===!0)return;const n=e===!0?r=>{r.__dragPrevented=!0,r.addEventListener("dragstart",co,Ze.notPassiveCapture)}:r=>{delete r.__dragPrevented,r.removeEventListener("dragstart",co,Ze.notPassiveCapture)};t.querySelectorAll("a, img").forEach(n)}function ih(t,e,n){const r=`__q_${e}_evt`;t[r]=t[r]!==void 0?t[r].concat(n):n,n.forEach(i=>{i[0].addEventListener(i[1],t[i[2]],Ze[i[3]])})}function $y(t,e){const n=`__q_${e}_evt`;t[n]!==void 0&&(t[n].forEach(r=>{r[0].removeEventListener(r[1],t[r[2]],Ze[r[3]])}),t[n]=void 0)}function WA(t,e=250,n){let r=null;function i(){const s=arguments,o=()=>{r=null,n!==!0&&t.apply(this,s)};r!==null?clearTimeout(r):n===!0&&t.apply(this,s),r=setTimeout(o,e)}return i.cancel=()=>{r!==null&&clearTimeout(r)},i}const iu=["sm","md","lg","xl"],{passive:Qp}=Ze;var KA=$o({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:Nt,setDebounce:Nt,install({$q:t,onSSRHydrated:e}){if(t.screen=this,this.__installed===!0){t.config.screen!==void 0&&(t.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:n}=window,r=n||window,i=document.scrollingElement||document.documentElement,s=n===void 0||je.is.mobile===!0?()=>[Math.max(window.innerWidth,i.clientWidth),Math.max(window.innerHeight,i.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-i.clientWidth,n.height*n.scale+window.innerHeight-i.clientHeight],o=t.config.screen!==void 0&&t.config.screen.bodyClasses===!0;this.__update=h=>{const[d,f]=s();if(f!==this.height&&(this.height=f),d!==this.width)this.width=d;else if(h!==!0)return;let p=this.sizes;this.gt.xs=d>=p.sm,this.gt.sm=d>=p.md,this.gt.md=d>=p.lg,this.gt.lg=d>=p.xl,this.lt.sm=d<p.sm,this.lt.md=d<p.md,this.lt.lg=d<p.lg,this.lt.xl=d<p.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,p=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",p!==this.name&&(o===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${p}`)),this.name=p)};let a,l={},c=16;this.setSizes=h=>{iu.forEach(d=>{h[d]!==void 0&&(l[d]=h[d])})},this.setDebounce=h=>{c=h};const u=()=>{const h=getComputedStyle(document.body);h.getPropertyValue("--q-size-sm")&&iu.forEach(d=>{this.sizes[d]=parseInt(h.getPropertyValue(`--q-size-${d}`),10)}),this.setSizes=d=>{iu.forEach(f=>{d[f]&&(this.sizes[f]=d[f])}),this.__update(!0)},this.setDebounce=d=>{a!==void 0&&r.removeEventListener("resize",a,Qp),a=d>0?WA(this.__update,d):this.__update,r.addEventListener("resize",a,Qp)},this.setDebounce(c),Object.keys(l).length!==0?(this.setSizes(l),l=void 0):this.__update(),o===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};Hn.value===!0?e.push(u):u()}});const _t=$o({isActive:!1,mode:!1},{__media:void 0,set(t){_t.mode=t,t==="auto"?(_t.__media===void 0&&(_t.__media=window.matchMedia("(prefers-color-scheme: dark)"),_t.__updateMedia=()=>{_t.set("auto")},_t.__media.addListener(_t.__updateMedia)),t=_t.__media.matches):_t.__media!==void 0&&(_t.__media.removeListener(_t.__updateMedia),_t.__media=void 0),_t.isActive=t===!0,document.body.classList.remove(`body--${t===!0?"light":"dark"}`),document.body.classList.add(`body--${t===!0?"dark":"light"}`)},toggle(){_t.set(_t.isActive===!1)},install({$q:t,onSSRHydrated:e,ssrContext:n}){const{dark:r}=t.config;if(t.dark=this,this.__installed===!0&&r===void 0)return;this.isActive=r===!0;const i=r!==void 0?r:!1;if(Hn.value===!0){const s=a=>{this.__fromSSR=a},o=this.set;this.set=s,s(i),e.push(()=>{this.set=o,this.set(this.__fromSSR)})}else this.set(i)}}),By=()=>!0;function GA(t){return typeof t=="string"&&t!==""&&t!=="/"&&t!=="#/"}function QA(t){return t.startsWith("#")===!0&&(t=t.substring(1)),t.startsWith("/")===!1&&(t="/"+t),t.endsWith("/")===!0&&(t=t.substring(0,t.length-1)),"#"+t}function YA(t){if(t.backButtonExit===!1)return()=>!1;if(t.backButtonExit==="*")return By;const e=["#/"];return Array.isArray(t.backButtonExit)===!0&&e.push(...t.backButtonExit.filter(GA).map(QA)),()=>e.includes(window.location.hash)}var sh={__history:[],add:Nt,remove:Nt,install({$q:t}){if(this.__installed===!0)return;const{cordova:e,capacitor:n}=je.is;if(e!==!0&&n!==!0)return;const r=t.config[e===!0?"cordova":"capacitor"];if(r!==void 0&&r.backButton===!1||n===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=o=>{o.condition===void 0&&(o.condition=By),this.__history.push(o)},this.remove=o=>{const a=this.__history.indexOf(o);a>=0&&this.__history.splice(a,1)};const i=YA(Object.assign({backButtonExit:!0},r)),s=()=>{if(this.__history.length){const o=this.__history[this.__history.length-1];o.condition()===!0&&(this.__history.pop(),o.handler())}else i()===!0?navigator.app.exitApp():window.history.back()};e===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",s,!1)}):window.Capacitor.Plugins.App.addListener("backButton",s)}},Yp={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:t=>t?`Expand "${t}"`:"Expand",collapse:t=>t?`Collapse "${t}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:t=>t===1?"1 record selected.":(t===0?"No":t)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(t,e,n)=>t+"-"+e+" of "+n,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function Xp(){const t=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof t=="string")return t.split(/[-_]/).map((e,n)=>n===0?e.toLowerCase():n>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase()).join("-")}const rn=$o({__langPack:{}},{getLocale:Xp,set(t=Yp,e){const n={...t,rtl:t.rtl===!0,getLocale:Xp};{if(n.set=rn.set,rn.__langConfig===void 0||rn.__langConfig.noHtmlAttrs!==!0){const r=document.documentElement;r.setAttribute("dir",n.rtl===!0?"rtl":"ltr"),r.setAttribute("lang",n.isoName)}Object.assign(rn.__langPack,n),rn.props=n,rn.isoName=n.isoName,rn.nativeName=n.nativeName}},install({$q:t,lang:e,ssrContext:n}){t.lang=rn.__langPack,rn.__langConfig=t.config.lang,this.__installed===!0?e!==void 0&&this.set(e):this.set(e||Yp)}});function XA(t,e,n=document.body){if(typeof t!="string")throw new TypeError("Expected a string as propName");if(typeof e!="string")throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${t}`,e)}let qy=!1;function JA(t){qy=t.isComposing===!0}function ZA(t){return qy===!0||t!==Object(t)||t.isComposing===!0||t.qKeyEvent===!0}function ri(t,e){return ZA(t)===!0?!1:[].concat(e).includes(t.keyCode)}function jy(t){if(t.ios===!0)return"ios";if(t.android===!0)return"android"}function eR({is:t,has:e,within:n},r){const i=[t.desktop===!0?"desktop":"mobile",`${e.touch===!1?"no-":""}touch`];if(t.mobile===!0){const s=jy(t);s!==void 0&&i.push("platform-"+s)}if(t.nativeMobile===!0){const s=t.nativeMobileWrapper;i.push(s),i.push("native-mobile"),t.ios===!0&&(r[s]===void 0||r[s].iosStatusBarPadding!==!1)&&i.push("q-ios-padding")}else t.electron===!0?i.push("electron"):t.bex===!0&&i.push("bex");return n.iframe===!0&&i.push("within-iframe"),i}function tR(){const{is:t}=je,e=document.body.className,n=new Set(e.replace(/ {2}/g," ").split(" "));if(nc!==void 0)n.delete("desktop"),n.add("platform-ios"),n.add("mobile");else if(t.nativeMobile!==!0&&t.electron!==!0&&t.bex!==!0){if(t.desktop===!0)n.delete("mobile"),n.delete("platform-ios"),n.delete("platform-android"),n.add("desktop");else if(t.mobile===!0){n.delete("desktop"),n.add("mobile");const i=jy(t);i!==void 0?(n.add(`platform-${i}`),n.delete(`platform-${i==="ios"?"android":"ios"}`)):(n.delete("platform-ios"),n.delete("platform-android"))}}je.has.touch===!0&&(n.delete("no-touch"),n.add("touch")),je.within.iframe===!0&&n.add("within-iframe");const r=Array.from(n).join(" ");e!==r&&(document.body.className=r)}function nR(t){for(const e in t)XA(e,t[e])}var rR={install(t){if(this.__installed!==!0){if(Hn.value===!0)tR();else{const{$q:e}=t;e.config.brand!==void 0&&nR(e.config.brand);const n=eR(je,e.config);document.body.classList.add.apply(document.body.classList,n)}je.is.ios===!0&&document.body.addEventListener("touchstart",Nt),window.addEventListener("keydown",JA,!0)}}},iR={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}};const ll=$o({iconMapFn:null,__icons:{}},{set(t,e){const n={...t,rtl:t.rtl===!0};n.set=ll.set,Object.assign(ll.__icons,n)},install({$q:t,iconSet:e,ssrContext:n}){t.config.iconMapFn!==void 0&&(this.iconMapFn=t.config.iconMapFn),t.iconSet=this.__icons,tc(t,"iconMapFn",()=>this.iconMapFn,r=>{this.iconMapFn=r}),this.__installed===!0?e!==void 0&&this.set(e):this.set(e||iR)}}),zy="_q_",Id="_q_l_",sR="_q_pc_",KU="_q_fo_",GU="_q_tabs_",Bi=()=>{},cl={};let Hy=!1;function oR(){Hy=!0}function su(t,e){if(t===e)return!0;if(t!==null&&e!==null&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;let n,r;if(t.constructor===Array){if(n=t.length,n!==e.length)return!1;for(r=n;r--!==0;)if(su(t[r],e[r])!==!0)return!1;return!0}if(t.constructor===Map){if(t.size!==e.size)return!1;let s=t.entries();for(r=s.next();r.done!==!0;){if(e.has(r.value[0])!==!0)return!1;r=s.next()}for(s=t.entries(),r=s.next();r.done!==!0;){if(su(r.value[1],e.get(r.value[0]))!==!0)return!1;r=s.next()}return!0}if(t.constructor===Set){if(t.size!==e.size)return!1;const s=t.entries();for(r=s.next();r.done!==!0;){if(e.has(r.value[0])!==!0)return!1;r=s.next()}return!0}if(t.buffer!=null&&t.buffer.constructor===ArrayBuffer){if(n=t.length,n!==e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const i=Object.keys(t).filter(s=>t[s]!==void 0);if(n=i.length,n!==Object.keys(e).filter(s=>e[s]!==void 0).length)return!1;for(r=n;r--!==0;){const s=i[r];if(su(t[s],e[s])!==!0)return!1}return!0}return t!==t&&e!==e}function es(t){return t!==null&&typeof t=="object"&&Array.isArray(t)!==!0}function aR(t){return Object.prototype.toString.call(t)==="[object Date]"}function lR(t){return Object.prototype.toString.call(t)==="[object RegExp]"}const Jp=[al,rR,_t,KA,sh,rn,ll];function Wy(t,e){const n=Vy(t);n.config.globalProperties=e.config.globalProperties;const{reload:r,...i}=e._context;return Object.assign(n._context,i),n}function Zp(t,e){e.forEach(n=>{n.install(t),n.__installed=!0})}function cR(t,e,n){t.config.globalProperties.$q=n.$q,t.provide(zy,n.$q),Zp(n,Jp),e.components!==void 0&&Object.values(e.components).forEach(r=>{es(r)===!0&&r.name!==void 0&&t.component(r.name,r)}),e.directives!==void 0&&Object.values(e.directives).forEach(r=>{es(r)===!0&&r.name!==void 0&&t.directive(r.name,r)}),e.plugins!==void 0&&Zp(n,Object.values(e.plugins).filter(r=>typeof r.install=="function"&&Jp.includes(r)===!1)),Hn.value===!0&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(r=>{r()}),n.$q.onSSRHydrated=()=>{}})}var uR=function(t,e={}){const n={version:"2.14.0"};Hy===!1?(e.config!==void 0&&Object.assign(cl,e.config),n.config={...cl},oR()):n.config=e.config||{},cR(t,e,{parentApp:t,$q:n,lang:e.lang,iconSet:e.iconSet,onSSRHydrated:[]})},hR={version:"2.14.0",install:uR,lang:rn,iconSet:ll},dR=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n};const fR=Fo({name:"App"});function pR(t,e,n,r,i,s){const o=ay("router-view");return $t(),on(o)}var mR=dR(fR,[["render",pR]]);function QU(t){return t}var gR=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Ky;const rc=t=>Ky=t,Gy=Symbol();function oh(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Hs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Hs||(Hs={}));function _R(){const t=F_(!0),e=t.run(()=>ue({}));let n=[],r=[];const i=Pr({install(s){rc(i),i._a=s,s.provide(Gy,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!gR?r.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Qy=()=>{};function em(t,e,n,r=Qy){t.push(e);const i=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),r())};return!n&&rd()&&U_(i),i}function bi(t,...e){t.slice().forEach(n=>{n(...e)})}const yR=t=>t();function ah(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],i=t[n];oh(i)&&oh(r)&&t.hasOwnProperty(n)&&!Fe(r)&&!jn(r)?t[n]=ah(i,r):t[n]=r}return t}const vR=Symbol();function wR(t){return!oh(t)||!t.hasOwnProperty(vR)}const{assign:or}=Object;function ER(t){return!!(Fe(t)&&t.effect)}function TR(t,e,n,r){const{state:i,actions:s,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=GI(n.state.value[t]);return or(u,s,Object.keys(o||{}).reduce((h,d)=>(h[d]=Pr(O(()=>{rc(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return l=Yy(t,c,e,n,r,!0),l}function Yy(t,e,n={},r,i,s){let o;const a=or({actions:{}},n),l={deep:!0};let c,u,h=[],d=[],f;const p=r.state.value[t];!s&&!p&&(r.state.value[t]={}),ue({});let v;function g(A){let R;c=u=!1,typeof A=="function"?(A(r.state.value[t]),R={type:Hs.patchFunction,storeId:t,events:f}):(ah(r.state.value[t],A),R={type:Hs.patchObject,payload:A,storeId:t,events:f});const U=v=Symbol();hn().then(()=>{v===U&&(c=!0)}),u=!0,bi(h,R,r.state.value[t])}const w=s?function(){const{state:R}=n,U=R?R():{};this.$patch(G=>{or(G,U)})}:Qy;function _(){o.stop(),h=[],d=[],r._s.delete(t)}function T(A,R){return function(){rc(r);const U=Array.from(arguments),G=[],$=[];function ie(Z){G.push(Z)}function j(Z){$.push(Z)}bi(d,{args:U,name:A,store:b,after:ie,onError:j});let se;try{se=R.apply(this&&this.$id===t?this:b,U)}catch(Z){throw bi($,Z),Z}return se instanceof Promise?se.then(Z=>(bi(G,Z),Z)).catch(Z=>(bi($,Z),Promise.reject(Z))):(bi(G,se),se)}}const E={_p:r,$id:t,$onAction:em.bind(null,d),$patch:g,$reset:w,$subscribe(A,R={}){const U=em(h,A,R.detached,()=>G()),G=o.run(()=>ke(()=>r.state.value[t],$=>{(R.flush==="sync"?u:c)&&A({storeId:t,type:Hs.direct,events:f},$)},or({},l,R)));return U},$dispose:_},b=ln(E);r._s.set(t,b);const V=(r._a&&r._a.runWithContext||yR)(()=>r._e.run(()=>(o=F_()).run(e)));for(const A in V){const R=V[A];if(Fe(R)&&!ER(R)||jn(R))s||(p&&wR(R)&&(Fe(R)?R.value=p[A]:ah(R,p[A])),r.state.value[t][A]=R);else if(typeof R=="function"){const U=T(A,R);V[A]=U,a.actions[A]=R}}return or(b,V),or(we(b),V),Object.defineProperty(b,"$state",{get:()=>r.state.value[t],set:A=>{g(R=>{or(R,A)})}}),r._p.forEach(A=>{or(b,o.run(()=>A({store:b,app:r._a,pinia:r,options:a})))}),p&&s&&n.hydrate&&n.hydrate(b.$state,p),c=!0,u=!0,b}function IR(t,e,n){let r,i;const s=typeof e=="function";typeof t=="string"?(r=t,i=s?n:e):(i=t,r=t.id);function o(a,l){const c=xb();return a=a||(c?Ct(Gy,null):null),a&&rc(a),a=Ky,a._s.has(r)||(s?Yy(r,e,i,a):TR(r,i,a)),a._s.get(r)}return o.$id=r,o}function YU(t){{t=we(t);const e={};for(const n in t){const r=t[n];(Fe(r)||jn(r))&&(e[n]=ey(t,n))}return e}}var ou=()=>_R();const tm=[{path:"/",name:"/",component:()=>Ae(()=>import("./index.3a7d61ea.js"),["assets/index.3a7d61ea.js","assets/QPage.3f0f7285.js","assets/PostList.be4ad63d.js","assets/useBookmark.1ce185b5.js","assets/useBookmark.920ee573.css","assets/index.7afb556f.js","assets/post.328ce0bc.js","assets/user.faff4df2.js","assets/QChip.7b90b6fa.js","assets/PostHeader.f57c5fe7.js","assets/uid.42677368.js","assets/rtl.b51694b1.js","assets/PostLeftBar.4b071e3b.js","assets/StickySideBar.09f2d587.js","assets/StickySideBar.41b61671.css","assets/category.058bffc4.js","assets/PostRightBar.956df5da.js","assets/QInput.8657458d.js","assets/useTags.270b218a.js","assets/QItemLabel.7d6fabb5.js","assets/PostForm.3faf4f12.js","assets/PostForm.4c2716b7.css","assets/QCardActions.882ea4ec.js","assets/QForm.a192e15e.js","assets/validate-rules.6596e294.js"])},{path:"/_admin",name:"/_admin",component:()=>Ae(()=>import("./_admin.705abc2a.js"),["assets/_admin.705abc2a.js","assets/route-block.1e6a8648.js"]),meta:{layout:"admin"}},{path:"/:path(.*)",name:"/[...path]",component:()=>Ae(()=>import("./_...path_.77beef4d.js"),[])},{path:"/about",name:"/about",component:()=>Ae(()=>import("./about.8d8788ae.js"),["assets/about.8d8788ae.js","assets/route-block.1e6a8648.js"]),meta:{layout:"admin"}},{path:"/admin",children:[{path:"",name:"/admin/",component:()=>Ae(()=>import("./index.02e025c5.js"),[])},{path:"dashboard",name:"/admin/dashboard",component:()=>Ae(()=>import("./dashboard.b9b1c751.js"),[])}]},{path:"/components",children:[{path:"PostHeader",name:"/components/PostHeader",component:()=>Ae(()=>import("./PostHeader.f57c5fe7.js"),["assets/PostHeader.f57c5fe7.js","assets/uid.42677368.js","assets/rtl.b51694b1.js"])},{path:"PostLeftBar",name:"/components/PostLeftBar",component:()=>Ae(()=>import("./PostLeftBar.4b071e3b.js"),["assets/PostLeftBar.4b071e3b.js","assets/StickySideBar.09f2d587.js","assets/StickySideBar.41b61671.css","assets/category.058bffc4.js"])},{path:"PostRightBar",name:"/components/PostRightBar",component:()=>Ae(()=>import("./PostRightBar.956df5da.js"),["assets/PostRightBar.956df5da.js","assets/QInput.8657458d.js","assets/uid.42677368.js","assets/StickySideBar.09f2d587.js","assets/StickySideBar.41b61671.css","assets/useTags.270b218a.js","assets/post.328ce0bc.js","assets/user.faff4df2.js"])}]},{path:"/ErrorNotFound",name:"/ErrorNotFound",component:()=>Ae(()=>import("./ErrorNotFound.a7f95db8.js"),[])},{path:"/home",name:"home-page",component:()=>Ae(()=>import("./home.30cdba31.js"),["assets/home.30cdba31.js","assets/QPage.3f0f7285.js","assets/route-block.1e6a8648.js"]),meta:{requiresAuth:!0,width:"600px"}},{path:"/IndexPage",name:"/IndexPage",component:()=>Ae(()=>import("./IndexPage.32477562.js"),["assets/IndexPage.32477562.js","assets/QPage.3f0f7285.js"])},{path:"/mypage",name:"/mypage",component:()=>Ae(()=>import("./mypage.1c016f93.js"),["assets/mypage.1c016f93.js","assets/QPage.3f0f7285.js","assets/BaseCard.4de4e8c2.js","assets/route-block.1e6a8648.js"]),children:[{path:"bookmark",name:"/mypage/bookmark",component:()=>Ae(()=>import("./bookmark.a4f2974f.js"),["assets/bookmark.a4f2974f.js","assets/post.328ce0bc.js","assets/user.faff4df2.js","assets/PostList.be4ad63d.js","assets/useBookmark.1ce185b5.js","assets/useBookmark.920ee573.css","assets/index.7afb556f.js","assets/QChip.7b90b6fa.js"])},{path:"password",name:"/mypage/password",component:()=>Ae(()=>import("./password.6aa3928f.js"),["assets/password.6aa3928f.js","assets/QInput.8657458d.js","assets/uid.42677368.js","assets/QCardActions.882ea4ec.js","assets/QForm.a192e15e.js","assets/BaseCard.4de4e8c2.js","assets/error-message.02f68539.js","assets/validate-rules.6596e294.js"])},{path:"profile",name:"/mypage/profile",component:()=>Ae(()=>import("./profile.cb0fb3ec.js"),["assets/profile.cb0fb3ec.js","assets/QInput.8657458d.js","assets/uid.42677368.js","assets/QCardActions.882ea4ec.js","assets/QForm.a192e15e.js","assets/BaseCard.4de4e8c2.js","assets/error-message.02f68539.js"])}],meta:{requiresAuth:!0}},{path:"/posts",children:[{path:":id",children:[{path:"",name:"/posts/[id]/",component:()=>Ae(()=>import("./index.d297bfed.js"),["assets/index.d297bfed.js","assets/QPage.3f0f7285.js","assets/PostDetails.1d901ddb.js","assets/useBookmark.1ce185b5.js","assets/useBookmark.920ee573.css","assets/index.7afb556f.js","assets/post.328ce0bc.js","assets/user.faff4df2.js","assets/date.8d82b2d4.js","assets/BaseCard.4de4e8c2.js","assets/PostComments.cb92eba9.js","assets/QInput.8657458d.js","assets/uid.42677368.js","assets/QForm.a192e15e.js","assets/validate-rules.6596e294.js","assets/route-block.1e6a8648.js"]),meta:{width:"800px"}},{path:"components",children:[{path:"PostComments",name:"/posts/[id]/components/PostComments",component:()=>Ae(()=>import("./PostComments.cb92eba9.js"),["assets/PostComments.cb92eba9.js","assets/QInput.8657458d.js","assets/uid.42677368.js","assets/QForm.a192e15e.js","assets/date.8d82b2d4.js","assets/user.faff4df2.js","assets/BaseCard.4de4e8c2.js","assets/validate-rules.6596e294.js"])},{path:"PostDetails",name:"/posts/[id]/components/PostDetails",component:()=>Ae(()=>import("./PostDetails.1d901ddb.js"),["assets/PostDetails.1d901ddb.js","assets/useBookmark.1ce185b5.js","assets/useBookmark.920ee573.css","assets/index.7afb556f.js","assets/post.328ce0bc.js","assets/user.faff4df2.js","assets/date.8d82b2d4.js","assets/BaseCard.4de4e8c2.js"])}]},{path:"edit",name:"/posts/[id]/edit",component:()=>Ae(()=>import("./edit.303cdd60.js"),["assets/edit.303cdd60.js","assets/QItemLabel.7d6fabb5.js","assets/QPage.3f0f7285.js","assets/post.328ce0bc.js","assets/user.faff4df2.js","assets/BaseCard.4de4e8c2.js","assets/PostForm.3faf4f12.js","assets/PostForm.4c2716b7.css","assets/QInput.8657458d.js","assets/uid.42677368.js","assets/QChip.7b90b6fa.js","assets/rtl.b51694b1.js","assets/QCardActions.882ea4ec.js","assets/QForm.a192e15e.js","assets/category.058bffc4.js","assets/index.7afb556f.js","assets/validate-rules.6596e294.js","assets/useTags.270b218a.js","assets/route-block.1e6a8648.js"]),meta:{width:"800px"}}]}]},{path:"/search",children:[{path:"",name:"/search/",component:()=>Ae(()=>import("./index.7464f3ae.js"),["assets/index.7464f3ae.js","assets/index.0b51622e.css","assets/QPage.3f0f7285.js","assets/PostList.be4ad63d.js","assets/useBookmark.1ce185b5.js","assets/useBookmark.920ee573.css","assets/index.7afb556f.js","assets/post.328ce0bc.js","assets/user.faff4df2.js","assets/QChip.7b90b6fa.js"])}]},{path:"/vue-use",children:[{path:"",name:"/vue-use/",component:()=>Ae(()=>import("./index.d848ac7b.js"),["assets/index.d848ac7b.js","assets/QPage.3f0f7285.js"])}]}];/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ci=typeof window!="undefined";function bR(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Se=Object.assign;function au(t,e){const n={};for(const r in e){const i=e[r];n[r]=dn(i)?i.map(t):t(i)}return n}const Ws=()=>{},dn=Array.isArray,AR=/\/$/,RR=t=>t.replace(AR,"");function lu(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=kR(r!=null?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function SR(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function nm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function PR(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&ts(e.matched[r],n.matched[i])&&Xy(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ts(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Xy(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!CR(t[n],e[n]))return!1;return!0}function CR(t,e){return dn(t)?rm(t,e):dn(e)?rm(e,t):t===e}function rm(t,e){return dn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function kR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var uo;(function(t){t.pop="pop",t.push="push"})(uo||(uo={}));var Ks;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ks||(Ks={}));function xR(t){if(!t)if(Ci){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),RR(t)}const OR=/^[^#]+#/;function DR(t,e){return t.replace(OR,"#")+e}function NR(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ic=()=>({left:window.pageXOffset,top:window.pageYOffset});function LR(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=NR(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function im(t,e){return(history.state?history.state.position-e:-1)+t}const lh=new Map;function VR(t,e){lh.set(t,e)}function MR(t){const e=lh.get(t);return lh.delete(t),e}let FR=()=>location.protocol+"//"+location.host;function Jy(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),nm(l,"")}return nm(n,t)+r+i}function UR(t,e,n,r){let i=[],s=[],o=null;const a=({state:d})=>{const f=Jy(t,location),p=n.value,v=e.value;let g=0;if(d){if(n.value=f,e.value=d,o&&o===p){o=null;return}g=v?d.position-v.position:0}else r(f);i.forEach(w=>{w(n.value,p,{delta:g,type:uo.pop,direction:g?g>0?Ks.forward:Ks.back:Ks.unknown})})};function l(){o=n.value}function c(d){i.push(d);const f=()=>{const p=i.indexOf(d);p>-1&&i.splice(p,1)};return s.push(f),f}function u(){const{history:d}=window;!d.state||d.replaceState(Se({},d.state,{scroll:ic()}),"")}function h(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function sm(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?ic():null}}function $R(t){const{history:e,location:n}=window,r={value:Jy(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:FR()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=Se({},e.state,sm(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});s(l,u,!0),r.value=l}function a(l,c){const u=Se({},i.value,e.state,{forward:l,scroll:ic()});s(u.current,u,!0);const h=Se({},sm(r.value,l,null),{position:u.position+1},c);s(l,h,!1),r.value=l}return{location:r,state:i,push:a,replace:o}}function BR(t){t=xR(t);const e=$R(t),n=UR(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=Se({location:"",base:t,go:r,createHref:DR.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function qR(t){return typeof t=="string"||t&&typeof t=="object"}function Zy(t){return typeof t=="string"||typeof t=="symbol"}const rr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ev=Symbol("");var om;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(om||(om={}));function ns(t,e){return Se(new Error,{type:t,[ev]:!0},e)}function Nn(t,e){return t instanceof Error&&ev in t&&(e==null||!!(t.type&e))}const am="[^/]+?",jR={sensitive:!1,strict:!1,start:!0,end:!0},zR=/[.+*?^${}()[\]/\\]/g;function HR(t,e){const n=Se({},jR,e),r=[];let i=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(zR,"\\$&"),f+=40;else if(d.type===1){const{value:p,repeatable:v,optional:g,regexp:w}=d;s.push({name:p,repeatable:v,optional:g});const _=w||am;if(_!==am){f+=10;try{new RegExp(`(${_})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${p}" (${_}): `+E.message)}}let T=v?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;h||(T=g&&c.length<2?`(?:/${T})`:"/"+T),g&&(T+="?"),i+=T,f+=20,g&&(f+=-8),v&&(f+=-20),_===".*"&&(f+=-50)}u.push(f)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",p=s[d-1];h[p.name]=f&&p.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:p,repeatable:v,optional:g}=f,w=p in c?c[p]:"";if(dn(w)&&!v)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const _=dn(w)?w.join("/"):w;if(!_)if(g)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=_}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:l}}function WR(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function KR(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=WR(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(lm(r))return 1;if(lm(i))return-1}return i.length-r.length}function lm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const GR={type:0,value:""},QR=/[a-zA-Z0-9_]/;function YR(t){if(!t)return[[]];if(t==="/")return[[GR]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,c="",u="";function h(){!c||(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:QR.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function XR(t,e,n){const r=HR(YR(t.path),n),i=Se(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function JR(t,e){const n=[],r=new Map;e=hm({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,h,d){const f=!d,p=ZR(u);p.aliasOf=d&&d.record;const v=hm(e,u),g=[p];if("alias"in u){const T=typeof u.alias=="string"?[u.alias]:u.alias;for(const E of T)g.push(Se({},p,{components:d?d.record.components:p.components,path:E,aliasOf:d?d.record:p}))}let w,_;for(const T of g){const{path:E}=T;if(h&&E[0]!=="/"){const b=h.record.path,M=b[b.length-1]==="/"?"":"/";T.path=h.record.path+(E&&M+E)}if(w=XR(T,h,v),d?d.alias.push(w):(_=_||w,_!==w&&_.alias.push(w),f&&u.name&&!um(w)&&o(u.name)),p.children){const b=p.children;for(let M=0;M<b.length;M++)s(b[M],w,d&&d.children[M])}d=d||w,(w.record.components&&Object.keys(w.record.components).length||w.record.name||w.record.redirect)&&l(w)}return _?()=>{o(_)}:Ws}function o(u){if(Zy(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&KR(u,n[h])>=0&&(u.record.path!==n[h].record.path||!tv(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!um(u)&&r.set(u.record.name,u)}function c(u,h){let d,f={},p,v;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw ns(1,{location:u});v=d.record.name,f=Se(cm(h.params,d.keys.filter(_=>!_.optional).map(_=>_.name)),u.params&&cm(u.params,d.keys.map(_=>_.name))),p=d.stringify(f)}else if("path"in u)p=u.path,d=n.find(_=>_.re.test(p)),d&&(f=d.parse(p),v=d.record.name);else{if(d=h.name?r.get(h.name):n.find(_=>_.re.test(h.path)),!d)throw ns(1,{location:u,currentLocation:h});v=d.record.name,f=Se({},h.params,u.params),p=d.stringify(f)}const g=[];let w=d;for(;w;)g.unshift(w.record),w=w.parent;return{name:v,path:p,params:f,matched:g,meta:tS(g)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function cm(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ZR(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:eS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function eS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function um(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function tS(t){return t.reduce((e,n)=>Se(e,n.meta),{})}function hm(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function tv(t,e){return e.children.some(n=>n===t||tv(t,n))}const nv=/#/g,nS=/&/g,rS=/\//g,iS=/=/g,sS=/\?/g,rv=/\+/g,oS=/%5B/g,aS=/%5D/g,iv=/%5E/g,lS=/%60/g,sv=/%7B/g,cS=/%7C/g,ov=/%7D/g,uS=/%20/g;function bd(t){return encodeURI(""+t).replace(cS,"|").replace(oS,"[").replace(aS,"]")}function hS(t){return bd(t).replace(sv,"{").replace(ov,"}").replace(iv,"^")}function ch(t){return bd(t).replace(rv,"%2B").replace(uS,"+").replace(nv,"%23").replace(nS,"%26").replace(lS,"`").replace(sv,"{").replace(ov,"}").replace(iv,"^")}function dS(t){return ch(t).replace(iS,"%3D")}function fS(t){return bd(t).replace(nv,"%23").replace(sS,"%3F")}function pS(t){return t==null?"":fS(t).replace(rS,"%2F")}function ul(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function mS(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(rv," "),o=s.indexOf("="),a=ul(o<0?s:s.slice(0,o)),l=o<0?null:ul(s.slice(o+1));if(a in e){let c=e[a];dn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function dm(t){let e="";for(let n in t){const r=t[n];if(n=dS(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(dn(r)?r.map(s=>s&&ch(s)):[r&&ch(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function gS(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=dn(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const _S=Symbol(""),fm=Symbol(""),sc=Symbol(""),Ad=Symbol(""),uh=Symbol("");function Is(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function cr(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(ns(4,{from:n,to:e})):h instanceof Error?a(h):qR(h)?a(ns(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},c=t.call(r&&r.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function cu(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(yS(a)){const c=(a.__vccOpts||a)[e];c&&i.push(cr(c,n,r,s,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=bR(c)?c.default:c;s.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&cr(d,n,r,s,o)()}))}}return i}function yS(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function pm(t){const e=Ct(sc),n=Ct(Ad),r=O(()=>e.resolve(St(t.to))),i=O(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(ts.bind(null,u));if(d>-1)return d;const f=mm(l[c-2]);return c>1&&mm(u)===f&&h[h.length-1].path!==f?h.findIndex(ts.bind(null,l[c-2])):d}),s=O(()=>i.value>-1&&TS(n.params,r.value.params)),o=O(()=>i.value>-1&&i.value===n.matched.length-1&&Xy(n.params,r.value.params));function a(l={}){return ES(l)?e[St(t.replace)?"replace":"push"](St(t.to)).catch(Ws):Promise.resolve()}return{route:r,href:O(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const vS=Fo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:pm,setup(t,{slots:e}){const n=ln(pm(t)),{options:r}=Ct(sc),i=O(()=>({[gm(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[gm(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:q("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),wS=vS;function ES(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function TS(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!dn(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function mm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const gm=(t,e,n)=>t!=null?t:e!=null?e:n,IS=Fo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ct(uh),i=O(()=>t.route||r.value),s=Ct(fm,0),o=O(()=>{let c=St(s);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=O(()=>i.value.matched[o.value]);$i(fm,O(()=>o.value+1)),$i(_S,a),$i(uh,i);const l=ue();return ke(()=>[l.value,a.value,t.name],([c,u,h],[d,f,p])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!ts(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return _m(n.default,{Component:d,route:c});const f=h.props[u],p=f?f===!0?c.params:typeof f=="function"?f(c):f:null,g=q(d,Se({},p,e,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return _m(n.default,{Component:g,route:c})||g}}});function _m(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const bS=IS;function AS(t){const e=JR(t.routes,t),n=t.parseQuery||mS,r=t.stringifyQuery||dm,i=t.history,s=Is(),o=Is(),a=Is(),l=nl(rr);let c=rr;Ci&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=au.bind(null,S=>""+S),h=au.bind(null,pS),d=au.bind(null,ul);function f(S,W){let P,Q;return Zy(S)?(P=e.getRecordMatcher(S),Q=W):Q=S,e.addRoute(Q,P)}function p(S){const W=e.getRecordMatcher(S);W&&e.removeRoute(W)}function v(){return e.getRoutes().map(S=>S.record)}function g(S){return!!e.getRecordMatcher(S)}function w(S,W){if(W=Se({},W||l.value),typeof S=="string"){const I=lu(n,S,W.path),C=e.resolve({path:I.path},W),x=i.createHref(I.fullPath);return Se(I,C,{params:d(C.params),hash:ul(I.hash),redirectedFrom:void 0,href:x})}let P;if("path"in S)P=Se({},S,{path:lu(n,S.path,W.path).path});else{const I=Se({},S.params);for(const C in I)I[C]==null&&delete I[C];P=Se({},S,{params:h(I)}),W.params=h(W.params)}const Q=e.resolve(P,W),Ee=S.hash||"";Q.params=u(d(Q.params));const m=SR(r,Se({},S,{hash:hS(Ee),path:Q.path})),y=i.createHref(m);return Se({fullPath:m,hash:Ee,query:r===dm?gS(S.query):S.query||{}},Q,{redirectedFrom:void 0,href:y})}function _(S){return typeof S=="string"?lu(n,S,l.value.path):Se({},S)}function T(S,W){if(c!==S)return ns(8,{from:W,to:S})}function E(S){return V(S)}function b(S){return E(Se(_(S),{replace:!0}))}function M(S){const W=S.matched[S.matched.length-1];if(W&&W.redirect){const{redirect:P}=W;let Q=typeof P=="function"?P(S):P;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=_(Q):{path:Q},Q.params={}),Se({query:S.query,hash:S.hash,params:"path"in Q?{}:S.params},Q)}}function V(S,W){const P=c=w(S),Q=l.value,Ee=S.state,m=S.force,y=S.replace===!0,I=M(P);if(I)return V(Se(_(I),{state:typeof I=="object"?Se({},Ee,I.state):Ee,force:m,replace:y}),W||P);const C=P;C.redirectedFrom=W;let x;return!m&&PR(r,Q,P)&&(x=ns(16,{to:C,from:Q}),ct(Q,Q,!0,!1)),(x?Promise.resolve(x):U(C,Q)).catch(D=>Nn(D)?Nn(D,2)?D:lt(D):he(D,C,Q)).then(D=>{if(D){if(Nn(D,2))return V(Se({replace:y},_(D.to),{state:typeof D.to=="object"?Se({},Ee,D.to.state):Ee,force:m}),W||C)}else D=$(C,Q,!0,y,Ee);return G(C,Q,D),D})}function A(S,W){const P=T(S,W);return P?Promise.reject(P):Promise.resolve()}function R(S){const W=Wt.values().next().value;return W&&typeof W.runWithContext=="function"?W.runWithContext(S):S()}function U(S,W){let P;const[Q,Ee,m]=RS(S,W);P=cu(Q.reverse(),"beforeRouteLeave",S,W);for(const I of Q)I.leaveGuards.forEach(C=>{P.push(cr(C,S,W))});const y=A.bind(null,S,W);return P.push(y),_e(P).then(()=>{P=[];for(const I of s.list())P.push(cr(I,S,W));return P.push(y),_e(P)}).then(()=>{P=cu(Ee,"beforeRouteUpdate",S,W);for(const I of Ee)I.updateGuards.forEach(C=>{P.push(cr(C,S,W))});return P.push(y),_e(P)}).then(()=>{P=[];for(const I of m)if(I.beforeEnter)if(dn(I.beforeEnter))for(const C of I.beforeEnter)P.push(cr(C,S,W));else P.push(cr(I.beforeEnter,S,W));return P.push(y),_e(P)}).then(()=>(S.matched.forEach(I=>I.enterCallbacks={}),P=cu(m,"beforeRouteEnter",S,W),P.push(y),_e(P))).then(()=>{P=[];for(const I of o.list())P.push(cr(I,S,W));return P.push(y),_e(P)}).catch(I=>Nn(I,8)?I:Promise.reject(I))}function G(S,W,P){a.list().forEach(Q=>R(()=>Q(S,W,P)))}function $(S,W,P,Q,Ee){const m=T(S,W);if(m)return m;const y=W===rr,I=Ci?history.state:{};P&&(Q||y?i.replace(S.fullPath,Se({scroll:y&&I&&I.scroll},Ee)):i.push(S.fullPath,Ee)),l.value=S,ct(S,W,P,y),lt()}let ie;function j(){ie||(ie=i.listen((S,W,P)=>{if(!me.listening)return;const Q=w(S),Ee=M(Q);if(Ee){V(Se(Ee,{replace:!0}),Q).catch(Ws);return}c=Q;const m=l.value;Ci&&VR(im(m.fullPath,P.delta),ic()),U(Q,m).catch(y=>Nn(y,12)?y:Nn(y,2)?(V(y.to,Q).then(I=>{Nn(I,20)&&!P.delta&&P.type===uo.pop&&i.go(-1,!1)}).catch(Ws),Promise.reject()):(P.delta&&i.go(-P.delta,!1),he(y,Q,m))).then(y=>{y=y||$(Q,m,!1),y&&(P.delta&&!Nn(y,8)?i.go(-P.delta,!1):P.type===uo.pop&&Nn(y,20)&&i.go(-1,!1)),G(Q,m,y)}).catch(Ws)}))}let se=Is(),Z=Is(),ge;function he(S,W,P){lt(S);const Q=Z.list();return Q.length?Q.forEach(Ee=>Ee(S,W,P)):console.error(S),Promise.reject(S)}function Be(){return ge&&l.value!==rr?Promise.resolve():new Promise((S,W)=>{se.add([S,W])})}function lt(S){return ge||(ge=!S,j(),se.list().forEach(([W,P])=>S?P(S):W()),se.reset()),S}function ct(S,W,P,Q){const{scrollBehavior:Ee}=t;if(!Ci||!Ee)return Promise.resolve();const m=!P&&MR(im(S.fullPath,0))||(Q||!P)&&history.state&&history.state.scroll||null;return hn().then(()=>Ee(S,W,m)).then(y=>y&&LR(y)).catch(y=>he(y,S,W))}const qe=S=>i.go(S);let mt;const Wt=new Set,me={currentRoute:l,listening:!0,addRoute:f,removeRoute:p,hasRoute:g,getRoutes:v,resolve:w,options:t,push:E,replace:b,go:qe,back:()=>qe(-1),forward:()=>qe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Z.add,isReady:Be,install(S){const W=this;S.component("RouterLink",wS),S.component("RouterView",bS),S.config.globalProperties.$router=W,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>St(l)}),Ci&&!mt&&l.value===rr&&(mt=!0,E(i.location).catch(Ee=>{}));const P={};for(const Ee in rr)Object.defineProperty(P,Ee,{get:()=>l.value[Ee],enumerable:!0});S.provide(sc,W),S.provide(Ad,Y_(P)),S.provide(uh,l);const Q=S.unmount;Wt.add(S),S.unmount=function(){Wt.delete(S),Wt.size<1&&(c=rr,ie&&ie(),ie=null,l.value=rr,mt=!1,ge=!1),Q()}}};function _e(S){return S.reduce((W,P)=>W.then(()=>R(P)),Promise.resolve())}return me}function RS(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>ts(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>ts(c,l))||i.push(l))}return[n,r,i]}function SS(){return Ct(sc)}function PS(){return Ct(Ad)}function CS(t){const{extendRoutes:e}=t;return AS(Object.assign(t,{routes:typeof e=="function"?e(tm):tm}))}const hh={xs:18,sm:24,md:32,lg:38,xl:46},Rd={size:String};function Sd(t,e=hh){return O(()=>t.size!==void 0?{fontSize:t.size in e?`${e[t.size]}px`:t.size}:null)}const Qe=t=>Pr(Fo(t)),av=t=>Pr(t);function Xn(t,e){return t!==void 0&&t()||e}function lv(t,e){if(t!==void 0){const n=t();if(n!=null)return n.slice()}return e}function Ni(t,e){return t!==void 0?e.concat(t()):e}function kS(t,e){return t===void 0?e:e!==void 0?e.concat(t()):t()}function XU(t,e,n,r,i,s){e.key=r+i;const o=q(t,e,n);return i===!0?Ui(o,s()):o}const ym="0 0 24 24",vm=t=>t,uu=t=>`ionicons ${t}`,cv={"mdi-":t=>`mdi ${t}`,"icon-":vm,"bt-":t=>`bt ${t}`,"eva-":t=>`eva ${t}`,"ion-md":uu,"ion-ios":uu,"ion-logo":uu,"iconfont ":vm,"ti-":t=>`themify-icon ${t}`,"bi-":t=>`bootstrap-icons ${t}`},uv={o_:"-outlined",r_:"-round",s_:"-sharp"},hv={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},xS=new RegExp("^("+Object.keys(cv).join("|")+")"),OS=new RegExp("^("+Object.keys(uv).join("|")+")"),wm=new RegExp("^("+Object.keys(hv).join("|")+")"),DS=/^[Mm]\s?[-+]?\.?\d/,NS=/^img:/,LS=/^svguse:/,VS=/^ion-/,MS=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var hl=Qe({name:"QIcon",props:{...Rd,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(t,{slots:e}){const{proxy:{$q:n}}=We(),r=Sd(t),i=O(()=>"q-icon"+(t.left===!0?" on-left":"")+(t.right===!0?" on-right":"")+(t.color!==void 0?` text-${t.color}`:"")),s=O(()=>{let o,a=t.name;if(a==="none"||!a)return{none:!0};if(n.iconMapFn!==null){const u=n.iconMapFn(a);if(u!==void 0)if(u.icon!==void 0){if(a=u.icon,a==="none"||!a)return{none:!0}}else return{cls:u.cls,content:u.content!==void 0?u.content:" "}}if(DS.test(a)===!0){const[u,h=ym]=a.split("|");return{svg:!0,viewBox:h,nodes:u.split("&&").map(d=>{const[f,p,v]=d.split("@@");return q("path",{style:p,d:f,transform:v})})}}if(NS.test(a)===!0)return{img:!0,src:a.substring(4)};if(LS.test(a)===!0){const[u,h=ym]=a.split("|");return{svguse:!0,src:u.substring(7),viewBox:h}}let l=" ";const c=a.match(xS);if(c!==null)o=cv[c[1]](a);else if(MS.test(a)===!0)o=a;else if(VS.test(a)===!0)o=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(wm.test(a)===!0){o="notranslate material-symbols";const u=a.match(wm);u!==null&&(a=a.substring(6),o+=hv[u[1]]),l=a}else{o="notranslate material-icons";const u=a.match(OS);u!==null&&(a=a.substring(2),o+=uv[u[1]]),l=a}return{cls:o,content:l}});return()=>{const o={class:i.value,style:r.value,"aria-hidden":"true",role:"presentation"};return s.value.none===!0?q(t.tag,o,Xn(e.default)):s.value.img===!0?q("span",o,Ni(e.default,[q("img",{src:s.value.src})])):s.value.svg===!0?q("span",o,Ni(e.default,[q("svg",{viewBox:s.value.viewBox||"0 0 24 24"},s.value.nodes)])):s.value.svguse===!0?q("span",o,Ni(e.default,[q("svg",{viewBox:s.value.viewBox},[q("use",{"xlink:href":s.value.src})])])):(s.value.cls!==void 0&&(o.class+=" "+s.value.cls),q(t.tag,o,Ni(e.default,[s.value.content])))}}});const FS={size:{type:[Number,String],default:"1em"},color:String};function US(t){return{cSize:O(()=>t.size in hh?`${hh[t.size]}px`:t.size),classes:O(()=>"q-spinner"+(t.color?` text-${t.color}`:""))}}var dv=Qe({name:"QSpinner",props:{...FS,thickness:{type:Number,default:5}},setup(t){const{cSize:e,classes:n}=US(t);return()=>q("svg",{class:n.value+" q-spinner-mat",width:e.value,height:e.value,viewBox:"25 25 50 50"},[q("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":t.thickness,"stroke-miterlimit":"10"})])}});function dh(t,e){const n=t.style;for(const r in e)n[r]=e[r]}function $S(t){if(t==null)return;if(typeof t=="string")try{return document.querySelector(t)||void 0}catch{return}const e=St(t);if(e)return e.$el||e}function fv(t,e){if(t==null||t.contains(e)===!0)return!0;for(let n=t.nextElementSibling;n!==null;n=n.nextElementSibling)if(n.contains(e))return!0;return!1}function BS(t,e=250){let n=!1,r;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},e),r=t.apply(this,arguments)),r}}function Em(t,e,n,r){n.modifiers.stop===!0&&Uy(t);const i=n.modifiers.color;let s=n.modifiers.center;s=s===!0||r===!0;const o=document.createElement("span"),a=document.createElement("span"),l=Fy(t),{left:c,top:u,width:h,height:d}=e.getBoundingClientRect(),f=Math.sqrt(h*h+d*d),p=f/2,v=`${(h-f)/2}px`,g=s?v:`${l.left-c-p}px`,w=`${(d-f)/2}px`,_=s?w:`${l.top-u-p}px`;a.className="q-ripple__inner",dh(a,{height:`${f}px`,width:`${f}px`,transform:`translate3d(${g},${_},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${i?" text-"+i:""}`,o.setAttribute("dir","ltr"),o.appendChild(a),e.appendChild(o);const T=()=>{o.remove(),clearTimeout(E)};n.abort.push(T);let E=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${v},${w},0) scale3d(1,1,1)`,a.style.opacity=.2,E=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,E=setTimeout(()=>{o.remove(),n.abort.splice(n.abort.indexOf(T),1)},275)},250)},50)}function Tm(t,{modifiers:e,value:n,arg:r}){const i=Object.assign({},t.cfg.ripple,e,n);t.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||r,keyCodes:[].concat(i.keyCodes||13)}}var qS=av({name:"ripple",beforeMount(t,e){const n=e.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const r={cfg:n,enabled:e.value!==!1,modifiers:{},abort:[],start(i){r.enabled===!0&&i.qSkipRipple!==!0&&i.type===(r.modifiers.early===!0?"pointerdown":"click")&&Em(i,t,r,i.qKeyEvent===!0)},keystart:BS(i=>{r.enabled===!0&&i.qSkipRipple!==!0&&ri(i,r.modifiers.keyCodes)===!0&&i.type===`key${r.modifiers.early===!0?"down":"up"}`&&Em(i,t,r,!0)},300)};Tm(r,e),t.__qripple=r,ih(r,"main",[[t,"pointerdown","start","passive"],[t,"click","start","passive"],[t,"keydown","keystart","passive"],[t,"keyup","keystart","passive"]])},updated(t,e){if(e.oldValue!==e.value){const n=t.__qripple;n!==void 0&&(n.enabled=e.value!==!1,n.enabled===!0&&Object(e.value)===e.value&&Tm(n,e))}},beforeUnmount(t){const e=t.__qripple;e!==void 0&&(e.abort.forEach(n=>{n()}),$y(e,"main"),delete t._qripple)}});const pv={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},jS=Object.keys(pv),zS={align:{type:String,validator:t=>jS.includes(t)}};function HS(t){return O(()=>{const e=t.align===void 0?t.vertical===!0?"stretch":"left":t.align;return`${t.vertical===!0?"items":"justify"}-${pv[e]}`})}function $a(t){if(Object(t.$parent)===t.$parent)return t.$parent;let{parent:e}=t.$;for(;Object(e)===e;){if(Object(e.proxy)===e.proxy)return e.proxy;e=e.parent}}function mv(t){return t.appContext.config.globalProperties.$router!==void 0}function gv(t){return t.isUnmounted===!0||t.isDeactivated===!0}function Im(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}function bm(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function WS(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(Array.isArray(i)===!1||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Am(t,e){return Array.isArray(e)===!0?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function KS(t,e){return Array.isArray(t)===!0?Am(t,e):Array.isArray(e)===!0?Am(e,t):t===e}function GS(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(KS(t[n],e[n])===!1)return!1;return!0}const _v={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function yv({fallbackTag:t,useDisableForRouterLinkProps:e=!0}={}){const n=We(),{props:r,proxy:i,emit:s}=n,o=mv(n),a=O(()=>r.disable!==!0&&r.href!==void 0),l=O(e===!0?()=>o===!0&&r.disable!==!0&&a.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!=="":()=>o===!0&&a.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""),c=O(()=>l.value===!0?_(r.to):null),u=O(()=>c.value!==null),h=O(()=>a.value===!0||u.value===!0),d=O(()=>r.type==="a"||h.value===!0?"a":r.tag||t||"div"),f=O(()=>a.value===!0?{href:r.href,target:r.target}:u.value===!0?{href:c.value.href,target:r.target}:{}),p=O(()=>{if(u.value===!1)return-1;const{matched:b}=c.value,{length:M}=b,V=b[M-1];if(V===void 0)return-1;const A=i.$route.matched;if(A.length===0)return-1;const R=A.findIndex(bm.bind(null,V));if(R>-1)return R;const U=Im(b[M-2]);return M>1&&Im(V)===U&&A[A.length-1].path!==U?A.findIndex(bm.bind(null,b[M-2])):R}),v=O(()=>u.value===!0&&p.value!==-1&&WS(i.$route.params,c.value.params)),g=O(()=>v.value===!0&&p.value===i.$route.matched.length-1&&GS(i.$route.params,c.value.params)),w=O(()=>u.value===!0?g.value===!0?` ${r.exactActiveClass} ${r.activeClass}`:r.exact===!0?"":v.value===!0?` ${r.activeClass}`:"":"");function _(b){try{return i.$router.resolve(b)}catch{}return null}function T(b,{returnRouterError:M,to:V=r.to,replace:A=r.replace}={}){if(r.disable===!0)return b.preventDefault(),Promise.resolve(!1);if(b.metaKey||b.altKey||b.ctrlKey||b.shiftKey||b.button!==void 0&&b.button!==0||r.target==="_blank")return Promise.resolve(!1);b.preventDefault();const R=i.$router[A===!0?"replace":"push"](V);return M===!0?R:R.then(()=>{}).catch(()=>{})}function E(b){if(u.value===!0){const M=V=>T(b,V);s("click",b,M),b.defaultPrevented!==!0&&M()}else s("click",b)}return{hasRouterLink:u,hasHrefLink:a,hasLink:h,linkTag:d,resolvedLink:c,linkIsActive:v,linkIsExactActive:g,linkClass:w,linkAttrs:f,getLink:_,navigateToRouterLink:T,navigateOnClick:E}}const Rm={none:0,xs:4,sm:8,md:16,lg:24,xl:32},QS={xs:8,sm:10,md:14,lg:20,xl:24},YS=["button","submit","reset"],XS=/[^\s]\/[^\s]/,JS=["flat","outline","push","unelevated"],ZS=(t,e)=>t.flat===!0?"flat":t.outline===!0?"outline":t.push===!0?"push":t.unelevated===!0?"unelevated":e,eP={...Rd,..._v,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...JS.reduce((t,e)=>(t[e]=Boolean)&&t,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...zS.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function tP(t){const e=Sd(t,QS),n=HS(t),{hasRouterLink:r,hasLink:i,linkTag:s,linkAttrs:o,navigateOnClick:a}=yv({fallbackTag:"button"}),l=O(()=>{const g=t.fab===!1&&t.fabMini===!1?e.value:{};return t.padding!==void 0?Object.assign({},g,{padding:t.padding.split(/\s+/).map(w=>w in Rm?Rm[w]+"px":w).join(" "),minWidth:"0",minHeight:"0"}):g}),c=O(()=>t.rounded===!0||t.fab===!0||t.fabMini===!0),u=O(()=>t.disable!==!0&&t.loading!==!0),h=O(()=>u.value===!0?t.tabindex||0:-1),d=O(()=>ZS(t,"standard")),f=O(()=>{const g={tabindex:h.value};return i.value===!0?Object.assign(g,o.value):YS.includes(t.type)===!0&&(g.type=t.type),s.value==="a"?(t.disable===!0?g["aria-disabled"]="true":g.href===void 0&&(g.role="button"),r.value!==!0&&XS.test(t.type)===!0&&(g.type=t.type)):t.disable===!0&&(g.disabled="",g["aria-disabled"]="true"),t.loading===!0&&t.percentage!==void 0&&Object.assign(g,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":t.percentage}),g}),p=O(()=>{let g;t.color!==void 0?t.flat===!0||t.outline===!0?g=`text-${t.textColor||t.color}`:g=`bg-${t.color} text-${t.textColor||"white"}`:t.textColor&&(g=`text-${t.textColor}`);const w=t.round===!0?"round":`rectangle${c.value===!0?" q-btn--rounded":t.square===!0?" q-btn--square":""}`;return`q-btn--${d.value} q-btn--${w}`+(g!==void 0?" "+g:"")+(u.value===!0?" q-btn--actionable q-focusable q-hoverable":t.disable===!0?" disabled":"")+(t.fab===!0?" q-btn--fab":t.fabMini===!0?" q-btn--fab-mini":"")+(t.noCaps===!0?" q-btn--no-uppercase":"")+(t.dense===!0?" q-btn--dense":"")+(t.stretch===!0?" no-border-radius self-stretch":"")+(t.glossy===!0?" glossy":"")+(t.square?" q-btn--square":"")}),v=O(()=>n.value+(t.stack===!0?" column":" row")+(t.noWrap===!0?" no-wrap text-no-wrap":"")+(t.loading===!0?" q-btn__content--hidden":""));return{classes:p,style:l,innerClasses:v,attributes:f,hasLink:i,linkTag:s,navigateOnClick:a,isActionable:u}}const{passiveCapture:Gt}=Ze;let Ai=null,Ri=null,Si=null;var ur=Qe({name:"QBtn",props:{...eP,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(t,{slots:e,emit:n}){const{proxy:r}=We(),{classes:i,style:s,innerClasses:o,attributes:a,hasLink:l,linkTag:c,navigateOnClick:u,isActionable:h}=tP(t),d=ue(null),f=ue(null);let p=null,v,g=null;const w=O(()=>t.label!==void 0&&t.label!==null&&t.label!==""),_=O(()=>t.disable===!0||t.ripple===!1?!1:{keyCodes:l.value===!0?[13,32]:[13],...t.ripple===!0?{}:t.ripple}),T=O(()=>({center:t.round})),E=O(()=>{const j=Math.max(0,Math.min(100,t.percentage));return j>0?{transition:"transform 0.6s",transform:`translateX(${j-100}%)`}:{}}),b=O(()=>{if(t.loading===!0)return{onMousedown:ie,onTouchstart:ie,onClick:ie,onKeydown:ie,onKeyup:ie};if(h.value===!0){const j={onClick:V,onKeydown:A,onMousedown:U};if(r.$q.platform.has.touch===!0){const se=t.onTouchstart!==void 0?"":"Passive";j[`onTouchstart${se}`]=R}return j}return{onClick:Mn}}),M=O(()=>({ref:d,class:"q-btn q-btn-item non-selectable no-outline "+i.value,style:s.value,...a.value,...b.value}));function V(j){if(d.value!==null){if(j!==void 0){if(j.defaultPrevented===!0)return;const se=document.activeElement;if(t.type==="submit"&&se!==document.body&&d.value.contains(se)===!1&&se.contains(d.value)===!1){d.value.focus();const Z=()=>{document.removeEventListener("keydown",Mn,!0),document.removeEventListener("keyup",Z,Gt),d.value!==null&&d.value.removeEventListener("blur",Z,Gt)};document.addEventListener("keydown",Mn,!0),document.addEventListener("keyup",Z,Gt),d.value.addEventListener("blur",Z,Gt)}}u(j)}}function A(j){d.value!==null&&(n("keydown",j),ri(j,[13,32])===!0&&Ri!==d.value&&(Ri!==null&&$(),j.defaultPrevented!==!0&&(d.value.focus(),Ri=d.value,d.value.classList.add("q-btn--active"),document.addEventListener("keyup",G,!0),d.value.addEventListener("blur",G,Gt)),Mn(j)))}function R(j){d.value!==null&&(n("touchstart",j),j.defaultPrevented!==!0&&(Ai!==d.value&&(Ai!==null&&$(),Ai=d.value,p=j.target,p.addEventListener("touchcancel",G,Gt),p.addEventListener("touchend",G,Gt)),v=!0,g!==null&&clearTimeout(g),g=setTimeout(()=>{g=null,v=!1},200)))}function U(j){d.value!==null&&(j.qSkipRipple=v===!0,n("mousedown",j),j.defaultPrevented!==!0&&Si!==d.value&&(Si!==null&&$(),Si=d.value,d.value.classList.add("q-btn--active"),document.addEventListener("mouseup",G,Gt)))}function G(j){if(d.value!==null&&!(j!==void 0&&j.type==="blur"&&document.activeElement===d.value)){if(j!==void 0&&j.type==="keyup"){if(Ri===d.value&&ri(j,[13,32])===!0){const se=new MouseEvent("click",j);se.qKeyEvent=!0,j.defaultPrevented===!0&&co(se),j.cancelBubble===!0&&Uy(se),d.value.dispatchEvent(se),Mn(j),j.qKeyEvent=!0}n("keyup",j)}$()}}function $(j){const se=f.value;j!==!0&&(Ai===d.value||Si===d.value)&&se!==null&&se!==document.activeElement&&(se.setAttribute("tabindex",-1),se.focus()),Ai===d.value&&(p!==null&&(p.removeEventListener("touchcancel",G,Gt),p.removeEventListener("touchend",G,Gt)),Ai=p=null),Si===d.value&&(document.removeEventListener("mouseup",G,Gt),Si=null),Ri===d.value&&(document.removeEventListener("keyup",G,!0),d.value!==null&&d.value.removeEventListener("blur",G,Gt),Ri=null),d.value!==null&&d.value.classList.remove("q-btn--active")}function ie(j){Mn(j),j.qSkipRipple=!0}return xt(()=>{$(!0)}),Object.assign(r,{click:V}),()=>{let j=[];t.icon!==void 0&&j.push(q(hl,{name:t.icon,left:t.stack===!1&&w.value===!0,role:"img","aria-hidden":"true"})),w.value===!0&&j.push(q("span",{class:"block"},[t.label])),j=Ni(e.default,j),t.iconRight!==void 0&&t.round===!1&&j.push(q(hl,{name:t.iconRight,right:t.stack===!1&&w.value===!0,role:"img","aria-hidden":"true"}));const se=[q("span",{class:"q-focus-helper",ref:f})];return t.loading===!0&&t.percentage!==void 0&&se.push(q("span",{class:"q-btn__progress absolute-full overflow-hidden"+(t.darkPercentage===!0?" q-btn__progress--dark":"")},[q("span",{class:"q-btn__progress-indicator fit block",style:E.value})])),se.push(q("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},j)),t.loading!==null&&se.push(q(Zi,{name:"q-transition--fade"},()=>t.loading===!0?[q("span",{key:"loading",class:"absolute-full flex flex-center"},e.loading!==void 0?e.loading():[q(dv)])]:null)),Ui(q(c.value,M.value,se),[[qS,_.value,void 0,T.value]])}}});const nP=q("div",{class:"q-space"});var vv=Qe({name:"QSpace",setup(){return()=>nP}});const Bo={dark:{type:Boolean,default:null}};function qo(t,e){return O(()=>t.dark===null?e.dark.isActive:t.dark)}const rP={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},hu={xs:2,sm:4,md:8,lg:16,xl:24};var iP=Qe({name:"QSeparator",props:{...Bo,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(t){const e=We(),n=qo(t,e.proxy.$q),r=O(()=>t.vertical===!0?"vertical":"horizontal"),i=O(()=>` q-separator--${r.value}`),s=O(()=>t.inset!==!1?`${i.value}-${rP[t.inset]}`:""),o=O(()=>`q-separator${i.value}${s.value}`+(t.color!==void 0?` bg-${t.color}`:"")+(n.value===!0?" q-separator--dark":"")),a=O(()=>{const l={};if(t.size!==void 0&&(l[t.vertical===!0?"width":"height"]=t.size),t.spaced!==!1){const c=t.spaced===!0?`${hu.md}px`:t.spaced in hu?`${hu[t.spaced]}px`:t.spaced,u=t.vertical===!0?["Left","Right"]:["Top","Bottom"];l[`margin${u[0]}`]=l[`margin${u[1]}`]=c}return l});return()=>q("hr",{class:o.value,style:a.value,"aria-orientation":r.value})}}),wv=Qe({name:"QAvatar",props:{...Rd,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(t,{slots:e}){const n=Sd(t),r=O(()=>"q-avatar"+(t.color?` bg-${t.color}`:"")+(t.textColor?` text-${t.textColor} q-chip--colored`:"")+(t.square===!0?" q-avatar--square":t.rounded===!0?" rounded-borders":"")),i=O(()=>t.fontSize?{fontSize:t.fontSize}:null);return()=>{const s=t.icon!==void 0?[q(hl,{name:t.icon})]:void 0;return q("div",{class:r.value,style:n.value},[q("div",{class:"q-avatar__content row flex-center overflow-hidden",style:i.value},kS(e.default,s))])}}}),du=Qe({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(t,{slots:e}){const n=O(()=>`q-item__section column q-item__section--${t.avatar===!0||t.side===!0||t.thumbnail===!0?"side":"main"}`+(t.top===!0?" q-item__section--top justify-start":" justify-center")+(t.avatar===!0?" q-item__section--avatar":"")+(t.thumbnail===!0?" q-item__section--thumbnail":"")+(t.noWrap===!0?" q-item__section--nowrap":""));return()=>q("div",{class:n.value},Xn(e.default))}}),fu=Qe({name:"QItem",props:{...Bo,..._v,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(t,{slots:e,emit:n}){const{proxy:{$q:r}}=We(),i=qo(t,r),{hasLink:s,linkAttrs:o,linkClass:a,linkTag:l,navigateOnClick:c}=yv(),u=ue(null),h=ue(null),d=O(()=>t.clickable===!0||s.value===!0||t.tag==="label"),f=O(()=>t.disable!==!0&&d.value===!0),p=O(()=>"q-item q-item-type row no-wrap"+(t.dense===!0?" q-item--dense":"")+(i.value===!0?" q-item--dark":"")+(s.value===!0&&t.active===null?a.value:t.active===!0?` q-item--active${t.activeClass!==void 0?` ${t.activeClass}`:""}`:"")+(t.disable===!0?" disabled":"")+(f.value===!0?" q-item--clickable q-link cursor-pointer "+(t.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(t.focused===!0?" q-manual-focusable--focused":""):"")),v=O(()=>{if(t.insetLevel===void 0)return null;const T=r.lang.rtl===!0?"Right":"Left";return{["padding"+T]:16+t.insetLevel*56+"px"}});function g(T){f.value===!0&&(h.value!==null&&(T.qKeyEvent!==!0&&document.activeElement===u.value?h.value.focus():document.activeElement===h.value&&u.value.focus()),c(T))}function w(T){if(f.value===!0&&ri(T,[13,32])===!0){Mn(T),T.qKeyEvent=!0;const E=new MouseEvent("click",T);E.qKeyEvent=!0,u.value.dispatchEvent(E)}n("keyup",T)}function _(){const T=lv(e.default,[]);return f.value===!0&&T.unshift(q("div",{class:"q-focus-helper",tabindex:-1,ref:h})),T}return()=>{const T={ref:u,class:p.value,style:v.value,role:"listitem",onClick:g,onKeyup:w};return f.value===!0?(T.tabindex=t.tabindex||"0",Object.assign(T,o.value)):d.value===!0&&(T["aria-disabled"]="true"),q(l.value,T,_())}}}),sP=Qe({name:"QList",props:{...Bo,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(t,{slots:e}){const n=We(),r=qo(t,n.proxy.$q),i=O(()=>"q-list"+(t.bordered===!0?" q-list--bordered":"")+(t.dense===!0?" q-list--dense":"")+(t.separator===!0?" q-list--separator":"")+(r.value===!0?" q-list--dark":"")+(t.padding===!0?" q-list--padding":""));return()=>q(t.tag,{class:i.value},Xn(e.default))}});function oP(){if(window.getSelection!==void 0){const t=window.getSelection();t.empty!==void 0?t.empty():t.removeAllRanges!==void 0&&(t.removeAllRanges(),al.is.mobile!==!0&&t.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const aP={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function lP({showing:t,avoidEmit:e,configureAnchorEl:n}){const{props:r,proxy:i,emit:s}=We(),o=ue(null);let a=null;function l(f){return o.value===null?!1:f===void 0||f.touches===void 0||f.touches.length<=1}const c={};n===void 0&&(Object.assign(c,{hide(f){i.hide(f)},toggle(f){i.toggle(f),f.qAnchorHandled=!0},toggleKey(f){ri(f,13)===!0&&c.toggle(f)},contextClick(f){i.hide(f),co(f),hn(()=>{i.show(f),f.qAnchorHandled=!0})},prevent:co,mobileTouch(f){if(c.mobileCleanup(f),l(f)!==!0)return;i.hide(f),o.value.classList.add("non-selectable");const p=f.target;ih(c,"anchor",[[p,"touchmove","mobileCleanup","passive"],[p,"touchend","mobileCleanup","passive"],[p,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),a=setTimeout(()=>{a=null,i.show(f),f.qAnchorHandled=!0},300)},mobileCleanup(f){o.value.classList.remove("non-selectable"),a!==null&&(clearTimeout(a),a=null),t.value===!0&&f!==void 0&&oP()}}),n=function(f=r.contextMenu){if(r.noParentEvent===!0||o.value===null)return;let p;f===!0?i.$q.platform.is.mobile===!0?p=[[o.value,"touchstart","mobileTouch","passive"]]:p=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:p=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],ih(c,"anchor",p)});function u(){$y(c,"anchor")}function h(f){for(o.value=f;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;n()}function d(){if(r.target===!1||r.target===""||i.$el.parentNode===null)o.value=null;else if(r.target===!0)h(i.$el.parentNode);else{let f=r.target;if(typeof r.target=="string")try{f=document.querySelector(r.target)}catch{f=void 0}f!=null?(o.value=f.$el||f,n()):(o.value=null,console.error(`Anchor: target "${r.target}" not found`))}}return ke(()=>r.contextMenu,f=>{o.value!==null&&(u(),n(f))}),ke(()=>r.target,()=>{o.value!==null&&u(),d()}),ke(()=>r.noParentEvent,f=>{o.value!==null&&(f===!0?u():n())}),On(()=>{d(),e!==!0&&r.modelValue===!0&&o.value===null&&s("update:modelValue",!1)}),xt(()=>{a!==null&&clearTimeout(a),u()}),{anchorEl:o,canShow:l,anchorEvents:c}}function cP(t,e){const n=ue(null);let r;function i(a,l){const c=`${l!==void 0?"add":"remove"}EventListener`,u=l!==void 0?l:r;a!==window&&a[c]("scroll",u,Ze.passive),window[c]("scroll",u,Ze.passive),r=l}function s(){n.value!==null&&(i(n.value),n.value=null)}const o=ke(()=>t.noParentEvent,()=>{n.value!==null&&(s(),e())});return xt(o),{localScrollTarget:n,unconfigureScrollTarget:s,changeScrollEvent:i}}const Ev={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Tv=["beforeShow","show","beforeHide","hide"];function Iv({showing:t,canShow:e,hideOnRouteChange:n,handleShow:r,handleHide:i,processOnMount:s}){const o=We(),{props:a,emit:l,proxy:c}=o;let u;function h(_){t.value===!0?p(_):d(_)}function d(_){if(a.disable===!0||_!==void 0&&_.qAnchorHandled===!0||e!==void 0&&e(_)!==!0)return;const T=a["onUpdate:modelValue"]!==void 0;T===!0&&(l("update:modelValue",!0),u=_,hn(()=>{u===_&&(u=void 0)})),(a.modelValue===null||T===!1)&&f(_)}function f(_){t.value!==!0&&(t.value=!0,l("beforeShow",_),r!==void 0?r(_):l("show",_))}function p(_){if(a.disable===!0)return;const T=a["onUpdate:modelValue"]!==void 0;T===!0&&(l("update:modelValue",!1),u=_,hn(()=>{u===_&&(u=void 0)})),(a.modelValue===null||T===!1)&&v(_)}function v(_){t.value!==!1&&(t.value=!1,l("beforeHide",_),i!==void 0?i(_):l("hide",_))}function g(_){a.disable===!0&&_===!0?a["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!1):_===!0!==t.value&&(_===!0?f:v)(u)}ke(()=>a.modelValue,g),n!==void 0&&mv(o)===!0&&ke(()=>c.$route.fullPath,()=>{n.value===!0&&t.value===!0&&p()}),s===!0&&On(()=>{g(a.modelValue)});const w={show:d,hide:p,toggle:h};return Object.assign(c,w),w}let qr=[],ho=[];function bv(t){ho=ho.filter(e=>e!==t)}function uP(t){bv(t),ho.push(t)}function Sm(t){bv(t),ho.length===0&&qr.length!==0&&(qr[qr.length-1](),qr=[])}function Av(t){ho.length===0?t():qr.push(t)}function JU(t){qr=qr.filter(e=>e!==t)}let hP=1,dP=document.body;function Pd(t,e){const n=document.createElement("div");if(n.id=e!==void 0?`q-portal--${e}--${hP++}`:t,cl.globalNodes!==void 0){const r=cl.globalNodes.class;r!==void 0&&(n.className=r)}return dP.appendChild(n),n}function fP(t){t.remove()}const qi=[];function pP(t){return qi.find(e=>e.contentEl!==null&&e.contentEl.contains(t))}function Rv(t,e){do{if(t.$options.name==="QMenu"){if(t.hide(e),t.$props.separateClosePopup===!0)return $a(t)}else if(t.__qPortal===!0){const n=$a(t);return n!==void 0&&n.$options.name==="QPopupProxy"?(t.hide(e),n):t}t=$a(t)}while(t!=null)}function mP(t,e,n){for(;n!==0&&t!==void 0&&t!==null;){if(t.__qPortal===!0){if(n--,t.$options.name==="QMenu"){t=Rv(t,e);continue}t.hide(e)}t=$a(t)}}function gP(t){for(t=t.parent;t!=null;){if(t.type.name==="QGlobalDialog")return!0;if(t.type.name==="QDialog"||t.type.name==="QMenu")return!1;t=t.parent}return!1}function Sv(t,e,n,r){const i=ue(!1),s=ue(!1);let o=null;const a={},l=r==="dialog"&&gP(t);function c(h){if(h===!0){Sm(a),s.value=!0;return}s.value=!1,i.value===!1&&(l===!1&&o===null&&(o=Pd(!1,r)),i.value=!0,qi.push(t.proxy),uP(a))}function u(h){if(s.value=!1,h!==!0)return;Sm(a),i.value=!1;const d=qi.indexOf(t.proxy);d!==-1&&qi.splice(d,1),o!==null&&(fP(o),o=null)}return Xl(()=>{u(!0)}),t.proxy.__qPortal=!0,tc(t.proxy,"contentEl",()=>e.value),{showPortal:c,hidePortal:u,portalIsActive:i,portalIsAccessible:s,renderPortal:()=>l===!0?n():i.value===!0?[q(zb,{to:o},n())]:void 0}}const Pv={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Cv(t,e=()=>{},n=()=>{}){return{transitionProps:O(()=>{const r=`q-transition--${t.transitionShow||e()}`,i=`q-transition--${t.transitionHide||n()}`;return{appear:!0,enterFromClass:`${r}-enter-from`,enterActiveClass:`${r}-enter-active`,enterToClass:`${r}-enter-to`,leaveFromClass:`${i}-leave-from`,leaveActiveClass:`${i}-leave-active`,leaveToClass:`${i}-leave-to`}}),transitionStyle:O(()=>`--q-transition-duration: ${t.transitionDuration}ms`)}}function kv(){let t;const e=We();function n(){t=void 0}return gd(n),xt(n),{removeTick:n,registerTick(r){t=r,hn(()=>{t===r&&(gv(e)===!1&&t(),t=void 0)})}}}function xv(){let t=null;const e=We();function n(){t!==null&&(clearTimeout(t),t=null)}return gd(n),xt(n),{removeTimeout:n,registerTimeout(r,i){n(),gv(e)===!1&&(t=setTimeout(r,i))}}}const _P=[null,document,document.body,document.scrollingElement,document.documentElement];function Ov(t,e){let n=$S(e);if(n===void 0){if(t==null)return window;n=t.closest(".scroll,.scroll-y,.overflow-auto")}return _P.includes(n)?window:n}function Dv(t){return t===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:t.scrollTop}function Nv(t){return t===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:t.scrollLeft}let wa;function Ba(){if(wa!==void 0)return wa;const t=document.createElement("p"),e=document.createElement("div");dh(t,{width:"100%",height:"200px"}),dh(e,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);const n=t.offsetWidth;e.style.overflow="scroll";let r=t.offsetWidth;return n===r&&(r=e.clientWidth),e.remove(),wa=n-r,wa}function yP(t,e=!0){return!t||t.nodeType!==Node.ELEMENT_NODE?!1:e?t.scrollHeight>t.clientHeight&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-y"])):t.scrollWidth>t.clientWidth&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-x"]))}const Yr=[];let rs;function vP(t){rs=t.keyCode===27}function wP(){rs===!0&&(rs=!1)}function EP(t){rs===!0&&(rs=!1,ri(t,27)===!0&&Yr[Yr.length-1](t))}function Lv(t){window[t]("keydown",vP),window[t]("blur",wP),window[t]("keyup",EP),rs=!1}function Vv(t){je.is.desktop===!0&&(Yr.push(t),Yr.length===1&&Lv("addEventListener"))}function dl(t){const e=Yr.indexOf(t);e>-1&&(Yr.splice(e,1),Yr.length===0&&Lv("removeEventListener"))}const Xr=[];function Mv(t){Xr[Xr.length-1](t)}function Fv(t){je.is.desktop===!0&&(Xr.push(t),Xr.length===1&&document.body.addEventListener("focusin",Mv))}function fh(t){const e=Xr.indexOf(t);e>-1&&(Xr.splice(e,1),Xr.length===0&&document.body.removeEventListener("focusin",Mv))}const{notPassiveCapture:fl}=Ze,Jr=[];function pl(t){const e=t.target;if(e===void 0||e.nodeType===8||e.classList.contains("no-pointer-events")===!0)return;let n=qi.length-1;for(;n>=0;){const r=qi[n].$;if(r.type.name==="QTooltip"){n--;continue}if(r.type.name!=="QDialog")break;if(r.props.seamless!==!0)return;n--}for(let r=Jr.length-1;r>=0;r--){const i=Jr[r];if((i.anchorEl.value===null||i.anchorEl.value.contains(e)===!1)&&(e===document.body||i.innerRef.value!==null&&i.innerRef.value.contains(e)===!1))t.qClickOutside=!0,i.onClickOutside(t);else return}}function TP(t){Jr.push(t),Jr.length===1&&(document.addEventListener("mousedown",pl,fl),document.addEventListener("touchstart",pl,fl))}function Pm(t){const e=Jr.findIndex(n=>n===t);e>-1&&(Jr.splice(e,1),Jr.length===0&&(document.removeEventListener("mousedown",pl,fl),document.removeEventListener("touchstart",pl,fl)))}let Cm,km;function xm(t){const e=t.split(" ");return e.length!==2?!1:["top","center","bottom"].includes(e[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(e[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function IP(t){return t?!(t.length!==2||typeof t[0]!="number"||typeof t[1]!="number"):!0}const ph={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(t=>{ph[`${t}#ltr`]=t,ph[`${t}#rtl`]=t});function Om(t,e){const n=t.split(" ");return{vertical:n[0],horizontal:ph[`${n[1]}#${e===!0?"rtl":"ltr"}`]}}function bP(t,e){let{top:n,left:r,right:i,bottom:s,width:o,height:a}=t.getBoundingClientRect();return e!==void 0&&(n-=e[1],r-=e[0],s+=e[1],i+=e[0],o+=e[0],a+=e[1]),{top:n,bottom:s,height:a,left:r,right:i,width:o,middle:r+(i-r)/2,center:n+(s-n)/2}}function AP(t,e,n){let{top:r,left:i}=t.getBoundingClientRect();return r+=e.top,i+=e.left,n!==void 0&&(r+=n[1],i+=n[0]),{top:r,bottom:r+1,height:1,left:i,right:i+1,width:1,middle:i,center:r}}function RP(t,e){return{top:0,center:e/2,bottom:e,left:0,middle:t/2,right:t}}function Dm(t,e,n,r){return{top:t[n.vertical]-e[r.vertical],left:t[n.horizontal]-e[r.horizontal]}}function Uv(t,e=0){if(t.targetEl===null||t.anchorEl===null||e>5)return;if(t.targetEl.offsetHeight===0||t.targetEl.offsetWidth===0){setTimeout(()=>{Uv(t,e+1)},10);return}const{targetEl:n,offset:r,anchorEl:i,anchorOrigin:s,selfOrigin:o,absoluteOffset:a,fit:l,cover:c,maxHeight:u,maxWidth:h}=t;if(je.is.ios===!0&&window.visualViewport!==void 0){const M=document.body.style,{offsetLeft:V,offsetTop:A}=window.visualViewport;V!==Cm&&(M.setProperty("--q-pe-left",V+"px"),Cm=V),A!==km&&(M.setProperty("--q-pe-top",A+"px"),km=A)}const{scrollLeft:d,scrollTop:f}=n,p=a===void 0?bP(i,c===!0?[0,0]:r):AP(i,a,r);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:h||"100vw",maxHeight:u||"100vh",visibility:"visible"});const{offsetWidth:v,offsetHeight:g}=n,{elWidth:w,elHeight:_}=l===!0||c===!0?{elWidth:Math.max(p.width,v),elHeight:c===!0?Math.max(p.height,g):g}:{elWidth:v,elHeight:g};let T={maxWidth:h,maxHeight:u};(l===!0||c===!0)&&(T.minWidth=p.width+"px",c===!0&&(T.minHeight=p.height+"px")),Object.assign(n.style,T);const E=RP(w,_);let b=Dm(p,E,s,o);if(a===void 0||r===void 0)pu(b,p,E,s,o);else{const{top:M,left:V}=b;pu(b,p,E,s,o);let A=!1;if(b.top!==M){A=!0;const R=2*r[1];p.center=p.top-=R,p.bottom-=R+2}if(b.left!==V){A=!0;const R=2*r[0];p.middle=p.left-=R,p.right-=R+2}A===!0&&(b=Dm(p,E,s,o),pu(b,p,E,s,o))}T={top:b.top+"px",left:b.left+"px"},b.maxHeight!==void 0&&(T.maxHeight=b.maxHeight+"px",p.height>b.maxHeight&&(T.minHeight=T.maxHeight)),b.maxWidth!==void 0&&(T.maxWidth=b.maxWidth+"px",p.width>b.maxWidth&&(T.minWidth=T.maxWidth)),Object.assign(n.style,T),n.scrollTop!==f&&(n.scrollTop=f),n.scrollLeft!==d&&(n.scrollLeft=d)}function pu(t,e,n,r,i){const s=n.bottom,o=n.right,a=Ba(),l=window.innerHeight-a,c=document.body.clientWidth;if(t.top<0||t.top+s>l)if(i.vertical==="center")t.top=e[r.vertical]>l/2?Math.max(0,l-s):0,t.maxHeight=Math.min(s,l);else if(e[r.vertical]>l/2){const u=Math.min(l,r.vertical==="center"?e.center:r.vertical===i.vertical?e.bottom:e.top);t.maxHeight=Math.min(s,u),t.top=Math.max(0,u-s)}else t.top=Math.max(0,r.vertical==="center"?e.center:r.vertical===i.vertical?e.top:e.bottom),t.maxHeight=Math.min(s,l-t.top);if(t.left<0||t.left+o>c)if(t.maxWidth=Math.min(o,c),i.horizontal==="middle")t.left=e[r.horizontal]>c/2?Math.max(0,c-o):0;else if(e[r.horizontal]>c/2){const u=Math.min(c,r.horizontal==="middle"?e.middle:r.horizontal===i.horizontal?e.right:e.left);t.maxWidth=Math.min(o,u),t.left=Math.max(0,u-t.maxWidth)}else t.left=Math.max(0,r.horizontal==="middle"?e.middle:r.horizontal===i.horizontal?e.left:e.right),t.maxWidth=Math.min(o,c-t.left)}var SP=Qe({name:"QMenu",inheritAttrs:!1,props:{...aP,...Ev,...Bo,...Pv,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:xm},self:{type:String,validator:xm},offset:{type:Array,validator:IP},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Tv,"click","escapeKey"],setup(t,{slots:e,emit:n,attrs:r}){let i=null,s,o,a;const l=We(),{proxy:c}=l,{$q:u}=c,h=ue(null),d=ue(!1),f=O(()=>t.persistent!==!0&&t.noRouteDismiss!==!0),p=qo(t,u),{registerTick:v,removeTick:g}=kv(),{registerTimeout:w}=xv(),{transitionProps:_,transitionStyle:T}=Cv(t),{localScrollTarget:E,changeScrollEvent:b,unconfigureScrollTarget:M}=cP(t,mt),{anchorEl:V,canShow:A}=lP({showing:d}),{hide:R}=Iv({showing:d,canShow:A,handleShow:lt,handleHide:ct,hideOnRouteChange:f,processOnMount:!0}),{showPortal:U,hidePortal:G,renderPortal:$}=Sv(l,h,W,"menu"),ie={anchorEl:V,innerRef:h,onClickOutside(P){if(t.persistent!==!0&&d.value===!0)return R(P),(P.type==="touchstart"||P.target.classList.contains("q-dialog__backdrop"))&&Mn(P),!0}},j=O(()=>Om(t.anchor||(t.cover===!0?"center middle":"bottom start"),u.lang.rtl)),se=O(()=>t.cover===!0?j.value:Om(t.self||"top start",u.lang.rtl)),Z=O(()=>(t.square===!0?" q-menu--square":"")+(p.value===!0?" q-menu--dark q-dark":"")),ge=O(()=>t.autoClose===!0?{onClick:Wt}:{}),he=O(()=>d.value===!0&&t.persistent!==!0);ke(he,P=>{P===!0?(Vv(_e),TP(ie)):(dl(_e),Pm(ie))});function Be(){Av(()=>{let P=h.value;P&&P.contains(document.activeElement)!==!0&&(P=P.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||P.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||P.querySelector("[autofocus], [data-autofocus]")||P,P.focus({preventScroll:!0}))})}function lt(P){if(i=t.noRefocus===!1?document.activeElement:null,Fv(me),U(),mt(),s=void 0,P!==void 0&&(t.touchPosition||t.contextMenu)){const Q=Fy(P);if(Q.left!==void 0){const{top:Ee,left:m}=V.value.getBoundingClientRect();s={left:Q.left-m,top:Q.top-Ee}}}o===void 0&&(o=ke(()=>u.screen.width+"|"+u.screen.height+"|"+t.self+"|"+t.anchor+"|"+u.lang.rtl,S)),t.noFocus!==!0&&document.activeElement.blur(),v(()=>{S(),t.noFocus!==!0&&Be()}),w(()=>{u.platform.is.ios===!0&&(a=t.autoClose,h.value.click()),S(),U(!0),n("show",P)},t.transitionDuration)}function ct(P){g(),G(),qe(!0),i!==null&&(P===void 0||P.qClickOutside!==!0)&&(((P&&P.type.indexOf("key")===0?i.closest('[tabindex]:not([tabindex^="-"])'):void 0)||i).focus(),i=null),w(()=>{G(!0),n("hide",P)},t.transitionDuration)}function qe(P){s=void 0,o!==void 0&&(o(),o=void 0),(P===!0||d.value===!0)&&(fh(me),M(),Pm(ie),dl(_e)),P!==!0&&(i=null)}function mt(){(V.value!==null||t.scrollTarget!==void 0)&&(E.value=Ov(V.value,t.scrollTarget),b(E.value,S))}function Wt(P){a!==!0?(Rv(c,P),n("click",P)):a=!1}function me(P){he.value===!0&&t.noFocus!==!0&&fv(h.value,P.target)!==!0&&Be()}function _e(P){n("escapeKey"),R(P)}function S(){Uv({targetEl:h.value,offset:t.offset,anchorEl:V.value,anchorOrigin:j.value,selfOrigin:se.value,absoluteOffset:s,fit:t.fit,cover:t.cover,maxHeight:t.maxHeight,maxWidth:t.maxWidth})}function W(){return q(Zi,_.value,()=>d.value===!0?q("div",{role:"menu",...r,ref:h,tabindex:-1,class:["q-menu q-position-engine scroll"+Z.value,r.class],style:[r.style,T.value],...ge.value},Xn(e.default)):null)}return xt(qe),Object.assign(c,{focus:Be,updatePosition:S}),$}}),PP=Qe({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:e}){const n=O(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>q("div",{class:n.value,role:"toolbar"},Xn(e.default))}});function CP(){const t=ue(!Hn.value);return t.value===!1&&On(()=>{t.value=!0}),t}const $v=typeof ResizeObserver!="undefined",Nm=$v===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var mh=Qe({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(t,{emit:e}){let n=null,r,i={width:-1,height:-1};function s(l){l===!0||t.debounce===0||t.debounce==="0"?o():n===null&&(n=setTimeout(o,t.debounce))}function o(){if(n!==null&&(clearTimeout(n),n=null),r){const{offsetWidth:l,offsetHeight:c}=r;(l!==i.width||c!==i.height)&&(i={width:l,height:c},e("resize",i))}}const{proxy:a}=We();if($v===!0){let l;const c=u=>{r=a.$el.parentNode,r?(l=new ResizeObserver(s),l.observe(r),o()):u!==!0&&hn(()=>{c(!0)})};return On(()=>{c()}),xt(()=>{n!==null&&clearTimeout(n),l!==void 0&&(l.disconnect!==void 0?l.disconnect():r&&l.unobserve(r))}),Nt}else{let u=function(){n!==null&&(clearTimeout(n),n=null),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",s,Ze.passive),c=void 0)},h=function(){u(),r&&r.contentDocument&&(c=r.contentDocument.defaultView,c.addEventListener("resize",s,Ze.passive),o())};const l=CP();let c;return On(()=>{hn(()=>{r=a.$el,r&&h()})}),xt(u),a.trigger=s,()=>{if(l.value===!0)return q("object",{style:Nm.style,tabindex:-1,type:"text/html",data:Nm.url,"aria-hidden":"true",onLoad:h})}}}}),kP=Qe({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:e,emit:n}){const{proxy:{$q:r}}=We(),i=Ct(Id,Bi);if(i===Bi)return console.error("QHeader needs to be child of QLayout"),Bi;const s=ue(parseInt(t.heightHint,10)),o=ue(!0),a=O(()=>t.reveal===!0||i.view.value.indexOf("H")>-1||r.platform.is.ios&&i.isContainer.value===!0),l=O(()=>{if(t.modelValue!==!0)return 0;if(a.value===!0)return o.value===!0?s.value:0;const _=s.value-i.scroll.value.position;return _>0?_:0}),c=O(()=>t.modelValue!==!0||a.value===!0&&o.value!==!0),u=O(()=>t.modelValue===!0&&c.value===!0&&t.reveal===!0),h=O(()=>"q-header q-layout__section--marginal "+(a.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),d=O(()=>{const _=i.rows.value.top,T={};return _[0]==="l"&&i.left.space===!0&&(T[r.lang.rtl===!0?"right":"left"]=`${i.left.size}px`),_[2]==="r"&&i.right.space===!0&&(T[r.lang.rtl===!0?"left":"right"]=`${i.right.size}px`),T});function f(_,T){i.update("header",_,T)}function p(_,T){_.value!==T&&(_.value=T)}function v({height:_}){p(s,_),f("size",_)}function g(_){u.value===!0&&p(o,!0),n("focusin",_)}ke(()=>t.modelValue,_=>{f("space",_),p(o,!0),i.animate()}),ke(l,_=>{f("offset",_)}),ke(()=>t.reveal,_=>{_===!1&&p(o,t.modelValue)}),ke(o,_=>{i.animate(),n("reveal",_)}),ke(i.scroll,_=>{t.reveal===!0&&p(o,_.direction==="up"||_.position<=t.revealOffset||_.position-_.inflectionPoint<100)});const w={};return i.instances.header=w,t.modelValue===!0&&f("size",s.value),f("space",t.modelValue),f("offset",l.value),xt(()=>{i.instances.header===w&&(i.instances.header=void 0,f("size",0),f("offset",0),f("space",!1))}),()=>{const _=lv(e.default,[]);return t.elevated===!0&&_.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),_.push(q(mh,{debounce:0,onResize:v})),q("header",{class:h.value,style:d.value,onFocusin:g},_)}}}),xP=Qe({name:"QPageContainer",setup(t,{slots:e}){const{proxy:{$q:n}}=We(),r=Ct(Id,Bi);if(r===Bi)return console.error("QPageContainer needs to be child of QLayout"),Bi;$i(sR,!0);const i=O(()=>{const s={};return r.header.space===!0&&(s.paddingTop=`${r.header.size}px`),r.right.space===!0&&(s[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${r.right.size}px`),r.footer.space===!0&&(s.paddingBottom=`${r.footer.size}px`),r.left.space===!0&&(s[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${r.left.size}px`),s});return()=>q("div",{class:"q-page-container",style:i.value},Xn(e.default))}});const{passive:Lm}=Ze,OP=["both","horizontal","vertical"];var DP=Qe({name:"QScrollObserver",props:{axis:{type:String,validator:t=>OP.includes(t),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(t,{emit:e}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let r=null,i,s;ke(()=>t.scrollTarget,()=>{l(),a()});function o(){r!==null&&r();const h=Math.max(0,Dv(i)),d=Nv(i),f={top:h-n.position.top,left:d-n.position.left};if(t.axis==="vertical"&&f.top===0||t.axis==="horizontal"&&f.left===0)return;const p=Math.abs(f.top)>=Math.abs(f.left)?f.top<0?"up":"down":f.left<0?"left":"right";n.position={top:h,left:d},n.directionChanged=n.direction!==p,n.delta=f,n.directionChanged===!0&&(n.direction=p,n.inflectionPoint=n.position),e("scroll",{...n})}function a(){i=Ov(s,t.scrollTarget),i.addEventListener("scroll",c,Lm),c(!0)}function l(){i!==void 0&&(i.removeEventListener("scroll",c,Lm),i=void 0)}function c(h){if(h===!0||t.debounce===0||t.debounce==="0")o();else if(r===null){const[d,f]=t.debounce?[setTimeout(o,t.debounce),clearTimeout]:[requestAnimationFrame(o),cancelAnimationFrame];r=()=>{f(d),r=null}}}const{proxy:u}=We();return ke(()=>u.$q.lang.rtl,o),On(()=>{s=u.$el.parentNode,a()}),xt(()=>{r!==null&&r(),l()}),Object.assign(u,{trigger:c,getPosition:()=>n}),Nt}}),NP=Qe({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:e,emit:n}){const{proxy:{$q:r}}=We(),i=ue(null),s=ue(r.screen.height),o=ue(t.container===!0?0:r.screen.width),a=ue({position:0,direction:"down",inflectionPoint:0}),l=ue(0),c=ue(Hn.value===!0?0:Ba()),u=O(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),h=O(()=>t.container===!1?{minHeight:r.screen.height+"px"}:null),d=O(()=>c.value!==0?{[r.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),f=O(()=>c.value!==0?{[r.lang.rtl===!0?"right":"left"]:0,[r.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function p(E){if(t.container===!0||document.qScrollPrevented!==!0){const b={position:E.position.top,direction:E.direction,directionChanged:E.directionChanged,inflectionPoint:E.inflectionPoint.top,delta:E.delta.top};a.value=b,t.onScroll!==void 0&&n("scroll",b)}}function v(E){const{height:b,width:M}=E;let V=!1;s.value!==b&&(V=!0,s.value=b,t.onScrollHeight!==void 0&&n("scrollHeight",b),w()),o.value!==M&&(V=!0,o.value=M),V===!0&&t.onResize!==void 0&&n("resize",E)}function g({height:E}){l.value!==E&&(l.value=E,w())}function w(){if(t.container===!0){const E=s.value>l.value?Ba():0;c.value!==E&&(c.value=E)}}let _=null;const T={instances:{},view:O(()=>t.view),isContainer:O(()=>t.container),rootRef:i,height:s,containerHeight:l,scrollbarWidth:c,totalWidth:O(()=>o.value+c.value),rows:O(()=>{const E=t.view.toLowerCase().split(" ");return{top:E[0].split(""),middle:E[1].split(""),bottom:E[2].split("")}}),header:ln({size:0,offset:0,space:!1}),right:ln({size:300,offset:0,space:!1}),footer:ln({size:0,offset:0,space:!1}),left:ln({size:300,offset:0,space:!1}),scroll:a,animate(){_!==null?clearTimeout(_):document.body.classList.add("q-body--layout-animate"),_=setTimeout(()=>{_=null,document.body.classList.remove("q-body--layout-animate")},155)},update(E,b,M){T[E][b]=M}};if($i(Id,T),Ba()>0){let M=function(){E=null,b.classList.remove("hide-scrollbar")},V=function(){if(E===null){if(b.scrollHeight>r.screen.height)return;b.classList.add("hide-scrollbar")}else clearTimeout(E);E=setTimeout(M,300)},A=function(R){E!==null&&R==="remove"&&(clearTimeout(E),M()),window[`${R}EventListener`]("resize",V)},E=null;const b=document.body;ke(()=>t.container!==!0?"add":"remove",A),t.container!==!0&&A("add"),Xl(()=>{A("remove")})}return()=>{const E=Ni(e.default,[q(DP,{onScroll:p}),q(mh,{onResize:v})]),b=q("div",{class:u.value,style:h.value,ref:t.container===!0?void 0:i,tabindex:-1},E);return t.container===!0?q("div",{class:"q-layout-container overflow-hidden",ref:i},[q(mh,{onResize:g}),q("div",{class:"absolute-full",style:d.value},[q("div",{class:"scroll",style:f.value},[b])])]):b}}});function Vm(t){if(t===!1)return 0;if(t===!0||t===void 0)return 1;const e=parseInt(t,10);return isNaN(e)?0:e}var qa=av({name:"close-popup",beforeMount(t,{value:e}){const n={depth:Vm(e),handler(r){n.depth!==0&&setTimeout(()=>{const i=pP(t);i!==void 0&&mP(i,r,n.depth)})},handlerKey(r){ri(r,13)===!0&&n.handler(r)}};t.__qclosepopup=n,t.addEventListener("click",n.handler),t.addEventListener("keyup",n.handlerKey)},updated(t,{value:e,oldValue:n}){e!==n&&(t.__qclosepopup.depth=Vm(e))},beforeUnmount(t){const e=t.__qclosepopup;t.removeEventListener("click",e.handler),t.removeEventListener("keyup",e.handlerKey),delete t.__qclosepopup}});function LP(){return Ct(zy)}function VP(t){return rd()?(U_(t),!0):!1}function hr(t){return typeof t=="function"?t():St(t)}const jo=typeof window!="undefined"&&typeof document!="undefined";typeof WorkerGlobalScope!="undefined"&&globalThis instanceof WorkerGlobalScope;const ZU=t=>t!=null,MP=Object.prototype.toString,FP=t=>MP.call(t)==="[object Object]",ml=()=>{},e2=UP();function UP(){var t,e;return jo&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((e=window==null?void 0:window.navigator)==null?void 0:e.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function $P(t,e){function n(...r){return new Promise((i,s)=>{Promise.resolve(t(()=>e.apply(this,r),{fn:e,thisArg:this,args:r})).then(i).catch(s)})}return n}const Bv=t=>t();function BP(t=Bv){const e=ue(!0);function n(){e.value=!1}function r(){e.value=!0}const i=(...s)=>{e.value&&t(...s)};return{isActive:Wl(e),pause:n,resume:r,eventFilter:i}}const t2={mounted:"mounted",updated:"updated",unmounted:"unmounted"};function gh(t,e=!1,n="Timeout"){return new Promise((r,i)=>{setTimeout(e?()=>i(n):r,t)})}function qP(t){return t||We()}function n2(...t){if(t.length!==1)return ey(...t);const e=t[0];return typeof e=="function"?Wl(KI(()=>({get:e,set:ml}))):ue(e)}function jP(t,e,n={}){const{eventFilter:r=Bv,...i}=n;return ke(t,$P(r,e),i)}function zP(t,e,n={}){const{eventFilter:r,...i}=n,{eventFilter:s,pause:o,resume:a,isActive:l}=BP(r);return{stop:jP(t,e,{...i,eventFilter:s}),pause:o,resume:a,isActive:l}}function HP(t,e=!0,n){qP()?On(t,n):e?t():hn(t)}function _h(t,e=!1){function n(h,{flush:d="sync",deep:f=!1,timeout:p,throwOnTimeout:v}={}){let g=null;const _=[new Promise(T=>{g=ke(t,E=>{h(E)!==e&&(g==null||g(),T(E))},{flush:d,deep:f,immediate:!0})})];return p!=null&&_.push(gh(p,v).then(()=>hr(t)).finally(()=>g==null?void 0:g())),Promise.race(_)}function r(h,d){if(!Fe(h))return n(E=>E===h,d);const{flush:f="sync",deep:p=!1,timeout:v,throwOnTimeout:g}=d!=null?d:{};let w=null;const T=[new Promise(E=>{w=ke([t,h],([b,M])=>{e!==(b===M)&&(w==null||w(),E(b))},{flush:f,deep:p,immediate:!0})})];return v!=null&&T.push(gh(v,g).then(()=>hr(t)).finally(()=>(w==null||w(),hr(t)))),Promise.race(T)}function i(h){return n(d=>Boolean(d),h)}function s(h){return r(null,h)}function o(h){return r(void 0,h)}function a(h){return n(Number.isNaN,h)}function l(h,d){return n(f=>{const p=Array.from(f);return p.includes(h)||p.includes(hr(h))},d)}function c(h){return u(1,h)}function u(h=1,d){let f=-1;return n(()=>(f+=1,f>=h),d)}return Array.isArray(hr(t))?{toMatch:n,toContains:l,changed:c,changedTimes:u,get not(){return _h(t,!e)}}:{toMatch:n,toBe:r,toBeTruthy:i,toBeNull:s,toBeNaN:a,toBeUndefined:o,changed:c,changedTimes:u,get not(){return _h(t,!e)}}}function WP(t){return _h(t)}function KP(t){var e;const n=hr(t);return(e=n==null?void 0:n.$el)!=null?e:n}const gl=jo?window:void 0;jo&&window.document;jo&&window.navigator;jo&&window.location;function Mm(...t){let e,n,r,i;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,i]=t,e=gl):[e,n,r,i]=t,!e)return ml;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const s=[],o=()=>{s.forEach(u=>u()),s.length=0},a=(u,h,d,f)=>(u.addEventListener(h,d,f),()=>u.removeEventListener(h,d,f)),l=ke(()=>[KP(e),hr(i)],([u,h])=>{if(o(),!u)return;const d=FP(h)?{...h}:h;s.push(...n.flatMap(f=>r.map(p=>a(u,f,p,d))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return VP(c),c}function r2(t,e,n){const{immediate:r=!0,delay:i=0,onError:s=ml,onSuccess:o=ml,resetOnExecute:a=!0,shallow:l=!0,throwError:c}=n!=null?n:{},u=l?nl(e):ue(e),h=ue(!1),d=ue(!1),f=nl(void 0);async function p(w=0,..._){a&&(u.value=e),f.value=void 0,h.value=!1,d.value=!0,w>0&&await gh(w);const T=typeof t=="function"?t(..._):t;try{const E=await T;u.value=E,h.value=!0,o(E)}catch(E){if(f.value=E,s(E),c)throw E}finally{d.value=!1}return u.value}r&&p(i);const v={state:u,isReady:h,isLoading:d,error:f,execute:p};function g(){return new Promise((w,_)=>{WP(d).toBe(!1).then(()=>w(v)).catch(_)})}return{...v,then(w,_){return g().then(w,_)}}}const Ea=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Ta="__vueuse_ssr_handlers__",GP=QP();function QP(){return Ta in Ea||(Ea[Ta]=Ea[Ta]||{}),Ea[Ta]}function YP(t,e){return GP[t]||e}function XP(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const qv={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},Fm="vueuse-storage";function JP(t,e,n,r={}){var i;const{flush:s="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:h=gl,eventFilter:d,onError:f=R=>{console.error(R)},initOnMounted:p}=r,v=(u?nl:ue)(typeof e=="function"?e():e);if(!n)try{n=YP("getDefaultStorage",()=>{var R;return(R=gl)==null?void 0:R.localStorage})()}catch(R){f(R)}if(!n)return v;const g=hr(e),w=XP(g),_=(i=r.serializer)!=null?i:qv[w],{pause:T,resume:E}=zP(v,()=>b(v.value),{flush:s,deep:o,eventFilter:d});return h&&a&&HP(()=>{Mm(h,"storage",A),Mm(h,Fm,V),p&&A()}),p||A(),v;function b(R){try{if(R==null)n.removeItem(t);else{const U=_.write(R),G=n.getItem(t);G!==U&&(n.setItem(t,U),h&&h.dispatchEvent(new CustomEvent(Fm,{detail:{key:t,oldValue:G,newValue:U,storageArea:n}})))}}catch(U){f(U)}}function M(R){const U=R?R.newValue:n.getItem(t);if(U==null)return l&&g!=null&&n.setItem(t,_.write(g)),g;if(!R&&c){const G=_.read(U);return typeof c=="function"?c(G,g):w==="object"&&!Array.isArray(G)?{...g,...G}:G}else return typeof U!="string"?U:_.read(U)}function V(R){A(R.detail)}function A(R){if(!(R&&R.storageArea!==n)){if(R&&R.key==null){v.value=g;return}if(!(R&&R.key!==t)){T();try{(R==null?void 0:R.newValue)!==_.write(v.value)&&(v.value=M(R))}catch(U){f(U)}finally{R?hn(E):E()}}}}}function ZP(t,e,n={}){const{window:r=gl}=n;return JP(t,e,r==null?void 0:r.localStorage,n)}const jv=IR("auth",()=>{const t=ZP("auth/user",null,{serializer:qv.object}),e=O(()=>!!t.value),n=O(()=>{var s;return((s=t.value)==null?void 0:s.uid)||null});return{user:t,uid:n,setUser:s=>{t.value=s,s?t.value={uid:s.uid,photoURL:s.photoURL,displayName:s.displayName,email:s.email,emailVerified:s.emailVerified}:t.value=null},isAuthentication:e,hasOwnContent:s=>e.value?n.value===s:!1}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},eC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Hv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new tC;const d=s<<2|a>>4;if(r.push(d),c!==64){const f=a<<4&240|c>>2;if(r.push(f),h!==64){const p=c<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nC=function(t){const e=zv(t);return Hv.encodeByteArray(e,!0)},_l=function(t){return nC(t).replace(/\./g,"")},Wv=function(t){try{return Hv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=()=>rC().__FIREBASE_DEFAULTS__,sC=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},oC=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Wv(t[1]);return e&&JSON.parse(e)},Cd=()=>{try{return iC()||sC()||oC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Kv=t=>{var e,n;return(n=(e=Cd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Gv=t=>{const e=Kv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Qv=()=>{var t;return(t=Cd())===null||t===void 0?void 0:t.config},Yv=t=>{var e;return(e=Cd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[_l(JSON.stringify(n)),_l(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lC(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function Jv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uC(){const t=It();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Zv(){try{return typeof indexedDB=="object"}catch{return!1}}function ew(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function hC(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC="FirebaseError";class tn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=dC,Object.setPrototypeOf(this,tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mi.prototype.create)}}class mi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?fC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new tn(i,a,r)}}function fC(t,e){return t.replace(pC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const pC=/\{\$([^}]+)}/g;function mC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Um(s)&&Um(o)){if(!fo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Um(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ds(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ns(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function gC(t,e){const n=new _C(t,e);return n.subscribe.bind(n)}class _C{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");yC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=mu),i.error===void 0&&(i.error=mu),i.complete===void 0&&(i.complete=mu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function mu(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC=1e3,wC=2,EC=4*60*60*1e3,TC=.5;function $m(t,e=vC,n=wC){const r=e*Math.pow(n,t),i=Math.round(TC*r*(Math.random()-.5)*2);return Math.min(EC,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t){return t&&t._delegate?t._delegate:t}class Zt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new aC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(AC(e))try{this.getOrInitializeService({instanceIdentifier:Mr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mr){return this.instances.has(e)}getOptions(e=Mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mr){return this.component?this.component.multipleInstances?e:Mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bC(t){return t===Mr?void 0:t}function AC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new IC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const SC={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},PC=Te.INFO,CC={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},kC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=CC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oc{constructor(e){this.name=e,this._logLevel=PC,this._logHandler=kC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?SC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const xC=(t,e)=>e.some(n=>t instanceof n);let Bm,qm;function OC(){return Bm||(Bm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DC(){return qm||(qm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tw=new WeakMap,yh=new WeakMap,nw=new WeakMap,gu=new WeakMap,kd=new WeakMap;function NC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(vr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tw.set(n,t)}).catch(()=>{}),kd.set(e,t),e}function LC(t){if(yh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});yh.set(t,e)}let vh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function VC(t){vh=t(vh)}function MC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_u(this),e,...n);return nw.set(r,e.sort?e.sort():[e]),vr(r)}:DC().includes(t)?function(...e){return t.apply(_u(this),e),vr(tw.get(this))}:function(...e){return vr(t.apply(_u(this),e))}}function FC(t){return typeof t=="function"?MC(t):(t instanceof IDBTransaction&&LC(t),xC(t,OC())?new Proxy(t,vh):t)}function vr(t){if(t instanceof IDBRequest)return NC(t);if(gu.has(t))return gu.get(t);const e=FC(t);return e!==t&&(gu.set(t,e),kd.set(e,t)),e}const _u=t=>kd.get(t);function UC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=vr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(vr(o.result),l.oldVersion,l.newVersion,vr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const $C=["get","getKey","getAll","getAllKeys","count"],BC=["put","add","delete","clear"],yu=new Map;function jm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(yu.get(e))return yu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=BC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||$C.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return yu.set(e,s),s}VC(t=>({...t,get:(e,n,r)=>jm(e,n)||t.get(e,n,r),has:(e,n)=>!!jm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function jC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wh="@firebase/app",zm="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=new oc("@firebase/app"),zC="@firebase/app-compat",HC="@firebase/analytics-compat",WC="@firebase/analytics",KC="@firebase/app-check-compat",GC="@firebase/app-check",QC="@firebase/auth",YC="@firebase/auth-compat",XC="@firebase/database",JC="@firebase/database-compat",ZC="@firebase/functions",ek="@firebase/functions-compat",tk="@firebase/installations",nk="@firebase/installations-compat",rk="@firebase/messaging",ik="@firebase/messaging-compat",sk="@firebase/performance",ok="@firebase/performance-compat",ak="@firebase/remote-config",lk="@firebase/remote-config-compat",ck="@firebase/storage",uk="@firebase/storage-compat",hk="@firebase/firestore",dk="@firebase/firestore-compat",fk="firebase",pk="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh="[DEFAULT]",mk={[wh]:"fire-core",[zC]:"fire-core-compat",[WC]:"fire-analytics",[HC]:"fire-analytics-compat",[GC]:"fire-app-check",[KC]:"fire-app-check-compat",[QC]:"fire-auth",[YC]:"fire-auth-compat",[XC]:"fire-rtdb",[JC]:"fire-rtdb-compat",[ZC]:"fire-fn",[ek]:"fire-fn-compat",[tk]:"fire-iid",[nk]:"fire-iid-compat",[rk]:"fire-fcm",[ik]:"fire-fcm-compat",[sk]:"fire-perf",[ok]:"fire-perf-compat",[ak]:"fire-rc",[lk]:"fire-rc-compat",[ck]:"fire-gcs",[uk]:"fire-gcs-compat",[hk]:"fire-fst",[dk]:"fire-fst-compat","fire-js":"fire-js",[fk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl=new Map,Th=new Map;function gk(t,e){try{t.container.addComponent(e)}catch(n){ii.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fn(t){const e=t.name;if(Th.has(e))return ii.debug(`There were multiple attempts to register component ${e}.`),!1;Th.set(e,t);for(const n of yl.values())gk(n,t);return!0}function Cr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},wr=new mi("app","Firebase",_k);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=pk;function rw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Eh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw wr.create("bad-app-name",{appName:String(i)});if(n||(n=Qv()),!n)throw wr.create("no-options");const s=yl.get(i);if(s){if(fo(n,s.options)&&fo(r,s.config))return s;throw wr.create("duplicate-app",{appName:i})}const o=new RC(i);for(const l of Th.values())o.addComponent(l);const a=new yk(n,r,o);return yl.set(i,a),a}function ac(t=Eh){const e=yl.get(t);if(!e&&t===Eh&&Qv())return rw();if(!e)throw wr.create("no-app",{appName:t});return e}function Lt(t,e,n){var r;let i=(r=mk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ii.warn(a.join(" "));return}fn(new Zt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk="firebase-heartbeat-database",wk=1,po="firebase-heartbeat-store";let vu=null;function iw(){return vu||(vu=UC(vk,wk,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(po)}}}).catch(t=>{throw wr.create("idb-open",{originalErrorMessage:t.message})})),vu}async function Ek(t){try{return await(await iw()).transaction(po).objectStore(po).get(sw(t))}catch(e){if(e instanceof tn)ii.warn(e.message);else{const n=wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ii.warn(n.message)}}}async function Hm(t,e){try{const r=(await iw()).transaction(po,"readwrite");await r.objectStore(po).put(e,sw(t)),await r.done}catch(n){if(n instanceof tn)ii.warn(n.message);else{const r=wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ii.warn(r.message)}}}function sw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk=1024,Ik=30*24*60*60*1e3;class bk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Rk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Wm();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Ik}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wm(),{heartbeatsToSend:r,unsentEntries:i}=Ak(this._heartbeatsCache.heartbeats),s=_l(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Wm(){return new Date().toISOString().substring(0,10)}function Ak(t,e=Tk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Km(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Km(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Rk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zv()?ew().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ek(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Km(t){return _l(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(t){fn(new Zt("platform-logger",e=>new qC(e),"PRIVATE")),fn(new Zt("heartbeat",e=>new bk(e),"PRIVATE")),Lt(wh,zm,t),Lt(wh,zm,"esm2017"),Lt("fire-js","")}Sk("");function xd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function ow(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Pk=ow,aw=new mi("auth","Firebase",ow());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl=new oc("@firebase/auth");function Ck(t,...e){vl.logLevel<=Te.WARN&&vl.warn(`Auth (${gi}): ${t}`,...e)}function ja(t,...e){vl.logLevel<=Te.ERROR&&vl.error(`Auth (${gi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(t,...e){throw Od(t,...e)}function Sn(t,...e){return Od(t,...e)}function lw(t,e,n){const r=Object.assign(Object.assign({},Pk()),{[e]:n});return new mi("auth","Firebase",r).create(e,{appName:t.name})}function kk(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&en(t,"argument-error"),lw(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Od(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return aw.create(t,...e)}function ne(t,e,...n){if(!t)throw Od(e,...n)}function Un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ja(e),new Error(e)}function Wn(t,e){t||Un(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function xk(){return Gm()==="http:"||Gm()==="https:"}function Gm(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xk()||Jv()||"connection"in navigator)?navigator.onLine:!0}function Dk(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,n){this.shortDelay=e,this.longDelay=n,Wn(n>e,"Short delay should be less than long delay!"),this.isMobile=lC()||cC()}get(){return Ok()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(t,e){Wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;Un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;Un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;Un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk=new Ho(3e4,6e4);function Jn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function yn(t,e,n,r,i={}){return uw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=zo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),cw.fetch()(hw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function uw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Nk),e);try{const i=new Mk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ia(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ia(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ia(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ia(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw lw(t,u,c);en(t,u)}}catch(i){if(i instanceof tn)throw i;en(t,"network-request-failed",{message:String(i)})}}async function Wo(t,e,n,r,i={}){const s=await yn(t,e,n,r,i);return"mfaPendingCredential"in s&&en(t,"multi-factor-auth-required",{_serverResponse:s}),s}function hw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Dd(t.config,i):`${t.config.apiScheme}://${i}`}function Vk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Mk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Sn(this.auth,"network-request-failed")),Lk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ia(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Sn(t,e,r);return i.customData._tokenResponse=n,i}function Qm(t){return t!==void 0&&t.enterprise!==void 0}class Fk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Vk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Uk(t,e){return yn(t,"GET","/v2/recaptchaConfig",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $k(t,e){return yn(t,"POST","/v1/accounts:delete",e)}async function Bk(t,e){return yn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qk(t,e=!1){const n=xe(t),r=await n.getIdToken(e),i=Nd(r);ne(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Gs(wu(i.auth_time)),issuedAtTime:Gs(wu(i.iat)),expirationTime:Gs(wu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function wu(t){return Number(t)*1e3}function Nd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ja("JWT malformed, contained fewer than 3 sections"),null;try{const i=Wv(n);return i?JSON.parse(i):(ja("Failed to decode base64 JWT payload"),null)}catch(i){return ja("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function jk(t){const e=Nd(t);return ne(e,"internal-error"),ne(typeof e.exp!="undefined","internal-error"),ne(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function si(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof tn&&zk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gs(this.lastLoginAt),this.creationTime=Gs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await si(t,Bk(n,{idToken:r}));ne(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Gk(s.providerUserInfo):[],a=Kk(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new dw(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Wk(t){const e=xe(t);await wl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Kk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Gk(t){return t.map(e=>{var{providerId:n}=e,r=xd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qk(t,e){const n=await uw(t,{},async()=>{const r=zo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=hw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",cw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Yk(t,e){return yn(t,"POST","/v2/accounts:revokeToken",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken!="undefined","internal-error"),ne(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):jk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ne(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Qk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new mo;return r&&(ne(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ne(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ne(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mo,this.toJSON())}_performRefresh(){return Un("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(t,e){ne(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Zr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=xd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new dw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await si(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qk(this,e)}reload(){return Wk(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Zr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await wl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await si(this,$k(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,g=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:T,emailVerified:E,isAnonymous:b,providerData:M,stsTokenManager:V}=n;ne(T&&V,e,"internal-error");const A=mo.fromJSON(this.name,V);ne(typeof T=="string",e,"internal-error"),ir(h,e.name),ir(d,e.name),ne(typeof E=="boolean",e,"internal-error"),ne(typeof b=="boolean",e,"internal-error"),ir(f,e.name),ir(p,e.name),ir(v,e.name),ir(g,e.name),ir(w,e.name),ir(_,e.name);const R=new Zr({uid:T,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:b,photoURL:p,phoneNumber:f,tenantId:v,stsTokenManager:A,createdAt:w,lastLoginAt:_});return M&&Array.isArray(M)&&(R.providerData=M.map(U=>Object.assign({},U))),g&&(R._redirectEventId=g),R}static async _fromIdTokenResponse(e,n,r=!1){const i=new mo;i.updateFromServerResponse(n);const s=new Zr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await wl(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym=new Map;function $n(t){Wn(t instanceof Function,"Expected a class definition");let e=Ym.get(t);return e?(Wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ym.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}fw.type="NONE";const Xm=fw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(t,e,n){return`firebase:${t}:${e}:${n}`}class ji{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=za(this.userKey,i.apiKey,s),this.fullPersistenceKey=za("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ji($n(Xm),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||$n(Xm);const o=za(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Zr._fromJSON(e,u);c!==s&&(a=h),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ji(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ji(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yw(e))return"Blackberry";if(vw(e))return"Webos";if(Ld(e))return"Safari";if((e.includes("chrome/")||mw(e))&&!e.includes("edge/"))return"Chrome";if(_w(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function pw(t=It()){return/firefox\//i.test(t)}function Ld(t=It()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mw(t=It()){return/crios\//i.test(t)}function gw(t=It()){return/iemobile/i.test(t)}function _w(t=It()){return/android/i.test(t)}function yw(t=It()){return/blackberry/i.test(t)}function vw(t=It()){return/webos/i.test(t)}function lc(t=It()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Xk(t=It()){var e;return lc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Jk(){return uC()&&document.documentMode===10}function ww(t=It()){return lc(t)||_w(t)||vw(t)||yw(t)||/windows phone/i.test(t)||gw(t)}function Zk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(t,e=[]){let n;switch(t){case"Browser":n=Jm(It());break;case"Worker":n=`${Jm(It())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t1(t,e={}){return yn(t,"GET","/v2/passwordPolicy",Jn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1=6;class r1{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:n1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zm(this),this.idTokenSubscription=new Zm(this),this.beforeStateQueue=new e1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=aw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$n(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ji.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?xe(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence($n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await t1(this),n=new r1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new mi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Yk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$n(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await ji.create(this,[$n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ew(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Ck(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Zn(t){return xe(t)}class Zm{constructor(e){this.auth=e,this.observer=null,this.addObserver=gC(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Tw(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Sn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",s1().appendChild(r)})}function o1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const a1="https://www.google.com/recaptcha/enterprise.js?render=",l1="recaptcha-enterprise",c1="NO_RECAPTCHA";class u1{constructor(e){this.type=l1,this.auth=Zn(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Uk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Fk(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Qm(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(c1)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Qm(window.grecaptcha))i(a,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Tw(a1+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function eg(t,e,n,r=!1){const i=new u1(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function El(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await eg(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await eg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h1(t,e){const n=Cr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(fo(s,e!=null?e:{}))return i;en(i,"already-initialized")}return n.initialize({options:e})}function d1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map($n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function f1(t,e,n){const r=Zn(t);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Iw(e),{host:o,port:a}=p1(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||m1()}function Iw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function p1(t){const e=Iw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:tg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:tg(o)}}}function tg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function m1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Un("not implemented")}_getIdTokenResponse(e){return Un("not implemented")}_linkToIdToken(e,n){return Un("not implemented")}_getReauthenticationResolver(e){return Un("not implemented")}}async function g1(t,e){return yn(t,"POST","/v1/accounts:update",e)}async function _1(t,e){return yn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y1(t,e){return Wo(t,"POST","/v1/accounts:signInWithPassword",Jn(t,e))}async function bw(t,e){return yn(t,"POST","/v1/accounts:sendOobCode",Jn(t,e))}async function v1(t,e){return bw(t,e)}async function w1(t,e){return bw(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E1(t,e){return Wo(t,"POST","/v1/accounts:signInWithEmailLink",Jn(t,e))}async function T1(t,e){return Wo(t,"POST","/v1/accounts:signInWithEmailLink",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go extends Vd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new go(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new go(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return El(e,n,"signInWithPassword",y1);case"emailLink":return E1(e,{email:this._email,oobCode:this._password});default:en(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return El(e,r,"signUpPassword",_1);case"emailLink":return T1(e,{idToken:n,email:this._email,oobCode:this._password});default:en(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zi(t,e){return Wo(t,"POST","/v1/accounts:signInWithIdp",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1="http://localhost";class oi extends Vd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new oi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):en("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=xd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new oi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zi(e,n)}buildRequest(){const e={requestUri:I1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function A1(t){const e=Ds(Ns(t)).link,n=e?Ds(Ns(e)).deep_link_id:null,r=Ds(Ns(t)).deep_link_id;return(r?Ds(Ns(r)).link:null)||r||n||e||t}class Md{constructor(e){var n,r,i,s,o,a;const l=Ds(Ns(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=b1((i=l.mode)!==null&&i!==void 0?i:null);ne(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=A1(e);try{return new Md(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.providerId=ms.PROVIDER_ID}static credential(e,n){return go._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Md.parseLink(n);return ne(r,"argument-error"),go._fromEmailAndCode(e,r.code,r.tenantId)}}ms.PROVIDER_ID="password";ms.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ms.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko extends Fd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Ko{constructor(){super("facebook.com")}static credential(e){return oi._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.FACEBOOK_SIGN_IN_METHOD="facebook.com";dr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Ko{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return oi._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Fn.credential(n,r)}catch{return null}}}Fn.GOOGLE_SIGN_IN_METHOD="google.com";Fn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends Ko{constructor(){super("github.com")}static credential(e){return oi._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.GITHUB_SIGN_IN_METHOD="github.com";fr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends Ko{constructor(){super("twitter.com")}static credential(e,n){return oi._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return pr.credential(n,r)}catch{return null}}}pr.TWITTER_SIGN_IN_METHOD="twitter.com";pr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R1(t,e){return Wo(t,"POST","/v1/accounts:signUp",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Zr._fromIdTokenResponse(e,r,i),o=ng(r);return new ai({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ng(r);return new ai({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ng(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl extends tn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Tl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Tl(e,n,r,i)}}function Aw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Tl._fromErrorAndOperation(t,s,e,r):s})}async function S1(t,e,n=!1){const r=await si(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ai._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P1(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await si(t,Aw(r,i,e,t),n);ne(s.idToken,r,"internal-error");const o=Nd(s.idToken);ne(o,r,"internal-error");const{sub:a}=o;return ne(t.uid===a,r,"user-mismatch"),ai._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&en(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rw(t,e,n=!1){const r="signIn",i=await Aw(t,r,e),s=await ai._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function C1(t,e){return Rw(Zn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(t,e,n){var r;ne(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),ne(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(ne(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(ne(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pw(t){const e=Zn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function k1(t,e,n){const r=Zn(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Sw(r,i,n),await El(r,i,"getOobCode",w1)}async function x1(t,e,n){const r=Zn(t),o=await El(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",R1).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Pw(t),l}),a=await ai._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function O1(t,e,n){return C1(xe(t),ms.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Pw(t),r})}async function D1(t,e){const n=xe(t),r=await t.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};e&&Sw(n.auth,i,e);const{email:s}=await v1(n.auth,i);s!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N1(t,e){return yn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cw(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=xe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await si(r,N1(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function L1(t,e){return V1(xe(t),null,e)}async function V1(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await si(t,g1(r,s));await t._updateTokensIfNecessary(o,!0)}function M1(t,e,n,r){return xe(t).onIdTokenChanged(e,n,r)}function F1(t,e,n){return xe(t).beforeAuthStateChanged(e,n)}function U1(t,e,n,r){return xe(t).onAuthStateChanged(e,n,r)}function $1(t){return xe(t).signOut()}const Il="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Il,"1"),this.storage.removeItem(Il),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B1(){const t=It();return Ld(t)||lc(t)}const q1=1e3,j1=10;class xw extends kw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=B1()&&Zk(),this.fallbackToPolling=ww(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Jk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,j1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},q1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xw.type="LOCAL";const z1=xw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow extends kw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ow.type="SESSION";const Dw=Ow;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new cc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await H1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Ud("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(){return window}function K1(t){Pn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(){return typeof Pn().WorkerGlobalScope!="undefined"&&typeof Pn().importScripts=="function"}async function G1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Q1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Y1(){return Nw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw="firebaseLocalStorageDb",X1=1,bl="firebaseLocalStorage",Vw="fbase_key";class Go{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function uc(t,e){return t.transaction([bl],e?"readwrite":"readonly").objectStore(bl)}function J1(){const t=indexedDB.deleteDatabase(Lw);return new Go(t).toPromise()}function bh(){const t=indexedDB.open(Lw,X1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(bl,{keyPath:Vw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(bl)?e(r):(r.close(),await J1(),e(await bh()))})})}async function rg(t,e,n){const r=uc(t,!0).put({[Vw]:e,value:n});return new Go(r).toPromise()}async function Z1(t,e){const n=uc(t,!1).get(e),r=await new Go(n).toPromise();return r===void 0?null:r.value}function ig(t,e){const n=uc(t,!0).delete(e);return new Go(n).toPromise()}const ex=800,tx=3;class Mw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>tx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cc._getInstance(Y1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await G1(),!this.activeServiceWorker)return;this.sender=new W1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Q1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bh();return await rg(e,Il,"1"),await ig(e,Il),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>rg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Z1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ig(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=uc(i,!1).getAll();return new Go(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ex)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mw.type="LOCAL";const nx=Mw;new Ho(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(t,e){return e?$n(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d extends Vd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rx(t){return Rw(t.auth,new $d(t),t.bypassAuthState)}function ix(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),P1(n,new $d(t),t.bypassAuthState)}async function sx(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),S1(n,new $d(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rx;case"linkViaPopup":case"linkViaRedirect":return sx;case"reauthViaPopup":case"reauthViaRedirect":return ix;default:en(this.auth,"internal-error")}}resolve(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox=new Ho(2e3,1e4);async function ax(t,e,n){const r=Zn(t);kk(t,e,Fd);const i=Fw(r,n);return new jr(r,"signInViaPopup",e,i).executeNotNull()}class jr extends Uw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,jr.currentPopupAction&&jr.currentPopupAction.cancel(),jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){Wn(this.filter.length===1,"Popup operations only handle one event");const e=Ud();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ox.get())};e()}}jr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx="pendingRedirect",Ha=new Map;class cx extends Uw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ha.get(this.auth._key());if(!e){try{const r=await ux(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ha.set(this.auth._key(),e)}return this.bypassAuthState||Ha.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ux(t,e){const n=fx(e),r=dx(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function hx(t,e){Ha.set(t._key(),e)}function dx(t){return $n(t._redirectPersistence)}function fx(t){return za(lx,t.config.apiKey,t.name)}async function px(t,e,n=!1){const r=Zn(t),i=Fw(r,e),o=await new cx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx=10*60*1e3;class gx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_x(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!$w(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Sn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mx&&this.cachedEventUids.clear(),this.cachedEventUids.has(sg(e))}saveEventToCache(e){this.cachedEventUids.add(sg(e)),this.lastProcessedEventTime=Date.now()}}function sg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $w({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _x(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $w(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yx(t,e={}){return yn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wx=/^https?/;async function Ex(t){if(t.config.emulator)return;const{authorizedDomains:e}=await yx(t);for(const n of e)try{if(Tx(n))return}catch{}en(t,"unauthorized-domain")}function Tx(t){const e=Ih(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!wx.test(n))return!1;if(vx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ix=new Ho(3e4,6e4);function og(){const t=Pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function bx(t){return new Promise((e,n)=>{var r,i,s;function o(){og(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{og(),n(Sn(t,"network-request-failed"))},timeout:Ix.get()})}if(!((i=(r=Pn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Pn().gapi)===null||s===void 0)&&s.load)o();else{const a=o1("iframefcb");return Pn()[a]=()=>{gapi.load?o():n(Sn(t,"network-request-failed"))},Tw(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Wa=null,e})}let Wa=null;function Ax(t){return Wa=Wa||bx(t),Wa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rx=new Ho(5e3,15e3),Sx="__/auth/iframe",Px="emulator/auth/iframe",Cx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xx(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Dd(e,Px):`https://${t.config.authDomain}/${Sx}`,r={apiKey:e.apiKey,appName:t.name,v:gi},i=kx.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${zo(r).slice(1)}`}async function Ox(t){const e=await Ax(t),n=Pn().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:xx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Cx,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Sn(t,"network-request-failed"),a=Pn().setTimeout(()=>{s(o)},Rx.get());function l(){Pn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Nx=500,Lx=600,Vx="_blank",Mx="http://localhost";class ag{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Fx(t,e,n,r=Nx,i=Lx){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Dx),{width:r.toString(),height:i.toString(),top:s,left:o}),c=It().toLowerCase();n&&(a=mw(c)?Vx:n),pw(c)&&(e=e||Mx,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(Xk(c)&&a!=="_self")return Ux(e||"",a),new ag(null);const h=window.open(e||"",a,u);ne(h,t,"popup-blocked");try{h.focus()}catch{}return new ag(h)}function Ux(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $x="__/auth/handler",Bx="emulator/auth/handler",qx=encodeURIComponent("fac");async function lg(t,e,n,r,i,s){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:gi,eventId:i};if(e instanceof Fd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(e instanceof Ko){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${qx}=${encodeURIComponent(l)}`:"";return`${jx(t)}?${zo(a).slice(1)}${c}`}function jx({config:t}){return t.emulator?Dd(t,Bx):`https://${t.authDomain}/${$x}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu="webStorageSupport";class zx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dw,this._completeRedirectFn=px,this._overrideRedirectResult=hx}async _openPopup(e,n,r,i){var s;Wn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await lg(e,n,r,Ih(),i);return Fx(e,o,Ud())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await lg(e,n,r,Ih(),i);return K1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Wn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ox(e),r=new gx(e);return n.register("authEvent",i=>(ne(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Eu,{type:Eu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Eu];o!==void 0&&n(!!o),en(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ex(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ww()||Ld()||lc()}}const Hx=zx;var cg="@firebase/auth",ug="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Gx(t){fn(new Zt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ew(t)},c=new i1(r,i,s,l);return d1(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fn(new Zt("auth-internal",e=>{const n=Zn(e.getProvider("auth").getImmediate());return(r=>new Wx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Lt(cg,ug,Kx(t)),Lt(cg,ug,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx=5*60,Yx=Yv("authIdTokenMaxAge")||Qx;let hg=null;const Xx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Yx)return;const i=n==null?void 0:n.token;hg!==i&&(hg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Jx(t=ac()){const e=Cr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=h1(t,{popupRedirectResolver:Hx,persistence:[nx,z1,Dw]}),r=Yv("authTokenSyncURL");if(r){const s=Xx(r);F1(n,s,()=>s(n.currentUser)),M1(n,o=>s(o))}const i=Kv("auth");return i&&f1(n,`http://${i}`),n}Gx("Browser");var Zx=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},H,Bd=Bd||{},ae=Zx||self;function hc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Qo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function eO(t){return Object.prototype.hasOwnProperty.call(t,Tu)&&t[Tu]||(t[Tu]=++tO)}var Tu="closure_uid_"+(1e9*Math.random()>>>0),tO=0;function nO(t,e,n){return t.call.apply(t.bind,arguments)}function rO(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Et(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Et=nO:Et=rO,Et.apply(null,arguments)}function ba(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function at(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function kr(){this.s=this.s,this.o=this.o}var iO=0;kr.prototype.s=!1;kr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),iO!=0)&&eO(this)};kr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Bw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function qd(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function dg(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(hc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Tt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Tt.prototype.h=function(){this.defaultPrevented=!0};var sO=function(){if(!ae.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};ae.addEventListener("test",n,e),ae.removeEventListener("test",n,e)}catch{}return t}();function _o(t){return/^[\s\xa0]*$/.test(t)}function dc(){var t=ae.navigator;return t&&(t=t.userAgent)?t:""}function In(t){return dc().indexOf(t)!=-1}function jd(t){return jd[" "](t),t}jd[" "]=function(){};function oO(t,e){var n=JO;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var aO=In("Opera"),is=In("Trident")||In("MSIE"),qw=In("Edge"),Ah=qw||is,jw=In("Gecko")&&!(dc().toLowerCase().indexOf("webkit")!=-1&&!In("Edge"))&&!(In("Trident")||In("MSIE"))&&!In("Edge"),lO=dc().toLowerCase().indexOf("webkit")!=-1&&!In("Edge");function zw(){var t=ae.document;return t?t.documentMode:void 0}var Rh;e:{var Iu="",bu=function(){var t=dc();if(jw)return/rv:([^\);]+)(\)|;)/.exec(t);if(qw)return/Edge\/([\d\.]+)/.exec(t);if(is)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(lO)return/WebKit\/(\S+)/.exec(t);if(aO)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(bu&&(Iu=bu?bu[1]:""),is){var Au=zw();if(Au!=null&&Au>parseFloat(Iu)){Rh=String(Au);break e}}Rh=Iu}var Sh;if(ae.document&&is){var fg=zw();Sh=fg||parseInt(Rh,10)||void 0}else Sh=void 0;var cO=Sh;function yo(t,e){if(Tt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(jw){e:{try{jd(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:uO[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&yo.$.h.call(this)}}at(yo,Tt);var uO={2:"touch",3:"pen",4:"mouse"};yo.prototype.h=function(){yo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Yo="closure_listenable_"+(1e6*Math.random()|0),hO=0;function dO(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++hO,this.fa=this.ia=!1}function fc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function zd(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function fO(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Hw(t){const e={};for(const n in t)e[n]=t[n];return e}const pg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ww(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<pg.length;s++)n=pg[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function pc(t){this.src=t,this.g={},this.h=0}pc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Ch(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new dO(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Ph(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Bw(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(fc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ch(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Hd="closure_lm_"+(1e6*Math.random()|0),Ru={};function Kw(t,e,n,r,i){if(r&&r.once)return Qw(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Kw(t,e[s],n,r,i);return null}return n=Gd(n),t&&t[Yo]?t.O(e,n,Qo(r)?!!r.capture:!!r,i):Gw(t,e,n,!1,r,i)}function Gw(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Qo(i)?!!i.capture:!!i,a=Kd(t);if(a||(t[Hd]=a=new pc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=pO(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)sO||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Xw(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function pO(){function t(n){return e.call(t.src,t.listener,n)}const e=mO;return t}function Qw(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Qw(t,e[s],n,r,i);return null}return n=Gd(n),t&&t[Yo]?t.P(e,n,Qo(r)?!!r.capture:!!r,i):Gw(t,e,n,!0,r,i)}function Yw(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Yw(t,e[s],n,r,i);else r=Qo(r)?!!r.capture:!!r,n=Gd(n),t&&t[Yo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Ch(s,n,r,i),-1<n&&(fc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Kd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ch(e,n,r,i)),(n=-1<t?e[t]:null)&&Wd(n))}function Wd(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Yo])Ph(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Xw(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Kd(e))?(Ph(n,t),n.h==0&&(n.src=null,e[Hd]=null)):fc(t)}}}function Xw(t){return t in Ru?Ru[t]:Ru[t]="on"+t}function mO(t,e){if(t.fa)t=!0;else{e=new yo(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Wd(t),t=n.call(r,e)}return t}function Kd(t){return t=t[Hd],t instanceof pc?t:null}var Su="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gd(t){return typeof t=="function"?t:(t[Su]||(t[Su]=function(e){return t.handleEvent(e)}),t[Su])}function ot(){kr.call(this),this.i=new pc(this),this.S=this,this.J=null}at(ot,kr);ot.prototype[Yo]=!0;ot.prototype.removeEventListener=function(t,e,n,r){Yw(this,t,e,n,r)};function ft(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Tt(e,t);else if(e instanceof Tt)e.target=e.target||t;else{var i=e;e=new Tt(r,t),Ww(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Aa(o,r,!0,e)&&i}if(o=e.g=t,i=Aa(o,r,!0,e)&&i,i=Aa(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Aa(o,r,!1,e)&&i}ot.prototype.N=function(){if(ot.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)fc(n[r]);delete t.g[e],t.h--}}this.J=null};ot.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ot.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Aa(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Ph(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Qd=ae.JSON.stringify;class gO{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function _O(){var t=Yd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class yO{constructor(){this.h=this.g=null}add(e,n){const r=Jw.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Jw=new gO(()=>new vO,t=>t.reset());class vO{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function wO(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function EO(t){ae.setTimeout(()=>{throw t},0)}let vo,wo=!1,Yd=new yO,Zw=()=>{const t=ae.Promise.resolve(void 0);vo=()=>{t.then(TO)}};var TO=()=>{for(var t;t=_O();){try{t.h.call(t.g)}catch(n){EO(n)}var e=Jw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}wo=!1};function mc(t,e){ot.call(this),this.h=t||1,this.g=e||ae,this.j=Et(this.qb,this),this.l=Date.now()}at(mc,ot);H=mc.prototype;H.ga=!1;H.T=null;H.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ft(this,"tick"),this.ga&&(Xd(this),this.start()))}};H.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Xd(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}H.N=function(){mc.$.N.call(this),Xd(this),delete this.g};function Jd(t,e,n){if(typeof t=="function")n&&(t=Et(t,n));else if(t&&typeof t.handleEvent=="function")t=Et(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ae.setTimeout(t,e||0)}function eE(t){t.g=Jd(()=>{t.g=null,t.i&&(t.i=!1,eE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class IO extends kr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:eE(this)}N(){super.N(),this.g&&(ae.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Eo(t){kr.call(this),this.h=t,this.g={}}at(Eo,kr);var mg=[];function tE(t,e,n,r){Array.isArray(n)||(n&&(mg[0]=n.toString()),n=mg);for(var i=0;i<n.length;i++){var s=Kw(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function nE(t){zd(t.g,function(e,n){this.g.hasOwnProperty(n)&&Wd(e)},t),t.g={}}Eo.prototype.N=function(){Eo.$.N.call(this),nE(this)};Eo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function gc(){this.g=!0}gc.prototype.Ea=function(){this.g=!1};function bO(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function AO(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Li(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+SO(t,n)+(r?" "+r:"")})}function RO(t,e){t.info(function(){return"TIMEOUT: "+e})}gc.prototype.info=function(){};function SO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Qd(n)}catch{return e}}var _i={},gg=null;function _c(){return gg=gg||new ot}_i.Ta="serverreachability";function rE(t){Tt.call(this,_i.Ta,t)}at(rE,Tt);function To(t){const e=_c();ft(e,new rE(e))}_i.STAT_EVENT="statevent";function iE(t,e){Tt.call(this,_i.STAT_EVENT,t),this.stat=e}at(iE,Tt);function Pt(t){const e=_c();ft(e,new iE(e,t))}_i.Ua="timingevent";function sE(t,e){Tt.call(this,_i.Ua,t),this.size=e}at(sE,Tt);function Xo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ae.setTimeout(function(){t()},e)}var yc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},oE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Zd(){}Zd.prototype.h=null;function _g(t){return t.h||(t.h=t.i())}function aE(){}var Jo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ef(){Tt.call(this,"d")}at(ef,Tt);function tf(){Tt.call(this,"c")}at(tf,Tt);var kh;function vc(){}at(vc,Zd);vc.prototype.g=function(){return new XMLHttpRequest};vc.prototype.i=function(){return{}};kh=new vc;function Zo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Eo(this),this.P=PO,t=Ah?125:void 0,this.V=new mc(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new lE}function lE(){this.i=null,this.g="",this.h=!1}var PO=45e3,cE={},xh={};H=Zo.prototype;H.setTimeout=function(t){this.P=t};function Oh(t,e,n){t.L=1,t.A=Ec(Kn(e)),t.u=n,t.S=!0,uE(t,null)}function uE(t,e){t.G=Date.now(),ea(t),t.B=Kn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),yE(n.i,"t",r),t.o=0,n=t.l.J,t.h=new lE,t.g=UE(t.l,n?e:null,!t.u),0<t.O&&(t.M=new IO(Et(t.Pa,t,t.g),t.O)),tE(t.U,t.g,"readystatechange",t.nb),e=t.I?Hw(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),To(),bO(t.j,t.v,t.B,t.m,t.W,t.u)}H.nb=function(t){t=t.target;const e=this.M;e&&bn(t)==3?e.l():this.Pa(t)};H.Pa=function(t){try{if(t==this.g)e:{const u=bn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Ah||this.g&&(this.h.h||this.g.ja()||Eg(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?To(3):To(2)),wc(this);var n=this.g.da();this.ca=n;t:if(hE(this)){var r=Eg(this.g);t="";var i=r.length,s=bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){zr(this),Qs(this);var o="";break t}this.h.i=new ae.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,AO(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_o(a)){var c=a;break t}}c=null}if(n=c)Li(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Dh(this,n);else{this.i=!1,this.s=3,Pt(12),zr(this),Qs(this);break e}}this.S?(dE(this,u,o),Ah&&this.i&&u==3&&(tE(this.U,this.V,"tick",this.mb),this.V.start())):(Li(this.j,this.m,o,null),Dh(this,o)),u==4&&zr(this),this.i&&!this.J&&(u==4?LE(this.l,this):(this.i=!1,ea(this)))}else QO(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),zr(this),Qs(this)}}}catch{}finally{}};function hE(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function dE(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=CO(t,n),i==xh){e==4&&(t.s=4,Pt(14),r=!1),Li(t.j,t.m,null,"[Incomplete Response]");break}else if(i==cE){t.s=4,Pt(15),Li(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Li(t.j,t.m,i,null),Dh(t,i);hE(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Pt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),lf(e),e.M=!0,Pt(11))):(Li(t.j,t.m,n,"[Invalid Chunked Response]"),zr(t),Qs(t))}H.mb=function(){if(this.g){var t=bn(this.g),e=this.g.ja();this.o<e.length&&(wc(this),dE(this,t,e),this.i&&t!=4&&ea(this))}};function CO(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?xh:(n=Number(e.substring(n,r)),isNaN(n)?cE:(r+=1,r+n>e.length?xh:(e=e.slice(r,r+n),t.o=r+n,e)))}H.cancel=function(){this.J=!0,zr(this)};function ea(t){t.Y=Date.now()+t.P,fE(t,t.P)}function fE(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Xo(Et(t.lb,t),e)}function wc(t){t.C&&(ae.clearTimeout(t.C),t.C=null)}H.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(RO(this.j,this.B),this.L!=2&&(To(),Pt(17)),zr(this),this.s=2,Qs(this)):fE(this,this.Y-t)};function Qs(t){t.l.H==0||t.J||LE(t.l,t)}function zr(t){wc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Xd(t.V),nE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Dh(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Nh(n.i,t))){if(!t.K&&Nh(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Sl(n),Ac(n);else break e;af(n),Pt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Xo(Et(n.ib,n),6e3));if(1>=EE(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Hr(n,11)}else if((t.K||n.g==t)&&Sl(n),!_o(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=r.i;s.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(nf(s,s.h),s.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,Me(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=FE(r,r.J?r.pa:null,r.Y),o.K){TE(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(wc(a),ea(a)),r.g=o}else DE(r);0<n.j.length&&Rc(n)}else c[0]!="stop"&&c[0]!="close"||Hr(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Hr(n,7):of(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}To(4)}catch{}}function kO(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map!="undefined"&&t instanceof Map||typeof Set!="undefined"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(hc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function xO(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map!="undefined"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set!="undefined"&&t instanceof Set)){if(hc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function pE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(hc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=xO(t),r=kO(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var mE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function OO(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ei(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ei){this.h=t.h,Al(this,t.j),this.s=t.s,this.g=t.g,Rl(this,t.m),this.l=t.l;var e=t.i,n=new Io;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),yg(this,n),this.o=t.o}else t&&(e=String(t).match(mE))?(this.h=!1,Al(this,e[1]||"",!0),this.s=Ls(e[2]||""),this.g=Ls(e[3]||"",!0),Rl(this,e[4]),this.l=Ls(e[5]||"",!0),yg(this,e[6]||"",!0),this.o=Ls(e[7]||"")):(this.h=!1,this.i=new Io(null,this.h))}ei.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Vs(e,vg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Vs(e,vg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Vs(n,n.charAt(0)=="/"?LO:NO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Vs(n,MO)),t.join("")};function Kn(t){return new ei(t)}function Al(t,e,n){t.j=n?Ls(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Rl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function yg(t,e,n){e instanceof Io?(t.i=e,FO(t.i,t.h)):(n||(e=Vs(e,VO)),t.i=new Io(e,t.h))}function Me(t,e,n){t.i.set(e,n)}function Ec(t){return Me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ls(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Vs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,DO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function DO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var vg=/[#\/\?@]/g,NO=/[#\?:]/g,LO=/[#\?]/g,VO=/[#\?@]/g,MO=/#/g;function Io(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function xr(t){t.g||(t.g=new Map,t.h=0,t.i&&OO(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}H=Io.prototype;H.add=function(t,e){xr(this),this.i=null,t=gs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function gE(t,e){xr(t),e=gs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function _E(t,e){return xr(t),e=gs(t,e),t.g.has(e)}H.forEach=function(t,e){xr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};H.ta=function(){xr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};H.Z=function(t){xr(this);let e=[];if(typeof t=="string")_E(this,t)&&(e=e.concat(this.g.get(gs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};H.set=function(t,e){return xr(this),this.i=null,t=gs(this,t),_E(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};H.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function yE(t,e,n){gE(t,e),0<n.length&&(t.i=null,t.g.set(gs(t,e),qd(n)),t.h+=n.length)}H.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function gs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function FO(t,e){e&&!t.j&&(xr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(gE(this,r),yE(this,i,n))},t)),t.j=e}var UO=class{constructor(t,e){this.g=t,this.map=e}};function vE(t){this.l=t||$O,ae.PerformanceNavigationTiming?(t=ae.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ae.g&&ae.g.Ka&&ae.g.Ka()&&ae.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var $O=10;function wE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function EE(t){return t.h?1:t.g?t.g.size:0}function Nh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function nf(t,e){t.g?t.g.add(e):t.h=e}function TE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}vE.prototype.cancel=function(){if(this.i=IE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function IE(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return qd(t.i)}var BO=class{stringify(t){return ae.JSON.stringify(t,void 0)}parse(t){return ae.JSON.parse(t,void 0)}};function qO(){this.g=new BO}function jO(t,e,n){const r=n||"";try{pE(t,function(i,s){let o=i;Qo(i)&&(o=Qd(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function zO(t,e){const n=new gc;if(ae.Image){const r=new Image;r.onload=ba(Ra,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ba(Ra,n,r,"TestLoadImage: error",!1,e),r.onabort=ba(Ra,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ba(Ra,n,r,"TestLoadImage: timeout",!1,e),ae.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ra(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Tc(t){this.l=t.ec||null,this.j=t.ob||!1}at(Tc,Zd);Tc.prototype.g=function(){return new Ic(this.l,this.j)};Tc.prototype.i=function(t){return function(){return t}}({});function Ic(t,e){ot.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=rf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}at(Ic,ot);var rf=0;H=Ic.prototype;H.open=function(t,e){if(this.readyState!=rf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,bo(this)};H.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ae).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};H.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ta(this)),this.readyState=rf};H.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,bo(this)),this.g&&(this.readyState=3,bo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ae.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;bE(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function bE(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}H.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ta(this):bo(this),this.readyState==3&&bE(this)}};H.Za=function(t){this.g&&(this.response=this.responseText=t,ta(this))};H.Ya=function(t){this.g&&(this.response=t,ta(this))};H.ka=function(){this.g&&ta(this)};function ta(t){t.readyState=4,t.l=null,t.j=null,t.A=null,bo(t)}H.setRequestHeader=function(t,e){this.v.append(t,e)};H.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};H.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function bo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ic.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var HO=ae.JSON.parse;function ze(t){ot.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=AE,this.L=this.M=!1}at(ze,ot);var AE="",WO=/^https?$/i,KO=["POST","PUT"];H=ze.prototype;H.Oa=function(t){this.M=t};H.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():kh.g(),this.C=this.u?_g(this.u):_g(kh),this.g.onreadystatechange=Et(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){wg(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=ae.FormData&&t instanceof ae.FormData,!(0<=Bw(KO,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{PE(this),0<this.B&&((this.L=GO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Et(this.ua,this)):this.A=Jd(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){wg(this,s)}};function GO(t){return is&&typeof t.timeout=="number"&&t.ontimeout!==void 0}H.ua=function(){typeof Bd!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ft(this,"timeout"),this.abort(8))};function wg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,RE(t),bc(t)}function RE(t){t.F||(t.F=!0,ft(t,"complete"),ft(t,"error"))}H.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ft(this,"complete"),ft(this,"abort"),bc(this))};H.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),bc(this,!0)),ze.$.N.call(this)};H.La=function(){this.s||(this.G||this.v||this.l?SE(this):this.kb())};H.kb=function(){SE(this)};function SE(t){if(t.h&&typeof Bd!="undefined"&&(!t.C[1]||bn(t)!=4||t.da()!=2)){if(t.v&&bn(t)==4)Jd(t.La,0,t);else if(ft(t,"readystatechange"),bn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(mE)[1]||null;!i&&ae.self&&ae.self.location&&(i=ae.self.location.protocol.slice(0,-1)),r=!WO.test(i?i.toLowerCase():"")}n=r}if(n)ft(t,"complete"),ft(t,"success");else{t.m=6;try{var s=2<bn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",RE(t)}}finally{bc(t)}}}}function bc(t,e){if(t.g){PE(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ft(t,"ready");try{n.onreadystatechange=r}catch{}}}function PE(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ae.clearTimeout(t.A),t.A=null)}H.isActive=function(){return!!this.g};function bn(t){return t.g?t.g.readyState:0}H.da=function(){try{return 2<bn(this)?this.g.status:-1}catch{return-1}};H.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};H.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),HO(e)}};function Eg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case AE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function QO(t){const e={};t=(t.g&&2<=bn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(_o(t[r]))continue;var n=wO(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}fO(e,function(r){return r.join(", ")})}H.Ia=function(){return this.m};H.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function CE(t){let e="";return zd(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function sf(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=CE(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Me(t,e,n))}function bs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function kE(t){this.Ga=0,this.j=[],this.l=new gc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=bs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=bs("baseRetryDelayMs",5e3,t),this.hb=bs("retryDelaySeedMs",1e4,t),this.eb=bs("forwardChannelMaxRetries",2,t),this.xa=bs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new vE(t&&t.concurrentRequestLimit),this.Ja=new qO,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}H=kE.prototype;H.ra=8;H.H=1;function of(t){if(xE(t),t.H==3){var e=t.W++,n=Kn(t.I);if(Me(n,"SID",t.K),Me(n,"RID",e),Me(n,"TYPE","terminate"),na(t,n),e=new Zo(t,t.l,e),e.L=2,e.A=Ec(Kn(n)),n=!1,ae.navigator&&ae.navigator.sendBeacon)try{n=ae.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&ae.Image&&(new Image().src=e.A,n=!0),n||(e.g=UE(e.l,null),e.g.ha(e.A)),e.G=Date.now(),ea(e)}ME(t)}function Ac(t){t.g&&(lf(t),t.g.cancel(),t.g=null)}function xE(t){Ac(t),t.u&&(ae.clearTimeout(t.u),t.u=null),Sl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ae.clearTimeout(t.m),t.m=null)}function Rc(t){if(!wE(t.i)&&!t.m){t.m=!0;var e=t.Na;vo||Zw(),wo||(vo(),wo=!0),Yd.add(e,t),t.C=0}}function YO(t,e){return EE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Xo(Et(t.Na,t,e),VE(t,t.C)),t.C++,!0)}H.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Zo(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Hw(s),Ww(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=OE(this,i,e),n=Kn(this.I),Me(n,"RID",t),Me(n,"CVER",22),this.F&&Me(n,"X-HTTP-Session-Id",this.F),na(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(CE(s)))+"&"+e:this.o&&sf(n,this.o,s)),nf(this.i,i),this.bb&&Me(n,"TYPE","init"),this.P?(Me(n,"$req",e),Me(n,"SID","null"),i.aa=!0,Oh(i,n,null)):Oh(i,n,e),this.H=2}}else this.H==3&&(t?Tg(this,t):this.j.length==0||wE(this.i)||Tg(this))};function Tg(t,e){var n;e?n=e.m:n=t.W++;const r=Kn(t.I);Me(r,"SID",t.K),Me(r,"RID",n),Me(r,"AID",t.V),na(t,r),t.o&&t.s&&sf(r,t.o,t.s),n=new Zo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=OE(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),nf(t.i,n),Oh(n,r,e)}function na(t,e){t.na&&zd(t.na,function(n,r){Me(e,r,n)}),t.h&&pE({},function(n,r){Me(e,r,n)})}function OE(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Et(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const u=i[l].map;if(c-=s,0>c)s=Math.max(0,i[l].g-100),a=!1;else try{jO(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function DE(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;vo||Zw(),wo||(vo(),wo=!0),Yd.add(e,t),t.A=0}}function af(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Xo(Et(t.Ma,t),VE(t,t.A)),t.A++,!0)}H.Ma=function(){if(this.u=null,NE(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Xo(Et(this.jb,this),t)}};H.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Pt(10),Ac(this),NE(this))};function lf(t){t.B!=null&&(ae.clearTimeout(t.B),t.B=null)}function NE(t){t.g=new Zo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Kn(t.wa);Me(e,"RID","rpc"),Me(e,"SID",t.K),Me(e,"AID",t.V),Me(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Me(e,"TO",t.qa),Me(e,"TYPE","xmlhttp"),na(t,e),t.o&&t.s&&sf(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Ec(Kn(e)),n.u=null,n.S=!0,uE(n,t)}H.ib=function(){this.v!=null&&(this.v=null,Ac(this),af(this),Pt(19))};function Sl(t){t.v!=null&&(ae.clearTimeout(t.v),t.v=null)}function LE(t,e){var n=null;if(t.g==e){Sl(t),lf(t),t.g=null;var r=2}else if(Nh(t.i,e))n=e.F,TE(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=_c(),ft(r,new sE(r,n)),Rc(t)}else DE(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&YO(t,e)||r==2&&af(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Hr(t,5);break;case 4:Hr(t,10);break;case 3:Hr(t,6);break;default:Hr(t,2)}}}function VE(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Hr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Et(t.pb,t);n||(n=new ei("//www.google.com/images/cleardot.gif"),ae.location&&ae.location.protocol=="http"||Al(n,"https"),Ec(n)),zO(n.toString(),r)}else Pt(2);t.H=0,t.h&&t.h.za(e),ME(t),xE(t)}H.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Pt(2)):(this.l.info("Failed to ping google.com"),Pt(1))};function ME(t){if(t.H=0,t.ma=[],t.h){const e=IE(t.i);(e.length!=0||t.j.length!=0)&&(dg(t.ma,e),dg(t.ma,t.j),t.i.i.length=0,qd(t.j),t.j.length=0),t.h.ya()}}function FE(t,e,n){var r=n instanceof ei?Kn(n):new ei(n);if(r.g!="")e&&(r.g=e+"."+r.g),Rl(r,r.m);else{var i=ae.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ei(null);r&&Al(s,r),e&&(s.g=e),i&&Rl(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Me(r,n,e),Me(r,"VER",t.ra),na(t,r),r}function UE(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new ze(new Tc({ob:n})):new ze(t.va),e.Oa(t.J),e}H.isActive=function(){return!!this.h&&this.h.isActive(this)};function $E(){}H=$E.prototype;H.Ba=function(){};H.Aa=function(){};H.za=function(){};H.ya=function(){};H.isActive=function(){return!0};H.Va=function(){};function Pl(){if(is&&!(10<=Number(cO)))throw Error("Environmental error: no available transport.")}Pl.prototype.g=function(t,e){return new Ht(t,e)};function Ht(t,e){ot.call(this),this.g=new kE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!_o(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!_o(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new _s(this)}at(Ht,ot);Ht.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Pt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=FE(t,null,t.Y),Rc(t)};Ht.prototype.close=function(){of(this.g)};Ht.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Qd(t),t=n);e.j.push(new UO(e.fb++,t)),e.H==3&&Rc(e)};Ht.prototype.N=function(){this.g.h=null,delete this.j,of(this.g),delete this.g,Ht.$.N.call(this)};function BE(t){ef.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}at(BE,ef);function qE(){tf.call(this),this.status=1}at(qE,tf);function _s(t){this.g=t}at(_s,$E);_s.prototype.Ba=function(){ft(this.g,"a")};_s.prototype.Aa=function(t){ft(this.g,new BE(t))};_s.prototype.za=function(t){ft(this.g,new qE)};_s.prototype.ya=function(){ft(this.g,"b")};function XO(){this.blockSize=-1}function pn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}at(pn,XO);pn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Pu(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}pn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Pu(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Pu(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Pu(this,r),i=0;break}}this.h=i,this.i+=e};pn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Pe(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var JO={};function cf(t){return-128<=t&&128>t?oO(t,function(e){return new Pe([e|0],0>e?-1:0)}):new Pe([t|0],0>t?-1:0)}function An(t){if(isNaN(t)||!isFinite(t))return Hi;if(0>t)return ht(An(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Lh;return new Pe(e,0)}function jE(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ht(jE(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=An(Math.pow(e,8)),r=Hi,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=An(Math.pow(e,s)),r=r.R(s).add(An(o))):(r=r.R(n),r=r.add(An(o)))}return r}var Lh=4294967296,Hi=cf(0),Vh=cf(1),Ig=cf(16777216);H=Pe.prototype;H.ea=function(){if(Qt(this))return-ht(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Lh+r)*e,e*=Lh}return t};H.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Bn(this))return"0";if(Qt(this))return"-"+ht(this).toString(t);for(var e=An(Math.pow(t,6)),n=this,r="";;){var i=kl(n,e).g;n=Cl(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Bn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};H.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Bn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Qt(t){return t.h==-1}H.X=function(t){return t=Cl(this,t),Qt(t)?-1:Bn(t)?0:1};function ht(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Pe(n,~t.h).add(Vh)}H.abs=function(){return Qt(this)?ht(this):this};H.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Pe(n,n[n.length-1]&-2147483648?-1:0)};function Cl(t,e){return t.add(ht(e))}H.R=function(t){if(Bn(this)||Bn(t))return Hi;if(Qt(this))return Qt(t)?ht(this).R(ht(t)):ht(ht(this).R(t));if(Qt(t))return ht(this.R(ht(t)));if(0>this.X(Ig)&&0>t.X(Ig))return An(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Sa(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Sa(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Sa(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Sa(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Pe(n,0)};function Sa(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function As(t,e){this.g=t,this.h=e}function kl(t,e){if(Bn(e))throw Error("division by zero");if(Bn(t))return new As(Hi,Hi);if(Qt(t))return e=kl(ht(t),e),new As(ht(e.g),ht(e.h));if(Qt(e))return e=kl(t,ht(e)),new As(ht(e.g),e.h);if(30<t.g.length){if(Qt(t)||Qt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Vh,r=e;0>=r.X(t);)n=bg(n),r=bg(r);var i=Pi(n,1),s=Pi(r,1);for(r=Pi(r,2),n=Pi(n,2);!Bn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Pi(r,1),n=Pi(n,1)}return e=Cl(t,i.R(e)),new As(i,e)}for(i=Hi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=An(n),o=s.R(e);Qt(o)||0<o.X(t);)n-=r,s=An(n),o=s.R(e);Bn(s)&&(s=Vh),i=i.add(s),t=Cl(t,o)}return new As(i,t)}H.gb=function(t){return kl(this,t).h};H.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Pe(n,this.h&t.h)};H.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Pe(n,this.h|t.h)};H.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Pe(n,this.h^t.h)};function bg(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Pe(n,t.h)}function Pi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Pe(i,t.h)}Pl.prototype.createWebChannel=Pl.prototype.g;Ht.prototype.send=Ht.prototype.u;Ht.prototype.open=Ht.prototype.m;Ht.prototype.close=Ht.prototype.close;yc.NO_ERROR=0;yc.TIMEOUT=8;yc.HTTP_ERROR=6;oE.COMPLETE="complete";aE.EventType=Jo;Jo.OPEN="a";Jo.CLOSE="b";Jo.ERROR="c";Jo.MESSAGE="d";ot.prototype.listen=ot.prototype.O;ze.prototype.listenOnce=ze.prototype.P;ze.prototype.getLastError=ze.prototype.Sa;ze.prototype.getLastErrorCode=ze.prototype.Ia;ze.prototype.getStatus=ze.prototype.da;ze.prototype.getResponseJson=ze.prototype.Wa;ze.prototype.getResponseText=ze.prototype.ja;ze.prototype.send=ze.prototype.ha;ze.prototype.setWithCredentials=ze.prototype.Oa;pn.prototype.digest=pn.prototype.l;pn.prototype.reset=pn.prototype.reset;pn.prototype.update=pn.prototype.j;Pe.prototype.add=Pe.prototype.add;Pe.prototype.multiply=Pe.prototype.R;Pe.prototype.modulo=Pe.prototype.gb;Pe.prototype.compare=Pe.prototype.X;Pe.prototype.toNumber=Pe.prototype.ea;Pe.prototype.toString=Pe.prototype.toString;Pe.prototype.getBits=Pe.prototype.D;Pe.fromNumber=An;Pe.fromString=jE;var ZO=function(){return new Pl},eD=function(){return _c()},Cu=yc,tD=oE,nD=_i,Ag={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Pa=aE,rD=ze,iD=pn,Wi=Pe;const Rg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ys="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=new oc("@firebase/firestore");function Rs(){return li.logLevel}function Y(t,...e){if(li.logLevel<=Te.DEBUG){const n=e.map(uf);li.debug(`Firestore (${ys}): ${t}`,...n)}}function Gn(t,...e){if(li.logLevel<=Te.ERROR){const n=e.map(uf);li.error(`Firestore (${ys}): ${t}`,...n)}}function ss(t,...e){if(li.logLevel<=Te.WARN){const n=e.map(uf);li.warn(`Firestore (${ys}): ${t}`,...n)}}function uf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t="Unexpected state"){const e=`FIRESTORE (${ys}) INTERNAL ASSERTION FAILED: `+t;throw Gn(e),new Error(e)}function Ne(t,e){t||oe()}function pe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends tn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class oD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class aD{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new zn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new zn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new zn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string"),new zE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new yt(e)}}class lD{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class cD{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new lD(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class uD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string"),this.R=n.token,new uD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dD(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=dD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Re(t,e){return t<e?-1:t>e?1:0}function os(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return rt.fromMillis(Date.now())}static fromDate(e){return rt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new rt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.timestamp=e}static fromTimestamp(e){return new le(e)}static min(){return new le(new rt(0,0))}static max(){return new le(new rt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,n,r){n===void 0?n=0:n>e.length&&oe(),r===void 0?r=e.length-n:r>e.length-n&&oe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ao.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ao?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class De extends Ao{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new De(n)}static emptyPath(){return new De([])}}const fD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends Ao{construct(e,n,r){return new dt(e,n,r)}static isValidIdentifier(e){return fD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new dt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new z(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new z(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new dt(n)}static emptyPath(){return new dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(De.fromString(e))}static fromName(e){return new J(De.fromString(e).popFirst(5))}static empty(){return new J(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new De(e.slice()))}}function pD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=le.fromTimestamp(r===1e9?new rt(n+1,0):new rt(n,r));return new Ar(i,J.empty(),e)}function mD(t){return new Ar(t.readTime,t.key,-1)}class Ar{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ar(le.min(),J.empty(),-1)}static max(){return new Ar(le.max(),J.empty(),-1)}}function gD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:Re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ra(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==_D)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&oe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new N((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):N.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):N.reject(n)}static resolve(e){return new N((n,r)=>{n(e)})}static reject(e){return new N((n,r)=>{r(e)})}static waitFor(e){return new N((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=N.resolve(!1);for(const r of e)n=n.next(i=>i?N.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new N((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,n){return new N((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ia(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}hf._e=-1;function Sc(t){return t==null}function xl(t){return t===0&&1/t==-1/0}function vD(t){return typeof t=="number"&&Number.isInteger(t)&&!xl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function yi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function WE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){this.comparator=e,this.root=n||ut.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ut.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ca(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ca(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ca(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ca(this.root,e,this.comparator,!0)}}class Ca{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ut{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:ut.RED,this.left=i!=null?i:ut.EMPTY,this.right=s!=null?s:ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ut(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ut.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw oe();const e=this.left.check();if(e!==this.right.check())throw oe();return e+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw oe()}get value(){throw oe()}get color(){throw oe()}get left(){throw oe()}get right(){throw oe()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ut(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Pg(this.data.getIterator())}getIteratorFrom(e){return new Pg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof pt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new pt(this.comparator);return n.data=e,n}}class Pg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.fields=e,e.sort(dt.comparator)}static empty(){return new qt([])}unionWith(e){let n=new pt(dt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return os(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new KE("Invalid base64 string: "+s):s}}(e);return new bt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const wD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rr(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=wD.exec(t);if(Ne(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Je(t.seconds),nanos:Je(t.nanos)}}function Je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ci(t){return typeof t=="string"?bt.fromBase64String(t):bt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function df(t){const e=t.mapValue.fields.__previous_value__;return Pc(e)?df(e):e}function Ro(t){const e=Rr(t.mapValue.fields.__local_write_time__.timestampValue);return new rt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class So{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new So("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof So&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ui(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Pc(t)?4:TD(t)?9007199254740991:10:oe()}function Dn(t,e){if(t===e)return!0;const n=ui(t);if(n!==ui(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ro(t).isEqual(Ro(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Rr(i.timestampValue),a=Rr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ci(i.bytesValue).isEqual(ci(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Je(i.geoPointValue.latitude)===Je(s.geoPointValue.latitude)&&Je(i.geoPointValue.longitude)===Je(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Je(i.integerValue)===Je(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Je(i.doubleValue),a=Je(s.doubleValue);return o===a?xl(o)===xl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return os(t.arrayValue.values||[],e.arrayValue.values||[],Dn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Sg(o)!==Sg(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Dn(o[l],a[l])))return!1;return!0}(t,e);default:return oe()}}function Po(t,e){return(t.values||[]).find(n=>Dn(n,e))!==void 0}function as(t,e){if(t===e)return 0;const n=ui(t),r=ui(e);if(n!==r)return Re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Re(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Je(s.integerValue||s.doubleValue),l=Je(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Cg(t.timestampValue,e.timestampValue);case 4:return Cg(Ro(t),Ro(e));case 5:return Re(t.stringValue,e.stringValue);case 6:return function(s,o){const a=ci(s),l=ci(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=Re(a[c],l[c]);if(u!==0)return u}return Re(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Re(Je(s.latitude),Je(o.latitude));return a!==0?a:Re(Je(s.longitude),Je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=as(a[c],l[c]);if(u)return u}return Re(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===ka.mapValue&&o===ka.mapValue)return 0;if(s===ka.mapValue)return 1;if(o===ka.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=Re(l[h],u[h]);if(d!==0)return d;const f=as(a[l[h]],c[u[h]]);if(f!==0)return f}return Re(l.length,u.length)}(t.mapValue,e.mapValue);default:throw oe()}}function Cg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Re(t,e);const n=Rr(t),r=Rr(e),i=Re(n.seconds,r.seconds);return i!==0?i:Re(n.nanos,r.nanos)}function ls(t){return Mh(t)}function Mh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Rr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ci(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return J.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Mh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Mh(n.fields[o])}`;return i+"}"}(t.mapValue):oe()}function Ol(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Fh(t){return!!t&&"integerValue"in t}function ff(t){return!!t&&"arrayValue"in t}function kg(t){return!!t&&"nullValue"in t}function xg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ka(t){return!!t&&"mapValue"in t}function Ys(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return yi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ys(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ys(t.arrayValue.values[n]);return e}return Object.assign({},t)}function TD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ka(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ys(n)}setAll(e){let n=dt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ys(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ka(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ka(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){yi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Dt(Ys(this.value))}}function GE(t){const e=[];return yi(t.fields,(n,r)=>{const i=new dt([n]);if(Ka(r)){const s=GE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new qt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new vt(e,0,le.min(),le.min(),le.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,i){return new vt(e,1,n,le.min(),r,i,0)}static newNoDocument(e,n){return new vt(e,2,n,le.min(),le.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new vt(e,3,n,le.min(),le.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n){this.position=e,this.inclusive=n}}function Og(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=J.comparator(J.fromName(o.referenceValue),n.key):r=as(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Dg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n="asc"){this.field=e,this.dir=n}}function ID(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{}class tt extends QE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new AD(e,n,r):n==="array-contains"?new PD(e,r):n==="in"?new CD(e,r):n==="not-in"?new kD(e,r):n==="array-contains-any"?new xD(e,r):new tt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new RD(e,r):new SD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(as(n,this.value)):n!==null&&ui(this.value)===ui(n)&&this.matchesComparison(as(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mn extends QE{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new mn(e,n)}matches(e){return YE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function YE(t){return t.op==="and"}function XE(t){return bD(t)&&YE(t)}function bD(t){for(const e of t.filters)if(e instanceof mn)return!1;return!0}function Uh(t){if(t instanceof tt)return t.field.canonicalString()+t.op.toString()+ls(t.value);if(XE(t))return t.filters.map(e=>Uh(e)).join(",");{const e=t.filters.map(n=>Uh(n)).join(",");return`${t.op}(${e})`}}function JE(t,e){return t instanceof tt?function(r,i){return i instanceof tt&&r.op===i.op&&r.field.isEqual(i.field)&&Dn(r.value,i.value)}(t,e):t instanceof mn?function(r,i){return i instanceof mn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&JE(o,i.filters[a]),!0):!1}(t,e):void oe()}function ZE(t){return t instanceof tt?function(n){return`${n.field.canonicalString()} ${n.op} ${ls(n.value)}`}(t):t instanceof mn?function(n){return n.op.toString()+" {"+n.getFilters().map(ZE).join(" ,")+"}"}(t):"Filter"}class AD extends tt{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class RD extends tt{constructor(e,n){super(e,"in",n),this.keys=eT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class SD extends tt{constructor(e,n){super(e,"not-in",n),this.keys=eT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function eT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class PD extends tt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ff(n)&&Po(n.arrayValue,this.value)}}class CD extends tt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Po(this.value.arrayValue,n)}}class kD extends tt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Po(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Po(this.value.arrayValue,n)}}class xD extends tt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ff(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Po(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Ng(t,e=null,n=[],r=[],i=null,s=null,o=null){return new OD(t,e,n,r,i,s,o)}function pf(t){const e=pe(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Uh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Sc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ls(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ls(r)).join(",")),e.ce=n}return e.ce}function mf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ID(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!JE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Dg(t.startAt,e.startAt)&&Dg(t.endAt,e.endAt)}function $h(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function DD(t,e,n,r,i,s,o,a){return new vi(t,e,n,r,i,s,o,a)}function gf(t){return new vi(t)}function Lg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function _f(t){return t.collectionGroup!==null}function Ki(t){const e=pe(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new pt(dt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new Co(s,r))}),n.has(dt.keyField().canonicalString())||e.le.push(new Co(dt.keyField(),r))}return e.le}function Cn(t){const e=pe(t);return e.he||(e.he=ND(e,Ki(t))),e.he}function ND(t,e){if(t.limitType==="F")return Ng(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Co(i.field,s)});const n=t.endAt?new cs(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new cs(t.startAt.position,t.startAt.inclusive):null;return Ng(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Bh(t,e){const n=t.filters.concat([e]);return new vi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Dl(t,e,n){return new vi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Cc(t,e){return mf(Cn(t),Cn(e))&&t.limitType===e.limitType}function tT(t){return`${pf(Cn(t))}|lt:${t.limitType}`}function ki(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>ZE(i)).join(", ")}]`),Sc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ls(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ls(i)).join(",")),`Target(${r})`}(Cn(t))}; limitType=${t.limitType})`}function kc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):J.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ki(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=Og(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,Ki(r),i)||r.endAt&&!function(o,a,l){const c=Og(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,Ki(r),i))}(t,e)}function LD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function nT(t){return(e,n)=>{let r=!1;for(const i of Ki(t)){const s=VD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function VD(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?as(l,c):oe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return oe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){yi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return WE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MD=new $e(J.comparator);function Qn(){return MD}const rT=new $e(J.comparator);function Ms(...t){let e=rT;for(const n of t)e=e.insert(n.key,n);return e}function iT(t){let e=rT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Wr(){return Xs()}function sT(){return Xs()}function Xs(){return new vs(t=>t.toString(),(t,e)=>t.isEqual(e))}const FD=new $e(J.comparator),UD=new pt(J.comparator);function ve(...t){let e=UD;for(const n of t)e=e.add(n);return e}const $D=new pt(Re);function BD(){return $D}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xl(e)?"-0":e}}function aT(t){return{integerValue:""+t}}function lT(t,e){return vD(e)?aT(e):oT(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(){this._=void 0}}function qD(t,e,n){return t instanceof ko?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Pc(s)&&(s=df(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof xo?uT(t,e):t instanceof Oo?hT(t,e):function(i,s){const o=cT(i,s),a=Vg(o)+Vg(i.Ie);return Fh(o)&&Fh(i.Ie)?aT(a):oT(i.serializer,a)}(t,e)}function jD(t,e,n){return t instanceof xo?uT(t,e):t instanceof Oo?hT(t,e):n}function cT(t,e){return t instanceof Do?function(r){return Fh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ko extends xc{}class xo extends xc{constructor(e){super(),this.elements=e}}function uT(t,e){const n=dT(e);for(const r of t.elements)n.some(i=>Dn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Oo extends xc{constructor(e){super(),this.elements=e}}function hT(t,e){let n=dT(e);for(const r of t.elements)n=n.filter(i=>!Dn(i,r));return{arrayValue:{values:n}}}class Do extends xc{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Vg(t){return Je(t.integerValue||t.doubleValue)}function dT(t){return ff(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e,n){this.field=e,this.transform=n}}function zD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof xo&&i instanceof xo||r instanceof Oo&&i instanceof Oo?os(r.elements,i.elements,Dn):r instanceof Do&&i instanceof Do?Dn(r.Ie,i.Ie):r instanceof ko&&i instanceof ko}(t.transform,e.transform)}class HD{constructor(e,n){this.version=e,this.transformResults=n}}class Jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Jt}static exists(e){return new Jt(void 0,e)}static updateTime(e){return new Jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ga(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Oc{}function pT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new yf(t.key,Jt.none()):new sa(t.key,t.data,Jt.none());{const n=t.data,r=Dt.empty();let i=new pt(dt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Or(t.key,r,new qt(i.toArray()),Jt.none())}}function WD(t,e,n){t instanceof sa?function(i,s,o){const a=i.value.clone(),l=Fg(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Or?function(i,s,o){if(!Ga(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Fg(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(mT(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Js(t,e,n,r){return t instanceof sa?function(s,o,a,l){if(!Ga(s.precondition,o))return a;const c=s.value.clone(),u=Ug(s.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Or?function(s,o,a,l){if(!Ga(s.precondition,o))return a;const c=Ug(s.fieldTransforms,l,o),u=o.data;return u.setAll(mT(s)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Ga(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function KD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=cT(r.transform,i||null);s!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,s))}return n||null}function Mg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&os(r,i,(s,o)=>zD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class sa extends Oc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Or extends Oc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function mT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Fg(t,e,n){const r=new Map;Ne(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,jD(o,a,n[i]))}return r}function Ug(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,qD(s,o,e))}return r}class yf extends Oc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class GD extends Oc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&WD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Js(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Js(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=sT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=pT(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(le.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&os(this.mutations,e.mutations,(n,r)=>Mg(n,r))&&os(this.baseMutations,e.baseMutations,(n,r)=>Mg(n,r))}}class vf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ne(e.mutations.length===r.length);let i=function(){return FD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new vf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe,Ie;function JD(t){switch(t){default:return oe();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function gT(t){if(t===void 0)return Gn("GRPC error has no .code"),k.UNKNOWN;switch(t){case Xe.OK:return k.OK;case Xe.CANCELLED:return k.CANCELLED;case Xe.UNKNOWN:return k.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return k.INTERNAL;case Xe.UNAVAILABLE:return k.UNAVAILABLE;case Xe.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Xe.NOT_FOUND:return k.NOT_FOUND;case Xe.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Xe.ABORTED:return k.ABORTED;case Xe.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Xe.DATA_LOSS:return k.DATA_LOSS;default:return oe()}}(Ie=Xe||(Xe={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZD(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN=new Wi([4294967295,4294967295],0);function $g(t){const e=ZD().encode(t),n=new iD;return n.update(e),new Uint8Array(n.digest())}function Bg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Wi([n,r],0),new Wi([i,s],0)]}class wf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Fs(`Invalid padding: ${n}`);if(r<0)throw new Fs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Fs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Fs(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Wi.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(Wi.fromNumber(r)));return i.compare(eN)===1&&(i=new Wi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=$g(e),[r,i]=Bg(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new wf(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=$g(e),[r,i]=Bg(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Fs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,oa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Dc(le.min(),i,new $e(Re),Qn(),ve())}}class oa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new oa(r,n,ve(),ve(),ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class _T{constructor(e,n){this.targetId=e,this.fe=n}}class yT{constructor(e,n,r=bt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class qg{constructor(){this.ge=0,this.pe=zg(),this.ye=bt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ve(),n=ve(),r=ve();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:oe()}}),new oa(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=zg()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Ne(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class tN{constructor(e){this.Le=e,this.ke=new Map,this.qe=Qn(),this.Qe=jg(),this.Ke=new $e(Re)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:oe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if($h(s))if(r===0){const o=new J(s.path);this.We(n,o,vt.newNoDocument(o,le.min()))}else Ne(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=ci(r).toUint8Array()}catch(l){if(l instanceof KE)return ss("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new wf(o,i,s)}catch(l){return ss(l instanceof Fs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&$h(a.target)){const l=new J(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,vt.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=ve();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new Dc(e,n,this.Ke,this.qe,r);return this.qe=Qn(),this.Qe=jg(),this.Ke=new $e(Re),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new qg,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new pt(Re),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new qg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function jg(){return new $e(J.comparator)}function zg(){return new $e(J.comparator)}const nN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),rN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),iN=(()=>({and:"AND",or:"OR"}))();class sN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function qh(t,e){return t.useProto3Json||Sc(e)?e:{value:e}}function Nl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function oN(t,e){return Nl(t,e.toTimestamp())}function kn(t){return Ne(!!t),le.fromTimestamp(function(n){const r=Rr(n);return new rt(r.seconds,r.nanos)}(t))}function Ef(t,e){return function(r){return new De(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function wT(t){const e=De.fromString(t);return Ne(bT(e)),e}function jh(t,e){return Ef(t.databaseId,e.path)}function ku(t,e){const n=wT(e);if(n.get(1)!==t.databaseId.projectId)throw new z(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(ET(n))}function zh(t,e){return Ef(t.databaseId,e)}function aN(t){const e=wT(t);return e.length===4?De.emptyPath():ET(e)}function Hh(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ET(t){return Ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Hg(t,e,n){return{name:jh(t,e),fields:n.value.mapValue.fields}}function lN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:oe()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,u){return c.useProto3Json?(Ne(u===void 0||typeof u=="string"),bt.fromBase64String(u||"")):(Ne(u===void 0||u instanceof Uint8Array),bt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?k.UNKNOWN:gT(c.code);return new z(u,c.message||"")}(o);n=new yT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ku(t,r.document.name),s=kn(r.document.updateTime),o=r.document.createTime?kn(r.document.createTime):le.min(),a=new Dt({mapValue:{fields:r.document.fields}}),l=vt.newFoundDocument(i,s,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Qa(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ku(t,r.document),s=r.readTime?kn(r.readTime):le.min(),o=vt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Qa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ku(t,r.document),s=r.removedTargetIds||[];n=new Qa([],s,i,null)}else{if(!("filter"in e))return oe();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new XD(i,s),a=r.targetId;n=new _T(a,o)}}return n}function cN(t,e){let n;if(e instanceof sa)n={update:Hg(t,e.key,e.value)};else if(e instanceof yf)n={delete:jh(t,e.key)};else if(e instanceof Or)n={update:Hg(t,e.key,e.data),updateMask:yN(e.fieldMask)};else{if(!(e instanceof GD))return oe();n={verify:jh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof ko)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof xo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Oo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Do)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw oe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:oN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:oe()}(t,e.precondition)),n}function uN(t,e){return t&&t.length>0?(Ne(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?kn(i.updateTime):kn(s);return o.isEqual(le.min())&&(o=kn(s)),new HD(o,i.transformResults||[])}(n,e))):[]}function hN(t,e){return{documents:[zh(t,e.path)]}}function dN(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=zh(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=zh(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return IT(mn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:xi(h.field),direction:mN(h.dir)}}(c))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=qh(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function fN(t){let e=aN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ne(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(h){const d=TT(h);return d instanceof mn&&XE(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(p){return new Co(Oi(p.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Sc(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new cs(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new cs(f,d)}(n.endAt)),DD(e,i,o,s,a,"F",l,c)}function pN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return oe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function TT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Oi(n.unaryFilter.field);return tt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Oi(n.unaryFilter.field);return tt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Oi(n.unaryFilter.field);return tt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Oi(n.unaryFilter.field);return tt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return oe()}}(t):t.fieldFilter!==void 0?function(n){return tt.create(Oi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return oe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return mn.create(n.compositeFilter.filters.map(r=>TT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return oe()}}(n.compositeFilter.op))}(t):oe()}function mN(t){return nN[t]}function gN(t){return rN[t]}function _N(t){return iN[t]}function xi(t){return{fieldPath:t.canonicalString()}}function Oi(t){return dt.fromServerFormat(t.fieldPath)}function IT(t){return t instanceof tt?function(n){if(n.op==="=="){if(xg(n.value))return{unaryFilter:{field:xi(n.field),op:"IS_NAN"}};if(kg(n.value))return{unaryFilter:{field:xi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(xg(n.value))return{unaryFilter:{field:xi(n.field),op:"IS_NOT_NAN"}};if(kg(n.value))return{unaryFilter:{field:xi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xi(n.field),op:gN(n.op),value:n.value}}}(t):t instanceof mn?function(n){const r=n.getFilters().map(i=>IT(i));return r.length===1?r[0]:{compositeFilter:{op:_N(n.op),filters:r}}}(t):oe()}function yN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function bT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n,r,i,s=le.min(),o=le.min(),a=bt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e){this.ut=e}}function wN(t){const e=fN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Dl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(){this.on=new TN}addToCollectionParentIndex(e,n){return this.on.add(n),N.resolve()}getCollectionParents(e,n){return N.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return N.resolve()}deleteFieldIndex(e,n){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,n){return N.resolve()}getDocumentsMatchingTarget(e,n){return N.resolve(null)}getIndexType(e,n){return N.resolve(0)}getFieldIndexes(e,n){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,n){return N.resolve(Ar.min())}getMinOffsetFromCollectionGroup(e,n){return N.resolve(Ar.min())}updateCollectionGroup(e,n,r){return N.resolve()}updateIndexEntries(e,n){return N.resolve()}}class TN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new pt(De.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new pt(De.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new us(0)}static Nn(){return new us(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(){this.changes=new vs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?N.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Js(r.mutation,i,qt.empty(),rt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ve()){const i=Wr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ms();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Wr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ve()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Qn();const o=Xs(),a=function(){return Xs()}();return n.forEach((l,c)=>{const u=r.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Or)?s=s.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Js(u.mutation,c,u.mutation.getFieldMask(),rt.now())):o.set(c.key,qt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new bN(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Xs();let i=new $e((o,a)=>o-a),s=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||qt.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(i.get(a.batchId)||ve()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=sT();u.forEach(d=>{if(!s.has(d)){const f=pT(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return N.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return J.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_f(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):N.resolve(Wr());let a=-1,l=s;return o.next(c=>N.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?N.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,ve())).next(u=>({batchId:a,changes:iT(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let i=Ms();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ms();return this.indexManager.getCollectionParents(e,s).next(a=>N.forEach(a,l=>{const c=function(h,d){return new vi(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,vt.newInvalidDocument(u)))});let a=Ms();return o.forEach((l,c)=>{const u=s.get(l);u!==void 0&&Js(u.mutation,c,qt.empty(),rt.now()),kc(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return N.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:kn(i.createTime)}}(n)),N.resolve()}getNamedQuery(e,n){return N.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:wN(i.bundledQuery),readTime:kn(i.readTime)}}(n)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(){this.overlays=new $e(J.comparator),this.lr=new Map}getOverlay(e,n){return N.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Wr();return N.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.lt(e,n,s)}),N.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),N.resolve()}getOverlaysForCollection(e,n,r){const i=Wr(),s=n.length+1,o=new J(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return N.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new $e((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=s.get(c.largestBatchId);u===null&&(u=Wr(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Wr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return N.resolve(a)}lt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new YD(n,r));let s=this.lr.get(n);s===void 0&&(s=ve(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(){this.hr=new pt(it.Pr),this.Ir=new pt(it.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new it(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new it(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new J(new De([])),r=new it(n,e),i=new it(n,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new J(new De([])),r=new it(n,e),i=new it(n,e+1);let s=ve();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new it(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return J.comparator(e.key,n.key)||Re(e.gr,n.gr)}static Tr(e,n){return Re(e.gr,n.gr)||J.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new pt(it.Pr)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new QD(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new it(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,n){return N.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return N.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new it(n,0),i=new it(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),N.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pt(Re);return n.forEach(i=>{const s=new it(i,0),o=new it(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),N.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;J.isDocumentKey(s)||(s=s.child(""));const o=new it(new J(s),0);let a=new pt(Re);return this.yr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.gr)),!0)},o),N.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ne(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return N.forEach(n.mutations,i=>{const s=new it(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new it(n,0),i=this.yr.firstAfterOrEqual(r);return N.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(e){this.Cr=e,this.docs=function(){return new $e(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return N.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(e,n){let r=Qn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():vt.newInvalidDocument(i))}),N.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Qn();const o=n.path,a=new J(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||gD(mD(u),r)<=0||(i.has(u.key)||kc(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return N.resolve(s)}getAllFromCollectionGroup(e,n,r,i){oe()}vr(e,n){return N.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new kN(this)}getSize(e){return N.resolve(this.size)}}class kN extends IN{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),N.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e){this.persistence=e,this.Fr=new vs(n=>pf(n),mf),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Tf,this.targetCount=0,this.Nr=us.On()}forEachTarget(e,n){return this.Fr.forEach((r,i)=>n(i)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),N.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new us(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,N.resolve()}updateTargetData(e,n){return this.kn(n),N.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),N.waitFor(s).next(()=>i)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return N.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),N.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),N.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),N.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return N.resolve(r)}containsKey(e,n){return N.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e,n){this.Br={},this.overlays={},this.Lr=new hf(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new xN(this),this.indexManager=new EN,this.remoteDocumentCache=function(i){return new CN(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new vN(n),this.Kr=new RN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new SN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new PN(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const i=new DN(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,n){return N.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class DN extends yD{constructor(e){super(),this.currentSequenceNumber=e}}class If{constructor(e){this.persistence=e,this.Gr=new Tf,this.zr=null}static jr(e){return new If(e)}get Hr(){if(this.zr)return this.zr;throw oe()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),N.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),N.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Hr,r=>{const i=J.fromPath(r);return this.Jr(e,i).next(s=>{s||n.removeEntry(i,le.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return N.or([()=>N.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=i}static Qi(e,n){let r=ve(),i=ve();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new bf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.zi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new NN;return this.Hi(e,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>s.result)}Ji(e,n,r,i){return r.documentReadCount<this.Ui?(Rs()<=Te.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",ki(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),N.resolve()):(Rs()<=Te.DEBUG&&Y("QueryEngine","Query:",ki(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(Rs()<=Te.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",ki(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Cn(n))):N.resolve())}zi(e,n){if(Lg(n))return N.resolve(null);let r=Cn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Dl(n,null,"F"),r=Cn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ve(...s);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Yi(n,a);return this.Zi(n,c,o,l.readTime)?this.zi(e,Dl(n,null,"F")):this.Xi(e,c,n,l)}))})))}ji(e,n,r,i){return Lg(n)||i.isEqual(le.min())?N.resolve(null):this.Gi.getDocuments(e,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?N.resolve(null):(Rs()<=Te.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ki(n)),this.Xi(e,o,n,pD(i,-1)).next(a=>a))})}Yi(e,n){let r=new pt(nT(e));return n.forEach((i,s)=>{kc(e,s)&&(r=r.add(s))}),r}Zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(e,n,r){return Rs()<=Te.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",ki(n)),this.Gi.getDocumentsMatchingQuery(e,n,Ar.min(),r)}Xi(e,n,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(e,n,r,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new $e(Re),this.ns=new vs(s=>pf(s),mf),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new AN(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function MN(t,e,n,r){return new VN(t,e,n,r)}async function AT(t,e){const n=pe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ve();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of s){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:a}))})})}function FN(t,e){const n=pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=N.resolve();return d.forEach(p=>{f=f.next(()=>u.getEntry(l,p)).next(v=>{const g=c.docVersions.get(p);Ne(g!==null),v.version.compareTo(g)<0&&(h.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),u.addEntry(v)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ve();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function RT(t){const e=pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function UN(t,e){const n=pe(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(s,u.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(bt.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),i=i.insert(h,f),function(v,g,w){return v.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,f,u)&&a.push(n.qr.updateTargetData(s,f))});let l=Qn(),c=ve();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push($N(s,o,e.documentUpdates).next(u=>{l=u.us,c=u.cs})),!r.isEqual(le.min())){const u=n.qr.getLastRemoteSnapshotVersion(s).next(h=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return N.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.ts=i,s))}function $N(t,e,n){let r=ve(),i=ve();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Qn();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(le.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):Y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{us:o,cs:i}})}function BN(t,e){const n=pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function qN(t,e){const n=pe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,e).next(s=>s?(i=s,N.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new gr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function Wh(t,e,n){const r=pe(t),i=r.ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ia(o))throw o;Y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function Wg(t,e,n){const r=pe(t);let i=le.min(),s=ve();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=pe(l),d=h.ns.get(u);return d!==void 0?N.resolve(h.ts.get(d)):h.qr.getTargetData(c,u)}(r,o,Cn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?i:le.min(),n?s:ve())).next(a=>(jN(r,LD(e),a),{documents:a,ls:s})))}function jN(t,e,n){let r=t.rs.get(e)||le.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.rs.set(e,r)}class Kg{constructor(){this.activeTargetIds=BD()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zN{constructor(){this.eo=new Kg,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Kg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){Y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){Y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xa=null;function xu(){return xa===null?xa=function(){return 268435456+Math.round(2147483648*Math.random())}():xa++,"0x"+xa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="WebChannelConnection";class GN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(n,r,i,s,o){const a=xu(),l=this.So(n,r);Y("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(c,s,o),this.Do(n,l,c,i).then(u=>(Y("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw ss("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",i),u})}Co(n,r,i,s,o,a){return this.wo(n,r,i,s,o)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ys}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}So(n,r){const i=WN[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,i){const s=xu();return new Promise((o,a)=>{const l=new rD;l.setWithCredentials(!0),l.listenOnce(tD.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Cu.NO_ERROR:const u=l.getResponseJson();Y(gt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case Cu.TIMEOUT:Y(gt,`RPC '${e}' ${s} timed out`),a(new z(k.DEADLINE_EXCEEDED,"Request time out"));break;case Cu.HTTP_ERROR:const h=l.getStatus();if(Y(gt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const p=function(g){const w=g.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(w)>=0?w:k.UNKNOWN}(f.status);a(new z(p,f.message))}else a(new z(k.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new z(k.UNAVAILABLE,"Connection failed."));break;default:oe()}}finally{Y(gt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);Y(gt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}vo(e,n,r){const i=xu(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ZO(),a=eD(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");Y(gt,`Creating RPC '${e}' stream ${i}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const p=new KN({co:g=>{f?Y(gt,`Not sending because RPC '${e}' stream ${i} is closed:`,g):(d||(Y(gt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),Y(gt,`RPC '${e}' stream ${i} sending:`,g),h.send(g))},lo:()=>h.close()}),v=(g,w,_)=>{g.listen(w,T=>{try{_(T)}catch(E){setTimeout(()=>{throw E},0)}})};return v(h,Pa.EventType.OPEN,()=>{f||Y(gt,`RPC '${e}' stream ${i} transport opened.`)}),v(h,Pa.EventType.CLOSE,()=>{f||(f=!0,Y(gt,`RPC '${e}' stream ${i} transport closed`),p.Ro())}),v(h,Pa.EventType.ERROR,g=>{f||(f=!0,ss(gt,`RPC '${e}' stream ${i} transport errored:`,g),p.Ro(new z(k.UNAVAILABLE,"The operation could not be completed")))}),v(h,Pa.EventType.MESSAGE,g=>{var w;if(!f){const _=g.data[0];Ne(!!_);const T=_,E=T.error||((w=T[0])===null||w===void 0?void 0:w.error);if(E){Y(gt,`RPC '${e}' stream ${i} received error:`,E);const b=E.status;let M=function(R){const U=Xe[R];if(U!==void 0)return gT(U)}(b),V=E.message;M===void 0&&(M=k.INTERNAL,V="Unknown error status: "+b+" with message "+E.message),f=!0,p.Ro(new z(M,V)),h.close()}else Y(gt,`RPC '${e}' stream ${i} received:`,_),p.Vo(_)}}),v(a,nD.STAT_EVENT,g=>{g.stat===Ag.PROXY?Y(gt,`RPC '${e}' stream ${i} detected buffering proxy`):g.stat===Ag.NOPROXY&&Y(gt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.Ao()},0),p}}function Ou(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(t){return new sN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&Y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new ST(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(Gn(n.toString()),Gn("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{e(()=>{const i=new z(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return Y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(Y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class QN extends PT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=lN(this.serializer,e),r=function(s){if(!("targetChange"in s))return le.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?le.min():o.readTime?kn(o.readTime):le.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=Hh(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=$h(l)?{documents:hN(s,l)}:{query:dN(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=vT(s,o.resumeToken);const c=qh(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(le.min())>0){a.readTime=Nl(s,o.snapshotVersion.toTimestamp());const c=qh(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=pN(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=Hh(this.serializer),n.removeTarget=e,this.e_(n)}}class YN extends PT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=uN(e.writeResults,e.commitTime),r=kn(e.commitTime);return this.listener.I_(r,n)}return Ne(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Hh(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>cN(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new z(k.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(k.UNKNOWN,i.toString())})}Co(e,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(k.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class JN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Gn(n),this.f_=!1):Y("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{wi(this)&&(Y("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=pe(l);c.C_.add(4),await aa(c),c.M_.set("Unknown"),c.C_.delete(4),await Lc(c)}(this))})}),this.M_=new JN(r,i)}}async function Lc(t){if(wi(t))for(const e of t.v_)await e(!0)}async function aa(t){for(const e of t.v_)await e(!1)}function CT(t,e){const n=pe(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),Sf(n)?Rf(n):ws(n).Ho()&&Af(n,e))}function kT(t,e){const n=pe(t),r=ws(n);n.D_.delete(e),r.Ho()&&xT(n,e),n.D_.size===0&&(r.Ho()?r.Zo():wi(n)&&n.M_.set("Unknown"))}function Af(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ws(t).u_(e)}function xT(t,e){t.x_.Oe(e),ws(t).c_(e)}function Rf(t){t.x_=new tN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),ws(t).start(),t.M_.g_()}function Sf(t){return wi(t)&&!ws(t).jo()&&t.D_.size>0}function wi(t){return pe(t).C_.size===0}function OT(t){t.x_=void 0}async function eL(t){t.D_.forEach((e,n)=>{Af(t,e)})}async function tL(t,e){OT(t),Sf(t)?(t.M_.w_(e),Rf(t)):t.M_.set("Unknown")}async function nL(t,e,n){if(t.M_.set("Online"),e instanceof yT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(t,e)}catch(r){Y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ll(t,r)}else if(e instanceof Qa?t.x_.$e(e):e instanceof _T?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(le.min()))try{const r=await RT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=s.D_.get(c);u&&s.D_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=s.D_.get(l);if(!u)return;s.D_.set(l,u.withResumeToken(bt.EMPTY_BYTE_STRING,u.snapshotVersion)),xT(s,l);const h=new gr(u.target,l,c,u.sequenceNumber);Af(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){Y("RemoteStore","Failed to raise snapshot:",r),await Ll(t,r)}}async function Ll(t,e,n){if(!ia(e))throw e;t.C_.add(1),await aa(t),t.M_.set("Offline"),n||(n=()=>RT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await Lc(t)})}function DT(t,e){return e().catch(n=>Ll(t,n,e))}async function Vc(t){const e=pe(t),n=Sr(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;rL(e);)try{const i=await BN(e.localStore,r);if(i===null){e.b_.length===0&&n.Zo();break}r=i.batchId,iL(e,i)}catch(i){await Ll(e,i)}NT(e)&&LT(e)}function rL(t){return wi(t)&&t.b_.length<10}function iL(t,e){t.b_.push(e);const n=Sr(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function NT(t){return wi(t)&&!Sr(t).jo()&&t.b_.length>0}function LT(t){Sr(t).start()}async function sL(t){Sr(t).E_()}async function oL(t){const e=Sr(t);for(const n of t.b_)e.P_(n.mutations)}async function aL(t,e,n){const r=t.b_.shift(),i=vf.from(r,e,n);await DT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Vc(t)}async function lL(t,e){e&&Sr(t).h_&&await async function(r,i){if(function(o){return JD(o)&&o!==k.ABORTED}(i.code)){const s=r.b_.shift();Sr(r).Yo(),await DT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Vc(r)}}(t,e),NT(t)&&LT(t)}async function Qg(t,e){const n=pe(t);n.asyncQueue.verifyOperationInProgress(),Y("RemoteStore","RemoteStore received new credentials");const r=wi(n);n.C_.add(3),await aa(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await Lc(n)}async function cL(t,e){const n=pe(t);e?(n.C_.delete(2),await Lc(n)):e||(n.C_.add(2),await aa(n),n.M_.set("Unknown"))}function ws(t){return t.O_||(t.O_=function(n,r,i){const s=pe(n);return s.A_(),new QN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:eL.bind(null,t),Io:tL.bind(null,t),a_:nL.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),Sf(t)?Rf(t):t.M_.set("Unknown")):(await t.O_.stop(),OT(t))})),t.O_}function Sr(t){return t.N_||(t.N_=function(n,r,i){const s=pe(n);return s.A_(),new YN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:sL.bind(null,t),Io:lL.bind(null,t),T_:oL.bind(null,t),I_:aL.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await Vc(t)):(await t.N_.stop(),t.b_.length>0&&(Y("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Pf(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cf(t,e){if(Gn("AsyncQueue",`${e}: ${t}`),ia(t))return new z(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=Ms(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new Gi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Gi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Gi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(){this.B_=new $e(J.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):oe():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class hs{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new hs(e,n,Gi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Cc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uL{constructor(){this.k_=void 0,this.listeners=[]}}class hL{constructor(){this.queries=new vs(e=>tT(e),Cc),this.onlineState="Unknown",this.q_=new Set}}async function VT(t,e){const n=pe(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new uL),i)try{s.k_=await n.onListen(r)}catch(o){const a=Cf(o,`Initialization of query '${ki(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Q_(n.onlineState),s.k_&&e.K_(s.k_)&&kf(n)}async function MT(t,e){const n=pe(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function dL(t,e){const n=pe(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&kf(n)}function fL(t,e,n){const r=pe(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function kf(t){t.q_.forEach(e=>{e.next()})}class FT{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new hs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e){this.key=e}}class $T{constructor(e){this.key=e}}class pL{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=ve(),this.mutatedKeys=ve(),this._a=nT(e),this.aa=new Gi(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new Yg,i=n?n.aa:this.aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=kc(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let g=!1;d&&f?d.data.isEqual(f.data)?p!==v&&(r.track({type:3,doc:f}),g=!0):this.ha(d,f)||(r.track({type:2,doc:f}),g=!0,(l&&this._a(f,l)>0||c&&this._a(f,c)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),g=!0):d&&!f&&(r.track({type:1,doc:d}),g=!0,(l||c)&&(a=!0)),g&&(f?(o=o.add(f),s=v?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((u,h)=>function(f,p){const v=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe()}};return v(f)-v(p)}(u.type,h.type)||this._a(u.doc,h.doc)),this.Pa(r),i=i!=null&&i;const a=n&&!i?this.Ia():[],l=this.oa.size===0&&this.current&&!i?1:0,c=l!==this.sa;return this.sa=l,o.length!==0||c?{snapshot:new hs(this.query,e.aa,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Yg,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=ve(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new $T(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new UT(r))}),n}da(e){this.ia=e.ls,this.oa=ve();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return hs.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class mL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class gL{constructor(e){this.key=e,this.Ra=!1}}class _L{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new vs(a=>tT(a),Cc),this.fa=new Map,this.ga=new Set,this.pa=new $e(J.comparator),this.ya=new Map,this.wa=new Tf,this.Sa={},this.ba=new Map,this.Da=us.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function yL(t,e){const n=PL(t);let r,i;const s=n.ma.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await qN(n.localStore,Cn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await vL(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&CT(n.remoteStore,o)}return i}async function vL(t,e,n,r,i){t.va=(h,d,f)=>async function(v,g,w,_){let T=g.view.ca(w);T.Zi&&(T=await Wg(v.localStore,g.query,!1).then(({documents:V})=>g.view.ca(V,T)));const E=_&&_.targetChanges.get(g.targetId),b=_&&_.targetMismatches.get(g.targetId)!=null,M=g.view.applyChanges(T,v.isPrimaryClient,E,b);return Jg(v,g.targetId,M.Ta),M.snapshot}(t,h,d,f);const s=await Wg(t.localStore,e,!0),o=new pL(e,s.ls),a=o.ca(s.documents),l=oa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);Jg(t,n,c.Ta);const u=new mL(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),c.snapshot}async function wL(t,e){const n=pe(t),r=n.ma.get(e),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(s=>!Cc(s,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Wh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),kT(n.remoteStore,r.targetId),Kh(n,r.targetId)}).catch(ra)):(Kh(n,r.targetId),await Wh(n.localStore,r.targetId,!0))}async function EL(t,e,n){const r=CL(t);try{const i=await function(o,a){const l=pe(o),c=rt.now(),u=a.reduce((f,p)=>f.add(p.key),ve());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let p=Qn(),v=ve();return l.ss.getEntries(f,u).next(g=>{p=g,p.forEach((w,_)=>{_.isValidDocument()||(v=v.add(w))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,p)).next(g=>{h=g;const w=[];for(const _ of a){const T=KD(_,h.get(_.key).overlayedDocument);T!=null&&w.push(new Or(_.key,T,GE(T.value.mapValue),Jt.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,w,a)}).next(g=>{d=g;const w=g.applyToLocalDocumentSet(h,v);return l.documentOverlayCache.saveOverlays(f,g.batchId,w)})}).then(()=>({batchId:d.batchId,changes:iT(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.Sa[o.currentUser.toKey()];c||(c=new $e(Re)),c=c.insert(a,l),o.Sa[o.currentUser.toKey()]=c}(r,i.batchId,n),await la(r,i.changes),await Vc(r.remoteStore)}catch(i){const s=Cf(i,"Failed to persist write");n.reject(s)}}async function BT(t,e){const n=pe(t);try{const r=await UN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ya.get(s);o&&(Ne(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?Ne(o.Ra):i.removedDocuments.size>0&&(Ne(o.Ra),o.Ra=!1))}),await la(n,r,e)}catch(r){await ra(r)}}function Xg(t,e,n){const r=pe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=pe(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.Q_(a)&&(c=!0)}),c&&kf(l)}(r.eventManager,e),i.length&&r.Va.a_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function TL(t,e,n){const r=pe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ya.get(e),s=i&&i.key;if(s){let o=new $e(J.comparator);o=o.insert(s,vt.newNoDocument(s,le.min()));const a=ve().add(s),l=new Dc(le.min(),new Map,new $e(Re),o,a);await BT(r,l),r.pa=r.pa.remove(s),r.ya.delete(e),xf(r)}else await Wh(r.localStore,e,!1).then(()=>Kh(r,e,n)).catch(ra)}async function IL(t,e){const n=pe(t),r=e.batch.batchId;try{const i=await FN(n.localStore,e);jT(n,r,null),qT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await la(n,i)}catch(i){await ra(i)}}async function bL(t,e,n){const r=pe(t);try{const i=await function(o,a){const l=pe(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Ne(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);jT(r,e,n),qT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await la(r,i)}catch(i){await ra(i)}}function qT(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function jT(t,e,n){const r=pe(t);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function Kh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||zT(t,r)})}function zT(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(kT(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),xf(t))}function Jg(t,e,n){for(const r of n)r instanceof UT?(t.wa.addReference(r.key,e),AL(t,r)):r instanceof $T?(Y("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||zT(t,r.key)):oe()}function AL(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(Y("SyncEngine","New document in limbo: "+n),t.ga.add(r),xf(t))}function xf(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new J(De.fromString(e)),r=t.Da.next();t.ya.set(r,new gL(n)),t.pa=t.pa.insert(n,r),CT(t.remoteStore,new gr(Cn(gf(n.path)),r,"TargetPurposeLimboResolution",hf._e))}}async function la(t,e,n){const r=pe(t),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=bf.Qi(l.targetId,c);s.push(u)}}))}),await Promise.all(o),r.Va.a_(i),await async function(l,c){const u=pe(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>N.forEach(c,d=>N.forEach(d.ki,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>N.forEach(d.qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!ia(h))throw h;Y("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.ts.get(d),p=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(p);u.ts=u.ts.insert(d,v)}}}(r.localStore,s))}async function RL(t,e){const n=pe(t);if(!n.currentUser.isEqual(e)){Y("SyncEngine","User change. New user:",e.toKey());const r=await AT(n.localStore,e);n.currentUser=e,function(s,o){s.ba.forEach(a=>{a.forEach(l=>{l.reject(new z(k.CANCELLED,o))})}),s.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await la(n,r._s)}}function SL(t,e){const n=pe(t),r=n.ya.get(e);if(r&&r.Ra)return ve().add(r.key);{let i=ve();const s=n.fa.get(e);if(!s)return i;for(const o of s){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function PL(t){const e=pe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=BT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=SL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=TL.bind(null,e),e.Va.a_=dL.bind(null,e.eventManager),e.Va.Fa=fL.bind(null,e.eventManager),e}function CL(t){const e=pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=IL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bL.bind(null,e),e}class Zg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Nc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return MN(this.persistence,new LN,e.initialUser,this.serializer)}createPersistence(e){return new ON(If.jr,this.serializer)}createSharedClientState(e){return new zN}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class kL{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=RL.bind(null,this.syncEngine),await cL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new hL}()}createDatastore(e){const n=Nc(e.databaseInfo.databaseId),r=function(s){return new GN(s)}(e.databaseInfo);return function(s,o,a,l){return new XN(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new ZN(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Xg(this.syncEngine,n,0),function(){return Gg.D()?new Gg:new HN}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,u){const h=new _L(i,s,o,a,l,c);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=pe(n);Y("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await aa(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):Gn("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xL{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=HE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Y("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Y("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Cf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Du(t,e){t.asyncQueue.verifyOperationInProgress(),Y("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await AT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function e_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await DL(t);Y("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Qg(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Qg(e.remoteStore,s)),t._onlineComponents=e}function OL(t){return t.name==="FirebaseError"?t.code===k.FAILED_PRECONDITION||t.code===k.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function DL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y("FirestoreClient","Using user provided OfflineComponentProvider");try{await Du(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!OL(n))throw n;ss("Error using user provided cache. Falling back to memory cache: "+n),await Du(t,new Zg)}}else Y("FirestoreClient","Using default OfflineComponentProvider"),await Du(t,new Zg);return t._offlineComponents}async function WT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y("FirestoreClient","Using user provided OnlineComponentProvider"),await e_(t,t._uninitializedComponentsProvider._online)):(Y("FirestoreClient","Using default OnlineComponentProvider"),await e_(t,new kL))),t._onlineComponents}function NL(t){return WT(t).then(e=>e.syncEngine)}async function KT(t){const e=await WT(t),n=e.eventManager;return n.onListen=yL.bind(null,e.syncEngine),n.onUnlisten=wL.bind(null,e.syncEngine),n}function LL(t,e,n={}){const r=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const u=new HT({next:d=>{o.enqueueAndForget(()=>MT(s,h));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new z(k.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?c.reject(new z(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new FT(gf(a.path),u,{includeMetadataChanges:!0,J_:!0});return VT(s,h)}(await KT(t),t.asyncQueue,e,n,r)),r.promise}function VL(t,e,n={}){const r=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const u=new HT({next:d=>{o.enqueueAndForget(()=>MT(s,h)),d.fromCache&&l.source==="server"?c.reject(new z(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new FT(a,u,{includeMetadataChanges:!0,J_:!0});return VT(s,h)}(await KT(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(t,e,n){if(!n)throw new z(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ML(t,e,n,r){if(e===!0&&r===!0)throw new z(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function n_(t){if(!J.isDocumentKey(t))throw new z(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function r_(t){if(J.isDocumentKey(t))throw new z(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Mc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oe()}function gn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mc(t);throw new z(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function FL(t,e){if(e<=0)throw new z(k.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ML("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=GT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new z(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new z(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new z(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new i_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new i_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sD;switch(r.type){case"firstParty":return new cD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=t_.get(n);r&&(Y("ComponentProvider","Removing Datastore"),t_.delete(n),r.terminate())}(this),Promise.resolve()}}function UL(t,e,n,r={}){var i;const s=(t=gn(t,Fc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ss("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=yt.MOCK_USER;else{a=Xv(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new z(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new yt(c)}t._authCredentials=new oD(new zE(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new er(this.firestore,e,this._query)}}class kt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Er(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new kt(this.firestore,e,this._key)}}class Er extends er{constructor(e,n,r){super(e,n,gf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new kt(this.firestore,null,new J(e))}withConverter(e){return new Er(this.firestore,e,this._path)}}function a2(t,e,...n){if(t=xe(t),QT("collection","path",e),t instanceof Fc){const r=De.fromString(e,...n);return r_(r),new Er(t,null,r)}{if(!(t instanceof kt||t instanceof Er))throw new z(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return r_(r),new Er(t.firestore,null,r)}}function YT(t,e,...n){if(t=xe(t),arguments.length===1&&(e=HE.newId()),QT("doc","path",e),t instanceof Fc){const r=De.fromString(e,...n);return n_(r),new kt(t,null,new J(r))}{if(!(t instanceof kt||t instanceof Er))throw new z(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return n_(r),new kt(t.firestore,t instanceof Er?t.converter:null,new J(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $L{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new ST(this,"async_queue_retry"),this.iu=()=>{const n=Ou();n&&Y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=Ou();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=Ou();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new zn;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!ia(e))throw e;Y("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Gn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const i=Pf.createAndSchedule(this,e,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&oe()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}class Ei extends Fc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new $L}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||XT(this),this._firestoreClient.terminate()}}function BL(t,e){const n=typeof t=="object"?t:ac(),r=typeof t=="string"?t:e||"(default)",i=Cr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Gv("firestore");s&&UL(i,...s)}return i}function Of(t){return t._firestoreClient||XT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function XT(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,u){return new ED(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,GT(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new xL(t._authCredentials,t._appCheckCredentials,t._queue,s),((n=i.localCache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=i.localCache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ds(bt.fromBase64String(e))}catch(n){throw new z(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ds(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qL=/^__.*__$/;class jL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Or(e,this.data,this.fieldMask,n,this.fieldTransforms):new sa(e,this.data,n,this.fieldTransforms)}}class JT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Or(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ZT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe()}}class Nf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Nf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Au(e),i}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Vl(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(ZT(this.Iu)&&qL.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class zL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Nc(e)}pu(e,n,r,i=!1){return new Nf({Iu:e,methodName:n,gu:r,path:dt.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ua(t){const e=t._freezeSettings(),n=Nc(t._databaseId);return new zL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function e0(t,e,n,r,i,s={}){const o=t.pu(s.merge||s.mergeFields?2:0,e,n,i);Vf("Data must be an object, but it was:",o,r);const a=n0(r,o);let l,c;if(s.merge)l=new qt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const d=Gh(e,h,n);if(!o.contains(d))throw new z(k.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);i0(u,d)||u.push(d)}l=new qt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new jL(new Dt(a),l,c)}class $c extends ca{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $c}}class Lf extends ca{_toFieldTransform(e){return new fT(e.path,new ko)}isEqual(e){return e instanceof Lf}}class HL extends ca{constructor(e,n){super(e),this.wu=n}_toFieldTransform(e){const n=new Do(e.serializer,lT(e.serializer,this.wu));return new fT(e.path,n)}isEqual(e){return this===e}}function WL(t,e,n,r){const i=t.pu(1,e,n);Vf("Data must be an object, but it was:",i,r);const s=[],o=Dt.empty();yi(r,(l,c)=>{const u=Mf(e,l,n);c=xe(c);const h=i.Ru(u);if(c instanceof $c)s.push(u);else{const d=ha(c,h);d!=null&&(s.push(u),o.set(u,d))}});const a=new qt(s);return new JT(o,a,i.fieldTransforms)}function KL(t,e,n,r,i,s){const o=t.pu(1,e,n),a=[Gh(e,r,n)],l=[i];if(s.length%2!=0)throw new z(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Gh(e,s[d])),l.push(s[d+1]);const c=[],u=Dt.empty();for(let d=a.length-1;d>=0;--d)if(!i0(c,a[d])){const f=a[d];let p=l[d];p=xe(p);const v=o.Ru(f);if(p instanceof $c)c.push(f);else{const g=ha(p,v);g!=null&&(c.push(f),u.set(f,g))}}const h=new qt(c);return new JT(u,h,o.fieldTransforms)}function t0(t,e,n,r=!1){return ha(n,t.pu(r?4:3,e))}function ha(t,e){if(r0(t=xe(t)))return Vf("Unsupported field value:",e,t),n0(t,e);if(t instanceof ca)return function(r,i){if(!ZT(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=ha(a,i.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=xe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return lT(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=rt.fromDate(r);return{timestampValue:Nl(i.serializer,s)}}if(r instanceof rt){const s=new rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Nl(i.serializer,s)}}if(r instanceof Df)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ds)return{bytesValue:vT(i.serializer,r._byteString)};if(r instanceof kt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ef(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${Mc(r)}`)}(t,e)}function n0(t,e){const n={};return WE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):yi(t,(r,i)=>{const s=ha(i,e.Eu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function r0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof rt||t instanceof Df||t instanceof ds||t instanceof kt||t instanceof ca)}function Vf(t,e,n){if(!r0(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Mc(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function Gh(t,e,n){if((e=xe(e))instanceof Uc)return e._internalPath;if(typeof e=="string")return Mf(t,e);throw Vl("Field path arguments must be of type string or ",t,!1,void 0,n)}const GL=new RegExp("[~\\*/\\[\\]]");function Mf(t,e,n){if(e.search(GL)>=0)throw Vl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Uc(...e.split("."))._internalPath}catch{throw Vl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new z(k.INVALID_ARGUMENT,a+t+l)}function i0(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new QL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Bc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class QL extends Ff{data(){return super.data()}}function Bc(t,e){return typeof e=="string"?Mf(t,e):e instanceof Uc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uf{}class qc extends Uf{}function l2(t,e,...n){let r=[];e instanceof Uf&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof $f).length,a=s.filter(l=>l instanceof jc).length;if(o>1||o>0&&a>0)throw new z(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class jc extends qc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new jc(e,n,r)}_apply(e){const n=this._parse(e);return s0(e._query,n),new er(e.firestore,e.converter,Bh(e._query,n))}_parse(e){const n=ua(e.firestore);return function(s,o,a,l,c,u,h){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new z(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){o_(h,u);const f=[];for(const p of h)f.push(s_(l,s,p));d={arrayValue:{values:f}}}else d=s_(l,s,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||o_(h,u),d=t0(a,o,h,u==="in"||u==="not-in");return tt.create(c,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function c2(t,e,n){const r=e,i=Bc("where",t);return jc._create(i,r,n)}class $f extends Uf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new $f(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:mn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)s0(o,l),o=Bh(o,l)}(e._query,n),new er(e.firestore,e.converter,Bh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Bf extends qc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Bf(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new z(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new z(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Co(s,o)}(e._query,this._field,this._direction);return new er(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new vi(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function u2(t,e="asc"){const n=e,r=Bc("orderBy",t);return Bf._create(r,n)}class qf extends qc{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new qf(e,n,r)}_apply(e){return new er(e.firestore,e.converter,Dl(e._query,this._limit,this._limitType))}}function h2(t){return FL("limit",t),qf._create("limit",t,"F")}class jf extends qc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new jf(e,n,r)}_apply(e){const n=XL(e,this.type,this._docOrFields,this._inclusive);return new er(e.firestore,e.converter,function(i,s){return new vi(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function d2(...t){return jf._create("startAfter",t,!1)}function XL(t,e,n,r){if(n[0]=xe(n[0]),n[0]instanceof Ff)return function(s,o,a,l,c){if(!l)throw new z(k.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const u=[];for(const h of Ki(s))if(h.field.isKeyField())u.push(Ol(o,l.key));else{const d=l.data.field(h.field);if(Pc(d))throw new z(k.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const f=h.field.canonicalString();throw new z(k.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}u.push(d)}return new cs(u,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=ua(t.firestore);return function(o,a,l,c,u,h){const d=o.explicitOrderBy;if(u.length>d.length)throw new z(k.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let p=0;p<u.length;p++){const v=u[p];if(d[p].field.isKeyField()){if(typeof v!="string")throw new z(k.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof v}`);if(!_f(o)&&v.indexOf("/")!==-1)throw new z(k.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${v}' contains a slash.`);const g=o.path.child(De.fromString(v));if(!J.isDocumentKey(g))throw new z(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${g}' is not because it contains an odd number of segments.`);const w=new J(g);f.push(Ol(a,w))}else{const g=t0(l,c,v);f.push(g)}}return new cs(f,h)}(t._query,t.firestore._databaseId,i,e,n,r)}}function s_(t,e,n){if(typeof(n=xe(n))=="string"){if(n==="")throw new z(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_f(e)&&n.indexOf("/")!==-1)throw new z(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(De.fromString(n));if(!J.isDocumentKey(r))throw new z(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ol(t,new J(r))}if(n instanceof kt)return Ol(t,n._key);throw new z(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mc(n)}.`)}function o_(t,e){if(!Array.isArray(t)||t.length===0)throw new z(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function s0(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class JL{convertValue(e,n="none"){switch(ui(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ci(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw oe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return yi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Df(Je(e.latitude),Je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=df(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ro(e));default:return null}}convertTimestamp(e){const n=Rr(e);return new rt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=De.fromString(e);Ne(bT(r));const i=new So(r.get(1),r.get(3)),s=new J(r.popFirst(5));return i.isEqual(n)||Gn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class a0 extends Ff{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ya(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Bc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ya extends a0{data(e={}){return super.data(e)}}class ZL{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Us(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ya(this._firestore,this._userDataWriter,r.key,r,new Us(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Ya(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Us(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Ya(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Us(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:eV(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function eV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f2(t){t=gn(t,kt);const e=gn(t.firestore,Ei);return LL(Of(e),t._key).then(n=>nV(e,t,n))}class l0 extends JL{constructor(e){super(),this.firestore=e}convertBytes(e){return new ds(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new kt(this.firestore,null,n)}}function p2(t){t=gn(t,er);const e=gn(t.firestore,Ei),n=Of(e),r=new l0(e);return YL(t._query),VL(n,t._query).then(i=>new ZL(e,r,t,i))}function m2(t,e,n){t=gn(t,kt);const r=gn(t.firestore,Ei),i=o0(t.converter,e,n);return zc(r,[e0(ua(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Jt.none())])}function tV(t,e,n,...r){t=gn(t,kt);const i=gn(t.firestore,Ei),s=ua(i);let o;return o=typeof(e=xe(e))=="string"||e instanceof Uc?KL(s,"updateDoc",t._key,e,n,r):WL(s,"updateDoc",t._key,e),zc(i,[o.toMutation(t._key,Jt.exists(!0))])}function g2(t){return zc(gn(t.firestore,Ei),[new yf(t._key,Jt.none())])}function _2(t,e){const n=gn(t.firestore,Ei),r=YT(t),i=o0(t.converter,e);return zc(n,[e0(ua(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Jt.exists(!1))]).then(()=>r)}function zc(t,e){return function(r,i){const s=new zn;return r.asyncQueue.enqueueAndForget(async()=>EL(await NL(r),i,s)),s.promise}(Of(t),e)}function nV(t,e,n){const r=n.docs.get(e._key),i=new l0(t);return new a0(t,i,e._key,r,new Us(n.hasPendingWrites,n.fromCache),e.converter)}function y2(){return new Lf("serverTimestamp")}function v2(t){return new HL("increment",t)}(function(e,n=!0){(function(i){ys=i})(gi),fn(new Zt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ei(new aD(r.getProvider("auth-internal")),new hD(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new z(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new So(c.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Lt(Rg,"4.4.0",e),Lt(Rg,"4.4.0","esm2017")})();var rV="firebase",iV="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt(rV,iV,"app");const sV=(t,e)=>e.some(n=>t instanceof n);let a_,l_;function oV(){return a_||(a_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aV(){return l_||(l_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const c0=new WeakMap,Qh=new WeakMap,u0=new WeakMap,Nu=new WeakMap,zf=new WeakMap;function lV(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Tr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&c0.set(n,t)}).catch(()=>{}),zf.set(e,t),e}function cV(t){if(Qh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Qh.set(t,e)}let Yh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||u0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uV(t){Yh=t(Yh)}function hV(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Lu(this),e,...n);return u0.set(r,e.sort?e.sort():[e]),Tr(r)}:aV().includes(t)?function(...e){return t.apply(Lu(this),e),Tr(c0.get(this))}:function(...e){return Tr(t.apply(Lu(this),e))}}function dV(t){return typeof t=="function"?hV(t):(t instanceof IDBTransaction&&cV(t),sV(t,oV())?new Proxy(t,Yh):t)}function Tr(t){if(t instanceof IDBRequest)return lV(t);if(Nu.has(t))return Nu.get(t);const e=dV(t);return e!==t&&(Nu.set(t,e),zf.set(e,t)),e}const Lu=t=>zf.get(t);function fV(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Tr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Tr(o.result),l.oldVersion,l.newVersion,Tr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const pV=["get","getKey","getAll","getAllKeys","count"],mV=["put","add","delete","clear"],Vu=new Map;function c_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vu.get(e))return Vu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=mV.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||pV.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Vu.set(e,s),s}uV(t=>({...t,get:(e,n,r)=>c_(e,n)||t.get(e,n,r),has:(e,n)=>!!c_(e,n)||t.has(e,n)}));const h0="@firebase/installations",Hf="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=1e4,f0=`w:${Hf}`,p0="FIS_v2",gV="https://firebaseinstallations.googleapis.com/v1",_V=60*60*1e3,yV="installations",vV="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wV={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},hi=new mi(yV,vV,wV);function m0(t){return t instanceof tn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0({projectId:t}){return`${gV}/projects/${t}/installations`}function _0(t){return{token:t.token,requestStatus:2,expiresIn:TV(t.expiresIn),creationTime:Date.now()}}async function y0(t,e){const r=(await e.json()).error;return hi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function v0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function EV(t,{refreshToken:e}){const n=v0(t);return n.append("Authorization",IV(e)),n}async function w0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function TV(t){return Number(t.replace("s","000"))}function IV(t){return`${p0} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bV({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=g0(t),i=v0(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:p0,appId:t.appId,sdkVersion:f0},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await w0(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:_0(c.authToken)}}else throw await y0("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AV(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RV=/^[cdef][\w-]{21}$/,Xh="";function SV(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=PV(t);return RV.test(n)?n:Xh}catch{return Xh}}function PV(t){return AV(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0=new Map;function I0(t,e){const n=Hc(t);b0(n,e),CV(n,e)}function b0(t,e){const n=T0.get(t);if(!!n)for(const r of n)r(e)}function CV(t,e){const n=kV();n&&n.postMessage({key:t,fid:e}),xV()}let Kr=null;function kV(){return!Kr&&"BroadcastChannel"in self&&(Kr=new BroadcastChannel("[Firebase] FID Change"),Kr.onmessage=t=>{b0(t.data.key,t.data.fid)}),Kr}function xV(){T0.size===0&&Kr&&(Kr.close(),Kr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OV="firebase-installations-database",DV=1,di="firebase-installations-store";let Mu=null;function Wf(){return Mu||(Mu=fV(OV,DV,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(di)}}})),Mu}async function Ml(t,e){const n=Hc(t),i=(await Wf()).transaction(di,"readwrite"),s=i.objectStore(di),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&I0(t,e.fid),e}async function A0(t){const e=Hc(t),r=(await Wf()).transaction(di,"readwrite");await r.objectStore(di).delete(e),await r.done}async function Wc(t,e){const n=Hc(t),i=(await Wf()).transaction(di,"readwrite"),s=i.objectStore(di),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&I0(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kf(t){let e;const n=await Wc(t.appConfig,r=>{const i=NV(r),s=LV(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Xh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function NV(t){const e=t||{fid:SV(),registrationStatus:0};return R0(e)}function LV(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(hi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=VV(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:MV(t)}:{installationEntry:e}}async function VV(t,e){try{const n=await bV(t,e);return Ml(t.appConfig,n)}catch(n){throw m0(n)&&n.customData.serverCode===409?await A0(t.appConfig):await Ml(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function MV(t){let e=await u_(t.appConfig);for(;e.registrationStatus===1;)await E0(100),e=await u_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Kf(t);return r||n}return e}function u_(t){return Wc(t,e=>{if(!e)throw hi.create("installation-not-found");return R0(e)})}function R0(t){return FV(t)?{fid:t.fid,registrationStatus:0}:t}function FV(t){return t.registrationStatus===1&&t.registrationTime+d0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UV({appConfig:t,heartbeatServiceProvider:e},n){const r=$V(t,n),i=EV(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:f0,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await w0(()=>fetch(r,a));if(l.ok){const c=await l.json();return _0(c)}else throw await y0("Generate Auth Token",l)}function $V(t,{fid:e}){return`${g0(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gf(t,e=!1){let n;const r=await Wc(t.appConfig,s=>{if(!S0(s))throw hi.create("not-registered");const o=s.authToken;if(!e&&jV(o))return s;if(o.requestStatus===1)return n=BV(t,e),s;{if(!navigator.onLine)throw hi.create("app-offline");const a=HV(s);return n=qV(t,a),a}});return n?await n:r.authToken}async function BV(t,e){let n=await h_(t.appConfig);for(;n.authToken.requestStatus===1;)await E0(100),n=await h_(t.appConfig);const r=n.authToken;return r.requestStatus===0?Gf(t,e):r}function h_(t){return Wc(t,e=>{if(!S0(e))throw hi.create("not-registered");const n=e.authToken;return WV(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function qV(t,e){try{const n=await UV(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ml(t.appConfig,r),n}catch(n){if(m0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await A0(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ml(t.appConfig,r)}throw n}}function S0(t){return t!==void 0&&t.registrationStatus===2}function jV(t){return t.requestStatus===2&&!zV(t)}function zV(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+_V}function HV(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function WV(t){return t.requestStatus===1&&t.requestTime+d0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KV(t){const e=t,{installationEntry:n,registrationPromise:r}=await Kf(e);return r?r.catch(console.error):Gf(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GV(t,e=!1){const n=t;return await QV(n),(await Gf(n,e)).token}async function QV(t){const{registrationPromise:e}=await Kf(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YV(t){if(!t||!t.options)throw Fu("App Configuration");if(!t.name)throw Fu("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Fu(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Fu(t){return hi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0="installations",XV="installations-internal",JV=t=>{const e=t.getProvider("app").getImmediate(),n=YV(e),r=Cr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},ZV=t=>{const e=t.getProvider("app").getImmediate(),n=Cr(e,P0).getImmediate();return{getId:()=>KV(n),getToken:i=>GV(n,i)}};function eM(){fn(new Zt(P0,JV,"PUBLIC")),fn(new Zt(XV,ZV,"PRIVATE"))}eM();Lt(h0,Hf);Lt(h0,Hf,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="analytics",tM="firebase_id",nM="origin",rM=60*1e3,iM="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Qf="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt=new oc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sM={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},zt=new mi("analytics","Analytics",sM);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oM(t){if(!t.startsWith(Qf)){const e=zt.create("invalid-gtag-resource",{gtagURL:t});return Vt.warn(e.message),""}return t}function C0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function aM(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function lM(t,e){const n=aM("firebase-js-sdk-policy",{createScriptURL:oM}),r=document.createElement("script"),i=`${Qf}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function cM(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function uM(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await C0(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){Vt.error(a)}t("config",i,s)}async function hM(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await C0(n);for(const l of o){const c=a.find(h=>h.measurementId===l),u=c&&e[c.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Vt.error(s)}}function dM(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await hM(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await uM(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Vt.error(a)}}return i}function fM(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=dM(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function pM(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Qf)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mM=30,gM=1e3;class _M{constructor(e={},n=gM){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const k0=new _M;function yM(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function vM(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:yM(r)},s=iM.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw zt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function wM(t,e=k0,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw zt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw zt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new IM;return setTimeout(async()=>{a.abort()},n!==void 0?n:rM),x0({appId:r,apiKey:i,measurementId:s},o,a,e)}async function x0(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=k0){var s;const{appId:o,measurementId:a}=t;try{await EM(r,e)}catch(l){if(a)return Vt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await vM(t);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!TM(c)){if(i.deleteThrottleMetadata(o),a)return Vt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?$m(n,i.intervalMillis,mM):$m(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,h),Vt.debug(`Calling attemptFetch again in ${u} millis`),x0(t,h,r,i)}}function EM(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(zt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function TM(t){if(!(t instanceof tn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class IM{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function bM(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AM(){if(Zv())try{await ew()}catch(t){return Vt.warn(zt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Vt.warn(zt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function RM(t,e,n,r,i,s,o){var a;const l=wM(t);l.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&Vt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>Vt.error(f)),e.push(l);const c=AM().then(f=>{if(f)return r.getId()}),[u,h]=await Promise.all([l,c]);pM(s)||lM(s,u.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[nM]="firebase",d.update=!0,h!=null&&(d[tM]=h),i("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SM{constructor(e){this.app=e}_delete(){return delete Zs[this.app.options.appId],Promise.resolve()}}let Zs={},d_=[];const f_={};let Uu="dataLayer",PM="gtag",p_,O0,m_=!1;function CM(){const t=[];if(Jv()&&t.push("This is a browser extension environment."),hC()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=zt.create("invalid-analytics-context",{errorInfo:e});Vt.warn(n.message)}}function kM(t,e,n){CM();const r=t.options.appId;if(!r)throw zt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Vt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw zt.create("no-api-key");if(Zs[r]!=null)throw zt.create("already-exists",{id:r});if(!m_){cM(Uu);const{wrappedGtag:s,gtagCore:o}=fM(Zs,d_,f_,Uu,PM);O0=s,p_=o,m_=!0}return Zs[r]=RM(t,d_,f_,e,p_,Uu,n),new SM(t)}function xM(t=ac()){t=xe(t);const e=Cr(t,Fl);return e.isInitialized()?e.getImmediate():OM(t)}function OM(t,e={}){const n=Cr(t,Fl);if(n.isInitialized()){const i=n.getImmediate();if(fo(e,n.getOptions()))return i;throw zt.create("already-initialized")}return n.initialize({options:e})}function DM(t,e,n,r){t=xe(t),bM(O0,Zs[t.app.options.appId],e,n,r).catch(i=>Vt.error(i))}const g_="@firebase/analytics",__="0.10.0";function NM(){fn(new Zt(Fl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return kM(r,i,n)},"PUBLIC")),fn(new Zt("analytics-internal",t,"PRIVATE")),Lt(g_,__),Lt(g_,__,"esm2017");function t(e){try{const n=e.getProvider(Fl).getImmediate();return{logEvent:(r,i,s)=>DM(n,r,i,s)}}catch(n){throw zt.create("interop-component-reg-failed",{reason:n})}}}NM();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0="firebasestorage.googleapis.com",N0="storageBucket",LM=2*60*1e3,VM=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends tn{constructor(e,n,r=0){super($u(e),`Firebase Storage: ${n} (${$u(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ke.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return $u(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var He;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(He||(He={}));function $u(t){return"storage/"+t}function Yf(){const t="An unknown error occurred, please check the error payload for server response.";return new Ke(He.UNKNOWN,t)}function MM(t){return new Ke(He.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function FM(t){return new Ke(He.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function UM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ke(He.UNAUTHENTICATED,t)}function $M(){return new Ke(He.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function BM(t){return new Ke(He.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function qM(){return new Ke(He.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function jM(){return new Ke(He.CANCELED,"User canceled the upload/download.")}function zM(t){return new Ke(He.INVALID_URL,"Invalid URL '"+t+"'.")}function HM(t){return new Ke(He.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function WM(){return new Ke(He.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+N0+"' property when initializing the app?")}function KM(){return new Ke(He.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function GM(){return new Ke(He.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function QM(t){return new Ke(He.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Jh(t){return new Ke(He.INVALID_ARGUMENT,t)}function L0(){return new Ke(He.APP_DELETED,"The Firebase app was deleted.")}function YM(t){return new Ke(He.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function eo(t,e){return new Ke(He.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ss(t){throw new Ke(He.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=jt.makeFromUrl(e,n)}catch{return new jt(e,"")}if(r.path==="")return r;throw HM(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(E){E.path_=decodeURIComponent(E.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},v=n===D0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,g="([^?#]*)",w=new RegExp(`^https?://${v}/${i}/${g}`,"i"),T=[{regex:a,indices:l,postModify:s},{regex:f,indices:p,postModify:c},{regex:w,indices:{bucket:1,path:2},postModify:c}];for(let E=0;E<T.length;E++){const b=T[E],M=b.regex.exec(e);if(M){const V=M[b.indices.bucket];let A=M[b.indices.path];A||(A=""),r=new jt(V,A),b.postModify(r);break}}if(r==null)throw zM(e);return r}}class XM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JM(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...g){c||(c=!0,e.apply(null,g))}function h(g){i=setTimeout(()=>{i=null,t(f,l())},g)}function d(){s&&clearTimeout(s)}function f(g,...w){if(c){d();return}if(g){d(),u.call(null,g,...w);return}if(l()||o){d(),u.call(null,g,...w);return}r<64&&(r*=2);let T;a===1?(a=2,T=0):T=(r+Math.random())*1e3,h(T)}let p=!1;function v(g){p||(p=!0,d(),!c&&(i!==null?(g||(a=2),clearTimeout(i),h(0)):g||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function ZM(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eF(t){return t!==void 0}function tF(t){return typeof t=="object"&&!Array.isArray(t)}function Xf(t){return typeof t=="string"||t instanceof String}function y_(t){return Jf()&&t instanceof Blob}function Jf(){return typeof Blob!="undefined"}function v_(t,e,n,r){if(r<e)throw Jh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Jh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function V0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ti;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ti||(ti={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nF(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rF{constructor(e,n,r,i,s,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Oa(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ti.NO_ERROR,l=s.getStatus();if(!a||nF(l,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===ti.ABORT;r(!1,new Oa(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Oa(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());eF(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Yf();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?L0():jM();o(l)}else{const l=qM();o(l)}};this.canceled_?n(!1,new Oa(!1,null,!0)):this.backoffId_=JM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ZM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Oa{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function iF(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function sF(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function oF(t,e){e&&(t["X-Firebase-GMPID"]=e)}function aF(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function lF(t,e,n,r,i,s,o=!0){const a=V0(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return oF(c,e),iF(c,n),sF(c,s),aF(c,r),new rF(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cF(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function uF(...t){const e=cF();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Jf())return new Blob(t);throw new Ke(He.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function hF(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dF(t){if(typeof atob=="undefined")throw QM("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Bu{constructor(e,n){this.data=e,this.contentType=n||null}}function fF(t,e){switch(t){case Rn.RAW:return new Bu(M0(e));case Rn.BASE64:case Rn.BASE64URL:return new Bu(F0(t,e));case Rn.DATA_URL:return new Bu(mF(e),gF(e))}throw Yf()}function M0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function pF(t){let e;try{e=decodeURIComponent(t)}catch{throw eo(Rn.DATA_URL,"Malformed data URL.")}return M0(e)}function F0(t,e){switch(t){case Rn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw eo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Rn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw eo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=dF(e)}catch(i){throw i.message.includes("polyfill")?i:eo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class U0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw eo(Rn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=_F(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function mF(t){const e=new U0(t);return e.base64?F0(Rn.BASE64,e.rest):pF(e.rest)}function gF(t){return new U0(t).contentType}function _F(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n){let r=0,i="";y_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(y_(this.data_)){const r=this.data_,i=hF(r,e,n);return i===null?null:new mr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new mr(r,!0)}}static getBlob(...e){if(Jf()){const n=e.map(r=>r instanceof mr?r.data_:r);return new mr(uF.apply(null,n))}else{const n=e.map(o=>Xf(o)?fF(Rn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new mr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(t){let e;try{e=JSON.parse(t)}catch{return null}return tF(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yF(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function vF(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function B0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wF(t,e){return e}class At{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||wF}}let Da=null;function EF(t){return!Xf(t)||t.length<2?t:B0(t)}function q0(){if(Da)return Da;const t=[];t.push(new At("bucket")),t.push(new At("generation")),t.push(new At("metageneration")),t.push(new At("name","fullPath",!0));function e(s,o){return EF(o)}const n=new At("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new At("size");return i.xform=r,t.push(i),t.push(new At("timeCreated")),t.push(new At("updated")),t.push(new At("md5Hash",null,!0)),t.push(new At("cacheControl",null,!0)),t.push(new At("contentDisposition",null,!0)),t.push(new At("contentEncoding",null,!0)),t.push(new At("contentLanguage",null,!0)),t.push(new At("contentType",null,!0)),t.push(new At("metadata","customMetadata",!0)),Da=t,Da}function TF(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new jt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function IF(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return TF(r,t),r}function j0(t,e,n){const r=$0(e);return r===null?null:IF(t,r,n)}function bF(t,e,n,r){const i=$0(e);if(i===null||!Xf(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=Zf(d,n,r),p=V0({alt:"media",token:c});return f+p})[0]}function AF(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class z0{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(t){if(!t)throw Yf()}function RF(t,e){function n(r,i){const s=j0(t,i,e);return H0(s!==null),s}return n}function SF(t,e){function n(r,i){const s=j0(t,i,e);return H0(s!==null),bF(s,i,t.host,t._protocol)}return n}function W0(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=$M():i=UM():n.getStatus()===402?i=FM(t.bucket):n.getStatus()===403?i=BM(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function PF(t){const e=W0(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=MM(t.path)),s.serverResponse=i.serverResponse,s}return n}function CF(t,e,n){const r=e.fullServerUrl(),i=Zf(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new z0(i,s,SF(t,n),o);return a.errorHandler=PF(e),a}function kF(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function xF(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=kF(null,e)),r}function OF(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let T="";for(let E=0;E<2;E++)T=T+Math.random().toString().slice(2);return T}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=xF(e,r,i),u=AF(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",f=mr.getBlob(h,r,d);if(f===null)throw KM();const p={name:c.fullPath},v=Zf(s,t.host,t._protocol),g="POST",w=t.maxUploadRetryTime,_=new z0(v,g,RF(t,n),w);return _.urlParams=p,_.headers=o,_.body=f.uploadData(),_.errorHandler=W0(e),_}class DF{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ti.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ti.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ti.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Ss("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ss("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ss("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ss("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ss("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class NF extends DF{initXhr(){this.xhr_.responseType="text"}}function K0(){return new NF}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n){this._service=e,n instanceof jt?this._location=n:this._location=jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new fi(e,n)}get root(){const e=new jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return B0(this._location.path)}get storage(){return this._service}get parent(){const e=yF(this._location.path);if(e===null)return null;const n=new jt(this._location.bucket,e);return new fi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw YM(e)}}function LF(t,e,n){t._throwIfRoot("uploadBytes");const r=OF(t.storage,t._location,q0(),new mr(e,!0),n);return t.storage.makeRequestWithTokens(r,K0).then(i=>({metadata:i,ref:t}))}function VF(t){t._throwIfRoot("getDownloadURL");const e=CF(t.storage,t._location,q0());return t.storage.makeRequestWithTokens(e,K0).then(n=>{if(n===null)throw GM();return n})}function MF(t,e){const n=vF(t._location.path,e),r=new jt(t._location.bucket,n);return new fi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FF(t){return/^[A-Za-z]+:\/\//.test(t)}function UF(t,e){return new fi(t,e)}function G0(t,e){if(t instanceof ep){const n=t;if(n._bucket==null)throw WM();const r=new fi(n,n._bucket);return e!=null?G0(r,e):r}else return e!==void 0?MF(t,e):t}function $F(t,e){if(e&&FF(e)){if(t instanceof ep)return UF(t,e);throw Jh("To use ref(service, url), the first argument must be a Storage instance.")}else return G0(t,e)}function w_(t,e){const n=e==null?void 0:e[N0];return n==null?null:jt.makeFromBucketSpec(n,t)}function BF(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Xv(i,t.app.options.projectId))}class ep{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=D0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=LM,this._maxUploadRetryTime=VM,this._requests=new Set,i!=null?this._bucket=jt.makeFromBucketSpec(i,this._host):this._bucket=w_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=jt.makeFromBucketSpec(this._url,e):this._bucket=w_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){v_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){v_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new fi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new XM(L0());{const o=lF(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const E_="@firebase/storage",T_="0.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0="storage";function w2(t,e,n){return t=xe(t),LF(t,e,n)}function E2(t){return t=xe(t),VF(t)}function T2(t,e){return t=xe(t),$F(t,e)}function qF(t=ac(),e){t=xe(t);const r=Cr(t,Q0).getImmediate({identifier:e}),i=Gv("storage");return i&&jF(r,...i),r}function jF(t,e,n,r={}){BF(t,e,n,r)}function zF(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new ep(n,r,i,e,gi)}function HF(){fn(new Zt(Q0,zF,"PUBLIC").setMultipleInstances(!0)),Lt(E_,T_,""),Lt(E_,T_,"esm2017")}HF();const WF={apiKey:"AIzaSyBdvcZU4OH2B1UfFDQk61pNrG51609fxB0",authDomain:"wonder202-vue3-firebase-app.firebaseapp.com",projectId:"wonder202-vue3-firebase-app",storageBucket:"wonder202-vue3-firebase-app.appspot.com",messagingSenderId:"567891399603",appId:"1:567891399603:web:242b6da7ddc042c06031c6",measurementId:"G-V7G3M4068M"},Kc=rw(WF);xM(Kc);const _n=Jx(Kc),Y0=BL(Kc),KF=qF(Kc);var GF=async()=>{const t=jv();U1(_n,e=>{t.setUser(e)})},QF=Object.freeze(Object.defineProperty({__proto__:null,auth:_n,db:Y0,storage:KF,default:GF},Symbol.toStringTag,{value:"Module"}));const YF="https://api.dicebear.com/7.x/bottts-neutral/svg?seed=";async function I2(){const t=new Fn,{user:e}=await ax(_n,t);return e}async function XF(){await $1(_n)}async function b2({email:t,password:e}){const{user:n}=await x1(_n,t,e);await Cw(n,{displayName:t.split("@")[0],photoURL:J0(n.uid)}),X0()}async function A2({email:t,password:e}){const{user:n}=await O1(_n,t,e);return n}async function R2(t){await k1(_n,t)}async function S2(t){await L1(_n.currentUser,t)}async function X0(){await D1(_n.currentUser)}async function P2(t){await Cw(_n.currentUser,{displayName:t}),await tV(YT(Y0,"users",_n.currentUser.uid),{displayName:t})}function J0(t){return`${YF}${t}`}var JF={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(self,()=>(()=>{var n={d:(h,d)=>{for(var f in d)n.o(d,f)&&!n.o(h,f)&&Object.defineProperty(h,f,{enumerable:!0,get:d[f]})},o:(h,d)=>Object.prototype.hasOwnProperty.call(h,d),r:h=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(h,"__esModule",{value:!0})}},r={};function i(){return document.createElement("canvas")}function s(h){for(var d=atob(h.split(",")[1]),f=h.split(",")[0].split(":")[1].split(";")[0],p=new ArrayBuffer(d.length),v=new Uint8Array(p),g=0;g<d.length;g++)v[g]=d.charCodeAt(g);return new Blob([p],{type:f})}function o(h,d){var f=d.width/d.height,p=Math.min(d.width,h.maxWidth,f*h.maxHeight);return h.maxSize>0&&h.maxSize<d.width*d.height/1e3&&(p=Math.min(p,Math.floor(1e3*h.maxSize/d.height))),h.scaleRatio&&(p=Math.min(p,Math.floor(h.scaleRatio*d.width))),h.debug&&(console.log("browser-image-resizer: original image size = "+d.width+" px (width) X "+d.height+" px (height)"),console.log("browser-image-resizer: scaled image size = "+p+" px (width) X "+Math.floor(p/f)+" px (height)")),p<=0&&(p=1,console.warn("browser-image-resizer: image size is too small")),p}function a(h,d){var f=document.createElement("canvas"),p=d.outputWidth/h.width;f.width=h.width*p,f.height=h.height*p;var v=h.getContext("2d").getImageData(0,0,h.width,h.height),g=f.getContext("2d").createImageData(f.width,f.height);return function(w,_,T){function E(Wt,me,_e,S,W,P){var Q=1-W,Ee=1-P;return Wt*Q*Ee+me*W*Ee+_e*Q*P+S*W*P}var b,M,V,A,R,U,G,$,ie,j,se,Z,ge,he,Be,lt,ct,qe,mt;for(b=0;b<_.height;++b)for(V=b/T,A=Math.floor(V),R=Math.ceil(V)>w.height-1?w.height-1:Math.ceil(V),M=0;M<_.width;++M)U=M/T,G=Math.floor(U),$=Math.ceil(U)>w.width-1?w.width-1:Math.ceil(U),ie=4*(M+_.width*b),j=4*(G+w.width*A),se=4*($+w.width*A),Z=4*(G+w.width*R),ge=4*($+w.width*R),he=U-G,Be=V-A,lt=E(w.data[j],w.data[se],w.data[Z],w.data[ge],he,Be),_.data[ie]=lt,ct=E(w.data[j+1],w.data[se+1],w.data[Z+1],w.data[ge+1],he,Be),_.data[ie+1]=ct,qe=E(w.data[j+2],w.data[se+2],w.data[Z+2],w.data[ge+2],he,Be),_.data[ie+2]=qe,mt=E(w.data[j+3],w.data[se+3],w.data[Z+3],w.data[ge+3],he,Be),_.data[ie+3]=mt}(v,g,p),f.getContext("2d").putImageData(g,0,0),f}function l(h){var d=document.createElement("canvas");return d.width=h.width/2,d.height=h.height/2,d.getContext("2d").drawImage(h,0,0,d.width,d.height),d}n.r(r),n.d(r,{readAndCompressImage:()=>u});var c={quality:.5,maxWidth:800,maxHeight:600,autoRotate:!0,debug:!1,mimeType:"image/jpeg"};function u(h,d){return new Promise(function(f,p){var v=document.createElement("img"),g=new FileReader,w=Object.assign({},c,d);g.onload=function(_){v.onerror=function(){p("cannot load image.")},v.onload=function(){var T={img:v,config:w};try{var E=function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},M=b.img,V=b.config,A=(b.orientation,i());A.width=M.width,A.height=M.height;var R=A.getContext("2d");V.mimeType==="image/jpeg"&&(R.fillStyle="#ffffff",R.fillRect(0,0,A.width,A.height),R.save()),R.drawImage(M,0,0),R.restore();for(var U=o(V,A);A.width>=2*U;)A=l(A);A.width>U&&(A=a(A,Object.assign(V,{outputWidth:U})));var G=A.toDataURL(V.mimeType,V.quality);return typeof V.onScale=="function"&&V.onScale(G),s(G)}(T);f(E)}catch(b){p(b)}},v.src=_.target.result};try{g.onerror=function(){p("cannot read image file.")},g.readAsDataURL(h)}catch(_){p(_)}})}return r})())})(JF);var I_=Qe({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(t,{slots:e}){const n=O(()=>`q-card__section q-card__section--${t.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>q(t.tag,{class:n.value},Xn(e.default))}}),ZF=Qe({name:"QCard",props:{...Bo,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(t,{slots:e}){const{proxy:{$q:n}}=We(),r=qo(t,n),i=O(()=>"q-card"+(r.value===!0?" q-card--dark q-dark":"")+(t.bordered===!0?" q-card--bordered":"")+(t.square===!0?" q-card--square no-border-radius":"")+(t.flat===!0?" q-card--flat no-shadow":""));return()=>q(t.tag,{class:i.value},Xn(e.default))}});function eU(t,e,n){let r;function i(){r!==void 0&&(sh.remove(r),r=void 0)}return xt(()=>{t.value===!0&&i()}),{removeFromHistory:i,addToHistory(){r={condition:()=>n.value===!0,handler:e},sh.add(r)}}}let Ps=0,qu,ju,$s,zu=!1,b_,A_,R_,Vr=null;function tU(t){nU(t)&&Mn(t)}function nU(t){if(t.target===document.body||t.target.classList.contains("q-layout__backdrop"))return!0;const e=HA(t),n=t.shiftKey&&!t.deltaX,r=!n&&Math.abs(t.deltaX)<=Math.abs(t.deltaY),i=n||r?t.deltaY:t.deltaX;for(let s=0;s<e.length;s++){const o=e[s];if(yP(o,r))return r?i<0&&o.scrollTop===0?!0:i>0&&o.scrollTop+o.clientHeight===o.scrollHeight:i<0&&o.scrollLeft===0?!0:i>0&&o.scrollLeft+o.clientWidth===o.scrollWidth}return!0}function S_(t){t.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function Na(t){zu!==!0&&(zu=!0,requestAnimationFrame(()=>{zu=!1;const{height:e}=t.target,{clientHeight:n,scrollTop:r}=document.scrollingElement;($s===void 0||e!==window.innerHeight)&&($s=n-e,document.scrollingElement.scrollTop=r),r>$s&&(document.scrollingElement.scrollTop-=Math.ceil((r-$s)/8))}))}function P_(t){const e=document.body,n=window.visualViewport!==void 0;if(t==="add"){const{overflowY:r,overflowX:i}=window.getComputedStyle(e);qu=Nv(window),ju=Dv(window),b_=e.style.left,A_=e.style.top,R_=window.location.href,e.style.left=`-${qu}px`,e.style.top=`-${ju}px`,i!=="hidden"&&(i==="scroll"||e.scrollWidth>window.innerWidth)&&e.classList.add("q-body--force-scrollbar-x"),r!=="hidden"&&(r==="scroll"||e.scrollHeight>window.innerHeight)&&e.classList.add("q-body--force-scrollbar-y"),e.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,je.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",Na,Ze.passiveCapture),window.visualViewport.addEventListener("scroll",Na,Ze.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",S_,Ze.passiveCapture))}je.is.desktop===!0&&je.is.mac===!0&&window[`${t}EventListener`]("wheel",tU,Ze.notPassive),t==="remove"&&(je.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",Na,Ze.passiveCapture),window.visualViewport.removeEventListener("scroll",Na,Ze.passiveCapture)):window.removeEventListener("scroll",S_,Ze.passiveCapture)),e.classList.remove("q-body--prevent-scroll"),e.classList.remove("q-body--force-scrollbar-x"),e.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,e.style.left=b_,e.style.top=A_,window.location.href===R_&&window.scrollTo(qu,ju),$s=void 0)}function rU(t){let e="add";if(t===!0){if(Ps++,Vr!==null){clearTimeout(Vr),Vr=null;return}if(Ps>1)return}else{if(Ps===0||(Ps--,Ps>0))return;if(e="remove",je.is.ios===!0&&je.is.nativeMobile===!0){Vr!==null&&clearTimeout(Vr),Vr=setTimeout(()=>{P_(e),Vr=null},100);return}}P_(e)}function iU(){let t;return{preventBodyScroll(e){e!==t&&(t!==void 0||e===!0)&&(t=e,rU(e))}}}let La=0;const sU={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},C_={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var oU=Qe({name:"QDialog",inheritAttrs:!1,props:{...Ev,...Pv,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:t=>t==="standard"||["top","bottom","left","right"].includes(t)}},emits:[...Tv,"shake","click","escapeKey"],setup(t,{slots:e,emit:n,attrs:r}){const i=We(),s=ue(null),o=ue(!1),a=ue(!1);let l=null,c=null,u,h;const d=O(()=>t.persistent!==!0&&t.noRouteDismiss!==!0&&t.seamless!==!0),{preventBodyScroll:f}=iU(),{registerTimeout:p}=xv(),{registerTick:v,removeTick:g}=kv(),{transitionProps:w,transitionStyle:_}=Cv(t,()=>C_[t.position][0],()=>C_[t.position][1]),{showPortal:T,hidePortal:E,portalIsAccessible:b,renderPortal:M}=Sv(i,s,Wt,"dialog"),{hide:V}=Iv({showing:o,hideOnRouteChange:d,handleShow:j,handleHide:se,processOnMount:!0}),{addToHistory:A,removeFromHistory:R}=eU(o,V,d),U=O(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${t.maximized===!0?"maximized":"minimized"} q-dialog__inner--${t.position} ${sU[t.position]}`+(a.value===!0?" q-dialog__inner--animating":"")+(t.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(t.fullHeight===!0?" q-dialog__inner--fullheight":"")+(t.square===!0?" q-dialog__inner--square":"")),G=O(()=>o.value===!0&&t.seamless!==!0),$=O(()=>t.autoClose===!0?{onClick:ct}:{}),ie=O(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${G.value===!0?"modal":"seamless"}`,r.class]);ke(()=>t.maximized,me=>{o.value===!0&&lt(me)}),ke(G,me=>{f(me),me===!0?(Fv(mt),Vv(he)):(fh(mt),dl(he))});function j(me){A(),c=t.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,lt(t.maximized),T(),a.value=!0,t.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),v(Z)):g(),p(()=>{if(i.proxy.$q.platform.is.ios===!0){if(t.seamless!==!0&&document.activeElement){const{top:_e,bottom:S}=document.activeElement.getBoundingClientRect(),{innerHeight:W}=window,P=window.visualViewport!==void 0?window.visualViewport.height:W;_e>0&&S>P/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-P,S>=W?1/0:Math.ceil(document.scrollingElement.scrollTop+S-P/2))),document.activeElement.scrollIntoView()}h=!0,s.value.click(),h=!1}T(!0),a.value=!1,n("show",me)},t.transitionDuration)}function se(me){g(),R(),Be(!0),a.value=!0,E(),c!==null&&(((me&&me.type.indexOf("key")===0?c.closest('[tabindex]:not([tabindex^="-"])'):void 0)||c).focus(),c=null),p(()=>{E(!0),a.value=!1,n("hide",me)},t.transitionDuration)}function Z(me){Av(()=>{let _e=s.value;_e===null||_e.contains(document.activeElement)===!0||(_e=(me!==""?_e.querySelector(me):null)||_e.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||_e.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||_e.querySelector("[autofocus], [data-autofocus]")||_e,_e.focus({preventScroll:!0}))})}function ge(me){me&&typeof me.focus=="function"?me.focus({preventScroll:!0}):Z(),n("shake");const _e=s.value;_e!==null&&(_e.classList.remove("q-animate--scale"),_e.classList.add("q-animate--scale"),l!==null&&clearTimeout(l),l=setTimeout(()=>{l=null,s.value!==null&&(_e.classList.remove("q-animate--scale"),Z())},170))}function he(){t.seamless!==!0&&(t.persistent===!0||t.noEscDismiss===!0?t.maximized!==!0&&t.noShake!==!0&&ge():(n("escapeKey"),V()))}function Be(me){l!==null&&(clearTimeout(l),l=null),(me===!0||o.value===!0)&&(lt(!1),t.seamless!==!0&&(f(!1),fh(mt),dl(he))),me!==!0&&(c=null)}function lt(me){me===!0?u!==!0&&(La<1&&document.body.classList.add("q-body--dialog"),La++,u=!0):u===!0&&(La<2&&document.body.classList.remove("q-body--dialog"),La--,u=!1)}function ct(me){h!==!0&&(V(me),n("click",me))}function qe(me){t.persistent!==!0&&t.noBackdropDismiss!==!0?V(me):t.noShake!==!0&&ge()}function mt(me){t.allowFocusOutside!==!0&&b.value===!0&&fv(s.value,me.target)!==!0&&Z('[tabindex]:not([tabindex="-1"])')}Object.assign(i.proxy,{focus:Z,shake:ge,__updateRefocusTarget(me){c=me||null}}),xt(Be);function Wt(){return q("div",{role:"dialog","aria-modal":G.value===!0?"true":"false",...r,class:ie.value},[q(Zi,{name:"q-transition--fade",appear:!0},()=>G.value===!0?q("div",{class:"q-dialog__backdrop fixed-full",style:_.value,"aria-hidden":"true",tabindex:-1,onClick:qe}):null),q(Zi,w.value,()=>o.value===!0?q("div",{ref:s,class:U.value,style:_.value,tabindex:-1,...$.value},Xn(e.default)):null)])}return M}});const aU={__name:"AuthDialog",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const n=e,r=()=>{n("update:modelValue",!1)},i=ue("LoginForm"),s=a=>i.value=a,o={LoginForm:Jc(()=>Ae(()=>import("./LoginForm.410b361d.js"),["assets/LoginForm.410b361d.js","assets/QInput.8657458d.js","assets/uid.42677368.js","assets/QForm.a192e15e.js","assets/validate-rules.6596e294.js","assets/DisplayError.5b3d1c99.js","assets/error-message.02f68539.js"])),JoinForm:Jc(()=>Ae(()=>import("./JoinForm.b76307e0.js"),["assets/JoinForm.b76307e0.js","assets/QInput.8657458d.js","assets/uid.42677368.js","assets/QForm.a192e15e.js","assets/DisplayError.5b3d1c99.js","assets/error-message.02f68539.js","assets/validate-rules.6596e294.js"])),FindPasswordForm:Jc(()=>Ae(()=>import("./FindPasswordForm.cc57645d.js"),["assets/FindPasswordForm.cc57645d.js","assets/QInput.8657458d.js","assets/uid.42677368.js","assets/QForm.a192e15e.js","assets/validate-rules.6596e294.js"]))};return(a,l)=>($t(),on(oU,{"model-value":t.modelValue,"onUpdate:modelValue":l[0]||(l[0]=c=>a.$emit("update:modelValue",c)),onHide:l[1]||(l[1]=c=>s("LoginForm"))},{default:Ge(()=>[fe(ZF,{style:{width:"400px"}},{default:Ge(()=>[fe(I_,{class:"flex"},{default:Ge(()=>[fe(vv),Ui(fe(ur,{icon:"close",flat:"",round:"",dense:""},null,512),[[qa]])]),_:1}),fe(I_,{class:"q-px-xl q-pb-xl"},{default:Ge(()=>[($t(),on(cb(o[i.value]),{onChangeViewVal:s,onCloseDialog:r},null,32))]),_:1})]),_:1})]),_:1},8,["model-value"]))}},lU={key:0,src:"/logoDark.png",style:{height:"70px","max-width":"215px"}},cU={key:1,src:"/logo.png",style:{height:"70px","max-width":"215px"}},uU=["src"],hU={__name:"default",setup(t){const e=SS(),n=jv(),r=PS(),i=O(()=>{var p;return{maxWidth:((p=r.meta)==null?void 0:p.width)||"1080px",margin:"0 auto"}}),s=ue(!1),o=()=>{s.value=!0},a=async()=>{await XF(),c.notify("\uB85C\uADF8\uC544\uC6C3 \uB418\uC5C8\uC2B5\uB2C8\uB2E4."),e.push("/")},l=async()=>{await X0(),c.notify("\uC778\uC99D \uBA54\uC77C\uC744 \uBCF4\uB0C8\uC2B5\uB2C8\uB2E4. \uC774\uBA54\uC77C\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.")},c=LP();function u(){c.dark.toggle()}ke(()=>c.dark.isActive,p=>{c.localStorage.set("darkMode",p)});const h=O(()=>c.dark.isActive?"bg-black text-white-9":"bg-white text-grey-9"),d=O(()=>c.dark.isActive?"Light":"Dark");return c.localStorage.getItem("darkMode")&&c.dark.set(!0),(p,v)=>{const g=ay("router-view");return $t(),on(NP,{view:"lHh Lpr lff"},{default:Ge(()=>[fe(kP,{bordered:"",class:Vo(h.value)},{default:Ge(()=>[fe(PP,null,{default:Ge(()=>[fe(ur,{flat:"",dense:"",to:"/"},{default:Ge(()=>[St(c).dark.isActive?($t(),Cp("img",lU)):($t(),Cp("img",cU))]),_:1}),fe(vv),fe(ur,{stretch:"",flat:"",onClick:u},{default:Ge(()=>[Os(EI(d.value),1)]),_:1}),fe(ur,{stretch:"",flat:"",label:"\uBCF4\uB7EC\uAC00\uAE30",href:"http://netflix.com",target:"_blank"}),fe(ur,{stretch:"",flat:"",label:"\uB3D9\uC601\uC0C1 \uB9AC\uBDF0",href:"https://youtube.com/",target:"_blank"}),fe(iP,{class:"q-my-md q-mr-md",vertical:""}),St(n).isAuthentication?kp("",!0):($t(),on(ur,{key:0,onClick:o,rounded:"",color:"indigo",label:"\uB85C\uADF8\uC778 / \uD68C\uC6D0\uAC00\uC785",unelevated:""})),St(n).isAuthentication?($t(),on(ur,{key:1,round:"",flat:""},{default:Ge(()=>[fe(wv,null,{default:Ge(()=>[wd("img",{src:St(n).user.photoURL||St(J0)(St(n).user.uid)},null,8,uU)]),_:1}),fe(SP,null,{default:Ge(()=>[fe(sP,{style:{"min-width":"180px"}},{default:Ge(()=>[St(n).user.emailVerified?Ui(($t(),on(fu,{key:0,clickable:"",to:"/mypage/profile"},{default:Ge(()=>[fe(du,null,{default:Ge(()=>[Os("\uD504\uB85C\uD544")]),_:1})]),_:1})),[[qa]]):Ui(($t(),on(fu,{key:1,clickable:""},{default:Ge(()=>[fe(du,{class:"text-red",onClick:l},{default:Ge(()=>[Os(" \uC774\uBA54\uC77C\uC744 \uC778\uC99D\uD574\uC8FC\uC138\uC694 ")]),_:1})]),_:1})),[[qa]]),Ui(($t(),on(fu,{clickable:"",onClick:a},{default:Ge(()=>[fe(du,null,{default:Ge(()=>[Os("\uB85C\uADF8\uC544\uC6C3")]),_:1})]),_:1})),[[qa]])]),_:1})]),_:1})]),_:1})):kp("",!0)]),_:1})]),_:1},8,["class"]),fe(xP,{style:Lo(i.value)},{default:Ge(()=>[fe(g)]),_:1},8,["style"]),fe(aU,{modelValue:s.value,"onUpdate:modelValue":v[0]||(v[0]=w=>s.value=w)},null,8,["modelValue"])]),_:1})}}},dU={admin:()=>Ae(()=>import("./admin.bd5c6e71.js"),["assets/admin.bd5c6e71.js","assets/admin.706befe0.css","assets/QChip.7b90b6fa.js"]),default:hU,MainLayout:()=>Ae(()=>import("./MainLayout.0d5d6ba2.js"),["assets/MainLayout.0d5d6ba2.js","assets/QItemLabel.7d6fabb5.js"])};function fU(t){return t.map(e=>{var n;return{path:e.path,meta:e.meta,component:dU[((n=e.meta)==null?void 0:n.layout)||"default"],children:e.path==="/"?[e]:[{...e,path:""}]}})}function C2(t){return t.charAt(0).toUpperCase()+t.slice(1)}function pU(t,e,n){return n<=e?e:Math.min(n,Math.max(e,t))}function k2(t,e,n){if(n<=e)return e;const r=n-e+1;let i=e+(t-e)%r;return i<e&&(i=r+i),i===0?0:i}function x2(t,e=2,n="0"){if(t==null)return t;const r=""+t;return r.length>=e?r:new Array(e-r.length+1).join(n)+r}const tp=XMLHttpRequest,Z0=tp.prototype.open,mU=["top","right","bottom","left"];let Ul=[],to=0;function gU({p:t,pos:e,active:n,horiz:r,reverse:i,dir:s}){let o=1,a=1;return r===!0?(i===!0&&(o=-1),e==="bottom"&&(a=-1),{transform:`translate3d(${o*(t-100)}%,${n?0:a*-200}%,0)`}):(i===!0&&(a=-1),e==="right"&&(o=-1),{transform:`translate3d(${n?0:s*o*-200}%,${a*(t-100)}%,0)`})}function _U(t,e){return typeof e!="number"&&(t<25?e=Math.random()*3+3:t<65?e=Math.random()*3:t<85?e=Math.random()*2:t<99?e=.6:e=0),pU(t+e,0,100)}function yU(t){to++,Ul.push(t),!(to>1)&&(tp.prototype.open=function(e,n){const r=[],i=()=>{Ul.forEach(o=>{(o.hijackFilter.value===null||o.hijackFilter.value(n)===!0)&&(o.start(),r.push(o.stop))})},s=()=>{r.forEach(o=>{o()})};this.addEventListener("loadstart",i,{once:!0}),this.addEventListener("loadend",s,{once:!0}),Z0.apply(this,arguments)})}function vU(t){Ul=Ul.filter(e=>e.start!==t),to=Math.max(0,to-1),to===0&&(tp.prototype.open=Z0)}var wU=Qe({name:"QAjaxBar",props:{position:{type:String,default:"top",validator:t=>mU.includes(t)},size:{type:String,default:"2px"},color:String,skipHijack:Boolean,reverse:Boolean,hijackFilter:Function},emits:["start","stop"],setup(t,{emit:e}){const{proxy:n}=We(),r=ue(0),i=ue(!1),s=ue(!0);let o=0,a=null,l;const c=O(()=>`q-loading-bar q-loading-bar--${t.position}`+(t.color!==void 0?` bg-${t.color}`:"")+(s.value===!0?"":" no-transition")),u=O(()=>t.position==="top"||t.position==="bottom"),h=O(()=>u.value===!0?"height":"width"),d=O(()=>{const T=i.value,E=gU({p:r.value,pos:t.position,active:T,horiz:u.value,reverse:n.$q.lang.rtl===!0&&["top","bottom"].includes(t.position)?t.reverse===!1:t.reverse,dir:n.$q.lang.rtl===!0?-1:1});return E[h.value]=t.size,E.opacity=T?1:0,E}),f=O(()=>i.value===!0?{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":r.value}:{"aria-hidden":"true"});function p(T=300){const E=l;return l=Math.max(0,T)||0,o++,o>1?(E===0&&T>0?w():a!==null&&E>0&&T<=0&&(clearTimeout(a),a=null),o):(a!==null&&clearTimeout(a),e("start"),r.value=0,a=setTimeout(()=>{a=null,s.value=!0,T>0&&w()},i.value===!0?500:1),i.value!==!0&&(i.value=!0,s.value=!1),o)}function v(T){return o>0&&(r.value=_U(r.value,T)),o}function g(){if(o=Math.max(0,o-1),o>0)return o;a!==null&&(clearTimeout(a),a=null),e("stop");const T=()=>{s.value=!0,r.value=100,a=setTimeout(()=>{a=null,i.value=!1},1e3)};return r.value===0?a=setTimeout(T,1):T(),o}function w(){r.value<100&&(a=setTimeout(()=>{a=null,v(),w()},l))}let _;return On(()=>{t.skipHijack!==!0&&(_=!0,yU({start:p,stop:g,hijackFilter:O(()=>t.hijackFilter||null)}))}),xt(()=>{a!==null&&clearTimeout(a),_===!0&&vU(p)}),Object.assign(n,{start:p,stop:g,increment:v}),()=>q("div",{class:c.value,style:d.value,...f.value})}});const Va=ue(null),No=$o({isActive:!1},{start:Nt,stop:Nt,increment:Nt,setDefaults:Nt,install({$q:t,parentApp:e}){if(t.loadingBar=this,this.__installed===!0){t.config.loadingBar!==void 0&&this.setDefaults(t.config.loadingBar);return}const n=ue(t.config.loadingBar!==void 0?{...t.config.loadingBar}:{});function r(){No.isActive=!0}function i(){No.isActive=!1}const s=Pd("q-loading-bar");Wy({name:"LoadingBar",devtools:{hide:!0},setup:()=>()=>q(wU,{...n.value,onStart:r,onStop:i,ref:Va})},e).mount(s),Object.assign(this,{start(o){Va.value.start(o)},stop(){Va.value.stop()},increment(){Va.value.increment.apply(null,arguments)},setDefaults(o){es(o)===!0&&Object.assign(n.value,o)}})}});var Hu=function(){const e=CS({scrollBehavior:()=>({left:0,top:0}),history:BR("/"),extendRoutes:n=>fU(n.map(r=>(r.path.includes("admin")&&(r={...r,meta:{...r.meta,layout:"admin"}}),r)))});return e.beforeEach(()=>{No.start()}),e.afterEach(()=>{No.stop()}),e};async function EU(t,e){const n=t(mR);n.use(hR,e);const r=typeof ou=="function"?await ou({}):ou;n.use(r);const i=Pr(typeof Hu=="function"?await Hu({store:r}):Hu);return r.use(({store:s})=>{s.router=i}),{app:n,store:r,router:i}}let TU=0;const Xa={},Ja={},sn={},eI={},IU=/^\s*$/,tI=[],np=["top-left","top-right","bottom-left","bottom-right","top","bottom","left","right","center"],bU=["top-left","top-right","bottom-left","bottom-right"],Di={positive:{icon:t=>t.iconSet.type.positive,color:"positive"},negative:{icon:t=>t.iconSet.type.negative,color:"negative"},warning:{icon:t=>t.iconSet.type.warning,color:"warning",textColor:"dark"},info:{icon:t=>t.iconSet.type.info,color:"info"},ongoing:{group:!1,timeout:0,spinner:!0,color:"grey-8"}};function nI(t,e,n){if(!t)return Cs("parameter required");let r;const i={textColor:"white"};if(t.ignoreDefaults!==!0&&Object.assign(i,Xa),es(t)===!1&&(i.type&&Object.assign(i,Di[i.type]),t={message:t}),Object.assign(i,Di[t.type||i.type],t),typeof i.icon=="function"&&(i.icon=i.icon(e)),i.spinner?(i.spinner===!0&&(i.spinner=dv),i.spinner=Pr(i.spinner)):i.spinner=!1,i.meta={hasMedia:Boolean(i.spinner!==!1||i.icon||i.avatar),hasText:k_(i.message)||k_(i.caption)},i.position){if(np.includes(i.position)===!1)return Cs("wrong position",t)}else i.position="bottom";if(i.timeout===void 0)i.timeout=5e3;else{const l=parseInt(i.timeout,10);if(isNaN(l)||l<0)return Cs("wrong timeout",t);i.timeout=l}i.timeout===0?i.progress=!1:i.progress===!0&&(i.meta.progressClass="q-notification__progress"+(i.progressClass?` ${i.progressClass}`:""),i.meta.progressStyle={animationDuration:`${i.timeout+1e3}ms`});const s=(Array.isArray(t.actions)===!0?t.actions:[]).concat(t.ignoreDefaults!==!0&&Array.isArray(Xa.actions)===!0?Xa.actions:[]).concat(Di[t.type]!==void 0&&Array.isArray(Di[t.type].actions)===!0?Di[t.type].actions:[]),{closeBtn:o}=i;if(o&&s.push({label:typeof o=="string"?o:e.lang.label.close}),i.actions=s.map(({handler:l,noDismiss:c,...u})=>({flat:!0,...u,onClick:typeof l=="function"?()=>{l(),c!==!0&&a()}:()=>{a()}})),i.multiLine===void 0&&(i.multiLine=i.actions.length>1),Object.assign(i.meta,{class:`q-notification row items-stretch q-notification--${i.multiLine===!0?"multi-line":"standard"}`+(i.color!==void 0?` bg-${i.color}`:"")+(i.textColor!==void 0?` text-${i.textColor}`:"")+(i.classes!==void 0?` ${i.classes}`:""),wrapperClass:"q-notification__wrapper col relative-position border-radius-inherit "+(i.multiLine===!0?"column no-wrap justify-center":"row items-center"),contentClass:"q-notification__content row items-center"+(i.multiLine===!0?"":" col"),leftClass:i.meta.hasText===!0?"additional":"single",attrs:{role:"alert",...i.attrs}}),i.group===!1?(i.group=void 0,i.meta.group=void 0):((i.group===void 0||i.group===!0)&&(i.group=[i.message,i.caption,i.multiline].concat(i.actions.map(l=>`${l.label}*${l.icon}`)).join("|")),i.meta.group=i.group+"|"+i.position),i.actions.length===0?i.actions=void 0:i.meta.actionsClass="q-notification__actions row items-center "+(i.multiLine===!0?"justify-end":"col-auto")+(i.meta.hasMedia===!0?" q-notification__actions--with-media":""),n!==void 0){n.notif.meta.timer&&(clearTimeout(n.notif.meta.timer),n.notif.meta.timer=void 0),i.meta.uid=n.notif.meta.uid;const l=sn[i.position].value.indexOf(n.notif);sn[i.position].value[l]=i}else{const l=Ja[i.meta.group];if(l===void 0){if(i.meta.uid=TU++,i.meta.badge=1,["left","right","center"].indexOf(i.position)!==-1)sn[i.position].value.splice(Math.floor(sn[i.position].value.length/2),0,i);else{const c=i.position.indexOf("top")>-1?"unshift":"push";sn[i.position].value[c](i)}i.group!==void 0&&(Ja[i.meta.group]=i)}else{if(l.meta.timer&&(clearTimeout(l.meta.timer),l.meta.timer=void 0),i.badgePosition!==void 0){if(bU.includes(i.badgePosition)===!1)return Cs("wrong badgePosition",t)}else i.badgePosition=`top-${i.position.indexOf("left")>-1?"right":"left"}`;i.meta.uid=l.meta.uid,i.meta.badge=l.meta.badge+1,i.meta.badgeClass=`q-notification__badge q-notification__badge--${i.badgePosition}`+(i.badgeColor!==void 0?` bg-${i.badgeColor}`:"")+(i.badgeTextColor!==void 0?` text-${i.badgeTextColor}`:"")+(i.badgeClass?` ${i.badgeClass}`:"");const c=sn[i.position].value.indexOf(l);sn[i.position].value[c]=Ja[i.meta.group]=i}}const a=()=>{AU(i),r=void 0};if(i.timeout>0&&(i.meta.timer=setTimeout(()=>{i.meta.timer=void 0,a()},i.timeout+1e3)),i.group!==void 0)return l=>{l!==void 0?Cs("trying to update a grouped one which is forbidden",t):a()};if(r={dismiss:a,config:t,notif:i},n!==void 0){Object.assign(n,r);return}return l=>{if(r!==void 0)if(l===void 0)r.dismiss();else{const c=Object.assign({},r.config,l,{group:!1,position:i.position});nI(c,e,r)}}}function AU(t){t.meta.timer&&(clearTimeout(t.meta.timer),t.meta.timer=void 0);const e=sn[t.position].value.indexOf(t);if(e!==-1){t.group!==void 0&&delete Ja[t.meta.group];const n=tI[""+t.meta.uid];if(n){const{width:r,height:i}=getComputedStyle(n);n.style.left=`${n.offsetLeft}px`,n.style.width=r,n.style.height=i}sn[t.position].value.splice(e,1),typeof t.onDismiss=="function"&&t.onDismiss()}}function k_(t){return t!=null&&IU.test(t)!==!0}function Cs(t,e){return console.error(`Notify: ${t}`,e),!1}function RU(){return Qe({name:"QNotifications",devtools:{hide:!0},setup(){return()=>q("div",{class:"q-notifications"},np.map(t=>q(CA,{key:t,class:eI[t],tag:"div",name:`q-notification--${t}`},()=>sn[t].value.map(e=>{const n=e.meta,r=[];if(n.hasMedia===!0&&(e.spinner!==!1?r.push(q(e.spinner,{class:"q-notification__spinner q-notification__spinner--"+n.leftClass,color:e.spinnerColor,size:e.spinnerSize})):e.icon?r.push(q(hl,{class:"q-notification__icon q-notification__icon--"+n.leftClass,name:e.icon,color:e.iconColor,size:e.iconSize,role:"img"})):e.avatar&&r.push(q(wv,{class:"q-notification__avatar q-notification__avatar--"+n.leftClass},()=>q("img",{src:e.avatar,"aria-hidden":"true"})))),n.hasText===!0){let s;const o={class:"q-notification__message col"};if(e.html===!0)o.innerHTML=e.caption?`<div>${e.message}</div><div class="q-notification__caption">${e.caption}</div>`:e.message;else{const a=[e.message];s=e.caption?[q("div",a),q("div",{class:"q-notification__caption"},[e.caption])]:a}r.push(q("div",o,s))}const i=[q("div",{class:n.contentClass},r)];return e.progress===!0&&i.push(q("div",{key:`${n.uid}|p|${n.badge}`,class:n.progressClass,style:n.progressStyle})),e.actions!==void 0&&i.push(q("div",{class:n.actionsClass},e.actions.map(s=>q(ur,s)))),n.badge>1&&i.push(q("div",{key:`${n.uid}|${n.badge}`,class:e.meta.badgeClass,style:e.badgeStyle},[n.badge])),q("div",{ref:s=>{tI[""+n.uid]=s},key:n.uid,class:n.class,...n.attrs},[q("div",{class:n.wrapperClass},i)])}))))}})}var SU={setDefaults(t){es(t)===!0&&Object.assign(Xa,t)},registerType(t,e){es(e)===!0&&(Di[t]=e)},install({$q:t,parentApp:e}){if(t.notify=this.create=n=>nI(n,t),t.notify.setDefaults=this.setDefaults,t.notify.registerType=this.registerType,t.config.notify!==void 0&&this.setDefaults(t.config.notify),this.__installed!==!0){np.forEach(r=>{sn[r]=ue([]);const i=["left","center","right"].includes(r)===!0?"center":r.indexOf("top")>-1?"top":"bottom",s=r.indexOf("left")>-1?"start":r.indexOf("right")>-1?"end":"center",o=["left","right"].includes(r)?`items-${r==="left"?"start":"end"} justify-center`:r==="center"?"flex-center":`items-${s}`;eI[r]=`q-notifications__list q-notifications__list--${i} fixed column no-wrap ${o}`});const n=Pd("q-notify");Wy(RU(),e).mount(n)}}};function PU(t){return aR(t)===!0?"__q_date|"+t.toUTCString():lR(t)===!0?"__q_expr|"+t.source:typeof t=="number"?"__q_numb|"+t:typeof t=="boolean"?"__q_bool|"+(t?"1":"0"):typeof t=="string"?"__q_strn|"+t:typeof t=="function"?"__q_strn|"+t.toString():t===Object(t)?"__q_objt|"+JSON.stringify(t):t}function CU(t){if(t.length<9)return t;const n=t.substring(0,8),r=t.substring(9);switch(n){case"__q_date":return new Date(r);case"__q_expr":return new RegExp(r);case"__q_numb":return Number(r);case"__q_bool":return Boolean(r==="1");case"__q_strn":return""+r;case"__q_objt":return JSON.parse(r);default:return t}}function kU(){const t=()=>null;return{has:()=>!1,getLength:()=>0,getItem:t,getIndex:t,getKey:t,getAll:()=>{},getAllKeys:()=>[],set:Nt,remove:Nt,clear:Nt,isEmpty:()=>!0}}function xU(t){const e=window[t+"Storage"],n=r=>{const i=e.getItem(r);return i?CU(i):null};return{has:r=>e.getItem(r)!==null,getLength:()=>e.length,getItem:n,getIndex:r=>r<e.length?n(e.key(r)):null,getKey:r=>r<e.length?e.key(r):null,getAll:()=>{let r;const i={},s=e.length;for(let o=0;o<s;o++)r=e.key(o),i[r]=n(r);return i},getAllKeys:()=>{const r=[],i=e.length;for(let s=0;s<i;s++)r.push(e.key(s));return r},set:(r,i)=>{e.setItem(r,PU(i))},remove:r=>{e.removeItem(r)},clear:()=>{e.clear()},isEmpty:()=>e.length===0}}const rI=je.has.webStorage===!1?kU():xU("local"),iI={install({$q:t}){t.localStorage=rI}};Object.assign(iI,rI);var OU={config:{dark:"auto",notify:{position:"top"},loadingBar:{color:"indigo"}},plugins:{Notify:SU,LoadingBar:No,LocalStorage:iI}};const DU="/";async function NU({app:t,router:e,store:n},r){let i=!1;const s=l=>{try{return e.resolve(l).href}catch{}return Object(l)===l?null:l},o=l=>{if(i=!0,typeof l=="string"&&/^https?:\/\//.test(l)){window.location.href=l;return}const c=s(l);c!==null&&(window.location.href=c)},a=window.location.href.replace(window.location.origin,"");for(let l=0;i===!1&&l<r.length;l++)try{await r[l]({app:t,router:e,store:n,ssrContext:null,redirect:o,urlPath:a,publicPath:DU})}catch(c){if(c&&c.url){o(c.url);return}console.error("[Quasar] boot error:",c);return}i!==!0&&(t.use(e),t.mount("#q-app"))}EU(Vy,OU).then(t=>{const[e,n]=Promise.allSettled!==void 0?["allSettled",r=>r.map(i=>{if(i.status==="rejected"){console.error("[Quasar] boot error:",i.reason);return}return i.value.default})]:["all",r=>r.map(i=>i.default)];return Promise[e]([Ae(()=>Promise.resolve().then(function(){return QF}),void 0),Ae(()=>import("./error-handler.8ad99406.js"),["assets/error-handler.8ad99406.js","assets/error-message.02f68539.js"]),Ae(()=>import("./navigation-guards.5eb6690e.js"),[]),Ae(()=>import("./algoliasearch.57dfd295.js"),[])]).then(r=>{const i=n(r).filter(s=>typeof s=="function");NU(t,i)})});export{Tv as $,Bo as A,Rd as B,qo as C,Sd as D,O as E,Bt as F,XU as G,We as H,hl as I,kS as J,Mn as K,av as L,je as M,SU as N,Nt as O,HU as P,NP as Q,qS as R,ih as S,WU as T,co as U,Uy as V,Fy as W,$y as X,oP as Y,Ev as Z,dR as _,Os as a,p2 as a$,xv as a0,Ct as a1,Bi as a2,Id as a3,ue as a4,Iv as a5,eU as a6,ke as a7,hn as a8,pU as a9,e2 as aA,FP as aB,PS as aC,SS as aD,Fe as aE,sR as aF,wv as aG,GU as aH,ri as aI,ZA as aJ,Ni as aK,su as aL,kv as aM,$i as aN,gd as aO,mb as aP,mh as aQ,vv as aR,ey as aS,I_ as aT,zU as aU,c2 as aV,u2 as aW,d2 as aX,h2 as aY,l2 as aZ,a2 as a_,On as aa,xt as ab,Ui as ac,Xn as ad,iU as ae,Fo as af,du as ag,fu as ah,PP as ai,ur as aj,kP as ak,sP as al,xP as am,r2 as an,ZF as ao,qa as ap,iP as aq,St as ar,oU as as,t2 as at,hr as au,ZU as av,ml as aw,VP as ax,n2 as ay,jo as az,QU as b,R2 as b$,f2 as b0,YT as b1,tV as b2,y2 as b3,g2 as b4,_2 as b5,Y0 as b6,v2 as b7,m2 as b8,KU as b9,cP as bA,lP as bB,Sv as bC,Pm as bD,Uv as bE,Ov as bF,TP as bG,Wl as bH,zS as bI,HS as bJ,gv as bK,FU as bL,zb as bM,nl as bN,ln as bO,Pr as bP,KI as bQ,S2 as bR,P2 as bS,rn as bT,x2 as bU,aR as bV,Yp as bW,C2 as bX,A2 as bY,I2 as bZ,b2 as b_,WA as ba,tc as bb,yb as bc,Av as bd,Hn as be,JU as bf,dv as bg,Zi as bh,T2 as bi,KF as bj,w2 as bk,E2 as bl,JF as bm,_b as bn,my as bo,k2 as bp,SP as bq,VU as br,MU as bs,LP as bt,aP as bu,Pv as bv,xm as bw,IP as bx,Om as by,Cv as bz,wd as c,Cp as d,kp as e,UU as f,ay as g,q as h,on as i,fe as j,Ge as k,cb as l,qU as m,Vo as n,$t as o,LU as p,Kb as q,BU as r,YU as s,EI as t,jv as u,oA as v,jU as w,$U as x,Gb as y,Qe as z};
