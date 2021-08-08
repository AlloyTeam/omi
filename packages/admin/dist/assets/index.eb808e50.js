var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=(t,n,s)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s;import{r,s as l,W as d,a as c,h,t as m,b as f,c as u,d as p,e as b,f as _}from"./vendor.7e82e17e.js";let g;const x={},w=function(e,t){if(!t||0===t.length)return e();if(void 0===g){const e=document.createElement("link").relList;g=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`./${e}`)in x)return;x[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":g,t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e()))};var k=Object.defineProperty,v=Object.getOwnPropertyDescriptor;let y=class extends d{constructor(){super(...arguments),this.items=[{label:"中文",value:"zh"},{label:"English",value:"en"}],this.isShowColorPicker=!1,this.toggle=e=>{this.isShowColorPicker=!this.isShowColorPicker,this.update(),e.stopPropagation()},this.onColorChange=e=>{this.store.themeColor=e.detail.color,c("primary",e.detail.color)},this.onMenuChange=e=>{this.store.isLeftPanelClosed=e.detail,this.store.isLeftPanelClosed?this.store.openLeftPanel():this.store.closeLeftPanel()},this.onItemSelect=e=>{this.store.setLocals(e.detail.value)}}install(){w((()=>import("./index.esm.5ad36e3b.js")),["assets/index.esm.5ad36e3b.js","assets/vendor.7e82e17e.js"]),window.addEventListener("click",(()=>{this.isShowColorPicker=!1,this.update()}))}render(){return h("div",{class:m`bg-gray-100 h-12 text-left border-b-1`},h("div",{class:m`flex justify-between`},h("div",{class:m`flex flex-row p-1 order-1`},h("o-hamburger-menu",{class:m`mt-1.5 ml-1 scale-75 flex-row`,color:"rgb(107, 114, 128)",active:!this.store.isLeftPanelClosed,onchange:this.onMenuChange}),h("img",{class:m`w-8 m-1 ml-3 flex-row`,src:"./assets/logo.a690a1ac.svg",alt:"logo"}),h("h1",{class:m`ml-3 leading-10 text-gray-500 flex-row whitespace-nowrap`},"OMI ADMIN"),h("div",{class:m`flex-row mt-1.5 ml-3`},h("o-select",{css:"\n            .o-select .o-input__inner {\n              width: 117px;\n            ",size:"mini","onitem-select":this.onItemSelect,value:this.store.locale,items:this.items}))),h("div",{class:m`flex flex-row text-gray-500 gap-x-4 items-center order-3 p-1 mr-3`},h("div",{class:m`flex-row hidden md:block`},h("div",{class:m`cursor-pointer`,onClick:this.toggle,style:{color:this.store.themeColor}},h("o-icon-palette",null),this.store.localeMap.base.Theme),this.isShowColorPicker&&h("o-color-picker",{onchange:this.onColorChange,onClick:e=>e.stopPropagation(),class:m`absolute right-0 z-50`,save:!1,preview:!1,button:!1,clear:!1,width:"300px"})),h("o-badge",{content:"99",class:m`flex-row cursor-pointer hidden md:block`},h("o-icon-notifications",null)),h("o-icon-settings",{class:m`flex-row cursor-pointer hidden md:block`}),h("a",{href:"https://github.com/Tencent/omi",target:"_blank",class:m`flex-row`},h("o-icon-git-hub",null)),h("o-avatar",{class:m`flex-row cursor-pointer`,src:"https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"}))))}};y.css=l.target,y=((e,t,n,s)=>{for(var i,o=s>1?void 0:s?v(t,n):t,a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s?i(t,n,o):i(o))||o);return s&&o&&k(t,n,o),o})([f("layout-header")],y);var E=Object.defineProperty,P=Object.getOwnPropertyDescriptor;let T=class extends d{constructor(){super(...arguments),this.onNodeClick=e=>{if(!e.detail.children){const t=this.store.tabs.find((t=>t.id===e.detail.id));t?this.store.tabsActiveIndex=this.store.tabs.indexOf(t):(this.store.tabs.push({label:e.detail.label,closeable:!1,id:e.detail.id,href:e.detail.href}),this.store.tabsActiveIndex=this.store.tabs.length-1)}e.detail.md&&e.detail.md.then((e=>{this.store.markdown=e.default}))}}install(){w((()=>import("./emoji-people.55d0c309.js").then((function(e){return e.e}))),["assets/emoji-people.55d0c309.js","assets/vendor.7e82e17e.js"]),w((()=>import("./ballot.5a8b2074.js").then((function(e){return e.b}))),["assets/ballot.5a8b2074.js","assets/vendor.7e82e17e.js"])}installed(){this.store.ui.leftPanel=this}render(){return h("div",{style:"height:calc(100vh - 3rem)",class:m`text-left border-r-1 relative`},h("o-tree",{class:m`pb-40`,"onnode-click":this.onNodeClick,data:this.store.treeData}))}};T.css=[l.target,".menu {\n  position: absolute;\n  cursor: pointer;\n  background-color: #acb7c1;\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n  width: 8px;\n  bottom: 0;\n  margin-top: -25px;\n  right: -8px;\n  z-index: 999;\n}\n\n.menu svg {\n  font-size: 10px;\n  display: inline-block;\n  position: relative;\n  top: -2px;\n  right: 1px;\n}\n\n.menu.closed svg {\n  transform: rotate(180deg);\n}"],T=((e,t,n,s)=>{for(var i,o=s>1?void 0:s?P(t,n):t,a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s?i(t,n,o):i(o))||o);return s&&o&&E(t,n,o),o})([f("layout-left-panel")],T);var O=Object.defineProperty,L=Object.getOwnPropertyDescriptor;let I=class extends d{constructor(){super(...arguments),this.onChange=e=>{const t=this.store.tabs.find((t=>t.id===e.detail.tab.id));this.store.tabsActiveIndex=this.store.tabs.indexOf(t),this.store.selectTreeNodeById(e.detail.tab.id),location.hash=e.detail.tab.href},this.onRemove=e=>{let t=e.detail.index;this.store.tabsActiveIndex===e.detail.index?(t-=1,t<0&&(t=0),this.store.tabsActiveIndex=t):this.store.tabsActiveIndex>t&&(this.store.tabsActiveIndex-=1);const n=this.store.tabs[this.store.tabsActiveIndex];this.store.selectTreeNodeById(n.id),location.hash=n.href}}installed(){this.store.ui.baseLayout=this,window.addEventListener("resize",(()=>{this.update()}))}getMainContentWidth(){return window.innerWidth-(this.store.isLeftPanelClosed?0:256)+"px"}render(){return h(h.f,null,h("layout-header",{class:m`h-12 block`}),h("div",{class:m`flex flex-row`},h("layout-left-panel",{class:m`${this.store.isLeftPanelClosed?"sm:w-0 -translate-x-full":"sm:w-64 w-3/4 translate-x-0"} flex-none overflow-x-hidden overflow-y-auto bg-white z-50 transition-all duration-500 ease-in-out  sm:relative fixed `}),h("layout-container",{class:m`flex-1 flex-grow`},h("div",{class:m`overflow-auto`,style:{width:this.getMainContentWidth()}},h("o-tabs",{closable:!0,type:"card",list:this.store.tabs,onchange:this.onChange,onremove:this.onRemove,"active-index":this.store.tabsActiveIndex})),h("div",{style:{height:"calc(100vh - 90px)",width:this.getMainContentWidth()},class:m`overflow-auto`},h("slot",null)))))}};I.css=[l.target,"\n.is-closed{\n  width: 0;\n  transform: translateX(-100%);\n}\n"],I=((e,t,n,s)=>{for(var i,o=s>1?void 0:s?L(t,n):t,a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s?i(t,n,o):i(o))||o);return s&&o&&O(t,n,o),o})([f("basic-layout")],I);var j=Object.defineProperty,D=Object.getOwnPropertyDescriptor;let A=class extends d{render(){return h("div",null,h("slot",null))}};A.css=l.target,A=((e,t,n,s)=>{for(var i,o=s>1?void 0:s?D(t,n):t,a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s?i(t,n,o):i(o))||o);return s&&o&&j(t,n,o),o})([f("layout-container")],A);var C=Object.defineProperty,R=Object.getOwnPropertyDescriptor;let V=class extends d{render(){return h("div",{class:m``},h("div",{class:m`w-4/5 sm:w-96 m-auto pt-52`},h("svg",{version:"1.1",viewBox:"0 0 800 600",xmlns:"http://www.w3.org/2000/svg"},h("symbol",{id:"text"},h("text",{x:"2%",y:"35%",class:"text"},"Welcome to"),h("text",{x:"69%",y:"35%",class:"text"},"Admin")),h("symbol",{id:"omi"},h("text",{x:"46%",y:"35%",class:"text"},"OMI")),h("g",null,h("use",{"xlink:href":"#omi",class:"use-omi"}),h("use",{"xlink:href":"#omi",class:"use-omi"}),h("use",{"xlink:href":"#omi",class:"use-omi"}),h("use",{"xlink:href":"#omi",class:"use-omi"}),h("use",{"xlink:href":"#omi",class:"use-omi"})),h("g",null,h("use",{"xlink:href":"#text",class:"use-text"}),h("use",{"xlink:href":"#text",class:"use-text"}),h("use",{"xlink:href":"#text",class:"use-text"}),h("use",{"xlink:href":"#text",class:"use-text"}),h("use",{"xlink:href":"#text",class:"use-text"})))))}};V.css=[l.target,'.text {\n  font-size: 60px;\n  font-family: cursive;\n}\n\n\n/* line 19, ../../src/css/source/_chat.scss */\nsvg {\n  width: 100%;\n  height: 100%;\n}\n\n/* line 27, ../../src/css/source/_chat.scss */\n.use-text {\n  fill: none;\n  stroke: white;\n  stroke-dashoffset: 35%;\n  stroke-dasharray: 0 87.5%;\n  stroke-width: 2px;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss "#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"*/\n.use-text:nth-child(1) {\n  stroke: #777e7a;\n  animation: animation1 8s infinite ease-in-out forwards;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss */\n.use-text:nth-child(2) {\n  stroke: #777e7a;\n  animation: animation2 8s infinite ease-in-out forwards;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss */\n.use-text:nth-child(3) {\n  stroke: #777e7a;\n  animation: animation3 8s infinite ease-in-out forwards;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss */\n.use-text:nth-child(4) {\n  stroke: #777e7a;\n  animation: animation4 8s infinite ease-in-out forwards;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss */\n.use-text:nth-child(5) {\n  stroke: #777e7a;\n  animation: animation5 8s infinite ease-in-out forwards;\n\n}\n\n.use-omi {\n  fill: none;\n  stroke: white;\n  stroke-dashoffset: 35%;\n  stroke-dasharray: 0 87.5%;\n  stroke-width: 2px;\n\n}\n\n.use-omi:nth-child(1) {\n  stroke: #07c160;\n  animation: animation1 8s infinite ease-in-out forwards;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss */\n.use-omi:nth-child(2) {\n  stroke: #07c160;\n  animation: animation2 8s infinite ease-in-out forwards;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss */\n.use-omi:nth-child(3) {\n  stroke: #07c160;\n  animation: animation3 8s infinite ease-in-out forwards;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss */\n.use-omi:nth-child(4) {\n  stroke: #07c160;\n  animation: animation4 8s infinite ease-in-out forwards;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss */\n.use-omi:nth-child(5) {\n  stroke: #07c160;\n  animation: animation5 8s infinite ease-in-out forwards;\n\n}\n\n@keyframes animation1 {\n  50% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 7%;\n  }\n\n  70% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 7%;\n  }\n}\n\n@keyframes animation2 {\n  50% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 14%;\n  }\n\n  70% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 14%;\n  }\n}\n\n@keyframes animation3 {\n  50% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 21%;\n  }\n\n  70% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 21%;\n  }\n}\n\n@keyframes animation4 {\n  50% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 28%;\n  }\n\n  70% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 28%;\n  }\n}\n\n@keyframes animation5 {\n  50% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 35%;\n  }\n\n  70% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 35%;\n  }\n}\n'],V=((e,t,n,s)=>{for(var i,o=s>1?void 0:s?R(t,n):t,a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s?i(t,n,o):i(o))||o);return s&&o&&C(t,n,o),o})([f("admin-main-welcome")],V);let M=0;function B(){return M+=1,M}const N=e=>[{label:e.base.Demo1,icon:"description",href:"#/docs/demo1",md:w((()=>import("./demo.d6adbe13.js")),[]),id:B()},{label:e.base.Demo2,icon:"description",href:"#/docs/demo2",md:w((()=>import("./demo2.00871e17.js")),[]),id:B()}],z=(e,t)=>({label:t.base.Introduction,href:"#/docs/introduction",md:w("zh"===e?()=>import("./introduction.9a134439.js"):()=>import("./introduction.6a898cf8.js"),[]),id:B()}),W=(e,t)=>({label:t.base.CustomTheme,href:"#/docs/theme",md:w("zh"===e?()=>import("./theme.1a268001.js"):()=>import("./theme.b40226bb.js"),[]),id:B()});var S=Object.defineProperty,F=Object.getOwnPropertyDescriptor;let $=class extends d{constructor(){super(...arguments),this.data={tagName:"admin-main-welcome"}}getMdByName(e,t){const n=`#/docs/${e}`,s=t.find((e=>e.href===n));if(s)return s.md;for(let i=0,o=t.length;i<o;i++)if(t[i].children){const e=this.findNodeByHash(n,t[i].children);if(e)return e.md}}async transitionTo(e){p(),await this.transition.leave(),this.data.tagName=e,this.update(),await this.transition.enter(),b()}installed(){var e;this.store.ui.myApp=this,e=this,r("/",(()=>{e.update()})),r("/welcome",(()=>{e.transitionTo("admin-main-welcome")})),r("/table/basic",(()=>{w((()=>import("./basic-table.e7eae34a.js")),["assets/basic-table.e7eae34a.js","assets/vendor.7e82e17e.js","assets/index.esm.662e757c.js","assets/index.esm.52f5a97b.js"]).then((()=>e.transitionTo("basic-table")))})),r("/dashboard",(()=>{w((()=>import("./admin-dashboard.f25aceb6.js")),["assets/admin-dashboard.f25aceb6.js","assets/vendor.7e82e17e.js","assets/index.esm.662e757c.js","assets/index.esm.18b4abc9.js"]).then((()=>e.transitionTo("admin-dashboard")))})),r("/md-editor",(()=>{w((()=>import("./md-editor.15a328a2.js")),["assets/md-editor.15a328a2.js","assets/md-editor.b217a3ba.css","assets/vendor.7e82e17e.js"]).then((()=>e.transitionTo("md-editor")))})),r("/table/edit",(()=>{w((()=>import("./inline-editing.df1f59cd.js")),["assets/inline-editing.df1f59cd.js","assets/vendor.7e82e17e.js","assets/index.esm.662e757c.js","assets/index.esm.18b4abc9.js","assets/index.esm.52f5a97b.js"]).then((()=>e.transitionTo("inline-editing")))})),r("/docs/:name",(t=>{e.getMdByName(t.params.name,e.store.treeData).then((t=>{e.payload={mdContent:t.default},w((()=>import("./admin-docs.3ef702b6.js")),["assets/admin-docs.3ef702b6.js","assets/admin-docs.26e696b4.css","assets/vendor.7e82e17e.js"]).then((()=>e.transitionTo("admin-docs")))}))})),r("/table/pagination",(()=>{w((()=>import("./pagination-table.41a16ce5.js")),["assets/pagination-table.41a16ce5.js","assets/vendor.7e82e17e.js","assets/index.esm.662e757c.js","assets/index.esm.18b4abc9.js","assets/index.esm.52f5a97b.js"]).then((()=>e.transitionTo("pagination-table")))})),r("/form",(()=>{w((()=>import("./admin-form.7ea8b917.js")),["assets/admin-form.7ea8b917.js","assets/vendor.7e82e17e.js","assets/index.esm.13df1728.js","assets/index.es.2f1d8385.js"]).then((()=>e.transitionTo("admin-form")))})),r("/step-form",(()=>{w((()=>import("./step-form.f42c7a1e.js")),["assets/step-form.f42c7a1e.js","assets/vendor.7e82e17e.js","assets/index.esm.13df1728.js","assets/index.es.2f1d8385.js"]).then((()=>e.transitionTo("step-form")))})),r("/comment",(()=>{w((()=>import("./admin-comment.3ecf2290.js")),["assets/admin-comment.3ecf2290.js","assets/admin-comment.cc2186d8.css","assets/vendor.7e82e17e.js","assets/index.esm.13df1728.js"]).then((()=>e.transitionTo("admin-comment")))})),r("/icon",(()=>{w((()=>import("./admin-icon.f90d6780.js")),["assets/admin-icon.f90d6780.js","assets/vendor.7e82e17e.js"]).then((()=>e.transitionTo("admin-icon")))})),r("/error",(()=>{w((()=>import("./status-error.302f3541.js")),["assets/status-error.302f3541.js","assets/vendor.7e82e17e.js"]).then((()=>e.transitionTo("status-error")))})),r("/loading-component",(()=>{w((()=>import("./loading-component.6ded0e87.js")),["assets/loading-component.6ded0e87.js","assets/vendor.7e82e17e.js","assets/admin-docs.3ef702b6.js","assets/admin-docs.26e696b4.css","assets/index.733411a9.js","assets/container.3c9ccf83.js"]).then((()=>e.transitionTo("loading-component")))})),r("/toast-component",(()=>{w((()=>import("./toast-component.71719964.js")),["assets/toast-component.71719964.js","assets/vendor.7e82e17e.js","assets/admin-docs.3ef702b6.js","assets/admin-docs.26e696b4.css","assets/index.733411a9.js","assets/container.3c9ccf83.js"]).then((()=>e.transitionTo("toast-component")))})),r("/card-component",(()=>{w((()=>import("./card-component.14f79ba2.js")),["assets/card-component.14f79ba2.js","assets/vendor.7e82e17e.js","assets/add-ic-call-rounded.8b455c4e.js","assets/admin-docs.3ef702b6.js","assets/admin-docs.26e696b4.css","assets/index.733411a9.js","assets/container.3c9ccf83.js"]).then((()=>e.transitionTo("card-component")))})),r("/time-picker-component",(()=>{w((()=>import("./time-picker-component.5ccfa545.js")),["assets/time-picker-component.5ccfa545.js","assets/vendor.7e82e17e.js","assets/admin-docs.3ef702b6.js","assets/admin-docs.26e696b4.css","assets/index.733411a9.js"]).then((()=>e.transitionTo("time-picker-component")))})),r("/slider-component",(()=>{w((()=>import("./slider-component.d919d3f2.js")),["assets/slider-component.d919d3f2.js","assets/vendor.7e82e17e.js","assets/index.esm.13df1728.js","assets/admin-docs.3ef702b6.js","assets/admin-docs.26e696b4.css","assets/index.733411a9.js","assets/container.3c9ccf83.js"]).then((()=>e.transitionTo("slider-component")))})),r("/progress-component",(()=>{w((()=>import("./progress-component.d8ff37cd.js")),["assets/progress-component.d8ff37cd.js","assets/vendor.7e82e17e.js","assets/admin-docs.3ef702b6.js","assets/admin-docs.26e696b4.css","assets/index.733411a9.js","assets/masonry.3270080d.js"]).then((()=>e.transitionTo("progress-component")))})),r("/mind-map",(()=>{w((()=>import("./mind-map.f4f7490e.js")),["assets/mind-map.f4f7490e.js","assets/vendor.7e82e17e.js"]).then((()=>e.transitionTo("mind-map")))})),r("/warning",(()=>{w((()=>import("./status-warning.a0e504e9.js")),["assets/status-warning.a0e504e9.js","assets/vendor.7e82e17e.js"]).then((()=>e.transitionTo("status-warning")))})),r("/results/browser-incompatible",(()=>{w((()=>import("./browser-incompatible.0c6c7663.js")),["assets/browser-incompatible.0c6c7663.js","assets/vendor.7e82e17e.js"]).then((()=>e.transitionTo("browser-incompatible")))})),r("/results/network-error",(()=>{w((()=>import("./network-error.2aab47c7.js")),["assets/network-error.2aab47c7.js","assets/vendor.7e82e17e.js"]).then((()=>e.transitionTo("network-error")))})),r("/results/not-found",(()=>{w((()=>import("./not-found.59e58f1e.js")),["assets/not-found.59e58f1e.js","assets/vendor.7e82e17e.js"]).then((()=>e.transitionTo("not-found")))})),r("/results/permission-denied",(()=>{w((()=>import("./permission-denied.4f353e1f.js")),["assets/permission-denied.4f353e1f.js","assets/vendor.7e82e17e.js"]).then((()=>e.transitionTo("permission-denied")))})),r("/results/server-error",(()=>{w((()=>import("./server-error.41becb15.js")),["assets/server-error.41becb15.js","assets/vendor.7e82e17e.js"]).then((()=>e.transitionTo("server-error")))})),r("/masonry-list",(()=>{w((()=>import("./masonry-list.e65902ef.js")),["assets/masonry-list.e65902ef.js","assets/vendor.7e82e17e.js","assets/add-ic-call-rounded.8b455c4e.js","assets/masonry.3270080d.js"]).then((()=>e.transitionTo("masonry-list")))})),r("*",(function(){console.log("not found")})),location.hash&&this.routeTo(location.hash)}findNodeByHash(e,t){const n=t.find((t=>t.href===e));if(n)return n;for(let s=0,i=t.length;s<i;s++)if(t[s].children){const n=this.findNodeByHash(e,t[s].children);if(n)return n}}routeTo(e){const t=this.findNodeByHash(e,this.store.treeData);if(this.store.selectTreeNodeById(t.id),!t.children){const e=this.store.tabs.find((e=>e.id===t.id));e?this.store.tabsActiveIndex=this.store.tabs.indexOf(e):(this.store.tabs.push({label:t.label,closeable:!1,id:t.id,href:t.href}),this.store.tabsActiveIndex=this.store.tabs.length-1)}t.md&&t.md.then((e=>{this.store.markdown=e.default})),_()}render(){return h("basic-layout",null,h("o-transition",{ref:e=>this.transition=e,appear:!0,name:"fade"},h(this.data.tagName,(e=((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&a(e,n,t[n]);if(s)for(var n of s(t))o.call(t,n)&&a(e,n,t[n]);return e})({},this.payload),r={class:m`block`},t(e,n(r))))));var e,r}};$.css=[l.target,".fade-leave-to,\n.fade-enter {\n  opacity: 0;\n  transform: translateX(15px);\n}\n\n.fade-leave-active,\n.fade-enter-active {\n  transition: all 300ms ease-in;\n}\n"],$=((e,t,n,s)=>{for(var i,o=s>1?void 0:s?F(t,n):t,a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s?i(t,n,o):i(o))||o);return s&&o&&S(t,n,o),o})([f("my-app")],$),new class{constructor(e){this.themeColor="#07c160",this.installed=e.installed,this.locale=e.locale,this.isLeftPanelClosed=window.innerWidth<640,this.ignoreAttrs=!0,this.ui={},this.markdown="",this.html="",this.localeMap={},this.setLocals(this.locale,(()=>{this.tabs=[{label:this.localeMap.base.Welcome,href:"#/welcome",closable:!1,id:2}],this.tabsActiveIndex=0})),this.isInstalled=!1}setLocals(e,t){this.locale=e,function(e){switch(e){case"./l10n/en/base.ts":return w((()=>import("./base.d90b9393.js")),[]);case"./l10n/zh/base.ts":return w((()=>import("./base.569c9d88.js")),[]);default:return new Promise((function(t,n){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}(`./l10n/${e}/base.ts`).then((n=>{this.localeMap=n,t&&t(),this.treeData=[{label:n.base.ManagerWorkbench,sign:"●",expanded:!0,id:B(),icon:"ac-unit-outlined",children:[{sign:"M",label:n.base.WelcomePage,icon:"emoji-people",color:"#07c160",selected:!0,href:"#/welcome",id:B()},{label:n.base.Dashboard,icon:"pie-chart",href:"#/dashboard",id:B()},{label:n.base.BasicTable,icon:"grid-on",href:"#/table/basic",id:B()},{label:n.base.TableDeleteAnimation,icon:"grid-on",href:"#/table/pagination",id:B()},{label:n.base.InlineEditing,icon:"grid-on",href:"#/table/edit",id:B()},{label:n.base.Form,expanded:!0,id:B(),href:"#/form",icon:"list-alt"},{label:n.base.StepForm,expanded:!0,id:B(),href:"#/step-form",icon:"list-alt"},{label:n.base.MarkdownEditor,icon:"grid-on",href:"#/md-editor",id:B()},{label:n.base.MasonryList,expanded:!0,id:B(),href:"#/masonry-list",icon:"dashboard"}]},{label:n.base.Results,expanded:!0,id:B(),icon:"ac-unit-outlined",children:[{label:n.base.BrowserIncompatible,id:B(),icon:"ac-unit-outlined",href:"#/results/browser-incompatible"},{label:n.base.NetworkError,id:B(),icon:"ac-unit-outlined",href:"#/results/network-error"},{label:n.base.NotFound,id:B(),icon:"ac-unit-outlined",href:"#/results/not-found"},{label:n.base.PermissionDenied,id:B(),icon:"ac-unit-outlined",href:"#/results/permission-denied"},{label:n.base.ServerError,id:B(),icon:"ac-unit-outlined",href:"#/results/server-error"}]},{label:n.base.Components,expanded:!0,id:B(),icon:"ac-unit-outlined",children:[z(e,n),W(e,n),{label:n.base.MaterialIcons,expanded:!0,id:B(),href:"#/icon"},{label:n.base.Loading,id:B(),icon:"ac-unit-outlined",href:"#/loading-component"},{label:n.base.Toast,id:B(),icon:"ac-unit-outlined",href:"#/toast-component"},{label:n.base.Card,id:B(),icon:"ac-unit-outlined",href:"#/card-component"},{label:n.base.Progress,id:15,icon:"ac-unit-outlined",href:"#/progress-component"}]},{label:n.base.Others,sign:"●",expanded:!0,id:B(),icon:"ac-unit-outlined",children:[{sign:"90020",label:n.base.Error,icon:"error",color:"#F56C6C",href:"#/error",id:B()},{sign:"993",label:n.base.Warning,icon:"warning",color:"#E6A23C",href:"#/warning",id:B()},{sign:"993",label:n.base.Comment,icon:"comment",href:"#/comment",id:B()},{label:n.base.ExternalLink,icon:"insert-link",href:"https://github.com/Tencent/omi",id:B(),target:"_blank"},{label:n.base.MindMap,icon:"ac-unit",href:"#/mind-map",id:B()}]},{label:n.base.MarkdownDocs,expanded:!0,id:B(),icon:"ac-unit-outlined",children:N(n)},{label:n.base.ManyThanksTo,id:B(),href:"#/thanks",icon:"people-alt"}],this.tabs.forEach((e=>{e.label=this.getTabLabelById(e.id)})),this.isInstalled?this.ui.myApp.update():(this.installed(this),this.isInstalled=!0)}))}getTabLabelById(e){const t=this.treeData.find((t=>t.id===e));if(t)return t.label;for(let n=0,s=this.treeData.length;n<s;n++){const t=this.treeData[n].children.find((t=>t.id===e));if(t)return t.label}}toggleLeftPanel(){this.isLeftPanelClosed=!this.isLeftPanelClosed,this.ui.baseLayout.update()}openLeftPanel(){this.isLeftPanelClosed=!1,this.ui.baseLayout.update()}closeLeftPanel(){this.isLeftPanelClosed=!0,this.ui.baseLayout.update()}selectTreeNodeById(e){this.treeData.forEach((t=>{this.deselect(t,e)}))}deselect(e,t){e.selected=!1,e.children&&e.children.forEach((e=>{e.selected=!1,this.deselect(e,t)})),e.id===t&&(e.selected=!0)}}({locale:"zh",installed(e){u(h("my-app",{name:"Omi"}),"#root",e)}});export{w as _};
