!function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=602)}({0:function(t,e,o){"use strict";function n(t,e,o,n,i,r,s,u,a,l){var c,d="function"==typeof t?t.options:t;if(a){d.components||(d.components={});var f=Object.prototype.hasOwnProperty;for(var p in a)f.call(a,p)&&!f.call(d.components,p)&&(d.components[p]=a[p])}if(l&&((l.beforeCreate||(l.beforeCreate=[])).unshift((function(){this[l.__module]=this})),(d.mixins||(d.mixins=[])).push(l)),e&&(d.render=e,d.staticRenderFns=o,d._compiled=!0),n&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},d._ssrRegister=c):i&&(c=u?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(d.functional){d._injectStyles=c;var _=d.render;d.render=function(t,e){return c.call(e),_(t,e)}}else{var h=d.beforeCreate;d.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:d}}o.d(e,"a",(function(){return n}))},1:function(t,e){t.exports={}},103:function(t,e,o){"use strict";var n=o(360),i=o(330),r=o(0);var s=Object(r.a)(i.default,n.b,n.c,!1,null,null,"3705036e",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(541).default,this.options.style):Object.assign(this.options.style,o(541).default)}).call(s),e.default=s.exports},2:function(t,e,o){"use strict";o.r(e);var n=o(3),i=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);e.default=i.a},3:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},327:function(t,e,o){"use strict";o.r(e);var n=o(328),i=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);e.default=i.a},328:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniCountdown",props:{showDay:{type:Boolean,default:!0},showColon:{type:Boolean,default:!0},backgroundColor:{type:String,default:"#FFFFFF"},borderColor:{type:String,default:"#000000"},color:{type:String,default:"#000000"},splitorColor:{type:String,default:"#000000"},day:{type:Number,default:0},hour:{type:Number,default:0},minute:{type:Number,default:0},second:{type:Number,default:0}},data:function(){return{timer:null,syncFlag:!1,d:"00",h:"00",i:"00",s:"00",leftTime:0,seconds:0}},watch:{day:function(t){this.changeFlag()},hour:function(t){this.changeFlag()},minute:function(t){this.changeFlag()},second:function(t){this.changeFlag()}},created:function(t){this.startData()},beforeDestroy:function(){clearInterval(this.timer)},methods:{toSeconds:function(t,e,o,n){return 60*t*60*24+60*e*60+60*o+n},timeUp:function(){clearInterval(this.timer),this.$emit("timeup")},countDown:function(){var t=this.seconds,e=0,o=0,n=0,i=0;t>0?(e=Math.floor(t/86400),o=Math.floor(t/3600)-24*e,n=Math.floor(t/60)-24*e*60-60*o,i=Math.floor(t)-24*e*60*60-60*o*60-60*n):this.timeUp(),e<10&&(e="0"+e),o<10&&(o="0"+o),n<10&&(n="0"+n),i<10&&(i="0"+i),this.d=e,this.h=o,this.i=n,this.s=i},startData:function(){var t=this;this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.seconds<=0||(this.countDown(),this.timer=setInterval((function(){t.seconds--,t.seconds<0?t.timeUp():t.countDown()}),1e3))},changeFlag:function(){this.syncFlag||(this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.startData(),this.syncFlag=!0)}}};e.default=n},329:function(t,e){t.exports={"uni-countdown":{flexDirection:"row",justifyContent:"flex-start",paddingTop:"2rpx",paddingRight:0,paddingBottom:"2rpx",paddingLeft:0},"uni-countdown__splitor":{justifyContent:"center",lineHeight:"48rpx",paddingTop:"5rpx",paddingRight:"5rpx",paddingBottom:"5rpx",paddingLeft:"5rpx",fontSize:"24rpx"},"uni-countdown__number":{justifyContent:"center",alignItems:"center",width:"52rpx",height:"48rpx",lineHeight:"48rpx",marginTop:"5rpx",marginRight:"5rpx",marginBottom:"5rpx",marginLeft:"5rpx",textAlign:"center",fontSize:"24rpx"}}},330:function(t,e,o){"use strict";var n=o(331),i=o.n(n);e.default=i.a},331:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(o(539)),i=r(o(8));function r(t){return t&&t.__esModule?t:{default:t}}var s={components:{uniCountdown:n.default,uniSection:i.default},data:function(){return{testHour:0,testMinute:0,testSecond:0}},created:function(){var t=this;setTimeout((function(){t.testHour=1,t.testMinute=1,t.testSecond=0}),2e3)},methods:{timeup:function(){uni.showToast({title:"时间到"})}}};e.default=s},332:function(t,e){t.exports={example:{paddingTop:0,paddingRight:"15",paddingBottom:0,paddingLeft:"15"},"example-info":{paddingTop:"15",paddingRight:"15",paddingBottom:"15",paddingLeft:"15",color:"#3b4144",backgroundColor:"#ffffff",fontSize:"14",lineHeight:"20"},"example-info-text":{fontSize:"14",lineHeight:"20",color:"#3b4144"},"example-body":{flexDirection:"column",paddingTop:"10",paddingRight:"10",paddingBottom:"10",paddingLeft:"10",backgroundColor:"#ffffff"},"word-btn-white":{fontSize:"18",color:"#FFFFFF"},"word-btn":{flexDirection:"row",alignItems:"center",justifyContent:"center",borderRadius:"6",height:"48",marginTop:"15",marginRight:"15",marginBottom:"15",marginLeft:"15",backgroundColor:"#007AFF"},"word-btn--hover":{backgroundColor:"#4ca2ff"}}},360:function(t,e,o){"use strict";var n={uniSection:o(8).default,uniCountdown:o(539).default},i=function(){var t=this.$createElement,e=this._self._c||t;return e("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[e("view",[e("u-text",{staticClass:["example-info"]},[this._v("倒计时组件主要用于促销商品剩余时间，发送短信验证等待时间等场景")]),e("uni-section",{attrs:{title:"一般用法",type:"line"}}),e("view",{staticClass:["example-body"]},[e("uni-countdown",{attrs:{day:1,hour:1,minute:12,second:40}})],1),e("uni-section",{attrs:{title:"不显示天数",type:"line"}}),e("view",{staticClass:["example-body"]},[e("uni-countdown",{attrs:{showDay:!1,hour:12,minute:12,second:12}})],1),e("uni-section",{attrs:{title:"文字分隔符",type:"line"}}),e("view",{staticClass:["example-body"]},[e("uni-countdown",{attrs:{minute:30,second:0,showColon:!1}})],1),e("uni-section",{attrs:{title:"修改颜色",type:"line"}}),e("view",{staticClass:["example-body"]},[e("uni-countdown",{attrs:{day:1,hour:2,minute:30,second:0,color:"#FFFFFF",backgroundColor:"#007AFF",borderColor:"#007AFF"}})],1),e("uni-section",{attrs:{title:"倒计时回调事件",type:"line"}}),e("view",{staticClass:["example-body"]},[e("uni-countdown",{attrs:{showDay:!1,second:10},on:{timeup:this.timeup}})],1),e("uni-section",{attrs:{title:"动态赋值",type:"line"}}),e("view",{staticClass:["example-body"]},[e("uni-countdown",{attrs:{showDay:!1,hour:this.testHour,minute:this.testMinute,second:this.testSecond}})],1)],1)])},r=[];o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return r})),o.d(e,"a",(function(){return n}))},4:function(t,e){t.exports={"uni-section":{position:"relative",marginTop:"10",flexDirection:"row",alignItems:"center",paddingTop:0,paddingRight:"10",paddingBottom:0,paddingLeft:"10",height:"50",backgroundColor:"#f8f8f8",borderBottomColor:"#e5e5e5",borderBottomStyle:"solid",borderBottomWidth:"0.5",fontWeight:"normal"},"uni-section__head":{flexDirection:"row",justifyContent:"center",alignItems:"center",marginRight:"10"},line:{height:"15",backgroundColor:"#c0c0c0",borderRadius:"5",width:"3"},circle:{width:"8",height:"8",borderTopRightRadius:"50",borderTopLeftRadius:"50",borderBottomLeftRadius:"50",borderBottomRightRadius:"50",backgroundColor:"#c0c0c0"},"uni-section__content":{flex:1,color:"#333333"},"uni-section__content-title":{fontSize:"28rpx",color:"#333333"},distraction:{flexDirection:"row",alignItems:"center"},"uni-section__content-sub":{fontSize:"24rpx",color:"#999999"}}},435:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view",{staticClass:["uni-countdown"]},[t.showDay?o("u-text",{staticClass:["uni-countdown__number"],style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.d))]):t._e(),t.showDay?o("u-text",{staticClass:["uni-countdown__splitor"],style:{color:t.splitorColor}},[t._v("天")]):t._e(),o("u-text",{staticClass:["uni-countdown__number"],style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.h))]),o("u-text",{staticClass:["uni-countdown__splitor"],style:{color:t.splitorColor}},[t._v(t._s(t.showColon?":":"时"))]),o("u-text",{staticClass:["uni-countdown__number"],style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.i))]),o("u-text",{staticClass:["uni-countdown__splitor"],style:{color:t.splitorColor}},[t._v(t._s(t.showColon?":":"分"))]),o("u-text",{staticClass:["uni-countdown__number"],style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.s))]),t.showColon?t._e():o("u-text",{staticClass:["uni-countdown__splitor"],style:{color:t.splitorColor}},[t._v("秒")])])},i=[];o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){}))},5:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view",{staticClass:["uni-section"],attrs:{nvue:!0}},[t.type?o("view",{staticClass:["uni-section__head"]},[o("view",{staticClass:["uni-section__head-tag"],class:t.type})]):t._e(),o("view",{staticClass:["uni-section__content"]},[o("u-text",{staticClass:["uni-section__content-title"],class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?o("u-text",{staticClass:["uni-section__content-sub"]},[t._v(t._s(t.subTitle))]):t._e()]),t._t("default")],2)},i=[];o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){}))},539:function(t,e,o){"use strict";o.r(e);var n=o(435),i=o(327);for(var r in i)"default"!==r&&function(t){o.d(e,t,(function(){return i[t]}))}(r);var s=o(0);var u=Object(s.a)(i.default,n.b,n.c,!1,null,"2db3bc23","59fbf310",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(540).default,this.options.style):Object.assign(this.options.style,o(540).default)}).call(u),e.default=u.exports},540:function(t,e,o){"use strict";o.r(e);var n=o(329),i=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);e.default=i.a},541:function(t,e,o){"use strict";o.r(e);var n=o(332),i=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);e.default=i.a},6:function(t,e,o){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(o(7).default,Vue.prototype.__$appStyle__)},602:function(t,e,o){"use strict";o.r(e);o(6);var n=o(103);n.default.mpType="page",n.default.route="pages/extUI/countdown/countdown",n.default.el="#root",new Vue(n.default)},7:function(t,e,o){"use strict";o.r(e);var n=o(1),i=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);e.default=i.a},8:function(t,e,o){"use strict";o.r(e);var n=o(5),i=o(2);for(var r in i)"default"!==r&&function(t){o.d(e,t,(function(){return i[t]}))}(r);var s=o(0);var u=Object(s.a)(i.default,n.b,n.c,!1,null,"b3d85aee","3f7c0760",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(9).default,this.options.style):Object.assign(this.options.style,o(9).default)}).call(u),e.default=u.exports},9:function(t,e,o){"use strict";o.r(e);var n=o(4),i=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);e.default=i.a}});