import{s as pe,r as ge,i as I,n as Y,f as u,o as Je,e as v,c as b,b as p,m as f,L as U,y as Xe,D as E,a as w,t as ne,g as V,d as se,I as J,h,K as te,j as ae,A as Ze,Q as xe,a5 as $e,a6 as Be,O as et}from"../chunks/scheduler.iZ0PAmE1.js";import{S as Ce,i as Ee,c as re,a as oe,m as ce,t as O,g as Ve,b as F,e as Le,d as ue}from"../chunks/index.wh6tflNQ.js";import{e as ke,M as tt,u as lt,o as it}from"../chunks/Metadata.k6IZ61aw.js";import{P as nt}from"../chunks/Picture.b59YzMmX.js";function Fe(s,e,t){const l=s.slice();return l[19]=e[t],l}function Ge(s){let e,t=ke({length:s[6]}),l=[];for(let n=0;n<t.length;n+=1)l[n]=Ke(Fe(s,t,n));return{c(){e=v("div");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){e=b(n,"DIV",{class:!0});var i=p(e);for(let a=0;a<l.length;a+=1)l[a].l(i);i.forEach(u),this.h()},h(){f(e,"class","confetti-holder svelte-15ksp55"),U(e,"rounded",s[9]),U(e,"cone",s[10]),U(e,"no-gravity",s[11]),U(e,"reduced-motion",s[13])},m(n,i){I(n,e,i);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(e,null)},p(n,i){if(i&37375){t=ke({length:n[6]});let a;for(a=0;a<t.length;a+=1){const r=Fe(n,t,a);l[a]?l[a].p(r,i):(l[a]=Ke(r),l[a].c(),l[a].m(e,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=t.length}i&512&&U(e,"rounded",n[9]),i&1024&&U(e,"cone",n[10]),i&2048&&U(e,"no-gravity",n[11]),i&8192&&U(e,"reduced-motion",n[13])},d(n){n&&u(e),Xe(l,n)}}}function Ke(s){let e;return{c(){e=v("div"),this.h()},l(t){e=b(t,"DIV",{class:!0,style:!0}),p(e).forEach(u),this.h()},h(){f(e,"class","confetti svelte-15ksp55"),E(e,"--fall-distance",s[8]),E(e,"--size",s[0]+"px"),E(e,"--color",s[15]()),E(e,"--skew",H(-45,45)+"deg,"+H(-45,45)+"deg"),E(e,"--rotation-xyz",H(-10,10)+", "+H(-10,10)+", "+H(-10,10)),E(e,"--rotation-deg",H(0,360)+"deg"),E(e,"--translate-y-multiplier",H(s[2][0],s[2][1])),E(e,"--translate-x-multiplier",H(s[1][0],s[1][1])),E(e,"--scale",.1*H(2,10)),E(e,"--transition-duration",s[4]?`calc(${s[3]}ms * var(--scale))`:`${s[3]}ms`),E(e,"--transition-delay",H(s[5][0],s[5][1])+"ms"),E(e,"--transition-iteration-count",s[4]?"infinite":s[7]),E(e,"--x-spread",1-s[12])},m(t,l){I(t,e,l)},p(t,l){l&256&&E(e,"--fall-distance",t[8]),l&1&&E(e,"--size",t[0]+"px"),l&4&&E(e,"--translate-y-multiplier",H(t[2][0],t[2][1])),l&2&&E(e,"--translate-x-multiplier",H(t[1][0],t[1][1])),l&24&&E(e,"--transition-duration",t[4]?`calc(${t[3]}ms * var(--scale))`:`${t[3]}ms`),l&32&&E(e,"--transition-delay",H(t[5][0],t[5][1])+"ms"),l&144&&E(e,"--transition-iteration-count",t[4]?"infinite":t[7]),l&4096&&E(e,"--x-spread",1-t[12])},d(t){t&&u(e)}}}function st(s){let e,t=!s[14]&&Ge(s);return{c(){t&&t.c(),e=ge()},l(l){t&&t.l(l),e=ge()},m(l,n){t&&t.m(l,n),I(l,e,n)},p(l,[n]){l[14]?t&&(t.d(1),t=null):t?t.p(l,n):(t=Ge(l),t.c(),t.m(e.parentNode,e))},i:Y,o:Y,d(l){l&&u(e),t&&t.d(l)}}}function H(s,e){return Math.random()*(e-s)+s}function at(s,e,t){let{size:l=10}=e,{x:n=[-.5,.5]}=e,{y:i=[.25,1]}=e,{duration:a=2e3}=e,{infinite:r=!1}=e,{delay:c=[0,50]}=e,{colorRange:o=[0,360]}=e,{colorArray:d=[]}=e,{amount:m=50}=e,{iterationCount:g=1}=e,{fallDistance:k="100px"}=e,{rounded:T=!1}=e,{cone:A=!1}=e,{noGravity:G=!1}=e,{xSpread:M=.15}=e,{destroyOnComplete:N=!0}=e,{disableForReducedMotion:C=!1}=e,y=!1;Je(()=>{!N||r||g=="infinite"||setTimeout(()=>t(14,y=!0),(a+c[1])*g)});function R(){return d.length?d[Math.round(Math.random()*(d.length-1))]:`hsl(${Math.round(H(o[0],o[1]))}, 75%, 50%)`}return s.$$set=_=>{"size"in _&&t(0,l=_.size),"x"in _&&t(1,n=_.x),"y"in _&&t(2,i=_.y),"duration"in _&&t(3,a=_.duration),"infinite"in _&&t(4,r=_.infinite),"delay"in _&&t(5,c=_.delay),"colorRange"in _&&t(16,o=_.colorRange),"colorArray"in _&&t(17,d=_.colorArray),"amount"in _&&t(6,m=_.amount),"iterationCount"in _&&t(7,g=_.iterationCount),"fallDistance"in _&&t(8,k=_.fallDistance),"rounded"in _&&t(9,T=_.rounded),"cone"in _&&t(10,A=_.cone),"noGravity"in _&&t(11,G=_.noGravity),"xSpread"in _&&t(12,M=_.xSpread),"destroyOnComplete"in _&&t(18,N=_.destroyOnComplete),"disableForReducedMotion"in _&&t(13,C=_.disableForReducedMotion)},[l,n,i,a,r,c,m,g,k,T,A,G,M,C,y,R,o,d,N]}class rt extends Ce{constructor(e){super(),Ee(this,e,at,st,pe,{size:0,x:1,y:2,duration:3,infinite:4,delay:5,colorRange:16,colorArray:17,amount:6,iterationCount:7,fallDistance:8,rounded:9,cone:10,noGravity:11,xSpread:12,destroyOnComplete:18,disableForReducedMotion:13})}}function Qe(s){let e,t,l,n,i,a,r,c,o,d,m;return{c(){e=v("div"),t=w(),l=v("div"),n=w(),i=v("div"),a=w(),r=v("div"),c=w(),o=v("div"),d=w(),m=v("div"),this.h()},l(g){e=b(g,"DIV",{class:!0}),p(e).forEach(u),t=V(g),l=b(g,"DIV",{class:!0}),p(l).forEach(u),n=V(g),i=b(g,"DIV",{class:!0}),p(i).forEach(u),a=V(g),r=b(g,"DIV",{class:!0}),p(r).forEach(u),c=V(g),o=b(g,"DIV",{class:!0}),p(o).forEach(u),d=V(g),m=b(g,"DIV",{class:!0}),p(m).forEach(u),this.h()},h(){f(e,"class","svelte-1mt3eio"),E(e,"background-color","#ff3c40"),f(l,"class","svelte-1mt3eio"),E(l,"background-color","#fe9843"),f(i,"class","svelte-1mt3eio"),E(i,"background-color","#feef54"),f(r,"class","svelte-1mt3eio"),E(r,"background-color","#00802d"),f(o,"class","svelte-1mt3eio"),E(o,"background-color","#1558f5"),f(m,"class","svelte-1mt3eio"),E(m,"background-color","#851f86")},m(g,k){I(g,e,k),I(g,t,k),I(g,l,k),I(g,n,k),I(g,i,k),I(g,a,k),I(g,r,k),I(g,c,k),I(g,o,k),I(g,d,k),I(g,m,k)},d(g){g&&(u(e),u(t),u(l),u(n),u(i),u(a),u(r),u(c),u(o),u(d),u(m))}}}function je(s){let e,t,l;return t=new rt({props:{amount:30,delay:[0,250],size:50,xSpread:0,rounded:!0,colorArray:[`url(${s[0].imageURL.img.src})`]}}),{c(){e=v("div"),re(t.$$.fragment),this.h()},l(n){e=b(n,"DIV",{class:!0});var i=p(e);oe(t.$$.fragment,i),i.forEach(u),this.h()},h(){f(e,"class","confetti svelte-1mt3eio")},m(n,i){I(n,e,i),ce(t,e,null),l=!0},p(n,i){const a={};i&1&&(a.colorArray=[`url(${n[0].imageURL.img.src})`]),t.$set(a)},i(n){l||(O(t.$$.fragment,n),l=!0)},o(n){F(t.$$.fragment,n),l=!1},d(n){n&&u(e),ue(t)}}}function ot(s){let e,t=s[0].name+"",l;return{c(){e=v("h2"),l=ne(t),this.h()},l(n){e=b(n,"H2",{class:!0});var i=p(e);l=se(i,t),i.forEach(u),this.h()},h(){f(e,"class","club__info__title svelte-1mt3eio")},m(n,i){I(n,e,i),h(e,l)},p(n,i){i&1&&t!==(t=n[0].name+"")&&ae(l,t)},d(n){n&&u(e)}}}function ct(s){let e,t,l=s[0].name+"",n,i,a,r;return{c(){e=v("a"),t=v("h2"),n=ne(l),this.h()},l(c){e=b(c,"A",{href:!0,target:!0,rel:!0,class:!0});var o=p(e);t=b(o,"H2",{class:!0});var d=p(t);n=se(d,l),d.forEach(u),o.forEach(u),this.h()},h(){f(t,"class","club__info__title svelte-1mt3eio"),f(e,"href",i=s[0].instagramURL),f(e,"target","_blank"),f(e,"rel","noopener noreferrer"),f(e,"class","svelte-1mt3eio")},m(c,o){I(c,e,o),h(e,t),h(t,n),a||(r=te(e,"click",$e(s[6])),a=!0)},p(c,o){o&1&&l!==(l=c[0].name+"")&&ae(n,l),o&1&&i!==(i=c[0].instagramURL)&&f(e,"href",i)},d(c){c&&u(e),a=!1,r()}}}function ut(s){let e,t,l,n,i,a,r,c,o,d,m,g,k,T=s[0].room+"",A,G,M,N=s[0].meetingTime+"",C,y,R,_,De,X,K,Me='<p class="svelte-1mt3eio">View Description</p> <i class="ri-arrow-right-fill svelte-1mt3eio"></i>',Ie,Q,Z,le=s[0].description+"",fe,ye,j,ie,Te,x,q,Re='<i class="ri-arrow-left-fill svelte-1mt3eio"></i> <p class="svelte-1mt3eio">Close Description</p>',B,we,Se,z=s[3]&&Qe();a=new nt({props:{meta:s[0].imageURL,alt:s[0].name}});let L=s[2]&&je(s);function ze(D,S){return D[0].instagramURL?ct:ot}let de=ze(s),P=de(s);return{c(){e=v("div"),t=v("div"),l=v("div"),z&&z.c(),n=w(),i=v("button"),re(a.$$.fragment),r=w(),L&&L.c(),c=w(),o=v("div"),d=v("div"),m=v("div"),P.c(),g=w(),k=v("span"),A=ne(T),G=w(),M=v("span"),C=ne(N),y=w(),R=v("div"),_=v("div"),De=w(),X=v("div"),K=v("button"),K.innerHTML=Me,Ie=w(),Q=v("div"),Z=v("p"),fe=ne(le),ye=w(),j=v("div"),ie=v("div"),Te=w(),x=v("div"),q=v("button"),q.innerHTML=Re,this.h()},l(D){e=b(D,"DIV",{class:!0});var S=p(e);t=b(S,"DIV",{class:!0});var W=p(t);l=b(W,"DIV",{class:!0});var $=p(l);z&&z.l($),n=V($),i=b($,"BUTTON",{class:!0});var He=p(i);oe(a.$$.fragment,He),He.forEach(u),r=V($),L&&L.l($),$.forEach(u),c=V(W),o=b(W,"DIV",{class:!0});var _e=p(o);d=b(_e,"DIV",{class:!0});var he=p(d);m=b(he,"DIV",{});var ee=p(m);P.l(ee),g=V(ee),k=b(ee,"SPAN",{class:!0});var Ue=p(k);A=se(Ue,T),Ue.forEach(u),G=V(ee),M=b(ee,"SPAN",{class:!0});var Ae=p(M);C=se(Ae,N),Ae.forEach(u),ee.forEach(u),y=V(he),R=b(he,"DIV",{class:!0});var me=p(R);_=b(me,"DIV",{class:!0}),p(_).forEach(u),De=V(me),X=b(me,"DIV",{class:!0});var Ne=p(X);K=b(Ne,"BUTTON",{class:!0,"data-svelte-h":!0}),J(K)!=="svelte-1sdkxr7"&&(K.innerHTML=Me),Ne.forEach(u),me.forEach(u),he.forEach(u),Ie=V(_e),Q=b(_e,"DIV",{class:!0});var ve=p(Q);Z=b(ve,"P",{class:!0});var Pe=p(Z);fe=se(Pe,le),Pe.forEach(u),ye=V(ve),j=b(ve,"DIV",{class:!0});var be=p(j);ie=b(be,"DIV",{class:!0}),p(ie).forEach(u),Te=V(be),x=b(be,"DIV",{class:!0});var Oe=p(x);q=b(Oe,"BUTTON",{class:!0,"data-svelte-h":!0}),J(q)!=="svelte-kydjnl"&&(q.innerHTML=Re),Oe.forEach(u),be.forEach(u),ve.forEach(u),_e.forEach(u),W.forEach(u),S.forEach(u),this.h()},h(){f(i,"class","club__banner__icon svelte-1mt3eio"),U(i,"icon-spin",s[2]),f(l,"class","club__banner svelte-1mt3eio"),U(l,"rainbow",s[3]),E(l,"background-color",s[0].bannerColor),f(k,"class","club__info__room svelte-1mt3eio"),f(M,"class","club__info__meeting-time svelte-1mt3eio"),f(_,"class","hr-div svelte-1mt3eio"),f(K,"class","svelte-1mt3eio"),f(X,"class","club__info__desc-button svelte-1mt3eio"),f(R,"class","club__info__desc-group"),f(d,"class","club__info club__info--front svelte-1mt3eio"),f(Z,"class","club__info__desc svelte-1mt3eio"),f(ie,"class","hr-div svelte-1mt3eio"),f(q,"class","svelte-1mt3eio"),f(x,"class","club__info__desc-button svelte-1mt3eio"),f(j,"class","club__info__desc-group"),f(Q,"class","club__info club__info--back svelte-1mt3eio"),f(o,"class","club__info-container svelte-1mt3eio"),f(t,"class","club svelte-1mt3eio"),f(e,"class","club__container svelte-1mt3eio"),U(e,"selected",s[1])},m(D,S){I(D,e,S),h(e,t),h(t,l),z&&z.m(l,null),h(l,n),h(l,i),ce(a,i,null),h(l,r),L&&L.m(l,null),h(t,c),h(t,o),h(o,d),h(d,m),P.m(m,null),h(m,g),h(m,k),h(k,A),h(m,G),h(m,M),h(M,C),h(d,y),h(d,R),h(R,_),h(R,De),h(R,X),h(X,K),h(o,Ie),h(o,Q),h(Q,Z),h(Z,fe),h(Q,ye),h(Q,j),h(j,ie),h(j,Te),h(j,x),h(x,q),B=!0,we||(Se=[te(i,"click",s[4]),te(K,"click",s[5]),te(q,"click",s[5])],we=!0)},p(D,[S]){D[3]?z||(z=Qe(),z.c(),z.m(l,n)):z&&(z.d(1),z=null);const W={};S&1&&(W.meta=D[0].imageURL),S&1&&(W.alt=D[0].name),a.$set(W),(!B||S&4)&&U(i,"icon-spin",D[2]),D[2]?L?(L.p(D,S),S&4&&O(L,1)):(L=je(D),L.c(),O(L,1),L.m(l,null)):L&&(Ve(),F(L,1,1,()=>{L=null}),Le()),(!B||S&8)&&U(l,"rainbow",D[3]),S&1&&E(l,"background-color",D[0].bannerColor),de===(de=ze(D))&&P?P.p(D,S):(P.d(1),P=de(D),P&&(P.c(),P.m(m,g))),(!B||S&1)&&T!==(T=D[0].room+"")&&ae(A,T),(!B||S&1)&&N!==(N=D[0].meetingTime+"")&&ae(C,N),(!B||S&1)&&le!==(le=D[0].description+"")&&ae(fe,le),(!B||S&2)&&U(e,"selected",D[1])},i(D){B||(O(a.$$.fragment,D),O(L),B=!0)},o(D){F(a.$$.fragment,D),F(L),B=!1},d(D){D&&u(e),z&&z.d(),ue(a),L&&L.d(),P.d(),we=!1,Ze(Se)}}}function ft(s,e,t){let l,{club:n}=e,i=!1,a=!1,r;function c(){if(a){t(2,a=!1),r&&(clearTimeout(r),r=null);return}t(2,a=!0),r=setTimeout(()=>t(2,a=!1),2500)}function o(){t(1,i=!i),t(2,a=!1),r&&clearTimeout(r)}function d(m){xe.call(this,s,m)}return s.$$set=m=>{"club"in m&&t(0,n=m.club)},s.$$.update=()=>{s.$$.dirty&1&&t(3,l=n.bannerColor==="rainbow")},[n,i,a,l,c,o,d]}class dt extends Ce{constructor(e){super(),Ee(this,e,ft,ut,pe,{club:0})}}function qe(s){let e,t='<i class="ri-close-line svelte-4wr907"></i>',l,n;return{c(){e=v("button"),e.innerHTML=t,this.h()},l(i){e=b(i,"BUTTON",{class:!0,"data-svelte-h":!0}),J(e)!=="svelte-n6wc4n"&&(e.innerHTML=t),this.h()},h(){f(e,"class","close__icon svelte-4wr907")},m(i,a){I(i,e,a),l||(n=te(e,"click",s[3]),l=!0)},p:Y,d(i){i&&u(e),l=!1,n()}}}function _t(s){let e,t,l='<i class="ri-search-line"></i>',n,i,a,r,c,o=s[2]&&qe(s);return{c(){e=v("div"),t=v("span"),t.innerHTML=l,n=w(),i=v("input"),a=w(),o&&o.c(),this.h()},l(d){e=b(d,"DIV",{class:!0});var m=p(e);t=b(m,"SPAN",{class:!0,"data-svelte-h":!0}),J(t)!=="svelte-gop4bi"&&(t.innerHTML=l),n=V(m),i=b(m,"INPUT",{type:!0,"aria-label":!0,class:!0,placeholder:!0}),a=V(m),o&&o.l(m),m.forEach(u),this.h()},h(){f(t,"class","search__icon svelte-4wr907"),f(i,"type","text"),f(i,"aria-label","Search clubs"),f(i,"class","search__input svelte-4wr907"),f(i,"placeholder",s[0]),f(e,"class","search svelte-4wr907")},m(d,m){I(d,e,m),h(e,t),h(e,n),h(e,i),Be(i,s[1]),h(e,a),o&&o.m(e,null),r||(c=te(i,"input",s[4]),r=!0)},p(d,[m]){m&1&&f(i,"placeholder",d[0]),m&2&&i.value!==d[1]&&Be(i,d[1]),d[2]?o?o.p(d,m):(o=qe(d),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},i:Y,o:Y,d(d){d&&u(e),o&&o.d(),r=!1,c()}}}function ht(s,e,t){let l;const n=et();let{placeholder:i}=e,a="";function r(){t(1,a="")}function c(){a=this.value,t(1,a)}return s.$$set=o=>{"placeholder"in o&&t(0,i=o.placeholder)},s.$$.update=()=>{s.$$.dirty&2&&n("value-change",a),s.$$.dirty&2&&t(2,l=a.trim().length!=0)},[i,a,l,r,c]}class mt extends Ce{constructor(e){super(),Ee(this,e,ht,_t,pe,{placeholder:0})}}function We(s,e,t){const l=s.slice();return l[4]=e[t],l}function vt(s){let e,t="No clubs found :(";return{c(){e=v("p"),e.textContent=t,this.h()},l(l){e=b(l,"P",{class:!0,"data-svelte-h":!0}),J(e)!=="svelte-19434qu"&&(e.textContent=t),this.h()},h(){f(e,"class","clubs__grid__not-found svelte-zrr8sa")},m(l,n){I(l,e,n)},p:Y,i:Y,o:Y,d(l){l&&u(e)}}}function bt(s){let e,t=[],l=new Map,n,i=ke(s[1]);const a=r=>r[4];for(let r=0;r<i.length;r+=1){let c=We(s,i,r),o=a(c);l.set(o,t[r]=Ye(o,c))}return{c(){e=v("div");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=b(r,"DIV",{class:!0});var c=p(e);for(let o=0;o<t.length;o+=1)t[o].l(c);c.forEach(u),this.h()},h(){f(e,"class","clubs__grid svelte-zrr8sa")},m(r,c){I(r,e,c);for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(e,null);n=!0},p(r,c){c&2&&(i=ke(r[1]),Ve(),t=lt(t,c,a,1,r,i,l,e,it,Ye,null,We),Le())},i(r){if(!n){for(let c=0;c<i.length;c+=1)O(t[c]);n=!0}},o(r){for(let c=0;c<t.length;c+=1)F(t[c]);n=!1},d(r){r&&u(e);for(let c=0;c<t.length;c+=1)t[c].d()}}}function Ye(s,e){let t,l,n;return l=new dt({props:{club:e[4]}}),{key:s,first:null,c(){t=ge(),re(l.$$.fragment),this.h()},l(i){t=ge(),oe(l.$$.fragment,i),this.h()},h(){this.first=t},m(i,a){I(i,t,a),ce(l,i,a),n=!0},p(i,a){e=i;const r={};a&2&&(r.club=e[4]),l.$set(r)},i(i){n||(O(l.$$.fragment,i),n=!0)},o(i){F(l.$$.fragment,i),n=!1},d(i){i&&u(t),ue(l,i)}}}function gt(s){let e,t,l,n,i="Clubs",a,r,c,o,d,m=`Want to create a new club? Use this
			<a href="https://docs.google.com/forms/d/e/1FAIpQLSdIlle7_NF4P52azLB--275E3zdVoyYQT2eK6UICtsKiae3_w/viewform" target="_blank" rel="noopener noreferrer">Google Form</a>!`,g,k,T,A;e=new tt({props:{title:kt,description:pt,url:"https://rhhsstuco.ca/clubs",image:s[0].clubs[0].imageURL}}),c=new mt({props:{placeholder:"Search by club name, location, or time"}}),c.$on("value-change",s[2]);const G=[bt,vt],M=[];function N(C,y){return C[1].length?0:1}return k=N(s),T=M[k]=G[k](s),{c(){re(e.$$.fragment),t=w(),l=v("main"),n=v("h1"),n.textContent=i,a=w(),r=v("div"),re(c.$$.fragment),o=w(),d=v("p"),d.innerHTML=m,g=w(),T.c(),this.h()},l(C){oe(e.$$.fragment,C),t=V(C),l=b(C,"MAIN",{class:!0});var y=p(l);n=b(y,"H1",{class:!0,"data-svelte-h":!0}),J(n)!=="svelte-ify59d"&&(n.textContent=i),a=V(y),r=b(y,"DIV",{class:!0});var R=p(r);oe(c.$$.fragment,R),o=V(R),d=b(R,"P",{class:!0,"data-svelte-h":!0}),J(d)!=="svelte-1hnoi2f"&&(d.innerHTML=m),R.forEach(u),g=V(y),T.l(y),y.forEach(u),this.h()},h(){f(n,"class","svelte-zrr8sa"),f(d,"class","clubs__new svelte-zrr8sa"),f(r,"class","clubs__search svelte-zrr8sa"),f(l,"class","clubs svelte-zrr8sa")},m(C,y){ce(e,C,y),I(C,t,y),I(C,l,y),h(l,n),h(l,a),h(l,r),ce(c,r,null),h(r,o),h(r,d),h(l,g),M[k].m(l,null),A=!0},p(C,[y]){const R={};y&1&&(R.image=C[0].clubs[0].imageURL),e.$set(R);let _=k;k=N(C),k===_?M[k].p(C,y):(Ve(),F(M[_],1,1,()=>{M[_]=null}),Le(),T=M[k],T?T.p(C,y):(T=M[k]=G[k](C),T.c()),O(T,1),T.m(l,null))},i(C){A||(O(e.$$.fragment,C),O(c.$$.fragment,C),O(T),A=!0)},o(C){F(e.$$.fragment,C),F(c.$$.fragment,C),F(T),A=!1},d(C){C&&(u(t),u(l)),ue(e,C),ue(c),M[k].d()}}}const kt="Clubs | RHHS StuCo",pt="Want to find a club? You came to the right place! Here you can search for clubs that fit your interests.";function Ct(s,e,t){let l,{data:n}=e,i="";function a(r){t(3,i=r.detail.toLowerCase())}return s.$$set=r=>{"data"in r&&t(0,n=r.data)},s.$$.update=()=>{s.$$.dirty&9&&t(1,l=n.clubs.filter(r=>r.meetingTime.toLowerCase().includes(i)||r.name.toLowerCase().includes(i)||r.room.toLowerCase().includes(i)))},[n,l,a,i]}class Tt extends Ce{constructor(e){super(),Ee(this,e,Ct,gt,pe,{data:0})}}export{Tt as component};
