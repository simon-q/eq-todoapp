(function(t){function e(e){for(var r,a,i=e[0],u=e[1],c=e[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(s.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o={app:0},s=[];function i(t){return u.p+"js/"+({tasks:"tasks"}[t]||t)+"."+{tasks:"d26a9093"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={tasks:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({tasks:"tasks"}[t]||t)+"."+{tasks:"25ede751"}[t]+".css",o=u.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){c=f[i],l=c.getAttribute("data-href");if(l===r||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[t],d.parentNode.removeChild(d),n(s)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(t);var f=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"28c0":function(t,e,n){"use strict";var r=n("a599"),a=n.n(r);a.a},"85ec":function(t,e,n){},a599:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/tasks"}},[t._v("Tasks")])],1),n("router-view")],1)},o=[],s=(n("034f"),n("2877")),i={},u=Object(s["a"])(i,a,o,!1,null,null,null),c=u.exports,l=(n("d3b7"),n("8c4f")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Intro")},d=[],p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",[t._v("...")])])}],v=n("d4ec"),m=n("262e"),b=n("2caf"),g=n("9ab4"),k=n("60a3"),y=function(t){Object(m["a"])(n,t);var e=Object(b["a"])(n);function n(){return Object(v["a"])(this,n),e.apply(this,arguments)}return n}(k["b"]);y=Object(g["a"])([k["a"]],y);var O=y,j=O,T=(n("28c0"),Object(s["a"])(j,p,h,!1,null,"5314f125",null)),_=T.exports,w={name:"Home",components:{Intro:_}},x=w,A=Object(s["a"])(x,f,d,!1,null,null,null),P=A.exports;r["a"].use(l["a"]);var I=[{path:"/",name:"Home",component:P},{path:"/tasks",name:"Tasks",component:function(){return n.e("tasks").then(n.bind(null,"eb1f"))}}],E=new l["a"]({mode:"history",base:"/",routes:I}),S=E,C=n("2f62"),L=(n("7db0"),n("5530")),q=n("bee2"),B=n("bc3a"),N=n.n(B),$=function(){function t(){Object(v["a"])(this,t),this.taskToRequestPayload=function(t){var e,n;return{id:t.id,done:t.done,text:t.text,personId:null===(e=t.person)||void 0===e?void 0:e.id,buildingId:null===(n=t.building)||void 0===n?void 0:n.id}},this.axiosInstance=N.a.create({baseURL:"http://localhost:8080/api/v1/"})}return Object(q["a"])(t,[{key:"getTasks",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.axiosInstance.get("tasks",{params:t}).then((function(t){return t.data}))}},{key:"createTask",value:function(t){return this.axiosInstance.post("tasks",this.taskToRequestPayload(t))}},{key:"updateTask",value:function(t){return this.axiosInstance.put("tasks/"+t.id,this.taskToRequestPayload(t))}},{key:"deleteTask",value:function(t){return this.axiosInstance.delete("tasks/"+t)}},{key:"getPersons",value:function(){return this.axiosInstance.get("persons").then((function(t){return t.data}))}},{key:"getBuildings",value:function(){return this.axiosInstance.get("buildings").then((function(t){return t.data}))}}]),t}(),H=new $,M=H,R=function(){return{all:[]}},D={findAll:function(t){var e=t.commit,n=t.rootState;M.getTasks(n.taskFilter).then((function(t){return e("setAll",t)}))},create:function(t,e){var n=t.dispatch;M.createTask(e).then((function(){return n("findAll")}))},update:function(t,e){var n=t.dispatch;M.updateTask(e).then((function(){return n("findAll")}))},setDone:function(t,e){var n=t.dispatch,r=t.state,a=r.all.find((function(t){return t.id===e.id}));a&&M.updateTask(Object(L["a"])(Object(L["a"])({},a),{},{done:e.done})).then((function(){return n("findAll")}))},delete:function(t,e){var n=t.dispatch;M.deleteTask(e).then((function(){return n("findAll")}))}},F={setAll:function(t,e){t.all=e}},J={namespaced:!0,state:R,actions:D,mutations:F},U=function(){return{all:[]}},K={findAll:function(t){var e=t.commit;M.getPersons().then((function(t){return e("setAll",t)}))}},z={setAll:function(t,e){t.all=e}},G={namespaced:!0,state:U,actions:K,mutations:z},Q=function(){return{all:[]}},V={findAll:function(t){var e=t.commit;M.getBuildings().then((function(t){return e("setAll",t)}))}},W={setAll:function(t,e){t.all=e}},X={namespaced:!0,state:Q,actions:V,mutations:W},Y=function(){return{personId:null,buildingId:null}},Z={set:function(t,e){var n=t.commit;n("updateState",e)}},tt={updateState:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.assign(t,e)}},et={namespaced:!0,state:Y,actions:Z,mutations:tt};r["a"].use(C["a"]);var nt=new C["a"].Store({modules:{task:J,person:G,building:X,taskFilter:et}});n("ab8b");r["a"].config.productionTip=!1,new r["a"]({router:S,store:nt,render:function(t){return t(c)}}).$mount("#app")}});
//# sourceMappingURL=app.8d8acd8a.js.map