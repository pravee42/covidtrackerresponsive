(this.webpackJsonpcovidtracker=this.webpackJsonpcovidtracker||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},218:function(e,t,a){},220:function(e,t,a){},221:function(e,t,a){},222:function(e,t,a){},223:function(e,t,a){},224:function(e,t,a){},227:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(1),n=a.n(c),i=a(23),r=a.n(i),o=(a(101),a(102),a(17)),l=a(6),d=a(35),h=a(12),j=a(13),b=a(15),u=a(14),p=a(21),m=a.n(p),v=(a(67),a(241)),O=a(8),x=a(7),f=a(4),y=a.n(f),N=(a(50),{global:{line:{borderColor:"#F85F73"}},legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return y()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{parser:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return y()(e).format("0a")}}}]}});var g=function(e){var t=e.casesType,a=e.countryName,n=Object(c.useState)({}),i=Object(O.a)(n,2),r=i[0],o=i[1];return Object(c.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/historical/".concat(a,"?lastdays=100")).then((function(e){return e.json()})).then((function(e){var a=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases",s=[];for(var c in e.cases){if(t){var n={x:c,y:e[a][c]-t};s.push(n)}t=e[a][c]}return s}(e.timeline,t);o(a)}))}),[t,a]),Object(s.jsx)("div",{children:(null===r||void 0===r?void 0:r.length)>0&&Object(s.jsx)(x.Line,{options:N,data:{datasets:[{data:r,backgroundColor:"#d2b21694",borderColor:"#ff9800"}]}})})},C={global:{line:{borderColor:"#F85F73"}},legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return y()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{parser:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return y()(e).format("0a")}}}]}};var k=function(e){var t=e.casesType,a=e.countryName,n=Object(c.useState)({}),i=Object(O.a)(n,2),r=i[0],o=i[1];return Object(c.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/historical/".concat(a,"?lastdays=100")).then((function(e){return e.json()})).then((function(e){var a=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases",s=[];for(var c in e.cases){if(t){var n={x:c,y:e[a][c]-t};s.push(n)}t=e[a][c]}return s}(e.timeline,t);o(a)}))}),[t,a]),Object(s.jsx)("div",{children:(null===r||void 0===r?void 0:r.length)>0&&Object(s.jsx)(x.Line,{options:C,data:{datasets:[{data:r,backgroundColor:"#e3feb9",borderColor:"#0a6b35"}]}})})},w={global:{line:{borderColor:"#F85F73"}},legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return y()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{parser:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return y()(e).format("0a")}}}]}};var D=function(e){var t=e.casesType,a=e.countryName,n=Object(c.useState)({}),i=Object(O.a)(n,2),r=i[0],o=i[1];return Object(c.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/historical/".concat(a,"?lastdays=100")).then((function(e){return e.json()})).then((function(e){var a=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases",s=[];for(var c in e.cases){if(t){var n={x:c,y:e[a][c]-t};s.push(n)}t=e[a][c]}return s}(e.timeline,t);o(a)}))}),[t,a]),Object(s.jsx)("div",{children:(null===r||void 0===r?void 0:r.length)>0&&Object(s.jsx)(x.Line,{options:w,data:{datasets:[{data:r,backgroundColor:"#f5c6fc",borderColor:"#930ba7"}]}})})},A=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).getData=function(){m.a.get("https://disease.sh/v3/covid-19/countries/".concat(s.state.country)).then((function(e){var t=e.data;s.setState({data:t},(function(){s.setState({countryName:s.state.country},(function(){console.log(s.state.countryName)}))}))})).catch((function(e){alert("Enter a Valid Country Name"),s.setState({country:""})}))},s.changeCountry=function(e){s.setState(Object(d.a)({},e.target.name,[e.target.value]))},s.state={data:[],country:"",countryName:"India",casesType:"cases"},s}return Object(j.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"countryComponent",children:[Object(s.jsxs)("div",{className:"country-conatiner",children:[Object(s.jsxs)("div",{className:"search-container",children:[Object(s.jsx)(v.a,{as:"h2",children:"Type Country Name"}),Object(s.jsx)("input",{className:"search-textbox",value:this.state.country,onChange:this.changeCountry,type:"text",name:"country",id:""}),Object(s.jsx)("div",{className:"button-values",children:Object(s.jsx)("button",{className:"search-button",onClick:this.getData,children:"Search"})})]}),Object(s.jsxs)("div",{className:"country-details",children:[Object(s.jsxs)("div",{className:"active-cases",children:["Active Cases: ",this.state.data.active]}),Object(s.jsxs)("div",{className:"today-cases",children:["Today's Cases: ",this.state.data.todayCases]}),Object(s.jsxs)("div",{className:"death-cases",children:["Death: ",this.state.data.deaths]}),Object(s.jsxs)("div",{className:"today-death-cases",children:["Today Deaths: ",this.state.data.todayDeaths]}),Object(s.jsx)("div",{className:"country-name",children:this.state.data.country})]})]}),Object(s.jsxs)("div",{className:"mapschange",children:[Object(s.jsx)("h2",{children:"Cases"}),Object(s.jsx)(g,{casesType:"cases",countryName:this.state.countryName}),Object(s.jsx)("div",{className:"countryNameComponent",children:Object(s.jsxs)("h2",{children:["Country: ",this.state.countryName]})})]}),Object(s.jsxs)("div",{className:"mapdata",children:[Object(s.jsxs)("div",{className:"deaths",children:[Object(s.jsx)("h2",{children:"Death"}),Object(s.jsx)(k,{casesType:"deaths",countryName:this.state.countryName})]}),Object(s.jsxs)("div",{className:"Recovered",children:[Object(s.jsx)("h2",{children:"Recovered"}),Object(s.jsx)(D,{casesType:"recovered",countryName:this.state.countryName})]})]})]})}}]),a}(c.Component),T=(a(218),a(53)),F=a.n(T),S=a(85),M={global:{line:{borderColor:"#F85F73"}},legend:{display:!1},elements:{point:{radius:2}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return y()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{parser:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return y()(e).format("0a")}}}]}},L=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases",s=[];for(var c in e.cases){if(t){var n={x:c,y:e[a][c]-t};s.push(n)}t=e[a][c]}return s};var R=function(e){var t=e.casesType,a=Object(c.useState)({}),n=Object(O.a)(a,2),i=n[0],r=n[1];return Object(c.useEffect)((function(){(function(){var e=Object(S.a)(F.a.mark((function e(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var a=L(e,t);r(a)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(s.jsx)("div",{children:(null===i||void 0===i?void 0:i.length)>0&&Object(s.jsx)(x.Line,{options:M,data:{datasets:[{data:i,backgroundColor:"#d2b21694",borderColor:"#ff9800"}]}})})},Y=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).getData=function(){m.a.get("https://disease.sh/v3/covid-19/all/").then((function(e){var t=e.data;s.setState({data:t})}))},s.changeCase=function(e){s.setState({casesType:[e.target.name]})},s.state={data:[],country:"",casesType:"cases"},s}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"daily-cases-component",children:[Object(s.jsxs)("div",{className:"daily-cases-conatiner",children:[Object(s.jsxs)("div",{className:"activecases",children:[Object(s.jsx)("h2",{children:"Total Confrimed  Cases"}),Object(s.jsxs)("div",{className:"casesupdateTab",children:[Object(s.jsxs)("p",{className:"noneupdate",children:["+",this.state.data.todayCases]}),Object(s.jsx)("h3",{className:"activeCases1",children:this.state.data.cases})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{className:"showMaps1",type:"submit"})})]}),Object(s.jsxs)("div",{className:"confrimed",children:[Object(s.jsx)("h2",{children:"Active Cases "}),Object(s.jsxs)("div",{className:"casesupdateTab",children:[Object(s.jsxs)("p",{className:"liveUpdate",children:["+",this.state.data.todayCases]}),Object(s.jsx)("h3",{className:"activeCases",children:this.state.data.active})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{className:"showMaps",name:"cases",onClick:this.changeCase,type:"submit",children:"Show Chart Data"})})]}),Object(s.jsxs)("div",{className:"deathcases",children:[Object(s.jsx)("h2",{children:"Death Cases"}),Object(s.jsxs)("div",{className:"casesupdateTab",children:[Object(s.jsxs)("p",{className:"liveUpdate",children:["+",this.state.data.todayDeaths]}),Object(s.jsx)("h3",{className:"activeCases",children:this.state.data.deaths})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{className:"showMaps",name:"recovered",onClick:this.changeCase,type:"submit",children:"Show Chart Data"})})]}),Object(s.jsxs)("div",{className:"recovered",children:[Object(s.jsx)("h2",{children:"Recovered Cases"}),Object(s.jsxs)("div",{className:"casesupdateTab",children:[Object(s.jsxs)("p",{className:"liveUpdate",children:["+",this.state.data.todayRecovered]}),Object(s.jsx)("h3",{className:"activeCases",children:this.state.data.recovered})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{className:"showMaps",name:"deaths",onClick:this.changeCase,type:"submit",children:"Show Chart Data"})})]})]}),Object(s.jsx)("div",{className:"mapschange",children:Object(s.jsx)(R,{casesType:this.state.casesType})})]})}}]),a}(c.Component),E=(a(220),a.p+"static/media/logoimage.5a0189a8.jpg"),I=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).state={},s}return Object(j.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"tab1",children:[Object(s.jsxs)("div",{className:"Home",children:[Object(s.jsxs)("div",{className:"appinfo",children:[Object(s.jsx)("h1",{className:"Apptitle",children:"COVID-19 Tracker App"}),Object(s.jsxs)("p",{className:"content",children:["This app is used to track corona virus of worldwide or specific countries. ",Object(s.jsx)("br",{}),"By using the statictical data we can analyze the historical data with the graphical view for the past 100 days"]})]}),Object(s.jsx)("div",{className:"logo-container",children:Object(s.jsx)("img",{className:"logo",src:"https://www.world-heart-federation.org/wp-content/uploads/WEB-_PREVENT-_MEDICAL_650.gif",alt:"none"})})]}),Object(s.jsxs)("div",{className:"avideo",children:[Object(s.jsx)("iframe",{className:"awarnessVideo",src:"https://covid19.info.gov.pg/wp-content/uploads/2020/03/WHO-English.mp4",title:"Awarness Video"}),Object(s.jsx)("h2",{children:"AwarnessVideo"})]})]}),Object(s.jsxs)("div",{className:"div",children:[Object(s.jsx)("img",{className:"image",src:E,alt:"Logo"}),Object(s.jsxs)("div",{className:"authorinfromation",children:[Object(s.jsxs)("div",{className:"companyname",children:[Object(s.jsx)("p",{children:"Company"}),Object(s.jsx)("h1",{children:"ABIPRAVI"})]}),Object(s.jsxs)("div",{className:"authordetails",children:[Object(s.jsx)("p",{children:"This Website was Created By Praveen Kumar"}),Object(s.jsx)("p",{className:"sdata-corona",children:"This Website will be helpfull to track corona's Statistical data from past 100days."})]})]}),Object(s.jsxs)("div",{className:"headermedia",children:[Object(s.jsx)("h1",{children:"Follow Us on"}),Object(s.jsxs)("div",{className:"socialmedia",children:[Object(s.jsx)("a",{href:"https://www.instagram.com/praveenkumar_abipravi/",children:"Instagram"}),Object(s.jsx)("a",{href:"https://github.com/pravee42",children:"Github"}),Object(s.jsx)("a",{href:"https://www.youtube.com/channel/UCTMAfI1rkf94YQGNmZwFT7Q",children:"Youtube"})]})]})]})]})}}]),a}(c.Component),V=(a(221),a(222),{global:{line:{borderColor:"#F85F73"}},legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return y()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{parser:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return y()(e).format("0a")}}}]}});var B=function(e){var t=e.casesType,a=e.countryName,n=Object(c.useState)({}),i=Object(O.a)(n,2),r=i[0],o=i[1];return Object(c.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/historical/".concat(a,"?lastdays=30")).then((function(e){return e.json()})).then((function(e){var a=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases",s=[];for(var c in e.cases){if(t){var n={x:c,y:e[a][c]-t};s.push(n)}t=e[a][c]}return s}(e.timeline,t);o(a)}))}),[t,a]),Object(s.jsx)("div",{children:(null===r||void 0===r?void 0:r.length)>0&&Object(s.jsx)(x.Line,{options:V,data:{datasets:[{data:r,backgroundColor:"#d2b21694",borderColor:"#ff9800"}]}})})},P={global:{line:{borderColor:"#F85F73"}},legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return y()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{parser:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return y()(e).format("0a")}}}]}};var H=function(e){var t=e.casesType,a=e.countryName,n=Object(c.useState)({}),i=Object(O.a)(n,2),r=i[0],o=i[1];return Object(c.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/historical/".concat(a,"?lastdays=30")).then((function(e){return e.json()})).then((function(e){var a=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases",s=[];for(var c in e.cases){if(t){var n={x:c,y:e[a][c]-t};s.push(n)}t=e[a][c]}return s}(e.timeline,t);o(a)}))}),[t,a]),Object(s.jsx)("div",{children:(null===r||void 0===r?void 0:r.length)>0&&Object(s.jsx)(x.Line,{options:P,data:{datasets:[{data:r,backgroundColor:"#f5c6fc",borderColor:"#930ba7"}]}})})},W={global:{line:{borderColor:"#F85F73"}},legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return y()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{parser:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return y()(e).format("0a")}}}]}};var U=function(e){var t=e.casesType,a=e.countryName,n=Object(c.useState)({}),i=Object(O.a)(n,2),r=i[0],o=i[1];return Object(c.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/historical/".concat(a,"?lastdays=30")).then((function(e){return e.json()})).then((function(e){var a=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases",s=[];for(var c in e.cases){if(t){var n={x:c,y:e[a][c]-t};s.push(n)}t=e[a][c]}return s}(e.timeline,t);o(a)}))}),[t,a]),Object(s.jsx)("div",{children:(null===r||void 0===r?void 0:r.length)>0&&Object(s.jsx)(x.Line,{options:W,data:{datasets:[{data:r,backgroundColor:"#e3feb9",borderColor:"#0a6b35"}]}})})},_=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).getData=function(){m.a.get("https://disease.sh/v3/covid-19/countries/".concat(s.state.country)).then((function(e){var t=e.data;s.setState({data:t},(function(){s.setState({countryName:s.state.country},(function(){console.log(s.state.countryName)}))}))})).catch((function(e){alert("Enter a Valid Country Name"),s.setState({country:""})}))},s.changeCountry=function(e){s.setState(Object(d.a)({},e.target.name,[e.target.value]))},s.state={data:[],country:"",countryName:"India"},s}return Object(j.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"phonecountryComponent",children:[Object(s.jsxs)("div",{className:"phonecountry-conatiner",children:[Object(s.jsxs)("div",{className:"phonesearch-container",children:[Object(s.jsx)(v.a,{as:"h2",children:"Type Country Name"}),Object(s.jsx)("input",{className:"phonesearch-textbox",value:this.state.country,onChange:this.changeCountry,type:"text",name:"country",id:""}),Object(s.jsx)("div",{className:"phonebutton-values",children:Object(s.jsx)("button",{className:"phonesearch-button",onClick:this.getData,children:"Search"})})]}),Object(s.jsxs)("div",{className:"phonecountry-details",children:[Object(s.jsxs)("div",{className:"phonecases",children:["Active Cases: ",this.state.data.active]}),Object(s.jsxs)("div",{className:"phonecases",children:["Today's Cases: ",this.state.data.todayCases]}),Object(s.jsxs)("div",{className:"phonecases",children:["Death: ",this.state.data.deaths]}),Object(s.jsxs)("div",{className:"phonecases",children:["Today Deaths: ",this.state.data.todayDeaths]}),Object(s.jsx)("div",{className:"phonecountry-name",children:this.state.data.country})]})]}),Object(s.jsxs)("div",{className:"phonemapdata",children:[Object(s.jsx)("div",{className:"phonecountryNameComponent",children:Object(s.jsxs)("h2",{children:["Country: ",this.state.countryName]})}),Object(s.jsxs)("div",{className:"phonecases11",children:[Object(s.jsx)("h2",{children:"Cases"}),Object(s.jsx)(B,{casesType:"cases",countryName:this.state.countryName})]}),Object(s.jsxs)("div",{className:"phonedeaths",children:[Object(s.jsx)("h2",{children:"Death"}),Object(s.jsx)(U,{casesType:"deaths",countryName:this.state.countryName})]}),Object(s.jsxs)("div",{className:"phoneRecovered",children:[Object(s.jsx)("h2",{children:"Recovered"}),Object(s.jsx)(H,{casesType:"recovered",countryName:this.state.countryName})]})]})]})}}]),a}(c.Component),G=(a(223),a.p+"static/media/logoimage.5a0189a8.jpg"),Q=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).state={},s}return Object(j.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"phone-phone-tab1",children:[Object(s.jsxs)("div",{className:"phone-phone-Home",children:[Object(s.jsxs)("div",{className:"phone-phone-appinfo",children:[Object(s.jsx)("h1",{className:"phone-phone-Apptitle",children:"COVID-19 Tracker App"}),Object(s.jsxs)("p",{className:"phone-phone-content",children:["This app is used to track corona virus of worldwide or specific countries. ",Object(s.jsx)("br",{}),"By using the statictical data we can analyze the historical data with the graphical view for the past 30 days"]})]}),Object(s.jsx)("div",{className:"phone-phone-logo-container",children:Object(s.jsx)("img",{className:"phone-phone-logo",src:"https://www.world-heart-federation.org/wp-content/uploads/WEB-_PREVENT-_MEDICAL_650.gif",alt:"none"})})]}),Object(s.jsxs)("div",{className:"phone-phone-avideo",children:[Object(s.jsx)("iframe",{className:"phone-phone-awarnessVideo",src:"https://covid19.info.gov.pg/wp-content/uploads/2020/03/WHO-English.mp4",title:"Awarness Video"}),Object(s.jsx)("h2",{children:"AwarnessVideo"})]})]}),Object(s.jsxs)("div",{className:"phone-phone-div",children:[Object(s.jsx)("img",{className:"phone-phone-image",src:G,alt:"Logo"}),Object(s.jsxs)("div",{className:"phone-phone-authorinfromation",children:[Object(s.jsxs)("div",{className:"phone-phone-companyname",children:[Object(s.jsx)("p",{children:"Company"}),Object(s.jsx)("h1",{children:"ABIPRAVI"})]}),Object(s.jsxs)("div",{className:"phone-phone-authordetails",children:[Object(s.jsx)("p",{children:"This Website was Created By Praveen Kumar"}),Object(s.jsx)("p",{className:"phone-phone-sdata-corona",children:"This Website will be helpfull to track corona's Statistical data from past 1 month."})]})]}),Object(s.jsxs)("div",{className:"phone-phone-headermedia",children:[Object(s.jsx)("h1",{children:"Follow Us on"}),Object(s.jsxs)("div",{className:"phone-phone-socialmedia",children:[Object(s.jsx)("a",{href:"https://www.instagram.com/praveenkumar_abipravi/",children:"Instagram"}),Object(s.jsx)("a",{href:"https://github.com/pravee42",children:"Github"}),Object(s.jsx)("a",{href:"https://www.youtube.com/channel/UCTMAfI1rkf94YQGNmZwFT7Q",children:"Youtube"})]})]})]})]})}}]),a}(c.Component),z=(a(224),{global:{line:{borderColor:"#F85F73"}},legend:{display:!1},elements:{point:{radius:2}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return y()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{parser:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return y()(e).format("0a")}}}]}});var J=function(e){var t=e.casesType,a=Object(c.useState)({}),n=Object(O.a)(a,2),i=n[0],r=n[1];return Object(c.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=30").then((function(e){return e.json()})).then((function(e){var a=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases",s=[];for(var c in e.cases){if(t){var n={x:c,y:e[a][c]-t};s.push(n)}t=e[a][c]}return s}(e,t);r(a)}))}),[t]),Object(s.jsx)("div",{children:(null===i||void 0===i?void 0:i.length)>0&&Object(s.jsx)(x.Line,{options:z,data:{datasets:[{data:i,backgroundColor:"#c5e1a4",borderColor:"#376204"}]}})})},K={global:{line:{borderColor:"#702573"}},legend:{display:!1},elements:{point:{radius:2}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return y()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{parser:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return y()(e).format("0a")}}}]}};var Z=function(e){var t=e.casesType,a=Object(c.useState)({}),n=Object(O.a)(a,2),i=n[0],r=n[1];return Object(c.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=30").then((function(e){return e.json()})).then((function(e){var a=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases",s=[];for(var c in e.cases){if(t){var n={x:c,y:e[a][c]-t};s.push(n)}t=e[a][c]}return s}(e,t);r(a)}))}),[t]),Object(s.jsx)("div",{children:(null===i||void 0===i?void 0:i.length)>0&&Object(s.jsx)(x.Bar,{options:K,data:{datasets:[{data:i,backgroundColor:"#fab2cb",borderColor:"#702573"}]}})})},q={global:{line:{borderColor:"#702573"}},legend:{display:!1},elements:{point:{radius:2}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return y()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{parser:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return y()(e).format("0a")}}}]}};var X=function(e){var t=e.casesType,a=Object(c.useState)({}),n=Object(O.a)(a,2),i=n[0],r=n[1];return Object(c.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=30").then((function(e){return e.json()})).then((function(e){var a=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases",s=[];for(var c in e.cases){if(t){var n={x:c,y:e[a][c]-t};s.push(n)}t=e[a][c]}return s}(e,t);r(a)}))}),[t]),Object(s.jsx)("div",{children:(null===i||void 0===i?void 0:i.length)>0&&Object(s.jsx)(x.Line,{options:q,data:{datasets:[{data:i,backgroundColor:"#d37f65",borderColor:"#f73b00"}]}})})},$=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).getData=function(){m.a.get("https://disease.sh/v3/covid-19/all/").then((function(e){var t=e.data;s.setState({data:t})}))},s.state={data:[]},s}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"HomePageContainer",children:[Object(s.jsx)("h1",{className:"title",children:"Covid Tracker"}),Object(s.jsxs)("div",{className:"HomePageContainer-1",children:[Object(s.jsxs)("div",{className:"phone-cases",children:[Object(s.jsx)("p",{className:"title-cases",children:"Cases"}),Object(s.jsx)("p",{className:"count",children:this.state.data.cases})]}),Object(s.jsxs)("div",{className:"phone-active",children:[Object(s.jsx)("p",{className:"title-cases",children:"Active Cases"}),Object(s.jsxs)("p",{className:"phone-liveUpdate",children:["+",this.state.data.todayCases]}),Object(s.jsx)("h3",{className:"phone-activeCases",children:this.state.data.active})]})]}),Object(s.jsxs)("div",{className:"HomePageContainer-2",children:[Object(s.jsxs)("div",{className:"phone-recovered",children:[Object(s.jsx)("p",{className:"title-cases",children:"Recovered Cases"}),Object(s.jsxs)("p",{className:"phone-rectoday",children:["+",this.state.data.todayRecovered]}),Object(s.jsx)("h3",{className:"phone-rec",children:this.state.data.recovered})]}),Object(s.jsxs)("div",{className:"phone-deaths",children:[Object(s.jsx)("p",{className:"title-cases",children:"Deaths Cases"}),Object(s.jsx)("br",{}),Object(s.jsxs)("p",{className:"phone-detoday",children:["+",this.state.data.todayRecovered]}),Object(s.jsx)("h3",{className:"phone-death",children:this.state.data.recovered})]})]}),Object(s.jsx)("hr",{className:"phone-divider"}),Object(s.jsxs)("div",{className:"phone-chartdata",children:[Object(s.jsxs)("div",{className:"phone-caseschart",children:[Object(s.jsx)("h1",{children:"Cases Data"}),Object(s.jsx)(J,{casesType:"cases"})]}),Object(s.jsxs)("div",{className:"phone-deathschart",children:[Object(s.jsx)("h1",{children:"Deaths Data"}),Object(s.jsx)(Z,{casesType:"deaths"})]}),Object(s.jsxs)("div",{className:"phone-recoveredchart",children:[Object(s.jsx)("h1",{children:"Recovered"}),Object(s.jsx)(X,{casesType:"deaths"})]})]})]})}}]),a}(c.Component);function ee(){return Object(s.jsx)("div",{children:Object(s.jsx)(o.a,{children:Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"phone-navbar",children:Object(s.jsx)("nav",{children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(o.b,{className:"td",to:"/",children:"Home"})}),Object(s.jsx)("li",{children:Object(s.jsx)(o.b,{className:"td",to:"/country",children:"Search By Country"})}),Object(s.jsx)("li",{children:Object(s.jsx)(o.b,{className:"td",to:"/about",children:"About"})})]})})}),Object(s.jsx)("div",{className:"main-body",children:Object(s.jsxs)(l.c,{children:[Object(s.jsx)(l.a,{path:"/country",children:Object(s.jsx)(_,{})}),Object(s.jsx)(l.a,{path:"/about",children:Object(s.jsx)(Q,{})}),Object(s.jsx)(l.a,{path:"/",children:Object(s.jsx)($,{})})]})})]})})})}var te=function(){var e=window.screen.availWidth;return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(o.a,{children:e>993?Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"navbar",children:Object(s.jsx)("nav",{children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(o.b,{className:"td",to:"/",children:"Home"})}),Object(s.jsx)("li",{children:Object(s.jsx)(o.b,{className:"td",to:"/country",children:"Search By Country"})}),Object(s.jsx)("li",{children:Object(s.jsx)(o.b,{className:"td",to:"/dailycases",children:"Daily Cases"})})]})})}),Object(s.jsx)("div",{className:"main-body",children:Object(s.jsxs)(l.c,{children:[Object(s.jsx)(l.a,{path:"/country",children:Object(s.jsx)(A,{})}),Object(s.jsx)(l.a,{path:"/dailycases",children:Object(s.jsx)(Y,{})}),Object(s.jsx)(l.a,{path:"/",children:Object(s.jsx)(I,{})})]})})]}):Object(s.jsx)(ee,{})})})},ae=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,242)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),n(e),i(e)}))};a(226);r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(te,{})}),document.getElementById("root")),ae()},50:function(e,t,a){},67:function(e,t,a){}},[[227,1,2]]]);
//# sourceMappingURL=main.a192812b.chunk.js.map