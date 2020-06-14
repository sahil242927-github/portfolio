(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{10:function(e,t,n){e.exports=n.p+"static/media/skill-logo-and-icons.6a30dbdb.svg"},28:function(e,t,n){e.exports=n(53)},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(7),i=n.n(o),c=n(11),l=n(27),s=n(1),m=n(2);function u(){var e=Object(s.a)(["\n  box-shadow: 0px 0px 5px 0px rgba(138, 133, 138, 1);\n"]);return u=function(){return e},e}var p=Object(m.b)(u());function d(){var e=Object(s.a)(['\n\n\n:root {\n  /* Background colors */\n  --color-primary: #ffa45c;\n  --color-secondary: #302822;\n  --color-secondary-rbg: 48, 40, 34;\n  \n  /* Border Color */\n  --border-color-light-grey: #cfcece;\n\n  /* Default Font */\n  --font-primary: "Montserrat", sans-serif;\n  --font-heading: "Montserrat", sans-serif;\n}\n\n /* inherit all the properties from HTML */\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%; // (10px/16px) = 62.5% => 1rem = 10px\n}\n\nbody {\n  font-family: var(--font-primary);\n  color: $color-grey-dark-2;\n  font-size: 1.5rem;\n  font-weight: 300;\n  line-height: 1.6;\n}\n\na,\na:link {\n  color: currentColor;\n  text-decoration: none;\n}\n  \n\n\n.shadow-box {\n   ',"\n}\n\n// ATOMIC CLASSES\n.mb-sm {\n  margin-bottom: 2rem;\n}\n.mb-md {\n  margin-bottom: 4rem;\n}\n.mb-lg {\n  margin-bottom: 6rem;\n}\n.mb-xl {\n  margin-bottom: 8rem;\n}\n\n\n"]);return d=function(){return e},e}var f=Object(m.a)(d(),p),g=n(26),h=n(25),b=(n(45),function(e){var t=e.inView,n=Object(r.useState)([{link:"#home",text:"home",status:"inactive"},{link:"#skills",text:"skills",status:"inactive"},{link:"#work",text:"work",status:"inactive"},{link:"#about",text:"about",status:"inactive"},{link:"#contact",text:"contact",status:"inactive"}]),o=Object(c.a)(n,2),i=o[0],l=o[1],s=t?"nav-bar":"nav-bar nav-bar-inverse";return a.a.createElement("nav",{className:s},a.a.createElement("div",{className:"left-links"},a.a.createElement("ul",null,i.map((function(e){return a.a.createElement("li",{className:e.status,key:e.text},a.a.createElement(h.Link,{to:e.text,smooth:!0,offset:-70,duration:500,onClick:function(e){return function(e){var t=Object(g.a)(i);t.forEach((function(t){return e===t.text?t.status="active":t.status="inactive"})),l(t)}(e.target.text)}},e.text))})))))}),E=(n(46),a.a.forwardRef((function(e,t){return a.a.createElement("section",{className:"home mb-md",ref:t,id:"home"},a.a.createElement("div",{className:"text-container"},a.a.createElement("span",{className:"banner-text-1"},"Hi,"),a.a.createElement("span",{className:"banner-text-2"},"I'm Sahil,"),a.a.createElement("span",{className:"banner-text-3"},"Web Developer,"),a.a.createElement("span",{className:"banner-text-4"},"Front End Web Developer / Lead / JavaScript Expert / C2H (Contract to hire)")))})));n(47);function v(){var e=Object(s.a)(["\n  border: 1px solid currentColor;\n  color: var(--border-color-light-grey);\n  height: 10rem;\n  width: 100%;\n  font-weight: 200;\n  display: block;\n  margin-bottom: 0.5rem;\n  padding: 0.5rem;\n"]);return v=function(){return e},e}function x(){var e=Object(s.a)(["\n  border: 1px solid currentColor;\n  color: var(--border-color-light-grey);\n  height: 4rem;\n  width: 100%;\n  font-weight: 200;\n  display: block;\n  margin-bottom: 0.5rem;\n  padding: 0.5rem;\n"]);return x=function(){return e},e}function j(){var e=Object(s.a)(["\n  background-color: #ffa45c;\n  color: white;\n  padding: 1.3rem;\n  border: 0;\n  width: ",";\n"]);return j=function(){return e},e}function k(){var e=Object(s.a)(["\n  line-height: 1.8;\n  margin-bottom: 2rem;\n"]);return k=function(){return e},e}function w(){var e=Object(s.a)(["\n  text-align: center;\n  display: grid;\n  grid-template-columns: 10% minmax(min-content, max-content) 10%;\n  align-items: center;\n  justify-content: center;\n  grid-column-gap: 1rem;\n  font-size: 4rem;\n  font-weight: 400;\n  color: ",';\n  &:before,\n  &:after {\n    content: "";\n    height: 1px;\n    display: block;\n    background-color: currentColor;\n  }\n']);return w=function(){return e},e}function y(){var e=Object(s.a)(["\n  font-size: 4rem;\n  /* padding: 1rem 0 1rem 2rem; */\n  font-family: $font-heading;\n  font-weight: 400;\n"]);return y=function(){return e},e}var N=m.c.h2(y()),O=m.c.h2(w(),(function(e){return e.color||"$color-grey-dark-1"})),S=m.c.p(k()),C=m.c.button(j(),(function(e){return e.width||"100%"})),M=m.c.input(x()),A=m.c.textarea(v()),z=function(){return a.a.createElement("section",{className:"work",id:"work"},a.a.createElement(O,null,"Work"),a.a.createElement("div",{className:"projects"},a.a.createElement("picture",null,a.a.createElement("source",{media:"(max-width:64em)",srcSet:"/portfolio/img/project-1-ipad-1x.jpg 1x ,/portfolio/img/project-1-ipad-2x.jpg 2x"}),a.a.createElement("img",{srcSet:"/portfolio/img/project-1.jpg 1x,/portfolio/img/project-1.jpg 2x",alt:"project-1",src:"/portfolio/img/project-1.jpg"})),a.a.createElement("img",{srcSet:"/portfolio/img/project-2.jpg 300w,/portfolio/img/project-2.jpg 640w",sizes:"(max-width:25em) 72vw , 280px",img:"/portfolio/img/project-1.jpg",alt:"project-2"}),a.a.createElement("img",{src:"/portfolio/img/project-3.jpg",alt:"project-3"}),a.a.createElement("img",{src:"/portfolio/img/project-4.jpg",alt:"project-4"}),a.a.createElement("img",{src:"/portfolio/img/project-5.jpg",alt:"project-5"}),a.a.createElement("img",{src:"/portfolio/img/project-6.jpg",alt:"project-6"})))},W=(n(48),function(){return a.a.createElement("section",{className:"contact"},a.a.createElement(O,{className:"heading",color:"grey"},"Contact Us"),a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"form-container",id:"contact"},a.a.createElement("div",{className:"left"}),a.a.createElement("div",{className:"right"},a.a.createElement("form",null,a.a.createElement(M,{placeholder:"Name"}),a.a.createElement(M,{placeholder:"Email"}),a.a.createElement(M,{placeholder:"Phone"}),a.a.createElement(A,{placeholder:"Message"}),a.a.createElement(C,null,"Submit"))))))}),I=(n(49),n(10)),D=n.n(I),T=["bootstrap","html","redis","docker","css","webpack","javascript","expressjs","mongodb","nodejs","git","circleci","github","jira","react","redux","sass","adobe-xd","redux-saga","eslint","w3c"],B=function(){return a.a.createElement("section",{className:"skills",id:"skills"},a.a.createElement("div",{className:"skill-description-text"},a.a.createElement(N,null,"Skills & Experience"),a.a.createElement(S,null,"Well-organised person, problem solver, independent employee with high attention to detail. Fan of MMA, outdoor activities, TV series and, recently, English literature. A family person, father of two fractious boys, therefore remote employment is preferred.")),a.a.createElement("div",{className:"skill-logos"},T.map((function(e){return a.a.createElement("svg",{className:e,key:e},a.a.createElement("use",{href:"".concat(D.a,"#").concat(e)}))}))))},F=(n(50),function(){return a.a.createElement("section",{className:"about",id:"about"},a.a.createElement("div",null,a.a.createElement(N,null,"About Me"),a.a.createElement(S,null,"Well-organised person, problem solver, independent employee with high attention to detail. Fan of MMA, outdoor activities, TV series and, recently, English literature. A family person, father of two fractious girls, therefore remote employment is preferred."),a.a.createElement(S,null,"I believe in quality work. Deliver small pieces, but must have quality work! I Design websites from wireframes to deployement including coding frontend / backend and APIs."),a.a.createElement(S,null,"This portfolio website looks simple, but it has all the modern tech",a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("strong",null,"About this website >"))),a.a.createElement("div",{className:"aboutme-img"}))}),L=(n(51),function(){return a.a.createElement("section",{className:"footer"},a.a.createElement("div",null,"Copywrite@2020, Mohd Sahil,",a.a.createElement("div",{className:"contact-links"},[{icon:"linkedin",value:"https://www.linkedin.com/in/mohd-sahil-fullstack-developer/"},{icon:"paperplane",value:"sahil242927@gmail.com"},{icon:"phone",value:"+91 9250483367"}].map((function(e){return a.a.createElement("div",{className:"link-container",key:e.icon},a.a.createElement("span",null,a.a.createElement("svg",null,a.a.createElement("use",{href:"".concat(D.a,"#").concat(e.icon)}))),a.a.createElement("span",null,e.value))})))))});n(52);var V=function(){var e=Object(l.a)({threshold:0}),t=Object(c.a)(e,2),n=t[0],r=t[1];return a.a.createElement("div",{id:"container"},a.a.createElement(f,null),a.a.createElement(b,{inView:r}),a.a.createElement(E,{ref:n}),a.a.createElement(z,null),a.a.createElement(F,null),a.a.createElement(B,null),a.a.createElement(W,null),a.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.a5180591.chunk.js.map