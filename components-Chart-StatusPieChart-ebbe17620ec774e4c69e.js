(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[28,12],{zNOX:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return p}));var n=a("91GP"),r=a.n(n),i=a("q1tI"),s=a.n(i),o=a("MKeS"),c=a("V8YE"),u=a("6/LZ"),l=a("4WF4"),d=a.n(l);function f(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var h=Object(o.a)({resolved:{},chunkName:function(){return"react-chartjs-2"},isReady:function(t){var e=this.resolve(t);return!1!==this.resolved[e]&&!!a.m[e]},importAsync:function(){return Promise.all([a.e(1),a.e(45)]).then(a.bind(null,"UDbo"))},requireAsync:function(t){var e=this,a=this.resolve(t);return this.resolved[a]=!1,this.importAsync(t).then((function(t){return e.resolved[a]=!0,t}))},requireSync:function t(e){var n=this.resolve(e);return a(n)},resolve:function t(){return"UDbo"}},{fallback:null}),p=function(t){function e(e){var a;return(a=t.call(this,e)||this).state={statusPieChart:{data:a.getStatusPieChartData(),options:a.getStatusPieChartOptions()},totalConfirmedCases:0,percentageVisibility:!1,percentageValue:0},a}f(e,t);var a=e.prototype;return a.componentDidMount=function(){Object(c.a)()||this.fetchProjectsOnFireStore()},a.getStatusPieChartData=function(){return{labels:["ACTIVE CASES","RECOVERED","DEATHS"],datasets:[{label:"COVID-19",data:[0,10,0],backgroundColor:["#e29e01","#60a138","#a13838"],borderColor:"#fff",borderWidth:0,hoverBorderColor:["#fff","#fff","#fff"],hoverBorderWidth:0}]}},a.getStatusPieChartOptions=function(){var t=this;return{maintainAspectRatio:!1,legend:{display:!1,labels:{boxWidth:16,fontSize:14,fontColor:"#000",fontFamily:'Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif'}},tooltips:{bodyFontFamily:'Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif',custom:function(e){e.opacity<=0&&t.unsetPercentageValue()}},onClick:function(e,a){a&&void 0!==a[0]&&a[0]&&void 0!==a[0]._index&&t.setPercentageValue(a[0]._index)},onHover:function(e,a){a&&void 0!==a[0]&&a[0]&&void 0!==a[0]._index&&t.setPercentageValue(a[0]._index)}}},a.unsetPercentageValue=function(){var t=Object.assign({},this.state);t.percentageVisibility=!1,t.percentageValue=0,this.setState(t)},a.setPercentageValue=function(t){var e=Object.assign({},this.state),a=e.statusPieChart.data.datasets[0].data[t];e.percentageVisibility=!0,e.percentageValue=parseFloat((a/e.totalConfirmedCases*100).toFixed(2)),this.setState(e)},a.fetchProjectsOnFireStore=function(){var t=this;u.a.clearInstance(),u.a.initialize(),u.a.getInstance().collection("ph-covid19-tracker-status-overview").orderBy("order","desc").get().then((function(e){var a=e.docs[0].data().count,n=e.docs.filter((function(t){return"confirmed_cases"!==t.data().sys_id&&t})).map((function(t){var e=t.data();return{id:t.id,sysId:e.sys_id,label:e.label,count:e.count,color:e.color}})),r=Object.assign({},t.state);r.statusPieChart.data.labels=n.map((function(t){return t.label})),r.statusPieChart.data.datasets[0].data=n.map((function(t){return t.count})),r.statusPieChart.data.datasets[0].backgroundColor=n.map((function(t){return t.color})),r.totalConfirmedCases=a,t.setState(r)}))},a.getPercentage=function(){return this.state.percentageVisibility?s.a.createElement("div",{className:d.a["percentage-wrapper"]},s.a.createElement("div",{className:d.a.percentage},s.a.createElement("span",{id:"percentage-value"},this.state.percentageValue),"%")):s.a.createElement("div",null)},a.render=function(){return s.a.createElement("div",{id:"ph-covid19-tracker-chart-status-pie-chart-component",className:d.a.container},this.getPercentage(),s.a.createElement(h,{data:this.state.statusPieChart.data,options:this.state.statusPieChart.options,type:"pie",width:300,height:300}))},e}(i.Component)}}]);
//# sourceMappingURL=components-Chart-StatusPieChart-ebbe17620ec774e4c69e.js.map