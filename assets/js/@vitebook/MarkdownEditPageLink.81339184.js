import{S as F,b as I,s as N,e as h,E as j,F as D,d as _,f,j as m,G as O,H as Y,k as c,l as V,m as p,I as J,q as C,n as S,A as u}from"../framework.f1b41545.js";import{C as q,D as k,E as A,l as K,y as Q,c as U,v as z}from"../../entry-client.648c575b.js";var W=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1.2em" height="1.2em"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M8 12h8v2H8v-2m2 8H6V4h7v5h5v3.1l2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4v-2m-2-2h4.1l.9-.9V16H8v2m12.2-5c.1 0 .3.1.4.2l1.3 1.3c.2.2.2.6 0 .8l-1 1l-2.1-2.1l1-1c.1-.1.2-.2.4-.2m0 3.9L14.1 23H12v-2.1l6.1-6.1l2.1 2.1z" fill="currentColor"></path></svg>
`;const X=t=>!q(t)||/github\.com/.test(t)?"GitHub":/bitbucket\.org/.test(t)?"Bitbucket":/gitlab\.com/.test(t)?"GitLab":null,Z={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},$=({repo:t,branch:r="main",dir:e="",relativeFilePath:a,editLinkPattern:l})=>{const n=X(t);let i;return l?i=l:n!==null&&(i=Z[n]),i?i.replace(/:repo/,q(t)?t:`https://github.com/${t}`).replace(/:branch/,k(A(r))).replace(/:path/,k(`${A(e)}/${k(a)}`)):null};function B(t){let r,e,a,l,n;return{c(){r=h("p"),e=h("a"),a=h("span"),l=j(),n=D(t[1]),this.h()},l(i){r=_(i,"P",{class:!0});var o=f(r);e=_(o,"A",{href:!0,target:!0,class:!0});var d=f(e);a=_(d,"SPAN",{class:!0});var s=f(a);s.forEach(m),l=O(d),n=Y(d,t[1]),d.forEach(m),o.forEach(m),this.h()},h(){c(a,"class","md-footer__edit-page__link__icon __vbk__ svelte-1fo1xgl"),c(e,"href",t[0]),c(e,"target","_blank"),c(e,"class","md-footer__edit-page__link __vbk__ svelte-1fo1xgl"),c(r,"class","md-footer__edit-page __vbk__ svelte-1fo1xgl")},m(i,o){V(i,r,o),p(r,e),p(e,a),a.innerHTML=W,p(e,l),p(e,n)},p(i,o){o&2&&J(n,i[1]),o&1&&c(e,"href",i[0])},d(i){i&&m(r)}}}function ee(t){let r,e=t[2]&&t[0]&&B(t);return{c(){e&&e.c(),r=C()},l(a){e&&e.l(a),r=C()},m(a,l){e&&e.m(a,l),V(a,r,l)},p(a,[l]){a[2]&&a[0]?e?e.p(a,l):(e=B(a),e.c(),e.m(r.parentNode,r)):e&&(e.d(1),e=null)},i:S,o:S,d(a){e&&e.d(a),a&&m(r)}}}function te(t,r,e){let a,l,n,i,o;u(t,K,s=>e(3,n=s)),u(t,Q,s=>e(4,i=s)),u(t,U,s=>e(5,o=s));let d=null;return t.$$.update=()=>{var s,g,v,b,w,L,P,E,y,H,G,T,x,M;if(t.$$.dirty&40&&e(2,a=(v=(g=o==null?void 0:o.frontmatter.editLink)!=null?g:(s=n.markdown)==null?void 0:s.editLink)!=null?v:z.markdown.editLink),t.$$.dirty&8&&e(1,l=(w=(b=n.markdown)==null?void 0:b.editLinkText)!=null?w:z.markdown.editLinkText),t.$$.dirty&24){const R=(y=(P=(L=n.markdown)==null?void 0:L.remoteGitRepo)==null?void 0:P.url)!=null?y:(E=n.remoteGitRepo)==null?void 0:E.url;e(0,d=R&&i?$({repo:R,branch:(G=(H=n.markdown)==null?void 0:H.remoteGitRepo)==null?void 0:G.branch,dir:(x=(T=n.markdown)==null?void 0:T.remoteGitRepo)==null?void 0:x.dir,relativeFilePath:i.rootPath,editLinkPattern:(M=n.markdown)==null?void 0:M.editLinkPattern}):null)}},[d,l,a,n,i,o]}class ie extends F{constructor(r){super();I(this,r,te,ee,N,{})}}export{ie as default};
