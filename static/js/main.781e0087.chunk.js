(this["webpackJsonpreact-sticky-puzzle"]=this["webpackJsonpreact-sticky-puzzle"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n(1),r=n.n(c),s=n(8),l=n.n(s),o=(n(16),n(6)),u=(n(17),n(2)),a=n(10),j=function(e){var t=e.children,n=e.isSticky,c=e.styleSticky,r=e.refItem,s=Object(a.a)(e,["children","isSticky","styleSticky","refItem"]),l=Object(u.a)({},n&&Object(u.a)({},c||{backgroundColor:"white"}));return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",Object(u.a)(Object(u.a)({},s),{},{ref:r,style:l,children:t})),Object(i.jsx)("div",{className:"sticky__placeholder"})]})},d=Object(c.memo)(j),b=n(9),f=n(5),y={items:{}},h="SET_STICKY_ITEM",O=function(e,t){switch(t.type){case h:var n=t.payload,i=n.key,c=n.value;return Object(u.a)(Object(u.a)({},e),{},{items:Object(u.a)(Object(u.a)({},e.items),{},Object(f.a)({},i,Object(u.a)(Object(u.a)({},e.items[i]),c)))});default:return e}},v=function(e){var t=e.children,n=e.onFixed,s=e.inElement,l=Object(c.useReducer)(O,y),u=Object(o.a)(l,2),a=u[0],j=u[1],f=Object(c.useRef)(new Map).current,v=Object(c.useRef)(null),x=function(){return function(e,t){var n=Object(b.a)(e);if(void 0!==t)return n.map((function(e){var n=Object(o.a)(e,2),i=n[0],c=n[1];return t({key:i,value:c})}))}(f,(function(e){var t=e.key,n=e.value;return{key:t,isSticky:!0,element:n,bounding:n.getBoundingClientRect()}}))},k=function(){var e=x();return{elements:e,lengthElements:e.length}},m=function(e,t){return e.addEventListener("scroll",t),function(){return e.removeEventListener("scroll",t)}},p=function(e,t){var n=t.key,i=t.isSticky;e.isSticky===i&&(e.isSticky=!i,j({type:h,payload:{key:n,value:{isSticky:i}}}))},g=function(e){e.isSticky&&n&&n()},S=function(e){var t=e;return function(e){return function(e,t,n){if(n){for(var i=0,c=0;c<t;c++)i+=n(e[c]);return i}return 0}(t,e,(function(e){return e.bounding.height}))}};Object(c.useEffect)((function(){var e=k(),t=e.elements,n=e.lengthElements,i=S(t);if(s)return v.current=v.current.parentNode,m(v.current,(function(e){for(var c=e.target,r=c.scrollTop,s=c.offsetTop,l=c.offsetLeft,o=c.clientWidth,u=0;u<n;u++){var a,j,d=t[u],b=d.key,f=d.bounding,y=d.element,h=i(u),O=s-window.scrollY+h,v=r>f.top-((null===(a=t[u-1])||void 0===a||null===(j=a.bounding)||void 0===j?void 0:j.height)||0)-O;if(v){var x=O-window.scrollY;y.style.position="fixed",y.style.width=o+"px",y.style.top=x+"px",y.style.left=l+"px",g(t[u])}else y.style.removeProperty("position");p(t[u],{key:b,isSticky:v})}}))}),[s]),Object(c.useEffect)((function(){if(s){var e=k(),t=e.elements,n=e.lengthElements,i=S(t);return m(window,(function(e){for(var c=v.current.offsetTop,r=0;r<n;r++){var s=t[r].element,l=i(r);s.style.top=c-window.scrollY+l+"px"}}))}}),[s]);var w=Object(c.useCallback)((function(){var e=k(),t=e.elements,n=e.lengthElements,i=S(t);return m(window,(function(){for(var e=0;e<n;e++){var c,r,s=t[e],l=s.key,o=s.bounding,u=s.element,a=i(e),j=window.scrollY>o.top-((null===(c=t[e-1])||void 0===c||null===(r=c.bounding)||void 0===r?void 0:r.height)||0);j?(u.classList.add("sticky__item"),u.style.marginTop=a+"px",u.nextSibling.style.height=o.height+"px",g(t[e])):(u.classList.remove("sticky__item"),u.nextSibling.style.height="0px"),p(t[e],{key:l,isSticky:j})}}))}),[]);return Object(c.useEffect)((function(){!s&&w()}),[w,s]),Object(i.jsx)("div",{ref:v,children:r.a.Children.map(t,(function(e,t){if(e.type===d){var n=(a.items[t]||{}).isSticky;return r.a.cloneElement(e,{refItem:function(e){return f.set(t,e)},isSticky:n})}return e}))})},x=function(e){var t=e.i;return Array(t).fill(0).map((function(e,t){return Object(i.jsx)("h1",{style:{border:"1px solid silver"},children:t},t)}))},k=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{className:"sticky__title",children:"STICKY DEMO"}),Object(i.jsx)(x,{i:4}),Object(i.jsx)("div",{className:"container-sticky",style:{width:"300px",height:"400px",overflowY:"scroll",background:"rgba(0,0,100,.1)",margin:"auto"},children:Object(i.jsxs)(v,{inElement:!0,children:[Object(i.jsx)(x,{i:3}),Object(i.jsx)(d,{children:Object(i.jsx)("div",{children:" STICKY 1"})}),Object(i.jsx)(x,{i:20}),Object(i.jsx)(d,{children:Object(i.jsx)("div",{children:" STICKY 2"})}),Object(i.jsx)(d,{children:Object(i.jsx)("div",{style:{background:"green"},children:" title 3"})}),Object(i.jsx)(d,{children:Object(i.jsx)("div",{style:{background:"lime"},children:" STICKY 4"})}),Object(i.jsx)(x,{i:100})]})}),Object(i.jsxs)(v,{children:[Object(i.jsx)(x,{i:3}),Object(i.jsx)(d,{styleSticky:{background:"gray"},children:Object(i.jsx)("div",{className:"sticky__root",children:" STICK 1"})}),Object(i.jsx)(x,{i:20}),Object(i.jsx)(d,{children:Object(i.jsx)("div",{className:"sticky__root",children:" STICKY 2"})}),Object(i.jsx)(d,{styleSticky:{background:"red"},children:Object(i.jsx)("div",{className:"sticky__root",children:"STICKY 3"})}),Object(i.jsx)(x,{i:100})]})]})};l.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(k,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.781e0087.chunk.js.map