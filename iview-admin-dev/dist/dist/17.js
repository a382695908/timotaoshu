webpackJsonp([17],{243:function(t,n,e){"use strict";function i(t){p||e(461)}Object.defineProperty(n,"__esModule",{value:!0});var a=e(422),r=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(n,t,function(){return a[t]})}(s);var o=e(463),l=e.n(o),p=!1,c=e(4),d=i,v=c(r.a,l.a,!1,d,null,null);v.options.__file="src/views/form/article-publish/preview.vue",n.default=v.exports},422:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{articleTitle:"",tagsList:"",classificationSelected:[],content:"",publishTime:""}},mounted:function(){this.articleTitle=localStorage.articleTitle,this.tagsList=localStorage.tagsList?JSON.parse(localStorage.tagsList):[],this.classificationSelected=localStorage.classificationSelected?JSON.parse(localStorage.classificationSelected):[],this.content=localStorage.content,this.publishTime=localStorage.publishTime}}},461:function(t,n,e){var i=e(462);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(19)("2ccad39b",i,!1,{})},462:function(t,n,e){n=t.exports=e(18)(!1),n.push([t.i,'\n[v-cloak] {\n  display: none;\n}\n.single-page-con::-webkit-scrollbar,\n.ivu-table-body::-webkit-scrollbar {\n  width: 2px;\n  height: 2px;\n}\n.single-page-con::-webkit-scrollbar-thumb,\n.ivu-table-body::-webkit-scrollbar-thumb {\n  background-color: #2d8cf0;\n  -webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.5);\n  border-radius: 1px;\n}\n.fl {\n  float: left !important;\n}\n.fr {\n  float: right !important;\n}\n.clearfix:before,\n.clearfix:after {\n  /*清除浮动，最好最标准的写法*/\n  content: "";\n  display: table;\n}\n.clearfix:after {\n  clear: both;\n  visibility: hidden;\n  /*保留位置*/\n}\n.clearfix {\n  *zoom: 1;\n  /*IE/7/6*/\n  /*兼容IE6下的写法*/\n}\n.tl {\n  text-align: left !important;\n}\n.tc {\n  text-align: center !important;\n}\n.tr {\n  text-align: right !important;\n}\n.w80 {\n  width: 80px !important;\n}\n.w100 {\n  width: 100px !important;\n}\n.w150 {\n  width: 150px !important;\n}\n.w300 {\n  width: 300px !important;\n}\n.w200 {\n  width: 200px !important;\n}\n.lh32 {\n  line-height: 32px !important;\n}\n.red {\n  color: red !important;\n}\n.ml5 {\n  margin-left: 5px !important;\n}\n.ml10 {\n  margin-left: 10px !important;\n}\n.mr10 {\n  margin-right: 10px !important;\n}\n.mr20 {\n  margin-right: 20px !important;\n}\n.modal-header-color {\n  color: #2D8CF0;\n}\n/*  覆盖样式  start*/\n.ivu-tree ul li {\n  margin: 0 auto;\n}\n/*  覆盖样式  end*/\n.preview-main {\n  width: 100%;\n  height: 100%;\n  background: #d7e1ed;\n}\n.preview-header {\n  padding-right: 20px;\n  height: 60px;\n  background: #4a5161;\n  text-align: right;\n}\n.preview-header ul {\n  display: inline-block !important;\n}\n.preview-placeholderCon {\n  height: 200px;\n}\n.preview-placeholder {\n  height: 40px;\n  margin-bottom: 10px;\n  background: #9fafd4;\n  border-radius: 3px;\n}\n.preview-tags-con {\n  padding: 5px 0;\n  margin: 10px 0;\n}\n.preview-tip {\n  font-size: 12px;\n  color: #c3c3c3;\n}\n.preview-content-con {\n  border-top: 1px solid #edeff1;\n  border-bottom: 1px solid #edeff1;\n  padding: 12px 0 20px;\n  margin-bottom: 20px;\n}\n.preview-classifition-con {\n  padding: 5px 0;\n}\n.preview-classifition-item {\n  margin-right: 8px;\n}\n.preview-publish-time {\n  font-size: 12px;\n  color: gray;\n  margin-top: 5px;\n}\n',""])},463:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"preview-main"},[e("div",{staticClass:"preview-header"},[e("Menu",{attrs:{mode:"horizontal",theme:"dark","active-name":"1"}},[e("div",{staticClass:"preview-header-nav"},[e("MenuItem",{attrs:{name:"1"}},[e("Icon",{attrs:{type:"ios-navigate"}}),t._v("\n                    导航一\n                ")],1),t._v(" "),e("MenuItem",{attrs:{name:"2"}},[e("Icon",{attrs:{type:"ios-keypad"}}),t._v("\n                    导航二\n                ")],1),t._v(" "),e("MenuItem",{attrs:{name:"3"}},[e("Icon",{attrs:{type:"ios-analytics"}}),t._v("\n                    导航三\n                ")],1),t._v(" "),e("MenuItem",{attrs:{name:"4"}},[e("Icon",{attrs:{type:"ios-paper"}}),t._v("\n                    导航四\n                ")],1)],1)])],1),t._v(" "),e("Row",{staticClass:"margin-top-20"},[e("Col",{attrs:{span:"12",offset:"5"}},[e("div",[e("Card",[e("h1",[t._v(t._s(t.articleTitle))]),t._v(" "),e("p",{staticClass:"preview-publish-time"},[e("Icon",{attrs:{type:"android-alarm-clock"}}),t._v(" 发布时间："+t._s(t.publishTime))],1),t._v(" "),e("div",{staticClass:"preview-tags-con"},[e("b",{staticClass:"preview-tip"},[e("Icon",{attrs:{type:"ios-pricetags-outline"}}),t._v(" 标签：")],1),t._l(t.tagsList,function(n){return e("Tag",{key:n,attrs:{type:"border",color:"blue"}},[t._v(t._s(n))])})],2),t._v(" "),e("div",{staticClass:"preview-content-con",domProps:{innerHTML:t._s(t.content)}}),t._v(" "),e("div",{staticClass:"preview-classifition-con"},[e("b",{staticClass:"preview-tip"},[e("Icon",{attrs:{type:"navicon-round"}}),t._v(" 目录：")],1),t._v(" "),t._l(t.classificationSelected,function(n){return e("a",{key:n,staticClass:"preview-classifition-item"},[e("Icon",{attrs:{type:"android-folder-open"}}),t._v("\n                            "+t._s(n)+"\n                        ")],1)})],2)])],1)]),t._v(" "),e("Col",{staticClass:"padding-left-10",attrs:{span:"4"}},[e("div",[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"paper-airplane"}}),t._v("\n                        热门文章\n                    ")],1),t._v(" "),e("div",{staticClass:"preview-placeholderCon"},[e("div",{staticClass:"preview-placeholder"}),t._v(" "),e("div",{staticClass:"preview-placeholder"}),t._v(" "),e("div",{staticClass:"preview-placeholder"}),t._v(" "),e("div",{staticClass:"preview-placeholder"})])])],1),t._v(" "),e("div",{staticClass:"margin-top-10"},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"paper-airplane"}}),t._v("\n                        最新文章\n                    ")],1),t._v(" "),e("div",{staticClass:"preview-placeholderCon"},[e("div",{staticClass:"preview-placeholder"}),t._v(" "),e("div",{staticClass:"preview-placeholder"}),t._v(" "),e("div",{staticClass:"preview-placeholder"}),t._v(" "),e("div",{staticClass:"preview-placeholder"})])])],1)])],1)],1)},a=[];i._withStripped=!0;var r={render:i,staticRenderFns:a};n.default=r}});