import{z as i,E as a,h as o,ad as n}from"./index.5dab455f.js";var c=i({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:t}){const l=a(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>o("div",{class:l.value},n(t.default))}}),v=i({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const l=a(()=>parseInt(e.lines,10)),s=a(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),r=a(()=>e.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>o("div",{style:r.value,class:s.value},n(t.default))}});export{v as Q,c as a};
