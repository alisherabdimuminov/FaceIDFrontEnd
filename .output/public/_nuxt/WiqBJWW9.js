import{_ as il}from"./C42TA1yl.js";import{_ as ml,a as fl,b as pl,c as rl}from"./CsSUeeLO.js";import{_ as _l,a as vl}from"./bSiN64ad.js";import{_ as gl,a as Vl,b as xl,c as cl,d as yl}from"./DnjfkEkh.js";import{_ as wl,a as bl,b as kl,c as $l,d as Tl,e as Ul}from"./DSW0zgDW.js";import{_ as zl,a as Sl,b as Cl,c as Dl,d as jl,e as Al,f as ql}from"./BevbE9c8.js";import{e as L,g as w,v as Il,f as t,o as f,c,i as E,h as Ml,j as Hl,k as Bl,r as _,l as Fl,a as d,b as e,w as a,m as Nl,d as s,F as D,p as j,q as A,t as v,n as Rl}from"./zgKzL862.js";import{u as Ll}from"./dbmB2fFP.js";import{a as q}from"./CG0E6PN7.js";import{k as C}from"./CjBVp7fI.js";import{u as El}from"./B3a9kYQd.js";import{u as Jl}from"./CXIs5lR0.js";import{c as J}from"./CKqcKTee.js";import"./BSWGHhdT.js";const Pl=L({__name:"Textarea",props:{class:{},defaultValue:{},modelValue:{}},emits:["update:modelValue"],setup(N,{emit:b}){const r=N,y=Ll(r,"modelValue",b,{passive:!0,defaultValue:r.defaultValue});return(g,V)=>w((f(),c("textarea",{"onUpdate:modelValue":V[0]||(V[0]=p=>E(y)?y.value=p:null),class:Ml(t(Hl)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",r.class))},null,2)),[[Il,t(y)]])}});/**
 * @license lucide-vue-next v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=J("DownloadIcon",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-vue-next v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=J("UploadIcon",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),Ol={class:"flex flex-col gap-5 p-5 md:p-10"},Xl={class:"flex items-center justify-between"},Zl={key:0,class:"flex flex-col gap-5"},Gl={class:"flex flex-col md:flex-row gap-5"},Kl={class:"flex flex-col md:flex-row gap-5"},Wl={class:"w-full"},hl={class:"w-full"},le={class:"w-full"},ee={class:"flex flex-col md:flex-row gap-5"},ae={class:"w-full"},oe={class:"w-full"},te={class:"w-full"},ne={class:"flex flex-col md:flex-row gap-5"},se={class:"w-full"},de={class:"w-full"},ue={class:"w-full"},ie={class:"w-full md:w-56 flex flex-col gap-5"},me=["src"],fe={class:"flex flex-col md:flex-row gap-5"},pe={class:"w-full"},re={class:"w-full"},_e={class:"flex flex-col md:flex-row gap-5"},ve={class:"w-full"},ge={class:"w-full"},Ve={class:"flex flex-col md:flex-row gap-5"},xe={class:"w-full"},ce={class:"w-full"},ye={class:"flex flex-col md:flex-row gap-5"},we={class:"w-full"},be={class:"w-full"},ke={class:"flex flex-col md:flex-row gap-5"},$e={class:"w-full"},Te={class:"w-full"},Ue={class:"overflow-x-auto"},ze={class:"flex justify-end"},Je=L({__name:"[uuid]",setup(N){El({title:"Xodim"});const b=Bl(),{token:r}=Jl(),o=_(),y=_(),g=_({name:"",file:"",description:"",created:""}),V=_(!1),p=_(!1),P=_(["Ayol","Erkak"]),Q=_(["Andijon","Buxoro","Farg'ona","Jizzax","Namangan","Navoiy","Qashqadaryo","Qoraqalpog'iston Respublikasi","Samarqand","Sirdaryo","Surxondaryo","Toshkent","Toshkent shahri","Xorazm"]),Y=_([{name:"O'zbekiston",flag:"🇺🇿"},{name:"Rossiya",flag:"🇷🇺"},{name:"Qozog'iston",flag:"🇰🇿"},{name:"Tojikiston",flag:"🇹🇯"}]),O=async()=>{p.value=!0;let u=await $fetch(q(`employees/employee/${b.params.uuid}/`),{headers:{Authorization:`Token ${r}`}});o.value=u,console.log(u),p.value=!1},X=async()=>{p.value=!0;const u=new FormData;o.value&&(u.append("first_name",o.value.first_name),u.append("last_name",o.value.last_name),u.append("middle_name",o.value.middle_name),u.append("gender",o.value.gender),u.append("nationality",o.value.nationality),u.append("birth_date",o.value.birth_date),u.append("passport_number",o.value.passport_number),u.append("passport_pinfl",o.value.passport_pinfl),u.append("passport_of_issue",o.value.passport_of_issue),u.append("state",o.value.state||""),u.append("province",o.value.province||""),u.append("district",o.value.district||""),u.append("address",o.value.address||""),u.append("phone",o.value.phone||""),u.append("position",o.value.position),u.append("specialist",o.value.specialist||""),u.append("scientific_title",o.value.scientific_title||""),u.append("academic_degree",o.value.academic_degree||""));let l=await $fetch(q(`employees/employee/${b.params.uuid}/edit/`),{method:"POST",body:u,headers:{Authorization:`Token ${r}`}});console.log(l),p.value=!1},R=async()=>{p.value=!0;let u=await $fetch(q(`applications/?employee=${b.params.uuid}`),{headers:{Authorization:`Token ${r}`}});y.value=u,p.value=!1},Z=async()=>{p.value=!0;let u=new FormData,l=document.getElementById("file");u.append("name",g.value.name),u.append("description",g.value.description),o.value&&u.append("employee",o.value.id.toString()),l&&l.files&&u.append("file",l.files[0]),console.log(u);let x=await $fetch(q("applications/create/"),{method:"POST",body:u,headers:{Authorization:`Token ${r}`}});console.log(x),V.value=!1,R(),p.value=!1};return Fl(()=>{O(),R()}),(u,l)=>{const x=il,k=fl,$=pl,i=_l,m=vl,I=gl,M=Vl,H=yl,B=xl,F=cl,T=rl,U=ml,z=wl,G=bl,S=Tl,K=Ul,W=kl,h=$l,ll=zl,el=Sl,al=Cl,ol=Pl,tl=Dl,nl=jl,sl=Al,dl=ql;return f(),c("div",Ol,[d("div",Xl,[l[23]||(l[23]=d("p",{class:"text-2xl"},"Xodimni tahrirlash",-1)),e(x,{onClick:X},{default:a(()=>l[22]||(l[22]=[s("Saqlash")])),_:1})]),t(o)?(f(),c("div",Zl,[d("div",Gl,[e(U,{class:"flex-1 bg-accent/10"},{default:a(()=>[e($,null,{default:a(()=>[e(k,null,{default:a(()=>l[24]||(l[24]=[s("Shaxsiy ma'lumotlari")])),_:1})]),_:1}),e(T,{class:"flex flex-col gap-5"},{default:a(()=>[d("div",Kl,[d("div",Wl,[e(i,null,{default:a(()=>l[25]||(l[25]=[s("Ismi")])),_:1}),e(m,{modelValue:t(o).first_name,"onUpdate:modelValue":l[0]||(l[0]=n=>t(o).first_name=n)},null,8,["modelValue"])]),d("div",hl,[e(i,null,{default:a(()=>l[26]||(l[26]=[s("Familiyasi")])),_:1}),e(m,{modelValue:t(o).last_name,"onUpdate:modelValue":l[1]||(l[1]=n=>t(o).last_name=n)},null,8,["modelValue"])]),d("div",le,[e(i,null,{default:a(()=>l[27]||(l[27]=[s("Sharifi")])),_:1}),e(m,{modelValue:t(o).middle_name,"onUpdate:modelValue":l[2]||(l[2]=n=>t(o).middle_name=n)},null,8,["modelValue"])])]),d("div",ee,[d("div",ae,[e(i,null,{default:a(()=>l[28]||(l[28]=[s("Jinsi")])),_:1}),e(F,{modelValue:t(o).gender,"onUpdate:modelValue":l[3]||(l[3]=n=>t(o).gender=n)},{default:a(()=>[e(M,null,{default:a(()=>[e(I,{placeholder:"Jinsini tanlang"})]),_:1}),e(B,null,{default:a(()=>[(f(!0),c(D,null,j(t(P),n=>(f(),A(H,{value:n},{default:a(()=>[s(v(n),1)]),_:2},1032,["value"]))),256))]),_:1})]),_:1},8,["modelValue"])]),d("div",oe,[e(i,null,{default:a(()=>l[29]||(l[29]=[s("Millati")])),_:1}),e(m,{modelValue:t(o).nationality,"onUpdate:modelValue":l[4]||(l[4]=n=>t(o).nationality=n)},null,8,["modelValue"])]),d("div",te,[e(i,null,{default:a(()=>l[30]||(l[30]=[s("Tug'ilgan sanasi")])),_:1}),w(e(m,{modelValue:t(o).birth_date,"onUpdate:modelValue":l[5]||(l[5]=n=>t(o).birth_date=n)},null,8,["modelValue"]),[[t(C),"##-##-####"]])])]),d("div",ne,[d("div",se,[e(i,null,{default:a(()=>l[31]||(l[31]=[s("Passport raqami")])),_:1}),w(e(m,{"data-maska":"AA-#######","data-maska-tokens":"A:[a-zA-Z]",modelValue:t(o).passport_number,"onUpdate:modelValue":l[6]||(l[6]=n=>t(o).passport_number=n)},null,8,["modelValue"]),[[t(C)]])]),d("div",de,[e(i,null,{default:a(()=>l[32]||(l[32]=[s("JShShR")])),_:1}),w(e(m,{modelValue:t(o).passport_pinfl,"onUpdate:modelValue":l[7]||(l[7]=n=>t(o).passport_pinfl=n)},null,8,["modelValue"]),[[t(C),"##############"]])]),d("div",ue,[e(i,null,{default:a(()=>l[33]||(l[33]=[s("Passport amal qilish sanasi")])),_:1}),w(e(m,{"data-maska":"##-##-####",placeholder:"01-01-2000",modelValue:t(o).passport_of_issue,"onUpdate:modelValue":l[8]||(l[8]=n=>t(o).passport_of_issue=n)},null,8,["modelValue"]),[[t(C)]])])])]),_:1})]),_:1}),e(U,{class:"bg-accent/10"},{default:a(()=>[e($,null,{default:a(()=>[e(k,null,{default:a(()=>l[34]||(l[34]=[s("Rasm")])),_:1})]),_:1}),e(T,null,{default:a(()=>[d("div",ie,[d("img",{class:"w-56 h-56 border rounded",src:t(o).image,alt:""},null,8,me)])]),_:1})]),_:1})]),e(U,{class:"bg-accent/10"},{default:a(()=>[e($,null,{default:a(()=>[e(k,null,{default:a(()=>l[35]||(l[35]=[s("Manzil")])),_:1})]),_:1}),e(T,null,{default:a(()=>[d("div",fe,[d("div",pe,[e(i,null,{default:a(()=>l[36]||(l[36]=[s("Davlat")])),_:1}),e(F,{modelValue:t(o).state,"onUpdate:modelValue":l[9]||(l[9]=n=>t(o).state=n)},{default:a(()=>[e(M,null,{default:a(()=>[e(I,{placeholder:"Davlatni tanlang"})]),_:1}),e(B,null,{default:a(()=>[(f(!0),c(D,null,j(t(Y),n=>(f(),A(H,{value:n.name},{default:a(()=>[s(v(n.flag)+" "+v(n.name),1)]),_:2},1032,["value"]))),256))]),_:1})]),_:1},8,["modelValue"])]),d("div",re,[e(i,null,{default:a(()=>l[37]||(l[37]=[s("Viloyat")])),_:1}),e(F,{modelValue:t(o).province,"onUpdate:modelValue":l[10]||(l[10]=n=>t(o).province=n)},{default:a(()=>[e(M,null,{default:a(()=>[e(I,{placeholder:"Viloyatni tanlang"})]),_:1}),e(B,null,{default:a(()=>[(f(!0),c(D,null,j(t(Q),n=>(f(),A(H,{value:n},{default:a(()=>[s(v(n),1)]),_:2},1032,["value"]))),256))]),_:1})]),_:1},8,["modelValue"])])]),d("div",_e,[d("div",ve,[e(i,null,{default:a(()=>l[38]||(l[38]=[s("Tuman")])),_:1}),e(m,{modelValue:t(o).district,"onUpdate:modelValue":l[11]||(l[11]=n=>t(o).district=n)},null,8,["modelValue"])]),d("div",ge,[e(i,null,{default:a(()=>l[39]||(l[39]=[s("Manzil")])),_:1}),e(m,{modelValue:t(o).address,"onUpdate:modelValue":l[12]||(l[12]=n=>t(o).address=n)},null,8,["modelValue"])])])]),_:1})]),_:1}),e(U,{class:"bg-accent/10"},{default:a(()=>[e($,null,{default:a(()=>[e(k,null,{default:a(()=>l[40]||(l[40]=[s("Qo'shimcha ma'lumotlar")])),_:1})]),_:1}),e(T,null,{default:a(()=>[d("div",Ve,[d("div",xe,[e(i,null,{default:a(()=>l[41]||(l[41]=[s("Department")])),_:1}),e(m,{modelValue:t(o).department.name,"onUpdate:modelValue":l[13]||(l[13]=n=>t(o).department.name=n),disabled:!0},null,8,["modelValue"])]),d("div",ce,[e(i,null,{default:a(()=>l[42]||(l[42]=[s("Lavozimi")])),_:1}),e(m,{modelValue:t(o).position,"onUpdate:modelValue":l[14]||(l[14]=n=>t(o).position=n)},null,8,["modelValue"])])]),d("div",ye,[d("div",we,[e(i,null,{default:a(()=>l[43]||(l[43]=[s("Mutaxasisligi")])),_:1}),e(m,{modelValue:t(o).specialist,"onUpdate:modelValue":l[15]||(l[15]=n=>t(o).specialist=n)},null,8,["modelValue"])]),d("div",be,[e(i,null,{default:a(()=>l[44]||(l[44]=[s("Ilmiy unvoni")])),_:1}),e(m,{modelValue:t(o).scientific_title,"onUpdate:modelValue":l[16]||(l[16]=n=>t(o).scientific_title=n)},null,8,["modelValue"])])]),d("div",ke,[d("div",$e,[e(i,null,{default:a(()=>l[45]||(l[45]=[s("Akademik darajasi")])),_:1}),e(m,{modelValue:t(o).academic_degree,"onUpdate:modelValue":l[17]||(l[17]=n=>t(o).academic_degree=n)},null,8,["modelValue"])]),d("div",Te,[e(i,null,{default:a(()=>l[46]||(l[46]=[s("Telefon raqami")])),_:1}),w(e(m,{modelValue:t(o).phone,"onUpdate:modelValue":l[18]||(l[18]=n=>t(o).phone=n)},null,8,["modelValue"]),[[t(C),"+998 (##) - ### - ## - ##"]])])])]),_:1})]),_:1}),e(U,null,{default:a(()=>[e($,null,{default:a(()=>[e(k,null,{default:a(()=>l[47]||(l[47]=[s("Hujjatlar")])),_:1})]),_:1}),e(T,null,{default:a(()=>[d("div",Ue,[e(h,null,{default:a(()=>[e(G,null,{default:a(()=>[e(z,null,{default:a(()=>l[48]||(l[48]=[s("#")])),_:1}),e(z,null,{default:a(()=>l[49]||(l[49]=[s("Turi")])),_:1}),e(z,null,{default:a(()=>l[50]||(l[50]=[s("Sana")])),_:1}),e(z,{class:"w-96"},{default:a(()=>l[51]||(l[51]=[s("Izox")])),_:1}),e(z,{class:"w-32"},{default:a(()=>l[52]||(l[52]=[s("Yuklab olish")])),_:1})]),_:1}),e(W,null,{default:a(()=>[(f(!0),c(D,null,j(t(y),(n,ul)=>(f(),A(K,null,{default:a(()=>[e(S,null,{default:a(()=>[s("#"+v(ul+1),1)]),_:2},1024),e(S,null,{default:a(()=>[s(v(n.name),1)]),_:2},1024),e(S,null,{default:a(()=>[s(v(n.created),1)]),_:2},1024),e(S,{class:"font-mono text-muted-foreground"},{default:a(()=>[s(v(n.description),1)]),_:2},1024),e(S,{class:"text-center"},{default:a(()=>[e(x,{onClick:Se=>("navigateTo"in u?u.navigateTo:t(Rl))(n.file,{external:!0,open:{target:"_blank"}}),variant:"outline",size:"icon"},{default:a(()=>[e(t(Ql),{size:16})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),l[60]||(l[60]=s()),l[61]||(l[61]=d("br",null,null,-1)),d("div",ze,[e(dl,{open:t(V),"onUpdate:open":l[21]||(l[21]=n=>E(V)?V.value=n:null)},{default:a(()=>[e(ll,null,{default:a(()=>[e(x,{variant:"outline",size:"sm"},{default:a(()=>[e(t(Yl),{size:16}),l[53]||(l[53]=s(" Hujjat qo'shish"))]),_:1})]),_:1}),e(sl,null,{default:a(()=>[e(al,null,{default:a(()=>[e(el,null,{default:a(()=>l[54]||(l[54]=[s("Yangi hujjat yuklash")])),_:1})]),_:1}),d("div",null,[e(i,null,{default:a(()=>l[55]||(l[55]=[s("Nomi")])),_:1}),e(m,{modelValue:t(g).name,"onUpdate:modelValue":l[19]||(l[19]=n=>t(g).name=n)},null,8,["modelValue"])]),d("div",null,[e(i,null,{default:a(()=>l[56]||(l[56]=[s("Izox")])),_:1}),e(ol,{rows:"10",class:"resize-none",modelValue:t(g).description,"onUpdate:modelValue":l[20]||(l[20]=n=>t(g).description=n)},null,8,["modelValue"])]),d("div",null,[e(i,null,{default:a(()=>l[57]||(l[57]=[s("Fayl")])),_:1}),e(m,{id:"file",type:"file"})]),e(nl,null,{default:a(()=>[e(tl,null,{default:a(()=>[e(x,{variant:"destructive"},{default:a(()=>l[58]||(l[58]=[s("Yopish")])),_:1})]),_:1}),e(x,{onClick:Z},{default:a(()=>l[59]||(l[59]=[s("Yuklash")])),_:1})]),_:1})]),_:1})]),_:1},8,["open"])])]),_:1})]),_:1})])):Nl("",!0)])}}});export{Je as default};
