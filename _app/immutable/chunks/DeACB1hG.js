import{a3 as c,a4 as n,x as l,h as f,a5 as h,a6 as g,v as u,F as d,a7 as y,a8 as m}from"./BKYrN-sf.js";import{b as p}from"./BscStwTf.js";function k(s){if(f){var r=!1,e=()=>{if(!r){if(r=!0,s.hasAttribute("value")){var a=s.value;o(s,"value",null),s.value=a}if(s.hasAttribute("checked")){var t=s.checked;o(s,"checked",null),s.checked=t}}};s.__on_r=e,m(e),p()}}function o(s,r,e,a){var t=s.__attributes??(s.__attributes={});f&&(t[r]=s.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&s.nodeName==="LINK")||t[r]!==(t[r]=e)&&(r==="style"&&"__styles"in s&&(s.__styles={}),r==="loading"&&(s[h]=e),e==null?s.removeAttribute(r):typeof e!="string"&&v(s).includes(r)?s[r]=e:s.setAttribute(r,e))}function w(s,r,e){var a=g,t=u;let _=f;f&&d(!1),c(null),n(null);try{(i.has(s.nodeName)||!customElements||customElements.get(s.tagName.toLowerCase())?v(s).includes(r):e&&typeof e=="object")?s[r]=e:o(s,r,e==null?e:String(e))}finally{c(a),n(t),_&&d(!0)}}var i=new Map;function v(s){var r=i.get(s.nodeName);if(r)return r;i.set(s.nodeName,r=[]);for(var e,a=s,t=Element.prototype;t!==a;){e=y(a);for(var _ in e)e[_].set&&r.push(_);a=l(a)}return r}export{w as a,k as r,o as s};
