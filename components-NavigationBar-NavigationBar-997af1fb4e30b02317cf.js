(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[25],{"2iuQ":function(a,e,t){a.exports={container:"NavigationBar-module--container--3rwO-","navigation-bar":"NavigationBar-module--navigation-bar--1E7L6",navigationBar:"NavigationBar-module--navigation-bar--1E7L6","navigation-bar-title":"NavigationBar-module--navigation-bar-title--2jREp",navigationBarTitle:"NavigationBar-module--navigation-bar-title--2jREp","navigation-bar-toggle":"NavigationBar-module--navigation-bar-toggle--O-Yt6",navigationBarToggle:"NavigationBar-module--navigation-bar-toggle--O-Yt6","navigation-bar-collapse":"NavigationBar-module--navigation-bar-collapse--2sBAR",navigationBarCollapse:"NavigationBar-module--navigation-bar-collapse--2sBAR"}},"3mPH":function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return s}));t("91GP");var n=t("q1tI"),i=t.n(n),o=t("Wbzz"),l=t("2iuQ"),r=t.n(l);var s=function(a){var e,t;function n(e){var t;return(t=a.call(this,e)||this).state={brandName:"JOSHUA CLIFFORD REYES",routes:[{id:"home",href:"/",label:"HOME",icon:"fas fa-home"},{id:"contact",href:"/contact/",label:"CONTACT",icon:"fas fa-paper-plane"},{id:"projects",href:"/projects/",label:"PROJECTS",icon:"fas fa-magic"},{id:"tools",href:"/tools/",label:"TOOLS",icon:"fas fa-heart"}],collapseStyle:{display:"none"},toggleCollapse:!1},t}t=a,(e=n).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t;var l=n.prototype;return l.defaultDetails=function(){return i.a.createElement("div",{className:"navbar-header page-scroll"},i.a.createElement("button",{onClick:this.toggleCollapse.bind(this,""),type:"button",className:"navbar-toggle "+r.a["navigation-bar-toggle"],"data-toggle":"collapse","data-target":"#navigation-bar-collapsable"},i.a.createElement("i",{className:"fa fa-bars"})," MENU"),i.a.createElement("h1",{className:"navbar-brand "+r.a["navigation-bar-title"]},this.state.brandName))},l.toggleCollapse=function(){var a=!1,e={display:"none"};this.state.toggleCollapse||(a=!0,e={display:"block"});var t=Object.assign({},this.state);t.collapseStyle=e,t.toggleCollapse=a,this.setState(t)},l.getMenuLinks=function(){return i.a.createElement("div",{className:"collapse navbar-collapse "+r.a["navigation-bar-collapse"],id:"navigation-bar-collapsable",style:this.state.collapseStyle},i.a.createElement("ul",{className:"nav navbar-nav navbar-right"},this.getRoutes()))},l.getRoutes=function(){return this.state.routes.map((function(a){var e=a.href;return"home"===a.id?i.a.createElement("li",{key:a.id,className:"page-scroll"},i.a.createElement("a",{href:e},i.a.createElement("i",{className:a.icon,"aria-hidden":"true"})," ",a.label)):i.a.createElement("li",{key:a.id,className:"page-scroll"},i.a.createElement(o.a,{to:e},i.a.createElement("i",{className:a.icon,"aria-hidden":"true"})," ",a.label))}))},l.render=function(){return i.a.createElement("div",{id:"navigation-bar-component",className:r.a.container},i.a.createElement("nav",{className:"navbar navbar-fixed-top "+r.a["navigation-bar"]},i.a.createElement("div",{className:"container"},this.defaultDetails(),this.getMenuLinks())))},n}(n.Component)},Wbzz:function(a,e,t){"use strict";var n=t("q1tI"),i=t.n(n),o=t("+ZDr"),l=t.n(o);t.d(e,"a",(function(){return l.a})),t.d(e,"b",(function(){return o.navigate}));t("lw3w"),t("emEt").default.enqueue,i.a.createContext({})},lw3w:function(a,e,t){var n;a.exports=(n=t("rzlk"))&&n.default||n},rzlk:function(a,e,t){"use strict";t.r(e);t("91GP");var n=t("q1tI"),i=t.n(n),o=t("IOVJ");e.default=function(a){var e=a.location,t=a.pageResources;return t?i.a.createElement(o.a,Object.assign({location:e,pageResources:t},t.json)):null}}}]);
//# sourceMappingURL=components-NavigationBar-NavigationBar-997af1fb4e30b02317cf.js.map