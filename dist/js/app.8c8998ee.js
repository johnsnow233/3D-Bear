(function(){"use strict";var n={5540:function(n,e,t){var i=t(9242),r=t(3396),o=t(4870),a=t(1114),c=t(4198),u=t(4543),d={__name:"App",setup(n){const e=(0,o.iH)(null);return(0,r.bv)((()=>{const n=new a.xsS,t=new a.cPb(75,window.innerWidth/window.innerHeight,.1,1e3);t.position.set(1.5,1,1.5),t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix();const i=new a.dpR,r=i.load("./assets/imgs/050.jpg");r.mapping=a.Bf4,n.background=r,n.environment=r;const o=new a.Mig(16777215,1);n.add(o);const d=new c.E;d.load("./assets/model/bear.gltf",(e=>{console.log(e);const t=e.scene.children[0];t.material=new a.xoR({color:16777215,envMap:r,refractionRatio:.7,reflectivity:.99}),n.add(t)}));const s=new a.CP7;s.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",(()=>{s.setSize(window.innerWidth,window.innerHeight),t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix()})),e.value.appendChild(s.domElement);const f=new u.z(t,s.domElement);f.enableDamping=!0;const l=()=>{f.update(),s.render(n,t),requestAnimationFrame(l)};l()})),(n,t)=>((0,r.wg)(),(0,r.iD)("div",{class:"canvasContainer",ref_key:"canvasContainer",ref:e},null,512))}};const s=d;var f=s;(0,i.ri)(f).mount("#app")}},e={};function t(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return n[i](o,o.exports,t),o.exports}t.m=n,function(){var n=[];t.O=function(e,i,r,o){if(!i){var a=1/0;for(s=0;s<n.length;s++){i=n[s][0],r=n[s][1],o=n[s][2];for(var c=!0,u=0;u<i.length;u++)(!1&o||a>=o)&&Object.keys(t.O).every((function(n){return t.O[n](i[u])}))?i.splice(u--,1):(c=!1,o<a&&(a=o));if(c){n.splice(s--,1);var d=r();void 0!==d&&(e=d)}}return e}o=o||0;for(var s=n.length;s>0&&n[s-1][2]>o;s--)n[s]=n[s-1];n[s]=[i,r,o]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,i){var r,o,a=i[0],c=i[1],u=i[2],d=0;if(a.some((function(e){return 0!==n[e]}))){for(r in c)t.o(c,r)&&(t.m[r]=c[r]);if(u)var s=u(t)}for(e&&e(i);d<a.length;d++)o=a[d],t.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return t.O(s)},i=self["webpackChunkdiamond_bear"]=self["webpackChunkdiamond_bear"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(5540)}));i=t.O(i)})();
//# sourceMappingURL=app.8c8998ee.js.map