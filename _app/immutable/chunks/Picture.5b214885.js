import{s as P,f as _,a as q,g,h as C,c as E,d as m,J as w,j as n,i as y,w as p,u as v,F as O,T as S}from"./scheduler.5b86b3a9.js";import{e as z}from"./each.a1183eab.js";import{S as I,i as R}from"./index.84721e49.js";function b(i,e,r){const s=i.slice();return s[6]=e[r][0],s[7]=e[r][1],s}function j(i){let e,r,s;return{c(){e=_("source"),this.h()},l(c){e=g(c,"SOURCE",{type:!0,sizes:!0,srcset:!0,class:!0}),this.h()},h(){n(e,"type",r="image/"+i[6]),n(e,"sizes",i[0]),S(e,s=i[7].map(k).join(", "))||n(e,"srcset",s),n(e,"class","svelte-v5nw7")},m(c,u){y(c,e,u)},p(c,u){u&16&&r!==(r="image/"+c[6])&&n(e,"type",r),u&1&&n(e,"sizes",c[0]),u&16&&s!==(s=c[7].map(k).join(", "))&&n(e,"srcset",s)},d(c){c&&m(e)}}}function T(i){let e,r,s,c,u,f,o=z(Object.entries(i[4])),a=[];for(let t=0;t<o.length;t+=1)a[t]=j(b(i,o,t));return{c(){e=_("picture");for(let t=0;t<a.length;t+=1)a[t].c();r=q(),s=_("img"),this.h()},l(t){e=g(t,"PICTURE",{class:!0});var h=C(e);for(let l=0;l<a.length;l+=1)a[l].l(h);r=E(h),s=g(h,"IMG",{src:!0,alt:!0,loading:!0,width:!0,height:!0,class:!0}),h.forEach(m),this.h()},h(){w(s.src,c=i[3].src)||n(s,"src",c),n(s,"alt",i[1]),n(s,"loading",i[2]),n(s,"width",u=i[3].w),n(s,"height",f=i[3].h),n(s,"class","svelte-v5nw7"),n(e,"class","svelte-v5nw7")},m(t,h){y(t,e,h);for(let l=0;l<a.length;l+=1)a[l]&&a[l].m(e,null);p(e,r),p(e,s)},p(t,[h]){if(h&17){o=z(Object.entries(t[4]));let l;for(l=0;l<o.length;l+=1){const d=b(t,o,l);a[l]?a[l].p(d,h):(a[l]=j(d),a[l].c(),a[l].m(e,r))}for(;l<a.length;l+=1)a[l].d(1);a.length=o.length}h&8&&!w(s.src,c=t[3].src)&&n(s,"src",c),h&2&&n(s,"alt",t[1]),h&4&&n(s,"loading",t[2]),h&8&&u!==(u=t[3].w)&&n(s,"width",u),h&8&&f!==(f=t[3].h)&&n(s,"height",f)},i:v,o:v,d(t){t&&m(e),O(a,t)}}}const k=i=>i.dpr?`${i.src} ${i.dpr}x`:`${i.src} ${i.w}w`;function U(i,e,r){let s,c,{meta:u}=e,{sizes:f="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1600px"}=e,{alt:o=""}=e,{loading:a="eager"}=e;return i.$$set=t=>{"meta"in t&&r(5,u=t.meta),"sizes"in t&&r(0,f=t.sizes),"alt"in t&&r(1,o=t.alt),"loading"in t&&r(2,a=t.loading)},i.$$.update=()=>{i.$$.dirty&32&&r(4,s=u.sources),i.$$.dirty&32&&r(3,c=u.img)},[f,o,a,c,s,u]}class M extends I{constructor(e){super(),R(this,e,U,T,P,{meta:5,sizes:0,alt:1,loading:2})}}export{M as P};
