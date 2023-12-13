(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),r=a(30),s=a.n(r),o=a(9),i=a(2),l=a(6),u=a(4);var j=function(e){var t=e.isAuthenticated;return e.setIsAuthenticated,Object(n.jsx)("header",{children:Object(n.jsxs)("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark sticky-top",children:[Object(n.jsx)("div",{className:"navbar-brand container",children:"ToDoList App"}),Object(n.jsxs)("ul",{className:"navbar-nav justify-content-end container",children:[Object(n.jsx)("li",{className:"nav-link px-4",children:Object(n.jsx)(l.b,{to:"/",children:"Home"})}),t&&Object(n.jsx)("li",{className:"nav-link px-4",children:Object(n.jsx)(l.b,{to:"/todo",children:"View Todo"})}),t&&Object(n.jsx)("li",{className:"nav-link px-4",children:Object(n.jsx)(l.b,{to:"/add",children:"Add Todo"})}),!t&&Object(n.jsx)("li",{className:"nav-link px-4",children:Object(n.jsx)(l.b,{to:"/signin",children:"Signin"})}),!t&&Object(n.jsx)("li",{className:"nav-link px-4",children:Object(n.jsx)(l.b,{to:"/signup",children:"Signup"})}),t&&Object(n.jsx)("li",{className:"nav-link px-4",children:Object(n.jsx)(l.b,{to:"/signout",children:"Signout"})}),Object(n.jsx)("li",{className:"nav-link px-4",children:Object(n.jsx)(l.b,{to:"/about",children:"About"})})]})]})})};function d(){return Object(n.jsxs)("div",{className:"text-center",children:[Object(n.jsx)("h1",{children:"About"}),Object(n.jsx)("p",{children:"This is todo list app version 1.0.0"})]})}var b=a(3),p=a.n(b),h=a(7),O=a(8),m=a.n(O),x=a(16),f=a.n(x);var v=function(e){var t=e.isAuthenticated,a=(e.setIsAuthenticated,Object(c.useState)([])),r=Object(i.a)(a,2),s=r[0],o=r[1],j=Object(c.useState)(!1),d=Object(i.a)(j,2),b=d[0],O=d[1],x=Object(c.useState)(""),v=Object(i.a)(x,2),g=v[0],N=v[1],S=Object(c.useState)(1),k=Object(i.a)(S,2),A=k[0],w=k[1],I=Object(c.useState)(5),y=Object(i.a)(I,2),C=y[0],E=y[1],T=Object(c.useState)(A),P=Object(i.a)(T,2),D=P[0],U=P[1],B=Object(c.useState)(C),z=Object(i.a)(B,2),Y=z[0],M=z[1],L=Object(c.useState)("All"),J=Object(i.a)(L,2),K=J[0],$=J[1],_=Object(u.f)();Object(c.useEffect)((function(){t||_.push("/")}),[t,_]),Object(c.useEffect)((function(){(function(){var e=Object(h.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,e.prev=1,a="http://localhost:9090/api/todo/".concat(A-1,"/").concat(C),"Completed"===K?a="http://localhost:9090/api/todo/".concat(A-1,"/").concat(C,"?isCompleted=true"):"Not Completed"===K&&(a="http://localhost:9090/api/todo/".concat(A-1,"/").concat(C,"?isCompleted=false")),e.next=6,m.a.get(a,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("token"))}});case 6:t=e.sent,e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(1),e.t0.response?N(e.t0.response.data.message):N("Error: something happened"),e.abrupt("return");case 13:N(""),o(t.data);case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}})()()}),[b,A,C,K]);var q=function(){var e=Object(h.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.put("http://localhost:9090/api/todo/".concat(t,"/markcomplete"),{},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("token"))}});case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),e.t0.response?N(e.t0.response.data.message):N("Error: something happened"),e.abrupt("return");case 9:N(""),O(!b);case 11:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(h.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.delete("http://localhost:9090/api/todo/".concat(t),{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("token"))}});case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),e.t0.response?N(e.t0.response.data.message):N("Error: something happened"),e.abrupt("return");case 9:N(""),O(!b);case 11:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h1",{className:"text-center",children:"Todo List"}),""===g?Object(n.jsx)("div",{}):Object(n.jsx)("div",{className:"alert alert-danger",role:"alert",children:g}),Object(n.jsx)("center",{children:Object(n.jsxs)("div",{className:"col-6 offset-8",children:[Object(n.jsx)("label",{children:"Show"}),Object(n.jsxs)("select",{value:K,onChange:function(e){return $(e.target.value)},children:[Object(n.jsx)("option",{value:"All",children:"All"}),Object(n.jsx)("option",{value:"Completed",children:"Completed"}),Object(n.jsx)("option",{value:"Not Completed",children:"NotCompleted"})]})]})}),Object(n.jsxs)("table",{className:"table",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Title"}),Object(n.jsx)("th",{children:"Target Date"}),Object(n.jsx)("th",{children:"Is Completed?"}),Object(n.jsx)("th",{children:"Mark Completed"}),Object(n.jsx)("th",{children:"Update"}),Object(n.jsx)("th",{children:"Delete"})]})}),Object(n.jsx)("tbody",{children:s.map((function(e){return Object(n.jsxs)("tr",{className:e.isCompleted?"completed":"",children:[Object(n.jsx)("td",{children:e.title}),Object(n.jsx)("td",{children:f()(e.targetDate).format("ll")}),Object(n.jsx)("td",{children:e.isCompleted.toString()}),Object(n.jsx)("td",{children:Object(n.jsx)("button",{className:"btn btn-success",onClick:function(){return q(e.id)},children:"Mark Completed"})}),Object(n.jsx)("td",{children:Object(n.jsx)(l.b,{to:{pathname:"/update/".concat(e.id)},children:Object(n.jsx)("button",{className:"btn btn-primary",children:"Update"})})}),Object(n.jsx)("td",{children:Object(n.jsx)("button",{className:"btn btn-danger",onClick:function(){return F(e.id)},children:"Delete"})})]},e.id)}))})]}),Object(n.jsx)("center",{children:Object(n.jsxs)("div",{className:"input-group col-xl-3 col-md-4 col-sm-5 col-6",children:[Object(n.jsx)("div",{className:"input-group-append",children:Object(n.jsx)("span",{className:"input-group-text",id:"",children:"Todo per page: "})}),Object(n.jsx)("input",{className:"form-control text-center",type:"number",value:Y,onChange:function(e){return M(e.target.value)},onKeyPress:function(e){var t;"Enter"===e.key&&((t=e.target.value)>=1?E(parseInt(t)):(E(1),M(1)))}})]})}),Object(n.jsx)("div",{children:Object(n.jsx)("center",{children:Object(n.jsxs)("div",{className:"input-group col-lg-4 col-md-6 col-sm-8 col-9",children:[Object(n.jsx)("div",{className:"input-group-append",children:Object(n.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(){A>1&&(w(A-1),U(A-1))},children:"Previous Page"})}),Object(n.jsx)("input",{className:"form-control text-center",type:"number",value:D,onChange:function(e){return U(e.target.value)},onKeyPress:function(e){var t;"Enter"===e.key&&((t=e.target.value)>=1?w(parseInt(t)):(w(1),U(1)))}}),Object(n.jsx)("div",{className:"input-group-append",children:Object(n.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(){return w(A+1),void U(A+1)},children:"Next Page"})})]})})})]})};var g=function(e){var t=e.isAuthenticated,a=(e.setIsAuthenticated,Object(c.useState)("")),r=Object(i.a)(a,2),s=r[0],o=r[1],l=Object(c.useState)(""),j=Object(i.a)(l,2),d=j[0],b=j[1],O=Object(c.useState)(""),x=Object(i.a)(O,2),f=x[0],v=x[1],g=Object(c.useState)(""),N=Object(i.a)(g,2),S=N[0],k=N[1],A=Object(u.f)();Object(c.useEffect)((function(){t||A.push("/")}),[t,A]);var w=function(){var e=Object(h.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,m.a.post("http://localhost:9090/api/todo",{title:s,targetDate:d},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("token"))}});case 4:e.next=11;break;case 6:return e.prev=6,e.t0=e.catch(1),v(""),e.t0.response?k(e.t0.response.data.message):k("Error: something happened"),e.abrupt("return");case 11:o(""),b(""),k(""),v("Todo successfully created");case 15:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){v("")}),[s,d]),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("form",{onSubmit:w,children:[Object(n.jsx)("h1",{children:"Add New Todo"}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Title"}),Object(n.jsx)("input",{value:s,onChange:function(e){return o(e.target.value)},placeholder:"Title",className:"form-control"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Target Date"}),Object(n.jsx)("input",{value:d,type:"date",onChange:function(e){return b(e.target.value)},className:"form-control"})]}),Object(n.jsx)("button",{className:"btn btn-primary",children:"Add Todo"})]}),""===f?Object(n.jsx)("div",{}):Object(n.jsx)("div",{className:"alert alert-success",role:"alert",children:f}),""===S?Object(n.jsx)("div",{}):Object(n.jsx)("div",{className:"alert alert-danger",role:"alert",children:S})]})};var N=function(e){var t=e.isAuthenticated,a=(e.setIsAuthenticated,e.match),r=Object(c.useState)(""),s=Object(i.a)(r,2),o=s[0],l=s[1],j=Object(c.useState)(""),d=Object(i.a)(j,2),b=d[0],O=d[1],x=Object(c.useState)(""),v=Object(i.a)(x,2),g=v[0],N=v[1],S=Object(c.useState)(""),k=Object(i.a)(S,2),A=k[0],w=k[1],I=Object(u.f)();function y(e){return new Promise((function(t){return setTimeout(t,e)}))}Object(c.useEffect)((function(){t||I.push("/")}),[t,I]);var C=function(){var e=Object(h.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,m.a.put("http://localhost:9090/api/todo/".concat(a.params.id),{title:o,targetDate:b},{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("token"))}});case 4:e.next=11;break;case 6:return e.prev=6,e.t0=e.catch(1),N(""),e.t0.response?w(e.t0.response.data.message):w("Error: something happened"),e.abrupt("return");case 11:return w(""),N("Todo successfully updated"),e.next=15,y(1e3);case 15:I.push("/todo");case 16:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){(function(){var e=Object(h.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,e.prev=1,e.next=4,m.a.get("http://localhost:9090/api/todo/".concat(a.params.id),{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("token"))}});case 4:t=e.sent,e.next=12;break;case 7:return e.prev=7,e.t0=e.catch(1),N(""),e.t0.response?w(e.t0.response.data.message):w("Error: something happened"),e.abrupt("return");case 12:w(""),l(t.data.title),O(f()(t.data.targetDate).format("YYYY-MM-DD"));case 15:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}})()()}),[a.params.id]),Object(c.useEffect)((function(){N("")}),[o,b]),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("form",{onSubmit:C,children:[Object(n.jsx)("h1",{children:"Update Todo"}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Title"}),Object(n.jsx)("input",{value:o,onChange:function(e){return l(e.target.value)},className:"form-control"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Target Date"}),Object(n.jsx)("input",{value:b,type:"date",onChange:function(e){return O(e.target.value)},className:"form-control"})]}),Object(n.jsx)("button",{className:"btn btn-primary",children:"Update Todo"})]}),""===g?Object(n.jsx)("div",{}):Object(n.jsx)("div",{className:"alert alert-success",role:"alert",children:g}),""===A?Object(n.jsx)("div",{}):Object(n.jsx)("div",{className:"alert alert-danger",role:"alert",children:A})]})};var S=function(e){e.isAuthenticated;var t=e.setIsAuthenticated,a=Object(c.useState)(""),r=Object(i.a)(a,2),s=r[0],o=r[1],l=Object(c.useState)(""),j=Object(i.a)(l,2),d=j[0],b=j[1],O=Object(c.useState)(""),x=Object(i.a)(O,2),f=x[0],v=x[1],g=Object(c.useState)(""),N=Object(i.a)(g,2),S=N[0],k=N[1],A=Object(u.f)();function w(e){return new Promise((function(t){return setTimeout(t,e)}))}var I=function(){var e=Object(h.a)(p.a.mark((function e(a){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,m.a.post("http://localhost:9090/api/auth/signin",{username:s,password:d});case 4:n=e.sent,sessionStorage.setItem("token",n.data.token),sessionStorage.setItem("name",n.data.username),t(!0),e.next=16;break;case 10:return e.prev=10,e.t0=e.catch(1),v(""),e.t0.response?k(e.t0.response.data.message):k("Error: something happened"),t(!1),e.abrupt("return");case 16:return o(""),b(""),k(""),v("Sign in successful"),e.next=22,w(1e3);case 22:A.push("/");case 23:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){v("")}),[s,d]),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"card card-container",children:[Object(n.jsx)("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),Object(n.jsxs)("form",{onSubmit:I,children:[Object(n.jsx)("h1",{children:"Sign In"}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Username"}),Object(n.jsx)("input",{value:s,onChange:function(e){return o(e.target.value)},placeholder:"Username",className:"form-control"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Password"}),Object(n.jsx)("input",{value:d,type:"password",onChange:function(e){return b(e.target.value)},placeholder:"Password",className:"form-control"})]}),Object(n.jsx)("button",{className:"btn btn-primary",children:"Sign In"})]}),""===f?Object(n.jsx)("div",{}):Object(n.jsx)("div",{className:"alert alert-success",role:"alert",children:f}),""===S?Object(n.jsx)("div",{}):Object(n.jsx)("div",{className:"alert alert-danger",role:"alert",children:S})]})})};var k=function(e){e.isAuthenticated;var t=e.setIsAuthenticated,a=Object(c.useState)(""),r=Object(i.a)(a,2),s=r[0],o=r[1],l=Object(c.useState)(""),j=Object(i.a)(l,2),d=j[0],b=j[1],O=Object(c.useState)(""),x=Object(i.a)(O,2),f=x[0],v=x[1],g=Object(c.useState)(""),N=Object(i.a)(g,2),S=N[0],k=N[1],A=Object(c.useState)(""),w=Object(i.a)(A,2),I=w[0],y=w[1],C=Object(c.useState)(""),E=Object(i.a)(C,2),T=E[0],P=E[1],D=Object(c.useState)(""),U=Object(i.a)(D,2),B=U[0],z=U[1],Y=Object(c.useState)(""),M=Object(i.a)(Y,2),L=M[0],J=M[1],K=Object(u.f)();function $(e){return new Promise((function(t){return setTimeout(t,e)}))}var _=function(e){return/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{6,}$/.test(e)?(z(""),!0):(z("Password must be at least 6 characters long and include at least one uppercase letter, one special character, and one digit."),!1)},q=function(e){return e!==f?(J("Passwords do not match."),!1):(J(""),!0)},F=function(){var e=Object(h.a)(p.a.mark((function e(a){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),_(f)){e.next=3;break}return e.abrupt("return");case 3:if(q(S)){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,e.next=8,m.a.post("http://localhost:9090/api/auth/signup",{name:s,username:d,password:f,confirmPassword:S});case 8:n=e.sent,sessionStorage.setItem("token",n.data.token),sessionStorage.setItem("name",n.data.username),t(!0),e.next=20;break;case 14:return e.prev=14,e.t0=e.catch(5),y(""),e.t0.response?P(e.t0.response.data.message):P("Error: something happened"),t(!1),e.abrupt("return");case 20:return b(""),v(""),k(""),P(""),y("Sign up successful"),e.next=27,$(1e3);case 27:K.push("/");case 28:case"end":return e.stop()}}),e,null,[[5,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){y("")}),[d,f]),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"card card-container",children:[Object(n.jsx)("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),Object(n.jsxs)("form",{onSubmit:F,children:[Object(n.jsx)("h1",{children:"Sign Up"}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Name"}),Object(n.jsx)("input",{value:s,onChange:function(e){return o(e.target.value)},placeholder:"name",className:"form-control"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Username"}),Object(n.jsx)("input",{value:d,onChange:function(e){return b(e.target.value)},placeholder:"Username",className:"form-control"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Password"}),Object(n.jsx)("input",{value:f,type:"password",onChange:function(e){v(e.target.value),_(e.target.value)},placeholder:"Password",className:"form-control"}),B&&Object(n.jsx)("div",{className:"error",children:B})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Confirm Password"}),Object(n.jsx)("input",{value:S,type:"password",onChange:function(e){k(e.target.value),q(e.target.value)},placeholder:"Confirm Password",className:"form-control"}),L&&Object(n.jsx)("div",{className:"error",children:L})]}),Object(n.jsx)("button",{className:"btn btn-primary",children:"Sign Up"})]}),""===I?Object(n.jsx)("div",{}):Object(n.jsx)("div",{className:"alert alert-success",role:"alert",children:I}),""===T?Object(n.jsx)("div",{}):Object(n.jsx)("div",{className:"alert alert-danger",role:"alert",children:T})]})})};var A=function(e){e.isAuthenticated;var t=e.setIsAuthenticated,a=Object(u.f)();return Object(c.useEffect)((function(){sessionStorage.removeItem("token"),sessionStorage.removeItem("name"),t(!1),a.push("/")}),[a,t]),Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)("h1",{children:"Successfully sign out"})})};function w(e){var t=e.isAuthenticated,a=(e.setIsAuthenticated,Object(c.useState)("")),r=Object(i.a)(a,2),s=r[0],o=r[1],l=Object(c.useState)(0),u=Object(i.a)(l,2),j=u[0],d=u[1],b=Object(c.useState)(0),O=Object(i.a)(b,2),x=O[0],f=O[1],v=Object(c.useState)(""),g=Object(i.a)(v,2),N=g[0],S=g[1];return Object(c.useEffect)((function(){function e(){return(e=Object(h.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("http://localhost:9090/api/todo/count",{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("token"))}});case 3:t=e.sent,f(t.data.count),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),o(""),e.t0.response?S(e.t0.response.data.message):S("Error: something happened");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function a(){return(a=Object(h.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("http://localhost:9090/api/todo/count?isCompleted=false",{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("token"))}});case 3:t=e.sent,d(t.data.count),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),o(""),e.t0.response?S(e.t0.response.data.message):S("Error: something happened");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}t?(!function(){e.apply(this,arguments)}(),function(){a.apply(this,arguments)}(),o("Welcome, ".concat(sessionStorage.getItem("name"),". You have ").concat(j," todo not completed out of ").concat(x," todo."))):o("Please sign in to continue")}),[t,x,j]),Object(n.jsxs)("div",{className:"text-center",children:[Object(n.jsx)("h1",{children:"Todo List Application"}),""===N?Object(n.jsx)("div",{}):Object(n.jsx)("div",{className:"alert alert-danger",role:"alert",children:N}),s]})}function I(){return Object(n.jsxs)("div",{className:"text-center",children:[Object(n.jsx)("h1",{children:"Not Found"}),Object(n.jsx)("p",{children:"Requested page not found"})]})}a(61),a(62);var y=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(c.useEffect)((function(){null!==sessionStorage.getItem("token")&&r(!0)}),[]),Object(n.jsx)(l.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(j,{isAuthenticated:a,setIsAuthenticated:r}),Object(n.jsx)("div",{children:Object(n.jsxs)(u.c,{children:[Object(n.jsx)(u.a,{exact:!0,path:"/",render:function(e){return Object(n.jsx)(w,Object(o.a)(Object(o.a)({},e),{},{isAuthenticated:a,setIsAuthenticated:r}))}}),Object(n.jsx)(u.a,{exact:!0,path:"/signin",render:function(e){return Object(n.jsx)(S,Object(o.a)(Object(o.a)({},e),{},{isAuthenticated:a,setIsAuthenticated:r}))}}),Object(n.jsx)(u.a,{exact:!0,path:"/signup",render:function(e){return Object(n.jsx)(k,Object(o.a)(Object(o.a)({},e),{},{isAuthenticated:a,setIsAuthenticated:r}))}}),Object(n.jsx)(u.a,{exact:!0,path:"/signout",render:function(e){return Object(n.jsx)(A,Object(o.a)(Object(o.a)({},e),{},{isAuthenticated:a,setIsAuthenticated:r}))}}),Object(n.jsx)(u.a,{exact:!0,path:"/todo",render:function(e){return Object(n.jsx)(v,Object(o.a)(Object(o.a)({},e),{},{isAuthenticated:a,setIsAuthenticated:r}))}}),Object(n.jsx)(u.a,{exact:!0,path:"/add",render:function(e){return Object(n.jsx)(g,Object(o.a)(Object(o.a)({},e),{},{isAuthenticated:a,setIsAuthenticated:r}))}}),Object(n.jsx)(u.a,{exact:!0,path:"/update/:id",render:function(e){return Object(n.jsx)(N,Object(o.a)(Object(o.a)({},e),{},{isAuthenticated:a,setIsAuthenticated:r}))}}),Object(n.jsx)(u.a,{exact:!0,path:"/about",component:d}),Object(n.jsx)(u.a,{component:I})]})})]})})};s.a.render(Object(n.jsx)(y,{}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.3aefff64.chunk.js.map