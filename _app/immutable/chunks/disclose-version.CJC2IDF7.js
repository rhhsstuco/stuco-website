import{a9 as v,aa as h,O as M,B as p,q as k,aL as q,aK as A,n as C,j as w,M as L,aM as D,aN as I,i as m,x as u,m as R,l as W}from"./runtime.DamBQiK-.js";let T=!1;function j(){T||(T=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var r;if(!e.defaultPrevented)for(const t of e.target.elements)(r=t.__on_r)==null||r.call(t)})},{capture:!0}))}function N(e){var r=M,t=p;v(null),h(null);try{return e()}finally{v(r),h(t)}}function z(e,r,t,i=t){e.addEventListener(r,()=>N(t));const a=e.__on_r;a?e.__on_r=()=>{a(),i(!0)}:e.__on_r=()=>i(!0),j()}const F=new Set,U=new Set;function P(e,r,t,i){function a(n){if(i.capture||G.call(r,n),!n.cancelBubble)return N(()=>t.call(this,n))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?k(()=>{r.addEventListener(e,a,i)}):r.addEventListener(e,a,i),a}function J(e,r,t,i={}){var a=P(r,e,t,i);return()=>{e.removeEventListener(r,a,i)}}function Q(e,r,t,i,a){var n={capture:i,passive:a},o=P(e,r,t,n);(r===document.body||r===window||r===document)&&q(()=>{r.removeEventListener(e,o,n)})}function X(e){for(var r=0;r<e.length;r++)F.add(e[r]);for(var t of U)t(e)}function G(e){var b;var r=this,t=r.ownerDocument,i=e.type,a=((b=e.composedPath)==null?void 0:b.call(e))||[],n=a[0]||e.target,o=0,c=e.__root;if(c){var f=a.indexOf(c);if(f!==-1&&(r===document||r===window)){e.__root=r;return}var y=a.indexOf(r);if(y===-1)return;f<=y&&(o=f)}if(n=a[o]||e.target,n!==r){A(e,"currentTarget",{configurable:!0,get(){return n||t}});var x=M,O=p;v(null),h(null);try{for(var _,E=[];n!==null;){var g=n.assignedSlot||n.parentNode||n.host||null;try{var l=n["__"+i];if(l!==void 0&&!n.disabled)if(C(l)){var[S,...B]=l;S.apply(n,[e,...B])}else l.call(n,e)}catch(d){_?E.push(d):_=d}if(e.cancelBubble||g===r||g===null)break;n=g}if(_){for(let d of E)queueMicrotask(()=>{throw d});throw _}}finally{e.__root=r,delete e.currentTarget,v(x),h(O)}}}function H(e){var r=document.createElement("template");return r.innerHTML=e,r.content}function s(e,r){var t=p;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=r)}function Y(e,r){var t=(r&D)!==0,i=(r&I)!==0,a,n=!e.startsWith("<!>");return()=>{if(m)return s(u,null),u;a===void 0&&(a=H(n?e:"<!>"+e),t||(a=L(a)));var o=i?document.importNode(a,!0):a.cloneNode(!0);if(t){var c=L(o),f=o.lastChild;s(c,f)}else s(o,o);return o}}function Z(e=""){if(!m){var r=w(e+"");return s(r,r),r}var t=u;return t.nodeType!==3&&(t.before(t=w()),W(t)),s(t,t),t}function $(){if(m)return s(u,null),u;var e=document.createDocumentFragment(),r=document.createComment(""),t=w();return e.append(r,t),s(r,t),e}function ee(e,r){if(m){p.nodes_end=u,R();return}e!==null&&e.before(r)}const K="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(K);export{ee as a,s as b,$ as c,H as d,Z as e,j as f,F as g,G as h,X as i,Q as j,z as l,J as o,U as r,Y as t};
