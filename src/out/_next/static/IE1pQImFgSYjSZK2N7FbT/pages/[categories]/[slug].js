(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0JZS":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[categories]/[slug]",function(){return a("5kp/")}])},"5kp/":function(e,t,a){"use strict";a.r(t);var n=a("o0o1"),r=a.n(n),s=a("HaE+"),o=a("q1tI"),i=a.n(o),c=a("+m56"),d=a.n(c),l=a("t30L"),u=a("obyI"),m=a("8Tp+"),f=a("GyP+"),g=a("OS56"),p=a.n(g),b=i.a.createElement,v=function(e){var t=e.post||{},a=t.title,n=t.content,r=t.acf,s=t._embedded,o=(r||{}).supports,i=((o||{}).desc||"").split("<li>");return b("div",{className:"secondPart"},b("div",{className:"product-cards"},b("div",{className:"blue-title",dangerouslySetInnerHTML:{__html:(o||{}).title}}),b("div",{className:"little-cards"},i.map((function(e,t){return e.includes("<ul")||e.includes("<p>\x3c!-- /wp:list --\x3e</p>")?null:b("div",{key:t,className:"card","data-aos":"fade-down","data-aos-delay":100*t,"data-aos-easing":"ease","data-aos-duration":"2000","data-aos-offset":"300",dangerouslySetInnerHTML:{__html:e}})})))),b("div",{className:"half-back-image-with-text",style:{backgroundImage:"url(".concat(Object(f.e)(s,"image"),")")}},b("div",{className:"overlayText"},b("h2",{dangerouslySetInnerHTML:{__html:(a||{}).rendered}}),b("div",{dangerouslySetInnerHTML:{__html:(n||{}).rendered}}))))};function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,s=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(c){r=!0,s=c}finally{try{n||null==i.return||i.return()}finally{if(r)throw s}}return a}}(e,t)||function(e,t){if(e){if("string"===typeof e)return h(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?h(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var _=i.a.createElement,w=function(e){var t=e.post,a=(t.acf||{}).bg_image;return _("div",{className:"thirdPart",style:{backgroundImage:"url(".concat(a,")")}},Object.entries(t.acf).map((function(e){var t=y(e,2),a=t[0],n=t[1];return a.includes("group")?_("div",{key:a,className:"facts","data-aos":"zoom-in","data-aos-easing":"ease","data-aos-duration":"2000","data-aos-offset":"300"},_("img",{src:n.icon}),_("h2",{dangerouslySetInnerHTML:{__html:n.upper_text}}),_("div",{className:"numbers"},_("h1",{dangerouslySetInnerHTML:{__html:n.number}}),_("h1",{dangerouslySetInnerHTML:{__html:n.number_format}})),_("p",{dangerouslySetInnerHTML:{__html:n.bottom_text}})):null})))},N=a("YFqc"),S=a.n(N),T=i.a.createElement,x=function(e){var t=(e.post.acf||{}).additional,a=function(e,t){return T(i.a.Fragment,null,T("img",{src:"/images/industry".concat(t,".png")}),T("div",{dangerouslySetInnerHTML:{__html:e}}))};return T("div",{className:"Additional"},T("div",{className:"odd","data-aos":"fade-down","data-aos-easing":"ease","data-aos-duration":"2000","data-aos-offset":"300","data-aos-delay":300},t&&a(t.group,1)),T("div",{"data-aos":"fade-down","data-aos-easing":"ease","data-aos-duration":"2000","data-aos-delay":500,"data-aos-offset":"300"},t&&a(t.group_1,2)),T("div",{className:"odd","data-aos":"fade-down","data-aos-easing":"ease","data-aos-delay":700,"data-aos-duration":"2000","data-aos-offset":"300"},t&&a(t.group_2,3)))},j=a("wx14"),I=i.a.createElement,O=function(e){var t=e.brandData,a=e.post,n=e.relPosts,r=e.relations,s=(a||{}).acf||{},o=s.capabilities,c=s.industries,d=s.brands,l="capabilities"===r?o:c,u=t.filter((function(e){return(d||{}).includes(e.id)})),m=n.filter((function(e){return(l||{}).includes(e.id)})),g=u.length>4?4:u.length,b=m.length>4?4:m.length,v=u.length>3?2:u.length,h=m.length>3?2:m.length,y=function(e,t,a,n){var r={dots:!1,arrows:!1,infinite:!0,speed:500,slidesToShow:a,slidesToScroll:1,responsive:[{breakpoint:992,settings:{slidesToShow:n,slidesToScroll:1,infinite:!0}},{breakpoint:575,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0}}]};return 0===a?null:I(i.a.Fragment,null,I("div",{className:"gold-title"},Object(f.d)("".concat(t))),I(p.a,Object(j.a)({},r,{className:"relBrands"}),e.map((function(e,a){return I("div",{key:a},I("p",{dangerouslySetInnerHTML:{__html:e.title.rendered}}),I(S.a,{href:"brands"===t?"/".concat(t,"/").concat(e.slug):"/".concat(t,"/").concat(e.slug,"#section2")},I("div",{className:"relations-image"},I("img",{src:Object(f.e)(e._embedded,"image")}))))}))))};return I("div",{className:"relations"},I("div",{className:"blue-title"},Object(f.d)("Relations")),y(u,"brands",g,v),y(m,r,b,h))},M=i.a.createElement,k=function(e){var t=e.mainMenu,a=e.topMenu,n=e.data,r=e.categories,s=e.post,o=e.brands,i=e.relationsPosts,c=e.relations,d=(s||{}).acf;return M(l.a,{mainMenu:t,topMenu:a},M("div",{className:"page"},M(m.a,{data:n,clas:r}),M("div",{id:"section2"},M(v,{post:s})),(d||{}).bg_image&&M(w,{post:s}),(d||{}).additional&&M(x,{post:s}),M(O,{brandData:o,post:s,relPosts:i,relations:c})))};k.getInitialProps=function(){var e=Object(s.a)(r.a.mark((function e(t){var a,n,s,o,i,c,l,m,f,g,p,b,v;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new d.a({endpoint:Object(u.a)(t).apiUrl}),n=t.query.categories,s=t.query.slug,o="industries"===n?"capabilities":"industries",e.next=6,Object(u.b)("".concat(Object(u.a)(t).apiUrl,"/menus/v1/menus/nav-menu"));case 6:return i=e.sent,e.next=9,Object(u.b)("".concat(Object(u.a)(t).apiUrl,"/menus/v1/menus/nav-menu-top"));case 9:return c=e.sent,e.next=12,a.categories().slug("".concat(n)).embed().then((function(e){return e[0]}));case 12:return l=e.sent,e.next=15,a.posts().categories((l||{}).id).embed();case 15:return m=e.sent,e.next=18,a.posts().slug("".concat(s)).embed().then((function(e){return e[0]}));case 18:return f=e.sent,e.next=21,a.categories().slug("brands").embed().then((function(e){return e[0]}));case 21:return g=e.sent,e.next=24,a.posts().categories(g.id).perPage(100).embed();case 24:return p=e.sent,e.next=27,a.categories().slug("".concat(o)).embed().then((function(e){return e[0]}));case 27:return b=e.sent,e.next=30,a.posts().categories((b||{}).id).embed();case 30:return v=e.sent,e.abrupt("return",{mainMenu:i,topMenu:c,data:m,categories:n,post:f,brands:p,relationsPosts:v,relations:o});case 32:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.default=k},"8Tp+":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),s=a("GyP+"),o=a("YFqc"),i=a.n(o),c=a("rxVv"),d=r.a.createElement;t.a=function(e){var t=e.clas,a=e.data;return d("div",{className:"firstPart"},d("div",{className:"sub-title"},Object(s.d)("".concat(t))),d("div",{className:t},a.slice(0).reverse().map((function(e,a){var n=e||{},r=n.title,o=n.excerpt,l=n.slug,u=n._embedded;return d("div",{key:a,"data-aos":"fade-down","data-aos-easing":"ease","data-aos-delay":300*a,"data-aos-duration":"2000","data-aos-offset":"300"},d("h2",{className:"continue-title",dangerouslySetInnerHTML:{__html:r.rendered}}),d("div",{className:"continue-text",dangerouslySetInnerHTML:{__html:o.rendered}}),d(i.a,{href:"/".concat("portfolio"===t?"portfolio":"[categories]","/[slug]"),as:"/".concat(t,"/").concat(l,"#section2")},d("div",{className:"read-more-detail",onClick:function(){return s.a[0]="none"}},Object(s.d)("Read more")," ",d(c.a,null))),d(i.a,{href:"/".concat("portfolio"===t?"portfolio":"[categories]","/[slug]"),as:"/".concat(t,"/").concat(l,"#section2")},d("div",{className:"squad-image",onClick:function(){return s.a[0]="none"}},d("img",{src:Object(s.e)(u,"image")}))))}))))}},rxVv:function(e,t,a){"use strict";var n=a("Zjvm"),r=a("q1tI"),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},o=a("6VBw"),i=function(e,t){return r.createElement(o.a,Object(n.a)(Object(n.a)({},e),{},{ref:t,icon:s}))};i.displayName="ArrowRightOutlined";t.a=r.forwardRef(i)}},[["0JZS",0,2,1,3,4]]]);