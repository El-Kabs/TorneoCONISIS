(function(t){function e(e){for(var a,r,s=e[0],c=e[1],l=e[2],d=0,p=[];d<s.length;d++)r=s[d],i[r]&&p.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),i=n.n(a);i.a},"372a":function(t,e,n){"use strict";var a=n("7e49"),i=n.n(a);i.a},4045:function(t,e,n){t.exports=n.p+"img/loading.c5590569.svg"},4947:function(t,e,n){"use strict";var a=n("ffc7"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bartxd",attrs:{id:"app"}},[n("NavBarNew"),n("div",{staticClass:"container mt-5"},[n("router-view")],1)],1)},o=[],r=(n("96cf"),n("3b8d")),s=(n("1157"),n("decb"),n("839f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-container"},[n("nav",{staticClass:"navbar navbar-expand-md navbar-light bg-light"},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-brand logo"}),t._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[n("ul",{staticClass:"navbar-nav mr-auto"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1)]),n("ul",{staticClass:"navbar-nav d-none d-md-block"},[t.isAuthenticated?t._e():n("li",{staticClass:"nav-item"},[n("button",{staticClass:"btn btn-primary btn-margin",attrs:{id:"qsLoginBtn"},on:{click:function(e){return e.preventDefault(),t.login(e)}}},[t._v("Login")])]),t.isAuthenticated?n("li",{staticClass:"nav-item dropdown"},[n("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"profileDropDown","data-toggle":"dropdown"}},[n("img",{staticClass:"nav-user-profile",attrs:{src:t.profile.picture,alt:"User's profile picture"}})]),n("div",{staticClass:"dropdown-menu dropdown-menu-right"},[n("div",{staticClass:"dropdown-header"},[t._v(t._s(t.profile.name))]),n("router-link",{staticClass:"dropdown-item dropdown-profile",attrs:{to:"/profile"}},[n("span",{staticClass:"icon icon-profile"}),t._v(" Profile\n              ")]),n("a",{staticClass:"dropdown-item",attrs:{id:"qsLogoutBtn",href:"#"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[n("span",{staticClass:"icon icon-power"}),t._v(" Log out\n              ")])],1)]):t._e()]),t.isAuthenticated?t._e():n("ul",{staticClass:"navbar-nav d-md-none"},[n("button",{staticClass:"btn btn-primary btn-block",on:{click:t.login}},[t._v("Log in")])]),t.isAuthenticated?n("ul",{staticClass:"navbar-nav d-md-none"},[n("li",{staticClass:"nav-item"},[n("span",{staticClass:"user-info"},[n("img",{staticClass:"nav-user-profile d-inline-block",attrs:{src:t.profile.picture_large,alt:"User's profile picture"}}),n("h6",{staticClass:"d-inline-block"},[t._v(t._s(t.profile.name))])])]),n("li",[n("span",{staticClass:"icon icon-profile"}),n("router-link",{attrs:{to:"/profile"}},[t._v("Profile")])],1),n("li",[n("span",{staticClass:"icon icon-power"}),n("a",{attrs:{id:"qsLogoutBtn",href:"#"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("Log out")])])]):t._e()])])])])}),c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],l={name:"NavBar",methods:{login:function(){this.$auth.login()},logout:function(){this.$auth.logOut(),this.$router.push({path:"/"})},handleLoginEvent:function(t){this.isAuthenticated=t.loggedIn,this.profile=t.profile}},data:function(){return{isAuthenticated:!1,profile:{}}}},u=l,d=n("2877"),p=Object(d["a"])(u,s,c,!1,null,null,null),f=p.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"barra"},[n("vs-navbar",{staticClass:"nabarx",attrs:{type:"flat"},model:{value:t.activeItem,callback:function(e){t.activeItem=e},expression:"activeItem"}},[n("div",{attrs:{slot:"title"},slot:"title"},[n("vs-navbar-title",[t._v("Torneos - CONISIS")])],1),t.isAuthenticated?t._e():n("vs-navbar-item",{attrs:{index:"1"}},[n("a",{attrs:{href:"#"},on:{click:t.login}},[t._v("Login")])]),t.isAuthenticated?n("vs-navbar-item",{attrs:{index:"2"}},[t.isAuthenticated?n("a",{staticClass:"saludo"},[t._v("Hola!")]):t._e()]):t._e(),n("vs-navbar-item",{attrs:{index:"0"}},[n("router-link",{attrs:{to:{name:"home"}}},[t._v("\n          Ranking\n        ")])],1),t.isAuthenticated?n("vs-navbar-item",{attrs:{index:"3"}},[n("router-link",{attrs:{to:{name:"modificar"}}},[t._v("\n          Modificar Ranking\n        ")])],1):t._e(),t.isAuthenticated?n("vs-navbar-item",{attrs:{index:"4"}},[n("a",{attrs:{href:"#logout"},on:{click:t.logout}},[t._v("Log Out")])]):t._e()],1)],1)},h=[],m=n("0a0d"),g=n.n(m),b=n("795b"),k=n.n(b),_=n("d225"),C=n("b0b4"),j=n("308d"),x=n("6bb5"),y=n("4e2b"),w=n("013f"),O=n("bd86"),A=n("b0af"),T=n("faa1"),E=n("8160"),$=new A["a"].WebAuth({domain:E.domain,redirectUri:"".concat(window.location.origin,"/callback"),clientID:E.clientId,responseType:"token id_token",scope:"openid profile write:scores",audience:E.audience}),L="loggedIn",S="loginEvent",I=function(t){function e(){var t,n;Object(_["a"])(this,e);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return n=Object(j["a"])(this,(t=Object(x["a"])(e)).call.apply(t,[this].concat(i))),Object(O["a"])(Object(w["a"])(Object(w["a"])(n)),"idToken",null),Object(O["a"])(Object(w["a"])(Object(w["a"])(n)),"profile",null),Object(O["a"])(Object(w["a"])(Object(w["a"])(n)),"tokenExpiry",null),n}return Object(y["a"])(e,t),Object(C["a"])(e,[{key:"login",value:function(t){$.authorize({appState:t})}},{key:"logOut",value:function(){localStorage.removeItem(L),this.idToken=null,this.tokenExpiry=null,this.profile=null,$.logout({returnTo:"".concat(window.location.origin)}),this.emit(S,{loggedIn:!1})}},{key:"handleAuthentication",value:function(){var t=this;return new k.a(function(e,n){$.parseHash(function(a,i){a?n(a):(t.localLogin(i),e(i.idToken))})})}},{key:"isAuthenticated",value:function(){return"true"===localStorage.getItem(L)}},{key:"isIdTokenValid",value:function(){return this.idToken&&this.tokenExpiry&&g()()<this.tokenExpiry}},{key:"getIdToken",value:function(){var t=this;return new k.a(function(e,n){t.isIdTokenValid()?e(t.idToken):t.isAuthenticated()?t.renewTokens().then(function(t){e(t.idToken)},n):e()})}},{key:"getAccessToken",value:function(){var t=this;return new k.a(function(e,n){t.isAccessTokenValid()?e(t.accessToken):t.renewTokens().then(function(t){e(t.accessToken)},n)})}},{key:"getProfile",value:function(){return localStorage.getItem("name")}},{key:"localLogin",value:function(t){this.idToken=t.idToken,this.profile=t.idTokenPayload,this.tokenExpiry=new Date(1e3*this.profile.exp),this.accessToken=t.accessToken,localStorage.setItem(L,"true"),localStorage.setItem("name",this.profile.given_name),$cookies.set("token",this.accessToken),this.emit(S,{loggedIn:!0,profile:t.idTokenPayload,state:t.appState||{}})}},{key:"renewTokens",value:function(){var t=this;return new k.a(function(e,n){if("true"!==localStorage.getItem(L))return n("Not logged in");$.checkSession({},function(a,i){a?n(a):(t.localLogin(i),e(i))})})}}]),e}(T["EventEmitter"]),P=new I;P.setMaxListeners(5);var N=P,M={name:"NavBarNew",mounted:function(){this.isAuthenticated=N.isAuthenticated(),this.name=N.getProfile()},methods:{login:function(){this.$auth.login()},logout:function(){this.$auth.logOut(),this.$router.push({path:"/"})},handleLoginEvent:function(t){this.isAuthenticated=t.loggedIn,this.profile=t.profile},agregar:function(){var t=this;t.$router.push({path:"agregarPuntaje"})},modificar:function(){var t=this;t.$router.push({path:"modificarRanking"})}},data:function(){return{isAuthenticated:!1,profile:{},activeItem:0,name:""}}},R=M,B=(n("372a"),Object(d["a"])(R,v,h,!1,null,"6004df9c",null)),D=B.exports,q={components:{NavBar:f,NavBarNew:D},created:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$auth.renewTokens();case 3:t.next=7;break;case 5:t.prev=5,t.t0=t["catch"](0);case 7:case"end":return t.stop()}},t,this,[[0,5]])}));function e(){return t.apply(this,arguments)}return e}()},U=q,J=(n("034f"),Object(d["a"])(U,i,o,!1,null,null,null)),z=J.exports,V=n("8c4f"),G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Tabla")],1)},H=[],F=(n("a481"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("vs-table",{attrs:{data:t.ranking},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.data;return t._l(a,function(e,a,i){return n("vs-tr",{key:a},[n("vs-td",{attrs:{data:a}},[t._v(t._s(i+1)+". "+t._s(a))]),n("vs-td",{attrs:{data:e}},[t._v(t._s(e))])],1)})}}])},[n("template",{slot:"header"},[n("h3",[t._v("Ranking - Dinosaurio de Chrome")])]),n("template",{slot:"thead"},[n("vs-th",[t._v("Nombre")]),n("vs-th",[t._v("Puntaje")])],1)],2)],1)}),Q=[],K={name:"Tabla",data:function(){return{ranking:Object}},mounted:function(){var t=this;fetch("https://torneoconisis.herokuapp.com/api/tablaDinosaurio",{method:"GET"}).then(function(t){return t.text()}).then(function(e){var n=JSON.parse(e.replace(/'/g,'"'));t.ranking=n})}},W=K,X=Object(d["a"])(W,F,Q,!1,null,"75ff26a7",null),Y=X.exports,Z={name:"home",components:{Tabla:Y},mounted:function(){var t=this;fetch("https://torneoconisis.herokuapp.com/api/tablaDinosaurio",{method:"GET"}).then(function(t){return t.text()}).then(function(e){var n=JSON.parse(e.replace(/'/g,'"'));t.ranking=n})},data:function(){return{ranking:Object}}},tt=Z,et=(n("ab7b"),Object(d["a"])(tt,G,H,!1,null,"2808520e",null)),nt=et.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center profile-header"},[n("div",{staticClass:"col-md-2"},[n("img",{staticClass:"rounded-circle img-fluid profile-picture",attrs:{src:t.profile.picture,alt:"User's profile picture"}})]),n("div",{staticClass:"col-md"},[n("h2",[t._v(t._s(t.profile.name))]),n("p",{staticClass:"lead text-muted"},[t._v(t._s(t.profile.email))])])]),n("div",{staticClass:"row"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],staticClass:"rounded"},[n("code",{staticClass:"json"},[t._v(t._s(JSON.stringify(t.profile,null,2)))])])])])},it=[],ot={data:function(){return{profile:this.$auth.profile}},methods:{handleLoginEvent:function(t){this.profile=t.profile}}},rt=ot,st=Object(d["a"])(rt,at,it,!1,null,null,null),ct=st.exports,lt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ut=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spinner"},[a("img",{attrs:{src:n("4045"),alt:"Loading"}})])}],dt={methods:{handleLoginEvent:function(t){this.$router.push(t.state.target||"/")}},created:function(){this.$auth.handleAuthentication()}},pt=dt,ft=(n("b25d"),Object(d["a"])(pt,lt,ut,!1,null,"439d8a68",null)),vt=ft.exports,ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},[n("h5",[t._v("Agregar")]),n("div",{staticClass:"column"},[n("vs-input",{staticClass:"inputx s",attrs:{placeholder:"Nombre Completo"},model:{value:t.nombreA,callback:function(e){t.nombreA=e},expression:"nombreA"}})],1),n("div",{staticClass:"column"},[n("vs-input",{staticClass:"inputx s",attrs:{placeholder:"Puntaje"},model:{value:t.puntajeA,callback:function(e){t.puntajeA=e},expression:"puntajeA"}})],1),n("div",{staticClass:"column"},[n("vs-button",{staticClass:"s d",attrs:{color:"success",type:"filled"},on:{click:t.agregar}},[t._v("Agregar")])],1),n("p",[t._v(t._s(t.agregarResponse))])]),n("br"),n("div",{staticClass:"row"},[n("h5",[t._v("Modificar")]),n("div",{staticClass:"column"},[n("vs-input",{staticClass:"inputx s",attrs:{placeholder:"Nombre Completo"},model:{value:t.nombreM,callback:function(e){t.nombreM=e},expression:"nombreM"}})],1),n("div",{staticClass:"column"},[n("vs-input",{staticClass:"inputx s",attrs:{placeholder:"Puntaje"},model:{value:t.puntajeM,callback:function(e){t.puntajeM=e},expression:"puntajeM"}})],1),n("div",{staticClass:"column"},[n("vs-button",{staticClass:"s d",attrs:{color:"success",type:"filled"},on:{click:t.modificar}},[t._v("Modificar")])],1),n("p",[t._v(t._s(t.modificarResponse))])])])},mt=[],gt=n("f499"),bt=n.n(gt),kt={name:"modificar",data:function(){return{nombreA:"",puntajeA:"",nombreM:"",puntajeM:"",agregarResponse:"",modificarResponse:""}},methods:{agregar:function(){var t=this,e=this,n="https://torneoconisis.herokuapp.com/api/guardarPuntaje",a={nombre:e.nombreA,puntaje:e.puntajeA},i=$cookies.get("token");fetch(n,{method:"POST",body:bt()(a),mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+i}}).then(function(t){return t.text()}).catch(function(t){return console.error("Error:",t)}).then(function(e){t.agregarResponse=e})},modificar:function(){var t=this,e=this;console.log(e.nombreM);var n="https://torneoconisis.herokuapp.com/api/modificarPuntaje",a={nombre:e.nombreM,puntaje:e.puntajeM},i=$cookies.get("token");fetch(n,{method:"POST",body:bt()(a),mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+i}}).then(function(t){return t.text()}).catch(function(t){return console.error("Error:",t)}).then(function(e){t.modificarResponse=e})}}},_t=kt,Ct=(n("faec"),Object(d["a"])(_t,ht,mt,!1,null,"7d770063",null)),jt=Ct.exports,xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("div",{staticClass:"row"},[n("div",{staticClass:"column"},[n("vs-input",{staticClass:"inputx s",attrs:{placeholder:"Nombre Completo"},model:{value:t.nombre,callback:function(e){t.nombre=e},expression:"nombre"}})],1),n("div",{staticClass:"column"},[n("vs-input",{staticClass:"inputx s",attrs:{placeholder:"Puntaje"},model:{value:t.puntaje,callback:function(e){t.puntaje=e},expression:"puntaje"}})],1),n("div",{staticClass:"column"},[n("vs-button",{staticClass:"s d",attrs:{color:"success",type:"border"}},[t._v("Agregar")])],1)])])])},yt=[],wt={name:"agregar"},Ot=wt,At=(n("4947"),Object(d["a"])(Ot,xt,yt,!1,null,"72b24d32",null)),Tt=At.exports,Et=n("2b27"),$t=n.n(Et),Lt=n("fb9a"),St=n.n(Lt),It=(n("04f2"),n("d48d"),n("8aa8"));a["a"].use(V["a"]),a["a"].use($t.a),a["a"].use(St.a),a["a"].component("menu-icon",It["a"]);var Pt=new V["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:nt},{path:"/profile",name:"profile",component:ct},{path:"/callback",name:"callback",component:vt},{path:"/agregarPuntaje",name:"agregar",component:Tt},{path:"/modificarRanking",name:"modificar",component:jt}]});Pt.beforeEach(function(t,e,n){if(console.log(N.isAuthenticated()),"/"===t.path||"/callback"===t.path||N.isAuthenticated())return n();N.login({target:t.path})});var Nt=Pt,Mt={install:function(t){t.prototype.$auth=N,t.mixin({created:function(){this.handleLoginEvent&&N.addListener("loginEvent",this.handleLoginEvent)},destroyed:function(){this.handleLoginEvent&&N.removeListener("loginEvent",this.handleLoginEvent)}})}},Rt=(n("ac6a"),n("a70e")),Bt=n.n(Rt),Dt=n("5ad2"),qt=n.n(Dt);n("6e2e");Bt.a.registerLanguage("json",qt.a);var Ut={deep:!0,bind:function(t,e){var n=t.querySelectorAll("code");n.forEach(function(t){e.value&&(t.textContent=e.value),Bt.a.highlightBlock(t)})},componentUpdated:function(t,e){var n=t.querySelectorAll("code");n.forEach(function(t){e.value&&(t.textContent=e.value,Bt.a.highlightBlock(t))})}},Jt=n("ecee"),zt=n("c074"),Vt=n("ad3d");a["a"].use(Mt),a["a"].directive("highlightjs",Ut),a["a"].config.productionTip=!1,Jt["c"].add(zt["a"]),a["a"].component("font-awesome-icon",Vt["a"]),new a["a"]({router:Nt,render:function(t){return t(z)}}).$mount("#app")},"64a9":function(t,e,n){},"7e49":function(t,e,n){},8160:function(t){t.exports={domain:"torneoconisis.auth0.com",clientId:"Q9PoXzU3FsEig2lGlUKQ5nFLV3quq9im",audience:"https://torneoconisis/api"}},ab7b:function(t,e,n){"use strict";var a=n("b3a7"),i=n.n(a);i.a},b25d:function(t,e,n){"use strict";var a=n("c8a0"),i=n.n(a);i.a},b3a7:function(t,e,n){},bd5d:function(t,e,n){},c8a0:function(t,e,n){},faec:function(t,e,n){"use strict";var a=n("bd5d"),i=n.n(a);i.a},ffc7:function(t,e,n){}});
//# sourceMappingURL=app.ab870ba1.js.map