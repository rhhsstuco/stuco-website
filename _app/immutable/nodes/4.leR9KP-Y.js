import{s as re,f as m,a as I,l as te,g as p,h as C,c as D,d as u,r as G,m as le,j as i,K as me,k as K,i as L,w as d,n as ae,P as pe,x as $e,u as W,y as Ce,e as Y,I as ye}from"../chunks/scheduler.C_xnnOAe.js";import{S as ne,i as oe,g as ie,t as P,c as ce,a as q,b as J,d as Z,m as x,e as ee}from"../chunks/index.VVhHf5fB.js";import{e as ve,u as Te,o as Ie}from"../chunks/each.taGrNST8.js";import{P as Le}from"../chunks/Picture.MJvPIjm0.js";function be(o){let e,t,a,r,l,n,s,f,h,g,_;return{c(){e=m("div"),t=I(),a=m("div"),r=I(),l=m("div"),n=I(),s=m("div"),f=I(),h=m("div"),g=I(),_=m("div"),this.h()},l(c){e=p(c,"DIV",{class:!0}),C(e).forEach(u),t=D(c),a=p(c,"DIV",{class:!0}),C(a).forEach(u),r=D(c),l=p(c,"DIV",{class:!0}),C(l).forEach(u),n=D(c),s=p(c,"DIV",{class:!0}),C(s).forEach(u),f=D(c),h=p(c,"DIV",{class:!0}),C(h).forEach(u),g=D(c),_=p(c,"DIV",{class:!0}),C(_).forEach(u),this.h()},h(){i(e,"class","svelte-zd0pow"),K(e,"background-color","#ff3c40"),i(a,"class","svelte-zd0pow"),K(a,"background-color","#fe9843"),i(l,"class","svelte-zd0pow"),K(l,"background-color","#feef54"),i(s,"class","svelte-zd0pow"),K(s,"background-color","#00802d"),i(h,"class","svelte-zd0pow"),K(h,"background-color","#1558f5"),i(_,"class","svelte-zd0pow"),K(_,"background-color","#851f86")},m(c,k){L(c,e,k),L(c,t,k),L(c,a,k),L(c,r,k),L(c,l,k),L(c,n,k),L(c,s,k),L(c,f,k),L(c,h,k),L(c,g,k),L(c,_,k)},d(c){c&&(u(e),u(t),u(a),u(r),u(l),u(n),u(s),u(f),u(h),u(g),u(_))}}}function De(o){let e,t;return e=new Le({props:{meta:o[0].imageURL,alt:o[0].name}}),{c(){J(e.$$.fragment)},l(a){Z(e.$$.fragment,a)},m(a,r){x(e,a,r),t=!0},p(a,r){const l={};r&1&&(l.meta=a[0].imageURL),r&1&&(l.alt=a[0].name),e.$set(l)},i(a){t||(q(e.$$.fragment,a),t=!0)},o(a){P(e.$$.fragment,a),t=!1},d(a){ee(e,a)}}}function Me(o){let e,t,a,r;return t=new Le({props:{meta:o[0].imageURL,alt:o[0].name}}),{c(){e=m("a"),J(t.$$.fragment),this.h()},l(l){e=p(l,"A",{href:!0,target:!0,rel:!0});var n=C(e);Z(t.$$.fragment,n),n.forEach(u),this.h()},h(){i(e,"href",a=o[0].instagramURL),i(e,"target","_blank"),i(e,"rel","noopener noreferrer")},m(l,n){L(l,e,n),x(t,e,null),r=!0},p(l,n){const s={};n&1&&(s.meta=l[0].imageURL),n&1&&(s.alt=l[0].name),t.$set(s),(!r||n&1&&a!==(a=l[0].instagramURL))&&i(e,"href",a)},i(l){r||(q(t.$$.fragment,l),r=!0)},o(l){P(t.$$.fragment,l),r=!1},d(l){l&&u(e),ee(t)}}}function Ue(o){let e,t,a,r,l,n,s,f,h='<i class="ri-instagram-line"></i>',g,_,c,k,j=o[0].name+"",N,U,V,A,M,B=o[0].room+"",F,T,y,z=o[0].meetingTime+"",R,H,w=o[1]&&be();const O=[Me,De],b=[];function E(v,$){return v[0].instagramURL?0:1}return l=E(o),n=b[l]=O[l](o),{c(){e=m("div"),t=m("div"),w&&w.c(),a=I(),r=m("div"),n.c(),s=I(),f=m("div"),f.innerHTML=h,g=I(),_=m("div"),c=m("a"),k=m("h2"),N=te(j),V=I(),A=m("div"),M=m("span"),F=te(B),T=I(),y=m("span"),R=te(z),this.h()},l(v){e=p(v,"DIV",{class:!0});var $=C(e);t=p($,"DIV",{class:!0});var S=C(t);w&&w.l(S),a=D(S),r=p(S,"DIV",{class:!0});var ue=C(r);n.l(ue),ue.forEach(u),s=D(S),f=p(S,"DIV",{class:!0,"data-svelte-h":!0}),G(f)!=="svelte-1lboaes"&&(f.innerHTML=h),S.forEach(u),g=D($),_=p($,"DIV",{class:!0});var Q=C(_);c=p(Q,"A",{href:!0,target:!0,rel:!0,class:!0});var fe=C(c);k=p(fe,"H2",{class:!0});var he=C(k);N=le(he,j),he.forEach(u),fe.forEach(u),V=D(Q),A=p(Q,"DIV",{class:!0});var X=C(A);M=p(X,"SPAN",{class:!0});var _e=C(M);F=le(_e,B),_e.forEach(u),T=D(X),y=p(X,"SPAN",{class:!0});var de=C(y);R=le(de,z),de.forEach(u),X.forEach(u),Q.forEach(u),$.forEach(u),this.h()},h(){i(r,"class","club__banner__icon svelte-zd0pow"),i(f,"class","club__banner__insta svelte-zd0pow"),i(t,"class","club__banner svelte-zd0pow"),me(t,"rainbow",o[1]),K(t,"background-color",o[0].bannerColor),i(k,"class","club__info__title svelte-zd0pow"),i(c,"href",U=o[0].instagramURL),i(c,"target","_blank"),i(c,"rel","noopener noreferrer"),i(c,"class","svelte-zd0pow"),i(M,"class","club__info__room svelte-zd0pow"),i(y,"class","club__info__meeting-time svelte-zd0pow"),i(A,"class","svelte-zd0pow"),i(_,"class","club__info svelte-zd0pow"),i(e,"class","club svelte-zd0pow")},m(v,$){L(v,e,$),d(e,t),w&&w.m(t,null),d(t,a),d(t,r),b[l].m(r,null),d(t,s),d(t,f),d(e,g),d(e,_),d(_,c),d(c,k),d(k,N),d(_,V),d(_,A),d(A,M),d(M,F),d(A,T),d(A,y),d(y,R),H=!0},p(v,[$]){v[1]?w||(w=be(),w.c(),w.m(t,a)):w&&(w.d(1),w=null);let S=l;l=E(v),l===S?b[l].p(v,$):(ie(),P(b[S],1,1,()=>{b[S]=null}),ce(),n=b[l],n?n.p(v,$):(n=b[l]=O[l](v),n.c()),q(n,1),n.m(r,null)),(!H||$&2)&&me(t,"rainbow",v[1]),$&1&&K(t,"background-color",v[0].bannerColor),(!H||$&1)&&j!==(j=v[0].name+"")&&ae(N,j),(!H||$&1&&U!==(U=v[0].instagramURL))&&i(c,"href",U),(!H||$&1)&&B!==(B=v[0].room+"")&&ae(F,B),(!H||$&1)&&z!==(z=v[0].meetingTime+"")&&ae(R,z)},i(v){H||(q(n),H=!0)},o(v){P(n),H=!1},d(v){v&&u(e),w&&w.d(),b[l].d()}}}function ze(o,e,t){let a,{club:r}=e;return o.$$set=l=>{"club"in l&&t(0,r=l.club)},o.$$.update=()=>{o.$$.dirty&1&&t(1,a=r.bannerColor==="rainbow")},[r,a]}class Re extends ne{constructor(e){super(),oe(this,e,ze,Ue,re,{club:0})}}function ge(o){let e,t='<i class="ri-close-line svelte-lph6qt"></i>',a,r;return{c(){e=m("button"),e.innerHTML=t,this.h()},l(l){e=p(l,"BUTTON",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-n6wc4n"&&(e.innerHTML=t),this.h()},h(){i(e,"class","close__icon svelte-lph6qt")},m(l,n){L(l,e,n),a||(r=$e(e,"click",o[3]),a=!0)},p:W,d(l){l&&u(e),a=!1,r()}}}function Ve(o){let e,t,a='<i class="ri-search-line"></i>',r,l,n,s,f,h=o[2]&&ge(o);return{c(){e=m("div"),t=m("span"),t.innerHTML=a,r=I(),l=m("input"),n=I(),h&&h.c(),this.h()},l(g){e=p(g,"DIV",{class:!0});var _=C(e);t=p(_,"SPAN",{class:!0,"data-svelte-h":!0}),G(t)!=="svelte-gop4bi"&&(t.innerHTML=a),r=D(_),l=p(_,"INPUT",{type:!0,"aria-label":!0,class:!0,placeholder:!0}),n=D(_),h&&h.l(_),_.forEach(u),this.h()},h(){i(t,"class","search__icon svelte-lph6qt"),i(l,"type","text"),i(l,"aria-label","Search clubs"),i(l,"class","search__input svelte-lph6qt"),i(l,"placeholder",o[0]),i(e,"class","search svelte-lph6qt")},m(g,_){L(g,e,_),d(e,t),d(e,r),d(e,l),pe(l,o[1]),d(e,n),h&&h.m(e,null),s||(f=$e(l,"input",o[4]),s=!0)},p(g,[_]){_&1&&i(l,"placeholder",g[0]),_&2&&l.value!==g[1]&&pe(l,g[1]),g[2]?h?h.p(g,_):(h=ge(g),h.c(),h.m(e,null)):h&&(h.d(1),h=null)},i:W,o:W,d(g){g&&u(e),h&&h.d(),s=!1,f()}}}function Ae(o,e,t){let a;const r=Ce();let{placeholder:l}=e,n="";function s(){t(1,n="")}function f(){n=this.value,t(1,n)}return o.$$set=h=>{"placeholder"in h&&t(0,l=h.placeholder)},o.$$.update=()=>{o.$$.dirty&2&&r("value-change",n),o.$$.dirty&2&&t(2,a=n.trim().length!=0)},[l,n,a,s,f]}class He extends ne{constructor(e){super(),oe(this,e,Ae,Ve,re,{placeholder:0})}}function ke(o,e,t){const a=o.slice();return a[4]=e[t],a}function Se(o){let e;return{c(){e=m("meta"),this.h()},l(t){e=p(t,"META",{property:!0,content:!0}),this.h()},h(){i(e,"property","og:url"),i(e,"content","https://rhhsstuco.ca/clubs")},m(t,a){L(t,e,a)},d(t){t&&u(e)}}}function Pe(o){let e,t="No clubs found :(";return{c(){e=m("p"),e.textContent=t,this.h()},l(a){e=p(a,"P",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-19434qu"&&(e.textContent=t),this.h()},h(){i(e,"class","clubs__grid__not-found svelte-a9jh3h")},m(a,r){L(a,e,r)},p:W,i:W,o:W,d(a){a&&u(e)}}}function qe(o){let e,t=[],a=new Map,r,l=ve(o[1]);const n=s=>s[4];for(let s=0;s<l.length;s+=1){let f=ke(o,l,s),h=n(f);a.set(h,t[s]=we(h,f))}return{c(){e=m("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=p(s,"DIV",{class:!0});var f=C(e);for(let h=0;h<t.length;h+=1)t[h].l(f);f.forEach(u),this.h()},h(){i(e,"class","clubs__grid svelte-a9jh3h")},m(s,f){L(s,e,f);for(let h=0;h<t.length;h+=1)t[h]&&t[h].m(e,null);r=!0},p(s,f){f&2&&(l=ve(s[1]),ie(),t=Te(t,f,n,1,s,l,a,e,Ie,we,null,ke),ce())},i(s){if(!r){for(let f=0;f<l.length;f+=1)q(t[f]);r=!0}},o(s){for(let f=0;f<t.length;f+=1)P(t[f]);r=!1},d(s){s&&u(e);for(let f=0;f<t.length;f+=1)t[f].d()}}}function we(o,e){let t,a,r;return a=new Re({props:{club:e[4]}}),{key:o,first:null,c(){t=Y(),J(a.$$.fragment),this.h()},l(l){t=Y(),Z(a.$$.fragment,l),this.h()},h(){this.first=t},m(l,n){L(l,t,n),x(a,l,n),r=!0},p(l,n){e=l;const s={};n&2&&(s.club=e[4]),a.$set(s)},i(l){r||(q(a.$$.fragment,l),r=!0)},o(l){P(a.$$.fragment,l),r=!1},d(l){l&&u(t),ee(a,l)}}}function je(o){let e,t,a,r,l,n,s,f,h,g,_,c,k,j="Clubs",N,U,V,A,M,B='Want to create a new club? Use this <a href="https://docs.google.com/forms/d/e/1FAIpQLSc78K3iBYlg9bXtkh3sqePokGIELF9WQKUX833hdEb8qdHl-A/viewform?usp=sf_link">Google Form</a>!',F,T,y,z;document.title=e=se;let R=Se();V=new He({props:{placeholder:"Search by club name, location, or time"}}),V.$on("value-change",o[2]);const H=[qe,Pe],w=[];function O(b,E){return b[1].length?0:1}return T=O(o),y=w[T]=H[T](o),{c(){t=m("meta"),a=m("meta"),r=m("meta"),l=m("meta"),n=m("meta"),f=m("meta"),R&&R.c(),g=Y(),_=I(),c=m("main"),k=m("h1"),k.textContent=j,N=I(),U=m("div"),J(V.$$.fragment),A=I(),M=m("p"),M.innerHTML=B,F=I(),y.c(),this.h()},l(b){const E=ye("svelte-kfxgfs",document.head);t=p(E,"META",{name:!0,content:!0}),a=p(E,"META",{property:!0,content:!0}),r=p(E,"META",{property:!0,content:!0}),l=p(E,"META",{property:!0,content:!0}),n=p(E,"META",{property:!0,content:!0}),f=p(E,"META",{property:!0,content:!0}),R&&R.l(E),g=Y(),E.forEach(u),_=D(b),c=p(b,"MAIN",{class:!0});var v=C(c);k=p(v,"H1",{class:!0,"data-svelte-h":!0}),G(k)!=="svelte-ify59d"&&(k.textContent=j),N=D(v),U=p(v,"DIV",{class:!0});var $=C(U);Z(V.$$.fragment,$),A=D($),M=p($,"P",{class:!0,"data-svelte-h":!0}),G(M)!=="svelte-rqkjci"&&(M.innerHTML=B),$.forEach(u),F=D(v),y.l(v),v.forEach(u),this.h()},h(){i(t,"name","description"),i(t,"content",Ee),i(a,"property","og:title"),i(a,"content",se),i(r,"property","og:description"),i(r,"content",Ee),i(l,"property","og:type"),i(l,"content","website"),i(n,"property","og:image"),i(n,"content",s=o[0].clubs[0].imageURL.img.src),i(f,"property","thumbnail"),i(f,"content",h=o[0].clubs[0].imageURL.img.src),i(k,"class","svelte-a9jh3h"),i(M,"class","clubs_new svelte-a9jh3h"),i(U,"class","clubs__search svelte-a9jh3h"),i(c,"class","clubs svelte-a9jh3h")},m(b,E){d(document.head,t),d(document.head,a),d(document.head,r),d(document.head,l),d(document.head,n),d(document.head,f),R&&R.m(document.head,null),d(document.head,g),L(b,_,E),L(b,c,E),d(c,k),d(c,N),d(c,U),x(V,U,null),d(U,A),d(U,M),d(c,F),w[T].m(c,null),z=!0},p(b,[E]){(!z||E&0)&&e!==(e=se)&&(document.title=e),(!z||E&1&&s!==(s=b[0].clubs[0].imageURL.img.src))&&i(n,"content",s),(!z||E&1&&h!==(h=b[0].clubs[0].imageURL.img.src))&&i(f,"content",h);let v=T;T=O(b),T===v?w[T].p(b,E):(ie(),P(w[v],1,1,()=>{w[v]=null}),ce(),y=w[T],y?y.p(b,E):(y=w[T]=H[T](b),y.c()),q(y,1),y.m(c,null))},i(b){z||(q(V.$$.fragment,b),q(y),z=!0)},o(b){P(V.$$.fragment,b),P(y),z=!1},d(b){b&&(u(_),u(c)),u(t),u(a),u(r),u(l),u(n),u(f),R&&R.d(b),u(g),ee(V),w[T].d()}}}const se="Clubs | RHHS StuCo",Ee="Want to find a club? You came to the right place! Here you can search for clubs that fit your interests.";function Ne(o,e,t){let a,{data:r}=e,l="";function n(s){t(3,l=s.detail.toLowerCase())}return o.$$set=s=>{"data"in s&&t(0,r=s.data)},o.$$.update=()=>{o.$$.dirty&9&&t(1,a=r.clubs.filter(s=>s.meetingTime.toLowerCase().includes(l)||s.name.toLowerCase().includes(l)||s.room.toLowerCase().includes(l)))},[r,a,n,l]}class Ge extends ne{constructor(e){super(),oe(this,e,Ne,je,re,{data:0})}}export{Ge as component};
