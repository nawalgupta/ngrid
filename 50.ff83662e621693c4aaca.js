(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"0RAI":function(e,t,n){"use strict";n.r(t),n.d(t,"InfiniteScrollExampleModule",(function(){return b}));var i=n("D57K"),r=n("2kYt"),o=n("XApm"),s=n("cc5W"),c=n("D0EO"),l=n("JRn2"),a=n("EM62"),d=n("Ht9o"),p=n("66mq");function u(e,t){1&e&&a.Ub(0,"mat-progress-bar",2)}let h=(()=>{let e=class{constructor(e){this.datasource=e,this.loading=!1,this.columns=Object(o.p)().table({prop:"id",width:"100px"},{prop:"name",width:"100px"},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date",width:"25%"}).build(),this.ds=Object(o.q)().onTrigger(e=>this.allPeople?(this.loading=!1,Promise.resolve(this.allPeople.slice(0,Math.min(this.allPeople.length,this.ds.source.length+50)))):this.datasource.getPeople(100,1e3).then(e=>(this.allPeople=e,this.allPeople.slice(0,Math.min(this.allPeople.length,(this.ds.source||[]).length+50))))).create()}ngAfterViewInit(){this.ds.onRenderedDataChanged.subscribe(()=>{this.ds.length-this.ds.renderStart<20&&(this.loading||(this.loading=!0,setTimeout(()=>this.ds.refresh(),1e3*Math.random())))})}};return e.\u0275fac=function(t){return new(t||e)(a.Tb(l.DemoDataSource))},e.\u0275cmp=a.Nb({type:e,selectors:[["pbl-infinite-scroll-example"]],decls:2,vars:3,consts:[[3,"dataSource","columns"],["mode","indeterminate",4,"ngIf"],["mode","indeterminate"]],template:function(e,t){1&e&&(a.Zb(0,"pbl-ngrid",0),a.Hc(1,u,1,0,"mat-progress-bar",1),a.Yb()),2&e&&(a.sc("dataSource",t.ds)("columns",t.columns),a.Gb(1),a.sc("ngIf",t.loading))},directives:[d.a,r.t,p.a],styles:[""],encapsulation:2,changeDetection:0}),e=Object(i.a)([Object(s.e)("pbl-infinite-scroll-example",{title:"Infinite Scroll"})],e),e})(),b=(()=>{let e=class{};return e.\u0275mod=a.Rb({type:e}),e.\u0275inj=a.Qb({factory:function(t){return new(t||e)},imports:[[r.c,c.a,p.b,o.i]]}),e=Object(i.a)([Object(s.a)(h)],e),e})()},D0EO:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("qFEQ"),r=n("GAih"),o=n("cc5W"),s=n("EM62");let c=(()=>{class e{}return e.\u0275mod=s.Rb({type:e}),e.\u0275inj=s.Qb({factory:function(t){return new(t||e)},imports:[[i.i,r.e,o.l],i.i,r.e,o.l]}),e})()},D57K:function(e,t,n){"use strict";function i(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s}n.d(t,"a",(function(){return i}))}}]);