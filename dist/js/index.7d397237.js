(function(e){function t(t){for(var r,o,s=t[0],c=t[1],i=t[2],d=0,v=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&v.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(v.length)v.shift()();return l.push.apply(l,i||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],r=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(r=!1)}r&&(l.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={index:0},l=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var u=c;l.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("85ec"),n=a.n(r);n.a},"1e3b":function(e,t,a){"use strict";var r=a("b3f8"),n=a.n(r);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-app",[a("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-container",[a("v-row",[a("v-col",{attrs:{col:"12"}},[a("v-btn",{staticClass:"mb-3",attrs:{to:"/",color:"primary",block:""}},[e._v("หน้าแรก")]),a("v-btn",{staticClass:"mb-3",attrs:{to:"/customers",color:"primary",block:""}},[e._v("ลูกค้า")]),a("v-btn",{staticClass:"mb-3",attrs:{to:"/products",color:"primary",block:""}},[e._v("สินค้า")]),a("v-btn",{staticClass:"mb-3",attrs:{to:"/reports",color:"primary",block:""}},[e._v("รายงาน")]),a("v-btn",{staticClass:"mb-3",attrs:{to:"/about",color:"error",block:""}},[e._v("เกี่ยวกับเรา")])],1)],1)],1)],1),a("v-app-bar",{attrs:{app:"","clipped-left":""}},[a("v-btn",{staticClass:"ma-2",attrs:{outlined:"",fab:""},on:{click:function(t){e.drawer=!e.drawer}}},[a("v-icon",{attrs:{color:"dark"}},[e._v("mdi-format-list-bulleted-square")])],1),a("v-toolbar-title",[e._v(" ระบบเก็บข้อมูลร้านค้า ")])],1),a("v-main",[a("router-view")],1),a("v-footer",{attrs:{app:""}},[a("span",[e._v("© RMUTL "+e._s((new Date).getFullYear()+543))])])],1)],1)},l=[],o={data:function(){return{message:"RMUTL",drawer:null}}},s=o,c=(a("034f"),a("2877")),i=a("6544"),u=a.n(i),d=a("7496"),v=a("40dc"),f=a("8336"),b=a("62ad"),p=a("a523"),m=a("553a"),_=a("132d"),h=a("f6c4"),x=a("f774"),k=a("0fd9"),g=a("2a7f"),V=Object(c["a"])(s,n,l,!1,null,null,null),w=V.exports;u()(V,{VApp:d["a"],VAppBar:v["a"],VBtn:f["a"],VCol:b["a"],VContainer:p["a"],VFooter:m["a"],VIcon:_["a"],VMain:h["a"],VNavigationDrawer:x["a"],VRow:k["a"],VToolbarTitle:g["a"]});var C=a("8c4f"),y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",[a("v-col",{attrs:{col:"4"}},[a("v-card",{attrs:{color:"#385F73",dark:""}},[a("v-card-title",[a("div",{staticClass:"font-big"},[e._v("จำนวนลูกค้า")])]),a("v-card-text",[a("div",{staticClass:"font-big"},[e._v("50 คน")])]),a("v-card-actions",[a("v-btn",{attrs:{text:""}},[e._v("ข้อมูลลูกค้า")])],1)],1)],1),a("v-col",{attrs:{col:"4"}},[a("v-card",{attrs:{color:"#385F73",dark:""}},[a("v-card-title",[a("div",{staticClass:"font-big"},[e._v("จำนวนสินค้า")])]),a("v-card-text",[a("div",{staticClass:"font-big"},[e._v("20 ชิ้น")])]),a("v-card-actions",[a("v-btn",{attrs:{text:""}},[e._v("ข้อมูลสินค้า")])],1)],1)],1),a("v-col",{attrs:{col:"4"}},[a("v-card",{attrs:{color:"#385F73",dark:""}},[a("v-card-title",[a("div",{staticClass:"font-big"},[e._v("จำนวนรายงาน")])]),a("v-card-text",[a("div",{staticClass:"font-big"},[e._v("16 รายการ")])]),a("v-card-actions",[a("v-btn",{attrs:{text:""}},[e._v("ข้อมูลสินค้า")])],1)],1)],1)],1),a("v-row",[a("v-col",{attrs:{col:"12"}},[a("v-card",{staticClass:"mx-auto text-center",attrs:{color:"green",dark:""}},[a("v-card-text",[a("v-sheet",{attrs:{color:"rgba(0, 0, 0, .12)"}},[a("v-sparkline",{attrs:{value:e.value,color:"rgba(255, 255, 255, .8)",height:"70",padding:"14","stroke-linecap":"round",smooth:"","line-widht":"5"},scopedSlots:e._u([{key:"label",fn:function(t){return[e._v(" "+e._s(t.value)+" บ.")]}}])})],1)],1),a("v-card-text",[a("div",{staticClass:"font-big"},[e._v("รายงานการขาย")])])],1)],1)],1)],1)},R=[],O={data:function(){return{value:[423,446,675,510,590,610,760]}}},j=O,q=(a("1e3b"),a("b0af")),S=a("99d9"),T=a("8dd9"),$=a("7f2e"),P=Object(c["a"])(j,y,R,!1,null,null,null),F=P.exports;u()(P,{VBtn:f["a"],VCard:q["a"],VCardActions:S["a"],VCardText:S["b"],VCardTitle:S["c"],VCol:b["a"],VContainer:p["a"],VRow:k["a"],VSheet:T["a"],VSparkline:$["a"]});var M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[e._v(" เกี่ยวกับเรา ")])},E=[],I={},A=I,B=Object(c["a"])(A,M,E,!1,null,null,null),D=B.exports;u()(B,{VContainer:p["a"]});var J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{counter:20,rules:e.nameRules,label:"ชื่อ",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{counter:20,rules:e.lastnameRules,label:"นามสกุล",required:""},model:{value:e.lastname,callback:function(t){e.lastname=t},expression:"lastname"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{counter:50,rules:e.emailRules,label:"อีเมล",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{counter:10,rules:e.telRules,label:"เบอร์โทรศัพท์",required:""},model:{value:e.tel,callback:function(t){e.tel=t},expression:"tel"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"2"}},[a("v-text-field",{attrs:{counter:20,rules:e.addressRules,label:"เลขที่อยู่",required:""},model:{value:e.a_number,callback:function(t){e.a_number=t},expression:"a_number"}})],1),a("v-col",{attrs:{cols:"2"}},[a("v-text-field",{attrs:{counter:20,rules:e.addressRules,label:"หมู่ที่",required:""},model:{value:e.a_groub,callback:function(t){e.a_groub=t},expression:"a_groub"}})],1),a("v-col",{attrs:{cols:"4"}},[a("v-text-field",{attrs:{counter:20,rules:e.addressRules,label:"ถนน",required:""},model:{value:e.a_road,callback:function(t){e.a_road=t},expression:"a_road"}})],1),a("v-col",{attrs:{cols:"4"}},[a("v-text-field",{attrs:{counter:20,rules:e.addressRules,label:"ซอย/ตรอก",required:""},model:{value:e.a_lane,callback:function(t){e.a_lane=t},expression:"a_lane"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("v-text-field",{attrs:{counter:20,rules:e.addressRules,label:"ตำบล",required:""},model:{value:e.a_subdis,callback:function(t){e.a_subdis=t},expression:"a_subdis"}})],1),a("v-col",{attrs:{cols:"4"}},[a("v-text-field",{attrs:{counter:20,rules:e.addressRules,label:"อำเภอ",required:""},model:{value:e.a_dis,callback:function(t){e.a_dis=t},expression:"a_dis"}})],1),a("v-col",{attrs:{cols:"4"}},[a("v-text-field",{attrs:{counter:20,rules:e.addressRules,label:"จังหวัด",required:""},model:{value:e.a_province,callback:function(t){e.a_province=t},expression:"a_province"}})],1)],1),a("v-select",{attrs:{items:e.sex,rules:[function(e){return!!e||"กรุณาเลือกเพศ"}],label:"เพศ",required:""},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}}),a("v-checkbox",{attrs:{rules:e.checkboxRules,label:"ยอมรับเงื่อนไข?",required:""},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}}),a("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"success"},on:{click:e.validate}},[e._v(" สมัครสมาชิก ")]),a("v-btn",{staticClass:"mr-4",attrs:{color:"error"},on:{click:e.reset}},[e._v(" เคลียร์ ")])],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-card-title",[e._v(" ข้อมูลลูกค้า "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-data-table",{attrs:{headers:e.headers,items:e.desserts,search:e.search}})],1)],1)],1)]],2)},L=[],U=(a("99af"),a("b0c0"),{data:function(){return{valid:!0,name:"",lastname:"",nameRules:[function(e){return!!e||"กรุณากรอกชื่อ"},function(e){return e&&e.length<=20||"ชื่อต้องมีขนาดไม่เกิน 20 ตัวอักษร"}],lastnameRules:[function(e){return!!e||"กรุณากรอกนามสกุล"},function(e){return e&&e.length<=20||"นามสกุลต้องมีขนาดไม่เกิน 20 ตัวอักษร"}],email:"",emailRules:[function(e){return!!e||"กรุณากรอกอีเมล"},function(e){return/.+@.+\..+/.test(e)||"รูปแบบอีเมบไม่ถูกต้อง"},function(e){return e&&e.length<=50||"อีเมลต้องมีความยาวไม่เกิน 50 ตัวอักษร"}],tel:"",telRules:[function(e){return!!e||"กรุณากรอกเบอร์โทรศัพท์"},function(e){return e&&e.length<=10||"เบอร์โทรศัพท์ต้องมีความยาวไม่เกิน 10 หลัก"}],checkboxRules:[function(e){return!!e||"ต้องกดยอมรับเงื่อนไขก่อนสมัครสมาชิก"}],select:null,items:["Item 1","Item 2","Item 3","Item 4"],sex:["ชาย","หญิง"],checkbox:!1,a_number:"",a_groub:"",a_road:"",a_lane:"",a_subdis:"",a_dis:"",a_province:"",addressRules:[function(e){return!!e||"กรุณากรอกข้อมูล"},function(e){return e&&e.length<=20||"ข้อมูลต้องมีขนาดไม่เกิน 20 ตัวอักษร"}],search:"",headers:[{text:"ชื่อ - นามสกุล",value:"fullname"},{text:"เบอร์โทรศัพท์",value:"tel"},{text:"อีเมล",value:"email"},{text:"เพศ",value:"sex"},{text:"ที่อยู่",value:"address"}],desserts:[]}},methods:{validate:function(){this.$refs.form.validate()&&this.desserts.push({fullname:"".concat(this.name," ").concat(this.lastname),tel:"".concat(this.tel),email:"".concat(this.email),sex:"".concat(this.select),address:"".concat(this.a_number," ม.").concat(this.a_groub," ถ.").concat(this.a_road," ซ/ด.").concat(this.a_lane,"\n          ต.").concat(this.a_subdis," อ.").concat(this.a_dis," จ.").concat(this.a_province)})},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()}}}),z=U,H=a("ac7c"),N=a("8fea"),Y=a("4bd4"),G=a("b974"),K=a("2fa4"),Q=a("8654"),W=Object(c["a"])(z,J,L,!1,null,null,null),X=W.exports;u()(W,{VBtn:f["a"],VCard:q["a"],VCardTitle:S["c"],VCheckbox:H["a"],VCol:b["a"],VContainer:p["a"],VDataTable:N["a"],VForm:Y["a"],VRow:k["a"],VSelect:G["a"],VSpacer:K["a"],VTextField:Q["a"]});var Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[e._v(" สินค้า ")])},ee=[],te={},ae=te,re=Object(c["a"])(ae,Z,ee,!1,null,null,null),ne=re.exports;u()(re,{VContainer:p["a"]});var le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[e._v(" รายงาน ")])},oe=[],se={},ce=se,ie=Object(c["a"])(ce,le,oe,!1,null,null,null),ue=ie.exports;u()(ie,{VContainer:p["a"]}),r["a"].use(C["a"]);var de=[{path:"/customers",name:"Customer",component:X},{path:"/products",name:"Product",component:ne},{path:"/reports",name:"Report",component:ue},{path:"/",name:"Home",component:F},{path:"/about",name:"About",component:D}],ve=new C["a"]({mode:"history",base:"/",routes:de}),fe=ve,be=a("2f62");r["a"].use(be["a"]);var pe=new be["a"].Store({state:{},mutations:{},actions:{},modules:{}}),me=a("f309");r["a"].use(me["a"]);var _e=new me["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:fe,store:pe,vuetify:_e,render:function(e){return e(w)}}).$mount("#app")},"85ec":function(e,t,a){},b3f8:function(e,t,a){}});
//# sourceMappingURL=index.7d397237.js.map