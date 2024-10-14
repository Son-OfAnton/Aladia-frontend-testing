import{z as g}from"./DXqQCM1T.js";import{_ as C,a as z,b as n}from"./CVV0efQT.js";import{_ as E}from"./CaSnCCCZ.js";import{_ as u}from"./tXyafsR7.js";import{d as h,i as c,t as _,v as V,Q as v,J as b,E as $,u as B,K as j,A as a,x as m,z as t,B as s,y as A}from"./BIOY7cni.js";import"./CSmM_apQ.js";const x=h({__name:"Separator",props:{orientation:{},thickness:{},class:{}},setup(f){const o=f,d=c(()=>o.orientation==="vertical"?"h-full w-px my-0":"w-full h-px mx-0"),i=c(()=>{switch(o.thickness){case"medium":return o.orientation==="vertical"?"w-0.5":"h-0.5";case"thick":return o.orientation==="vertical"?"w-1":"h-1";case"thin":default:return o.orientation==="vertical"?"w-px":"h-px"}});return(l,p)=>(_(),V("div",{class:v([d.value,i.value,"bg-gray-300",o.class])},null,2))}}),L={class:"flex flex-col gap-y-2 bg-black text-white rounded-lg shadow-lg p-8 max-h-screen max-w-md","data-test":"form-container"},N={class:"flex items-center justify-center mb-6","data-test":"logo-section"},R={class:"ml-4"},P={class:"flex gap-x-2 justify-center items-center my-4","data-test":"separator-section"},S={class:"flex flex-col gap-y-2","data-test":"social-buttons"},K=h({__name:"index",setup(f){function o(r){return r?"visible":"invisible"}const d=g.object({email:g.string().email({message:"Invalid email address"})}),i=b({email:""}),l=b({email:""}),p=c(()=>l.email);$(()=>i.email,r=>{const e=d.safeParse({email:r});e.success?l.email="":l.email=e.error.errors[0].message});const w=B();function y(){const r=d.safeParse(i);if(!r.success){l.email=r.error.errors[0].message;return}w.push("/auth/signup")}return(r,e)=>(_(),j(C,{class:"flex flex-col items-center justify-center min-h-screen min-w-full bg-gray-900","data-test":"container"},{default:a(()=>[m("div",L,[m("div",N,[t(z,{size:"md",src:"/img/aladiaLogo.png",alt:"Logo","data-test":"logo"}),m("div",R,[t(n,{size:"md",weight:"semibold","data-test":"welcome-message"},{default:a(()=>e[1]||(e[1]=[s("Welcome to Aladia,")])),_:1}),t(n,{class:"text-gray-300",size:"sm",weight:"light","data-test":"welcome-subtext"},{default:a(()=>e[2]||(e[2]=[s(" Create or access your account from here ")])),_:1})])]),t(n,{size:"sm",weight:"normal",class:"mb-2 text-center","data-test":"email-prompt"},{default:a(()=>e[3]||(e[3]=[s(" Enter your email ")])),_:1}),t(E,{modelValue:i.email,"onUpdate:modelValue":e[0]||(e[0]=k=>i.email=k),id:"email",placeholder:"Email","data-test":"email-input"},null,8,["modelValue"]),t(n,{class:v([o(l.email),"text-red-500 text-sm h-1"]),"data-test":"email-error"},{default:a(()=>[s(A(p.value),1)]),_:1},8,["class"]),t(u,{variant:"primary",class:"w-full mt-4 border border-white hover:border-2 hover:bg-neutral-900 bg-gradient-to-r from-zinc-500 via-stone-600 to-zinc-900 transition duration-300 ease-in-out",onClick:y,"data-test":"login-button"},{default:a(()=>e[4]||(e[4]=[s(" Enter ")])),_:1}),m("div",P,[t(x,{"data-test":"separator-left"}),t(n,{size:"sm","data-test":"separator-text"},{default:a(()=>e[5]||(e[5]=[s("Or")])),_:1}),t(x,{"data-test":"separator-right"})]),m("div",S,[t(u,{class:"border border-white hover:bg-neutral-900",leading:"mdi:google","data-test":"google-button"},{default:a(()=>e[6]||(e[6]=[s(" Continue with Google ")])),_:1}),t(u,{class:"border border-white hover:bg-neutral-900",leading:"mdi:facebook","data-test":"facebook-button"},{default:a(()=>e[7]||(e[7]=[s(" Continue with Facebook ")])),_:1}),t(u,{class:"border border-white hover:bg-neutral-900",leading:"mdi:apple","data-test":"apple-button"},{default:a(()=>e[8]||(e[8]=[s(" Continue with Apple ")])),_:1})]),t(n,{size:"sm",class:"text-center mt-4","data-test":"terms-conditions"},{default:a(()=>e[9]||(e[9]=[s(" Terms & Conditions ")])),_:1})])]),_:1}))}});export{K as default};
