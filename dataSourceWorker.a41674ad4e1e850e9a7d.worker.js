!function(e){self.webpackChunk=function(t,n){for(var s in n)e[s]=n[s];for(;t.length;)r[t.pop()]=1};var t={},r={0:1};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.e=function(e){var t=[];return t.push(Promise.resolve().then((function(){r[e]||importScripts(n.p+""+({}[e]||e)+"."+{1:"8bf86210346122d33895"}[e]+".worker.js")}))),Promise.all(t)},n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,(function(t){return e[t]}).bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/ngrid/",n(n.s="RX7a")}({RX7a:function(e,t,r){"use strict";function n(){return r.e(1).then(r.t.bind(null,"Mrh4",7))}r.r(t),r.d(t,"DatasourceStore",(function(){return o})),Error;class s{constructor(){this.customers=[],this.people=[],this.sellers=[]}reset(...e){for(const t of e)this[t]=[]}getCustomersSync(e=500){return this.customers.slice(0,e)}getCustomers(e=1e3,t=500){return this.wait(e).then(()=>n()).then(e=>{if(this.customers.length<t)for(let r=this.customers.length;r<t;r++){const t={id:r+1,name:e.name.findName(),country:e.address.countryCode(),jobTitle:e.name.jobTitle(),accountId:e.finance.account(),accountType:e.finance.accountName(),currencyCode:e.finance.currencyCode(),primeAccount:e.random.boolean(),balance:e.random.number({min:-5e4,max:5e4,precision:2}),creditScore:e.random.number(4)+1,monthlyBalance:Array.from(new Array(12)).map(()=>e.random.number({min:-15e3,max:15e3,precision:2}))};this.customers.push(t)}return this.customers.slice(0,t)})}getPeopleSync(e=500){return this.people.slice(0,e)}getPeople(e=1e3,t=500){return this.wait(e).then(()=>n()).then(e=>{if(this.people.length<t)for(let r=this.people.length;r<t;r++){const t={id:r,name:e.name.findName(),email:e.internet.email(),gender:e.random.arrayElement(["Male","Female"]),country:e.address.countryCode(),birthdate:e.date.past().toISOString(),bio:e.lorem.paragraph(),language:"EN",lead:e.random.boolean(),balance:e.random.number({min:-2e4,max:2e4,precision:2}),settings:{background:e.internet.color(),timezone:"UTC",emailFrequency:e.random.arrayElement(["Daily","Weekly","Yearly","Often","Seldom","Never"]),avatar:e.image.avatar()},lastLoginIp:e.internet.ip()};this.people.push(t)}return this.people.slice(0,t)})}getSellersSync(e=500){return this.sellers.slice(0,e)}getSellers(e=1e3,t=500){return this.wait(e).then(()=>n()).then(e=>{if(this.sellers.length<t)for(let r=this.sellers.length;r<t;r++){const t={id:r,name:e.name.findName(),company:e.company.companyName(),department:e.commerce.department(),country:e.address.countryCode(),email:e.internet.email(),sales:e.random.number({min:0,max:2e5,precision:2}),rating:e.random.number(4)+1,feedback:e.random.number({min:5,max:100}),address:[e.address.streetAddress(),e.address.city(),e.address.stateAbbr(),e.address.zipCode()].join(", ")};this.sellers.push(t)}return this.sellers.slice(0,t)})}wait(e){return new Promise(t=>{setTimeout(t,e)})}}class o{constructor(){this.store=new s}onMessage(e){const{data:t,ports:r}=e;if(!t||!r||!r.length)return;const n=r[0];let s;switch(t.action){case"getCustomers":case"getPeople":case"getSellers":const e=t.data;s=this.store[t.action](e.delay,e.limit);break;case"reset":this.store.reset(...t.data.type)}s&&s.then(e=>n.postMessage(e)).catch(e=>n.postMessage(function(e,t=!0){const r={error:{name:e.name,message:e.message}};return t&&(r.error.stack=e.stack),r}(e)))}}const a=new o;addEventListener("message",e=>{a.onMessage(e)}),postMessage("ready")}});