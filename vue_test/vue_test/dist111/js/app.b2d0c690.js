(function(e){function o(o){for(var n,u,l=o[0],c=o[1],p=o[2],i=0,f=[];i<l.length;i++)u=l[i],Object.prototype.hasOwnProperty.call(t,u)&&t[u]&&f.push(t[u][0]),t[u]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);s&&s(o);while(f.length)f.shift()();return a.push.apply(a,p||[]),r()}function r(){for(var e,o=0;o<a.length;o++){for(var r=a[o],n=!0,l=1;l<r.length;l++){var c=r[l];0!==t[c]&&(n=!1)}n&&(a.splice(o--,1),e=u(u.s=r[0]))}return e}var n={},t={app:0},a=[];function u(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,o,r){u.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,o){if(1&o&&(e=u(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)u.d(r,n,function(o){return e[o]}.bind(null,n));return r},u.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(o,"a",o),o},u.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},u.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=o,l=l.slice();for(var p=0;p<l.length;p++)o(l[p]);var s=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,o,r){e.exports=r("56d7")},"56d7":function(e,o,r){"use strict";r.r(o);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),t=r("8c4f"),a=function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("div",[r("hr"),r("br"),r("br"),r("br"),r("br"),r("h2",[e._v("Home组件")]),r("p",[e._v("params参数： "+e._s(e.$route.params.id))])])},u=[],l={props:["a","path","params"],data:function(){return{}},mounted:function(){console.log(this.$router),console.log(this.$route)},beforeRouteEnter:function(e,o,r){console.log("----- beforeRouteEnter 路由进入，即将要请求当前的路由组件--------"),r()},beforeRouteUpdate:function(e,o,r){console.log("----- beforeRouteUpdate 路由参数发生变化的时候 --------"),r()},beforeRouteLeave:function(e,o,r){console.log("----- beforeRouteLeave 离开当前路由，请求新的路由地址--------"),r()}},c=l,p=r("2877"),s=Object(p["a"])(c,a,u,!1,null,null,null),i=s.exports,f=function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("div",[r("hr"),r("br"),r("br"),r("br"),r("br"),r("h2",[e._v("Personal 组件")]),r("p",[e._v("query传参： "+e._s(e.$route.query.a))])])},b=[],h={},d=h,v=Object(p["a"])(d,f,b,!1,null,null,null),m=v.exports,g=[{path:"/home/:id",component:i,name:"Home",props:function(e){return{a:123,path:e.path,params:e.params}}},{path:"/personal",component:m,name:"personal",meta:{isShowFooter:!0}},{path:"/",redirect:"/home/aaa"}];n["a"].use(t["a"]);var _=new t["a"]({routes:g});_.beforeEach((function(e,o,r){console.log("----- beforeEach 全局前置守卫--------"),console.log(e),console.log(o),console.log(r);var n=!1;n||"/personal"===e.path?r():r("/personal")})),_.beforeResolve((function(e,o,r){console.log("----- beforeResolve 全局解析守卫--------"),r()})),_.afterEach((function(e,o){console.log("----- afterEach 全局后置钩子--------")}));var y=_,w=function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("div",{attrs:{id:"app"}},[r("h1",[e._v("App - 组件通信方式")]),r("router-link",{attrs:{to:{name:"Home",params:{id:123,a:123}}}},[e._v("home链接")]),e._v(" "),r("router-link",{attrs:{to:{path:"/personal",query:{a:1,b:2}}}},[e._v("personal链接")]),r("br"),r("br"),r("br"),r("router-view")],1)},O=[],j={components:{Home:i,Personal:m},data:function(){return{shopItem:{id:123}}}},x=j,E=(r("e936"),Object(p["a"])(x,w,O,!1,null,null,null)),P=E.exports;n["a"].config.productionTip=!1,n["a"].config.errorHandler=function(e,o,r){console.log("全局错误捕获"),console.log(e,o,r)},n["a"].prototype.$eventBus=new n["a"];new n["a"]({render:function(e){return e(P)},router:y}).$mount("#app")},"876d":function(e,o,r){},e936:function(e,o,r){"use strict";var n=r("876d"),t=r.n(n);t.a}});
//# sourceMappingURL=app.b2d0c690.js.map