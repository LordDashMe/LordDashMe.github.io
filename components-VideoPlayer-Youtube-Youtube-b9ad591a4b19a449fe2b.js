(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[38],{dDJi:function(t,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return p}));var n=o("q1tI"),r=o.n(n),i=o("V8YE");var p=function(t){var e,o;function n(e){var o;return(o=t.call(this,e)||this).player=null,o.state={},o}o=t,(e=n).prototype=Object.create(o.prototype),e.prototype.constructor=e,e.__proto__=o;var p=n.prototype;return p.componentDidMount=function(){Object(i.a)()||this.onYouTubeIframeAPIReady()},p.onYouTubeIframeAPIReady=function(){"undefined"!=typeof YT&&YT&&YT.Player?this.player=new YT.Player(this.props.elementId,{height:this.props.height,width:this.props.width,videoId:this.props.videoId,playerVars:{rel:0,playsinline:1}}):(console.info("Waiting for YT to load properly."),setTimeout(this.onYouTubeIframeAPIReady.bind(this),500))},p.render=function(){return r.a.createElement("div",{id:this.props.elementId})},n}(n.Component)}}]);
//# sourceMappingURL=components-VideoPlayer-Youtube-Youtube-b9ad591a4b19a449fe2b.js.map