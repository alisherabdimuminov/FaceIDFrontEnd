import{aD as O,aE as U,r as m,l as E,aF as V,L as y,U as x,B as N,a4 as C}from"./zgKzL862.js";function F(e){return O()?(U(e),!0):!1}const J=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const T=e=>typeof e<"u",$=J?window.navigator:void 0;function k(){const e=m(!1),n=x();return n&&E(()=>{e.value=!0},n),e}function B(e){const n=k();return N(()=>(n.value,!!e()))}function G(e){return JSON.parse(JSON.stringify(e))}function I(e={}){var n,g;const s=m((n=e.enabled)!=null?n:!1),c=m((g=e.autoSwitch)!=null?g:!0),u=m(e.constraints),{navigator:r=$}=e,l=B(()=>{var t;return(t=r==null?void 0:r.mediaDevices)==null?void 0:t.getUserMedia}),i=V();function S(t){switch(t){case"video":{if(u.value)return u.value.video||!1;break}case"audio":{if(u.value)return u.value.audio||!1;break}}}async function d(){if(!(!l.value||i.value))return i.value=await r.mediaDevices.getUserMedia({video:S("video"),audio:S("audio")}),i.value}function f(){var t;(t=i.value)==null||t.getTracks().forEach(b=>b.stop()),i.value=void 0}function v(){f(),s.value=!1}async function a(){return await d(),i.value&&(s.value=!0),i.value}async function p(){return f(),await a()}return y(s,t=>{t?d():f()},{immediate:!0}),y(u,()=>{c.value&&i.value&&p()},{immediate:!0}),F(()=>{v()}),{isSupported:l,stream:i,start:a,stop:v,restart:p,constraints:u,enabled:s,autoSwitch:c}}function L(e,n,g,s={}){var c,u,r;const{clone:l=!1,passive:i=!1,eventName:S,deep:d=!1,defaultValue:f,shouldEmit:v}=s,a=x(),p=g||(a==null?void 0:a.emit)||((c=a==null?void 0:a.$emit)==null?void 0:c.bind(a))||((r=(u=a==null?void 0:a.proxy)==null?void 0:u.$emit)==null?void 0:r.bind(a==null?void 0:a.proxy));let t=S;t=t||`update:${n.toString()}`;const b=o=>l?typeof l=="function"?l(o):G(o):o,M=()=>T(e[n])?b(e[n]):f,D=o=>{v?v(o)&&p(t,o):p(t,o)};if(i){const o=M(),h=m(o);let w=!1;return y(()=>e[n],_=>{w||(w=!0,h.value=b(_),C(()=>w=!1))}),y(h,_=>{!w&&(_!==e[n]||d)&&D(_)},{deep:d}),h}else return N({get(){return M()},set(o){D(o)}})}export{I as a,k as b,L as u};