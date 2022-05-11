"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[903],{63005:function(e,r,t){t.d(r,{d2:function(){return n},WD:function(){return a},Wx:function(){return s}});var n={};t.r(n),t.d(n,{getAllWithAbstract:function(){return v},getByCategoryWithAbstract:function(){return j},getById:function(){return b}});var a={};t.r(a),t.d(a,{getAll:function(){return S},getById:function(){return A}});var s={};t.r(s),t.d(s,{get:function(){return P}});var c=t(15861),u=t(87757),i=t.n(u),o=t(74569),l=t.n(o);function d(e){return"/server".concat(e)}function p(e){return d("/article".concat(e))}var f=p("/getAllWithAbstract"),h=p("/getById"),m=p("/getByCategoryWithAbstract"),x=t(50419);function v(){return g.apply(this,arguments)}function g(){return(g=(0,c.Z)(i().mark((function e(){var r,t,n,a,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l().get(f);case 3:if(r=e.sent,t=r.data,n=t.isSuccessful,a=t.message,s=t.data,!n){e.next=12;break}return e.abrupt("return",s);case 12:return x.ZP.warning(a),e.abrupt("return",null);case 14:e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(0),x.ZP.error("\u7f51\u7edc\u5f02\u5e38"),console.log(e.t0),e.abrupt("return",null);case 21:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}function b(e){return y.apply(this,arguments)}function y(){return(y=(0,c.Z)(i().mark((function e(r){var t,n,a,s,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l().get(h,{params:{json:JSON.stringify({id:r})}});case 3:if(t=e.sent,n=t.data,a=n.isSuccessful,s=n.message,c=n.data,!a){e.next=12;break}return e.abrupt("return",c);case 12:return x.ZP.warning(s),e.abrupt("return",null);case 14:e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(0),x.ZP.error("\u7f51\u7edc\u5f02\u5e38"),console.log(e.t0),e.abrupt("return",null);case 21:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}function j(e){return Z.apply(this,arguments)}function Z(){return(Z=(0,c.Z)(i().mark((function e(r){var t,n,a,s,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l().get(m,{params:{json:JSON.stringify({category:r})}});case 3:if(t=e.sent,n=t.data,a=n.isSuccessful,s=n.message,c=n.data,!a){e.next=12;break}return e.abrupt("return",c);case 12:return x.ZP.warning(s),e.abrupt("return",null);case 14:e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(0),x.ZP.error("\u7f51\u7edc\u5f02\u5e38"),console.log(e.t0),e.abrupt("return",null);case 21:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}function _(e){return d("/category".concat(e))}var N=_("/getAll"),k=_("/getById");function S(){return w.apply(this,arguments)}function w(){return(w=(0,c.Z)(i().mark((function e(){var r,t,n,a,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l().get(N);case 3:if(r=e.sent,t=r.data,n=t.isSuccessful,a=t.message,s=t.data,!n){e.next=12;break}return e.abrupt("return",s);case 12:return x.ZP.warning(a),e.abrupt("return",null);case 14:e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(0),x.ZP.error("\u7f51\u7edc\u5f02\u5e38"),console.log(e.t0),e.abrupt("return",null);case 21:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}function A(e){return D.apply(this,arguments)}function D(){return(D=(0,c.Z)(i().mark((function e(r){var t,n,a,s,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l().get(k,{params:{json:JSON.stringify({id:r})}});case 3:if(t=e.sent,n=t.data,a=n.isSuccessful,s=n.message,c=n.data,!a){e.next=12;break}return e.abrupt("return",c);case 12:return x.ZP.warning(s),e.abrupt("return",null);case 14:e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(0),x.ZP.error("\u7f51\u7edc\u5f02\u5e38"),console.log(e.t0),e.abrupt("return",null);case 21:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}var I=d("/option".concat("/getAbout"));function P(){return B.apply(this,arguments)}function B(){return(B=(0,c.Z)(i().mark((function e(){var r,t,n,a,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l().get(I);case 3:if(r=e.sent,t=r.data,n=t.isSuccessful,a=t.message,s=t.data,!n){e.next=12;break}return e.abrupt("return",s);case 12:return x.ZP.warning(a),e.abrupt("return",null);case 14:e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(0),x.ZP.error("\u7f51\u7edc\u5f02\u5e38"),console.log(e.t0),e.abrupt("return",null);case 21:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}},56310:function(e,r,t){t.r(r),t.d(r,{default:function(){return B}});var n=t(15861),a=t(29439),s=t(87757),c=t.n(s),u=t(72791),i={Frame:"Style_Frame__mMDDA",icon:"Style_icon__IjwGl",sidebar:"Style_sidebar__0XrSD",main:"Style_main__Xch62",header:"Style_header__KlJha",headerInner:"Style_headerInner__xrwoH",avatar:"Style_avatar__jN+07",menu:"Style_menu__ldHSh",sidebarInner:"Style_sidebarInner__bRz2v",item:"Style_item__EAzIn",content:"Style_content__7mSjk",footer:"Style_footer__-v9bu",hitokoto:"Style_hitokoto__5qtJH"},o=t(25671),l=t(65507),d=t.p+"static/media/avatar.460f23071c2ddccada47.png",p=t(91523),f=t(85909),h=t(30863),m=t(11890),x=t(1194),v=t(57768),g=t(14541),b=t(80184),y=o.Z.Sider,j=o.Z.Footer,Z=o.Z.Content,_=o.Z.Header,N=l.Z.Item,k=l.Z.SubMenu;function S(e){var r=e.children,t=e.hitokoto,n=e.year,a=e.categoryList;return(0,b.jsxs)(o.Z,{className:i.Frame,children:[(0,b.jsx)(y,{theme:"light",className:i.sidebar,children:(0,b.jsxs)("div",{className:i.sidebarInner,children:[(0,b.jsx)("img",{src:d,className:i.avatar,alt:"avatar"}),(0,b.jsxs)(l.Z,{className:i.menu,mode:"inline",selectable:!1,children:[(0,b.jsx)(N,{className:i.item,children:(0,b.jsxs)(p.rU,{to:f.yt[f.DV.INDEX],children:[(0,b.jsx)(m.Z,{className:i.icon}),"\u9996\u9875"]})}),(0,b.jsx)(k,{title:(0,b.jsxs)("span",{children:[(0,b.jsx)(x.Z,{className:i.icon}),"\u5206\u7c7b"]}),className:i.item,children:a.map((function(e){var r=e.id,t=e.name;return(0,b.jsx)(N,{children:(0,b.jsxs)(p.rU,{to:"".concat(f.yt[f.DV.CATEGORY],"?").concat(h.encode({id:r})),children:[(0,b.jsx)(v.Z,{className:i.icon}),t]})},r)}))}),(0,b.jsx)(N,{className:i.item,children:(0,b.jsxs)(p.rU,{to:f.yt[f.DV.ABOUT],children:[(0,b.jsx)(g.Z,{className:i.icon}),"\u5173\u4e8e"]})})]})]})}),(0,b.jsxs)(o.Z,{className:i.main,children:[(0,b.jsx)(_,{className:i.header,children:(0,b.jsxs)("div",{className:i.headerInner,children:[(0,b.jsx)("img",{src:d,className:i.avatar,alt:"avatar"}),(0,b.jsxs)(l.Z,{className:i.menu,mode:"horizontal",selectable:!1,theme:"dark",children:[(0,b.jsx)(N,{className:i.item,children:(0,b.jsxs)(p.rU,{to:f.yt[f.DV.INDEX],children:[(0,b.jsx)(m.Z,{className:i.icon}),"\u9996\u9875"]})}),(0,b.jsx)(k,{title:(0,b.jsxs)("span",{children:[(0,b.jsx)(x.Z,{className:i.icon}),"\u5206\u7c7b"]}),className:i.item,children:a.map((function(e){var r=e.id,t=e.name;return(0,b.jsx)(N,{children:(0,b.jsxs)(p.rU,{to:"".concat(f.yt[f.DV.CATEGORY],"?").concat(h.encode({id:r})),children:[(0,b.jsx)(v.Z,{className:i.icon}),t]})},r)}))}),(0,b.jsx)(N,{className:i.item,children:(0,b.jsxs)(p.rU,{to:f.yt[f.DV.ABOUT],children:[(0,b.jsx)(g.Z,{className:i.icon}),"\u5173\u4e8e"]})})]})]})}),(0,b.jsx)(Z,{className:i.content,children:r}),(0,b.jsxs)(j,{className:i.footer,children:[(0,b.jsxs)("div",{className:i.info,children:[n," - Designed & Created by Soulike"]}),(0,b.jsx)("div",{className:i.hitokoto,children:t})]})]})]})}var w=u.memo(S),A=t(74569),D=t.n(A),I=t(63005);function P(e){var r=(0,u.useState)("\u8fd9\u91cc\u5e94\u8be5\u6709\u4e00\u53e5\u8bdd"),t=(0,a.Z)(r,2),s=t[0],i=t[1],o=(0,u.useState)(1970),l=(0,a.Z)(o,2),d=l[0],p=l[1],f=(0,u.useState)([]),h=(0,a.Z)(f,2),m=h[0],x=h[1];(0,u.useEffect)((function(){var e=new Date;p(e.getFullYear())}),[]),(0,u.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D().get("https://v1.hitokoto.cn/",{params:{c:"a",encode:"text",_t:Date.now()}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().then((function(e){return i(e)}))}),[]),(0,u.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.WD.getAll();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().then((function(e){null!==e&&x(e)}))}),[]);var v=e.children;return(0,b.jsx)(w,{hitokoto:s,year:d,categoryList:m,children:v})}var B=u.memo(P)}}]);
//# sourceMappingURL=903.35fc4eb9.chunk.js.map