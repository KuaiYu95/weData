(window.webpackJsonpsite=window.webpackJsonpsite||[]).push([[5],{123:function(e,t,a){e.exports=a(190)},139:function(e,t,a){},189:function(e,t,a){},190:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(2),r=a.n(o),i=a(45),c=a(25),s=(a(191),a(87)),m=(a(117),a(19)),d=a(51),p=a(52),u=a(54),h=a(53),y=a(55),E=(a(131),a(41)),f=(a(118),a(17)),g=a(26),v=a.n(g);function b(){return l.a.createElement("div",{className:"loading"},l.a.createElement("div",{className:"icon"}))}var k=v()({loader:function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(10)]).then(a.bind(null,883))},loading:b}),w=v()({loader:function(){return Promise.all([a.e(0),a.e(1),a.e(3),a.e(12),a.e(16)]).then(a.bind(null,878))},loading:b}),S=v()({loader:function(){return Promise.all([a.e(0),a.e(2),a.e(4),a.e(7),a.e(15)]).then(a.bind(null,885))},loading:b}),j=v()({loader:function(){return Promise.all([a.e(0),a.e(1),a.e(3),a.e(4),a.e(9)]).then(a.bind(null,886))},loading:b}),O=v()({loader:function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(14),a.e(17)]).then(a.bind(null,880))},loading:b}),C=v()({loader:function(){return Promise.all([a.e(0),a.e(1),a.e(13),a.e(19)]).then(a.bind(null,881))},loading:b}),I=v()({loader:function(){return Promise.all([a.e(0),a.e(1),a.e(11),a.e(18)]).then(a.bind(null,882))},loading:b}),P=function(e){function t(){return Object(d.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(p.a)(t,[{key:"renderEmpty",value:function(){return l.a.createElement(f.a,{description:"\u5bf9\u4e0d\u8d77\uff0c\u60a8\u6ca1\u6709\u8bbf\u95ee\u6743\u9650",style:{color:"#fff",marginTop:"30vh"}})}},{key:"renderSpace",value:function(){return l.a.createElement(f.a,{description:"\u5bf9\u4e0d\u8d77\uff0c\u6ca1\u627e\u5230\u4f60\u60f3\u8981\u7684\u9875\u9762",style:{color:"#fff",marginTop:"30vh"}})}},{key:"render",value:function(){var e="0913"===localStorage.getItem("confirm");return l.a.createElement(c.c,null,l.a.createElement(c.a,{path:"/blog",component:w}),l.a.createElement(c.a,{path:"/post",component:e?j:this.renderEmpty}),l.a.createElement(c.a,{path:"/blogdetail/id:id",component:S}),l.a.createElement(c.a,{path:"/diary",component:e?O:this.renderEmpty}),l.a.createElement(c.a,{path:"/footprint",component:e?I:this.renderEmpty}),l.a.createElement(c.a,{path:"/picturewall",component:this.renderEmpty}),l.a.createElement(c.a,{path:"/todos",component:C}),l.a.createElement(c.a,{path:"/message",component:this.renderEmpty}),l.a.createElement(c.a,{path:"/user",component:k}),l.a.createElement(c.a,{path:"/",component:this.renderSpace}))}}]),t}(n.Component),K=(a(139),E.a.Header),N=E.a.Content,x=E.a.Sider,W=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).pathname="",a.state={collapsed:!0,selectedKeys:""},a.onCollapse=function(e){a.setState({collapsed:e})},a.handleClick=function(e){var t=e.selectedKeys;a.setState({selectedKeys:t[0]})},a}return Object(y.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){var e=window.location.pathname.slice(1),t=localStorage.getItem("pathname");""===e&&null===t?(this.pathname="user",window.location.pathname="/user",localStorage.setItem("pathname","user")):e!==t?(e?(this.pathname=e,localStorage.setItem("pathname",e)):t&&(this.pathname=t,localStorage.setItem("pathname",t)),window.location.pathname="/"+this.pathname):this.setState({selectedKeys:t})}},{key:"render",value:function(){var e=this.state,t=e.collapsed,a=e.selectedKeys,n=B[a];return l.a.createElement(E.a,{style:{height:"100vh"}},l.a.createElement(x,{collapsible:!0,collapsed:t,onCollapse:this.onCollapse,className:"ant-layout-sider-light"},l.a.createElement("div",{className:"logo"},"YYJ"),l.a.createElement(s.a,{defaultSelectedKeys:[a],mode:"inline",onSelect:this.handleClick},J.map((function(e){return l.a.createElement(s.a.Item,{key:e.key,onClick:function(){return localStorage.setItem("pathname",e.key)}},l.a.createElement(i.b,{to:"/"+e.key},l.a.createElement(m.a,{type:e.type}),l.a.createElement("span",null,e.title)))})))),l.a.createElement(E.a,null,l.a.createElement(K,{id:"header-title",className:"ky-header"},n),l.a.createElement(N,{style:{margin:"0 16px"}},l.a.createElement("div",{className:"content",style:{height:"calc(100vh - 96px)",margin:"16px 0"}},l.a.createElement("div",{id:"stars"}),l.a.createElement("div",{id:"stars2"}),l.a.createElement("div",{id:"stars3"}),l.a.createElement(P,null)))))}}]),t}(n.Component),J=[{key:"user",type:"user",title:"\u4e3b\u9875"},{key:"blog",type:"file",title:"\u535a\u5ba2"},{key:"diary",type:"read",title:"\u65e5\u8bb0"},{key:"footprint",type:"flag",title:"\u8db3\u8ff9"},{key:"picturewall",type:"picture",title:"\u7167\u7247\u5899"},{key:"todos",type:"unordered-list",title:"\u5f85\u529e\u4e8b\u9879"},{key:"message",type:"mail",title:"\u7559\u8a00\u677f"}],B={user:"\u4e3b\u9875",blog:"\u535a\u5ba2",diary:"\u65e5\u8bb0",footPrint:"\u8db3\u8ff9",todos:"\u5f85\u529e\u4e8b\u9879",pictureWall:"\u7167\u7247\u5899",message:"\u7559\u8a00\u677f"};a(189),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(i.a,null,l.a.createElement(l.a.Suspense,{fallback:l.a.createElement("div",null,"loading...")},l.a.createElement(c.a,{path:"/",component:W}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[123,6,8]]]);
//# sourceMappingURL=main.65813667.chunk.js.map