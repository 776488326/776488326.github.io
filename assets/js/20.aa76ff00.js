(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{330:function(t,a,s){"use strict";s.r(a);var e=s(7),i=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"异步编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步编程"}},[t._v("#")]),t._v(" 异步编程")]),t._v(" "),a("h2",{attrs:{id:"promise和async和await"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise和async和await"}},[t._v("#")]),t._v(" Promise和async和await")]),t._v(" "),a("ul",[a("li",[t._v("promise解决了回调地狱的问题")]),t._v(" "),a("li",[t._v("async和await解决了then链式调用的问题")])]),t._v(" "),a("h2",{attrs:{id:"异步的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步的方法"}},[t._v("#")]),t._v(" 异步的方法")]),t._v(" "),a("ul",[a("li",[t._v("事件监听/发布订阅：手动触发事件。")]),t._v(" "),a("li",[t._v("回调函数：简单易理解，可能会嵌套导致结构混乱。")]),t._v(" "),a("li",[t._v("promise：异步代码的容器，支持链式调用，可能会调用链过长")]),t._v(" "),a("li",[t._v("generator：状态机，可以控制代码的执行，但需要手动执行")]),t._v(" "),a("li",[t._v("async+await：自带执行器，无需手动执行，目前最好的异步方法")])]),t._v(" "),a("h2",{attrs:{id:"事件循环机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件循环机制"}},[t._v("#")]),t._v(" 事件循环机制")]),t._v(" "),a("ul",[a("li",[t._v("从上往下依次执行")]),t._v(" "),a("li",[t._v("同步代码直接执行，异步代码放入队列")]),t._v(" "),a("li",[t._v('promise.then( console.log("我是异步") )')]),t._v(" "),a("li",[a("blockquote",[a("p",[t._v('await console.log( "我是同步" )')])])]),t._v(" "),a("li",[a("blockquote",[a("p",[t._v('console.log( "我是异步" )')])])]),t._v(" "),a("li",[t._v("只有以上两种情况是微任务")]),t._v(" "),a("li",[t._v("一般的异步代码都是宏任务")])]),t._v(" "),a("h2",{attrs:{id:"事件执行的顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件执行的顺序"}},[t._v("#")]),t._v(" 事件执行的顺序")]),t._v(" "),a("ul",[a("li",[t._v("Script——>Process.nexttick——>Promise——>setTimeout——>IO——>UIRender")]),t._v(" "),a("li",[t._v("Script——>Process.nexttick——>Promise——>setTimeout——>setImmediate")])])])}),[],!1,null,null,null);a.default=i.exports}}]);