!function(e){function n(n){for(var r,o,l=n[0],u=n[1],c=n[2],s=0,p=[];s<l.length;s++)o=l[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(f&&f(n);p.length;)p.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,l=1;l<t.length;l++){var u=t[l];0!==a[u]&&(r=!1)}r&&(i.splice(n--,1),e=o(o.s=t[0]))}return e}var r={},a={0:0},i=[];function o(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=r,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=n,l=l.slice();for(var c=0;c<l.length;c++)n(l[c]);var f=u;i.push([27,1]),t()}({26:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(12),o=t.n(i),l=t(1);function u(){var e=p(["\n  font-weight: 300;\n  color: #7d7987;\n  font-size: 21px;\n"]);return u=function(){return e},e}function c(){var e=p(["\n  color: #000000;\n  font-size: ",';\n  font-family: "Mulish";\n  font-weight: bold;\n']);return c=function(){return e},e}function f(){var e=p(['\n  font-family: "Mulish";\n  font-weight: bold;\n  background: ',";\n  color: ",";\n  border: ",";\n  border-radius: 25px;\n  width: 200px;\n  height: 52px;\n  cursor: pointer;\n  transition: all 0.2s;\n  &:hover {\n    background: #1f7cfe;\n    color: #fff;\n  }\n"]);return f=function(){return e},e}function s(){var e=p(["\n  width: 1170px;\n  max-width: calc(100% - 40px);\n  height: 100%;\n  margin: 0 auto;\n"]);return s=function(){return e},e}function p(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var m=l.a.div(s()),d=Object(l.a)((function(e){var n=e.className,t=e.children;return a.a.createElement("button",{className:n},t)}))(f(),(function(e){return e.primary?"#458ff6":"#fff"}),(function(e){return e.primary?"#fff":"#458ff6"}),(function(e){return e.primary?"none":" 1px solid #458ff6"})),h=l.a.h1(c(),(function(e){return e.primary?"48px":"36px"})),g=l.a.p(u()),y=t(3);function b(){var e=z(['\n  font-family: "Mulish";\n  font-weight: ',";\n  color: #1f1534;\n  text-decoration: none;\n  font-size: 18px;\n  transition: color 0.4s;\n  &:hover {\n    color: blue;\n  }\n"]);return b=function(){return e},e}function x(){var e=z(["\n  margin-left: 20px;\n"]);return x=function(){return e},e}function v(){var e=z(["\n  display: flex;\n"]);return v=function(){return e},e}function w(){var e=z(["\n  display: flex;\n  align-items: center;\n  @media only screen and (max-width: 768px) {\n    display: none;\n  }\n  @media only screen and (min-width: 769px) and (max-width: 960px) {\n    display: none;\n  }\n"]);return w=function(){return e},e}function E(){var e=z(["\n  flex-shrink: 0;\n"]);return E=function(){return e},e}function j(){var e=z(["\n  padding: 60px 0 40px 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return j=function(){return e},e}function O(){var e=z(["\n  width: 100%;\n  min-height: 60px;\n"]);return O=function(){return e},e}function z(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var S=l.a.header(O()),k=Object(l.a)(m)(j()),P=l.a.picture(E()),M=l.a.nav(w()),A=l.a.ul(v()),T=l.a.li(x()),C=Object(l.a)(y.b)(b(),(function(e){return e.primary?"bold":"300"})),F=t.p+"./assets/logo.png";function H(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  background: transparent;\n  display: none;\n  width: 52px;\n  height: 52px;\n  @media only screen and (max-width: 768px) {\n    display: block;\n  }\n  @media only screen and (min-width: 769px) and (max-width: 960px) {\n    display: block;\n  }\n"]);return H=function(){return e},e}var _=l.a.button(H());function I(e){var n=e.show;return a.a.createElement(_,{onClick:n},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384.97 384.97"},a.a.createElement("path",{d:"M12.03 120.303h360.909c6.641 0 12.03-5.39 12.03-12.03 0-6.641-5.39-12.03-12.03-12.03H12.03c-6.641 0-12.03 5.39-12.03 12.03s5.39 12.03 12.03 12.03zM372.939 180.455H12.03c-6.641 0-12.03 5.39-12.03 12.03s5.39 12.03 12.03 12.03h360.909c6.641 0 12.03-5.39 12.03-12.03s-5.389-12.03-12.03-12.03zM372.939 264.667H132.333c-6.641 0-12.03 5.39-12.03 12.03 0 6.641 5.39 12.03 12.03 12.03h240.606c6.641 0 12.03-5.39 12.03-12.03.001-6.641-5.389-12.03-12.03-12.03z"})))}function q(){var e=L(["\n  text-align: center;\n  margin-top: 20px;\n"]);return q=function(){return e},e}function B(){var e=L(["\n  display: flex;\n  flex-direction: column;\n"]);return B=function(){return e},e}function J(){var e=L(["\n  display: flex;\n"]);return J=function(){return e},e}function N(){var e=L(["\n  display: flex;\n  justify-content: center;\n  height: 400px;\n  align-items: center;\n"]);return N=function(){return e},e}function D(){var e=L(["\n  display: ",";\n  align-items: center;\n  background: rgba(255, 255, 255, 1);\n  position: fixed;\n  z-index: 99999;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n"]);return D=function(){return e},e}function L(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var U=l.a.div(D(),(function(e){return e.visible?"flex":"none"})),V=Object(l.a)(m)(N()),W=l.a.nav(J()),Y=l.a.ul(B()),$=l.a.li(q());function G(e){var n=e.visible,t=e.showMenu;return a.a.createElement(U,{visible:n,onClick:t},a.a.createElement(V,null,a.a.createElement(y.a,null,a.a.createElement(W,null,a.a.createElement(Y,null,a.a.createElement($,null,a.a.createElement(C,null,"Home")),a.a.createElement($,null,a.a.createElement(C,null,"Find a doctor")),a.a.createElement($,null,a.a.createElement(C,null,"Apps")),a.a.createElement($,null,a.a.createElement(C,null,"Testimonials")),a.a.createElement($,null,a.a.createElement(C,null,"About us")))))))}function K(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw i}}return t}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return Q(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Q(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function R(){var e=K(Object(r.useState)(!1),2),n=e[0],t=e[1],i=function(){t(!n)};return a.a.createElement(a.a.Fragment,null,a.a.createElement(S,null,a.a.createElement(k,null,a.a.createElement(P,null,a.a.createElement("source",{srcSet:F}),a.a.createElement("img",{src:F,alt:"trafalgar logo"})),a.a.createElement(y.a,null,a.a.createElement(M,null,a.a.createElement(A,null,a.a.createElement(T,null,a.a.createElement(C,{primary:"/"===window.location.pathname?1:0,to:"/"},"Home")),a.a.createElement(T,null,a.a.createElement(C,{to:"#",primary:"/doctor"===window.location.pathname?1:0},"Find a doctor")),a.a.createElement(T,null,a.a.createElement(C,{to:"#",primary:"/apps"===window.location.pathname?1:0},"Apps")),a.a.createElement(T,null,a.a.createElement(C,{to:"#",primary:"/testimonials"===window.location.pathname?1:0},"Testimonials")),a.a.createElement(T,null,a.a.createElement(C,{to:"#",primary:"/about"===window.location.pathname?1:0},"About us"))))),a.a.createElement(I,{show:i,visible:n}))),a.a.createElement(G,{visible:n,showMenu:i}))}function X(){var e=re(["\n  width: 700px;\n  flex-shrink: 0;\n  @media only screen and (max-width: 768px) {\n    width: 100%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: -1;\n  }\n"]);return X=function(){return e},e}function Z(){var e=re(["\n  @media only screen and (min-width: 769px) and (max-width: 960px) {\n    position: absolute;\n    bottom: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n  }\n  @media only screen and (max-width: 768px) {\n    position: absolute;\n    bottom: 0;\n    background: linear-gradient(\n      -180deg,\n      rgba(255, 255, 255, 0),\n      rgba(255, 255, 255, 1) 50%\n    );\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n  }\n"]);return Z=function(){return e},e}function ee(){var e=re(["\n  margin-top: 45px;\n"]);return ee=function(){return e},e}function ne(){var e=re(["\n  margin-top: 25px;\n"]);return ne=function(){return e},e}function te(){var e=re(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  @media only screen and (max-width: 768px) {\n    height: 400px;\n    position: relative;\n  }\n"]);return te=function(){return e},e}function re(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var ae=Object(l.a)(m)(te()),ie=Object(l.a)(g)(ne()),oe=Object(l.a)(d)(ee()),le=l.a.div(Z()),ue=l.a.picture(X()),ce=t.p+"./assets/bg.png";function fe(){return a.a.createElement(ae,null,a.a.createElement(le,null,a.a.createElement(h,{primary:!0},"Virtual healthcare for you"),a.a.createElement(ie,null,"Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone"),a.a.createElement(oe,{primary:!0},"Consult today")),a.a.createElement(ue,{srcSet:ce},a.a.createElement("img",{src:ce,alt:""})))}function se(){var e=ge(["\n  font-size: 18px;\n  text-align: center;\n"]);return se=function(){return e},e}function pe(){var e=ge(["\n  margin-right: 0;\n  margin-top: 60px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(2, 350px);\n  grid-gap: 20px;\n  @media only screen and (max-width: 768px) {\n    grid-template-columns: repeat(1, 350px);\n    grid-template-rows: repeat(1, 350px);\n  }\n  @media only screen and (min-width: 769px) and (max-width: 960px) {\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(1, 350px);\n  }\n"]);return pe=function(){return e},e}function me(){var e=ge(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return me=function(){return e},e}function de(){var e=ge(["\n  margin: 25px 0;\n"]);return de=function(){return e},e}function he(){var e=ge(["\n  margin-top: 120px;\n  width: 100%;\n  height: 100%;\n"]);return he=function(){return e},e}function ge(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var ye=l.a.section(he()),be=Object(l.a)(d)(de()),xe=Object(l.a)(m)(me()),ve=Object(l.a)(m)(pe()),we=Object(l.a)(g)(se());function Ee(){var e=Se(["\n  color: #7d7987;\n  font-size: 16px;\n"]);return Ee=function(){return e},e}function je(){var e=Se(["\n  font-size: 22px;\n"]);return je=function(){return e},e}function Oe(){var e=Se(["\n  img {\n    height: 70px;\n  }\n"]);return Oe=function(){return e},e}function ze(){var e=Se(["\n  box-shadow: 0 0 50px #e5e9f6;\n  margin-right: 0;\n  padding: 40px;\n"]);return ze=function(){return e},e}function Se(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var ke=l.a.article(ze()),Pe=l.a.picture(Oe()),Me=l.a.h2(je()),Ae=l.a.p(Ee());function Te(e){var n=e.picture,t=e.title,r=e.text;return a.a.createElement(ke,null,a.a.createElement(Pe,{srcSet:n},a.a.createElement("img",{src:n,alt:""})),a.a.createElement(Me,null,t),a.a.createElement(Ae,null,r))}function Ce(e){var n=e.data;return a.a.createElement(ye,null,a.a.createElement(xe,null,a.a.createElement(h,null,"Our Services"),a.a.createElement(we,null,"We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health"),a.a.createElement(ve,null,n.map((function(e){return a.a.createElement(Te,{picture:e.picture,title:e.title,text:e.text})}))),a.a.createElement(be,null,"Learn more")))}function Fe(){document.title="Home";return a.a.createElement(a.a.Fragment,null,a.a.createElement("section",null,a.a.createElement(R,null),a.a.createElement(fe,null),a.a.createElement(Ce,{data:[{id:1,picture:"./assets/picture.png",title:"Search doctor",text:"Choose your doctor from thousands of specialist, general, and trusted hospitals"},{id:2,picture:"./assets/picture2.png",title:"Online pharmacy",text:"Buy  your medicines with our mobile application with a simple delivery system"},{id:3,picture:"./assets/picture3.png",title:"Consultation",text:"Free consultation with our trusted doctors and get the best recomendations"},{id:4,picture:"./assets/picture4.png",title:"Details info",text:"Free consultation with our trusted doctors and get the best recomendations"},{id:5,picture:"./assets/picture5.png",title:"Emergency care",text:"You can get 24/7 urgent care for yourself or your children and your lovely family"},{id:6,picture:"./assets/picture6.png",title:"Tracking",text:"Track and save your medical history and health data "}]})))}t(26);function He(){return a.a.createElement("main",null,a.a.createElement(Fe,null))}o.a.render(a.a.createElement(He,null),document.querySelector("#root"))}});