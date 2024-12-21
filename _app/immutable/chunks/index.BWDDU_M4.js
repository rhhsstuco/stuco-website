import{V as B,aD as L,aE as z,e as G,u as I,B as g,aF as M,q as P,X as y,aG as j,a9 as x,aa as N,O as D}from"./runtime.DamBQiK-.js";import{a as K}from"./render.DiXaFIKv.js";const U=()=>performance.now(),l={tick:a=>requestAnimationFrame(a),now:()=>U(),tasks:new Set};function R(){const a=l.now();l.tasks.forEach(t=>{t.c(a)||(l.tasks.delete(t),t.f())}),l.tasks.size!==0&&l.tick(R)}function V(a){let t;return l.tasks.size===0&&l.tick(R),{promise:new Promise(r=>{l.tasks.add(t={c:a,f:r})}),abort(){l.tasks.delete(t)}}}function F(a,t){a.dispatchEvent(new CustomEvent(t))}function W(a){if(a==="float")return"cssFloat";if(a==="offset")return"cssOffset";if(a.startsWith("--"))return a;const t=a.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function O(a){const t={},r=a.split(";");for(const i of r){const[c,v]=i.split(":");if(!c||v===void 0)break;const e=W(c.trim());t[e]=v.trim()}return t}const X=a=>a;function Y(a,t,r,i){var c=(a&j)!==0,v="both",e,m=t.inert,f,u;function n(){var s=D,_=g;x(null),N(null);try{return e??(e=r()(t,(i==null?void 0:i())??{},{direction:v}))}finally{x(s),N(_)}}var h={is_global:c,in(){t.inert=m,F(t,"introstart"),f=T(t,n(),u,1,()=>{F(t,"introend"),f==null||f.abort(),f=e=void 0})},out(s){t.inert=!0,F(t,"outrostart"),u=T(t,n(),f,0,()=>{F(t,"outroend"),s==null||s()})},stop:()=>{f==null||f.abort(),u==null||u.abort()}},d=g;if((d.transitions??(d.transitions=[])).push(h),K){var p=c;if(!p){for(var o=d.parent;o&&o.f&B;)for(;(o=o.parent)&&!(o.f&L););p=!o||(o.f&z)!==0}p&&G(()=>{I(()=>h.in())})}}function T(a,t,r,i,c){var v=i===1;if(M(t)){var e,m=!1;return P(()=>{if(!m){var _=t({direction:v?"in":"out"});e=T(a,_,r,i,c)}}),{abort:()=>{m=!0,e==null||e.abort()},deactivate:()=>e.deactivate(),reset:()=>e.reset(),t:()=>e.t()}}if(r==null||r.deactivate(),!(t!=null&&t.duration))return c(),{abort:y,deactivate:y,reset:y,t:()=>i};const{delay:f=0,css:u,tick:n,easing:h=X}=t;var d=[];if(v&&r===void 0&&(n&&n(0,1),u)){var p=O(u(0,1));d.push(p,p)}var o=()=>1-i,s=a.animate(d,{duration:f});return s.onfinish=()=>{var _=(r==null?void 0:r.t())??1-i;r==null||r.abort();var k=i-_,E=t.duration*Math.abs(k),C=[];if(E>0){if(u)for(var $=Math.ceil(E/16.666666666666668),b=0;b<=$;b+=1){var A=_+k*h(b/$),q=u(A,1-A);C.push(O(q))}o=()=>{var w=s.currentTime;return _+k*h(w/E)},n&&V(()=>{if(s.playState!=="running")return!1;var w=o();return n(w,1-w),!0})}s=a.animate(C,{duration:E,fill:"forwards"}),s.onfinish=()=>{o=()=>i,n==null||n(i,1-i),c()}},{abort:()=>{s&&(s.cancel(),s.effect=null,s.onfinish=y)},deactivate:()=>{c=y},reset:()=>{i===0&&(n==null||n(1,0))},t:()=>o()}}function H(a){const t=a-1;return t*t*t+1}function S(a){const t=typeof a=="string"&&a.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[a,"px"]}function Z(a,{delay:t=0,duration:r=400,easing:i=H,x:c=0,y:v=0,opacity:e=0}={}){const m=getComputedStyle(a),f=+m.opacity,u=m.transform==="none"?"":m.transform,n=f*(1-e),[h,d]=S(c),[p,o]=S(v);return{delay:t,duration:r,easing:i,css:(s,_)=>`
			transform: ${u} translate(${(1-s)*h}${d}, ${(1-s)*p}${o});
			opacity: ${f-n*_}`}}export{Z as f,Y as t};