(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{iSem:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news/[news]",function(){return t("yP8y")}])},yP8y:function(e,n,t){"use strict";t.r(n);var s=t("o0o1"),a=t.n(s),r=t("HaE+"),o=t("q1tI"),c=t.n(o),i=t("t30L"),l=t("+m56"),u=t.n(l),d=t("obyI"),m=t("GyP+"),w=c.a.createElement,p=function(e){var n=e.post||{},t=n.title,s=n.content,a=n._embedded;return w("div",{className:"news-detail"},w("div",{className:"container"},w("div",{className:"news-tag"},Object(m.c)("#News")),w("div",{className:"news-image"},w("img",{src:Object(m.d)(a,"image")})),w("div",{className:"blue-title",dangerouslySetInnerHTML:{__html:(t||{}).rendered}}),w("div",{className:"news-content",dangerouslySetInnerHTML:{__html:(s||{}).rendered}})))},b=t("wx14"),g=t("OS56"),v=t.n(g),f=t("YFqc"),h=t.n(f),N=c.a.createElement,S=function(e){var n=e.data,t=(e.slug,{dots:!1,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:1,rows:2,nextArrow:N(m.a,null),prevArrow:N(m.b,null),responsive:[{breakpoint:1199,settings:{slidesToShow:3,slidesToScroll:1,rows:2}},{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:2,rows:2}},{breakpoint:575,settings:{slidesToShow:1,slidesToScroll:1,rows:2}}]});return N("div",{className:"newsRelated"},N("div",{className:"blue-title"},Object(m.c)("News Related")),N(v.a,Object(b.a)({},t,{className:"two-row-slider"}),n.map((function(e,n){return N(h.a,{key:n,href:"/news/[news]",as:Object(d.c)("/news/".concat(e.slug))},N("div",{className:"slider-image-back","data-aos":"flip-up",style:{backgroundImage:"url(".concat(Object(m.d)(e._embedded,"image"),"})")}},N("h2",{dangerouslySetInnerHTML:{__html:e.title.rendered}})))}))))},_=c.a.createElement,y=function(e){var n=e.mainMenu,t=e.topMenu,s=e.post,a=e.data;return _(i.a,{mainMenu:n,topMenu:t},_("div",{className:"page"},_(p,{post:s}),_(S,{data:a,slug:"news"})))};y.getInitialProps=function(){var e=Object(r.a)(a.a.mark((function e(n){var t,s,r,o,c,i,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new u.a({endpoint:Object(d.a)(n).apiUrl}),s=n.query.news,e.next=4,Object(d.b)("".concat(Object(d.a)(n).apiUrl,"/menus/v1/menus/nav-menu"));case 4:return r=e.sent,e.next=7,Object(d.b)("".concat(Object(d.a)(n).apiUrl,"/menus/v1/menus/nav-menu-top"));case 7:return o=e.sent,e.next=10,t.categories().slug("news").embed().then((function(e){return e[0]}));case 10:return c=e.sent,e.next=13,t.posts().categories((c||{}).id).embed();case 13:return i=e.sent,e.next=16,t.posts().slug("".concat(s)).embed().then((function(e){return e[0]}));case 16:return l=e.sent,e.abrupt("return",{mainMenu:r,topMenu:o,post:l,data:i});case 18:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();n.default=y}},[["iSem",0,2,1,3,4,5]]]);