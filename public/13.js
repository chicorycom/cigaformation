(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{kWgz:function(t,s,r){"use strict";var e=r("vDqi"),a=r.n(e);function i(t){if(null===t||"object"!=typeof t)return t;const s=Array.isArray(t)?[]:{};return Object.keys(t).forEach(r=>{s[r]=i(t[r])}),s}function o(t){return Array.isArray(t)?t:[t]}class n{constructor(){this.errors={}}set(t,s){"object"==typeof t?this.errors=t:this.set({...this.errors,[t]:o(s)})}all(){return this.errors}has(t){return this.errors.hasOwnProperty(t)}hasAny(...t){return t.some(t=>this.has(t))}any(){return Object.keys(this.errors).length>0}get(t){if(this.has(t))return this.getAll(t)[0]}getAll(t){return o(this.errors[t]||[])}only(...t){const s=[];return t.forEach(t=>{const r=this.get(t);r&&s.push(r)}),s}flatten(){return Object.values(this.errors).reduce((t,s)=>t.concat(s),[])}clear(t){const s={};t&&Object.keys(this.errors).forEach(r=>{r!==t&&(s[r]=this.errors[r])}),this.set(s)}}class l{constructor(t={}){this.busy=!1,this.successful=!1,this.errors=new n,this.originalData=i(t),Object.assign(this,t)}fill(t){this.keys().forEach(s=>{this[s]=t[s]})}data(){return this.keys().reduce((t,s)=>({...t,[s]:this[s]}),{})}keys(){return Object.keys(this).filter(t=>!l.ignore.includes(t))}startProcessing(){this.errors.clear(),this.busy=!0,this.successful=!1}finishProcessing(){this.busy=!1,this.successful=!0}clear(){this.errors.clear(),this.successful=!1}reset(){Object.keys(this).filter(t=>!l.ignore.includes(t)).forEach(t=>{this[t]=i(this.originalData[t])})}get(t,s={}){return this.submit("get",t,s)}post(t,s={}){return this.submit("post",t,s)}patch(t,s={}){return this.submit("patch",t,s)}put(t,s={}){return this.submit("put",t,s)}delete(t,s={}){return this.submit("delete",t,s)}submit(t,s,r={}){this.startProcessing();const e="get"===t?{params:this.data()}:this.data();return new Promise((i,o)=>{(l.axios||a.a).request({url:this.route(s),method:t,data:e,...r}).then(t=>{this.finishProcessing(),i(t)}).catch(t=>{this.busy=!1,t.response&&this.errors.set(this.extractErrors(t.response)),o(t)})})}extractErrors(t){return t.data&&"object"==typeof t.data?t.data.errors?{...t.data.errors}:t.data.message?{error:t.data.message}:{...t.data}:{error:l.errorMessage}}route(t,s={}){let r=t;return l.routes.hasOwnProperty(t)&&(r=decodeURI(l.routes[t])),"object"!=typeof s&&(s={id:s}),Object.keys(s).forEach(t=>{r=r.replace(`{${t}}`,s[t])}),r}onKeydown(t){t.target.name&&this.errors.clear(t.target.name)}}l.routes={},l.errorMessage="Something went wrong. Please try again.",l.ignore=["busy","successful","errors","originalData"];s.a=l},sf5g:function(t,s,r){"use strict";r.r(s);var e=r("o0o1"),a=r.n(e),i=r("kWgz");function o(t,s,r,e,a,i,o){try{var n=t[i](o),l=n.value}catch(t){return void r(t)}n.done?s(l):Promise.resolve(l).then(e,a)}function n(t){return function(){var s=this,r=arguments;return new Promise((function(e,a){var i=t.apply(s,r);function n(t){o(i,e,a,n,l,"next",t)}function l(t){o(i,e,a,n,l,"throw",t)}n(void 0)}))}}var l={name:"create",metaInfo:function(){return{title:this.$t("register")}},data:function(){return{form:new i.a({name:"",email:"",password:"",role:"",company:"",salary:""}),roles:[]}},created:function(){this.getRoles()},methods:{register:function(){var t=this;return n(a.a.mark((function s(){var r;return a.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.form.post("/".concat(config.base,"/user"));case 2:r=s.sent,r.data.status&&t.$router.push({name:"users"});case 5:case"end":return s.stop()}}),s)})))()},getRoles:function(){var t=this;return n(a.a.mark((function s(){var r,e;return a.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.form.post("/".concat(config.base,"/roles"));case 2:r=s.sent,e=r.data,t.roles=e;case 5:case"end":return s.stop()}}),s)})))()}}},c=r("KHd+"),u=Object(c.a)(l,(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("form",{staticClass:"card",on:{submit:function(s){return s.preventDefault(),t.register(s)},keydown:function(s){return t.form.onKeydown(s)}}},[t._m(0),t._v(" "),r("div",{staticClass:"card-body pt-0"},[r("div",{staticClass:"card h-100"},[r("div",{staticClass:"card-body pt-0"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"username"}},[t._v("Name")]),t._v(" "),r("div",{staticClass:"input-group"},[t._m(1),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",placeholder:"name"},domProps:{value:t.form.name},on:{input:function(s){s.target.composing||t.$set(t.form,"name",s.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"name"}})],1)]),t._v(" "),r("hr",{staticClass:"my-4"}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 mb-5"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),r("div",{staticClass:"input-group"},[t._m(2),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",placeholder:"email@email.com"},domProps:{value:t.form.email},on:{input:function(s){s.target.composing||t.$set(t.form,"email",s.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"email"}})],1)])]),t._v(" "),r("div",{staticClass:"col-md-6 mb-5"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),r("div",{staticClass:"input-group"},[t._m(3),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("password")},attrs:{type:"password",placeholder:"********"},domProps:{value:t.form.password},on:{input:function(s){s.target.composing||t.$set(t.form,"password",s.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"password"}})],1)])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-7 mb-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"company"}},[t._v("Company")]),t._v(" "),r("div",{staticClass:"input-group"},[t._m(4),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.company,expression:"form.company"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("company")},attrs:{type:"text",placeholder:"Company"},domProps:{value:t.form.company},on:{input:function(s){s.target.composing||t.$set(t.form,"company",s.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"company"}})],1)])]),t._v(" "),r("div",{staticClass:"col-md-5 mb-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"role"}},[t._v("Role")]),t._v(" "),r("div",{staticClass:"input-group"},[t._m(5),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.role,expression:"form.role"}],staticClass:"custom-select mr-sm-2",class:{"is-invalid":t.form.errors.has("role")},on:{change:function(s){var r=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"role",s.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[t._v("Select Role")]),t._v(" "),t._l(t.roles,(function(s){return r("option",{domProps:{value:s.name,textContent:t._s(s.display_name)}})}))],2),t._v(" "),r("has-error",{attrs:{form:t.form,field:"role"}})],1)])])]),t._v(" "),t._m(6)])])]),t._v(" "),r("footer",{staticClass:"card-footer d-md-flex align-items-center justify-content-between"},[r("button",{staticClass:"btn btn-default text-reset",attrs:{type:"reset",loading:t.form.busy}},[t._m(7),t._v("\n            Reset\n        ")]),t._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit",loading:t.form.busy}},[t._m(8),t._v("\n            Enregisté\n        ")])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("header",{staticClass:"card-header card-header-with-icons"},[s("h2",{staticClass:"h4 card-header-title"},[s("i",{staticClass:" mr-3 fas fa-user text-primary"}),this._v("\n            Create User\n        ")]),this._v(" "),s("ul",{staticClass:"list-inline mb-0"},[s("li",{staticClass:"list-inline-item"},[s("button",{staticClass:"btn btn-sm btn-outline-primary",attrs:{type:"submit"}},[s("span",{staticClass:"far fa-save"})])]),this._v(" "),s("li",{staticClass:"list-inline-item"},[s("button",{staticClass:"btn btn-sm btn-outline-primary",attrs:{type:"button"}},[s("span",{staticClass:"fas fa-sync-alt"})])]),this._v(" "),s("li",{staticClass:"list-inline-item"},[s("button",{staticClass:"btn btn-sm btn-outline-primary",attrs:{type:"button"}},[s("i",{staticClass:"fas fa-undo-alt"})])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"},[s("span",{staticClass:"far fa-user"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"},[s("i",{staticClass:"far fa-envelope"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"},[s("i",{staticClass:"fas fa-lock"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"},[s("i",{staticClass:"fas fa-building"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"},[s("i",{staticClass:"fas fa-user-tag"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 mb-5"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"salary"}},[this._v("Salary")]),this._v(" "),s("div",{staticClass:"input-group"},[s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"},[s("span",{staticClass:"ti-credit-card"})])]),this._v(" "),s("input",{staticClass:"form-control",attrs:{id:"salary",type:"text",placeholder:"1*****"}})])])]),this._v(" "),s("div",{staticClass:"col-md-6 mb-5"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",[s("i",{staticClass:"fas fa-sync-alt"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",[s("i",{staticClass:"far fa-save"})])}],!1,null,"cfd5f3ce",null);s.default=u.exports}}]);