(this.webpackJsonpapp_maf=this.webpackJsonpapp_maf||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),a=n(10),s=n.n(a),o=(n(15),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function l(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var r,d,u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),a(e),s(e)}))},f=n(3),b=n(2),j=n(6),m=n(9),v=n(7),h=n.n(v),O=(n(16),n(0)),g=function(e){var t=e.isChecked,n=e.onChange,i=e.label,c=e.isDisabled;return Object(O.jsxs)("div",{className:h()("Checkbox",t&&"is-checked",c&&"is-disabled"),onClick:function(){c||n()},children:[Object(O.jsx)("div",{className:"Checkbox__icon"}),Object(O.jsx)("div",{className:"Checkbox__label",children:i})]})},x=(n(18),function(e){var t=e.value,n=e.onChange,i=e.isDisabledDec,c=e.isDisabledInc,a=e.label,s=e.min,o=e.max,l=e.className,r=void 0===l?"":l,d=function(e){n(t+e)};return Object(O.jsxs)("div",{className:h()("InputNumeric",r),children:[a&&Object(O.jsx)("div",{className:"InputNumeric__label",children:a}),Object(O.jsxs)("div",{className:"InputNumeric__control",children:[Object(O.jsx)("button",{className:"InputNumeric__button is-down",onClick:function(){return d(-1)},disabled:t===s||i,children:"-"}),Object(O.jsx)("div",{className:"InputNumeric__input",children:t}),Object(O.jsx)("button",{className:"InputNumeric__button is-up",onClick:function(){return d(1)},disabled:t===o||c,children:"+"})]})]})});!function(e){e[e.Settings=0]="Settings",e[e.Roles=1]="Roles",e[e.Final=2]="Final"}(r||(r={})),function(e){e.Citizen="\u041c\u0438\u0440\u043d\u044b\u0439 \u0436\u0438\u0442\u0435\u043b\u044c",e.Mafia="\u041c\u0430\u0444\u0438\u044f",e.Doctor="\u0414\u043e\u043a\u0442\u043e\u0440",e.Immortal="\u0411\u0435\u0441\u0441\u043c\u0435\u0440\u0442\u043d\u044b\u0439",e.Comissar="\u041a\u043e\u043c\u0438\u0441\u0441\u0430\u0440",e.Maniac="\u041c\u0430\u043d\u044c\u044f\u043a",e.Reanymator="\u0420\u0435\u0430\u043d\u0438\u043c\u0430\u0442\u043e\u0440 (\u0432\u043c\u0435\u0441\u0442\u043e \u0434\u043e\u043a\u0442\u043e\u0440\u0430)",e.Whore="\u041f\u0440\u043e\u0441\u0442\u0438\u0442\u0443\u0442\u043a\u0430",e.Judge="\u0421\u0443\u0434\u044c\u044f"}(d||(d={}));var p=[{id:1,title:d.Whore,desc:"\u041f\u0440\u043e\u0441\u0442\u0438\u0442\u0443\u0442\u043a\u0430 \u043f\u0440\u043e\u0441\u044b\u043f\u0430\u0435\u0442\u0441\u044f \u043d\u043e\u0447\u044c\u044e. \u0412\u044b\u0431\u0438\u0440\u0430\u0435\u0442 \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0433\u0440\u043e\u043a\u0430. \u041d\u0435\u043b\u044c\u0437\u044f \u0432\u044b\u0431\u0438\u0440\u0430\u0442\u044c \u043e\u0434\u043d\u0443 \u0438 \u0442\u0443 \u0436\u0435 \u0446\u0435\u043b\u044c \u0434\u0432\u0435 \u043d\u043e\u0447\u0438 \u043f\u043e\u0434\u0440\u044f\u0434. \u0415\u0441\u043b\u0438 \u0434\u043d\u0435\u043c \u0446\u0435\u043b\u044c \u043f\u0440\u043e\u0441\u0442\u0438\u0442\u0443\u0442\u043a\u0438 \u0445\u043e\u0442\u044f\u0442 \u043a\u0430\u0437\u043d\u0438\u0442\u044c \u043d\u0430 \u043e\u043a\u043e\u043d\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u043c \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u043d\u0438\u0438, \u0442\u043e \u0412\u0435\u0434\u0443\u0449\u0438\u0439 \u0434\u043e\u043b\u0436\u0435\u043d \u043e\u0431\u044a\u044f\u0432\u0438\u0442\u044c, \u0447\u0442\u043e \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u0438\u0433\u0440\u043e\u043a \u0438\u043c\u0435\u0435\u0442 \u0430\u043b\u0438\u0431\u0438. \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u0443\u0442 \u0436\u0435 \u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0431\u0435\u0437 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 \u0438 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u043d\u043e\u0447\u044c."},{id:2,title:d.Doctor,desc:"\u0414\u043e\u043a\u0442\u043e\u0440 \u043a\u0430\u0436\u0434\u0443\u044e \u043d\u043e\u0447\u044c \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u044c \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0433\u0440\u043e\u043a\u0430 \u0438 \u0441\u043f\u0430\u0441\u0442\u0438 \u0435\u0433\u043e \u0436\u0438\u0437\u043d\u044c \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0438 \u0435\u0433\u043e \u0443\u0431\u0438\u0439\u0441\u0442\u0432\u0430 \u043c\u0430\u0444\u0438\u0435\u0439 \u0438\u043b\u0438 \u043c\u0430\u043d\u044c\u044f\u043a\u043e\u043c. \u0414\u043e\u043a\u0442\u043e\u0440 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0434\u0432\u0430 \u0440\u0430\u0437\u0430 \u043f\u043e\u0434\u0440\u044f\u0434 \u043b\u0435\u0447\u0438\u0442\u044c \u043e\u0434\u043d\u043e\u0433\u043e \u0438 \u0442\u043e\u0433\u043e \u0436\u0435 \u0438\u0433\u0440\u043e\u043a\u0430"},{id:3,title:d.Immortal,desc:"\u041f\u043e \u0441\u0443\u0442\u0438 \u0441\u0432\u043e\u0435\u0439 \u0411\u0435\u0441\u0441\u043c\u0435\u0440\u0442\u043d\u044b\u0439 \u2014 \u0442\u043e\u0442 \u0436\u0435 \u041c\u0438\u0440\u043d\u044b\u0439 \u0416\u0438\u0442\u0435\u043b\u044c, \u043e\u0442\u043b\u0438\u0447\u0430\u044e\u0449\u0438\u0439\u0441\u044f \u043b\u0438\u0448\u044c \u0442\u0435\u043c, \u0447\u0442\u043e \u043d\u043e\u0447\u044c\u044e \u043e\u043d \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e \u043d\u0435\u0443\u044f\u0437\u0432\u0438\u043c. \u0413\u043b\u0430\u0432\u043d\u043e\u0435 \u0432 \u0432\u0430\u0448\u0435\u0439 \u0440\u043e\u043b\u0438 \u2014 \u0434\u0430\u0442\u044c \u043f\u043e\u043d\u044f\u0442\u044c, \u0447\u0442\u043e \u0432\u044b \u2014 \u043c\u0438\u0440\u043d\u044b\u0439, \u0438 \u043d\u0435 \u0434\u0430\u0442\u044c \u0443\u0431\u0438\u0442\u044c \u0441\u0435\u0431\u044f \u0434\u043d\u0435\u043c."},{id:4,title:d.Comissar,desc:"\u0418\u0433\u0440\u0430\u0435\u0442 \u0437\u0430 \xab\u0447\u0435\u0441\u0442\u043d\u044b\u0445\xbb. \u041f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u0432\u0435\u0434\u0443\u0449\u0438\u0439 \u043e\u0431\u044a\u044f\u0432\u043b\u044f\u0435\u0442: \xab\u041d\u0430 \u0440\u0430\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0432\u044b\u0445\u043e\u0434\u0438\u0442 \u043a\u043e\u043c\u0438\u0441\u0441\u0430\u0440\xbb. \xab\u041a\u043e\u043c\u0438\u0441\u0441\u0430\u0440\xbb \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u0442 \u0433\u043b\u0430\u0437\u0430 \u0438 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0432\u0435\u0434\u0443\u0449\u0435\u043c\u0443 \u043d\u0430 \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0437 \u0438\u0433\u0440\u043e\u043a\u043e\u0432. \u0412\u0435\u0434\u0443\u0449\u0438\u0439 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0437\u043d\u0430\u043a\u0430\u043c\u0438 \xab\u043c\u0430\u0444\u0438\u044f\xbb - \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u043f\u0430\u043b\u0435\u0446 \u0432\u043d\u0438\u0437 \u0438\u043b\u0438 \xab\u0447\u0435\u0441\u0442\u043d\u044b\u0439\xbb - \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u043f\u0430\u043b\u0435\u0446 \u0432\u0432\u0435\u0440\u0445. \u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u0432\u0435\u0434\u0443\u0449\u0438\u0439 \u043e\u0431\u044a\u044f\u0432\u043b\u044f\u0435\u0442: \xab\u041a\u043e\u043c\u0438\u0441\u0441\u0430\u0440 \u043f\u0440\u043e\u0432\u0435\u043b \u0440\u0430\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u0443\u0441\u043d\u0443\u043b\xbb. \xab\u041a\u043e\u043c\u0438\u0441\u0441\u0430\u0440\xbb \u0437\u0430\u043a\u0440\u044b\u0432\u0430\u0435\u0442 \u0433\u043b\u0430\u0437\u0430. \xab\u041a\u043e\u043c\u0438\u0441\u0441\u0430\u0440\xbb \u0442\u043e\u0436\u0435 \u0432\u044b\u043d\u0443\u0436\u0434\u0435\u043d \u0441\u043a\u0440\u044b\u0432\u0430\u0442\u044c\u0441\u044f, \u0447\u0442\u043e\u0431\u044b \u043c\u0430\u0444\u0438\u044f \u043d\u0435 \u0441\u043c\u043e\u0433\u043b\u0430 \u0435\u0433\u043e \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u044c \u0438 \u0431\u044b\u0441\u0442\u0440\u043e \u0443\u0431\u0438\u0442\u044c."},{id:5,title:d.Maniac,desc:"\u041c\u0430\u043d\u044c\u044f\u043a - \u043e\u0434\u043d\u0430 \u0438\u0437 \u0441\u0430\u043c\u044b\u0445 \u043f\u0440\u043e\u0442\u0438\u0432\u043e\u0440\u0435\u0447\u0438\u0432\u044b\u0445 \u0440\u043e\u043b\u0435\u0439 \u0432 \u0438\u0433\u0440\u0435. \u041d\u0435\u0441\u043c\u043e\u0442\u0440\u044f \u043d\u0430 \u043f\u043b\u043e\u0445\u0443\u044e \u0440\u0435\u043f\u0443\u0442\u0430\u0446\u0438\u044e \u0441\u0440\u0435\u0434\u0438 \u0433\u0440\u0430\u0436\u0434\u0430\u043d \u0433\u043e\u0440\u043e\u0434\u0430, \u043c\u0430\u043d\u044c\u044f\u043a \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043c\u043e\u0447\u044c \u043c\u0438\u0440\u043d\u044b\u043c \u0436\u0438\u0442\u0435\u043b\u044f\u043c, \u0443\u0431\u0438\u0432\u0430\u044f \u0447\u043b\u0435\u043d\u043e\u0432 \u043c\u0430\u0444\u0438\u0438 \u043f\u043e \u043d\u043e\u0447\u0430\u043c. \u041e\u0434\u043d\u0430\u043a\u043e, \u043f\u043e\u0441\u0442\u0440\u0430\u0434\u0430\u0442\u044c \u043e\u0442 \u0435\u0433\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u043c\u043e\u0433\u0443\u0442 \u043a\u0430\u043a \u0438 \u043f\u0440\u043e\u0441\u0442\u044b\u0435 \u0433\u0440\u0430\u0436\u0434\u0430\u043d\u0435, \u0442\u0430\u043a \u0438 \u043f\u043e\u043b\u0438\u0446\u0438\u044f \u0438\u043b\u0438 \u0434\u043e\u043a\u0442\u043e\u0440. \u041c\u043e\u0436\u0435\u0442 \u043f\u043e\u0431\u0435\u0434\u0438\u0442\u044c, \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0441\u043b\u0438 \u043e\u0441\u0442\u0430\u043d\u0435\u0442\u0441\u044f \u043e\u0434\u0438\u043d."},{id:6,title:d.Reanymator,desc:"\u041c\u043e\u0436\u0435\u0442 \u0441\u043f\u0430\u0441\u0442\u0438 \u043e\u0442 \u0441\u043c\u0435\u0440\u0442\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0437 \u0436\u0438\u0442\u0435\u043b\u0435\u0439 \u0433\u043e\u0440\u043e\u0434\u0430. \u041f\u0440\u043e\u0441\u044b\u043f\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u043c. \u0412\u0435\u0434\u0443\u0449\u0438\u0439 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u043a\u0442\u043e \u0443\u0431\u0438\u0442\u044b, \u0438 \u043e\u043d, \u043f\u043e \u0441\u0432\u043e\u0435\u043c\u0443 \u0432\u044b\u0431\u043e\u0440\u0443, \u0440\u0435\u0430\u043d\u0438\u043c\u0438\u0440\u0443\u0435\u0442 \u0443\u0431\u0438\u0442\u043e\u0433\u043e \u0438\u043b\u0438 \u043d\u0435\u0442."},{id:7,title:d.Judge,desc:"\u043f\u0440\u043e\u0441\u044b\u043f\u0430\u0435\u0442\u0441\u044f \u043d\u043e\u0447\u044c\u044e. \u041c\u043e\u0436\u0435\u0442 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0433\u0440\u043e\u043a\u0430. \u0415\u0433\u043e \u0446\u0435\u043b\u044c \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u0442 \u0432 \u0442\u044e\u0440\u044c\u043c\u0443 \u2014 \u044d\u0442\u043e\u0442 \u0438\u0433\u0440\u043e\u043a \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u0432\u043e\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u043d\u043e\u0447\u044c\u044e \u0438 \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u0442\u044c \u0434\u043d\u0435\u043c, \u043d\u043e \u043c\u043e\u0436\u0435\u0442 \u0443\u0447\u0430\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0432 \u043e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u044f\u0445. \u041f\u043e\u0441\u043b\u0435 \u0441\u043c\u0435\u0440\u0442\u0438 \u0421\u0443\u0434\u044c\u0438 \u0432\u0441\u0435 \u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u0435 \u0432\u044b\u0445\u043e\u0434\u044f\u0442 \u043d\u0430 \u0441\u0432\u043e\u0431\u043e\u0434\u0443, \u0442\u043e \u0435\u0441\u0442\u044c \u0441\u043d\u043e\u0432\u0430 \u043c\u043e\u0433\u0443\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u0432\u043e\u0438\u043c\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044f\u043c\u0438 \u043d\u043e\u0447\u044c\u044e \u0438 \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u0442\u044c \u0434\u043d\u0435\u043c. \u0415\u0441\u043b\u0438 \u0421\u0443\u0434\u044c\u044f \u0445\u043e\u0447\u0435\u0442, \u0442\u043e \u043e\u043d \u043c\u043e\u0436\u0435\u0442 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0446\u0435\u043b\u044c\u044e \u0441\u0432\u043e\u0435\u0439 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u0443\u0436\u0435 \u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u043e\u0433\u043e \u0432 \u0442\u044e\u0440\u044c\u043c\u0443 \u0438\u0433\u0440\u043e\u043a\u0430, \u0447\u0442\u043e\u0431\u044b \u043e\u0441\u0432\u043e\u0431\u043e\u0434\u0438\u0442\u044c \u0435\u0433\u043e."}],_=(n(19),{totalPlayers:6,citizens:5,mafias:1,activeRoles:[]}),N=function(e){var t=e.onSubmit,n=Object(i.useState)(_),c=Object(f.a)(n,2),a=c[0],s=c[1];console.log("config: ",a);var o=Object(i.useState)(!1),l=Object(f.a)(o,2),r=l[0],u=l[1],v=Object(i.useState)(!1),h=Object(f.a)(v,2),N=h[0],S=h[1],w=function(e,t){s((function(n){return Object(m.a)(Object(m.a)({},n),{},Object(j.a)({},e,t))}))};Object(i.useEffect)((function(){r&&(w("activeRoles",[]),w("citizens",a.totalPlayers-a.mafias))}),[a.mafias,a.totalPlayers,r]);return Object(O.jsxs)("div",{className:"Settings",children:[!N&&Object(O.jsx)("div",{className:"Settings__wrapper",children:Object(O.jsxs)("div",{className:"Settings__total",children:[Object(O.jsx)(x,{label:"TOTAL PLAYERS",value:a.totalPlayers,min:3,onChange:function(e){w("totalPlayers",e),w("citizens",e-1),w("mafias",1),w("activeRoles",[]),u(e<=4)}}),Object(O.jsx)("div",{className:"Settings__next",children:Object(O.jsx)("div",{className:"Settings__button-next",onClick:function(){return S(!0)},children:"NEXT"})})]})}),N&&Object(O.jsxs)("div",{className:"Settings__content",children:[Object(O.jsxs)("div",{className:"Settings__row",children:[Object(O.jsx)("div",{children:Object(O.jsx)(x,{label:"\u0412\u0441\u0435\u0433\u043e \u043c\u0438\u0440\u043d\u044b\u0445",value:a.citizens,min:0,onChange:function(e){var t=a.totalPlayers-e-a.activeRoles.length;w("citizens",e),w("mafias",t)},isDisabledInc:a.citizens+a.activeRoles.length>=a.totalPlayers-1,isDisabledDec:a.citizens+a.activeRoles.length<=a.mafias,className:"is-columns"})}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{children:Object(O.jsx)(x,{label:"\u0412\u0441\u0435\u0433\u043e \u043c\u0430\u0444\u0438\u0439",value:a.mafias,min:1,isDisabledInc:a.mafias>=a.citizens+a.activeRoles.length||0===a.citizens,onChange:function(e){var t=a.totalPlayers-e-a.activeRoles.length;w("mafias",e),w("citizens",t)},className:"is-columns"})})]}),!r&&Object(O.jsxs)("div",{className:"Settings__row",children:[Object(O.jsxs)("div",{className:"Settings__title",children:["\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u0440\u043e\u043b\u0438 ",Object(O.jsx)("div",{className:"Settings__title-info",children:"?"})]}),Object(O.jsx)("div",{className:"Settings__roles",children:p.map((function(e){var t=e.title===d.Doctor,n=e.title===d.Reanymator,i=!!(t&&a.activeRoles.find((function(e){return e.title===d.Reanymator}))||n&&a.activeRoles.find((function(e){return e.title===d.Doctor}))),c=!!a.activeRoles.find((function(t){return t.id===e.id}));return Object(O.jsx)(g,{onChange:function(){return function(e){var t=a.activeRoles,n=a.citizens,i=a.mafias,c=a.totalPlayers,s=t.findIndex((function(t){return t.id===e.id}))>=0,o=n+(s?1:-1);!s&&0===n&&n+i+t.length>=c?w("mafias",i-1):w("citizens",o),w("activeRoles",s?Object(b.a)(t).filter((function(t){return t.id!==e.id})):[].concat(Object(b.a)(t),[e]))}(e)},label:e.title,isChecked:c,isDisabled:i||a.totalPlayers-a.activeRoles.length<3&&!c},e.id)}))}),Object(O.jsx)("div",{className:"Settings__action",children:Object(O.jsx)("button",{onClick:function(){var e=a.citizens,n=a.mafias,i=a.activeRoles;t([].concat(Object(b.a)(Array.from(Array(e).fill(d.Citizen))),Object(b.a)(Array.from(Array(n).fill(d.Mafia))),Object(b.a)(i.map((function(e){return e.title})))))},children:"GO"})})]})]})]})};n(20);var S=function(){var e=Object(i.useState)(r.Settings),t=Object(f.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)([]),s=Object(f.a)(a,2),o=(s[0],s[1]);return Object(i.useEffect)((function(){var e=document.documentElement;n===r.Roles?e.classList.add("is-fixed"):e.classList.remove("is-fixed")}),[n]),Object(O.jsxs)("div",{className:"App",children:[Object(O.jsxs)("div",{className:"App__orientation",children:["ROTATE ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"DEVICE"]}),Object(O.jsx)(N,{onSubmit:function(e){o(function(e){for(var t,n=e.length;0!==n;){t=Math.floor(Math.random()*n),n--;var i=[e[t],e[n]];e[n]=i[0],e[t]=i[1]}return e}(e)),c(r.Roles)}})]})};s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(S,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/app_maf",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/app_maf","/service-worker.js");o?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var i=n.headers.get("content-type");404===n.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):l(t,e)}))}}(),u()}],[[21,1,2]]]);
//# sourceMappingURL=main.3b836723.chunk.js.map