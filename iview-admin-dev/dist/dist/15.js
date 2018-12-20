webpackJsonp([15],{252:function(t,e,n){"use strict";function s(t){c||n(499)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(435),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);var a=n(501),l=n.n(a),c=!1,d=n(4),u=s,f=d(r.a,l.a,!1,u,null,null);f.options.__file="src/views/reptile-tool/progress.vue",e.default=f.exports},435:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(17),r=s(o),i=n(98),a=s(i);e.default={name:"progress__",data:function(){return{readyState:["正在连接","已经连接","正在断开","已经断开"],ws:null,state:"已经断开",count:0,tableHeight:"500px",loading:!1,columns:[{title:"序号",type:"index",width:80,align:"center"},{title:"爬取进度",key:"progress",align:"center",render:function(t,e){return t("span",{attrs:{style:"text-align:left"}},e.row&&e.row.progress)}}],list:[],btnTitle:"开始爬取",index:1,scrollTop:0}},computed:{},methods:{clear:function(){this.$refs.body.innerHTML=""},startReptile:function(){var t=this;if(!this.loading&&"正在爬取"!=this.btnTitle){var e={params:{}};this.loading=!0,r.default.post.reptile.startReptile(e).then(function(e){t.loading=!1,t.$Message.info("开始爬取"),t.btnTitle="正在爬取"}).catch(function(e){t.loading=!1,t.btnTitle="正在爬取"})}}},components:{},created:function(){var t=this;this.ws=new WebSocket(a.default.wssServer+"?token=token"),this.ws.onopen=function(){t.ws.send("我是从客户端发送的消息")},this.ws.onmessage=function(e){var n=JSON.parse(e.data),s=n[0];if(s.count>=0)t.count=s.count;else{var o="";n.forEach(function(e,n){t.index+=n,o+="<span>"+e.progress+"</span>"}),t.scrollTop+=40,t.$refs.body.innerHTML+=o,t.$refs.body.scrollTop=t.scrollTop}t.state=t.readyState[t.ws.readyState]},this.ws.onclose=function(){t.state=t.readyState[t.ws.readyState]},this.ws.onerror=function(){t.state=t.readyState[t.ws.readyState]},window.onbeforeunload=function(){t.ws.close()}},mounted:function(){this.tableHeight=window.innerHeight-this.$refs.body.offsetTop-173+"px"},beforeDestroy:function(){},destroyed:function(){},activated:function(){},deactivated:function(){this.ws.close(),this.$destroy()}}},499:function(t,e,n){var s=n(500);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(19)("6d2c79f7",s,!1,{})},500:function(t,e,n){e=t.exports=n(18)(!1),e.push([t.i,"\n.progress_log span{\n    width:400px; margin-right:30px;overflow: hidden; display: inline-block;\n}\n",""])},501:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Card",[n("Row",[n("Col",{staticClass:"lh32",attrs:{span:"12"}},[t._v("\n                与服务器的连接状态："),n("span",{staticClass:"red"},[t._v(t._s(t.state))])]),t._v(" "),n("Col",{staticClass:"lh32",attrs:{span:"4"}},[t._v("\n                停留人数："+t._s(t.count)+"\n            ")]),t._v(" "),n("Col",{staticClass:"tr",attrs:{span:"8"}},[n("Button",{attrs:{type:"primary"},on:{click:t.clear}},[t._v("清除log")]),t._v(" "),n("Button",{attrs:{type:"primary",disabled:t.loading},on:{click:t.startReptile}},[t._v(t._s(t.btnTitle))])],1)],1)],1),t._v(" "),n("Card",{attrs:{shadow:""}},[n("div",{ref:"body",staticClass:"progress_log",style:{height:t.tableHeight,overflowY:"auto"}})])],1)},o=[];s._withStripped=!0;var r={render:s,staticRenderFns:o};e.default=r}});