import{F as L,aq as z,ar as B,q as I,d as M,D as A,as as P,w as j,H as h,at as D,x as g,y as N,C as G}from"./runtime.VibfJNUv.js";import{a as H}from"./render.CJfwLQTy.js";const K=()=>performance.now(),p={tick:a=>requestAnimationFrame(a),now:()=>K(),tasks:new Set};function O(a){p.tasks.forEach(t=>{t.c(a)||(p.tasks.delete(t),t.f())}),p.tasks.size!==0&&p.tick(O)}function U(a){let t;return p.tasks.size===0&&p.tick(O),{promise:new Promise(r=>{p.tasks.add(t={c:a,f:r})}),abort(){p.tasks.delete(t)}}}function k(a,t){a.dispatchEvent(new CustomEvent(t))}function W(a){if(a==="float")return"cssFloat";if(a==="offset")return"cssOffset";if(a.startsWith("--"))return a;const t=a.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function S(a){const t={},r=a.split(";");for(const i of r){const[c,v]=i.split(":");if(!c||v===void 0)break;const e=W(c.trim());t[e]=v.trim()}return t}const J=a=>a;function Y(a,t,r,i){var c=(a&D)!==0,v="both",e,l=t.inert,f,u;function n(){var s=G,_=A;g(null),N(null);try{return e??(e=r()(t,(i==null?void 0:i())??{},{direction:v}))}finally{g(s),N(_)}}var y={is_global:c,in(){t.inert=l,k(t,"introstart"),f=C(t,n(),u,1,()=>{k(t,"introend"),f==null||f.abort(),f=e=void 0})},out(s){t.inert=!0,k(t,"outrostart"),u=C(t,n(),f,0,()=>{k(t,"outroend"),s==null||s()})},stop:()=>{f==null||f.abort(),u==null||u.abort()}},d=A;if((d.transitions??(d.transitions=[])).push(y),H){var m=c;if(!m){for(var o=d.parent;o&&o.f&L;)for(;(o=o.parent)&&!(o.f&z););m=!o||(o.f&B)!==0}m&&I(()=>{M(()=>y.in())})}}function C(a,t,r,i,c){var v=i===1;if(P(t)){var e,l=!1;return j(()=>{if(!l){var _=t({direction:v?"in":"out"});e=C(a,_,r,i,c)}}),{abort:()=>{l=!0,e==null||e.abort()},deactivate:()=>e.deactivate(),reset:()=>e.reset(),t:()=>e.t()}}if(r==null||r.deactivate(),!(t!=null&&t.duration))return c(),{abort:h,deactivate:h,reset:h,t:()=>i};const{delay:f=0,css:u,tick:n,easing:y=J}=t;var d=[];if(v&&r===void 0&&(n&&n(0,1),u)){var m=S(u(0,1));d.push(m,m)}var o=()=>1-i,s=a.animate(d,{duration:f});return s.onfinish=()=>{var _=(r==null?void 0:r.t())??1-i;r==null||r.abort();var w=i-_,E=t.duration*Math.abs(w),T=[];if(E>0){if(u)for(var $=Math.ceil(E/16.666666666666668),b=0;b<=$;b+=1){var x=_+w*y(b/$),R=u(x,1-x);T.push(S(R))}o=()=>{var F=s.currentTime;return _+w*y(F/E)},n&&U(()=>{if(s.playState!=="running")return!1;var F=o();return n(F,1-F),!0})}s=a.animate(T,{duration:E,fill:"forwards"}),s.onfinish=()=>{o=()=>i,n==null||n(i,1-i),c()}},{abort:()=>{s&&(s.cancel(),s.effect=null,s.onfinish=h)},deactivate:()=>{c=h},reset:()=>{i===0&&(n==null||n(1,0))},t:()=>o()}}function Q(a){const t=a-1;return t*t*t+1}function q(a){const t=typeof a=="string"&&a.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[a,"px"]}function Z(a,{delay:t=0,duration:r=400,easing:i=Q,x:c=0,y:v=0,opacity:e=0}={}){const l=getComputedStyle(a),f=+l.opacity,u=l.transform==="none"?"":l.transform,n=f*(1-e),[y,d]=q(c),[m,o]=q(v);return{delay:t,duration:r,easing:i,css:(s,_)=>`
			transform: ${u} translate(${(1-s)*y}${d}, ${(1-s)*m}${o});
			opacity: ${f-n*_}`}}export{Z as f,Y as t};