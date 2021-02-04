(this.webpackJsonpredux1=this.webpackJsonpredux1||[]).push([[0],{38:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c(0),o=c(18),a=c.n(o),s=(c(38),c(10)),i=function(){return Object(r.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary justify-content-between",children:[Object(r.jsx)("div",{className:"contaienr",children:Object(r.jsx)("h1",{children:Object(r.jsx)(s.b,{to:"/CRUD-REACT/",className:"text-light",children:"CRUD - React, Redux, REST API"})})}),Object(r.jsx)(s.b,{className:"btn btn-danger nuevo-post d-block d-md-inline-block",to:"/CRUD-REACT/productos/nuevo",children:"Agregar Producto +"})]})},u=c(4),d=c(5),l=c(11),b=c.n(l),j=c(17),p="AGREGAR_PRODUCTO",O="AGREGAR_PRODUCTO_EXITO",m="AGREGAR_PRODUCTO_ERROR",h="COMENZAR_DESCARGA_PRODUCTOS",f="DESCARGA_PRODUCTOS_EXITO",x="PRODUCTO_ELIMINAR",v="PRODUCTO_ELIMINAR_EXITO",y="OBTENER_PRODUCTO_EDITAR",E="PRODUCTO_EDITAR_EXITO",R=c(22),C=c.n(R);var g=function(){return{type:p}},N=function(e){return{type:O,payload:e}},A=function(e){return{type:m,payload:e}},T=function(){return{type:h}},D=function(e){return{type:f,payload:e}},P=function(e){return{type:x,payload:e}},w=function(){return{type:v}},_=function(e){return{type:y,payload:e}},U=function(e){return{type:E,payload:e}},k=function(e){var t=e.producto,c=t.nombre,n=t.precio,o=t.id,a=Object(d.b)(),i=function(){a(function(e){return console.log(e),function(){var t=Object(j.a)(b.a.mark((function t(c){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(P(e)),t.prev=1,t.next=4,fetch("https://my-json-server.typicode.com/Andrison1425/CRUD-REACT/productos/".concat(e),{method:"DELETE",headers:{"Access-Control-Allow-Origin":"*",Accept:"application / json; odata.metadata = full","Content-Type":"application / json"}});case 4:c(w()),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(1);case 9:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()}(o))};return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:c}),Object(r.jsx)("td",{children:n}),Object(r.jsxs)("td",{className:"acciones",children:[Object(r.jsx)(s.b,{to:"/CRUD-REACT/productos/editar/".concat(o),className:"btn btn-primary mr-2",onClick:function(){return a(function(e){return function(t){t(_(e))}}(t))},children:"Editar"}),Object(r.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return i()},children:"Eliminar"})]})]})},S=function(){var e=Object(d.b)();Object(n.useEffect)((function(){e(function(){var e=Object(j.a)(b.a.mark((function e(t){var c,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(T()),e.prev=1,e.next=4,fetch("https://my-json-server.typicode.com/Andrison1425/CRUD-REACT/productos",{headers:{"Access-Control-Allow-Origin":"*",Accept:"application / json; odata.metadata = full","Content-Type":"application / json"}});case 4:return c=e.sent,e.next=7,c.json();case 7:r=e.sent,t(D(r)),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(1);case 13:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var t=Object(d.c)((function(e){return e.productos.productos}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{className:"text-center my-5",children:"Listado Productos"}),Object(r.jsxs)("table",{className:"table table--striped",children:[Object(r.jsx)("thead",{className:"bg-primary table-dark",children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{scope:"col",children:"Nombre"}),Object(r.jsx)("th",{scope:"col",children:"Precio"}),Object(r.jsx)("th",{scope:"col",children:"Acciones"})]})}),Object(r.jsx)("tbody",{children:0===t.lenght?"No hay productos":t.map((function(e){return Object(r.jsx)(k,{producto:e},e.id)}))})]})]})},I=c(14),G=c(3),X=c(21),L=function(e){var t=e.history,c=Object(n.useState)({nombre:"",precio:0}),o=Object(X.a)(c,2),a=o[0],s=o[1],i=Object(d.c)((function(e){return e.productos.loading})),u=Object(d.c)((function(e){return e.productos.error})),l=function(e){s(Object(G.a)(Object(G.a)({},a),{},Object(I.a)({},e.target.name,e.target.value)))},p=Object(d.b)();return Object(r.jsx)("div",{className:"row justify-content-center",children:Object(r.jsx)("div",{className:"col-md-8",children:Object(r.jsx)("div",{className:"card",children:Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsx)("h2",{className:"text-center mb-4 font-weight-bold",children:"Agregar Nuevo Producto"}),Object(r.jsxs)("form",{onSubmit:function(e){var c;(e.preventDefault(),""===a.nombre.trim()||a.precio<=0)||(p((c=a,function(){var e=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(g()),e.prev=1,e.next=4,fetch("https://my-json-server.typicode.com/Andrison1425/CRUD-REACT/productos",{method:"POST",body:JSON.stringify(c),headers:{"Access-Control-Allow-Origin":"*",Accept:"application / json; odata.metadata = full","Content-Type":"application / json"}});case 4:t(N(c)),C.a.fire("Correcto","El producto se agreg\xf3","success"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(A(!0)),C.a.fire({icon:"error",title:"Error",text:"Hubo un error"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())),t.push("/CRUD-REACT/"))},children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{children:"Nombre Producto"}),Object(r.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre Producto",name:"nombre",onChange:l,value:a.name,required:!0})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{children:"Precio Producto"}),Object(r.jsx)("input",{type:"number",className:"form-control",placeholder:"Precio Producto",onChange:l,name:"precio",value:a.precio,required:!0})]}),Object(r.jsx)("button",{type:"submit",className:"btn btn-primary font-weight-bold text-uppercase d-block w-100",children:"Agregar"})]}),!0===i?"Cargando...":null,!0===u?Object(r.jsx)("p",{className:"alert alert-danger p2 mt-4 text-center",children:"Hubo un error"}):null]})})})})},q=function(){var e=Object(u.g)().id,t=Object(d.c)((function(e){return e.productos.productoEditar})),c=Object(d.b)(),o=Object(n.useState)({nombre:t.nombre,precio:t.precio,id:e}),a=Object(X.a)(o,2),s=a[0],i=a[1],l=function(e){i(Object(G.a)(Object(G.a)({},s),{},Object(I.a)({},e.target.name,e.target.value)))};return Object(r.jsx)("div",{className:"row justify-content-center",children:Object(r.jsx)("div",{className:"col-md-8",children:Object(r.jsx)("div",{className:"card",children:Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsx)("h2",{className:"text-center mb-4 font-weight-bold",children:"Editar Producto"}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(function(e){return function(){var t=Object(j.a)(b.a.mark((function t(c){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://my-json-server.typicode.com/Andrison1425/CRUD-REACT/productos/".concat(e.id),{method:"PUT",body:JSON.stringify(e),headers:{"Access-Control-Allow-Origin":"*",Accept:"application / json; odata.metadata = full","Content-Type":"application / json"}});case 3:c(U(e)),C.a.fire("Correcto","El producto se edit\xf3","success"),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(s))},children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{children:"Nombre Producto"}),Object(r.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre Producto",name:"nombre",onChange:l,required:!0,value:s.nombre})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{children:"Precio Producto"}),Object(r.jsx)("input",{type:"number",onChange:l,className:"form-control",placeholder:"Precio Producto",name:"precio",value:Number(s.precio),required:!0})]}),Object(r.jsx)("button",{type:"submit",className:"btn btn-primary font-weight-bold text-uppercase d-block w-100",children:"Guardar Cambios"})]})]})})})})},J=c(12),M=c(30),B=c(31),H={productos:[],error:!1,loading:!1,idEliminar:null,productoEditar:null};var V=Object(J.c)({productos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:case h:return Object(G.a)(Object(G.a)({},e),{},{loading:!0});case O:return Object(G.a)(Object(G.a)({},e),{},{loading:!1,productos:[].concat(Object(B.a)(e.productos),[t.payload])});case m:return Object(G.a)(Object(G.a)({},e),{},{loading:!1,error:t.payload});case f:return Object(G.a)(Object(G.a)({},e),{},{productos:t.payload,loading:!1});case x:return Object(G.a)(Object(G.a)({},e),{},{idEliminar:t.payload});case v:return Object(G.a)(Object(G.a)({},e),{},{productos:e.productos.filter((function(t){return t.id!==e.idEliminar}))});case y:return Object(G.a)(Object(G.a)({},e),{},{productoEditar:t.payload});case E:return Object(G.a)(Object(G.a)({},e),{},{productos:e.productos.map((function(e){return e.id===t.payload.id?t.payload:e})),productoEditar:null});default:return e}}}),F=Object(J.e)(V,Object(J.d)(Object(J.a)(M.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),Z=c(32),z=function(e){var t=e.component,c=Object(Z.a)(e,["component"]);return Object(d.c)((function(e){return e.productos.productoEditar}))?Object(r.jsx)(u.b,Object(G.a)(Object(G.a)({},c),{},{component:t})):Object(r.jsx)(u.a,{to:"/CRUD-REACT/"})};var K=function(){return Object(r.jsx)(s.a,{children:Object(r.jsxs)(d.a,{store:F,children:[Object(r.jsx)(i,{}),Object(r.jsx)("div",{className:"container mt-5",children:Object(r.jsxs)(u.d,{children:[Object(r.jsx)(u.b,{exact:!0,path:"/CRUD-REACT/",component:S}),Object(r.jsx)(u.b,{exact:!0,path:"/CRUD-REACT/productos/nuevo",component:L}),Object(r.jsx)(z,{exact:!0,path:"/CRUD-REACT/productos/editar/:id",component:q})]})})]})})};a.a.render(Object(r.jsx)(K,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.b17dfee6.chunk.js.map