(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"7zp8":function(e,t,n){"use strict";n.r(t);var a=n("o0o1"),r=n.n(a),s=n("HaE+"),i=n("q1tI"),c=n.n(i),o=n("+m56"),d=n.n(o),u=n("t30L"),l=n("obyI"),b=n("tdC5"),m=c.a.createElement,p=function(e){var t=e.mainMenu,n=e.topMenu,a=e.data,r=e.childCats;return m(u.a,{mainMenu:t,topMenu:n},m("div",{className:"page"},m(b.a,{brandCats:r,brands:a,page:"brands"})))};p.getInitialProps=function(){var e=Object(s.a)(r.a.mark((function e(t){var n,a,s,i,c,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new d.a({endpoint:Object(l.a)(t).apiUrl}),e.next=3,Object(l.b)("".concat(Object(l.a)(t).apiUrl,"/menus/v1/menus/nav-menu"));case 3:return a=e.sent,e.next=6,Object(l.b)("".concat(Object(l.a)(t).apiUrl,"/menus/v1/menus/nav-menu-top"));case 6:return s=e.sent,e.next=9,n.categories().slug("brands").embed().then((function(e){return e[0]}));case 9:return i=e.sent,e.next=12,n.posts().categories(i.id).embed();case 12:return c=e.sent,e.next=15,n.categories().parent(i.id).embed();case 15:return o=e.sent,e.abrupt("return",{mainMenu:a,topMenu:s,data:c,childCats:o});case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.default=p},heDk:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/brands",function(){return n("7zp8")}])},rxVv:function(e,t,n){"use strict";var a=n("Zjvm"),r=n("q1tI"),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},i=n("6VBw"),c=function(e,t){return r.createElement(i.a,Object(a.a)(Object(a.a)({},e),{},{ref:t,icon:s}))};c.displayName="ArrowRightOutlined";t.a=r.forwardRef(c)},tdC5:function(e,t,n){"use strict";var a=n("wx14"),r=n("q1tI"),s=n.n(r),i=n("OS56"),c=n.n(i),o=n("GyP+"),d=n("YFqc"),u=n.n(d),l=n("rxVv"),b=s.a.createElement;t.a=function(e){var t=e.brandCats,n=e.brands,s=e.page,i=t[0].parent,d=Object(r.useState)(i),m=d[0],p=d[1],v=Object(r.useState)(100),f=v[0],g=v[1],h=function(e,t){p(e),g(t)},w=n.filter((function(e){return e.categories.includes(m)})),O=w.length>4?4:w.length,j=w.length>4?3:w.length,N={dots:!1,infinite:!0,slidesToShow:O,slidesToScroll:1,autoplay:!0,speed:1e3,autoplaySpeed:2e3,nextArrow:b(o.b,null),prevArrow:b(o.c,null),responsive:[{breakpoint:992,settings:{slidesToShow:j,slidesToScroll:2,infinite:!0}},{breakpoint:575,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0}}]};return b("div",{className:"homeBrands","data-aos":"zoom-in","data-aos-duration":"300"},b("div",{className:"gold-title"},Object(o.d)("Brands")),b("div",{className:"sub-title"},Object(o.d)("Our products")),b("div",{className:"catList"},b("div",{className:100===f?"active":"inactive",onClick:function(){return h(i,100)}},Object(o.d)("All Brands")),t.map((function(e,t){var n=e.name,a=e.id;return b("div",{key:t,onClick:function(){return h(a,t)},className:t===f?"active":"inactive"},n)}))),b(c.a,Object(a.a)({},N,{className:s?"brandsList":"brandList"}),w.map((function(e,t){return b("div",{key:t},b("div",{className:"brand-logo"},b("img",{src:e.acf.logo})),b(u.a,{href:"/brands/[slug]",as:"/brands/".concat(e.slug)},b("div",{className:"read-more-detail"},Object(o.d)("Read more")," ",b(l.a,null))),b(u.a,{href:"/brands/[slug]",as:"/brands/".concat(e.slug)},b("div",{className:"brand-image"},b("img",{src:Object(o.e)(e._embedded,"image")}))))}))))}}},[["heDk",0,2,1,3,4]]]);