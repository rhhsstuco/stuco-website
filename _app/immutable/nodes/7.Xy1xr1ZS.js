import{s as oe,f as v,a as z,l as Z,g as y,h as L,d as f,c as P,m as x,j as u,i as U,w as d,n as ee,e as H,I as he,r as _e,D as de}from"../chunks/scheduler.C_xnnOAe.js";import{S as ie,i as me,b as B,d as F,m as G,a as R,t as D,e as J,c as W,g as j}from"../chunks/index.VVhHf5fB.js";import{e as O,u as ce,o as ue}from"../chunks/each.taGrNST8.js";import{P as pe}from"../chunks/Picture.MJvPIjm0.js";import{s as ge}from"../chunks/screenWidth.store.JMbz0jg6.js";function be(l){let r,e,a,m,t,i,n=l[0].name+"",s,h,I,T=l[0].position+"",E,M;return a=new pe({props:{meta:l[0].imageURL,alt:l[0].name,sizes:"(max-width: 800px) 400px, 1200px",loading:l[1]}}),{c(){r=v("div"),e=v("div"),B(a.$$.fragment),m=z(),t=v("div"),i=v("h2"),s=Z(n),h=z(),I=v("h3"),E=Z(T),this.h()},l(p){r=y(p,"DIV",{class:!0});var k=L(r);e=y(k,"DIV",{class:!0});var b=L(e);F(a.$$.fragment,b),b.forEach(f),m=P(k),t=y(k,"DIV",{class:!0});var C=L(t);i=y(C,"H2",{class:!0});var w=L(i);s=x(w,n),w.forEach(f),h=P(C),I=y(C,"H3",{class:!0});var g=L(I);E=x(g,T),g.forEach(f),C.forEach(f),k.forEach(f),this.h()},h(){u(e,"class","member-card__photo svelte-12gfih0"),u(i,"class","member-card__text__name svelte-12gfih0"),u(I,"class","member-card__text__position svelte-12gfih0"),u(t,"class","member-card__text svelte-12gfih0"),u(r,"class","member-card svelte-12gfih0")},m(p,k){U(p,r,k),d(r,e),G(a,e,null),d(r,m),d(r,t),d(t,i),d(i,s),d(t,h),d(t,I),d(I,E),M=!0},p(p,[k]){const b={};k&1&&(b.meta=p[0].imageURL),k&1&&(b.alt=p[0].name),k&2&&(b.loading=p[1]),a.$set(b),(!M||k&1)&&n!==(n=p[0].name+"")&&ee(s,n),(!M||k&1)&&T!==(T=p[0].position+"")&&ee(E,T)},i(p){M||(R(a.$$.fragment,p),M=!0)},o(p){D(a.$$.fragment,p),M=!1},d(p){p&&f(r),J(a)}}}function ve(l,r,e){let{member:a}=r,{loading:m="eager"}=r;return l.$$set=t=>{"member"in t&&e(0,a=t.member),"loading"in t&&e(1,m=t.loading)},[a,m]}class fe extends ie{constructor(r){super(),me(this,r,ve,be,oe,{member:0,loading:1})}}const ye=l=>ge(0,l),ke=ye(1024);function te(l,r,e){const a=l.slice();return a[3]=r[e],a[5]=e,a}function re(l,r,e){const a=l.slice();return a[3]=r[e],a}function Ee(l){let r;return{c(){r=v("meta"),this.h()},l(e){r=y(e,"META",{property:!0,content:!0}),this.h()},h(){u(r,"property","og:url"),u(r,"content","https://rhhsstuco.ca/members")},m(e,a){U(e,r,a)},d(e){e&&f(r)}}}function ae(l){let r,e=[],a=new Map,m,t=O(l[0].members.slice(0,3));const i=n=>n[3].name;for(let n=0;n<t.length;n+=1){let s=re(l,t,n),h=i(s);a.set(h,e[n]=ne(h,s))}return{c(){r=v("div");for(let n=0;n<e.length;n+=1)e[n].c();this.h()},l(n){r=y(n,"DIV",{class:!0});var s=L(r);for(let h=0;h<e.length;h+=1)e[h].l(s);s.forEach(f),this.h()},h(){u(r,"class","members__display__row svelte-5pbp8m")},m(n,s){U(n,r,s);for(let h=0;h<e.length;h+=1)e[h]&&e[h].m(r,null);m=!0},p(n,s){s&1&&(t=O(n[0].members.slice(0,3)),j(),e=ce(e,s,i,1,n,t,a,r,ue,ne,null,re),W())},i(n){if(!m){for(let s=0;s<t.length;s+=1)R(e[s]);m=!0}},o(n){for(let s=0;s<e.length;s+=1)D(e[s]);m=!1},d(n){n&&f(r);for(let s=0;s<e.length;s+=1)e[s].d()}}}function ne(l,r){let e,a,m;return a=new fe({props:{member:r[3]}}),{key:l,first:null,c(){e=H(),B(a.$$.fragment),this.h()},l(t){e=H(),F(a.$$.fragment,t),this.h()},h(){this.first=e},m(t,i){U(t,e,i),G(a,t,i),m=!0},p(t,i){r=t;const n={};i&1&&(n.member=r[3]),a.$set(n)},i(t){m||(R(a.$$.fragment,t),m=!0)},o(t){D(a.$$.fragment,t),m=!1},d(t){t&&f(e),J(a,t)}}}function le(l,r){let e,a,m;return a=new fe({props:{member:r[3],loading:r[1]&&r[5]<3?"eager":"lazy"}}),{key:l,first:null,c(){e=H(),B(a.$$.fragment),this.h()},l(t){e=H(),F(a.$$.fragment,t),this.h()},h(){this.first=e},m(t,i){U(t,e,i),G(a,t,i),m=!0},p(t,i){r=t;const n={};i&5&&(n.member=r[3]),i&7&&(n.loading=r[1]&&r[5]<3?"eager":"lazy"),a.$set(n)},i(t){m||(R(a.$$.fragment,t),m=!0)},o(t){D(a.$$.fragment,t),m=!1},d(t){t&&f(e),J(a,t)}}}function Me(l){let r,e,a,m,t,i,n,s,h,I,T,E,M,p="Members",k,b,C,w,g=[],K=new Map,S;document.title=r=Q;let A=Ee(),_=!l[1]&&ae(l),V=O(l[0].members.slice(l[2]));const X=c=>c[3].name;for(let c=0;c<V.length;c+=1){let o=te(l,V,c),$=X(o);K.set($,g[c]=le($,o))}return{c(){e=v("meta"),a=v("meta"),m=v("meta"),t=v("meta"),i=v("meta"),s=v("meta"),A&&A.c(),I=H(),T=z(),E=v("main"),M=v("h1"),M.textContent=p,k=z(),b=v("section"),_&&_.c(),C=z(),w=v("div");for(let c=0;c<g.length;c+=1)g[c].c();this.h()},l(c){const o=he("svelte-13q1myu",document.head);e=y(o,"META",{name:!0,content:!0}),a=y(o,"META",{property:!0,content:!0}),m=y(o,"META",{property:!0,content:!0}),t=y(o,"META",{property:!0,content:!0}),i=y(o,"META",{property:!0,content:!0}),s=y(o,"META",{property:!0,content:!0}),A&&A.l(o),I=H(),o.forEach(f),T=P(c),E=y(c,"MAIN",{class:!0});var $=L(E);M=y($,"H1",{class:!0,"data-svelte-h":!0}),_e(M)!=="svelte-1u0fzm3"&&(M.textContent=p),k=P($),b=y($,"SECTION",{class:!0});var N=L(b);_&&_.l(N),C=P(N),w=y(N,"DIV",{class:!0});var Y=L(w);for(let q=0;q<g.length;q+=1)g[q].l(Y);Y.forEach(f),N.forEach(f),$.forEach(f),this.h()},h(){u(e,"name","description"),u(e,"content",se),u(a,"property","og:title"),u(a,"content",Q),u(m,"property","og:description"),u(m,"content",se),u(t,"property","og:type"),u(t,"content","website"),u(i,"property","og:image"),u(i,"content",n=l[0].members[1].imageURL.img.src),u(s,"property","thumbnail"),u(s,"content",h=l[0].members[1].imageURL.img.src),u(M,"class","svelte-5pbp8m"),u(w,"class","members__display__grid svelte-5pbp8m"),u(b,"class","members__display svelte-5pbp8m"),u(E,"class","members svelte-5pbp8m")},m(c,o){d(document.head,e),d(document.head,a),d(document.head,m),d(document.head,t),d(document.head,i),d(document.head,s),A&&A.m(document.head,null),d(document.head,I),U(c,T,o),U(c,E,o),d(E,M),d(E,k),d(E,b),_&&_.m(b,null),d(b,C),d(b,w);for(let $=0;$<g.length;$+=1)g[$]&&g[$].m(w,null);S=!0},p(c,[o]){(!S||o&0)&&r!==(r=Q)&&(document.title=r),(!S||o&1&&n!==(n=c[0].members[1].imageURL.img.src))&&u(i,"content",n),(!S||o&1&&h!==(h=c[0].members[1].imageURL.img.src))&&u(s,"content",h),c[1]?_&&(j(),D(_,1,1,()=>{_=null}),W()):_?(_.p(c,o),o&2&&R(_,1)):(_=ae(c),_.c(),R(_,1),_.m(b,C)),o&7&&(V=O(c[0].members.slice(c[2])),j(),g=ce(g,o,X,1,c,V,K,w,ue,le,null,te),W())},i(c){if(!S){R(_);for(let o=0;o<V.length;o+=1)R(g[o]);S=!0}},o(c){D(_);for(let o=0;o<g.length;o+=1)D(g[o]);S=!1},d(c){c&&(f(T),f(E)),f(e),f(a),f(m),f(t),f(i),f(s),A&&A.d(c),f(I),_&&_.d();for(let o=0;o<g.length;o+=1)g[o].d()}}}const Q="Members | RHHS StuCo",se="Meet the members of our the 2023-2024 Student Council!";function $e(l,r,e){let a,m;de(l,ke,i=>e(1,m=i));let{data:t}=r;return l.$$set=i=>{"data"in i&&e(0,t=i.data)},l.$$.update=()=>{l.$$.dirty&2&&e(2,a=m?0:3)},[t,m,a]}class Ae extends ie{constructor(r){super(),me(this,r,$e,Me,oe,{data:0})}}export{Ae as component};