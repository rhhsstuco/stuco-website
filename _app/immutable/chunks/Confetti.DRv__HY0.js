import{c as $,a as m,t as M}from"./disclose-version.CJC2IDF7.js";import{i as tt}from"./legacy.CXOZbtNN.js";import{p as et,h as it,f as nt,g as e,a as at,Y as ot,t as C,r as rt,Z as i}from"./runtime.DamBQiK-.js";import{i as st}from"./if.CS2cQMCp.js";import{e as lt,i as dt}from"./each.B7vWdueF.js";import{a as ft}from"./attributes.u1kV7g2C.js";import{t as s}from"./class.C0UF-BvJ.js";import{a as n}from"./props.h2nwFH25.js";import{o as ct}from"./index-client.CmV38DSu.js";var _t=M('<div class="confetti svelte-15ksp55"></div>'),mt=M('<div class="confetti-holder svelte-15ksp55"></div>');function zt(b,t){et(t,!1);let k=n(t,"size",8,10),u=n(t,"x",24,()=>[-.5,.5]),g=n(t,"y",24,()=>[.25,1]),l=n(t,"duration",8,2e3),d=n(t,"infinite",8,!1),f=n(t,"delay",24,()=>[0,50]),x=n(t,"colorRange",24,()=>[0,360]),c=n(t,"colorArray",24,()=>[]),z=n(t,"amount",8,50),_=n(t,"iterationCount",8,1),R=n(t,"fallDistance",8,"100px"),w=n(t,"rounded",8,!1),A=n(t,"cone",8,!1),D=n(t,"noGravity",8,!1),F=n(t,"xSpread",8,.15),G=n(t,"destroyOnComplete",8,!0),O=n(t,"disableForReducedMotion",8,!1),v=ot(!1);ct(()=>{!G()||d()||_()=="infinite"||setTimeout(()=>it(v,!0),(l()+f()[1])*_())});function a(r,o){return Math.random()*(o-r)+r}function S(){return c().length?c()[Math.round(Math.random()*(c().length-1))]:`hsl(${Math.round(a(x()[0],x()[1]))}, 75%, 50%)`}tt();var y=$(),q=nt(y);{var B=r=>{var o=mt();lt(o,5,()=>({length:z()}),dt,(T,ut)=>{var h=_t();const Y=i(()=>R()??""),Z=i(()=>k()??""),j=i(()=>S()??""),E=i(()=>a(-45,45)??""),H=i(()=>a(-45,45)??""),I=i(()=>a(-10,10)??""),J=i(()=>a(-10,10)??""),K=i(()=>a(-10,10)??""),L=i(()=>a(0,360)??""),N=i(()=>a(g()[0],g()[1])??""),P=i(()=>a(u()[0],u()[1])??""),Q=i(()=>.1*a(2,10)),U=i(()=>(d()?`calc(${l()}ms * var(--scale))`:`${l()}ms`)??""),V=i(()=>a(f()[0],f()[1])??""),W=i(()=>(d()?"infinite":_())??""),X=i(()=>1-F()),p=i(()=>`
        --fall-distance: ${e(Y)};
        --size: ${e(Z)}px;
        --color: ${e(j)};
        --skew: ${e(E)}deg,${e(H)}deg;
        --rotation-xyz: ${e(I)}, ${e(J)}, ${e(K)};
        --rotation-deg: ${e(L)}deg;
        --translate-y-multiplier: ${e(N)};
        --translate-x-multiplier: ${e(P)};
        --scale: ${e(Q)};
        --transition-duration: ${e(U)};
        --transition-delay: ${e(V)}ms;
        --transition-iteration-count: ${e(W)};
        --x-spread: ${e(X)}`);C(()=>ft(h,"style",e(p))),m(T,h)}),rt(o),C(()=>{s(o,"rounded",w()),s(o,"cone",A()),s(o,"no-gravity",D()),s(o,"reduced-motion",O())}),m(r,o)};st(q,r=>{e(v)||r(B)})}m(b,y),at()}export{zt as C};