import{d as b,o as l,c as u,h as y,a as A,t as B,i as E,j as D,u as I,k as g,l as i,m as O,p as V,q as W,r as N,n as $}from"./index-CQkD3xRi.js";const j={class:"flex gap-4"},G={key:0,class:"text-2xl fi fi-sr-file-pdf"},q={key:1,class:"text-2xl fi fi-sr-file-word"},z=["href"],R=b({__name:"AppDownloadable",props:{url:{},name:{},type:{default:"pdf"}},setup(e){return(n,t)=>(l(),u("div",j,[n.type==="pdf"?(l(),u("i",G)):y("",!0),n.type==="word"?(l(),u("i",q)):y("",!0),A("a",{class:"underline",href:n.url,download:""},B(n.name),9,z)]))}});function T(e){return E()?(D(e),!0):!1}function x(e){return typeof e=="function"?e():I(e)}const F=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const H=e=>e!=null,c=()=>{};function f(e){var n;const t=x(e);return(n=t==null?void 0:t.$el)!=null?n:t}const J=F?window:void 0;function K(){const e=i(!1),n=W();return n&&V(()=>{e.value=!0},n),e}function L(e){const n=K();return g(()=>(n.value,!!e()))}function P(e,n,t={}){const{root:r,rootMargin:p="0px",threshold:S=.1,window:d=J,immediate:m=!0}=t,v=L(()=>d&&"IntersectionObserver"in d),k=g(()=>{const s=x(e);return(Array.isArray(s)?s:[s]).map(f).filter(H)});let a=c;const o=i(m),C=v.value?O(()=>[k.value,f(r),o.value],([s,M])=>{if(a(),!o.value||!s.length)return;const h=new IntersectionObserver(n,{root:f(M),rootMargin:p,threshold:S});s.forEach(w=>w&&h.observe(w)),a=()=>{h.disconnect(),a=c}},{immediate:m,flush:"post"}):c,_=()=>{a(),C(),o.value=!1};return T(_),{isSupported:v,isActive:o,pause(){a(),o.value=!1},resume(){o.value=!0},stop:_}}const U=b({__name:"AppBlurContent",setup(e){const n=i(null),t=i(!1);return P(n,([{isIntersecting:r}])=>{t.value=r},{root:null,rootMargin:"-50% 0px -50% 0px",threshold:0}),(r,p)=>(l(),u("div",{class:$(["flex flex-col flex-wrap my-16 gap-24 justify-center items-center transition min-h-[40%] w-full",{"blur-none!":t.value,"blur-md":!t.value}]),ref_key:"scrollElement",ref:n},[N(r.$slots,"default")],2))}});export{U as _,R as a};
