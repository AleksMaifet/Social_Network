(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,a){e.exports={dialog_wrapper:"Dialogs_dialog_wrapper__1e8bJ",dialog_item:"Dialogs_dialog_item__34Aq0",item:"Dialogs_item__2T6Jb",active:"Dialogs_active__2qLN1",messages_item:"Dialogs_messages_item__151y9",dialog:"Dialogs_dialog__21nt2",avatar:"Dialogs_avatar__28Bnm"}},18:function(e,t,a){e.exports={default:"button_default__1Rnjo",disable:"button_disable__CLIIU"}},19:function(e,t,a){e.exports={item:"MyPost_item__JRVSY",avatar:"MyPost_avatar__vY6bT",like:"MyPost_like__2j7BG"}},20:function(e,t,a){e.exports={userPhoto:"Users_userPhoto__2X09d",currentPage:"Users_currentPage__4yUV_",userPages:"Users_userPages__2bm78",wrapperPages:"Users_wrapperPages__1ssPL"}},30:function(e,t,a){e.exports={header:"Header_header__2XZs7",authWrapper:"Header_authWrapper__3L93u"}},33:function(e,t,a){e.exports={avatar:"MyPosts_avatar__3wagE",textareaPost:"MyPosts_textareaPost__3mB5m",buttonPost:"MyPosts_buttonPost__3bmwF",myPosts:"MyPosts_myPosts__GWB3U"}},34:function(e,t,a){e.exports={loader:"Load_loader__Yug43",spin:"Load_spin__KXYg0",wrapperLoading:"Load_wrapperLoading__P9Cf2"}},35:function(e,t,a){},51:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);a(35);var n=a(1),r=a.n(n),s=a(23),c=a.n(s),i=(a(51),a(30)),o=a.n(i),l=a(5),u=a(10),d=a.n(u),j=a(14),A=a(2),g=a(44),p=a.n(g).a.create({withCredentials:!0,headers:{"API-KEY":"772b566d-453d-4f00-a46a-f93f13413638"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),O=function(e,t){return p.get("users?page=".concat(e,"&count=").concat(t))},b=function(e,t){return e.filter((function(e){return e.id===t}))[0].followed?p.delete("follow/".concat(t)):p.post("follow/".concat(t),{})},f=function(){return p.get("/auth/me",{})},m=function(e){return p.get("profile/".concat(e),{})},v={data:{userId:null,email:null,login:null},resultCode:null,messages:null,photo:null},h=function(e,t,a){return{type:"GET-AUTH-DATA",payload:{userId:e,email:t,login:a}}},x=a(6),w="data:image/png;base64,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",P=a(0),E=r.a.memo((function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth.data.login})),a=Object(l.c)((function(e){return e.auth.photo}));return Object(n.useEffect)((function(){e(function(){var e=Object(j.a)(d.a.mark((function e(t){var a,n,r,s,c,i,o,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:return a=e.sent,n=a.data,r=n.data,s=r.id,c=r.email,i=r.login,t(h(s,c,i)),e.next=8,m(s);case 8:o=e.sent,l=o.data.photos,t({type:"GET-PHOTO",payload:{photo:l.large}});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)("header",{className:o.a.header,children:[Object(P.jsx)("img",{src:"data:image/png;base64,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"}),Object(P.jsxs)("div",{className:o.a.authWrapper,children:[Object(P.jsx)(x.b,{to:"/login",children:t||"Login"}),Object(P.jsx)("div",{style:{textAlign:"center"},children:Object(P.jsx)("img",{style:{width:"40px",height:"40px"},src:a||w})})]})]})})})),C=a(8),N=a.n(C);function B(){return Object(P.jsxs)("nav",{className:N.a.nav,children:[Object(P.jsx)("div",{className:N.a.item,children:Object(P.jsx)(x.b,{activeClassName:N.a.active,to:"/profile",children:"Profile"})}),Object(P.jsx)("div",{className:N.a.item,children:Object(P.jsx)(x.b,{activeClassName:N.a.active,to:"/dialogs",children:"Messages"})}),Object(P.jsx)("div",{className:N.a.item,children:Object(P.jsx)(x.b,{activeClassName:N.a.active,to:"/users",children:"Users"})}),Object(P.jsx)("div",{className:N.a.item,children:Object(P.jsx)(x.b,{activeClassName:N.a.active,to:"/news",children:"News"})}),Object(P.jsx)("div",{className:N.a.item,children:Object(P.jsx)(x.b,{activeClassName:N.a.active,to:"/music",children:"Music"})}),Object(P.jsx)("div",{className:N.a.item,children:Object(P.jsx)(x.b,{activeClassName:N.a.active,to:"/settings",children:"Settings"})})]})}var D=a(4),G=a(26),Q=function(e){var t=e.children,a=Object(G.a)(e,["children"]),n=Object(l.c)((function(e){return e.auth.data.login}));return Object(P.jsx)(D.b,Object(A.a)(Object(A.a)({},a),{},{render:function(){return n?t:Object(P.jsx)(D.a,{to:"/login"})}}))},y=a(25),Y=a(78),H="ADD-POST",k="ADD-NEW-MESSAGE",S="ADD-NEW-PROFILE",L="SET-LOAD-PROFILE",R={posts:[{id:Object(Y.a)(),message:"Hi, how are you?",likesCount:12},{id:Object(Y.a)(),message:"It is my post",likesCount:11},{id:Object(Y.a)(),message:"blabla",likesCount:11},{id:Object(Y.a)(),message:"dada",likesCount:11}],newPostText:"",isLoad:!1,profile:null},T=function(e){return{type:S,profile:e}},U=Object(D.g)(r.a.memo((function(e){var t,a,r,s,c,i=Object(l.c)((function(e){return e.profilePage})),o=Object(l.b)();return Object(n.useEffect)((function(){var t=e.match.params.userId;o(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"2";return function(){var t=Object(j.a)(d.a.mark((function t(a){var n,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(+e);case 2:n=t.sent,r=n.data,a(T(r));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}),[o,e.match.params.userId]),Object(P.jsxs)("div",{children:[Object(P.jsx)("div",{children:Object(P.jsx)("img",{src:"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"})}),Object(P.jsxs)("div",{children:[Object(P.jsx)("img",{src:(null===(t=i.profile)||void 0===t?void 0:t.photos.large)?null===(a=i.profile)||void 0===a?void 0:a.photos.large:w}),Object(P.jsxs)("div",{children:[Object(P.jsx)("span",{style:{fontWeight:"bold"},children:"Name:"})," ",null===(r=i.profile)||void 0===r?void 0:r.fullName]}),(null===(s=i.profile)||void 0===s?void 0:s.aboutMe)&&Object(P.jsxs)("div",{children:[Object(P.jsx)("span",{style:{fontWeight:"bold"},children:"Status:"})," ",null===(c=i.profile)||void 0===c?void 0:c.aboutMe]})]})]})}))),F=a(33),J=a.n(F),M=a(18),I=a.n(M),z=a(19),X=a.n(z),V=a.p+"static/media/imagebotgirl.81fc9765.png";function W(e){return Object(P.jsxs)("div",{className:"".concat(X.a.item," ").concat(X.a.avatar),children:[Object(P.jsx)("img",{src:V}),Object(P.jsx)("p",{children:e.message}),Object(P.jsxs)("div",{className:X.a.like,children:[Object(P.jsx)("img",{className:X.a.like,src:"https://freesvg.org/img/1465762629.png"}),Object(P.jsx)("p",{children:e.caunt})]})]})}function K(e){var t=e.OnNewText,a=e.OnNewPost,n=Object(l.c)((function(e){return e.profilePage})),r=n.posts.map((function(e){return Object(P.jsx)(W,{message:e.message,caunt:e.likesCount},e.id)}));return Object(P.jsxs)("div",{className:J.a.myPosts,children:[Object(P.jsx)("h3",{children:"My posts"}),Object(P.jsx)("textarea",{value:n.newPostText,className:J.a.textareaPost,onChange:function(e){t(e.currentTarget.value)}}),Object(P.jsx)("div",{children:Object(P.jsx)("button",{className:I.a.default,onClick:function(){a()},children:"Add post"})}),Object(P.jsx)("div",{children:r})]})}function q(){var e=Object(l.b)();return Object(P.jsx)(K,{OnNewText:function(t){return e({type:k,newMessage:t})},OnNewPost:function(){return e({type:H})}})}function Z(){return Object(P.jsxs)("div",{children:[Object(P.jsx)(U,{}),Object(P.jsx)(q,{})]})}var _=a(16),$=a.n(_),ee=r.a.memo((function(){var e=Object(l.c)((function(e){return e.dialogsPage})),t=e.dialogs.map((function(e){return Object(P.jsxs)(x.b,{to:"/dialogs/".concat(e.id),children:[Object(P.jsx)("img",{className:$.a.avatar,src:e.img}),e.name]},e.id)})),a=e.messages.map((function(e){return Object(P.jsx)("div",{children:e.message},e.id)}));return Object(P.jsxs)("div",{className:$.a.dialog_wrapper,children:[Object(P.jsx)("div",{className:$.a.dialog_item,children:Object(P.jsx)("div",{className:$.a.item,children:t})}),Object(P.jsx)("div",{className:$.a.messages_item,children:a})]})})),te={items:[],pageSize:100,totalUsersCount:0,currentPage:1,isLoad:!0,followProgress:[]},ae=function(e){return{type:"FOLLOW",id:e}},ne=function(e){return{type:"SET-USERS",users:e}},re=function(e){return{type:"SET-LOAD-USER",payload:{isLoad:e}}},se=function(e,t){return{type:"SET-FOLLOW-PROGRESS",payload:{isProgress:e,userId:t}}},ce=a(20),ie=a.n(ce),oe=a(34),le=a.n(oe),ue=function(){return Object(P.jsx)("div",{className:le.a.wrapperLoading,children:Object(P.jsx)("div",{className:le.a.loader})})},de=r.a.memo((function(e){var t=e.followChangeHandler,a=e.followedHandler,n=e.users,r=Object(G.a)(e,["followChangeHandler","followedHandler","users"]),s=function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return a(e)})),c=n.isLoad?Object(P.jsxs)("div",{children:[Object(P.jsx)("div",{className:ie.a.wrapperPages,children:r.newPage.map((function(e,t){return Object(P.jsx)("span",{onClick:function(){return function(e){return r.pageChangeHandler(e)}(e)},className:"".concat(ie.a.userPages," ").concat(n.currentPage===e?ie.a.currentPage:""),children:e},t)}))}),n.items.map((function(e){return Object(P.jsxs)("div",{children:[Object(P.jsx)(x.b,{to:"/profile/"+e.id,children:Object(P.jsx)("img",{src:null!=e.photos.small?e.photos.small:w,className:ie.a.userPhoto})}),Object(P.jsx)("div",{children:Object(P.jsx)("button",{className:n.followProgress.some((function(t){return t===e.id}))?I.a.disable:I.a.default,disabled:n.followProgress.some((function(t){return t===e.id})),onClick:function(a){return n=e.id,void t(n);var n},children:s(e.followed)})}),Object(P.jsx)("div",{children:e.name}),Object(P.jsx)("div",{children:e.status})]},e.id)}))]}):Object(P.jsx)(ue,{});return Object(P.jsx)(P.Fragment,{children:c})})),je=r.a.memo((function(){var e=Object(l.c)((function(e){return e.userPage})),t=Object(l.b)(),a=Object(n.useCallback)((function(a){t(function(e,t){return function(){var a=Object(j.a)(d.a.mark((function a(n){return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(se(!0,t)),a.next=3,b(e,t);case 3:0===a.sent.data.resultCode&&n(ae(t)),n(se(!1,t));case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(e.items,a))}),[t,e]),s=Object(n.useCallback)((function(e){return e?"Follow":"Unfollow"}),[]),c=Object(n.useMemo)((function(){for(var t=[],a=Math.ceil(e.totalUsersCount/e.pageSize),n=1;n<=a;n++)t.push(n);return t}),[e.pageSize,e.totalUsersCount]);Object(n.useEffect)((function(){var a,n;0===e.items.length&&t((a=e.currentPage,n=e.pageSize,function(){var e=Object(j.a)(d.a.mark((function e(t){var r,s,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(a,n);case 2:r=e.sent,s=r.data,c=s.items,i=s.totalCount,t(ne(c)),t({type:"SET-TOTAL-USERS",payload:{totalUsersCount:i}});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}),[t,e.items,e.currentPage,e.pageSize]);var i=Object(n.useCallback)((function(a){t(function(e,t){return function(){var a=Object(j.a)(d.a.mark((function a(n){var r,s,c;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(re(!1)),n({type:"SET-CURRENT-PAGE",payload:{currentPage:e}}),a.next=4,O(e,t);case 4:r=a.sent,s=r.data,c=s.items,n(ne(c)),n(re(!0));case 9:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(a,e.pageSize))}),[t,e.pageSize]);return Object(P.jsx)(r.a.Fragment,{children:0===e.items.length?Object(P.jsx)(ue,{}):Object(P.jsx)(de,{newPage:c,users:e,pageChangeHandler:i,followChangeHandler:a,followedHandler:s})})})),Ae=function(){return Object(P.jsx)(P.Fragment,{children:Object(P.jsx)("h1",{children:"LOGIN"})})},ge=function(e){return Object(P.jsx)("div",{children:"News"})},pe=function(e){return Object(P.jsx)("div",{children:"Music"})},Oe=function(e){return Object(P.jsx)("div",{children:"Settings"})},be="/profile",fe="/dialogs",me="/users",ve="/login",he=function(){return Object(P.jsx)("div",{children:Object(P.jsxs)(D.d,{children:[Object(P.jsx)(Q,{path:be+"/:userId?",children:Object(P.jsx)(Z,{})}),Object(P.jsx)(Q,{path:fe,children:Object(P.jsx)(ee,{})}),Object(P.jsx)(Q,{path:me,children:Object(P.jsx)(je,{})}),Object(P.jsx)(D.b,{path:ve,render:function(){return Object(P.jsx)(Ae,{})}}),Object(P.jsx)(D.b,{path:"/news",render:function(){return Object(P.jsx)(ge,{})}}),Object(P.jsx)(D.b,{path:"/music",render:function(){return Object(P.jsx)(pe,{})}}),Object(P.jsx)(D.b,{path:"/settings",render:function(){return Object(P.jsx)(Oe,{})}})]})})};var xe=function(){return Object(P.jsx)(x.a,{children:Object(P.jsxs)("div",{className:"app-wrapper",children:[Object(P.jsx)(E,{}),Object(P.jsx)(B,{}),Object(P.jsx)("div",{className:"app-wrapper-content",children:Object(P.jsx)(he,{})})]})})},we=a(27),Pe={dialogs:[{id:Object(Y.a)(),name:"Dimych",img:"https://freesvg.org/img/Cartoon-Man-Avatar-2.png"},{id:Object(Y.a)(),name:"Aleks",img:"https://freesvg.org/img/Cartoon-Man-Avatar-2.png"},{id:Object(Y.a)(),name:"Victor",img:"https://freesvg.org/img/Cartoon-Man-Avatar-2.png"},{id:Object(Y.a)(),name:"Sveta",img:"https://freesvg.org/img/Cartoon-Woman-Avatar-2.png"},{id:Object(Y.a)(),name:"Nikita",img:"https://freesvg.org/img/Cartoon-Man-Avatar-2.png"}],messages:[{id:Object(Y.a)(),message:"Hi"},{id:Object(Y.a)(),message:"How are you?"},{id:Object(Y.a)(),message:"Yo"},{id:Object(Y.a)(),message:"Yoo"},{id:Object(Y.a)(),message:"Yoo"}]},Ee=a(45),Ce=Object(we.b)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return Object(A.a)(Object(A.a)({},e),{},{posts:[{id:Object(Y.a)(),message:e.newPostText,likesCount:0}].concat(Object(y.a)(e.posts)),newPostText:""});case k:return Object(A.a)(Object(A.a)({},e),{},{newPostText:t.newMessage});case S:return Object(A.a)(Object(A.a)({},e),{},{profile:t.profile});case L:return Object(A.a)(Object(A.a)({},e),t.payload);default:return e}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe;return e},sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e},userPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(A.a)(Object(A.a)({},e),{},{items:e.items.map((function(e){return e.id===t.id?Object(A.a)(Object(A.a)({},e),{},{followed:!e.followed}):e}))});case"SET-USERS":return Object(A.a)(Object(A.a)({},e),{},{items:t.users});case"SET-CURRENT-PAGE":case"SET-TOTAL-USERS":case"SET-LOAD-USER":return Object(A.a)(Object(A.a)({},e),t.payload);case"SET-FOLLOW-PROGRESS":return Object(A.a)(Object(A.a)({},e),{},{followProgress:t.payload.isProgress?[].concat(Object(y.a)(e.followProgress),[t.payload.userId]):e.followProgress.filter((function(e){return e!==t.payload.userId}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET-AUTH-DATA":return Object(A.a)(Object(A.a)({},e),{},{data:t.payload});case"GET-PHOTO":return Object(A.a)(Object(A.a)({},e),{},{photo:t.payload.photo});default:return e}}}),Ne=Object(we.c)(Ce,Object(we.a)(Ee.a));window.store=Ne,c.a.render(Object(P.jsxs)(l.a,{store:Ne,children:[" ",Object(P.jsx)(xe,{})]}),document.getElementById("root"))},8:function(e,t,a){e.exports={nav:"Navigator_nav__1PV7Q",item:"Navigator_item__3qBrd",active:"Navigator_active__3A3hv"}}},[[77,1,2]]]);
//# sourceMappingURL=main.f47ad29d.chunk.js.map