(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[21],{V6cd:function(e,t,a){"use strict";t.a={buildId:"v3",buildVersion:"3.4.3",api:{contact:"https://lorddashme-backend.herokuapp.com/contact/",strongPassword:"https://lorddashme-php-backend.herokuapp.com/api/v1/strong_password/",contentHiding:"",contentHashing:""}}},sGC4:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var r=a("q1tI"),n=a.n(r),o=a("V6cd"),i=a("+EzN"),c=a.n(i);var s=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).state={location:"Pulong Buhangin, Santa Maria, Bulacan, Philippines.",socialButtons:[{id:"github",href:"https://github.com/LordDashMe",icon:"fa-github"},{id:"linkedin",href:"https://www.linkedin.com/in/joshua-clifford-reyes-5572b912a/",icon:"fa-linkedin"},{id:"facebook",href:"https://www.facebook.com/LordDash.Me",icon:"fa-facebook-square"},{id:"twitter",href:"https://twitter.com/lorddashme?lang=en",icon:"fa-twitter"},{id:"instagram",href:"https://instagram.com/lorddashme/",icon:"fa-instagram"}]},a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=r.prototype;return i.authorLocation=function(){return n.a.createElement("div",{className:c.a["upper-section-wrapper"]+" col-md-6"},n.a.createElement("h3",{className:c.a["upper-section-title"]},n.a.createElement("i",{className:"fas fa-map-marker-alt","aria-hidden":"true"})," LOCATION"),n.a.createElement("p",{className:c.a.location},this.state.location))},i.socialButtonsList=function(){return n.a.createElement("div",{className:c.a["upper-section-wrapper"]+" col-md-6"},n.a.createElement("h3",{className:c.a["upper-section-title"]},n.a.createElement("i",{className:"fas fa-share-square","aria-hidden":"true"})," LOOK FOR ME IN THE WEB"),n.a.createElement("ul",{className:"list-inline"},this.getSocialButtons()))},i.getSocialButtons=function(){var e=this;return this.state.socialButtons.map((function(t){var a=t.href,r="fab "+t.icon;return n.a.createElement("li",{key:t.id},n.a.createElement("div",{className:c.a["button-social"],onClick:e.onSocialButtonClick.bind(e,a)},n.a.createElement("i",{className:r})))}))},i.onSocialButtonClick=function(e){window.open(e,"_blank")},i.copyright=function(){return n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("p",null,n.a.createElement("small",{className:c.a.copyright},"© 2020")," ",n.a.createElement("a",{href:"/",rel:"noopener noreferrer"},"LordDashMe")," ",n.a.createElement("small",{className:c.a.copyright},"v",o.a.buildVersion),n.a.createElement("br",null),n.a.createElement("small",{className:c.a.copyright},"Made with ",n.a.createElement("i",{className:"fas fa-heart","aria-hidden":"true"})),n.a.createElement("br",null),n.a.createElement("small",{className:c.a.copyright},"Powered by ",n.a.createElement("a",{href:"https://reactjs.org/",rel:"noopener noreferrer",target:"_blank"},"React"),", ",n.a.createElement("a",{href:"https://www.gatsbyjs.org/",rel:"noopener noreferrer",target:"_blank"},"Gatsby"),", and ",n.a.createElement("a",{href:"https://pages.github.com/",rel:"noopener noreferrer",target:"_blank"},"Github Pages"),".")))},i.upperPart=function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},this.authorLocation(),this.socialButtonsList()))},i.lowerPart=function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},this.copyright()))},i.render=function(){var e=c.a.container;return this.props.isFixedPosition&&(e+=" "+c.a["fixed-position"]),n.a.createElement("footer",{id:"footer-component",className:e},this.upperPart(),this.lowerPart())},r}(r.Component)}}]);
//# sourceMappingURL=components-Footer-Footer-a03be609aa068c7ade5f.js.map