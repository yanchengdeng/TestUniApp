!function(t){var e={};function i(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=604)}({0:function(t,e,i){"use strict";function a(t,e,i,a,n,r,s,o,l,c){var u,d="function"==typeof t?t.options:t;if(l){d.components||(d.components={});var f=Object.prototype.hasOwnProperty;for(var p in l)f.call(l,p)&&!f.call(d.components,p)&&(d.components[p]=l[p])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(d.mixins||(d.mixins=[])).push(c)),e&&(d.render=e,d.staticRenderFns=i,d._compiled=!0),a&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),s?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},d._ssrRegister=u):n&&(u=o?function(){n.call(this,this.$root.$options.shadowRoot)}:n),u)if(d.functional){d._injectStyles=u;var h=d.render;d.render=function(t,e){return u.call(e),h(t,e)}}else{var b=d.beforeCreate;d.beforeCreate=b?[].concat(b,u):[u]}return{exports:t,options:d}}i.d(e,"a",(function(){return a}))},1:function(t,e){t.exports={}},105:function(t,e,i){"use strict";var a=i(387),n=i(336),r=i(0);var s=Object(r.a)(n.default,a.b,a.c,!1,null,null,"285db8aa",!1,a.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(544).default,this.options.style):Object.assign(this.options.style,i(544).default)}).call(s),e.default=s.exports},336:function(t,e,i){"use strict";var a=i(337),n=i.n(a);e.default=n.a},337:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,n=(a=i(605))&&a.__esModule?a:{default:a};var r=weex.requireModule("dom"),s={components:{swiperPage:n.default},data:function(){return{tabList:[],tabIndex:0,cacheTab:[],scrollInto:"",indicatorLineLeft:0,indicatorLineWidth:0,isTap:!1,showTitleView:!0,pageHeight:300,pageId:"page"}},onLoad:function(){for(var t=0;t<6;t++)this.tabList.push({id:"tab"+t,name:"Tab "+(t+1),pageid:t+1})},onReady:function(){this.pageHeight=uni.getSystemInfoSync().windowHeight,this._lastTabIndex=0,this.swiperWidth=0,this.tabbarWidth=0,this.tabListSize={},this._touchTabIndex=0,this._headHeight=100,this.pageList=this.$refs.page,this.selectorQuery()},methods:{ontabtap:function(t){var e=t.target.dataset.current||t.currentTarget.dataset.current;this.isTap=!0;var i=this.tabListSize[e];this.updateIndicator(i.left,i.width),this._touchTabIndex=e,this.switchTab(e)},onswiperchange:function(t){},onswiperscroll:function(t){if(!this.isTap){var e=t.detail.dx,i=this._lastTabIndex;if(e>1?i++:e<-1&&i--,!(i===this._lastTabIndex||i<0||i>this.pageList.length-1)){0===this.pageList[i].dataList.length&&this.loadTabData(i);var a=Math.abs(this.swiperWidth/e),n=this.tabListSize[this._lastTabIndex],r=this.tabListSize[i],s=n.left+(r.left-n.left)/a,o=n.width+(r.width-n.width)/a;this.updateIndicator(s,o)}}},animationfinish:function(t){var e=t.detail.current;this._touchTabIndex===e&&(this.isTap=!1),this._lastTabIndex=e,this.switchTab(e),this.updateIndicator(this.tabListSize[e].left,this.tabListSize[e].width)},selectorQuery:function(){var t=this;uni.createSelectorQuery().in(this).select("#head").boundingClientRect().exec((function(e){t._headHeight=e[0].height})),uni.createSelectorQuery().in(this).select("#tab-bar").boundingClientRect().exec((function(e){t.tabbarWidth=e[0].width})),uni.createSelectorQuery().in(this).select("#tab-bar-view").boundingClientRect().exec((function(e){t.swiperWidth=e[0].width}));for(var e=uni.createSelectorQuery().in(this),i=0;i<this.tabList.length;i++)e.select("#"+this.tabList[i].id).boundingClientRect();e.exec((function(e){e.forEach((function(e){t.tabListSize[e.dataset.id]=e})),t.updateIndicator(t.tabListSize[t.tabIndex].left,t.tabListSize[t.tabIndex].width),t.switchTab(t.tabIndex)}))},updateIndicator:function(t,e){this.indicatorLineLeft=t,this.indicatorLineWidth=e},switchTab:function(t){if(0===this.pageList[t].dataList.length&&this.loadTabData(t),this.pageList[t].setScrollRef(this._headHeight),this.tabIndex!==t){if(this.pageList[this.tabIndex].dataList.length>100)this.cacheTab.indexOf(this.tabIndex)<0&&this.cacheTab.push(this.tabIndex);if(this.tabIndex=t,this.scrollTabTo(t),this.cacheTab.length>3){var e=this.cacheTab[0];this.clearTabData(e),this.cacheTab.splice(0,1)}}},scrollTabTo:function(t){var e=this.$refs["tabitem"+t][0],i=0;t>0&&(i=this.tabbarWidth/2-this.tabListSize[t].width/2,this.tabListSize[t].right<this.tabbarWidth/2&&(i=this.tabListSize[0].width)),r.scrollToElement(e,{offset:-i})},loadTabData:function(t){this.pageList[t].loadData()},clearTabData:function(t){this.pageList[t].clear()}}};e.default=s},338:function(t,e,i){"use strict";i.r(e);var a=i(339),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e.default=n.a},339:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{pid:{type:[Number,String],default:""},parentId:{type:String,default:""}},data:function(){return{scrollable:!0,dataList:[]}},created:function(){for(var t=0;t<30;t++)this.dataList.push({id:t,name:t})},methods:{setScrollRef:function(t){this.$refs.list.setSpecialEffects&&this.$refs.list.setSpecialEffects({id:this.parentId,headerHeight:t})},loadData:function(){},clear:function(){this.dataList.length=0}}};e.default=a},340:function(t,e){t.exports={"uni-swiper-page":{flex:1,position:"absolute",left:0,top:0,right:0,bottom:0},list:{flex:1,backgroundColor:"#ebebeb"},"list-item":{marginLeft:"12",marginRight:"12",marginTop:"12",paddingTop:"20",paddingRight:"20",paddingBottom:"20",paddingLeft:"20",backgroundColor:"#ffffff",borderRadius:"5"},loading:{height:"20"}}},341:function(t,e){t.exports={page:{flex:1},header:{height:"160",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"#f4f4f4"},"header-title":{fontSize:"30",fontWeight:"bold",color:"#444444"},"flexible-view":{backgroundColor:"#f823ff"},"page-head":{height:"200",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#FF0000"},tabs:{flexDirection:"column",overflow:"hidden",backgroundColor:"#ffffff"},"tab-bar":{width:"750upx",height:"84upx",flexDirection:"row"},"scroll-view-indicator":{position:"relative",height:"2",backgroundColor:"rgba(0,0,0,0)"},"scroll-view-underline":{position:"absolute",top:0,bottom:0,width:0,backgroundColor:"#007AFF"},"@TRANSITION":{"scroll-view-animation":{duration:200,property:"left"}},"scroll-view-animation":{transitionDuration:200,transitionProperty:"left"},"tab-bar-line":{height:"1upx",backgroundColor:"#cccccc"},"tab-view":{flex:1},"uni-tab-item":{flexWrap:"nowrap",paddingLeft:"25",paddingRight:"25"},"uni-tab-item-title":{color:"#555555",fontSize:"30upx",height:"80upx",lineHeight:"80upx",flexWrap:"nowrap"},"uni-tab-item-title-active":{color:"#007AFF"},"swiper-item":{flex:1,flexDirection:"column"},"swiper-page":{flex:1,flexDirection:"row",position:"absolute",left:0,top:0,right:0,bottom:0}}},387:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("list",{staticClass:["page"],attrs:{id:t.pageId,bounce:!1,fixFreezing:"true"}},[t._m(0),i("cell",{appendAsTree:!0,attrs:{append:"tree"}},[i("view",{staticClass:["tabs"],style:"height:"+t.pageHeight+"px"},[i("scroll-view",{ref:"tabbar1",staticClass:["tab-bar"],attrs:{id:"tab-bar",scroll:!1,scrollX:!0,showScrollbar:!1,scrollIntoView:t.scrollInto}},[i("view",{staticStyle:{flexDirection:"column"}},[i("view",{staticStyle:{flexDirection:"row"}},t._l(t.tabList,(function(e,a){return i("view",{key:e.id,ref:"tabitem"+a,refInFor:!0,staticClass:["uni-tab-item"],attrs:{id:e.id,dataId:a,dataCurrent:a},on:{click:t.ontabtap}},[i("u-text",{staticClass:["uni-tab-item-title"],class:t.tabIndex==a?"uni-tab-item-title-active":""},[t._v(t._s(e.name))])])})),0),i("view",{staticClass:["scroll-view-indicator"]},[i("view",{ref:"underline",staticClass:["scroll-view-underline"],class:t.isTap?"scroll-view-animation":"",style:{left:t.indicatorLineLeft+"px",width:t.indicatorLineWidth+"px"}})])])]),i("view",{staticClass:["tab-bar-line"]}),i("swiper",{ref:"swiper1",staticClass:["tab-view"],attrs:{id:"tab-bar-view",current:t.tabIndex,duration:300},on:{change:t.onswiperchange,transition:t.onswiperscroll,animationfinish:t.animationfinish,onAnimationEnd:t.animationfinish}},t._l(t.tabList,(function(e,a){return i("swiper-item",{key:a,staticClass:["swiper-item"]},[i("swiper-page",{ref:"page",refInFor:!0,staticClass:["swiper-page"],attrs:{pid:e.pageid,parentId:t.pageId}})],1)})),1)],1)])])},n=[function(){var t=this.$createElement,e=this._self._c||t;return e("cell",{appendAsTree:!0,attrs:{append:"tree"}},[e("view",{staticClass:["header"],attrs:{id:"head"}},[e("u-text",{staticClass:["header-title"]},[this._v("header")])])])}];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}))},437:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:["uni-swiper-page"]},[i("list",{ref:"list",staticClass:["list"],attrs:{offsetAccuracy:5,bounce:!1,fixFreezing:"true"}},[t._l(t.dataList,(function(e,a){return i("cell",{key:e.id,ref:"item"+a,refInFor:!0,appendAsTree:!0,attrs:{append:"tree"}},[i("view",{staticClass:["list-item"]},[i("u-text",[t._v(t._s(e.name))])])])})),i("cell",{staticClass:["loading"],appendAsTree:!0,attrs:{append:"tree"}})],2)])},n=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}))},543:function(t,e,i){"use strict";i.r(e);var a=i(340),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e.default=n.a},544:function(t,e,i){"use strict";i.r(e);var a=i(341),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e.default=n.a},6:function(t,e,i){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(i(7).default,Vue.prototype.__$appStyle__)},604:function(t,e,i){"use strict";i.r(e);i(6);var a=i(105);a.default.mpType="page",a.default.route="pages/template/swiper-list-nvue/swiper-list-nvue",a.default.el="#root",new Vue(a.default)},605:function(t,e,i){"use strict";i.r(e);var a=i(437),n=i(338);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);var s=i(0);var o=Object(s.a)(n.default,a.b,a.c,!1,null,"0d656af2","4ed2e0dc",!1,a.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(543).default,this.options.style):Object.assign(this.options.style,i(543).default)}).call(o),e.default=o.exports},7:function(t,e,i){"use strict";i.r(e);var a=i(1),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e.default=n.a}});