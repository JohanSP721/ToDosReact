(this.webpackJsonptodosreact=this.webpackJsonptodosreact||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),r=n(4),a=n.n(r),l=n(6),s=n(2),u=n(0),i=Object(o.createContext)(),d=function(e){var t=e.children,n=function(e,t){var n,c=localStorage.getItem(e);c?n=JSON.parse(c):(localStorage.setItem(e,JSON.stringify(t)),n=t);var r=Object(o.useState)(n),a=Object(s.a)(r,2),l=a[0],u=a[1];return[l,function(t){var n=JSON.stringify(t);localStorage.setItem(e,n),u(t)}]}("TODOS_V1",[]),c=Object(s.a)(n,2),r=c[0],a=c[1],d=Object(o.useState)(""),j=Object(s.a)(d,2),b=j[0],O=j[1],m=Object(o.useState)(!1),f=Object(s.a)(m,2),h=f[0],p=f[1],x=r.filter((function(e){return e.completed})).length,v=r.length,T=!b.length>=1?r:r.filter((function(e){var t=e.title.toLowerCase(),n=b.toLowerCase();return t.includes(n)}));return Object(u.jsx)(i.Provider,{value:{totalToDos:v,completedToDos:x,searchValue:b,searchedToDos:T,openModal:h,setOpenModal:p,setSearchValue:O,deleteToDo:function(e){var t=r.findIndex((function(t){return t.id===e})),n=Object(l.a)(r);n.splice(t,1),a(n)},completeToDo:function(e){var t=r.findIndex((function(t){return t.id===e})),n=Object(l.a)(r);n[t].completed=!n[t].completed,a(n)},addToDo:function(e){var t=Object(l.a)(r);t.push({completed:!1,title:e,id:r.length+1}),a(t)}},children:t})},j=(n(13),function(){var e=Object(o.useContext)(i),t=e.totalToDos,n=e.completedToDos;return Object(u.jsxs)("h2",{className:"TodoCounter",children:["Has completado ",n," de ",t," TODOS"]})}),b=(n(14),function(){var e=Object(o.useContext)(i),t=e.setSearchValue,n=e.searchValue;return Object(u.jsx)("input",{className:"TodoSearch",placeholder:"Cebolla",value:n,onChange:function(e){var n=e.target.value;t(n)}})}),O=function(e){var t=e.children;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("ul",{children:t})})},m=(n(15),function(e){var t=e.title,n=e.completed,o=e.onComplete,c=e.onDelete;return Object(u.jsxs)("li",{className:"TodoItem",children:[Object(u.jsx)("span",{className:"Icon Icon-check ".concat(n&&"Icon-check--active"),onClick:o,children:"\u221a"}),Object(u.jsx)("p",{className:"TodoItem-p ".concat(n&&"TodoItem-p--complete"),children:t}),Object(u.jsx)("span",{className:"Icon Icon-delete",onClick:c,children:"X"})]})}),f=(n(16),function(){var e=Object(o.useContext)(i).setOpenModal;return Object(u.jsx)("button",{className:"CreateTodoButton",onClick:function(){e((function(e){return!e}))},children:"+"})}),h=(n(17),function(e){var t=e.children;return a.a.createPortal(Object(u.jsx)("section",{className:"ModalBackground",children:t}),document.getElementById("modal"))}),p=(n(18),function(){var e=Object(o.useContext)(i),t=e.addToDo,n=e.setOpenModal,c=Object(o.useState)(""),r=Object(s.a)(c,2),a=r[0],l=r[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(a),n((function(e){return!e}))},children:[Object(u.jsx)("label",{children:"Escribe tu nuevo To Do"}),Object(u.jsx)("textarea",{value:a,onChange:function(e){var t=e.target.value;l(t)},placeholder:"Escribe una nueva tarea"}),Object(u.jsxs)("article",{className:"TodoForm-buttonContainer",children:[Object(u.jsx)("button",{type:"button",className:"TodoForm-button TodoForm-button-cancel",onClick:function(){n((function(e){return!e}))},children:"Cancelar"}),Object(u.jsx)("button",{className:"TodoForm-button TodoForm-button-add",type:"submit",children:"A\xf1adir"})]})]})}),x=(n(19),function(){var e=Object(o.useContext)(i),t=e.searchedToDos,n=e.deleteToDo,c=e.completeToDo,r=e.openModal;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j,{}),Object(u.jsx)(b,{}),Object(u.jsx)(O,{children:t.map((function(e){return Object(u.jsx)(m,{onDelete:function(){return n(e.id)},onComplete:function(){return c(e.id)},completed:e.co,title:e.title},e.title)}))}),r&&Object(u.jsx)(h,{children:Object(u.jsx)(p,{})}),Object(u.jsx)(f,{})]})});a.a.render(Object(u.jsx)(d,{children:Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(x,{})})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.6a556782.chunk.js.map