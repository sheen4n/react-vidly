(this["webpackJsonpreact-vidly"]=this["webpackJsonpreact-vidly"]||[]).push([[0],{115:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(26),o=a.n(l),c=a(9),u=(a(68),a(21)),s=a(27),i=a(30),m=a(8),d=a(20),p=a(17),f=function(e,t,a){var l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=r.a.createContext(),c=function(c){var u=c.children,s=Object(n.useReducer)(e,a),i=Object(p.a)(s,2),f=i[0],v=i[1];Object(n.useEffect)((function(){l&&localStorage.setItem(l,JSON.stringify(f))}),[f]);var b=Object.keys(t).reduce((function(e,a){return Object(m.a)({},e,Object(d.a)({},a,t[a](v)))}),{});return r.a.createElement(o.Provider,{value:Object(m.a)({state:f},b)},u)};return{Context:o,Provider:c}},v={allMovies:[],genres:[{_id:"",name:"All Genres"}],selectedGenre:null,currentPage:1,sortColumn:{path:"title",order:"asc"},query:""},b=f((function(e,t){var a=t.type,n=t.payload;switch(a){case"load_data":return Object(m.a)({},v,{genres:[].concat(Object(i.a)(v.genres),Object(i.a)(n.genres)),allMovies:n.allMovies,selectedGenre:v.genres[0]});case"remove_movie":return Object(m.a)({},e,{allMovies:e.allMovies.filter((function(e){return e._id!==n._id}))});case"toggle_movie_like":return Object(m.a)({},e,{allMovies:e.allMovies.map((function(e){return e._id===n._id?Object(m.a)({},e,{liked:!e.liked}):e}))});case"select_page":return Object(m.a)({},e,{currentPage:n});case"select_genre":return Object(m.a)({},e,{selectedGenre:n,currentPage:1,query:""});case"update_sort_column":return Object(m.a)({},e,{sortColumn:n});case"set_all_movies":return Object(m.a)({},e,{allMovies:n});case"update_query":return Object(m.a)({},e,{query:n,selectedGenre:v.genres[0],currentPage:1});default:return e}}),{loadData:function(e){return function(t,a){return e({type:"load_data",payload:{allMovies:t,genres:a}})}},removeMovie:function(e){return function(t){return e({type:"remove_movie",payload:t})}},toggleMovieLike:function(e){return function(t){return e({type:"toggle_movie_like",payload:t})}},selectPage:function(e){return function(t){return e({type:"select_page",payload:t})}},selectGenre:function(e){return function(t){return e({type:"select_genre",payload:t})}},updateSortColumn:function(e){return function(t){return e({type:"update_sort_column",payload:t})}},updateQuery:function(e){return function(t){return e({type:"update_query",payload:t})}},setAllMovies:function(e){return function(t){return e({type:"set_all_movies",payload:t})}}},JSON.parse(window.localStorage.getItem("movies"))||v,"movies"),g=b.Context,E=b.Provider,h=a(59),y=a.n(h),k=a(22),j=a.n(k),O=a(125),w=a(14);var S={init:function(){O.a({dsn:"https://d0ceff7dfcd24286a59cda79d91f4752@sentry.io/5186000"})},log:function(e){w.a(e),console.error(e)}};a(88);function x(e){j.a.defaults.headers.common["x-auth-token"]=e}j.a.defaults.baseURL="https://vidly-final-node-backend-sheen.herokuapp.com/api",j.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500||(S.log(e),s.b.error("An unexpected error occurrred.")),Promise.reject(e)}));var N={get:j.a.get,post:j.a.post,put:j.a.put,delete:j.a.delete},R={jwt:""},C=f((function(e,t){var a=t.type,n=t.payload;switch(a){case"set_jwt":return x(n),{jwt:n,user:y()(n)};case"logout":return x(""),R;default:return e}}),{setJwt:function(e){return function(t){return e({type:"set_jwt",payload:t})}},logout:function(e){return function(){return e({type:"logout"})}}},function(){var e=JSON.parse(window.localStorage.getItem("token"));return e&&x(e.jwt),e||R}(),"token"),_=C.Context,I=C.Provider,P=function(){var e=Object(n.useContext)(_).state;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(c.b,{to:"/",className:"navbar-brand"},"Vidly"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(c.c,{to:"/movies",className:"nav-link"},"Movies"),r.a.createElement(c.c,{to:"/customers",className:"nav-link"},"Customers"),r.a.createElement(c.c,{to:"/rentals",className:"nav-link"},"Rentals"),!e.user&&r.a.createElement(r.a.Fragment,null,r.a.createElement(c.c,{to:"/login",className:"nav-link"},"Login"),r.a.createElement(c.c,{to:"/register",className:"nav-link"},"Register")),e.user&&r.a.createElement(r.a.Fragment,null,r.a.createElement(c.c,{to:"/profile",className:"nav-link"},e.user.name),r.a.createElement(c.c,{to:"/logout",className:"nav-link"},"Logout")))))},D=a(7),M=a.n(D),L=a(16),q=a(23),A=a.n(q);function F(){return N.get("/genres")}function T(e){return"".concat("/movies","/").concat(e)}function G(){return N.get("/movies")}function J(e){return N.delete(T(e))}function B(e){return N.get(T(e))}function W(e){if(e._id){var t=Object(m.a)({},e);return delete t._id,N.put(T(e._id),t)}return console.log(e),N.post("/movies",e)}var z=[{name:"Comedy",movies:[{title:"Airplane",numberInStock:5,dailyRentalRate:2},{title:"The Hangover",numberInStock:10,dailyRentalRate:2},{title:"Wedding Crashers",numberInStock:15,dailyRentalRate:2}]},{name:"Action",movies:[{title:"Die Hard",numberInStock:5,dailyRentalRate:2},{title:"Terminator",numberInStock:10,dailyRentalRate:2},{title:"The Avengers",numberInStock:15,dailyRentalRate:2}]},{name:"Romance",movies:[{title:"The Notebook",numberInStock:5,dailyRentalRate:2},{title:"When Harry Met Sally",numberInStock:10,dailyRentalRate:2},{title:"Pretty Woman",numberInStock:15,dailyRentalRate:2}]},{name:"Thriller",movies:[{title:"The Sixth Sense",numberInStock:5,dailyRentalRate:2},{title:"Gone Girl",numberInStock:10,dailyRentalRate:2},{title:"The Others",numberInStock:15,dailyRentalRate:2}]}],H=function(e){var t=e.query,a=e.onSearch;return r.a.createElement("input",{type:"text",className:"form-control my-3",value:t,onChange:function(e){return a(e.currentTarget.value)},placeholder:"Search..."})},Q=function(e){var t=e.currentPage,a=e.itemsCount,n=e.pageSize,l=e.onPageChange,o=Math.ceil(a/n),c=o>1,u=A.a.range(1,o+1),s=1===t,i=t===o;return c?r.a.createElement("nav",{"aria-label":"Page navigation example"},r.a.createElement("ul",{className:"pagination"},c&&r.a.createElement("li",{className:"page-item ".concat(s&&"disabled")},r.a.createElement("span",{className:"page-link",onClick:function(){return l(1)}},"First")),u.map((function(e){return r.a.createElement("li",{key:e,className:"page-item  ".concat(e===t&&"active")},r.a.createElement("span",{className:"page-link",onClick:function(){return l(e)}},e))})),c&&r.a.createElement("li",{className:"page-item ".concat(i&&"disabled")},r.a.createElement("span",{className:"page-link",onClick:function(){return l(o)}},"Last")))):null},U=function(e){var t=e.items,a=e.selectedItem,n=e.onItemSelect,l=e.valueProperty,o=void 0===l?"_id":l,c=e.textProperty,u=void 0===c?"name":c;return r.a.createElement("ul",{className:"list-group"},t.map((function(e){return r.a.createElement("li",{key:e[o],className:"list-group-item ".concat(e===a&&"active"),style:{cursor:"pointer"},onClick:function(){return n(e)}},e[u])})))},V=function(e){var t=e.liked,a=e.onClick;return r.a.createElement("i",{onClick:a,className:"fa ".concat(t?"fa-heart":"fa-heart-o"),style:{fontSize:24,cursor:"pointer"}})},$=function(e){var t=e.columns,a=e.sortColumn,n=e.onSort,l=function(e){return e.path?r.a.createElement("th",{key:e.path,onClick:function(){return function(e){var t=e===a.path&&"asc"===a.order?"desc":"asc";n({path:e,order:t})}(e.path)},className:"clickable"},e.label,function(e){var t=a.path,n=a.order;return e.path!==t?null:r.a.createElement("i",{className:"fa fa-sort-".concat(n)})}(e)):r.a.createElement("th",{key:e.key})};return r.a.createElement("thead",null,r.a.createElement("tr",null,t.map((function(e){return l(e)}))))},K=function(e){var t=e.data,a=e.columns,n=function(e,t){return e._id+(t.path||t.key)};return r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{key:e._id},a.map((function(t){return r.a.createElement("td",{key:n(e,t)},function(e,t){return t.content?t.content(e):A.a.get(e,t.path)}(e,t))})))})))},X=function(e){var t=e.columns,a=e.sortColumn,n=e.onSort,l=e.data;return r.a.createElement("table",{className:"table"},r.a.createElement($,{columns:t,sortColumn:a,onSort:n}),r.a.createElement(K,{data:l,columns:t}))},Y=function(e){var t=e.movies,a=e.onLike,l=e.onDelete,o=e.onSort,u=e.sortColumn,s=[{path:"title",label:"Title",content:function(e){return r.a.createElement(c.b,{to:"/movies/".concat(e._id)},e.title)}},{path:"genre.name",label:"Genre"},{path:"numberInStock",label:"Stock"},{path:"dailyRentalRate",label:"Rate"},{key:"like",content:function(e){return r.a.createElement(V,{liked:e.liked,onClick:function(){return a(e)}})}}],m=[{key:"delete",content:function(e){return r.a.createElement("button",{onClick:function(){return l(e)},className:"btn btn-danger btn-sm"},"Delete")}}],d=Object(n.useContext)(_).state;return d.user&&d.user.isAdmin&&(s=[].concat(Object(i.a)(s),m)),r.a.createElement(X,{data:t,onSort:o,sortColumn:u,columns:s})},Z=function(e){var t=e.history,a=Object(n.useContext)(g),l=a.loadData,o=a.removeMovie,u=a.toggleMovieLike,i=a.selectPage,d=a.selectGenre,p=a.updateSortColumn,f=a.updateQuery,v=a.setAllMovies,b=a.state,E=Object(n.useContext)(_).state,h=Object(n.useRef)(l);Object(n.useEffect)((function(){function e(){return(e=Object(L.a)(M.a.mark((function e(){var t,a,n,r;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:return t=e.sent,a=t.data,e.next=6,G();case 6:n=e.sent,r=n.data,h.current(r,a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var y=b.allMovies,k=b.genres,j=b.selectedGenre,O=b.currentPage,w=b.sortColumn,S=b.query;if(0===y.count)return r.a.createElement("p",null," There are no movies in the database.");var x=function(){var e=Object(L.a)(M.a.mark((function e(t){var a;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=A.a.cloneDeep(b.allMovies),e.prev=1,o(t),e.next=5,J(t._id);case 5:e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),e.t0.response&&404===e.t0.response.status&&s.b.error("This movie has already been deleted."),v(a);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(L.a)(M.a.mark((function e(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(y.map((function(e){return J(e._id)})));case 2:k.map((function(e){return z.map(function(){var t=Object(L.a)(M.a.mark((function t(a){return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.name!==e.name){t.next=6;break}return t.next=3,Promise.all(a.movies.map((function(t){return W(Object(m.a)({},t,{genreId:e._id}))})));case 3:t.t0=t.sent,t.next=7;break;case 6:t.t0=null;case 7:return t.abrupt("return",t.t0);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())})),t.push("/");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e;e=S?y.filter((function(e){return e.title.toLowerCase().includes(S)||e.genre.name.toLowerCase().includes(S)})):j&&j._id?y.filter((function(e){return e.genre._id===j._id})):y;var t=function(e,t,a){return e.slice((t-1)*a,t*a)}(A.a.orderBy(e,[w.path],[w.order]),O,4);return{totalCount:e.length,movies:t}}(),C=R.totalCount,I=R.movies;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement(U,{items:k,selectedItem:j,onItemSelect:function(e){return d(e)}})),r.a.createElement("div",{className:"col"},E.user&&r.a.createElement(c.b,{to:"/movies/new",className:"btn btn-primary",style:{marginBottom:20}},"New Movie"),r.a.createElement("button",{onClick:N,className:"btn btn-success ml-3",style:{marginBottom:20}},"Reset Data"),r.a.createElement("p",null,"Displaying ",C," movies in the database..."),r.a.createElement(H,{query:S,onSearch:function(e){return f(e)}}),r.a.createElement(Y,{movies:I,onLike:function(e){u(e)},onDelete:x,sortColumn:w,onSort:function(e){return p(e)}}),r.a.createElement(Q,{currentPage:O,itemsCount:C,pageSize:4,onPageChange:function(e){return i(e)}})))},ee=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Rentals"),r.a.createElement("p",null,"Demo Content to display Routing"))},te=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Customers"),r.a.createElement("p",null,"Demo Content to display Routing"))},ae=a(11),ne=a.n(ae),re=a(36),le=function(e){var t=e.autoFocus,a=void 0!==t&&t,n=e.type,l=void 0===n?"text":n,o=e.name,c=e.label,u=e.error,s=Object(re.a)(e,["autoFocus","type","name","label","error"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:o},c),r.a.createElement("input",Object.assign({name:o},s,{type:l,autoFocus:a,id:o,className:"form-control"})),u&&r.a.createElement("div",{className:"alert alert-danger"},u))},oe=function(e){var t=e.name,a=e.value,n=e.dataSet,l=e.onChange;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},"Example select"),r.a.createElement("select",{className:"form-control",id:{name:t},name:t,value:a,onChange:l},r.a.createElement("option",{value:""},"Please Select"),n.map((function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.name)}))))},ce=function(e){var t=e.schema,a=e.submitAction,n=e.inputList,l=e.data,o=e.setData,c=e.setErrors,u=e.errors,s=e.buttonLabel,i=function(e){var t=e.currentTarget,a=t.name,n=t.value,r=Object(m.a)({},u),s=p({name:a,value:n});s?r[a]=s:delete r[a],o(Object(m.a)({},l,Object(d.a)({},a,n))),c(r)},p=function(e){var a=e.name,n=e.value,r=ne.a.object(Object(d.a)({},a,t[a])).validate(Object(d.a)({},a,n)).error;return r?r.details[0].message:null},f=function(){var e=ne.a.object(t).validate(l,{abortEarly:!1}).error;if(!e)return null;var a={};return e.details.map((function(e){return a[e.path[0]]=e.message})),a},v=function(e){var t=e.name,a=e.label,n=e.type,o=void 0===n?"text":n,c=e.autoFocus,s=e.dataSet;switch(o){case"number":case"password":case"text":return r.a.createElement(le,{key:t,name:t,label:a,value:l[t],type:o,onChange:i,error:u[t],autoFocus:c});case"select":return r.a.createElement(oe,{name:t,value:l[t],key:t,dataSet:s,onChange:i,error:u[t]})}};return r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=f();if(t)return c(t);c({}),a()}},n.map((function(e){return v(e)})),r.a.createElement("button",{className:"btn btn-primary",disabled:f()},s))},ue={_id:ne.a.string(),title:ne.a.string().required().label("Title"),genreId:ne.a.string().required().label("Genre"),numberInStock:ne.a.number().integer().required().min(0).max(100).label("Number In Stock"),dailyRentalRate:ne.a.number().required().min(0).max(100).label("Daily Dental Rate")},se=function(e){var t=e.match,a=e.history,l=t.params.movieId,o=Object(n.useState)({title:"",genreId:"",numberInStock:"",dailyRentalRate:""}),c=Object(p.a)(o,2),u=c[0],s=c[1],i=Object(n.useState)([]),m=Object(p.a)(i,2),d=m[0],f=m[1],v=Object(n.useState)({}),b=Object(p.a)(v,2),g=b[0],E=b[1],h=function(e){return{_id:e._id,title:e.title,genreId:e.genre._id,numberInStock:e.numberInStock,dailyRentalRate:e.dailyRentalRate}};Object(n.useEffect)((function(){function e(){return(e=Object(L.a)(M.a.mark((function e(){var t,a;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:t=e.sent,a=t.data,f(a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=Object(L.a)(M.a.mark((function e(){var t,n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"new"!==l){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,B(l);case 5:t=e.sent,n=t.data,s(h(n)),e.next=14;break;case 10:if(e.prev=10,e.t0=e.catch(0),!e.t0.response||404!==e.t0.response.status){e.next=14;break}return e.abrupt("return",a.replace("/not-found"));case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){t.apply(this,arguments)}()}),[l,a]);var y=[{name:"title",label:"Title",autoFocus:!0},{name:"genreId",label:"Genre",type:"select",dataSet:d},{name:"numberInStock",label:"Number In Stock",type:"number"},{name:"dailyRentalRate",label:"Daily Rental Rate",type:"number"}];return r.a.createElement("div",null,r.a.createElement("h1",null,"Movie Form"),r.a.createElement(ce,{inputList:y,schema:ue,submitAction:function(){W(u),a.push("/movies")},data:u,setData:s,errors:g,setErrors:E,buttonLabel:"Save"}))};var ie={email:ne.a.string().required().email({minDomainSegments:2,tlds:{allow:["com","net"]}}).label("Email"),password:ne.a.string().min(5).required().label("Password")},me=function(e){var t=e.history,a=e.location,l=Object(n.useState)({email:"",password:""}),o=Object(p.a)(l,2),c=o[0],s=o[1],i=Object(n.useState)({}),m=Object(p.a)(i,2),d=m[0],f=m[1],v=Object(n.useContext)(_),b=v.setJwt,g=v.state,E=function(){var e=Object(L.a)(M.a.mark((function e(){var n,r;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l=c.email,o=c.password,N.post("/auth",{email:l,password:o});case 3:n=e.sent,r=n.data,b(r),a.state?t.push(a.state.from.pathname):t.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),e.t0.response&&400===e.t0.response.status&&f({email:e.t0.response.data});case 12:case"end":return e.stop()}var l,o}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return g.user?r.a.createElement(u.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(ce,{inputList:[{name:"email",label:"Email",autoFocus:!0},{name:"password",label:"Password",type:"password"}],schema:ie,submitAction:E,data:c,setData:s,errors:d,setErrors:f,buttonLabel:"Login"}),r.a.createElement("hr",null),r.a.createElement("p",null,"Demo mode"),r.a.createElement("p",null,"Admin Account: admin@admin.com"),r.a.createElement("p",null,"Admin Password: 123456"),r.a.createElement("hr",null),r.a.createElement("p",null,"Normal Account: user@user.com"),r.a.createElement("p",null,"Normal Password: 123456"))};var de={email:ne.a.string().required().email({minDomainSegments:2,tlds:{allow:["com","net"]}}).label("Email"),password:ne.a.string().required().min(5).label("Password"),name:ne.a.string().required().label("Name")},pe=function(e){var t=e.history,a=Object(n.useState)({email:"",password:"",name:""}),l=Object(p.a)(a,2),o=l[0],c=l[1],u=Object(n.useState)({}),s=Object(p.a)(u,2),i=s[0],m=s[1],d=Object(n.useContext)(_).setJwt,f=function(){var e=Object(L.a)(M.a.mark((function e(){var a;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n=o,N.post("/users",n);case 3:a=e.sent,console.log(a),d(a.headers["x-auth-token"]),t.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),e.t0.response&&400===e.t0.response.status&&m({email:e.t0.response.data});case 12:case"end":return e.stop()}var n}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h1",null,"Register"),r.a.createElement(ce,{inputList:[{name:"email",label:"Email",autoFocus:!0},{name:"password",label:"Password",type:"password"},{name:"name",label:"Name"}],schema:de,submitAction:f,data:o,setData:c,errors:i,setErrors:m,buttonLabel:"Register"}))},fe=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Not Found"),r.a.createElement("p",null,"Oopppppsss this page doesn't exist!"))},ve=function(){var e=Object(n.useContext)(_).logout,t=Object(n.useRef)(e);return Object(n.useEffect)((function(){t.current()}),[]),r.a.createElement(u.a,{to:"/"})},be=(a(114),a(115),function(e){var t=e.component,a=e.render,l=Object(re.a)(e,["component","render"]),o=Object(n.useContext)(_).state;return r.a.createElement(u.b,Object.assign({},l,{render:function(e){return o.user?t?r.a.createElement(t,e):a(e):r.a.createElement(u.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}),ge=function(){return r.a.createElement(I,null,r.a.createElement(E,null,r.a.createElement(s.a,null),r.a.createElement(P,null),r.a.createElement("main",{role:"main",className:"container"},r.a.createElement(u.d,null,r.a.createElement(be,{path:"/movies/:movieId",render:function(e){return r.a.createElement(se,Object.assign({},e,{hello:"hello"}))}}),r.a.createElement(u.b,{path:"/movies",render:function(e){return r.a.createElement(Z,e)}}),r.a.createElement(u.b,{path:"/login",render:function(e){return r.a.createElement(me,e)}}),r.a.createElement(u.b,{path:"/register",render:function(e){return r.a.createElement(pe,e)}}),r.a.createElement(u.b,{path:"/rentals",render:function(){return r.a.createElement(ee,null)}}),r.a.createElement(u.b,{path:"/customers",render:function(){return r.a.createElement(te,null)}}),r.a.createElement(u.b,{path:"/logout",render:function(){return r.a.createElement(ve,null)}}),r.a.createElement(u.b,{path:"/not-found",render:fe}),r.a.createElement(u.a,{exact:!0,from:"/",to:"/movies"}),r.a.createElement(u.a,{to:"/not-found"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(116),a(117);S.init(),o.a.render(r.a.createElement(c.a,null,r.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,t,a){e.exports=a(118)},68:function(e,t,a){},88:function(e){e.exports=JSON.parse("{}")}},[[63,1,2]]]);
//# sourceMappingURL=main.2bb4e6e1.chunk.js.map