(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[8],{"2rMq":function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(r=function(){return i}.call(t,n,t,e))||(e.exports=r)}()},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("V+eJ"),n("bWfx"),n("f3/d"),n("/SS/"),n("hHhE");var o=n("q1tI"),i=r(o),a=r(n("2rMq")),c=r(n("Gytx"));function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l=[],f=void 0;function p(){f=e(l.map((function(e){return e.props}))),d.canUseDOM?t(f):n&&(f=n(f))}var d=function(e){function t(){return s(this,t),u(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.peek=function(){return f},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=f;return f=void 0,l=[],e},t.prototype.shouldComponentUpdate=function(e){return!c(e,this.props)},t.prototype.componentWillMount=function(){l.push(this),p()},t.prototype.componentDidUpdate=function(){p()},t.prototype.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),p()},t.prototype.render=function(){return i.createElement(r,this.props)},t}(o.Component);return d.displayName="SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")",d.canUseDOM=a.canUseDOM,d}}},Gytx:function(e,t,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var u=i[s];if(!c(u))return!1;var l=e[u],f=t[u];if(!1===(o=n?n.call(r,l,f,u):void 0)||void 0===o&&l!==f)return!1}return!0}},QeBL:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),i=n("TJpk"),a=n.n(i),c=n("MKeS"),s=n("V8YE"),u=n("q7f/"),l=n("r7TR"),f=Object(c.a)({resolved:{},chunkName:function(){return"components-NavigationBar-NavigationBar"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(0),n.e(31)]).then(n.bind(null,"3mPH"))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return"3mPH"}},{fallback:Object(s.b)("#navigation-bar-component")}),p=Object(c.a)({resolved:{},chunkName:function(){return"components-Headline-Headline"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(0),n.e(1),n.e(30)]).then(n.bind(null,"tNWe"))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return"tNWe"}},{fallback:Object(s.b)("#headline-component")}),d=Object(c.a)({resolved:{},chunkName:function(){return"components-PageWrapper-PageWrapper"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(0),n.e(32)]).then(n.bind(null,"Rh8P"))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return"Rh8P"}},{fallback:Object(s.b)("#page-wrapper-component")}),h=Object(c.a)({resolved:{},chunkName:function(){return"components-Author-Author"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(0),n.e(26)]).then(n.bind(null,"iyNj"))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return"iyNj"}},{fallback:Object(s.b)("#author-component")}),T=Object(c.a)({resolved:{},chunkName:function(){return"components-SkillTechnology-Chart-StatusPieChart"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(0),n.e(35)]).then(n.bind(null,"21pL"))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return"21pL"}},{fallback:Object(s.b)("#skill-technology-chart-status-pie-chart-component")}),m=Object(c.a)({resolved:{},chunkName:function(){return"components-SkillTechnology-SkillTechnology"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(0),n.e(36)]).then(n.bind(null,"jBZ+"))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return"jBZ+"}},{fallback:Object(s.b)("#skill-technology")}),E=Object(c.a)({resolved:{},chunkName:function(){return"components-CareerHistory-CareerHistory"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(0),n.e(27)]).then(n.bind(null,"hppk"))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return"hppk"}},{fallback:Object(s.b)("#career-history-component")}),v=Object(c.a)({resolved:{},chunkName:function(){return"components-Statement-Statement"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(0),n.e(41)]).then(n.bind(null,"2i1N"))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return"2i1N"}},{fallback:Object(s.b)("#statement-component")}),A=Object(c.a)({resolved:{},chunkName:function(){return"components-Footer-Footer"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(0),n.e(29)]).then(n.bind(null,"sGC4"))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return"sGC4"}},{fallback:Object(s.b)("#footer-component")}),y=Object(c.a)({resolved:{},chunkName:function(){return"components-Ads-GoogleAdsense-GoogleAdsense"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!n.m[t]},importAsync:function(){return n.e(22).then(n.bind(null,"tLO/"))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return"tLO/"}},{fallback:Object(s.b)("#ads-google-adsense-component")}),b=Object(c.a)({resolved:{},chunkName:function(){return"components-Ads-Ads"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(0),n.e(21)]).then(n.bind(null,"BO3X"))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return"BO3X"}},{fallback:Object(s.b)("#ads-component")}),S=Object(c.a)({resolved:{},chunkName:function(){return"components-Ads-GoogleAdsense-ResponsiveAds"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(0),n.e(23)]).then(n.bind(null,"tkVv"))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return"tkVv"}},{fallback:Object(s.b)("#ads-google-adsense-responsive-ads-component")}),O=Object(c.a)({resolved:{},chunkName:function(){return"components-Analytics-GoogleAnalytics-GoogleAnalytics"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!n.m[t]},importAsync:function(){return n.e(24).then(n.bind(null,"WiP2"))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return"WiP2"}},{fallback:Object(s.b)("#analytics-google-analytics-component")}),_=Object(c.a)({resolved:{},chunkName:function(){return"components-Analytics-GoogleAnalytics-PageView"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!n.m[t]},importAsync:function(){return n.e(25).then(n.bind(null,"BUzP"))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return"BUzP"}},{fallback:Object(s.b)("#analytics-google-analytics-page-view-component")}),g=function(){var e=u.a.title.main,t="/";Object(r.useEffect)((function(){t=document.location.href}),[]);var n={"@context":"https://schema.org","@type":"website",url:t,name:e,author:u.a.author,image:u.a.image.src,description:u.a.description};return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.Helmet,{defer:!1},o.a.createElement("html",{lang:"en"}),o.a.createElement("title",null,e),o.a.createElement("link",{rel:"shortcut icon",href:u.a.favicon}),o.a.createElement("link",{rel:"apple-touch-icon",href:u.a.favicon}),o.a.createElement("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),o.a.createElement("meta",{name:"robots",content:"index"}),o.a.createElement("meta",{name:"author",content:u.a.author}),o.a.createElement("meta",{name:"description",content:u.a.description}),o.a.createElement("link",{rel:"canonical",href:t}),o.a.createElement("meta",{name:"twitter:card",content:"summary"}),o.a.createElement("meta",{name:"twitter:site",content:u.a.twitter.site}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:u.a.description}),o.a.createElement("meta",{name:"twitter:creator",content:u.a.twitter.creator}),o.a.createElement("meta",{name:"twitter:image",content:u.a.image.src}),o.a.createElement("meta",{name:"twitter:image:alt",content:u.a.image.alt}),o.a.createElement("meta",{name:"og:url",content:t}),o.a.createElement("meta",{name:"og:type",content:"website"}),o.a.createElement("meta",{name:"og:title",content:e}),o.a.createElement("meta",{name:"og:image",content:u.a.image.src}),o.a.createElement("meta",{name:"og:description",content:u.a.description}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(n)),o.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap",type:"text/css"}),o.a.createElement("link",{rel:"stylesheet",href:"/resources/vendor/fontawesome-free-5.10.2-web/css/all.min.css",type:"text/css"}),o.a.createElement("link",{rel:"stylesheet",href:"/resources/vendor/bootstrap-3.3.7/css/bootstrap.min.css",type:"text/css"}),o.a.createElement("link",{rel:"stylesheet",href:"/resources/css/global.min.css",type:"text/css"})),o.a.createElement(f,null),o.a.createElement(p,null),o.a.createElement(d,null,o.a.createElement(l.a,{id:"author",title:"HELLO, WORLD!",showThematicBreak:!0,showBorderTop:!0},o.a.createElement(h,null)),o.a.createElement(l.a,{id:"skills-technologies",title:"SKILLS | TECHNOLOGIES",showThematicBreak:!0,showBorderTop:!0},o.a.createElement(T,null),o.a.createElement(m,null)),o.a.createElement(l.a,{id:"section-skip-1",title:"",showThematicBreak:!1,showBorderTop:!0},o.a.createElement(b,{appearance:"horizontal"},o.a.createElement(S,{adClient:"ca-pub-3427694918014398",adSlot:"4220072227"}))),o.a.createElement(l.a,{id:"career-history",title:"CAREER HISTORY",showThematicBreak:!0,showBorderTop:!0},o.a.createElement(E,null)),o.a.createElement(l.a,{id:"section-skip-2",title:"",showThematicBreak:!1,showBorderTop:!0},o.a.createElement(b,{appearance:"horizontal"},o.a.createElement(S,{adClient:"ca-pub-3427694918014398",adSlot:"2369194966"})),o.a.createElement(v,null))),o.a.createElement(A,{isFixedPosition:!1}),o.a.createElement(y,null),o.a.createElement(O,null,o.a.createElement(_,{trackingId:"UA-128894279-1"})))};t.default=g},TJpk:function(e,t,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=f(n("q1tI")),a=f(n("17x9")),c=f(n("8+s/")),s=f(n("bmMU")),u=n("v1p5"),l=n("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var T,m,E,v=(0,c.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),A=(T=v,E=m=function(e){function t(){return d(this,t),h(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,s.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case l.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,o=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return r({},o,((t={})[n.type]=[].concat(o[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,o=e.child,i=e.newProps,a=e.newChildProps,c=e.nestedChildren;switch(o.type){case l.TAG_NAMES.TITLE:return r({},i,((t={})[o.type]=c,t.titleAttributes=r({},a),t));case l.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},a)});case l.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},a)})}return r({},i,((n={})[o.type]=r({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var o;n=r({},n,((o={})[t]=e[t],o))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=p(o,["children"]),c=(0,u.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(e,i),e.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=p(e,["children"]),o=r({},n);return t&&(o=this.mapChildrenToProps(t,o)),i.default.createElement(T,o)},o(t,null,[{key:"canUseDOM",set:function(e){T.canUseDOM=e}}]),t}(i.default.Component),m.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},m.defaultProps={defer:!0,encodeSpecialCharacters:!0},m.peek=T.peek,m.rewind=function(){var e=T.rewind();return e||(e=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},E);A.renderStatic=A.rewind,t.Helmet=A,t.default=A},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,s,u,l=r(t),f=r(n);if(l&&f){if((s=t.length)!=n.length)return!1;for(c=s;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(l!=f)return!1;var p=t instanceof Date,d=n instanceof Date;if(p!=d)return!1;if(p&&d)return t.getTime()==n.getTime();var h=t instanceof RegExp,T=n instanceof RegExp;if(h!=T)return!1;if(h&&T)return t.toString()==n.toString();var m=o(t);if((s=m.length)!==o(n).length)return!1;for(c=s;0!=c--;)if(!i.call(n,m[c]))return!1;if(a&&t instanceof Element&&n instanceof Element)return t===n;for(c=s;0!=c--;)if(!("_owner"===(u=m[c])&&t.$$typeof||e(t[u],n[u])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},o=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(o).reduce((function(e,t){return e[o[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},"q7f/":function(e,t,n){"use strict";t.a={title:{main:"Joshua Clifford Reyes"},author:"Joshua Clifford Reyes",description:"Clean Code, Domain Driven, Test Driven, Design Patterns and Best Practices. A Software Enginner, Computer Science, Computer Networking and Web Developer.",favicon:"/resources/img/icons/favicon.png",image:{src:"/resources/img/author/profile-tianzifang-min-super.jpg",alt:"Profile in Tianzifang Shanghai"},twitter:{site:"@lorddashme",creator:"@lorddashme"}}},r7TR:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("q1tI"),o=n.n(r),i=n("5ZsN"),a=n.n(i);var c=function(e){var t,n;function r(){return e.apply(this,arguments)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.getTitle=function(){return this.props.title?o.a.createElement("h2",{className:a.a.title},this.props.title):null},i.render=function(){var e=o.a.createElement("br",null),t="";return this.props.showThematicBreak&&(e=o.a.createElement("hr",{className:a.a.breaker})),this.props.showBorderTop||(t=a.a.hide),o.a.createElement("section",{id:"section-component",key:this.props.id,className:a.a.container+" "+t},this.getTitle(),e,this.props.children)},r}(r.Component)},v1p5:function(e,t,n){(function(e){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=s(n("q1tI")),a=s(n("MgzW")),c=n("hFT/");function s(e){return e&&e.__esModule?e:{default:e}}var u,l=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=m(e,c.TAG_NAMES.TITLE),n=m(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=m(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return m(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},d=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return o({},e,t)}),{})},h=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},T=function(e,t,n){var o={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&b("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var s=i[a],u=s.toLowerCase();-1===t.indexOf(u)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===c.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(s)||s!==c.TAG_PROPERTIES.INNER_HTML&&s!==c.TAG_PROPERTIES.CSS_TEXT&&s!==c.TAG_PROPERTIES.ITEM_PROP||(n=s)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][l]&&(r[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),s=0;s<i.length;s++){var u=i[s],l=(0,a.default)({},o[u],r[u]);o[u]=l}return e}),[]).reverse()},m=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},E=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){E(e)}),0)}),v=function(e){return clearTimeout(e)},A="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||E:e.requestAnimationFrame||E,y="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||v:e.cancelAnimationFrame||v,b=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,O=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,f=e.styleTags,p=e.title,d=e.titleAttributes;R(c.TAG_NAMES.BODY,r),R(c.TAG_NAMES.HTML,o),g(p,d);var h={baseTag:P(c.TAG_NAMES.BASE,n),linkTags:P(c.TAG_NAMES.LINK,i),metaTags:P(c.TAG_NAMES.META,a),noscriptTags:P(c.TAG_NAMES.NOSCRIPT,s),scriptTags:P(c.TAG_NAMES.SCRIPT,l),styleTags:P(c.TAG_NAMES.STYLE,f)},T={},m={};Object.keys(h).forEach((function(e){var t=h[e],n=t.newTags,r=t.oldTags;n.length&&(T[e]=n),r.length&&(m[e]=h[e].oldTags)})),t&&t(),u(e,T,m)},_=function(e){return Array.isArray(e)?e.join(""):e},g=function(e,t){void 0!==e&&document.title!==e&&(document.title=_(e)),R(c.TAG_NAMES.TITLE,t)},R=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),s=0;s<a.length;s++){var u=a[s],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var f=i.indexOf(u);-1!==f&&i.splice(f,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);o.length===i.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,a.join(","))}},P=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},w=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},M=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[c.HELMET_ATTRIBUTE]=!0,o=N(n,r),[i.default.createElement(c.TAG_NAMES.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=w(n),i=_(t);return o?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+l(i,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+l(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return N(t)},toString:function(){return w(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),i.default.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+l(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){S&&y(S),e.defer?S=A((function(){O(e,(function(){S=null}))})):(O(e),S=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,u=e.scriptTags,l=e.styleTags,f=e.title,p=void 0===f?"":f,d=e.titleAttributes;return{base:M(c.TAG_NAMES.BASE,t,r),bodyAttributes:M(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:M(c.ATTRIBUTE_NAMES.HTML,o,r),link:M(c.TAG_NAMES.LINK,i,r),meta:M(c.TAG_NAMES.META,a,r),noscript:M(c.TAG_NAMES.NOSCRIPT,s,r),script:M(c.TAG_NAMES.SCRIPT,u,r),style:M(c.TAG_NAMES.STYLE,l,r),title:M(c.TAG_NAMES.TITLE,{title:p,titleAttributes:d},r)}},t.reducePropsToState=function(e){return{baseTag:h([c.TAG_PROPERTIES.HREF],e),bodyAttributes:d(c.ATTRIBUTE_NAMES.BODY,e),defer:m(e,c.HELMET_PROPS.DEFER),encode:m(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:d(c.ATTRIBUTE_NAMES.HTML,e),linkTags:T(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:T(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:T(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:T(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:T(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:d(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=A,t.warn=b}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=component---src-pages-index-tsx-734319e4ab98bb50bca4.js.map