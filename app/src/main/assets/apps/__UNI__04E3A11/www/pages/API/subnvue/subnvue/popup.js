!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=566)}({0:function(t,e,n){"use strict";function r(t,e,n,r,o,i,s,u,a,p){var l,c="function"==typeof t?t.options:t;if(a){c.components||(c.components={});var d=Object.prototype.hasOwnProperty;for(var f in a)d.call(a,f)&&!d.call(c.components,f)&&(c.components[f]=a[f])}if(p&&((p.beforeCreate||(p.beforeCreate=[])).unshift((function(){this[p.__module]=this})),(c.mixins||(c.mixins=[])).push(p)),e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=l):o&&(l=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(c.functional){c._injectStyles=l;var _=c.render;c.render=function(t,e){return l.call(e),_(t,e)}}else{var g=c.beforeCreate;c.beforeCreate=g?[].concat(g,l):[l]}return{exports:t,options:c}}n.d(e,"a",(function(){return r}))},1:function(t,e){t.exports={}},155:function(t,e,n){"use strict";var r=n(156),o=n.n(r);e.default=o.a},156:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{title:"",content:"",lists:[]}},created:function(){for(var t=this,e=1;e<20;e++)this.lists.push("item"+e);uni.$on("page-popup",(function(e){t.title=e.title,t.content=e.content}))},beforeDestroy:function(){uni.$off("drawer-page")},methods:{sendMessage:function(){t();uni.$emit("popup-page",{title:"已读完!"})},handle:function(e,n){t();uni.$emit("popup-page",{type:"interactive",info:e+" 该元素被点击了!"})}}};e.default=n}).call(this,n(442).default)},157:function(t,e){t.exports={wrapper:{flexDirection:"column",justifyContent:"space-between",paddingTop:"10rpx",paddingRight:"15rpx",paddingBottom:"10rpx",paddingLeft:"15rpx",backgroundColor:"#F4F5F6",borderRadius:"4rpx"},title:{height:"100rpx",lineHeight:"100rpx",borderBottomStyle:"solid",borderBottomWidth:"1rpx",borderBottomColor:"#CBCBCB",flex:0,fontSize:"30rpx"},scroller:{height:"400rpx",paddingTop:"8rpx",paddingRight:"15rpx",paddingBottom:"8rpx",paddingLeft:"15rpx"},content:{color:"#555555",fontSize:"32rpx"},"message-wrapper":{flex:0,borderTopStyle:"solid",borderTopWidth:"1rpx",borderTopColor:"#CBCBCB",height:"80rpx",alignItems:"flex-end"},"send-message":{fontSize:"30rpx",lineHeight:"80rpx",color:"#00CE47",marginLeft:"20rpx"},cell:{marginTop:"10rpx",marginRight:"10rpx",marginBottom:"10rpx",marginLeft:"10rpx",paddingTop:"20rpx",paddingRight:0,paddingBottom:"20rpx",paddingLeft:0,top:"10rpx",alignItems:"center",justifyContent:"center",borderRadius:"10rpx",backgroundColor:"#5989B9"},text:{fontSize:"30rpx",textAlign:"center",color:"#FFFFFF"}}},367:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["wrapper"]},[n("u-text",{staticClass:["title"]},[t._v(t._s(t.title))]),n("scroller",{staticClass:["scroller"]},[n("div",[n("u-text",{staticClass:["content"]},[t._v(t._s(t.content))])]),t._m(0),t._l(t.lists,(function(e,r){return n("div",{key:r,staticClass:["cell"],on:{click:function(n){t.handle(e)}}},[n("u-text",{staticClass:["text"]},[t._v(t._s(e))])])}))],2),n("div",{staticClass:["message-wrapper"]},[n("u-text",{staticClass:["send-message"],on:{click:t.sendMessage}},[t._v("向页面发送消息")])])])},o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("u-text",{staticStyle:{color:"red",fontSize:"30rpx"}},[this._v("以下为 Popup 内部滚动示例：")])])}];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}))},442:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return uni.getSubNVueById(plus.webview.currentWebview().id)}},457:function(t,e,n){"use strict";n.r(e);var r=n(157),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e.default=o.a},566:function(t,e,n){"use strict";n.r(e);n(6);var r=n(73);r.default.mpType="page",r.default.route="pages/API/subnvue/subnvue/popup",r.default.el="#root",new Vue(r.default)},6:function(t,e,n){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(n(7).default,Vue.prototype.__$appStyle__)},7:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e.default=o.a},73:function(t,e,n){"use strict";var r=n(367),o=n(155),i=n(0);var s=Object(i.a)(o.default,r.b,r.c,!1,null,null,"6ad94574",!1,r.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(457).default,this.options.style):Object.assign(this.options.style,n(457).default)}).call(s),e.default=s.exports}});