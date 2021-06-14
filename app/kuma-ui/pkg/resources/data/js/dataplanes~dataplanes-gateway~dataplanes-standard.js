(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dataplanes~dataplanes-gateway~dataplanes-standard"],{"63b5":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("KCard",{attrs:{"border-variant":"noBorder"}},[a("template",{slot:"body"},[a("ul",t._l(t.warnings,(function(e){var n=e.kind,s=e.payload,r=e.index;return a("li",{key:n+"/"+r,staticClass:"mb-1"},[a("KAlert",{attrs:{appearance:"warning"}},[a("template",{slot:"alertMessage"},[a(t.getWarningComponent(n),{tag:"component",attrs:{payload:s}})],1)],2)],1)})),0)])],2)},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t._v(" "+t._s(t.payload)+" ")])},i=[],o={name:"WarningDefault",props:{payload:{type:[String,Object],required:!0}}},l=o,u=a("2877"),p=Object(u["a"])(l,r,i,!1,null,null,null),c=p.exports,d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t._v(" Envoy ("),a("strong",[t._v(t._s(t.payload.envoy))]),t._v(") is unsupported by the current version of Kuma DP ("),a("strong",[t._v(t._s(t.payload.kumaDp))]),t._v(") [Requirements: "),a("strong",[t._v(" "+t._s(t.payload.requirements))]),t._v("] ")])},m=[],v={name:"WarningEnvoyIncompatible",props:{payload:{type:Object,required:!0}}},b=v,y=Object(u["a"])(b,d,m,!1,null,null,null),h=y.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t._v(" There is mismatch between versions of Kuma DP ("),a("strong",[t._v(t._s(t.payload.kumaDpVersion))]),t._v(") and the Zone CP ("),a("strong",[t._v(t._s(t.payload.zoneVersion))]),t._v(") ")])},f=[],_={name:"WarningZoneAndKumaDPVersionsIncompatible",props:{payload:{type:Object,required:!0}}},w=_,k=Object(u["a"])(w,g,f,!1,null,null,null),x=k.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t._v(" Unsupported version of Kuma DP ("),a("strong",[t._v(t._s(t.payload.kumaDpVersion))]),t._v(") ")])},E=[],D={name:"WarningUnsupportedKumaDPVersion",props:{payload:{type:Object,required:!0}}},T=D,j=Object(u["a"])(T,O,E,!1,null,null,null),C=j.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t._v(" There is mismatch between versions of Zone CP ("),a("strong",[t._v(t._s(t.payload.zoneCpVersion))]),t._v(") and the Global CP ("),a("strong",[t._v(t._s(t.payload.globalCpVersion))]),t._v(") ")])},L=[],S={name:"WarningZoneAndGlobalCPSVersionsIncompatible",props:{payload:{type:Object,required:!0}}},U=S,$=Object(u["a"])(U,V,L,!1,null,null,null),I=$.exports,P=a("dbf3"),R={name:"Warnings",props:{warnings:{type:Array,required:!0}},methods:{getWarningComponent:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";switch(t){case P["b"]:return h;case P["c"]:return C;case P["f"]:return x;case P["e"]:return I;default:return c}}}},A=R,K=Object(u["a"])(A,n,s,!1,null,null,null);e["a"]=K.exports},6663:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"entity-url-control"},[t.shouldDisplay?a("KClipboardProvider",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.copyToClipboard;return[a("KPop",{attrs:{placement:"bottom"}},[a("KButton",{attrs:{appearance:"secondary",size:"small"},on:{click:function(){n(t.url)}}},[a("KIcon",{attrs:{slot:"icon",icon:"externalLink"},slot:"icon"}),t._v(" "+t._s(t.copyButtonText)+" ")],1),a("div",{attrs:{slot:"content"},slot:"content"},[a("p",[t._v(t._s(t.confirmationText))])])],1)]}}],null,!1,1603401634)}):t._e()],1)},s=[],r=a("a026"),i=r["default"].extend({name:"EntityURLControl",props:{url:{type:String,required:!0},copyButtonText:{type:String,default:"Copy URL"},confirmationText:{type:String,default:"URL copied to clipboard!"}},computed:{shouldDisplay:function(){var t=this.$route.params.mesh||null;return!(!t||"all"===t)}}}),o=i,l=a("2877"),u=Object(l["a"])(o,n,s,!1,null,null,null);e["a"]=u.exports},"85e6":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("FrameSkeleton",[a("DataOverview",{attrs:{"page-size":t.pageSize,"has-error":t.hasError,"is-loading":t.isLoading,"empty-state":t.getEmptyState(),"display-data-table":!0,"table-data":t.buildTableData(),"table-data-is-empty":t.tableDataIsEmpty,"show-warnings":t.tableData.data.some((function(t){return t.withWarnings})),"table-data-function-text":"View","table-data-row":"name"},on:{tableAction:t.tableAction,reloadData:t.loadData}},[a("template",{slot:"additionalControls"},[a("KButton",{staticClass:"add-dp-button",attrs:{appearance:"primary",size:"small",to:t.dataplaneWizardRoute}},[a("span",{staticClass:"custom-control-icon"},[t._v(" + ")]),t._v(" Create data plane proxy ")]),this.$route.query.ns?a("KButton",{staticClass:"back-button",attrs:{appearance:"primary",size:"small",to:t.nsBackButtonRoute}},[a("span",{staticClass:"custom-control-icon"},[t._v(" ← ")]),t._v(" View All ")]):t._e()],1),a("template",{slot:"pagination"},[a("Pagination",{attrs:{"has-previous":t.previous.length>0,"has-next":t.hasNext},on:{next:t.goToNextPage,previous:t.goToPreviousPage}})],1)],2),!1===t.isEmpty?a("Tabs",{attrs:{"has-error":t.hasError,"is-loading":t.isLoading,tabs:t.filterTabs(),"initial-tab-override":"overview"}},[a("template",{slot:"tabHeader"},[a("div",[a("h3",[t._v(t._s(t.tabGroupTitle))])]),a("div",[a("EntityURLControl",{attrs:{url:t.shareUrl}})],1)]),a("template",{slot:"overview"},[a("LabelList",{attrs:{"has-error":t.entityHasError,"is-loading":t.entityIsLoading,"is-empty":t.entityIsEmpty}},[a("div",[a("ul",t._l(t.entity.basicData,(function(e,n){return a("li",{key:n},[a("div","status"===n?[a("h4",[t._v(t._s(n))]),a("div",{staticClass:"entity-status",class:{"is-offline":"offline"===e.status.toString().toLowerCase()||!1===e.status,"is-degraded":"partially degraded"===e.status.toString().toLowerCase()||!1===e.status}},[a("span",{staticClass:"entity-status__label"},[t._v(t._s(e.status))])]),a("div",{staticClass:"reason-list"},[a("ul",t._l(e.reason,(function(e){return a("li",{key:e},[a("span",{staticClass:"entity-status__dot"}),t._v(" "+t._s(e)+" ")])})),0)])]:[a("h4",[t._v(t._s(n))]),t._v(" "+t._s(e)+" ")])])})),0)]),a("div",[a("h4",[t._v("Tags")]),a("p",t._l(t.entity.tags,(function(e,n){return a("span",{key:n,staticClass:"tag-cols"},[a("span",[t._v(" "+t._s(e.label)+": ")]),a("span",[t._v(" "+t._s(e.value)+" ")])])})),0)])])],1),t.showMtls?a("template",{slot:"mtls"},[a("LabelList",{attrs:{"has-error":t.entityHasError,"is-loading":t.entityIsLoading,"is-empty":t.entityIsEmpty}},[t.entity.mtls?a("ul",t._l(t.entity.mtls,(function(e,n){return a("li",{key:n},[a("h4",[t._v(t._s(e.label))]),a("p",[t._v(" "+t._s(e.value)+" ")])])})),0):a("KAlert",{attrs:{appearance:"danger"}},[a("template",{slot:"alertMessage"},[t._v(" This data plane proxy does not yet have mTLS configured — "),a("a",{staticClass:"external-link",attrs:{href:"https://kuma.io/docs/"+t.version+"/documentation/security/#certificates",target:"_blank"}},[t._v(" Learn About Certificates in "+t._s(t.$productName)+" ")])])],2)],1)],1):t._e(),a("template",{slot:"yaml"},[a("YamlView",{attrs:{title:t.entityOverviewTitle,"has-error":t.entityHasError,"is-loading":t.entityIsLoading,"is-empty":t.entityIsEmpty,content:t.rawEntity}})],1),a("template",{slot:"warnings"},[a("Warnings",{attrs:{warnings:t.warnings}})],1)],2):t._e()],1)},s=[],r=(a("99af"),a("4de4"),a("7db0"),a("d81d"),a("13d5"),a("b0c0"),a("d3b7"),a("3ca3"),a("ddb0"),a("96cf"),a("1da1")),i=a("5530"),o=a("2f62"),l=a("bc1e"),u=a("dbf3"),p=a("6663"),c=a("b912"),d=a("1d10"),m=a("1799"),v=a("2778"),b=a("251b"),y=a("ff9d"),h=a("0ada"),g=a("63b5"),f="kuma.io/zone",_={name:"Dataplanes",components:{Warnings:g["a"],EntityURLControl:p["a"],FrameSkeleton:d["a"],Pagination:m["a"],DataOverview:v["a"],Tabs:b["a"],YamlView:y["a"],LabelList:h["a"]},mixins:[c["a"]],props:{nsBackButtonRoute:{type:Object,default:function(){return{name:"dataplanes"}}},emptyStateMsg:{type:String,default:"There are no data plane proxies present."},dataplaneApiParams:{type:Object,default:function(){return{}}},getDataplaneType:{type:Function,default:u["l"]},tableHeaders:{type:Array,default:function(){return[{key:"actions",hideLabel:!0},{label:"Status",key:"status"},{label:"Name",key:"name"},{label:"Mesh",key:"mesh"},{label:"Type",key:"type"},{label:"Tags",key:"tags"},{label:"Last Connected",key:"lastConnected"},{label:"Last Updated",key:"lastUpdated"},{label:"Total Updates",key:"totalUpdates"},{label:"Kuma DP version",key:"dpVersion"},{label:"Envoy version",key:"envoyVersion"},{key:"warnings",hideLabel:!0}]}},tabs:{type:Array,default:function(){return[{hash:"#overview",title:"Overview"},{hash:"#mtls",title:"Certificate Insights"},{hash:"#yaml",title:"YAML"},{hash:"#warnings",title:"Warnings"}]}},buildEntity:{type:Function,default:function(t,e,a){var n=a.mTLS?Object(u["o"])(a.mTLS):null;return{basicData:t,tags:e,mtls:n}}},addDataFields:{type:Function,default:function(){return{}}},showMtls:{type:Boolean,default:!0}},data:function(){return{isLoading:!0,isEmpty:!1,hasError:!1,entityIsLoading:!0,entityIsEmpty:!1,entityHasError:!1,warnings:[],tableDataIsEmpty:!1,tableData:{headers:[],data:[]},entity:[],rawEntity:null,firstEntity:null,pageSize:this.$pageSize,pageOffset:null,next:null,hasNext:!1,previous:[],tabGroupTitle:null,entityNamespace:null,entityOverviewTitle:null,shownTLSTab:!1}},computed:Object(i["a"])(Object(i["a"])({},Object(o["c"])({environment:"getEnvironment",queryNamespace:"getItemQueryNamespace",supportedVersions:"getSupportedVersions",supportedVersionsLoading:"getSupportedVersionsFetching",multicluster:"getMulticlusterStatus"})),{},{dataplaneWizardRoute:function(){return"universal"===this.environment?{name:"universal-dataplane"}:{name:"kubernetes-dataplane"}},version:function(){var t=this.$store.getters.getVersion;return null!==t?t:"latest"},shareUrl:function(){var t=this,e="".concat(window.location.origin,"/#"),a=this.entity,n=function(){return a.basicData?t.$route.query.ns?t.$route.fullPath:"".concat(e).concat(t.$route.fullPath,"?ns=").concat(a.basicData.name):null};return n()}}),watch:{$route:function(){this.loadData()}},beforeMount:function(){this.fetchSupportedVersions(),this.loadData()},methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["fetchSupportedVersions"])),{},{init:function(){this.loadData()},getEmptyState:function(){return{title:"No Data",message:this.emptyStateMsg}},filterTabs:function(){return this.warnings.length?this.tabs:this.tabs.filter((function(t){return"#warnings"!==t.hash}))},buildTableData:function(){return Object(i["a"])(Object(i["a"])({},this.tableData),{},{headers:this.tableHeaders})},checkVersionsCompatibility:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Object(u["h"])(this.supportedVersions,t,e)},goToPreviousPage:function(){this.pageOffset=this.previous.pop(),this.next=null,this.loadData()},goToNextPage:function(){this.previous.push(this.pageOffset),this.pageOffset=this.next,this.next=null,this.loadData()},tableAction:function(t){var e=t;this.$store.dispatch("updateSelectedTab",this.tabs[0].hash),this.$store.dispatch("updateSelectedTableRow",e.name),this.getEntity(e)},loadData:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n,s,o,p,c,d,m,v,b;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,a=t.$route.params.mesh||null,n=t.$route.query.ns||null,s=Object(i["a"])({size:t.pageSize,offset:t.pageOffset},t.dataplaneApiParams),o=function(){return"all"===a?t.$api.getAllDataplaneOverviews(s):n&&n.length&&"all"!==a?t.$api.getDataplaneOverviewFromMesh(a,n):t.$api.getAllDataplaneOverviewsFromMesh(a,s)},p=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(a,n,s){var r,o,p,c,d,m,v,b,y,h,g,_,w,k,x,O,E,D,T,j,C,V,L,S,U,$,I,P,R,A;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$api.getDataplaneOverviewFromMesh(a,n);case 3:r=e.sent,o=r.dataplane,p=void 0===o?{}:o,c=r.dataplaneInsight,d=void 0===c?{}:c,m=r.name,v=void 0===m?"":m,b=r.mesh,y=void 0===b?"":b,h=d.subscriptions,g=void 0===h?[]:h,_=Object(u["i"])(p),w=Object(u["m"])(p,d),k=w.status,x={totalUpdates:0,totalRejectedUpdates:0,dpVersion:"-",envoyVersion:"-",selectedTime:NaN,selectedUpdateTime:NaN},O=g.reduce((function(t,e){var a=e.status,n=void 0===a?{}:a,s=e.connectTime,r=e.version,i=void 0===r?{}:r,o=n.total,l=void 0===o?{}:o,u=n.lastUpdateTime,p=l.responsesSent,c=void 0===p?"0":p,d=l.responsesRejected,m=void 0===d?"0":d,v=i.kumaDp,b=void 0===v?{}:v,y=i.envoy,h=void 0===y?{}:y,g=b.version,f=h.version,_=t.selectedTime,w=t.selectedUpdateTime,k=Date.parse(s),x=Date.parse(u);return k&&(!_||k>_)&&(_=k),x&&(!w||x>w)&&(w=x),{totalUpdates:t.totalUpdates+parseInt(c),totalRejectedUpdates:t.totalRejectedUpdates+parseInt(m),dpVersion:g||t.dpVersion,envoyVersion:f||t.envoyVersion,selectedTime:_,selectedUpdateTime:w}}),x),E=O.totalUpdates,D=O.totalRejectedUpdates,T=O.dpVersion,j=O.envoyVersion,C=O.selectedTime,V=O.selectedUpdateTime,L=C?Object(l["g"])(new Date(C).toUTCString()):"never",S=V?Object(l["g"])(new Date(V).toUTCString()):"never",U=Object(i["a"])({name:v,mesh:y,tags:_,status:k,lastConnected:L,lastUpdated:S,totalUpdates:E,totalRejectedUpdates:D,dpVersion:T,envoyVersion:j,withWarnings:!1,unsupportedEnvoyVersion:!1,unsupportedKumaDPVersion:!1,kumaDpAndKumaCpMismatch:!1,type:t.getDataplaneType()},t.addDataFields(p)),$=t.checkVersionsCompatibility(T,j),I=$.kind,e.t0=I,e.next=e.t0===u["b"]?19:e.t0===u["c"]?22:25;break;case 19:return U.unsupportedEnvoyVersion=!0,U.withWarnings=!0,e.abrupt("break",25);case 22:return U.unsupportedKumaDPVersion=!0,U.withWarnings=!0,e.abrupt("break",25);case 25:if(!t.multicluster){e.next=39;break}if(P=_.find((function(t){return t.label===f})),!P){e.next=39;break}return e.prev=28,e.next=31,Object(u["g"])(t.$api,P.value,T);case 31:R=e.sent,A=R.compatible,A||(U.withWarnings=!0,U.kumaDpAndKumaCpMismatch=!0),e.next=39;break;case 36:e.prev=36,e.t1=e["catch"](28),console.error(e.t1);case 39:return s.push(U),t.sortEntities(s),e.abrupt("return",s);case 44:e.prev=44,e.t2=e["catch"](0),console.error(e.t2);case 47:case"end":return e.stop()}}),e,null,[[0,44],[28,36]])})));return function(t,a,n){return e.apply(this,arguments)}}(),e.prev=6,e.next=9,o();case 9:if(c=e.sent,d=function(){var e=c;return"total"in e?0!==e.total&&e.items&&e.items.length>0?t.sortEntities(e.items):null:e},!d()){e.next=33;break}return c.next?(t.next=Object(l["e"])(c.next),t.hasNext=!0):t.hasNext=!1,m=[],v=n?d():d()[0],t.firstEntity=v.name,e.next=18,t.getEntity(v);case 18:return e.next=20,t.$store.dispatch("updateSelectedTableRow",t.firstEntity);case 20:if(!(n&&n.length&&a&&a.length)){e.next=25;break}return e.next=23,p(a,n,m);case 23:e.next=28;break;case 25:return b=d().map((function(t){return p(t.mesh,t.name,m)})),e.next=28,Promise.all(b);case 28:t.tableData.data=m,t.tableDataIsEmpty=!1,t.isEmpty=!1,e.next=38;break;case 33:return t.tableData.data=[],t.tableDataIsEmpty=!0,t.isEmpty=!0,e.next=38,t.getEntity(null);case 38:e.next=45;break;case 40:e.prev=40,e.t0=e["catch"](6),t.hasError=!0,t.isEmpty=!0,console.error(e.t0);case 45:setTimeout((function(){t.isLoading=!1}),"500");case 46:case"end":return e.stop()}}),e,null,[[6,40]])})))()},getEntity:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n,s,r,o,p,c,d,m,v,b,y,h,g,_,w,k,x,O,E,D,T,j,C,V;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.entityIsLoading=!0,e.entityIsEmpty=!1,n=e.$route.params.mesh,!t){a.next=55;break}return s="all"===n?t.mesh:n,a.prev=5,a.next=8,e.$api.getDataplaneOverviewFromMesh(s,t.name);case 8:if(r=a.sent,o=Object(u["j"])(r),!o){a.next=44;break}if(p=["type","name","mesh"],c=Object(u["k"])(r)||{},d=Object(u["m"])(o,c),m=Object(u["i"])(o),v=Object(i["a"])(Object(i["a"])({},Object(l["f"])(o,p)),{},{status:d}),e.entity=e.buildEntity(v,m,c),e.entityNamespace=v.name,e.tabGroupTitle="Mesh: ".concat(v.name),e.entityOverviewTitle="Entity Overview for ".concat(v.name),e.warnings=[],b=c.subscriptions,y=void 0===b?[]:b,!y.length){a.next=41;break}if(h=y.pop(),g=h.version,_=void 0===g?{}:g,w=_.kumaDp,k=void 0===w?{}:w,x=_.envoy,O=void 0===x?{}:x,k&&O&&(E=e.checkVersionsCompatibility(k.version,O.version),D=E.kind,D!==u["a"]&&D!==u["d"]&&e.warnings.push(E)),!e.multicluster){a.next=41;break}if(T=m.find((function(t){return t.label===f})),!T){a.next=41;break}return a.prev=29,a.next=32,Object(u["g"])(e.$api,T.value,k.version);case 32:j=a.sent,C=j.compatible,V=j.payload,C||e.warnings.push({kind:u["f"],payload:V}),a.next=41;break;case 38:a.prev=38,a.t0=a["catch"](29),console.error(a.t0);case 41:e.rawEntity=Object(l["k"])(o),a.next=46;break;case 44:e.entity=null,e.entityIsEmpty=!0;case 46:a.next=52;break;case 48:a.prev=48,a.t1=a["catch"](5),e.entityHasError=!0,console.error(a.t1);case 52:setTimeout((function(){e.entityIsLoading=!1}),"500"),a.next=56;break;case 55:setTimeout((function(){e.entityIsEmpty=!0,e.entityIsLoading=!1}),"500");case 56:case"end":return a.stop()}}),a,null,[[5,48],[29,38]])})))()}})},w=_,k=(a("b207"),a("2877")),x=Object(k["a"])(w,n,s,!1,null,"553815f9",null);e["a"]=x.exports},b207:function(t,e,a){"use strict";a("ebb6")},ebb6:function(t,e,a){}}]);