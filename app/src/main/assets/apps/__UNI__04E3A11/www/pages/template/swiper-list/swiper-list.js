!function(t){var e={};function i(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=606)}({0:function(t,e,i){"use strict";function n(t,e,i,n,a,r,o,s,l,c){var u,f="function"==typeof t?t.options:t;if(l){f.components||(f.components={});var d=Object.prototype.hasOwnProperty;for(var p in l)d.call(l,p)&&!d.call(f.components,p)&&(f.components[p]=l[p])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(f.mixins||(f.mixins=[])).push(c)),e&&(f.render=e,f.staticRenderFns=i,f._compiled=!0),n&&(f.functional=!0),r&&(f._scopeId="data-v-"+r),o?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},f._ssrRegister=u):a&&(u=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),u)if(f.functional){f._injectStyles=u;var h=f.render;f.render=function(t,e){return u.call(e),h(t,e)}}else{var b=f.beforeCreate;f.beforeCreate=b?[].concat(b,u):[u]}return{exports:t,options:f}}i.d(e,"a",(function(){return n}))},1:function(t,e){t.exports={}},106:function(t,e,i){"use strict";var n=i(398),a=i(342),r=i(0);var o=Object(r.a)(a.default,n.b,n.c,!1,null,null,"7e241c88",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(546).default,this.options.style):Object.assign(this.options.style,i(546).default)}).call(o),e.default=o.exports},20:function(t,e,i){"use strict";function n(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function a(){return"string"==typeof __channelId__&&__channelId__}Object.defineProperty(e,"__esModule",{value:!0}),e.log=function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];console[t].apply(console,i)},e.default=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];var r=e.shift();if(a())return e.push(e.pop().replace("at ","uni-app:///")),console[r].apply(console,e);var o=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(e){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var i=n(t).toUpperCase();t="NUMBER"===i||"BOOLEAN"===i?"---BEGIN:"+i+"---"+t+"---END:"+i+"---":String(t)}return t})),s="";if(o.length>1){var l=o.pop();s=o.join("---COMMA---"),0===l.indexOf(" at ")?s+=l:s+="---COMMA---"+l}else s=o[0];console[r](s)}},342:function(t,e,i){"use strict";var n=i(343),a=i.n(n);e.default=a.a},343:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,a=(n=i(607))&&n.__esModule?n:{default:n};var r=weex.requireModule("dom"),o={components:{swiperPage:a.default},data:function(){return{tabList:[],tabIndex:0,cacheTab:[],scrollInto:"",indicatorLineLeft:0,indicatorLineWidth:0,isTap:!1}},onLoad:function(){for(var t=0;t<6;t++)this.tabList.push({id:"tab"+t,name:"Tab "+(t+1),pageid:t+1})},onReady:function(){this._lastTabIndex=0,this.swiperWidth=0,this.tabbarWidth=0,this.tabListSize={},this._touchTabIndex=0,this.pageList=this.$refs.page,this.switchTab(this.tabIndex),this.getTabbarItemsSize()},methods:{ontabtap:function(t){var e=t.target.dataset.current||t.currentTarget.dataset.current;this.isTap=!0;var i=this.tabListSize[e];this.updateIndicator(i.left,i.width),this._touchTabIndex=e,this.switchTab(e)},onswiperchange:function(t){},onswiperscroll:function(t){if(!this.isTap){var e=t.detail.dx,i=this._lastTabIndex;if(e>1?i++:e<-1&&i--,!(i===this._lastTabIndex||i<0||i>this.pageList.length-1)){0===this.pageList[i].dataList.length&&this.loadTabData(i);var n=Math.abs(this.swiperWidth/e),a=this.tabListSize[this._lastTabIndex],r=this.tabListSize[i],o=a.left+(r.left-a.left)/n,s=a.width+(r.width-a.width)/n;this.updateIndicator(o,s)}}},animationfinish:function(t){var e=t.detail.current;this._touchTabIndex===e&&(this.isTap=!1),this._lastTabIndex=e,this.switchTab(e),this.updateIndicator(this.tabListSize[e].left,this.tabListSize[e].width)},getTabbarItemsSize:function(){var e=this;uni.createSelectorQuery().in(this).select("#tab-bar").boundingClientRect().exec((function(t){e.tabbarWidth=t[0].width})),uni.createSelectorQuery().in(this).select("#tab-bar-view").boundingClientRect().exec((function(t){e.swiperWidth=t[0].width}));for(var i=uni.createSelectorQuery().in(this),n=0;n<this.tabList.length;n++)i.select("#"+this.tabList[n].id).boundingClientRect();i.exec((function(i){t("log",JSON.stringify(i)," at pages/template/swiper-list/swiper-list.nvue:169"),i.forEach((function(t){e.tabListSize[t.dataset.id]=t}))})),setTimeout((function(){e.updateIndicator(e.tabListSize[e.tabIndex].left,e.tabListSize[e.tabIndex].width)}),100)},updateIndicator:function(t,e){this.indicatorLineLeft=t,this.indicatorLineWidth=e},switchTab:function(t){if(0===this.pageList[t].dataList.length&&this.loadTabData(t),this.tabIndex!==t){if(this.pageList[this.tabIndex].dataList.length>100)this.cacheTab.indexOf(this.tabIndex)<0&&this.cacheTab.push(this.tabIndex);if(this.tabIndex=t,this.scrollTabTo(t),this.cacheTab.length>3){var e=this.cacheTab[0];this.clearTabData(e),this.cacheTab.splice(0,1)}}},scrollTabTo:function(t){var e=this.$refs["tabitem"+t][0],i=0;t>0&&(i=this.tabbarWidth/2-this.tabListSize[t].width/2,this.tabListSize[t].right<this.tabbarWidth/2&&(i=this.tabListSize[0].width)),r.scrollToElement(e,{offset:-i})},loadTabData:function(t){this.pageList[t].loadData()},clearTabData:function(t){this.pageList[t].clear()}}};e.default=o}).call(this,i(20).default)},344:function(t,e,i){"use strict";i.r(e);var n=i(345),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e.default=a.a},345:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{pid:{type:[Number,String],default:""}},data:function(){return{dataList:[]}},created:function(){},methods:{loadData:function(){},clear:function(){this.dataList.length=0}}};e.default=n},346:function(t,e){t.exports={"uni-swiper-page":{flex:1,flexDirection:"column",position:"absolute",left:0,top:0,right:0,bottom:0,alignItems:"center",justifyContent:"center"}}},347:function(t,e){t.exports={tabs:{flex:1,flexDirection:"column",overflow:"hidden",backgroundColor:"#ffffff"},"tab-bar":{width:"750rpx",height:"84rpx",flexDirection:"row"},"scroll-view-indicator":{position:"relative",height:"2",backgroundColor:"rgba(0,0,0,0)"},"scroll-view-underline":{position:"absolute",top:0,bottom:0,width:0,backgroundColor:"#007AFF"},"@TRANSITION":{"scroll-view-animation":{duration:200,property:"left"}},"scroll-view-animation":{transitionDuration:200,transitionProperty:"left"},"tab-bar-line":{height:"1rpx",backgroundColor:"#cccccc"},"tab-view":{flex:1},"uni-tab-item":{flexWrap:"nowrap",paddingLeft:"25",paddingRight:"25"},"uni-tab-item-title":{color:"#555555",fontSize:"30rpx",height:"80rpx",lineHeight:"80rpx",flexWrap:"nowrap"},"uni-tab-item-title-active":{color:"#007AFF"},"swiper-item":{flex:1,flexDirection:"column"},"swiper-page":{flex:1,flexDirection:"row",position:"absolute",left:0,top:0,right:0,bottom:0}}},398:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[i("view",{staticClass:["tabs"]},[i("scroll-view",{ref:"tabbar1",staticClass:["tab-bar"],attrs:{id:"tab-bar",scroll:!1,scrollX:!0,showScrollbar:!1,scrollIntoView:t.scrollInto}},[i("view",{staticStyle:{flexDirection:"column"}},[i("view",{staticStyle:{flexDirection:"row"}},t._l(t.tabList,(function(e,n){return i("view",{key:e.id,ref:"tabitem"+n,refInFor:!0,staticClass:["uni-tab-item"],attrs:{id:e.id,dataId:n,dataCurrent:n},on:{click:t.ontabtap}},[i("u-text",{staticClass:["uni-tab-item-title"],class:t.tabIndex==n?"uni-tab-item-title-active":""},[t._v(t._s(e.name))])])})),0),i("view",{staticClass:["scroll-view-indicator"]},[i("view",{ref:"underline",staticClass:["scroll-view-underline"],class:t.isTap?"scroll-view-animation":"",style:{left:t.indicatorLineLeft+"px",width:t.indicatorLineWidth+"px"}})])])]),i("view",{staticClass:["tab-bar-line"]}),i("swiper",{ref:"swiper1",staticClass:["tab-view"],attrs:{id:"tab-bar-view",current:t.tabIndex,duration:300},on:{change:t.onswiperchange,transition:t.onswiperscroll,animationfinish:t.animationfinish,onAnimationEnd:t.animationfinish}},t._l(t.tabList,(function(t,e){return i("swiper-item",{key:e,staticClass:["swiper-item"]},[i("swiperPage",{ref:"page",refInFor:!0,staticClass:["swiper-page"],attrs:{pid:t.pageid}})],1)})),1)],1)])},a=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}))},408:function(t,e,i){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:["uni-swiper-page"]},[e("u-text",[this._v("Tab View "+this._s(this.pid))])])},a=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}))},545:function(t,e,i){"use strict";i.r(e);var n=i(346),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e.default=a.a},546:function(t,e,i){"use strict";i.r(e);var n=i(347),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e.default=a.a},6:function(t,e,i){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(i(7).default,Vue.prototype.__$appStyle__)},606:function(t,e,i){"use strict";i.r(e);i(6);var n=i(106);n.default.mpType="page",n.default.route="pages/template/swiper-list/swiper-list",n.default.el="#root",new Vue(n.default)},607:function(t,e,i){"use strict";i.r(e);var n=i(408),a=i(344);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);var o=i(0);var s=Object(o.a)(a.default,n.b,n.c,!1,null,"8c195b76","40b5c31b",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(545).default,this.options.style):Object.assign(this.options.style,i(545).default)}).call(s),e.default=s.exports},7:function(t,e,i){"use strict";i.r(e);var n=i(1),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e.default=a.a}});