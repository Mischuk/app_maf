(this.webpackJsonpapp_maf=this.webpackJsonpapp_maf||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),a=n(9),s=n.n(a),o=(n(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function r(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var l,d,u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),a(e),s(e)}))},f=n(2);!function(e){e[e.Settings=0]="Settings",e[e.Roles=1]="Roles",e[e.Final=2]="Final"}(l||(l={})),function(e){e.Citizen="\u041c\u0438\u0440\u043d\u044b\u0439",e.Mafia="\u041c\u0430\u0444\u0438\u044f",e.Whore="\u041f\u0440\u043e\u0441\u0442\u0438\u0442\u0443\u0442\u043a\u0430",e.Doctor="\u0414\u043e\u043a\u0442\u043e\u0440",e.Immortal="\u0411\u0435\u0441\u0441\u043c\u0435\u0440\u0442\u043d\u044b\u0439",e.Sheriff="\u0428\u0435\u0440\u0438\u0444"}(d||(d={}));n(15);var j=n(0),b=function(e){var t=e.title,n=e.onNextRole,c=e.position,a=Object(i.useState)(!1),s=Object(f.a)(a,2),o=s[0],r=s[1],l=Object(i.useState)(!1),u=Object(f.a)(l,2),b=u[0],h=u[1];return Object(j.jsx)("div",{className:"Card",children:Object(j.jsx)("div",{className:"flipcard ".concat(o?"is-open":""),onClick:function(){b||(h(!0),setTimeout((function(){h(!1)}),500),o?(r(!1),setTimeout((function(){n()}),500)):r(!0))},children:Object(j.jsxs)("div",{className:"flipcard__inner",children:[Object(j.jsxs)("div",{className:"flipcard__front",children:["\u0418\u0433\u0440\u043e\u043a ",c]}),Object(j.jsx)("div",{className:"flipcard__back ".concat(t===d.Mafia?"is-black":"is-red"),children:Object(j.jsx)("p",{children:t})})]})})})},h=(n(17),function(e){var t=e.roles,n=e.onShowResult,c=Object(i.useState)(0),a=Object(f.a)(c,2),s=a[0],o=a[1];return Object(j.jsx)("div",{className:"PlayerRoles",children:Object(j.jsx)("div",{className:"PlayerRoles__content",children:Object(j.jsx)(b,{title:t[s],onNextRole:function(){s+1<=t.length-1?o(s+1):n()},position:s+1})})})}),v=(n(18),function(e){var t=e.roles,n=Object(i.useState)(!1),c=Object(f.a)(n,2),a=c[0],s=c[1];return Object(j.jsxs)("div",{className:"Results",children:[Object(j.jsxs)("div",{className:"Results__toggle",onClick:function(){return s(!a)},children:[a?"Hide":"Show"," all roles"]}),a&&Object(j.jsx)("div",{className:"Results__content",children:t.map((function(e,t){return Object(j.jsxs)("div",{children:["Player #",t+1,": ",e]},t)}))})]})}),m=n(3),O=n(6),g=n(8),x=(n(19),function(e){var t=e.isChecked,n=e.onChange,i=e.label;return Object(j.jsx)("div",{className:"Checkbox ".concat(t?"is-checked":""),onClick:n,children:Object(j.jsx)("div",{className:"Checkbox__label",children:i})})}),p=(n(20),function(e){var t=e.value,n=e.onChange,i=e.isDisabledDec,c=e.isDisabledInc,a=e.label,s=e.min,o=e.max,r=function(e){n(t+e)};return Object(j.jsxs)("div",{className:"InputNumeric",children:[a&&Object(j.jsx)("div",{className:"InputNumeric__label",children:a}),Object(j.jsxs)("div",{className:"InputNumeric__control",children:[Object(j.jsx)("button",{className:"InputNumeric__button is-down",onClick:function(){return r(-1)},disabled:t===s||i,children:"-"}),Object(j.jsx)("div",{className:"InputNumeric__input",children:t}),Object(j.jsx)("button",{className:"InputNumeric__button is-up",onClick:function(){return r(1)},disabled:t===o||c,children:"+"})]})]})}),_=[{id:1,title:d.Whore,cardImage:""},{id:2,title:d.Doctor,cardImage:""},{id:3,title:d.Immortal,cardImage:""},{id:4,title:d.Sheriff,cardImage:""}],N=(n(21),{totalPlayers:6,citizens:5,mafias:1,activeRoles:[]}),S=function(e){var t=e.onSubmit,n=Object(i.useState)(N),c=Object(f.a)(n,2),a=c[0],s=c[1],o=Object(i.useState)(!1),r=Object(f.a)(o,2),l=r[0],u=r[1],b=function(e,t){s((function(n){return Object(g.a)(Object(g.a)({},n),{},Object(O.a)({},e,t))}))};Object(i.useEffect)((function(){l&&(b("activeRoles",[]),b("citizens",a.totalPlayers-a.mafias))}),[a.mafias,a.totalPlayers,l]);return Object(j.jsxs)("div",{className:"Settings",children:[Object(j.jsxs)("div",{className:"Settings__content",children:[Object(j.jsx)("div",{className:"Settings__row",children:Object(j.jsx)(p,{label:"\u0412\u0441\u0435\u0433\u043e \u0438\u0433\u0440\u043e\u043a\u043e\u0432",value:a.totalPlayers,min:3,onChange:function(e){b("totalPlayers",e),b("citizens",e-1),b("mafias",1),b("activeRoles",[]),u(e<=4)}})}),Object(j.jsx)("div",{className:"Settings__row",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsx)(p,{label:"\u043a\u043e\u043b-\u0432\u043e \u043c\u0438\u0440\u043d\u044b\u0445",value:a.citizens,min:0,onChange:function(e){var t=a.totalPlayers-e-a.activeRoles.length;b("citizens",e),b("mafias",t)},isDisabledInc:a.citizens+a.activeRoles.length>=a.totalPlayers-1,isDisabledDec:a.citizens+a.activeRoles.length<=a.mafias})}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{children:Object(j.jsx)(p,{label:"\u043a\u043e\u043b-\u0432\u043e \u043c\u0430\u0444\u0438\u0439",value:a.mafias,min:1,isDisabledInc:a.mafias>=a.citizens+a.activeRoles.length||0===a.citizens,onChange:function(e){var t=a.totalPlayers-e-a.activeRoles.length;b("mafias",e),b("citizens",t)}})})]})}),!l&&Object(j.jsxs)("div",{className:"Settings__row",children:[Object(j.jsx)("div",{className:"Settings__title",children:"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u0440\u043e\u043b\u0438"}),Object(j.jsx)("div",{className:"Settings__roles",children:_.map((function(e){return Object(j.jsx)(x,{onChange:function(){return function(e){var t=a.activeRoles,n=a.citizens,i=a.mafias,c=a.totalPlayers,s=t.findIndex((function(t){return t.id===e.id}))>=0,o=n+(s?1:-1);!s&&0===n&&n+i+t.length>=c?b("mafias",i-1):b("citizens",o),b("activeRoles",s?Object(m.a)(t).filter((function(t){return t.id!==e.id})):[].concat(Object(m.a)(t),[e]))}(e)},label:e.title,isChecked:!!a.activeRoles.find((function(t){return t.id===e.id}))},e.id)}))})]})]}),Object(j.jsx)("div",{className:"Settings__action",children:Object(j.jsx)("button",{onClick:function(){var e=a.citizens,n=a.mafias,i=a.activeRoles;t([].concat(Object(m.a)(Array.from(Array(e).fill(d.Citizen))),Object(m.a)(Array.from(Array(n).fill(d.Mafia))),Object(m.a)(i.map((function(e){return e.title})))))},children:"\u041e\u041a"})})]})};n(22);var w=function(){var e=Object(i.useState)(l.Settings),t=Object(f.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)([]),s=Object(f.a)(a,2),o=s[0],r=s[1];return Object(i.useEffect)((function(){var e=document.documentElement;n===l.Roles?e.classList.add("is-fixed"):e.classList.remove("is-fixed")}),[n]),Object(j.jsxs)("div",{className:"App",children:[n===l.Settings&&Object(j.jsx)(S,{onSubmit:function(e){r(function(e){for(var t,n=e.length;0!==n;){t=Math.floor(Math.random()*n),n--;var i=[e[t],e[n]];e[n]=i[0],e[t]=i[1]}return e}(e)),c(l.Roles)}}),n===l.Roles&&Object(j.jsx)(h,{roles:o,onShowResult:function(){c(l.Final)}}),n===l.Final&&Object(j.jsx)(v,{roles:o})]})};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/app_maf",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/app_maf","/service-worker.js");o?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var i=n.headers.get("content-type");404===n.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):r(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):r(t,e)}))}}(),u()}],[[23,1,2]]]);
//# sourceMappingURL=main.1e98ea6a.chunk.js.map