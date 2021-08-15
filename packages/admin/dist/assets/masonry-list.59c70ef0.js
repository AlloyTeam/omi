import{i as t,W as e,t as a,h as o,s as i,b as c}from"./vendor.0f99a6f8.js";import"./index.esm.97087572.js";import"./add-comment-rounded.c7d3f93b.js";import"./add-ic-call-rounded.6288f6c7.js";import{e as d,M as s}from"./masonry.aa00edac.js";var r,n,l,u={exports:{}};
/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */r=u,n="undefined"!=typeof window?window:t,l=function(t,e){var a=t.jQuery,o=t.console;function i(t,e){for(var a in e)t[a]=e[a];return t}var c=Array.prototype.slice;function d(t,e,s){if(!(this instanceof d))return new d(t,e,s);var r,n=t;"string"==typeof t&&(n=document.querySelectorAll(t)),n?(this.elements=(r=n,Array.isArray(r)?r:"object"==typeof r&&"number"==typeof r.length?c.call(r):[r]),this.options=i({},this.options),"function"==typeof e?s=e:i(this.options,e),s&&this.on("always",s),this.getImages(),a&&(this.jqDeferred=new a.Deferred),setTimeout(this.check.bind(this))):o.error("Bad element for imagesLoaded "+(n||t))}d.prototype=Object.create(e.prototype),d.prototype.options={},d.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},d.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&s[e]){for(var a=t.querySelectorAll("img"),o=0;o<a.length;o++){var i=a[o];this.addImage(i)}if("string"==typeof this.options.background){var c=t.querySelectorAll(this.options.background);for(o=0;o<c.length;o++){var d=c[o];this.addElementBackgroundImages(d)}}}};var s={1:!0,9:!0,11:!0};function r(t){this.img=t}function n(t,e){this.url=t,this.element=e,this.img=new Image}return d.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var a=/url\((['"])?(.*?)\1\)/gi,o=a.exec(e.backgroundImage);null!==o;){var i=o&&o[2];i&&this.addBackground(i,t),o=a.exec(e.backgroundImage)}},d.prototype.addImage=function(t){var e=new r(t);this.images.push(e)},d.prototype.addBackground=function(t,e){var a=new n(t,e);this.images.push(a)},d.prototype.check=function(){var t=this;function e(e,a,o){setTimeout((function(){t.progress(e,a,o)}))}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach((function(t){t.once("progress",e),t.check()})):this.complete()},d.prototype.progress=function(t,e,a){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&o&&o.log("progress: "+a,t,e)},d.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},r.prototype=Object.create(e.prototype),r.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},r.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},r.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},n.prototype=Object.create(r.prototype),n.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},n.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},n.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},d.makeJQueryPlugin=function(e){(e=e||t.jQuery)&&((a=e).fn.imagesLoaded=function(t,e){return new d(this,t,e).jqDeferred.promise(a(this))})},d.makeJQueryPlugin(),d},r.exports?r.exports=l(n,d.exports):n.imagesLoaded=l(n,n.EvEmitter);var m=u.exports,p=Object.defineProperty,g=Object.getOwnPropertyDescriptor;let h=class extends e{installed(){const t=new s(this.grid,{gutter:10});m(this.rootNode,(()=>{setTimeout((()=>{t.layout()}),0)}))}render(){const t=a`px-2 w-full md:w-6/12 lg:w-2/12`;return o("div",{class:a`px-4 py-4`},o("div",{ref:t=>this.grid=t},o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",actions:[{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}],hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",actions:[{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}],hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",actions:[{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}],hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",actions:[{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}],hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1199435000/VCG211199435578.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",actions:[{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}],hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",actions:[{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}],hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",actions:[{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}],hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",actions:[{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}],hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",actions:[{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}],hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1199435000/VCG211199435578.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",actions:[{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}],hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",actions:[{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}],hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",actions:[{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}],hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",actions:[{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}],hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",actions:[{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}],hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1199435000/VCG211199435578.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",actions:[{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}],hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",actions:[{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}],hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",actions:[{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}],hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",actions:[{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}],hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",actions:[{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}],hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1199435000/VCG211199435578.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",actions:[{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}],hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",actions:[{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}],hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",actions:[{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}],hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",actions:[{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}],hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",actions:[{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}],hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1199435000/VCG211199435578.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",actions:[{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}],hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",actions:[{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}],hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",actions:[{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}],hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",actions:[{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}],hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",actions:[{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}],hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1199435000/VCG211199435578.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("o-card",{class:a`${t}`,title:"Action card",size:"large",id:"myActionC",actions:[{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}],hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description")))),o("img",{style:"width:0;height:0;",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1199435000/VCG211199435578.jpg/thumb"}),o("img",{style:"width:0;height:0;",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"})))}};h.css=[i.target,"\n  o-card {\n    margin-bottom: 10px;\n  }"],h=((t,e,a,o)=>{for(var i,c=o>1?void 0:o?g(e,a):e,d=t.length-1;d>=0;d--)(i=t[d])&&(c=(o?i(e,a,c):i(c))||c);return o&&c&&p(e,a,c),c})([c("masonry-list")],h);export{h as default};
