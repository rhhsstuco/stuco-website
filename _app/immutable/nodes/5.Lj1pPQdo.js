import{l as be,f as he,a as b,t as y,i as ve}from"../chunks/disclose-version.BsqdIjIN.js";import{aM as ge,v as ye,o as xe,p as $,m as M,f as le,t as P,r as i,g as a,a as ee,aN as ke,al as d,c as l,s as n,n as ie,k as Z,aF as we}from"../chunks/runtime.VibfJNUv.js";import{p as v,i as U}from"../chunks/props.Cv3KtIbI.js";import{e as de,i as Ce,M as pe}from"../chunks/Metadata.Btm3ufe7.js";import{p as ze}from"../chunks/proxy.Bx2X1gXO.js";import{s as O}from"../chunks/render.CJfwLQTy.js";import{s as se,r as Re}from"../chunks/attributes.CH_8jG8S.js";import{t as D}from"../chunks/class.COaiat1X.js";import"../chunks/legacy.CZg9FF9U.js";import{i as Se}from"../chunks/lifecycle.QJf5_uyo.js";import{o as Le}from"../chunks/index-client.CXlMCzPc.js";import{P as Te}from"../chunks/Picture.CL5JhAtg.js";function T(t,e,s,o){var r=t.__styles??(t.__styles={});r[e]!==s&&(r[e]=s,s==null?t.style.removeProperty(e):t.style.setProperty(e,s,""))}function Me(t,e,s=e){var o=ge();be(t,"input",()=>{var r=oe(t)?ce(t.value):t.value;s(r),o&&r!==(r=e())&&(t.value=r??"")}),ye(()=>{var r=e();if(xe&&t.defaultValue!==t.value){s(t.value);return}oe(t)&&r===ce(t.value)||t.type==="date"&&!r&&!t.value||r!==t.value&&(t.value=r??"")})}function oe(t){var e=t.type;return e==="number"||e==="range"}function ce(t){return t===""?null:+t}var De=y('<div class="confetti svelte-15ksp55"></div>'),Ie=y('<div class="confetti-holder svelte-15ksp55"></div>');function Pe(t,e){$(e,!1);let s=v(e,"size",8,10),o=v(e,"x",24,()=>[-.5,.5]),r=v(e,"y",24,()=>[.25,1]),f=v(e,"duration",8,2e3),w=v(e,"infinite",8,!1),x=v(e,"delay",24,()=>[0,50]),m=v(e,"colorRange",24,()=>[0,360]),C=v(e,"colorArray",24,()=>[]),p=v(e,"amount",8,50),R=v(e,"iterationCount",8,1),_=v(e,"fallDistance",8,"100px"),h=v(e,"rounded",8,!1),L=v(e,"cone",8,!1),F=v(e,"noGravity",8,!1),V=v(e,"xSpread",8,.15),A=v(e,"destroyOnComplete",8,!0),N=v(e,"disableForReducedMotion",8,!1),B=ke(!1);Le(()=>{!A()||w()||R()=="infinite"||setTimeout(()=>M(B,!0),(f()+x()[1])*R())});function u(I,g){return Math.random()*(g-I)+I}function E(){return C().length?C()[Math.round(Math.random()*(C().length-1))]:`hsl(${Math.round(u(m()[0],m()[1]))}, 75%, 50%)`}Se();var K=he(),Q=le(K);U(Q,()=>!a(B),I=>{var g=Ie();de(g,5,()=>({length:p()}),Ce,(W,ne)=>{var G=De();const H=d(()=>_()??""),te=d(()=>s()??""),Y=d(()=>E()??""),q=d(()=>u(-45,45)??""),ae=d(()=>u(-45,45)??""),z=d(()=>u(-10,10)??""),c=d(()=>u(-10,10)??""),k=d(()=>u(-10,10)??""),S=d(()=>u(0,360)??""),j=d(()=>u(r()[0],r()[1])??""),J=d(()=>u(o()[0],o()[1])??""),X=d(()=>.1*u(2,10)),re=d(()=>(w()?`calc(${f()}ms * var(--scale))`:`${f()}ms`)??""),_e=d(()=>u(x()[0],x()[1])??""),ue=d(()=>(w()?"infinite":R())??""),fe=d(()=>1-V()),me=d(()=>`
        --fall-distance: ${a(H)};
        --size: ${a(te)}px;
        --color: ${a(Y)};
        --skew: ${a(q)}deg,${a(ae)}deg;
        --rotation-xyz: ${a(z)}, ${a(c)}, ${a(k)};
        --rotation-deg: ${a(S)}deg;
        --translate-y-multiplier: ${a(j)};
        --translate-x-multiplier: ${a(J)};
        --scale: ${a(X)};
        --transition-duration: ${a(re)};
        --transition-delay: ${a(_e)}ms;
        --transition-iteration-count: ${a(ue)};
        --x-spread: ${a(fe)}`);P(()=>se(G,"style",a(me))),b(W,G)}),i(g),P(()=>{D(g,"rounded",h()),D(g,"cone",L()),D(g,"no-gravity",F()),D(g,"reduced-motion",N())}),b(I,g)}),b(t,K),ee()}var Ue=y('<div class="svelte-h1dym6"></div> <div class="svelte-h1dym6"></div> <div class="svelte-h1dym6"></div> <div class="svelte-h1dym6"></div> <div class="svelte-h1dym6"></div> <div class="svelte-h1dym6"></div>',1),Fe=y('<div class="confetti svelte-h1dym6"><!></div>'),Ae=t=>t.stopPropagation(),Ne=y('<a target="_blank" rel="noopener noreferrer" class="svelte-h1dym6"><h2 class="club__info__title svelte-h1dym6"> </h2></a>'),Be=y('<h2 class="club__info__title svelte-h1dym6"> </h2>'),Ee=y('<div class="club__container svelte-h1dym6"><div class="club svelte-h1dym6"><div class="club__banner svelte-h1dym6"><!> <div class="club_banner__icon-wrapper svelte-h1dym6"><button class="club__banner__icon svelte-h1dym6"><!></button></div> <!></div> <div class="club__info-container svelte-h1dym6"><div class="club__info club__info--front svelte-h1dym6"><div class="svelte-h1dym6"><!> <div class="club__info__subheading svelte-h1dym6"><span class="club__info__room svelte-h1dym6"> </span> <span class="club__info__meeting-time svelte-h1dym6"> </span></div></div> <div class="svelte-h1dym6"><div class="hr-div svelte-h1dym6"></div> <div class="club__info__desc-button svelte-h1dym6"><button class="svelte-h1dym6"><p class="svelte-h1dym6">View Description</p> <i class="ri-arrow-right-fill svelte-h1dym6"></i></button></div></div></div> <div class="club__info club__info--back svelte-h1dym6"><p class="club__info__desc svelte-h1dym6"> </p> <div class="svelte-h1dym6"><div class="hr-div svelte-h1dym6"></div> <div class="club__info__desc-button svelte-h1dym6"><button class="svelte-h1dym6"><i class="ri-arrow-left-fill svelte-h1dym6"></i> <p class="svelte-h1dym6">Close Description</p></button></div></div></div></div></div></div>');function Ge(t,e){$(e,!0);let s=ie(!1),o=ie(!1),r,f=Z(()=>e.club.bannerColor==="rainbow");function w(){if(a(o)){M(o,!1),r&&(clearTimeout(r),r=null);return}M(o,!0),r=setTimeout(()=>M(o,!1),2500)}function x(){M(s,!a(s)),M(o,!1),r&&clearTimeout(r)}var m=Ee(),C=l(m),p=l(C),R=l(p);U(R,()=>a(f),z=>{var c=Ue(),k=le(c);T(k,"background-color","#ff3c40");var S=n(k,2);T(S,"background-color","#fe9843");var j=n(S,2);T(j,"background-color","#feef54");var J=n(j,2);T(J,"background-color","#00802d");var X=n(J,2);T(X,"background-color","#1558f5");var re=n(X,2);T(re,"background-color","#851f86"),b(z,c)});var _=n(R,2),h=l(_);h.__click=w;var L=l(h);Te(L,{get meta(){return e.club.imageURL},get alt(){return e.club.name}}),i(h),i(_);var F=n(_,2);U(F,()=>a(o),z=>{var c=Fe(),k=l(c),S=Z(()=>[`url(${e.club.imageURL.img.src})`]);Pe(k,{amount:30,delay:[0,250],size:50,xSpread:0,rounded:!0,get colorArray(){return a(S)}}),i(c),b(z,c)}),i(p);var V=n(p,2),A=l(V),N=l(A),B=l(N);U(B,()=>e.club.instagramURL,z=>{var c=Ne();c.__click=[Ae];var k=l(c),S=l(k,!0);i(k),i(c),P(()=>{se(c,"href",e.club.instagramURL),O(S,e.club.name)}),b(z,c)},z=>{var c=Be(),k=l(c,!0);i(c),P(()=>O(k,e.club.name)),b(z,c)});var u=n(B,2),E=l(u),K=l(E,!0);i(E);var Q=n(E,2),I=l(Q,!0);i(Q),i(u),i(N);var g=n(N,2),W=n(l(g),2),ne=l(W);ne.__click=x,i(W),i(g),i(A);var G=n(A,2),H=l(G),te=l(H,!0);i(H);var Y=n(H,2),q=n(l(Y),2),ae=l(q);ae.__click=x,i(q),i(Y),i(G),i(V),i(C),i(m),P(()=>{D(m,"selected",a(s)),D(p,"rainbow",a(f)),T(p,"background-color",e.club.bannerColor),D(h,"icon-spin",a(o)),O(K,e.club.room),O(I,e.club.meetingTime),O(te,e.club.description)}),b(t,m),ee()}ve(["click"]);function He(t,e){e("")}var Oe=y('<button class="close__icon svelte-4wr907" aria-label="clear the search bar"><i class="ri-close-line svelte-4wr907"></i></button>'),Ve=y('<div class="search svelte-4wr907"><span class="search__icon svelte-4wr907"><i class="ri-search-line"></i></span> <input type="text" aria-label="Search clubs" class="search__input svelte-4wr907"> <!></div>');function Ke(t,e){$(e,!0);let s=v(e,"value",15),o=Z(()=>s().trim().length!=0);var r=Ve(),f=n(l(r),2);Re(f);var w=n(f,2);U(w,()=>a(o),x=>{var m=Oe();m.__click=[He,s],b(x,m)}),i(r),P(()=>se(f,"placeholder",e.placeholder)),Me(f,s),b(t,r),ee()}ve(["click"]);var Qe=y('<div class="clubs__grid svelte-zrr8sa"></div>'),We=y('<p class="clubs__grid__not-found svelte-zrr8sa">No clubs found :(</p>'),Ye=y('<!> <main class="clubs svelte-zrr8sa"><h1 class="svelte-zrr8sa">Clubs</h1> <div class="clubs__search svelte-zrr8sa"><!> <p class="clubs__new svelte-zrr8sa">Want to create a new club? Use this <a href="https://docs.google.com/forms/d/e/1FAIpQLSdIlle7_NF4P52azLB--275E3zdVoyYQT2eK6UICtsKiae3_w/viewform" target="_blank" rel="noopener noreferrer">Google Form</a>!</p></div> <!></main>',1);function st(t,e){$(e,!0);let s=ie(""),o=Z(()=>e.data.clubs.filter(_=>_.meetingTime.toLowerCase().includes(a(s))||_.name.toLowerCase().includes(a(s))||_.room.toLowerCase().includes(a(s))));const r="Clubs | RHHS StuCo",f="Want to find a club? You came to the right place! Here you can search for clubs that fit your interests.";var w=Ye(),x=le(w);pe(x,{title:r,description:f,url:"https://rhhsstuco.ca/clubs",get image(){return e.data.clubs[0].imageURL}});var m=n(x,2),C=n(l(m),2),p=l(C);Ke(p,{get value(){return a(s)},set value(_){M(s,ze(_))},placeholder:"Search by club name, location, or time"}),we(2),i(C);var R=n(C,2);U(R,()=>a(o).length,_=>{var h=Qe();de(h,20,()=>a(o),L=>L,(L,F)=>{Ge(L,{get club(){return F}})}),i(h),b(_,h)},_=>{var h=We();b(_,h)}),i(m),b(t,w),ee()}export{st as component};
