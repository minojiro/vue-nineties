var Ce=Object.defineProperty,Ae=Object.defineProperties;var Se=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var Ie=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable;var x=(s,e,t)=>e in s?Ce(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,ee=(s,e)=>{for(var t in e||(e={}))Ie.call(e,t)&&x(s,t,e[t]);if($)for(var t of $(e))Te.call(e,t)&&x(s,t,e[t]);return s},te=(s,e)=>Ae(s,Se(e));import{ref as P,openBlock as re,createBlock as Ve,resolveDynamicComponent as je,withCtx as G,createElementVNode as O,normalizeClass as Be,renderSlot as Me,defineComponent as Y,watchEffect as ae,onBeforeUnmount as de,h as Q,Teleport as De,createElementBlock as Ne,Fragment as Ue,createVNode as F,unref as J,withDirectives as Re,vModelCheckbox as He,createTextVNode as ie}from"vue";import{e as S,g as _e,w as Le,M as Oe}from"../entry-client.648c575b.js";import{S as ce,b as ue,s as fe,V as Pe,e as y,d as w,f as E,j as p,k as m,l as q,m as v,R as qe,T as ze,U as Fe,z as ve,w as he,A as W,o as Je,P as Ke,p as Ge,t as We,u as Ye,x as Qe,a9 as Xe,E as D,F as T,G as N,H as V,J as L,K as M,aa as ne,I as be,r as pe,M as Ze,N as $e,g as xe}from"./framework.f1b41545.js";function et(s){let e,t,n;const o=s[8].default,r=Pe(o,s,s[7],null);return{c(){e=y("div"),t=y("div"),r&&r.c(),this.h()},l(l){e=w(l,"DIV",{class:!0});var c=E(e);t=w(c,"DIV",{class:!0});var _=E(t);r&&r.l(_),_.forEach(p),c.forEach(p),this.h()},h(){m(t,"class","__vbk__"),m(e,"class","portal-clone __vbk__ svelte-5q0n58")},m(l,c){q(l,e,c),v(e,t),r&&r.m(t,null),s[9](t),n=!0},p(l,[c]){r&&r.p&&(!n||c&128)&&qe(r,o,l,l[7],n?Fe(o,l[7],c,null):ze(l[7]),null)},i(l){n||(ve(r,l),n=!0)},o(l){he(r,l),n=!1},d(l){l&&p(e),r&&r.d(l),s[9](null)}}}function tt(s,e,t){let n,o;W(s,S,a=>t(10,o=a));let{$$slots:r={},$$scope:l}=e,c,_,h,{title:f}=e,{icon:g=void 0}=e;Je(()=>{const a=new URL(location.href).searchParams,C=a==null?void 0:a.get("addon");if(C){const i=o[C];i&&S.setActive(i)}return()=>{_==null||_.remove(),S.delete(h)}});const{ready:d}=S;W(s,d,a=>t(6,n=a));function u(a){Ke[a?"unshift":"push"](()=>{c=a,t(0,c)})}return s.$$set=a=>{"title"in a&&t(2,f=a.title),"icon"in a&&t(3,g=a.icon),"$$scope"in a&&t(7,l=a.$$scope)},s.$$.update=()=>{var a;s.$$.dirty&44&&(h&&S.delete(h),t(5,h=S.add({title:f,icon:g}))),s.$$.dirty&113&&(n&&h&&c?(t(4,_=document.createElement("div")),(a=document.getElementById(_e(h)))==null||a.appendChild(_),_.appendChild(c)):_==null||_.remove())},[c,d,f,g,_,h,n,l,r,u]}class nt extends ce{constructor(e){super();ue(this,e,tt,et,fe,{title:2,icon:3})}}var st=nt;function ot(){const s=new WeakSet;return(e,t)=>{if(typeof t=="object"&&t!==null){if(s.has(t))return;s.add(t)}return t}}function lt(s,e=[]){const t={};return new Set(["timeStamp","bubbles","composed","isTrusted","target",...e]).forEach(o=>{o in s&&(o==="target"?t[o]=`${s[o].constructor.name}`:t[o]=s[o])}),JSON.stringify(t,ot(),2)}const U=Le([]);function rt(s,e=[]){window.requestAnimationFrame(()=>{U.update(t=>{let n;return t.push({id:Symbol(),ref:s,stringify:()=>n!=null?n:n=lt(s,e)}),t.sort((o,r)=>r.ref.timeStamp-o.ref.timeStamp)})})}var at=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M20 19V7H4v12h16m0-16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16m-7 14v-2h5v2h-5m-3.42-4L5.57 9H8.4l3.3 3.3c.39.39.39 1.03 0 1.42L8.42 17H5.59l3.99-4z" fill="currentColor"></path></svg>
`;function se(s,e,t){const n=s.slice();return n[13]=e[t],n}function oe(s){let e=s[13].stringify()+"",t;return{c(){t=T(e)},l(n){t=V(n,e)},m(n,o){q(n,t,o)},p(n,o){o&8&&e!==(e=n[13].stringify()+"")&&be(t,e)},d(n){n&&p(t)}}}function le(s,e){let t,n,o,r,l,c=e[13].ref.type+"",_,h,f,g,d,u,a,C,i,I,j,z,X;function me(){return e[8](e[13])}function ge(...A){return e[9](e[13],...A)}function ke(){return e[10](e[13])}function ye(...A){return e[11](e[13],...A)}let b=e[2]&&oe(e);return{key:s,first:null,c(){t=y("div"),n=y("button"),o=y("span"),r=D(),l=y("span"),_=T(c),h=D(),f=y("button"),g=D(),d=y("pre"),u=T(`
        `),a=y("code"),C=T(`
          `),b&&b.c(),i=T(`
        `),I=T(`
      `),j=D(),this.h()},l(A){t=w(A,"DIV",{class:!0});var k=E(t);n=w(k,"BUTTON",{class:!0,"aria-label":!0});var B=E(n);o=w(B,"SPAN",{class:!0});var we=E(o);we.forEach(p),r=N(B),l=w(B,"SPAN",{class:!0});var Z=E(l);_=V(Z,c),Z.forEach(p),h=N(B),f=w(B,"BUTTON",{class:!0,"aria-label":!0});var Ee=E(f);Ee.forEach(p),B.forEach(p),g=N(k),d=w(k,"PRE",{class:!0});var R=E(d);u=V(R,`
        `),a=w(R,"CODE",{class:!0});var H=E(a);C=V(H,`
          `),b&&b.l(H),i=V(H,`
        `),H.forEach(p),I=V(R,`
      `),R.forEach(p),j=N(k),k.forEach(p),this.h()},h(){m(o,"class","addon__event__caret __vbk__ svelte-1vdavkj"),L(o,"open",e[2][e[13].id]),m(l,"class","addon__event__type __vbk__ svelte-1vdavkj"),m(f,"class","addon__event__console __vbk__ svelte-1vdavkj"),m(f,"aria-label","Log event to console"),m(n,"class","addon__event__detail __vbk__ svelte-1vdavkj"),m(n,"aria-label","Show event details"),m(a,"class","__vbk__ svelte-1vdavkj"),m(d,"class","__vbk__ svelte-1vdavkj"),L(d,"open",e[2][e[13].id]),m(t,"class","addon__event __vbk__ svelte-1vdavkj"),this.first=t},m(A,k){q(A,t,k),v(t,n),v(n,o),o.innerHTML=Oe,v(n,r),v(n,l),v(l,_),v(n,h),v(n,f),f.innerHTML=at,v(t,g),v(t,d),v(d,u),v(d,a),v(a,C),b&&b.m(a,null),v(a,i),v(d,I),v(t,j),z||(X=[M(f,"pointerdown",ne(me)),M(f,"keydown",ne(ge)),M(n,"pointerdown",ke),M(n,"keydown",ye)],z=!0)},p(A,k){e=A,k&12&&L(o,"open",e[2][e[13].id]),k&8&&c!==(c=e[13].ref.type+"")&&be(_,c),e[2]?b?b.p(e,k):(b=oe(e),b.c(),b.m(a,i)):b&&(b.d(1),b=null),k&12&&L(d,"open",e[2][e[13].id])},d(A){A&&p(t),b&&b.d(),z=!1,pe(X)}}}function dt(s){let e,t,n,o,r,l=[],c=new Map,_,h,f=s[3];const g=d=>d[13].id;for(let d=0;d<f.length;d+=1){let u=se(s,f,d),a=g(u);c.set(a,l[d]=le(a,u))}return{c(){e=y("div"),t=y("div"),n=y("button"),o=T("Clear"),r=D();for(let d=0;d<l.length;d+=1)l[d].c();this.h()},l(d){e=w(d,"DIV",{class:!0});var u=E(e);t=w(u,"DIV",{class:!0});var a=E(t);n=w(a,"BUTTON",{class:!0});var C=E(n);o=V(C,"Clear"),C.forEach(p),a.forEach(p),r=N(u);for(let i=0;i<l.length;i+=1)l[i].l(u);u.forEach(p),this.h()},h(){m(n,"class","addon__events__clear __vbk__ svelte-1vdavkj"),m(t,"class","addon__events__header __vbk__ svelte-1vdavkj"),m(e,"class","addon__events __vbk__")},m(d,u){q(d,e,u),v(e,t),v(t,n),v(n,o),v(e,r);for(let a=0;a<l.length;a+=1)l[a].m(e,null);_||(h=[M(n,"pointerdown",s[6]),M(n,"keydown",s[7])],_=!0)},p(d,u){u&60&&(f=d[3],l=Ze(l,u,g,1,d,f,c,e,$e,le,null,se))},d(d){d&&p(e);for(let u=0;u<l.length;u+=1)l[u].d();_=!1,pe(h)}}}function it(s){let e,t;return e=new st({props:{title:s[0],icon:s[1],$$slots:{default:[dt]},$$scope:{ctx:s}}}),{c(){Ge(e.$$.fragment)},l(n){We(e.$$.fragment,n)},m(n,o){Ye(e,n,o),t=!0},p(n,[o]){const r={};o&1&&(r.title=n[0]),o&2&&(r.icon=n[1]),o&65548&&(r.$$scope={dirty:o,ctx:n}),e.$set(r)},i(n){t||(ve(e.$$.fragment,n),t=!0)},o(n){he(e.$$.fragment,n),t=!1},d(n){Qe(e,n)}}}function _t(s,e,t){let n;W(s,U,i=>t(3,n=i));let{title:o="Events"}=e,{icon:r=void 0}=e,l={};const c=window.console;function _(i){c.log(i.ref)}function h(i){var j;const I=(j=l[i.id])!=null?j:!1;t(2,l=te(ee({},l),{[i.id]:!I}))}Xe(()=>{t(2,l={}),U.set([])});const f=()=>U.set([]),g=i=>i.key==="Enter"&&U.set([]),d=i=>_(i),u=(i,I)=>I.key==="Enter"&&_(i),a=i=>h(i),C=(i,I)=>I.key==="Enter"&&h(i);return s.$$set=i=>{"title"in i&&t(0,o=i.title),"icon"in i&&t(1,r=i.icon)},[o,r,l,n,_,h,f,g,d,u,a,C]}class ct extends ce{constructor(e){super();ue(this,e,_t,it,fe,{title:0,icon:1})}}var ut=ct;const ft={class:"border-t border-t-sys-gray-200 border-l border-l-sys-gray-200 border-b border-b-sys-gray-800 border-r border-r-sys-gray-800"},vt={props:{disabled:{default:!1,type:Boolean},tag:{default:"button",type:String}},emits:["click"],setup(s,{emit:e}){const t=s,n=P(!1);return(o,r)=>(re(),Ve(je(t.tag),{class:"w-full block bg-sys-gray-500 border-t border-t-white border-l border-l-white border-b border-b-black border-r border-r-black",onFocus:r[0]||(r[0]=l=>n.value=!0),onBlur:r[1]||(r[1]=l=>n.value=!1),onClick:r[2]||(r[2]=l=>e("click")),disabled:t.disabled},{default:G(()=>[O("div",ft,[O("div",{class:Be(["p-1 border border-dotted",[n.value&&!t.disabled?"border-sys-gray-800":"border-transparent",t.disabled?"text-sys-gray-800":"text-black"]])},[Me(o.$slots,"default")],2)])]),_:3},8,["disabled"]))}};var ht=Y({name:"Addon",props:{title:{type:String,required:!0},icon:String},setup({title:s,icon:e}){const t=S.add({title:s,icon:e}),n=_e(t),o=P(!1),r=S.ready.subscribe(l=>{o.value=l});return ae(()=>{if(o.value){const l=new URL(location.href).searchParams,c=l==null?void 0:l.get("addon");if(c){const _=xe(S)[c];_&&S.setActive(_)}}}),de(()=>{r(),S.delete(t)}),{ready:o,teleportId:n}},render({ready:s,teleportId:e}){var t,n;return s?Q(De,{to:`#${e}`},[(n=(t=this.$slots).default)==null?void 0:n.call(t)]):null}}),bt=Y({name:"ControlsAddon",props:{title:String,icon:String},setup({title:s,icon:e}){return{title:s,icon:e}},render({title:s,icon:e}){return Q(ht,{title:s!=null?s:"Controls",icon:e},{default:()=>{var t,n;return(n=(t=this.$slots).default)==null?void 0:n.call(t)}})}});let K=!1;var pt=Y({name:"EventsAddon",props:{title:String,icon:String},setup({title:s,icon:e}){if(K)return{setAddonRef:null};const t=P(null);function n(r){t.value=r}let o;return ae(()=>{t.value&&!o?o=new ut({target:t.value,props:{title:s,icon:e}}):o==null||o.$destroy()}),de(()=>{o==null||o.$destroy(),t.value=null,K=!1}),K=!0,{setAddonRef:n}},render({setAddonRef:s}){return s?Q("div",{ref:s}):null}});const mt=ie("OK"),gt=ie("Disabled "),Ct={setup(s){const e=P(!1);return(t,n)=>(re(),Ne(Ue,null,[F(vt,{disabled:e.value,onClick:J(rt)},{default:G(()=>[mt]),_:1},8,["disabled","onClick"]),F(J(bt),null,{default:G(()=>[O("label",null,[gt,Re(O("input",{type:"checkbox","onUpdate:modelValue":n[0]||(n[0]=o=>e.value=o)},null,512),[[He,e.value]])])]),_:1}),F(J(pt))],64))}};export{Ct as default};