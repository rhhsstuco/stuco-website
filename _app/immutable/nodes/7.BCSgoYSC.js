import{i as ae,a as i,t as M,e as Se,c as K}from"../chunks/disclose-version.DdfHI4CV.js";import{p as X,c as o,s as D,X as we,r as s,t as z,a as $,g as e,a4 as p,aw as ke,f as J,$ as Ee,d as ce,h as Ce}from"../chunks/runtime.ybpKW43T.js";import{i as H}from"../chunks/if.CJLyJS5S.js";import{e as A,i as L}from"../chunks/each.CpR5YdLG.js";import{a as de,p as Q}from"../chunks/props.RSUnQutB.js";import{s as je,a as ze}from"../chunks/store.DjwPPW2I.js";import{p as Te}from"../chunks/stores.CGRoQhgu.js";import{s as P}from"../chunks/render.CG5KD97V.js";import{s as Pe,a as U}from"../chunks/attributes.BCK-KNRS.js";import{t as te}from"../chunks/class.DOtjtTmq.js";import{t as Ye,f as Fe}from"../chunks/index.nS8mueTp.js";import{t as _e}from"../chunks/theme.svelte.CADEXW5b.js";import{h as He,H as Ne}from"../chunks/HomePageEvent.DEQP8z8F.js";import{p as qe}from"../chunks/index.DCEMJSKy.js";import{M as Ie}from"../chunks/Metadata.BwIApE6q.js";import{p as Ae}from"../chunks/entry.CiRk6kU7.js";import{o as Le}from"../chunks/index-client.wTszehlu.js";function Oe(c){return c/=.5,c<1?.5*c*c:(c--,-.5*(c*(c-2)-1))}var Re=M('<div class="svelte-92mx0f"> </div>'),Je=M('<div class="svelte-92mx0f"> </div>'),We=M('<div class="calendar-day__event-count svelte-92mx0f"><!> <!></div>'),Be=M('<button class="calendar-day svelte-92mx0f"><!> <!></button>');function Ge(c,t){X(t,!0);function h(l){if(!l)return[0,0];let a=0,S=0;for(const w of l)w.type==="school"?a++:S++;return[a,S]}let d=p(()=>h(t.events)),k=p(()=>e(d)[0]),j=p(()=>e(d)[1]);var _=Be();_.__click=function(...l){var a;(a=t.onClick)==null||a.apply(this,l)};var E=o(_);{var N=l=>{var a=We(),S=o(a);{var w=x=>{var u=Re();U(u,"style","--color-badge: var(--color-badge-school);");var T=o(u,!0);s(u),z(()=>P(T,e(k))),i(x,u)};H(S,x=>{e(k)!=0&&x(w)})}var y=D(S,2);{var b=x=>{var u=Je();U(u,"style","--color-badge: var(--color-badge-club);");var T=o(u,!0);s(u),z(()=>P(T,e(j))),i(x,u)};H(y,x=>{e(j)!=0&&x(b)})}s(a),i(l,a)};H(E,l=>{t.onClick&&l(N)})}var Y=D(E,2);Pe(Y,()=>t.children??we),s(_),z(()=>_.disabled=!t.onClick),i(c,_),$()}ae(["click"]);var Ke=M('<div class="calendar-detail__content__events__event svelte-g5jfz3"><h4 class="svelte-g5jfz3"> </h4> <p class="svelte-g5jfz3"><!></p></div>'),Qe=M('<div class="calendar-detail__no-events svelte-g5jfz3">No events on this day.</div>'),Ue=M('<div class="calendar-detail svelte-g5jfz3"><div class="calendar-detail__content svelte-g5jfz3"><div class="calendar-detail__content__heading svelte-g5jfz3"><div class="calendar-detail__content__heading__header svelte-g5jfz3"><button class="svelte-g5jfz3">&times;</button> <span class="school-event svelte-g5jfz3">School</span> <span class="club-event svelte-g5jfz3">Club</span></div> <h3 class="svelte-g5jfz3"> </h3></div> <div class="calendar-detail__content__events svelte-g5jfz3"></div></div></div>');function Xe(c,t){X(t,!0);var h=Ue(),d=o(h),k=o(d),j=o(k),_=o(j);_.__click=function(...l){var a;(a=t.onClose)==null||a.apply(this,l)},ke(4),s(j);var E=D(j,2),N=o(E,!0);z(()=>P(N,t.date.toLocaleDateString("en-us",{year:"numeric",month:"long",day:"numeric"}))),s(E),s(k);var Y=D(k,2);A(Y,21,()=>t.events,L,(l,a)=>{var S=Ke(),w=o(S),y=o(w,!0);s(w);var b=D(w,2),x=o(b);{var u=n=>{var g=Se();z(()=>P(g,e(a).description)),i(n,g)},T=n=>{var g=K(),O=J(g);He(O,()=>e(a).description),i(n,g)};H(x,n=>{e(a).useHTML?n(T,!1):n(u)})}s(b),s(S),z(()=>{U(w,"style",`--color-badge: var(--color-badge-${e(a).type})`),P(y,e(a).name)}),i(l,S)},l=>{var a=Qe();i(l,a)}),s(Y),s(d),s(h),i(c,h),$()}ae(["click"]);var $e=(c,t,h,d)=>t(new Date(e(h),e(d)-1,1)),Ve=(c,t,h,d)=>t(new Date(e(h),e(d)+1,1)),Ze=M('<div class="svelte-x8tf7f"> </div>'),et=M('<span class="calendar__body__day svelte-x8tf7f"> </span>'),tt=M("<div></div>"),at=M('<div class="calendar__body__event svelte-x8tf7f"><div class="text-wrapper svelte-x8tf7f"> </div></div>'),rt=M('<div class="calendar-detail svelte-x8tf7f"><!></div>'),st=M('<div class="calendar svelte-x8tf7f"><div class="calendar__header svelte-x8tf7f"><div class="calendar__header__date svelte-x8tf7f"><button aria-label="Previous month" class="svelte-x8tf7f"><i class="ri-arrow-left-s-line svelte-x8tf7f"></i></button> <h2 class="svelte-x8tf7f"> </h2> <button aria-label="Next month" class="svelte-x8tf7f"><i class="ri-arrow-right-s-line svelte-x8tf7f"></i></button></div> <div class="calendar__header__days svelte-x8tf7f"></div></div> <div class="calendar__body svelte-x8tf7f"><!> <!>  <!></div></div>');function nt(c,t){X(t,!0);const h=1e3*60*60*24,d=7,k=["January","February","March","April","May","June","July","August","September","October","November","December"],j=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function _(r,v){const f=new Map;return r.forEach(m=>{const q=v(m);for(const F of q){const C=f.get(F)||[];C.push(m),f.set(F,C)}}),f}function E(r,v){const f=new Date(r),m=new Date(v);return f.setHours(0,0,0,0),m.setHours(0,0,0,0),(m.getTime()-f.getTime())/h}function N(r){return r%4===0&&r%100!==0&&r%400!==0||r%100===0&&r%400===0}function Y(r){return N(r)?29:28}let l=de(t,"date",31,()=>Q(new Date)),a=de(t,"selectedDate",15);const S=r=>()=>a(r);let w=p(()=>_(t.events,r=>{const v=Array(E(r.startDate,r.endDate)+1).fill(0),f=r.startDate.getFullYear(),m=r.startDate.getMonth(),q=r.startDate.getDate();return v.map((F,C)=>new Date(f,m,q+C).toDateString())})),y=p(()=>l().getMonth()),b=p(()=>l().getFullYear()),x=p(()=>[31,Y(e(b)),31,30,31,30,31,31,30,31,30,31]),u=p(()=>new Date(e(b),e(y),1).getDay()%7),T=p(()=>Math.ceil((e(u)+e(x)[e(y)])/7));var n=st(),g=o(n),O=o(g),re=o(O);re.__click=[$e,l,b,y];var V=D(re,2),ue=o(V);s(V);var ge=D(V,2);ge.__click=[Ve,l,b,y],s(O);var se=D(O,2);A(se,21,()=>j,L,(r,v)=>{var f=Ze(),m=o(f,!0);s(f),z(()=>P(m,e(v))),i(r,f)}),s(se),s(g);var R=D(g,2),ne=o(R);A(ne,17,()=>({length:e(T)}),L,(r,v,f)=>{var m=K(),q=J(m);A(q,17,()=>({length:d}),L,(C,le,W)=>{var B=K();const G=p(()=>f*d+W-e(u)+1),ve=p(()=>new Date(e(b),e(y),e(G))),ie=p(()=>e(G)>0&&e(G)<=e(x)[e(y)]);var pe=J(B);{var De=I=>{var Z=p(()=>e(w).get(e(ve).toDateString())),be=p(()=>e(ie)&&S(e(ve)));Ge(I,{get events(){return e(Z)},get onClick(){return e(be)},children:(xe,vt)=>{var ee=et(),Me=o(ee,!0);s(ee),z(()=>P(Me,e(G))),i(xe,ee)},$$slots:{default:!0}})},ye=I=>{var Z=tt();i(I,Z)};H(pe,I=>{e(ie)?I(De):I(ye,!1)})}i(C,B)}),i(r,m)});var oe=D(ne,2);A(oe,17,()=>t.events.toReversed(),L,(r,v)=>{var f=K(),m=J(f);{var q=F=>{var C=at();const le=p(()=>`
						grid-row: ${Math.ceil((e(v).startDate.getDate()+e(u))/7)} / ${Math.ceil((e(v).endDate.getDate()+e(u))/7)};
						grid-column: ${e(v).startDate.getDay()+1} / ${e(v).endDate.getDay()+2};
						--color-badge: var(--color-badge-${e(v).type})
					`);var W=o(C),B=o(W,!0);s(W),s(C),z(()=>{U(C,"style",e(le)),P(B,e(v).name)}),i(F,C)};H(m,F=>{e(v).startDate.getMonth()===e(y)&&e(v).startDate.getFullYear()===e(b)&&F(q)})}i(r,f)});var he=D(oe,2);{var me=r=>{var v=rt(),f=o(v),m=p(()=>e(w).get(a().toDateString())||[]);Xe(f,{get date(){return a()},get events(){return e(m)},onClose:()=>a(null)}),s(v),Ye(3,v,()=>Fe,()=>({x:250,opacity:1,duration:qe.current?0:250,easing:Oe})),i(r,v)};H(he,r=>{a()&&r(me)})}s(R),s(n),z(()=>{P(ue,`${k[e(y)]??""} ${e(b)??""}`),te(R,"selected-date",a()),te(R,"dark-mode",_e.value==="dark"),te(R,"light-mode",_e.value==="light")}),i(c,n),$()}ae(["click"]);const fe=c=>{const t=new URL(window.location.toString());t.searchParams.forEach((h,d)=>t.searchParams.delete(d));for(let[h,d]of Object.entries(c))t.searchParams.set(h,d);try{Ae(t.toString(),{})}catch{console.log("womp womp")}};var ot=M('<h3 class="events__list-no-events svelte-1nr3gqv">No Events This Month</h3>'),lt=M('<!> <main class="svelte-1nr3gqv"><h1 class="svelte-1nr3gqv">Events</h1> <!> <section class="month-events svelte-1nr3gqv"><h2 class="svelte-1nr3gqv">Events This Month</h2> <div class="events__list svelte-1nr3gqv"><!> <!></div></section></main>',1);function kt(c,t){X(t,!0);const h=je(),d=()=>ze(Te,"$page",h);let k=Q(j());function j(){const n=new Set;return t.data.events.filter(g=>g.startDate.getMonth()==new Date().getMonth()).filter(g=>n.has(g.name)?!1:(n.add(g.name),!0))}let _=Ce(void 0),E=!1;Le(()=>{if(d().url.searchParams.has("date")){const n=d().url.searchParams.get("date").split("-");ce(_,Q(new Date(+n[0],+n[1]-1,+n[2]))),E=!0}}),Ee(()=>{if(e(_)===void 0||E){E=!1;return}if(e(_)===null){fe({});return}console.log(e(_)),fe({date:`${e(_).getFullYear()}-${e(_).getMonth()+1}-${e(_).getDate()}`})});const N="Events | RHHS StuCo",Y="Stay up to date on all school events here!";var l=lt(),a=J(l);Ie(a,{title:N,description:Y,url:"https://rhhsstuco.ca/events"});var S=D(a,2),w=D(o(S),2);nt(w,{get events(){return t.data.events},get selectedDate(){return e(_)},set selectedDate(n){ce(_,Q(n))}});var y=D(w,2),b=D(o(y),2),x=o(b);{var u=n=>{var g=ot();i(n,g)};H(x,n=>{k.length===0&&n(u)})}var T=D(x,2);A(T,17,()=>k,L,(n,g)=>{Ne(n,{get event(){return e(g)}})}),s(b),s(y),s(S),i(c,l),$()}export{kt as component};
