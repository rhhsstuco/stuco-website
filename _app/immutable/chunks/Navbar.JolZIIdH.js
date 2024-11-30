import{c as te,a as E,t as S}from"./disclose-version.CFuGu-tt.js";import{o as ce,d as oe,g as d,m as L,n as Q,p as D,b as N,f as P,a as F,a2 as B,c as l,r,s as v,t as C,k as O}from"./runtime.B2NV0GWk.js";import{d as J,e as ue}from"./events.RwOQeFvm.js";import{i as Z}from"./if.BtRwC8bn.js";import{s as de,a as o}from"./attributes.DozUwa6w.js";import{t as f,s as fe}from"./class.DV5zTk5Z.js";import{p as I,a as me}from"./props.C_w89w0-.js";import{b as s}from"./entry.ChuRU2AM.js";import{p as _e}from"./stores.BC8e1xyF.js";import{t as ee}from"./theme.svelte.Bz32mSQs.js";import{t as he,f as we}from"./index.BQk1MJ10.js";function ye(i,t,e){ce(()=>{var a=oe(()=>t(i,e==null?void 0:e())||{});if(a!=null&&a.destroy)return()=>a.destroy()})}function se(){let i=Q("");return{get value(){return d(i)},init(){_e.subscribe(t=>{L(i,I(t.url.pathname))})}}}function ae(i,t){D(t,!0);let e,a,n=Q(!1),c=Q(!1);function h(y){e=window.matchMedia(y),a=p=>L(c,I(p.matches)),e.addEventListener("change",a),L(c,I(e.matches))}function m(){e&&a&&e.removeEventListener("change",a)}N(()=>(L(n,!0),m)),N(()=>{d(n)&&(m(),h(t.query))});var w=te(),b=P(w);de(b,()=>t.children??B,()=>d(c)),E(i,w),F()}function be(i,t){t(!t())}var pe=S('<button class="hamburger svelte-fy38he" aria-label="Open hamburger menu"><i class="ri-menu-line svelte-fy38he"></i></button>');function ge(i,t){let e=me(t,"open",15);var a=pe();a.__click=[be,e],E(i,a)}J(["click"]);function $e(i){const t=e=>{i&&!i.contains(e.target)&&!e.defaultPrevented&&i.dispatchEvent(new CustomEvent("click_outside"))};return document.addEventListener("click",t,!0),{destroy(){document.removeEventListener("click",t,!0)}}}var ke=S('<div class="menu svelte-t30isd"><div class="menu__top svelte-t30isd"><button aria-label="closes the hamburger menu" class="svelte-t30isd"><i class="ri-close-line svelte-t30isd"></i></button></div> <div class="menu__content"><ul class="menu__content__links svelte-t30isd"><li><a class="svelte-t30isd">Home</a></li> <li><a class="svelte-t30isd">Events</a></li> <li><a class="svelte-t30isd">Clubs</a></li> <li><a class="svelte-t30isd">Gallery</a></li> <li><a class="svelte-t30isd">About Us</a></li></ul></div></div>');function Ce(i,t){D(t,!0);let e=se();N(()=>{e.init()});var a=ke(),n=l(a),c=l(n);c.__click=function(...g){var $;($=t.onClose)==null||$.apply(this,g)},r(n);var h=v(n,2),m=l(h),w=l(m),b=l(w);o(b,"href",`${s??""}/`),r(w);var y=v(w,2),p=l(y);o(p,"href",`${s??""}/events`),r(y);var x=v(y,2),q=l(x);o(q,"href",`${s??""}/clubs`),r(x);var _=v(x,2),u=l(_);o(u,"href",`${s??""}/gallery`),r(_);var U=v(_,2),R=l(U);o(R,"href",`${s??""}/about-us`),r(U),r(m),r(h),r(a),ye(a,g=>$e(g)),C(()=>{f(b,"active",e.value===`${s}/`||e.value===`${s}`),f(p,"active",e.value===`${s}/events`),f(q,"active",e.value===`${s}/clubs`),f(u,"active",e.value===`${s}/gallery`),f(R,"active",e.value===`${s}/about-us`)}),ue("click_outside",a,function(...g){var $;($=t.onClose)==null||$.apply(this,g)}),he(3,a,()=>we,()=>({x:500,duration:600})),E(i,a),F()}J(["click"]);var Ee=S('<li class="svelte-1w9ywr9"><a class="svelte-1w9ywr9">Home</a></li> <li class="svelte-1w9ywr9"><a class="svelte-1w9ywr9">Events</a></li> <li class="svelte-1w9ywr9"><a class="svelte-1w9ywr9">Clubs</a></li> <li class="svelte-1w9ywr9"><a class="svelte-1w9ywr9">Gallery</a></li> <li class="svelte-1w9ywr9"><a class="svelte-1w9ywr9">About Us</a></li>',1),Le=S('<li class="svelte-1w9ywr9"><!></li> <!>',1),xe=S('<nav class="svelte-1w9ywr9"><div class="nav__logo svelte-1w9ywr9"><a class="svelte-1w9ywr9">RHHS STUCO</a></div> <div class="nav__links svelte-1w9ywr9"><ul class="svelte-1w9ywr9"><!> <li class="svelte-1w9ywr9"><button aria-label="Change theme"></button></li></ul></div></nav>');function Ie(i,t){D(t,!0);let e=O(()=>ee.value==="dark"?"ri-moon-fill":"ri-moon-line");function a(_,u){return u===`${s}/${_}`||u===`${s}/${_}/`}let n=se();N(()=>{n.init()}),N(()=>{n.value,L(c,!1)});let c=Q(!1);var h=xe(),m=l(h),w=l(m);o(w,"href",`${s??""}/`),r(m);var b=v(m,2),y=l(b),p=l(y);ae(p,{query:"(min-width: 1024px)",children:(u,U=B)=>{ae(u,{query:"(min-height: 577px)",children:(g,$=B)=>{var K=te(),le=P(K);Z(le,()=>U()&&$(),T=>{var A=Ee(),k=P(A),G=l(k);o(G,"href",`${s??""}/`),r(k);var M=v(k,2),H=l(M);o(H,"href",`${s??""}/events`);const re=O(()=>a("events",n.value));C(()=>f(H,"active",d(re))),r(M);var j=v(M,2),V=l(j);o(V,"href",`${s??""}/clubs`);const ie=O(()=>a("clubs",n.value));C(()=>f(V,"active",d(ie))),r(j);var z=v(j,2),W=l(z);o(W,"href",`${s??""}/gallery`);const ne=O(()=>a("gallery",n.value));C(()=>f(W,"active",d(ne))),r(z);var X=v(z,2),Y=l(X);o(Y,"href",`${s??""}/about-us`);const ve=O(()=>a("about-us",n.value));C(()=>f(Y,"active",d(ve))),r(X),C(()=>f(G,"active",n.value===`${s}/`||n.value===`${s}`)),E(T,A)},T=>{var A=Le(),k=P(A),G=l(k);ge(G,{get open(){return d(c)},set open(H){L(c,I(H))}}),r(k);var M=v(k,2);Z(M,()=>d(c),H=>{Ce(H,{onClose:()=>L(c,!1)})}),E(T,A)}),E(g,K)},$$slots:{default:!0}})},$$slots:{default:!0}});var x=v(p,2),q=l(x);q.__click=function(..._){var u;(u=ee.toggle)==null||u.apply(this,_)},r(x),r(y),r(b),r(h),C(()=>fe(q,`${d(e)??""} change-theme svelte-1w9ywr9`)),E(i,h),F()}J(["click"]);export{Ie as N,ye as a,$e as c};
