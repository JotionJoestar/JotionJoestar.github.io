(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24df464c"],{cb3a:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"alert alert-custom alert-white alert-shadow gutter-b mt-1",attrs:{role:"alert"}},[a("div",{staticClass:"alert-icon alert-icon-top"},[a("div",[a("img",{staticStyle:{height:"48px"},attrs:{src:"media/logos/task_logo/"+this.$store.state.taskinfo.name+".jpg"}})])]),a("div",{staticClass:"alert-text alert-text-center"},[a("p",{staticStyle:{"margin-top":"15px"}},[a("span",{staticClass:"label label-inline label-pill label-primary label-rounded mr-2"},[t._v(" DESCRIPTION: ")]),t._v(" "+t._s(this.$store.state.taskinfo.description)+" ")])])]),a("div",{staticClass:"card card-custom gutter-b"},[a("b-tabs",{attrs:{card:""}},[a("b-tab",{attrs:{title:"SOTA",active:""}},[a("WidgetDataset",{attrs:{SOTA_infos:this.dataset_json}})],1),a("b-tab",{attrs:{title:"Results"},on:{click:t.setResultsTab}},[a(t.show_component,{tag:"component",attrs:{"keep-alive":"",dataset_list:t.dataset_list,metric_list:t.metric_list,available_trans_list:t.available_trans_list}})],1),a("b-tab",{attrs:{title:"Transformations"}},[a("WidgetTransformations")],1)],1)],1)])},n=[],i=a("5530"),o=(a("b0c0"),a("2f62")),r=a("0bce"),c=a("f66a"),l=function(t){return a.e("chunk-2d0bcda6").then(function(){var e=[a("2a01")];t.apply(null,e)}.bind(this)).catch(a.oe)},d=function(t){return Promise.all([a.e("chunk-78d2c94e"),a.e("chunk-2d226cab")]).then(function(){var e=[a("e9bc")];t.apply(null,e)}.bind(this)).catch(a.oe)},u=function(t){return a.e("chunk-c06b3d10").then(function(){var e=[a("d1bb")];t.apply(null,e)}.bind(this)).catch(a.oe)},b={name:"builder",components:{WidgetDataset:l,WidgetTransformations:d,WidgetResults:u},beforeCreate:function(){},created:function(){var t=a("b485")("./"+this.$route.query.task+"/task_description.json");this.$store.dispatch(c["a"],t)},data:function(){var t=a("f0c7")("./"+this.$route.query.task+"/dataset_description.json"),e=new Array,s=new Array,n=new Array;for(var i in t)for(var o in e.push(t[i].name),n.push(t[i].available_transformation_type),s.push([]),t[i].models[0].metric)-1==s[i].indexOf(o)&&s[[i]].push(o);return{show_component:"",dataset_list:e,dataset_json:t,metric_list:s,available_trans_list:n,tabIndex:0}},computed:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["layoutConfig"])),{},{loaderLogo:function(){return"/"+this.layoutConfig("loader.logo")}}),mounted:function(){this.$store.dispatch(r["a"],[{title:this.$store.state.taskinfo.full_name}])},destroyed:function(){localStorage.removeItem("builderTab")},methods:{reset:function(t){t.preventDefault(),localStorage.removeItem("config"),window.location.reload()},loaderEnabled:function(){return!/false/.test(this.layoutConfig("loader.type"))},setActivePreviousTab:function(){this.tabIndex=parseInt(localStorage.getItem("builderTab"))||0;for(var t=this.$refs["builder-tab"].querySelectorAll(".nav-link"),e=0;e<t.length;e++)t[e].classList.remove("active");this.$refs["builder-tab"].querySelector('[data-tab="'.concat(this.tabIndex,'"]')).classList.add("active")},setActiveTab:function(t){for(var e=t.target.closest('[role="tablist"]'),a=e.querySelectorAll(".nav-link"),s=0;s<a.length;s++)a[s].classList.remove("active");this.tabIndex=parseInt(t.target.getAttribute("data-tab")),t.target.classList.add("active"),localStorage.setItem("builderTab",this.tabIndex)},setResultsTab:function(){this.show_component="WidgetResults"}}},f=b,p=a("2877"),h=Object(p["a"])(f,s,n,!1,null,null,null);e["default"]=h.exports},f0c7:function(t,e,a){var s={"./ABSA/dataset_description.json":"7262","./COREF/dataset_description.json":"6683","./CWS/dataset_description.json":"7c1f","./DP/dataset_description.json":"23b9","./MRC/dataset_description.json":"9c0d","./NER/dataset_description.json":"0c12","./NLI/dataset_description.json":"9702","./POS/dataset_description.json":"0f1b","./RE/dataset_description.json":"314d","./SA/dataset_description.json":"ce4f","./SM/dataset_description.json":"8cbe","./TC/dataset_description.json":"0550"};function n(t){var e=i(t);return a(e)}function i(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=i,t.exports=n,n.id="f0c7"}}]);
//# sourceMappingURL=chunk-24df464c.26ecdd1b.js.map