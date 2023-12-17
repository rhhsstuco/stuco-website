import{s as ie,f as v,a as z,l as x,g as $,h as C,d as f,c as N,m as ee,j as u,i as U,w as d,n as te,e as H,I as _e,r as de,D as pe}from"../chunks/scheduler.C_xnnOAe.js";import{S as me,i as ce,b as F,d as G,m as J,a as L,t as S,e as K,c as q,g as B}from"../chunks/index.VVhHf5fB.js";import{e as Q,u as ue,o as fe}from"../chunks/each.taGrNST8.js";import{P as ge}from"../chunks/Picture.MJvPIjm0.js";import{D as P}from"../chunks/constants.mz_t3kdB.js";import{s as be}from"../chunks/screenWidth.store.JMbz0jg6.js";function ve(l){let r,e,a,m,t,i,n=l[0].name+"",s,h,I,T=l[0].position+"",k,E;return a=new ge({props:{meta:l[0].imageURL,alt:l[0].name,sizes:"(max-width: 800px) 400px, 1200px",loading:l[1]}}),{c(){r=v("div"),e=v("div"),F(a.$$.fragment),m=z(),t=v("div"),i=v("h2"),s=x(n),h=z(),I=v("h3"),k=x(T),this.h()},l(p){r=$(p,"DIV",{class:!0});var y=C(r);e=$(y,"DIV",{class:!0});var b=C(e);G(a.$$.fragment,b),b.forEach(f),m=N(y),t=$(y,"DIV",{class:!0});var A=C(t);i=$(A,"H2",{class:!0});var w=C(i);s=ee(w,n),w.forEach(f),h=N(A),I=$(A,"H3",{class:!0});var g=C(I);k=ee(g,T),g.forEach(f),A.forEach(f),y.forEach(f),this.h()},h(){u(e,"class","member-card__photo svelte-12gfih0"),u(i,"class","member-card__text__name svelte-12gfih0"),u(I,"class","member-card__text__position svelte-12gfih0"),u(t,"class","member-card__text svelte-12gfih0"),u(r,"class","member-card svelte-12gfih0")},m(p,y){U(p,r,y),d(r,e),J(a,e,null),d(r,m),d(r,t),d(t,i),d(i,s),d(t,h),d(t,I),d(I,k),E=!0},p(p,[y]){const b={};y&1&&(b.meta=p[0].imageURL),y&1&&(b.alt=p[0].name),y&2&&(b.loading=p[1]),a.$set(b),(!E||y&1)&&n!==(n=p[0].name+"")&&te(s,n),(!E||y&1)&&T!==(T=p[0].position+"")&&te(k,T)},i(p){E||(L(a.$$.fragment,p),E=!0)},o(p){S(a.$$.fragment,p),E=!1},d(p){p&&f(r),K(a)}}}function $e(l,r,e){let{member:a}=r,{loading:m="eager"}=r;return l.$$set=t=>{"member"in t&&e(0,a=t.member),"loading"in t&&e(1,m=t.loading)},[a,m]}class he extends me{constructor(r){super(),ce(this,r,$e,ve,ie,{member:0,loading:1})}}const ye=l=>be(0,l),ke=ye(1024);function re(l,r,e){const a=l.slice();return a[3]=r[e],a[5]=e,a}function ae(l,r,e){const a=l.slice();return a[3]=r[e],a}function Ee(l){let r;return{c(){r=v("meta"),this.h()},l(e){r=$(e,"META",{property:!0,content:!0}),this.h()},h(){u(r,"property","og:url"),u(r,"content","https://rhhsstuco.ca/members")},m(e,a){U(e,r,a)},d(e){e&&f(r)}}}function ne(l){let r,e=[],a=new Map,m,t=Q(l[0].members.slice(0,3));const i=n=>n[3].name;for(let n=0;n<t.length;n+=1){let s=ae(l,t,n),h=i(s);a.set(h,e[n]=le(h,s))}return{c(){r=v("div");for(let n=0;n<e.length;n+=1)e[n].c();this.h()},l(n){r=$(n,"DIV",{class:!0});var s=C(r);for(let h=0;h<e.length;h+=1)e[h].l(s);s.forEach(f),this.h()},h(){u(r,"class","members__display__row svelte-5pbp8m")},m(n,s){U(n,r,s);for(let h=0;h<e.length;h+=1)e[h]&&e[h].m(r,null);m=!0},p(n,s){s&1&&(t=Q(n[0].members.slice(0,3)),B(),e=ue(e,s,i,1,n,t,a,r,fe,le,null,ae),q())},i(n){if(!m){for(let s=0;s<t.length;s+=1)L(e[s]);m=!0}},o(n){for(let s=0;s<e.length;s+=1)S(e[s]);m=!1},d(n){n&&f(r);for(let s=0;s<e.length;s+=1)e[s].d()}}}function le(l,r){let e,a,m;return a=new he({props:{member:r[3]}}),{key:l,first:null,c(){e=H(),F(a.$$.fragment),this.h()},l(t){e=H(),G(a.$$.fragment,t),this.h()},h(){this.first=e},m(t,i){U(t,e,i),J(a,t,i),m=!0},p(t,i){r=t;const n={};i&1&&(n.member=r[3]),a.$set(n)},i(t){m||(L(a.$$.fragment,t),m=!0)},o(t){S(a.$$.fragment,t),m=!1},d(t){t&&f(e),K(a,t)}}}function se(l,r){let e,a,m;return a=new he({props:{member:r[3],loading:r[1]&&r[5]<3?"eager":"lazy"}}),{key:l,first:null,c(){e=H(),F(a.$$.fragment),this.h()},l(t){e=H(),G(a.$$.fragment,t),this.h()},h(){this.first=e},m(t,i){U(t,e,i),J(a,t,i),m=!0},p(t,i){r=t;const n={};i&5&&(n.member=r[3]),i&7&&(n.loading=r[1]&&r[5]<3?"eager":"lazy"),a.$set(n)},i(t){m||(L(a.$$.fragment,t),m=!0)},o(t){S(a.$$.fragment,t),m=!1},d(t){t&&f(e),K(a,t)}}}function Me(l){let r,e,a,m,t,i,n,s,h,I,T,k,E,p="Members",y,b,A,w,g=[],X=new Map,R;document.title=r=j;let D=Ee(),_=!l[1]&&ne(l),V=Q(l[0].members.slice(l[2]));const Y=c=>c[3].name;for(let c=0;c<V.length;c+=1){let o=re(l,V,c),M=Y(o);X.set(M,g[c]=se(M,o))}return{c(){e=v("meta"),a=v("meta"),m=v("meta"),t=v("meta"),i=v("meta"),s=v("meta"),D&&D.c(),I=H(),T=z(),k=v("main"),E=v("h1"),E.textContent=p,y=z(),b=v("section"),_&&_.c(),A=z(),w=v("div");for(let c=0;c<g.length;c+=1)g[c].c();this.h()},l(c){const o=_e("svelte-19lo73u",document.head);e=$(o,"META",{name:!0,content:!0}),a=$(o,"META",{property:!0,content:!0}),m=$(o,"META",{property:!0,content:!0}),t=$(o,"META",{property:!0,content:!0}),i=$(o,"META",{property:!0,content:!0}),s=$(o,"META",{property:!0,content:!0}),D&&D.l(o),I=H(),o.forEach(f),T=N(c),k=$(c,"MAIN",{class:!0});var M=C(k);E=$(M,"H1",{class:!0,"data-svelte-h":!0}),de(E)!=="svelte-1u0fzm3"&&(E.textContent=p),y=N(M),b=$(M,"SECTION",{class:!0});var O=C(b);_&&_.l(O),A=N(O),w=$(O,"DIV",{class:!0});var Z=C(w);for(let W=0;W<g.length;W+=1)g[W].l(Z);Z.forEach(f),O.forEach(f),M.forEach(f),this.h()},h(){u(e,"name","description"),u(e,"content",oe),u(a,"property","og:title"),u(a,"content",j),u(m,"property","og:description"),u(m,"content",oe),u(t,"property","og:type"),u(t,"content","website"),u(i,"property","og:image"),u(i,"content",n=`${P}${l[0].members[1].imageURL.img.src}`),u(s,"property","thumbnail"),u(s,"content",h=`${P}${l[0].members[1].imageURL.img.src}`),u(E,"class","svelte-5pbp8m"),u(w,"class","members__display__grid svelte-5pbp8m"),u(b,"class","members__display svelte-5pbp8m"),u(k,"class","members svelte-5pbp8m")},m(c,o){d(document.head,e),d(document.head,a),d(document.head,m),d(document.head,t),d(document.head,i),d(document.head,s),D&&D.m(document.head,null),d(document.head,I),U(c,T,o),U(c,k,o),d(k,E),d(k,y),d(k,b),_&&_.m(b,null),d(b,A),d(b,w);for(let M=0;M<g.length;M+=1)g[M]&&g[M].m(w,null);R=!0},p(c,[o]){(!R||o&0)&&r!==(r=j)&&(document.title=r),(!R||o&1&&n!==(n=`${P}${c[0].members[1].imageURL.img.src}`))&&u(i,"content",n),(!R||o&1&&h!==(h=`${P}${c[0].members[1].imageURL.img.src}`))&&u(s,"content",h),c[1]?_&&(B(),S(_,1,1,()=>{_=null}),q()):_?(_.p(c,o),o&2&&L(_,1)):(_=ne(c),_.c(),L(_,1),_.m(b,A)),o&7&&(V=Q(c[0].members.slice(c[2])),B(),g=ue(g,o,Y,1,c,V,X,w,fe,se,null,re),q())},i(c){if(!R){L(_);for(let o=0;o<V.length;o+=1)L(g[o]);R=!0}},o(c){S(_);for(let o=0;o<g.length;o+=1)S(g[o]);R=!1},d(c){c&&(f(T),f(k)),f(e),f(a),f(m),f(t),f(i),f(s),D&&D.d(c),f(I),_&&_.d();for(let o=0;o<g.length;o+=1)g[o].d()}}}const j="Members | RHHS StuCo",oe="Meet the members of our the 2023-2024 Student Council!";function Ie(l,r,e){let a,m;pe(l,ke,i=>e(1,m=i));let{data:t}=r;return l.$$set=i=>{"data"in i&&e(0,t=i.data)},l.$$.update=()=>{l.$$.dirty&2&&e(2,a=m?0:3)},[t,m,a]}class Re extends me{constructor(r){super(),ce(this,r,Ie,Me,ie,{data:0})}}export{Re as component};
