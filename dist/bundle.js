!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(t,e,n){(function(t){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n=function(t){"use strict";var n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),c=new _(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return O()}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var a=x(c,n);if(a){if(a===s)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=f(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,c),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var s={};function p(){}function h(){}function d(){}var y={};y[i]=function(){return this};var v=Object.getPrototypeOf,m=v&&v(v(k([])));m&&m!==n&&r.call(m,i)&&(y=m);var b=d.prototype=p.prototype=Object.create(y);function g(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,n){var o;this._invoke=function(i,c){function a(){return new n((function(o,a){!function o(i,c,a,u){var l=f(t[i],t,c);if("throw"!==l.type){var s=l.arg,p=s.value;return p&&"object"===e(p)&&r.call(p,"__await")?n.resolve(p.__await).then((function(t){o("next",t,a,u)}),(function(t){o("throw",t,a,u)})):n.resolve(p).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,u)}))}u(l.arg)}(i,c,o,a)}))}return o=o?o.then(a,a):a()}}function x(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=b.constructor=d,d.constructor=h,h.displayName=u(d,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,a,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},g(w.prototype),w.prototype[c]=function(){return this},t.AsyncIterator=w,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var c=new w(l(e,n,r,o),i);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},g(b),u(b,a,"Generator"),b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return c.type="throw",c.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(a&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}("object"===e(t)?t.exports:{});try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}).call(this,n(1)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){var r=n(3),o=n(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);t.exports=o.locals||{}},function(t,e,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),c=[];function a(t){for(var e=-1,n=0;n<c.length;n++)if(c[n].identifier===t){e=n;break}return e}function u(t,e){for(var n={},r=[],o=0;o<t.length;o++){var i=t[o],u=e.base?i[0]+e.base:i[0],l=n[u]||0,f="".concat(u," ").concat(l);n[u]=l+1;var s=a(f),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==s?(c[s].references++,c[s].updater(p)):c.push({identifier:f,updater:v(p,e),references:1}),r.push(f)}return r}function l(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var c=i(t.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(e)}return e}var f,s=(f=[],function(t,e){return f[t]=e,f.filter(Boolean).join("\n")});function p(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=s(e,o);else{var i=document.createTextNode(o),c=t.childNodes;c[e]&&t.removeChild(c[e]),c.length?t.insertBefore(i,c[e]):t.appendChild(i)}}function h(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var d=null,y=0;function v(t,e){var n,r,o;if(e.singleton){var i=y++;n=d||(d=l(e)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=l(e),r=h.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=u(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=a(n[r]);c[o].references--}for(var i=u(t,e),l=0;l<n.length;l++){var f=a(n[l]);0===c[f].references&&(c[f].updater(),c.splice(f,1))}n=i}}}},function(t,e,n){(e=n(5)(!1)).push([t.i,"body{\r\n   font-family: 'Quicksand', sans-serif;\r\n   margin: 0;\r\n   padding: 0;\r\n   background: #f0f0f0;\r\n}\r\n\r\nnav{\r\n   background-color: #333;\r\n   position: sticky;\r\n   top: 0;\r\n   z-index: 1;\r\n}\r\n\r\nnav > h1 {\r\n   display: inline;\r\n   color: white;\r\n   float: left;\r\n   padding: 10px 10px;\r\n   margin: 0;\r\n}\r\n\r\nbutton, input {\r\n   border-radius: 3px;\r\n   font-size: 17px;\r\n   border: 1px solid grey;\r\n   padding: 5px;\r\n   display: inline;\r\n   background: #333;\r\n   color: white;\r\n}\r\n\r\n button:hover, input:hover {\r\n   background: #3f3f3f;\r\n}\r\n\r\n.search-container > input{\r\n   flex: 8;\r\n}\r\n\r\n.search-container > button{\r\n   flex: 2;\r\n   cursor: pointer;\r\n}\r\n\r\n.search-container {\r\n   float: right;\r\n   width: 50%;\r\n   display: flex;\r\n   margin: 7px;\r\n}\r\n\r\nheader{\r\n   display: inline;\r\n}\r\n\r\nmain {\r\n   padding: 10px;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n   .search-container {\r\n      float: left;\r\n      width: 90%;\r\n      display: flex;\r\n      margin: 7px;\r\n   }\r\n}\r\n\r\n@media screen and (max-width: 315px) {\r\n   .search-container {\r\n      float: none;\r\n      width: 100%;\r\n      display: block;\r\n      margin: 2px;\r\n   }\r\n   .search-container > input, .search-container > button{\r\n      width: 90%;\r\n      margin: 1px;\r\n   }\r\n}\r\n\r\n.recipe-list article{\r\n   float: left;\r\n   max-width: 200px;\r\n   margin: 10px;\r\n   height: 300px;\r\n}\r\n\r\n.recipe-list article img{\r\n   width: 100%;\r\n   object-fit: cover;\r\n   object-position: center;\r\n}\r\n \r\n.recipe-list article h3 {\r\n   color: #333;\r\n}\r\n\r\n.recipe-list article:hover {\r\n   cursor: pointer;\r\n   background-color: #fafafa;\r\n}\r\n\r\nfooter {\r\n   padding: 20px;\r\n   color: white;\r\n   background-color: #333;\r\n   text-align: center;\r\n   font-weight: bold;\r\n   margin-top: 20px;\r\n}\r\n\r\n.profile header {\r\n   text-align: center;\r\n}\r\n\r\n.card{\r\n   border-radius: 5px;\r\n   box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);\r\n   padding: 20px;\r\n   margin-top: 20px;\r\n   background: #fff;\r\n}\r\n\r\n.clear{\r\n   clear: both;\r\n}\r\n\r\nrecipe-detail table {\r\n   text-align: left;\r\n}\r\n\r\nimg {\r\n   border-radius: 5px;\r\n   box-shadow: rgba(0,0,0,0.15) 0px 1px 15px 2px;\r\n   object-fit: cover;\r\n   object-position: center;\r\n}\r\n\r\n.loading {\r\n   text-align: center;\r\n}\r\n\r\nrecipe-detail img {\r\n   max-width: 300px;\r\n   float: left;\r\n   margin: 0 30px;\r\n}\r\n\r\nrecipe-detail header {\r\n   display: block;\r\n}\r\n\r\nrecipe-detail h2 {\r\n   float: left;\r\n}\r\n\r\nrecipe-detail button {\r\n   float: right;\r\n   cursor: pointer;\r\n   margin-top: 10px;\r\n}\r\n\r\nrecipe-detail section{\r\n   margin-bottom: 30px;\r\n}\r\n\r\nrecipe-detail table{\r\n   border-collapse: collapse;\r\n   margin-top: 10px;\r\n   margin-left: 30px;\r\n   background-color: #ffff;\r\n   width: 70%;\r\n   max-width: 700px;\r\n}\r\n\r\nrecipe-detail table td, recipe-detail table th{\r\n  padding: 10px;\r\n  text-align: left;\r\n}\r\n\r\nrecipe-detail table tr:nth-child(even){\r\n   background-color: #f0f0f0;\r\n}\r\n\r\nrecipe-detail table th{\r\n   background-color: #f0f0f0;\r\n}\r\n\r\n\r\n\r\n",""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(c=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(u," */")),i=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(i).concat([o]).join("\n")}var c,a,u;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var a=0;a<t.length;a++){var u=[].concat(t[a]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),e.push(u))}},e}},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){var e="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return a(t,arguments,f(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),l(r,t)})(t)}function a(t,e,n){return(a=u()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&l(o,n.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var s=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(h,t);var e,n,c,a,s,p=(e=h,n=u(),function(){var t,r=f(e);if(n){var o=f(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return i(this,t)});function h(){return r(this,h),p.apply(this,arguments)}return c=h,(a=[{key:"render",value:function(){this.innerHTML='\n            <article class="card">\n                <img src="'.concat(this._recipe.strMealThumb,'">\n                <h3>').concat(this._recipe.strMeal,"</h3>\n            </article>\n        ")}},{key:"recipe",set:function(t){this._recipe=t,this.render()}}])&&o(c.prototype,a),s&&o(c,s),h}(c(HTMLElement));customElements.define("recipe-item",s)},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){var e="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return a(t,arguments,f(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),l(r,t)})(t)}function a(t,e,n){return(a=u()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&l(o,n.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var s=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(h,t);var e,n,c,a,s,p=(e=h,n=u(),function(){var t,r=f(e);if(n){var o=f(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return i(this,t)});function h(){return r(this,h),p.apply(this,arguments)}return c=h,(a=[{key:"render",value:function(){for(var t="",e=1;e<=20;e++)if(""!=this._recipe["strIngredient".concat(e)]&&null!=this._recipe["strIngredient".concat(e)]&&null!=this._recipe["strIngredient".concat(e)]){var n=this._recipe["strIngredient".concat(e)],r=this._recipe["strMeasure".concat(e)];t+="\n                    <tr>\n                        <td>".concat(n,"</td>\n                        <td>").concat(r,"</td>\n                    </tr>\n                ")}this.innerHTML="\n            <header><h2>".concat(this._recipe.strMeal,'</h2><button>Back</button></header>\n            <div class="clear"></div>\n            <section>\n                <figure>\n                    <img src="').concat(this._recipe.strMealThumb,'">\n                    <figcaption>\n                        <h3>Instructions</h3><p>').concat(this._recipe.strInstructions,'</p>\n                    </figcaption>\n                </figure>\n                <div class="clear"></div>\n            </section>\n            <section>\n                <table>\n                    <thead>\n                        <tr>\n                            <th>Ingredient</th>\n                            <th>Measure</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        ').concat(t,"\n                    </tbody>\n                </table>\n            </section>\n            ")}},{key:"recipe",set:function(t){this._recipe=t[0],this.render()}}])&&o(c.prototype,a),s&&o(c,s),h}(c(HTMLElement));customElements.define("recipe-detail",s)},function(t,e,n){"use strict";n.r(e);n(0),n(2);function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,o;return e=t,o=[{key:"searchByName",value:function(t){return fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(t)).then((function(t){return t.json()})).then((function(e){return e.meals?Promise.resolve(e.meals):Promise.reject("".concat(t," is not found"))}))}},{key:"getById",value:function(t){return fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=".concat(t)).then((function(t){return t.json()})).then((function(e){return e.meals?Promise.resolve(e.meals):Promise.reject("".concat(t," is not found"))}))}},{key:"getCategories",value:function(){return fetch("https://www.themealdb.com/api/json/v1/1/categories.php").then((function(t){return t.json()})).then((function(t){return t.categories?Promise.resolve(t.categories):Promise.reject("Error")}))}},{key:"getByCategorie",value:function(t){return fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=".concat(t)).then((function(t){return t.json()})).then((function(e){return e.meals?Promise.resolve(e.meals):Promise.reject("".concat(t," is not found"))}))}}],(n=null)&&r(e.prototype,n),o&&r(e,o),t}();n(6),n(7);function i(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(r,o)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var c=t.apply(e,n);function a(t){i(c,r,o,a,u,"next",t)}function u(t){i(c,r,o,a,u,"throw",t)}a(void 0)}))}}(function(){var t=document.querySelector("#searchButton"),e=document.querySelector("#searchInput"),n=document.querySelector(".recipe-list"),r=document.querySelector(".recipe-details"),i=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=[".loading",".recipe-list",".recipe-details"],n=0;n<e.length;n++)n==t?document.querySelector(e[n]).removeAttribute("style"):document.querySelector(e[n]).setAttribute("style","display: none;")},a=function(){var t=c(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i(0),t.prev=1,t.next=4,o.getCategories();case 4:e=t.sent,u((n=e)[Math.floor(Math.random()*(n.length-1))].strCategory),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),alert(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=c(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i(0),t.prev=1,t.next=4,o.getByCategorie(e);case 4:n=t.sent,f(n),i(1),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),i(1),h(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=c(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i(0),t.prev=1,t.next=4,o.searchByName(e.value);case 4:n=t.sent,f(n),i(1),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),i(1),h(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}(),f=function(t){n.innerHTML="",t.forEach((function(e,r){var o=document.createElement("recipe-item");if(o.recipe=e,n.appendChild(o),t.length-1==r){var i=document.createElement("div");i.setAttribute("class","clear"),n.appendChild(i)}o.addEventListener("click",(function(){s(e.idMeal)}))}))},s=function(){var t=c(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i(0),t.prev=1,t.next=4,o.getById(e);case 4:n=t.sent,p(n),i(2),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),i(1),h(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),p=function(t){r.innerHTML="";var e=document.createElement("recipe-detail"),n=document.createElement("div");n.setAttribute("class","clear"),e.recipe=t,r.appendChild(e),r.appendChild(n),document.querySelector("recipe-detail button").addEventListener("click",(function(){i(1)}))},h=function(t){n.innerHTML="<h1>".concat(t," is not found</h1>")};t.addEventListener("click",l),a()})()}]);