(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{0:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return u}));var r=n(3),a=n(8);function i(t,e,n,r,a,i,o){try{var s=t[i](o),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,a)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function s(t){i(o,r,a,s,u,"next",t)}function u(t){i(o,r,a,s,u,"throw",t)}s(void 0)}))}}var s={init:function(t){var e=this;return o(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.buttons,a=t.displayIcon,e.availableTheme={orange:"#fd9644",green:"#26de81",red:"#fc5c65",blue:"#45aaf2",night:"#1f1b24"},e.metaColor=[document.querySelector('meta[name="theme-color"]'),document.querySelector('meta[name="msapplication-navbutton-color"]'),document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]')],e.favicon=document.querySelector('link[rel="shortcut icon"]'),e.buttons=r,e.displayIcon=a,n.next=8,e.firstTimeSave();case 8:return n.next=10,e.loadFromIdb();case 10:e.buttons.forEach((function(t){t.addEventListener("click",(function(){return e.changeFromButton(t)}))}));case 11:case"end":return n.stop()}}),n)})))()},isThemeSaved:function(){return o(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.getPreference("theme");case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))()},firstTimeSave:function(){var t=this;return o(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.isThemeSaved();case 2:if(e.sent){e.next=5;break}return e.next=5,t.saveTheme("orange");case 5:case"end":return e.stop()}}),e)})))()},loadFromIdb:function(){var t=this;return o(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.isThemeSaved();case 2:if(!e.sent){e.next=7;break}return e.next=5,r.a.getPreference("theme");case 5:n=e.sent,t.changeTheme(n.content);case 7:case"end":return e.stop()}}),e)})))()},saveTheme:function(t){return o(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={type:"theme",content:t},e.next=3,r.a.putPreference(n,"theme");case 3:case"end":return e.stop()}}),e)})))()},changeFromButton:function(t){var e=this;return o(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.getAttribute("data-color"),e.changeTheme(r),n.next=4,e.saveTheme(r);case 4:case"end":return n.stop()}}),n)})))()},changeTheme:function(t){if(this.availableTheme[t]){var e=document.body.getAttribute("data-theme");document.body.setAttribute("data-theme",t),this.setTheme(e)}else document.body.setAttribute("data-theme","orange"),this.saveTheme("orange"),this.setTheme("orange")},setTheme:function(t){var e=this,n=document.body.getAttribute("data-theme"),r=document.querySelector(".theme-setting > .float-setting .active"),a=document.querySelector('.theme-setting > .float-setting [data-color="'.concat(n,'"]'));this.displayIcon.classList.remove(t),this.displayIcon.classList.add(n),r.classList.remove("active"),a.classList.add("active"),this.favicon&&("night"===n?this.favicon.setAttribute("href","images/icons/orange.ico"):this.favicon.setAttribute("href","images/icons/".concat(n,".ico"))),this.metaColor.forEach((function(t){t&&t.setAttribute("content",e.availableTheme[n])}))}},u={init:function(t){var e=this;return o(regeneratorRuntime.mark((function n(){var r,a,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.buttons,a=t.displayButton,i=t.activeFloatButton,e.availableLanguage=["en","id"],e.buttons=r,e.displayButton=a,e.activeFloatButton=i,n.next=7,e.firstTimeSave();case 7:return n.next=9,e.loadFromIdb();case 9:e.buttons.forEach((function(t){t.addEventListener("click",o(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.changeFromButton(t);case 2:window.location.reload();case 3:case"end":return n.stop()}}),n)}))))}));case 10:case"end":return n.stop()}}),n)})))()},isLanguageSaved:function(){return o(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.getPreference("language");case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))()},firstTimeSave:function(){var t=this;return o(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.isLanguageSaved();case 2:if(e.sent){e.next=4;break}t.saveLanguage("en");case 4:case"end":return e.stop()}}),e)})))()},loadFromIdb:function(){var t=this;return o(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.isLanguageSaved();case 2:if(!e.sent){e.next=7;break}return e.next=5,r.a.getPreference("language");case 5:n=e.sent,t.changeLanguage(n.content);case 7:case"end":return e.stop()}}),e)})))()},saveLanguage:function(t){return o(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={type:"language",content:t},e.next=3,r.a.putPreference(n,"language");case 3:case"end":return e.stop()}}),e)})))()},changeFromButton:function(t){var e=this;return o(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.getAttribute("data-language"),document.documentElement.setAttribute("lang",r),n.next=5,e.saveLanguage(r);case 5:case"end":return n.stop()}}),n)})))()},changeLanguage:function(t){this.availableLanguage.includes(t)?(document.documentElement.setAttribute("lang",t),this.setLanguage()):(document.documentElement.setAttribute("lang","en"),this.saveLanguage("en"))},setLanguage:function(){var t=document.documentElement.lang,e="en"===t?"USA":"Indonesia",n=document.querySelector('.language-setting > .float-setting [data-language="'.concat(t,'"]'));this.displayButton.innerHTML='\n      <img data-src="images/flags/'.concat(t,'.svg" alt="').concat(e,'" class="lazyload">').concat(t.toUpperCase(),'<i class="fas fa-angle-down fa-fw"></i>\n    '),this.activeFloatButton.classList.remove("active"),n.classList.add("active"),document.title=this.getSpecificContent("title")},getSpecificLanguage:function(t){var e=document.documentElement.lang,n=a.specific.filter((function(e){return e.item===t}));return n.length>0?n[0][e]:null},getSpecificContent:function(t){return this.getSpecificLanguage(t).content},setGeneralLanguageByRange:function(t,e){for(var n=a.general,r=t-1,i=e||t;r<i;r+=1)this.changeLanguageByTarget(n[r])},setGeneralLanguage:function(){var t=this;a.general.forEach((function(e){t.changeLanguageByTarget(e)}))},changeLanguageByTarget:function(t){var e=document.documentElement.lang,n=document.querySelectorAll('[data-lang="'.concat(t.item,'"]'));n&&n.forEach((function(n){var r=n;t[e].content&&(r.innerHTML=t[e].content),t[e].title&&r.setAttribute("title",t[e].title),t[e].label&&r.setAttribute("aria-label",t[e].label)}))}}},15:function(t,e,n){"use strict";e.a=function(t){for(var e="",n=Math.trunc(t),r=t%1,a=0;a<n;a+=1)e+='<i class="fas fa-star"></i>';if(r>0){e+='<i class="fas fa-star-half-alt"></i>';for(var i=0;i<5-n-1;i+=1)e+='<i class="far fa-star"></i>'}else for(var o=0;o<5-n;o+=1)e+='<i class="far fa-star"></i>';return e}},34:function(t,e,n){"use strict";var r=n(35),a=n.n(r);function i(t,e,n,r,a,i,o){try{var s=t[i](o),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,a)}var o=function(){var t,e=(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!("serviceWorker"in navigator)){t.next=3;break}return t.next=3,a.a.register();case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function s(t){i(o,r,a,s,u,"next",t)}function u(t){i(o,r,a,s,u,"throw",t)}s(void 0)}))});return function(){return e.apply(this,arguments)}}();e.a=o},36:function(t,e,n){"use strict";e.a=function t(e){var n=function e(){document.body.classList.remove("accessibility"),window.removeEventListener("mousedown",e),window.removeEventListener("wheel",e),window.addEventListener("keydown",t)};!function t(){9===e.keyCode&&(document.body.classList.add("accessibility"),window.removeEventListener("keydown",t),window.addEventListener("mousedown",n),window.addEventListener("wheel",n))}()}},37:function(t,e,n){"use strict";var r=n(12),a=n(38),i=n(39),o=n(40),s=n(41),u=n(42),c=n(43),f=n(44),d=n(45),l=n(46),h=n(47),m=n(48),v=n(49),p=n(50),g=n(51),w=n(52),y=n(53),R=n(54),b=n(55),C=n(56),S=n(57),k=n(58),L=n(59),x=n(60),T=n(61),E=n(62),B=n(63),F=n(64),A=n(65);e.a=function(){r.b.add(a.faStar,i.faHeart,o.faUtensils,s.faAngleDown,u.faChevronDown,c.faTags,f.faHeart,d.faStore,l.faSearch,h.faStar,m.faStarHalfAlt,v.faMapMarkerAlt,p.faComments,g.faCommentDots,w.faHamburger,y.faGlassCheers,R.faTimesCircle,b.faCheck,C.faTrash,S.faSadCry,k.faBoxOpen,L.faExclamation,x.faExclamationCircle,T.faExclamationTriangle,E.faGithubSquare,B.faFacebookSquare,F.faInstagram,A.faPinterestSquare),r.a.watch()}},66:function(t,e,n){"use strict";var r={activeUrl:function(){return window.location.hash.slice(1).toLowerCase()},parseActiveUrlWithoutCombiner:function(){var t=this.activeUrl();return this.urlSplitter(t)},parseActiveUrlWithCombiner:function(){return this.urlCombiner(this.parseActiveUrlWithoutCombiner())},urlSplitter:function(t){var e=t.split("/");return{resource:e[1]||null,id:e[2]||null,verb:e[3]||null}},urlCombiner:function(t){return(t.resource?"/".concat(t.resource):"/")+(t.id?"/:id":"")+(t.verb?"/".concat(t.verb):"")}},a=n(2),i=n(6),o=n(0),s={template:function(){return"\n      <full-jumbotron></full-jumbotron>\n      <main-content></main-content>\n    "},result:function(t){t.innerHTML=this.template(),this.mainContent=document.querySelector("main-content"),a.a.dynamicHeaderBackground(),a.a.arrowStyleSkipButtonInit(),a.a.skipToContentEvent(this.mainContent),document.body.className="",document.body.classList.add("home"),this.renderSkeleton()},renderSkeleton:function(){this.appendBestRating(),this.appendRestaurantsContainer(),this.appendRestaurantList()},appendBestRating:function(){var t=document.createElement("best-rating");this.mainContent.appendChild(t);var e=document.createElement("best-list");e.skeleton=3,t.appendChild(e)},appendRestaurantsContainer:function(){var t=document.createElement("restaurants-container");this.restaurantsContainer=t,t.heading={title:o.a.getSpecificContent("recommended-restaurants")},this.mainContent.appendChild(t),t.innerHTML+=i.a.skeletonTemplate()},appendRestaurantList:function(){var t=document.createElement("restaurant-list");t.skeleton=12,this.restaurantsContainer.appendChild(t)}},u=n(5),c=n(4),f={init:function(t){var e=t.restaurants,n=t.container,r=t.bestList;this.restaurants=e,this.container=n,this.bestList=r,this.renderBestItem()},renderBestItem:function(){var t=this.restaurants,e=t.map((function(t){return t.rating})),n=Math.max.apply(null,e);this.bestRestaurants=t.filter((function(t){return t.rating===n})),this.bestList?this.bestList.restaurantsData=this.bestRestaurants:this.renderBestList()},renderBestList:function(){var t=document.createElement("best-list");t.restaurantsData=this.bestRestaurants,this.container.appendChild(t)}};function d(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function h(t,e,n,r,a,i,o){try{var s=t[i](o),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,a)}var m={},v={configFiltered:function(t){var e=t.type,n=t.keyword,r=t.filteredRestaurants;r.length>0?this.renderSuccessNotice(e,n):this.renderFailedNotice(n),this.renderFilteredRestaurants(r)},renderSuccessNotice:function(t,e){m.noticeContainer.innerHTML='\n      <span data-lang="23">Result search by</span> <span data-lang="'.concat(t,'">').concat(t,'</span>: <span class="keyword">"').concat(e,'"</span><button class="reset-search" title="Reset Search Settings" data-lang="24">Reset</button>\n    '),document.querySelector('[data-lang="'.concat(t,'"]')).innerHTML=o.a.getSpecificContent(t),o.a.setGeneralLanguageByRange(23,24),this.afterRenderNotice()},renderFailedNotice:function(t){m.noticeContainer.innerHTML='\n      <span class="keyword">"'.concat(t,'"</span> <span data-lang="25">is <strong>not found</strong></span><button class="reset-search" title="Reset Search Settings" data-lang="24">Reset</button>\n    '),o.a.setGeneralLanguageByRange(24,25),this.afterRenderNotice()},afterRenderNotice:function(){var t=this;document.querySelector(".reset-search").addEventListener("click",(function(){return t.resetSearch()}))},resetSearch:function(){var t=m.inputForm;m.noticeContainer.innerHTML="",t.value="",this.renderAllRestaurants()},renderAllRestaurants:function(){var t=m.restaurants;return this.renderRestaurants(t)},renderFilteredRestaurants:function(t){var e=t;return this.renderRestaurants(e)},renderRestaurants:function(t){m.restaurantList.showHalf=t,t.length>12&&this.afterRenderRestaurants(t)},afterRenderRestaurants:function(t){var e=m.restaurantList;o.a.setGeneralLanguageByRange(22),c.a.showAllEvent(e,t)}},p={init:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.restaurants=m.restaurants,e.searchByName();case 2:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(t){h(i,r,a,o,s,"next",t)}function s(t){h(i,r,a,o,s,"throw",t)}o(void 0)}))})()},searchByName:function(){var t=this,e=m.noticeContainer,n=m.inputForm;n.addEventListener("keyup",(function(){var r=n.value,a=t.filteringRestaurants(r);""===r?(v.renderAllRestaurants(),e.innerHTML=""):v.configFiltered({type:"name",keyword:r,filteredRestaurants:a})}))},filteringRestaurants:function(t){var e=t.toLowerCase();return this.restaurants.filter((function(t){return t.name.toLowerCase().indexOf(e)>=0}))}},g={init:function(t){var e=t.displayButton,n=t.floatContainer;this.displayButton=e,this.floatContainer=n,this.restaurants=m.restaurants,this.dropDownConfig()},dropDownConfig:function(){this.displayButtonConfig(),this.renderCity()},displayButtonConfig:function(){var t=this;this.displayButton.addEventListener("click",(function(){return t.dropDownToggle()}))},dropDownToggle:function(){document.querySelector(".search-city svg:last-of-type").classList.toggle("fa-rotate-180"),this.floatContainer.classList.toggle("show")},renderCity:function(){var t=this,e=this.restaurants.map((function(t){return t.city}));d(new Set(e)).sort().forEach((function(e){t.floatContainer.innerHTML+='\n        <li>\n          <button title="'.concat(e,'" data-city="').concat(e,'">').concat(e,"</button>\n        </li>\n      ")})),this.searchByCity()},searchByCity:function(){var t=this;document.querySelectorAll(".city-list button").forEach((function(e){e.addEventListener("click",(function(){var n=e.getAttribute("data-city"),r=t.filteringRestaurants(n);v.configFiltered({type:"city",keyword:n,filteredRestaurants:r})}))}))},filteringRestaurants:function(t){return this.restaurants.filter((function(e){return e.city===t}))}};function w(t,e,n,r,a,i,o){try{var s=t[i](o),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,a)}var y={render:function(t){s.result(t)},afterRender:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.allRestaurants();case 2:n=t.sent,e.mainContent=document.querySelector("main-content"),n.status?(e.restaurants=n.output.restaurants,e.afterRenderSuccess()):e.afterRenderFailed(n.output);case 5:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(t){w(i,r,a,o,s,"next",t)}function s(t){w(i,r,a,o,s,"throw",t)}o(void 0)}))})()},afterRenderSuccess:function(){this.removeRestaurantSkeleton(),this.appendRestaurantSearch(),this.showRestaurantList(),this.initFeatures()},removeRestaurantSkeleton:function(){document.querySelector("restaurants-container > .skeleton").remove(),document.querySelector("restaurant-list").remove()},appendRestaurantSearch:function(){this.restaurantsContainer=document.querySelector("restaurants-container"),this.restaurantsContainer.innerHTML+=i.a.searchTemplate()},showRestaurantList:function(){var t=document.createElement("restaurant-list");this.restaurantList=t,t.showHalf=this.restaurants,this.restaurantsContainer.appendChild(t)},initFeatures:function(){c.a.showAllEvent(this.restaurantList,this.restaurants),f.init({restaurants:this.restaurants,container:document.querySelector("best-rating"),bestList:document.querySelector("best-list")}),Object.assign(m,{restaurants:this.restaurants,restaurantList:this.restaurantList,noticeContainer:document.querySelector("restaurants-container .notice"),inputForm:document.querySelector(".search-restaurant input")}),g.init({displayButton:document.querySelector(".search-city"),floatContainer:document.querySelector(".city-list")}),p.init()},afterRenderFailed:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.a.getSpecificContent("something-wrong"),e=document.createElement("error-page");e.errorData={iconClass:"fas fa-sad-cry",title:o.a.getSpecificContent("cannot-load-restaurants"),message:t},this.mainContent.innerHTML="",this.mainContent.appendChild(e)}},R={template:function(){return"\n      <main-content></main-content>\n    "},result:function(t){t.innerHTML=this.template(),this.mainContent=document.querySelector("main-content"),a.a.staticHeaderBackground(),a.a.regularStyleSkipButtonInit(),a.a.skipToContentEvent(this.mainContent),document.body.className="",document.body.classList.add("detail"),this.renderSkeleton()},renderSkeleton:function(){var t=document.createElement("detail-container");t.skeleton=6,this.mainContent.appendChild(t)}},b=n(3),C=n(1);function S(t,e,n,r,a,i,o){try{var s=t[i](o),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,a)}function k(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(t){S(i,r,a,o,s,"next",t)}function s(t){S(i,r,a,o,s,"throw",t)}o(void 0)}))}}var L={show:function(t){var e=arguments,n=this;return k(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=e.length>1&&void 0!==e[1]?e[1]:{},n.notificationTitle=t,n.additionalOptions=a,!n.checkAvailability()){r.next=12;break}if(!n.permissionNotDenied()){r.next=12;break}if(!n.permissionGranted()){r.next=10;break}return r.next=8,n.showNotification();case 8:r.next=12;break;case 10:return r.next=12,n.requestPermission();case 12:case"end":return r.stop()}}),r)})))()},checkAvailability:function(){return"Notification"in window},permissionNotDenied:function(){return"denied"!==Notification.permission},permissionGranted:function(){return"granted"===Notification.permission},requestPermission:function(){return k(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Notification.requestPermission();case 2:case"end":return t.stop()}}),t)})))()},showNotification:function(){var t=this;return k(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.notificationTitle,r=t.additionalOptions,a={badge:"images/icons/icon.png",icon:"images/icons/icon.png"},Object.assign(a,r),e.next=5,navigator.serviceWorker.ready;case 5:e.sent.showNotification(n,a);case 7:case"end":return e.stop()}}),e)})))()}};function x(t,e,n,r,a,i,o){try{var s=t[i](o),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,a)}function T(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(t){x(i,r,a,o,s,"next",t)}function s(t){x(i,r,a,o,s,"throw",t)}o(void 0)}))}}var E={init:function(t){var e=this;return T(regeneratorRuntime.mark((function n(){var r,a,i,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.restaurant,a=t.favoritesRestaurant,i=t.buttonContainer,o=t.toastContainer,e.restaurant=r,e.favoritesRestaurant=a,e.buttonContainer=i,e.toastContainer=o,n.next=7,e.renderButton();case 7:case"end":return n.stop()}}),n)})))()},renderButton:function(){var t=this;return T(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.isRestaurantExist();case 2:if(!e.sent){e.next=6;break}t.renderUnfavoriteButton(),e.next=7;break;case 6:t.renderFavoriteButton();case 7:case"end":return e.stop()}}),e)})))()},isRestaurantExist:function(){var t=this;return T(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.favoritesRestaurant.getRestaurant(t.restaurant.id);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))()},renderFavoriteButton:function(){var t=this;this.buttonContainer.innerHTML='\n      <button title="Add to Favorites" aria-label="Add to Favorites" data-lang="26" data-favorites="favorite"><i class="far fa-heart fa-fw"></i></button>\n    ',o.a.setGeneralLanguageByRange(26),document.querySelector('[data-favorites="favorite"]').addEventListener("click",T(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.favoritesRestaurant.putRestaurant(t.restaurant,t.restaurant.id);case 2:t.showToastFavorited(),t.showNotificationFavorited(),t.renderUnfavoriteButton();case 5:case"end":return e.stop()}}),e)}))))},renderUnfavoriteButton:function(){var t=this;this.buttonContainer.innerHTML='\n      <button title="Delete from Favorites" aria-label="Delete from Favorites" data-lang="27" data-favorites="unfavorite"><i class="fas fa-heart fa-fw"></i></button>\n    ',o.a.setGeneralLanguageByRange(27),document.querySelector('[data-favorites="unfavorite"]').addEventListener("click",T(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.favoritesRestaurant.deleteRestaurant(t.restaurant.id);case 2:t.showToastUnfavorited(),t.showNotificationUnfavorited(),t.renderFavoriteButton();case 5:case"end":return e.stop()}}),e)}))))},showToastFavorited:function(){this.toastContainer.show={type:"default",iconClass:"fas fa-check",content:o.a.getSpecificContent("restaurant-added")}},showToastUnfavorited:function(){this.toastContainer.show={type:"default",iconClass:"fas fa-trash",content:o.a.getSpecificContent("restaurant-deleted")}},showNotificationFavorited:function(){var t="".concat(this.restaurant.name+o.a.getSpecificContent("restaurant-has-added"));this.showNotification(t)},showNotificationUnfavorited:function(){var t="".concat(this.restaurant.name+o.a.getSpecificContent("restaurant-has-deleted"));this.showNotification(t)},showNotification:function(t){var e=this.restaurant,n=o.a.getSpecificContent("favorites-restaurant"),r={body:t,image:"".concat(C.a.SMALL_IMAGE+e.pictureId),tag:"favorites",silent:!0};L.show(n,r)}},B=n(7);function F(t,e,n,r,a,i,o){try{var s=t[i](o),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,a)}function A(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(t){F(i,r,a,o,s,"next",t)}function s(t){F(i,r,a,o,s,"throw",t)}o(void 0)}))}}var q={init:function(t){var e=this,n=t.restaurantId,r=t.nameInput,a=t.reviewInput,i=t.button,o=t.reviewContainer,s=t.toastContainer;this.restaurantId=n,this.nameInput=r,this.reviewInput=a,this.button=i,this.reviewContainer=o,this.toastContainer=s,i.addEventListener("click",(function(){return e.addReviewFromButton()}))},addReview:function(t){return A(regeneratorRuntime.mark((function e(){var n,r,a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,r=t.name,a=t.review,e.next=3,u.a.addReview({id:n,name:r,review:a});case 3:return i=e.sent,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})))()},addReviewFromButton:function(){var t=this;return A(regeneratorRuntime.mark((function e(){var n,r,a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.restaurantId,r=t.nameInput.value,a=t.reviewInput.value,!t.isFormNotFilled()){e.next=7;break}t.showToastError(o.a.getSpecificContent("form-must-filled")),e.next=11;break;case 7:return e.next=9,t.addReview({id:n,name:r,review:a});case 9:(i=e.sent).status?t.addReviewSuccess(i.output.customerReviews):t.showToastFailed(i.output);case 11:case"end":return e.stop()}}),e)})))()},isFormNotFilled:function(){return""===this.nameInput.value||""===this.reviewInput.value},addReviewSuccess:function(t){this.refreshReviews(t),this.resetForm(),this.showToastSuccess()},refreshReviews:function(t){this.reviewContainer.showHalf=t,this.afterRefreshReviews(t)},afterRefreshReviews:function(t){var e=document.querySelector("detail-reviews");B.a.showAllEvent(e,t)},resetForm:function(){this.nameInput.value="",this.reviewInput.value=""},showToastSuccess:function(){this.toastContainer.show={type:"default",iconClass:"fas fa-check",content:o.a.getSpecificContent("add-review-success")}},showToastFailed:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.a.getSpecificContent("add-review-failed");this.toastContainer.show={type:"warning",iconClass:"fas fa-times-circle",content:t}},showToastError:function(t){this.toastContainer.show={type:"warning",iconClass:"fas fa-exclamation-circle",content:t}}};function I(t,e,n,r,a,i,o){try{var s=t[i](o),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,a)}var H={template:function(){return"\n      <main-content></main-content>\n    "},result:function(t){t.innerHTML=this.template(),this.mainContent=document.querySelector("main-content"),a.a.staticHeaderBackground(),a.a.regularStyleSkipButtonInit(),a.a.skipToContentEvent(this.mainContent),document.body.className="",document.body.classList.add("favorites"),this.renderSkeleton()},renderSkeleton:function(){this.appendRestaurantsContainer(),this.appendRestaurantList()},appendRestaurantsContainer:function(){var t=document.createElement("restaurants-container");this.restaurantsContainer=t,t.heading={title:o.a.getSpecificContent("favorites-restaurant")},this.mainContent.appendChild(t)},appendRestaurantList:function(){var t=document.createElement("restaurant-list");t.skeleton=4,this.restaurantsContainer.appendChild(t)}};function P(t,e,n,r,a,i,o){try{var s=t[i](o),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,a)}var N={result:function(t){var e=t,n=document.createElement("error-page");n.errorData={iconClass:"fas fa-exclamation-triangle",title:o.a.getSpecificContent("page-not-found"),message:'<a href="/#/home" class="button" title="Back to Home" data-lang="38">Back to Home</a>'},e.innerHTML="",e.appendChild(n)}},M={"/":y,"/home":y,"/detail/:id":{render:function(t){R.result(t)},afterRender:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.parseActiveUrlWithoutCombiner(),t.next=3,u.a.detailRestaurant(n.id);case 3:a=t.sent,e.mainContent=document.querySelector("main-content"),a.status?(e.restaurant=a.output.restaurant,e.afterRenderSuccess()):e.afterRenderFailed(a.output);case 6:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(t){I(i,r,a,o,s,"next",t)}function s(t){I(i,r,a,o,s,"throw",t)}o(void 0)}))})()},afterRenderSuccess:function(){this.showDetailContainer(),this.initFeatures()},showDetailContainer:function(){document.querySelector("detail-container").restaurantData=this.restaurant},initFeatures:function(){var t=document.querySelector("detail-reviews");B.a.showAllEvent(t,this.restaurant.consumerReviews),E.init({restaurant:{id:this.restaurant.id,name:this.restaurant.name,city:this.restaurant.city,rating:this.restaurant.rating,description:this.restaurant.description,pictureId:this.restaurant.pictureId},favoritesRestaurant:b.b,buttonContainer:document.querySelector(".add-to-favorites"),toastContainer:document.querySelector("toast-container")}),q.init({restaurantId:this.restaurant.id,nameInput:document.querySelector(".add-review input"),reviewInput:document.querySelector(".add-review textarea"),button:document.querySelector(".add-review button"),reviewContainer:t,toastContainer:document.querySelector("toast-container")})},afterRenderFailed:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.a.getSpecificContent("something-wrong"),e=document.createElement("error-page");e.errorData={iconClass:"fas fa-sad-cry",title:o.a.getSpecificContent("cannot-load-detail"),message:t},this.mainContent.innerHTML="",this.mainContent.appendChild(e)}},"/favorites":{render:function(t){H.result(t)},afterRender:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.b.getAllRestaurants();case 2:e.restaurants=t.sent,e.mainContent=document.querySelector("main-content"),e.isRestaurantsExist()?e.afterRenderSuccess():e.afterRenderFailed();case 5:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(t){P(i,r,a,o,s,"next",t)}function s(t){P(i,r,a,o,s,"throw",t)}o(void 0)}))})()},isRestaurantsExist:function(){return this.restaurants&&this.restaurants.length>0},afterRenderSuccess:function(){this.showRestaurantList(),this.initFeatures()},showRestaurantList:function(){this.restaurantList=document.querySelector("restaurant-list"),this.restaurantList.showHalf=this.restaurants},initFeatures:function(){c.a.showAllEvent(this.restaurantList,this.restaurants)},afterRenderFailed:function(){var t=document.createElement("error-page");t.errorData={iconClass:"fas fa-box-open",title:o.a.getSpecificContent("no-favorites"),message:o.a.getSpecificContent("no-favorites-message")},this.mainContent.innerHTML="",this.mainContent.appendChild(t)}},"/error":{render:function(t){N.result(t)},afterRender:function(){var t=document.querySelector("error-page");a.a.staticHeaderBackground(),a.a.regularStyleSkipButtonInit(),a.a.skipToContentEvent(t),document.body.className="",document.body.classList.add("error")}}},D=n(16),U=n(27),G=n(30);function O(t,e,n,r,a,i,o){try{var s=t[i](o),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,a)}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var W=function(){function t(e){var n=e.header,r=e.main,a=e.footer,i=e.theme,o=e.language;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.header=n,this.footer=a,this.theme=i,this.language=o,this.mainContainer=r.container,this.appShellInit(),this.preferencesInit()}var e,n,i,s,u;return e=t,(n=[{key:"appShellInit",value:function(){a.a.init(this.header),D.a.init(),U.a.init(this.footer),G.a.init(this.footer)}},{key:"preferencesInit",value:function(){o.b.init(this.theme),o.a.init(this.language)}},{key:"renderPage",value:(s=regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.a.removeOffCanvasMenu(),e=r.parseActiveUrlWithCombiner(),(n=M[e]||M["/error"]).render(this.mainContainer),t.next=6,n.afterRender();case 6:o.a.setGeneralLanguage();case 7:case"end":return t.stop()}}),t,this)})),u=function(){var t=this,e=arguments;return new Promise((function(n,r){var a=s.apply(t,e);function i(t){O(a,n,r,i,o,"next",t)}function o(t){O(a,n,r,i,o,"throw",t)}i(void 0)}))},function(){return u.apply(this,arguments)})}])&&j(e.prototype,n),i&&j(e,i),t}();e.a=W}}]);