import{s as Ee,r as pe,i as I,n as W,f as u,o as Ze,e as m,c as v,b as p,m as f,L as H,y as xe,D as E,a as w,t as ne,g as V,d as ie,I as J,h as _,K as ee,j as ae,A as $e,Q as et,a5 as tt,a6 as Ge,O as lt}from"../chunks/scheduler.iZ0PAmE1.js";import{S as De,i as Ie,c as re,a as oe,m as ce,t as O,g as Me,b as G,e as Re,d as ue}from"../chunks/index.wh6tflNQ.js";import{e as Ce,M as st,u as nt,o as it}from"../chunks/Metadata.k6IZ61aw.js";import{P as at}from"../chunks/Picture.b59YzMmX.js";function Ke(i,e,t){const l=i.slice();return l[19]=e[t],l}function Qe(i){let e,t=Ce({length:i[6]}),l=[];for(let n=0;n<t.length;n+=1)l[n]=je(Ke(i,t,n));return{c(){e=m("div");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){e=v(n,"DIV",{class:!0});var s=p(e);for(let a=0;a<l.length;a+=1)l[a].l(s);s.forEach(u),this.h()},h(){f(e,"class","confetti-holder svelte-15ksp55"),H(e,"rounded",i[9]),H(e,"cone",i[10]),H(e,"no-gravity",i[11]),H(e,"reduced-motion",i[13])},m(n,s){I(n,e,s);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(e,null)},p(n,s){if(s&37375){t=Ce({length:n[6]});let a;for(a=0;a<t.length;a+=1){const r=Ke(n,t,a);l[a]?l[a].p(r,s):(l[a]=je(r),l[a].c(),l[a].m(e,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=t.length}s&512&&H(e,"rounded",n[9]),s&1024&&H(e,"cone",n[10]),s&2048&&H(e,"no-gravity",n[11]),s&8192&&H(e,"reduced-motion",n[13])},d(n){n&&u(e),xe(l,n)}}}function je(i){let e;return{c(){e=m("div"),this.h()},l(t){e=v(t,"DIV",{class:!0,style:!0}),p(e).forEach(u),this.h()},h(){f(e,"class","confetti svelte-15ksp55"),E(e,"--fall-distance",i[8]),E(e,"--size",i[0]+"px"),E(e,"--color",i[15]()),E(e,"--skew",z(-45,45)+"deg,"+z(-45,45)+"deg"),E(e,"--rotation-xyz",z(-10,10)+", "+z(-10,10)+", "+z(-10,10)),E(e,"--rotation-deg",z(0,360)+"deg"),E(e,"--translate-y-multiplier",z(i[2][0],i[2][1])),E(e,"--translate-x-multiplier",z(i[1][0],i[1][1])),E(e,"--scale",.1*z(2,10)),E(e,"--transition-duration",i[4]?`calc(${i[3]}ms * var(--scale))`:`${i[3]}ms`),E(e,"--transition-delay",z(i[5][0],i[5][1])+"ms"),E(e,"--transition-iteration-count",i[4]?"infinite":i[7]),E(e,"--x-spread",1-i[12])},m(t,l){I(t,e,l)},p(t,l){l&256&&E(e,"--fall-distance",t[8]),l&1&&E(e,"--size",t[0]+"px"),l&4&&E(e,"--translate-y-multiplier",z(t[2][0],t[2][1])),l&2&&E(e,"--translate-x-multiplier",z(t[1][0],t[1][1])),l&24&&E(e,"--transition-duration",t[4]?`calc(${t[3]}ms * var(--scale))`:`${t[3]}ms`),l&32&&E(e,"--transition-delay",z(t[5][0],t[5][1])+"ms"),l&144&&E(e,"--transition-iteration-count",t[4]?"infinite":t[7]),l&4096&&E(e,"--x-spread",1-t[12])},d(t){t&&u(e)}}}function rt(i){let e,t=!i[14]&&Qe(i);return{c(){t&&t.c(),e=pe()},l(l){t&&t.l(l),e=pe()},m(l,n){t&&t.m(l,n),I(l,e,n)},p(l,[n]){l[14]?t&&(t.d(1),t=null):t?t.p(l,n):(t=Qe(l),t.c(),t.m(e.parentNode,e))},i:W,o:W,d(l){l&&u(e),t&&t.d(l)}}}function z(i,e){return Math.random()*(e-i)+i}function ot(i,e,t){let{size:l=10}=e,{x:n=[-.5,.5]}=e,{y:s=[.25,1]}=e,{duration:a=2e3}=e,{infinite:r=!1}=e,{delay:c=[0,50]}=e,{colorRange:o=[0,360]}=e,{colorArray:d=[]}=e,{amount:b=50}=e,{iterationCount:g=1}=e,{fallDistance:k="100px"}=e,{rounded:T=!1}=e,{cone:U=!1}=e,{noGravity:B=!1}=e,{xSpread:R=.15}=e,{destroyOnComplete:A=!0}=e,{disableForReducedMotion:C=!1}=e,y=!1;Ze(()=>{!A||r||g=="infinite"||setTimeout(()=>t(14,y=!0),(a+c[1])*g)});function N(){return d.length?d[Math.round(Math.random()*(d.length-1))]:`hsl(${Math.round(z(o[0],o[1]))}, 75%, 50%)`}return i.$$set=h=>{"size"in h&&t(0,l=h.size),"x"in h&&t(1,n=h.x),"y"in h&&t(2,s=h.y),"duration"in h&&t(3,a=h.duration),"infinite"in h&&t(4,r=h.infinite),"delay"in h&&t(5,c=h.delay),"colorRange"in h&&t(16,o=h.colorRange),"colorArray"in h&&t(17,d=h.colorArray),"amount"in h&&t(6,b=h.amount),"iterationCount"in h&&t(7,g=h.iterationCount),"fallDistance"in h&&t(8,k=h.fallDistance),"rounded"in h&&t(9,T=h.rounded),"cone"in h&&t(10,U=h.cone),"noGravity"in h&&t(11,B=h.noGravity),"xSpread"in h&&t(12,R=h.xSpread),"destroyOnComplete"in h&&t(18,A=h.destroyOnComplete),"disableForReducedMotion"in h&&t(13,C=h.disableForReducedMotion)},[l,n,s,a,r,c,b,g,k,T,U,B,R,C,y,N,o,d,A]}class ct extends De{constructor(e){super(),Ie(this,e,ot,rt,Ee,{size:0,x:1,y:2,duration:3,infinite:4,delay:5,colorRange:16,colorArray:17,amount:6,iterationCount:7,fallDistance:8,rounded:9,cone:10,noGravity:11,xSpread:12,destroyOnComplete:18,disableForReducedMotion:13})}}function qe(i){let e,t,l,n,s,a,r,c,o,d,b;return{c(){e=m("div"),t=w(),l=m("div"),n=w(),s=m("div"),a=w(),r=m("div"),c=w(),o=m("div"),d=w(),b=m("div"),this.h()},l(g){e=v(g,"DIV",{class:!0}),p(e).forEach(u),t=V(g),l=v(g,"DIV",{class:!0}),p(l).forEach(u),n=V(g),s=v(g,"DIV",{class:!0}),p(s).forEach(u),a=V(g),r=v(g,"DIV",{class:!0}),p(r).forEach(u),c=V(g),o=v(g,"DIV",{class:!0}),p(o).forEach(u),d=V(g),b=v(g,"DIV",{class:!0}),p(b).forEach(u),this.h()},h(){f(e,"class","svelte-5c06sh"),E(e,"background-color","#ff3c40"),f(l,"class","svelte-5c06sh"),E(l,"background-color","#fe9843"),f(s,"class","svelte-5c06sh"),E(s,"background-color","#feef54"),f(r,"class","svelte-5c06sh"),E(r,"background-color","#00802d"),f(o,"class","svelte-5c06sh"),E(o,"background-color","#1558f5"),f(b,"class","svelte-5c06sh"),E(b,"background-color","#851f86")},m(g,k){I(g,e,k),I(g,t,k),I(g,l,k),I(g,n,k),I(g,s,k),I(g,a,k),I(g,r,k),I(g,c,k),I(g,o,k),I(g,d,k),I(g,b,k)},d(g){g&&(u(e),u(t),u(l),u(n),u(s),u(a),u(r),u(c),u(o),u(d),u(b))}}}function We(i){let e,t,l;return t=new ct({props:{amount:30,delay:[0,250],size:50,xSpread:0,rounded:!0,colorArray:[`url(${i[0].imageURL.img.src})`]}}),{c(){e=m("div"),re(t.$$.fragment),this.h()},l(n){e=v(n,"DIV",{class:!0});var s=p(e);oe(t.$$.fragment,s),s.forEach(u),this.h()},h(){f(e,"class","confetti svelte-5c06sh")},m(n,s){I(n,e,s),ce(t,e,null),l=!0},p(n,s){const a={};s&1&&(a.colorArray=[`url(${n[0].imageURL.img.src})`]),t.$set(a)},i(n){l||(O(t.$$.fragment,n),l=!0)},o(n){G(t.$$.fragment,n),l=!1},d(n){n&&u(e),ue(t)}}}function ut(i){let e,t=i[0].name+"",l;return{c(){e=m("h2"),l=ne(t),this.h()},l(n){e=v(n,"H2",{class:!0});var s=p(e);l=ie(s,t),s.forEach(u),this.h()},h(){f(e,"class","club__info__title svelte-5c06sh")},m(n,s){I(n,e,s),_(e,l)},p(n,s){s&1&&t!==(t=n[0].name+"")&&ae(l,t)},d(n){n&&u(e)}}}function ft(i){let e,t,l=i[0].name+"",n,s,a,r;return{c(){e=m("a"),t=m("h2"),n=ne(l),this.h()},l(c){e=v(c,"A",{href:!0,target:!0,rel:!0,class:!0});var o=p(e);t=v(o,"H2",{class:!0});var d=p(t);n=ie(d,l),d.forEach(u),o.forEach(u),this.h()},h(){f(t,"class","club__info__title svelte-5c06sh"),f(e,"href",s=i[0].instagramURL),f(e,"target","_blank"),f(e,"rel","noopener noreferrer"),f(e,"class","svelte-5c06sh")},m(c,o){I(c,e,o),_(e,t),_(t,n),a||(r=ee(e,"click",tt(i[6])),a=!0)},p(c,o){o&1&&l!==(l=c[0].name+"")&&ae(n,l),o&1&&s!==(s=c[0].instagramURL)&&f(e,"href",s)},d(c){c&&u(e),a=!1,r()}}}function ht(i){let e,t,l,n,s,a,r,c,o,d,b,g,k,T,U=i[0].room+"",B,R,A,C=i[0].meetingTime+"",y,N,h,te,ye,X,K,Se='<p class="svelte-5c06sh">View Description</p> <i class="ri-arrow-right-fill svelte-5c06sh"></i>',Te,Q,Z,le=i[0].description+"",fe,we,Y,se,Ve,x,j,ze='<i class="ri-arrow-left-fill svelte-5c06sh"></i> <p class="svelte-5c06sh">Close Description</p>',F,Le,He,S=i[3]&&qe();a=new at({props:{meta:i[0].imageURL,alt:i[0].name}});let L=i[2]&&We(i);function Ue(D,M){return D[0].instagramURL?ft:ut}let he=Ue(i),P=he(i);return{c(){e=m("div"),t=m("div"),l=m("div"),S&&S.c(),n=w(),s=m("button"),re(a.$$.fragment),r=w(),L&&L.c(),c=w(),o=m("div"),d=m("div"),b=m("div"),P.c(),g=w(),k=m("div"),T=m("span"),B=ne(U),R=w(),A=m("span"),y=ne(C),N=w(),h=m("div"),te=m("div"),ye=w(),X=m("div"),K=m("button"),K.innerHTML=Se,Te=w(),Q=m("div"),Z=m("p"),fe=ne(le),we=w(),Y=m("div"),se=m("div"),Ve=w(),x=m("div"),j=m("button"),j.innerHTML=ze,this.h()},l(D){e=v(D,"DIV",{class:!0});var M=p(e);t=v(M,"DIV",{class:!0});var q=p(t);l=v(q,"DIV",{class:!0});var $=p(l);S&&S.l($),n=V($),s=v($,"BUTTON",{class:!0});var Ae=p(s);oe(a.$$.fragment,Ae),Ae.forEach(u),r=V($),L&&L.l($),$.forEach(u),c=V(q),o=v(q,"DIV",{class:!0});var de=p(o);d=v(de,"DIV",{class:!0});var _e=p(d);b=v(_e,"DIV",{});var me=p(b);P.l(me),g=V(me),k=v(me,"DIV",{class:!0});var ve=p(k);T=v(ve,"SPAN",{class:!0});var Ne=p(T);B=ie(Ne,U),Ne.forEach(u),R=V(ve),A=v(ve,"SPAN",{class:!0});var Pe=p(A);y=ie(Pe,C),Pe.forEach(u),ve.forEach(u),me.forEach(u),N=V(_e),h=v(_e,"DIV",{});var be=p(h);te=v(be,"DIV",{class:!0}),p(te).forEach(u),ye=V(be),X=v(be,"DIV",{class:!0});var Oe=p(X);K=v(Oe,"BUTTON",{class:!0,"data-svelte-h":!0}),J(K)!=="svelte-1sdkxr7"&&(K.innerHTML=Se),Oe.forEach(u),be.forEach(u),_e.forEach(u),Te=V(de),Q=v(de,"DIV",{class:!0});var ge=p(Q);Z=v(ge,"P",{class:!0});var Be=p(Z);fe=ie(Be,le),Be.forEach(u),we=V(ge),Y=v(ge,"DIV",{});var ke=p(Y);se=v(ke,"DIV",{class:!0}),p(se).forEach(u),Ve=V(ke),x=v(ke,"DIV",{class:!0});var Fe=p(x);j=v(Fe,"BUTTON",{class:!0,"data-svelte-h":!0}),J(j)!=="svelte-kydjnl"&&(j.innerHTML=ze),Fe.forEach(u),ke.forEach(u),ge.forEach(u),de.forEach(u),q.forEach(u),M.forEach(u),this.h()},h(){f(s,"class","club__banner__icon svelte-5c06sh"),H(s,"icon-spin",i[2]),f(l,"class","club__banner svelte-5c06sh"),H(l,"rainbow",i[3]),E(l,"background-color",i[0].bannerColor),f(T,"class","club__info__room svelte-5c06sh"),f(A,"class","club__info__meeting-time svelte-5c06sh"),f(k,"class","club__info__subheading svelte-5c06sh"),f(te,"class","hr-div svelte-5c06sh"),f(K,"class","svelte-5c06sh"),f(X,"class","club__info__desc-button svelte-5c06sh"),f(d,"class","club__info club__info--front svelte-5c06sh"),f(Z,"class","club__info__desc svelte-5c06sh"),f(se,"class","hr-div svelte-5c06sh"),f(j,"class","svelte-5c06sh"),f(x,"class","club__info__desc-button svelte-5c06sh"),f(Q,"class","club__info club__info--back svelte-5c06sh"),f(o,"class","club__info-container svelte-5c06sh"),f(t,"class","club svelte-5c06sh"),f(e,"class","club__container svelte-5c06sh"),H(e,"selected",i[1])},m(D,M){I(D,e,M),_(e,t),_(t,l),S&&S.m(l,null),_(l,n),_(l,s),ce(a,s,null),_(l,r),L&&L.m(l,null),_(t,c),_(t,o),_(o,d),_(d,b),P.m(b,null),_(b,g),_(b,k),_(k,T),_(T,B),_(k,R),_(k,A),_(A,y),_(d,N),_(d,h),_(h,te),_(h,ye),_(h,X),_(X,K),_(o,Te),_(o,Q),_(Q,Z),_(Z,fe),_(Q,we),_(Q,Y),_(Y,se),_(Y,Ve),_(Y,x),_(x,j),F=!0,Le||(He=[ee(s,"click",i[4]),ee(K,"click",i[5]),ee(j,"click",i[5])],Le=!0)},p(D,[M]){D[3]?S||(S=qe(),S.c(),S.m(l,n)):S&&(S.d(1),S=null);const q={};M&1&&(q.meta=D[0].imageURL),M&1&&(q.alt=D[0].name),a.$set(q),(!F||M&4)&&H(s,"icon-spin",D[2]),D[2]?L?(L.p(D,M),M&4&&O(L,1)):(L=We(D),L.c(),O(L,1),L.m(l,null)):L&&(Me(),G(L,1,1,()=>{L=null}),Re()),(!F||M&8)&&H(l,"rainbow",D[3]),M&1&&E(l,"background-color",D[0].bannerColor),he===(he=Ue(D))&&P?P.p(D,M):(P.d(1),P=he(D),P&&(P.c(),P.m(b,g))),(!F||M&1)&&U!==(U=D[0].room+"")&&ae(B,U),(!F||M&1)&&C!==(C=D[0].meetingTime+"")&&ae(y,C),(!F||M&1)&&le!==(le=D[0].description+"")&&ae(fe,le),(!F||M&2)&&H(e,"selected",D[1])},i(D){F||(O(a.$$.fragment,D),O(L),F=!0)},o(D){G(a.$$.fragment,D),G(L),F=!1},d(D){D&&u(e),S&&S.d(),ue(a),L&&L.d(),P.d(),Le=!1,$e(He)}}}function dt(i,e,t){let l,{club:n}=e,s=!1,a=!1,r;function c(){if(a){t(2,a=!1),r&&(clearTimeout(r),r=null);return}t(2,a=!0),r=setTimeout(()=>t(2,a=!1),2500)}function o(){t(1,s=!s),t(2,a=!1),r&&clearTimeout(r)}function d(b){et.call(this,i,b)}return i.$$set=b=>{"club"in b&&t(0,n=b.club)},i.$$.update=()=>{i.$$.dirty&1&&t(3,l=n.bannerColor==="rainbow")},[n,s,a,l,c,o,d]}class _t extends De{constructor(e){super(),Ie(this,e,dt,ht,Ee,{club:0})}}function Ye(i){let e,t='<i class="ri-close-line svelte-4wr907"></i>',l,n;return{c(){e=m("button"),e.innerHTML=t,this.h()},l(s){e=v(s,"BUTTON",{class:!0,"data-svelte-h":!0}),J(e)!=="svelte-n6wc4n"&&(e.innerHTML=t),this.h()},h(){f(e,"class","close__icon svelte-4wr907")},m(s,a){I(s,e,a),l||(n=ee(e,"click",i[3]),l=!0)},p:W,d(s){s&&u(e),l=!1,n()}}}function mt(i){let e,t,l='<i class="ri-search-line"></i>',n,s,a,r,c,o=i[2]&&Ye(i);return{c(){e=m("div"),t=m("span"),t.innerHTML=l,n=w(),s=m("input"),a=w(),o&&o.c(),this.h()},l(d){e=v(d,"DIV",{class:!0});var b=p(e);t=v(b,"SPAN",{class:!0,"data-svelte-h":!0}),J(t)!=="svelte-gop4bi"&&(t.innerHTML=l),n=V(b),s=v(b,"INPUT",{type:!0,"aria-label":!0,class:!0,placeholder:!0}),a=V(b),o&&o.l(b),b.forEach(u),this.h()},h(){f(t,"class","search__icon svelte-4wr907"),f(s,"type","text"),f(s,"aria-label","Search clubs"),f(s,"class","search__input svelte-4wr907"),f(s,"placeholder",i[0]),f(e,"class","search svelte-4wr907")},m(d,b){I(d,e,b),_(e,t),_(e,n),_(e,s),Ge(s,i[1]),_(e,a),o&&o.m(e,null),r||(c=ee(s,"input",i[4]),r=!0)},p(d,[b]){b&1&&f(s,"placeholder",d[0]),b&2&&s.value!==d[1]&&Ge(s,d[1]),d[2]?o?o.p(d,b):(o=Ye(d),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},i:W,o:W,d(d){d&&u(e),o&&o.d(),r=!1,c()}}}function vt(i,e,t){let l;const n=lt();let{placeholder:s}=e,a="";function r(){t(1,a="")}function c(){a=this.value,t(1,a)}return i.$$set=o=>{"placeholder"in o&&t(0,s=o.placeholder)},i.$$.update=()=>{i.$$.dirty&2&&n("value-change",a),i.$$.dirty&2&&t(2,l=a.trim().length!=0)},[s,a,l,r,c]}class bt extends De{constructor(e){super(),Ie(this,e,vt,mt,Ee,{placeholder:0})}}function Je(i,e,t){const l=i.slice();return l[4]=e[t],l}function gt(i){let e,t="No clubs found :(";return{c(){e=m("p"),e.textContent=t,this.h()},l(l){e=v(l,"P",{class:!0,"data-svelte-h":!0}),J(e)!=="svelte-19434qu"&&(e.textContent=t),this.h()},h(){f(e,"class","clubs__grid__not-found svelte-zrr8sa")},m(l,n){I(l,e,n)},p:W,i:W,o:W,d(l){l&&u(e)}}}function kt(i){let e,t=[],l=new Map,n,s=Ce(i[1]);const a=r=>r[4];for(let r=0;r<s.length;r+=1){let c=Je(i,s,r),o=a(c);l.set(o,t[r]=Xe(o,c))}return{c(){e=m("div");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=v(r,"DIV",{class:!0});var c=p(e);for(let o=0;o<t.length;o+=1)t[o].l(c);c.forEach(u),this.h()},h(){f(e,"class","clubs__grid svelte-zrr8sa")},m(r,c){I(r,e,c);for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(e,null);n=!0},p(r,c){c&2&&(s=Ce(r[1]),Me(),t=nt(t,c,a,1,r,s,l,e,it,Xe,null,Je),Re())},i(r){if(!n){for(let c=0;c<s.length;c+=1)O(t[c]);n=!0}},o(r){for(let c=0;c<t.length;c+=1)G(t[c]);n=!1},d(r){r&&u(e);for(let c=0;c<t.length;c+=1)t[c].d()}}}function Xe(i,e){let t,l,n;return l=new _t({props:{club:e[4]}}),{key:i,first:null,c(){t=pe(),re(l.$$.fragment),this.h()},l(s){t=pe(),oe(l.$$.fragment,s),this.h()},h(){this.first=t},m(s,a){I(s,t,a),ce(l,s,a),n=!0},p(s,a){e=s;const r={};a&2&&(r.club=e[4]),l.$set(r)},i(s){n||(O(l.$$.fragment,s),n=!0)},o(s){G(l.$$.fragment,s),n=!1},d(s){s&&u(t),ue(l,s)}}}function pt(i){let e,t,l,n,s="Clubs",a,r,c,o,d,b=`Want to create a new club? Use this
			<a href="https://docs.google.com/forms/d/e/1FAIpQLSdIlle7_NF4P52azLB--275E3zdVoyYQT2eK6UICtsKiae3_w/viewform" target="_blank" rel="noopener noreferrer">Google Form</a>!`,g,k,T,U;e=new st({props:{title:Ct,description:Et,url:"https://rhhsstuco.ca/clubs",image:i[0].clubs[0].imageURL}}),c=new bt({props:{placeholder:"Search by club name, location, or time"}}),c.$on("value-change",i[2]);const B=[kt,gt],R=[];function A(C,y){return C[1].length?0:1}return k=A(i),T=R[k]=B[k](i),{c(){re(e.$$.fragment),t=w(),l=m("main"),n=m("h1"),n.textContent=s,a=w(),r=m("div"),re(c.$$.fragment),o=w(),d=m("p"),d.innerHTML=b,g=w(),T.c(),this.h()},l(C){oe(e.$$.fragment,C),t=V(C),l=v(C,"MAIN",{class:!0});var y=p(l);n=v(y,"H1",{class:!0,"data-svelte-h":!0}),J(n)!=="svelte-ify59d"&&(n.textContent=s),a=V(y),r=v(y,"DIV",{class:!0});var N=p(r);oe(c.$$.fragment,N),o=V(N),d=v(N,"P",{class:!0,"data-svelte-h":!0}),J(d)!=="svelte-1hnoi2f"&&(d.innerHTML=b),N.forEach(u),g=V(y),T.l(y),y.forEach(u),this.h()},h(){f(n,"class","svelte-zrr8sa"),f(d,"class","clubs__new svelte-zrr8sa"),f(r,"class","clubs__search svelte-zrr8sa"),f(l,"class","clubs svelte-zrr8sa")},m(C,y){ce(e,C,y),I(C,t,y),I(C,l,y),_(l,n),_(l,a),_(l,r),ce(c,r,null),_(r,o),_(r,d),_(l,g),R[k].m(l,null),U=!0},p(C,[y]){const N={};y&1&&(N.image=C[0].clubs[0].imageURL),e.$set(N);let h=k;k=A(C),k===h?R[k].p(C,y):(Me(),G(R[h],1,1,()=>{R[h]=null}),Re(),T=R[k],T?T.p(C,y):(T=R[k]=B[k](C),T.c()),O(T,1),T.m(l,null))},i(C){U||(O(e.$$.fragment,C),O(c.$$.fragment,C),O(T),U=!0)},o(C){G(e.$$.fragment,C),G(c.$$.fragment,C),G(T),U=!1},d(C){C&&(u(t),u(l)),ue(e,C),ue(c),R[k].d()}}}const Ct="Clubs | RHHS StuCo",Et="Want to find a club? You came to the right place! Here you can search for clubs that fit your interests.";function Dt(i,e,t){let l,{data:n}=e,s="";function a(r){t(3,s=r.detail.toLowerCase())}return i.$$set=r=>{"data"in r&&t(0,n=r.data)},i.$$.update=()=>{i.$$.dirty&9&&t(1,l=n.clubs.filter(r=>r.meetingTime.toLowerCase().includes(s)||r.name.toLowerCase().includes(s)||r.room.toLowerCase().includes(s)))},[n,l,a,s]}class Vt extends De{constructor(e){super(),Ie(this,e,Dt,pt,Ee,{data:0})}}export{Vt as component};
