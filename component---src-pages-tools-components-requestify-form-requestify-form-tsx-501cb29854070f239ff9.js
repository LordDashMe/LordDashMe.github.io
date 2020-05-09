(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[18],{"L+9V":function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return h}));r("VRzm"),r("Btvt"),r("91GP");var n=r("o0o1"),o=r.n(n),a=(r("ls82"),r("q1tI")),i=r.n(a),s=r("Ra/y"),c=r("eqAQ"),l=r.n(c);function u(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(l){return void r(l)}s.done?e(c):Promise.resolve(c).then(n,o)}var h=function(t){var e,r;function n(e){var r;return(r=t.call(this,e)||this).state={requestify:{url:"",method:"GET",headers:'{"Content-Type": "application/json"}',body:"{}"},requestifyResponse:"",loader:!1},r}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var a=n.prototype;return a.onSubmitFormHandler=function(t){var e=this;if(this.validateRequiredFields()){this.triggerLoader(!0);var r={redirect:"follow",referrerPolicy:"unsafe-url",method:this.state.requestify.method};"POST"===this.state.requestify.method&&(r.headers=JSON.parse(this.state.requestify.headers),r.body=this.state.requestify.body),fetch(this.state.requestify.url,r).then(function(){var t,r=(t=o.a.mark((function t(r){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.triggerLoader(!1),t.next=3,r.json();case 3:n=t.sent,a={url:r.url,status:r.status,statusText:r.statusText,body:n},e.setRequestifyResponse(JSON.stringify(a));case 6:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){u(a,n,o,i,s,"next",t)}function s(t){u(a,n,o,i,s,"throw",t)}i(void 0)}))});return function(t){return r.apply(this,arguments)}}()).catch((function(t){e.triggerLoader(!1),alert("Oh ohh, something's wrong. Please check the browser console log."),console.error("Error:",t)}))}else alert("Please provide an input for the required fields.")},a.validateRequiredFields=function(){return void 0!==this.state.requestify.url&&""!==this.state.requestify.url&&void 0!==this.state.requestify.method&&""!==this.state.requestify.method&&void 0!==this.state.requestify.headers&&""!==this.state.requestify.headers&&void 0!==this.state.requestify.body&&""!==this.state.requestify.body},a.setRequestifyResponse=function(t){var e=Object.assign({},this.state);e.requestifyResponse=t,this.setState(e)},a.triggerLoader=function(t){var e=Object.assign({},this.state);e.loader=t,this.setState(e)},a.handleFieldChange=function(t,e){var r=this.state.requestify;"url"===t&&(r.url=e.target.value),"method"===t&&(r.method=e.target.value),"headers"===t&&(r.headers=e.target.value),"body"===t&&(r.body=e.target.value);var n=Object.assign({},this.state);n.requestify=r,this.setState(n)},a.getBodyField=function(){return"POST"===this.state.requestify.method?i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"BODY*"),i.a.createElement("textarea",{value:this.state.requestify.body,onChange:this.handleFieldChange.bind(this,"body"),className:l.a.textarea+" form-control",placeholder:"{...}"})):null},a.render=function(){return i.a.createElement("div",{id:"requestify-form-component",className:l.a.container},i.a.createElement(s.a,{visibility:this.state.loader}),i.a.createElement("p",{className:l.a.note},"A simple simulation tool for HTTP request content type json."),i.a.createElement("p",{className:l.a.note},'This tool only supports "Content-Type: application/json" request header and it will not going to support other content type in the future. If you want an extensive tool for HTTP request simulation I recommend you to check ',i.a.createElement("a",{href:"https://www.postman.com/",rel:"noopener noreferrer"},"Postman"),", that's really a great app!"),i.a.createElement("form",{className:l.a.form},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"URL*"),i.a.createElement("input",{value:this.state.requestify.url,onChange:this.handleFieldChange.bind(this,"url"),className:"form-control",type:"text",placeholder:"https://<domain>/v1/<end-point>"})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"METHOD*"),i.a.createElement("select",{onChange:this.handleFieldChange.bind(this,"method"),className:"form-control"},i.a.createElement("option",{value:"GET"},"GET"),i.a.createElement("option",{value:"POST"},"POST"))),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"HEADERS*"),i.a.createElement("textarea",{value:this.state.requestify.headers,onChange:this.handleFieldChange.bind(this,"headers"),className:l.a.textarea+" form-control",placeholder:"{...}"})),this.getBodyField(),i.a.createElement("p",{className:l.a["form-tips"]},i.a.createElement("b",null,"*")," is required field."),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"RESPONSE"),i.a.createElement("textarea",{value:this.state.requestifyResponse,className:l.a.textarea+" form-control",readOnly:!0})),i.a.createElement("div",{className:l.a["form-action"]},i.a.createElement("button",{className:"btn -black",type:"button",onClick:this.onSubmitFormHandler.bind(this)},i.a.createElement("b",null,"SUBMIT")))))},n}(a.Component)},"Ra/y":function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r("q1tI"),o=r.n(n),a=r("GLf7"),i=r.n(a);var s=function(t){var e,r;function n(){return t.apply(this,arguments)||this}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.prototype.render=function(){var t=i.a["signal-wrapper"];return this.props.visibility||(t+=" "+i.a.off),o.a.createElement("div",{id:"loader-component",className:i.a.container},o.a.createElement("div",{className:t},o.a.createElement("div",{className:i.a.signal})))},n}(n.Component)},ls82:function(t,e,r){r("rGqo"),r("yt8O"),r("a1Th"),r("h7Nl"),r("VRzm"),r("Btvt"),r("/SS/"),r("f3/d"),r("8+KV"),r("hHhE"),r("rE2o"),r("ioFf");var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function s(t,e,r,n){var o=e&&e.prototype instanceof u?e:u,a=Object.create(o.prototype),i=new x(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return q()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=E(i,r);if(s){if(s===l)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=c(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=s;var l={};function u(){}function h(){}function f(){}var d={};d[o]=function(){return this};var p=Object.getPrototypeOf,m=p&&p(p(L([])));m&&m!==e&&r.call(m,o)&&(d=m);var y=f.prototype=u.prototype=Object.create(d);function v(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function g(t){var e;this._invoke=function(n,o){function a(){return new Promise((function(e,a){!function e(n,o,a,i){var s=c(t[n],t,o);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"==typeof u&&r.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,a,i)}),(function(t){e("throw",t,a,i)})):Promise.resolve(u).then((function(t){l.value=t,a(l)}),(function(t){return e("throw",t,a,i)}))}i(s.arg)}(n,o,e,a)}))}return e=e?e.then(a,a):a()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=c(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:q}}function q(){return{value:void 0,done:!0}}return h.prototype=y.constructor=f,f.constructor=h,f[i]=h.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},v(g.prototype),g.prototype[a]=function(){return this},t.AsyncIterator=g,t.async=function(e,r,n,o){var a=new g(s(e,r,n,o));return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},v(y),y[i]="Generator",y[o]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),b(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;b(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},o0o1:function(t,e,r){t.exports=r("ls82")}}]);
//# sourceMappingURL=component---src-pages-tools-components-requestify-form-requestify-form-tsx-501cb29854070f239ff9.js.map