(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[16],{"/le+":function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));r("VRzm"),r("Btvt");var n=r("o0o1"),o=r.n(n),a=(r("91GP"),r("ls82"),r("q1tI")),i=r.n(a),s=r("V6cd"),c=r("Ra/y"),l=r("jdDG"),u=r.n(l);function h(e,t,r,n,o,a,i){try{var s=e[a](i),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(n,o)}var f=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).state={strongPassword:{length:10},strongPasswordResponse:"",loader:!1},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=n.prototype;return a.onSubmitFormHandler=function(e){var t=this;if(this.validateRequiredFields()){this.triggerLoader(!0);fetch(s.a.api.strongPassword+"?length="+this.state.strongPassword.length,{redirect:"follow",referrerPolicy:"unsafe-url",method:"GET"}).then(function(){var e,r=(e=o.a.mark((function e(r){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.triggerLoader(!1),e.next=3,r.json();case 3:if(n=e.sent,200!==r.status){e.next=9;break}return(a=Object.assign({},t.state)).strongPasswordResponse=n.strong_password,t.setState(a),e.abrupt("return");case 9:alert(n.message),console.error(n.message);case 11:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){h(a,n,o,i,s,"next",e)}function s(e){h(a,n,o,i,s,"throw",e)}i(void 0)}))});return function(e){return r.apply(this,arguments)}}())}else alert("Please provide an input for the required fields.")},a.validateRequiredFields=function(){return void 0!==this.state.strongPassword.length&&0!==this.state.strongPassword.length},a.triggerLoader=function(e){var t=Object.assign({},this.state);t.loader=e,this.setState(t)},a.handleFieldChange=function(e,t){var r=this.state.strongPassword;"length"===e&&(r.length=parseInt(t.target.value)||0);var n=Object.assign({},this.state);n.strongPassword=r,this.setState(n)},a.render=function(){return i.a.createElement("div",{id:"requestify-form-component",className:u.a.container},i.a.createElement(c.a,{visibility:this.state.loader}),i.a.createElement("p",{className:u.a.note},"A tool use for generating random sequence of characters based on the given length."),i.a.createElement("p",{className:u.a.note},"The maximum length to be generated is 100."),i.a.createElement("form",{className:u.a.form},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"LENGTH*"),i.a.createElement("input",{value:this.state.strongPassword.length,onChange:this.handleFieldChange.bind(this,"length"),className:"form-control",type:"number",placeholder:"10"})),i.a.createElement("p",{className:u.a["form-tips"]},i.a.createElement("b",null,"*")," is required field."),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"GENERATED"),i.a.createElement("textarea",{value:this.state.strongPasswordResponse,className:u.a.textarea+" form-control",readOnly:!0})),i.a.createElement("div",{className:u.a["form-action"]},i.a.createElement("button",{className:"btn -black",type:"button",onClick:this.onSubmitFormHandler.bind(this)},i.a.createElement("b",null,"SUBMIT")))))},n}(a.Component)},"Ra/y":function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r("q1tI"),o=r.n(n),a=r("GLf7"),i=r.n(a);var s=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=i.a["signal-wrapper"];return this.props.visibility||(e+=" "+i.a.off),o.a.createElement("div",{id:"loader-component",className:i.a.container},o.a.createElement("div",{className:e},o.a.createElement("div",{className:i.a.signal})))},n}(n.Component)},V6cd:function(e,t,r){"use strict";t.a={buildId:"v3",buildVersion:"3.4.3",api:{contact:"https://lorddashme-backend.herokuapp.com/contact/",strongPassword:"https://lorddashme-php-backend.herokuapp.com/api/v1/strong_password/",contentHiding:"",contentHashing:""}}},iAO4:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),a=r("TJpk"),i=r.n(a),s=r("MKeS"),c=r("V8YE"),l=r("q7f/"),u=r("hn+G"),h=r("aSUa"),f=r("/rku"),m=r("pxo3"),p=r("pPUN"),d=r("9CTw"),v=r("r7TR"),g=r("/le+"),y=Object(s.a)({resolved:{},chunkName:function(){return"components-NavigationBar-NavigationBar"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!r.m[t]},importAsync:function(){return Promise.all([r.e(0),r.e(31)]).then(r.bind(null,"3mPH"))},requireAsync:function(e){var t=this,r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((function(e){return t.resolved[r]=!0,e}))},requireSync:function e(t){var n=this.resolve(t);return r(n)},resolve:function e(){return"3mPH"}},{fallback:Object(c.b)("#navigation-bar-component")}),w=Object(s.a)({resolved:{},chunkName:function(){return"components-Headline-Headline"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!r.m[t]},importAsync:function(){return Promise.all([r.e(0),r.e(1),r.e(24)]).then(r.bind(null,"tNWe"))},requireAsync:function(e){var t=this,r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((function(e){return t.resolved[r]=!0,e}))},requireSync:function e(t){var n=this.resolve(t);return r(n)},resolve:function e(){return"tNWe"}},{fallback:Object(c.b)("#headline-component")}),E=Object(s.a)({resolved:{},chunkName:function(){return"components-PageWrapper-PageWrapper"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!r.m[t]},importAsync:function(){return Promise.all([r.e(0),r.e(32)]).then(r.bind(null,"Rh8P"))},requireAsync:function(e){var t=this,r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((function(e){return t.resolved[r]=!0,e}))},requireSync:function e(t){var n=this.resolve(t);return r(n)},resolve:function e(){return"Rh8P"}},{fallback:Object(c.b)("#page-wrapper-component")}),b=Object(s.a)({resolved:{},chunkName:function(){return"components-Footer-Footer"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!r.m[t]},importAsync:function(){return Promise.all([r.e(0),r.e(23)]).then(r.bind(null,"sGC4"))},requireAsync:function(e){var t=this,r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((function(e){return t.resolved[r]=!0,e}))},requireSync:function e(t){var n=this.resolve(t);return r(n)},resolve:function e(){return"sGC4"}},{fallback:Object(c.b)("#footer-component")}),x=Object(s.a)({resolved:{},chunkName:function(){return"components-Analytics-GoogleAnalytics-GoogleAnalytics"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!r.m[t]},importAsync:function(){return r.e(20).then(r.bind(null,"WiP2"))},requireAsync:function(e){var t=this,r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((function(e){return t.resolved[r]=!0,e}))},requireSync:function e(t){var n=this.resolve(t);return r(n)},resolve:function e(){return"WiP2"}},{fallback:null}),P=function(){var e="Strong Password",t="/tools/strong-password";Object(n.useEffect)((function(){t=document.location.href}),[]);var r={"@context":"https://schema.org","@type":"website",url:t,name:e,author:l.a.author,image:l.a.image.src,description:l.a.description};return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.Helmet,{defer:!1},o.a.createElement("html",{lang:"en"}),o.a.createElement("title",null,e),o.a.createElement("link",{rel:"shortcut icon",href:l.a.favicon}),o.a.createElement("link",{rel:"apple-touch-icon",href:l.a.favicon}),o.a.createElement("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),o.a.createElement("meta",{name:"robots",content:"index"}),o.a.createElement("meta",{name:"author",content:l.a.author}),o.a.createElement("meta",{name:"description",content:l.a.description}),o.a.createElement("link",{rel:"canonical",href:t}),o.a.createElement("meta",{name:"twitter:card",content:"summary"}),o.a.createElement("meta",{name:"twitter:site",content:l.a.twitter.site}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:l.a.description}),o.a.createElement("meta",{name:"twitter:creator",content:l.a.twitter.creator}),o.a.createElement("meta",{name:"twitter:image",content:l.a.image.src}),o.a.createElement("meta",{name:"twitter:image:alt",content:l.a.image.alt}),o.a.createElement("meta",{name:"og:url",content:t}),o.a.createElement("meta",{name:"og:type",content:"website"}),o.a.createElement("meta",{name:"og:title",content:e}),o.a.createElement("meta",{name:"og:image",content:l.a.image.src}),o.a.createElement("meta",{name:"og:description",content:l.a.description}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(r)),o.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap",type:"text/css"}),o.a.createElement("link",{rel:"preload",href:"/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-solid-900.woff2",as:"font",type:"font/woff2",crossOrigin:"anonymous"}),o.a.createElement("link",{rel:"preload",href:"/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-brands-400.woff2",as:"font",type:"font/woff2",crossOrigin:"anonymous"})),o.a.createElement(u.a,null),o.a.createElement(h.a,null),o.a.createElement(f.a,null),o.a.createElement(m.a,null),o.a.createElement(p.a,null),o.a.createElement(d.a,null),o.a.createElement(y,null),o.a.createElement(w,null),o.a.createElement(E,null,o.a.createElement(v.a,{id:"strong-password",title:"STRONG PASSWORD",showThematicBreak:!1,showBorderTop:!1},o.a.createElement(g.a,null))),o.a.createElement(b,{isFixedPosition:!1}),o.a.createElement(x,{trackingId:"UA-128894279-1"}))};t.default=P},ls82:function(e,t,r){r("rGqo"),r("yt8O"),r("a1Th"),r("h7Nl"),r("VRzm"),r("Btvt"),r("/SS/"),r("f3/d"),r("8+KV"),r("hHhE"),r("rE2o"),r("ioFf");var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function s(e,t,r,n){var o=t&&t.prototype instanceof u?t:u,a=Object.create(o.prototype),i=new x(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return L()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=w(i,r);if(s){if(s===l)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=c(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(e,r,i),a}function c(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=s;var l={};function u(){}function h(){}function f(){}var m={};m[o]=function(){return this};var p=Object.getPrototypeOf,d=p&&p(p(P([])));d&&d!==t&&r.call(d,o)&&(m=d);var v=f.prototype=u.prototype=Object.create(m);function g(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function y(e){var t;this._invoke=function(n,o){function a(){return new Promise((function(t,a){!function t(n,o,a,i){var s=c(e[n],e,o);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"==typeof u&&r.call(u,"__await")?Promise.resolve(u.__await).then((function(e){t("next",e,a,i)}),(function(e){t("throw",e,a,i)})):Promise.resolve(u).then((function(e){l.value=e,a(l)}),(function(e){return t("throw",e,a,i)}))}i(s.arg)}(n,o,t,a)}))}return t=t?t.then(a,a):a()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=c(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,l;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function b(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function P(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=v.constructor=f,f.constructor=h,f[i]=h.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,i in e||(e[i]="GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},g(y.prototype),y.prototype[a]=function(){return this},e.AsyncIterator=y,e.async=function(t,r,n,o){var a=new y(s(t,r,n,o));return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},g(v),v[i]="Generator",v[o]=function(){return this},v.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=P,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),b(r),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;b(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:P(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},e}(e.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},o0o1:function(e,t,r){e.exports=r("ls82")}}]);
//# sourceMappingURL=component---src-pages-tools-strong-password-index-tsx-4378a24494e0947356ec.js.map