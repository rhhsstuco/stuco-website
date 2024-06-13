import{s as Z,l as qe,u as Ce,p as He,q as Te,o as Ue,N as Me,e as p,c as b,I as Ee,m,i as C,L as X,n as K,f as u,a as M,t as D,b as g,g as N,d as S,J as L,h,O as Ne,P as Oe,r as De,k as re,M as Se,v as Y,D as Ve,Q as Ge}from"./scheduler.Di3dW5jX.js";import{S as x,i as ee,a as Q,t as J,f as be,c as te,b as se,m as le,d as ae,g as ke,e as Le,h as Be}from"./index.V066or7J.js";import{t as $e}from"./theme.store.wpxXab-b.js";import{b as _}from"./entry.qyROXQUc.js";import{p as Ie}from"./stores.f2YWo-h2.js";import{c as Qe}from"./clickOutside.7onWnYCz.js";import{f as ge}from"./index.fkqHCaCY.js";const Re=l=>({matches:l&1}),we=l=>({matches:l[0]});function Je(l){let e;const s=l[4].default,t=qe(s,l,l[3],we);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,n){t&&t.m(a,n),e=!0},p(a,[n]){t&&t.p&&(!e||n&9)&&Ce(t,s,a,a[3],e?Te(s,a[3],n,Re):He(a[3]),we)},i(a){e||(Q(t,a),e=!0)},o(a){J(t,a),e=!1},d(a){t&&t.d(a)}}}function Pe(l,e,s){let{$$slots:t={},$$scope:a}=e,{query:n}=e,i,f,c=!1,r=!1;function o(E){i=window.matchMedia(E),f=k=>s(0,r=k.matches),i.addEventListener("change",f),s(0,r=i.matches)}function d(){i&&f&&i.removeEventListener("change",f)}return Ue(()=>{s(2,c=!0)}),Me(()=>{d()}),l.$$set=E=>{"query"in E&&s(1,n=E.query),"$$scope"in E&&s(3,a=E.$$scope)},l.$$.update=()=>{l.$$.dirty&6&&c&&(d(),o(n))},[r,n,c,a,t]}class Ae extends x{constructor(e){super(),ee(this,e,Pe,Je,Z,{query:1})}}function je(l){let e,s='<i class="ri-menu-line svelte-fy38he"></i>',t,a;return{c(){e=p("button"),e.innerHTML=s,this.h()},l(n){e=b(n,"BUTTON",{class:!0,"aria-label":!0,"data-svelte-h":!0}),Ee(e)!=="svelte-1w26plh"&&(e.innerHTML=s),this.h()},h(){m(e,"class","hamburger svelte-fy38he"),m(e,"aria-label","Open hamburger menu")},m(n,i){C(n,e,i),t||(a=X(e,"click",l[0]),t=!0)},p:K,i:K,o:K,d(n){n&&u(e),t=!1,a()}}}function ze(l,e,s){let{open:t}=e;function a(){s(1,t=!t)}return l.$$set=n=>{"open"in n&&s(1,t=n.open)},[a,t]}class Fe extends x{constructor(e){super(),ee(this,e,ze,je,Z,{open:1})}}function Ke(l){let e,s,t,a='<i class="ri-close-line svelte-t30isd"></i>',n,i,f,c,r,o,d,E,k,A,V,y,w,I,G,v,$,R,j,P,T,z,O,H,F,W;return{c(){e=p("div"),s=p("div"),t=p("button"),t.innerHTML=a,n=M(),i=p("div"),f=p("ul"),c=p("li"),r=p("a"),o=D("Home"),d=M(),E=p("li"),k=p("a"),A=D("Events"),V=M(),y=p("li"),w=p("a"),I=D("Clubs"),G=M(),v=p("li"),$=p("a"),R=D("Gallery"),j=M(),P=p("li"),T=p("a"),z=D("About Us"),this.h()},l(q){e=b(q,"DIV",{class:!0});var U=g(e);s=b(U,"DIV",{class:!0});var ne=g(s);t=b(ne,"BUTTON",{class:!0,"data-svelte-h":!0}),Ee(t)!=="svelte-imqed5"&&(t.innerHTML=a),ne.forEach(u),n=N(U),i=b(U,"DIV",{class:!0});var ie=g(i);f=b(ie,"UL",{class:!0});var B=g(f);c=b(B,"LI",{});var oe=g(c);r=b(oe,"A",{href:!0,class:!0});var ue=g(r);o=S(ue,"Home"),ue.forEach(u),oe.forEach(u),d=N(B),E=b(B,"LI",{});var ce=g(E);k=b(ce,"A",{href:!0,class:!0});var fe=g(k);A=S(fe,"Events"),fe.forEach(u),ce.forEach(u),V=N(B),y=b(B,"LI",{});var _e=g(y);w=b(_e,"A",{href:!0,class:!0});var he=g(w);I=S(he,"Clubs"),he.forEach(u),_e.forEach(u),G=N(B),v=b(B,"LI",{});var me=g(v);$=b(me,"A",{href:!0,class:!0});var ve=g($);R=S(ve,"Gallery"),ve.forEach(u),me.forEach(u),j=N(B),P=b(B,"LI",{});var de=g(P);T=b(de,"A",{href:!0,class:!0});var pe=g(T);z=S(pe,"About Us"),pe.forEach(u),de.forEach(u),B.forEach(u),ie.forEach(u),U.forEach(u),this.h()},h(){m(t,"class","svelte-t30isd"),m(s,"class","menu__top svelte-t30isd"),m(r,"href",_+"/"),m(r,"class","svelte-t30isd"),L(r,"active",l[0]===`${_}/`||l[0]===`${_}`),m(k,"href",_+"/events"),m(k,"class","svelte-t30isd"),L(k,"active",l[0]===`${_}/events`),m(w,"href",_+"/clubs"),m(w,"class","svelte-t30isd"),L(w,"active",l[0]===`${_}/clubs`),m($,"href",_+"/gallery"),m($,"class","svelte-t30isd"),L($,"active",l[0]===`${_}/gallery`),m(T,"href",_+"/about-us"),m(T,"class","svelte-t30isd"),L(T,"active",l[0]===`${_}/about-us`),m(f,"class","menu__content__links svelte-t30isd"),m(i,"class","menu__content"),m(e,"class","menu svelte-t30isd")},m(q,U){C(q,e,U),h(e,s),h(s,t),h(e,n),h(e,i),h(i,f),h(f,c),h(c,r),h(r,o),h(f,d),h(f,E),h(E,k),h(k,A),h(f,V),h(f,y),h(y,w),h(w,I),h(f,G),h(f,v),h(v,$),h($,R),h(f,j),h(f,P),h(P,T),h(T,z),H=!0,F||(W=[X(t,"click",l[1]),Ne(Qe.call(null,e)),X(e,"click_outside",l[1])],F=!0)},p(q,[U]){(!H||U&1)&&L(r,"active",q[0]===`${_}/`||q[0]===`${_}`),(!H||U&1)&&L(k,"active",q[0]===`${_}/events`),(!H||U&1)&&L(w,"active",q[0]===`${_}/clubs`),(!H||U&1)&&L($,"active",q[0]===`${_}/gallery`),(!H||U&1)&&L(T,"active",q[0]===`${_}/about-us`)},i(q){H||(q&&Oe(()=>{H&&(O||(O=be(e,ge,{x:500,duration:600},!0)),O.run(1))}),H=!0)},o(q){q&&(O||(O=be(e,ge,{x:500,duration:600},!1)),O.run(0)),H=!1},d(q){q&&u(e),q&&O&&O.end(),F=!1,De(W)}}}function We(l,e,s){let t,a;re(l,Ie,f=>s(2,a=f));const n=Se();function i(){n("menu-close")}return l.$$.update=()=>{l.$$.dirty&4&&s(0,t=a.url.pathname)},[t,i,a]}class Xe extends x{constructor(e){super(),ee(this,e,We,Ke,Z,{})}}function Ye(l){let e,s,t,a,n,i;function f(o){l[6](o)}let c={};l[1]!==void 0&&(c.open=l[1]),s=new Fe({props:c}),Ve.push(()=>Be(s,"open",f));let r=l[1]&&ye(l);return{c(){e=p("li"),te(s.$$.fragment),a=M(),r&&r.c(),n=Y(),this.h()},l(o){e=b(o,"LI",{class:!0});var d=g(e);se(s.$$.fragment,d),d.forEach(u),a=N(o),r&&r.l(o),n=Y(),this.h()},h(){m(e,"class","svelte-1w9ywr9")},m(o,d){C(o,e,d),le(s,e,null),C(o,a,d),r&&r.m(o,d),C(o,n,d),i=!0},p(o,d){const E={};!t&&d&2&&(t=!0,E.open=o[1],Ge(()=>t=!1)),s.$set(E),o[1]?r?(r.p(o,d),d&2&&Q(r,1)):(r=ye(o),r.c(),Q(r,1),r.m(n.parentNode,n)):r&&(ke(),J(r,1,1,()=>{r=null}),Le())},i(o){i||(Q(s.$$.fragment,o),Q(r),i=!0)},o(o){J(s.$$.fragment,o),J(r),i=!1},d(o){o&&(u(e),u(a),u(n)),ae(s),r&&r.d(o)}}}function Ze(l){let e,s,t,a,n,i,f,c,r,o,d,E,k,A,V,y,w,I,G;return{c(){e=p("li"),s=p("a"),t=D("Home"),a=M(),n=p("li"),i=p("a"),f=D("Events"),c=M(),r=p("li"),o=p("a"),d=D("Clubs"),E=M(),k=p("li"),A=p("a"),V=D("Gallery"),y=M(),w=p("li"),I=p("a"),G=D("About Us"),this.h()},l(v){e=b(v,"LI",{class:!0});var $=g(e);s=b($,"A",{href:!0,class:!0});var R=g(s);t=S(R,"Home"),R.forEach(u),$.forEach(u),a=N(v),n=b(v,"LI",{class:!0});var j=g(n);i=b(j,"A",{href:!0,class:!0});var P=g(i);f=S(P,"Events"),P.forEach(u),j.forEach(u),c=N(v),r=b(v,"LI",{class:!0});var T=g(r);o=b(T,"A",{href:!0,class:!0});var z=g(o);d=S(z,"Clubs"),z.forEach(u),T.forEach(u),E=N(v),k=b(v,"LI",{class:!0});var O=g(k);A=b(O,"A",{href:!0,class:!0});var H=g(A);V=S(H,"Gallery"),H.forEach(u),O.forEach(u),y=N(v),w=b(v,"LI",{class:!0});var F=g(w);I=b(F,"A",{href:!0,class:!0});var W=g(I);G=S(W,"About Us"),W.forEach(u),F.forEach(u),this.h()},h(){m(s,"href",_+"/"),m(s,"class","svelte-1w9ywr9"),L(s,"active",l[0]===`${_}/`||l[0]===`${_}`),m(e,"class","svelte-1w9ywr9"),m(i,"href",_+"/events"),m(i,"class","svelte-1w9ywr9"),L(i,"active",l[0]===`${_}/events`||l[0]===`${_}/events/`),m(n,"class","svelte-1w9ywr9"),m(o,"href",_+"/clubs"),m(o,"class","svelte-1w9ywr9"),L(o,"active",l[0]===`${_}/clubs`||l[0]===`${_}/clubs/`),m(r,"class","svelte-1w9ywr9"),m(A,"href",_+"/gallery"),m(A,"class","svelte-1w9ywr9"),L(A,"active",l[0]===`${_}/gallery`||l[0]===`${_}/gallery/`),m(k,"class","svelte-1w9ywr9"),m(I,"href",_+"/about-us"),m(I,"class","svelte-1w9ywr9"),L(I,"active",l[0]===`${_}/about-us`||l[0]===`${_}/about-us/`),m(w,"class","svelte-1w9ywr9")},m(v,$){C(v,e,$),h(e,s),h(s,t),C(v,a,$),C(v,n,$),h(n,i),h(i,f),C(v,c,$),C(v,r,$),h(r,o),h(o,d),C(v,E,$),C(v,k,$),h(k,A),h(A,V),C(v,y,$),C(v,w,$),h(w,I),h(I,G)},p(v,$){$&1&&L(s,"active",v[0]===`${_}/`||v[0]===`${_}`),$&1&&L(i,"active",v[0]===`${_}/events`||v[0]===`${_}/events/`),$&1&&L(o,"active",v[0]===`${_}/clubs`||v[0]===`${_}/clubs/`),$&1&&L(A,"active",v[0]===`${_}/gallery`||v[0]===`${_}/gallery/`),$&1&&L(I,"active",v[0]===`${_}/about-us`||v[0]===`${_}/about-us/`)},i:K,o:K,d(v){v&&(u(e),u(a),u(n),u(c),u(r),u(E),u(k),u(y),u(w))}}}function ye(l){let e,s;return e=new Xe({}),e.$on("menu-close",l[7]),{c(){te(e.$$.fragment)},l(t){se(e.$$.fragment,t)},m(t,a){le(e,t,a),s=!0},p:K,i(t){s||(Q(e.$$.fragment,t),s=!0)},o(t){J(e.$$.fragment,t),s=!1},d(t){ae(e,t)}}}function xe(l){let e,s,t,a;const n=[Ze,Ye],i=[];function f(c,r){return c[9]&&c[10]?0:1}return e=f(l),s=i[e]=n[e](l),{c(){s.c(),t=Y()},l(c){s.l(c),t=Y()},m(c,r){i[e].m(c,r),C(c,t,r),a=!0},p(c,r){let o=e;e=f(c),e===o?i[e].p(c,r):(ke(),J(i[o],1,1,()=>{i[o]=null}),Le(),s=i[e],s?s.p(c,r):(s=i[e]=n[e](c),s.c()),Q(s,1),s.m(t.parentNode,t))},i(c){a||(Q(s),a=!0)},o(c){J(s),a=!1},d(c){c&&u(t),i[e].d(c)}}}function et(l){let e,s;return e=new Ae({props:{query:"(min-height: 577px)",$$slots:{default:[xe,({matches:t})=>({10:t}),({matches:t})=>t?1024:0]},$$scope:{ctx:l}}}),{c(){te(e.$$.fragment)},l(t){se(e.$$.fragment,t)},m(t,a){le(e,t,a),s=!0},p(t,a){const n={};a&3587&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){s||(Q(e.$$.fragment,t),s=!0)},o(t){J(e.$$.fragment,t),s=!1},d(t){ae(e,t)}}}function tt(l){let e,s,t,a,n,i,f,c,r,o,d,E,k,A,V;return c=new Ae({props:{query:"(min-width: 1024px)",$$slots:{default:[et,({matches:y})=>({9:y}),({matches:y})=>y?512:0]},$$scope:{ctx:l}}}),{c(){e=p("nav"),s=p("div"),t=p("a"),a=D("RHHS STUCO"),n=M(),i=p("div"),f=p("ul"),te(c.$$.fragment),r=M(),o=p("li"),d=p("button"),this.h()},l(y){e=b(y,"NAV",{class:!0});var w=g(e);s=b(w,"DIV",{class:!0});var I=g(s);t=b(I,"A",{href:!0,class:!0});var G=g(t);a=S(G,"RHHS STUCO"),G.forEach(u),I.forEach(u),n=N(w),i=b(w,"DIV",{class:!0});var v=g(i);f=b(v,"UL",{class:!0});var $=g(f);se(c.$$.fragment,$),r=N($),o=b($,"LI",{class:!0});var R=g(o);d=b(R,"BUTTON",{class:!0,"aria-label":!0}),g(d).forEach(u),R.forEach(u),$.forEach(u),v.forEach(u),w.forEach(u),this.h()},h(){m(t,"href",_+"/"),m(t,"class","svelte-1w9ywr9"),m(s,"class","nav__logo svelte-1w9ywr9"),m(d,"class",E=l[2]+" change-theme svelte-1w9ywr9"),m(d,"aria-label","Change theme"),m(o,"class","svelte-1w9ywr9"),m(f,"class","svelte-1w9ywr9"),m(i,"class","nav__links svelte-1w9ywr9"),m(e,"class","svelte-1w9ywr9")},m(y,w){C(y,e,w),h(e,s),h(s,t),h(t,a),h(e,n),h(e,i),h(i,f),le(c,f,null),h(f,r),h(f,o),h(o,d),k=!0,A||(V=X(d,"click",l[3]),A=!0)},p(y,[w]){const I={};w&2563&&(I.$$scope={dirty:w,ctx:y}),c.$set(I),(!k||w&4&&E!==(E=y[2]+" change-theme svelte-1w9ywr9"))&&m(d,"class",E)},i(y){k||(Q(c.$$.fragment,y),k=!0)},o(y){J(c.$$.fragment,y),k=!1},d(y){y&&u(e),ae(c),A=!1,V()}}}function st(l,e,s){let t,a,n,i;re(l,Ie,d=>s(4,n=d)),re(l,$e,d=>s(5,i=d));let f=!1;function c(){$e.update(d=>d==="dark"?"light":"dark")}function r(d){f=d,s(1,f),s(0,a),s(4,n)}const o=()=>s(1,f=!1);return l.$$.update=()=>{l.$$.dirty&32&&s(2,t=i==="dark"?"ri-moon-fill":"ri-moon-line"),l.$$.dirty&16&&s(0,a=n.url.pathname),l.$$.dirty&1&&(s(1,f=!1),s(0,a),s(4,n))},[a,f,t,c,n,i,r,o]}class ct extends x{constructor(e){super(),ee(this,e,st,tt,Z,{})}}export{ct as N};
