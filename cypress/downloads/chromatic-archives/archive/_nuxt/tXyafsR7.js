import p from"./CSmM_apQ.js";import{d as _,i as t,v as o,z as i,N as c,x as g,T as k,Q as f,t as n}from"./BIOY7cni.js";const v=["disabled"],x={key:0,class:"absolute left-16 flex-shrink-0"},h={class:"mx-auto"},C={key:1,class:"absolute right-16 flex-shrink-0"},w=_({__name:"Button",props:{variant:{},disabled:{type:Boolean},leading:{},trailing:{},iconSize:{},iconColor:{},class:{},onClick:{type:Function}},setup(u){const e=u,d=t(()=>{if(e.disabled)return"bg-gray-400 text-gray-100 cursor-not-allowed";switch(e.variant){case"outline":return"border border-black bg-white text-black";case"link":return"text-black underline bg-transparent";case"destructive":return"bg-red-600 text-white hover:bg-red-700";case"primary":default:return"bg-black text-white"}}),a=t(()=>e.iconSize?e.iconSize:24),l=t(()=>e.iconColor?e.iconColor:"#000000");return(m,s)=>{const r=p;return n(),o("button",{class:f(["relative inline-flex items-center py-2 px-4 rounded-lg transition-all focus:outline-none w-full min-h-11",d.value,e.class]),disabled:e.disabled,onClick:s[0]||(s[0]=(...b)=>e.onClick&&e.onClick(...b))},[e.leading?(n(),o("div",x,[i(r,{name:e.leading,size:a.value,color:l.value},null,8,["name","size","color"])])):c("",!0),g("span",h,[k(m.$slots,"default")]),e.trailing?(n(),o("div",C,[i(r,{name:e.trailing,size:a.value,color:l.value},null,8,["name","size","color"])])):c("",!0)],10,v)}}});export{w as _};
