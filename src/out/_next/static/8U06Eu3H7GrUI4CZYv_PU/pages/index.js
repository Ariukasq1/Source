(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{RNiq:function(e,a,t){"use strict";t.r(a);var n=t("o0o1"),c=t.n(n),r=t("HaE+"),s=t("q1tI"),i=t.n(s),l=t("t30L"),o=t("obyI"),d=t("+m56"),u=t.n(d),m=t("wXU7"),v=t.n(m),f=i.a.createElement,b=function(e){var a=e.children,t=function(e){var a,t=document.getElementsByClassName("aos-init");for(a=0;a<t.length;a++)"leave"===e?t[a].classList.remove("aos-animate"):t[a].classList.add("aos-animate")},n=Array.from({length:10},(function(e,a){return"section".concat(a+1)}));return f(v.a,{anchors:n,scrollingSpeed:1e3,render:function(){return a},responsiveWidth:992,navigation:!0,navigationPosition:"left",onLeave:function(e,a,n){t("leave")}.bind(void 0),afterLoad:function(e,a,n){t("afterLoad")}.bind(void 0),parallax:!0})},h=t("vWky"),p=t("OS56"),g=t.n(p),O=i.a.createElement,y=function(e){var a=e.sliders;return O(g.a,{dots:!0,arrows:!1,infinite:!0,autoplay:!0,speed:1e3,autoplaySpeed:5e3,slidesToShow:1,slidesToScroll:1},a.map((function(e,a){var t=e.acf,n=t.image,c=t.body,r=t.position_of_text,s=t.background_color;return O("div",{key:a},O("div",{className:"homeSlider",style:{background:n?"url(".concat(n,")"):s,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",color:"".concat(c.font_color)}},O("div",{className:"sliderText",style:{textAlign:"".concat(r)},"data-aos":"fade-down","data-aos-easing":"ease","data-aos-delay":"0"},O("h1",null,c.text),O("p",{style:{paddingLeft:"right"===r?"40%":"0"}},c.description))))})))},w=t("GyP+"),j=t("YFqc"),N=t.n(j),x=i.a.createElement,z=function(e){var a=e.capability,t=a.content,n=a._embedded;return x("div",{className:"homeCapability"},x("div",{className:"simple-half-image"},x("img",{src:Object(w.e)(n,"image")})),x("div",{className:"capability-home-text","data-aos":"fade-up","data-aos-easing":"ease","data-aos-delay":"0"},x("div",null,x("div",{className:"gold-title"},Object(w.d)("Capabilities")),x("div",{dangerouslySetInnerHTML:{__html:t.rendered}}),x(N.a,{href:"/capabilities"},x("div",{className:"read-more-button"},Object(w.d)("Read more"))))))},V=t("rxVv"),k=i.a.createElement,H=function(e){var a=e.data,t=a[a.length-1],n=Object(s.useState)(t._embedded),c=n[0],r=n[1],i=Object(s.useState)(0),l=i[0],o=i[1],d=Object(s.useState)(t.content.rendered),u=d[0],m=d[1];return k("div",{className:"homeIndustries"},k("div",{className:"industry-button"},k("div",{className:"gold-title"},Object(w.d)("Industries")),a.slice(0).reverse().map((function(e,a){return k("div",{key:a,onClick:function(){!function(e,a,t){r(e),m(a),o(t)}(e._embedded,e.content.rendered,a)},className:"big-buttons","data-aos":"fade-right","data-aos-easing":"ease-in","data-aos-delay":150*a,"data-aos-duration":"100","data-aos-offset":"300",style:{color:"".concat(a===l?"#00488d":"rgba(0, 0, 0, 0.7)")}},e.title.rendered,k(V.a,{style:{display:"".concat(a===l?"inline-block":"none")}}))})),k(N.a,{href:"/industries"},k("div",{className:"read-more-button"},Object(w.d)("Read more")))),k("div",{className:"over-image",style:{backgroundImage:"url(".concat(Object(w.e)(c,"image"),")")}},k("div",{className:"over-text","data-aos":"fade-up","data-aos-easing":"ease","data-aos-delay":"0",dangerouslySetInnerHTML:{__html:u}})))},M=t("tdC5"),E=i.a.createElement,S=function(e){var a=e.mainMenu,t=e.topMenu,n=e.contact,c=e.sliders,r=e.capability,s=e.industries,i=e.brands,o=e.brandsCat;return E(l.a,{mainMenu:a,topMenu:t},E(b,{children:E("div",{className:"page home"},E("div",{className:"section Slider"},E(y,{sliders:c})),E("div",{className:"section Capabilities"},E(z,{capability:r})),E("div",{className:"section Industry"},E(H,{data:s})),E("div",{className:"section Brands"},E(M.a,{brandCats:o,brands:i})),E("div",{className:"section Footer"},E(h.a,{contact:n})))}))};S.getInitialProps=function(){var e=Object(r.a)(c.a.mark((function e(a){var t,n,r,s,i,l,d,m,v,f,b,h,p;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new u.a({endpoint:Object(o.a)(a).apiUrl}),e.next=3,Object(o.b)("".concat(Object(o.a)(a).apiUrl,"/menus/v1/menus/nav-menu"));case 3:return n=e.sent,e.next=6,Object(o.b)("".concat(Object(o.a)(a).apiUrl,"/menus/v1/menus/nav-menu-top"));case 6:return r=e.sent,e.next=9,t.posts().categories().slug("contact").embed().then((function(e){return e[0]}));case 9:return s=e.sent,e.next=12,t.categories().slug("slider").embed().then((function(e){return e[0]}));case 12:return i=e.sent,e.next=15,t.posts().categories(i.id).embed();case 15:return l=e.sent,e.next=18,t.categories().slug("capability-home").embed().then((function(e){return e[0]}));case 18:return d=e.sent,e.next=21,t.posts().categories(d.id).embed().then((function(e){return e[0]}));case 21:return m=e.sent,e.next=24,t.categories().slug("industries").embed().then((function(e){return e[0]}));case 24:return v=e.sent,e.next=27,t.posts().categories(v.id).embed();case 27:return f=e.sent,e.next=30,t.categories().slug("brands").embed().then((function(e){return e[0]}));case 30:return b=e.sent,e.next=33,t.posts().categories(b.id).perPage(100).embed();case 33:return h=e.sent,e.next=36,t.categories().parent(b.id).embed();case 36:return p=e.sent,e.abrupt("return",{mainMenu:n,topMenu:r,contact:s,sliders:l,capability:m,industries:f,brandsCat:p,brands:h});case 38:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();a.default=S},rxVv:function(e,a,t){"use strict";var n=t("Zjvm"),c=t("q1tI"),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},s=t("6VBw"),i=function(e,a){return c.createElement(s.a,Object(n.a)(Object(n.a)({},e),{},{ref:a,icon:r}))};i.displayName="ArrowRightOutlined";a.a=c.forwardRef(i)},tdC5:function(e,a,t){"use strict";var n=t("wx14"),c=t("q1tI"),r=t.n(c),s=t("OS56"),i=t.n(s),l=t("GyP+"),o=t("YFqc"),d=t.n(o),u=t("rxVv"),m=r.a.createElement;a.a=function(e){var a=e.brandCats,t=e.brands,r=e.page,s=a[0].parent,o=Object(c.useState)(s),v=o[0],f=o[1],b=Object(c.useState)(100),h=b[0],p=b[1],g=function(e,a){f(e),p(a)},O=t.filter((function(e){return e.categories.includes(v)})),y=O.length>4?4:O.length,w=O.length>4?3:O.length,j={dots:!1,infinite:!0,slidesToShow:y,slidesToScroll:1,autoplay:!0,speed:1e3,autoplaySpeed:2e3,nextArrow:m(l.b,null),prevArrow:m(l.c,null),responsive:[{breakpoint:992,settings:{slidesToShow:w,slidesToScroll:2,infinite:!0}},{breakpoint:575,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0}}]};return m("div",{className:"homeBrands","data-aos":"zoom-in","data-aos-duration":"300"},m("div",{className:"gold-title"},Object(l.d)("Brands")),m("div",{className:"sub-title"},Object(l.d)("Our products")),m("div",{className:"catList"},m("div",{className:100===h?"active":"inactive",onClick:function(){return g(s,100)}},Object(l.d)("All Brands")),a.map((function(e,a){var t=e.name,n=e.id;return m("div",{key:a,onClick:function(){return g(n,a)},className:a===h?"active":"inactive"},t)}))),m(i.a,Object(n.a)({},j,{className:r?"brandsList":"brandList"}),O.map((function(e,a){return m("div",{key:a},m("div",{className:"brand-logo"},m("img",{src:e.acf.logo})),m(d.a,{href:"/brands/[slug]",as:"/brands/".concat(e.slug)},m("div",{className:"read-more-detail"},Object(l.d)("Read more")," ",m(u.a,null))),m(d.a,{href:"/brands/[slug]",as:"/brands/".concat(e.slug)},m("div",{className:"brand-image"},m("img",{src:Object(l.e)(e._embedded,"image")}))))}))))}},vWky:function(e,a,t){"use strict";var n=t("q1tI"),c=t.n(n),r=t("Zjvm"),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 01-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 00-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 00285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"}}]},name:"phone",theme:"outlined"},i=t("6VBw"),l=function(e,a){return n.createElement(i.a,Object(r.a)(Object(r.a)({},e),{},{ref:a,icon:s}))};l.displayName="PhoneOutlined";var o=n.forwardRef(l),d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M820 436h-40c-4.4 0-8 3.6-8 8v40c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-40c0-4.4-3.6-8-8-8zm32-104H732V120c0-4.4-3.6-8-8-8H300c-4.4 0-8 3.6-8 8v212H172c-44.2 0-80 35.8-80 80v328c0 17.7 14.3 32 32 32h168v132c0 4.4 3.6 8 8 8h424c4.4 0 8-3.6 8-8V772h168c17.7 0 32-14.3 32-32V412c0-44.2-35.8-80-80-80zM360 180h304v152H360V180zm304 664H360V568h304v276zm200-140H732V500H292v204H160V412c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4 12 12v292z"}}]},name:"printer",theme:"outlined"},u=function(e,a){return n.createElement(i.a,Object(r.a)(Object(r.a)({},e),{},{ref:a,icon:d}))};u.displayName="PrinterOutlined";var m=n.forwardRef(u),v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]},name:"mail",theme:"outlined"},f=function(e,a){return n.createElement(i.a,Object(r.a)(Object(r.a)({},e),{},{ref:a,icon:v}))};f.displayName="MailOutlined";var b=n.forwardRef(f),h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672v672z"}}]},name:"facebook",theme:"outlined"},p=function(e,a){return n.createElement(i.a,Object(r.a)(Object(r.a)({},e),{},{ref:a,icon:h}))};p.displayName="FacebookOutlined";var g=n.forwardRef(p),O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"}}]},name:"instagram",theme:"outlined"},y=function(e,a){return n.createElement(i.a,Object(r.a)(Object(r.a)({},e),{},{ref:a,icon:O}))};y.displayName="InstagramOutlined";var w=n.forwardRef(y),j={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 10-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z"}}]},name:"linkedin",theme:"outlined"},N=function(e,a){return n.createElement(i.a,Object(r.a)(Object(r.a)({},e),{},{ref:a,icon:j}))};N.displayName="LinkedinOutlined";var x=n.forwardRef(N),z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M960 509.2c0-2.2 0-4.7-.1-7.6-.1-8.1-.3-17.2-.5-26.9-.8-27.9-2.2-55.7-4.4-81.9-3-36.1-7.4-66.2-13.4-88.8a139.52 139.52 0 00-98.3-98.5c-28.3-7.6-83.7-12.3-161.7-15.2-37.1-1.4-76.8-2.3-116.5-2.8-13.9-.2-26.8-.3-38.4-.4h-29.4c-11.6.1-24.5.2-38.4.4-39.7.5-79.4 1.4-116.5 2.8-78 3-133.5 7.7-161.7 15.2A139.35 139.35 0 0082.4 304C76.3 326.6 72 356.7 69 392.8c-2.2 26.2-3.6 54-4.4 81.9-.3 9.7-.4 18.8-.5 26.9 0 2.9-.1 5.4-.1 7.6v5.6c0 2.2 0 4.7.1 7.6.1 8.1.3 17.2.5 26.9.8 27.9 2.2 55.7 4.4 81.9 3 36.1 7.4 66.2 13.4 88.8 12.8 47.9 50.4 85.7 98.3 98.5 28.2 7.6 83.7 12.3 161.7 15.2 37.1 1.4 76.8 2.3 116.5 2.8 13.9.2 26.8.3 38.4.4h29.4c11.6-.1 24.5-.2 38.4-.4 39.7-.5 79.4-1.4 116.5-2.8 78-3 133.5-7.7 161.7-15.2 47.9-12.8 85.5-50.5 98.3-98.5 6.1-22.6 10.4-52.7 13.4-88.8 2.2-26.2 3.6-54 4.4-81.9.3-9.7.4-18.8.5-26.9 0-2.9.1-5.4.1-7.6v-5.6zm-72 5.2c0 2.1 0 4.4-.1 7.1-.1 7.8-.3 16.4-.5 25.7-.7 26.6-2.1 53.2-4.2 77.9-2.7 32.2-6.5 58.6-11.2 76.3-6.2 23.1-24.4 41.4-47.4 47.5-21 5.6-73.9 10.1-145.8 12.8-36.4 1.4-75.6 2.3-114.7 2.8-13.7.2-26.4.3-37.8.3h-28.6l-37.8-.3c-39.1-.5-78.2-1.4-114.7-2.8-71.9-2.8-124.9-7.2-145.8-12.8-23-6.2-41.2-24.4-47.4-47.5-4.7-17.7-8.5-44.1-11.2-76.3-2.1-24.7-3.4-51.3-4.2-77.9-.3-9.3-.4-18-.5-25.7 0-2.7-.1-5.1-.1-7.1v-4.8c0-2.1 0-4.4.1-7.1.1-7.8.3-16.4.5-25.7.7-26.6 2.1-53.2 4.2-77.9 2.7-32.2 6.5-58.6 11.2-76.3 6.2-23.1 24.4-41.4 47.4-47.5 21-5.6 73.9-10.1 145.8-12.8 36.4-1.4 75.6-2.3 114.7-2.8 13.7-.2 26.4-.3 37.8-.3h28.6l37.8.3c39.1.5 78.2 1.4 114.7 2.8 71.9 2.8 124.9 7.2 145.8 12.8 23 6.2 41.2 24.4 47.4 47.5 4.7 17.7 8.5 44.1 11.2 76.3 2.1 24.7 3.4 51.3 4.2 77.9.3 9.3.4 18 .5 25.7 0 2.7.1 5.1.1 7.1v4.8zM423 646l232-135-232-133z"}}]},name:"youtube",theme:"outlined"},V=function(e,a){return n.createElement(i.a,Object(r.a)(Object(r.a)({},e),{},{ref:a,icon:z}))};V.displayName="YoutubeOutlined";var k=n.forwardRef(V),H={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"}}]},name:"twitter",theme:"outlined"},M=function(e,a){return n.createElement(i.a,Object(r.a)(Object(r.a)({},e),{},{ref:a,icon:H}))};M.displayName="TwitterOutlined";var E=n.forwardRef(M),S={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]},name:"home",theme:"outlined"},L=function(e,a){return n.createElement(i.a,Object(r.a)(Object(r.a)({},e),{},{ref:a,icon:S}))};L.displayName="HomeOutlined";var C=n.forwardRef(L),R=t("GyP+"),_=c.a.createElement;a.a=function(e){var a=e.contact.acf,t=a.address,n=a.email,c=a.fax,r=a.tel,s=a.social,i=t.office;return _("footer",null,_("div",{className:"footer"},_("div",{className:"contacts"},_("p",null,Object(R.d)("Contacts")),_("p",null,_(o,null)," Tel: ",r),_("p",null,_(m,null)," Fax: ",c),_("p",null,_(b,null)," Email: ",n),_("p",null,_("a",{href:s.facebook},_(g,null)),_("a",{href:s.instagram},_(w,null)),_("a",{href:s.linkedin},_(x,null)),_("a",{href:s.youtube},_(k,null)),_("a",{href:s.twitter},_(E,null)))),_("div",{className:"headOffice"},_("p",null,i.name),_("p",null,_(C,null)," ",i.address)),_("div",{className:"contactUs"},_("p",null,"Please contact us"),_("div",null,_("label",null,Object(R.d)("Full name")),_("input",{type:"text",id:"fname",name:"firstname",placeholder:"Enter full name",required:!0})),_("div",null,_("label",null,Object(R.d)("Contact Email")),_("input",{type:"text",id:"email",name:"email",placeholder:"Enter email",required:!0})),_("div",null,_("label",null,Object(R.d)("Message")),_("textarea",{id:"Message",name:"message",placeholder:"Enter text",required:!0})),_("input",{type:"submit",value:"Send"}))))}},vlRD:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",0,2,5,1,3,4]]]);