(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[31],{avav:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return d}));i("mRH6");var r=i("q1tI"),n=i.n(r),o=i("V8YE"),a=i("fDJY"),c=i.n(a);function l(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(e){var t,r;function a(t){var i;return(i=e.call(this,t)||this).isFullyMounted=!1,i.state={projects:[{id:"1",title:"",description:"",image:"",imageAlt:"",link:"",order:0,active:!1},{id:"2",title:"",description:"",image:"",imageAlt:"",link:"",order:0,active:!1},{id:"3",title:"",description:"",image:"",imageAlt:"",link:"",order:0,active:!1},{id:"4",title:"",description:"",image:"",imageAlt:"",link:"",order:0,active:!1},{id:"5",title:"",description:"",image:"",imageAlt:"",link:"",order:0,active:!1},{id:"6",title:"",description:"",image:"",imageAlt:"",link:"",order:0,active:!1},{id:"7",title:"",description:"",image:"",imageAlt:"",link:"",order:0,active:!1},{id:"8",title:"",description:"",image:"",imageAlt:"",link:"",order:0,active:!1},{id:"9",title:"",description:"",image:"",imageAlt:"",link:"",order:0,active:!1}]},i}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var d,s,p,m=a.prototype;return m.componentWillUnmount=function(){Object(o.a)()||(this.isMounted=!1)},m.componentDidMount=function(){Object(o.a)()||(this.isMounted=!0,this.fetchProjectsOnFireStore())},m.fetchProjectsOnFireStore=function(){var e=this;Promise.all([i.e(2),i.e(3)]).then(i.bind(null,"BDCH")).then((function(t){t.default.clearInstance(),t.default.initialize(),t.default.getInstance().collection("projects").where("active","==",!0).orderBy("order","desc").get().then((function(t){if(void 0!==t.docs[0]){var i=t.docs.map((function(e){var t=e.data();return{id:e.id,title:t.title,description:t.description,image:t.image,imageAlt:t.imageAlt,link:t.link,order:t.order,active:t.active}}));e.isMounted&&e.setState({projects:i})}}))}))},m.getProjects=function(){return this.state.projects.map((function(e){return""===e.title?n.a.createElement("div",{key:e.id,className:c.a.placeholder},n.a.createElement("div",{className:c.a["ph-title"]}),n.a.createElement("div",{className:c.a["ph-description"]}),n.a.createElement("div",{className:c.a["ph-img"]}),n.a.createElement("div",{className:c.a["ph-link"]})):n.a.createElement("div",{key:e.id,className:c.a.wrapper},n.a.createElement("h3",{className:c.a.title},e.title),n.a.createElement("p",{className:c.a.description},e.description),n.a.createElement("img",{alt:e.imageAlt,className:c.a.image,src:e.image}),n.a.createElement("div",{className:c.a.link},n.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"Learn More")))}))},m.render=function(){return n.a.createElement("div",{id:"project-component",className:c.a.container},this.getProjects())},d=a,(s=[{key:"isMounted",set:function(e){this.isFullyMounted=e},get:function(){return this.isFullyMounted}}])&&l(d.prototype,s),p&&l(d,p),a}(r.Component)},fDJY:function(e,t,i){e.exports={container:"Project-module--container--dlfpy",placeholder:"Project-module--placeholder--3CnlA","ph-title":"Project-module--ph-title--2BGAj",phTitle:"Project-module--ph-title--2BGAj","ph-description":"Project-module--ph-description--rYUp6",phDescription:"Project-module--ph-description--rYUp6","ph-img":"Project-module--ph-img--dWRYV",phImg:"Project-module--ph-img--dWRYV","ph-link":"Project-module--ph-link--1k1PU",phLink:"Project-module--ph-link--1k1PU",wrapper:"Project-module--wrapper--3lQb2",image:"Project-module--image--169kU",title:"Project-module--title--LrkGQ",description:"Project-module--description--1dFMH",link:"Project-module--link--2xiKD"}},hXpO:function(e,t,i){var r=i("HYAF"),n=/"/g;e.exports=function(e,t,i,o){var a=String(r(e)),c="<"+t;return""!==i&&(c+=" "+i+'="'+String(o).replace(n,"&quot;")+'"'),c+">"+a+"</"+t+">"}},mRH6:function(e,t,i){"use strict";var r=i("I+eb"),n=i("hXpO");r({target:"String",proto:!0,forced:i("rwPt")("link")},{link:function(e){return n(this,"a","href",e)}})},rwPt:function(e,t,i){var r=i("0Dky");e.exports=function(e){return r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}}}]);
//# sourceMappingURL=components-Project-Project-b2e6d62d05486021c9e0.js.map