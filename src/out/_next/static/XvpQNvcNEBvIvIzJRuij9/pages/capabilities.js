(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"8Tp+":function(e,a,t){"use strict";var n=t("q1tI"),c=t.n(n),r=t("GyP+"),s=t("YFqc"),i=t.n(s),u=t("rxVv"),o=t("obyI"),d=c.a.createElement;a.a=function(e){var a=e.clas,t=e.data;return d("div",{className:"firstPart"},d("div",{className:"sub-title"},Object(r.c)("".concat(a))),d("div",{className:a},t.slice(0).reverse().map((function(e,t){var n=e||{},c=n.title,s=n.excerpt,l=n.slug,m=n._embedded;n.id;return d("div",{key:t,"data-aos":"fade-down","data-aos-easing":"ease","data-aos-delay":300*t,"data-aos-duration":"2000","data-aos-offset":"300"},d("h2",{className:"continue-title",dangerouslySetInnerHTML:{__html:c.rendered}}),d("div",{className:"continue-text",dangerouslySetInnerHTML:{__html:s.rendered}}),d(i.a,{href:"/[detail]/[slug]",as:Object(o.c)("/".concat(a,"/").concat(l))},d("div",{className:"read-more-detail"},Object(r.c)("Read more")," ",d(u.a,null))),d(i.a,{href:"/[detail]/[slug]",as:Object(o.c)("/".concat(a,"/").concat(l))},d("div",{className:"squad-image"},d("img",{src:Object(r.d)(m,"image")}))))}))))}},q4wR:function(e,a,t){"use strict";t.r(a);var n=t("o0o1"),c=t.n(n),r=t("HaE+"),s=t("q1tI"),i=t.n(s),u=t("t30L"),o=t("+m56"),d=t.n(o),l=t("obyI"),m=t("8Tp+"),p=i.a.createElement,b=function(e){var a=e.mainMenu,t=e.topMenu,n=e.data;return p(u.a,{mainMenu:a,topMenu:t},p("div",{className:"page"},p(m.a,{data:n,clas:"capabilities"})))};b.getInitialProps=function(){var e=Object(r.a)(c.a.mark((function e(a){var t,n,r,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new d.a({endpoint:Object(l.a)(a).apiUrl}),e.next=3,Object(l.b)("".concat(Object(l.a)(a).apiUrl,"/menus/v1/menus/nav-menu"));case 3:return n=e.sent,e.next=6,Object(l.b)("".concat(Object(l.a)(a).apiUrl,"/menus/v1/menus/nav-menu-top"));case 6:return r=e.sent,e.next=9,t.categories().slug("capabilities").embed().then((function(e){return e[0]}));case 9:return s=e.sent,e.next=12,t.posts().categories((s||{}).id).perPage(100).embed();case 12:return i=e.sent,e.abrupt("return",{mainMenu:n,topMenu:r,data:i});case 14:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),a.default=b},rxVv:function(e,a,t){"use strict";var n=t("VTBJ"),c=t("q1tI"),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},s=t("6VBw"),i=function(e,a){return c.createElement(s.a,Object(n.a)(Object(n.a)({},e),{},{ref:a,icon:r}))};i.displayName="ArrowRightOutlined";a.a=c.forwardRef(i)},uCd6:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/capabilities",function(){return t("q4wR")}])}},[["uCd6",0,2,1,3,4]]]);