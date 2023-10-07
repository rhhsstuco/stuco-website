import{Q as c}from"./scheduler.bada1be8.js";function _(t){const n=t-1;return n*n*n+1}function q(t){return t/=.5,t<1?.5*t*t:(t--,-.5*(t*(t-2)-1))}function O(t,{delay:n=0,duration:a=400,easing:u=_,x:e=0,y:i=0,opacity:f=0}={}){const o=getComputedStyle(t),r=+o.opacity,y=o.transform==="none"?"":o.transform,l=r*(1-f),[m,p]=c(e),[$,d]=c(i);return{delay:n,duration:a,easing:u,css:(s,x)=>`
			transform: ${y} translate(${(1-s)*m}${p}, ${(1-s)*$}${d});
			opacity: ${r-l*x}`}}export{O as f,q};
