import{o as _,c as h,a as f,e as y,x as j,q as w,w as t,s as C,y as U,z as O,f as a,A as _e,B as V,I as me,C as M,j as P,D as pe,E as ce,G as ge,H as ve,b as e,J as we,K as be,r as T,l as $e,L as xe,d as l,n as J,i as L,F as D,p as k,m as ye,t as p}from"./zgKzL862.js";import{a as Te,_ as he}from"./bSiN64ad.js";import{_ as Ce}from"./C42TA1yl.js";import{_ as Be,a as De,b as ke,c as Ve,d as Me,e as Pe}from"./DSW0zgDW.js";import{_ as Re,a as qe,b as Le,c as Se,d as je}from"./Cy28UZVq.js";import{_ as ze}from"./BBMl_GJe.js";import{_ as Ne,a as Ie,b as Xe,c as Ae,d as He,e as Fe,f as Ee}from"./BevbE9c8.js";import{a as S}from"./CG0E6PN7.js";import{u as Ge}from"./B3a9kYQd.js";import{u as Je}from"./CXIs5lR0.js";import"./dbmB2fFP.js";import"./BSWGHhdT.js";function Ue(m,u){return _(),h("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[f("path",{d:"M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z",fill:"currentColor"})])}const Oe=y({__name:"Tabs",props:{defaultValue:{},orientation:{},dir:{},activationMode:{},modelValue:{},asChild:{type:Boolean},as:{}},emits:["update:modelValue"],setup(m,{emit:u}){const o=j(m,u);return(c,b)=>(_(),w(a(_e),U(O(a(o))),{default:t(()=>[C(c.$slots,"default")]),_:3},16))}}),Ye={class:"truncate"},Ke=y({__name:"TabsTrigger",props:{value:{},disabled:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(m){const u=m,i=V(()=>{const{class:o,...c}=u;return c}),r=me(i);return(o,c)=>(_(),w(a(pe),M(a(r),{class:a(P)("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",u.class)}),{default:t(()=>[f("span",Ye,[C(o.$slots,"default")])]),_:3},16,["class"]))}}),Qe=y({__name:"TabsList",props:{loop:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(m){const u=m,i=V(()=>{const{class:r,...o}=u;return o});return(r,o)=>(_(),w(a(ce),M(i.value,{class:a(P)("inline-flex items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",u.class)}),{default:t(()=>[C(r.$slots,"default")]),_:3},16,["class"]))}}),Ze=y({__name:"TabsContent",props:{value:{},forceMount:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(m){const u=m,i=V(()=>{const{class:r,...o}=u;return o});return(r,o)=>(_(),w(a(ge),M({class:a(P)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",u.class)},i.value),{default:t(()=>[C(r.$slots,"default")]),_:3},16,["class"]))}}),We=y({__name:"DropdownMenuRadioGroup",props:{modelValue:{},asChild:{type:Boolean},as:{}},emits:["update:modelValue"],setup(m,{emit:u}){const o=j(m,u);return(c,b)=>(_(),w(a(ve),U(O(a(o))),{default:t(()=>[C(c.$slots,"default")]),_:3},16))}}),et={class:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center"},tt=y({__name:"DropdownMenuRadioItem",props:{value:{},disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{},class:{}},emits:["select"],setup(m,{emit:u}){const i=m,r=u,o=V(()=>{const{class:b,...x}=i;return x}),c=j(o,r);return(b,x)=>(_(),w(a(be),M(a(c),{class:a(P)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",i.class)}),{default:t(()=>[f("span",et,[e(a(we),null,{default:t(()=>[e(a(Ue),{class:"h-4 w-4 fill-current"})]),_:1})]),C(b.$slots,"default")]),_:3},16,["class"]))}}),st={class:"flex flex-col gap-5 p-5 md:p-10"},lt={class:"flex flex-col gap-3"},at={class:"flex flex-col md:flex-row justify-between"},nt={class:"flex gap-3"},ot={class:"border rounded-md overflow-x-auto"},ut=["src"],dt={class:"flex flex-col gap-3"},it={class:"flex flex-col md:flex-row justify-between"},rt={class:"flex gap-3"},ft={class:"overflow-x-auto"},Ct=y({__name:"index",setup(m){Ge({title:"Xodimlar"});const{token:u}=Je(),i=T(""),r=T(""),o=T(!1),c=T(),b=T(),x=T(!1),z=async(v="0")=>{o.value=!0;let s=await $fetch(S(`employees/?department=${v}`),{headers:{Authorization:`Token ${u}`}});c.value=s,o.value=!1},N=async()=>{o.value=!0;let v=await $fetch(S("departments/"),{headers:{Authorization:`Token ${u}`}});b.value=v,o.value=!1},Y=async()=>{o.value=!0,await $fetch(S("departments/create/"),{method:"POST",body:JSON.stringify({name:r.value}),headers:{Authorization:`Token ${u}`}}),N(),o.value=!1,x.value=!1};return $e(async()=>{z(),N()}),xe(i,v=>{z(i.value)}),(v,s)=>{const I=Ke,K=Qe,X=Te,B=Ce,g=Be,Q=Re,Z=qe,W=Le,A=tt,ee=We,te=Se,se=je,H=De,d=Me,R=Pe,$=ze,F=ke,E=Ve,G=Ze,le=Ne,ae=Ie,ne=Xe,oe=he,ue=Ae,de=He,ie=Fe,re=Ee,fe=Oe;return _(),h("div",st,[e(fe,{"default-value":"employees"},{default:t(()=>[e(K,null,{default:t(()=>[e(I,{value:"employees"},{default:t(()=>s[4]||(s[4]=[l("Xodimlar")])),_:1}),e(I,{value:"departments"},{default:t(()=>s[5]||(s[5]=[l("Bo'limlar")])),_:1})]),_:1}),e(G,{value:"employees"},{default:t(()=>[f("div",lt,[f("div",at,[s[7]||(s[7]=f("p",{class:"text-2xl"},"Xodimlar ro'yxati",-1)),f("div",nt,[e(X,{class:"w-full md:w-96",placeholder:"Xodim qidirish"}),e(B,{onClick:s[0]||(s[0]=n=>("navigateTo"in v?v.navigateTo:a(J))({name:"admin-employees-add"}))},{default:t(()=>s[6]||(s[6]=[l("Xodim qo'shish")])),_:1})])]),f("div",ot,[e(E,{class:"whitespace-nowrap"},{default:t(()=>[e(H,null,{default:t(()=>[e(g,{class:"w-4"},{default:t(()=>s[8]||(s[8]=[l("#")])),_:1}),e(g,null,{default:t(()=>s[9]||(s[9]=[l("Ism, familiya, sharifi")])),_:1}),e(g,null,{default:t(()=>[e(se,null,{default:t(()=>[e(Q,null,{default:t(()=>[e(B,{size:"xs",variant:"ghost"},{default:t(()=>s[10]||(s[10]=[l("Bo'lim")])),_:1})]),_:1}),e(te,null,{default:t(()=>[e(Z,null,{default:t(()=>s[11]||(s[11]=[l("Filtrlash")])),_:1}),e(W),e(ee,{modelValue:a(i),"onUpdate:modelValue":s[1]||(s[1]=n=>L(i)?i.value=n:null)},{default:t(()=>[e(A,{value:"0"},{default:t(()=>s[12]||(s[12]=[l("Barcha bo'limlar")])),_:1}),(_(!0),h(D,null,k(a(b),n=>(_(),w(A,{value:n.id},{default:t(()=>[l(p(n.name),1)]),_:2},1032,["value"]))),256))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(g,null,{default:t(()=>s[13]||(s[13]=[l("Lavozimi")])),_:1}),e(g,null,{default:t(()=>s[14]||(s[14]=[l("Tel raqami")])),_:1}),e(g,null,{default:t(()=>s[15]||(s[15]=[l("Passport raqami")])),_:1}),e(g,null,{default:t(()=>s[16]||(s[16]=[l("JShShR")])),_:1}),e(g,null,{default:t(()=>s[17]||(s[17]=[l("Rasmi")])),_:1})]),_:1}),e(F,null,{default:t(()=>[(_(!0),h(D,null,k(a(c),(n,q)=>(_(),w(R,{onClick:_t=>("navigateTo"in v?v.navigateTo:a(J))({name:"admin-employees-uuid",params:{uuid:n.uuid}})},{default:t(()=>[e(d,null,{default:t(()=>[l(p(q+1),1)]),_:2},1024),e(d,null,{default:t(()=>[l(p(n.first_name)+" "+p(n.last_name)+" "+p(n.middle_name),1)]),_:2},1024),e(d,null,{default:t(()=>[l(p(n.department.name),1)]),_:2},1024),e(d,null,{default:t(()=>[l(p(n.position),1)]),_:2},1024),e(d,null,{default:t(()=>[l(p(n.phone),1)]),_:2},1024),e(d,null,{default:t(()=>[l(p(n.passport_number),1)]),_:2},1024),e(d,null,{default:t(()=>[l(p(n.passport_pinfl),1)]),_:2},1024),e(d,null,{default:t(()=>[f("img",{class:"w-6 h-6 rounded border",src:n.image,alt:""},null,8,ut)]),_:2},1024)]),_:2},1032,["onClick"]))),256)),a(o)?(_(),h(D,{key:0},k(10,n=>e(R,null,{default:t(()=>[e(d,null,{default:t(()=>[e($,{class:"w-4 h-4"})]),_:1}),e(d,null,{default:t(()=>[e($,{class:"w-full h-4"})]),_:1}),e(d,null,{default:t(()=>[e($,{class:"w-full h-4"})]),_:1}),e(d,null,{default:t(()=>[e($,{class:"w-full h-4"})]),_:1}),e(d,null,{default:t(()=>[e($,{class:"w-full h-4"})]),_:1}),e(d,null,{default:t(()=>[e($,{class:"w-full h-4"})]),_:1}),e(d,null,{default:t(()=>[e($,{class:"w-full h-4"})]),_:1}),e(d,null,{default:t(()=>[e($,{class:"w-6 h-6"})]),_:1})]),_:1})),64)):ye("",!0)]),_:1})]),_:1})])])]),_:1}),e(G,{value:"departments"},{default:t(()=>[f("div",dt,[f("div",it,[s[23]||(s[23]=f("p",{class:"text-2xl"},"Bo'limlar ro'yxati",-1)),f("div",rt,[e(re,{open:a(x),"onUpdate:open":s[3]||(s[3]=n=>L(x)?x.value=n:null)},{default:t(()=>[e(le,null,{default:t(()=>[e(B,null,{default:t(()=>s[18]||(s[18]=[l("Bo'lim qo'shish")])),_:1})]),_:1}),e(ie,null,{default:t(()=>[e(ne,null,{default:t(()=>[e(ae,null,{default:t(()=>s[19]||(s[19]=[l("Yangi bo'lim qo'shish")])),_:1})]),_:1}),f("div",null,[e(oe,null,{default:t(()=>s[20]||(s[20]=[l("Nomi")])),_:1}),e(X,{modelValue:a(r),"onUpdate:modelValue":s[2]||(s[2]=n=>L(r)?r.value=n:null)},null,8,["modelValue"])]),e(de,null,{default:t(()=>[e(ue,null,{default:t(()=>[e(B,{variant:"destructive"},{default:t(()=>s[21]||(s[21]=[l("Yopish")])),_:1})]),_:1}),e(B,{onClick:Y},{default:t(()=>s[22]||(s[22]=[l("Qo'shish")])),_:1})]),_:1})]),_:1})]),_:1},8,["open"])])]),f("div",ft,[e(E,{class:"whitespace-nowrap"},{default:t(()=>[e(H,null,{default:t(()=>[e(g,null,{default:t(()=>s[24]||(s[24]=[l("#")])),_:1}),e(g,null,{default:t(()=>s[25]||(s[25]=[l("Bo'lim")])),_:1}),e(g,null,{default:t(()=>s[26]||(s[26]=[l("Xodimlari soni")])),_:1})]),_:1}),e(F,null,{default:t(()=>[(_(!0),h(D,null,k(a(b),(n,q)=>(_(),w(R,null,{default:t(()=>[e(d,null,{default:t(()=>[l(p(q+1),1)]),_:2},1024),e(d,null,{default:t(()=>[l(p(n.name),1)]),_:2},1024),e(d,null,{default:t(()=>[l(p(n.employees),1)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})])])]),_:1})]),_:1})])}}});export{Ct as default};