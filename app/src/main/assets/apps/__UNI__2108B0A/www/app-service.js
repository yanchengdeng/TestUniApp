(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"0de9":function(e,t,n){"use strict";function r(e){var t=Object.prototype.toString.call(e);return t.substring(8,t.length-1)}function o(){return"string"===typeof __channelId__&&__channelId__}function i(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];console[e].apply(console,n)}function u(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=t.shift();if(o())return t.push(t.pop().replace("at ","uni-app:///")),console[i].apply(console,t);var u=t.map((function(e){var t=Object.prototype.toString.call(e).toLowerCase();if("[object object]"===t||"[object array]"===t)try{e="---BEGIN:JSON---"+JSON.stringify(e)+"---END:JSON---"}catch(o){e="[object object]"}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var n=r(e).toUpperCase();e="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+e+"---END:"+n+"---":String(e)}return e})),a="";if(u.length>1){var c=u.pop();a=u.join("---COMMA---"),0===c.indexOf(" at ")?a+=c:a+="---COMMA---"+c}else a=u[0];console[i](a)}n.r(t),n.d(t,"log",(function(){return i})),n.d(t,"default",(function(){return u}))},"1b09":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{nativeMsg:""}},onLoad:function(){var t=this;uni.onNativeEventReceive((function(n,r){e("log","接收到宿主App消息："+n+r," at pages/sample/send-event.vue:17"),t.nativeMsg="接收到宿主App消息 event："+n+" data: "+r}))},methods:{sendEvent:function(){var t=this;uni.sendNativeEvent("unimp-event",{msg:"unimp message!!!"},(function(n){e("log","宿主App回传的数据："+n," at pages/sample/send-event.vue:26"),t.nativeMsg="宿主App回传的数据："+n}))}}};t.default=n}).call(this,n("0de9")["default"])},"2cfb":function(e,t,n){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){throw n}))}))}),uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/sample/send-event",(function(){return Vue.extend(n("7143").default)}))},"3b44":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={onLaunch:function(){e("log","App Launch"," at App.vue:4");var t=weex.requireModule("dom");t.addRule("fontFace",{fontFamily:"uniicons",src:"url('/static/uni.ttf')"});var n=uni.requireNativePlugin("TestModule"),r=n.testSyncFunc({name:"unimp",age:1});e("log","TestModule >>>>>>>>>>>>>>>>>: "+JSON.stringify(r)," at App.vue:18")},onShow:function(){e("log","App Show"," at App.vue:22")},onHide:function(){e("log","App Hide"," at App.vue:25")}};t.default=n}).call(this,n("0de9")["default"])},7143:function(e,t,n){"use strict";n.r(t);var r=n("f567"),o=n("bce6");for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);var u,a=n("f0c5"),c=Object(a["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);t["default"]=c.exports},"8bbf":function(e,t){e.exports=Vue},"9a95":function(e,t,n){"use strict";n.r(t);var r=n("3b44"),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=o.a},bce6:function(e,t,n){"use strict";n.r(t);var r=n("1b09"),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=o.a},de9d:function(e,t,n){"use strict";n("2cfb");var r=i(n("8bbf")),o=i(n("ee9c"));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}r.default.config.productionTip=!1,o.default.mpType="app";var s=new r.default(a({},o.default));s.$mount()},ee9c:function(e,t,n){"use strict";n.r(t);var r=n("9a95");for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);var i,u,a,c,s=n("f0c5"),f=Object(s["a"])(r["default"],i,u,!1,null,null,null,!1,a,c);t["default"]=f.exports},f0c5:function(e,t,n){"use strict";function r(e,t,n,r,o,i,u,a,c,s){var f,l="function"===typeof e?e.options:e;if(c){l.components||(l.components={});var p=Object.prototype.hasOwnProperty;for(var d in c)p.call(c,d)&&!p.call(l.components,d)&&(l.components[d]=c[d])}if(s&&((s.beforeCreate||(s.beforeCreate=[])).unshift((function(){this[s.__module]=this})),(l.mixins||(l.mixins=[])).push(s)),t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),u?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},l._ssrRegister=f):o&&(f=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(l.functional){l._injectStyles=f;var v=l.render;l.render=function(e,t){return f.call(t),v(e,t)}}else{var b=l.beforeCreate;l.beforeCreate=b?[].concat(b,f):[f]}return{exports:e,options:l}}n.d(t,"a",(function(){return r}))},f567:function(e,t,n){"use strict";var r,o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",[n("button",{attrs:{_i:1},on:{click:e.sendEvent}}),n("text",[e._v(e._$s(2,"t0-0",e._s(e.nativeMsg)))])])},i=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r}))}},[["de9d","app-config"]]]);