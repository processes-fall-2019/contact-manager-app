webpackJsonp([1],{"4FbY":function(e,t){},"7zck":function(e,t){},I7jN:function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var s=r("VU/8")({name:"App"},n,!1,function(e){r("4FbY")},null,null).exports,o=r("/ocq"),c={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-parallax",{attrs:{height:"1000",dark:"",src:"https://cdn.vuetifyjs.com/images/parallax/material.jpg"}},[r("v-flex",[r("div",{staticClass:"fullScreen"},[r("v-toolbar",{staticClass:"black",attrs:{flat:"",dense:"",dark:""}},[r("v-toolbar-title",{staticClass:"center"},[e._v("Welcome to Easy Contacts")])],1),e._v(" "),r("v-row",{attrs:{align:"center",justify:"center"}}),e._v(" "),r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-img",{staticClass:"grey lighten-2",attrs:{src:"./assets/phone.png","aspect-ratio":"1","max-width":"500","max-height":"300"}})],1),e._v(" "),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),e._v(" "),r("div",{staticClass:"error",domProps:{innerHTML:e._s(e.error)}}),e._v(" "),r("br"),e._v(" "),r("router-link",{attrs:{to:{name:"login"}}},[r("v-btn",{staticClass:"cyan",attrs:{dark:""}},[e._v(" Login ")])],1),e._v(" "),r("router-link",{attrs:{to:{name:"register"}}},[r("v-btn",{staticClass:"cyan",attrs:{dark:""}},[e._v(" Register ")])],1)],1)])],1)},staticRenderFns:[]};var i=r("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Easy Contacts",enabled:!0,error:null}},methods:{handleSignUpButton:function(){this.enabled=!1},handleBackButton:function(){this.enabled=!0}}},c,!1,function(e){r("en62")},"data-v-5d719e44",null).exports,l=r("Xxa5"),u=r.n(l),d=r("exGp"),v=r.n(d),m=r("mtWM"),p=r.n(m),f=function(){return p.a.create({baseURL:"http://localhost:8081"})},h=function(e){return f().post("register",e)},_=function(e){return f().post("login",e)},g=function(e){return f().get("contacts",e)},b=function(e){return f().post("add-contact",e)},w=function(e){return f().get("search-contacts",e)},x={data:function(){return{email:"",password:"",error:null}},methods:{register:function(){var e=this;return v()(u.a.mark(function t(){var r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h({email:e.email,password:e.password});case 3:if(!(r=t.sent).data.error){t.next=7;break}return alert(r.data.error),t.abrupt("return",!1);case 7:e.$router.push({name:"HelloWorld"}),alert("Hello "+e.email+" your user was successfully registered!"),console.log(r.data),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),e.error=t.t0.response.data.error;case 15:case"end":return t.stop()}},t,e,[[0,12]])}))()}}},k={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-parallax",{attrs:{height:"1000",dark:"",src:"https://cdn.vuetifyjs.com/images/parallax/material.jpg"}},[r("v-flex",[r("div",{staticClass:"fullScreen"},[r("v-toolbar",{staticClass:"black",attrs:{flat:"",dense:"",dark:""}},[r("v-toolbar-title",{staticClass:"center"},[e._v("Registration")])],1),e._v(" "),r("v-row",{attrs:{align:"center",justify:"center"}},[r("div",{staticClass:"center"},[r("v-col",[r("v-text-field",{attrs:{label:"email",filled:"",type:"email",name:"email",placeholder:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),r("v-col",[r("v-text-field",{attrs:{label:"password",filled:"",type:"password",name:"password",placeholder:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1)]),e._v(" "),r("br"),e._v(" "),r("div",{staticClass:"error",domProps:{innerHTML:e._s(e.error)}}),e._v(" "),r("br"),e._v(" "),r("v-btn",{staticClass:"cyan",attrs:{dark:""},on:{click:e.register}},[e._v(" Register ")]),e._v(" "),r("router-link",{attrs:{to:{name:"HelloWorld"}}},[r("v-btn",{staticClass:"cyan",attrs:{dark:""}},[e._v(" Cancel ")])],1)],1)])],1)},staticRenderFns:[]};var C=r("VU/8")(x,k,!1,function(e){r("QNxH")},"data-v-5a20535b",null).exports,y={data:function(){return{email:"",password:"",error:null,canLoginIn:!1}},methods:{login:function(){var e=this;return v()(u.a.mark(function t(){var r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("hi"),t.prev=1,t.next=4,_({email:e.email,password:e.password});case 4:if(r=t.sent,console.log("res",r),!r.data.error){t.next=9;break}return alert("User does not exist."),t.abrupt("return",!1);case 9:e.$store.dispatch("setUser",r.data.user),console.log("herrreee",e.$store.state.user[0].id),e.$router.push({name:"contacts"}),console.log("ressy",r.data),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),e.error=t.t0.response.data.error;case 18:case"end":return t.stop()}},t,e,[[1,15]])}))()},loginCheck:function(){this.canLoginIn=!0}}},$={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-parallax",{attrs:{height:"1000",dark:"",src:"https://cdn.vuetifyjs.com/images/parallax/material.jpg"}},[r("v-flex",[r("div",{staticClass:"fullscreen"},[r("v-toolbar",{staticClass:"black",attrs:{flat:"",dense:"",dark:""}},[r("v-toolbar-title",{staticClass:"center"},[e._v("Login")])],1),e._v(" "),r("v-row",{attrs:{align:"center",justify:"center"}},[r("div",{staticClass:"center"},[r("v-col",[r("v-text-field",{attrs:{label:"email",filled:"",type:"email",name:"email",placeholder:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),r("v-col",[r("v-text-field",{attrs:{label:"password",filled:"",type:"password",name:"password",placeholder:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1)]),e._v(" "),r("br"),e._v(" "),r("div",{staticClass:"error",domProps:{innerHTML:e._s(e.error)}}),e._v(" "),r("br"),e._v(" "),r("v-btn",{attrs:{dark:""},on:{click:e.login}},[e._v(" Login ")]),e._v(" "),r("router-link",{attrs:{to:{name:"HelloWorld"}}},[r("v-btn",{attrs:{dark:""}},[e._v(" Cancel ")])],1)],1)])],1)},staticRenderFns:[]};var U=r("VU/8")(y,$,!1,function(e){r("I7jN")},"data-v-506a4820",null).exports,N=r("woOf"),I=r.n(N),L={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",e._l(e.contacts,function(t){return r("div",{key:t.id},[r("h2",[e._v("contact card")]),e._v(" "),r("ul",[e._v("\n       First Name: "+e._s(t.first_name)+"   \n       Last Name: "+e._s(t.last_name)+"\n       "),r("br"),e._v("\n       Phone Number: "+e._s(t.phone_number)+"   \n       Email: "+e._s(t.email)+"\n     ")]),e._v(" "),r("br"),e._v(" "),r("button",[e._v(" Edit ")]),e._v(" "),r("button",{on:{click:e.deleteContact}},[e._v(" Delete ")]),e._v(" "),r("br"),e._v(" "),r("br")])}),0)},staticRenderFns:[]};var R=r("VU/8")({props:["contact-id"],data:function(){return{contacts:this.$store.state.contacts,first_name:"",last_name:"",phone_number:"",email:"",i:0}},methods:{getContact:function(){},deleteContact:function(){this.contacts.pop()}},computed:{set:function(e){return e++}}},L,!1,function(e){r("ceq3")},null,null).exports,j={data:function(){return{contacts:this.$store.state.contacts,userId:this.$store.state.user[0].id,first_name:"",last_name:"",phone_number:"",email:"",adding:!1,holder:[]}},components:{Contact:R},methods:{getContacts:function(){var e=this;return v()(u.a.mark(function t(){var r,a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g({user_id:e.userId});case 3:return r=t.sent,console.log("the res",r.data),console.log("the res 2",e.userId),a=r.data.filter(function(e){return e.email}),console.log(a),e.contacts=a,e.$store.dispatch("setContacts",a),console.log("here",e.$store.state.contacts),e.holder={id:1},console.log("contacts",e.contacts),t.abrupt("return",r);case 16:t.prev=16,t.t0=t.catch(0),e.error=t.t0.response.data.error;case 19:case"end":return t.stop()}},t,e,[[0,16]])}))()},addContact:function(){var e=this;return v()(u.a.mark(function t(){var r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.adding=!1,t.prev=1,t.next=4,b({user_id:e.userId,first_name:e.first_name,last_name:e.last_name,phone_number:e.phone_number,email:e.email});case 4:return r=t.sent,console.log("the resssssy",r.data),e.holder={id:1},I()(e.$data,e.$options.data.call(e)),e.getContacts(),t.abrupt("return",r);case 12:t.prev=12,t.t0=t.catch(1),e.error=t.t0.response.data.error;case 15:case"end":return t.stop()}},t,e,[[1,12]])}))()},makeAdding:function(){this.adding=!0}},computed:{force:function(){return this.$forceUpdate()}}},H={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("button",{on:{click:e.getContacts}},[e._v(" List Contacts ")]),e._v("     \n  "),r("button",{on:{click:e.makeAdding}},[e._v(" Add Contact ")]),e._v(" "),r("br"),e._v(" "),r("br"),e._v(" "),r("input",{directives:[{name:"show",rawName:"v-show",value:e.adding,expression:"adding"},{name:"model",rawName:"v-model",value:e.first_name,expression:"first_name"}],attrs:{name:"first_name",placeholder:"First name"},domProps:{value:e.first_name},on:{input:function(t){t.target.composing||(e.first_name=t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"show",rawName:"v-show",value:e.adding,expression:"adding"},{name:"model",rawName:"v-model",value:e.last_name,expression:"last_name"}],attrs:{name:"last_name",placeholder:"Last name"},domProps:{value:e.last_name},on:{input:function(t){t.target.composing||(e.last_name=t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"show",rawName:"v-show",value:e.adding,expression:"adding"},{name:"model",rawName:"v-model",value:e.phone_number,expression:"phone_number"}],attrs:{name:"phone_number",placeholder:"Phone number"},domProps:{value:e.phone_number},on:{input:function(t){t.target.composing||(e.phone_number=t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"show",rawName:"v-show",value:e.adding,expression:"adding"},{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",name:"email",placeholder:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),r("button",{directives:[{name:"show",rawName:"v-show",value:e.adding,expression:"adding"}],on:{click:e.addContact}},[e._v(" done ")]),e._v("  \n  "),r("button",{directives:[{name:"show",rawName:"v-show",value:e.adding,expression:"adding"}],on:{click:function(t){e.adding=!1}}},[e._v(" cancel ")]),e._v(" "),r("br"),e._v(" "),r("br"),e._v(" "),e._l(e.holder,function(t){return r("Contact",{key:t.id,attrs:{"i-id":t.id},on:{"update:iId":function(r){return e.$set(t,"id",r)},"update:i-id":function(r){return e.$set(t,"id",r)}}})})],2)},staticRenderFns:[]};var E={components:{ContactList:r("VU/8")(j,H,!1,function(e){r("Q6Au")},null,null).exports,Contact:R},data:function(){return{email:this.$store.state.user[0].email,userId:this.$store.state.user[0].id,password:"",error:null,canLoginIn:!1,searchRes:"",contacts:[]}},methods:{searchContacts:function(){var e=this;return v()(u.a.mark(function t(){var r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w({user_id:e.userId,first_name:e.searchRes});case 3:return r=t.sent,console.log("ressy",r.data),t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),e.error=t.t0.response.data.error;case 11:case"end":return t.stop()}},t,e,[[0,8]])}))()},logout:function(){this.$store.dispatch("setUser",null),this.$router.push({name:"HelloWorld"})},getUserId:function(){return this.$store.state.user[0].id},getContacts:function(){var e=this;return v()(u.a.mark(function t(){var r,a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("hi"),console.log(e.userId),t.prev=2,t.next=5,g({user_id:e.userId});case 5:return r=t.sent,console.log("the res",r.data),console.log("the res 2",e.userId),a=r.data.filter(function(e){return e.email}),console.log(a),e.contacts=a,e.$store.dispatch("setContacts",a),console.log("here",e.$store.state),console.log("contacts",e.contacts),t.abrupt("return",r);case 17:t.prev=17,t.t0=t.catch(2),e.error=t.t0.response.data.error;case 20:case"end":return t.stop()}},t,e,[[2,17]])}))()}}},F={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("  "+e._s(e.email)+"'s Contacts ")]),e._v(" "),r("button",{on:{click:e.logout}},[e._v(" Logout ")]),e._v(" "),r("br"),e._v(" "),r("br"),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchRes,expression:"searchRes"}],attrs:{type:"search",name:"searchRes",placeholder:"search..."},domProps:{value:e.searchRes},on:{input:function(t){t.target.composing||(e.searchRes=t.target.value)}}}),e._v(" "),r("button",{on:{click:e.searchContacts}},[e._v(" Search ")]),e._v(" "),r("br"),e._v(" "),r("br"),e._v(" "),r("div",[r("ContactList")],1)])},staticRenderFns:[]};var P=r("VU/8")(E,F,!1,function(e){r("fUTf")},"data-v-74c17cfc",null).exports;a.default.use(o.a);var W=new o.a({routes:[{path:"/",name:"HelloWorld",component:i},{path:"/register",name:"register",component:C},{path:"/login",name:"login",component:U},{path:"/contacts",name:"contacts",component:P}]}),A=r("9JMe"),V=r("NYxO");a.default.use(V.a);var M=new V.a.Store({strict:!0,state:{user:null,contacts:null,isUserLoggedIn:!1},mutations:{setUser:function(e,t){e.user=t,console.log("user",t),console.log(e.isUserLoggedIn),e.isUserLoggedIn=!!t},setContacts:function(e,t){e.contacts=t,console.log("contacts",t)}},actions:{setUser:function(e,t){(0,e.commit)("setUser",t)},setContacts:function(e,t){(0,e.commit)("setContacts",t)}}}),T=r("3EgV"),S=r.n(T);r("7zck");a.default.config.productionTip=!1,a.default.use(S.a),Object(A.sync)(M,W),new a.default({el:"#app",router:W,store:M,components:{App:s},template:"<App/>"})},Q6Au:function(e,t){},QNxH:function(e,t){},ceq3:function(e,t){},en62:function(e,t){},fUTf:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.f5bd2aaffc3e2fee5084.js.map