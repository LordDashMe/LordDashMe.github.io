(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[16],{"2mql":function(e,t,r){"use strict";r("ioFf"),r("HAE/");var n=r("TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function u(e){return n.isMemo(e)?i:c[e.$$typeof]||o}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=i;var s=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(h){var o=d(r);o&&o!==h&&e(t,o,n)}var i=l(r);f&&(i=i.concat(f(r)));for(var c=u(t),T=u(r),m=0;m<i.length;++m){var y=i[m];if(!(a[y]||n&&n[y]||T&&T[y]||c&&c[y])){var E=p(r,y);try{s(t,y,E)}catch(v){}}}}return t}},"2rMq":function(e,t,r){var n;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(n=function(){return a}.call(t,r,t,e))||(e.exports=n)}()},"8+s/":function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}r("V+eJ"),r("bWfx"),r("f3/d"),r("/SS/"),r("hHhE");var o=r("q1tI"),a=n(o),i=n(r("2rMq")),c=n(r("Gytx"));function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l=[],f=void 0;function p(){f=e(l.map((function(e){return e.props}))),d.canUseDOM?t(f):r&&(f=r(f))}var d=function(e){function t(){return u(this,t),s(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.peek=function(){return f},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=f;return f=void 0,l=[],e},t.prototype.shouldComponentUpdate=function(e){return!c(e,this.props)},t.prototype.componentWillMount=function(){l.push(this),p()},t.prototype.componentDidUpdate=function(){p()},t.prototype.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),p()},t.prototype.render=function(){return a.createElement(n,this.props)},t}(o.Component);return d.displayName="SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")",d.canUseDOM=i.canUseDOM,d}}},"9CTw":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("q1tI");r("v1vO");var o=function(e){var t,r;function n(t){return e.call(this,t)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){return null},n}(n.Component)},"9K6k":function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),a=r("TJpk"),i=r.n(a),c=r("MKeS"),u=r("V8YE"),s=r("q7f/"),l=r("hn+G"),f=r("aSUa"),p=r("pxo3"),d=r("pPUN"),h=r("9CTw"),T=r("r7TR"),m=Object(c.a)({resolved:{},chunkName:function(){return"components-NavigationBar-NavigationBar"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!r.m[t]},importAsync:function(){return Promise.all([r.e(0),r.e(33)]).then(r.bind(null,"3mPH"))},requireAsync:function(e){var t=this,r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((function(e){return t.resolved[r]=!0,e}))},requireSync:function e(t){var n=this.resolve(t);return r(n)},resolve:function e(){return"3mPH"}},{fallback:Object(u.b)("#navigation-bar-component")}),y=Object(c.a)({resolved:{},chunkName:function(){return"components-Headline-Headline"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!r.m[t]},importAsync:function(){return Promise.all([r.e(0),r.e(32)]).then(r.bind(null,"tNWe"))},requireAsync:function(e){var t=this,r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((function(e){return t.resolved[r]=!0,e}))},requireSync:function e(t){var n=this.resolve(t);return r(n)},resolve:function e(){return"tNWe"}},{fallback:Object(u.b)("#headline-component")}),E=Object(c.a)({resolved:{},chunkName:function(){return"components-PageWrapper-PageWrapper"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!r.m[t]},importAsync:function(){return Promise.all([r.e(0),r.e(34)]).then(r.bind(null,"Rh8P"))},requireAsync:function(e){var t=this,r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((function(e){return t.resolved[r]=!0,e}))},requireSync:function e(t){var n=this.resolve(t);return r(n)},resolve:function e(){return"Rh8P"}},{fallback:Object(u.b)("#page-wrapper-component")}),v=Object(c.a)({resolved:{},chunkName:function(){return"components-PoweredBy-PoweredBy"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!r.m[t]},importAsync:function(){return Promise.all([r.e(0),r.e(35)]).then(r.bind(null,"Mdba"))},requireAsync:function(e){var t=this,r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((function(e){return t.resolved[r]=!0,e}))},requireSync:function e(t){var n=this.resolve(t);return r(n)},resolve:function e(){return"Mdba"}},{fallback:Object(u.b)("#powered-by-component")}),A=Object(c.a)({resolved:{},chunkName:function(){return"components-Project-Project"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!r.m[t]},importAsync:function(){return Promise.all([r.e(0),r.e(36)]).then(r.bind(null,"avav"))},requireAsync:function(e){var t=this,r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((function(e){return t.resolved[r]=!0,e}))},requireSync:function e(t){var n=this.resolve(t);return r(n)},resolve:function e(){return"avav"}},{fallback:Object(u.b)("#project-component")}),b=Object(c.a)({resolved:{},chunkName:function(){return"components-Footer-Footer"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!r.m[t]},importAsync:function(){return Promise.all([r.e(0),r.e(31)]).then(r.bind(null,"sGC4"))},requireAsync:function(e){var t=this,r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((function(e){return t.resolved[r]=!0,e}))},requireSync:function e(t){var n=this.resolve(t);return r(n)},resolve:function e(){return"sGC4"}},{fallback:Object(u.b)("#footer-component")}),S=Object(c.a)({resolved:{},chunkName:function(){return"components-Analytics-GoogleAnalytics-GoogleAnalytics"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!r.m[t]},importAsync:function(){return r.e(28).then(r.bind(null,"WiP2"))},requireAsync:function(e){var t=this,r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((function(e){return t.resolved[r]=!0,e}))},requireSync:function e(t){var n=this.resolve(t);return r(n)},resolve:function e(){return"WiP2"}},{fallback:null}),_=function(){var e="/projects";Object(n.useEffect)((function(){e=document.location.href}),[]);var t={"@context":"https://schema.org","@type":"website",url:e,name:"Projects",author:s.a.author,image:s.a.image.src,description:s.a.description};return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.Helmet,{defer:!1},o.a.createElement("html",{lang:"en"}),o.a.createElement("title",null,"Projects"),o.a.createElement("link",{rel:"shortcut icon",href:s.a.favicon}),o.a.createElement("link",{rel:"apple-touch-icon",href:s.a.favicon}),o.a.createElement("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),o.a.createElement("meta",{name:"robots",content:"index"}),o.a.createElement("meta",{name:"author",content:s.a.author}),o.a.createElement("meta",{name:"description",content:s.a.description}),o.a.createElement("link",{rel:"canonical",href:e}),o.a.createElement("meta",{name:"twitter:card",content:"summary"}),o.a.createElement("meta",{name:"twitter:site",content:s.a.twitter.site}),o.a.createElement("meta",{name:"twitter:title",content:"Projects"}),o.a.createElement("meta",{name:"twitter:description",content:s.a.description}),o.a.createElement("meta",{name:"twitter:creator",content:s.a.twitter.creator}),o.a.createElement("meta",{name:"twitter:image",content:s.a.image.src}),o.a.createElement("meta",{name:"twitter:image:alt",content:s.a.image.alt}),o.a.createElement("meta",{name:"og:url",content:e}),o.a.createElement("meta",{name:"og:type",content:"website"}),o.a.createElement("meta",{name:"og:title",content:"Projects"}),o.a.createElement("meta",{name:"og:image",content:s.a.image.src}),o.a.createElement("meta",{name:"og:description",content:s.a.description}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(t)),o.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap",type:"text/css"}),o.a.createElement("link",{rel:"preload",href:"/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-solid-900.woff2",as:"font",type:"font/woff2",crossOrigin:"anonymous"}),o.a.createElement("link",{rel:"preload",href:"/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-brands-400.woff2",as:"font",type:"font/woff2",crossOrigin:"anonymous"})),o.a.createElement(l.a,null),o.a.createElement(f.a,null),o.a.createElement(p.a,null),o.a.createElement(d.a,null),o.a.createElement(h.a,null),o.a.createElement(m,null),o.a.createElement(y,null),o.a.createElement(E,null,o.a.createElement(T.a,{id:"projects",title:"PROJECTS",showThematicBreak:!0,showBorderTop:!0},o.a.createElement(v,null,"Backend is powered by ",o.a.createElement("a",{href:"https://firebase.google.com/products/firestore/",target:"_blank",rel:"noopener noreferrer"},"Google Firebase: Cloud Firestore")),o.a.createElement(A,null))),o.a.createElement(b,{isFixedPosition:!1}),o.a.createElement(S,{trackingId:"UA-128894279-1"}))};t.default=_},DW2E:function(e,t,r){var n=r("0/R4"),o=r("Z6vF").onFreeze;r("Xtr8")("freeze",(function(e){return function(t){return e&&n(t)?e(o(t)):t}}))},Gytx:function(e,t,r){r("2Spj"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),e.exports=function(e,t,r,n){var o=r?r.call(n,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),u=0;u<a.length;u++){var s=a[u];if(!c(s))return!1;var l=e[s],f=t[s];if(!1===(o=r?r.call(n,l,f,s):void 0)||void 0===o&&l!==f)return!1}return!0}},MKeS:function(e,t,r){"use strict";r("V+eJ"),r("dZ+Y"),r("LK8F"),r("2Spj"),r("VRzm"),r("Btvt"),r("91GP"),r("DW2E"),r("f3/d");var n=r("q1tI"),o=r.n(n);function a(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=r("2mql"),s=r.n(u);function l(e,t){if(!e){var r=new Error("loadable: "+t);throw r.framesToPop=1,r.name="Invariant Violation",r}}var f=o.a.createContext();var p=function(e){return e};function d(e){var t=e.resolve,r=void 0===t?p:t,n=e.render,u=e.onLoad;function s(e,t){void 0===t&&(t={});var s=function(e){return"function"==typeof e?{requireAsync:e}:e}(e),p={};function d(e){return t.cacheKey?t.cacheKey(e):s.resolve?s.resolve(e):null}var h,T=function(e){var o,f;function h(r){var n;return(n=e.call(this,r)||this).state={result:null,error:null,loading:!0,cacheKey:d(r)},n.promise=null,l(!r.__chunkExtractor||s.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor?!1===t.ssr?c(n):(s.requireAsync(r).catch((function(){})),n.loadSync(),r.__chunkExtractor.addChunk(s.chunkName(r)),c(n)):(!1!==t.ssr&&s.isReady&&s.isReady(r)&&n.loadSync(),n)}f=e,(o=h).prototype=Object.create(f.prototype),o.prototype.constructor=o,o.__proto__=f,h.getDerivedStateFromProps=function(e,t){var r=d(e);return i({},t,{cacheKey:r,loading:t.loading||t.cacheKey!==r})};var T=h.prototype;return T.componentDidMount=function(){this.mounted=!0,this.state.loading?this.loadAsync():this.state.error||this.triggerOnLoad()},T.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&(this.promise=null,this.loadAsync())},T.componentWillUnmount=function(){this.mounted=!1},T.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},T.triggerOnLoad=function(){var e=this;u&&setTimeout((function(){u(e.state.result,e.props)}))},T.loadSync=function(){if(this.state.loading)try{var e=s.requireSync(this.props),t=r(e,{Loadable:y});this.state.result=t,this.state.loading=!1}catch(n){this.state.error=n}},T.getCacheKey=function(){return d(this.props)||JSON.stringify(this.props)},T.getCache=function(){return p[this.getCacheKey()]},T.setCache=function(e){p[this.getCacheKey()]=e},T.loadAsync=function(){var e=this;if(!this.promise){var n=this.props,o=(n.__chunkExtractor,n.forwardedRef,a(n,["__chunkExtractor","forwardedRef"]));this.promise=s.requireAsync(o).then((function(n){var o=r(n,{Loadable:y});t.suspense&&e.setCache(o),e.safeSetState({result:r(n,{Loadable:y}),loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){e.safeSetState({error:t,loading:!1})}))}return this.promise},T.render=function(){var e=this.props,r=e.forwardedRef,o=e.fallback,c=(e.__chunkExtractor,a(e,["forwardedRef","fallback","__chunkExtractor"])),u=this.state,s=u.error,l=u.loading,f=u.result;if(t.suspense){var p=this.getCache();if(!p)throw this.loadAsync();return n({loading:!1,fallback:null,result:p,options:t,props:i({},c,{ref:r})})}if(s)throw s;var d=o||t.fallback||null;return l?d:n({loading:l,fallback:d,result:f,options:t,props:i({},c,{ref:r})})},h}(o.a.Component),m=(h=T,function(e){return o.a.createElement(f.Consumer,null,(function(t){return o.a.createElement(h,Object.assign({__chunkExtractor:t},e))}))}),y=o.a.forwardRef((function(e,t){return o.a.createElement(m,Object.assign({forwardedRef:t},e))}));return y.preload=function(e){s.requireAsync(e)},y.load=function(e){return s.requireAsync(e)},y}return{loadable:s,lazy:function(e,t){return s(e,i({},t,{suspense:!0}))}}}var h=d({resolve:function(e,t){var r=t.Loadable,n=e.__esModule?e.default:e.default||e;return s()(r,n,{preload:!0}),n},render:function(e){var t=e.result,r=e.props;return o.a.createElement(t,r)}}),T=h.loadable,m=h.lazy,y=d({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,r=e.loading,n=e.props;return!r&&n.children?n.children(t):null}}),E=y.loadable,v=y.lazy;var A=T;A.lib=E,m.lib=v;t.a=A},Oyvg:function(e,t,r){var n=r("dyZX"),o=r("Xbzi"),a=r("hswa").f,i=r("kJMx").f,c=r("quPj"),u=r("C/va"),s=n.RegExp,l=s,f=s.prototype,p=/a/g,d=/a/g,h=new s(p)!==p;if(r("nh4g")&&(!h||r("eeVq")((function(){return d[r("K0xU")("match")]=!1,s(p)!=p||s(d)==d||"/a/i"!=s(p,"i")})))){s=function(e,t){var r=this instanceof s,n=c(e),a=void 0===t;return!r&&n&&e.constructor===s&&a?e:o(h?new l(n&&!a?e.source:e,t):l((n=e instanceof s)?e.source:e,n&&a?u.call(e):t),r?this:f,s)};for(var T=function(e){e in s||a(s,e,{configurable:!0,get:function(){return l[e]},set:function(t){l[e]=t}})},m=i(l),y=0;m.length>y;)T(m[y++]);f.constructor=s,s.prototype=f,r("KroJ")(n,"RegExp",s)}r("elZq")("RegExp")},TJpk:function(e,t,r){r("LK8F"),r("dZ+Y"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("8+KV"),r("/SS/"),r("hHhE"),r("V+eJ"),r("HAE/"),r("91GP"),t.__esModule=!0,t.Helmet=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=f(r("q1tI")),i=f(r("17x9")),c=f(r("8+s/")),u=f(r("bmMU")),s=r("v1p5"),l=r("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var T,m,y,E=(0,c.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),v=(T=E,y=m=function(e){function t(){return d(this,t),h(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,u.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case l.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,o=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return n({},o,((t={})[r.type]=[].concat(o[r.type]||[],[n({},a,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,o=e.child,a=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(o.type){case l.TAG_NAMES.TITLE:return n({},a,((t={})[o.type]=c,t.titleAttributes=n({},i),t));case l.TAG_NAMES.BODY:return n({},a,{bodyAttributes:n({},i)});case l.TAG_NAMES.HTML:return n({},a,{htmlAttributes:n({},i)})}return n({},a,((r={})[o.type]=n({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=n({},t);return Object.keys(e).forEach((function(t){var o;r=n({},r,((o={})[t]=e[t],o))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return a.default.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=p(o,["children"]),c=(0,s.convertReactPropstoHtmlAttributes)(i);switch(r.warnOnInvalidChildren(e,a),e.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:c,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=p(e,["children"]),o=n({},r);return t&&(o=this.mapChildrenToProps(t,o)),a.default.createElement(T,o)},o(t,null,[{key:"canUseDOM",set:function(e){T.canUseDOM=e}}]),t}(a.default.Component),m.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},m.defaultProps={defer:!0,encodeSpecialCharacters:!0},m.peek=T.peek,m.rewind=function(){var e=T.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},y);v.renderStatic=v.rewind,t.Helmet=v,t.default=v},TOwV:function(e,t,r){"use strict";e.exports=r("qT12")},V8YE:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return i}));r("a1Th"),r("Btvt");var n=r("q1tI"),o=r.n(n),a=function(){return"undefined"==typeof window},i=function(e){return!a()&&document.querySelector(e)?o.a.createElement("div",{key:e.toString(),dangerouslySetInnerHTML:{__html:document.querySelector(e).outerHTML}}):null}},aSUa:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("q1tI");r("m7cb");var o=function(e){var t,r;function n(t){return e.call(this,t)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){return null},n}(n.Component)},bmMU:function(e,t,r){"use strict";r("f3/d"),r("SRfc"),r("a1Th"),r("h7Nl"),r("Oyvg"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("LK8F");var n=Array.isArray,o=Object.keys,a=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var c,u,s,l=n(t),f=n(r);if(l&&f){if((u=t.length)!=r.length)return!1;for(c=u;0!=c--;)if(!e(t[c],r[c]))return!1;return!0}if(l!=f)return!1;var p=t instanceof Date,d=r instanceof Date;if(p!=d)return!1;if(p&&d)return t.getTime()==r.getTime();var h=t instanceof RegExp,T=r instanceof RegExp;if(h!=T)return!1;if(h&&T)return t.toString()==r.toString();var m=o(t);if((u=m.length)!==o(r).length)return!1;for(c=u;0!=c--;)if(!a.call(r,m[c]))return!1;if(i&&t instanceof Element&&r instanceof Element)return t===r;for(c=u;0!=c--;)if(!("_owner"===(s=m[c])&&t.$$typeof||e(t[s],r[s])))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},"hFT/":function(e,t,r){r("DNiP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},o=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(o).reduce((function(e,t){return e[o[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},"hn+G":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("q1tI");r("lGP2");var o=function(e){var t,r;function n(t){return e.call(this,t)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){return null},n}(n.Component)},pPUN:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("q1tI");r("OFwx");var o=function(e){var t,r;function n(t){return e.call(this,t)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){return null},n}(n.Component)},pxo3:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("q1tI");r("Ox8O");var o=function(e){var t,r;function n(t){return e.call(this,t)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){return null},n}(n.Component)},"q7f/":function(e,t,r){"use strict";t.a={title:{main:"Joshua Clifford Reyes"},author:"Joshua Clifford Reyes",description:"Clean Code, Domain Driven, Test Driven, Design Patterns and Best Practices. A Software Enginner, Computer Science, Computer Networking and Web Developer.",favicon:"/resources/img/icons/favicon.png",image:{src:"/resources/img/author/profile-tianzifang-min-super.jpg",alt:"Profile in Tianzifang Shanghai"},twitter:{site:"@lorddashme",creator:"@lorddashme"}}},qT12:function(e,t,r){"use strict";r("rE2o"),r("ioFf"),r("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,c=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,h=n?Symbol.for("react.suspense"):60113,T=n?Symbol.for("react.memo"):60115,m=n?Symbol.for("react.lazy"):60116;function y(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case p:case i:case u:case c:case h:return e;default:switch(e=e&&e.$$typeof){case l:case d:case s:return e;default:return t}}case m:case T:case a:return t}}}function E(e){return y(e)===p}t.typeOf=y,t.AsyncMode=f,t.ConcurrentMode=p,t.ContextConsumer=l,t.ContextProvider=s,t.Element=o,t.ForwardRef=d,t.Fragment=i,t.Lazy=m,t.Memo=T,t.Portal=a,t.Profiler=u,t.StrictMode=c,t.Suspense=h,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===p||e===u||e===c||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===T||e.$$typeof===s||e.$$typeof===l||e.$$typeof===d)},t.isAsyncMode=function(e){return E(e)||y(e)===f},t.isConcurrentMode=E,t.isContextConsumer=function(e){return y(e)===l},t.isContextProvider=function(e){return y(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return y(e)===d},t.isFragment=function(e){return y(e)===i},t.isLazy=function(e){return y(e)===m},t.isMemo=function(e){return y(e)===T},t.isPortal=function(e){return y(e)===a},t.isProfiler=function(e){return y(e)===u},t.isStrictMode=function(e){return y(e)===c},t.isSuspense=function(e){return y(e)===h}},r7TR:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("q1tI"),o=r.n(n),a=r("5ZsN"),i=r.n(a);var c=function(e){var t,r;function n(){return e.apply(this,arguments)||this}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=n.prototype;return a.getTitle=function(){return this.props.title?o.a.createElement("h2",{className:i.a.title},this.props.title):null},a.render=function(){var e=o.a.createElement("br",null),t="";return this.props.showThematicBreak&&(e=o.a.createElement("hr",{className:i.a.breaker})),this.props.showBorderTop||(t=i.a.hide),o.a.createElement("section",{id:"section-component",key:this.props.id,className:i.a.container+" "+t},this.getTitle(),e,this.props.children)},n}(n.Component)},v1p5:function(e,t,r){(function(e){r("dZ+Y"),r("KKXr"),r("eM6i"),r("8+KV"),r("LK8F"),r("V+eJ"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("0l/t"),r("bWfx"),r("DNiP"),r("pIFo"),r("91GP"),r("rE2o"),r("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=u(r("q1tI")),i=u(r("MgzW")),c=r("hFT/");function u(e){return e&&e.__esModule?e:{default:e}}var s,l=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=m(e,c.TAG_NAMES.TITLE),r=m(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,(function(){return t}));var n=m(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0},p=function(e){return m(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},d=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return o({},e,t)}),{})},h=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var a=n[o].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},T=function(e,t,r){var o={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&b("Helmet: "+e+' should be of type "Array". Instead found type "'+n(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var n={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),i=0;i<a.length;i++){var u=a[i],s=u.toLowerCase();-1===t.indexOf(s)||r===c.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||s===c.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(u)||u!==c.TAG_PROPERTIES.INNER_HTML&&u!==c.TAG_PROPERTIES.CSS_TEXT&&u!==c.TAG_PROPERTIES.ITEM_PROP||(r=u)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return o[r]||(o[r]={}),n[r]||(n[r]={}),!o[r][l]&&(n[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(n),u=0;u<a.length;u++){var s=a[u],l=(0,i.default)({},o[s],n[s]);o[s]=l}return e}),[]).reverse()},m=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},y=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout((function(){y(e)}),0)}),E=function(e){return clearTimeout(e)},v="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||y:e.requestAnimationFrame||y,A="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||E:e.cancelAnimationFrame||E,b=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,_=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,f=e.styleTags,p=e.title,d=e.titleAttributes;P(c.TAG_NAMES.BODY,n),P(c.TAG_NAMES.HTML,o),O(p,d);var h={baseTag:w(c.TAG_NAMES.BASE,r),linkTags:w(c.TAG_NAMES.LINK,a),metaTags:w(c.TAG_NAMES.META,i),noscriptTags:w(c.TAG_NAMES.NOSCRIPT,u),scriptTags:w(c.TAG_NAMES.SCRIPT,l),styleTags:w(c.TAG_NAMES.STYLE,f)},T={},m={};Object.keys(h).forEach((function(e){var t=h[e],r=t.newTags,n=t.oldTags;r.length&&(T[e]=r),n.length&&(m[e]=h[e].oldTags)})),t&&t(),s(e,T,m)},g=function(e){return Array.isArray(e)?e.join(""):e},O=function(e,t){void 0!==e&&document.title!==e&&(document.title=g(e)),P(c.TAG_NAMES.TITLE,t)},P=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(c.HELMET_ATTRIBUTE),o=n?n.split(","):[],a=[].concat(o),i=Object.keys(t),u=0;u<i.length;u++){var s=i[u],l=t[s]||"";r.getAttribute(s)!==l&&r.setAttribute(s,l),-1===o.indexOf(s)&&o.push(s);var f=a.indexOf(s);-1!==f&&a.splice(f,1)}for(var p=a.length-1;p>=0;p--)r.removeAttribute(a[p]);o.length===a.length?r.removeAttribute(c.HELMET_ATTRIBUTE):r.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&r.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},w=function(e,t){var r=document.head||document.querySelector(c.TAG_NAMES.HEAD),n=r.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(n),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===c.TAG_PROPERTIES.INNER_HTML)r.innerHTML=t.innerHTML;else if(n===c.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[n]?"":t[n];r.setAttribute(n,u)}r.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some((function(e,t){return i=t,r.isEqualNode(e)}))?o.splice(i,1):a.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:a}},R=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[c.REACT_TAG_MAP[r]||r]=e[r],t}),t)},M=function(e,t,r){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[c.HELMET_ATTRIBUTE]=!0,o=C(r,n),[a.default.createElement(c.TAG_NAMES.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=R(r),a=g(t);return o?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+l(a,n)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+l(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return C(t)},toString:function(){return R(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[c.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach((function(e){var r=c.REACT_TAG_MAP[e]||e;if(r===c.TAG_PROPERTIES.INNER_HTML||r===c.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),a.default.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+l(n[t],r)+'"';return e?e+" "+o:o}),""),a=n.innerHTML||n.cssText||"",i=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[c.HTML_TAG_MAP[r]||r]=e[r],t}),t)},t.handleClientStateChange=function(e){S&&A(S),e.defer?S=v((function(){_(e,(function(){S=null}))})):(_(e),S=null)},t.mapStateOnServer=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,s=e.scriptTags,l=e.styleTags,f=e.title,p=void 0===f?"":f,d=e.titleAttributes;return{base:M(c.TAG_NAMES.BASE,t,n),bodyAttributes:M(c.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:M(c.ATTRIBUTE_NAMES.HTML,o,n),link:M(c.TAG_NAMES.LINK,a,n),meta:M(c.TAG_NAMES.META,i,n),noscript:M(c.TAG_NAMES.NOSCRIPT,u,n),script:M(c.TAG_NAMES.SCRIPT,s,n),style:M(c.TAG_NAMES.STYLE,l,n),title:M(c.TAG_NAMES.TITLE,{title:p,titleAttributes:d},n)}},t.reducePropsToState=function(e){return{baseTag:h([c.TAG_PROPERTIES.HREF],e),bodyAttributes:d(c.ATTRIBUTE_NAMES.BODY,e),defer:m(e,c.HELMET_PROPS.DEFER),encode:m(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:d(c.ATTRIBUTE_NAMES.HTML,e),linkTags:T(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:T(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:T(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:T(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:T(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:d(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=v,t.warn=b}).call(this,r("yLpj"))},yLpj:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}e.exports=r}}]);
//# sourceMappingURL=component---src-pages-projects-index-tsx-86239f2c28c2daaab7f1.js.map