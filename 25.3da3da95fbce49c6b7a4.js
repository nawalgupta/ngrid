(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{D0EO:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r("qFEQ"),l=r("GAih"),o=r("cc5W"),c=r("EM62");let n=(()=>{class e{}return e.\u0275mod=c.Rb({type:e}),e.\u0275inj=c.Qb({factory:function(t){return new(t||e)},imports:[[i.i,l.e,o.l],i.i,l.e,o.l]}),e})()},D57K:function(e,t,r){"use strict";function i(e,t,r,i){var l,o=arguments.length,c=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(c=(o<3?l(c):o>3?l(t,r,c):l(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c}r.d(t,"a",(function(){return i}))},R3BP:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a}));var i=r("9bRT"),l=r("5XID"),o=r("XApm"),c=r("EM62");const n="blockUi";let a=(()=>{class e{constructor(e,t){this.grid=e,this._blockInProgress=!1,this._removePlugin=t.setPlugin(n,this),e.registry.changes.subscribe(e=>{for(const t of e)switch(t.type){case"blocker":this.setupBlocker()}}),t.events.subscribe(e=>{if("onDataSource"===e.kind){const{prev:t,curr:r}=e;t&&o.u.unrx.kill(this,t),r.onSourceChanging.pipe(o.u.unrx(this,r)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!0,this.setupBlocker())}),r.onSourceChanged.pipe(o.u.unrx(this,r)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!1,this.setupBlocker())})}})}get blockUi(){return this._blockUi}set blockUi(e){let t=Object(l.c)(e);!t||"auto"!==e&&""!==e||(t="auto"),Object(i.a)(e)&&this._blockUi!==e?(Object(i.a)(this._blockUi)&&o.u.unrx.kill(this,this._blockUi),this._blockUi=e,e.pipe(o.u.unrx(this,this._blockUi)).subscribe(e=>{this._blockInProgress=e,this.setupBlocker()})):this._blockUi!==t&&(this._blockUi=t,"auto"!==t&&(this._blockInProgress=t,this.setupBlocker()))}ngOnDestroy(){o.u.unrx.kill(this),this._removePlugin(this.grid)}setupBlocker(){if(this._blockInProgress){if(!this._blockerEmbeddedVRef){const e=this.grid.registry.getSingle("blocker");e&&(this._blockerEmbeddedVRef=this.grid.createView("afterContent",e.tRef,{$implicit:this.grid}),this._blockerEmbeddedVRef.detectChanges())}}else this._blockerEmbeddedVRef&&(this.grid.removeView(this._blockerEmbeddedVRef,"afterContent"),this._blockerEmbeddedVRef=void 0)}}return e.\u0275fac=function(t){return new(t||e)(c.Tb(o.e),c.Tb(o.l))},e.\u0275dir=c.Ob({type:e,selectors:[["pbl-ngrid","blockUi",""]],inputs:{blockUi:"blockUi"},exportAs:["blockUi"]}),e})()},"WNo/":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r("2kYt"),l=r("fL1z"),o=r("XApm"),c=r("R3BP"),n=r("EM62");let a=(()=>{class e{}return e.NGRID_PLUGIN=Object(o.s)({id:c.a},c.b),e.\u0275mod=n.Rb({type:e}),e.\u0275inj=n.Qb({factory:function(t){return new(t||e)},imports:[[i.c,l.s,o.i]]}),e})()},j2aY:function(e,t,r){"use strict";r.r(t),r.d(t,"GridFillerExampleModule",(function(){return x}));var i=r("D57K"),l=r("2kYt"),o=r("XApm"),c=r("WNo/"),n=r("cc5W"),a=r("D0EO"),s=r("JRn2"),b=r("EM62"),d=r("Ht9o"),p=r("R3BP"),u=r("CWpx"),h=r("bDyC");let g=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(o.p)().table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"},{prop:"email",minWidth:250,width:"250px"},{prop:"language",headerType:"language"}).build(),this.ds=Object(o.q)().onTrigger(()=>this.datasource.getPeople(0,3)).create()}};return e.\u0275fac=function(t){return new(t||e)(b.Tb(s.DemoDataSource))},e.\u0275cmp=b.Nb({type:e,selectors:[["pbl-grid-filler-example"]],decls:3,vars:2,consts:[[1,"filler-table-container"],["blockUi","","vScrollAuto","",3,"dataSource","columns"],["filter",""]],template:function(e,t){1&e&&(b.Zb(0,"div",0),b.Zb(1,"pbl-ngrid",1),b.Ub(2,"pbl-demo-action-row",2),b.Yb(),b.Yb()),2&e&&(b.Gb(1),b.sc("dataSource",t.ds)("columns",t.columns))},directives:[d.a,p.b,u.b,h.a],styles:[".filler-table-container{padding:16px;height:400px;background:#90ee90}.filler-table-container pbl-ngrid{height:100%}.filler-table-container .pbl-ngrid-space-fill{background:#add8e6}"],encapsulation:2,changeDetection:0}),e=Object(i.a)([Object(n.e)("pbl-grid-filler-example",{title:"Grid Filler (Virtual Scroll Auto)"})],e),e})(),f=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(o.p)().table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"},{prop:"email",minWidth:250,width:"250px"},{prop:"language",headerType:"language"}).build(),this.ds=Object(o.q)().onTrigger(()=>this.datasource.getPeople(0,3)).create()}};return e.\u0275fac=function(t){return new(t||e)(b.Tb(s.DemoDataSource))},e.\u0275cmp=b.Nb({type:e,selectors:[["pbl-grid-filler-fixed-virtual-scroll-example"]],decls:3,vars:2,consts:[[1,"filler-table-container"],["blockUi","","vScrollFixed","",3,"dataSource","columns"],["filter",""]],template:function(e,t){1&e&&(b.Zb(0,"div",0),b.Zb(1,"pbl-ngrid",1),b.Ub(2,"pbl-demo-action-row",2),b.Yb(),b.Yb()),2&e&&(b.Gb(1),b.sc("dataSource",t.ds)("columns",t.columns))},directives:[d.a,p.b,u.b,h.a],styles:[".filler-table-container{padding:16px;height:400px;background:#90ee90}.filler-table-container pbl-ngrid{height:100%}.filler-table-container .pbl-ngrid-space-fill{background:#add8e6}"],encapsulation:2,changeDetection:0}),e=Object(i.a)([Object(n.e)("pbl-grid-filler-fixed-virtual-scroll-example",{title:"Grid Filler (Virtual Scroll Fixed)"})],e),e})(),m=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(o.p)().table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"},{prop:"email",minWidth:250,width:"250px"},{prop:"language",headerType:"language"}).build(),this.ds=Object(o.q)().onTrigger(()=>this.datasource.getPeople(0,3)).create()}};return e.\u0275fac=function(t){return new(t||e)(b.Tb(s.DemoDataSource))},e.\u0275cmp=b.Nb({type:e,selectors:[["pbl-grid-filler-disabled-example"]],decls:3,vars:2,consts:[[1,"filler-table-container"],["blockUi","","noFiller","",3,"dataSource","columns"],["filter",""]],template:function(e,t){1&e&&(b.Zb(0,"div",0),b.Zb(1,"pbl-ngrid",1),b.Ub(2,"pbl-demo-action-row",2),b.Yb(),b.Yb()),2&e&&(b.Gb(1),b.sc("dataSource",t.ds)("columns",t.columns))},directives:[d.a,p.b,h.a],styles:[".filler-table-container{padding:16px;height:400px;background:#90ee90}.filler-table-container pbl-ngrid{height:100%}.filler-table-container .pbl-ngrid-space-fill{background:#add8e6}"],encapsulation:2,changeDetection:0}),e=Object(i.a)([Object(n.e)("pbl-grid-filler-disabled-example",{title:"Grid Filler Disabled"})],e),e})(),k=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(o.p)().table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"},{prop:"email",minWidth:250,width:"250px"},{prop:"language",headerType:"language"}).build(),this.ds=Object(o.q)().onTrigger(()=>this.datasource.getPeople(0,3)).create()}};return e.\u0275fac=function(t){return new(t||e)(b.Tb(s.DemoDataSource))},e.\u0275cmp=b.Nb({type:e,selectors:[["pbl-grid-filler-no-virtual-scroll-example"]],decls:3,vars:2,consts:[[1,"filler-table-container"],["blockUi","","vScrollNone","",3,"dataSource","columns"],["filter",""]],template:function(e,t){1&e&&(b.Zb(0,"div",0),b.Zb(1,"pbl-ngrid",1),b.Ub(2,"pbl-demo-action-row",2),b.Yb(),b.Yb()),2&e&&(b.Gb(1),b.sc("dataSource",t.ds)("columns",t.columns))},directives:[d.a,p.b,u.b,h.a],styles:[".filler-table-container{padding:16px;height:400px;background:#90ee90}.filler-table-container pbl-ngrid{height:100%}.filler-table-container .pbl-ngrid-space-fill{background:#add8e6}"],encapsulation:2,changeDetection:0}),e=Object(i.a)([Object(n.e)("pbl-grid-filler-no-virtual-scroll-example",{title:"Grid Filler No Virtual Scroll"})],e),e})(),x=(()=>{let e=class{};return e.\u0275mod=b.Rb({type:e}),e.\u0275inj=b.Qb({factory:function(t){return new(t||e)},imports:[[l.c,a.a,o.i,c.a]]}),e=Object(i.a)([Object(n.a)(g,f,m,k)],e),e})()}}]);