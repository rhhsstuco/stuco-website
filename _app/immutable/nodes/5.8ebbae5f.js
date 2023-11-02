import{s as ie,v as qe,f as M,a as P,g as T,h as N,c as q,d as m,j as p,i as z,z as d,G as oe,w as ze,x as Be,y as Fe,l as W,m as G,n as X,O as Ue,r as ne,u as x,C as le,L as Je,o as Re,H as te,K as Ke,A as pe,e as Z,J as Qe,P as We,E as Ge}from"../chunks/scheduler.06d40262.js";import{S as ce,i as ue,a as Y,t as F,g as ae,c as se,b as fe,d as he,m as de,f as be,e as _e}from"../chunks/index.8e79e426.js";import{e as J}from"../chunks/each.2916032d.js";import{q as De,f as ke}from"../chunks/index.fa2f1e2b.js";import{r as Xe}from"../chunks/index.60e39491.js";import{t as Ze}from"../chunks/theme.store.667e6622.js";import{H as xe}from"../chunks/HomePageEvent.2d94436c.js";function Ee(a){let e,l=a[0].length+"",t;return{c(){e=M("div"),t=W(l),this.h()},l(n){e=T(n,"DIV",{class:!0});var s=N(e);t=G(s,l),s.forEach(m),this.h()},h(){p(e,"class","calendar-day__event-count svelte-1hgf1fj")},m(n,s){z(n,e,s),d(e,t)},p(n,s){s&1&&l!==(l=n[0].length+"")&&X(t,l)},d(n){n&&m(e)}}}function et(a){let e,l,t,n,s,r,o=a[0]&&a[1]&&Ee(a);const i=a[3].default,h=qe(i,a,a[2],null);return{c(){e=M("button"),o&&o.c(),l=P(),h&&h.c(),this.h()},l(_){e=T(_,"BUTTON",{class:!0});var g=N(e);o&&o.l(g),l=q(g),h&&h.l(g),g.forEach(m),this.h()},h(){p(e,"class","calendar-day svelte-1hgf1fj"),e.disabled=t=!a[1]},m(_,g){z(_,e,g),o&&o.m(e,null),d(e,l),h&&h.m(e,null),n=!0,s||(r=oe(e,"click",a[4]),s=!0)},p(_,[g]){_[0]&&_[1]?o?o.p(_,g):(o=Ee(_),o.c(),o.m(e,l)):o&&(o.d(1),o=null),h&&h.p&&(!n||g&4)&&ze(h,i,_,_[2],n?Fe(i,_[2],g,null):Be(_[2]),null),(!n||g&2&&t!==(t=!_[1]))&&(e.disabled=t)},i(_){n||(Y(h,_),n=!0)},o(_){F(h,_),n=!1},d(_){_&&m(e),o&&o.d(),h&&h.d(_),s=!1,r()}}}function tt(a,e,l){let{$$slots:t={},$$scope:n}=e,{events:s}=e,{clickable:r=!1}=e;function o(i){Ue.call(this,a,i)}return a.$$set=i=>{"events"in i&&l(0,s=i.events),"clickable"in i&&l(1,r=i.clickable),"$$scope"in i&&l(2,n=i.$$scope)},[s,r,n,t,o]}class lt extends ce{constructor(e){super(),ue(this,e,tt,et,ie,{events:0,clickable:1})}}function ye(a,e,l){const t=a.slice();return t[4]=e[l],t}function Me(a){let e,l=`No events on this day.\r
				`;return{c(){e=M("div"),e.textContent=l,this.h()},l(t){e=T(t,"DIV",{class:!0,"data-svelte-h":!0}),ne(e)!=="svelte-1blygwu"&&(e.textContent=l),this.h()},h(){p(e,"class","calendar-detail__no-events svelte-1udmu1t")},m(t,n){z(t,e,n)},p:x,d(t){t&&m(e)}}}function Te(a){let e,l,t=a[4].name+"",n,s,r,o=a[4].description+"",i,h;return{c(){e=M("div"),l=M("h4"),n=W(t),s=P(),r=M("p"),i=W(o),h=P(),this.h()},l(_){e=T(_,"DIV",{class:!0});var g=N(e);l=T(g,"H4",{class:!0});var O=N(l);n=G(O,t),O.forEach(m),s=q(g),r=T(g,"P",{class:!0});var L=N(r);i=G(L,o),L.forEach(m),h=q(g),g.forEach(m),this.h()},h(){p(l,"class","svelte-1udmu1t"),p(r,"class","svelte-1udmu1t"),p(e,"class","calendar-detail__content__events__event svelte-1udmu1t")},m(_,g){z(_,e,g),d(e,l),d(l,n),d(e,s),d(e,r),d(r,i),d(e,h)},p(_,g){g&2&&t!==(t=_[4].name+"")&&X(n,t),g&2&&o!==(o=_[4].description+"")&&X(i,o)},d(_){_&&m(e)}}}function nt(a){let e,l,t,n,s="×",r,o,i=a[0].toLocaleDateString("en-us",{year:"numeric",month:"long",day:"numeric"})+"",h,_,g,O,L,V=J(a[1]),I=[];for(let C=0;C<V.length;C+=1)I[C]=Te(ye(a,V,C));let E=null;return V.length||(E=Me()),{c(){e=M("div"),l=M("div"),t=M("div"),n=M("button"),n.textContent=s,r=P(),o=M("h3"),h=W(i),_=P(),g=M("div");for(let C=0;C<I.length;C+=1)I[C].c();E&&E.c(),this.h()},l(C){e=T(C,"DIV",{class:!0});var D=N(e);l=T(D,"DIV",{class:!0});var y=N(l);t=T(y,"DIV",{class:!0});var H=N(t);n=T(H,"BUTTON",{class:!0,"data-svelte-h":!0}),ne(n)!=="svelte-1p9hkmf"&&(n.textContent=s),r=q(H),o=T(H,"H3",{class:!0});var A=N(o);h=G(A,i),A.forEach(m),H.forEach(m),_=q(y),g=T(y,"DIV",{class:!0});var f=N(g);for(let U=0;U<I.length;U+=1)I[U].l(f);E&&E.l(f),f.forEach(m),y.forEach(m),D.forEach(m),this.h()},h(){p(n,"class","svelte-1udmu1t"),p(o,"class","svelte-1udmu1t"),p(t,"class","calendar-detail__content__heading svelte-1udmu1t"),p(g,"class","calendar-detail__content__events svelte-1udmu1t"),p(l,"class","calendar-detail__content svelte-1udmu1t"),p(e,"class","calendar-detail svelte-1udmu1t")},m(C,D){z(C,e,D),d(e,l),d(l,t),d(t,n),d(t,r),d(t,o),d(o,h),d(l,_),d(l,g);for(let y=0;y<I.length;y+=1)I[y]&&I[y].m(g,null);E&&E.m(g,null),O||(L=oe(n,"click",a[2]),O=!0)},p(C,[D]){if(D&1&&i!==(i=C[0].toLocaleDateString("en-us",{year:"numeric",month:"long",day:"numeric"})+"")&&X(h,i),D&2){V=J(C[1]);let y;for(y=0;y<V.length;y+=1){const H=ye(C,V,y);I[y]?I[y].p(H,D):(I[y]=Te(H),I[y].c(),I[y].m(g,null))}for(;y<I.length;y+=1)I[y].d(1);I.length=V.length,!V.length&&E?E.p(C,D):V.length?E&&(E.d(1),E=null):(E=Me(),E.c(),E.m(g,null))}},i:x,o:x,d(C){C&&m(e),le(I,C),E&&E.d(),O=!1,L()}}}function at(a,e,l){let{date:t}=e,{events:n}=e;const s=Je();function r(){s("close")}return a.$$set=o=>{"date"in o&&l(0,t=o.date),"events"in o&&l(1,n=o.events)},[t,n,r]}class st extends ce{constructor(e){super(),ue(this,e,at,nt,ie,{date:0,events:1})}}const Ce="(prefers-reduced-motion: reduce)";let rt=Xe(!1,a=>{Re(()=>{const e=window.matchMedia(Ce).matches;a(e);const l=n=>{a(n.matches)},t=window.matchMedia(Ce);return t.addEventListener("change",l),()=>{t.removeEventListener("change",l)}})});function Ie(a,e,l){const t=a.slice();return t[20]=e[l],t}function we(a,e,l){const t=a.slice();return t[23]=e[l],t[25]=l,t}function Se(a,e,l){const t=a.slice();t[23]=e[l],t[30]=l;const n=t[25]*ve+t[30]-t[4]+1;t[26]=n;const s=new Date(t[5],t[2],t[26]);t[27]=s;const r=t[26]>0&&t[26]<=t[3][t[2]];return t[28]=r,t}function Ne(a,e,l){const t=a.slice();return t[31]=e[l],t}function Ve(a){let e,l=a[31]+"",t;return{c(){e=M("div"),t=W(l),this.h()},l(n){e=T(n,"DIV",{class:!0});var s=N(e);t=G(s,l),s.forEach(m),this.h()},h(){p(e,"class","svelte-1oilubl")},m(n,s){z(n,e,s),d(e,t)},p:x,d(n){n&&m(e)}}}function ot(a){let e;return{c(){e=M("div")},l(l){e=T(l,"DIV",{}),N(e).forEach(m)},m(l,t){z(l,e,t)},p:x,i:x,o:x,d(l){l&&m(e)}}}function it(a){let e,l;return e=new lt({props:{events:a[8].get(a[27].toDateString()),clickable:a[28],$$slots:{default:[ct]},$$scope:{ctx:a}}}),e.$on("click",function(){We(a[13](a[27]))&&a[13](a[27]).apply(this,arguments)}),{c(){fe(e.$$.fragment)},l(t){he(e.$$.fragment,t)},m(t,n){de(e,t,n),l=!0},p(t,n){a=t;const s={};n[0]&308&&(s.events=a[8].get(a[27].toDateString())),n[0]&28&&(s.clickable=a[28]),n[0]&16|n[1]&8&&(s.$$scope={dirty:n,ctx:a}),e.$set(s)},i(t){l||(Y(e.$$.fragment,t),l=!0)},o(t){F(e.$$.fragment,t),l=!1},d(t){_e(e,t)}}}function ct(a){let e,l=a[26]+"",t;return{c(){e=M("span"),t=W(l),this.h()},l(n){e=T(n,"SPAN",{class:!0});var s=N(e);t=G(s,l),s.forEach(m),this.h()},h(){p(e,"class","calendar__body__day svelte-1oilubl")},m(n,s){z(n,e,s),d(e,t)},p(n,s){s[0]&16&&l!==(l=n[26]+"")&&X(t,l)},d(n){n&&m(e)}}}function He(a){let e,l,t,n;const s=[it,ot],r=[];function o(i,h){return i[28]?0:1}return e=o(a),l=r[e]=s[e](a),{c(){l.c(),t=Z()},l(i){l.l(i),t=Z()},m(i,h){r[e].m(i,h),z(i,t,h),n=!0},p(i,h){let _=e;e=o(i),e===_?r[e].p(i,h):(ae(),F(r[_],1,1,()=>{r[_]=null}),se(),l=r[e],l?l.p(i,h):(l=r[e]=s[e](i),l.c()),Y(l,1),l.m(t.parentNode,t))},i(i){n||(Y(l),n=!0)},o(i){F(l),n=!1},d(i){i&&m(t),r[e].d(i)}}}function Ae(a){let e,l,t=J({length:ve}),n=[];for(let r=0;r<t.length;r+=1)n[r]=He(Se(a,t,r));const s=r=>F(n[r],1,1,()=>{n[r]=null});return{c(){for(let r=0;r<n.length;r+=1)n[r].c();e=Z()},l(r){for(let o=0;o<n.length;o+=1)n[o].l(r);e=Z()},m(r,o){for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(r,o);z(r,e,o),l=!0},p(r,o){if(o[0]&8508){t=J({length:ve});let i;for(i=0;i<t.length;i+=1){const h=Se(r,t,i);n[i]?(n[i].p(h,o),Y(n[i],1)):(n[i]=He(h),n[i].c(),Y(n[i],1),n[i].m(e.parentNode,e))}for(ae(),i=t.length;i<n.length;i+=1)s(i);se()}},i(r){if(!l){for(let o=0;o<t.length;o+=1)Y(n[o]);l=!0}},o(r){n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)F(n[o]);l=!1},d(r){r&&m(e),le(n,r)}}}function Oe(a){let e,l=a[20].name+"",t,n,s;return{c(){e=M("div"),t=W(l),n=P(),this.h()},l(r){e=T(r,"DIV",{class:!0,style:!0});var o=N(e);t=G(o,l),n=q(o),o.forEach(m),this.h()},h(){p(e,"class","calendar__body__event svelte-1oilubl"),p(e,"style",s=`
						grid-row: ${Math.ceil((a[20].startDate.getDate()+a[4])/7)} / ${Math.ceil((a[20].endDate.getDate()+a[4])/7)};
						grid-column: ${a[20].startDate.getDay()+1} / ${a[20].endDate.getDay()+2};
					`)},m(r,o){z(r,e,o),d(e,t),d(e,n)},p(r,o){o[0]&2&&l!==(l=r[20].name+"")&&X(t,l),o[0]&18&&s!==(s=`
						grid-row: ${Math.ceil((r[20].startDate.getDate()+r[4])/7)} / ${Math.ceil((r[20].endDate.getDate()+r[4])/7)};
						grid-column: ${r[20].startDate.getDay()+1} / ${r[20].endDate.getDay()+2};
					`)&&p(e,"style",s)},d(r){r&&m(e)}}}function Le(a){let e=a[20].startDate.getMonth()===a[2]&&a[20].startDate.getFullYear()===a[5],l,t=e&&Oe(a);return{c(){t&&t.c(),l=Z()},l(n){t&&t.l(n),l=Z()},m(n,s){t&&t.m(n,s),z(n,l,s)},p(n,s){s[0]&38&&(e=n[20].startDate.getMonth()===n[2]&&n[20].startDate.getFullYear()===n[5]),e?t?t.p(n,s):(t=Oe(n),t.c(),t.m(l.parentNode,l)):t&&(t.d(1),t=null)},d(n){n&&m(l),t&&t.d(n)}}}function $e(a){let e,l,t,n;return l=new st({props:{date:a[6],events:a[8].get(a[6].toDateString())||[]}}),l.$on("close",a[16]),{c(){e=M("div"),fe(l.$$.fragment),this.h()},l(s){e=T(s,"DIV",{class:!0});var r=N(e);he(l.$$.fragment,r),r.forEach(m),this.h()},h(){p(e,"class","calendar-detail svelte-1oilubl")},m(s,r){z(s,e,r),de(l,e,null),n=!0},p(s,r){a=s;const o={};r[0]&64&&(o.date=a[6]),r[0]&320&&(o.events=a[8].get(a[6].toDateString())||[]),l.$set(o)},i(s){n||(Y(l.$$.fragment,s),s&&Qe(()=>{n&&(t||(t=be(e,ke,{x:250,opacity:1,duration:a[10]?0:250,easing:De},!0)),t.run(1))}),n=!0)},o(s){F(l.$$.fragment,s),s&&(t||(t=be(e,ke,{x:250,opacity:1,duration:a[10]?0:250,easing:De},!1)),t.run(0)),n=!1},d(s){s&&m(e),_e(l),s&&t&&t.end()}}}function ut(a){let e,l,t,n,s='<i class="ri-arrow-left-s-line svelte-1oilubl"></i>',r,o,i=a[11][a[2]]+"",h,_,g,O,L,V='<i class="ri-arrow-right-s-line svelte-1oilubl"></i>',I,E,C,D,y,H,A,f,U,k=J(a[12]),b=[];for(let u=0;u<k.length;u+=1)b[u]=Ve(Ne(a,k,u));let S=J({length:a[7]}),v=[];for(let u=0;u<S.length;u+=1)v[u]=Ae(we(a,S,u));const Q=u=>F(v[u],1,1,()=>{v[u]=null});let K=J(a[1]),j=[];for(let u=0;u<K.length;u+=1)j[u]=Le(Ie(a,K,u));let $=a[6]&&$e(a);return{c(){e=M("div"),l=M("div"),t=M("div"),n=M("button"),n.innerHTML=s,r=P(),o=M("h2"),h=W(i),_=P(),g=W(a[5]),O=P(),L=M("button"),L.innerHTML=V,I=P(),E=M("div");for(let u=0;u<b.length;u+=1)b[u].c();C=P(),D=M("div");for(let u=0;u<v.length;u+=1)v[u].c();y=P();for(let u=0;u<j.length;u+=1)j[u].c();H=P(),$&&$.c(),this.h()},l(u){e=T(u,"DIV",{class:!0});var w=N(e);l=T(w,"DIV",{class:!0});var c=N(l);t=T(c,"DIV",{class:!0});var B=N(t);n=T(B,"BUTTON",{"aria-label":!0,class:!0,"data-svelte-h":!0}),ne(n)!=="svelte-106cb2h"&&(n.innerHTML=s),r=q(B),o=T(B,"H2",{class:!0});var re=N(o);h=G(re,i),_=q(re),g=G(re,a[5]),re.forEach(m),O=q(B),L=T(B,"BUTTON",{"aria-label":!0,class:!0,"data-svelte-h":!0}),ne(L)!=="svelte-1rojn32"&&(L.innerHTML=V),B.forEach(m),I=q(c),E=T(c,"DIV",{class:!0});var ge=N(E);for(let R=0;R<b.length;R+=1)b[R].l(ge);ge.forEach(m),c.forEach(m),C=q(w),D=T(w,"DIV",{class:!0});var ee=N(D);for(let R=0;R<v.length;R+=1)v[R].l(ee);y=q(ee);for(let R=0;R<j.length;R+=1)j[R].l(ee);H=q(ee),$&&$.l(ee),ee.forEach(m),w.forEach(m),this.h()},h(){p(n,"aria-label","Previous month"),p(n,"class","svelte-1oilubl"),p(o,"class","svelte-1oilubl"),p(L,"aria-label","Next month"),p(L,"class","svelte-1oilubl"),p(t,"class","calendar__header__date svelte-1oilubl"),p(E,"class","calendar__header__days svelte-1oilubl"),p(l,"class","calendar__header svelte-1oilubl"),p(D,"class","calendar__body svelte-1oilubl"),te(D,"selected-date",a[6]),te(D,"dark-mode",a[9]==="dark"),te(D,"light-mode",a[9]==="light"),p(e,"class","calendar svelte-1oilubl")},m(u,w){z(u,e,w),d(e,l),d(l,t),d(t,n),d(t,r),d(t,o),d(o,h),d(o,_),d(o,g),d(t,O),d(t,L),d(l,I),d(l,E);for(let c=0;c<b.length;c+=1)b[c]&&b[c].m(E,null);d(e,C),d(e,D);for(let c=0;c<v.length;c+=1)v[c]&&v[c].m(D,null);d(D,y);for(let c=0;c<j.length;c+=1)j[c]&&j[c].m(D,null);d(D,H),$&&$.m(D,null),A=!0,f||(U=[oe(n,"click",a[14]),oe(L,"click",a[15])],f=!0)},p(u,w){if((!A||w[0]&4)&&i!==(i=u[11][u[2]]+"")&&X(h,i),(!A||w[0]&32)&&X(g,u[5]),w[0]&4096){k=J(u[12]);let c;for(c=0;c<k.length;c+=1){const B=Ne(u,k,c);b[c]?b[c].p(B,w):(b[c]=Ve(B),b[c].c(),b[c].m(E,null))}for(;c<b.length;c+=1)b[c].d(1);b.length=k.length}if(w[0]&8636){S=J({length:u[7]});let c;for(c=0;c<S.length;c+=1){const B=we(u,S,c);v[c]?(v[c].p(B,w),Y(v[c],1)):(v[c]=Ae(B),v[c].c(),Y(v[c],1),v[c].m(D,y))}for(ae(),c=S.length;c<v.length;c+=1)Q(c);se()}if(w[0]&54){K=J(u[1]);let c;for(c=0;c<K.length;c+=1){const B=Ie(u,K,c);j[c]?j[c].p(B,w):(j[c]=Le(B),j[c].c(),j[c].m(D,H))}for(;c<j.length;c+=1)j[c].d(1);j.length=K.length}u[6]?$?($.p(u,w),w[0]&64&&Y($,1)):($=$e(u),$.c(),Y($,1),$.m(D,null)):$&&(ae(),F($,1,1,()=>{$=null}),se()),(!A||w[0]&64)&&te(D,"selected-date",u[6]),(!A||w[0]&512)&&te(D,"dark-mode",u[9]==="dark"),(!A||w[0]&512)&&te(D,"light-mode",u[9]==="light")},i(u){if(!A){for(let w=0;w<S.length;w+=1)Y(v[w]);Y($),A=!0}},o(u){v=v.filter(Boolean);for(let w=0;w<v.length;w+=1)F(v[w]);F($),A=!1},d(u){u&&m(e),le(b,u),le(v,u),le(j,u),$&&$.d(),f=!1,Ke(U)}}}const ve=7;function ft(a,e){const l=new Map;return a.forEach(t=>{const n=e(t);for(const s of n){const r=l.get(s)||[];r.push(t),l.set(s,r)}}),l}function ht(a){return a%4===0&&a%100!==0&&a%400!==0||a%100===0&&a%400===0}function dt(a){return ht(a)?29:28}function _t(a,e,l){let t,n,s,r,o,i,h,_;pe(a,Ze,f=>l(9,h=f)),pe(a,rt,f=>l(10,_=f));let{events:g}=e;const O=1e3*60*60*24;function L(f,U){return(U.getTime()-f.getTime())/O}const V=["January","February","March","April","May","June","July","August","September","October","November","December"],I=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];let{date:E=new Date}=e,C=null;const D=f=>()=>l(6,C=f),y=()=>l(0,E=new Date(s,n-1,1)),H=()=>l(0,E=new Date(s,n+1,1)),A=()=>l(6,C=null);return a.$$set=f=>{"events"in f&&l(1,g=f.events),"date"in f&&l(0,E=f.date)},a.$$.update=()=>{a.$$.dirty[0]&2&&l(8,t=ft(g,f=>{const U=Array(L(f.startDate,f.endDate)+1).fill(0),k=f.startDate.getFullYear(),b=f.startDate.getMonth(),S=f.startDate.getDate();return U.map((v,Q)=>new Date(k,b,S+Q).toDateString())})),a.$$.dirty[0]&1&&l(2,n=E.getMonth()),a.$$.dirty[0]&1&&l(5,s=E.getFullYear()),a.$$.dirty[0]&32&&l(3,r=[31,dt(s),31,30,31,30,31,31,30,31,30,31]),a.$$.dirty[0]&36&&l(4,o=(new Date(s,n,1).getDay()%7+1-1+7)%7),a.$$.dirty[0]&28&&l(7,i=Math.ceil((o+r[n])/7))},[E,g,n,r,o,s,C,i,t,h,_,V,I,D,y,H,A]}class mt extends ce{constructor(e){super(),ue(this,e,_t,ut,ie,{events:1,date:0},null,[-1,-1])}}function Ye(a,e,l){const t=a.slice();return t[2]=e[l],t}function vt(a){let e;return{c(){e=M("meta"),this.h()},l(l){e=T(l,"META",{property:!0,content:!0}),this.h()},h(){p(e,"property","og:url"),p(e,"content","https://rhhsstuco.ca/events")},m(l,t){z(l,e,t)},d(l){l&&m(e)}}}function je(a){let e,l;return e=new xe({props:{event:a[2]}}),{c(){fe(e.$$.fragment)},l(t){he(e.$$.fragment,t)},m(t,n){de(e,t,n),l=!0},p(t,n){const s={};n&2&&(s.event=t[2]),e.$set(s)},i(t){l||(Y(e.$$.fragment,t),l=!0)},o(t){F(e.$$.fragment,t),l=!1},d(t){_e(e,t)}}}function gt(a){let e,l,t,n,s,r,o,i,h,_="Events",g,O,L,V,I,E="Events This Month",C,D,y;document.title=e=me;let H=vt();O=new mt({props:{events:a[0].events}});let A=J(a[1]),f=[];for(let k=0;k<A.length;k+=1)f[k]=je(Ye(a,A,k));const U=k=>F(f[k],1,1,()=>{f[k]=null});return{c(){l=M("meta"),t=M("meta"),n=M("meta"),s=M("meta"),H&&H.c(),r=Z(),o=P(),i=M("main"),h=M("h1"),h.textContent=_,g=P(),fe(O.$$.fragment),L=P(),V=M("section"),I=M("h2"),I.textContent=E,C=P(),D=M("div");for(let k=0;k<f.length;k+=1)f[k].c();this.h()},l(k){const b=Ge("svelte-efuetz",document.head);l=T(b,"META",{name:!0,content:!0}),t=T(b,"META",{property:!0,content:!0}),n=T(b,"META",{property:!0,content:!0}),s=T(b,"META",{property:!0,content:!0}),H&&H.l(b),r=Z(),b.forEach(m),o=q(k),i=T(k,"MAIN",{class:!0});var S=N(i);h=T(S,"H1",{class:!0,"data-svelte-h":!0}),ne(h)!=="svelte-xtcg81"&&(h.textContent=_),g=q(S),he(O.$$.fragment,S),L=q(S),V=T(S,"SECTION",{class:!0});var v=N(V);I=T(v,"H2",{class:!0,"data-svelte-h":!0}),ne(I)!=="svelte-16zvu15"&&(I.textContent=E),C=q(v),D=T(v,"DIV",{class:!0});var Q=N(D);for(let K=0;K<f.length;K+=1)f[K].l(Q);Q.forEach(m),v.forEach(m),S.forEach(m),this.h()},h(){p(l,"name","description"),p(l,"content",Pe),p(t,"property","og:title"),p(t,"content",me),p(n,"property","og:description"),p(n,"content",Pe),p(s,"property","og:type"),p(s,"content","website"),p(h,"class","svelte-14qjszf"),p(I,"class","svelte-14qjszf"),p(D,"class","events__list svelte-14qjszf"),p(V,"class","month-events svelte-14qjszf"),p(i,"class","svelte-14qjszf")},m(k,b){d(document.head,l),d(document.head,t),d(document.head,n),d(document.head,s),H&&H.m(document.head,null),d(document.head,r),z(k,o,b),z(k,i,b),d(i,h),d(i,g),de(O,i,null),d(i,L),d(i,V),d(V,I),d(V,C),d(V,D);for(let S=0;S<f.length;S+=1)f[S]&&f[S].m(D,null);y=!0},p(k,[b]){(!y||b&0)&&e!==(e=me)&&(document.title=e);const S={};if(b&1&&(S.events=k[0].events),O.$set(S),b&2){A=J(k[1]);let v;for(v=0;v<A.length;v+=1){const Q=Ye(k,A,v);f[v]?(f[v].p(Q,b),Y(f[v],1)):(f[v]=je(Q),f[v].c(),Y(f[v],1),f[v].m(D,null))}for(ae(),v=A.length;v<f.length;v+=1)U(v);se()}},i(k){if(!y){Y(O.$$.fragment,k);for(let b=0;b<A.length;b+=1)Y(f[b]);y=!0}},o(k){F(O.$$.fragment,k),f=f.filter(Boolean);for(let b=0;b<f.length;b+=1)F(f[b]);y=!1},d(k){k&&(m(o),m(i)),m(l),m(t),m(n),m(s),H&&H.d(k),m(r),_e(O),le(f,k)}}}const me="Events | RHHS StuCo",Pe="Stay up to date on all school events here!";function pt(a,e,l){let{data:t}=e,n;return a.$$set=s=>{"data"in s&&l(0,t=s.data)},a.$$.update=()=>{if(a.$$.dirty&1){const s=new Set;l(1,n=t.events.filter(r=>r.startDate.getMonth()==new Date().getMonth()).filter(r=>s.has(r.name)?!1:(s.add(r.name),!0)))}},[t,n]}class Ct extends ce{constructor(e){super(),ue(this,e,pt,gt,ie,{data:0})}}export{Ct as component};