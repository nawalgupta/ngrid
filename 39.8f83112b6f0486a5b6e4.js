(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{D0EO:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r("qFEQ"),o=r("GAih"),a=r("cc5W"),c=r("EM62");let p=(()=>{class e{}return e.\u0275mod=c.Rb({type:e}),e.\u0275inj=c.Qb({factory:function(t){return new(t||e)},imports:[[n.i,o.e,a.l],n.i,o.e,a.l]}),e})()},D57K:function(e,t,r){"use strict";function n(e,t,r,n){var o,a=arguments.length,c=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var p=e.length-1;p>=0;p--)(o=e[p])&&(c=(a<3?o(c):a>3?o(t,r,c):o(t,r))||c);return a>3&&c&&Object.defineProperty(t,r,c),c}r.d(t,"a",(function(){return n}))},"l+1c":function(e,t,r){"use strict";r.r(t),r.d(t,"ColumnGroupExampleModule",(function(){return b}));var n=r("D57K"),o=r("2kYt"),a=r("XApm"),c=r("cc5W"),p=r("D0EO"),l=r("JRn2"),u=r("EM62"),s=r("Ht9o");let i=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(a.p)().table({prop:"id",width:"40px"},{prop:"name"},{prop:"gender",width:"50px"},{prop:"email",width:"150px"},{prop:"country"},{prop:"language"}).headerGroup({prop:"name",span:1,label:"Name & Gender"},{prop:"country",span:1,label:"Country & Language"}).build(),this.ds=Object(a.q)().onTrigger(()=>this.datasource.getPeople(0,500)).create()}};return e.\u0275fac=function(t){return new(t||e)(u.Tb(l.DemoDataSource))},e.\u0275cmp=u.Nb({type:e,selectors:[["pbl-column-group-example"]],decls:1,vars:2,consts:[[3,"dataSource","columns"]],template:function(e,t){1&e&&u.Ub(0,"pbl-ngrid",0),2&e&&u.sc("dataSource",t.ds)("columns",t.columns)},directives:[s.a],styles:[""],encapsulation:2,changeDetection:0}),e=Object(n.a)([Object(c.e)("pbl-column-group-example",{title:"Column group"})],e),e})(),d=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(a.p)().table({prop:"id",width:"40px"},{prop:"name"},{prop:"gender",width:"50px"},{prop:"email",width:"150px"},{prop:"country"},{prop:"language"}).headerGroup({prop:"name",span:1,label:"Name & Gender"},{prop:"country",span:1,label:"Country & Language"}).header({id:"header1",label:"Header 1",width:"25%"},{id:"header2",label:"Header 2"},{id:"header3",label:"Header 3",width:"25%"}).headerGroup({prop:"id",span:2,label:"ID, Name & Gender"},{prop:"country",span:1,label:"Country & Language"}).build(),this.ds=Object(a.q)().onTrigger(()=>this.datasource.getPeople(0,500)).create()}};return e.\u0275fac=function(t){return new(t||e)(u.Tb(l.DemoDataSource))},e.\u0275cmp=u.Nb({type:e,selectors:[["pbl-multi-header-column-group-example"]],decls:1,vars:2,consts:[[3,"dataSource","columns"]],template:function(e,t){1&e&&u.Ub(0,"pbl-ngrid",0),2&e&&u.sc("dataSource",t.ds)("columns",t.columns)},directives:[s.a],styles:[""],encapsulation:2,changeDetection:0}),e=Object(n.a)([Object(c.e)("pbl-multi-header-column-group-example",{title:"Multi Header Column group"})],e),e})(),b=(()=>{let e=class{};return e.\u0275mod=u.Rb({type:e}),e.\u0275inj=u.Qb({factory:function(t){return new(t||e)},imports:[[o.c,p.a,a.i]]}),e=Object(n.a)([Object(c.a)(i,d)],e),e})()}}]);