import{al as se,E as ue,am as re,w,Y as k,T as oe,R as ve,an as te,a1 as ce,a2 as K,a3 as O,J as N,ao as M,$ as ne,G as ie,a0 as de,v as _e,D as P,ap as q,aq as Q,ar as z,as as me,at as he,au as pe,I as Ee,Z as ge,av as Ae,C as Ie,aw as Te,af as xe,N as W,ax as we,V as ye,ay as be,p as Ce,a as Ne,f as j,s as y,t as L,H as De,az as Me}from"./runtime.gS9Dhdqj.js";import{a as V,t as B}from"./disclose-version.BQ5qK4J4.js";import{h as He}from"./store.Ci3Dg_he.js";import{i as $}from"./props.KBWi7S6r.js";import{s as Re}from"./snippet.hJUhzIVd.js";import{s as b}from"./attributes.CyzGzDwD.js";function Xe(f,e){return e}function Se(f,e,a,u){for(var v=[],c=e.length,l=0;l<c;l++)me(e[l].e,v,!0);var d=c>0&&v.length===0&&a!==null;if(d){var m=a.parentNode;he(m),m.append(a),u.clear(),x(f,e[0].prev,e[c-1].next)}pe(v,()=>{for(var _=0;_<c;_++){var o=e[_];d||(u.delete(o.k),x(f,o.prev,o.next)),Ee(o.e,!d)}})}function Ze(f,e,a,u,v,c=null){var l=f,d={flags:e,items:new Map,first:null},m=(e&re)!==0;if(m){var _=f;l=w?k(ge(_)):_.appendChild(se())}w&&oe();var o=null,h=!1;ue(()=>{var r=a(),n=ve(r)?r:r==null?[]:te(r),s=n.length;if(h&&s===0)return;h=s===0;let I=!1;if(w){var E=l.data===ce;E!==(s===0)&&(l=K(),k(l),O(!1),I=!0)}if(w){for(var g=null,A,p=0;p<s;p++){if(N.nodeType===8&&N.data===Ae){l=N,I=!0,O(!1);break}var t=n[p],i=u(t,p);A=fe(N,d,g,null,t,i,p,v,e),d.items.set(i,A),g=A}s>0&&k(K())}if(!w){var H=Ie;ke(n,d,l,v,e,(H.f&M)!==0,u)}c!==null&&(s===0?o?ne(o):o=ie(()=>c(l)):o!==null&&de(o,()=>{o=null})),I&&O(!0),a()}),w&&(l=N)}function ke(f,e,a,u,v,c,l){var J,U,X,Z;var d=(v&Te)!==0,m=(v&(q|z))!==0,_=f.length,o=e.items,h=e.first,r=h,n,s=null,I,E=[],g=[],A,p,t,i;if(d)for(i=0;i<_;i+=1)A=f[i],p=l(A,i),t=o.get(p),t!==void 0&&((J=t.a)==null||J.measure(),(I??(I=new Set)).add(t));for(i=0;i<_;i+=1){if(A=f[i],p=l(A,i),t=o.get(p),t===void 0){var H=r?r.e.nodes_start:a;s=fe(H,e,s,s===null?e.first:s.next,A,p,i,u,v),o.set(p,s),E=[],g=[],r=s.next;continue}if(m&&Oe(t,A,i,v),t.e.f&M&&(ne(t.e),d&&((U=t.a)==null||U.unfix(),(I??(I=new Set)).delete(t))),t!==r){if(n!==void 0&&n.has(t)){if(E.length<g.length){var D=g[0],T;s=D.prev;var G=E[0],R=E[E.length-1];for(T=0;T<E.length;T+=1)ee(E[T],D,a);for(T=0;T<g.length;T+=1)n.delete(g[T]);x(e,G.prev,R.next),x(e,s,G),x(e,R,D),r=D,s=R,i-=1,E=[],g=[]}else n.delete(t),ee(t,r,a),x(e,t.prev,t.next),x(e,t,s===null?e.first:s.next),x(e,s,t),s=t;continue}for(E=[],g=[];r!==null&&r.k!==p;)(c||!(r.e.f&M))&&(n??(n=new Set)).add(r),g.push(r),r=r.next;if(r===null)continue;t=r}E.push(t),s=t,r=t.next}if(r!==null||n!==void 0){for(var C=n===void 0?[]:te(n);r!==null;)(c||!(r.e.f&M))&&C.push(r),r=r.next;var S=C.length;if(S>0){var le=v&re&&_===0?a:null;if(d){for(i=0;i<S;i+=1)(X=C[i].a)==null||X.measure();for(i=0;i<S;i+=1)(Z=C[i].a)==null||Z.fix()}Se(e,C,le,o)}}d&&_e(()=>{var F;if(I!==void 0)for(t of I)(F=t.a)==null||F.apply()}),P.first=e.first&&e.first.e,P.last=s&&s.e}function Oe(f,e,a,u){u&q&&Q(f.v,e),u&z?Q(f.i,a):f.i=a}function fe(f,e,a,u,v,c,l,d,m){var _=(m&q)!==0,o=(m&we)===0,h=_?o?xe(v):W(v):v,r=m&z?W(l):l,n={i:r,v:h,k:c,a:null,e:null,prev:a,next:u};try{return n.e=ie(()=>d(f,h,r),w),n.e.prev=a&&a.e,n.e.next=u&&u.e,a===null?e.first=n:(a.next=n,a.e.next=n.e),u!==null&&(u.prev=n,u.e.prev=n.e),n}finally{}}function ee(f,e,a){for(var u=f.next?f.next.e.nodes_start:a,v=e?e.e.nodes_start:a,c=f.e.nodes_start;c!==u;){var l=ye(c);v.before(c),c=l}}function x(f,e,a){e===null?f.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}const Y=be,ae="https://rhhsstuco.ca";var Le=B('<meta property="og:image"> <meta property="thumbnail">',1),Ve=B('<meta property="og:url">'),Ye=B('<meta name="description"> <meta property="og:title"> <meta property="og:description"> <meta property="og:type" content="website"> <!> <!> <!>',1);function Fe(f,e){Ce(e,!0),He(a=>{var u=Ye(),v=j(u),c=y(v,2),l=y(c,2),d=y(l,4);$(d,()=>e.image,o=>{var h=Le(),r=j(h),n=y(r,2);L(()=>{b(r,"content",`${Y?ae:""}${e.image.img.src}`),b(n,"content",`${Y?ae:""}${e.image.img.src}`)}),V(o,h)});var m=y(d,2);$(m,()=>!Y,o=>{var h=Ve();L(()=>b(h,"content",e.url)),V(o,h)});var _=y(m,2);Re(_,()=>e.children??De),L(()=>{Me.title=e.title,b(v,"content",e.description),b(c,"content",e.title),b(l,"content",e.description)}),V(a,u)}),Ne()}export{Fe as M,Ze as e,Xe as i};
