(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"0de9":function(t,e,n){"use strict";function i(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function s(){return"string"===typeof __channelId__&&__channelId__}function a(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];console[t].apply(console,n)}function r(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var a=e.shift();if(s())return e.push(e.pop().replace("at ","uni-app:///")),console[a].apply(console,e);var r=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(s){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=i(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),u="";if(r.length>1){var c=r.pop();u=r.join("---COMMA---"),0===c.indexOf(" at ")?u+=c:u+="---COMMA---"+c}else u=r[0];console[a](u)}n.r(e),n.d(e,"log",(function(){return a})),n.d(e,"default",(function(){return r}))},"11f9":function(t,e,n){"use strict";n.r(e);var i=n("2176"),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=s.a},"145d":function(t,e,n){"use strict";var i,s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","container"),attrs:{_i:0}},[n("view",[t._v(t._$s(1,"t0-0",t._s(t.info)))]),n("view",{staticClass:t._$s(2,"sc","banner"),attrs:{_i:2},on:{click:t.goDetail}})])},a=[];n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},2176:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onShow:function(){uni.getSystemInfo({success:function(e){t("log",e," at pages/ai-subject/ai-result.vue:40"),uni.showModal({content:JSON.stringify(e)})},fail:function(){uni.showToast({title:"ERROR",icon:"none",mask:!0})}})},data:function(){return{list:[],nativeMsg:"null"}},methods:{pk:function(){this.list.length<2||this.list.length>3?uni.showToast({title:"请选择2~3个组合",icon:"none",mask:!0}):uni.showToast({title:"pk",icon:"none",mask:!0})},android:function(){uni.sendNativeEvent("testEvent",{msg:"hello ANDROID!!!"},(function(t){uni.showToast({title:"宿主App回传的数据"+t,icon:"none",mask:!0})}))}}};e.default=n}).call(this,n("0de9")["default"])},"25bb":function(t,e,n){"use strict";var i={uniCard:n("65da").default},s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","container"),attrs:{_i:0}},[n("view",{staticClass:t._$s(1,"sc","uni-padding-wrap uni-common-mt"),attrs:{_i:1}},[n("view",[n("scroll-view",{staticClass:t._$s(3,"sc","scroll-Y"),attrs:{_i:3}},[n("view",{staticClass:t._$s(4,"sc","uni-flex uni-column"),attrs:{_i:4}},[n("view",{staticClass:t._$s(5,"sc","flex-item"),attrs:{_i:5}},[n("uni-card",{attrs:{title:"标题文字",thumbnail:"https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png",extra:"额外信息",note:"Tips",_i:6}},[t._v("")])],1),n("view",{staticClass:t._$s(7,"sc","flex-item"),attrs:{_i:7}},[n("uni-card",{attrs:{title:"标题文字",thumbnail:"https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png",extra:"额外信息",note:"Tips",_i:8}},[t._v("")])],1),n("view",{staticClass:t._$s(9,"sc","flex-item"),attrs:{_i:9}},[n("uni-card",{attrs:{title:"标题文字",thumbnail:"https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png",extra:"额外信息",note:"Tips",_i:10}},[t._v("")])],1)])]),n("view",{staticClass:t._$s(11,"sc","uni-flex uni-column"),attrs:{_i:11}},[n("view"),n("view",[n("button",{attrs:{_i:14},on:{click:t.pk}})]),n("view",[t._v(t._$s(15,"t0-0",t._s(t.nativeMsg)))]),n("view",[n("button",{attrs:{_i:17},on:{click:t.android}})])])])])])},a=[];n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},"278c":function(t,e,n){"use strict";n.r(e);var i=n("7768");for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);var a,r,u,c,o=n("f0c5"),l=Object(o["a"])(i["default"],a,r,!1,null,null,null,!1,u,c);e["default"]=l.exports},"2c22":function(t,e,n){"use strict";var i,s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","uni-card"),class:t._$s(0,"c",{"uni-card--full":!0===t.isFull||"true"===t.isFull,"uni-card--shadow":!0===t.isShadow||"true"===t.isShadow}),attrs:{_i:0},on:{click:t.onClick}},[t._$s(1,"i","style"===t.mode)?n("view",{staticClass:t._$s(1,"sc","uni-card__thumbnailimage"),attrs:{_i:1}},[n("view",{staticClass:t._$s(2,"sc","uni-card__thumbnailimage-box"),attrs:{_i:2}},[n("image",{staticClass:t._$s(3,"sc","uni-card__thumbnailimage-image"),attrs:{src:t._$s(3,"a-src",t.thumbnail),_i:3}})]),t._$s(4,"i",t.title)?n("view",{staticClass:t._$s(4,"sc","uni-card__thumbnailimage-title"),attrs:{_i:4}},[n("text",{staticClass:t._$s(5,"sc","uni-card__thumbnailimage-title-text"),attrs:{_i:5}},[t._v(t._$s(5,"t0-0",t._s(t.title)))])]):t._e()]):t._e(),t._$s(6,"i","title"===t.mode)?n("view",{staticClass:t._$s(6,"sc","uni-card__title"),attrs:{_i:6}},[n("view",{staticClass:t._$s(7,"sc","uni-card__title-header"),attrs:{_i:7}},[n("image",{staticClass:t._$s(8,"sc","uni-card__title-header-image"),attrs:{src:t._$s(8,"a-src",t.thumbnail),_i:8}})]),n("view",{staticClass:t._$s(9,"sc","uni-card__title-content"),attrs:{_i:9}},[n("text",{staticClass:t._$s(10,"sc","uni-card__title-content-title"),attrs:{_i:10}},[t._v(t._$s(10,"t0-0",t._s(t.title)))]),n("text",{staticClass:t._$s(11,"sc","uni-card__title-content-extra"),attrs:{_i:11}},[t._v(t._$s(11,"t0-0",t._s(t.extra)))])])]):t._e(),t._$s(12,"i","basic"===t.mode&&t.title)?n("view",{staticClass:t._$s(12,"sc","uni-card__header"),attrs:{_i:12}},[t._$s(13,"i",t.thumbnail)?n("view",{staticClass:t._$s(13,"sc","uni-card__header-extra-img-view"),attrs:{_i:13}},[n("image",{staticClass:t._$s(14,"sc","uni-card__header-extra-img"),attrs:{src:t._$s(14,"a-src",t.thumbnail),_i:14}})]):t._e(),n("text",{staticClass:t._$s(15,"sc","uni-card__header-title-text"),attrs:{_i:15}},[t._v(t._$s(15,"t0-0",t._s(t.title)))]),t._$s(16,"i",t.extra)?n("text",{staticClass:t._$s(16,"sc","uni-card__header-extra-text"),attrs:{_i:16}},[t._v(t._$s(16,"t0-0",t._s(t.extra)))]):t._e()]):t._e(),n("view",{staticClass:t._$s(17,"sc","uni-card__content uni-card__content--pd"),attrs:{_i:17}},[t._$s(18,"i","style"===t.mode&&t.extra)?n("view",[n("text",{staticClass:t._$s(19,"sc","uni-card__content-extra"),attrs:{_i:19}},[t._v(t._$s(19,"t0-0",t._s(t.extra)))])]):t._e(),t._t("default",null,{_i:20})],2),t._$s(21,"i",t.note)?n("view",{staticClass:t._$s(21,"sc","uni-card__footer"),attrs:{_i:21}},[t._t("footer",[n("text",{staticClass:t._$s(23,"sc","uni-card__footer-text"),attrs:{_i:23}},[t._v(t._$s(23,"t0-0",t._s(t.note)))])],{_i:22})],2):t._e()])},a=[];n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},"38de":function(t,e,n){"use strict";n.r(e);var i=n("7015"),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=s.a},"3b82":function(t,e,n){"use strict";n.r(e);var i=n("68ac"),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=s.a},"45b6":function(t,e,n){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("7948").default)})),__definePage("pages/ai-subject/ai-result",(function(){return Vue.extend(n("5bb0").default)})),__definePage("pages/ai-subject/result-analysis",(function(){return Vue.extend(n("7c67").default)})),__definePage("pages/ai-subject/subject-pk",(function(){return Vue.extend(n("463c").default)}))},"463c":function(t,e,n){"use strict";n.r(e);var i=n("5543"),s=n("a6b3");for(var a in s)"default"!==a&&function(t){n.d(e,t,(function(){return s[t]}))}(a);var r,u=n("f0c5"),c=Object(u["a"])(s["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=c.exports},5543:function(t,e,n){"use strict";var i={uniLink:n("e509").default},s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","container"),attrs:{_i:0}},[n("view",{staticClass:t._$s(1,"sc","intro"),attrs:{_i:1}}),n("text",{staticClass:t._$s(2,"sc","intro"),attrs:{_i:2}}),n("uni-link",{attrs:{href:t.href,text:t.href,_i:3}})],1)},a=[];n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},5582:function(t,e,n){"use strict";n.r(e);var i=n("f1cc"),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=s.a},"5bb0":function(t,e,n){"use strict";n.r(e);var i=n("25bb"),s=n("11f9");for(var a in s)"default"!==a&&function(t){n.d(e,t,(function(){return s[t]}))}(a);var r,u=n("f0c5"),c=Object(u["a"])(s["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=c.exports},"62d1":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{href:"https://uniapp.dcloud.io/component/README?id=uniui"}},methods:{}};e.default=i},"65da":function(t,e,n){"use strict";n.r(e);var i=n("2c22"),s=n("38de");for(var a in s)"default"!==a&&function(t){n.d(e,t,(function(){return s[t]}))}(a);var r,u=n("f0c5"),c=Object(u["a"])(s["default"],i["b"],i["c"],!1,null,"956d6958",null,!1,i["a"],r);e["default"]=c.exports},"68ac":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{info:"",href:"https://uniapp.dcloud.io/component/README?id=uniui"}},onLaunch:function(){var e=this;uni.onNativeEventReceive((function(n,i){t("log","接收到宿主App消息："+n+i," at pages/index/index.vue:22"),e.info="接收到宿主App消息 event："+n+" data: "+i}))},methods:{goDetail:function(t){uni.navigateTo({url:"../ai-subject/ai-result"})}}};e.default=n}).call(this,n("0de9")["default"])},7015:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniCard",props:{title:{type:String,default:""},extra:{type:String,default:""},note:{type:String,default:""},thumbnail:{type:String,default:""},mode:{type:String,default:"basic"},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!1}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},7768:function(t,e,n){"use strict";n.r(e);var i=n("90a5"),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=s.a},7948:function(t,e,n){"use strict";n.r(e);var i=n("145d"),s=n("3b82");for(var a in s)"default"!==a&&function(t){n.d(e,t,(function(){return s[t]}))}(a);var r,u=n("f0c5"),c=Object(u["a"])(s["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=c.exports},"7c67":function(t,e,n){"use strict";n.r(e);var i=n("d317"),s=n("a58a");for(var a in s)"default"!==a&&function(t){n.d(e,t,(function(){return s[t]}))}(a);var r,u=n("f0c5"),c=Object(u["a"])(s["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=c.exports},8206:function(t,e,n){"use strict";var i,s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("text",{staticClass:t._$s(0,"sc","uni-link"),class:t._$s(0,"c",{"uni-link--withline":!0===t.showUnderLine||"true"===t.showUnderLine}),style:t._$s(0,"s",{color:t.color,fontSize:t.fontSize+"px"}),attrs:{_i:0},on:{click:t.openURL}},[t._v(t._$s(0,"t0-0",t._s(t.text)))])},a=[];n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},"8bbf":function(t,e){t.exports=Vue},"90a5":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){t("log","App Launch"," at App.vue:4"),plus.runtime.getProperty(plus.runtime.appid,(function(t){uni.showToast({title:"正在更新"+JSON.stringify(t),icon:"none",mask:!0}),uni.downloadFile({url:"http://192.168.2.110/wgt/__UNI__87CCF0A.wgt",success:function(t){uni.showToast({title:t.statusCode,icon:"none",mask:!0}),200===t.statusCode&&plus.runtime.install(t.tempFilePath,{force:!1},(function(){uni.showToast({title:"安装成功",icon:"none",mask:!0})}),(function(t){uni.showToast({title:"安装失败"+JSON.stringify(t),icon:"none",mask:!0})}))},fail:function(){uni.showToast({title:"下载失败",icon:"none",mask:!0})}})}))},onShow:function(){t("log","App Show"," at App.vue:51")},onHide:function(){t("log","App Hide"," at App.vue:56")}};e.default=n}).call(this,n("0de9")["default"])},"92f2":function(t,e,n){"use strict";n("45b6");var i=a(n("8bbf")),s=a(n("278c"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}i.default.config.productionTip=!1,s.default.mpType="app";var o=new i.default(u({},s.default));o.$mount()},a58a:function(t,e,n){"use strict";n.r(e);var i=n("62d1"),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=s.a},a6b3:function(t,e,n){"use strict";n.r(e);var i=n("f65a"),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=s.a},d317:function(t,e,n){"use strict";var i={uniLink:n("e509").default},s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","container"),attrs:{_i:0}},[n("view",{staticClass:t._$s(1,"sc","intro"),attrs:{_i:1}}),n("text",{staticClass:t._$s(2,"sc","intro"),attrs:{_i:2}}),n("uni-link",{attrs:{href:t.href,text:t.href,_i:3}})],1)},a=[];n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},e509:function(t,e,n){"use strict";n.r(e);var i=n("8206"),s=n("5582");for(var a in s)"default"!==a&&function(t){n.d(e,t,(function(){return s[t]}))}(a);var r,u=n("f0c5"),c=Object(u["a"])(s["default"],i["b"],i["c"],!1,null,"6dc177dd",null,!1,i["a"],r);e["default"]=c.exports},f0c5:function(t,e,n){"use strict";function i(t,e,n,i,s,a,r,u,c,o){var l,f="function"===typeof t?t.options:t;if(c){f.components||(f.components={});var d=Object.prototype.hasOwnProperty;for(var _ in c)d.call(c,_)&&!d.call(f.components,_)&&(f.components[_]=c[_])}if(o&&((o.beforeCreate||(o.beforeCreate=[])).unshift((function(){this[o.__module]=this})),(f.mixins||(f.mixins=[])).push(o)),e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),i&&(f.functional=!0),a&&(f._scopeId="data-v-"+a),r?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},f._ssrRegister=l):s&&(l=u?function(){s.call(this,this.$root.$options.shadowRoot)}:s),l)if(f.functional){f._injectStyles=l;var p=f.render;f.render=function(t,e){return l.call(e),p(t,e)}}else{var v=f.beforeCreate;f.beforeCreate=v?[].concat(v,l):[l]}return{exports:t,options:f}}n.d(e,"a",(function(){return i}))},f1cc:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uniLink",props:{href:{type:String,default:""},text:{type:String,default:""},showUnderLine:{type:[Boolean,String],default:!0},copyTips:{type:String,default:"已自动复制网址，请在手机浏览器里粘贴该网址"},color:{type:String,default:"#999999"},fontSize:{type:[Number,String],default:14}},methods:{openURL:function(){plus.runtime.openURL(this.href)}}};e.default=i},f65a:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{href:"https://uniapp.dcloud.io/component/README?id=uniui"}},methods:{}};e.default=i}},[["92f2","app-config"]]]);