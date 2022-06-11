(function(t){function e(e){for(var r,c,i=e[0],u=e[1],l=e[2],p=0,f=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);s&&s(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/vue-parking/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var s=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2c2a":function(t,e,n){"use strict";n("623a")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(t,e,n,a,o,c){var i=Object(r["o"])("Parking");return Object(r["k"])(),Object(r["c"])(i)}n("fb6a"),n("b0c0");Object(r["m"])("data-v-6f476216");var o={key:0},c=["href"],i=Object(r["f"])("span",{class:"link-spanner"},null,-1),u=[i],l={key:1},s=Object(r["f"])("h3",null,"Loading..",-1),p=[s];function f(t,e,n,a,i,s){var f=Object(r["o"])("dropdown");return Object(r["k"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("h2",null,Object(r["p"])(i.title),1),i.parkingList?(Object(r["k"])(),Object(r["e"])("div",o,[Object(r["f"])("p",null,[Object(r["h"])(f,{class:"my-dropdown-toggle",options:i.arrayOfObjects,selected:i.selectedArea,onUpdateOption:s.methodToRunOnSelect},null,8,["options","selected","onUpdateOption"]),Object(r["g"])(" updated: "+Object(r["p"])(i.parkingList[0].time),1)]),Object(r["f"])("ul",null,[(Object(r["k"])(!0),Object(r["e"])(r["a"],null,Object(r["n"])(i.parkingList.slice(0,11),(function(t){return Object(r["k"])(),Object(r["e"])("li",null,[Object(r["f"])("div",{class:Object(r["j"])(["slot",t.availability])},[Object(r["f"])("h3",null,Object(r["p"])(t.name),1),Object(r["f"])("a",{href:s.wazeURL(t.location)},u,8,c),Object(r["f"])("p",null,Object(r["p"])(t.status),1)],2)])})),256))])])):(Object(r["k"])(),Object(r["e"])("div",l,p))],64)}Object(r["l"])();var b=n("3835"),d=n("1da1"),h=(n("96cf"),n("4057"),n("4e82"),n("d3b7"),n("3ca3"),n("ddb0"),n("d81d"),n("7db0"),n("4de4"),n("3eed"),"אסותא"),O={lat:32.0885,lon:34.7799};function v(t){return t.Name===h?O:{lat:t.GPSLattitude,lon:t.GPSLongitude}}function j(t){var e=new Date(t),n=("0"+e.getHours()).slice(-2),r=("0"+e.getMinutes()).slice(-2);return n+":"+r}function m(t){switch(t){case"פנוי":return"free";case"מעט":return"almostFull";case"מלא":case"סגור":return"full"}return"NA"}function g(t,e){return Math.hypot(e.lat-t.lat,e.lon-t.lon)}var y="https://api.tel-aviv.gov.il/parking/stations",k="https://api.tel-aviv.gov.il/parking/StationsStatus";function w(t){return x.apply(this,arguments)}function x(){return x=Object(d["a"])(regeneratorRuntime.mark((function t(e){var n,r,a,o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([S(k),S(y)]);case 2:return n=t.sent,r=Object(b["a"])(n,2),a=r[0],o=r[1],c=a.map((function(t){var e={},n=o.find((function(e){return e.AhuzotCode===t.AhuzotCode}));return e.name=t.Name,e.time=j(t.LastUpdateFromDambach),e.status=t.InformationToShow,e.availability=m(t.InformationToShow),e.location=v(n),e})),c=c.filter((function(t){return"NA"!==t.availability})),P(c,e),t.abrupt("return",c);case 10:case"end":return t.stop()}}),t)}))),x.apply(this,arguments)}function P(t,e){t.sort((function(t,n){return g(e,t.location)>g(e,n.location)?1:-1}))}function S(t){return L.apply(this,arguments)}function L(){return L=Object(d["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=5,t.next=3,A(e,n);case 3:return r=t.sent,t.abrupt("return",r.json());case 5:case"end":return t.stop()}}),t)}))),L.apply(this,arguments)}var A=function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:if(r=t.sent,r.ok){t.next=10;break}if(console.log(r),1!==n){t.next=7;break}throw"can't fatch";case 7:return t.next=9,A(e,n-1);case 9:return t.abrupt("return",t.sent);case 10:return t.abrupt("return",r);case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();var R=n("d869"),T={name:"Parking",data:function(){return{title:"Parking To The People",parkingList:null,arrayOfObjects:[{name:"הצפון הישן",location:{lat:32.0873,lon:34.7737}},{name:"הצפון החדש",location:{lat:32.088825,lon:34.790115}},{name:"לב העיר",location:{lat:32.067596,lon:34.775948}},{name:"דרום העיר",location:{lat:32.055776,lon:34.768095}}],selectedArea:{name:"הצפון הישן",location:{lat:32.0873,lon:34.7737}}}},components:{dropdown:R["a"]},methods:{wazeURL:function(t){return"https://waze.com/ul?ll="+t.lat+","+t.lon+"&navigate=yes"},methodToRunOnSelect:function(t){this.selectedArea=t,P(this.parkingList,this.selectedArea.location)}},mounted:function(){var t=this;w(this.selectedArea.location).then((function(e){return t.parkingList=e})).catch((function(t){console.error("Error!"),console.log(t)}))}},_=(n("6a10"),n("d959")),M=n.n(_);const z=M()(T,[["render",f],["__scopeId","data-v-6f476216"]]);var U=z,G={name:"App",components:{Parking:U}};n("2c2a");const N=M()(G,[["render",a]]);var D=N,I=n("a584");Object(r["b"])(D).use(I["a"],{config:{id:"G-DBXTX64G9V"}}).mount("#app")},"623a":function(t,e,n){},"6a10":function(t,e,n){"use strict";n("b82a")},b82a:function(t,e,n){}});
//# sourceMappingURL=app.83bce692.js.map