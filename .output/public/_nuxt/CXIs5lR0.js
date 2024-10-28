import{r as T,aE as S,L as j,aD as N,bd as L,be as F,a4 as P}from"./zgKzL862.js";function I(r,i){if(typeof r!="string")throw new TypeError("argument str must be a string");const n={},t=i||{},e=t.decode||M;let a=0;for(;a<r.length;){const o=r.indexOf("=",a);if(o===-1)break;let c=r.indexOf(";",a);if(c===-1)c=r.length;else if(c<o){a=r.lastIndexOf(";",o-1)+1;continue}const u=r.slice(a,o).trim();if(t!=null&&t.filter&&!(t!=null&&t.filter(u))){a=c+1;continue}if(n[u]===void 0){let s=r.slice(o+1,c).trim();s.codePointAt(0)===34&&(s=s.slice(1,-1)),n[u]=_(s,e)}a=c+1}return n}function M(r){return r.includes("%")?decodeURIComponent(r):r}function _(r,i){try{return i(r)}catch{return r}}const w=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function v(r,i,n){const t=n||{},e=t.encode||encodeURIComponent;if(typeof e!="function")throw new TypeError("option encode is invalid");if(!w.test(r))throw new TypeError("argument name is invalid");const a=e(i);if(a&&!w.test(a))throw new TypeError("argument val is invalid");let o=r+"="+a;if(t.maxAge!==void 0&&t.maxAge!==null){const c=t.maxAge-0;if(Number.isNaN(c)||!Number.isFinite(c))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(c)}if(t.domain){if(!w.test(t.domain))throw new TypeError("option domain is invalid");o+="; Domain="+t.domain}if(t.path){if(!w.test(t.path))throw new TypeError("option path is invalid");o+="; Path="+t.path}if(t.expires){if(!B(t.expires)||Number.isNaN(t.expires.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+t.expires.toUTCString()}if(t.httpOnly&&(o+="; HttpOnly"),t.secure&&(o+="; Secure"),t.priority)switch(typeof t.priority=="string"?t.priority.toLowerCase():t.priority){case"low":{o+="; Priority=Low";break}case"medium":{o+="; Priority=Medium";break}case"high":{o+="; Priority=High";break}default:throw new TypeError("option priority is invalid")}if(t.sameSite)switch(typeof t.sameSite=="string"?t.sameSite.toLowerCase():t.sameSite){case!0:{o+="; SameSite=Strict";break}case"lax":{o+="; SameSite=Lax";break}case"strict":{o+="; SameSite=Strict";break}case"none":{o+="; SameSite=None";break}default:throw new TypeError("option sameSite is invalid")}return t.partitioned&&(o+="; Partitioned"),o}function B(r){return Object.prototype.toString.call(r)==="[object Date]"||r instanceof Date}const A=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function x(r,i){i?i={...A,...i}:i=A;const n=R(i);return n.dispatch(r),n.toString()}const z=Object.freeze(["prototype","__proto__","constructor"]);function R(r){let i="",n=new Map;const t=e=>{i+=e};return{toString(){return i},getContext(){return n},dispatch(e){return r.replacer&&(e=r.replacer(e)),this[e===null?"null":typeof e](e)},object(e){if(e&&typeof e.toJSON=="function")return this.object(e.toJSON());const a=Object.prototype.toString.call(e);let o="";const c=a.length;c<10?o="unknown:["+a+"]":o=a.slice(8,c-1),o=o.toLowerCase();let u=null;if((u=n.get(e))===void 0)n.set(e,n.size);else return this.dispatch("[CIRCULAR:"+u+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](e):r.ignoreUnknown||this.unkown(e,o);else{let s=Object.keys(e);r.unorderedObjects&&(s=s.sort());let l=[];r.respectType!==!1&&!C(e)&&(l=z),r.excludeKeys&&(s=s.filter(f=>!r.excludeKeys(f)),l=l.filter(f=>!r.excludeKeys(f))),t("object:"+(s.length+l.length)+":");const d=f=>{this.dispatch(f),t(":"),r.excludeValues||this.dispatch(e[f]),t(",")};for(const f of s)d(f);for(const f of l)d(f)}},array(e,a){if(a=a===void 0?r.unorderedArrays!==!1:a,t("array:"+e.length+":"),!a||e.length<=1){for(const u of e)this.dispatch(u);return}const o=new Map,c=e.map(u=>{const s=R(r);s.dispatch(u);for(const[l,d]of s.getContext())o.set(l,d);return s.toString()});return n=o,c.sort(),this.array(c,!1)},date(e){return t("date:"+e.toJSON())},symbol(e){return t("symbol:"+e.toString())},unkown(e,a){if(t(a),!!e&&(t(":"),e&&typeof e.entries=="function"))return this.array(Array.from(e.entries()),!0)},error(e){return t("error:"+e.toString())},boolean(e){return t("bool:"+e)},string(e){t("string:"+e.length+":"),t(e)},function(e){t("fn:"),C(e)?this.dispatch("[native]"):this.dispatch(e.toString()),r.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),r.respectFunctionProperties&&this.object(e)},number(e){return t("number:"+e)},xml(e){return t("xml:"+e.toString())},null(){return t("Null")},undefined(){return t("Undefined")},regexp(e){return t("regex:"+e.toString())},uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},url(e){return t("url:"+e.toString())},map(e){t("map:");const a=[...e];return this.array(a,r.unorderedSets!==!1)},set(e){t("set:");const a=[...e];return this.array(a,r.unorderedSets!==!1)},file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},blob(){if(r.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return t("domwindow")},bigint(e){return t("bigint:"+e.toString())},process(){return t("process")},timer(){return t("timer")},pipe(){return t("pipe")},tcp(){return t("tcp")},udp(){return t("udp")},tty(){return t("tty")},statwatcher(){return t("statwatcher")},securecontext(){return t("securecontext")},connection(){return t("connection")},zlib(){return t("zlib")},context(){return t("context")},nodescript(){return t("nodescript")},httpparser(){return t("httpparser")},dataview(){return t("dataview")},signal(){return t("signal")},fsevent(){return t("fsevent")},tlswrap(){return t("tlswrap")}}}const U="[native code] }",K=U.length;function C(r){return typeof r!="function"?!1:Function.prototype.toString.call(r).slice(-K)===U}function H(r,i,n={}){return r===i||x(r,n)===x(i,n)}function p(r){if(typeof r!="object")return r;var i,n,t=Object.prototype.toString.call(r);if(t==="[object Object]"){if(r.constructor!==Object&&typeof r.constructor=="function"){n=new r.constructor;for(i in r)r.hasOwnProperty(i)&&n[i]!==r[i]&&(n[i]=p(r[i]))}else{n={};for(i in r)i==="__proto__"?Object.defineProperty(n,i,{value:p(r[i]),configurable:!0,enumerable:!0,writable:!0}):n[i]=p(r[i])}return n}if(t==="[object Array]"){for(i=r.length,n=Array(i);i--;)n[i]=p(r[i]);return n}return t==="[object Set]"?(n=new Set,r.forEach(function(e){n.add(p(e))}),n):t==="[object Map]"?(n=new Map,r.forEach(function(e,a){n.set(p(a),p(e))}),n):t==="[object Date]"?new Date(+r):t==="[object RegExp]"?(n=new RegExp(r.source,r.flags),n.lastIndex=r.lastIndex,n):t==="[object DataView]"?new r.constructor(p(r.buffer)):t==="[object ArrayBuffer]"?r.slice(0):t.slice(-6)==="Array]"?new r.constructor(r):r}const V={path:"/",watch:!0,decode:r=>F(decodeURIComponent(r)),encode:r=>encodeURIComponent(typeof r=="string"?r:JSON.stringify(r))},m=window.cookieStore;function J(r,i){var u;const n={...V,...i};n.filter??(n.filter=s=>s===r);const t=E(n)||{};let e;n.maxAge!==void 0?e=n.maxAge*1e3:n.expires&&(e=n.expires.getTime()-Date.now());const a=e!==void 0&&e<=0,o=p(a?void 0:t[r]??((u=n.default)==null?void 0:u.call(n))),c=e&&!a?X(o,e,n.watch&&n.watch!=="shallow"):T(o);{let s=null;try{!m&&typeof BroadcastChannel<"u"&&(s=new BroadcastChannel(`nuxt:cookies:${r}`))}catch{}const l=()=>{n.readonly||H(c.value,t[r])||($(r,c.value,n),t[r]=p(c.value),s==null||s.postMessage({value:n.encode(c.value)}))},d=y=>{var g;const h=y.refresh?(g=E(n))==null?void 0:g[r]:n.decode(y.value);f=!0,c.value=h,t[r]=p(h),P(()=>{f=!1})};let f=!1;const k=!!N();if(k&&S(()=>{f=!0,l(),s==null||s.close()}),m){const y=h=>{const g=h.changed.find(b=>b.name===r),D=h.deleted.find(b=>b.name===r);g&&d({value:g.value}),D&&d({value:null})};m.addEventListener("change",y),k&&S(()=>m.removeEventListener("change",y))}else s&&(s.onmessage=({data:y})=>d(y));n.watch?j(c,()=>{f||l()},{deep:n.watch!=="shallow"}):l()}return c}function E(r={}){return I(document.cookie,r)}function q(r,i,n={}){return i==null?v(r,i,{...n,maxAge:-1}):v(r,i,n)}function $(r,i,n={}){document.cookie=q(r,i,n)}const O=2147483647;function X(r,i,n){let t,e,a=0;const o=n?T(r):{value:r};return N()&&S(()=>{e==null||e(),clearTimeout(t)}),L((c,u)=>{n&&(e=j(o,u));function s(){a=0,clearTimeout(t);const l=i-a,d=l<O?l:O;t=setTimeout(()=>{if(a+=d,a<i)return s();o.value=void 0,u()},d)}return{get(){return c(),o.value},set(l){s(),o.value=l,u()}}})}function G(){const r=J("token",{watch:"shallow",default:()=>""});return{token:r.value,login:e=>{r.value=e},logout:()=>{r.value=""}}}export{G as u};