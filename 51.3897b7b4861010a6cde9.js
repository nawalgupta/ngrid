(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{R3BP:function(t,e,i){"use strict";i.d(e,"a",(function(){return c})),i.d(e,"b",(function(){return l}));var o=i("9bRT"),r=i("5XID"),s=i("XApm"),n=i("EM62");const c="blockUi";let l=(()=>{class t{constructor(t,e){this.grid=t,this._blockInProgress=!1,this._removePlugin=e.setPlugin(c,this),t.registry.changes.subscribe(t=>{for(const e of t)switch(e.type){case"blocker":this.setupBlocker()}}),e.events.subscribe(t=>{if("onDataSource"===t.kind){const{prev:e,curr:i}=t;e&&s.u.unrx.kill(this,e),i.onSourceChanging.pipe(s.u.unrx(this,i)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!0,this.setupBlocker())}),i.onSourceChanged.pipe(s.u.unrx(this,i)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!1,this.setupBlocker())})}})}get blockUi(){return this._blockUi}set blockUi(t){let e=Object(r.c)(t);!e||"auto"!==t&&""!==t||(e="auto"),Object(o.a)(t)&&this._blockUi!==t?(Object(o.a)(this._blockUi)&&s.u.unrx.kill(this,this._blockUi),this._blockUi=t,t.pipe(s.u.unrx(this,this._blockUi)).subscribe(t=>{this._blockInProgress=t,this.setupBlocker()})):this._blockUi!==e&&(this._blockUi=e,"auto"!==e&&(this._blockInProgress=e,this.setupBlocker()))}ngOnDestroy(){s.u.unrx.kill(this),this._removePlugin(this.grid)}setupBlocker(){if(this._blockInProgress){if(!this._blockerEmbeddedVRef){const t=this.grid.registry.getSingle("blocker");t&&(this._blockerEmbeddedVRef=this.grid.createView("afterContent",t.tRef,{$implicit:this.grid}),this._blockerEmbeddedVRef.detectChanges())}}else this._blockerEmbeddedVRef&&(this.grid.removeView(this._blockerEmbeddedVRef,"afterContent"),this._blockerEmbeddedVRef=void 0)}}return t.\u0275fac=function(e){return new(e||t)(n.Tb(s.e),n.Tb(s.l))},t.\u0275dir=n.Ob({type:t,selectors:[["pbl-ngrid","blockUi",""]],inputs:{blockUi:"blockUi"},exportAs:["blockUi"]}),t})()},"WNo/":function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var o=i("2kYt"),r=i("fL1z"),s=i("XApm"),n=i("R3BP"),c=i("EM62");let l=(()=>{class t{}return t.NGRID_PLUGIN=Object(s.s)({id:n.a},n.b),t.\u0275mod=c.Rb({type:t}),t.\u0275inj=c.Qb({factory:function(e){return new(e||t)},imports:[[o.c,r.s,s.i]]}),t})()},j6NM:function(t,e,i){"use strict";i.r(e),i.d(e,"CopySelectionExampleModule",(function(){return w}));var o=i("D57K"),r=i("XApm"),s=i("WNo/"),n=i("xVbo"),c=i("2kYt"),l=i("EM62");class a{constructor(t,e){this._document=e;const i=this._textarea=this._document.createElement("textarea"),o=i.style;o.opacity="0",o.position="absolute",o.left=o.top="-999em",i.setAttribute("aria-hidden","true"),i.value=t,this._document.body.appendChild(i)}copy(){const t=this._textarea;let e=!1;try{if(t){const i=this._document.activeElement;t.select(),t.setSelectionRange(0,t.value.length),e=this._document.execCommand("copy"),i&&i.focus()}}catch(i){}return e}destroy(){const t=this._textarea;t&&(t.parentNode&&t.parentNode.removeChild(t),this._textarea=void 0)}}let u=(()=>{class t{constructor(t){this._document=t}copy(t){const e=this.beginCopy(t),i=e.copy();return e.destroy(),i}beginCopy(t){return new a(t,this._document)}}return t.\u0275fac=function(e){return new(e||t)(l.dc(c.e))},t.\u0275prov=Object(l.Pb)({factory:function(){return new t(Object(l.dc)(c.e))},token:t,providedIn:"root"}),t})();const d=/^mac/.test(navigator.platform.toLowerCase());let p=(()=>{class t{constructor(t,e,i){this.grid=t,this.injector=e,this.pluginCtrl=i,this.config=e.get(r.f),this.clipboard=e.get(u),this.init()}static create(e,i){const o=r.l.find(e);return new t(e,i,o)}ngOnDestroy(){r.u.unrx.kill(this),this._removePlugin(this.grid)}isCopyEvent(t){return!!(t instanceof KeyboardEvent&&"c"===t.key&&(!d&&t.ctrlKey||d&&t.metaKey))}doCopy(){const{cellSeparator:t,rowSeparator:e}=this.config.get("clipboard",{}),{rows:i,minIndex:o}=this.getSelectedRowData(this.grid);this.clipboard.copy(i.map(e=>e.slice(o).join(this.clpCellSep||t||"\t")).join(this.clpRowSep||e||"\n"))}getSelectedRowData(t){const{columnApi:e,contextApi:i}=t,o=new Map;let r=Number.MAX_SAFE_INTEGER;for(const n of i.selectedCells){const s=e.columns[n.colIndex];if(s){const c=e.renderIndexOf(s);if(c>-1){const e=i.findRowInCache(n.rowIdent).dataIndex,l=s.getValue(t.ds.source[e]),a=o.get(n.rowIdent)||[];a[c]=l,o.set(n.rowIdent,a),r=Math.min(r,c)}}}const s=Array.from(o.entries());return s.sort((t,e)=>i.findRowInCache(t[0]).dataIndex<i.findRowInCache(e[0]).dataIndex?-1:1),{minIndex:r,rows:s.map(t=>t[1])}}init(){this._removePlugin=this.pluginCtrl.setPlugin("clipboard",this),this.pluginCtrl.hasPlugin("targetEvents")||this.pluginCtrl.createPlugin("targetEvents"),this.pluginCtrl.getPlugin("targetEvents").keyDown.pipe(Object(n.a)(t=>this.isCopyEvent(t.source)),r.u.unrx(this)).subscribe(t=>this.doCopy())}}return t.\u0275fac=function(e){return new(e||t)(l.Tb(r.e),l.Tb(l.v),l.Tb(r.l))},t.\u0275dir=l.Ob({type:t,selectors:[["pbl-ngrid","clipboard",""]],inputs:{clpCellSep:"clpCellSep",clpRowSep:"clpRowSep"},exportAs:["pblNgridClipboard"]}),t})();var b=i("jOdJ"),h=i("/kex");let g=(()=>{class t{constructor(t,e){t||r.l.created.subscribe(t=>{if(!0===e.get("clipboard",{}).autoEnable){const e=t.controller;e.events.pipe(Object(n.a)(t=>"onInit"===t.kind),Object(b.a)()).subscribe(t=>{e.hasPlugin("clipboard")||e.createPlugin("clipboard")})}})}}return t.NGRID_PLUGIN=Object(r.s)({id:"clipboard",factory:"create"},p),t.\u0275mod=l.Rb({type:t}),t.\u0275inj=l.Qb({factory:function(e){return new(e||t)(l.dc(t,12),l.dc(r.f))},imports:[[c.c,r.i,h.a]]}),t})();var m=i("cc5W"),f=i("D0EO"),k=i("JRn2"),y=i("Ht9o");let _=(()=>{let t=class{constructor(t){this.datasource=t,this.columns=Object(r.p)().table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"},{prop:"bio"},{prop:"email",minWidth:250,width:"250px"},{prop:"language",headerType:"language"}).build(),this.ds=Object(r.q)().onTrigger(()=>this.datasource.getPeople(100,500)).create(),this.hideColumns=["bio"]}};return t.\u0275fac=function(e){return new(e||t)(l.Tb(k.DemoDataSource))},t.\u0275cmp=l.Nb({type:t,selectors:[["pbl-copy-selection-example"]],decls:1,vars:3,consts:[["clipboard","","focusMode","cell",3,"dataSource","columns","hideColumns"]],template:function(t,e){1&t&&l.Ub(0,"pbl-ngrid",0),2&t&&l.sc("dataSource",e.ds)("columns",e.columns)("hideColumns",e.hideColumns)},directives:[y.a,p],styles:[""],encapsulation:2,changeDetection:0}),t=Object(o.a)([Object(m.e)("pbl-copy-selection-example",{title:"Copy Selection"})],t),t})(),w=(()=>{let t=class{};return t.\u0275mod=l.Rb({type:t}),t.\u0275inj=l.Qb({factory:function(e){return new(e||t)},imports:[[f.a,r.i,s.a,g]]}),t=Object(o.a)([Object(m.a)(_)],t),t})()}}]);