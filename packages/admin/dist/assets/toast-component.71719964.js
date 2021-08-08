import{W as e,t as n,h as s,n as o,p as i,q as t,u as c,d,e as a,s as r,b as l}from"./vendor.7e82e17e.js";import"./admin-docs.3ef702b6.js";import"./index.733411a9.js";import"./container.3c9ccf83.js";var m=Object.defineProperty,u=Object.getOwnPropertyDescriptor;let p=class extends e{installed(){}render(){return n`px-2 w-full md:w-6/12`,s("code-demo-container",null,s("code-demo",{class:n``,title:"基本",describe:"最简单的 Loading",code:"```js\n//显示 Loading\nshowLoading('加载中')\n\nsetTimeout(() => {\n  //隐藏 Loading\n  hideLoading()\n}, 2000)\n```\n"},s("div",{slot:"demo",class:n`px-5 py-5`},s("o-button",{size:"mini",onclick:e=>{d(),setTimeout((()=>{a()}),2e3)}},"显示 Loading 提示"))),s("code-demo",{title:"不同尺寸",describe:"支持传入 size 控制大小",code:"```js\n//显示 Success\nshowSuccess('支持成功')\n\nsetTimeout(() => {\n  //隐藏 Success\n  hideSuccess()\n}, 2000)\n```\n"},s("div",{slot:"demo",class:n`px-5 py-5`},s("o-button",{size:"mini",onclick:e=>{t("支付成功"),setTimeout((()=>{c()}),2e3)}},"显示 Success 提示"))),s("code-demo",{title:"不同颜色",describe:"支持传入 color 控制颜色",code:"```js\n//显示 Loading\nshowWarning('加载中')\n\nsetTimeout(() => {\n  //隐藏 Loading\n  hideWarning()\n}, 2000)\n```\n"},s("div",{slot:"demo",class:n`px-5 py-5`},s("o-button",{size:"mini",onclick:e=>{o("支付失败"),setTimeout((()=>{i()}),2e3)}},"显示 Warning 提示"))))}};p.css=r.target,p=((e,n,s,o)=>{for(var i,t=o>1?void 0:o?u(n,s):n,c=e.length-1;c>=0;c--)(i=e[c])&&(t=(o?i(n,s,t):i(t))||t);return o&&t&&m(n,s,t),t})([l("toast-component")],p);export{p as default};
