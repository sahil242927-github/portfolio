(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{11:function(e,t,n){e.exports=n.p+"static/media/skill-logo-and-icons.a1c1b63d.svg"},2:function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return g})),n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return b})),n.d(t,"h",(function(){return E})),n.d(t,"g",(function(){return v})),n.d(t,"f",(function(){return x}));var r=n(5),a=n(6);function o(){var e=Object(r.a)(["\n  height: 5rem;\n  width: 5rem;\n  border: 3px solid rgba(192, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n\n  @keyframes spin {\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"]);return o=function(){return e},e}function c(){var e=Object(r.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  align-items: center;\n  background-color: rgba(15, 15, 15, 0.1);\n"]);return c=function(){return e},e}function i(){var e=Object(r.a)(["\n  border: 1px solid currentColor;\n  color: var(--border-color-light-grey);\n  height: 10rem;\n  width: 100%;\n  font-weight: 200;\n  display: block;\n  margin-bottom: 0.5rem;\n  padding: 0.5rem;\n"]);return i=function(){return e},e}function l(){var e=Object(r.a)(["\n  border: 1px solid currentColor;\n  color: var(--border-color-light-grey);\n  height: 4rem;\n  width: 100%;\n  font-weight: 200;\n  display: block;\n  margin-bottom: 0.5rem;\n  padding: 0.5rem;\n"]);return l=function(){return e},e}function s(){var e=Object(r.a)(["\n  background-color: #ffa45c;\n  color: white;\n  padding: 1.3rem;\n  border: 0;\n  width: ",";\n"]);return s=function(){return e},e}function m(){var e=Object(r.a)(["\n  line-height: 1.8;\n  margin-bottom: 2rem;\n"]);return m=function(){return e},e}function u(){var e=Object(r.a)(["\n  text-align: center;\n  display: grid;\n  grid-template-columns: 10% minmax(min-content, max-content) 10%;\n  align-items: center;\n  justify-content: center;\n  grid-column-gap: 1rem;\n  font-size: 4rem;\n  font-weight: 400;\n  color: ",';\n  &:before,\n  &:after {\n    content: "";\n    height: 1px;\n    display: block;\n    background-color: currentColor;\n  }\n']);return u=function(){return e},e}function d(){var e=Object(r.a)(["\n  font-size: 4rem;\n  /* padding: 1rem 0 1rem 2rem; */\n  font-family: $font-heading;\n  font-weight: 400;\n"]);return d=function(){return e},e}var f=a.c.h2(d()),p=a.c.h2(u(),(function(e){return e.color||"$color-grey-dark-1"})),g=a.c.p(m()),h=a.c.button(s(),(function(e){return e.width||"100%"})),b=a.c.input(l()),E=a.c.textarea(i()),v=a.c.div(c()),x=a.c.div(o())},41:function(e,t,n){e.exports=n(66)},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(17),c=n.n(o),i=n(18),l=n(20),s=n(39),m=n(1),u=n(5),d=n(6);function f(){var e=Object(u.a)(["\n  box-shadow: 0px 0px 5px 0px rgba(138, 133, 138, 1);\n"]);return f=function(){return e},e}var p=Object(d.b)(f());function g(){var e=Object(u.a)(['\n\n\n:root {\n  /* Background colors */\n  --color-primary: #ffa45c;\n  --color-secondary: #302822;\n  --color-secondary-rbg: 48, 40, 34;\n  \n  /* Border Color */\n  --border-color-light-grey: #cfcece;\n\n  /* Default Font */\n  --font-primary: "Montserrat", sans-serif;\n  --font-heading: "Montserrat", sans-serif;\n}\n\n /* inherit all the properties from HTML */\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%; // (10px/16px) = 62.5% => 1rem = 10px\n}\n\nbody {\n  font-family: var(--font-primary);\n  color: $color-grey-dark-2;\n  font-size: 1.5rem;\n  font-weight: 300;\n  line-height: 1.6;\n}\n\na,\na:link {\n  color: currentColor;\n  text-decoration: none;\n}\n  \n\n\n.shadow-box {\n   ',"\n}\n\n// ATOMIC CLASSES\n.mb-sm {\n  margin-bottom: 2rem;\n}\n.mb-md {\n  margin-bottom: 4rem;\n}\n.mb-lg {\n  margin-bottom: 6rem;\n}\n.mb-xl {\n  margin-bottom: 8rem;\n}\n\n\n"]);return g=function(){return e},e}var h=Object(d.a)(g(),p),b=n(40),E=n(11),v=n.n(E),x=n(26),k=(n(57),function(e){var t=e.inView,n=Object(r.useState)([{link:"#home",text:"home",status:"inactive"},{link:"#skills",text:"skills",status:"inactive"},{link:"#work",text:"work",status:"inactive"},{link:"#about",text:"about",status:"inactive"},{link:"#contact",text:"contact",status:"inactive"}]),o=Object(l.a)(n,2),c=o[0],i=o[1],s=t?"nav-bar":"nav-bar nav-bar-inverse",m=function(e){var t=Object(b.a)(c);t.forEach((function(t){return e===t.text?t.status="active":t.status="inactive"})),i(t)};return a.a.createElement("div",null,a.a.createElement("div",{className:"burger-menu"},a.a.createElement("svg",null,a.a.createElement("use",{href:"".concat(v.a,"#burger-menu")})),a.a.createElement("ul",null,c.map((function(e){return a.a.createElement("li",{className:e.status,key:e.text},a.a.createElement(x.Link,{to:e.text,smooth:!0,offset:-80,duration:500,onClick:function(e){return m(e.target.text)},hashSpy:!0},e.text))})))),a.a.createElement("nav",{className:s},a.a.createElement("div",null,a.a.createElement("ul",{className:"left-links"},c.map((function(e){return a.a.createElement("li",{className:e.status,key:e.text},a.a.createElement(x.Link,{to:e.text,smooth:!0,offset:-80,duration:500,onClick:function(e){return m(e.target.text)},hashSpy:!0},e.text))}))))))}),j=(n(58),a.a.forwardRef((function(e,t){return a.a.createElement("section",{className:"home mb-md",ref:t,id:"home"},a.a.createElement("div",{className:"text-container"},a.a.createElement("span",{className:"banner-text-1"},"Hi,"),a.a.createElement("span",{className:"banner-text-2"},"I'm Sahil,"),a.a.createElement("span",{className:"banner-text-3"},"Web Developer,"),a.a.createElement("span",{className:"banner-text-4"},"Front End Web Developer / Lead / JavaScript Expert / C2H (Contract to hire)")))}))),w=(n(59),n(2)),y=function(){return a.a.createElement("section",{className:"work",id:"work"},a.a.createElement(w.d,null,"Work"),a.a.createElement("div",{className:"projects"},a.a.createElement("picture",null,a.a.createElement("source",{media:"(max-width:64em)",srcSet:"/portfolio/img/project-1-ipad-1x.jpg 1x ,/portfolio/img/project-1-ipad-2x.jpg 2x"}),a.a.createElement("img",{srcSet:"/portfolio/img/project-1.jpg 1x,/portfolio/img/project-1.jpg 2x",alt:"project-1",src:"/portfolio/img/project-1.jpg"})),a.a.createElement("img",{srcSet:"/portfolio/img/project-2.jpg 300w,/portfolio/img/project-2.jpg 640w",sizes:"(max-width:25em) 72vw , 280px",img:"/portfolio/img/project-1.jpg",alt:"project-2"}),a.a.createElement("img",{src:"/portfolio/img/project-3.jpg",alt:"project-3"}),a.a.createElement("img",{src:"/portfolio/img/project-4.jpg",alt:"project-4"}),a.a.createElement("img",{src:"/portfolio/img/project-5.jpg",alt:"project-5"}),a.a.createElement("img",{src:"/portfolio/img/project-6.jpg",alt:"project-6"})))},N=(n(60),function(){return a.a.createElement("section",{className:"contact"},a.a.createElement(w.d,{className:"heading",color:"grey"},"Contact Us"),a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"form-container",id:"contact"},a.a.createElement("div",{className:"left"}),a.a.createElement("div",{className:"right"},a.a.createElement("form",null,a.a.createElement(w.b,{placeholder:"Name"}),a.a.createElement(w.b,{placeholder:"Email"}),a.a.createElement(w.b,{placeholder:"Phone"}),a.a.createElement(w.h,{placeholder:"Message"}),a.a.createElement(w.a,null,"Submit"))))))}),O=(n(61),["bootstrap","html","redis","docker","css","webpack","javascript","expressjs","mongodb","nodejs","git","circleci","github","jira","react","redux","sass","adobe-xd","redux-saga","eslint","w3c"]),S=function(){return a.a.createElement("section",{className:"skills",id:"skills"},a.a.createElement("div",{className:"skill-description-text"},a.a.createElement(w.c,null,"Skills & Experience"),a.a.createElement(w.e,null,"Well-organised person, problem solver, independent employee with high attention to detail. Fan of MMA, outdoor activities, TV series and, recently, English literature. A family person, father of two fractious boys, therefore remote employment is preferred.")),a.a.createElement("div",{className:"skill-logos"},O.map((function(e){return a.a.createElement("svg",{className:e,key:e},a.a.createElement("use",{href:"".concat(v.a,"#").concat(e)}))}))))},C=n(38),M=(n(63),function(){return a.a.createElement("section",{className:"about",id:"about"},a.a.createElement("div",null,a.a.createElement(w.c,null,"About Me"),a.a.createElement(w.e,null,"Well-organised person, problem solver, independent employee with high attention to detail. Fan of MMA, outdoor activities, TV series and, recently, English literature. A family person, father of two fractious girls, therefore remote employment is preferred."),a.a.createElement(w.e,null,"I believe in quality work. Deliver small pieces, but must have quality work! I Design websites from wireframes to deployement including coding frontend / backend and APIs."),a.a.createElement(w.e,null,"This portfolio website looks simple, but it has all the modern tech",a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(C.HashLink,{smooth:!0,to:"/website#tech-stack",offset:-70,duration:500},a.a.createElement("strong",null,"About this website >")))),a.a.createElement("div",{className:"aboutme-img"}))}),A=(n(64),function(){return a.a.createElement("section",{className:"footer"},a.a.createElement("div",null,"Copywrite@2020, Mohd Sahil,",a.a.createElement("div",{className:"contact-links"},[{icon:"linkedin",value:"https://www.linkedin.com/in/mohd-sahil-fullstack-developer/"},{icon:"paperplane",value:"sahil242927@gmail.com"},{icon:"phone",value:"+91 9250483367"}].map((function(e){return a.a.createElement("div",{className:"link-container",key:e.icon},a.a.createElement("span",null,a.a.createElement("svg",null,a.a.createElement("use",{href:"".concat(v.a,"#").concat(e.icon)}))),a.a.createElement("span",null,e.value))})))))}),z=function(){return a.a.createElement(w.g,null,a.a.createElement(w.f,null))},W=(n(65),Object(r.lazy)((function(){return n.e(3).then(n.bind(null,68))})));var I=function(){var e=Object(s.a)({threshold:0}),t=Object(l.a)(e,2),n=t[0],o=t[1];return a.a.createElement("div",{id:"container"},a.a.createElement(r.Suspense,{fallback:a.a.createElement(z,null)},a.a.createElement(h,null),a.a.createElement(k,{inView:o}),a.a.createElement(j,{ref:n}),a.a.createElement(y,null),a.a.createElement(M,null),a.a.createElement(m.d,{path:"/website",component:W}),a.a.createElement(S,null),a.a.createElement(N,null),a.a.createElement(A,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(i.BrowserRouter,null,a.a.createElement(a.a.StrictMode,null,a.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.b905315e.chunk.js.map