(this["webpackJsonpreact-vidly"]=this["webpackJsonpreact-vidly"]||[]).push([[0],{115:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),l=a.n(c),o=a(9),u=(a(68),a(21)),s=a(27),i=a(4),m=a.n(i),p=a(8),d=a(30),f=a(10),v=a(20),b=a(14),g=function(e,t,a){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",l=r.a.createContext(),o=function(o){var u=o.children,s=Object(n.useReducer)(e,a),i=Object(b.a)(s,2),m=i[0],p=i[1];Object(n.useEffect)((function(){c&&localStorage.setItem(c,JSON.stringify(m))}),[m]);var d=Object.keys(t).reduce((function(e,a){return Object(f.a)({},e,Object(v.a)({},a,t[a](p)))}),{});return r.a.createElement(l.Provider,{value:Object(f.a)({state:m},d)},u)};return{Context:l,Provider:o}},h=a(22),E=a.n(h),y=a(125),k=a(16);var j={init:function(){y.a({dsn:"https://d0ceff7dfcd24286a59cda79d91f4752@sentry.io/5186000"})},log:function(e){k.a(e),console.error(e)}};a(87);function O(e){E.a.defaults.headers.common["x-auth-token"]=e}E.a.defaults.baseURL="https://vidly-final-node-backend-sheen.herokuapp.com/api",E.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500||(j.log(e),s.b.error("An unexpected error occurrred.")),Promise.reject(e)}));var w={get:E.a.get,post:E.a.post,put:E.a.put,delete:E.a.delete};function x(e){return"".concat("/movies","/").concat(e)}var S=function(e){return w.delete(x(e))},N=function(e){return w.get(x(e))},R=function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t._id){e.next=7;break}return delete(a=Object(f.a)({},t))._id,e.next=6,w.put(x(t._id),a);case 6:return e.abrupt("return",e.sent);case 7:return e.next=9,w.post("/movies",t);case 9:return e.abrupt("return",e.sent);case 12:throw e.prev=12,e.t0=e.catch(0),new Error(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();function C(){return w.get("/genres")}var _=[{name:"Comedy",movies:[{title:"Airplane",numberInStock:5,dailyRentalRate:2},{title:"The Hangover",numberInStock:10,dailyRentalRate:2},{title:"Wedding Crashers",numberInStock:15,dailyRentalRate:2}]},{name:"Action",movies:[{title:"Die Hard",numberInStock:5,dailyRentalRate:2},{title:"Terminator",numberInStock:10,dailyRentalRate:2},{title:"The Avengers",numberInStock:15,dailyRentalRate:2}]},{name:"Romance",movies:[{title:"The Notebook",numberInStock:5,dailyRentalRate:2},{title:"When Harry Met Sally",numberInStock:10,dailyRentalRate:2},{title:"Pretty Woman",numberInStock:15,dailyRentalRate:2}]},{name:"Thriller",movies:[{title:"The Sixth Sense",numberInStock:5,dailyRentalRate:2},{title:"Gone Girl",numberInStock:10,dailyRentalRate:2},{title:"The Others",numberInStock:15,dailyRentalRate:2}]}],I={allMovies:[],genres:[{_id:"",name:"All Genres"}],selectedGenre:null,currentPage:1,sortColumn:{path:"title",order:"asc"},query:""},P=g((function(e,t){var a=t.type,n=t.payload;switch(a){case"load_data":return Object(f.a)({},I,{genres:[].concat(Object(d.a)(I.genres),Object(d.a)(n.genres)),allMovies:n.allMovies,selectedGenre:I.genres[0]});case"remove_movie":return Object(f.a)({},e,{allMovies:e.allMovies.filter((function(e){return e._id!==n._id}))});case"toggle_movie_like":return Object(f.a)({},e,{allMovies:e.allMovies.map((function(e){return e._id===n._id?Object(f.a)({},e,{liked:!e.liked}):e}))});case"select_page":return Object(f.a)({},e,{currentPage:n});case"select_genre":return Object(f.a)({},e,{selectedGenre:n,currentPage:1,query:""});case"update_sort_column":return Object(f.a)({},e,{sortColumn:n});case"set_all_movies":return Object(f.a)({},e,{allMovies:n});case"update_query":return Object(f.a)({},e,{query:n,selectedGenre:I.genres[0],currentPage:1});default:return e}}),{loadData:function(e){return Object(p.a)(m.a.mark((function t(){var a,n,r,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C();case 2:return a=t.sent,n=a.data,t.next=6,w.get("/movies");case 6:r=t.sent,c=r.data,e({type:"load_data",payload:{allMovies:c,genres:n}});case 9:case"end":return t.stop()}}),t)})))},removeMovie:function(e){return function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S(t._id);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),e.t0.response&&404===e.t0.response.status&&s.b.error("This movie has already been deleted.");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()},toggleMovieLike:function(e){return function(t){return e({type:"toggle_movie_like",payload:t})}},selectPage:function(e){return function(t){return e({type:"select_page",payload:t})}},selectGenre:function(e){return function(t){return e({type:"select_genre",payload:t})}},updateSortColumn:function(e){return function(t){return e({type:"update_sort_column",payload:t})}},updateQuery:function(e){return function(t){return e({type:"update_query",payload:t})}},setAllMovies:function(e){return function(t){return e({type:"set_all_movies",payload:t})}},reset:function(e){return function(){var e=Object(p.a)(m.a.mark((function e(t,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map((function(e){return S(e._id)})));case 2:a.map((function(e){return _.map(function(){var t=Object(p.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.name!==e.name){t.next=6;break}return t.next=3,Promise.all(a.movies.map((function(t){return R(Object(f.a)({},t,{genreId:e._id}))})));case 3:t.t0=t.sent,t.next=7;break;case 6:t.t0=null;case 7:return t.abrupt("return",t.t0);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},removeMovieFromUi:function(e){return function(t){return e({type:"remove_movie",payload:t})}}},JSON.parse(window.localStorage.getItem("movies"))||I,"movies"),M=P.Context,D=P.Provider,L=a(60),F=a.n(L);var q={jwt:""},A=g((function(e,t){var a=t.type,n=t.payload;switch(a){case"set_jwt":return n;case"logout":return q;default:return e}}),{loginUser:function(e){return function(){var t=Object(p.a)(m.a.mark((function t(a){var n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=a.email,l=a.password,w.post("/auth",{email:c,password:l});case 3:n=t.sent,O(r=n.data),e({type:"set_jwt",payload:{jwt:r,user:F()(r)}}),t.next=13;break;case 9:if(t.prev=9,t.t0=t.catch(0),!t.t0.response||400!==t.t0.response.status){t.next=13;break}throw new Error(t.t0.response.data);case 13:case"end":return t.stop()}var c,l}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},logout:function(e){return function(){O(""),e({type:"logout"})}}},function(){var e=JSON.parse(window.localStorage.getItem("token"));return e&&O(e.jwt),e||q}(),"token"),T=A.Context,G=A.Provider,J=a(36),B=function(e){var t=e.component,a=e.render,c=Object(J.a)(e,["component","render"]),l=Object(n.useContext)(T).state;return r.a.createElement(u.b,Object.assign({},c,{render:function(e){return l.user?t?r.a.createElement(t,e):a(e):r.a.createElement(u.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},U=function(){var e=Object(n.useContext)(T).state;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(o.b,{to:"/",className:"navbar-brand"},"Vidly"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(o.c,{to:"/movies",className:"nav-link"},"Movies"),r.a.createElement(o.c,{to:"/customers",className:"nav-link"},"Customers"),r.a.createElement(o.c,{to:"/rentals",className:"nav-link"},"Rentals"),!e.user&&r.a.createElement(r.a.Fragment,null,r.a.createElement(o.c,{to:"/login",className:"nav-link"},"Login"),r.a.createElement(o.c,{to:"/register",className:"nav-link"},"Register")),e.user&&r.a.createElement(r.a.Fragment,null,r.a.createElement(o.c,{to:"/profile",className:"nav-link"},e.user.name),r.a.createElement(o.c,{to:"/logout",className:"nav-link"},"Logout")))))},W=a(23),z=a.n(W),H=function(e){var t=e.query,a=e.onSearch;return r.a.createElement("input",{type:"text",className:"form-control my-3",value:t,onChange:function(e){return a(e.currentTarget.value)},placeholder:"Search..."})},Q=function(e){var t=e.currentPage,a=e.itemsCount,n=e.pageSize,c=e.onPageChange,l=Math.ceil(a/n),o=l>1,u=z.a.range(1,l+1),s=1===t,i=t===l;return o?r.a.createElement("nav",{"aria-label":"Page navigation example"},r.a.createElement("ul",{className:"pagination"},o&&r.a.createElement("li",{className:"page-item ".concat(s&&"disabled")},r.a.createElement("span",{className:"page-link",onClick:function(){return c(1)}},"First")),u.map((function(e){return r.a.createElement("li",{key:e,className:"page-item  ".concat(e===t&&"active")},r.a.createElement("span",{className:"page-link",onClick:function(){return c(e)}},e))})),o&&r.a.createElement("li",{className:"page-item ".concat(i&&"disabled")},r.a.createElement("span",{className:"page-link",onClick:function(){return c(l)}},"Last")))):null},V=function(e){var t=e.items,a=e.selectedItem,n=e.onItemSelect,c=e.valueProperty,l=void 0===c?"_id":c,o=e.textProperty,u=void 0===o?"name":o;return r.a.createElement("ul",{className:"list-group"},t.map((function(e){return r.a.createElement("li",{key:e[l],className:"list-group-item ".concat(e===a&&"active"),style:{cursor:"pointer"},onClick:function(){return n(e)}},e[u])})))},$=function(e){var t=e.liked,a=e.onClick;return r.a.createElement("i",{onClick:a,className:"fa ".concat(t?"fa-heart":"fa-heart-o"),style:{fontSize:24,cursor:"pointer"}})},K=function(e){var t=e.columns,a=e.sortColumn,n=e.onSort,c=function(e){return e.path?r.a.createElement("th",{key:e.path,onClick:function(){return function(e){var t=e===a.path&&"asc"===a.order?"desc":"asc";n({path:e,order:t})}(e.path)},className:"clickable"},e.label,function(e){var t=a.path,n=a.order;return e.path!==t?null:r.a.createElement("i",{className:"fa fa-sort-".concat(n)})}(e)):r.a.createElement("th",{key:e.key})};return r.a.createElement("thead",null,r.a.createElement("tr",null,t.map((function(e){return c(e)}))))},X=function(e){var t=e.data,a=e.columns,n=function(e,t){return e._id+(t.path||t.key)};return r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{key:e._id},a.map((function(t){return r.a.createElement("td",{key:n(e,t)},function(e,t){return t.content?t.content(e):z.a.get(e,t.path)}(e,t))})))})))},Y=function(e){var t=e.columns,a=e.sortColumn,n=e.onSort,c=e.data;return r.a.createElement("table",{className:"table"},r.a.createElement(K,{columns:t,sortColumn:a,onSort:n}),r.a.createElement(X,{data:c,columns:t}))},Z=function(e){var t=e.movies,a=e.onLike,c=e.onDelete,l=e.onSort,u=e.sortColumn,s=[{path:"title",label:"Title",content:function(e){return r.a.createElement(o.b,{to:"/movies/".concat(e._id)},e.title)}},{path:"genre.name",label:"Genre"},{path:"numberInStock",label:"Stock"},{path:"dailyRentalRate",label:"Rate"},{key:"like",content:function(e){return r.a.createElement($,{liked:e.liked,onClick:function(){return a(e)}})}}],i=[{key:"delete",content:function(e){return r.a.createElement("button",{onClick:function(){return c(e)},className:"btn btn-danger btn-sm"},"Delete")}}],m=Object(n.useContext)(T).state;return m.user&&m.user.isAdmin&&(s=[].concat(Object(d.a)(s),i)),r.a.createElement(Y,{data:t,onSort:l,sortColumn:u,columns:s})},ee=function(e){e.history;var t=Object(n.useState)(!1),a=Object(b.a)(t,2),c=a[0],l=a[1],u=Object(n.useContext)(M),s=u.loadData,i=u.removeMovie,d=u.toggleMovieLike,f=u.selectPage,v=u.selectGenre,g=u.updateSortColumn,h=u.updateQuery,E=u.setAllMovies,y=u.reset,k=u.removeMovieFromUi,j=u.state,O=Object(n.useContext)(T).state,w=Object(n.useRef)(s);Object(n.useEffect)((function(){w.current()}),[]);var x=j.allMovies,S=j.genres,N=j.selectedGenre,R=j.currentPage,C=j.sortColumn,_=j.query;if(0===x.count)return r.a.createElement("p",null," There are no movies in the database.");var I=function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=z.a.cloneDeep(j.allMovies),e.prev=1,k(t),e.next=5,i(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),E(a);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,y(x,S);case 3:return e.next=5,w.current();case 5:l(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e;e=_?x.filter((function(e){return e.title.toLowerCase().includes(_)||e.genre.name.toLowerCase().includes(_)})):N&&N._id?x.filter((function(e){return e.genre._id===N._id})):x;var t=function(e,t,a){return e.slice((t-1)*a,t*a)}(z.a.orderBy(e,[C.path],[C.order]),R,4);return{totalCount:e.length,movies:t}}(),L=D.totalCount,F=D.movies;return c?r.a.createElement("h1",null,"Reset Is Loading... Please wait!"):r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement(V,{items:S,selectedItem:N,onItemSelect:function(e){return v(e)}})),r.a.createElement("div",{className:"col"},O.user?r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{to:"/movies/new",className:"btn btn-primary",style:{marginBottom:20}},"New Movie"),r.a.createElement("button",{onClick:P,className:"btn btn-success ml-3",style:{marginBottom:20}},"Reset Data")):r.a.createElement("button",{className:"btn btn-success ml-3",style:{marginBottom:20},disabled:"disabled"},"Login to Reset Data"),r.a.createElement("p",null,"Displaying ",L," movies in the database..."),r.a.createElement(H,{query:_,onSearch:function(e){return h(e)}}),r.a.createElement(Z,{movies:F,onLike:function(e){d(e)},onDelete:I,sortColumn:C,onSort:function(e){return g(e)}}),r.a.createElement(Q,{currentPage:R,itemsCount:L,pageSize:4,onPageChange:function(e){return f(e)}})))},te=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Rentals"),r.a.createElement("p",null,"Demo Content to display Routing"))},ae=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Customers"),r.a.createElement("p",null,"Demo Content to display Routing"))},ne=a(12),re=a.n(ne),ce=function(e){var t=e.autoFocus,a=void 0!==t&&t,n=e.type,c=void 0===n?"text":n,l=e.name,o=e.label,u=e.error,s=Object(J.a)(e,["autoFocus","type","name","label","error"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:l},o),r.a.createElement("input",Object.assign({name:l},s,{type:c,autoFocus:a,id:l,className:"form-control"})),u&&r.a.createElement("div",{className:"alert alert-danger"},u))},le=function(e){var t=e.name,a=e.value,n=e.dataSet,c=e.onChange;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},"Select ",t),r.a.createElement("select",{className:"form-control",id:{name:t},name:t,value:a,onChange:c},r.a.createElement("option",{value:""},"Please Select"),n.map((function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.name)}))))},oe=function(e){var t=e.schema,a=e.submitAction,n=e.inputList,c=e.data,l=e.setData,o=e.setErrors,u=e.errors,s=e.buttonLabel,i=function(e){var t=e.currentTarget,a=t.name,n=t.value,r=Object(f.a)({},u),s=m({name:a,value:n});s?r[a]=s:delete r[a],l(Object(f.a)({},c,Object(v.a)({},a,n))),o(r)},m=function(e){var a=e.name,n=e.value,r=re.a.object(Object(v.a)({},a,t[a])).validate(Object(v.a)({},a,n)).error;return r?r.details[0].message:null},p=function(){var e=re.a.object(t).validate(c,{abortEarly:!1}).error;if(!e)return null;var a={};return e.details.map((function(e){return a[e.path[0]]=e.message})),a},d=function(e){var t=e.name,a=e.label,n=e.type,l=void 0===n?"text":n,o=e.autoFocus,s=e.dataSet;switch(l){case"number":case"password":case"text":return r.a.createElement(ce,{key:t,name:t,label:a,value:c[t],type:l,onChange:i,error:u[t],autoFocus:o});case"select":return r.a.createElement(le,{name:t,value:c[t],key:t,dataSet:s,onChange:i,error:u[t]})}};return r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=p();if(t)return o(t);o({}),a()}},n.map((function(e){return d(e)})),r.a.createElement("button",{className:"btn btn-primary",disabled:p()},s))},ue={_id:re.a.string(),title:re.a.string().min(5).required().label("Title"),genreId:re.a.string().required().label("Genre"),numberInStock:re.a.number().integer().required().min(0).max(100).label("Number In Stock"),dailyRentalRate:re.a.number().required().min(0).max(100).label("Daily Dental Rate")},se=function(e){var t=e.match,a=e.history,c=t.params.movieId,l=Object(n.useState)({title:"",genreId:"",numberInStock:"",dailyRentalRate:""}),o=Object(b.a)(l,2),u=o[0],s=o[1],i=Object(n.useState)([]),d=Object(b.a)(i,2),f=d[0],v=d[1],g=Object(n.useState)({}),h=Object(b.a)(g,2),E=h[0],y=h[1],k=function(e){return{_id:e._id,title:e.title,genreId:e.genre._id,numberInStock:e.numberInStock,dailyRentalRate:e.dailyRentalRate}};Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:t=e.sent,a=t.data,v(a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=Object(p.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"new"!==c){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,N(c);case 5:t=e.sent,n=t.data,s(k(n)),e.next=14;break;case 10:if(e.prev=10,e.t0=e.catch(0),!e.t0.response||404!==e.t0.response.status){e.next=14;break}return e.abrupt("return",a.replace("/not-found"));case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){t.apply(this,arguments)}()}),[c,a]);var j=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R(u);case 3:a.push("/movies"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),y({title:e.t0.message});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),O=[{name:"title",label:"Title",autoFocus:!0},{name:"genreId",label:"Genre",type:"select",dataSet:f},{name:"numberInStock",label:"Number In Stock",type:"number"},{name:"dailyRentalRate",label:"Daily Rental Rate",type:"number"}];return r.a.createElement("div",null,r.a.createElement("h1",null,"Movie Form"),r.a.createElement(oe,{inputList:O,schema:ue,submitAction:j,data:u,setData:s,errors:E,setErrors:y,buttonLabel:"Save"}))},ie={email:re.a.string().required().email({minDomainSegments:2,tlds:{allow:["com","net"]}}).label("Email"),password:re.a.string().min(5).required().label("Password")},me=function(e){var t=e.history,a=e.location,c=Object(n.useState)({email:"",password:""}),l=Object(b.a)(c,2),o=l[0],s=l[1],i=Object(n.useState)({}),d=Object(b.a)(i,2),f=d[0],v=d[1],g=Object(n.useContext)(T),h=g.loginUser,E=g.state,y=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h(o);case 3:a.state?t.push(a.state.from.pathname):t.push("/"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),v({email:e.t0.message});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return E.user?r.a.createElement(u.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(oe,{inputList:[{name:"email",label:"Email",autoFocus:!0},{name:"password",label:"Password",type:"password"}],schema:ie,submitAction:y,data:o,setData:s,errors:f,setErrors:v,buttonLabel:"Login"}),r.a.createElement("hr",null),r.a.createElement("p",null,"Demo mode"),r.a.createElement("p",null,"Admin Account: admin@admin.com"),r.a.createElement("p",null,"Admin Password: 123456"),r.a.createElement("hr",null),r.a.createElement("p",null,"Normal Account: user@user.com"),r.a.createElement("p",null,"Normal Password: 123456"))};var pe={email:re.a.string().email({minDomainSegments:2,tlds:{allow:["com","net"]}}).min(5).max(255).required().label("Email"),password:re.a.string().min(5).max(1024).required().label("Password"),name:re.a.string().required().label("Name")},de=function(e){var t=e.history,a=Object(n.useState)({email:"",password:"",name:""}),c=Object(b.a)(a,2),l=c[0],o=c[1],u=Object(n.useState)({}),s=Object(b.a)(u,2),i=s[0],d=s[1],f=Object(n.useContext)(T).setJwt,v=function(){var e=Object(p.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n=l,w.post("/users",n);case 3:a=e.sent,f(a.headers["x-auth-token"]),t.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),e.t0.response&&400===e.t0.response.status&&d({email:e.t0.response.data});case 11:case"end":return e.stop()}var n}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h1",null,"Register"),r.a.createElement(oe,{inputList:[{name:"email",label:"Email",autoFocus:!0},{name:"password",label:"Password",type:"password"},{name:"name",label:"Name"}],schema:pe,submitAction:v,data:l,setData:o,errors:i,setErrors:d,buttonLabel:"Register"}))},fe=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Not Found"),r.a.createElement("p",null,"Oopppppsss this page doesn't exist!"))},ve=function(){var e=Object(n.useContext)(T).logout,t=Object(n.useRef)(e);return Object(n.useEffect)((function(){t.current()}),[]),r.a.createElement(u.a,{to:"/"})},be=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Profile Page"),r.a.createElement("p",null,"Sample Profile Page"))},ge=(a(114),a(115),function(){return r.a.createElement(G,null,r.a.createElement(D,null,r.a.createElement(s.a,null),r.a.createElement(U,null),r.a.createElement("main",{role:"main",className:"container"},r.a.createElement(u.d,null,r.a.createElement(B,{path:"/movies/:movieId",render:function(e){return r.a.createElement(se,Object.assign({},e,{hello:"hello"}))}}),r.a.createElement(u.b,{path:"/movies",render:function(e){return r.a.createElement(ee,e)}}),r.a.createElement(u.b,{path:"/login",render:function(e){return r.a.createElement(me,e)}}),r.a.createElement(u.b,{path:"/register",render:function(e){return r.a.createElement(de,e)}}),r.a.createElement(u.b,{path:"/rentals",render:function(){return r.a.createElement(te,null)}}),r.a.createElement(u.b,{path:"/customers",render:function(){return r.a.createElement(ae,null)}}),r.a.createElement(u.b,{path:"/profile",render:function(){return r.a.createElement(be,null)}}),r.a.createElement(u.b,{path:"/logout",render:function(){return r.a.createElement(ve,null)}}),r.a.createElement(u.b,{path:"/not-found",render:fe}),r.a.createElement(u.a,{exact:!0,from:"/react-vidly",to:"/movies"}),r.a.createElement(u.a,{exact:!0,from:"/",to:"/movies"}),r.a.createElement(u.a,{to:"/not-found"})))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(116),a(117);j.init(),l.a.render(r.a.createElement(o.a,null,r.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,t,a){e.exports=a(118)},68:function(e,t,a){},87:function(e){e.exports=JSON.parse("{}")}},[[63,1,2]]]);
//# sourceMappingURL=main.04cb73f4.chunk.js.map