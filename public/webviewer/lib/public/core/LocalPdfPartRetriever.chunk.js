/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[8],{559:function(xa,ta,n){n.r(ta);var qa=n(0);xa=n(54);var na=n(477),oa=n(260),ha=n(27),la=window;n=function(){function ia(z){var aa=this;this.yva=function(r){return r&&("image"===r.type.split("/")[0].toLowerCase()||r.name&&!!r.name.match(/.(jpg|jpeg|png|gif)$/i))};this.file=z;this.Ova=new Promise(function(r){return Object(qa.b)(aa,void 0,void 0,function(){var h;return Object(qa.d)(this,function(f){switch(f.label){case 0:return this.yva(this.file)?
[4,Object(oa.b)(z)]:[3,2];case 1:h=f.ba(),this.file=ha.q?new Blob([h],{type:z.type}):new File([h],null===z||void 0===z?void 0:z.name,{type:z.type}),f.label=2;case 2:return r(!0),[2]}})})})}ia.prototype.getFileData=function(z){var aa=this,r=new FileReader;r.onload=function(h){aa.trigger(ia.Events.DOCUMENT_LOADING_PROGRESS,[h.loaded,h.loaded]);z(new Uint8Array(h.target.result))};r.onprogress=function(h){h.lengthComputable&&aa.trigger(ia.Events.DOCUMENT_LOADING_PROGRESS,[h.loaded,0<h.total?h.total:0])};
r.readAsArrayBuffer(this.file)};ia.prototype.getFile=function(){return Object(qa.b)(this,void 0,Promise,function(){return Object(qa.d)(this,function(z){switch(z.label){case 0:return[4,this.Ova];case 1:return z.ba(),la.da.isJSWorker?[2,this.file.path]:[2,this.file]}})})};ia.Events={DOCUMENT_LOADING_PROGRESS:"documentLoadingProgress"};return ia}();Object(xa.a)(n);Object(na.a)(n);Object(na.b)(n);ta["default"]=n}}]);}).call(this || window)