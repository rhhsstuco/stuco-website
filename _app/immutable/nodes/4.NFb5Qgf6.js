import{s as te,e as w,a as P,t as Z,c as $,b as D,f as b,g as T,d as G,m as E,i as N,h as g,j as J,I as K,y as se,k as ie}from"../chunks/scheduler.C2RwAsbA.js";import{S as ae,i as re,c as O,a as j,m as x,t as U,b as I,d as y,e as W,g as Q}from"../chunks/index.B9EtuCts.js";import{M as oe,e as V}from"../chunks/Metadata.BkHFVy1F.js";import{P as ce}from"../chunks/Picture.j5cs4BCn.js";import{s as me}from"../chunks/screenWidth.store.5E7UH8so.js";const fe={avif:[{src:""+new URL("../assets/default_pfp.D07KW7nH.avif",import.meta.url).href,w:400},{src:""+new URL("../assets/default_pfp.DZkSsSAz.avif",import.meta.url).href,w:800}],webp:[{src:""+new URL("../assets/default_pfp.SsvZYKww.webp",import.meta.url).href,w:400},{src:""+new URL("../assets/default_pfp.DEwb8j50.webp",import.meta.url).href,w:800}],png:[{src:""+new URL("../assets/default_pfp.DvGWeBbE.png",import.meta.url).href,w:400},{src:""+new URL("../assets/default_pfp.BUrPPi8f.png",import.meta.url).href,w:800}]},ue={src:""+new URL("../assets/default_pfp.BUrPPi8f.png",import.meta.url).href,w:800,h:800},z={sources:fe,img:ue};function he(n){var H;let t,r,e,s,c,a,o=n[0].name+"",l,k,S,d=n[0].position+"",M,v;return e=new ce({props:{meta:((H=n[0])==null?void 0:H.imageURL)||z,alt:n[0].name,sizes:"(max-width: 800px) 400px, 1200px",loading:n[1]}}),{c(){t=w("div"),r=w("div"),O(e.$$.fragment),s=P(),c=w("div"),a=w("h2"),l=Z(o),k=P(),S=w("h3"),M=Z(d),this.h()},l(h){t=$(h,"DIV",{class:!0});var p=D(t);r=$(p,"DIV",{class:!0});var C=D(r);j(e.$$.fragment,C),C.forEach(b),s=T(p),c=$(p,"DIV",{class:!0});var m=D(c);a=$(m,"H2",{class:!0});var R=D(a);l=G(R,o),R.forEach(b),k=T(m),S=$(m,"H3",{class:!0});var f=D(S);M=G(f,d),f.forEach(b),m.forEach(b),p.forEach(b),this.h()},h(){E(r,"class","member-card__photo svelte-12gfih0"),E(a,"class","member-card__text__name svelte-12gfih0"),E(S,"class","member-card__text__position svelte-12gfih0"),E(c,"class","member-card__text svelte-12gfih0"),E(t,"class","member-card svelte-12gfih0")},m(h,p){N(h,t,p),g(t,r),x(e,r,null),g(t,s),g(t,c),g(c,a),g(a,l),g(c,k),g(c,S),g(S,M),v=!0},p(h,[p]){var m;const C={};p&1&&(C.meta=((m=h[0])==null?void 0:m.imageURL)||z),p&1&&(C.alt=h[0].name),p&2&&(C.loading=h[1]),e.$set(C),(!v||p&1)&&o!==(o=h[0].name+"")&&J(l,o),(!v||p&1)&&d!==(d=h[0].position+"")&&J(M,d)},i(h){v||(U(e.$$.fragment,h),v=!0)},o(h){I(e.$$.fragment,h),v=!1},d(h){h&&b(t),y(e)}}}function _e(n,t,r){let{member:e}=t,{loading:s="eager"}=t;return n.$$set=c=>{"member"in c&&r(0,e=c.member),"loading"in c&&r(1,s=c.loading)},[e,s]}class le extends ae{constructor(t){super(),re(this,t,_e,he,te,{member:0,loading:1})}}const ge=n=>me(0,n),de=ge(1024);function X(n,t,r){const e=n.slice();return e[3]=t[r],e[5]=r,e}function Y(n,t,r){const e=n.slice();return e[3]=t[r],e}function q(n){let t,r,e=V(n[0].members.slice(0,3)),s=[];for(let a=0;a<e.length;a+=1)s[a]=F(Y(n,e,a));const c=a=>I(s[a],1,1,()=>{s[a]=null});return{c(){t=w("div");for(let a=0;a<s.length;a+=1)s[a].c();this.h()},l(a){t=$(a,"DIV",{class:!0});var o=D(t);for(let l=0;l<s.length;l+=1)s[l].l(o);o.forEach(b),this.h()},h(){E(t,"class","members__display__row svelte-gc0s9")},m(a,o){N(a,t,o);for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(t,null);r=!0},p(a,o){if(o&1){e=V(a[0].members.slice(0,3));let l;for(l=0;l<e.length;l+=1){const k=Y(a,e,l);s[l]?(s[l].p(k,o),U(s[l],1)):(s[l]=F(k),s[l].c(),U(s[l],1),s[l].m(t,null))}for(Q(),l=e.length;l<s.length;l+=1)c(l);W()}},i(a){if(!r){for(let o=0;o<e.length;o+=1)U(s[o]);r=!0}},o(a){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)I(s[o]);r=!1},d(a){a&&b(t),se(s,a)}}}function F(n){let t,r;return t=new le({props:{member:n[3]}}),{c(){O(t.$$.fragment)},l(e){j(t.$$.fragment,e)},m(e,s){x(t,e,s),r=!0},p(e,s){const c={};s&1&&(c.member=e[3]),t.$set(c)},i(e){r||(U(t.$$.fragment,e),r=!0)},o(e){I(t.$$.fragment,e),r=!1},d(e){y(t,e)}}}function ee(n){let t,r;return t=new le({props:{member:n[3],loading:n[1]&&n[5]<3?"eager":"lazy"}}),{c(){O(t.$$.fragment)},l(e){j(t.$$.fragment,e)},m(e,s){x(t,e,s),r=!0},p(e,s){const c={};s&5&&(c.member=e[3]),s&2&&(c.loading=e[1]&&e[5]<3?"eager":"lazy"),t.$set(c)},i(e){r||(U(t.$$.fragment,e),r=!0)},o(e){I(t.$$.fragment,e),r=!1},d(e){y(t,e)}}}function pe(n){let t,r,e,s,c="About Us",a,o,l,k="Members",S,d,M,v,H,h,p='<h2 class="svelte-gc0s9"><a href="https://docs.google.com/document/d/e/2PACX-1vQb_xmB3PHRb04KgONGDNKJXQOYpmS1fTwMoTvlSS90-4ShiNTttbWVlKm2sBjT2J5xZUsb7_zMjUEy/pub" target="_blank" rel="noopener noreferrer" class="svelte-gc0s9">Constitution</a></h2>',C;t=new oe({props:{title:ve,description:be,url:"https://rhhsstuco.ca/about-us",image:n[0].members[1].imageURL||z}});let m=!n[1]&&q(n),R=V(n[0].members.slice(n[2])),f=[];for(let i=0;i<R.length;i+=1)f[i]=ee(X(n,R,i));const ne=i=>I(f[i],1,1,()=>{f[i]=null});return{c(){O(t.$$.fragment),r=P(),e=w("main"),s=w("h1"),s.textContent=c,a=P(),o=w("section"),l=w("h2"),l.textContent=k,S=P(),d=w("div"),m&&m.c(),M=P(),v=w("div");for(let i=0;i<f.length;i+=1)f[i].c();H=P(),h=w("section"),h.innerHTML=p,this.h()},l(i){j(t.$$.fragment,i),r=T(i),e=$(i,"MAIN",{class:!0});var u=D(e);s=$(u,"H1",{class:!0,"data-svelte-h":!0}),K(s)!=="svelte-etk01z"&&(s.textContent=c),a=T(u),o=$(u,"SECTION",{class:!0});var L=D(o);l=$(L,"H2",{class:!0,"data-svelte-h":!0}),K(l)!=="svelte-1vj8wcn"&&(l.textContent=k),S=T(L),d=$(L,"DIV",{class:!0});var _=D(d);m&&m.l(_),M=T(_),v=$(_,"DIV",{class:!0});var B=D(v);for(let A=0;A<f.length;A+=1)f[A].l(B);B.forEach(b),_.forEach(b),L.forEach(b),H=T(u),h=$(u,"SECTION",{class:!0,"data-svelte-h":!0}),K(h)!=="svelte-fg3a4s"&&(h.innerHTML=p),u.forEach(b),this.h()},h(){E(s,"class","svelte-gc0s9"),E(l,"class","svelte-gc0s9"),E(v,"class","members__display__grid svelte-gc0s9"),E(d,"class","members__display svelte-gc0s9"),E(o,"class","members"),E(h,"class","constitution"),E(e,"class","about-us svelte-gc0s9")},m(i,u){x(t,i,u),N(i,r,u),N(i,e,u),g(e,s),g(e,a),g(e,o),g(o,l),g(o,S),g(o,d),m&&m.m(d,null),g(d,M),g(d,v);for(let L=0;L<f.length;L+=1)f[L]&&f[L].m(v,null);g(e,H),g(e,h),C=!0},p(i,[u]){const L={};if(u&1&&(L.image=i[0].members[1].imageURL||z),t.$set(L),i[1]?m&&(Q(),I(m,1,1,()=>{m=null}),W()):m?(m.p(i,u),u&2&&U(m,1)):(m=q(i),m.c(),U(m,1),m.m(d,M)),u&7){R=V(i[0].members.slice(i[2]));let _;for(_=0;_<R.length;_+=1){const B=X(i,R,_);f[_]?(f[_].p(B,u),U(f[_],1)):(f[_]=ee(B),f[_].c(),U(f[_],1),f[_].m(v,null))}for(Q(),_=R.length;_<f.length;_+=1)ne(_);W()}},i(i){if(!C){U(t.$$.fragment,i),U(m);for(let u=0;u<R.length;u+=1)U(f[u]);C=!0}},o(i){I(t.$$.fragment,i),I(m),f=f.filter(Boolean);for(let u=0;u<f.length;u+=1)I(f[u]);C=!1},d(i){i&&(b(r),b(e)),y(t,i),m&&m.d(),se(f,i)}}}const ve="About Us | RHHS StuCo",be="Meet the members of our the 2023-2024 Student Council!";function we(n,t,r){let e,s;ie(n,de,a=>r(1,s=a));let{data:c}=t;return n.$$set=a=>{"data"in a&&r(0,c=a.data)},n.$$.update=()=>{n.$$.dirty&2&&r(2,e=s?0:3)},[c,s,e]}class Se extends ae{constructor(t){super(),re(this,t,we,pe,te,{data:0})}}export{Se as component};