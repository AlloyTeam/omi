import{_ as e}from"./index.2fa1f90c.js";import{W as t,h as a,t as i,s as n,b as s}from"./vendor.0f99a6f8.js";import"./index.4a911311.js";import"./index.0b36f5de.js";import"./index.esm.52ffc1e2.js";import"./index.esm.360b5627.js";var d=Object.defineProperty,r=Object.getOwnPropertyDescriptor;let o=class extends t{constructor(){super(...arguments),this.dataSource=[{id:1,name:"xwang",age:18,address:"Tencent"},{id:2,name:"dntzhang",age:12,address:"Tencent",$config:{bgColor:"rgb(247 176 176 / 32%)"}},{id:3,name:"lucy",age:12,address:"Tencent"},{id:4,name:"john",age:12,address:"Tencent",$config:{bgColor:"rgb(230 162 60 / 34%)"}},{id:5,name:"tim",age:12,address:"Tencent"},{id:6,name:"tim",age:12,address:"Tencent"},{id:7,name:"tim",age:12,address:"Tencent"},{id:8,name:"tim",age:12,address:"Tencent"},{id:9,name:"xwang",age:18,address:"Tencent"},{id:10,name:"dntzhang",age:12,address:"Tencent",$config:{bgColor:"rgb(247 176 176 / 32%)"}},{id:11,name:"lucy",age:12,address:"Tencent"},{id:12,name:"john",age:12,address:"Tencent",$config:{bgColor:"rgb(230 162 60 / 34%)"}},{id:13,name:"tim",age:12,address:"Tencent"},{id:14,name:"tim",age:12,address:"Tencent"},{id:15,name:"tim",age:12,address:"Tencent"},{id:16,name:"tim",age:12,address:"Tencent"}],this.columns=[{title:"ID",render:e=>a("strong",null,e.id)},{title:"Name",width:120,key:"name",editable:!0},{title:"Age",width:90,key:"age",editable:!0},{title:"Address",width:290,key:"address",editable:!0},{title:"操作",align:"right",render:e=>a("o-tooltip",{content:"删除"+e.name},a("o-icon-delete",{"data-item-id":e.id,onClick:this.onClick,style:"cursor:pointer;font-size:20px;"}))}],this.paging=!0,this.pageSize=5,this.pageIndex=0,this.filterData=[],this.change=e=>{this.pageIndex=e.detail,this.renderTable()},this.onClick=e=>{this.table.deleteRowById(e.currentTarget.dataset.itemId)},this.exportExcel=()=>{e((()=>import("./export-excel.d56ae470.js")),["assets/export-excel.d56ae470.js","assets/vendor.0f99a6f8.js","assets/___vite-browser-external_commonjs-proxy.47331efa.js"]).then((e=>{e.exportTableToExcel(this.table.rootNode.querySelector("table"))}))}}renderTable(){this.filterData=this.dataSource.slice(this.pageIndex*this.pageSize,this.pageIndex*this.pageSize+this.pageSize),this.update()}installed(){this.renderTable()}deleteItemById(e){const t=this.dataSource.indexOf(this.dataSource.find((t=>t.id===e)));-1!==t&&this.dataSource.splice(t,1),this.update()}render(){return a("div",{class:i`pl-0.5`},a("div",{class:i`relative h-10 text-right`},a("o-button",{class:i`relative top-2 right-2`,size:"mini",onClick:this.exportExcel},"导出Excel")),a("div",{class:i`px-2`},a("o-table",{ref:e=>this.table=e,checkbox:!1,stripe:!1,border:!1,compact:!1,columns:this.columns,dataSource:this.filterData}),a("div",{class:i`mt-3 text-right`},a("o-pagination",{total:this.dataSource.length,"current-page":this.pageIndex,"page-size":this.pageSize,onchange:this.change}))))}};o.css=n.target,o=((e,t,a,i)=>{for(var n,s=i>1?void 0:i?r(t,a):t,o=e.length-1;o>=0;o--)(n=e[o])&&(s=(i?n(t,a,s):n(s))||s);return i&&s&&d(t,a,s),s})([s("inline-editing")],o);export{o as default};
