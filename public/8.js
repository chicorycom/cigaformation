(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+5+X":function(t,e,i){"use strict";var s={data(){return{hour:12,minute:"00",period:"PM",selected_time:this.value,popup_id:this.generateRandomString(10)}},props:{value:{required:!0,type:String},name:{type:String,default:()=>""},placeholder:{type:String,default:()=>""}},methods:{inputFocused(){document.getElementById(this.popup_id).classList.add("show")},inputOut(t){document.getElementById(this.popup_id).classList.remove("show")},addHour(){12==this.hour?this.hour=1:this.hour+=1},addMinute(){if(55==this.minute)this.minute="00";else{let t=parseInt(this.minute)+5;this.minute=t<10?"0"+t:t}},subHour(){1==this.hour?this.hour=12:this.hour-=1},subMinute(){if("00"==this.minute)this.minute=55;else{let t=parseInt(this.minute)-5;this.minute=t<10?"0"+t:t}},togglePeriod(){"AM"==this.period?this.period="PM":this.period="AM"},generateRandomString(t){for(var e="",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=0;s<t;s++)e+=i.charAt(Math.floor(Math.random()*i.length));return e}},watch:{hour(){this.selected_time=`${this.hour} : ${this.minute} ${this.period}`},minute(){this.selected_time=`${this.hour} : ${this.minute} ${this.period}`},period(){this.selected_time=`${this.hour} : ${this.minute} ${this.period}`},selected_time(){this.$emit("input",this.selected_time)}}},a=(i("EOsN"),i("KHd+")),r=Object(a.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"time-picker"},[i("div",{staticClass:"input-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.selected_time,expression:"selected_time"}],staticClass:"form-control",attrs:{type:"text",id:"time-picker-input",name:t.name,placeholder:t.placeholder},domProps:{value:t.selected_time},on:{focus:t.inputFocused,focusout:t.inputOut,input:function(e){e.target.composing||(t.selected_time=e.target.value)}}}),t._v(" "),i("span",{staticClass:"input-group-addon",on:{click:t.inputFocused}},[i("span",{staticClass:"fa fa-clock-o",attrs:{"aria-hidden":"true"}})]),t._v(" "),i("div",{staticClass:"pop-up time-picker-pop-up",attrs:{id:t.popup_id}},[i("table",[i("tbody",[i("tr",[i("td",{attrs:{width:"25%"}},[i("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.addHour(e)}}},[i("i",{staticClass:"fa fa-chevron-up",attrs:{"aria-hidden":"true"}})])]),t._v(" "),i("td",{attrs:{width:"25%"}}),t._v(" "),i("td",{attrs:{width:"25%"}},[i("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.addMinute(e)}}},[i("i",{staticClass:"fa fa-chevron-up",attrs:{"aria-hidden":"true"}})])]),t._v(" "),i("td",{attrs:{width:"25%"}})]),t._v(" "),i("tr",{attrs:{height:"100px"}},[i("td",[i("strong",{staticClass:"bold"},[t._v(t._s(t.hour))])]),t._v(" "),t._m(0),t._v(" "),i("td",[i("strong",{staticClass:"bold"},[t._v(t._s(t.minute))])]),t._v(" "),i("td",[i("a",{staticClass:"btn btn-primary",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.togglePeriod(e)}}},[t._v(t._s(t.period))])])]),t._v(" "),i("tr",[i("td",[i("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.subHour(e)}}},[i("i",{staticClass:"fa fa-chevron-down",attrs:{"aria-hidden":"true"}})])]),t._v(" "),i("td"),t._v(" "),i("td",[i("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.subMinute(e)}}},[i("i",{staticClass:"fa fa-chevron-down",attrs:{"aria-hidden":"true"}})])]),t._v(" "),i("td")])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("span",{staticClass:"text-muted"},[this._v(":")])])}],!1,null,"2351c5e6",null);e.a=r.exports},"2JXi":function(t,e){t.exports="/images/251x157.png?088169ea15fe2d171718c5bf25322275"},"9rgj":function(t,e){t.exports="/images/730x340.png?85b9bf58e7fb3e5a4bd37d5085206479"},EOsN:function(t,e,i){"use strict";var s=i("r5U6");i.n(s).a},VNKw:function(t,e,i){var s=i("kHJu");"string"==typeof s&&(s=[[t.i,s,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};i("aET+")(s,a);s.locals&&(t.exports=s.locals)},kHJu:function(t,e,i){(t.exports=i("I1BE")(!1)).push([t.i,".ck-editor__editable_inline{height:300px!important}.preview-thumbnail{width:100%;height:157px;background:no-repeat 50%;background-size:cover}.formation-filter-group{width:50%}.single-trainer{margin-bottom:30px}.single-trainer .thumb{position:relative}.single-trainer .meta-text{padding:20px 25px;box-shadow:0 0 30px hsla(0,0%,60%,.13);transition:all .3s ease 0s;background:#fff}@media (max-width:991px){.single-trainer .meta-text{padding:20px}}.single-trainer .meta-text h4{font-size:20px;margin-bottom:0}.single-trainer .meta-text .designation{font-size:14px;margin-bottom:30px}.single-trainer .meta-text a{font-size:14px;margin:0 10px;color:#ccc;transition:all .3s ease 0s}.single-trainer .meta-text a:hover{color:#62b0ff}.single-trainer:hover .meta-text{box-shadow:0 10px 30px rgba(0,35,71,.15)}",""])},r5U6:function(t,e,i){var s=i("vf0W");"string"==typeof s&&(s=[[t.i,s,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};i("aET+")(s,a);s.locals&&(t.exports=s.locals)},sR51:function(t,e,i){"use strict";var s=i("VNKw");i.n(s).a},uIRx:function(t,e,i){"use strict";i.r(e);var s=i("o0o1"),a=i.n(s),r=i("4HBT"),n=i.n(r),o=i("+z1p"),l=i.n(o),c=i("dTAO"),u=i.n(c);function p(t,e,i,s,a,r,n){try{var o=t[r](n),l=o.value}catch(t){return void i(t)}o.done?e(l):Promise.resolve(l).then(s,a)}var d={name:"create-formation",data:function(){return{filte:"",title:"",form:new n.a({id:null,type:"CONTINUE",title:"",slug:"",body:"<p>Content of the editor.</p>",duration:"",schedule:"",seats:50,thumbnail:"",img:"",price:""}),editor:l.a,editorConfig:{height:200},start:"",preview_thum:i("2JXi"),preview_img:i("9rgj")}},components:{TimePicker:i("+5+X").a},watch:{title:function(t){this.form.title=t,this.form.slug=this.sanitizeTitle(t)}},methods:{restore:function(){this.form.reset()},selectThum:function(t){var e,i=this;return(e=a.a.mark((function e(){var s,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=t.target.files,(r=new FileReader).addEventListener("load",(function(){i.preview_thum=r.result})),r.readAsDataURL(s[0]),i.form.thumbnail=s[0];case 5:case"end":return e.stop()}}),e)})),function(){var t=this,i=arguments;return new Promise((function(s,a){var r=e.apply(t,i);function n(t){p(r,s,a,n,o,"next",t)}function o(t){p(r,s,a,n,o,"throw",t)}n(void 0)}))})()},selectImg:function(t){var e=this,i=t.target.files,s=new FileReader;s.addEventListener("load",(function(){e.preview_img=s.result})),s.readAsDataURL(i[0]),this.form.img=i[0]},store:function(){this.form.submit("post","api/stock-import",{transformRequest:[function(t,e){return u()(t)}]}).then((function(){})).catch((function(){}))},sanitizeTitle:function(t){return t.toLowerCase().replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi,"e").replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi,"a").replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi,"o").replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi,"u").replace(/đ/gi,"d").replace(/\s*$/g,"").replace(/\s+/g,"-")}}},m=(i("sR51"),i("KHd+")),f=Object(m.a)(d,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card"},[i("form",{on:{submit:function(e){return e.preventDefault(),t.store(e)},keydown:function(e){return t.form.onKeydown(e)}}},[t._m(0),t._v(" "),i("div",{staticClass:"card-body "},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"form-group"},[i("div",{staticClass:"input-group"},[t._m(1),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("title")},attrs:{type:"text",placeholder:"Title "},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"title"}})],1)])]),t._v(" "),i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"form-group"},[i("div",{staticClass:"input-group"},[t._m(2),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.slug,expression:"form.slug"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("slug")},attrs:{type:"text",placeholder:"slug"},domProps:{value:t.form.slug},on:{input:function(e){e.target.composing||t.$set(t.form,"slug",e.target.value)}}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"slug"}})],1)])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"form-group"},[i("div",{staticClass:"input-group"},[t._m(3),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.level,expression:"form.level"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("level")},attrs:{type:"text",placeholder:"BAC +3"},domProps:{value:t.form.level},on:{input:function(e){e.target.composing||t.$set(t.form,"level",e.target.value)}}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"level"}})],1)])]),t._v(" "),i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"form-group"},[i("div",{staticClass:"input-group"},[t._m(4),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.duration,expression:"form.duration"}],staticClass:"form-control",attrs:{type:"text",placeholder:"3 ans"},domProps:{value:t.form.duration},on:{input:function(e){e.target.composing||t.$set(t.form,"duration",e.target.value)}}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"duration"}})],1)])]),t._v(" "),i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"form-group"},[i("div",{staticClass:"input-group"},[t._m(5),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.seats,expression:"form.seats"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nombre de Places"},domProps:{value:t.form.seats},on:{input:function(e){e.target.composing||t.$set(t.form,"seats",e.target.value)}}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"seats"}})],1)])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"form-group"},[i("div",{staticClass:"input-group"},[t._m(6),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.form.type,expression:"form.type"}],staticClass:"form-control ",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"type",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:"CONTINUE"}},[t._v("Formation Continue")]),t._v(" "),i("option",{attrs:{value:"INITIALE"}},[t._v("Formation initiale")]),t._v(" "),i("option",{attrs:{value:"MODULAIRE"}},[t._v("Formation Modulaire")])]),t._v(" "),i("has-error",{attrs:{form:t.form,field:"type"}})],1)])]),t._v(" "),i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"form-group"},[i("time-picker",{model:{value:t.start,callback:function(e){t.start=e},expression:"start"}})],1)])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"form-group"},[i("div",{staticClass:"preview-thumbnail d-flex justify-content-center align-items-center",style:{background:"url("+t.preview_thum+") no-repeat scroll center center / cover"}},[i("input",{staticClass:"inputfile",attrs:{type:"file",placeholder:" Image",id:"file"},on:{change:t.selectThum}}),t._v(" "),t._m(7)])])]),t._v(" "),i("div",{staticClass:"col-md-8"},[i("div",{staticClass:"form-group"},[i("div",{staticClass:"preview-thumbnail d-flex justify-content-center align-items-center",style:{background:"url("+t.preview_img+") no-repeat scroll center center / cover"}},[i("input",{staticClass:"inputfile",attrs:{type:"file",placeholder:"Image",id:"img-form"},on:{change:t.selectImg}}),t._v(" "),t._m(8)])])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"form-group"},[i("ckeditor",{attrs:{height:"200",editor:t.editor,config:t.editorConfig},model:{value:t.form.body,callback:function(e){t.$set(t.form,"body",e)},expression:"form.body"}})],1)])])]),t._v(" "),i("a",{attrs:{href:"",target:"_blank"}}),t._v(" "),i("footer",{staticClass:"card-footer d-md-flex align-items-center justify-content-between"},[i("v-button",{attrs:{loading:t.form.busy,type:"reset",typeStyle:"default"}},[i("h2",[i("i",{staticClass:"fas fa-sync-alt"})]),t._v("\n                Reset\n            ")]),t._v(" "),i("v-button",{staticClass:"btn btn-primary",attrs:{loading:t.form.busy}},[i("h2",[i("i",{staticClass:"fas fa-save"})]),t._v("\n                Enregisté\n            ")])],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"card-header card-header-with-icons"},[e("h4",{staticClass:"card-header-title"},[this._v("Formations ")]),this._v(" "),e("ul",{staticClass:"list-inline mb-0"},[e("li",{staticClass:"list-inline-item"},[e("button",{staticClass:"btn btn-sm btn-outline-primary",attrs:{type:"button"}},[e("span",{staticClass:"fas fa-save"})])]),this._v(" "),e("li",{staticClass:"list-inline-item"},[e("button",{staticClass:"btn btn-sm btn-outline-primary",attrs:{type:"button"}},[e("span",{staticClass:"fas fa-sync-alt"})])]),this._v(" "),e("li",{staticClass:"list-inline-item"},[e("button",{staticClass:"btn btn-sm btn-outline-primary",attrs:{type:"button"}},[e("i",{staticClass:"fas fa-undo-alt"})])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("\n                                                Title\n                                            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("\n                                                Slug\n                                            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("\n                                                Degree Level\n                                            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("\n                                                Duration\n                                            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("\n                                                Nombre de Places\n                                            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("\n                                                Type\n                                            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"file"}},[e("i",{staticClass:"fas fa-upload"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"img-form"}},[e("i",{staticClass:"fas fa-upload"})])}],!1,null,null,null);e.default=f.exports},vf0W:function(t,e,i){(t.exports=i("I1BE")(!1)).push([t.i,".time-picker-pop-up[data-v-2351c5e6]{display:none}.time-picker-pop-up.show[data-v-2351c5e6],.time-picker-pop-up[data-v-2351c5e6]:hover{display:block}.time-picker .pop-up[data-v-2351c5e6]{position:absolute;left:0;width:88%;z-index:9;top:50px;background:#fff;padding:40px 20px;border:1px solid #ddd;box-shadow:0 1px 5px #aaa}.time-picker .pop-up table[data-v-2351c5e6]{width:100%;text-align:center}.time-picker .pop-up table .bold[data-v-2351c5e6]{font-size:20px;font-weight:800;font-family:monospace}",""])}}]);