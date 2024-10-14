import{o as Fe,s as he,l as Ue,e as M,a as L,c as C,b as N,g as O,f as m,m as D,i as A,h as _,K as ue,u as Re,p as Je,q as Qe,t as K,d as W,j as Z,Q as je,I as X,n as ee,y as ne,O as ze,H as Ke,r as x,v as We,L as le,A as Ge,k as ge,N as Xe,R as Ze}from"../chunks/scheduler.iZ0PAmE1.js";import{S as de,i as _e,t as P,b as U,g as se,e as ae,c as re,a as ie,m as oe,f as pe,d as ce}from"../chunks/index.wh6tflNQ.js";import{e as Q,M as xe}from"../chunks/Metadata.k6IZ61aw.js";import{r as et}from"../chunks/index.7_DUXvRV.js";import{q as be,f as ke}from"../chunks/index.nw_Q9q6N.js";import{t as tt}from"../chunks/theme.store.wy7X5AgF.js";import{H as lt}from"../chunks/HomePageEvent.mCikqjuQ.js";const De="(prefers-reduced-motion: reduce)",nt=et(!1,s=>{Fe(()=>{const t=window.matchMedia(De).matches;s(t);const n=l=>{s(l.matches)},e=window.matchMedia(De);return e.addEventListener("change",n),()=>{e.removeEventListener("change",n)}})});function Ee(s){let t,n,e=s[2]!=0&&ye(s),l=s[1]!=0&&Me(s);return{c(){t=M("div"),e&&e.c(),n=L(),l&&l.c(),this.h()},l(a){t=C(a,"DIV",{class:!0});var r=N(t);e&&e.l(r),n=O(r),l&&l.l(r),r.forEach(m),this.h()},h(){D(t,"class","calendar-day__event-count svelte-92mx0f")},m(a,r){A(a,t,r),e&&e.m(t,null),_(t,n),l&&l.m(t,null)},p(a,r){a[2]!=0?e?e.p(a,r):(e=ye(a),e.c(),e.m(t,n)):e&&(e.d(1),e=null),a[1]!=0?l?l.p(a,r):(l=Me(a),l.c(),l.m(t,null)):l&&(l.d(1),l=null)},d(a){a&&m(t),e&&e.d(),l&&l.d()}}}function ye(s){let t,n;return{c(){t=M("div"),n=K(s[2]),this.h()},l(e){t=C(e,"DIV",{style:!0,class:!0});var l=N(t);n=W(l,s[2]),l.forEach(m),this.h()},h(){D(t,"style","--color-badge: var(--color-badge-school);"),D(t,"class","svelte-92mx0f")},m(e,l){A(e,t,l),_(t,n)},p(e,l){l&4&&Z(n,e[2])},d(e){e&&m(t)}}}function Me(s){let t,n;return{c(){t=M("div"),n=K(s[1]),this.h()},l(e){t=C(e,"DIV",{style:!0,class:!0});var l=N(t);n=W(l,s[1]),l.forEach(m),this.h()},h(){D(t,"style","--color-badge: var(--color-badge-club);"),D(t,"class","svelte-92mx0f")},m(e,l){A(e,t,l),_(t,n)},p(e,l){l&2&&Z(n,e[1])},d(e){e&&m(t)}}}function st(s){let t,n,e,l,a,r,i=s[0]&&Ee(s);const o=s[5].default,v=Ue(o,s,s[4],null);return{c(){t=M("button"),i&&i.c(),n=L(),v&&v.c(),this.h()},l(f){t=C(f,"BUTTON",{class:!0});var k=N(t);i&&i.l(k),n=O(k),v&&v.l(k),k.forEach(m),this.h()},h(){D(t,"class","calendar-day svelte-92mx0f"),t.disabled=e=!s[0]},m(f,k){A(f,t,k),i&&i.m(t,null),_(t,n),v&&v.m(t,null),l=!0,a||(r=ue(t,"click",s[6]),a=!0)},p(f,[k]){f[0]?i?i.p(f,k):(i=Ee(f),i.c(),i.m(t,n)):i&&(i.d(1),i=null),v&&v.p&&(!l||k&16)&&Re(v,o,f,f[4],l?Qe(o,f[4],k,null):Je(f[4]),null),(!l||k&1&&e!==(e=!f[0]))&&(t.disabled=e)},i(f){l||(P(v,f),l=!0)},o(f){U(v,f),l=!1},d(f){f&&m(t),i&&i.d(),v&&v.d(f),a=!1,r()}}}function at(s){if(!s)return[0,0];let t=0,n=0;for(const e of s)e.type==="school"?t++:n++;return[t,n]}function rt(s,t,n){let e,l,{$$slots:a={},$$scope:r}=t,{events:i}=t,{clickable:o=!1}=t;function v(f){je.call(this,s,f)}return s.$$set=f=>{"events"in f&&n(3,i=f.events),"clickable"in f&&n(0,o=f.clickable),"$$scope"in f&&n(4,r=f.$$scope)},s.$$.update=()=>{s.$$.dirty&8&&n(2,[e,l]=at(i),e,(n(1,l),n(3,i)))},[o,l,e,i,r,a,v]}class it extends de{constructor(t){super(),_e(this,t,rt,st,he,{events:3,clickable:0})}}function Ce(s,t,n){const e=s.slice();return e[4]=t[n],e}function Ie(s){let t,n=`No events on this day.\r
				`;return{c(){t=M("div"),t.textContent=n,this.h()},l(e){t=C(e,"DIV",{class:!0,"data-svelte-h":!0}),X(t)!=="svelte-1blygwu"&&(t.textContent=n),this.h()},h(){D(t,"class","calendar-detail__no-events svelte-1t9pmp9")},m(e,l){A(e,t,l)},p:ee,d(e){e&&m(t)}}}function ot(s){let t,n=s[4].description+"",e;return{c(){t=new Ke(!1),e=x(),this.h()},l(l){t=We(l,!1),e=x(),this.h()},h(){t.a=e},m(l,a){t.m(n,l,a),A(l,e,a)},p(l,a){a&2&&n!==(n=l[4].description+"")&&t.p(n)},d(l){l&&(m(e),t.d())}}}function ct(s){let t=s[4].description+"",n;return{c(){n=K(t)},l(e){n=W(e,t)},m(e,l){A(e,n,l)},p(e,l){l&2&&t!==(t=e[4].description+"")&&Z(n,t)},d(e){e&&m(n)}}}function Se(s){let t,n,e=s[4].name+"",l,a,r,i,o;function v(H,E){return H[4].useHTML?ot:ct}let f=v(s),k=f(s);return{c(){t=M("div"),n=M("h4"),l=K(e),r=L(),i=M("p"),k.c(),o=L(),this.h()},l(H){t=C(H,"DIV",{class:!0});var E=N(t);n=C(E,"H4",{style:!0,class:!0});var Y=N(n);l=W(Y,e),Y.forEach(m),r=O(E),i=C(E,"P",{class:!0});var B=N(i);k.l(B),B.forEach(m),o=O(E),E.forEach(m),this.h()},h(){D(n,"style",a=`--color-badge: var(--color-badge-${s[4].type})`),D(n,"class","svelte-1t9pmp9"),D(i,"class","svelte-1t9pmp9"),D(t,"class","calendar-detail__content__events__event svelte-1t9pmp9")},m(H,E){A(H,t,E),_(t,n),_(n,l),_(t,r),_(t,i),k.m(i,null),_(t,o)},p(H,E){E&2&&e!==(e=H[4].name+"")&&Z(l,e),E&2&&a!==(a=`--color-badge: var(--color-badge-${H[4].type})`)&&D(n,"style",a),f===(f=v(H))&&k?k.p(H,E):(k.d(1),k=f(H),k&&(k.c(),k.m(i,null)))},d(H){H&&m(t),k.d()}}}function ft(s){let t,n,e,l,a,r="×",i,o,v="School",f,k,H="Club",E,Y,B=s[0].toLocaleDateString("en-us",{year:"numeric",month:"long",day:"numeric"})+"",I,F,u,J,p,b=Q(s[1]),d=[];for(let y=0;y<b.length;y+=1)d[y]=Se(Ce(s,b,y));let g=null;return b.length||(g=Ie()),{c(){t=M("div"),n=M("div"),e=M("div"),l=M("div"),a=M("button"),a.textContent=r,i=L(),o=M("span"),o.textContent=v,f=L(),k=M("span"),k.textContent=H,E=L(),Y=M("h3"),I=K(B),F=L(),u=M("div");for(let y=0;y<d.length;y+=1)d[y].c();g&&g.c(),this.h()},l(y){t=C(y,"DIV",{class:!0});var w=N(t);n=C(w,"DIV",{class:!0});var T=N(n);e=C(T,"DIV",{class:!0});var S=N(e);l=C(S,"DIV",{class:!0});var z=N(l);a=C(z,"BUTTON",{class:!0,"data-svelte-h":!0}),X(a)!=="svelte-1rcr12n"&&(a.textContent=r),i=O(z),o=C(z,"SPAN",{class:!0,"data-svelte-h":!0}),X(o)!=="svelte-1ydii0m"&&(o.textContent=v),f=O(z),k=C(z,"SPAN",{class:!0,"data-svelte-h":!0}),X(k)!=="svelte-1d9zfca"&&(k.textContent=H),z.forEach(m),E=O(S),Y=C(S,"H3",{class:!0});var G=N(Y);I=W(G,B),G.forEach(m),S.forEach(m),F=O(T),u=C(T,"DIV",{class:!0});var $=N(u);for(let V=0;V<d.length;V+=1)d[V].l($);g&&g.l($),$.forEach(m),T.forEach(m),w.forEach(m),this.h()},h(){D(a,"class","svelte-1t9pmp9"),D(o,"class","school-event svelte-1t9pmp9"),D(k,"class","club-event svelte-1t9pmp9"),D(l,"class","calendar-detail__content__heading__header svelte-1t9pmp9"),D(Y,"class","svelte-1t9pmp9"),D(e,"class","calendar-detail__content__heading svelte-1t9pmp9"),D(u,"class","calendar-detail__content__events svelte-1t9pmp9"),D(n,"class","calendar-detail__content svelte-1t9pmp9"),D(t,"class","calendar-detail svelte-1t9pmp9")},m(y,w){A(y,t,w),_(t,n),_(n,e),_(e,l),_(l,a),_(l,i),_(l,o),_(l,f),_(l,k),_(e,E),_(e,Y),_(Y,I),_(n,F),_(n,u);for(let T=0;T<d.length;T+=1)d[T]&&d[T].m(u,null);g&&g.m(u,null),J||(p=ue(a,"click",s[2]),J=!0)},p(y,[w]){if(w&1&&B!==(B=y[0].toLocaleDateString("en-us",{year:"numeric",month:"long",day:"numeric"})+"")&&Z(I,B),w&2){b=Q(y[1]);let T;for(T=0;T<b.length;T+=1){const S=Ce(y,b,T);d[T]?d[T].p(S,w):(d[T]=Se(S),d[T].c(),d[T].m(u,null))}for(;T<d.length;T+=1)d[T].d(1);d.length=b.length,!b.length&&g?g.p(y,w):b.length?g&&(g.d(1),g=null):(g=Ie(),g.c(),g.m(u,null))}},i:ee,o:ee,d(y){y&&m(t),ne(d,y),g&&g.d(),J=!1,p()}}}function ut(s,t,n){let{date:e}=t,{events:l}=t;const a=ze();function r(){a("close")}return s.$$set=i=>{"date"in i&&n(0,e=i.date),"events"in i&&n(1,l=i.events)},[e,l,r]}class ht extends de{constructor(t){super(),_e(this,t,ut,ft,he,{date:0,events:1})}}function we(s,t,n){const e=s.slice();return e[19]=t[n],e}function Te(s,t,n){const e=s.slice();return e[22]=t[n],e[24]=n,e}function qe(s,t,n){const e=s.slice();e[22]=t[n],e[29]=n;const l=e[24]*ve+e[29]-e[4]+1;e[25]=l;const a=new Date(e[5],e[2],e[25]);e[26]=a;const r=e[25]>0&&e[25]<=e[3][e[2]];return e[27]=r,e}function Ne(s,t,n){const e=s.slice();return e[30]=t[n],e}function He(s){let t,n=s[30]+"",e;return{c(){t=M("div"),e=K(n),this.h()},l(l){t=C(l,"DIV",{class:!0});var a=N(t);e=W(a,n),a.forEach(m),this.h()},h(){D(t,"class","svelte-qikc2d")},m(l,a){A(l,t,a),_(t,e)},p:ee,d(l){l&&m(t)}}}function dt(s){let t;return{c(){t=M("div")},l(n){t=C(n,"DIV",{}),N(t).forEach(m)},m(n,e){A(n,t,e)},p:ee,i:ee,o:ee,d(n){n&&m(t)}}}function _t(s){let t,n;return t=new it({props:{events:s[8].get(s[26].toDateString()),clickable:s[27],$$slots:{default:[vt]},$$scope:{ctx:s}}}),t.$on("click",function(){Ze(s[13](s[26]))&&s[13](s[26]).apply(this,arguments)}),{c(){re(t.$$.fragment)},l(e){ie(t.$$.fragment,e)},m(e,l){oe(t,e,l),n=!0},p(e,l){s=e;const a={};l[0]&308&&(a.events=s[8].get(s[26].toDateString())),l[0]&28&&(a.clickable=s[27]),l[0]&16|l[1]&4&&(a.$$scope={dirty:l,ctx:s}),t.$set(a)},i(e){n||(P(t.$$.fragment,e),n=!0)},o(e){U(t.$$.fragment,e),n=!1},d(e){ce(t,e)}}}function vt(s){let t,n=s[25]+"",e;return{c(){t=M("span"),e=K(n),this.h()},l(l){t=C(l,"SPAN",{class:!0});var a=N(t);e=W(a,n),a.forEach(m),this.h()},h(){D(t,"class","calendar__body__day svelte-qikc2d")},m(l,a){A(l,t,a),_(t,e)},p(l,a){a[0]&16&&n!==(n=l[25]+"")&&Z(e,n)},d(l){l&&m(t)}}}function Ve(s){let t,n,e,l;const a=[_t,dt],r=[];function i(o,v){return o[27]?0:1}return t=i(s),n=r[t]=a[t](s),{c(){n.c(),e=x()},l(o){n.l(o),e=x()},m(o,v){r[t].m(o,v),A(o,e,v),l=!0},p(o,v){let f=t;t=i(o),t===f?r[t].p(o,v):(se(),U(r[f],1,1,()=>{r[f]=null}),ae(),n=r[t],n?n.p(o,v):(n=r[t]=a[t](o),n.c()),P(n,1),n.m(e.parentNode,e))},i(o){l||(P(n),l=!0)},o(o){U(n),l=!1},d(o){o&&m(e),r[t].d(o)}}}function $e(s){let t,n,e=Q({length:ve}),l=[];for(let r=0;r<e.length;r+=1)l[r]=Ve(qe(s,e,r));const a=r=>U(l[r],1,1,()=>{l[r]=null});return{c(){for(let r=0;r<l.length;r+=1)l[r].c();t=x()},l(r){for(let i=0;i<l.length;i+=1)l[i].l(r);t=x()},m(r,i){for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(r,i);A(r,t,i),n=!0},p(r,i){if(i[0]&8508){e=Q({length:ve});let o;for(o=0;o<e.length;o+=1){const v=qe(r,e,o);l[o]?(l[o].p(v,i),P(l[o],1)):(l[o]=Ve(v),l[o].c(),P(l[o],1),l[o].m(t.parentNode,t))}for(se(),o=e.length;o<l.length;o+=1)a(o);ae()}},i(r){if(!n){for(let i=0;i<e.length;i+=1)P(l[i]);n=!0}},o(r){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)U(l[i]);n=!1},d(r){r&&m(t),ne(l,r)}}}function Le(s){let t,n=s[19].name+"",e,l,a;return{c(){t=M("div"),e=K(n),l=L(),this.h()},l(r){t=C(r,"DIV",{class:!0,style:!0});var i=N(t);e=W(i,n),l=O(i),i.forEach(m),this.h()},h(){D(t,"class","calendar__body__event svelte-qikc2d"),D(t,"style",a=`
						grid-row: ${Math.ceil((s[19].startDate.getDate()+s[4])/7)} / ${Math.ceil((s[19].endDate.getDate()+s[4])/7)};
						grid-column: ${s[19].startDate.getDay()+1} / ${s[19].endDate.getDay()+2};
						--color-badge: var(--color-badge-${s[19].type})
					`)},m(r,i){A(r,t,i),_(t,e),_(t,l)},p(r,i){i[0]&2&&n!==(n=r[19].name+"")&&Z(e,n),i[0]&18&&a!==(a=`
						grid-row: ${Math.ceil((r[19].startDate.getDate()+r[4])/7)} / ${Math.ceil((r[19].endDate.getDate()+r[4])/7)};
						grid-column: ${r[19].startDate.getDay()+1} / ${r[19].endDate.getDay()+2};
						--color-badge: var(--color-badge-${r[19].type})
					`)&&D(t,"style",a)},d(r){r&&m(t)}}}function Oe(s){let t=s[19].startDate.getMonth()===s[2]&&s[19].startDate.getFullYear()===s[5],n,e=t&&Le(s);return{c(){e&&e.c(),n=x()},l(l){e&&e.l(l),n=x()},m(l,a){e&&e.m(l,a),A(l,n,a)},p(l,a){a[0]&38&&(t=l[19].startDate.getMonth()===l[2]&&l[19].startDate.getFullYear()===l[5]),t?e?e.p(l,a):(e=Le(l),e.c(),e.m(n.parentNode,n)):e&&(e.d(1),e=null)},d(l){l&&m(n),e&&e.d(l)}}}function Ae(s){let t,n,e,l;return n=new ht({props:{date:s[6],events:s[8].get(s[6].toDateString())||[]}}),n.$on("close",s[16]),{c(){t=M("div"),re(n.$$.fragment),this.h()},l(a){t=C(a,"DIV",{class:!0});var r=N(t);ie(n.$$.fragment,r),r.forEach(m),this.h()},h(){D(t,"class","calendar-detail svelte-qikc2d")},m(a,r){A(a,t,r),oe(n,t,null),l=!0},p(a,r){s=a;const i={};r[0]&64&&(i.date=s[6]),r[0]&320&&(i.events=s[8].get(s[6].toDateString())||[]),n.$set(i)},i(a){l||(P(n.$$.fragment,a),a&&Xe(()=>{l&&(e||(e=pe(t,ke,{x:250,opacity:1,duration:s[10]?0:250,easing:be},!0)),e.run(1))}),l=!0)},o(a){U(n.$$.fragment,a),a&&(e||(e=pe(t,ke,{x:250,opacity:1,duration:s[10]?0:250,easing:be},!1)),e.run(0)),l=!1},d(a){a&&m(t),ce(n),a&&e&&e.end()}}}function mt(s){let t,n,e,l,a='<i class="ri-arrow-left-s-line svelte-qikc2d"></i>',r,i,o=s[11][s[2]]+"",v,f,k,H,E,Y='<i class="ri-arrow-right-s-line svelte-qikc2d"></i>',B,I,F,u,J,p,b,d,g,y=Q(s[12]),w=[];for(let h=0;h<y.length;h+=1)w[h]=He(Ne(s,y,h));let T=Q({length:s[7]}),S=[];for(let h=0;h<T.length;h+=1)S[h]=$e(Te(s,T,h));const z=h=>U(S[h],1,1,()=>{S[h]=null});let G=Q(s[1]),$=[];for(let h=0;h<G.length;h+=1)$[h]=Oe(we(s,G,h));let V=s[6]&&Ae(s);return{c(){t=M("div"),n=M("div"),e=M("div"),l=M("button"),l.innerHTML=a,r=L(),i=M("h2"),v=K(o),f=L(),k=K(s[5]),H=L(),E=M("button"),E.innerHTML=Y,B=L(),I=M("div");for(let h=0;h<w.length;h+=1)w[h].c();F=L(),u=M("div");for(let h=0;h<S.length;h+=1)S[h].c();J=L();for(let h=0;h<$.length;h+=1)$[h].c();p=L(),V&&V.c(),this.h()},l(h){t=C(h,"DIV",{class:!0});var q=N(t);n=C(q,"DIV",{class:!0});var c=N(n);e=C(c,"DIV",{class:!0});var R=N(e);l=C(R,"BUTTON",{"aria-label":!0,class:!0,"data-svelte-h":!0}),X(l)!=="svelte-106cb2h"&&(l.innerHTML=a),r=O(R),i=C(R,"H2",{class:!0});var fe=N(i);v=W(fe,o),f=O(fe),k=W(fe,s[5]),fe.forEach(m),H=O(R),E=C(R,"BUTTON",{"aria-label":!0,class:!0,"data-svelte-h":!0}),X(E)!=="svelte-1rojn32"&&(E.innerHTML=Y),R.forEach(m),B=O(c),I=C(c,"DIV",{class:!0});var me=N(I);for(let j=0;j<w.length;j+=1)w[j].l(me);me.forEach(m),c.forEach(m),F=O(q),u=C(q,"DIV",{class:!0});var te=N(u);for(let j=0;j<S.length;j+=1)S[j].l(te);J=O(te);for(let j=0;j<$.length;j+=1)$[j].l(te);p=O(te),V&&V.l(te),te.forEach(m),q.forEach(m),this.h()},h(){D(l,"aria-label","Previous month"),D(l,"class","svelte-qikc2d"),D(i,"class","svelte-qikc2d"),D(E,"aria-label","Next month"),D(E,"class","svelte-qikc2d"),D(e,"class","calendar__header__date svelte-qikc2d"),D(I,"class","calendar__header__days svelte-qikc2d"),D(n,"class","calendar__header svelte-qikc2d"),D(u,"class","calendar__body svelte-qikc2d"),le(u,"selected-date",s[6]),le(u,"dark-mode",s[9]==="dark"),le(u,"light-mode",s[9]==="light"),D(t,"class","calendar svelte-qikc2d")},m(h,q){A(h,t,q),_(t,n),_(n,e),_(e,l),_(e,r),_(e,i),_(i,v),_(i,f),_(i,k),_(e,H),_(e,E),_(n,B),_(n,I);for(let c=0;c<w.length;c+=1)w[c]&&w[c].m(I,null);_(t,F),_(t,u);for(let c=0;c<S.length;c+=1)S[c]&&S[c].m(u,null);_(u,J);for(let c=0;c<$.length;c+=1)$[c]&&$[c].m(u,null);_(u,p),V&&V.m(u,null),b=!0,d||(g=[ue(l,"click",s[14]),ue(E,"click",s[15])],d=!0)},p(h,q){if((!b||q[0]&4)&&o!==(o=h[11][h[2]]+"")&&Z(v,o),(!b||q[0]&32)&&Z(k,h[5]),q[0]&4096){y=Q(h[12]);let c;for(c=0;c<y.length;c+=1){const R=Ne(h,y,c);w[c]?w[c].p(R,q):(w[c]=He(R),w[c].c(),w[c].m(I,null))}for(;c<w.length;c+=1)w[c].d(1);w.length=y.length}if(q[0]&8636){T=Q({length:h[7]});let c;for(c=0;c<T.length;c+=1){const R=Te(h,T,c);S[c]?(S[c].p(R,q),P(S[c],1)):(S[c]=$e(R),S[c].c(),P(S[c],1),S[c].m(u,J))}for(se(),c=T.length;c<S.length;c+=1)z(c);ae()}if(q[0]&54){G=Q(h[1]);let c;for(c=0;c<G.length;c+=1){const R=we(h,G,c);$[c]?$[c].p(R,q):($[c]=Oe(R),$[c].c(),$[c].m(u,p))}for(;c<$.length;c+=1)$[c].d(1);$.length=G.length}h[6]?V?(V.p(h,q),q[0]&64&&P(V,1)):(V=Ae(h),V.c(),P(V,1),V.m(u,null)):V&&(se(),U(V,1,1,()=>{V=null}),ae()),(!b||q[0]&64)&&le(u,"selected-date",h[6]),(!b||q[0]&512)&&le(u,"dark-mode",h[9]==="dark"),(!b||q[0]&512)&&le(u,"light-mode",h[9]==="light")},i(h){if(!b){for(let q=0;q<T.length;q+=1)P(S[q]);P(V),b=!0}},o(h){S=S.filter(Boolean);for(let q=0;q<S.length;q+=1)U(S[q]);U(V),b=!1},d(h){h&&m(t),ne(w,h),ne(S,h),ne($,h),V&&V.d(),d=!1,Ge(g)}}}const ve=7;function gt(s,t){const n=new Map;return s.forEach(e=>{const l=t(e);for(const a of l){const r=n.get(a)||[];r.push(e),n.set(a,r)}}),n}function pt(s){return s%4===0&&s%100!==0&&s%400!==0||s%100===0&&s%400===0}function bt(s){return pt(s)?29:28}function kt(s,t,n){let e,l,a,r,i,o,v,f;ge(s,tt,d=>n(9,v=d)),ge(s,nt,d=>n(10,f=d));let{events:k}=t;const H=1e3*60*60*24,E=["January","February","March","April","May","June","July","August","September","October","November","December"],Y=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function B(d,g){const y=new Date(d),w=new Date(g);return y.setHours(0,0,0,0),w.setHours(0,0,0,0),(w.getTime()-y.getTime())/H}let{date:I=new Date}=t,F=null;const u=d=>()=>n(6,F=d),J=()=>n(0,I=new Date(a,l-1,1)),p=()=>n(0,I=new Date(a,l+1,1)),b=()=>n(6,F=null);return s.$$set=d=>{"events"in d&&n(1,k=d.events),"date"in d&&n(0,I=d.date)},s.$$.update=()=>{s.$$.dirty[0]&2&&n(8,e=gt(k,d=>{const g=Array(B(d.startDate,d.endDate)+1).fill(0),y=d.startDate.getFullYear(),w=d.startDate.getMonth(),T=d.startDate.getDate();return g.map((S,z)=>new Date(y,w,T+z).toDateString())})),s.$$.dirty[0]&1&&n(2,l=I.getMonth()),s.$$.dirty[0]&1&&n(5,a=I.getFullYear()),s.$$.dirty[0]&32&&n(3,r=[31,bt(a),31,30,31,30,31,31,30,31,30,31]),s.$$.dirty[0]&36&&n(4,i=(new Date(a,l,1).getDay()%7+1-1+7)%7),s.$$.dirty[0]&28&&n(7,o=Math.ceil((i+r[l])/7))},[I,k,l,r,i,a,F,o,e,v,f,E,Y,u,J,p,b]}class Dt extends de{constructor(t){super(),_e(this,t,kt,mt,he,{events:1,date:0},null,[-1,-1])}}function Pe(s,t,n){const e=s.slice();return e[2]=t[n],e}function Ye(s){let t,n="No Events This Month";return{c(){t=M("h3"),t.textContent=n,this.h()},l(e){t=C(e,"H3",{class:!0,"data-svelte-h":!0}),X(t)!=="svelte-kcf38k"&&(t.textContent=n),this.h()},h(){D(t,"class","events__list-no-events svelte-1nr3gqv")},m(e,l){A(e,t,l)},d(e){e&&m(t)}}}function Be(s){let t,n;return t=new lt({props:{event:s[2]}}),{c(){re(t.$$.fragment)},l(e){ie(t.$$.fragment,e)},m(e,l){oe(t,e,l),n=!0},p(e,l){const a={};l&2&&(a.event=e[2]),t.$set(a)},i(e){n||(P(t.$$.fragment,e),n=!0)},o(e){U(t.$$.fragment,e),n=!1},d(e){ce(t,e)}}}function Et(s){let t,n,e,l,a="Events",r,i,o,v,f,k="Events This Month",H,E,Y,B;t=new xe({props:{title:yt,description:Mt,url:"https://rhhsstuco.ca/events"}}),i=new Dt({props:{events:s[0].events}});let I=s[1].length===0&&Ye(),F=Q(s[1]),u=[];for(let p=0;p<F.length;p+=1)u[p]=Be(Pe(s,F,p));const J=p=>U(u[p],1,1,()=>{u[p]=null});return{c(){re(t.$$.fragment),n=L(),e=M("main"),l=M("h1"),l.textContent=a,r=L(),re(i.$$.fragment),o=L(),v=M("section"),f=M("h2"),f.textContent=k,H=L(),E=M("div"),I&&I.c(),Y=L();for(let p=0;p<u.length;p+=1)u[p].c();this.h()},l(p){ie(t.$$.fragment,p),n=O(p),e=C(p,"MAIN",{class:!0});var b=N(e);l=C(b,"H1",{class:!0,"data-svelte-h":!0}),X(l)!=="svelte-xtcg81"&&(l.textContent=a),r=O(b),ie(i.$$.fragment,b),o=O(b),v=C(b,"SECTION",{class:!0});var d=N(v);f=C(d,"H2",{class:!0,"data-svelte-h":!0}),X(f)!=="svelte-16zvu15"&&(f.textContent=k),H=O(d),E=C(d,"DIV",{class:!0});var g=N(E);I&&I.l(g),Y=O(g);for(let y=0;y<u.length;y+=1)u[y].l(g);g.forEach(m),d.forEach(m),b.forEach(m),this.h()},h(){D(l,"class","svelte-1nr3gqv"),D(f,"class","svelte-1nr3gqv"),D(E,"class","events__list svelte-1nr3gqv"),D(v,"class","month-events svelte-1nr3gqv"),D(e,"class","svelte-1nr3gqv")},m(p,b){oe(t,p,b),A(p,n,b),A(p,e,b),_(e,l),_(e,r),oe(i,e,null),_(e,o),_(e,v),_(v,f),_(v,H),_(v,E),I&&I.m(E,null),_(E,Y);for(let d=0;d<u.length;d+=1)u[d]&&u[d].m(E,null);B=!0},p(p,[b]){const d={};if(b&1&&(d.events=p[0].events),i.$set(d),p[1].length===0?I||(I=Ye(),I.c(),I.m(E,Y)):I&&(I.d(1),I=null),b&2){F=Q(p[1]);let g;for(g=0;g<F.length;g+=1){const y=Pe(p,F,g);u[g]?(u[g].p(y,b),P(u[g],1)):(u[g]=Be(y),u[g].c(),P(u[g],1),u[g].m(E,null))}for(se(),g=F.length;g<u.length;g+=1)J(g);ae()}},i(p){if(!B){P(t.$$.fragment,p),P(i.$$.fragment,p);for(let b=0;b<F.length;b+=1)P(u[b]);B=!0}},o(p){U(t.$$.fragment,p),U(i.$$.fragment,p),u=u.filter(Boolean);for(let b=0;b<u.length;b+=1)U(u[b]);B=!1},d(p){p&&(m(n),m(e)),ce(t,p),ce(i),I&&I.d(),ne(u,p)}}}const yt="Events | RHHS StuCo",Mt="Stay up to date on all school events here!";function Ct(s,t,n){let{data:e}=t,l;return s.$$set=a=>{"data"in a&&n(0,e=a.data)},s.$$.update=()=>{if(s.$$.dirty&1){const a=new Set;n(1,l=e.events.filter(r=>r.startDate.getMonth()==new Date().getMonth()).filter(r=>a.has(r.name)?!1:(a.add(r.name),!0)))}},[e,l]}class Vt extends de{constructor(t){super(),_e(this,t,Ct,Et,he,{data:0})}}export{Vt as component};
