(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[14,36],{Ff9X:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var r=n("q1tI"),o=n.n(r),i=n("MKeS"),c=n("V8YE"),s=n("6/LZ"),a=n("Aebn"),u=n.n(a);function d(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var v=Object(i.a)({resolved:{},chunkName:function(){return"components-VideoPlayer-Youtube-Youtube"},isReady:function(e){var t=this.resolve(e);return!1!==this.resolved[t]&&!!n.m[t]},importAsync:function(){return n.e(37).then(n.bind(null,"dDJi"))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return"dDJi"}},{fallback:Object(c.b)("#animate-number-component")}),l=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={suggestedVideo:[]},n}d(t,e);var n=t.prototype;return n.componentDidMount=function(){Object(c.a)()||this.fetchProjectsOnFireStore()},n.fetchProjectsOnFireStore=function(){var e=this;s.a.clearInstance(),s.a.initialize(),s.a.getInstance().collection("ph-covid19-tracker-suggested-video").where("active","==",!0).get().then((function(t){var n=t.docs.map((function(e){var t=e.data();return{id:e.id,videoId:t.video_id}}));e.setState({suggestedVideo:n})}))},n.getSuggestedVideo=function(){return this.state.suggestedVideo.map((function(e){return o.a.createElement(v,{key:e.id,elementId:"suggested-video",videoId:e.videoId,height:"100%",width:"100%"})}))},n.render=function(){return o.a.createElement("div",{id:"ph-covid19-tracker-suggested-video-component",className:u.a.container},o.a.createElement("h2",{className:u.a.title},"SUGGESTED VIDEO"),o.a.createElement("div",{className:u.a.content},this.getSuggestedVideo()))},t}(r.Component)}}]);
//# sourceMappingURL=component---src-pages-ph-covid-19-tracker-components-suggested-video-suggested-video-tsx-f6c5be3b9a844b4920f0.js.map