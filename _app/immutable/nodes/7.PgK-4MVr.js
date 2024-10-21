import{s as U,l as ee,e as v,c as w,b as $,f as g,m as k,i as b,K as G,u as te,p as le,q as se,a4 as ie,E as F,r as I,a as H,g as O,h as A,P as ne,y as ae,I as Q,n as N,S as X,M as j,A as oe,J as re}from"../chunks/scheduler.GlefHcZ0.js";import{S as V,i as P,t as d,b as p,g as C,e as M,h as ce,c as E,a as L,m as R,d as z}from"../chunks/index.CszevYFU.js";import{e as S,u as ue,o as fe,M as _e}from"../chunks/Metadata.UPG_lhfh.js";import{c as he}from"../chunks/clickOutside.7onWnYCz.js";import{P as x}from"../chunks/Picture.iYxXep8O.js";import{m as me,a as ge,b as de,c as pe,d as be,e as ye,f as ke}from"../chunks/screenWidth.store.qRd7fIsg.js";const ve=r=>({}),q=r=>({class:"test"});function we(r){let e,t,s,i;const o=r[2].default,a=ee(o,r,r[1],q);return{c(){e=v("dialog"),a&&a.c(),this.h()},l(l){e=w(l,"DIALOG",{class:!0});var n=$(e);a&&a.l(n),n.forEach(g),this.h()},h(){k(e,"class","svelte-19fzfrv")},m(l,n){b(l,e,n),a&&a.m(e,null),r[4](e),t=!0,s||(i=G(e,"close",r[3]),s=!0)},p(l,[n]){a&&a.p&&(!t||n&2)&&te(a,o,l,l[1],t?se(o,l[1],n,ve):le(l[1]),q)},i(l){t||(d(a,l),t=!0)},o(l){p(a,l),t=!1},d(l){l&&g(e),a&&a.d(l),r[4](null),s=!1,i()}}}function $e(r,e,t){let{$$slots:s={},$$scope:i}=e,{dialog:o}=e;function a(n){ie.call(this,r,n)}function l(n){F[n?"unshift":"push"](()=>{o=n,t(0,o)})}return r.$$set=n=>{"dialog"in n&&t(0,o=n.dialog),"$$scope"in n&&t(1,i=n.$$scope)},[o,i,s,a,l]}class Ie extends V{constructor(e){super(),P(this,e,$e,we,U,{dialog:0})}}function Ee(r,e){const t=[],s=Math.floor(r.length/e);for(let i=0;i<e;i++)for(let o=0;o<s;o++)t.push(r[i+o*e]);for(let i=s*e;i<r.length;i++)t.push(r[i]);return t}const Le=4,Re=6;function ze(r){const e=()=>{const t=r.children[0],s=r.parentElement,i=r,o=t.lastElementChild,a=+o.getAttribute("width")/+o.getAttribute("height"),l=window.innerWidth/window.innerHeight;a>l&&(t.style.width=s.style.width=i.style.width=`calc(100vw - ${Le}rem)`,t.style.height=s.style.height=i.style.height=""),a<l&&(t.style.height=s.style.height=i.style.height=`calc(100vh - ${Re}rem)`,t.style.width=s.style.width=i.style.width="")};return e(),window.addEventListener("resize",e),{destroy(){window.removeEventListener("resize",e)}}}function B(r,e,t){const s=r.slice();return s[9]=e[t],s}function W(r,e,t){const s=r.slice();return s[12]=e[t],s}function Ce(r){let e,t,s,i,o,a=S(r[2]),l=[];for(let c=0;c<a.length;c+=1)l[c]=K(B(r,a,c));const n=c=>p(l[c],1,1,()=>{l[c]=null});function f(c){r[7](c)}let _={$$slots:{default:[Te]},$$scope:{ctx:r}};return r[1]!==void 0&&(_.dialog=r[1]),s=new Ie({props:_}),F.push(()=>ce(s,"dialog",f)),{c(){e=v("section");for(let c=0;c<l.length;c+=1)l[c].c();t=H(),E(s.$$.fragment),this.h()},l(c){e=w(c,"SECTION",{class:!0});var u=$(e);for(let h=0;h<l.length;h+=1)l[h].l(u);t=O(u),L(s.$$.fragment,u),u.forEach(g),this.h()},h(){k(e,"class","gallery svelte-zzwftx")},m(c,u){b(c,e,u);for(let h=0;h<l.length;h+=1)l[h]&&l[h].m(e,null);A(e,t),R(s,e,null),o=!0},p(c,u){if(u&20){a=S(c[2]);let m;for(m=0;m<a.length;m+=1){const T=B(c,a,m);l[m]?(l[m].p(T,u),d(l[m],1)):(l[m]=K(T),l[m].c(),d(l[m],1),l[m].m(e,t))}for(C(),m=a.length;m<l.length;m+=1)n(m);M()}const h={};u&32771&&(h.$$scope={dirty:u,ctx:c}),!i&&u&2&&(i=!0,h.dialog=c[1],ne(()=>i=!1)),s.$set(h)},i(c){if(!o){for(let u=0;u<a.length;u+=1)d(l[u]);d(s.$$.fragment,c),o=!0}},o(c){l=l.filter(Boolean);for(let u=0;u<l.length;u+=1)p(l[u]);p(s.$$.fragment,c),o=!1},d(c){c&&g(e),ae(l,c),z(s)}}}function Me(r){let e,t='<h3 class="gallery__no-images__message svelte-zzwftx">No Images Yet</h3>';return{c(){e=v("div"),e.innerHTML=t,this.h()},l(s){e=w(s,"DIV",{class:!0,"data-svelte-h":!0}),Q(e)!=="svelte-1w4n6qo"&&(e.innerHTML=t),this.h()},h(){k(e,"class","gallery__no-images svelte-zzwftx")},m(s,i){b(s,e,i)},p:N,i:N,o:N,d(s){s&&g(e)}}}function J(r,e){let t,s,i,o,a;return s=new x({props:{meta:e[12]}}),{key:r,first:null,c(){t=v("button"),E(s.$$.fragment),this.h()},l(l){t=w(l,"BUTTON",{class:!0,"aria-label":!0});var n=$(t);L(s.$$.fragment,n),n.forEach(g),this.h()},h(){k(t,"class","gallery__column__image svelte-zzwftx"),k(t,"aria-label","Select this image"),this.first=t},m(l,n){b(l,t,n),R(s,t,null),i=!0,o||(a=G(t,"click",function(){X(e[4](e[12]))&&e[4](e[12]).apply(this,arguments)}),o=!0)},p(l,n){e=l;const f={};n&4&&(f.meta=e[12]),s.$set(f)},i(l){i||(d(s.$$.fragment,l),i=!0)},o(l){p(s.$$.fragment,l),i=!1},d(l){l&&g(t),z(s),o=!1,a()}}}function K(r){let e,t=[],s=new Map,i,o=S(r[9]);const a=l=>l[12].img.src;for(let l=0;l<o.length;l+=1){let n=W(r,o,l),f=a(n);s.set(f,t[l]=J(f,n))}return{c(){e=v("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=w(l,"DIV",{class:!0});var n=$(e);for(let f=0;f<t.length;f+=1)t[f].l(n);n.forEach(g),this.h()},h(){k(e,"class","gallery__column svelte-zzwftx")},m(l,n){b(l,e,n);for(let f=0;f<t.length;f+=1)t[f]&&t[f].m(e,null);i=!0},p(l,n){n&20&&(o=S(l[9]),C(),t=ue(t,n,a,1,l,o,s,e,fe,J,null,W),M())},i(l){if(!i){for(let n=0;n<o.length;n+=1)d(t[n]);i=!0}},o(l){for(let n=0;n<t.length;n+=1)p(t[n]);i=!1},d(l){l&&g(e);for(let n=0;n<t.length;n+=1)t[n].d()}}}function Y(r){let e,t,s,i,o;return t=new x({props:{meta:r[0]}}),{c(){e=v("div"),E(t.$$.fragment),this.h()},l(a){e=w(a,"DIV",{class:!0});var l=$(e);L(t.$$.fragment,l),l.forEach(g),this.h()},h(){k(e,"class","dialog__image")},m(a,l){b(a,e,l),R(t,e,null),s=!0,i||(o=[j(he.call(null,e)),G(e,"click_outside",function(){X(r[1].close())&&r[1].close().apply(this,arguments)}),j(ze.call(null,e))],i=!0)},p(a,l){r=a;const n={};l&1&&(n.meta=r[0]),t.$set(n)},i(a){s||(d(t.$$.fragment,a),s=!0)},o(a){p(t.$$.fragment,a),s=!1},d(a){a&&g(e),z(t),i=!1,oe(o)}}}function Z(r){let e,t,s=r[0]&&Y(r);return{c(){s&&s.c(),e=I()},l(i){s&&s.l(i),e=I()},m(i,o){s&&s.m(i,o),b(i,e,o),t=!0},p(i,o){i[0]?s?(s.p(i,o),o&1&&d(s,1)):(s=Y(i),s.c(),d(s,1),s.m(e.parentNode,e)):s&&(C(),p(s,1,1,()=>{s=null}),M())},i(i){t||(d(s),t=!0)},o(i){p(s),t=!1},d(i){i&&g(e),s&&s.d(i)}}}function Te(r){let e=r[0],t,s,i=Z(r);return{c(){i.c(),t=I()},l(o){i.l(o),t=I()},m(o,a){i.m(o,a),b(o,t,a),s=!0},p(o,a){a&1&&U(e,e=o[0])?(C(),p(i,1,1,N),M(),i=Z(o),i.c(),d(i,1),i.m(t.parentNode,t)):i.p(o,a)},i(o){s||(d(i),s=!0)},o(o){p(i),s=!1},d(o){o&&g(t),i.d(o)}}}function Ae(r){let e,t,s,i;const o=[Me,Ce],a=[];function l(n,f){return n[3]===0?0:1}return e=l(r),t=a[e]=o[e](r),{c(){t.c(),s=I()},l(n){t.l(n),s=I()},m(n,f){a[e].m(n,f),b(n,s,f),i=!0},p(n,[f]){let _=e;e=l(n),e===_?a[e].p(n,f):(C(),p(a[_],1,1,()=>{a[_]=null}),M(),t=a[e],t?t.p(n,f):(t=a[e]=o[e](n),t.c()),d(t,1),t.m(s.parentNode,s))},i(n){i||(d(t),i=!0)},o(n){p(t),i=!1},d(n){n&&g(s),a[e].d(n)}}}function Ne(r,e,t){let s,i,{imageURLs:o}=e,{columns:a=5}=e;const l=(u,h)=>{const m=Math.floor(s/h),T=s%h,D=[];u=Ee(u,h);for(let y=0;y<h;y++)D[y]=u.slice(y*m,(y+1)*m);for(let y=0;y<T;y++)D[y].push(u[m*h+y]);return D};let n,f;function _(u){return t(0,n=u),h=>f.showModal()}function c(u){f=u,t(1,f)}return r.$$set=u=>{"imageURLs"in u&&t(5,o=u.imageURLs),"columns"in u&&t(6,a=u.columns)},r.$$.update=()=>{r.$$.dirty&32&&t(3,s=o.length),r.$$.dirty&96&&t(2,i=l(o,a))},[n,f,i,s,_,o,a,c]}class Se extends V{constructor(e){super(),P(this,e,Ne,Ae,U,{imageURLs:5,columns:6})}}function Ue(r){let e,t,s,i,o="Gallery",a,l,n,f;return e=new _e({props:{title:De,description:He,url:"https://rhhsstuco.ca/gallery",image:r[0].imageURLs[0]}}),n=new Se({props:{imageURLs:r[0].imageURLs,columns:r[1]}}),{c(){E(e.$$.fragment),t=H(),s=v("main"),i=v("h1"),i.textContent=o,a=H(),l=v("div"),E(n.$$.fragment),this.h()},l(_){L(e.$$.fragment,_),t=O(_),s=w(_,"MAIN",{class:!0});var c=$(s);i=w(c,"H1",{class:!0,"data-svelte-h":!0}),Q(i)!=="svelte-14azyx4"&&(i.textContent=o),a=O(c),l=w(c,"DIV",{class:!0});var u=$(l);L(n.$$.fragment,u),u.forEach(g),c.forEach(g),this.h()},h(){k(i,"class","svelte-uhb3ej"),k(l,"class","gallery__image-grid svelte-uhb3ej"),k(s,"class","gallery svelte-uhb3ej")},m(_,c){R(e,_,c),b(_,t,c),b(_,s,c),A(s,i),A(s,a),A(s,l),R(n,l,null),f=!0},p(_,[c]){const u={};c&1&&(u.image=_[0].imageURLs[0]),e.$set(u);const h={};c&1&&(h.imageURLs=_[0].imageURLs),c&2&&(h.columns=_[1]),n.$set(h)},i(_){f||(d(e.$$.fragment,_),d(n.$$.fragment,_),f=!0)},o(_){p(e.$$.fragment,_),p(n.$$.fragment,_),f=!1},d(_){_&&(g(t),g(s)),z(e,_),z(n)}}}const De="Gallery | RHHS StuCo",He="A look into our 2024-2025 school year.";function Oe(r,e,t){let{data:s}=e,i=4;function o(l){return n=>{n&&t(1,i=l)}}const a=[];return a.push(me.subscribe(o(4))),a.push(ge.subscribe(o(4))),a.push(de.subscribe(o(3))),a.push(pe.subscribe(o(3))),a.push(be.subscribe(o(2))),a.push(ye.subscribe(o(2))),a.push(ke.subscribe(o(1))),re(()=>{a.forEach(l=>l())}),r.$$set=l=>{"data"in l&&t(0,s=l.data)},[s,i]}class We extends V{constructor(e){super(),P(this,e,Oe,Ue,U,{data:0})}}export{We as component};
