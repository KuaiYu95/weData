(window.webpackJsonpsite=window.webpackJsonpsite||[]).push([[13],{272:function(e,t,n){},273:function(e,t,n){},459:function(e,t,n){"use strict";n.r(t);n(37),n(272);var o=n(0),r=n.n(o),i=n(59),c=n(34),a=n(3),l=n.n(a),u=n(30),s=n(120);function f(e,t){if("undefined"===typeof window)return 0;var n=t?"scrollTop":"scrollLeft",o=e===window,r=o?e[t?"pageYOffset":"pageXOffset"]:e[n];return o&&"number"!==typeof r&&(r=document.documentElement[n]),r}var p=n(33),v=n.n(p);function b(e,t,n,o){var r=n-t;return(e/=o/2)<1?r/2*e*e*e+t:r/2*((e-=2)*e*e+2)+t}function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e,t){return!t||"object"!==d(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(){return window}var E=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=h(this,w(t).call(this,e))).scrollToTop=function(e){var t=n.props,o=t.target,r=void 0===o?g:o,i=t.onClick;!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.getContainer,o=void 0===n?function(){return window}:n,r=t.callback,i=t.duration,c=void 0===i?450:i,a=o(),l=f(a,!0),u=Date.now(),s=function t(){var n=Date.now()-u,o=b(n>c?c:n,l,e,c);a===window?window.scrollTo(window.pageXOffset,o):a.scrollTop=o,n<c?v()(t):"function"===typeof r&&r()};v()(s)}(0,{getContainer:r}),"function"===typeof i&&i(e)},n.handleScroll=function(){var e=n.props,t=e.visibilityHeight,o=e.target,r=f((void 0===o?g:o)(),!0);n.setState({visible:r>t})},n.renderBackTop=function(e){var t=e.getPrefixCls,r=n.props,c=r.prefixCls,a=r.className,s=void 0===a?"":a,f=r.children,p=t("back-top",c),v=l()(p,s),b=o.createElement("div",{className:"".concat(p,"-content")},o.createElement("div",{className:"".concat(p,"-icon")})),d=Object(u.a)(n.props,["prefixCls","className","children","visibilityHeight","target","visible"]),m=("visible"in n.props?n.props.visible:n.state.visible)?o.createElement("div",y({},d,{className:v,onClick:n.scrollToTop}),f||b):null;return o.createElement(i.a,{component:"",transitionName:"fade"},m)},n.state={visible:!1},n}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){var e=this.props.target||g;this.scrollEvent=Object(c.a)(e(),"scroll",this.handleScroll),this.handleScroll()}},{key:"componentWillUnmount",value:function(){this.scrollEvent&&this.scrollEvent.remove()}},{key:"render",value:function(){return o.createElement(s.a,null,this.renderBackTop)}}])&&m(n.prototype,r),a&&m(n,a),t}(o.Component);E.defaultProps={visibilityHeight:400};n(122);var j=n(17),k=n(38),T=n(39),C=n(43),S=n(40),P=n(44);n(273);n.d(t,"default",(function(){return _}));var _=function(e){function t(){return Object(k.a)(this,t),Object(C.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){return r.a.createElement(E,{style:{bottom:200,right:60}},r.a.createElement("div",{className:"contain"},r.a.createElement("div",null,r.a.createElement(j.a,{type:"up"})),r.a.createElement("div",null,"\u56de"),r.a.createElement("div",null,"\u5230"),r.a.createElement("div",null,"\u9876"),r.a.createElement("div",null,"\u90e8")))}}]),t}(o.Component)}}]);
//# sourceMappingURL=13.5f1a6837.chunk.js.map