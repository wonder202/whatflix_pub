import{L as We,M as Q,O as Ie,P as Ne,S as z,T as Z,U as he,V as J,W as re,X as ee,K as Xe,Y as He,z as je,Z as Ye,A as Ue,$ as Ke,C as Re,a0 as Ge,a1 as Ze,a2 as te,a3 as Je,a4 as E,E as m,a5 as et,a6 as tt,a7 as b,a8 as pe,a9 as V,aa as at,ab as nt,ac as rt,h as W,G as ye,ad as ot,H as it,ae as ut,af as qe,_ as _e,o as A,i as I,k,ag as be,j as g,I as lt,e as st,a as N,t as oe,ah as dt,g as we,Q as ct,ai as ft,aj as vt,c as mt,ak as ht,al as pt,d as yt,f as bt,y as wt,F as gt,am as kt}from"./index.5dab455f.js";import{Q as ie,a as Ct}from"./QItemLabel.7d6fabb5.js";const ue={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},qt=Object.keys(ue);ue.all=!0;function ge(t){const r={};for(const i of qt)t[i]===!0&&(r[i]=!0);return Object.keys(r).length===0?ue:(r.horizontal===!0?r.left=r.right=!0:r.left===!0&&r.right===!0&&(r.horizontal=!0),r.vertical===!0?r.up=r.down=!0:r.up===!0&&r.down===!0&&(r.vertical=!0),r.horizontal===!0&&r.vertical===!0&&(r.all=!0),r)}const _t=["INPUT","TEXTAREA"];function ke(t,r){return r.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof r.handler=="function"&&_t.includes(t.target.nodeName.toUpperCase())===!1&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(r.uid)===-1)}function ae(t,r,i){const h=re(t);let e,n=h.left-r.event.x,l=h.top-r.event.y,f=Math.abs(n),d=Math.abs(l);const s=r.direction;s.horizontal===!0&&s.vertical!==!0?e=n<0?"left":"right":s.horizontal!==!0&&s.vertical===!0?e=l<0?"up":"down":s.up===!0&&l<0?(e="up",f>d&&(s.left===!0&&n<0?e="left":s.right===!0&&n>0&&(e="right"))):s.down===!0&&l>0?(e="down",f>d&&(s.left===!0&&n<0?e="left":s.right===!0&&n>0&&(e="right"))):s.left===!0&&n<0?(e="left",f<d&&(s.up===!0&&l<0?e="up":s.down===!0&&l>0&&(e="down"))):s.right===!0&&n>0&&(e="right",f<d&&(s.up===!0&&l<0?e="up":s.down===!0&&l>0&&(e="down")));let o=!1;if(e===void 0&&i===!1){if(r.event.isFirst===!0||r.event.lastDir===void 0)return{};e=r.event.lastDir,o=!0,e==="left"||e==="right"?(h.left-=n,f=0,n=0):(h.top-=l,d=0,l=0)}return{synthetic:o,payload:{evt:t,touch:r.event.mouse!==!0,mouse:r.event.mouse===!0,position:h,direction:e,isFirst:r.event.isFirst,isFinal:i===!0,duration:Date.now()-r.event.time,distance:{x:f,y:d},offset:{x:n,y:l},delta:{x:h.left-r.event.lastX,y:h.top-r.event.lastY}}}}let Lt=0;var ne=We({name:"touch-pan",beforeMount(t,{value:r,modifiers:i}){if(i.mouse!==!0&&Q.has.touch!==!0)return;function h(n,l){i.mouse===!0&&l===!0?Xe(n):(i.stop===!0&&J(n),i.prevent===!0&&he(n))}const e={uid:"qvtp_"+Lt++,handler:r,modifiers:i,direction:ge(i),noop:Ie,mouseStart(n){ke(n,e)&&Ne(n)&&(z(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(n,!0))},touchStart(n){if(ke(n,e)){const l=n.target;z(e,"temp",[[l,"touchmove","move","notPassiveCapture"],[l,"touchcancel","end","passiveCapture"],[l,"touchend","end","passiveCapture"]]),e.start(n)}},start(n,l){if(Q.is.firefox===!0&&Z(t,!0),e.lastEvt=n,l===!0||i.stop===!0){if(e.direction.all!==!0&&(l!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const s=n.type.indexOf("mouse")>-1?new MouseEvent(n.type,n):new TouchEvent(n.type,n);n.defaultPrevented===!0&&he(s),n.cancelBubble===!0&&J(s),Object.assign(s,{qKeyEvent:n.qKeyEvent,qClickOutside:n.qClickOutside,qAnchorHandled:n.qAnchorHandled,qClonedBy:n.qClonedBy===void 0?[e.uid]:n.qClonedBy.concat(e.uid)}),e.initialEvent={target:n.target,event:s}}J(n)}const{left:f,top:d}=re(n);e.event={x:f,y:d,time:Date.now(),mouse:l===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:d}},move(n){if(e.event===void 0)return;const l=re(n),f=l.left-e.event.x,d=l.top-e.event.y;if(f===0&&d===0)return;e.lastEvt=n;const s=e.event.mouse===!0,o=()=>{h(n,s);let y;i.preserveCursor!==!0&&i.preservecursor!==!0&&(y=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),s===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),He(),e.styleCleanup=c=>{if(e.styleCleanup=void 0,y!==void 0&&(document.documentElement.style.cursor=y),document.body.classList.remove("non-selectable"),s===!0){const B=()=>{document.body.classList.remove("no-pointer-events--children")};c!==void 0?setTimeout(()=>{B(),c()},50):B()}else c!==void 0&&c()}};if(e.event.detected===!0){e.event.isFirst!==!0&&h(n,e.event.mouse);const{payload:y,synthetic:c}=ae(n,e,!1);y!==void 0&&(e.handler(y)===!1?e.end(n):(e.styleCleanup===void 0&&e.event.isFirst===!0&&o(),e.event.lastX=y.position.left,e.event.lastY=y.position.top,e.event.lastDir=c===!0?void 0:y.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||s===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){o(),e.event.detected=!0,e.move(n);return}const _=Math.abs(f),p=Math.abs(d);_!==p&&(e.direction.horizontal===!0&&_>p||e.direction.vertical===!0&&_<p||e.direction.up===!0&&_<p&&d<0||e.direction.down===!0&&_<p&&d>0||e.direction.left===!0&&_>p&&f<0||e.direction.right===!0&&_>p&&f>0?(e.event.detected=!0,e.move(n)):e.end(n,!0))},end(n,l){if(e.event!==void 0){if(ee(e,"temp"),Q.is.firefox===!0&&Z(t,!1),l===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(ae(n===void 0?e.lastEvt:n,e).payload);const{payload:f}=ae(n===void 0?e.lastEvt:n,e,!0),d=()=>{e.handler(f)};e.styleCleanup!==void 0?e.styleCleanup(d):d()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(t.__qtouchpan=e,i.mouse===!0){const n=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";z(e,"main",[[t,"mousedown","mouseStart",`passive${n}`]])}Q.has.touch===!0&&z(e,"main",[[t,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,r){const i=t.__qtouchpan;i!==void 0&&(r.oldValue!==r.value&&(typeof value!="function"&&i.end(),i.handler=r.value),i.direction=ge(r.modifiers))},beforeUnmount(t){const r=t.__qtouchpan;r!==void 0&&(r.event!==void 0&&r.end(),ee(r,"main"),ee(r,"temp"),Q.is.firefox===!0&&Z(t,!1),r.styleCleanup!==void 0&&r.styleCleanup(),delete t.__qtouchpan)}});const Ce=150;var Bt=je({name:"QDrawer",inheritAttrs:!1,props:{...Ye,...Ue,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Ke,"onLayout","miniState"],setup(t,{slots:r,emit:i,attrs:h}){const e=it(),{proxy:{$q:n}}=e,l=Re(t,n),{preventBodyScroll:f}=ut(),{registerTimeout:d,removeTimeout:s}=Ge(),o=Ze(Je,te);if(o===te)return console.error("QDrawer needs to be child of QLayout"),te;let _,p=null,y;const c=E(t.behavior==="mobile"||t.behavior!=="desktop"&&o.totalWidth.value<=t.breakpoint),B=m(()=>t.mini===!0&&c.value!==!0),C=m(()=>B.value===!0?t.miniWidth:t.width),v=E(t.showIfAbove===!0&&c.value===!1?!0:t.modelValue===!0),le=m(()=>t.persistent!==!0&&(c.value===!0||Se.value===!0));function se(a,u){if(Le(),a!==!1&&o.animate(),q(0),c.value===!0){const w=o.instances[P.value];w!==void 0&&w.belowBreakpoint===!0&&w.hide(!1),S(1),o.isContainer.value!==!0&&f(!0)}else S(0),a!==!1&&K(!1);d(()=>{a!==!1&&K(!0),u!==!0&&i("show",a)},Ce)}function de(a,u){Be(),a!==!1&&o.animate(),S(0),q($.value*C.value),R(),u!==!0?d(()=>{i("hide",a)},Ce):s()}const{show:X,hide:M}=et({showing:v,hideOnRouteChange:le,handleShow:se,handleHide:de}),{addToHistory:Le,removeFromHistory:Be}=tt(v,M,le),x={belowBreakpoint:c,hide:M},L=m(()=>t.side==="right"),$=m(()=>(n.lang.rtl===!0?-1:1)*(L.value===!0?1:-1)),ce=E(0),D=E(!1),H=E(!1),fe=E(C.value*$.value),P=m(()=>L.value===!0?"left":"right"),j=m(()=>v.value===!0&&c.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:C.value:0),Y=m(()=>t.overlay===!0||t.miniToOverlay===!0||o.view.value.indexOf(L.value?"R":"L")>-1||n.platform.is.ios===!0&&o.isContainer.value===!0),O=m(()=>t.overlay===!1&&v.value===!0&&c.value===!1),Se=m(()=>t.overlay===!0&&v.value===!0&&c.value===!1),Te=m(()=>"fullscreen q-drawer__backdrop"+(v.value===!1&&D.value===!1?" hidden":"")),Ee=m(()=>({backgroundColor:`rgba(0,0,0,${ce.value*.4})`})),ve=m(()=>L.value===!0?o.rows.value.top[2]==="r":o.rows.value.top[0]==="l"),$e=m(()=>L.value===!0?o.rows.value.bottom[2]==="r":o.rows.value.bottom[0]==="l"),De=m(()=>{const a={};return o.header.space===!0&&ve.value===!1&&(Y.value===!0?a.top=`${o.header.offset}px`:o.header.space===!0&&(a.top=`${o.header.size}px`)),o.footer.space===!0&&$e.value===!1&&(Y.value===!0?a.bottom=`${o.footer.offset}px`:o.footer.space===!0&&(a.bottom=`${o.footer.size}px`)),a}),Me=m(()=>{const a={width:`${C.value}px`,transform:`translateX(${fe.value}px)`};return c.value===!0?a:Object.assign(a,De.value)}),Oe=m(()=>"q-drawer__content fit "+(o.isContainer.value!==!0?"scroll":"overflow-auto")),Qe=m(()=>`q-drawer q-drawer--${t.side}`+(H.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(l.value===!0?" q-drawer--dark q-dark":"")+(D.value===!0?" no-transition":v.value===!0?"":" q-layout--prevent-focus")+(c.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${B.value===!0?"mini":"standard"}`+(Y.value===!0||O.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(ve.value===!0?" q-drawer--top-padding":""))),Ae=m(()=>{const a=n.lang.rtl===!0?t.side:P.value;return[[ne,ze,void 0,{[a]:!0,mouse:!0}]]}),xe=m(()=>{const a=n.lang.rtl===!0?P.value:t.side;return[[ne,me,void 0,{[a]:!0,mouse:!0}]]}),Pe=m(()=>{const a=n.lang.rtl===!0?P.value:t.side;return[[ne,me,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function U(){Ve(c,t.behavior==="mobile"||t.behavior!=="desktop"&&o.totalWidth.value<=t.breakpoint)}b(c,a=>{a===!0?(_=v.value,v.value===!0&&M(!1)):t.overlay===!1&&t.behavior!=="mobile"&&_!==!1&&(v.value===!0?(q(0),S(0),R()):X(!1))}),b(()=>t.side,(a,u)=>{o.instances[u]===x&&(o.instances[u]=void 0,o[u].space=!1,o[u].offset=0),o.instances[a]=x,o[a].size=C.value,o[a].space=O.value,o[a].offset=j.value}),b(o.totalWidth,()=>{(o.isContainer.value===!0||document.qScrollPrevented!==!0)&&U()}),b(()=>t.behavior+t.breakpoint,U),b(o.isContainer,a=>{v.value===!0&&f(a!==!0),a===!0&&U()}),b(o.scrollbarWidth,()=>{q(v.value===!0?0:void 0)}),b(j,a=>{T("offset",a)}),b(O,a=>{i("onLayout",a),T("space",a)}),b(L,()=>{q()}),b(C,a=>{q(),G(t.miniToOverlay,a)}),b(()=>t.miniToOverlay,a=>{G(a,C.value)}),b(()=>n.lang.rtl,()=>{q()}),b(()=>t.mini,()=>{t.noMiniAnimation||t.modelValue===!0&&(Fe(),o.animate())}),b(B,a=>{i("miniState",a)});function q(a){a===void 0?pe(()=>{a=v.value===!0?0:C.value,q($.value*a)}):(o.isContainer.value===!0&&L.value===!0&&(c.value===!0||Math.abs(a)===C.value)&&(a+=$.value*o.scrollbarWidth.value),fe.value=a)}function S(a){ce.value=a}function K(a){const u=a===!0?"remove":o.isContainer.value!==!0?"add":"";u!==""&&document.body.classList[u]("q-body--drawer-toggle")}function Fe(){p!==null&&clearTimeout(p),e.proxy&&e.proxy.$el&&e.proxy.$el.classList.add("q-drawer--mini-animate"),H.value=!0,p=setTimeout(()=>{p=null,H.value=!1,e&&e.proxy&&e.proxy.$el&&e.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function ze(a){if(v.value!==!1)return;const u=C.value,w=V(a.distance.x,0,u);if(a.isFinal===!0){w>=Math.min(75,u)===!0?X():(o.animate(),S(0),q($.value*u)),D.value=!1;return}q((n.lang.rtl===!0?L.value!==!0:L.value)?Math.max(u-w,0):Math.min(0,w-u)),S(V(w/u,0,1)),a.isFirst===!0&&(D.value=!0)}function me(a){if(v.value!==!0)return;const u=C.value,w=a.direction===t.side,F=(n.lang.rtl===!0?w!==!0:w)?V(a.distance.x,0,u):0;if(a.isFinal===!0){Math.abs(F)<Math.min(75,u)===!0?(o.animate(),S(1),q(0)):M(),D.value=!1;return}q($.value*F),S(V(1-F/u,0,1)),a.isFirst===!0&&(D.value=!0)}function R(){f(!1),K(!0)}function T(a,u){o.update(t.side,a,u)}function Ve(a,u){a.value!==u&&(a.value=u)}function G(a,u){T("size",a===!0?t.miniWidth:u)}return o.instances[t.side]=x,G(t.miniToOverlay,C.value),T("space",O.value),T("offset",j.value),t.showIfAbove===!0&&t.modelValue!==!0&&v.value===!0&&t["onUpdate:modelValue"]!==void 0&&i("update:modelValue",!0),at(()=>{i("onLayout",O.value),i("miniState",B.value),_=t.showIfAbove===!0;const a=()=>{(v.value===!0?se:de)(!1,!0)};if(o.totalWidth.value!==0){pe(a);return}y=b(o.totalWidth,()=>{y(),y=void 0,v.value===!1&&t.showIfAbove===!0&&c.value===!1?X(!1):a()})}),nt(()=>{y!==void 0&&y(),p!==null&&(clearTimeout(p),p=null),v.value===!0&&R(),o.instances[t.side]===x&&(o.instances[t.side]=void 0,T("size",0),T("offset",0),T("space",!1))}),()=>{const a=[];c.value===!0&&(t.noSwipeOpen===!1&&a.push(rt(W("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),Ae.value)),a.push(ye("div",{ref:"backdrop",class:Te.value,style:Ee.value,"aria-hidden":"true",onClick:M},void 0,"backdrop",t.noSwipeBackdrop!==!0&&v.value===!0,()=>Pe.value)));const u=B.value===!0&&r.mini!==void 0,w=[W("div",{...h,key:""+u,class:[Oe.value,h.class]},u===!0?r.mini():ot(r.default))];return t.elevated===!0&&v.value===!0&&w.push(W("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(ye("aside",{ref:"content",class:Qe.value,style:Me.value},w,"contentclose",t.noSwipeClose!==!0&&c.value===!0,()=>xe.value)),W("div",{class:"q-drawer-container"},a)}}});const St=qe({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function Tt(t,r,i,h,e,n){return A(),I(dt,{clickable:"",tag:"a",target:"_blank",href:t.link},{default:k(()=>[t.icon?(A(),I(be,{key:0,avatar:""},{default:k(()=>[g(lt,{name:t.icon},null,8,["name"])]),_:1})):st("",!0),g(be,null,{default:k(()=>[g(ie,null,{default:k(()=>[N(oe(t.title),1)]),_:1}),g(ie,{caption:""},{default:k(()=>[N(oe(t.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}var Et=_e(St,[["render",Tt]]);const $t=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],Dt=qe({name:"MainLayout",components:{EssentialLink:Et},setup(){const t=E(!1);return{essentialLinks:$t,leftDrawerOpen:t,toggleLeftDrawer(){t.value=!t.value}}}});function Mt(t,r,i,h,e,n){const l=we("EssentialLink"),f=we("router-view");return A(),I(ct,{view:"lHh Lpr lFf"},{default:k(()=>[g(ht,{elevated:""},{default:k(()=>[g(ft,null,{default:k(()=>[g(vt,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:t.toggleLeftDrawer},null,8,["onClick"]),g(Ct,null,{default:k(()=>[N(" Quasar App ")]),_:1}),mt("div",null,"Quasar v"+oe(t.$q.version),1)]),_:1})]),_:1}),g(Bt,{modelValue:t.leftDrawerOpen,"onUpdate:modelValue":r[0]||(r[0]=d=>t.leftDrawerOpen=d),"show-if-above":"",bordered:""},{default:k(()=>[g(pt,null,{default:k(()=>[g(ie,{header:""},{default:k(()=>[N(" Essential Links ")]),_:1}),(A(!0),yt(gt,null,bt(t.essentialLinks,d=>(A(),I(l,wt({key:d.title},d),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),g(kt,null,{default:k(()=>[g(f)]),_:1})]),_:1})}var xt=_e(Dt,[["render",Mt]]);export{xt as default};
