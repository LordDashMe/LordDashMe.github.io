(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[27,11],{V6cd:function(e,t,r){"use strict";t.a={buildId:"v3",buildVersion:"3.1.1"}},kzEP:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return s}));var a=r("q1tI"),n=r.n(a),o=r("KSJw"),i=r.n(o);var s=function(e){var t,r;function a(t){return e.call(this,t)||this}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){return n.a.createElement("div",{id:"ph-covid19-tracker-footer-component",className:i.a.container},n.a.createElement("p",{className:i.a.content},"Sources: ",n.a.createElement("a",{href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports/",target:"_blank",rel:"noopener noreferrer"},"WHO"),", ",n.a.createElement("a",{href:"http://www.covid19.gov.ph/",target:"_blank",rel:"noopener noreferrer"},"COVID19 GOVPH"),", ",n.a.createElement("a",{href:"https://ncovtracker.doh.gov.ph/",target:"_blank",rel:"noopener noreferrer"},"NCov Tracker DOH GovPH"),", ",n.a.createElement("a",{href:"https://www.worldometers.info/coronavirus/",target:"_blank",rel:"noopener noreferrer"},"Worldmeter"),", ",n.a.createElement("a",{href:"https://www.coronatracker.com/",target:"_blank",rel:"noopener noreferrer"},"CoronaTracker"),", and various international media.  Powered by ",n.a.createElement("a",{href:"https://firebase.google.com/products/firestore/",target:"_blank",rel:"noopener noreferrer"},"Google Firebase: Cloud Firestore"),", ",n.a.createElement("a",{href:"https://reactjs.org/",rel:"noopener noreferrer",target:"_blank"},"React"),", ",n.a.createElement("a",{href:"https://www.gatsbyjs.org/",rel:"noopener noreferrer",target:"_blank"},"Gatsby"),", ",n.a.createElement("a",{href:"https://www.chartjs.org/",rel:"noopener noreferrer",target:"_blank"},"Chart.js"),", and ",n.a.createElement("a",{href:"https://pages.github.com/",rel:"noopener noreferrer",target:"_blank"},"Github Pages."),"  This page is a personal project and inspired by the people who are in need of information on the latest updates about the COVID-19 cases in the Philippines.  The only aim of this project is to share a simplified information from the stated official sources.  This is a 100% open source project and available in the Github.  If you find any inaccurate information above, please send a message by using the following ",n.a.createElement("a",{href:"/contact/",rel:"noopener noreferrer",target:"_blank"},"form"),"."))},a}(a.Component)},sGC4:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return c}));var a=r("q1tI"),n=r.n(a),o=r("V6cd"),i=r("+EzN"),s=r.n(i);var c=function(e){var t,r;function a(t){var r;return(r=e.call(this,t)||this).state={location:"Pulong Buhangin, Santa Maria, Bulacan, Philippines.",socialButtons:[{id:"github",href:"https://github.com/LordDashMe",icon:"fa-github"},{id:"linkedin",href:"https://www.linkedin.com/in/joshua-clifford-reyes-5572b912a/",icon:"fa-linkedin"},{id:"facebook",href:"https://www.facebook.com/LordDash.Me",icon:"fa-facebook-square"},{id:"twitter",href:"https://twitter.com/lorddashme?lang=en",icon:"fa-twitter"},{id:"instagram",href:"https://instagram.com/lorddashme/",icon:"fa-instagram"}]},r}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=a.prototype;return i.authorLocation=function(){return n.a.createElement("div",{className:s.a["upper-section-wrapper"]+" col-md-6"},n.a.createElement("h3",{className:s.a["upper-section-title"]},n.a.createElement("i",{className:"fas fa-map-marker-alt","aria-hidden":"true"}),"  LOCATION"),n.a.createElement("p",{className:s.a.location},this.state.location))},i.socialButtonsList=function(){return n.a.createElement("div",{className:s.a["upper-section-wrapper"]+" col-md-6"},n.a.createElement("h3",{className:s.a["upper-section-title"]},n.a.createElement("i",{className:"fas fa-share-square","aria-hidden":"true"}),"  LOOK FOR ME IN THE WEB"),n.a.createElement("ul",{className:"list-inline"},this.getSocialButtons()))},i.getSocialButtons=function(){var e=this;return this.state.socialButtons.map((function(t){var r=t.href,a="fab "+t.icon;return n.a.createElement("li",{key:t.id},n.a.createElement("div",{className:s.a["button-social"],onClick:e.onSocialButtonClick.bind(e,r)},n.a.createElement("i",{className:a})))}))},i.onSocialButtonClick=function(e){window.open(e,"_blank")},i.copyright=function(){return n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("p",null,n.a.createElement("small",{className:s.a.copyright},"© 2020")," ",n.a.createElement("a",{href:"/",rel:"noopener noreferrer"},"LordDashMe")," ",n.a.createElement("small",{className:s.a.copyright},"v",o.a.buildVersion),n.a.createElement("br",null),n.a.createElement("small",{className:s.a.copyright},"Made with ",n.a.createElement("i",{className:"fas fa-heart","aria-hidden":"true"})),n.a.createElement("br",null),n.a.createElement("small",{className:s.a.copyright},"Powered by ",n.a.createElement("a",{href:"https://reactjs.org/",rel:"noopener noreferrer",target:"_blank"},"React"),", ",n.a.createElement("a",{href:"https://www.gatsbyjs.org/",rel:"noopener noreferrer",target:"_blank"},"Gatsby"),", and ",n.a.createElement("a",{href:"https://pages.github.com/",rel:"noopener noreferrer",target:"_blank"},"Github Pages"),".")))},i.upperPart=function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},this.authorLocation(),this.socialButtonsList()))},i.lowerPart=function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},this.copyright()))},i.render=function(){var e=s.a.container;return this.props.isFixedPosition&&(e+=" "+s.a["fixed-position"]),n.a.createElement("footer",{id:"footer-component",className:e},this.upperPart(),this.lowerPart())},a}(a.Component)}}]);
//# sourceMappingURL=components-Footer-Footer-682df5e36998726e1798.js.map