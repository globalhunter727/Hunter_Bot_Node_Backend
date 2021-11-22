(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{193:function(e,t,a){},194:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(46),i=a.n(n),r=a(57),s=a(14),o=a(12),d=a(53),l=a.n(d),j=a(1);function b(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-trueGray-900 opacity-75 flex flex-col items-center justify-center",children:[Object(j.jsx)("div",{className:"loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"}),Object(j.jsx)("h2",{className:"text-center text-white text-xl font-semibold",children:"Loading..."})]})})}var h=a(277),u=a(276),x=a(278),O=a(89),p=a(266),m=a(279),g=a(267);function f(e){var t=e.logo,a=e.userName,c=e.access,n=Object(s.f)();return Object(j.jsx)(u.a,{sx:{flexGrow:1},children:Object(j.jsx)(h.a,{position:"static",children:Object(j.jsxs)(x.a,{children:[Object(j.jsx)(m.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2}}),Object(j.jsx)(O.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Discord Bot"}),"unauthorized"==c?Object(j.jsx)(p.a,{color:"inherit",onClick:function(){return window.location.href="/api/auth/discord"},children:"Login"}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("span",{style:{fontSize:18},children:a}),Object(j.jsx)(m.a,{size:"large",edge:"end","aria-label":"account of current user","aria-haspopup":"true",color:"inherit",onClick:function(){return n.push("/dashboard")},children:Object(j.jsx)(g.a,{alt:"Logo",src:t})})]})]})})})}var v=a(28),w=a.n(v);function C(){return w.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",w.a.get("/api/auth",{withCredentials:!0,credentials:"include"})}function y(e){return w.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",w.a.get("/api/role?guildId=".concat(e),{withCredentials:!0,credentials:"include"})}var S=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)(!0),r=Object(o.a)(i,2),s=r[0],d=r[1],h=Object(c.useState)(""),u=Object(o.a)(h,2),x=u[0],O=u[1],p=Object(c.useState)(""),m=Object(o.a)(p,2),g=m[0],v=m[1];return Object(c.useEffect)((function(){C().then((function(e){n(e.data.msg),"authorized"===a&&(O(e.data.user.discordTag),v("https://cdn.discordapp.com/avatars/".concat(e.data.user.discordId,"/").concat(e.data.user.avatar,".png?size=128"))),setTimeout((function(){d(!1)}),1e3)})).catch((function(e){console.log(e),d(!1),n("unauthorized")}))}),[a]),Object(j.jsx)(j.Fragment,{children:!0===s?Object(j.jsx)(b,{}):Object(j.jsx)("div",{className:"leading-normal tracking-normal text-white h-full",style:{width:"100%",minHeight:"100vh"},children:Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{logo:g,userName:x,access:a}),Object(j.jsx)("div",{className:"pt-36",children:Object(j.jsx)("div",{className:"container mx-auto flex flex-wrap flex-col md:flex-row",children:Object(j.jsxs)("div",{className:"flex flex-col w-full  items-center text-center md:text-left",children:[Object(j.jsx)("h1",{className:"w-full my-5 text-5xl font-bold leading-tight text-center text-black",children:"Discord Bot"}),Object(j.jsxs)("p",{className:"leading-normal text-2xl mb-8",children:[l.a.botName," is the best customizable bot for discord with a dashboard."]}),Object(j.jsx)("div",{className:"flex",children:Object(j.jsx)("button",{className:"flex items-center px-7 py-3 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-indigo-800 focus:outline-none focus:bg-indigo-800",children:Object(j.jsx)("span",{className:"mx-1",children:"Invite Bot"})})})]})})})]})})})},z=a(287),I=a(280),N=a(283),k=a(282),T=a(281),E=a(284),R=a(250),B=a(251);function F(e){var t=e.guild,a=e.permission;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(I.a,{sx:{width:300,m:2},children:[Object(j.jsxs)(T.a,{children:[null!==t.icon?Object(j.jsx)(k.a,{component:"img",height:"140",image:"https://cdn.discordapp.com/icons/".concat(t.id,"/").concat(t.icon,".png"),alt:"green iguana"}):Object(j.jsx)(k.a,{component:"img",height:"140",image:"/assets/image/dashboard/default-server.png",alt:"green iguana"}),Object(j.jsxs)(N.a,{children:[Object(j.jsx)(O.a,{gutterBottom:!0,variant:"h6",component:"div",children:t.name.substr(0,20)+(t.name.length>20?"...":"")}),Object(j.jsx)(O.a,{variant:"body2",color:"text.secondary",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"})]})]}),Object(j.jsx)(E.a,{children:!0===a?Object(j.jsx)(p.a,{variant:"contained",color:"primary",endIcon:Object(j.jsx)(R.a,{}),onClick:function(){return window.location.href="".concat(l.a.site_url,"/").concat(t.id,"/role")},children:" Manage "}):Object(j.jsx)(p.a,{variant:"contained",color:"primary",endIcon:Object(j.jsx)(B.a,{}),onClick:function(){return window.location.href="https://discord.com/api/oauth2/authorize?client_id=".concat(l.a.clientId,"&permissions=8&redirect_uri=").concat(encodeURIComponent(l.a.redirect_uri),"&response_type=code&scope=bot")},children:" Invite "})})]})})}var W=a(55),L=a(4),D=a(31),M=a(268),G=a(285),_=a(254),A=a(123),U=a.n(A),H=a(126),P=a.n(H),$=a(127),J=a.n($),q=a(263),Y=a(255),K=a(256),Q=a(128),V=a.n(Q),X=a(129),Z=a.n(X),ee=a(286),te=a(261),ae=Object(L.a)("div")((function(e){var t=e.theme;return Object(W.a)(Object(W.a)({display:"flex",alignItems:"center",padding:t.spacing(0,1)},t.mixins.toolbar),{},{justifyContent:"flex-end"})}));function ce(e){var t=e.logo,a=e.userName,n=e.access,i=Object(s.f)(),r=Object(D.a)(),d=c.useState(!1),l=Object(o.a)(d,2),b=l[0],f=l[1],v=c.useState(null),C=Object(o.a)(v,2),y=C[0],S=C[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(u.a,{sx:{flexGrow:1},children:[Object(j.jsx)(h.a,{position:"static",children:Object(j.jsxs)(x.a,{children:[Object(j.jsx)(m.a,{size:"large",edge:"start",color:"inherit",onClick:function(){f(!0)},"aria-label":"menu",sx:{mr:2},children:Object(j.jsx)(U.a,{})}),Object(j.jsx)(O.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Server Management"}),"unauthorized"==n?Object(j.jsx)(p.a,{color:"inherit",onClick:function(){return window.location.href="/api/auth/discord"},children:"Login"}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("span",{style:{fontSize:18},children:a}),Object(j.jsx)(m.a,{size:"large",edge:"end","aria-label":"account of current user","aria-haspopup":"true",color:"inherit",onClick:function(e){S(e.currentTarget)},children:Object(j.jsx)(g.a,{alt:"Logo",src:t})})]}),Object(j.jsx)("div",{children:Object(j.jsx)(te.a,{id:"menu-appbar",anchorEl:y,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},style:{marginTop:40},open:Boolean(y),onClose:function(){S(null)},children:Object(j.jsx)(ee.a,{onClick:function(){(w.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",w.a.get("/api/auth/logout",{withCredentials:!0,credentials:"include"})).then((function(e){i.push("/")}))},children:"Logout"})})})]})}),Object(j.jsxs)(M.a,{sx:{width:240,flexShrink:0,"& .MuiDrawer-paper":{width:240,boxSizing:"border-box"}},variant:"persistent",anchor:"left",open:b,children:[Object(j.jsx)(ae,{children:Object(j.jsx)(m.a,{onClick:function(){f(!1)},children:"ltr"===r.direction?Object(j.jsx)(P.a,{}):Object(j.jsx)(J.a,{})})}),Object(j.jsx)(_.a,{}),Object(j.jsxs)(G.a,{children:[Object(j.jsxs)(q.a,{button:!0,children:[Object(j.jsx)(Y.a,{children:Object(j.jsx)(V.a,{})}),Object(j.jsx)(K.a,{primary:"Roles"})]}),Object(j.jsxs)(q.a,{button:!0,children:[Object(j.jsx)(Y.a,{children:Object(j.jsx)(Z.a,{})}),Object(j.jsx)(K.a,{primary:"Messages"})]})]})]})]})})}function ne(){var e=Object(c.useState)(!0),t=Object(o.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)([]),r=Object(o.a)(i,2),s=r[0],d=r[1],l=Object(c.useState)([]),h=Object(o.a)(l,2),x=h[0],O=h[1],p=Object(c.useState)(""),m=Object(o.a)(p,2),g=m[0],f=m[1],v=Object(c.useState)(""),y=Object(o.a)(v,2),S=y[0],I=y[1],N=Object(c.useState)(""),k=Object(o.a)(N,2),T=k[0],E=k[1];return Object(c.useEffect)((function(){C().then((function(e){E(e.data.msg),"authorized"===T&&(f(e.data.user.discordTag),I("https://cdn.discordapp.com/avatars/".concat(e.data.user.discordId,"/").concat(e.data.user.avatar,".png?size=128")))}))}),[T]),Object(c.useEffect)((function(){"authorized"!=T&&(w.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",w.a.get("/api/guild",{withCredentials:!0,credentials:"include"})).then((function(e){if("unauthorized"===e.data.msg)return window.location.href="/api/auth/discord/";d(e.data.permissionNoGuilds),O(e.data.permissionHasGuilds),setTimeout((function(){n(!1)}),2e3)}))}),[]),Object(j.jsx)(j.Fragment,{children:!0===a?Object(j.jsx)(b,{}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(ce,{logo:S,userName:g,access:T}),Object(j.jsx)(z.a,{maxWidth:"lg",children:Object(j.jsxs)(u.a,{sx:{display:"flex",flexWrap:"wrap",alignItems:"stretch",justifyContent:"center",p:1,m:1,height:100},children:[x.map((function(e,t){return Object(j.jsx)(F,{guild:e,permission:!0},t)})),s.map((function(e,t){return Object(j.jsx)(F,{guild:e,permission:!1},t)}))]})})]})})}var ie=a(6),re=a(288),se=a(264),oe=a(262),de=a(289),le=a(258),je=a(271),be=a(275),he=a(274),ue=a(270),xe=a(272),Oe=a(273),pe=a(269),me=a(80),ge=a.n(me),fe=a(81),ve=a.n(fe),we=a(130),Ce=a.n(we),ye=a(131),Se=a.n(ye),ze=a(259),Ie={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",boxShadow:24,p:4};var Ne=Object(le.a)({formControl:{marginBottom:"20px"},card:{minWidth:"200px",maxWidth:"350px",display:"flex",justifyContent:"center"},noRole:{fontSize:"30px"}})((function(e){var t,a=Object(c.useState)(!0),n=Object(o.a)(a,2),i=n[0],r=n[1],d=Object(c.useState)([]),l=Object(o.a)(d,2),h=l[0],x=l[1],g=Object(c.useState)(""),f=Object(o.a)(g,2),v=f[0],S=f[1],I=Object(c.useState)(""),N=Object(o.a)(I,2),k=N[0],T=N[1],E=Object(c.useState)(""),R=Object(o.a)(E,2),B=R[0],F=R[1],L=(e.classes,Object(s.g)().guildId),D=(Object(s.f)(),Object(c.useState)({id:"",guildId:"",price:""})),M=Object(o.a)(D,2),G=M[0],_=M[1],A=Object(c.useState)(!1),U=Object(o.a)(A,2),H=U[0],P=U[1],$=function(){return P(!1)};return Object(c.useEffect)((function(){C().then((function(e){F(e.data.msg),"authorized"===B&&(S(e.data.user.discordTag),T("https://cdn.discordapp.com/avatars/".concat(e.data.user.discordId,"/").concat(e.data.user.avatar,".png?size=128")))}))}),[B]),Object(c.useEffect)((function(){"authorized"!=B&&y(L).then((function(e){x(e.data.roles),setTimeout((function(){r(!1)}),2e3)}))}),[]),Object(j.jsx)(j.Fragment,{children:!0===i?Object(j.jsx)(b,{}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)(ce,{logo:k,userName:v,access:B}),Object(j.jsxs)(z.a,{maxWidth:"lg",children:[Object(j.jsxs)(u.a,{sx:{width:"100%",paddingTop:"50px"},children:[Object(j.jsx)(O.a,{variant:"h4",gutterBottom:!0,component:"div",children:"Roles"}),Object(j.jsx)(O.a,{variant:"h6",gutterBottom:!0,component:"div",children:"Use roles to organize your server members and customize their permissions."})]}),Object(j.jsx)(ue.a,{component:pe.a,children:Object(j.jsxs)(je.a,{sx:{minWidth:650,border:0},"aria-label":"simple table",children:[Object(j.jsx)(xe.a,{children:Object(j.jsxs)(Oe.a,{children:[Object(j.jsx)(he.a,{align:"left",children:"ROLES"}),Object(j.jsx)(he.a,{align:"right",children:"MEMBERS"}),Object(j.jsx)(he.a,{align:"right",children:"PRICE"}),Object(j.jsx)(he.a,{align:"right",children:"ACTIONS"})]})}),Object(j.jsx)(be.a,{children:h.map((function(e){return Object(j.jsxs)(Oe.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(j.jsxs)(he.a,{component:"th",scope:"row",align:"left",children:[Object(j.jsx)(ge.a,{sx:{color:"#f03434"}}),Object(j.jsx)("span",{className:"ml-3",children:e.name})]}),Object(j.jsxs)(he.a,{align:"right",children:[" 1 ",Object(j.jsx)(ve.a,{})," "]}),Object(j.jsxs)(he.a,{align:"right",children:[" ",null==e.price?"NOT ADDED":"$ "+e.price," "]}),Object(j.jsxs)(he.a,{align:"right",children:[Object(j.jsx)(m.a,{size:"normal",edge:"end","aria-label":"Edit Role","aria-haspopup":"true",color:"inherit",onClick:function(){return function(e){console.log(e),_({id:e.id,guildId:L,price:e.price}),P(!0)}(e)},children:Object(j.jsx)(Ce.a,{})}),Object(j.jsx)(m.a,{size:"normal",edge:"end","aria-label":"Edit Role","aria-haspopup":"true",color:"inherit",sx:{marginLeft:"20px"},children:Object(j.jsx)(Se.a,{})})]})]},e.id)}))})]})})]})]}),Object(j.jsx)("div",{children:Object(j.jsx)(ze.a,{open:H,onClose:$,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(j.jsxs)(u.a,{sx:Ie,children:[Object(j.jsx)(O.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Role"}),Object(j.jsxs)(re.a,{fullWidth:!0,sx:{mt:3,mb:3},variant:"standard",children:[Object(j.jsx)(se.a,{htmlFor:"standard-adornment-amount",children:"Please enter the price of ths role."}),Object(j.jsx)(oe.a,{id:"standard-adornment-amount",value:G.price,onChange:(t="price",function(e){_(Object(W.a)(Object(W.a)({},G),{},Object(ie.a)({},t,e.target.value))),console.log(G)}),startAdornment:Object(j.jsx)(de.a,{position:"start",children:"$"})})]}),Object(j.jsx)(p.a,{variant:"contained",sx:{mr:3},onClick:function(){var e;(e=G,w.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",w.a.post("/api/role/modifyRole",{role:e},{withCredentials:!0,credentials:"include"})).then((function(e){x(e.data.roles),P(!1)})).catch((function(e){console.log(e),P(!1)}))},children:"Save"}),Object(j.jsx)(p.a,{variant:"contained",color:"error",onClick:$,children:"Cancel"})]})})})]})})})),ke=a(132),Te=a.n(ke);var Ee=Object(le.a)({formControl:{marginBottom:"20px"},card:{minWidth:"200px",maxWidth:"350px",display:"flex",justifyContent:"center"},noRole:{fontSize:"30px"}})((function(e){var t=Object(c.useState)(!0),a=Object(o.a)(t,2),n=a[0],i=a[1],r=Object(c.useState)([]),d=Object(o.a)(r,2),l=d[0],h=d[1],x=(e.classes,Object(c.useState)("")),m=Object(o.a)(x,2),g=m[0],v=m[1],S=Object(c.useState)(""),I=Object(o.a)(S,2),N=I[0],k=I[1],T=Object(c.useState)(""),E=Object(o.a)(T,2),R=E[0],B=E[1],F=Object(s.g)(),W=F.guildId,L=F.userId,D=function(e){(function(e,t,a){return w.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",w.a.post("/api/role/buyrole",{guildId:e,userId:t,roleId:a},{withCredentials:!0,credentials:"include"})})(W,L,e.id).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))};return Object(c.useEffect)((function(){C().then((function(e){B(e.data.msg),"authorized"===R&&(v(e.data.user.discordTag),k("https://cdn.discordapp.com/avatars/".concat(e.data.user.discordId,"/").concat(e.data.user.avatar,".png?size=128")))}))}),[R]),Object(c.useEffect)((function(){"authorized"!=R&&y(W).then((function(e){h(e.data.roles),setTimeout((function(){i(!1)}),2e3)}))}),[]),Object(j.jsx)(j.Fragment,{children:!0===n?Object(j.jsx)(b,{}):Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{logo:N,userName:g,access:R}),Object(j.jsxs)(z.a,{maxWidth:"lg",children:[Object(j.jsxs)(u.a,{sx:{width:"100%",paddingTop:"50px"},children:[Object(j.jsx)(O.a,{variant:"h4",gutterBottom:!0,component:"div",children:"Roles"}),Object(j.jsx)(O.a,{variant:"h6",gutterBottom:!0,component:"div",children:"Use roles to organize your server members and customize their permissions."})]}),Object(j.jsx)(ue.a,{component:pe.a,children:Object(j.jsxs)(je.a,{sx:{minWidth:650,border:0},"aria-label":"simple table",children:[Object(j.jsx)(xe.a,{children:Object(j.jsxs)(Oe.a,{children:[Object(j.jsx)(he.a,{align:"left",children:"ROLES"}),Object(j.jsx)(he.a,{align:"right",children:"MEMBERS"}),Object(j.jsx)(he.a,{align:"right",children:"PRICE"}),Object(j.jsx)(he.a,{align:"right",children:"ACTIONS"})]})}),Object(j.jsx)(be.a,{children:l.map((function(e){return Object(j.jsxs)(Oe.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(j.jsxs)(he.a,{component:"th",scope:"row",align:"left",children:[Object(j.jsx)(ge.a,{sx:{color:"#f03434"}}),Object(j.jsx)("span",{className:"ml-3",children:e.name})]}),Object(j.jsxs)(he.a,{align:"right",children:[" 1 ",Object(j.jsx)(ve.a,{})," "]}),Object(j.jsxs)(he.a,{align:"right",children:[" ",null==e.price?"NOT ADDED":"$ "+e.price," "]}),Object(j.jsx)(he.a,{align:"right",children:Object(j.jsx)(p.a,{variant:"contained",endIcon:Object(j.jsx)(Te.a,{}),onClick:function(){return D(e)},children:"BUY"})})]},e.id)}))})]})})]})]})})})}));function Re(){return Object(j.jsx)(r.a,{children:Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{exact:!0,path:"/",children:Object(j.jsx)(S,{})}),Object(j.jsx)(s.a,{path:"/dashboard",children:Object(j.jsx)(ne,{})}),Object(j.jsx)(s.a,{path:"/:guildId/role",children:Object(j.jsx)(Ne,{})}),Object(j.jsx)(s.a,{path:"/buyrole/guilds/:guildId/members/:userId",children:Object(j.jsx)(Ee,{})})]})})}var Be=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(Re,{})})};a(193);i.a.render(Object(j.jsx)(Be,{}),document.getElementById("root"))},53:function(e,t){e.exports={botName:"Hunter",clientId:"912210833545773068",site_url:"https://hunter-bot-backend.herokuapp.com",redirect_uri:"http://hunter-bot-backend.herokuapp.com/api/auth/discord/redirect"}}},[[194,1,2]]]);
//# sourceMappingURL=main.8ad8902d.chunk.js.map