(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[18],{"+EzN":function(e,t,a){e.exports={container:"Footer-module--container--39nRG","fixed-position":"Footer-module--fixed-position--3hYuQ",fixedPosition:"Footer-module--fixed-position--3hYuQ","upper-section-wrapper":"Footer-module--upper-section-wrapper--1GaU2",upperSectionWrapper:"Footer-module--upper-section-wrapper--1GaU2","upper-section-title":"Footer-module--upper-section-title--22XKZ",upperSectionTitle:"Footer-module--upper-section-title--22XKZ",location:"Footer-module--location--2WZeI","button-social":"Footer-module--button-social--6gStN",buttonSocial:"Footer-module--button-social--6gStN",copyright:"Footer-module--copyright--2-iNN"}},HmTe:function(e,t,a){"use strict";t.a={buildId:"v3",buildVersion:"3.6.1",api:{contact:"https://lorddashme-backend.herokuapp.com/contact/",strongPassword:"https://lorddashme-php-backend.herokuapp.com/api/v1/strong_password/",contentHiding:"",contentHashing:""}}},sGC4:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var r=a("q1tI"),o=a.n(r),n=a("HmTe"),i=a("+EzN"),c=a.n(i);var s=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).state={location:"Pulong Buhangin, Santa Maria, Bulacan, Philippines.",socialButtons:[{id:"github",href:"https://github.com/LordDashMe",icon:"fa-github"},{id:"linkedin",href:"https://www.linkedin.com/in/joshua-clifford-reyes-5572b912a/",icon:"fa-linkedin"},{id:"facebook",href:"https://www.facebook.com/LordDash.Me",icon:"fa-facebook-square"},{id:"twitter",href:"https://twitter.com/lorddashme?lang=en",icon:"fa-twitter"},{id:"instagram",href:"https://instagram.com/lorddashme/",icon:"fa-instagram"}]},a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=r.prototype;return i.authorLocation=function(){return o.a.createElement("div",{className:c.a["upper-section-wrapper"]+" col-md-6"},o.a.createElement("h3",{className:c.a["upper-section-title"]},o.a.createElement("i",{className:"fas fa-map-marker-alt","aria-hidden":"true"})," LOCATION"),o.a.createElement("p",{className:c.a.location},this.state.location))},i.socialButtonsList=function(){return o.a.createElement("div",{className:c.a["upper-section-wrapper"]+" col-md-6"},o.a.createElement("h3",{className:c.a["upper-section-title"]},o.a.createElement("i",{className:"fas fa-share-square","aria-hidden":"true"})," LOOK FOR ME IN THE WEB"),o.a.createElement("ul",{className:"list-inline"},this.getSocialButtons()))},i.getSocialButtons=function(){var e=this;return this.state.socialButtons.map((function(t){var a=t.href,r="fab "+t.icon;return o.a.createElement("li",{key:t.id},o.a.createElement("div",{className:c.a["button-social"],onClick:e.onSocialButtonClick.bind(e,a)},o.a.createElement("i",{className:r})))}))},i.onSocialButtonClick=function(e){window.open(e,"_blank")},i.copyright=function(){return o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("p",null,o.a.createElement("small",{className:c.a.copyright},"© 2020")," ",o.a.createElement("a",{href:"/",rel:"noopener noreferrer"},"LordDashMe")," ",o.a.createElement("small",{className:c.a.copyright},"v",n.a.buildVersion),o.a.createElement("br",null),o.a.createElement("small",{className:c.a.copyright},"Made with ",o.a.createElement("i",{className:"fas fa-heart","aria-hidden":"true"})),o.a.createElement("br",null),o.a.createElement("small",{className:c.a.copyright},"Powered by ",o.a.createElement("a",{href:"https://reactjs.org/",rel:"noopener noreferrer",target:"_blank"},"React"),", ",o.a.createElement("a",{href:"https://www.gatsbyjs.org/",rel:"noopener noreferrer",target:"_blank"},"Gatsby"),", and ",o.a.createElement("a",{href:"https://pages.github.com/",rel:"noopener noreferrer",target:"_blank"},"Github Pages"),"."),o.a.createElement("br",null),o.a.createElement("small",{className:c.a.copyright},"Something's happen? check ",o.a.createElement("a",{href:"/status/",rel:"noopener noreferrer"},"Status"),".")))},i.upperPart=function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},this.authorLocation(),this.socialButtonsList()))},i.lowerPart=function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},this.copyright()))},i.render=function(){var e=c.a.container;return this.props.isFixedPosition&&(e+=" "+c.a["fixed-position"]),o.a.createElement("footer",{id:"footer-component",className:e},this.upperPart(),this.lowerPart())},r}(r.Component)}}]);
//# sourceMappingURL=components-Footer-Footer-1d4ec779f097d20c4c82.js.map