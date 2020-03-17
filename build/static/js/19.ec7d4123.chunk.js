(window.webpackJsonpsite=window.webpackJsonpsite||[]).push([[19],{197:function(e,t,n){"use strict";n(198);var a=n(199),r=n(210),c=n.n(r);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("GET"===t){var a="";return Object.keys(n).forEach((function(e){a+=e+"="+n[e]+"&"})),a&&(e=e+"?"+(a=a.substring(0,a.length-1))),c.a.get(e)}if("POST"===t)return c.a.post(e,n)}n.d(t,"l",(function(){return u})),n.d(t,"k",(function(){return d})),n.d(t,"d",(function(){return s})),n.d(t,"n",(function(){return f})),n.d(t,"f",(function(){return m})),n.d(t,"j",(function(){return b})),n.d(t,"c",(function(){return v})),n.d(t,"i",(function(){return h})),n.d(t,"b",(function(){return p})),n.d(t,"m",(function(){return C})),n.d(t,"e",(function(){return g})),n.d(t,"g",(function(){return k})),n.d(t,"a",(function(){return E})),n.d(t,"h",(function(){return O}));var i=localStorage.getItem("confirm"),l="\u5bf9\u4e0d\u8d77\uff0c\u60a8\u6ca1\u6709\u6743\u9650",u=function(e){return o("/get-total","GET")},d=function(e){return o("/get-todos","GET")},s=function(e){if("0913"===i)return o("/add-todos","POST",e);a.a.error(l)},f=function(e){return o("/modify-todos","POST",e)},m=function(e){return o("/del-todos","POST",e)},b=function(e){return o("/get-foot-print","GET")},v=function(e){if("0913"===i)return o("/add-foot-print","POST",e);a.a.error(l)},h=function(e){return o("/get-diary","GET")},p=function(e){if("0913"===i)return o("/add-diary","POST",e);a.a.error(l)},C=function(e){return o("/get-url","GET")},g=function(e){if("0913"===i)return o("/add-url","POST",e);a.a.error(l)},k=function(e){return o("/get-blog","GET",e)},E=function(e){if("0913"===i)return o("/add-blog","POST",e);a.a.error(l)},O=function(e){return o("/get-blog-detail","GET",e)}},857:function(e,t,n){},881:function(e,t,n){"use strict";n.r(t);n(207);var a=n(206),r=(n(215),n(217)),c=(n(118),n(17)),o=(n(117),n(19)),i=(n(218),n(224)),l=(n(855),n(874)),u=n(214),d=n(223),s=(n(198),n(199)),f=n(875),m=n(0),b=n.n(m),v=n(197);n(857);t.default=function(){var e=Object(m.useState)([]),t=Object(f.a)(e,2),n=t[0],h=t[1];Object(m.useEffect)((function(){_()}),[]);var p=Object(m.useState)(""),C=Object(f.a)(p,2),g=C[0],k=C[1],E=Object(m.useState)(),O=Object(f.a)(E,2),j=O[0],y=O[1],A=Object(m.useState)(),T=Object(f.a)(A,2),S=T[0],N=T[1],x=Object(m.useState)("All"),w=Object(f.a)(x,2),G=w[0],P=w[1],_=function(){Object(v.k)({}).then((function(e){if(e.data&&e.data.success){h(e.data.data);var t=e.data.data.every((function(e){return!0===e.isChecked}));y(!!t),F(e.data.data)}else s.a.error("\u6570\u636e\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u67e5\u770b\u7f51\u7edc\uff01")}))},F=function(e){var t=e.reduce((function(e,t){return t.isChecked?e:e+1}),0);N(t),y(0===t)},z=function(e){var t=e.target.id,a=e.target.checked;Object(v.n)({type:!1,_id:t,isChecked:a}).then((function(e){if(e.data&&e.data.success){var r=Object(d.a)(n).map((function(e){return e._id===t?Object(u.a)({},e,{isChecked:a}):e}));h(r),F(n)}else s.a.error("\u6570\u636e\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\uff01")}))},B=function(e){var t=e.target.dataset.id;Object(v.f)({_id:t,type:!1}).then((function(e){if(e.data&&e.data.success){var a=n.filter((function(e){return e._id!==t}));h(a)}else s.a.error("\u6570\u636e\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\uff01")}))},J=function(e){switch(e){case"All":P("All");break;case"Active":P("Active");break;case"Completed":P("Completed")}};return b.a.createElement("div",{className:"todos-container"},b.a.createElement("div",{className:"header"},b.a.createElement(r.a,{value:g,onChange:function(e){k(e.target.value)},placeholder:"What needs to be done?"}),b.a.createElement(a.a,{className:"btn",onClick:function(){var e=g.trim();""===e?s.a.warn("\u8bf7\u8f93\u5165\u4ee3\u529e\u4efb\u52a1"):Object(v.d)({content:e}).then((function(e){e.data&&e.data.success?_():s.a.error("\u6570\u636e\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u67e5\u770b\u7f51\u7edc\uff01")}))},type:"primary"},"Add")),b.a.createElement("div",{className:"center"},b.a.createElement(l.a,{checked:!!j,onClick:function(){j?Object(v.n)({type:!0,check:!1}).then((function(e){if(e.data&&e.data.success){var t=Object(d.a)(n).map((function(e){return Object(u.a)({},e,{isChecked:!1})}));h(t),y(!1)}else s.a.error("\u6570\u636e\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\uff01")})):Object(v.n)({type:!0,check:!0}).then((function(e){if(e.data&&e.data.success){var t=Object(d.a)(n).map((function(e){return e.isChecked?e:Object(u.a)({},e,{isChecked:!0})}));h(t),y(!0)}else s.a.error("\u6570\u636e\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\uff01")}))}}),b.a.createElement("span",{className:"ml"}," ",b.a.createElement("span",{className:"left"},S)," items left"),b.a.createElement("div",{style:"All"===G?{color:"#1CACF4",boxSizing:"border-box",borderBottom:"3px solid #1CACF4"}:{},onClick:function(){return J("All")},className:"all ml"},"All"),b.a.createElement("div",{style:"Active"===G?{color:"#1CACF4",boxSizing:"border-box",borderBottom:"3px solid #1CACF4"}:{},onClick:function(){return J("Active")},className:"active ml"},"Active"),b.a.createElement("div",{style:"Completed"===G?{color:"#1CACF4",boxSizing:"border-box",borderBottom:"3px solid #1CACF4"}:{},onClick:function(){return J("Completed")},className:"completed ml"},"Completed"),b.a.createElement("span",{className:"clear ml",onClick:function(){Object(v.f)({type:!0}).then((function(e){if(e.data&&e.data.success){var t=n.filter((function(e){return!e.isChecked}));h(t)}else s.a.error("\u6570\u636e\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\uff01")}))}},b.a.createElement(i.a,{color:"blue"},"Clear Completed"))),b.a.createElement((function(e){var t=e.value,n=["magenta","gold","cyan","volcano","blue","geekblue","orange","red","green","purple"],a=[];switch(G){case"Active":a=t.filter((function(e){return!e.isChecked}));break;case"Completed":a=t.filter((function(e){return!!e.isChecked}));break;default:a=t}return F(a),b.a.createElement("div",{className:"list"},a.length>0?a.map((function(e,t){var a=n[t%10];return b.a.createElement("div",{className:"item",key:e._id},b.a.createElement(l.a,{style:{float:"left"},id:e._id,checked:e.isChecked,onClick:z}),b.a.createElement("div",{className:"block"},b.a.createElement(i.a,{color:a},b.a.createElement("div",{className:"todo",style:e.isChecked?{textDecoration:"line-through"}:{}},t+1+". "+e.content)),b.a.createElement("div",{className:"time"},e.time)),b.a.createElement("div",{style:{float:"right"},"data-id":e._id,onClick:B},b.a.createElement("span",{style:{pointerEvents:"none",color:"gray"}},b.a.createElement(o.a,{type:"delete"}))))})):b.a.createElement(c.a,{description:"\u6682\u65e0\u6570\u636e",style:{color:"#fff",marginTop:"20vh"}}))}),{value:n}))}}}]);