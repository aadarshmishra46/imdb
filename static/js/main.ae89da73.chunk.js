(this.webpackJsonpimdb=this.webpackJsonpimdb||[]).push([[0],{10:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),c=a(4),r=a.n(c),s=(a(10),a(5)),o=a(2),l=a(0),d=function(e){var t=e.title,a=e.poster_path,i=(e.overview,e.vote_average),n=e.release_date,c=e.name,r=e.first_air_date,s=0;return s=n?new Date(n).getFullYear():new Date(r).getFullYear(),Object(l.jsxs)("div",{className:"movie-box",children:[Object(l.jsx)("div",{className:"movie",children:Object(l.jsx)("img",{className:"movie-image",src:a?"https://image.tmdb.org/t/p/w1280"+a:"https://media.istockphoto.com/vectors/movie-poster-template-cinema-design-in-flat-style-vector-id535504850",alt:t})}),Object(l.jsxs)("div",{className:"movie-info",children:[Object(l.jsx)("h3",{children:t||c}),Object(l.jsxs)("h6",{children:[i,"/10 | ",s]})]})]})},j=function(e){var t=Object(i.useState)(""),a=Object(o.a)(t,2),n=a[0],c=a[1],r=function(e){s(e)},s=function(t){fetch(t).then((function(e){return e.json()})).then((function(t){e.search(t.results)}))};return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("h1",{children:"Discover"}),Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{className:"nav-list",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"javascript:void(0)",onClick:function(){return r("https://api.themoviedb.org/3/discover/movie?api_key=3a94078fb34b772a31d9a1348035bed7&language=en-US&sort")},children:"popular"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"javascript:void(0)",onClick:function(){return r("https://api.themoviedb.org/3/movie/now_playing?api_key=3a94078fb34b772a31d9a1348035bed7")},children:"newest"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"javascript:void(0)",onClick:function(){return r("https://api.themoviedb.org/3/trending/movie/day?api_key=3a94078fb34b772a31d9a1348035bed7")},children:"trending"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"javascript:void(0)",onClick:function(){return r("https://api.themoviedb.org/3/movie/top_rated?api_key=3a94078fb34b772a31d9a1348035bed7")},children:"top rated"})})]})}),Object(l.jsxs)("div",{className:"search-bar",children:[Object(l.jsx)("span",{className:"search-icon",children:Object(l.jsx)("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"icon",children:Object(l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),Object(l.jsx)("form",{onSubmit:function(e){(e.preventDefault(),n)&&(s("https://api.themoviedb.org/3/search/movie?api_key=3a94078fb34b772a31d9a1348035bed7&language=en-US&query="+n),c(""))},children:Object(l.jsx)("input",{type:"text",id:"search",autoComplete:"off",placeholder:"Search",className:"search",value:n,onChange:function(e){c(e.target.value)}})})]})]})},b=function(e){var t=function(t){fetch(t).then((function(e){return e.json()})).then((function(t){e.search(t.results)}))},a=function(t){fetch(t).then((function(e){return e.json()})).then((function(t){e.filter(t.results)}))};return Object(l.jsxs)("div",{className:"filter-section",children:[Object(l.jsx)("h3",{children:"Discover options"}),Object(l.jsxs)("form",{className:"filter-form",children:[Object(l.jsx)("div",{className:"lable",children:"Type"}),Object(l.jsxs)("select",{id:"type",className:"form-select selection","aria-label":"Default select example",onChange:function(e){"Movies"===e.target.value?t("https://api.themoviedb.org/3/discover/movie?api_key=3a94078fb34b772a31d9a1348035bed7"):a("https://api.themoviedb.org/3/tv/popular?api_key=3a94078fb34b772a31d9a1348035bed7")},children:[Object(l.jsx)("option",{value:"Movies",children:"Movies"}),Object(l.jsx)("option",{value:"TV-Series",children:"TV Series"})]}),Object(l.jsx)("div",{className:"lable",children:"Genre"}),Object(l.jsxs)("select",{id:"genre",className:"form-select selection","aria-label":"Default select example",onChange:function(e){var a="https://api.themoviedb.org/3/discover/movie?api_key=3a94078fb34b772a31d9a1348035bed7&language=en-US&sort_by=popularity.desc&with_genres="+e.target.value;t(a)},children:[Object(l.jsx)("option",{value:"".concat(28),children:"Action"}),Object(l.jsx)("option",{value:"".concat(18),children:"Drama"}),Object(l.jsx)("option",{value:"".concat(35),children:"Comedy"}),Object(l.jsx)("option",{value:"".concat(53),children:"Thriller"}),Object(l.jsx)("option",{value:"".concat(878),children:"Sci-Fi"}),Object(l.jsx)("option",{value:"".concat(27),children:"Horror"}),Object(l.jsx)("option",{value:"".concat(10749),children:"Romance"}),Object(l.jsx)("option",{value:"".concat(14),children:"Fantasy"}),Object(l.jsx)("option",{value:"".concat(10751),children:"Family"})]}),Object(l.jsx)("div",{className:"lable",children:"Year"}),Object(l.jsx)("select",{id:"year",className:"form-select selection","aria-label":"Default select example",onChange:function(e){var a="https://api.themoviedb.org/3/discover/movie?api_key=3a94078fb34b772a31d9a1348035bed7&language=en-US&sort_by=popularity.desc&primary_release_year="+e.target.value;t(a)},children:["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"].map((function(e){return Object(l.jsx)("option",{value:"".concat(e),children:e},e)}))}),Object(l.jsx)("div",{className:"rating",children:Object(l.jsxs)("ul",{class:"rate-area",children:[Object(l.jsx)("input",{type:"radio",id:"5-star",name:"rating",value:"5"}),Object(l.jsx)("label",{for:"5-star",title:"Amazing",children:"5 stars"}),Object(l.jsx)("input",{type:"radio",id:"4-star",name:"rating",value:"4"}),Object(l.jsx)("label",{for:"4-star",title:"Good",children:"4 stars"}),Object(l.jsx)("input",{type:"radio",id:"3-star",name:"rating",value:"3"}),Object(l.jsx)("label",{for:"3-star",title:"Average",children:"3 stars"}),Object(l.jsx)("input",{type:"radio",id:"2-star",name:"rating",value:"2"}),Object(l.jsx)("label",{for:"2-star",title:"Not Good",children:"2 stars"}),Object(l.jsx)("input",{type:"radio",id:"1-star",name:"rating",value:"1"}),Object(l.jsx)("label",{for:"1-star",title:"Bad",children:"1 star"})]})})]})]})};a(12);var h=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),a=t[0],n=t[1],c=function(e){var t=e.filter((function(e){var t=new Date(e.release_date).getFullYear(),a=e.vote_average,i=e.poster_path;return t>=2e3&&t<=2021&&0!==a&&null!==i}));console.log("movie list:",t),n(t)};Object(i.useEffect)((function(){r("https://api.themoviedb.org/3/discover/movie?api_key=3a94078fb34b772a31d9a1348035bed7&language=en-US&sort")}),[]);var r=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){n(e.results)}))};return Object(l.jsxs)("div",{className:"body",children:[Object(l.jsxs)("div",{className:"movie-section",children:[Object(l.jsx)(j,{search:c}),Object(l.jsx)("div",{className:"movie-container",children:a.length>0&&a.map((function(e){return Object(l.jsx)(d,Object(s.a)({},e),e.id)}))})]}),Object(l.jsx)(b,{search:c,filter:function(e){var t=e.filter((function(e){var t=new Date(e.first_air_date).getFullYear(),a=e.vote_average,i=e.poster_path;return t>=2e3&&t<=2021&&0!==a&&null!==i}));console.log("movie list:",t),n(t)}})]})},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),i(e),n(e),c(e),r(e)}))};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),u()}},[[13,1,2]]]);
//# sourceMappingURL=main.ae89da73.chunk.js.map