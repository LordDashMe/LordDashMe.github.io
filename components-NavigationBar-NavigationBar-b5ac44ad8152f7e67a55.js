(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[25],{"3mPH":function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return i}));t("91GP");var n=t("q1tI"),l=t.n(n),r=t("Wbzz"),o=t("2iuQ"),s=t.n(o);var i=function(a){var e,t;function n(e){var t;return(t=a.call(this,e)||this).state={brandName:"JOSHUA CLIFFORD REYES",routes:[{id:"home",href:"/",label:"HOME",icon:"fas fa-home"},{id:"contact",href:"contact/",label:"CONTACT",icon:"fas fa-paper-plane"},{id:"projects",href:"projects/",label:"PROJECTS",icon:"fas fa-magic"}],collapseStyle:{display:"none"},toggleCollapse:!1},t}t=a,(e=n).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t;var o=n.prototype;return o.defaultDetails=function(){return l.a.createElement("div",{className:"navbar-header page-scroll"},l.a.createElement("button",{onClick:this.toggleCollapse.bind(this,""),type:"button",className:"navbar-toggle "+s.a["navigation-bar-toggle"],"data-toggle":"collapse","data-target":"#navigation-bar-collapsable"},l.a.createElement("span",{className:"sr-only"},"Toggle navigation"),l.a.createElement("i",{className:"fa fa-bars"})," MENU"),l.a.createElement("h1",{className:"navbar-brand "+s.a["navigation-bar-title"]},this.state.brandName))},o.toggleCollapse=function(){var a=!1,e={display:"none"};this.state.toggleCollapse||(a=!0,e={display:"block"});var t=Object.assign({},this.state);t.collapseStyle=e,t.toggleCollapse=a,this.setState(t)},o.getMenuLinks=function(){return l.a.createElement("div",{className:"collapse navbar-collapse "+s.a["navigation-bar-collapse"],id:"navigation-bar-collapsable",style:this.state.collapseStyle},l.a.createElement("ul",{className:"nav navbar-nav navbar-right"},this.getRoutes()))},o.getRoutes=function(){return this.state.routes.map((function(a){var e=a.href;return l.a.createElement("li",{key:a.id,className:"page-scroll"},l.a.createElement(r.a,{to:e},l.a.createElement("i",{className:a.icon,"aria-hidden":"true"})," ",a.label))}))},o.render=function(){return l.a.createElement("div",{id:"navigation-bar-component",className:s.a.container},l.a.createElement("nav",{className:"navbar navbar-fixed-top "+s.a["navigation-bar"]},l.a.createElement("div",{className:"container"},this.defaultDetails(),this.getMenuLinks())))},n}(n.Component)},Wbzz:function(a,e,t){"use strict";var n=t("q1tI"),l=t.n(n),r=t("+ZDr"),o=t.n(r);t.d(e,"a",(function(){return o.a})),t.d(e,"b",(function(){return r.navigate}));t("lw3w"),t("emEt").default.enqueue,l.a.createContext({})},lw3w:function(a,e,t){var n;a.exports=(n=t("rzlk"))&&n.default||n},rzlk:function(a,e,t){"use strict";t.r(e);t("91GP");var n=t("q1tI"),l=t.n(n),r=t("IOVJ");e.default=function(a){var e=a.location,t=a.pageResources;return t?l.a.createElement(r.a,Object.assign({location:e,pageResources:t},t.json)):null}}}]);
//# sourceMappingURL=components-NavigationBar-NavigationBar-b5ac44ad8152f7e67a55.js.map