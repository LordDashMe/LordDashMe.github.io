(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[31],{tNWe:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var i=n("q1tI"),o=n.n(i),a=n("V8YE"),d=n("6/LZ"),c=n("gWyl"),r=n.n(c);var l=function(e){var t,n;function i(t){var n;return(n=e.call(this,t)||this).state={headline:{id:"",content:""}},n}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var c=i.prototype;return c.componentDidMount=function(){Object(a.a)()||this.fetchHeadlineOnFireStore()},c.fetchHeadlineOnFireStore=function(){var e=this;void 0===window.lorddashme_headline?(d.a.clearInstance(),d.a.initialize(),d.a.getInstance().collection("headlines").where("active","==",!0).limit(1).get().then((function(t){if(void 0!==t.docs[0]){var n=t.docs[0].data();window.lorddashme_headline={id:t.docs[0].id,content:n.content},e.setState({headline:{id:t.docs[0].id,content:n.content}}),console.log("Headline_Component: Fresh headline!")}}))):this.setState({headline:{id:window.lorddashme_headline.id,content:window.lorddashme_headline.content}})},c.getHeadlineContent=function(){return o.a.createElement("div",{className:r.a.content},o.a.createElement("small",{dangerouslySetInnerHTML:{__html:this.state.headline.content}}))},c.render=function(){return this.state.headline.content?o.a.createElement("div",{id:"headline-component",className:r.a.container},this.getHeadlineContent()):o.a.createElement("div",null)},i}(i.Component)}}]);
//# sourceMappingURL=components-Headline-Headline-ee6b10cacd40447c2c4d.js.map