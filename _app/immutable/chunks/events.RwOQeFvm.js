import{ar as f,al as l,X as w,M as y,aq as B,v as S,as as x,B as M}from"./runtime.B2NV0GWk.js";import{f as O}from"./disclose-version.CFuGu-tt.js";function b(r){var a=w,i=y;f(null),l(null);try{return r()}finally{f(a),l(i)}}function j(r,a,i,n=i){r.addEventListener(a,()=>b(i));const e=r.__on_r;e?r.__on_r=()=>{e(),n()}:r.__on_r=n,O()}const T=new Set,W=new Set;function D(r,a,i,n){function e(t){if(n.capture||N.call(a,t),!t.cancelBubble)return b(()=>i.call(this,t))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?S(()=>{a.addEventListener(r,e,n)}):a.addEventListener(r,e,n),e}function z(r,a,i,n,e){var t={capture:n,passive:e},o=D(r,a,i,t);(a===document.body||a===window||a===document)&&B(()=>{a.removeEventListener(r,o,t)})}function A(r){for(var a=0;a<r.length;a++)T.add(r[a]);for(var i of W)i(r)}function N(r){var g;var a=this,i=a.ownerDocument,n=r.type,e=((g=r.composedPath)==null?void 0:g.call(r))||[],t=e[0]||r.target,o=0,v=r.__root;if(v){var _=e.indexOf(v);if(_!==-1&&(a===document||a===window)){r.__root=a;return}var p=e.indexOf(a);if(p===-1)return;_<=p&&(o=_)}if(t=e[o]||r.target,t!==a){x(r,"currentTarget",{configurable:!0,get(){return t||i}});var E=w,L=y;f(null),l(null);try{for(var s,h=[];t!==null;){var d=t.assignedSlot||t.parentNode||t.host||null;try{var c=t["__"+n];if(c!==void 0&&!t.disabled)if(M(c)){var[k,...q]=c;k.apply(t,[r,...q])}else c.call(t,r)}catch(u){s?h.push(u):s=u}if(r.cancelBubble||d===a||d===null)break;t=d}if(s){for(let u of h)queueMicrotask(()=>{throw u});throw s}}finally{r.__root=a,delete r.currentTarget,f(E),l(L)}}}export{T as a,A as d,z as e,N as h,j as l,W as r};
