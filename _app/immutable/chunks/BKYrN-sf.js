const bn=!1;var Pn=Array.isArray,$t=Array.prototype.indexOf,Fn=Array.from,Ln=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,Zt=Object.getOwnPropertyDescriptors,qn=Object.prototype,Mn=Array.prototype,zt=Object.getPrototypeOf;function Yn(t){return typeof t=="function"}const Hn=()=>{};function jn(t){return t()}function Et(t){for(var n=0;n<t.length;n++)t[n]()}const g=2,wt=4,Q=8,st=16,k=32,M=64,U=128,y=256,V=512,c=1024,x=2048,S=4096,C=8192,W=16384,Jt=32768,yt=65536,Bn=1<<17,Qt=1<<19,gt=1<<20,ct=Symbol("$state"),Un=Symbol("legacy props"),Vn=Symbol("");function Tt(t){return t===this.v}function Wt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Gn(t,n){return t!==n}function mt(t){return!Wt(t,this.v)}function Xt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function tn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function nn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function rn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Kn(){throw new Error("https://svelte.dev/e/hydration_failed")}function $n(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Zn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function zn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function en(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function an(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let X=!1;function Jn(){X=!0}const Qn=1,Wn=2,Xn=4,tr=8,nr=16,rr=1,er=2,ar=4,lr=8,sr=16,ur=4,or=1,fr=2,ln="[",sn="[!",un="]",At={},ir=Symbol();function It(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let f=null;function vt(t){f=t}function _r(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},X&&!n&&(f.l={s:null,u:null,r1:[],r2:ut(!1)})}function cr(t){const n=f;if(n!==null){const s=n.e;if(s!==null){var r=o,e=u;n.e=null;try{for(var a=0;a<s.length;a++){var l=s[a];Z(l.effect),$(l.reaction),bt(l.fn)}}finally{Z(r),$(e)}}f=n.p,n.m=!0}return{}}function tt(){return!X||f!==null&&f.l===null}function ut(t,n){var r={f:0,v:t,reactions:null,equals:Tt,rv:0,wv:0};return r}function vr(t){return kt(ut(t))}function on(t,n=!1){var e;const r=ut(t);return n||(r.equals=mt),X&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function pr(t,n=!1){return kt(on(t,n))}function kt(t){return u!==null&&!w&&u.f&g&&(m===null?An([t]):m.push(t)),t}function fn(t,n){return u!==null&&!w&&tt()&&u.f&(g|st)&&(m===null||!m.includes(t))&&an(),_n(t,n)}function _n(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Bt(),xt(t,x),tt()&&o!==null&&o.f&c&&!(o.f&(k|M))&&(I===null?In([t]):I.push(t))),n}function hr(t,n=1){var r=Kt(t),e=n===1?r++:r--;return fn(t,r),e}function xt(t,n){var r=t.reactions;if(r!==null)for(var e=tt(),a=r.length,l=0;l<a;l++){var s=r[l],i=s.f;i&x||!e&&s===o||(A(s,n),i&(c|y)&&(i&g?xt(s,S):rt(s)))}}let D=!1;function dr(t){D=t}let T;function F(t){if(t===null)throw It(),At;return T=t}function Er(){return F(N(T))}function wr(t){if(D){if(N(T)!==null)throw It(),At;T=t}}function yr(t=1){if(D){for(var n=t,r=T;n--;)r=N(r);T=r}}function gr(){for(var t=0,n=T;;){if(n.nodeType===8){var r=n.data;if(r===un){if(t===0)return n;t-=1}else(r===ln||r===sn)&&(t+=1)}var e=N(n);n.remove(),n=e}}var pt,cn,vn,Rt,Dt;function Tr(){if(pt===void 0){pt=window,cn=document,vn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;Rt=_t(n,"firstChild").get,Dt=_t(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function et(t=""){return document.createTextNode(t)}function at(t){return Rt.call(t)}function N(t){return Dt.call(t)}function mr(t,n){if(!D)return at(t);var r=at(T);if(r===null)r=T.appendChild(et());else if(n&&r.nodeType!==3){var e=et();return r==null||r.before(e),F(e),e}return F(r),r}function Ar(t,n){if(!D){var r=at(t);return r instanceof Comment&&r.data===""?N(r):r}return T}function Ir(t,n=1,r=!1){let e=D?T:t;for(var a;n--;)a=e,e=N(e);if(!D)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var s=et();return e===null?a==null||a.after(s):e.before(s),F(s),s}return F(e),e}function kr(t){t.textContent=""}function Ot(t){var n=g|x,r=u!==null&&u.f&g?u:null;return o===null||r!==null&&r.f&y?n|=y:o.f|=gt,{ctx:f,deps:null,effects:null,equals:Tt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??o}}function xr(t){const n=Ot(t);return n.equals=mt,n}function St(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)O(n[r])}}function pn(t){for(var n=t.parent;n!==null;){if(!(n.f&g))return n;n=n.parent}return null}function hn(t){var n,r=o;Z(pn(t));try{St(t),n=Vt(t)}finally{Z(r)}return n}function Nt(t){var n=hn(t),r=(R||t.f&y)&&t.deps!==null?S:c;A(t,r),t.equals(n)||(t.v=n,t.wv=Bt())}function Ct(t){o===null&&u===null&&nn(),u!==null&&u.f&y&&o===null&&tn(),ot&&Xt()}function dn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function b(t,n,r,e=!0){var a=(t&M)!==0,l=o,s={ctx:f,deps:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:n,last:null,next:null,parent:a?null:l,prev:null,teardown:null,transitions:null,wv:0};if(r)try{ft(s),s.f|=Jt}catch(E){throw O(s),E}else n!==null&&rt(s);var i=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(gt|U))===0;if(!i&&!a&&e&&(l!==null&&dn(s,l),u!==null&&u.f&g)){var _=u;(_.effects??(_.effects=[])).push(s)}return s}function Rr(){return u!==null&&!w}function Dr(t){const n=b(Q,null,!1);return A(n,c),n.teardown=t,n}function Or(t){Ct();var n=o!==null&&(o.f&k)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=bt(t);return e}}function Sr(t){return Ct(),En(t)}function Nr(t){const n=b(M,t,!0);return(r={})=>new Promise(e=>{r.outro?gn(n,()=>{O(n),e(void 0)}):(O(n),e(void 0))})}function bt(t){return b(wt,t,!1)}function En(t){return b(Q,t,!0)}function Cr(t,n=[],r=Ot){const e=n.map(r);return wn(()=>t(...e.map(Kt)))}function wn(t,n=0){return b(Q|st|n,t,!0)}function br(t,n=!0){return b(Q|k,t,!0,n)}function Pt(t){var n=t.teardown;if(n!==null){const r=ot,e=u;dt(!0),$(null);try{n.call(null)}finally{dt(r),$(e)}}}function Ft(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;O(r,n),r=e}}function yn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&k||O(n),n=r}}function O(t,n=!0){var r=!1;if((n||t.f&Qt)&&t.nodes_start!==null){for(var e=t.nodes_start,a=t.nodes_end;e!==null;){var l=e===a?null:N(e);e.remove(),e=l}r=!0}Ft(t,n&&!r),J(t,0),A(t,W);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();Pt(t);var i=t.parent;i!==null&&i.first!==null&&Lt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Lt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function gn(t,n){var r=[];qt(t,r,!0),Tn(r,()=>{O(t),n&&n()})}function Tn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var a of t)a.out(e)}else n()}function qt(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var a=e.next,l=(e.f&yt)!==0||(e.f&k)!==0;qt(e,n,l?r:!1),e=a}}}function Pr(t){Mt(t,!0)}function Mt(t,n){if(t.f&C){t.f^=C,t.f&c||(t.f^=c),Y(t)&&(A(t,x),rt(t));for(var r=t.first;r!==null;){var e=r.next,a=(r.f&yt)!==0||(r.f&k)!==0;Mt(r,a?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}const mn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let L=[],q=[];function Yt(){var t=L;L=[],Et(t)}function Ht(){var t=q;q=[],Et(t)}function Fr(t){L.length===0&&queueMicrotask(Yt),L.push(t)}function Lr(t){q.length===0&&mn(Ht),q.push(t)}function ht(){L.length>0&&Yt(),q.length>0&&Ht()}let j=!1,G=!1,K=null,B=!1,ot=!1;function dt(t){ot=t}let P=[];let u=null,w=!1;function $(t){u=t}let o=null;function Z(t){o=t}let m=null;function An(t){m=t}let v=null,d=0,I=null;function In(t){I=t}let jt=1,z=0,R=!1;function Bt(){return++jt}function Y(t){var p;var n=t.f;if(n&x)return!0;if(n&S){var r=t.deps,e=(n&y)!==0;if(r!==null){var a,l,s=(n&V)!==0,i=e&&o!==null&&!R,_=r.length;if(s||i){var E=t,H=E.parent;for(a=0;a<_;a++)l=r[a],(s||!((p=l==null?void 0:l.reactions)!=null&&p.includes(E)))&&(l.reactions??(l.reactions=[])).push(E);s&&(E.f^=V),i&&H!==null&&!(H.f&y)&&(E.f^=y)}for(a=0;a<_;a++)if(l=r[a],Y(l)&&Nt(l),l.wv>t.wv)return!0}(!e||o!==null&&!R)&&A(t,c)}return!1}function kn(t,n){for(var r=n;r!==null;){if(r.f&U)try{r.fn(t);return}catch{r.f^=U}r=r.parent}throw j=!1,t}function xn(t){return(t.f&W)===0&&(t.parent===null||(t.parent.f&U)===0)}function nt(t,n,r,e){if(j){if(r===null&&(j=!1),xn(n))throw t;return}r!==null&&(j=!0);{kn(t,n);return}}function Ut(t,n,r=!0){var e=t.reactions;if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];l.f&g?Ut(l,n,!1):n===l&&(r?A(l,x):l.f&c&&A(l,S),rt(l))}}function Vt(t){var it;var n=v,r=d,e=I,a=u,l=R,s=m,i=f,_=w,E=t.f;v=null,d=0,I=null,R=(E&y)!==0&&(w||!B||u===null),u=E&(k|M)?null:t,m=null,vt(t.ctx),w=!1,z++;try{var H=(0,t.fn)(),p=t.deps;if(v!==null){var h;if(J(t,d),p!==null&&d>0)for(p.length=d+v.length,h=0;h<v.length;h++)p[d+h]=v[h];else t.deps=p=v;if(!R)for(h=d;h<p.length;h++)((it=p[h]).reactions??(it.reactions=[])).push(t)}else p!==null&&d<p.length&&(J(t,d),p.length=d);if(tt()&&I!==null&&!w&&p!==null&&!(t.f&(g|S|x)))for(h=0;h<I.length;h++)Ut(I[h],t);return a!==null&&z++,H}finally{v=n,d=r,I=e,u=a,R=l,m=s,vt(i),w=_}}function Rn(t,n){let r=n.reactions;if(r!==null){var e=$t.call(r,t);if(e!==-1){var a=r.length-1;a===0?r=n.reactions=null:(r[e]=r[a],r.pop())}}r===null&&n.f&g&&(v===null||!v.includes(n))&&(A(n,S),n.f&(y|V)||(n.f^=V),St(n),J(n,0))}function J(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Rn(t,r[e])}function ft(t){var n=t.f;if(!(n&W)){A(t,c);var r=o,e=f,a=B;o=t,B=!0;try{n&st?yn(t):Ft(t),Pt(t);var l=Vt(t);t.teardown=typeof l=="function"?l:null,t.wv=jt;var s=t.deps,i}catch(_){nt(_,t,r,e||t.ctx)}finally{B=a,o=r}}}function Dn(){try{rn()}catch(t){if(K!==null)nt(t,K,null);else throw t}}function Gt(){try{for(var t=0;P.length>0;){t++>1e3&&Dn();var n=P,r=n.length;P=[];for(var e=0;e<r;e++){var a=n[e];a.f&c||(a.f^=c);var l=Sn(a);On(l)}}}finally{G=!1,K=null}}function On(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(W|C)))try{Y(e)&&(ft(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Lt(e):e.fn=null))}catch(a){nt(a,e,null,e.ctx)}}}function rt(t){G||(G=!0,queueMicrotask(Gt));for(var n=K=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(M|k)){if(!(r&c))return;n.f^=c}}P.push(n)}function Sn(t){for(var n=[],r=t.first;r!==null;){var e=r.f,a=(e&k)!==0,l=a&&(e&c)!==0;if(!l&&!(e&C)){if(e&wt)n.push(r);else if(a)r.f^=c;else{var s=u;try{u=r,Y(r)&&ft(r)}catch(E){nt(E,r,null,r.ctx)}finally{u=s}}var i=r.first;if(i!==null){r=i;continue}}var _=r.parent;for(r=r.next;r===null&&_!==null;)r=_.next,_=_.parent}return n}function Nn(t){var n;for(ht();P.length>0;)G=!0,Gt(),ht();return n}async function qr(){await Promise.resolve(),Nn()}function Kt(t){var n=t.f,r=(n&g)!==0;if(u!==null&&!w){m!==null&&m.includes(t)&&en();var e=u.deps;t.rv<z&&(t.rv=z,v===null&&e!==null&&e[d]===t?d++:v===null?v=[t]:(!R||!v.includes(t))&&v.push(t))}else if(r&&t.deps===null&&t.effects===null){var a=t,l=a.parent;l!==null&&!(l.f&y)&&(a.f^=y)}return r&&(a=t,Y(a)&&Nt(a)),t.v}function Mr(t){var n=w;try{return w=!0,t()}finally{w=n}}const Cn=~(x|S|c);function A(t,n){t.f=t.f&Cn|n}function Yr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ct in t)lt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ct in r&&lt(r)}}}function lt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{lt(t[e],n)}catch{}const r=zt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Zt(r);for(let a in e){const l=e[a].get;if(l)try{l.call(t)}catch{}}}}}export{nr as $,wn as A,F as B,Er as C,gr as D,Xn as E,dr as F,T as G,sn as H,Pr as I,br as J,gn as K,C as L,Fn as M,Qn as N,_n as O,Wn as P,qt as Q,kr as R,ct as S,Tn as T,ir as U,O as V,at as W,xr as X,un as Y,tr as Z,on as _,cr as a,N as a0,yt as a1,Hn as a2,$ as a3,Z as a4,Vn as a5,u as a6,Zt as a7,Lr as a8,Or as a9,Kn as aA,Nr as aB,st as aC,Jt as aD,Yn as aE,ur as aF,Rr as aG,qr as aH,Nn as aI,Ln as aJ,Dr as aK,vn as aL,or as aM,fr as aN,Gn as aO,Wt as aP,hr as aQ,yr as aa,pr as ab,Sr as ac,Et as ad,f as ae,jn as af,Yr as ag,Ot as ah,Jn as ai,It as aj,At as ak,$n as al,Bn as am,ar as an,mt as ao,rr as ap,X as aq,er as ar,lr as as,Un as at,sr as au,bn as av,cn as aw,Qt as ax,ln as ay,Tr as az,En as b,mr as c,vr as d,bt as e,Ar as f,Kt as g,D as h,tt as i,fn as j,Mn as k,ut as l,Zn as m,_t as n,qn as o,_r as p,Fr as q,wr as r,Ir as s,Cr as t,Mr as u,o as v,zn as w,zt as x,Pn as y,et as z};
