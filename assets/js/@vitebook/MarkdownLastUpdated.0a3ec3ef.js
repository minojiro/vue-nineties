import{S as C,b as N,s as q,e as m,F as y,E as D,d as c,f as u,H as S,j as f,G as F,k as h,J as T,l as A,m as i,I as w,q as z,n as E,A as k,o as G}from"../framework.f1b41545.js";import{l as H,c as I,f as J,v as j}from"../../entry-client.648c575b.js";function L(s){let t,e,a,d,_,r;return{c(){t=m("p"),e=m("span"),a=y(s[2]),d=D(),_=m("span"),r=y(s[0]),this.h()},l(l){t=c(l,"P",{class:!0});var o=u(t);e=c(o,"SPAN",{class:!0});var p=u(e);a=S(p,s[2]),p.forEach(f),d=F(o),_=c(o,"SPAN",{class:!0});var n=u(_);r=S(n,s[0]),n.forEach(f),o.forEach(f),this.h()},h(){h(e,"class","md-footer__last-updated__text __vbk__ svelte-1guz00j"),h(_,"class","md-footer__last-updated__date __vbk__ svelte-1guz00j"),h(t,"class","md-footer__last-updated __vbk__ svelte-1guz00j"),T(t,"dark",s[4])},m(l,o){A(l,t,o),i(t,e),i(e,a),i(t,d),i(t,_),i(_,r)},p(l,o){o&4&&w(a,l[2]),o&1&&w(r,l[0]),o&16&&T(t,"dark",l[4])},d(l){l&&f(t)}}}function M(s){let t,e=s[1]&&s[3]&&L(s);return{c(){e&&e.c(),t=z()},l(a){e&&e.l(a),t=z()},m(a,d){e&&e.m(a,d),A(a,t,d)},p(a,[d]){a[1]&&a[3]?e?e.p(a,d):(e=L(a),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:E,o:E,d(a){e&&e.d(a),a&&f(t)}}}function O(s,t,e){let a,d,_,r,l,o;k(s,H,n=>e(5,r=n)),k(s,I,n=>e(6,l=n)),k(s,J,n=>e(4,o=n));let p="";return G(()=>{e(0,p=new Date(a!=null?a:0).toLocaleDateString("en-US",{}))}),s.$$.update=()=>{var n,b,U,v,g;s.$$.dirty&64&&e(1,a=l==null?void 0:l.lastUpdated),s.$$.dirty&96&&e(3,d=(U=(b=l==null?void 0:l.frontmatter.lastUpdated)!=null?b:(n=r.markdown)==null?void 0:n.lastUpdated)!=null?U:j.markdown.lastUpdated),s.$$.dirty&32&&e(2,_=(g=(v=r.markdown)==null?void 0:v.lastUpdatedText)!=null?g:j.markdown.lastUpdatedText)},[p,a,_,d,o,r,l]}class K extends C{constructor(t){super();N(this,t,O,M,q,{})}}export{K as default};
