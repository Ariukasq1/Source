(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"GyP+":function(t,n,e){"use strict";e.d(n,"b",(function(){return m})),e.d(n,"c",(function(){return b})),e.d(n,"e",(function(){return g})),e.d(n,"d",(function(){return y})),e.d(n,"a",(function(){return _}));var r=e("q1tI"),a=e.n(r),i=e("ljnA"),o=e.n(i),s=(e("cr+I"),e("Zjvm")),u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"},c=e("6VBw"),l=function(t,n){return r.createElement(c.a,Object(s.a)(Object(s.a)({},t),{},{ref:n,icon:u}))};l.displayName="RightOutlined";var f=r.forwardRef(l),d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"},h=function(t,n){return r.createElement(c.a,Object(s.a)(Object(s.a)({},t),{},{ref:n,icon:d}))};h.displayName="LeftOutlined";var p=r.forwardRef(h),v=a.a.createElement,m=function(t){var n=t.onClick;return v(f,{onClick:n,className:"next-arrow"})},b=function(t){var n=t.onClick;return v(p,{onClick:n,className:"prev-arrow"})},g=function(t,n){switch(n){case"categories":return t&&t["wp:term"]&&t["wp:term"][0]?t["wp:term"][0]:[];case"tags":return t&&t["wp:term"]&&t["wp:term"][1]?t["wp:term"][1]:[];case"author":return t&&t.author&&t.author[0]?t.author[0]:null;case"image":return t&&t["wp:featuredmedia"]&&t["wp:featuredmedia"][0]&&t["wp:featuredmedia"][0].source_url?t["wp:featuredmedia"][0].source_url:null}},y=function(t,n){var e=o.a.translate(t,n);return e?e.toString():""},_=["none"]},QGNf:function(t,n,e){"use strict";e.r(n);var r=e("o0o1"),a=e.n(r),i=e("HaE+"),o=e("q1tI"),s=e.n(o),u=e("+m56"),c=e.n(u),l=e("t30L"),f=e("obyI"),d=e("GyP+"),h=s.a.createElement,p=function(t){var n=t.post||{},e=n._embedded,r=n.title,a=n.acf;return h("div",{className:"brand"},h("div",{className:"brand-detail-image"},h("img",{src:Object(d.e)(e,"image")})),h("div",{className:"brand-detail-and-about"},h("div",{className:"blue-title"},Object(d.d)("About")," ",h("span",{dangerouslySetInnerHTML:{__html:r.rendered}})),h("div",{className:"brand-detail-text",dangerouslySetInnerHTML:{__html:a.about}}),h("div",{className:"blue-title"},h("span",{dangerouslySetInnerHTML:{__html:r.rendered}})," ",Object(d.d)("Detail")),h("div",{className:"brand-detail-text",dangerouslySetInnerHTML:{__html:a.advantage}}),a.certificate&&h("div",{className:"certificate"},h("div",{className:"blue-title"},Object(d.d)("Certification & Accreditations:")),h("img",{src:a.certificate}))))},v=s.a.createElement,m=function(t){var n=t.post,e=t.mainMenu,r=t.topMenu;return v(l.a,{mainMenu:e,topMenu:r},v("div",{className:"page"},v(p,{post:n})))};m.getInitialProps=function(){var t=Object(i.a)(a.a.mark((function t(n){var e,r,i,o,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new c.a({endpoint:Object(f.a)(n).apiUrl}),t.next=3,Object(f.b)("".concat(Object(f.a)(n).apiUrl,"/menus/v1/menus/nav-menu"));case 3:return r=t.sent,t.next=6,Object(f.b)("".concat(Object(f.a)(n).apiUrl,"/menus/v1/menus/nav-menu-top"));case 6:return i=t.sent,o=n.query.slug,t.next=10,e.posts().slug("".concat(o)).embed().then((function(t){return t[0]}));case 10:return s=t.sent,t.abrupt("return",{mainMenu:r,topMenu:i,post:s});case 12:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();n.default=m},Zbgq:function(t,n,e){var r={"./en.json":["cCmO",25],"./mn.json":["Vjy3",26]};function a(t){if(!e.o(r,t))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[t],a=n[0];return e.e(n[1]).then((function(){return e.t(a,7)}))}a.keys=function(){return Object.keys(r)},a.id="Zbgq",t.exports=a},ljnA:function(t,n,e){"use strict";var r=this&&this.__rest||function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)n.indexOf(r[a])<0&&(e[r[a]]=t[r[a]])}return e};n.__esModule=!0;var a=e("q1tI"),i=e("nepi");function o(t){return"string"===typeof t||t instanceof String}function s(t){return"object"===typeof t}function u(t){return"function"===typeof t}function c(t,n){for(var e=n.split("."),r=0,a=e.length;r<a;r++){if(!t||!s(t))return;t=t[e[r]]}return t}var l=function(){function t(t,n,e){this.mdFlavor=t,this.inter=n,this.self=e}return t.prototype.M=function(t){if(!t)return null;var n=i.mdMatch(this.mdFlavor,t);if(!n)return t;var e=null;switch(n.tag){case"inter":e=this.inter&&this.inter(n.body);break;case"self":e=this.self&&this.self(n.body);break;case"literals":case"literal":e=n.body;break;default:e=a.createElement(n.tag,{key:n.tag+n.body},this.M(n.body))}return function(t){for(var n=[],e="",r=function(){return e&&(n.push(e),e="")},a=0,i=t;a<i.length;a++){var s=i[a];null!=s&&(o(s)?e+=s:(r(),n.push(s)))}return r(),n.length>1?n:n.length?n[0]:null}([this.M(n.head),e,this.M(n.tail)])},t}();function f(t,n,e,r){var a,i=e[n];return null!=i&&null!=r[i]&&null==(a=c(t,r[i].toString()))&&+r[i]===r[i]&&(a=function(t,n){for(var e in t)if(t.hasOwnProperty(e)){var r=e.match(/^(-?\d+)\.\.(-?\d+)$/);if(r&&+r[1]<=n&&n<=+r[2])return t[e]}}(t,+r[i])),null==a&&(a=t._),null==a&&(a=function(t){for(var n in t)if("__"!=n)return t[n]}(t)),null==a||o(a)?a:f(a,n+1,e,r)}var d=function(){function t(t,n){this.texts=t,this.MDFlavor=0,this.notFound=void 0,this.p=this.factory("p"),this.span=this.factory("span"),this.li=this.factory("li"),this.div=this.factory("div"),this.button=this.factory("button"),this.a=this.factory("a"),this.text=this.factory(null),this.setOpts(n)}return t.prototype.setTexts=function(t,n){this.texts=t,this.setOpts(n)},t.prototype.setOpts=function(t){t&&(void 0!==t.notFound&&(this.notFound=t.notFound),void 0!==t.MDFlavor&&(this.MDFlavor=t.MDFlavor))},t.prototype.interpolate=function(t,n){var e=t.split(","),r=e[0],i=e[1],o=c(n,r);return null==o?null:a.isValidElement(o)?a.cloneElement(o,{key:"r"}):i&&i.match(/l/)?o.toLocaleString():o.toString()},t.prototype.format=function(t,n){var e=this;return t?new l(i.mdFlavors[this.MDFlavor],(function(t){return e.interpolate(t,n)}),(function(t){return e.translate(t,n)})).M(t):t},t.prototype.translate=function(t,n){if(!t)return t;var e=c(this.texts,t),r=n&&n.context;return null==e||o(e)||u(e)||(e=function(t,n){if(null==n)return f(t,0,[],null);if(s(n)){var e=[];if(t.__)e=t.__.split(".");else for(var r in n)n.hasOwnProperty(r)&&e.push(r);return f(t,0,e,n)}return f(t,0,["_"],{_:n})}(e,r)),null==e&&(e=n&&void 0!==n.notFound?n.notFound:void 0!==this.notFound?this.notFound:t),u(e)&&(e=e(t,r)),this.format(e,n)},t.prototype.factory=function(t){var n=this;return function(e){var i,s,u=e.text,c=e.tag,l=r(e,["text","tag"]);if(null==u||o(u)){i=u,s=e;l.notFound,l.context;l=r(l,["notFound","context"])}else i=u.key,s=u;var f=t||c,d=n.translate(i,s);return f?a.createElement(f,l,d):d}},t}();n.MDText=d;var h=new d(null);n.default=h},nepi:function(t,n,e){"use strict";n.__esModule=!0;var r={"`` ":[/^(.*?(?:(?!`).|^))(``+)\s(.*?)\s\2(?!`)(.*)$/,[1,3,4]],"``":[/^(.*?(?:(?!`).|^))(``+)(?!`)(.*?(?!`).)\2(?!`)(.*)$/,[1,3,4]],"*":/^(|.*?\W)\*(\S.*?)\*(|\W.*)$/,"**":/^(|.*?\W)\*\*(\S.*?)\*\*(|\W.*)$/,_:/^(|.*?\W)_(\S.*?)_(|\W.*)$/,__:/^(|.*?\W)__(\S.*?)__(|\W.*)$/,"~":/^(|.*?\W)~(\S.*?)~(|\W.*)$/,"~~":/^(|.*?\W)~~(\S.*?)~~(|\W.*)$/,"[]":/^(.*?)\[(.*?)\](.*)$/,"#":/^(|.*?(?=\n))\n*\s*#([^#].*?)#*\s*\n+([\S\s]*)$/,"##":/^(|.*?(?=\n))\n*\s*##([^#].*?)#*\s*\n+([\S\s]*)$/,"###":/^(|.*?(?=\n))\n*\s*###([^#].*?)#*\s*\n+([\S\s]*)$/,"####":/^(|.*?(?=\n))\n*\s*####([^#].*?)#*\s*\n+([\S\s]*)$/,"\n":/^(.*?)[^\S\n]*\n()[^\S\n]*([\s\S]*)$/,"{{}}":/^(.*?)\{\{(.*?)\}\}(.*)$/,"{}":/^(.*?)\{(.*?)\}(.*)$/};n.mdFlavors=[{maybe:/[\*_\{\[\n]/,tags:{strong:r["*"],em:r._,p:r["[]"],h1:r["#"],h2:r["##"],h3:r["###"],h4:r["####"],br:r["\n"],self:r["{{}}"],inter:r["{}"]}},{maybe:/[`\*_~\{\[\n]/,tags:{literals:r["`` "],literal:r["``"],strong:r["**"],em:r["*"],b:r.__,i:r._,strike:r["~~"],u:r["~"],p:r["[]"],h1:r["#"],h2:r["##"],h3:r["###"],h4:r["####"],br:r["\n"],self:r["{{}}"],inter:r["{}"]}}],n.mdMatch=function(t,n){if(!n.match(t.maybe))return null;var e=t.tags,r=null;for(var a in e)if(e.hasOwnProperty(a)){var i=e[a],o=i instanceof RegExp?[i,[1,2,3]]:i,s=o[0],u=o[1],c=s.exec(n);c&&(null==r||c[u[0]].length<r.head.length)&&(r={tag:a,head:c[u[0]],body:c[u[1]],tail:c[u[2]]})}return r}},tXPO:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/brands/[slug]",function(){return e("QGNf")}])}},[["tXPO",0,2,1,3]]]);