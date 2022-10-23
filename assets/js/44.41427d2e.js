(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{352:function(s,t,a){"use strict";a.r(t);var e=a(7),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"加载器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加载器"}},[s._v("#")]),s._v(" 加载器")]),s._v(" "),t("h2",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),t("ul",[t("li",[s._v("除了常见的内置资源模块来导入资源外还可使用loader")]),s._v(" "),t("li",[s._v("用于加载资源")]),s._v(" "),t("li",[s._v("下载loader后，不需要引入，只需要声明即可，会自动在内存中加载使用")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.css$")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//解析css")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"style-loader"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在html中创建style标签，将css文件链接进去")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"css-loader"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将内存中编译后的css转换为模块")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"less-loader"')]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将less编译为css，但不生成css文件，依旧存在于内存中")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//从右往左依次执行")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果只需要一个loader则可以直接配置loader对象 {loader：“loader名”}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果需要使用多个loader则必须使用use数组来顺序配置每个loader对象")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 也可以使用简写形式如上")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h3",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),t("ul",[t("li",[s._v("安装loader")]),s._v(" "),t("li",[s._v("use 使用")]),s._v(" "),t("li",[s._v("use除了字符串还可为数组，配置多组loader")])]),s._v(" "),t("h3",{attrs:{id:"css-loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css-loader"}},[s._v("#")]),s._v(" css-loader")]),s._v(" "),t("h3",{attrs:{id:"less-loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#less-loader"}},[s._v("#")]),s._v(" less-loader")]),s._v(" "),t("h3",{attrs:{id:"csv-loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#csv-loader"}},[s._v("#")]),s._v(" csv-loader")]),s._v(" "),t("h3",{attrs:{id:"eslint-loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eslint-loader"}},[s._v("#")]),s._v(" eslint-loader")]),s._v(" "),t("ul",[t("li",[s._v("webpack5之前是采用loader来进行语法检查，")]),s._v(" "),t("li",[s._v("现在使用plugin来进行检查")])]),s._v(" "),t("h3",{attrs:{id:"babel-loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#babel-loader"}},[s._v("#")]),s._v(" babel-loader")]),s._v(" "),t("ul",[t("li",[s._v("安装babel-loader 解析es6进行简单的js语法转换")]),s._v(" "),t("li",[s._v("安装@babel/core  babel核心模块")]),s._v(" "),t("li",[s._v("安装@babel/preset-env babel插件的集合")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.js$")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//匹配文件")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("exclude")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("node_modules")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//排除文件")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 配置文件也可写在 .babel.config.js/json文件中")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("loader")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"babel-loader"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//解析的loader")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("options")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n            "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("presets")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@babel/preset-env"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("useBuiltIns")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"usage"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 实现按需引入polyfill")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("corejs")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 解决不能找到core-js的问题")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("targets")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("             "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定兼容性处理的浏览器")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"chrome"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"58"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"ie"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"9"')]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//预设配置")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("cacheDirectory")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 开启babel缓存")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("h3",{attrs:{id:"babel-polyfill"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#babel-polyfill"}},[s._v("#")]),s._v(" @babel/polyfill")]),s._v(" "),t("ul",[t("li",[s._v("可以转换所有的es6高级语法")]),s._v(" "),t("li",[s._v("但是可能导致打包后的文件过大")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("npm i @babel"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("polyfill\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" @babel"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("polyfill\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"core-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#core-js"}},[s._v("#")]),s._v(" core-js")]),s._v(" "),t("ul",[t("li",[s._v("可以实现按需引入高级语法转换")]),s._v(" "),t("li",[s._v("npm i core")])]),s._v(" "),t("h3",{attrs:{id:"url-loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#url-loader"}},[s._v("#")]),s._v(" url-loader")]),s._v(" "),t("ul",[t("li",[s._v("识别并转换图片资源")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.(png|jpg|gif)$")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("loader")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"file-loader"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("options")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("limit")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8192")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置图片转换为base64编码优化性能")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("publicPath")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"../dist/images"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 决定图片的url路径")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("outputPath")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"images"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 决定文件本地输出路径")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[hash:5].[ext]"')]),s._v("          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 修改文件名，扩展名")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h3",{attrs:{id:"html-loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#html-loader"}},[s._v("#")]),s._v(" html-loader")]),s._v(" "),t("ul",[t("li",[s._v("url-loader只能处理js中引入的图片，引入的样式中的图片，但是无法处理html中img标签中的图片")]),s._v(" "),t("li",[s._v("因此需要使用html-loader来处理")]),s._v(" "),t("li",[s._v("npm i html-loader")]),s._v(" "),t("li",[s._v("单纯用于处理html中的图片，use使用即可无需配置")])]),s._v(" "),t("h3",{attrs:{id:"file-loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#file-loader"}},[s._v("#")]),s._v(" file-loader")]),s._v(" "),t("ul",[t("li",[s._v("用于处理所有的其他资源，如字体，音视频等")])])])}),[],!1,null,null,null);t.default=r.exports}}]);