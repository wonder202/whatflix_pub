import{aV as u,aW as d,aX as P,aY as h,aZ as r,a_ as a,a$ as f,b0 as y,b1 as n,b2 as b,b3 as i,b4 as k,b5 as _,b6 as s,b7 as $,b8 as A}from"./index.5dab455f.js";import{g as B}from"./user.faff4df2.js";async function L(t){return(await _(a(s,"posts"),{...t,readCount:0,commentCount:0,likeCount:0,bookmarkCount:0,createAt:i()})).id}async function R(t){const o=[];t!=null&&t.category&&o.push(u("category","==",t==null?void 0:t.category)),(t==null?void 0:t.tags)&&(t==null?void 0:t.tags.length)>0&&o.push(u("tags","array-contains-any",t==null?void 0:t.tags)),t!=null&&t.sort&&o.push(d(t.sort,"desc")),t!=null&&t.start&&o.push(P(t.start)),t!=null&&t.limit&&o.push(h(t.limit));const e=r(a(s,"posts"),...o),c=await f(e),S=c.docs.map(g=>{var w;const l=g.data();return{...l,id:g.id,createAt:(w=l.createAt)==null?void 0:w.toDate()}}),q=c.docs[c.docs.length-1];return{items:S,lastItem:q}}async function D(t){var c;const o=await y(n(s,"posts",t));if(!o.exists())throw new Error("No such document");const e=o.data();return{id:o.id,...e,createAt:(c=e.createAt)==null?void 0:c.toDate()}}async function C(t){await b(n(s,"posts",t),{readCount:$(1)})}async function U(t){await C(t);const o=await D(t),e=await B(o.uid);return{post:o,postUser:e}}async function T(t,o){await b(n(s,"posts",t),{...o,updatedAt:i()})}async function j(t){await k(n(s,"posts",t))}async function E(t,o){await A(n(s,"post_likes",`${t}_${o}`),{uid:t,postId:o,createAt:i()})}async function I(t,o){await k(n(s,"post_likes",`${t}_${o}`))}async function N(t,o){return(await y(n(s,"post_likes",`${t}_${o}`))).exists()}async function V(t,o){await A(n(s,"users",t,"bookmarks",o),{createAt:i()})}async function W(t,o){await k(n(s,"users",t,"bookmarks",o))}async function X(t,o){return(await y(n(s,"users",t,"bookmarks",o))).exists()}async function Y(t){const o=r(a(s,"users",t,"bookmarks"),d("createAt","desc"),h(5)),e=await f(o);return Promise.all(e.docs.map(c=>D(c.id)))}async function Z(){const t=r(a(s,"tags"),u("count",">",0),d("count","desc"));return(await f(t)).docs.map(e=>e.data()).slice(0,10)}export{Z as a,E as b,L as c,X as d,W as e,V as f,R as g,N as h,Y as i,U as j,j as k,D as l,I as r,T as u};
