import{p as o}from"./proxy.Bx2X1gXO.js";import{g as s,m as r,n as d}from"./runtime.VibfJNUv.js";const a="(prefers-reduced-motion: reduce)";function m(){let e=d(!1);return{get value(){return s(e)},mount(){const c=window.matchMedia(a).matches;r(e,o(c));const t=i=>r(e,o(i.matches)),n=window.matchMedia(a);return n.addEventListener("change",t),()=>{n.removeEventListener("change",t)}}}}const f=m();export{f as r};
