import{Q as u}from"./QInput.8657458d.js";import{bt as c,a4 as p,o as f,d as b,j as e,k as v,ar as l,aj as o,aq as w,w as V,c as g,b$ as h}from"./index.5dab455f.js";import{Q}from"./QForm.a192e15e.js";import{v as x,b as _}from"./validate-rules.6596e294.js";import"./uid.42677368.js";const q=g("div",{class:"text-h5 text-center text-weight-bold q-mb-xl"}," \uBE44\uBC00\uBC88\uD638 \uCC3E\uAE30 ",-1),j={__name:"FindPasswordForm",emits:["changeViewVal","closeDialog"],setup(k,{emit:i}){const r=c(),n=i,t=p(""),d=async()=>{await h(t.value),r.notify("\uC774\uBA54\uC77C\uB85C \uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815 \uB9C1\uD06C\uB97C \uBCF4\uB0C8\uC2B5\uB2C8\uB2E4."),n("closeDialog")};return(m,a)=>(f(),b("div",null,[q,e(Q,{class:"q-gutter-y-md",onSubmit:V(d,["prevent"])},{default:v(()=>[e(u,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=s=>t.value=s),placeholder:"\uAC00\uC785\uD55C \uC774\uBA54\uC77C",outlined:"",dense:"",rules:[l(x),l(_)]},null,8,["modelValue","rules"]),e(o,{type:"submit",label:"\uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815",class:"full-width",unelevated:"",color:"indigo"}),e(w),e(o,{label:"\uB85C\uADF8\uC778",class:"full-width",flat:"",onClick:a[1]||(a[1]=s=>m.$emit("changeViewVal","LoginForm"))})]),_:1},8,["onSubmit"])]))}};export{j as default};