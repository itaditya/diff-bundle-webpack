!function(e){function n(n){for(var t,o,i=n[0],u=n[1],c=0,a=[];c<i.length;c++)o=i[c],r[o]&&a.push(r[o][0]),r[o]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(e[t]=u[t]);for(f&&f(n);a.length;)a.shift()()}var t={},r={0:0};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var i=new Promise(function(n,o){t=r[e]=[n,o]});n.push(t[2]=i);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(e){return o.p+""+({}[e]||e)+"-modern-"+{1:"7adb9ef3ef7945acbcc6"}[e]+".js"}(e),u=function(n){c.onerror=c.onload=null,clearTimeout(f);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src,u=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");u.type=o,u.request=i,t[1](u)}r[e]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:c})},12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(n)},o.m=e,o.c=t,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=n,i=i.slice();for(var c=0;c<i.length;c++)n(i[c]);var f=u;o(o.s=0)}([function(e,n,t){"use strict";function r(){console.log(...arguments)}function o(e,n,t,r,o,i,u){try{var c=e[i](u),f=c.value}catch(e){return void t(e)}c.done?n(f):Promise.resolve(f).then(r,o)}function i(e){return function(){var n=this,t=arguments;return new Promise(function(r,i){var u=e.apply(n,t);function c(e){o(u,r,i,c,f,"next",e)}function f(e){o(u,r,i,c,f,"throw",e)}c(void 0)})}}t.r(n),r("app loaded"),setTimeout(i(function*(){const e=new(0,(yield t.e(1).then(t.bind(null,1))).default);r("Difference of 7 & 2 is",7,2),alert(e.difference(7,2))}),300)}]);