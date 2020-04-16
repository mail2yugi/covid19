(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{198:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(30),r=a.n(c),o=(a(84),a(13)),s=(a(85),a(47)),i=a(78),u=a(75),d=a(77),m=a(33),h=function(e){return l.a.createElement("div",{className:"header-bar"},l.a.createElement(s.a,{bg:"dark",variant:"dark"},l.a.createElement(s.a.Brand,{href:"#home"},"Covid19 Update"),l.a.createElement(i.a,{className:"mr-auto"}),l.a.createElement(d.a,{inline:!0},l.a.createElement(m.a,{sizetype:"text",value:e.country3code,placeholder:"Country Code",className:"mr-sm-2",onChange:function(t){t.target.value.length<=3?e.setCountry3code(t.target.value.toUpperCase()):0===t.target.value.length&&e.setCountry3code(t.target.value)}}),l.a.createElement(u.a,{variant:"outline-info",onClick:function(){alert("hi")},disabled:3!==e.country3code.length},"Fetch Details"))))},b=a(7),f=(a(89),{labels:[],datasets:[{fill:!0,backgroundColor:"#9C27B0",borderColor:"#9C27B0",borderWidth:1,lineTension:.5,data:[]}]}),v=function(e){var t=Object(n.useState)(f),a=Object(o.a)(t,2),c=(a[0],a[1]),r=Object(n.useState)(f),s=Object(o.a)(r,2),i=(s[0],s[1]),u=Object(n.useState)(f),d=Object(o.a)(u,2),m=(d[0],d[1]),h=Object(n.useState)(f),v=Object(o.a)(h,2),E=(v[0],v[1]);return Object(n.useEffect)((function(){if(e.countrytDtls){var t=[],a=[],n=[],l=[],r=[];Object.keys(e.countrytDtls).forEach((function(c){t.push(c),a.push(e.countrytDtls[c].confirmed),n.push(e.countrytDtls[c].deaths),l.push(e.countrytDtls[c].recovered),r.push(+e.countrytDtls[c].confirmed-e.countrytDtls[c].deaths-e.countrytDtls[c].recovered)})),c({labels:t,datasets:[{fill:!0,backgroundColor:"#9C27B0",borderColor:"#9C27B0",borderWidth:1,lineTension:.5,data:a}]}),i({labels:t,datasets:[{fill:!0,backgroundColor:"#9C27B0",borderColor:"#9C27B0",borderWidth:1,lineTension:.5,data:n}]}),m({labels:t,datasets:[{fill:!0,backgroundColor:"#9C27B0",borderColor:"#9C27B0",borderWidth:1,lineTension:.5,data:l}]}),E({labels:t,datasets:[{fill:!0,backgroundColor:"#9C27B0",borderColor:"#9C27B0",borderWidth:1,lineTension:.5,data:r}]})}}),[e.countrytDtls]),l.a.createElement("div",{className:"specific-country"},l.a.createElement(b.a,null,l.a.createElement(b.a.Header,{as:"h5"},e.country3code),l.a.createElement(b.a.Body,null,e.latestDtls?l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3"},l.a.createElement(b.a,{style:{width:"18rem"},className:"box-shadow"},l.a.createElement(b.a.Body,null,l.a.createElement(b.a.Title,null,"Confirmed"),l.a.createElement(b.a.Text,{className:"count confirmed"},e.latestDtls.confirmed)))),l.a.createElement("div",{className:"col-3"},l.a.createElement(b.a,{style:{width:"18rem"},className:"box-shadow"},l.a.createElement(b.a.Body,null,l.a.createElement(b.a.Title,null,"Death"),l.a.createElement(b.a.Text,{className:"count death"},e.latestDtls.deaths)))),l.a.createElement("div",{className:"col-3"},l.a.createElement(b.a,{style:{width:"18rem"},className:"box-shadow"},l.a.createElement(b.a.Body,null,l.a.createElement(b.a.Title,null,"Recovered"),l.a.createElement(b.a.Text,{className:"count recover"},e.latestDtls.recovered)))),l.a.createElement("div",{className:"col-3"},l.a.createElement(b.a,{style:{width:"18rem"},className:"box-shadow"},l.a.createElement(b.a.Body,null,l.a.createElement(b.a.Title,null,"Active"),l.a.createElement(b.a.Text,{className:"count active"},+e.latestDtls.confirmed-e.latestDtls.deaths-e.latestDtls.recovered))))):null)))},E=a(36),y=a.n(E),C={getSpecifiedCountryLatestDetails:function(e){var t=new Date;t.setDate(t.getDate()-2);var a="".concat(t.getFullYear(),"-0").concat(t.getMonth()+1,"-").concat(t.getDate()),n="https://covidapi.info/api/v1/country/".concat(e,"/").concat(a);return y()(n)},getSpecifiedCountryDetails:function(e){var t="https://covidapi.info/api/v1/country/".concat(e);return y()(t)},getGlobalDetails:function(e){var t="https://covidapi.info/api/v1/country/".concat(e);return y()(t)}},p=function(e){var t=Object(n.useState)("IND"),a=Object(o.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(null),i=Object(o.a)(s,2),u=i[0],d=i[1],m=Object(n.useState)(null),b=Object(o.a)(m,2),f=b[0],E=b[1];return Object(n.useEffect)((function(){C.getSpecifiedCountryLatestDetails(c).then((function(e){e.data.result&&Object.keys(e.data.result).forEach((function(t){return d(e.data.result[t])}))})),C.getSpecifiedCountryDetails(c).then((function(e){e.data.result&&E(e.data.result)}))}),[c]),l.a.createElement("div",{className:"App"},l.a.createElement(h,{setCountry3code:r,country3code:c}),l.a.createElement(v,{latestDtls:u,countrytDtls:f,country3code:c}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,t,a){e.exports=a(198)},84:function(e,t,a){},85:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.9abc9234.chunk.js.map