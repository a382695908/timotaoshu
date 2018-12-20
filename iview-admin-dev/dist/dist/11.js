webpackJsonp([11],{246:function(t,a,e){"use strict";function i(t){l||e(480)}Object.defineProperty(a,"__esModule",{value:!0});var o=e(428),n=e.n(o);for(var s in o)"default"!==s&&function(t){e.d(a,t,function(){return o[t]})}(s);var r=e(482),c=e.n(r),l=!1,d=e(4),u=i,p=d(n.a,c.a,!1,u,null,null);p.options.__file="src/views/home/catalog.vue",a.default=p.exports},284:function(t,a,e){t.exports={default:e(285),__esModule:!0}},285:function(t,a,e){e(286),t.exports=e(0).Object.assign},286:function(t,a,e){var i=e(8);i(i.S+i.F,"Object",{assign:e(287)})},287:function(t,a,e){"use strict";var i=e(26),o=e(54),n=e(34),s=e(33),r=e(94),c=Object.assign;t.exports=!c||e(20)(function(){var t={},a={},e=Symbol(),i="abcdefghijklmnopqrst";return t[e]=7,i.split("").forEach(function(t){a[t]=t}),7!=c({},t)[e]||Object.keys(c({},a)).join("")!=i})?function(t,a){for(var e=s(t),c=arguments.length,l=1,d=o.f,u=n.f;c>l;)for(var p,f=r(arguments[l++]),h=d?i(f).concat(d(f)):i(f),m=h.length,g=0;m>g;)u.call(f,p=h[g++])&&(e[p]=f[p]);return e}:c},428:function(t,a,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(a,"__esModule",{value:!0});var o=e(284),n=i(o),s=e(17),r=i(s),c=e(96),l=i(c);a.default={name:"catalog",data:function(){var t=this;return{params:{bookId:null,page:null,limit:null},total:1,loading:!1,columns:[{title:"id",key:"id",render:function(a,e){return a("a",{attrs:{href:"javascript:void(0)"},on:{click:function(a){t.$router.push("/bookContainer?bookId="+t.params.bookId+"&catalogId="+e.row.id+"&num="+e.row.num),a.stopPropagation(),a.preventDefault()}}},e.row.id)}},{title:"章节名称",key:"name",width:300},{title:"排序NUM",key:"num",width:100},{title:"是否禁用",key:"isJin",render:function(a,e){return a("div",[a("span","2"==e.row.isJin?"未禁用":"已禁用"),a("a",{attrs:{href:"javascript:void(0);",style:"color:"+("2"==e.row.isJin?"red":"auto")},on:{click:function(){t.onClickUpdateCatalogisJin(e.row.id,"2"==e.row.isJin?"1":"2")}}},"("+("2"==e.row.isJin?"禁用":"启用")+")")])}},{title:"章节类型",key:"type",render:function(t,a){return t("span",{},"2"==a.row.type?"特殊章节":"普通章节")}},{title:"创建时间",key:"createTime",render:function(t,a){return t("span",{},r.default.timeChange(a.row.createTime))}},{title:"最后修改时间",key:"updateTime",render:function(t,a){return t("span",{},r.default.timeChange(a.row.updateTime))}}],catalog:[],book:{},imgUrl:l.default.apiUrl+"/images/",isEdit:!1,description:""}},computed:{},methods:{getCatalog:function(t){var a=this;t>0&&(this.params.page=t);var e={params:(0,n.default)({},this.params)};this.loading=!0,this.$router.replace({path:"/catalog",query:this.params}),r.default.post.books.catalogList(e).then(function(t){a.catalog=t.catalog,a.total=t.count,a.loading=!1}).catch(function(t){a.loading=!1})},getBook:function(){var t=this,a={params:{bookId:this.params.bookId}};r.default.post.books.book(a).then(function(a){t.book=a.book[0],t.description=t.book.description})},onClickUpdateCatalogisJin:function(t,a){var e=this,i={params:{catalogId:t,isJin:a}};this.loading=!0,r.default.post.books.updateCatalogIsJin(i).then(function(t){e.$Message.success(t),e.getCatalog()}).catch(function(t){e.loading=!1})},onClickSaveDescription:function(){var t=this,a={params:{bookId:this.params.bookId,description:this.description}};this.loading=!0,r.default.post.books.updateBookDescription(a).then(function(a){t.loading=!1,t.book.description=t.description,t.isEdit=!1,t.$Message.success("修改成功")}).catch(function(a){t.loading=!1})}},components:{},created:function(){},mounted:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){var t=parseInt(this.$route.query.bookId)||0,a=parseInt(this.$route.query.page)||1,e=parseInt(this.$route.query.limit)||20;t===this.params.bookId&&a===this.params.page&&e===this.params.limit||(t!==this.params.bookId&&(this.params.bookId=t,this.getBook()),a!==this.params.page&&(this.params.page=a),e!==this.params.limit&&(this.params.limit=e),this.getCatalog())},deactivated:function(){}}},480:function(t,a,e){var i=e(481);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(19)("550d7e65",i,!1,{})},481:function(t,a,e){a=t.exports=e(18)(!1),a.push([t.i,"\n.bookImg {\n  max-width: 150px;\n  max-height: 120px;\n  display: block;\n  float: left;\n  margin-right: 10px;\n}\n.description {\n  text-indent: 28px;\n  margin-top: 10px;\n}\n.textarea {\n  width: calc(100% - 150px);\n}\ntextarea {\n  text-indent: 20px;\n}\n",""])},482:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Layout",[e("Card",[e("Row",[e("Col",{attrs:{span:"24"}},[e("img",{staticClass:"bookImg",attrs:{src:t.imgUrl+t.params.bookId,alt:"书名"}}),t._v(" "),e("h1",[t._v("\n                    "+t._s(t.book.name)+"\n                    "),e("Button",{staticClass:"fr",attrs:{type:"primary",disabled:t.loading},on:{click:function(a){t.isEdit=!t.isEdit}}},[t._v(t._s(t.isEdit?"取消编辑":"编辑描述"))]),t._v(" "),e("Button",{directives:[{name:"show",rawName:"v-show",value:t.isEdit,expression:"isEdit"}],staticClass:"fr mr10",attrs:{type:"primary",disabled:t.loading},on:{click:t.onClickSaveDescription}},[t._v("保存描述")])],1),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.isEdit,expression:"!isEdit"}],staticClass:"description"},[t._v(t._s(t.book.description))]),t._v(" "),e("Input",{directives:[{name:"show",rawName:"v-show",value:t.isEdit,expression:"isEdit"}],staticClass:"textarea",attrs:{type:"textarea",rows:4,placeholder:"请输入描述"},model:{value:t.description,callback:function(a){t.description=a},expression:"description"}})],1)],1)],1),t._v(" "),e("Card",{attrs:{shadow:""}},[e("Table",{ref:"table",attrs:{border:"","highlight-row":"",loading:t.loading,columns:t.columns,data:t.catalog}})],1),t._v(" "),e("Card",{attrs:{shadow:""}},[e("Page",{attrs:{current:t.params.page,"page-size":t.params.limit,total:t.total,"show-total":"","show-elevator":""},on:{"on-change":t.getCatalog}})],1)],1)},o=[];i._withStripped=!0;var n={render:i,staticRenderFns:o};a.default=n}});