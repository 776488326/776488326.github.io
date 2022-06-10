(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{532:function(a,t,v){"use strict";v.r(t);var _=v(30),l=Object(_.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"正则的应用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#正则的应用"}},[a._v("#")]),a._v(" 正则的应用")]),a._v(" "),v("h2",{attrs:{id:"检验文本内容"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#检验文本内容"}},[a._v("#")]),a._v(" 检验文本内容")]),a._v(" "),v("ul",[v("li",[a._v("在JavaScript中没有字符串边界限制\\A 和 \\z")]),a._v(" "),v("li",[a._v("只有文本的边界限制^,$，默认为单行匹配")]),a._v(" "),v("li",[a._v("不可使用多行模式，会改变^,$的行为")]),a._v(" "),v("li",[a._v("/^\\d{4}-\\d{2}-\\d{2}$/.test(“2020-09-06”)")]),a._v(" "),v("li",[a._v("在js中进行文本校验时不要设置全局模式")]),a._v(" "),v("li",[a._v("在全局模式下，正则会将本次匹配到的最后一个元素的下标记住，下次再测试会从此处开始找。因此如果在全局模式下测试同一段文本可能第一次能找到但是第二次找不到。")]),a._v(" "),v("li",[a._v('/\\d{4}-\\d{2}/.test("2022-06")')])]),a._v(" "),v("h2",{attrs:{id:"提取文本内容"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#提取文本内容"}},[a._v("#")]),a._v(" 提取文本内容")]),a._v(" "),v("ul",[v("li",[a._v("在JavaScript中要提取所有匹配的内容，必须使用全局模式")]),a._v(" "),v("li",[a._v('"2022-06".match(/\\d{4}-\\d{2}/g)')]),a._v(" "),v("li",[a._v("在匹配中文字符时，使用u模式")]),a._v(" "),v("li",[a._v('"哈哈".match(/\\u{1D360}/ug)')])]),a._v(" "),v("h2",{attrs:{id:"替换文本内容"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#替换文本内容"}},[a._v("#")]),a._v(" 替换文本内容")]),a._v(" "),v("ul",[v("li",[a._v("在JavaScript中替换和提取类似，需要指定g")]),a._v(" "),v("li",[a._v('"06-2022".replace(/(\\d{2})-(\\d{4})/g,"$2年$1月")')])]),a._v(" "),v("h2",{attrs:{id:"切割文本内容"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#切割文本内容"}},[a._v("#")]),a._v(" 切割文本内容")]),a._v(" "),v("ul",[v("li",[a._v("在JavaScript中切割内容时，可传入两个参数，第一个为正则用于匹配内容，第二个用于限制数组中内容的个数")]),a._v(" "),v("li",[a._v('"apple,pear;tea".split(/\\w+/)\n'),v("ul",[v("li",[a._v("[apple,pear,tea]")])])]),a._v(" "),v("li",[a._v('"apple;pear,tea".split(/\\w+/,2)\n'),v("ul",[v("li",[a._v("[apple,pear]")])])]),a._v(" "),v("li",[a._v("在python中第二个参数代表的是切割的次数")])]),a._v(" "),v("h2",{attrs:{id:"案例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#案例"}},[a._v("#")]),a._v(" 案例")]),a._v(" "),v("ul",[v("li",[a._v("替换网页邮箱地址中#为@")]),a._v(" "),v("li",[a._v("“xxx#163.com”")]),a._v(" "),v("li",[a._v("\"xxx#163.com\".replace(/(\\w+)#(?.+)/,$1@$2) | replace(/#/,'@'')")])])])}),[],!1,null,null,null);t.default=l.exports}}]);