(window.webpackJsonpv2=window.webpackJsonpv2||[]).push([[0],{11:function(e,a,i){e.exports={container:"SkillTechnology_container__3Yftp",wrapper:"SkillTechnology_wrapper__2YXH2","role-icon":"SkillTechnology_role-icon__89rc6","role-title":"SkillTechnology_role-title__di9lD",tool:"SkillTechnology_tool__3ygTL","tool-icon":"SkillTechnology_tool-icon__2OXG9","tool-name":"SkillTechnology_tool-name__1-YqE",library:"SkillTechnology_library__VtFXi",inactive:"SkillTechnology_inactive__37eXd",note:"SkillTechnology_note__1e-LP"}},12:function(e,a,i){e.exports={container:"Footer_container__188QZ","fixed-position":"Footer_fixed-position__2hQQa","upper-section-wrapper":"Footer_upper-section-wrapper__3CRa2","upper-section-title":"Footer_upper-section-title__r2L9a",location:"Footer_location__1eB45","button-social":"Footer_button-social__2_YrT",copyright:"Footer_copyright__2wqDr"}},173:function(e,a,i){},174:function(e,a,i){},175:function(e,a,i){},178:function(e,a,i){"use strict";i.r(a);var t=i(0),n=i.n(t),r=i(66),o=i.n(r),s=i(71),c=i(16),l=i(1),m=i(2),d=i(4),p=i(3),u=i(5),f=i(20),h=i.n(f),g=function(e){function a(e){var i;return Object(l.a)(this,a),(i=Object(d.a)(this,Object(p.a)(a).call(this,e))).state={brandName:"JOSHUA CLIFFORD REYES",routes:[{id:"home",href:"/",label:"HOME",icon:"fas fa-home"},{id:"contact",href:"contact",label:"CONTACT",icon:"fas fa-paper-plane"},{id:"projects",href:"projects",label:"PROJECTS",icon:"fas fa-magic"}],collapseStyle:{display:"none"},toggleCollapse:!1},i}return Object(u.a)(a,e),Object(m.a)(a,[{key:"defaultDetails",value:function(){return n.a.createElement("div",{className:"navbar-header page-scroll"},n.a.createElement("button",{onClick:this.toggleCollapse.bind(this,""),type:"button",className:"navbar-toggle "+h.a["navigation-bar-toggle"],"data-toggle":"collapse","data-target":"#navigation-bar-collapsable"},n.a.createElement("span",{className:"sr-only"},"Toggle navigation"),n.a.createElement("i",{className:"fa fa-bars"})," MENU"),n.a.createElement("h1",{className:"navbar-brand "+h.a["navigation-bar-title"]},this.state.brandName))}},{key:"toggleCollapse",value:function(){var e=!1,a={display:"none"};this.state.toggleCollapse||(e=!0,a={display:"block"}),this.setState({brandName:this.state.brandName,routes:this.state.routes,collapseStyle:a,toggleCollapse:e})}},{key:"getMenuLinks",value:function(){return n.a.createElement("div",{className:"collapse navbar-collapse "+h.a["navigation-bar-collapse"],id:"navigation-bar-collapsable",style:this.state.collapseStyle},n.a.createElement("ul",{className:"nav navbar-nav navbar-right"},this.state.routes.map(function(e){var a=e.href;return n.a.createElement("li",{key:e.id,className:"page-scroll"},n.a.createElement("a",{href:a,rel:"nofollow"},n.a.createElement("i",{className:e.icon,"aria-hidden":"true"})," ",e.label))})))}},{key:"render",value:function(){return n.a.createElement("div",{className:h.a.container},n.a.createElement("nav",{className:"navbar navbar-fixed-top "+h.a["navigation-bar"]},n.a.createElement("div",{className:"container"},this.defaultDetails(),this.getMenuLinks())))}}]),a}(t.Component),b=i(25),_=i.n(b),v=function(e){function a(){return Object(l.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=null;this.props.showThematicBreak&&(e=n.a.createElement("hr",{className:_.a.breaker}));var a=null;return this.props.showBorderTop||(a=_.a.hide),n.a.createElement("section",{key:this.props.id,className:_.a.container+" "+a},n.a.createElement("h2",{className:_.a.title},this.props.title),e,this.props.children)}}]),a}(t.Component),E=i(33),y=i.n(E),k=function(e){function a(e){var i;return Object(l.a)(this,a),(i=Object(d.a)(this,Object(p.a)(a).call(this,e))).state={author:{image:{path:"resources/img/profile-shanghai-min-super.jpg",alt:"Joshua Clifford Reyes"},description:"INFORMATION TECHNOLOGY | WEB DEVELOPER | MOBILE DEVELOPER | DEVOPS | COMPUTER NETWORK | DATA STRUCTURE | MULTIMEDIA"}},i}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:y.a.container},n.a.createElement("div",{className:y.a["display-photo"]},n.a.createElement("img",{src:this.state.author.image.path,alt:this.state.author.image.alt})),n.a.createElement("p",{className:y.a.description},this.state.author.description))}}]),a}(t.Component),N=i(67),w=i(69),O=i.n(w),S=function(e){function a(){return Object(l.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:O.a.container},n.a.createElement(N.a,{data:{labels:["WEB DEVELOPMENT","MOBILE APP DEVELOPMENT","DESKTOP APP DEVELOPMENT","DEVOPS","COMPUTER NETWORKING"],datasets:[{label:"2018",data:[9,4,3,8,6],backgroundColor:["#000","#ccc","#ccc","#777","#777"]}]},options:{maintainAspectRatio:!1,legend:{labels:{boxWidth:16,fontSize:12.9,fontColor:"#000",fontFamily:'Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif'}},tooltips:{bodyFontFamily:'Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif'}},width:300,height:300}))}}]),a}(t.Component),C=i(11),P=i.n(C),T=function(e){function a(e){var i;return Object(l.a)(this,a),(i=Object(d.a)(this,Object(p.a)(a).call(this,e))).state={skillTechnologyDetails:[{id:"web_development",role:"WEB DEVELOPMENT",icon:"fas fa-globe-americas",tools:[{id:"php",name:"PHP",icon:"fab fa-php",libraries:[{id:"symfony",name:"Symfony",is_active:!0},{id:"wordpress",name:"Wordpress",is_active:!0},{id:"laravel",name:"Laravel",is_active:!1},{id:"drupal",name:"Drupal",is_active:!1},{id:"codeigniter",name:"CodeIgniter",is_active:!0},{id:"phpunit",name:"PHPUnit",is_active:!0}],is_active:!0},{id:"python",name:"Python",icon:"fab fa-python",libraries:[{id:"falcon",name:"Falcon",is_active:!0}],is_active:!0},{id:"javascript",name:"JavaScript",icon:"fab fa-js",libraries:[{id:"jquery",name:"JQuery",is_active:!0},{id:"nodejs",name:"NodeJS",is_active:!0},{id:"react",name:"React",is_active:!0},{id:"angularjs",name:"AngularJS",is_active:!1},{id:"jest",name:"Jest",is_active:!0},{id:"typescript",name:"TypeScript",is_active:!0},{id:"angular",name:"Angular",is_active:!0},{id:"rxjs",name:"RxJS",is_active:!0}],is_active:!0},{id:"sql",name:"SQL",icon:"fas fa-database",libraries:[{id:"mysql",name:"MySQL",is_active:!0},{id:"sqlite",name:"SQLite",is_active:!1},{id:"mssql",name:"MsSQL",is_active:!1},{id:"postgresql",name:"PostgreSQL",is_active:!1}],is_active:!0},{id:"nosql",name:"NoSQL",icon:"fas fa-database",libraries:[{id:"mongodb",name:"MongoDB",is_active:!0}],is_active:!0},{id:"html",name:"HTML",icon:"fab fa-html5",libraries:[{id:"markdown",name:"Markdown",is_active:!0}],is_active:!0},{id:"css",name:"CSS",icon:"fab fa-css3",libraries:[{id:"sass",name:"Sass",is_active:!0}],is_active:!0}]},{id:"mobile_app_development",role:"MOBILE APP DEVELOPMENT",icon:"fas fa-mobile-alt",tools:[{id:"ionic",name:"Ionic",icon:"fas fa-cloud",libraries:[],is_active:!1},{id:"android",name:"Android",icon:"fab fa-android",libraries:[{id:"java",name:"Java",is_active:!1}],is_active:!1}]},{id:"desktop_app_development",role:"DESKTOP APP DEVELOPMENT",icon:"fas fa-desktop",tools:[{id:"java_se",name:"Java SE",icon:"fab fa-java",libraries:[{id:"swing",name:"Swing",is_active:!1}],is_active:!1}]},{id:"devops",role:"DEVOPS",icon:"fas fa-server",tools:[{id:"docker",name:"Docker",icon:"fab fa-docker",libraries:[{id:"docker_compose",name:"Docker Compose",is_active:!0}],is_active:!0},{id:"linux_server",name:"Linux Server",icon:"fab fa-linux",libraries:[],is_active:!0},{id:"windows_server",name:"Windows Server",icon:"fab fa-windows",libraries:[],is_active:!1},{id:"web_servers",name:"Web Servers",icon:"fas fa-cubes",libraries:[{id:"apache",name:"Apache",is_active:!0},{id:"nginx",name:"Nginx",is_active:!1}],is_active:!0},{id:"continuous_integration",name:"Continuous Integration",icon:"fas fa-bolt",libraries:[{id:"jenkins",name:"Jenkins",is_active:!0},{id:"travisci",name:"TravisCI",is_active:!0},{id:"bitbucket_pipelines",name:"Bitbucket Pipelines",is_active:!1}],is_active:!0},{id:"test_coverage",name:"Test Coverage",icon:"fas fa-bug",libraries:[{id:"coveralls",name:"Coveralls",is_active:!0},{id:"code_climate",name:"Code Climate",is_active:!1},{id:"codecov",name:"CodeCov",is_active:!1}],is_active:!0}]},{id:"computer_networking",role:"COMPUTER NETWORKING",icon:"fas fa-wifi",tools:[{id:"networks_nodes_setup",name:"Networks Nodes Setup",icon:"fas fa-network-wired",libraries:[{id:"repeaters",name:"Repeaters",is_active:!1},{id:"bridges",name:"Bridges",is_active:!1},{id:"switches",name:"Switches",is_active:!1}],is_active:!1},{id:"network_performance",name:"Network Performance",icon:"fas fa-tachometer-alt",libraries:[],is_active:!1},{id:"network_security",name:"Network Security",icon:"fas fa-lock",libraries:[],is_active:!1},{id:"port_forwarding",name:"Port Forwarding",icon:"fas fa-share",libraries:[],is_active:!1},{id:"network_load_balancing",name:"Network Load Balancing",icon:"fas fa-retweet",libraries:[],is_active:!1}]},{id:"collaboration",role:"COLLABORATION",icon:"fas fa-users",tools:[{id:"git",name:"Git",icon:"fab fa-git-alt",libraries:[],is_active:!0},{id:"github",name:"GitHub",icon:"fab fa-github",libraries:[],is_active:!0},{id:"slack",name:"Slack",icon:"fab fa-slack",libraries:[],is_active:!0},{id:"bitbucket",name:"Bitbucket",icon:"fab fa-bitbucket",libraries:[],is_active:!0},{id:"jira",name:"Jira",icon:"fab fa-jira",libraries:[],is_active:!0},{id:"trello",name:"Trello",icon:"fab fa-trello",libraries:[],is_active:!1}]},{id:"technologies",role:"TECHNOLOGIES",icon:"fas fa-code-branch",tools:[{id:"composer",name:"Composer",icon:"far fa-circle",libraries:[],is_active:!0},{id:"packagist",name:"Packagist",icon:"far fa-circle",libraries:[],is_active:!0},{id:"npm",name:"npm",icon:"fab fa-npm",libraries:[],is_active:!0},{id:"boostnote",name:"Boostnote",icon:"far fa-circle",libraries:[],is_active:!0},{id:"vscode",name:"VSCode",icon:"far fa-circle",libraries:[],is_active:!0},{id:"sublimetext",name:"SublimeText",icon:"far fa-circle",libraries:[],is_active:!1},{id:"filezilla",name:"FileZilla",icon:"far fa-circle",libraries:[],is_active:!0},{id:"xampp",name:"XAMPP",icon:"far fa-circle",libraries:[],is_active:!1},{id:"wamp",name:"WAMP",icon:"far fa-circle",libraries:[],is_active:!1},{id:"netbeans",name:"NetBeans",icon:"far fa-circle",libraries:[],is_active:!1},{id:"git_bash",name:"Git Bash",icon:"far fa-circle",libraries:[],is_active:!1},{id:"github_desktop",name:"GitHub Desktop",icon:"far fa-circle",libraries:[],is_active:!1},{id:"sourcetree",name:"Source Tree",icon:"far fa-circle",libraries:[],is_active:!1},{id:"tortoisesvn",name:"TortoiseSVN",icon:"far fa-circle",libraries:[],is_active:!1},{id:"brackets_editor",name:"Brackets Editor",icon:"far fa-circle",libraries:[],is_active:!1},{id:"android_studio",name:"Android Studio",icon:"far fa-circle",libraries:[],is_active:!1},{id:"laragon",name:"Laragon",icon:"far fa-circle",libraries:[],is_active:!1},{id:"pip",name:"pip",icon:"far fa-circle",libraries:[],is_active:!0},{id:"aws_cli",name:"aws cli",icon:"far fa-circle",libraries:[],is_active:!0}]}]},i}return Object(u.a)(a,e),Object(m.a)(a,[{key:"getSkillTechnologyDetails",value:function(){var e=this;return this.state.skillTechnologyDetails.map(function(a){return n.a.createElement("div",{key:a.id,className:P.a.wrapper},n.a.createElement("span",{className:"st-role"},n.a.createElement("i",{className:P.a["role-icon"]+" "+a.icon,"aria-hidden":"true"}),n.a.createElement("h3",{className:P.a["role-title"]},"\xa0",a.role)),e.getTools(a.tools))})}},{key:"getTools",value:function(e){var a=this;return e.map(function(e){var i=P.a.tool;return e.is_active||(i+=" "+P.a.inactive),n.a.createElement("div",{key:e.id},n.a.createElement("span",{className:i},n.a.createElement("i",{className:P.a["tool-icon"]+" "+e.icon,"aria-hidden":"true"}),n.a.createElement("h4",{className:P.a["tool-name"]},"\xa0",e.name)),a.getLibraries(e.libraries))})}},{key:"getLibraries",value:function(e){return e.map(function(e){var a=P.a.library;return e.is_active||(a+=" "+P.a.inactive),n.a.createElement("p",{key:e.id,className:a},n.a.createElement("i",{className:"fa fa-angle-right","aria-hidden":"true"})," ",e.name)})}},{key:"render",value:function(){return n.a.createElement("div",{className:P.a.container},this.getSkillTechnologyDetails(),n.a.createElement("div",{className:P.a.note},n.a.createElement("p",null,n.a.createElement("small",null,"*The dark and bold fonts are the skills | technologies that are currently in use. Last updated July 14, 2019."))))}}]),a}(t.Component),j=i(44),M=i.n(j),L=function(e){function a(){return Object(l.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=M.a.container;return"horizontal"===this.props.appearance&&(e+=" "+M.a["style-horizontal"]),n.a.createElement("div",{className:e},this.props.children)}}]),a}(t.Component),A=i(70),B=i.n(A),H=function(e){function a(){return Object(l.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}},{key:"render",value:function(){return n.a.createElement("div",{className:B.a.container},n.a.createElement("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-3427694918014398","data-ad-slot":"4220072227","data-ad-format":"auto","data-full-width-responsive":"true"}))}}]),a}(t.Component),I=i(26),D=i.n(I),W=function(e){function a(e){var i;return Object(l.a)(this,a),(i=Object(d.a)(this,Object(p.a)(a).call(this,e))).state={about:[{id:"first_statement",icon:"fas fa-thumbs-up",statement:"Adaptability, always aim to provide application in the best possible implementation using some best practices and design patterns."},{id:"second_statement",icon:"fas fa-graduation-cap",statement:"Eager to learn more in the forte field. Self motivated. Initiative with a high level of energy. Problem analysis and problem solving."}]},i}return Object(u.a)(a,e),Object(m.a)(a,[{key:"getAboutContent",value:function(){return this.state.about.map(function(e){return n.a.createElement("div",{key:e.id,className:D.a.wrapper},n.a.createElement("i",{className:D.a.icon+" "+e.icon}),n.a.createElement("p",{className:D.a.statement},e.statement))})}},{key:"render",value:function(){return n.a.createElement("div",{className:D.a.container},this.getAboutContent())}}]),a}(t.Component),x=i(8),R=i.n(x),J=function(e){function a(e){var i;return Object(l.a)(this,a),(i=Object(d.a)(this,Object(p.a)(a).call(this,e))).state={careerHistoryDetails:[{id:"nmi",logo:"resources/img/companies/gma-nmi-logo.png",logoAlt:"NMI",logoStyle:{width:"128px",maxWidth:"26%"},name:"GMA New Media Inc. (NMI)",roles:[{id:"senior_web_developer",name:"Senior Web Developer",term:"January 2019 - Present",highlights:[{id:"web_development",name:"Web Development",logo:"fas fa-certificate",descriptions:[]},{id:"gma_news_online_eleksyon_2019_microsite",name:"GMA News Online - Eleksyon 2019 Microsite",logo:"fas fa-certificate",descriptions:[]},{id:"code-page-library",name:"Code Package | Library",logo:"far fa-lightbulb",descriptions:["NodeJS Image Squeezer"]},{id:"amazon-web-services",name:"Amazon Web Services",logo:"far fa-lightbulb",descriptions:["Simple Storage Service (S3)"]},{id:"php",name:"PHP",logo:"far fa-lightbulb",descriptions:["CodeIgniter"]},{id:"javascript",name:"JavaScript",logo:"far fa-lightbulb",descriptions:["NodeJS","Angular","RxJS","TypeScript","React"]},{id:"python",name:"Python",logo:"far fa-lightbulb",descriptions:["Falcon"]}]}]},{id:"nw",logo:"resources/img/companies/logo-nuworks.png",logoAlt:"NW",logoStyle:{},name:"NuWorks Interactive Labs, Inc. (NuWorks)",roles:[{id:"backend-developer-and-devops",name:"Back End Developer and DevOps",term:"December 2017 - January 2019",highlights:[{id:"neuland-ph-website",name:"Neuland PH Website",logo:"fas fa-certificate",descriptions:[]},{id:"decidium-ph-website",name:"Decidium PH Website",logo:"fas fa-certificate",descriptions:[]},{id:"monde-nissin-website",name:"Monde Nissin Website (Maintenance)",logo:"fas fa-certificate",descriptions:[]},{id:"marlboro-website",name:"Marlboro Website (Maintenance)",logo:"fas fa-certificate",descriptions:[]},{id:"nuworks-website",name:"NuWorks Website (Maintenance)",logo:"fas fa-certificate",descriptions:[]},{id:"belo-men-website",name:"Belo Men Website (Maintenance)",logo:"fas fa-certificate",descriptions:[]},{id:"code-page-library",name:"Code Package | Library",logo:"far fa-lightbulb",descriptions:["Wordpress Scaffolding","PHP Simple Captcha","Wordpress DB Schema Extender","PHP Static Class Interface","PHP MailChimp"]},{id:"continuous-integration",name:"Continuous Integration",logo:"far fa-lightbulb",descriptions:["Jenkins","TravisCI","Bitbucket Pipelines"]},{id:"test-coverage",name:"Test Coverage",logo:"far fa-lightbulb",descriptions:["Coveralls","Code Climate","CodeCov"]},{id:"os-virtualization",name:"OS Virtualization",logo:"far fa-lightbulb",descriptions:["Docker"]},{id:"server",name:"Server",logo:"far fa-lightbulb",descriptions:["Linux"]},{id:"web-server",name:"Web Server",logo:"far fa-lightbulb",descriptions:["Apache","Nginx"]},{id:"server-security",name:"Server Security",logo:"far fa-lightbulb",descriptions:["Web Server and Application Security Standards"]},{id:"guest-speaker",name:"Guest Speaker",logo:"fas fa-microphone-alt",descriptions:['"Composer Basic - Autoloading" (NWTalks Meetup | May 11, 2018)','"Hardening Wordpress Security" (Coding Girl\'s Manila Meetup | January 26, 2018)']},{id:"meetup-conference-attended",name:"Meetup | Conference Attended",logo:"fas fa-users",descriptions:["Laravel PH Meetup (September 20, 2018","Wordpress - Wordcamp Manila 2018 (September 8, 2018)"]}]},{id:"backend-developer",name:"Back End Developer",term:"January 2017 - December 2017",highlights:[{id:"creamsilk-ph-website",name:"Creamsilk PH Website",logo:"fas fa-certificate",descriptions:[]},{id:"imagenation-canon-ph-website",name:"Imagenation Canon PH Website (Maintenance)",logo:"fas fa-certificate",descriptions:[]},{id:"chevrolet-ph-website",name:"Chevrolet PH Website",logo:"fas fa-certificate",descriptions:[]},{id:"nestle-nestea-beach-2017-ph-microsite",name:"Nestle Nestea Beach 2017 PH Microsite",logo:"fas fa-certificate",descriptions:[]},{id:"php",name:"PHP",logo:"far fa-lightbulb",descriptions:["Laravel","Drupal","CodeIgniter","Wordpress"]},{id:"meetup-conference-attended",name:"Meetup | Conference Attended",logo:"fas fa-users",descriptions:["Laravel PH Meetup (July 28, 2017)","Manila Javascript Meetup (June 21, 2017)","Royale Rumble DevCon Meetup (January 26, 2017)"]},{id:"training",name:"Training",logo:"fas fa-book",descriptions:["Laravel Training (Inventive Media | March 24 - 27, 2017)"]}]}]},{id:"gs3",logo:"resources/img/companies/gs3_logo.svg",logoAlt:"GS3",logoStyle:{},name:"Global Strategic Solutions and Services, Inc. (GS3)",roles:[{id:"web-and-mobile-developer",name:"Web and Mobile Developer",term:"June 2016 - January 2017",highlights:[{id:"forma-eforms-mobile-application",name:"Formalistics Mobile Application",logo:"fas fa-certificate",descriptions:[]},{id:"forma-eforms-web-application",name:"Formalistics Web Application",logo:"fas fa-certificate",descriptions:["Contribute to the source code of the Custom Framework used by the company"]},{id:"mobile-hybrid-framework",name:"Mobile Hybrid Framework",logo:"far fa-lightbulb",descriptions:["Ionic"]},{id:"custom-compiler",name:"Custom Compiler",logo:"far fa-lightbulb",descriptions:["Built on top of PHP and used by the Formalistics form builder for formula syntax."]},{id:"rest-api-implementation",name:"REST API Implementation",logo:"far fa-lightbulb",descriptions:[]},{id:"google-map-api-integration",name:"Google Map API Integration",logo:"far fa-lightbulb",descriptions:[]},{id:"meetup-conference-attended",name:"Meetup | Conference Attended",logo:"fas fa-users",descriptions:["PHP Conference 2016 Philippines (October 13 - 14, 2016)"]}]},{id:"web-developer",name:"Web Developer",term:"April 2015 - June 2016",highlights:[{id:"forma-eforms-web-application",name:"Formalistics Web Application",logo:"fas fa-certificate",descriptions:[]},{id:"server",name:"Server",logo:"far fa-lightbulb",descriptions:["Windows"]},{id:"php",name:"PHP",logo:"far fa-lightbulb",descriptions:[]},{id:"javascript",name:"JavaScript",logo:"far fa-lightbulb",descriptions:[]},{id:"technical-support",name:"Technical Support",logo:"fas fa-wrench",descriptions:[]}]}]},{id:"sti",logo:"resources/img/companies/STI300-min-super.png",logoAlt:"STI",logoStyle:{width:"100px",maxWidth:"25%",marginRight:"5px"},name:"STI College of Santa Maria Bulacan",roles:[{id:"bsit",name:"Bachelor of Science in Information Technology",term:"2011 - 2015",highlights:[{id:"cumlaude",name:"Cum Laude",logo:"fas fa-trophy",descriptions:[]},{id:"best_programmer_of_the_year",name:"Best Programmer of the Year (Batch 2015)",logo:"fas fa-medal",descriptions:[]},{id:"best_in_thesis",name:"Best in Thesis",logo:"fas fa-medal",descriptions:["Team Leader and Main Programmer","Map Locator (Android Application)"]},{id:"1st_runnerup_in_app_and_running_mobile_development",name:"1st Runner-up in App and Running (Mobile Development)",logo:"fas fa-star",descriptions:["STI Tagisan ng Talino (Dagupan Cluster Level | February 2015)"]}]}]}]},i}return Object(u.a)(a,e),Object(m.a)(a,[{key:"getCareerHistoryDetails",value:function(){var e=this;return this.state.careerHistoryDetails.map(function(a){return n.a.createElement("div",{key:a.id,className:R.a.organization},n.a.createElement("span",null,n.a.createElement("img",{className:R.a["organization-logo"],src:a.logo,alt:a.logoAlt,style:a.logoStyle}),n.a.createElement("h3",{className:R.a["organization-name"]},a.name)),e.getOrganization(a))})}},{key:"getOrganization",value:function(e){var a=this;return e.roles.map(function(e){return n.a.createElement("div",{key:e.id,className:R.a["position-wrapper"]},n.a.createElement("div",{className:R.a.position},n.a.createElement("h4",{className:R.a.role},e.name),n.a.createElement("p",{className:R.a["role-term"]},n.a.createElement("i",{className:"far fa-calendar-alt","aria-hidden":"true"})," ",n.a.createElement("small",null,e.term))),n.a.createElement("div",{className:R.a.highlight},a.getRoles(e)))})}},{key:"getRoles",value:function(e){var a=this;return e.highlights.map(function(e){return n.a.createElement("div",{key:e.id,className:R.a["highlight-wrapper"]},n.a.createElement("span",null,n.a.createElement("i",{className:R.a["highlight-marker"]+" "+e.logo,"aria-hidden":"true"}),n.a.createElement("p",{className:R.a["highlight-label"]},e.name)),a.getHighlights(e))})}},{key:"getHighlights",value:function(e){return e.descriptions.map(function(e,a){return n.a.createElement("div",{key:a,className:R.a["highlight-description"]},n.a.createElement("span",null,n.a.createElement("i",{className:R.a["highlight-specific-marker"]+" fas fa-angle-right","aria-hidden":"true"}),n.a.createElement("p",{className:R.a["highlight-specific-label"]},e)))})}},{key:"render",value:function(){return n.a.createElement("div",{className:R.a.container},this.getCareerHistoryDetails())}}]),a}(t.Component),F=i(45),G=i.n(F),z=function(e){function a(){return Object(l.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:G.a.container},n.a.createElement("p",{className:G.a.content},'"',this.props.statement,'" - ',n.a.createElement("i",null,this.props.author)))}}]),a}(t.Component),V=i(12),Y=i.n(V),q=function(e){function a(e){var i;return Object(l.a)(this,a),(i=Object(d.a)(this,Object(p.a)(a).call(this,e))).state={location:"Pulong Buhangin, Santa Maria, Bulacan, Philippines.",socialButtons:[{id:"github",href:"https://github.com/LordDashMe",icon:"fa-github"},{id:"linkedin",href:"https://www.linkedin.com/in/joshua-clifford-reyes-5572b912a/",icon:"fa-linkedin"},{id:"facebook",href:"https://www.facebook.com/LordDash.Me",icon:"fa-facebook-square"},{id:"twitter",href:"https://twitter.com/lorddashme?lang=en",icon:"fa-twitter"},{id:"instagram",href:"https://instagram.com/lorddashme/",icon:"fa-instagram"}]},i}return Object(u.a)(a,e),Object(m.a)(a,[{key:"authorLocation",value:function(){return n.a.createElement("div",{className:Y.a["upper-section-wrapper"]+" col-md-6"},n.a.createElement("h3",{className:Y.a["upper-section-title"]},n.a.createElement("i",{className:"fas fa-map-marker-alt","aria-hidden":"true"}),"\xa0 LOCATION"),n.a.createElement("p",{className:Y.a.location},this.state.location))}},{key:"socialButtonsList",value:function(){return n.a.createElement("div",{className:Y.a["upper-section-wrapper"]+" col-md-6"},n.a.createElement("h3",{className:Y.a["upper-section-title"]},n.a.createElement("i",{className:"fas fa-share-square","aria-hidden":"true"}),"\xa0 LOOK FOR ME IN THE WEB"),n.a.createElement("ul",{className:"list-inline"},this.state.socialButtons.map(function(e){var a=e.href,i="fab "+e.icon;return n.a.createElement("li",{key:e.id},n.a.createElement("a",{target:"_blank",href:a,className:Y.a["button-social"],rel:"noopener noreferrer"},n.a.createElement("i",{className:i})))})))}},{key:"copyright",value:function(){return n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("p",null,n.a.createElement("small",{className:Y.a.copyright},"\xa9 2019")," ",n.a.createElement("a",{href:"/",rel:"noopener noreferrer"},"LordDashMe")),n.a.createElement("p",null,n.a.createElement("small",{className:Y.a.copyright},"Made with ",n.a.createElement("i",{className:"fas fa-heart","aria-hidden":"true"})),n.a.createElement("br",null),n.a.createElement("small",{className:Y.a.copyright},"Powered by React and Github Pages")))}},{key:"upperPart",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},this.authorLocation(),this.socialButtonsList()))}},{key:"lowerPart",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},this.copyright()))}},{key:"render",value:function(){var e=Y.a.container;return this.props.isFixedPosition&&(e+=" "+Y.a["fixed-position"]),n.a.createElement("footer",{className:e},this.upperPart(),this.lowerPart())}}]),a}(t.Component),U=function(){return n.a.createElement("div",{className:"Home"},n.a.createElement(g,null),n.a.createElement("div",{className:"page-wrapper"},n.a.createElement(v,{id:"author",title:"HELLO, WORLD!",showThematicBreak:!0,showBorderTop:!0},n.a.createElement(k,null)),n.a.createElement(v,{id:"skills-technologies",title:"SKILLS | TECHNOLOGIES",showThematicBreak:!0,showBorderTop:!0},n.a.createElement(S,null),n.a.createElement(T,null)),n.a.createElement(L,{appearance:"horizontal"},n.a.createElement(H,null)),n.a.createElement(v,{id:"about",title:"ABOUT",showThematicBreak:!0,showBorderTop:!0},n.a.createElement(W,null)),n.a.createElement(v,{id:"career-history",title:"CAREER HISTORY",showThematicBreak:!0,showBorderTop:!0},n.a.createElement(J,null)),n.a.createElement(z,{statement:"Write code as if you had to support it for the rest of your life.",author:"Yuriy Zubarev"})),n.a.createElement(q,{isFixedPosition:!1}))},Q=i(22),K=i.n(Q),Z=function(e){function a(){return Object(l.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return document.title=this.props.pageTitle,n.a.createElement("div",{className:K.a.container},n.a.createElement(g,null),n.a.createElement("div",{className:K.a.wrapper},n.a.createElement(v,{id:this.props.id,title:this.props.title,showThematicBreak:!1,showBorderTop:!1},n.a.createElement("div",{className:K.a.content},n.a.createElement("i",{className:K.a.icon+" "+this.props.primaryIcon}),n.a.createElement("p",{className:K.a.description},this.props.description)))),n.a.createElement(q,{isFixedPosition:!0}))}}]),a}(t.Component);i(173);var X=function(){return n.a.createElement("div",{className:"NotFound"},n.a.createElement(Z,{id:"not-found",pageTitle:"Page Not Found",title:"PAGE NOT FOUND",primaryIcon:"fas fa-map-marked-alt",description:"Hmm. Looks like the page you're trying to visit is not available. Maybe check the address again."}))};i(174);var $=function(){return n.a.createElement("div",{className:"ComingSoon"},n.a.createElement(Z,{id:"coming-soon",pageTitle:"Page Coming Soon",title:"PAGE COMING SOON",primaryIcon:"fas fa-hard-hat",description:"This page is currently under construction."}))};i(175),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(function(){return n.a.createElement(s.a,{basename:"/"},n.a.createElement(c.d,null,n.a.createElement(c.b,{path:"/",exact:!0,component:U}),n.a.createElement(c.b,{path:"/contact",component:$}),n.a.createElement(c.b,{path:"/projects",component:$}),n.a.createElement(c.b,{path:"/notfound",component:X}),n.a.createElement(c.a,{to:"/notfound"})))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},20:function(e,a,i){e.exports={container:"NavigationBar_container__1BRk1","navigation-bar":"NavigationBar_navigation-bar__314Oj","navigation-bar-title":"NavigationBar_navigation-bar-title__1BZxk","navigation-bar-toggle":"NavigationBar_navigation-bar-toggle__1WDf8","navigation-bar-collapse":"NavigationBar_navigation-bar-collapse__3yMdX"}},22:function(e,a,i){e.exports={container:"PageInformation_container__1-yob",wrapper:"PageInformation_wrapper__Zk49U",content:"PageInformation_content__-mNEb",icon:"PageInformation_icon__1Mw1i",description:"PageInformation_description__ma0e1"}},25:function(e,a,i){e.exports={container:"Section_container__3md8M",hide:"Section_hide__3dsfp",title:"Section_title__ikPIm",breaker:"Section_breaker__3fN7G"}},26:function(e,a,i){e.exports={container:"About_container__OItB3",wrapper:"About_wrapper__2noiH",icon:"About_icon__i1fQh",statement:"About_statement__2EQqM"}},33:function(e,a,i){e.exports={container:"Author_container__2Y-Gi","display-photo":"Author_display-photo__1kNIG",description:"Author_description__11Ulu"}},44:function(e,a,i){e.exports={container:"Ads_container__1zTMu","style-horizontal":"Ads_style-horizontal__1GtK4"}},45:function(e,a,i){e.exports={container:"Statement_container__2YdbL",content:"Statement_content__3J2CD"}},69:function(e,a,i){e.exports={container:"StatusChart_container__yLKua"}},70:function(e,a,i){e.exports={container:"GoogleAdsense_container__214d2"}},74:function(e,a,i){e.exports=i(178)},8:function(e,a,i){e.exports={container:"CareerHistory_container__25AYQ",organization:"CareerHistory_organization__3LuOO","organization-logo":"CareerHistory_organization-logo__2lPOr","organization-name":"CareerHistory_organization-name__8psx-",position:"CareerHistory_position__2KZaq",role:"CareerHistory_role__39nci","role-term":"CareerHistory_role-term__3L9HP",highlight:"CareerHistory_highlight__fU9de","highlight-wrapper":"CareerHistory_highlight-wrapper__1fAY8","highlight-marker":"CareerHistory_highlight-marker__3YRC_","highlight-label":"CareerHistory_highlight-label__3FOz9","highlight-description":"CareerHistory_highlight-description__3ePjZ","highlight-specific-marker":"CareerHistory_highlight-specific-marker__klctz","highlight-specific-label":"CareerHistory_highlight-specific-label__2-vOY"}}},[[74,1,2]]]);
//# sourceMappingURL=main.65039a9a.chunk.js.map