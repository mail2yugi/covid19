(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{198:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(31),c=a.n(r),o=(a(85),a(13)),s=(a(86),a(48)),i=a(79),d=a(76),u=a(78),m=a(34),h=function(e){return l.a.createElement("div",{className:"header-bar"},l.a.createElement(s.a,{bg:"dark",variant:"dark"},l.a.createElement(s.a.Brand,{href:"#home"},"Covid19 Update"),l.a.createElement(i.a,{className:"mr-auto"}),l.a.createElement(u.a,{inline:!0},l.a.createElement(m.a,{sizetype:"text",value:e.country3code,placeholder:"Country Code",className:"mr-sm-2",onChange:function(t){t.target.value.length<=3?e.setCountry3code(t.target.value.toUpperCase()):0===t.target.value.length&&e.setCountry3code(t.target.value)}}),l.a.createElement(d.a,{variant:"outline-info",onClick:function(){alert("hi")},disabled:3!==e.country3code.length},"Fetch Details"))))},y=a(7),b=a(23),p={labels:[],datasets:[{fill:!0,backgroundColor:"#9C27B0",borderColor:"#9C27B0",borderWidth:1,lineTension:.5,data:[]}]},v=function(e){var t=Object(n.useState)(p),a=Object(o.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(p),i=Object(o.a)(s,2),d=i[0],u=i[1],m=Object(n.useState)(p),h=Object(o.a)(m,2),v=h[0],E=h[1],f=Object(n.useState)(p),g=Object(o.a)(f,2),C=g[0],D=g[1];return Object(n.useEffect)((function(){if(e.countrytDtls){var t=[],a=[],n=[],l=[],r=[];Object.keys(e.countrytDtls).forEach((function(c){t.push(c),a.push(e.countrytDtls[c].confirmed),n.push(e.countrytDtls[c].deaths),l.push(e.countrytDtls[c].recovered),r.push(+e.countrytDtls[c].confirmed-e.countrytDtls[c].deaths-e.countrytDtls[c].recovered)})),c({labels:t,datasets:[{fill:!0,backgroundColor:"#9C27B0",borderColor:"#9C27B0",borderWidth:1,lineTension:.5,data:a}]}),u({labels:t,datasets:[{fill:!0,backgroundColor:"#9C27B0",borderColor:"#9C27B0",borderWidth:1,lineTension:.5,data:n}]}),E({labels:t,datasets:[{fill:!0,backgroundColor:"#9C27B0",borderColor:"#9C27B0",borderWidth:1,lineTension:.5,data:l}]}),D({labels:t,datasets:[{fill:!0,backgroundColor:"#9C27B0",borderColor:"#9C27B0",borderWidth:1,lineTension:.5,data:r}]})}}),[e.countrytDtls]),l.a.createElement("div",{className:"specific-country"},l.a.createElement(y.a,null,l.a.createElement(y.a.Header,{as:"h5"},e.country3code),l.a.createElement(y.a.Body,null,e.latestDtls?l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3"},l.a.createElement(y.a,{style:{width:"18rem"},className:"bg-warning box-shadow"},l.a.createElement(y.a.Body,null,l.a.createElement(y.a.Title,null,"Confirmed"),l.a.createElement(y.a.Text,{className:"count confirmed"},e.latestDtls.confirmed),l.a.createElement("div",{id:"confirmChart"},l.a.createElement(b.a,{data:r,options:{scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},legend:{display:!1,position:"right"}}}))))),l.a.createElement("div",{className:"col-3"},l.a.createElement(y.a,{style:{width:"18rem"},className:"bg-danger box-shadow"},l.a.createElement(y.a.Body,null,l.a.createElement(y.a.Title,null,"Death"),l.a.createElement(y.a.Text,{className:"count death"},e.latestDtls.deaths),l.a.createElement("div",{id:"deathChart"},l.a.createElement(b.a,{data:d,options:{legend:{display:!1,position:"right"},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]}}}))))),l.a.createElement("div",{className:"col-3"},l.a.createElement(y.a,{style:{width:"18rem"},className:"bg-success box-shadow"},l.a.createElement(y.a.Body,null,l.a.createElement(y.a.Title,null,"Recovered"),l.a.createElement(y.a.Text,{className:"count recover"},e.latestDtls.recovered),l.a.createElement("div",{id:"recoverChart"},l.a.createElement(b.a,{data:v,options:{legend:{display:!1,position:"right"},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]}}}))))),l.a.createElement("div",{className:"col-3"},l.a.createElement(y.a,{style:{width:"18rem"},className:"bg-secondary box-shadow"},l.a.createElement(y.a.Body,null,l.a.createElement(y.a.Title,null,"Active"),l.a.createElement(y.a.Text,{className:"count active"},+e.latestDtls.confirmed-e.latestDtls.deaths-e.latestDtls.recovered),l.a.createElement("div",{id:"activeChart"},l.a.createElement(b.a,{data:C,options:{legend:{display:!1,position:"right"},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]}}})))))):null)))},E=a(37),f=a.n(E),g={getSpecifiedCountryLatestDetails:function(e){var t=new Date;t.setDate(t.getDate()-1);var a="".concat(t.getFullYear(),"-0").concat(t.getMonth()+1,"-").concat(t.getDate()),n="https://covidapi.info/api/v1/country/".concat(e,"/").concat(a);return f()(n)},getSpecifiedCountryDetails:function(e){var t="https://covidapi.info/api/v1/country/".concat(e);return f()(t)},getGlobalDetails:function(e){var t="https://covidapi.info/api/v1/country/".concat(e);return f()(t)}},C=function(e){var t=Object(n.useState)("IND"),a=Object(o.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(null),i=Object(o.a)(s,2),d=i[0],u=i[1],m=Object(n.useState)(null),y=Object(o.a)(m,2),b=y[0],p=y[1];return Object(n.useEffect)((function(){g.getSpecifiedCountryLatestDetails(r).then((function(e){e.data.result&&Object.keys(e.data.result).forEach((function(t){return u(e.data.result[t])}))})),g.getSpecifiedCountryDetails(r).then((function(e){e.data.result&&p(e.data.result)}))}),[r]),l.a.createElement("div",{className:"App"},l.a.createElement(h,{setCountry3code:c,country3code:r}),l.a.createElement(v,{latestDtls:d,countrytDtls:b,country3code:r}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,t,a){e.exports=a(198)},85:function(e,t,a){},86:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.dc8e2041.chunk.js.map