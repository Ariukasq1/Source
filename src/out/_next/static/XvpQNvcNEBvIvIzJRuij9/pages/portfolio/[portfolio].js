(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"+BHN":function(e,a,t){"use strict";t.r(a);var n=t("o0o1"),s=t.n(n),r=t("HaE+"),o=t("q1tI"),i=t.n(o),l=t("t30L"),c=t("+m56"),d=t.n(c),u=t("obyI"),m=t("ys3j"),p=t("GyP+"),f=t("BMrR"),g=t("kPKH"),v=i.a.createElement,b=function(e){var a=e.post||{},t=a.title,n=a.content,s=a._embedded;return v(f.a,{className:"portfolio-product"},v(g.a,{xxl:12,xl:12,lg:12,md:24,sm:24,xs:24,"data-aos":"fade-down","data-aos-easing":"ease",className:"half-text"},v("div",{className:"blue-title",dangerouslySetInnerHTML:{__html:(t||{}).rendered}}),v("p",{dangerouslySetInnerHTML:{__html:(n||{}).rendered}})),v(g.a,{xxl:12,xl:12,lg:12,md:24,sm:24,xs:24,className:"half-image"},v("img",{src:Object(p.d)(s,"image")})))},h=t("wx14"),w=t("OS56"),x=t.n(w),N=t("rxVv"),_=i.a.createElement,j=function(e){var a=e.post||{},t=a.title,n=a.content,s=a._embedded;return _(f.a,{className:"project-detail"},_(g.a,{xxl:12,xl:12,lg:12,md:24,sm:24,xs:24,className:"long-half-text","data-aos":"fade-down","data-aos-easing":"ease"},_("div",{className:"blue-title",dangerouslySetInnerHTML:{__html:(t||{}).rendered}}),_("div",{dangerouslySetInnerHTML:{__html:(n||{}).rendered}})),_(g.a,{xxl:12,xl:12,lg:12,md:24,sm:24,xs:24,className:"long-half-image"},_("img",{src:Object(p.d)(s,"image")})))},y=i.a.createElement,O=function(e){var a=e.materials;return y("div",{className:"materials"},y("div",{className:"gold-title"},Object(p.c)("Products")),y("div",{className:"mater"},a.map((function(e,a){return y("div",{key:a,"data-aos":"zoom-in-down","data-aos-delay":150*a,"data-aos-easing":"ease","data-aos-duration":"1000","data-aos-offset":"300"},y("img",{src:Object(p.d)(e._embedded,"image")}),y("p",{dangerouslySetInnerHTML:{__html:e.title.rendered}}))}))))},T=i.a.createElement,S=function(e){var a=e.projects,t=e.post,n=e.materials,s=t||{},r=s._embedded,l=s.title,c=a.length>4?2:1,d=c>1?4:a.length,u=Object(o.useState)(a[0]),m=u[0],f=u[1],g=n.filter((function(e){return m.acf.products.includes(e.id)})),v={dots:!1,infinite:!0,speed:500,slidesToShow:d,slidesToScroll:1,rows:c,nextArrow:T(p.a,null),prevArrow:T(p.b,null),responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1,rows:2}},{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:2,rows:2}},{breakpoint:575,settings:{slidesToShow:1,slidesToScroll:1,rows:2}}]};return T(i.a.Fragment,null,T("div",{className:"section"},T("div",{className:"portfolio-projects",style:{backgroundImage:"url(".concat(Object(p.d)(r,"image"),")")}},T("div",{className:"blue-title"},(l||{}).rendered),T(x.a,Object(h.a)({},v,{className:"two-row-slider"}),a.map((function(e,a){return T("div",{key:a,onClick:function(){return f(e),void window.fullpage_api.moveTo(4,0)}},T("div",{className:"slider-image-back","data-aos":"flip-up",style:{backgroundImage:"url(".concat(Object(p.d)(e._embedded,"image"),"})")}},T("h2",{dangerouslySetInnerHTML:{__html:e.title.rendered}}),T("div",{className:"read-more-projects"},T("h2",null,Object(p.c)("Read more"))," ",T(N.a,null))))}))))),T("div",{className:"section"},T(j,{post:m})),T("div",{className:"section"},T(O,{materials:g})))},I=t("VgBm"),L=i.a.createElement,M=function(e){var a=e.mainMenu,t=e.topMenu,n=e.data,s=e.post,r=e.child_data,o=e.materials;return L(l.a,{mainMenu:a,topMenu:t},L("div",{className:"page"},L(m.a,{children:L("div",{id:"fullpage"},L("div",{className:"section"},L(I.a,{data:n,clas:"portfolio"})),L("div",{className:"section"},L(b,{post:s})),L(S,{projects:r,post:s,materials:o}))})))};M.getInitialProps=function(){var e=Object(r.a)(s.a.mark((function e(a){var t,n,r,o,i,l,c,m,p,f,g,v;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new d.a({endpoint:Object(u.a)(a).apiUrl}),n=a.query.portfolio,e.next=4,Object(u.b)("".concat(Object(u.a)(a).apiUrl,"/menus/v1/menus/nav-menu"));case 4:return r=e.sent,e.next=7,Object(u.b)("".concat(Object(u.a)(a).apiUrl,"/menus/v1/menus/nav-menu-top"));case 7:return o=e.sent,e.next=10,t.categories().slug("portfolio").embed().then((function(e){return e[0]}));case 10:return i=e.sent,e.next=13,t.posts().categories((i||{}).id).perPage(100).embed();case 13:return l=e.sent,e.next=16,t.posts().slug("".concat(n)).embed().then((function(e){return e[0]}));case 16:return c=e.sent,e.next=19,t.categories().parent((i||{}).id).embed();case 19:return m=e.sent,p=m.filter((function(e){return e.slug.includes(n)})),e.next=23,t.posts().categories((p[0]||{}).id).perPage(20).embed();case 23:return f=e.sent,e.next=26,t.categories().slug("materials").embed().then((function(e){return e[0]}));case 26:return g=e.sent,e.next=29,t.posts().categories((g||{}).id).perPage(100).embed();case 29:return v=e.sent,e.abrupt("return",{mainMenu:r,topMenu:o,data:l,post:c,child_data:f,materials:v});case 31:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();a.default=M},VgBm:function(e,a,t){"use strict";var n=t("q1tI"),s=t.n(n),r=t("GyP+"),o=t("YFqc"),i=t.n(o),l=t("rxVv"),c=t("obyI"),d=s.a.createElement;a.a=function(e){var a=e.clas,t=e.data;return d("div",{className:"firstPart"},d("div",{className:"sub-title"},Object(r.c)("".concat(a))),d("div",{className:a},t.slice(0).reverse().map((function(e,a){var t=e||{},n=t.title,s=t.excerpt,o=t.slug,u=t._embedded;t.id;return d("div",{key:a,"data-aos":"fade-down","data-aos-easing":"ease","data-aos-delay":300*a,"data-aos-duration":"2000","data-aos-offset":"300"},d("h2",{className:"continue-title",dangerouslySetInnerHTML:{__html:n.rendered}}),d("div",{className:"continue-text",dangerouslySetInnerHTML:{__html:s.rendered}}),d(i.a,{href:"/portfolio/[portfolio]",as:Object(c.c)("/portfolio/".concat(o))},d("div",{className:"read-more-detail"},Object(r.c)("Read more")," ",d(l.a,null))),d(i.a,{href:"/portfolio/[portfolio]",as:Object(c.c)("/portfolio/".concat(o))},d("div",{className:"squad-image"},d("img",{src:Object(r.d)(u,"image")}))))}))))}},isJp:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio/[portfolio]",function(){return t("+BHN")}])},rxVv:function(e,a,t){"use strict";var n=t("VTBJ"),s=t("q1tI"),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},o=t("6VBw"),i=function(e,a){return s.createElement(o.a,Object(n.a)(Object(n.a)({},e),{},{ref:a,icon:r}))};i.displayName="ArrowRightOutlined";a.a=s.forwardRef(i)},ys3j:function(e,a,t){"use strict";var n=t("q1tI"),s=t.n(n),r=t("wXU7"),o=t.n(r),i=s.a.createElement;a.a=function(e){var a=e.children,t=function(e){var a,t=document.getElementsByClassName("aos-init");for(a=0;a<t.length;a++)"leave"===e?t[a].classList.remove("aos-animate"):t[a].classList.add("aos-animate")},n=Array.from({length:10},(function(e,a){return"section".concat(a+1)}));return i(o.a,{anchors:n,scrollingSpeed:1e3,render:function(){return a},responsiveWidth:992,navigation:!0,navigationPosition:"left",onLeave:function(e,a,n){t("leave")}.bind(void 0),afterLoad:function(e,a,n){t("afterLoad")}.bind(void 0),parallax:!0,scrollOverflow:!0})}}},[["isJp",0,2,7,1,3,4,5,6]]]);