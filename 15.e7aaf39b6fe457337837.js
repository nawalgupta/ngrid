(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{D0EO:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var i=a("qFEQ"),n=a("GAih"),o=a("cc5W"),r=a("EM62");let s=(()=>{class t{}return t.\u0275mod=r.Rb({type:t}),t.\u0275inj=r.Qb({factory:function(e){return new(e||t)},imports:[[i.i,n.e,o.l],i.i,n.e,o.l]}),t})()},D57K:function(t,e,a){"use strict";function i(t,e,a,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(o<3?n(r):o>3?n(e,a,r):n(e,a))||r);return o>3&&r&&Object.defineProperty(e,a,r),r}a.d(e,"a",(function(){return i}))},L7hU:function(t,e,a){"use strict";a.d(e,"a",(function(){return p}));var i=a("2kYt"),n=a("iAde"),o=a("R7+U"),r=a("Y2X+"),s=a("PBFl"),c=a("XApm"),l=a("EM62");let p=(()=>{class t{constructor(t,e){t.resolveComponentFactory(n.a).create(e)}}return t.\u0275mod=l.Rb({type:t}),t.\u0275inj=l.Qb({factory:function(e){return new(e||t)(l.dc(l.j),l.dc(l.v))},imports:[[i.c,n.c,o.b,r.d,s.c,c.i]]}),t})()},R3BP:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return c}));var i=a("9bRT"),n=a("5XID"),o=a("XApm"),r=a("EM62");const s="blockUi";let c=(()=>{class t{constructor(t,e){this.grid=t,this._blockInProgress=!1,this._removePlugin=e.setPlugin(s,this),t.registry.changes.subscribe(t=>{for(const e of t)switch(e.type){case"blocker":this.setupBlocker()}}),e.events.subscribe(t=>{if("onDataSource"===t.kind){const{prev:e,curr:a}=t;e&&o.u.unrx.kill(this,e),a.onSourceChanging.pipe(o.u.unrx(this,a)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!0,this.setupBlocker())}),a.onSourceChanged.pipe(o.u.unrx(this,a)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!1,this.setupBlocker())})}})}get blockUi(){return this._blockUi}set blockUi(t){let e=Object(n.c)(t);!e||"auto"!==t&&""!==t||(e="auto"),Object(i.a)(t)&&this._blockUi!==t?(Object(i.a)(this._blockUi)&&o.u.unrx.kill(this,this._blockUi),this._blockUi=t,t.pipe(o.u.unrx(this,this._blockUi)).subscribe(t=>{this._blockInProgress=t,this.setupBlocker()})):this._blockUi!==e&&(this._blockUi=e,"auto"!==e&&(this._blockInProgress=e,this.setupBlocker()))}ngOnDestroy(){o.u.unrx.kill(this),this._removePlugin(this.grid)}setupBlocker(){if(this._blockInProgress){if(!this._blockerEmbeddedVRef){const t=this.grid.registry.getSingle("blocker");t&&(this._blockerEmbeddedVRef=this.grid.createView("afterContent",t.tRef,{$implicit:this.grid}),this._blockerEmbeddedVRef.detectChanges())}}else this._blockerEmbeddedVRef&&(this.grid.removeView(this._blockerEmbeddedVRef,"afterContent"),this._blockerEmbeddedVRef=void 0)}}return t.\u0275fac=function(e){return new(e||t)(r.Tb(o.e),r.Tb(o.l))},t.\u0275dir=r.Ob({type:t,selectors:[["pbl-ngrid","blockUi",""]],inputs:{blockUi:"blockUi"},exportAs:["blockUi"]}),t})()},U86r:function(t,e,a){"use strict";a.r(e),a.d(e,"PaginationExampleModule",(function(){return z}));var i=a("D57K"),n=a("2kYt"),o=a("PBFl"),r=a("XApm"),s=a("WNo/"),c=a("L7hU"),l=a("cc5W"),p=a("D0EO"),g=a("JRn2"),b=a("EM62"),u=a("Ht9o"),d=a("R3BP"),h=a("CWpx"),f=a("p3Cn"),m=a("v/G+");function k(t,e){if(1&t&&b.Ub(0,"pbl-ngrid-paginator",2),2&t){const t=e.$implicit;b.sc("table",t)("paginator",t.ds.paginator)}}let P=(()=>{let t=class{constructor(t){this.datasource=t,this.columns=Object(r.p)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"}).build(),this.ds=Object(r.q)().onTrigger(()=>this.datasource.getPeople(1e3,5e3)).create()}};return t.\u0275fac=function(e){return new(e||t)(b.Tb(g.DemoDataSource))},t.\u0275cmp=b.Nb({type:t,selectors:[["pbl-pagination-example"]],decls:2,vars:2,consts:[["usePagination","","blockUi","","vScrollNone","",3,"dataSource","columns"],[3,"table","paginator",4,"pblNgridPaginatorRef"],[3,"table","paginator"]],template:function(t,e){1&t&&(b.Zb(0,"pbl-ngrid",0),b.Hc(1,k,1,2,"pbl-ngrid-paginator",1),b.Yb()),2&t&&b.sc("dataSource",e.ds)("columns",e.columns)},directives:[u.a,d.b,h.b,f.f,m.a],styles:[""],encapsulation:2,changeDetection:0}),t=Object(i.a)([Object(l.e)("pbl-pagination-example",{title:"Client Side Pagination"})],t),t})();var v=a("GoAz"),S=a("YtkY");function O(t,e){if(1&t&&b.Ub(0,"pbl-ngrid-paginator",2),2&t){const t=e.$implicit;b.sc("table",t)("paginator",t.ds.paginator)}}let _=(()=>{let t=class{constructor(t){this.datasource=t,this.columns=Object(r.p)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"}).build(),this.ds=Object(r.q)().onTrigger(t=>{const{page:e,perPage:a}=this.ds.paginator;return function(t,e,a){return Object(v.a)(t.getPeople(500,5e3)).pipe(Object(S.a)(t=>{const i=(e-1)*a,n=Math.min(t.length,i+a);return{total:t.length,data:t.slice(i,n)}}))}(this.datasource,e,a).pipe(Object(S.a)(e=>(t.updateTotalLength(e.total),e.data)))}).setCustomTriggers("pagination").create()}};return t.\u0275fac=function(e){return new(e||t)(b.Tb(g.DemoDataSource))},t.\u0275cmp=b.Nb({type:t,selectors:[["pbl-async-page-number-example"]],decls:2,vars:2,consts:[["usePagination","","blockUi","",3,"dataSource","columns"],[3,"table","paginator",4,"pblNgridPaginatorRef"],[3,"table","paginator"]],template:function(t,e){1&t&&(b.Zb(0,"pbl-ngrid",0),b.Hc(1,O,1,2,"pbl-ngrid-paginator",1),b.Yb()),2&t&&b.sc("dataSource",e.ds)("columns",e.columns)},directives:[u.a,d.b,f.f,m.a],styles:[""],encapsulation:2,changeDetection:0}),t=Object(i.a)([Object(l.e)("pbl-async-page-number-example",{title:"Async: Page Number"})],t),t})();function y(t,e){if(1&t&&b.Ub(0,"pbl-ngrid-paginator",2),2&t){const t=e.$implicit;b.sc("table",t)("paginator",t.ds.paginator)}}function j(t,e,a){return Object(v.a)(t.getPeople(500,5e3)).pipe(Object(S.a)(t=>{const i=(e-1)*a,n=Math.min(t.length,i+a);return{total:t.length,data:t.slice(i,n)}}))}let x=(()=>{let t=class{constructor(t){this.datasource=t,this.columns=Object(r.p)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"}).build(),this.ds=Object(r.q)().onTrigger(t=>{const{pagination:e}=t;let a;e.page.changed&&(a=e.page.curr),a||this.ds.paginator.reset();const{perPage:i}=this.ds.paginator;return function(t,e){const a=(t,e)=>btoa(JSON.stringify({page:t,perPage:e}));if("string"==typeof e){const i=JSON.parse(atob(e)),{page:n,perPage:o}=i;return j(t,n,o).pipe(Object(S.a)(t=>({token:a(n+1,o),data:t.data})))}{const i=a(2,e);return j(t,1,e).pipe(Object(S.a)(t=>({token:i,data:t.data})))}}(this.datasource,a||i).pipe(Object(S.a)(e=>(e.token&&this.ds.paginator.addNext(e.token),t.updateTotalLength(e.data.length),e.data)))}).setCustomTriggers("pagination").create()}};return t.\u0275fac=function(e){return new(e||t)(b.Tb(g.DemoDataSource))},t.\u0275cmp=b.Nb({type:t,selectors:[["pbl-async-token-example"]],decls:2,vars:2,consts:[["usePagination","token","blockUi","",3,"dataSource","columns"],[3,"table","paginator",4,"pblNgridPaginatorRef"],[3,"table","paginator"]],template:function(t,e){1&t&&(b.Zb(0,"pbl-ngrid",0),b.Hc(1,y,1,2,"pbl-ngrid-paginator",1),b.Yb()),2&t&&b.sc("dataSource",e.ds)("columns",e.columns)},directives:[u.a,d.b,f.f,m.a],styles:[""],encapsulation:2,changeDetection:0}),t=Object(i.a)([Object(l.e)("pbl-async-token-example",{title:"Async Token"})],t),t})(),z=(()=>{let t=class{};return t.\u0275mod=b.Rb({type:t}),t.\u0275inj=b.Qb({factory:function(e){return new(e||t)},imports:[[n.c,o.c,p.a,r.i,s.a,c.a]]}),t=Object(i.a)([Object(l.a)(P,_,x)],t),t})()},"WNo/":function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var i=a("2kYt"),n=a("fL1z"),o=a("XApm"),r=a("R3BP"),s=a("EM62");let c=(()=>{class t{}return t.NGRID_PLUGIN=Object(o.s)({id:r.a},r.b),t.\u0275mod=s.Rb({type:t}),t.\u0275inj=s.Qb({factory:function(e){return new(e||t)},imports:[[i.c,n.s,o.i]]}),t})()},"v/G+":function(t,e,a){"use strict";a.d(e,"a",(function(){return S}));var i=a("5XID"),n=a("XApm"),o=a("EM62"),r=a("iAde"),s=a("2kYt"),c=a("PBFl"),l=a("Y2X+"),p=a("29Wa"),g=a("R7+U"),b=a("mFH5");function u(t,e){if(1&t&&(o.Zb(0,"mat-option",17),o.Jc(1),o.Yb()),2&t){const t=e.$implicit;o.sc("value",t),o.Gb(1),o.Lc(" ",t," ")}}function d(t,e){if(1&t){const t=o.ac();o.Zb(0,"mat-form-field",14),o.Zb(1,"mat-select",15),o.hc("selectionChange",(function(e){return o.Ac(t),o.lc(2).paginator.perPage=e.value})),o.Hc(2,u,2,2,"mat-option",16),o.Yb(),o.Yb()}if(2&t){const t=o.lc(2);o.Gb(1),o.sc("value",t.paginator.perPage)("aria-label",t._intl.itemsPerPageLabel)("disabled",t.pageSizes[0]>=t.paginator.total&&!t.paginator.hasPrev()&&!t.paginator.hasNext()),o.Gb(1),o.sc("ngForOf",t.pageSizes)}}function h(t,e){if(1&t&&(o.Zb(0,"div"),o.Jc(1),o.Yb()),2&t){const t=o.lc(2);o.Gb(1),o.Kc(null==t.paginator?null:t.paginator.perPage)}}function f(t,e){if(1&t&&(o.Zb(0,"div",11),o.Zb(1,"div",12),o.Jc(2),o.Yb(),o.Hc(3,d,3,4,"mat-form-field",8),o.Hc(4,h,2,1,"div",13),o.Yb()),2&t){const t=o.lc();o.Gb(2),o.Lc(" ",t._intl.itemsPerPageLabel," "),o.Gb(1),o.sc("ngIf",t.pageSizes.length>1),o.Gb(1),o.sc("ngIf",t.pageSizes.length<=1)}}function m(t,e){if(1&t&&(o.Zb(0,"div",18),o.Jc(1),o.Yb()),2&t){const t=o.lc();o.Gb(1),o.Lc(" ",t._intl.getRangeLabel(t.paginator.page-1,t.paginator.perPage,t.paginator.total)," ")}}function k(t,e){if(1&t&&(o.Zb(0,"mat-option",17),o.Jc(1),o.Yb()),2&t){const t=e.$implicit;o.sc("value",t),o.Gb(1),o.Kc(t)}}function P(t,e){if(1&t){const t=o.ac();o.kc(),o.jc(),o.Zb(0,"mat-form-field",14),o.Zb(1,"mat-select",19),o.hc("selectionChange",(function(e){return o.Ac(t),o.lc().paginator.page=e.value})),o.Hc(2,k,2,2,"mat-option",16),o.Yb(),o.Yb()}if(2&t){const t=o.lc();o.Gb(1),o.sc("value",t.paginator.page)("disabled",1===t.paginator.totalPages),o.Gb(1),o.sc("ngForOf",t.pages)}}const v=[5,10,20,50,100];let S=(()=>{class t{constructor(t,e,a){this._intl=e,this.cdr=a,this.pages=[],this.pageSizes=v.slice(),this._hidePageSize=!1,this._hideRangeSelect=!1,t&&(this.table=t),e.changes.pipe(n.u.unrx(this)).subscribe(()=>this.cdr.markForCheck())}get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(t){this._pageSizeOptions=t,this.pageSizes=(t||v).slice(),this.updatePageSizes()}get paginator(){return this._paginator}set paginator(t){this._paginator!==t&&(this._paginator&&n.u.unrx.kill(this,this._paginator),this._paginator=t,t&&(t.onChange.pipe(n.u.unrx(this,t)).subscribe(t=>this.handlePageChange(t)),this.updatePageSizes()))}get hidePageSize(){return this._hidePageSize}set hidePageSize(t){this._hidePageSize=Object(i.c)(t)}get hideRangeSelect(){return this._hideRangeSelect}set hideRangeSelect(t){this._hideRangeSelect=Object(i.c)(t)}ngOnDestroy(){n.u.unrx.kill(this)}updatePageSizes(){this.paginator&&-1===this.pageSizes.indexOf(this.paginator.perPage)&&this.pageSizes.push(this.paginator.perPage),this.pageSizes.sort((t,e)=>t-e)}handlePageChange(t){if(this.pages.length!==this.paginator.totalPages){const t=this.pages=[];for(let e=1,a=this.paginator.totalPages+1;e<a;e++)t.push(e)}this.cdr.detectChanges(),this.cdr.markForCheck()}}return t.\u0275fac=function(e){return new(e||t)(o.Tb(n.e,8),o.Tb(r.b),o.Tb(o.h))},t.\u0275cmp=o.Nb({type:t,selectors:[["pbl-ngrid-paginator"]],hostAttrs:[1,"mat-paginator"],inputs:{pageSizeOptions:"pageSizeOptions",paginator:"paginator",table:"table",hidePageSize:"hidePageSize",hideRangeSelect:"hideRangeSelect"},decls:12,vars:11,consts:[[1,"mat-paginator-outer-container"],[1,"mat-paginator-container"],["class","mat-paginator-page-size",4,"ngIf"],[1,"mat-paginator-range-actions"],["class","mat-paginator-range-label",4,"ngIf"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-previous",3,"matTooltip","matTooltipPosition","disabled","click"],["viewBox","0 0 24 24","focusable","false",1,"mat-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["class","mat-paginator-page-size-select",4,"ngIf"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-next",3,"matTooltip","matTooltipPosition","disabled","click"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],[1,"mat-paginator-page-size"],[1,"mat-paginator-page-size-label"],[4,"ngIf"],[1,"mat-paginator-page-size-select"],[3,"value","aria-label","disabled","selectionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"mat-paginator-range-label"],[3,"value","disabled","selectionChange"]],template:function(t,e){1&t&&(o.Zb(0,"div",0),o.Zb(1,"div",1),o.Hc(2,f,5,3,"div",2),o.Zb(3,"div",3),o.Hc(4,m,2,1,"div",4),o.Zb(5,"button",5),o.hc("click",(function(){return e.paginator.prevPage()})),o.kc(),o.Zb(6,"svg",6),o.Ub(7,"path",7),o.Yb(),o.Yb(),o.Hc(8,P,3,3,"mat-form-field",8),o.jc(),o.Zb(9,"button",9),o.hc("click",(function(){return e.paginator.nextPage()})),o.kc(),o.Zb(10,"svg",6),o.Ub(11,"path",10),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Yb()),2&t&&(o.Gb(2),o.sc("ngIf",!e.hidePageSize),o.Gb(2),o.sc("ngIf","pageNumber"===e.paginator.kind),o.Gb(1),o.sc("matTooltip",e._intl.previousPageLabel)("matTooltipPosition","above")("disabled",!e.paginator.hasPrev()),o.Hb("aria-label",e._intl.previousPageLabel),o.Gb(3),o.sc("ngIf",!e.hideRangeSelect&&"pageNumber"===e.paginator.kind&&e.pageSizes.length>=1),o.Gb(1),o.sc("matTooltip",e._intl.nextPageLabel)("matTooltipPosition","above")("disabled",!e.paginator.hasNext()),o.Hb("aria-label",e._intl.nextPageLabel))},directives:[s.t,c.b,l.c,p.c,g.a,s.s,b.n],styles:[".mat-paginator-range-label{flex-grow:1}.mat-paginator-container{box-sizing:border-box}"],encapsulation:2,changeDetection:0}),t})()}}]);