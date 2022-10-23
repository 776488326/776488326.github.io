(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{371:function(v,_,t){"use strict";t.r(_);var a=t(7),l=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"mongodb是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mongodb是什么"}},[v._v("#")]),v._v(" MongoDB是什么")]),v._v(" "),_("ul",[_("li",[v._v("面向文档的非关系型数据库")])]),v._v(" "),_("h2",{attrs:{id:"特点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[v._v("#")]),v._v(" 特点")]),v._v(" "),_("ul",[_("li",[v._v("易于使用，不再采用‘行’概念，转而使用文档模型，更加灵活")]),v._v(" "),_("li",[v._v("易于扩展，底层实现了数据库的横向扩展能力，自动处理集群，分配文档。")]),v._v(" "),_("li",[v._v("功能丰富，除了基本的CRUD外，提供了索引，聚合功能，以及特殊的集合类型，新的文件存储协议")]),v._v(" "),_("li",[v._v("性能卓越，舍弃关系型数据库的事务和连接功能，保证系统的扩展性，尽可能的利用内存做缓存以提高查询速度")])]),v._v(" "),_("h2",{attrs:{id:"核心概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#核心概念"}},[v._v("#")]),v._v(" 核心概念")]),v._v(" "),_("h3",{attrs:{id:"数据库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据库"}},[v._v("#")]),v._v(" 数据库")]),v._v(" "),_("ul",[_("li",[v._v("数据库名不能为空字符串，最大为64字节")]),v._v(" "),_("li",[v._v("默认存在的数据库有三个分别是admin，local，config")]),v._v(" "),_("li",[v._v("admin数据库是‘root’数据库，其保存的用户会拥有数据库的所有权限")]),v._v(" "),_("li",[v._v("local数据库是本地数据库，其内容不可被复制")]),v._v(" "),_("li",[v._v("config数据库主要存储分片信息")])]),v._v(" "),_("h3",{attrs:{id:"集合"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#集合"}},[v._v("#")]),v._v(" 集合")]),v._v(" "),_("ul",[_("li",[v._v("集合名不能以system.开头，且不能包含$")]),v._v(" "),_("li",[v._v("集合是动态类型的，可以添加任意类型的值")]),v._v(" "),_("li",[v._v("集合也可以添加任意类型的键，由此引申出是否可以将所有文档存储在一个集合中？\n"),_("ul",[_("li",[v._v("如果混合各种类型的文档在一个集合中，会导致查询集合时需要对返回的不同类型的文档手动处理")]),v._v(" "),_("li",[v._v("查询集合中的特定文档也会影响查询速度")]),v._v(" "),_("li",[v._v("因此为了提高查询速度，建议将集合按照类型存储")]),v._v(" "),_("li",[v._v("mongodb提供了索引功能，可以通过创建集合的模型来生成索引，提高查询速度。")])])])]),v._v(" "),_("h3",{attrs:{id:"文档"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#文档"}},[v._v("#")]),v._v(" 文档")]),v._v(" "),_("ul",[_("li",[v._v("Mongodb的文档本质就是一个键值对对象")]),v._v(" "),_("li",[v._v("文档区分类型，区分大小写。（foo，‘Foo’）（3，‘3’）都是不同的")]),v._v(" "),_("li",[v._v("文档的键不能重复，不区分顺序。")])]),v._v(" "),_("h3",{attrs:{id:"数据库连接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据库连接"}},[v._v("#")]),v._v(" 数据库连接")]),v._v(" "),_("ul",[_("li",[v._v("使用mongod 命令开启数据库服务器")]),v._v(" "),_("li",[v._v("使用mongo 打开shell连接数据库 并将数据库实例命名为全局变量db")]),v._v(" "),_("li",[v._v("使用db操作数据库")])])])}),[],!1,null,null,null);_.default=l.exports}}]);