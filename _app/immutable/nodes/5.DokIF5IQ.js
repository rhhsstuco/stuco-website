import{a as L,t as R}from"../chunks/disclose-version.DdfHI4CV.js";import{p as y,f as T,c as s,g as a,r as t,s as o,t as E,a as k,a4 as _,$ as K,aw as O}from"../chunks/runtime.ybpKW43T.js";import{i as Q}from"../chunks/if.CJLyJS5S.js";import{e as S,i as M}from"../chunks/each.CpR5YdLG.js";import{s as N}from"../chunks/render.CG5KD97V.js";import{a as j}from"../chunks/props.RSUnQutB.js";import{C as z}from"../chunks/Card.CbiAFw5v.js";import{P as A}from"../chunks/Picture.DzEYDPT5.js";import{M as B}from"../chunks/Metadata.BwIApE6q.js";import{c as H}from"../chunks/screenWidth.svelte.Cr4YucG9.js";const I={avif:[{src:""+new URL("../assets/default_pfp.Uo6UtDXW.avif",import.meta.url).href,w:400},{src:""+new URL("../assets/default_pfp.CmNjdJUN.avif",import.meta.url).href,w:800}],webp:[{src:""+new URL("../assets/default_pfp.B-U90FQ-.webp",import.meta.url).href,w:400},{src:""+new URL("../assets/default_pfp.YKZOynKi.webp",import.meta.url).href,w:800}],png:[{src:""+new URL("../assets/default_pfp.CLaFb9lg.png",import.meta.url).href,w:400},{src:""+new URL("../assets/default_pfp.DhaN7t8E.png",import.meta.url).href,w:800}]},J={src:""+new URL("../assets/default_pfp.DhaN7t8E.png",import.meta.url).href,w:800,h:800},D={sources:I,img:J};var W=R('<div class="member-card__photo svelte-18spak5"><!></div> <div class="member-card__text svelte-18spak5"><h2 class="member-card__text__name svelte-18spak5"> </h2> <h3 class="member-card__text__position svelte-18spak5"> </h3></div>',1);function P(h,e){y(e,!0);let r=j(e,"loading",3,"eager");z(h,{children:(u,C)=>{var f=W(),m=T(f),p=s(m),b=_(()=>{var c;return((c=e.member)==null?void 0:c.imageURL)||D});A(p,{get meta(){return a(b)},get alt(){return e.member.name},sizes:"(max-width: 800px) 400px, 1200px",get loading(){return r()}}),t(m);var l=o(m,2),i=s(l),g=s(i,!0);t(i);var n=o(i,2),w=s(n,!0);t(n),t(l),E(()=>{N(g,e.member.name),N(w,e.member.position)}),L(u,f)},$$slots:{default:!0}}),k()}var X=R('<div class="members__display__row svelte-gc0s9"></div>'),F=R('<!> <main class="about-us svelte-gc0s9"><h1 class="svelte-gc0s9">About Us</h1> <section class="members"><h2 class="svelte-gc0s9">Members</h2> <div class="members__display svelte-gc0s9"><!> <div class="members__display__grid svelte-gc0s9"></div></div></section> <section class="constitution"><h2 class="svelte-gc0s9"><a href="https://docs.google.com/document/d/e/2PACX-1vQb_xmB3PHRb04KgONGDNKJXQOYpmS1fTwMoTvlSS90-4ShiNTttbWVlKm2sBjT2J5xZUsb7_zMjUEy/pub" target="_blank" rel="noopener noreferrer" class="svelte-gc0s9">Constitution</a></h2></section></main>',1);function re(h,e){y(e,!0);let r=H(0,1024);K(()=>{r.init()});let u=_(()=>r.value?0:3);const C="About Us | RHHS StuCo",f="Meet the members of our the 2023-2024 Student Council!";var m=F(),p=T(m),b=_(()=>e.data.members[1].imageURL||D);B(p,{title:C,description:f,url:"https://rhhsstuco.ca/about-us",get image(){return a(b)}});var l=o(p,2),i=o(s(l),2),g=o(s(i),2),n=s(g);{var w=d=>{var v=X();S(v,21,()=>e.data.members.slice(0,a(u)),M,(U,x)=>{P(U,{get member(){return a(x)}})}),t(v),L(d,v)};Q(n,d=>{r.value||d(w)})}var c=o(n,2);S(c,21,()=>e.data.members.slice(a(u)),M,(d,v,U)=>{var x=_(()=>r.value&&U<3?"eager":"lazy");P(d,{get member(){return a(v)},get loading(){return a(x)}})}),t(c),t(g),t(i),O(2),t(l),L(h,m),k()}export{re as component};
