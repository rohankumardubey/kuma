(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37163324"],{"0110":function(a,t,e){},1390:function(a,t){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAABGdBTUEAALGPC/xhBQAABFVJREFUeAHtnM9O1EAYwKfLyhOYECJqEEw8evDiAcLRGOUtyMIDeNF48eDFB4ANb4GJZwwHLx48GY0KMWIIiU+AsLXfSrGUKdvszp/t56/JhnamO9/M79evnd2dYAwbBCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAgDGJbwjdbjf1HUND+51Ox4uLlgY4jKGaQLu6ym3N1ptttw0qaW354ZLXkZDBXvHGbxzB8R147QGCveKN3ziC4zvw2gMEe8Ubv/Fgs+j4Qw3Tg1YrMXduz5qZa1P9gPs/D82nL3um14vzdQCCHXsXufNzN85azfc/ft49Kwu5wy3aMe08c4vN2sqK9T73EeyT7hi0jWDHEuSZW95sZeVzfB3zDHZMViZUsuW35XyS5ThM7eYQXBtVvRNltiwTqliTqnIvuUWXiSg7RrAyoeXhILhMRNkxgpUJLQ8HwWUiyo69z6J7vV4f2aMHi8rQuRlOzsdNaxdbIYMvMlFV4j2DW62/1xBrsuzXDWuy7FworUmAW3RNUE09DcFNNVez3wiuCaqppyG4qeZq9tv7LLpmP9ScxposNSrtA2FNlp2LmtL8h/7igGxlxXqf+zyDfdIdg7YR7FiCbf2Vrcxx2MrmmGRVohmugjVZw3FrzLtYk9UYVTo6yjNYh8fKUSC4Eo2OCgTr8Fg5CgRXotFR4f1jUr7miDVZ9gsm52OvHb2UDB6d4Vi34D2DWZN1uX/WZF3Oh9oBBLhFDwDU9GoEN93ggP4jeACgplcjuOkGB/Tf+yx6QHx11azJUqf0/IBYk3Weh7oj2/orW1mogfMMDkU6UhwEOwZvW39lK3MctrI5JlmVaIarYE3WcNwa8y7WZDVGlY6O8gzW4bFyFAiuRKOjItgky/fvnjp0uB8FGeyeKS3GJrC+vp7KK3Y/QsQng0NQjhgDwRHhhwiN4BCUI8ZAcET4IUIjOATliDEQHBF+iNAIDkE5YgwER4QfIjSCQ1COGAPBEeGHCI3gEJQjxkgixg4aenNzc+Hk5ORJFvRemqbTErzdbi+urKzsBO1I4GD/RQZ3u92nmdy3mdjHuVzhfHx8vC11gZkHDac+gyVzRWSamuTb3n5ycPirD3h66qqZm51Jk8SkWSYvac1k9Rl8eltuidzvPw7M0dHv/kv2pSyz3To9J2hmhQrmLIPH/ffVnXcf+mKLYCcnr5iF+3eLRWO3v7a2NpIj9Rk8dsYCd2ikqyNwX4cKt7GxsSWTq6+7+0Zuy8Xt5vVpM39rxiRJ8np1dXW5WKdlX30GT0xMvMpk9WRCJULltiwv2ZcyqTs9R4vTc+NQn8Ey2mx+8Cz78yJ7lS/oXvZfgJ53Op2Xcp7G7b8QLOKKX3Scinwvmav145HGi5UxQQACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIDAPwJ/ACqW/whzap9yAAAAAElFTkSuQmCC"},2486:function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"welcome welcome__step-1"},[n("p",{staticClass:"lg"},[a._v("\n      Kuma has been successfully installed, you’re one step away to build a\n      modern cloud-native architecture!\n    ")]),n("div",{staticClass:"app-setup"},[n("h3",{staticClass:"xl"},[a._v("\n        Let's set up your app\n      ")]),n("div",{staticClass:"app-source-check",class:{"app-source-check--error":a.appSourceError}},[a.appSource&&"universal"===a.appSource||"kubernetes"===a.appSource||"k8s"===a.appSource?n("div",{staticClass:"app-source-check__inner flex items-center -mx-4"},[n("div",{staticClass:"app-source-check__icon px-4"},["universal"===a.appSource?n("img",{attrs:{src:e("1390"),alt:"Kuma Universal Icon"}}):"kubernetes"===a.appSource||"k8s"===a.appSource?n("img",{attrs:{src:e("9e14"),alt:"Kuma Kubernetes Icon"}}):a._e()]),n("div",{staticClass:"app-source-check__content px-4"},[n("p",[a._v("Kuma is running on "+a._s(a.appSource))])]),a._m(0)]):n("div",[n("p",[a._v("The app was unable to determine Kuma's environment.")])])]),!1===a.tableDataLoadAttempted?n("div",{staticClass:"dataplane-loading-state flex -mx-2 mt-8"},[n("div",{staticClass:"px-2"},[n("KIcon",{attrs:{icon:"spinner",size:"36",color:"black"}})],1),a._m(1)]):a.tableData&&!1===a.tableDataIsEmpty?n("div",{staticClass:"mt-8"},[n("h2",{staticClass:"xl mb-2 pb-2"},[a._v("\n          "+a._s(a.dataplaneCountForTitle)+" Dataplane(s) found, including:\n        ")]),n("div",{staticClass:"data-table-wrapper"},[n("KTable",{attrs:{options:a.tableData}})],1),n("p",{staticClass:"mt-4"},[n("KButton",{attrs:{to:{name:"setup-complete"},appearance:"primary"}},[a._v("\n            Next Step\n          ")])],1)]):n("div",{staticClass:"dataplane-fallback-wrapper"},[a._m(2),n("div",{staticClass:"dataplane-walkthrough my-4"},[a.appSource&&"kubernetes"===a.appSource||"k8s"===a.appSource?n("div",[n("h3",{staticClass:"xl mb-2"},[a._v("\n              Adding New Dataplanes on Kubernetes\n            ")]),n("p",{staticClass:"mb-2"},[a._v("\n              On Kubernetes, Kuma can automatically deploy dataplanes\n              (also known as Sidecar Proxies) next to your applications.\n            ")]),n("p",[a._v("\n              First, you need to enable automatic sidecar injection at a Namespace level:\n            ")]),a._m(3),n("p",[a._v("\n              Then, you need to recreate application Pods:\n            ")]),a._m(4)]):n("div",[n("h3",{staticClass:"xl mb-2"},[a._v("\n              Adding New Dataplanes on Universal\n            ")]),n("p",{staticClass:"mb-2"},[a._v("\n              First, create a Dataplane resource to describe service(s) provided by your app:\n            ")]),a._m(5),n("p",[a._v("\n              Next, generate an identity token for the dataplane:\n            ")]),a._m(6),n("p",[a._v("\n              Lastly, start the dataplane:\n            ")]),a._m(7)]),n("KButton",{staticClass:"mt-4",attrs:{appearance:"primary"},on:{click:function(t){return a.reScanForDataplanes()}}},[a._v("\n            Re-Scan for Dataplanes\n          ")]),n("p")],1)])])])},s=[function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"px-4"},[n("img",{attrs:{src:e("57b2"),alt:"Checkmark Icon"}})])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"px-2"},[e("p",[a._v("\n            Waiting for Dataplanes to connect…\n          ")])])},function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"dataplane-fallback"},[n("div",{staticClass:"dataplane-fallback__inner flex -mx-4"},[n("div",{staticClass:"dataplane-fallback__icon px-4"},[n("img",{attrs:{src:e("6ec4"),alt:"Dataplane Icon"}})]),n("div",{staticClass:"dataplane-fallback__content px-4"},[n("h3",{staticClass:"dataplane-fallback__title mb-2 pb-2"},[a._v("\n                No Dataplanes detected.\n              ")]),n("p",{staticClass:"mb-2"},[a._v("\n                To bring your applications into Kuma Service Mesh,\n                you need to deploy dataplanes (also known as Sidecar Proxies)\n                next to them.\n              ")])])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("p",[e("code",[e("pre",[a._v("$ kubectl label namespace [YOUR_NAMESPACE] kuma.io/sidecar-injection=enabled")])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("p",[e("code",[e("pre",[a._v("$ kubectl -n [YOUR_NAMESPACE] delete pods --all")])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("p",[e("code",[e("pre",[a._v('$ echo "type: Dataplane\nmesh: default\nname: dp-echo-1\nnetworking:\n  inbound:\n  - interface: 127.0.0.1:10000:9000\n    tags:\n      service: echo" | kumactl apply -f -')])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("p",[e("code",[e("pre",[a._v("$ kumactl generate dataplane-token --dataplane=dp-echo-1 > /tmp/kuma-dp-echo-1")])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("p",[e("code",[e("pre",[a._v("$ kuma-dp run \\\n  --name=dp-echo-1 \\\n  --mesh=default \\\n  --cp-address=http://127.0.0.1:5681 \\\n  --dataplane-token-file=/tmp/kuma-dp-echo-1")])])])}],i=(e("ac6a"),e("8615"),e("bc3a")),c=e.n(i),l=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},o=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"app-setup-demo"},[e("h4",{staticClass:"lg mb-4"},[a._v("\n    Try with a Demo App instead\n  ")]),e("p",{staticClass:"lg light-text mb-4"},[a._v("\n    If you don’t have an application ready for Kuma, you can deploy a Demo App.\n    This can be removed later from the settings page.\n  ")]),e("p",[e("a",{staticClass:"arrow-link",attrs:{href:"#"}},[a._v("\n      Deploy Demo App\n    ")])])])}],p={},r=p,u=(e("6b5a"),e("2877")),A=Object(u["a"])(r,l,o,!1,null,null,null),g=A.exports,D={name:"OnboardingStep1",metaInfo:{title:"Welcome to Kuma!"},components:{DemoApp:g},data:function(){return{appSource:!1,appSourceError:!1,tableDataLoadDelay:1500,tableDataIsEmpty:!0,tableDataLoadAttempted:!1,tableDataDataplaneCount:null,tableData:{headers:[{label:"Dataplane",key:"name"},{label:"Mesh",key:"mesh"}],data:[]}}},computed:{dataplaneCountForTitle:function(){var a=this.tableDataDataplaneCount;return a&&a>10?"10+":a}},beforeMount:function(){this.bootstrap()},methods:{bootstrap:function(){this.isLoading=!0,this.isEmpty=!1,this.getAppType(),this.getDataplaneTableData()},reScanForDataplanes:function(){var a=this;this.tableDataIsEmpty=!1,this.tableDataLoadAttempted=!1,setTimeout((function(){a.getDataplaneTableData(),a.tableDataLoadAttempted=!0}),this.tableDataLoadDelay)},getDataplaneTableData:function(){var a=this;this.$store.dispatch("getAllDataplanes").then((function(){var t=Object.values(a.$store.getters.getDataplanesList);t.length>0?(a.tableDataDataplaneCount=t.length,a.tableData.data=[],a.tableDataLoadAttempted=!1,t.slice(0,10).map((function(t){a.tableData.data.push(t)})),a.tableDataIsEmpty=!1,setTimeout((function(){a.tableDataLoadAttempted=!0}),a.tableDataLoadDelay)):(a.tableDataLoadAttempted=!0,a.tableDataIsEmpty=!0)}))},getAppType:function(){var a=this;c.a.get("/config").then((function(t){200===t.status?a.appSource=t.data.environment:a.appSourceError=!0})).catch((function(t){a.appSource=!1,a.appSourceError=!1,console.log(t)}))}}},d=D,M=(e("45f7"),Object(u["a"])(d,n,s,!1,null,null,null));t["default"]=M.exports},"45f7":function(a,t,e){"use strict";var n=e("f345"),s=e.n(n);s.a},"57b2":function(a,t){a.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYuNzUgMTVMMjEuMDQ3LjcwM2EuOTk2Ljk5NiAwIDAxMS40MTUuMDA5bC44MjYuODI2Yy4zOTMuMzkzLjM5OCAxLjAyNi4wMDQgMS40Mkw3LjQ1OCAxOC43OTJhMS4wMDIgMS4wMDIgMCAwMS0xLjQxOC0uMDAyTC43MSAxMy40NmExIDEgMCAwMS4wMDItMS40MjJsLjgyNi0uODI2YTEuMDA5IDEuMDA5IDAgMDExLjQxNS0uMDA5TDYuNzUgMTV6IiBmaWxsPSIjMTE1NUNCIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4K"},"6b5a":function(a,t,e){"use strict";var n=e("0110"),s=e.n(n);s.a},"6ec4":function(a,t){a.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgNDAgMzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYxICg4OTU4MSkgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+aWNuLS1kYXRhcGxhbmU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iMXN0LXN0ZXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00MjQuMDAwMDAwLCAtNDMyLjAwMDAwMCkiIGZpbGw9IiM5NTlGQTYiPgogICAgICAgICAgICA8ZyBpZD0iQS1sZXQncy1zZXR1cC15b3VyLWFwcCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAwLjAwMDAwMCwgMjUwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImJhbm5lci0tbm8tZGF0YS1wbGFuZXMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxNTguMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTMwLDM4IEwzMCw1NCBMNTgsNTQgTDU4LDQ4IEw2MCw0OCBMNjAsNTQgQzYwLDU1LjEwNDU2OTUgNTkuMTA0NTY5NSw1NiA1OCw1NiBMMzAsNTYgQzI4Ljg5NTQzMDUsNTYgMjgsNTUuMTA0NTY5NSAyOCw1NCBMMjgsMzggTDMwLDM4IFogTTMyLDM4IEwzMiw1MiBMNTYsNTIgTDU2LDQ4IEw1Nyw0OCBMNTcsNTMgTDMxLDUzIEwzMSwzOCBMMzIsMzggWiBNNDIsNDEgTDQyLDQ0IEw2NCw0NCBMNjQsNDYgTDQyLDQ2IEw0Miw0OSBMMzcsNDUgTDQyLDQxIFogTTU3LDI3IEw1Nyw0MiBMNTYsNDIgTDU2LDI4IEwzMiwyOCBMMzIsMzIgTDMxLDMyIEwzMSwyNyBMNTcsMjcgWiBNNTgsMjQgQzU5LjEwNDU2OTUsMjQgNjAsMjQuODk1NDMwNSA2MCwyNiBMNjAsNDIgTDU4LDQyIEw1OCwyNiBMMzAsMjYgTDMwLDMyIEwyOCwzMiBMMjgsMjYgQzI4LDI0Ljg5NTQzMDUgMjguODk1NDMwNSwyNCAzMCwyNCBMNTgsMjQgWiBNNDYsMzEgTDUxLDM1IEw0NiwzOSBMNDYsMzYgTDI0LDM2IEwyNCwzNCBMNDYsMzQgTDQ2LDMxIFoiIGlkPSJpY24tLWRhdGFwbGFuZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="},"9e14":function(a,t,e){a.exports=e.p+"img/icon-k8s.fb248510.png"},f345:function(a,t,e){}}]);
//# sourceMappingURL=chunk-37163324.998d86e0.js.map