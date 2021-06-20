(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(18),s=(c(24),c(7)),a=c(2),i=(c(25),c(0));function o(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("nav",{children:Object(i.jsxs)("ul",{className:"z-50\t fixed w-full flex gap-40 bg-black text-white p-5 tracking-wider text-lg",children:[Object(i.jsx)("li",{className:"flex-grow text-2xl",children:Object(i.jsx)(s.b,{to:"/",children:"LOGO"})}),Object(i.jsx)("li",{children:Object(i.jsx)(s.b,{to:"/",children:"Home"})}),Object(i.jsx)("li",{children:Object(i.jsx)(s.b,{to:"/catalog",children:"Catalog"})}),Object(i.jsx)("li",{className:"mr-40",children:Object(i.jsx)(s.b,{to:"#",children:"Cart"})})]})})})}var l=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o,{}),Object(i.jsx)("main",{className:"grid place-items-center pt-20 bg-hero h-screen bg-cover",children:Object(i.jsx)("button",{className:" focus:outline-none ring-offset-4  ring-2 bg-blue-400 p-2 ",children:Object(i.jsx)(s.b,{to:"/catalog",children:"Shop now"})})})]})},j=c(8),u=c.n(j),d=c(10),b=c(11);function h(e){var t=e.changeCategory,c=Object(n.useState)([]),r=Object(b.a)(c,2),s=r[0],a=r[1],o=function(){var e=Object(d.a)(u.a.mark((function e(c){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products/category/".concat(c));case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,t(r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){o(s)}),[s]);var l=function(e){a(e)};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:" font-semibold text-lg uppercase p-2.5  flex flex-col justify-between h-80",children:[Object(i.jsxs)("div",{className:"text-2xl w-80 ",children:["Shop/",s.length?s:"All Products"]}),Object(i.jsx)("div",{className:"category-links",onClick:function(){return l("electronics")},children:"electronics"}),Object(i.jsx)("div",{className:"category-links",onClick:function(){return l("jewelery")},children:"jewelery"}),Object(i.jsx)("div",{className:"category-links",onClick:function(){return l("men's clothing")},children:"men's clothing"}),Object(i.jsx)("div",{className:"category-links",onClick:function(){return l("women's clothing")},children:"women's clothing"})]})})}function x(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],r=t[1];Object(n.useEffect)((function(){a()}),[]);var a=function(){var e=Object(d.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products/");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,r(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o,{}),Object(i.jsxs)("div",{className:"flex container mx-auto py-40",children:[Object(i.jsx)(h,{changeCategory:function(e){r(e)}}),Object(i.jsx)("div",{className:" grid gap-16 grid-cols-3",children:c.map((function(e){return Object(i.jsxs)("div",{className:" relative overflow-hidden  shadow-lg  rounded  transition duration-300 ease-in-out hover:shadow-2xl",children:[Object(i.jsx)(s.b,{to:"/catalog/".concat(e.id),children:Object(i.jsx)("img",{className:"w-auto px-10 h-72 relative m-auto mb-36 transition-transform duration-300 transform hover:scale-105",src:e.image,alt:e.title})}),Object(i.jsxs)("div",{className:"absolute bottom-0\tw-full \ttext-center",children:[Object(i.jsx)("h4",{className:"px-5 font-bold\ttruncate overflow-hidden ",children:e.title}),Object(i.jsxs)("div",{className:"text-blue-500 py-1.5",children:["$",e.price]}),Object(i.jsx)("div",{className:" bg-black text-white uppercase tracking-wide\t p-3 m-1 \t",children:"Add To Cart"})]})]},e.id)}))})]})]})}function O(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"Cart"})})}function f(e){var t=e.match,c=Object(n.useState)([]),r=Object(b.a)(c,2),s=r[0],a=r[1];Object(n.useEffect)((function(){l()}),[]);var l=function(){var e=Object(d.a)(u.a.mark((function e(){var c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products/".concat(t.params.id));case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,a(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o,{}),Object(i.jsxs)("div",{className:"pt-20",children:[Object(i.jsx)("div",{children:s.title}),Object(i.jsx)("img",{className:"w-80 h-80",src:s.image,alt:s.title}),Object(i.jsx)("p",{children:s.description}),Object(i.jsx)("button",{onClick:function(){console.log("yeet")},className:"ring-2 p-1\t",children:"Add To Cart"}),Object(i.jsx)(O,{title:s.title,image:s.image})]})]})}function m(){return Object(i.jsx)(s.a,{children:Object(i.jsxs)(a.c,{children:[Object(i.jsx)(a.a,{exact:!0,path:"/",component:l}),Object(i.jsx)(a.a,{exact:!0,path:"/catalog",component:x}),Object(i.jsx)(a.a,{path:"/catalog/:id",component:f}),Object(i.jsx)(a.a,{exact:!0,path:"/cart",component:O})]})})}r.render(Object(i.jsx)(n.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.09d3035d.chunk.js.map