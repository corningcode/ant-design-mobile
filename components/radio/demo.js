webpackJsonp([17],{9:function(n,t,a){"use strict";a(15),a(14)},14:function(n,t){},15:function(n,t){},17:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}t.__esModule=!0;var s=a(23),o=e(s),p=a(22),u=e(p);t["default"]=function(){function n(n,t){var a=[],e=!0,s=!1,o=void 0;try{for(var p,c=(0,u["default"])(n);!(e=(p=c.next()).done)&&(a.push(p.value),!t||a.length!==t);e=!0);}catch(l){s=!0,o=l}finally{try{!e&&c["return"]&&c["return"]()}finally{if(s)throw o}}return a}return function(t,a){if(Array.isArray(t))return t;if((0,o["default"])(Object(t)))return n(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},18:function(n,t){"use strict";function a(n,t){var a={},e={};return Object.keys(n).forEach(function(s){t.indexOf(s)!==-1?a[s]=n[s]:e[s]=n[s]}),[a,e]}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a,n.exports=t["default"]},20:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}function s(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{myName:"TouchableFeedbackComponent"},a=c["default"].createClass({displayName:"TouchableFeedbackComponent",statics:t,getDefaultProps:function(){return{activeStyle:{}}},getInitialState:function(){return{touchFeedback:!1}},onTouchStart:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onTouchEnd:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},onTouchCancel:function(n){this.props.onTouchCancel&&this.props.onTouchCancel(n),this.setTouchFeedbackState(!1)},onMouseDown:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onMouseUp:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},setTouchFeedbackState:function(n){this.setState({touchFeedback:n})},render:function(){var t={};return this.props.activeStyle&&(t=l?{onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel}:{onMouseDown:this.onMouseDown,onMouseUp:this.state.touchFeedback?this.onMouseUp:void 0,onMouseLeave:this.state.touchFeedback?this.onMouseUp:void 0}),c["default"].createElement(n,(0,p["default"])({},this.props,{touchFeedback:this.state.touchFeedback},t))}});return a}Object.defineProperty(t,"__esModule",{value:!0});var o=a(7),p=e(o);t["default"]=s;var u=a(1),c=e(u),l="undefined"!=typeof window&&"ontouchstart"in window;n.exports=t["default"]},22:function(n,t,a){n.exports={"default":a(24),__esModule:!0}},23:function(n,t,a){n.exports={"default":a(25),__esModule:!0}},24:function(n,t,a){a(21),a(19),n.exports=a(26)},25:function(n,t,a){a(21),a(19),n.exports=a(27)},26:function(n,t,a){var e=a(33),s=a(38);n.exports=a(16).getIterator=function(n){var t=s(n);if("function"!=typeof t)throw TypeError(n+" is not iterable!");return e(t.call(n))}},27:function(n,t,a){var e=a(47),s=a(28)("iterator"),o=a(34);n.exports=a(16).isIterable=function(n){var t=Object(n);return void 0!==t[s]||"@@iterator"in t||o.hasOwnProperty(e(t))}},30:function(n,t,a){"use strict";a(9),a(41)},32:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var s=a(8),o=e(s),p=a(4),u=e(p),c=a(6),l=e(c),r=a(5),i=e(r),d=a(1),f=e(d),k=a(40),h=e(k),m=a(3),y=e(m),v=function(n){function t(){return(0,u["default"])(this,t),(0,l["default"])(this,n.apply(this,arguments))}return(0,i["default"])(t,n),t.prototype.render=function(){var n,t=this.props,a=t.prefixCls,e=t.children,s=t.className,p=t.style,u=t.renderHeader,c=t.renderFooter,l=(0,y["default"])((n={},(0,o["default"])(n,a,!0),(0,o["default"])(n,s,s),n));return f["default"].createElement("div",{className:l,style:p},u?f["default"].createElement("div",{className:a+"-header"},u()):null,e?f["default"].createElement("div",{className:a+"-body"},e):null,c?f["default"].createElement("div",{className:a+"-footer"},c()):null)},t}(f["default"].Component);t["default"]=v,v.Item=h["default"],v.defaultProps={prefixCls:"am-list"},n.exports=t["default"]},40:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t.Brief=void 0;var s=a(7),o=e(s),p=a(8),u=e(p),c=a(17),l=e(c),r=a(4),i=e(r),d=a(6),f=e(d),k=a(5),h=e(k),m=a(1),y=e(m),v=a(3),g=e(v),b=a(12),C=e(b),x=a(18),w=e(x),j=a(20),P=e(j),E=t.Brief=function(n){function t(){return(0,i["default"])(this,t),(0,f["default"])(this,n.apply(this,arguments))}return(0,h["default"])(t,n),t.prototype.render=function(){return y["default"].createElement("div",{className:"am-list-brief",style:this.props.style},this.props.children)},t}(y["default"].Component),T=function(n){function t(){return(0,i["default"])(this,t),(0,f["default"])(this,n.apply(this,arguments))}return(0,h["default"])(t,n),t.prototype.render=function(){var n,t,a,e=(0,w["default"])(this.props,["prefixCls","className","touchFeedback","activeStyle","error","align","wrap","children","multipleLine","thumb","extra","arrow"]),s=(0,l["default"])(e,2),p=s[0],c=p.prefixCls,r=p.className,i=p.touchFeedback,d=p.activeStyle,f=p.error,k=p.align,h=p.wrap,m=p.children,v=p.multipleLine,b=p.thumb,x=p.extra,j=p.arrow,P=void 0===j?"":j,E=s[1],T=(n={},(0,u["default"])(n,r,r),(0,u["default"])(n,c+"-item",!0),(0,u["default"])(n,c+"-item-error",f),(0,u["default"])(n,c+"-item-top","top"===k),(0,u["default"])(n,c+"-item-middle","middle"===k),(0,u["default"])(n,c+"-item-bottom","bottom"===k),n),_=(0,C["default"])({},this.props.style);i&&(_=(0,C["default"])(_,d),T[c+"-item-hover"]=!0);var O=(0,g["default"])((t={},(0,u["default"])(t,c+"-line",!0),(0,u["default"])(t,c+"-line-multiple",v),(0,u["default"])(t,c+"-line-wrap",h),t)),N=(0,g["default"])((a={},(0,u["default"])(a,c+"-arrow",!0),(0,u["default"])(a,c+"-arrow-horizontal","horizontal"===P),(0,u["default"])(a,c+"-arrow-vertical","down"===P||"up"===P),(0,u["default"])(a,c+"-arrow-vertical-up","up"===P),a));return y["default"].createElement("div",(0,o["default"])({},E,{className:(0,g["default"])(T),style:_}),b?y["default"].createElement("div",{className:c+"-thumb"},"string"==typeof b?y["default"].createElement("img",{src:b}):b):null,y["default"].createElement("div",{className:O},m?y["default"].createElement("div",{className:c+"-content"},m):null,x?y["default"].createElement("div",{className:c+"-extra"},x):null,P?y["default"].createElement("div",{className:N}):null))},t}(y["default"].Component);T.defaultProps={prefixCls:"am-list",align:"middle",error:!1,multipleLine:!1,wrap:!1};var _=(0,P["default"])(T,{myName:"ListItem",Brief:E});t["default"]=_},41:function(n,t){},61:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(64),o=e(s),p=a(65),u=e(p);o["default"].Item=u["default"],t["default"]=o["default"],n.exports=t["default"]},62:function(n,t,a){"use strict";a(9),a(67)},64:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var s=a(8),o=e(s),p=a(4),u=e(p),c=a(6),l=e(c),r=a(5),i=e(r),d=a(1),f=e(d),k=a(3),h=e(k),m=function(n){function t(){return(0,u["default"])(this,t),(0,l["default"])(this,n.apply(this,arguments))}return(0,i["default"])(t,n),t.prototype.render=function(){var n,t=this.props,a=t.direction,e=t.wrap,s=t.justify,p=t.align,u=t.alignContent,c=t.className,l=t.children,r=t.prefixCls,i=t.style,d=t.onClick,k=(0,h["default"])((n={},(0,o["default"])(n,r,!0),(0,o["default"])(n,r+"-dir-row","row"===a),(0,o["default"])(n,r+"-dir-row-reverse","row-reverse"===a),(0,o["default"])(n,r+"-dir-column","column"===a),(0,o["default"])(n,r+"-dir-column-reverse","column-reverse"===a),(0,o["default"])(n,r+"-nowrap","nowrap"===e),(0,o["default"])(n,r+"-wrap","wrap"===e),(0,o["default"])(n,r+"-wrap-reverse","wrap-reverse"===e),(0,o["default"])(n,r+"-justify-start","start"===s),(0,o["default"])(n,r+"-justify-end","end"===s),(0,o["default"])(n,r+"-justify-center","center"===s),(0,o["default"])(n,r+"-justify-between","between"===s),(0,o["default"])(n,r+"-justify-around","around"===s),(0,o["default"])(n,r+"-align-top","top"===p||"start"===p),(0,o["default"])(n,r+"-align-middle","middle"===p||"center"===p),(0,o["default"])(n,r+"-align-bottom","bottom"===p||"end"===p),(0,o["default"])(n,r+"-align-baseline","baseline"===p),(0,o["default"])(n,r+"-align-stretch","stretch"===p),(0,o["default"])(n,r+"-align-content-start","start"===u),(0,o["default"])(n,r+"-align-content-end","end"===u),(0,o["default"])(n,r+"-align-content-center","center"===u),(0,o["default"])(n,r+"-align-content-between","between"===u),(0,o["default"])(n,r+"-align-content-around","around"===u),(0,o["default"])(n,r+"-align-content-stretch","stretch"===u),(0,o["default"])(n,c,c),n));return f["default"].createElement("div",{className:k,style:i,onClick:d},l)},t}(f["default"].Component);t["default"]=m,m.defaultProps={prefixCls:"am-flexbox",align:"center",onClick:function(){}},n.exports=t["default"]},65:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var s=a(8),o=e(s),p=a(4),u=e(p),c=a(6),l=e(c),r=a(5),i=e(r),d=a(1),f=e(d),k=a(3),h=e(k),m=function(n){function t(){return(0,u["default"])(this,t),(0,l["default"])(this,n.apply(this,arguments))}return(0,i["default"])(t,n),t.prototype.render=function(){var n,t=this.props,a=t.children,e=t.className,s=t.prefixCls,p=t.style,u=t.onClick,c=(0,h["default"])((n={},(0,o["default"])(n,s+"-item",!0),(0,o["default"])(n,e,e),n));return f["default"].createElement("div",{className:c,style:p,onClick:u},a)},t}(f["default"].Component);t["default"]=m,m.defaultProps={prefixCls:"am-flexbox"},n.exports=t["default"]},67:function(n,t){},86:function(n,t,a){"use strict";var e=a(12);n.exports=function(n,t){for(var a=e({},n),s=0;s<t.length;s++){var o=t[s];delete a[o]}return a}},144:function(n,t,a){"use strict";var e=a(194);n.exports=function(n,t,a,s){var o=a?a.call(s,n,t):void 0;if(void 0!==o)return!!o;if(n===t)return!0;if("object"!=typeof n||null===n||"object"!=typeof t||null===t)return!1;var p=e(n),u=e(t),c=p.length;if(c!==u.length)return!1;s=s||null;for(var l=Object.prototype.hasOwnProperty.bind(t),r=0;r<c;r++){var i=p[r];if(!l(i))return!1;var d=n[i],f=t[i],k=a?a.call(s,d,f,i):void 0;if(k===!1||void 0===k&&d!==f)return!1}return!0}},191:function(n,t){function a(n){return!!n&&"object"==typeof n}function e(n,t){var a=null==n?void 0:n[t];return p(a)?a:void 0}function s(n){return o(n)&&d.call(n)==u}function o(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function p(n){return null!=n&&(s(n)?f.test(r.call(n)):a(n)&&c.test(n))}var u="[object Function]",c=/^\[object .+?Constructor\]$/,l=Object.prototype,r=Function.prototype.toString,i=l.hasOwnProperty,d=l.toString,f=RegExp("^"+r.call(i).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");n.exports=e},192:function(n,t){function a(n){return s(n)&&k.call(n,"callee")&&(!m.call(n,"callee")||h.call(n)==r)}function e(n){return null!=n&&p(n.length)&&!o(n)}function s(n){return c(n)&&e(n)}function o(n){var t=u(n)?h.call(n):"";return t==i||t==d}function p(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=l}function u(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function c(n){return!!n&&"object"==typeof n}var l=9007199254740991,r="[object Arguments]",i="[object Function]",d="[object GeneratorFunction]",f=Object.prototype,k=f.hasOwnProperty,h=f.toString,m=f.propertyIsEnumerable;n.exports=a},193:function(n,t){function a(n){return!!n&&"object"==typeof n}function e(n,t){var a=null==n?void 0:n[t];return u(a)?a:void 0}function s(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=y}function o(n){return p(n)&&k.call(n)==l}function p(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function u(n){return null!=n&&(o(n)?h.test(d.call(n)):a(n)&&r.test(n))}var c="[object Array]",l="[object Function]",r=/^\[object .+?Constructor\]$/,i=Object.prototype,d=Function.prototype.toString,f=i.hasOwnProperty,k=i.toString,h=RegExp("^"+d.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),m=e(Array,"isArray"),y=9007199254740991,v=m||function(n){return a(n)&&s(n.length)&&k.call(n)==c};n.exports=v},194:function(n,t,a){function e(n){return function(t){return null==t?void 0:t[n]}}function s(n){return null!=n&&p(v(n))}function o(n,t){return n="number"==typeof n||f.test(n)?+n:-1,t=null==t?y:t,n>-1&&n%1==0&&n<t}function p(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=y}function u(n){for(var t=l(n),a=t.length,e=a&&n.length,s=!!e&&p(e)&&(d(n)||i(n)),u=-1,c=[];++u<a;){var r=t[u];(s&&o(r,e)||h.call(n,r))&&c.push(r)}return c}function c(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function l(n){if(null==n)return[];c(n)||(n=Object(n));var t=n.length;t=t&&p(t)&&(d(n)||i(n))&&t||0;for(var a=n.constructor,e=-1,s="function"==typeof a&&a.prototype===n,u=Array(t),l=t>0;++e<t;)u[e]=e+"";for(var r in n)l&&o(r,t)||"constructor"==r&&(s||!h.call(n,r))||u.push(r);return u}var r=a(191),i=a(192),d=a(193),f=/^\d+$/,k=Object.prototype,h=k.hasOwnProperty,m=r(Object,"keys"),y=9007199254740991,v=e("length"),g=m?function(n){var t=null==n?void 0:n.constructor;return"function"==typeof t&&t.prototype===n||"function"!=typeof n&&s(n)?u(n):c(n)?m(n):[]}:u;n.exports=g},256:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}function s(n,t){for(var a=Object.getOwnPropertyNames(t),e=0;e<a.length;e++){var s=a[e],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function o(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function p(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function u(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function c(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):s(n,t))}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(n[e]=a[e])}return n},r=a(1),i=e(r),d=a(264),f=e(d),k=a(3),h=e(k),m=function(n){function t(a){p(this,t);var e=u(this,n.call(this,a));e.handleFocus=function(n){e.setState({focus:!0}),e.props.onFocus(n)},e.handleBlur=function(n){e.setState({focus:!1}),e.props.onBlur(n)},e.handleChange=function(n){"checked"in e.props||e.setState({checked:n.target.checked}),e.props.onChange({target:l({},e.props,{checked:n.target.checked}),stopPropagation:function(){n.stopPropagation()},preventDefault:function(){n.preventDefault()}})};var s=!1;return s="checked"in a?a.checked:a.defaultChecked,e.state={checked:s,focus:!1},e}return c(t,n),t.prototype.componentWillReceiveProps=function(n){"checked"in n&&this.setState({checked:n.checked})},t.prototype.shouldComponentUpdate=function(){for(var n=arguments.length,t=Array(n),a=0;a<n;a++)t[a]=arguments[a];return f["default"].shouldComponentUpdate.apply(this,t)},t.prototype.render=function(){var n,t=l({},this.props);delete t.defaultChecked;var a=this.state,e=t.prefixCls,s=a.checked;"boolean"==typeof s&&(s=s?1:0);var p=(0,h["default"])((n={},o(n,t.className,!!t.className),o(n,e,1),o(n,e+"-checked",s),o(n,e+"-checked-"+s,!!s),o(n,e+"-focused",a.focus),o(n,e+"-disabled",t.disabled),n));return i["default"].createElement("span",{className:p,style:t.style},i["default"].createElement("span",{className:e+"-inner"}),i["default"].createElement("input",{name:t.name,type:t.type,readOnly:t.readOnly,disabled:t.disabled,tabIndex:t.tabIndex,className:e+"-input",checked:!!s,onClick:this.props.onClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onChange:this.handleChange}))},t}(i["default"].Component);m.propTypes={name:i["default"].PropTypes.string,prefixCls:i["default"].PropTypes.string,style:i["default"].PropTypes.object,type:i["default"].PropTypes.string,className:i["default"].PropTypes.string,defaultChecked:i["default"].PropTypes.oneOfType([i["default"].PropTypes.number,i["default"].PropTypes.bool]),checked:i["default"].PropTypes.oneOfType([i["default"].PropTypes.number,i["default"].PropTypes.bool]),onFocus:i["default"].PropTypes.func,onBlur:i["default"].PropTypes.func,onChange:i["default"].PropTypes.func,onClick:i["default"].PropTypes.func},m.defaultProps={prefixCls:"rc-checkbox",style:{},type:"checkbox",className:"",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){}},t["default"]=m,n.exports=t["default"]},257:function(n,t,a){"use strict";n.exports=a(256)},264:function(n,t,a){"use strict";function e(n,t,a){return!s(n.props,t)||!s(n.state,a)}var s=a(144),o={shouldComponentUpdate:function(n,t){return e(this,n,t)}};n.exports=o},274:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var s=a(7),o=e(s),p=a(8),u=e(p),c=a(4),l=e(c),r=a(6),i=e(r),d=a(5),f=e(d),k=a(1),h=e(k),m=a(257),y=e(m),v=a(86),g=e(v),b=a(3),C=e(b),x=function(n){function t(){return(0,l["default"])(this,t),(0,i["default"])(this,n.apply(this,arguments))}return(0,f["default"])(t,n),t.prototype.render=function(){var n,t=this.props,a=t.prefixCls,e=t.className,s=t.style,p=t.children,c=(0,C["default"])((n={},(0,u["default"])(n,e,!!e),(0,u["default"])(n,a+"-wrapper",!0),n)),l=h["default"].createElement("label",{className:c,style:s},h["default"].createElement(y["default"],(0,o["default"])({},(0,g["default"])(this.props,["className","style"]),{type:"radio"})),p?h["default"].createElement("span",null,p):null);return this.props.wrapLabel?l:h["default"].createElement(y["default"],(0,o["default"])({},this.props,{type:"radio"}))},t}(h["default"].Component);t["default"]=x,x.defaultProps={prefixCls:"am-radio",wrapLabel:!0},n.exports=t["default"]},326:function(n,t,a){"use strict";a(9),a(30),a(402)},402:function(n,t){},728:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}var s=(a(62),a(61)),o=e(s),p=(a(30),a(32)),u=e(p),c=(a(326),a(819)),l=e(c),r=a(1),i=e(r),d=a(2);e(d);n.exports={content:[],meta:{order:0,title:"\u793a\u4f8b",filename:"components/radio/demo/basic.md",id:"components-radio-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> List<span class="token punctuation" >,</span> Radio<span class="token punctuation" >,</span> Flex <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> RadioItem <span class="token operator" >=</span> Radio<span class="token punctuation" >.</span>RadioItem<span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Test <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      value<span class="token punctuation" >:</span> <span class="token number" >1</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onChange</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      value<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> <span class="token punctuation" >{</span> value <span class="token punctuation" >}</span> <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> data <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n      <span class="token punctuation" >{</span> value<span class="token punctuation" >:</span> <span class="token number" >0</span><span class="token punctuation" >,</span> label<span class="token punctuation" >:</span> <span class="token string" >\'\u535a\u58eb\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >{</span> value<span class="token punctuation" >:</span> <span class="token number" >1</span><span class="token punctuation" >,</span> label<span class="token punctuation" >:</span> <span class="token string" >\'\u672c\u79d1\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >{</span> value<span class="token punctuation" >:</span> <span class="token number" >2</span><span class="token punctuation" >,</span> label<span class="token punctuation" >:</span> <span class="token string" >\'\u9ad8\u4e2d\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List</span> <span class="token attr-name" >renderHeader</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token string" >\'RadioItem \u6f14\u793a\'</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token punctuation" >{</span>data<span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span>i <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>RadioItem</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>i<span class="token punctuation" >.</span>value<span class="token punctuation" >}</span></span> <span class="token attr-name" >checked</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>value <span class="token operator" >===</span> i<span class="token punctuation" >.</span>value<span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >onChange</span><span class="token punctuation" >(</span>i<span class="token punctuation" >.</span>value<span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n            <span class="token punctuation" >{</span>i<span class="token punctuation" >.</span>label<span class="token punctuation" >}</span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>RadioItem</span><span class="token punctuation" >></span></span>\n        <span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>RadioItem</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>disabled<span class="token punctuation" >"</span></span> <span class="token attr-name" >data-seed</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>logId<span class="token punctuation" >"</span></span> <span class="token attr-name" >disabled</span> <span class="token attr-name" >defaultChecked</span> <span class="token attr-name" >multipleLine</span><span class="token punctuation" >></span></span>\n          \u521d\u4e2d<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item.Brief</span><span class="token punctuation" >></span></span>\u8f85\u52a9\u6587\u5b57\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item.Brief</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>RadioItem</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> padding<span class="token punctuation" >:</span> <span class="token string" >\'0.3rem\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex.Item</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> padding<span class="token punctuation" >:</span> <span class="token string" >\'0.3rem 0\'</span><span class="token punctuation" >,</span> color<span class="token punctuation" >:</span> <span class="token string" >\'#888\'</span><span class="token punctuation" >,</span> flex<span class="token punctuation" >:</span> <span class="token string" >\'none\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>Radio \u6f14\u793a <span class="token punctuation" >(</span>\u81ea\u5b9a\u4e49\u6837\u5f0f<span class="token punctuation" >)</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex.Item</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Radio</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>my-radio<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879\u4e00<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Radio</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Radio</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>my-radio<span class="token punctuation" >"</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginLeft<span class="token punctuation" >:</span> <span class="token string" >\'0.1rem\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u9009\u9879\u4e8c<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Radio</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex.Item</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Test</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=l["default"].RadioItem,t=i["default"].createClass({displayName:"Test",getInitialState:function(){return{value:1}},onChange:function(n){this.setState({value:n})},render:function(){var t=this,a=this.state.value,e=[{value:0,label:"\u535a\u58eb"},{value:1,label:"\u672c\u79d1"},{value:2,label:"\u9ad8\u4e2d"}];return i["default"].createElement("div",null,i["default"].createElement(u["default"],{
renderHeader:function(){return"RadioItem \u6f14\u793a"}},e.map(function(e){return i["default"].createElement(n,{key:e.value,checked:a===e.value,onChange:function(){return t.onChange(e.value)}},e.label)}),i["default"].createElement(n,{key:"disabled","data-seed":"logId",disabled:!0,defaultChecked:!0,multipleLine:!0},"\u521d\u4e2d",i["default"].createElement(u["default"].Item.Brief,null,"\u8f85\u52a9\u6587\u5b57\u5185\u5bb9"))),i["default"].createElement(o["default"],{style:{padding:"0.3rem"}},i["default"].createElement(o["default"].Item,{style:{padding:"0.3rem 0",color:"#888",flex:"none"}},"Radio \u6f14\u793a (\u81ea\u5b9a\u4e49\u6837\u5f0f)"),i["default"].createElement(o["default"].Item,null,i["default"].createElement(l["default"],{className:"my-radio"},"\u9009\u9879\u4e00"),i["default"].createElement(l["default"],{className:"my-radio",style:{marginLeft:"0.1rem"}},"\u9009\u9879\u4e8c"))))}});return i["default"].createElement(t,null)},style:".my-radio .am-radio {\n  padding: 0.05rem;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  margin-right: 0.1rem;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.my-radio</span> <span class="token class" >.am-radio</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >padding</span><span class="token punctuation" >:</span> <span class="token number" >0.05</span>rem<span class="token punctuation" >;</span>\n  <span class="token property" >border</span><span class="token punctuation" >:</span> <span class="token number" >1</span>px solid <span class="token hexcode" >#ccc</span><span class="token punctuation" >;</span>\n  <span class="token property" >border-radius</span><span class="token punctuation" >:</span> <span class="token number" >50%</span><span class="token punctuation" >;</span>\n  <span class="token property" >margin-right</span><span class="token punctuation" >:</span> <span class="token number" >0.1</span>rem<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}},818:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}function s(){}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var o=a(7),p=e(o),u=a(8),c=e(u),l=a(4),r=e(l),i=a(6),d=e(i),f=a(5),k=e(f),h=a(1),m=e(h),y=a(3),v=e(y),g=a(32),b=e(g),C=a(274),x=e(C),w=a(86),j=e(w),P=b["default"].Item,E=function(n){function t(){return(0,r["default"])(this,t),(0,d["default"])(this,n.apply(this,arguments))}return(0,k["default"])(t,n),t.prototype.render=function(){var n,t=this,a=this.props,e=a.prefixCls,o=a.listPrefixCls,u=a.className,l=a.children,r=a.disabled,i=a.radioProps,d=void 0===i?{}:i,f=(0,v["default"])((n={},(0,c["default"])(n,e+"-item",!0),(0,c["default"])(n,e+"-item-disabled",r===!0),(0,c["default"])(n,u,u),n)),k=(0,j["default"])(this.props,["listPrefixCls","disabled","radioProps"]);r?delete k.onClick:k.onClick=k.onClick||s;var h={};return["name","defaultChecked","checked","onChange","disabled"].forEach(function(n){n in t.props&&(h[n]=t.props[n])}),m["default"].createElement(P,(0,p["default"])({},k,{prefixCls:o,className:f,extra:m["default"].createElement(x["default"],(0,p["default"])({},d,h))}),l)},t}(m["default"].Component);t["default"]=E,E.defaultProps={prefixCls:"am-radio",listPrefixCls:"am-list"},n.exports=t["default"]},819:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(274),o=e(s),p=a(818),u=e(p);o["default"].RadioItem=u["default"],t["default"]=o["default"],n.exports=t["default"]},891:function(n,t,a){n.exports={basic:a(728)}}});