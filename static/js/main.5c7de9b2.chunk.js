(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(8),s=a(2),c=a(6),o=(a(13),a(1)),l=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],d=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],u=a(0),m=function(e){var t=e.user,a=t.email,n=t.name;return Object(u.jsx)("a",{className:"UserInfo",href:"mailto:".concat(a),children:n})},j=function(e){var t=e.todo,a=t.completed,n=t.title,i=t.user,r=t.id;return Object(u.jsxs)("article",{className:"TodoInfo ".concat(a?"TodoInfo--completed":""),"data-id":r,children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:n}),i&&Object(u.jsx)(m,{user:i})]})},b=function(e){var t=e.todos;return Object(u.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(u.jsx)(j,{todo:e},e.id)}))})};function h(e){return l.find((function(t){return t.id===e}))||null}var O=d.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:h(e.userId)})})),f=l.map((function(e){var t=e.id,a=e.name;return Object(u.jsx)("option",{value:t,children:a},t)})),p=function(){var e=Object(o.useState)(O),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),c=Object(s.a)(i,2),l=c[0],m=c[1],j=Object(o.useState)(0),p=Object(s.a)(j,2),x=p[0],v=p[1],y=Object(o.useState)(!0),S=Object(s.a)(y,2),N=S[0],I=S[1],g=Object(o.useState)(!0),C=Object(s.a)(g,2),_=C[0],k=C[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Add todo form"}),Object(u.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){if(e.preventDefault(),l||I(!1),x||k(!1),l&&x){var t=d.reduce((function(e,t){return t.id>e?t.id:e}),0)+1,i={userId:x,title:l,id:t,completed:!1,user:h(x)};m(""),v(0),I(!0),k(!0),n([].concat(Object(r.a)(a),[i]))}},children:[Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("label",{htmlFor:"title",children:"Title:"}),Object(u.jsx)("input",{type:"text","data-cy":"titleInput",value:l,onChange:function(e){m(e.target.value),I(!0)},id:"title",placeholder:"Enter title here"}),!N&&Object(u.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("label",{htmlFor:"user",children:"User:"}),Object(u.jsxs)("select",{"data-cy":"userSelect",name:"user",value:x,onChange:function(e){v(+e.target.value),k(!0)},id:"user",children:[Object(u.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),f]}),!_&&Object(u.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(u.jsx)(b,{todos:a})]})};i.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5c7de9b2.chunk.js.map