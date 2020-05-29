(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{359:function(t,a,e){t.exports=e.p+"assets/img/api-gateway-preview.9e03d17d.png"},372:function(t,a,e){"use strict";e.r(a);var s=e(43),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"托管-api-功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#托管-api-功能"}},[t._v("#")]),t._v(" 托管 API 功能")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#接口鉴权"}},[t._v("接口鉴权")]),s("ul",[s("li",[s("a",{attrs:{href:"#打开鉴权"}},[t._v("打开鉴权")])]),s("li",[s("a",{attrs:{href:"#请求需要鉴权的接口"}},[t._v("请求需要鉴权的接口")])])])]),s("li",[s("a",{attrs:{href:"#接口"}},[t._v("接口")]),s("ul",[s("li",[s("a",{attrs:{href:"#展示所有-artifact"}},[t._v("展示所有 Artifact")])]),s("li",[s("a",{attrs:{href:"#下载-artifact"}},[t._v("下载 Artifact")])]),s("li",[s("a",{attrs:{href:"#转换-quantumult-x-远程脚本"}},[t._v("转换 Quantumult X 远程脚本")])]),s("li",[s("a",{attrs:{href:"#转换-quantumult-x-rewrite-remote"}},[t._v("转换 Quantumult X rewrite_remote")])])])])])]),s("p"),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("ol",[s("li",[t._v("请先参考 "),s("RouterLink",{attrs:{to:"/guide/advance/api-gateway.html"}},[t._v("文档")]),t._v(" 搭建托管 API")],1),t._v(" "),s("li",[t._v("该文档仅针对 now.sh 类型的部署")])])]),t._v(" "),s("h2",{attrs:{id:"接口鉴权"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口鉴权"}},[t._v("#")]),t._v(" 接口鉴权")]),t._v(" "),s("h3",{attrs:{id:"打开鉴权"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打开鉴权"}},[t._v("#")]),t._v(" 打开鉴权")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("surgio.conf.js")]),t._v(" 中增加如下字段：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  gateway"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    auth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    accessToken"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YOUR_PASSWORD'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"请求需要鉴权的接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求需要鉴权的接口"}},[t._v("#")]),t._v(" 请求需要鉴权的接口")]),t._v(" "),s("p",[t._v("请在请求的 URL 中加入参数 "),s("code",[t._v("access_token")]),t._v("，值为上面所设。")]),t._v(" "),s("h4",{attrs:{id:"未开启鉴权"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#未开启鉴权"}},[t._v("#")]),t._v(" 未开启鉴权")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("https://xxxxxx.xxx.now.sh/list-artifact\n")])])]),s("h4",{attrs:{id:"开启鉴权"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开启鉴权"}},[t._v("#")]),t._v(" 开启鉴权")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("https://xxxxxx.xxx.now.sh/list-artifact?access_token=YOUR_PASSWORD\n")])])]),s("h2",{attrs:{id:"接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口"}},[t._v("#")]),t._v(" 接口")]),t._v(" "),s("h3",{attrs:{id:"展示所有-artifact"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#展示所有-artifact"}},[t._v("#")]),t._v(" 展示所有 Artifact")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET /list-artifact\n")])])]),s("Badge",{attrs:{text:"需要鉴权",vertical:"middle"}}),t._v(" "),s("p",[s("img",{attrs:{src:e(359),alt:""}})]),t._v(" "),s("p",[t._v("特性：")]),t._v(" "),s("ul",[s("li",[t._v("若名称中包含 "),s("code",[t._v("surge")]),t._v("（大小写不敏感），则会出现添加到 Surge 的按钮。")]),t._v(" "),s("li",[t._v("若名称中包含 "),s("code",[t._v("clash")]),t._v("（大小写不敏感），则会出现添加到 ClashX/CFW 的按钮。")]),t._v(" "),s("li",[t._v("若项目下的 "),s("code",[t._v("package.json")]),t._v(" 有 "),s("code",[t._v("repository")]),t._v(" 字段，则支持直接跳转到 GitLab 或 GitHub 编辑对应文件。")])]),t._v(" "),s("h3",{attrs:{id:"下载-artifact"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载-artifact"}},[t._v("#")]),t._v(" 下载 Artifact")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET /get-artifact/<artifactName>\n")])])]),s("Badge",{attrs:{text:"需要鉴权",vertical:"middle"}}),t._v(" "),s("p",[t._v("可选参数：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("可选值")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("format")])]),t._v(" "),s("td",[s("code",[t._v("surge-policy")]),t._v(", "),s("code",[t._v("qx-server")]),t._v(", "),s("code",[t._v("clash-provider")])]),t._v(" "),s("td",[s("Badge",{attrs:{text:"v1.6.0",vertical:"middle"}})],1)]),t._v(" "),s("tr",[s("td",[s("code",[t._v("filter")])]),t._v(" "),s("td",[t._v("内置的过滤器或自定义过滤器")]),t._v(" "),s("td",[s("Badge",{attrs:{text:"v1.6.0",vertical:"middle"}})],1)])])]),t._v(" "),s("p",[t._v("定义：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("surge-policy")]),t._v(" Surge 远程节点 Policy")]),t._v(" "),s("li",[s("code",[t._v("qx-server")]),t._v(" QuantumultX 远程节点")]),t._v(" "),s("li",[s("code",[t._v("clash-provider")]),t._v(" "),s("Badge",{attrs:{text:"v1.11.0",vertical:"middle"}}),t._v(" "),s("a",{attrs:{href:"https://www.notion.so/New-Feature-Clash-Proxy-Provider-ff8d1955f6234ad3a779fecd3b3ea007",target:"_blank",rel:"noopener noreferrer"}},[t._v("Clash Provider"),s("OutboundLink")],1)],1)]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("format")]),t._v(" 使用的是内置的模板，所以你不需要额外定义模板格式，不过仍然需要定义一个完整的 Artifact。我的建议是定义一个有完整节点的 Artifact，然后根据需要过滤出节点。")]),t._v(" "),s("li",[s("code",[t._v("filter")]),t._v(" 的值为过滤器的名称。你可以直接使用内置的过滤器，例如 "),s("code",[t._v("hkFilter")]),t._v("，也可以使用自定义的过滤器。")])])]),t._v(" "),s("h3",{attrs:{id:"转换-quantumult-x-远程脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转换-quantumult-x-远程脚本"}},[t._v("#")]),t._v(" 转换 Quantumult X 远程脚本")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET /qx-script?url=<远程脚本地址>\n")])])]),s("Badge",{attrs:{text:"即将废弃",vertical:"middle",type:"error"}}),t._v(" "),s("p",[t._v("可选参数：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("值")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("id")])]),t._v(" "),s("td",[t._v("设备 ID")]),t._v(" "),s("td",[t._v("多个值以半角 "),s("code",[t._v(",")]),t._v(" 分隔")])])])]),t._v(" "),s("p",[t._v("会在脚本内容中注入设备 ID。")]),t._v(" "),s("p",[t._v("使用时，将规则放入 "),s("code",[t._v("rewrite_local")]),t._v(" 即可。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[rewrite_local]\n^http://example\\.com/resource/ url script-echo-response https://xxx.xx.now.sh/qx-script?url=https://raw.githubusercontent.com/crossutility/Quantumult-X/master/sample-rewrite-with-script.js\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("ol",[s("li",[t._v("若 URL 中有参数 "),s("code",[t._v("id")]),t._v(" 则只会添加参数中的值而忽略配置中的值。")]),t._v(" "),s("li",[t._v("你可以在全局配置中添加 "),s("RouterLink",{attrs:{to:"/guide/custom-config.html#quantumultxconfig-deviceids"}},[t._v("固定的设备 ID")]),t._v("。")],1)])]),t._v(" "),s("h3",{attrs:{id:"转换-quantumult-x-rewrite-remote"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转换-quantumult-x-rewrite-remote"}},[t._v("#")]),t._v(" 转换 Quantumult X rewrite_remote")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET /qx-rewrite-remote?url=<远程脚本地址>\n")])])]),s("Badge",{attrs:{text:"即将废弃",vertical:"middle",type:"error"}}),t._v(" "),s("p",[t._v("可选参数：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("值")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("id")])]),t._v(" "),s("td",[t._v("设备 ID")]),t._v(" "),s("td",[t._v("多个值以半角 "),s("code",[t._v(",")]),t._v(" 分隔")])])])]),t._v(" "),s("p",[t._v("以 "),s("a",{attrs:{href:"https://github.com/NobyDa/Script/blob/master/QuantumultX/Js.conf",target:"_blank",rel:"noopener noreferrer"}},[t._v("这个脚本"),s("OutboundLink")],1),t._v(" 为例，API 会将内容里的 "),s("code",[t._v("script-response-body")]),t._v(" 条目的脚本地址替换成注入设备 ID API 的地址。")]),t._v(" "),s("p",[t._v("使用时，将规则放入 "),s("code",[t._v("rewrite_remote")]),t._v(" 即可。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[rewrite_remote]\nhttps://xxx.xx.now.sh/qx-rewrite-remote?url=https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/Js.conf, tag=NobyDa, enabled=true\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("ol",[s("li",[t._v("若 URL 中有参数 "),s("code",[t._v("id")]),t._v(" 则只会添加参数中的值而忽略配置中的值。")]),t._v(" "),s("li",[t._v("你可以在全局配置中添加 "),s("RouterLink",{attrs:{to:"/guide/custom-config.html#quantumultxconfig-deviceids"}},[t._v("固定的设备 ID")]),t._v("。")],1)])])],1)}),[],!1,null,null,null);a.default=r.exports}}]);