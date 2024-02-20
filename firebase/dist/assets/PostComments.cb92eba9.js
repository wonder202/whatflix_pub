import{Q as I}from"./QInput.8657458d.js";import{b5 as L,b3 as R,a_ as b,aZ as V,aW as U,a$ as E,b4 as N,b1 as Y,b6 as x,u as A,an as _,o as l,i as p,k as c,j as r,ag as g,aG as q,c as m,ar as i,t as v,aj as h,e as k,ah as j,d as u,f as F,y as M,F as G,al as H,aC as O,a4 as S,w as P,aT as T}from"./index.5dab455f.js";import{Q as z}from"./QForm.a192e15e.js";import{d as W}from"./date.8d82b2d4.js";import{g as Z}from"./user.faff4df2.js";import{_ as J}from"./BaseCard.4de4e8c2.js";import{v as K}from"./validate-rules.6596e294.js";import"./uid.42677368.js";async function X(e,s){return(await L(b(x,"posts",e,"comments"),{...s,createAt:R()})).id}async function ee(e){const s=V(b(x,"posts",e,"comments"),U("createAt","desc"));return(await E(s)).docs.map(t=>{var o;const d=t.data();return{id:t.id,...d,createAt:(o=d.createAt)==null?void 0:o.toDate()}})}async function te(e,s){await N(Y(x,"posts",e,"comments",s))}const se=["src"],ae={class:"flex text-caption"},oe=m("span",{class:"q-mx-xs"},"\xB7",-1),ne={class:"text-grey-6"},re={class:"q-mt-sm"},ie={__name:"CommentItem",props:{id:{type:String},content:{type:String},createAt:{type:Date},uid:{type:String}},emits:["delete"],setup(e){const{hasOwnContent:s}=A(),a=e,{state:t}=_(()=>Z(a.uid));return(d,o)=>(l(),p(j,{class:"q-py-md"},{default:c(()=>[r(g,{side:"",top:""},{default:c(()=>[r(q,{size:"md"},{default:c(()=>{var n;return[m("img",{src:(n=i(t))==null?void 0:n.photoURL},null,8,se)]}),_:1})]),_:1}),r(g,null,{default:c(()=>{var n;return[m("div",ae,[m("span",null,v((n=i(t))==null?void 0:n.displayName),1),oe,m("span",ne,v(i(W).formatDate(e.createAt,"YYYY/MM/DD HH:mm:ss")),1)]),m("div",re,v(e.content),1)]}),_:1}),i(s)(e.uid)?(l(),p(g,{key:0,side:"",top:""},{default:c(()=>[r(h,{icon:"sym_o_delete",round:"",dense:"",flat:"",color:"grey",onClick:o[0]||(o[0]=n=>d.$emit("delete",e.id))})]),_:1})):k("",!0)]),_:1}))}},le={__name:"CommentList",props:{postId:{type:String},items:{type:Array,default:()=>[]}},emits:["deleted"],setup(e,{emit:s}){const a=e,t=s,{execute:d}=_(te,null,{immediate:!1,throwError:!0,onSuccess:()=>{t("deleted")}}),o=async n=>{confirm("\uC0AD\uC81C \uD558\uC2DC\uACA0\uC5B4\uC694?")!==!1&&await d(0,a.postId,n)};return(n,y)=>(l(),p(H,{class:"q-mt-lg",separator:""},{default:c(()=>[(l(!0),u(G,null,F(e.items,f=>(l(),p(ie,M({key:f.id},f,{onDelete:o}),null,16))),128))]),_:1}))}},ce=m("div",{class:"text-subtitle1 text-weight-bold q-mb-lg"},"\uB313\uAE00",-1),de={key:0},me={class:"flex justify-end q-gutter-x-sm q-mt-sm"},ue={key:0,src:"https://cdn.quasar.dev/img/avatar.png"},pe=["src"],fe=m("div",{class:"text-grey-6 q-ml-md"},"\uB313\uAE00\uC744 \uC801\uC5B4\uBCF4\uC138\uC694.",-1),be={__name:"PostComments",setup(e){const s=O(),a=A(),t=S(!1),d=()=>{if(!t.value&&!a.isAuthentication){alert("\uB85C\uADF8\uC778 \uD6C4 \uC774\uC6A9 \uAC00\uB2A5\uD569\uB2C8\uB2E4.");return}if(!a.user.emailVerified){alert("\uC774\uBA54\uC77C \uC778\uC99D \uD6C4 \uC774\uC6A9 \uAC00\uB2A5\uD569\uB2C8\uB2E4.");return}t.value=!t.value},o=S(""),{state:n,execute:y}=_(()=>ee(s.params.id),[],{resetOnExecute:!1}),{isLoading:f,execute:w}=_(X,null,{immediate:!1,throwError:!0,onSuccess:()=>{o.value="",t.value=!1,y(0)}}),D=async()=>{await w(0,s.params.id,{content:o.value,uid:a.uid})},$=()=>y(0);return(Q,C)=>(l(),u("div",null,[ce,t.value?(l(),u("div",de,[r(z,{onSubmit:P(D,["prevent"])},{default:c(()=>[r(I,{modelValue:o.value,"onUpdate:modelValue":C[0]||(C[0]=B=>o.value=B),type:"textarea",outlined:"","hide-bottom-space":"",rules:[i(K)]},null,8,["modelValue","rules"]),m("div",me,[r(h,{type:"submit",loading:i(f),label:"\uB4F1\uB85D",color:"indigo",unelevated:""},null,8,["loading"]),r(h,{label:"\uCDE8\uC18C",outline:"",color:"negative",unelevated:"",onClick:d})])]),_:1},8,["onSubmit"])])):t.value?k("",!0):(l(),p(J,{key:1,onClick:d,class:"cursor-pointer"},{default:c(()=>[r(T,{class:"flex items-center"},{default:c(()=>[r(q,null,{default:c(()=>[i(a).user===null||i(a).user.photoURL===null?(l(),u("img",ue)):(l(),u("img",{key:1,src:i(a).user.photoURL},null,8,pe))]),_:1}),fe]),_:1})]),_:1})),r(le,{"post-id":Q.$route.params.id,items:i(n),onDeleted:$},null,8,["post-id","items"])]))}};export{be as default};
