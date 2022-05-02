(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1:function(t,e,n){"use strict";e.a={KEY:"12345",BASE_URL:"https://dicoding-restaurant-api.el.r.appspot.com/",SMALL_IMAGE:"https://dicoding-restaurant-api.el.r.appspot.com/images/small/",MEDIUM_IMAGE:"https://dicoding-restaurant-api.el.r.appspot.com/images/medium/",LARGE_IMAGE:"https://dicoding-restaurant-api.el.r.appspot.com/images/large/",DATABASE_NAME:"arima",DATABASE_VERSION:1,OBJECT_STORE:{RESTAURANTS:"restaurants",PREFERENCES:"preferences"},CACHE_NAME:{APP_SHELL:"app-shell-v1",FONTS:"fonts-v1",API:"api-v1"}}},3:function(t,e,n){"use strict";n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return l}));var r=n(67),o=n(1);function u(t,e,n,r,o,u,c){try{var a=t[u](c),i=a.value}catch(t){return void n(t)}a.done?e(i):Promise.resolve(i).then(r,o)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var c=t.apply(e,n);function a(t){u(c,r,o,a,i,"next",t)}function i(t){u(c,r,o,a,i,"throw",t)}a(void 0)}))}}var a=o.a.DATABASE_NAME,i=o.a.DATABASE_VERSION,s=o.a.OBJECT_STORE,f=Object(r.a)(a,i,{upgrade:function(t){t.createObjectStore(s.RESTAURANTS,{keypath:"id"}),t.createObjectStore(s.PREFERENCES,{keypath:"type"})}}),p={getAllRestaurants:function(){return c(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f;case 2:return t.abrupt("return",t.sent.getAll(s.RESTAURANTS));case 3:case"end":return t.stop()}}),t)})))()},getRestaurant:function(t){return c(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,f;case 3:e.t0=e.sent.get(s.RESTAURANTS,t),e.next=7;break;case 6:e.t0=void 0;case 7:return e.abrupt("return",e.t0);case 8:case"end":return e.stop()}}),e)})))()},putRestaurant:function(t,e){return c(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.id||!e){n.next=6;break}return n.next=3,f;case 3:n.t0=n.sent.put(s.RESTAURANTS,t,e),n.next=7;break;case 6:n.t0=!1;case 7:return n.abrupt("return",n.t0);case 8:case"end":return n.stop()}}),n)})))()},deleteRestaurant:function(t){return c(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f;case 2:return e.abrupt("return",e.sent.delete(s.RESTAURANTS,t));case 3:case"end":return e.stop()}}),e)})))()}},l={getPreference:function(t){return c(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,f;case 3:e.t0=e.sent.get(s.PREFERENCES,t),e.next=7;break;case 6:e.t0=void 0;case 7:return e.abrupt("return",e.t0);case 8:case"end":return e.stop()}}),e)})))()},putPreference:function(t,e){return c(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.type||!e){n.next=6;break}return n.next=3,f;case 3:n.t0=n.sent.put(s.PREFERENCES,t,e),n.next=7;break;case 6:n.t0=!1;case 7:return n.abrupt("return",n.t0);case 8:case"end":return n.stop()}}),n)})))()},deletePreference:function(t){return c(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f;case 2:return e.abrupt("return",e.sent.delete(s.PREFERENCES,t));case 3:case"end":return e.stop()}}),e)})))()}}},31:function(t,e,n){"use strict";var r=n(0);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function i(t){var e="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return s(t,arguments,l(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),p(r,t)})(t)}function s(t,e,n){return(s=f()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&p(o,n.prototype),o}).apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(d,t);var e,n,o,i,s,y=(e=d,n=f(),function(){var t,r=l(e);if(n){var o=l(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return a(this,t)});function d(){return u(this,d),y.apply(this,arguments)}return o=d,(i=[{key:"connectedCallback",value:function(){this.setAttribute("aria-label",r.a.getSpecificContent("error-page"))}},{key:"render",value:function(){var t=this.error;this.innerHTML='\n      <i class="'.concat(t.iconClass,' error-icon"></i>\n      <h2>').concat(t.title,"</h2>\n      <p>").concat(t.message,"</p>\n    ")}},{key:"errorData",set:function(t){this.error=t,this.render()}}])&&c(o.prototype,i),s&&c(o,s),d}(i(HTMLElement));e.a=y},32:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){var e="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return i(t,arguments,p(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,t)})(t)}function i(t,e,n){return(i=s()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&f(o,n.prototype),o}).apply(null,arguments)}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(y,t);var e,n,r,a,i,l=(e=y,n=s(),function(){var t,r=p(e);if(n){var o=p(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return c(this,t)});function y(){return o(this,y),l.apply(this,arguments)}return r=y,(a=[{key:"render",value:function(){var t=document.createElement("toast-item");t.configData=this.config,this.appendChild(t)}},{key:"show",set:function(t){this.config=t,this.render()}}])&&u(r.prototype,a),i&&u(r,i),y}(a(HTMLElement));e.a=l},33:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){var e="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return i(t,arguments,p(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,t)})(t)}function i(t,e,n){return(i=s()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&f(o,n.prototype),o}).apply(null,arguments)}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(y,t);var e,n,r,a,i,l=(e=y,n=s(),function(){var t,r=p(e);if(n){var o=p(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return c(this,t)});function y(){return o(this,y),l.apply(this,arguments)}return r=y,(a=[{key:"connectedCallback",value:function(){this.setAttribute("role","alert")}},{key:"render",value:function(){var t=this;this.innerHTML='<i class="'.concat(this.iconClass,'"></i>').concat(this.content),setTimeout((function(){return t.show()}),100),setTimeout((function(){return t.destroy()}),5100)}},{key:"show",value:function(){this.classList.add("show")}},{key:"hide",value:function(){this.classList.add("hide"),this.classList.remove("show")}},{key:"destroy",value:function(){var t=this;this.hide(),setTimeout((function(){return t.remove()}),300)}},{key:"configData",set:function(t){var e=t.type,n=t.iconClass,r=void 0===n?"fas fa-exclamation":n,o=t.content;this.iconClass=r,this.content=o,this.setAttribute("aria-label",o),this.classList.add(e),this.render()}}])&&u(r.prototype,a),i&&u(r,i),y}(a(HTMLElement));e.a=l},5:function(t,e,n){"use strict";var r=n(1),o={ALL:"".concat(r.a.BASE_URL,"list"),DETAIL:function(t){return"".concat(r.a.BASE_URL,"detail/").concat(t)},POST_REVIEW:"".concat(r.a.BASE_URL,"review")},u=n(0);function c(t,e,n,r,o,u,c){try{var a=t[u](c),i=a.value}catch(t){return void n(t)}a.done?e(i):Promise.resolve(i).then(r,o)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var u=t.apply(e,n);function a(t){c(u,r,o,a,i,"next",t)}function i(t){c(u,r,o,a,i,"throw",t)}a(void 0)}))}}var i={allRestaurants:function(){return a(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(o.ALL);case 3:return e=t.sent,t.next=6,e.json();case 6:if(!(n=t.sent).error){t.next=9;break}throw new Error(n.message);case 9:if(!(n.count<1||n.restaurants.length<1)){t.next=11;break}throw new Error(u.a.getSpecificContent("no-restaurant-list"));case 11:return t.abrupt("return",{status:!0,output:n});case 14:return t.prev=14,t.t0=t.catch(0),t.abrupt("return",{status:!1,output:t.t0.message});case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))()},detailRestaurant:function(t){return a(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t&&""!==t){e.next=3;break}throw new Error("need id");case 3:return e.next=5,fetch(o.DETAIL(t));case 5:return n=e.sent,e.next=8,n.json();case 8:if(!(r=e.sent).error){e.next=11;break}throw new Error(r.message);case 11:return e.abrupt("return",{status:!0,output:r});case 14:return e.prev=14,e.t0=e.catch(0),e.abrupt("return",{status:!1,output:e.t0.message});case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))()},addReview:function(t){return a(regeneratorRuntime.mark((function e(){var n,u,c,a,i,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.id,u=t.name,c=t.review,e.prev=1,n&&""!==n){e.next=4;break}throw new Error("need id");case 4:if(u&&""!==u&&c&&""!==c){e.next=6;break}throw new Error("need name and content review");case 6:return a={method:"POST",headers:{"Content-Type":"application/json","X-Auth-Token":r.a.KEY},body:JSON.stringify({id:n,name:u,review:c})},e.next=9,fetch(o.POST_REVIEW,a);case 9:return i=e.sent,e.next=12,i.json();case 12:if(!(s=e.sent).error){e.next=15;break}throw new Error(s.message);case 15:return e.abrupt("return",{status:!0,output:s});case 18:return e.prev=18,e.t0=e.catch(1),e.abrupt("return",{status:!1,output:e.t0.message});case 21:case"end":return e.stop()}}),e,null,[[1,18]])})))()}};e.a=i},74:function(t,e,n){"use strict";n.r(e);n(68),n(10),n(69),n(70);var r=n(66),o=n(34),u=n(36),c=n(37);function a(t,e,n,r,o,u,c){try{var a=t[u](c),i=a.value}catch(t){return void n(t)}a.done?e(i):Promise.resolve(i).then(r,o)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var u=t.apply(e,n);function c(t){a(u,r,o,c,i,"next",t)}function i(t){a(u,r,o,c,i,"throw",t)}c(void 0)}))}}document.addEventListener("DOMContentLoaded",(function(){var t={underBreakpoint:window.matchMedia("(max-width: 991px)"),upperBreakpoint:window.matchMedia("(min-width: 992px)"),skipToContentButton:document.querySelector("#skip-to-content"),header:document.querySelector("header"),nav:document.querySelector("nav"),hamburgerMenu:document.querySelector(".hamburger-menu"),menuListItem:document.querySelectorAll(".menu-item a"),dropDownType:["theme","language"]},e={container:document.querySelector("main")},n={container:document.querySelector("footer")},a={buttons:document.querySelectorAll(".float-setting [data-color]"),displayIcon:document.querySelector(".theme-setting > button .color-icon")},s={buttons:document.querySelectorAll(".float-setting [data-language]"),displayButton:document.querySelector(".language-setting > button"),activeFloatButton:document.querySelector(".language-setting > .float-setting .active")},f=new r.a({header:t,main:e,footer:n,theme:a,language:s});window.addEventListener("load",i(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return document.documentElement.scrollTop=0,t.next=3,f.renderPage();case 3:return t.next=5,Object(o.a)();case 5:case"end":return t.stop()}}),t)})))),window.addEventListener("hashchange",i(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return document.documentElement.scrollTop=0,t.next=3,f.renderPage();case 3:case"end":return t.stop()}}),t)})))),window.addEventListener("keydown",u.a),Object(c.a)()}))}}]);