import{i as ee,a as c,t as y,f as J,g as be}from"../chunks/disclose-version.BsqdIjIN.js";import{p as B,c as n,g as e,r as s,t as C,s as D,H as je,a as G,k as p,aF as Me,f as O,b as Se,m as ie,n as ke}from"../chunks/runtime.VibfJNUv.js";import{i as P,p as ce}from"../chunks/props.Cv3KtIbI.js";import{e as I,i as A,M as we}from"../chunks/Metadata.C5OkUUp2.js";import{p as R}from"../chunks/proxy.Bx2X1gXO.js";import{s as xe,a as Ee}from"../chunks/store.BhNY8m5G.js";import{p as Ce}from"../chunks/stores.BQzvN_gb.js";import{s as F}from"../chunks/render.CJfwLQTy.js";import{s as W}from"../chunks/attributes.CH_8jG8S.js";import{t as Z}from"../chunks/class.COaiat1X.js";import{t as Te,f as Fe}from"../chunks/index.Dh0_pdm6.js";import{r as He}from"../chunks/reducedMotion.svelte.5p3qEPNF.js";import{t as de}from"../chunks/theme.svelte.zbGhgBAt.js";import{s as Pe}from"../chunks/snippet.VgHvdatV.js";import{h as Ye,H as Ne}from"../chunks/HomePageEvent.DuZavFoK.js";import{p as qe}from"../chunks/entry.CueNE5Yj.js";import{o as Ie}from"../chunks/index-client.CXlMCzPc.js";function Ae(d){return d/=.5,d<1?.5*d*d:(d--,-.5*(d*(d-2)-1))}var Le=y('<div class="svelte-92mx0f"> </div>'),Oe=y('<div class="svelte-92mx0f"> </div>'),$e=y('<div class="calendar-day__event-count svelte-92mx0f"><!> <!></div>'),Je=y('<button class="calendar-day svelte-92mx0f"><!> <!></button>');function Re(d,t){B(t,!0);function f(M){if(!M)return[0,0];let o=0,r=0;for(const S of M)S.type==="school"?o+=1:r+=1;return[o,r]}let _=p(()=>f(t.events)),k=p(()=>e(_)[0]),x=p(()=>e(_)[1]);var u=Je();u.__click=function(...M){var o;(o=t.onClick)==null||o.apply(this,M)};var w=n(u);P(w,()=>t.onClick,M=>{var o=$e(),r=n(o);P(r,()=>e(k)!=0,b=>{var l=Le();W(l,"style","--color-badge: var(--color-badge-school);");var h=n(l,!0);s(l),C(()=>F(h,e(k))),c(b,l)});var S=D(r,2);P(S,()=>e(x)!=0,b=>{var l=Oe();W(l,"style","--color-badge: var(--color-badge-club);");var h=n(l,!0);s(l),C(()=>F(h,e(x))),c(b,l)}),s(o),c(M,o)});var Y=D(w,2);Pe(Y,()=>t.children??je),s(u),C(()=>u.disabled=!t.onClick),c(d,u),G()}ee(["click"]);var We=y('<div class="calendar-detail__content__events__event svelte-1t9pmp9"><h4 class="svelte-1t9pmp9"> </h4> <p class="svelte-1t9pmp9"><!></p></div>'),Be=y('<div class="calendar-detail__no-events svelte-1t9pmp9">No events on this day.</div>'),Ge=y('<div class="calendar-detail svelte-1t9pmp9"><div class="calendar-detail__content svelte-1t9pmp9"><div class="calendar-detail__content__heading svelte-1t9pmp9"><div class="calendar-detail__content__heading__header svelte-1t9pmp9"><button class="svelte-1t9pmp9">&times;</button> <span class="school-event svelte-1t9pmp9">School</span> <span class="club-event svelte-1t9pmp9">Club</span></div> <h3 class="svelte-1t9pmp9"> </h3></div> <div class="calendar-detail__content__events svelte-1t9pmp9"></div></div></div>');function Ke(d,t){B(t,!0);var f=Ge(),_=n(f),k=n(_),x=n(k),u=n(x);u.__click=function(...o){var r;(r=t.onClose)==null||r.apply(this,o)},Me(4),s(x);var w=D(x,2),Y=n(w,!0);C(()=>F(Y,t.date.toLocaleDateString("en-us",{year:"numeric",month:"long",day:"numeric"}))),s(w),s(k);var M=D(k,2);I(M,21,()=>t.events,A,(o,r)=>{var S=We(),b=n(S),l=n(b,!0);s(b);var h=D(b,2),N=n(h);P(N,()=>!e(r).useHTML,E=>{var i=be();C(()=>F(i,e(r).description)),c(E,i)},E=>{var i=J(),j=O(i);Ye(j,()=>e(r).description),c(E,i)}),s(h),s(S),C(()=>{W(b,"style",`--color-badge: var(--color-badge-${e(r).type})`),F(l,e(r).name)}),c(o,S)},o=>{var r=Be();c(o,r)}),s(M),s(_),s(f),c(d,f),G()}ee(["click"]);var Qe=(d,t,f,_)=>t(new Date(e(f),e(_)-1,1)),Ue=(d,t,f,_)=>t(new Date(e(f),e(_)+1,1)),ze=y('<div class="svelte-1nvjjef"> </div>'),Ve=y('<span class="calendar__body__day svelte-1nvjjef"> </span>'),Xe=y("<div></div>"),Ze=y('<div class="calendar__body__event svelte-1nvjjef"> </div>'),et=y('<div class="calendar-detail svelte-1nvjjef"><!></div>'),tt=y('<div class="calendar svelte-1nvjjef"><div class="calendar__header svelte-1nvjjef"><div class="calendar__header__date svelte-1nvjjef"><button aria-label="Previous month" class="svelte-1nvjjef"><i class="ri-arrow-left-s-line svelte-1nvjjef"></i></button> <h2 class="svelte-1nvjjef"> </h2> <button aria-label="Next month" class="svelte-1nvjjef"><i class="ri-arrow-right-s-line svelte-1nvjjef"></i></button></div> <div class="calendar__header__days svelte-1nvjjef"></div></div> <div class="calendar__body svelte-1nvjjef"><!> <!>  <!></div></div>');function at(d,t){B(t,!0);const f=1e3*60*60*24,_=7,k=["January","February","March","April","May","June","July","August","September","October","November","December"],x=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function u(a,v){const m=new Map;return a.forEach(g=>{const q=v(g);for(const T of q){const H=m.get(T)||[];H.push(g),m.set(T,H)}}),m}function w(a,v){const m=new Date(a),g=new Date(v);return m.setHours(0,0,0,0),g.setHours(0,0,0,0),(g.getTime()-m.getTime())/f}function Y(a){return a%4===0&&a%100!==0&&a%400!==0||a%100===0&&a%400===0}function M(a){return Y(a)?29:28}let o=ce(t,"date",31,()=>R(new Date)),r=ce(t,"selectedDate",15);const S=a=>()=>r(a);let b=p(()=>u(t.events,a=>{const v=Array(w(a.startDate,a.endDate)+1).fill(0),m=a.startDate.getFullYear(),g=a.startDate.getMonth(),q=a.startDate.getDate();return v.map((T,H)=>new Date(m,g,q+H).toDateString())})),l=p(()=>o().getMonth()),h=p(()=>o().getFullYear()),N=p(()=>[31,M(e(h)),31,30,31,30,31,31,30,31,30,31]),E=p(()=>new Date(e(h),e(l),1).getDay()%7),i=p(()=>Math.ceil((e(E)+e(N)[e(l)])/7));var j=tt(),K=n(j),Q=n(K),te=n(Q);te.__click=[Qe,o,h,l];var U=D(te,2),ue=n(U);s(U);var me=D(U,2);me.__click=[Ue,o,h,l],s(Q);var ae=D(Q,2);I(ae,21,()=>x,A,(a,v)=>{var m=ze(),g=n(m,!0);s(m),C(()=>F(g,e(v))),c(a,m)}),s(ae),s(K);var L=D(K,2),re=n(L);I(re,17,()=>({length:e(i)}),A,(a,v,m)=>{var g=J(),q=O(g);I(q,17,()=>({length:_}),A,(H,ne,he)=>{var oe=J();const $=p(()=>m*_+he-e(E)+1),le=p(()=>new Date(e(h),e(l),e($))),ve=p(()=>e($)>0&&e($)<=e(N)[e(l)]);var ge=O(oe);P(ge,()=>e(ve),z=>{var V=p(()=>e(b).get(e(le).toDateString())),pe=p(()=>e(ve)&&S(e(le)));Re(z,{get events(){return e(V)},get onClick(){return e(pe)},children:(De,nt)=>{var X=Ve(),ye=n(X,!0);s(X),C(()=>F(ye,e($))),c(De,X)},$$slots:{default:!0}})},z=>{var V=Xe();c(z,V)}),c(H,oe)}),c(a,g)});var se=D(re,2);I(se,17,()=>t.events,A,(a,v)=>{var m=J(),g=O(m);P(g,()=>e(v).startDate.getMonth()===e(l)&&e(v).startDate.getFullYear()===e(h),q=>{var T=Ze();const H=p(()=>`
						grid-row: ${Math.ceil((e(v).startDate.getDate()+e(E))/7)} / ${Math.ceil((e(v).endDate.getDate()+e(E))/7)};
						grid-column: ${e(v).startDate.getDay()+1} / ${e(v).endDate.getDay()+2};
						--color-badge: var(--color-badge-${e(v).type})
					`);var ne=n(T,!0);s(T),C(()=>{W(T,"style",e(H)),F(ne,e(v).name)}),c(q,T)}),c(a,m)});var fe=D(se,2);P(fe,r,a=>{var v=et(),m=n(v),g=p(()=>e(b).get(r().toDateString())||[]);Ke(m,{get date(){return r()},get events(){return e(g)},onClose:()=>r(null)}),s(v),Te(3,v,()=>Fe,()=>({x:250,opacity:1,duration:He.value?0:250,easing:Ae})),c(a,v)}),s(L),s(j),C(()=>{F(ue,`${k[e(l)]??""} ${e(h)??""}`),Z(L,"selected-date",r()),Z(L,"dark-mode",de.value==="dark"),Z(L,"light-mode",de.value==="light")}),c(d,j),G()}ee(["click"]);const _e=d=>{const t=new URL(window.location.toString());t.searchParams.forEach((f,_)=>t.searchParams.delete(_));for(let[f,_]of Object.entries(d))t.searchParams.set(f,_);try{qe(t.toString(),{})}catch{console.log("womp womp")}};var rt=y('<h3 class="events__list-no-events svelte-1nr3gqv">No Events This Month</h3>'),st=y('<!> <main class="svelte-1nr3gqv"><h1 class="svelte-1nr3gqv">Events</h1> <!> <section class="month-events svelte-1nr3gqv"><h2 class="svelte-1nr3gqv">Events This Month</h2> <div class="events__list svelte-1nr3gqv"><!> <!></div></section></main>',1);function Mt(d,t){B(t,!0);const f=xe(),_=()=>Ee(Ce,"$page",f);let k=R(x());function x(){const i=new Set;return t.data.events.filter(j=>j.startDate.getMonth()==new Date().getMonth()).filter(j=>i.has(j.name)?!1:(i.add(j.name),!0))}let u=ke(void 0),w=!1;Ie(()=>{if(_().url.searchParams.has("date")){const i=_().url.searchParams.get("date").split("-");ie(u,R(new Date(+i[0],+i[1]-1,+i[2]))),w=!0}}),Se(()=>{if(e(u)===void 0||w){w=!1;return}if(e(u)===null){_e({});return}console.log(e(u)),_e({date:`${e(u).getFullYear()}-${e(u).getMonth()+1}-${e(u).getDate()}`})});const Y="Events | RHHS StuCo",M="Stay up to date on all school events here!";var o=st(),r=O(o);we(r,{title:Y,description:M,url:"https://rhhsstuco.ca/events"});var S=D(r,2),b=D(n(S),2);at(b,{get events(){return t.data.events},get selectedDate(){return e(u)},set selectedDate(i){ie(u,R(i))}});var l=D(b,2),h=D(n(l),2),N=n(h);P(N,()=>k.length===0,i=>{var j=rt();c(i,j)});var E=D(N,2);I(E,17,()=>k,A,(i,j)=>{Ne(i,{get event(){return e(j)}})}),s(h),s(l),s(S),c(d,o),G()}export{Mt as component};