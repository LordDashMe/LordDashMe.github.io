(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[13,40],{"7qyS":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var r=n("91GP"),a=n.n(r),i=n("q1tI"),o=n.n(i),s=n("MKeS"),c=n("V8YE"),u=n("6/LZ"),l=n("PXbQ"),m=n("C8s2"),d=n.n(m);function f(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var h=Object(s.a)({resolved:{},chunkName:function(){return"components-SocialMedia-Facebook-ShareButton"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!n.m[t]},importAsync:function(){return n.e(35).then(n.bind(null,"W+Vr"))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return"W+Vr"}},{fallback:Object(c.b)("#social-media-facebook-share-button-component")}),v=Object(s.a)({resolved:{},chunkName:function(){return"components-SocialMedia-Twitter-TweetButton"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!n.m[t]},importAsync:function(){return n.e(36).then(n.bind(null,"TnxY"))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return"TnxY"}},{fallback:Object(c.b)("#social-media-twitter-tweet-button-component")}),p=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={loader:!0,pageUrl:"/ph-covid19-tracker/",statusOverview:[{id:"id_confirmed_cases",sysId:"confirmed_cases",label:"CONFIRMED CASES",count:0,color:"#6f6f6f",order:4,asOfDateTime:""},{id:"id_active_cases",sysId:"active_cases",label:"ACTIVE CASES",count:0,order:3,color:"#e29e01"},{id:"id_recovered",sysId:"recovered",label:"RECOVERED",count:0,order:2,color:"#60a138"},{id:"id_deaths",sysId:"deaths",label:"DEATHS",count:0,order:1,color:"#a13838"}]},n}f(t,e);var n=t.prototype;return n.componentDidMount=function(){Object(c.a)()||(this.setPageUrl(),this.fetchPHCOVID19TrackerStatusOverviewOnFireStore())},n.setPageUrl=function(){var e=Object.assign({},this.state);e.pageUrl=document.location.href,this.setState(e)},n.fetchPHCOVID19TrackerStatusOverviewOnFireStore=function(){var e=this;u.a.clearInstance(),u.a.initialize(),u.a.getInstance().collection("ph-covid19-tracker-status-overview").orderBy("order","desc").get().then((function(t){var n=t.docs.map((function(e){var t=e.data(),n={id:e.id,sysId:t.sys_id,label:t.label,count:t.count,color:t.color,order:t.order};return void 0!==t.asOfDateTime&&(n.asOfDateTime=t.asOfDateTime),n}));e.setState({statusOverview:n,loader:!1})}))},n.getStatusOverview=function(){return this.state.statusOverview.filter((function(e){return"confirmed_cases"!==e.sysId&&e})).map((function(e){return o.a.createElement("div",{key:e.id,className:d.a["item-case"]+" "+e.sysId},o.a.createElement("h2",null,e.label),o.a.createElement("p",{style:{color:e.color}},o.a.createElement(l.a,{value:e.count,isCommaSeparated:!0})))}))},n.getConfirmCases=function(){return o.a.createElement("div",{key:this.state.statusOverview[0].id,className:d.a["confirmed-case"]},o.a.createElement("h2",null,this.state.statusOverview[0].label),o.a.createElement("p",{style:{color:this.state.statusOverview[0].color}},o.a.createElement(l.a,{value:this.state.statusOverview[0].count,isCommaSeparated:!0})))},n.getAsOfDateTime=function(){return void 0!==this.state.statusOverview[0].asOfDateTime&&this.state.statusOverview[0].asOfDateTime?o.a.createElement("p",{className:d.a["as-of-date-time"]},"As of ",this.state.statusOverview[0].asOfDateTime):null},n.getSocialMediaButtons=function(){return Object(c.a)()?null:o.a.createElement("div",{className:d.a["social-media-buttons"]},o.a.createElement(v,{href:this.state.pageUrl}),o.a.createElement(h,{href:this.state.pageUrl}))},n.render=function(){return o.a.createElement("div",{id:"ph-covid19-tracker-status-overview-component",className:d.a.container},this.getStatusOverview(),this.getConfirmCases(),this.getAsOfDateTime(),this.getSocialMediaButtons())},t}(i.Component)},PXbQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("a1Th"),n("Btvt"),n("pIFo");var r=n("q1tI"),a=n.n(r),i=n("xEkU"),o=n.n(i);var s=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).animated=null,n.state={number:0,commaSeparated:"0"},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.componentDidMount=function(){this.animated=o()(this.getAnimated.bind(this))},i.getAnimated=function(){if(this.props.value){var e=this.state.number;if(e>=this.props.value)return o.a.cancel(this.animated),void this.setNumber(this.props.value);var t=r.DEFAULT_FPS;void 0!==this.props.fps&&this.props.fps&&(t=this.props.fps),e+=Math.ceil(this.props.value/t),this.setNumber(e),this.animated=o()(this.getAnimated.bind(this))}},i.setNumber=function(e){this.setState({number:e,commaSeparated:this.convertCommaSeparatedNumber(e)})},i.convertCommaSeparatedNumber=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},i.getNumber=function(){return void 0!==this.props.isCommaSeparated&&this.props.isCommaSeparated?this.state.commaSeparated:this.state.number},i.render=function(){return a.a.createElement("span",{id:"animation-animate-number-component"},this.getNumber())},r}(r.Component);s.DEFAULT_FPS=60},bQgK:function(e,t,n){(function(t){n("eM6i"),function(){var n,r,a,i,o,s;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-o)/1e6},r=t.hrtime,i=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})(),s=1e9*t.uptime(),o=i-s):Date.now?(e.exports=function(){return Date.now()-a},a=Date.now()):(e.exports=function(){return(new Date).getTime()-a},a=(new Date).getTime())}.call(this)}).call(this,n("8oxB"))},xEkU:function(e,t,n){(function(t){for(var r=n("bQgK"),a="undefined"==typeof window?t:window,i=["moz","webkit"],o="AnimationFrame",s=a["request"+o],c=a["cancel"+o]||a["cancelRequest"+o],u=0;!s&&u<i.length;u++)s=a[i[u]+"Request"+o],c=a[i[u]+"Cancel"+o]||a[i[u]+"CancelRequest"+o];if(!s||!c){var l=0,m=0,d=[];s=function(e){if(0===d.length){var t=r(),n=Math.max(0,1e3/60-(t-l));l=n+t,setTimeout((function(){var e=d.slice(0);d.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(l)}catch(n){setTimeout((function(){throw n}),0)}}),Math.round(n))}return d.push({handle:++m,callback:e,cancelled:!1}),m},c=function(e){for(var t=0;t<d.length;t++)d[t].handle===e&&(d[t].cancelled=!0)}}e.exports=function(e){return s.call(a,e)},e.exports.cancel=function(){c.apply(a,arguments)},e.exports.polyfill=function(e){e||(e=a),e.requestAnimationFrame=s,e.cancelAnimationFrame=c}}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=component---src-pages-ph-covid-19-tracker-components-status-overview-status-overview-tsx-794f3d56f9e30dd073b2.js.map