(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1431:function(e,t,n){var o=n(30),a=n(1432);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var r={insert:function(e){if(!window.isApryseWebViewerWebComponent)return void document.head.appendChild(e);let t;t=document.getElementsByTagName("apryse-webviewer"),t.length||(t=function e(t,n=document){const o=[];return n.querySelectorAll(t).forEach(e=>o.push(e)),n.querySelectorAll("*").forEach(n=>{n.shadowRoot&&o.push(...e(t,n.shadowRoot))}),o}("apryse-webviewer"));const n=[];for(let o=0;o<t.length;o++){const a=t[o];if(0===o)a.shadowRoot.appendChild(e),e.onload=function(){n.length>0&&n.forEach(t=>{t.innerHTML=e.innerHTML})};else{const t=e.cloneNode(!0);a.shadowRoot.appendChild(t),n.push(t)}}},singleton:!1};o(a,r);e.exports=a.locals||{}},1432:function(e,t,n){(t=e.exports=n(31)(!1)).push([e.i,":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.BookmarksPanel{display:flex;flex-direction:column;flex:1}.BookmarksPanel .bookmark-switch{-webkit-font-smoothing:antialiased;margin-top:var(--padding-medium);padding-left:4px}.BookmarksPanel .bookmark-switch label{font-size:11px}.BookmarksPanel .bookmark-outline-single-container{margin-top:var(--padding-medium)}.BookmarksPanel .msg-no-bookmark-outline{margin-top:var(--padding)}",""]),t.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"}},1460:function(e,t,n){"use strict";n.r(t);n(46),n(34),n(130),n(23),n(7),n(24),n(50),n(57),n(33),n(38),n(88),n(19),n(12),n(14),n(13),n(9),n(10),n(11),n(16),n(15),n(20),n(18);var o=n(0),a=n.n(o),r=n(6),i=n(391),l=(n(138),n(83),n(17)),c=n.n(l),u=n(1),m=n(4),s=n.n(m),d=n(47),b=n(71),k=n(1372),p=n(200);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,a,r,i,l=[],c=!0,u=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(o=r.call(n)).done)&&(l.push(o.value),l.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var g={text:s.a.string.isRequired,label:s.a.string.isRequired,defaultLabel:s.a.string,pageIndex:s.a.number.isRequired,isAdding:s.a.bool,isMultiSelectionMode:s.a.bool,setSelected:s.a.func,onSave:s.a.func.isRequired,onRemove:s.a.func,onCancel:s.a.func,panelSelector:s.a.string},y=function(e){var t=e.text,n=e.label,r=e.defaultLabel,l=e.pageIndex,m=e.isAdding,s=e.isMultiSelectionMode,h=e.setSelected,g=e.onSave,y=e.onRemove,E=e.onCancel,w=e.panelSelector,v=f(Object(i.a)(),1)[0],x=f(Object(o.useState)(!1),2),S=x[0],O=x[1],A=f(Object(o.useState)(!1),2),C=A[0],N=A[1],B=f(Object(o.useState)(t),2),T=B[0],j=B[1],I=f(Object(o.useState)(!1),2),R=I[0],P=I[1],M=f(Object(o.useState)(void 0),2),_=M[0],D=M[1],K=Object(o.useRef)(),L=function(){return!T||t===T},H=function(){O(!1),g(""===T.trim()?v("message.untitled"):T)},U=function(){O(!1),S&&j(t),m&&E()},W=function(e){u.a.setCurrentPage(e+1)};return Object(o.useEffect)((function(){T!==t&&j(t)}),[t]),Object(o.useEffect)((function(){(m||S)&&(K.current.focus(),K.current.select()),N(!m&&!S)}),[S]),a.a.createElement(b.a,{className:c()({"bookmark-outline-single-container":!0,editing:m||S,default:C,hover:R}),tabIndex:0,onKeyDown:function(e){"Enter"===e.key&&W(l)},onClick:function(e){C&&1===e.detail&&D(setTimeout((function(){W(l)}),300))},onDoubleClick:function(){C&&clearTimeout(_)}},s&&a.a.createElement(p.a,{type:"checkbox",className:"bookmark-outline-checkbox",id:"bookmark-checkbox-".concat(l+1),onClick:function(e){return e.stopPropagation()},onChange:function(e){return h(l,e.target.checked)}}),a.a.createElement("div",{className:"bookmark-outline-label-row"},a.a.createElement("div",{className:"bookmark-outline-label"},m||S?n:r),C&&a.a.createElement(a.a.Fragment,null,s&&a.a.createElement(d.a,{className:"bookmark-outline-more-button",dataElement:"bookmark-more-button-".concat(l),img:"icon-pencil-line",onClick:function(e){e.stopPropagation(),O(!0)},tabIndex:-1}),!s&&a.a.createElement(d.a,{className:"bookmark-outline-more-button",dataElement:"bookmark-more-button-".concat(w,"-").concat(l),img:"icon-tool-more",onClick:function(e){e.stopPropagation(),P(!0)},tabIndex:-1}),R&&a.a.createElement(k.a,{type:"bookmark",anchorButton:"bookmark-more-button-".concat(w,"-").concat(l),shouldDisplayDeleteButton:!0,onClosePopup:function(){return P(!1)},onRenameClick:function(){P(!1),O(!0)},onDeleteClick:function(){P(!1),y(l)}}),a.a.createElement("div",{className:"bookmark-outline-text bookmark-text-input",onDoubleClick:function(){return O(!0)}},t)),(m||S)&&a.a.createElement(a.a.Fragment,null,a.a.createElement("input",{type:"text",name:"bookmark",ref:K,className:"bookmark-outline-input bookmark-text-input",placeholder:v("component.bookmarkTitle"),"aria-label":v("action.name"),value:T,onKeyDown:function(e){"Enter"===e.key&&(e.stopPropagation(),(m||S&&!L())&&H()),"Escape"===e.key&&U()},onChange:function(e){return j(e.target.value)}}),a.a.createElement("div",{className:"bookmark-outline-editing-controls"},a.a.createElement(d.a,{className:"bookmark-outline-cancel-button",label:v("action.cancel"),onClick:U}),m&&a.a.createElement(d.a,{className:"bookmark-outline-save-button",label:v("action.add"),isSubmitType:!0,onClick:H}),S&&a.a.createElement(d.a,{className:"bookmark-outline-save-button",label:v("action.save"),isSubmitType:!0,disabled:L(),onClick:H})))))};y.propTypes=g;var E=y,w=n(5),v=n(2),x=n(3);n(1368),n(1431);function S(e){return function(e){if(Array.isArray(e))return C(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||A(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,a,r,i,l=[],c=!0,u=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(o=r.call(n)).done)&&(l.push(o.value),l.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}(e,t)||A(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){if(e){if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var N=function(e){var t,n=e.panelSelector,l=O(Object(r.e)((function(e){return[x.a.isElementDisabled(e,w.a.BOOKMARK_PANEL),x.a.getBookmarks(e),x.a.getCurrentPage(e)-1,x.a.getPageLabels(e),x.a.isBookmarkIconShortcutVisible(e)]}),r.c),5),c=l[0],m=l[1],s=l[2],k=l[3],f=l[4],h=O(Object(o.useState)(!1),2),g=h[0],y=h[1],A=O(Object(o.useState)(!1),2),C=A[0],N=A[1],B=O(Object(o.useState)([]),2),T=B[0],j=B[1],I=O(Object(i.a)(),1)[0],R=Object(r.d)();Object(o.useEffect)((function(){f&&!c?u.a.setBookmarkIconShortcutVisibility(!0):u.a.setBookmarkIconShortcutVisibility(!1)}),[c,f]);var P=Object.keys(m).map((function(e){return parseInt(e,10)}));Object(o.useEffect)((function(){T.forEach((function(e){P.includes(e)||j(T.filter((function(t){return t!==e})))})),0===P.length&&N(!1)}),[m]);var M=function(e){var t=I("warning.deleteBookmark.title"),n={message:I("warning.deleteBookmark.message"),title:t,onConfirm:function(){e.forEach((function(e){return R(v.a.removeBookmark(e))})),j([])},confirmBtnText:I("action.delete")};R(v.a.showWarningMessage(n))};return c?null:a.a.createElement("div",{className:"Panel BookmarksPanel bookmark-outline-panel ".concat(n),"data-element":w.a.BOOKMARK_PANEL},a.a.createElement("div",{className:"bookmark-outline-panel-header"},a.a.createElement("div",{className:"header-title"},I("component.bookmarksPanel")),!C&&a.a.createElement(d.a,{className:"bookmark-outline-control-button",dataElement:w.a.BOOKMARK_MULTI_SELECT,label:I("action.edit"),disabled:g||0===P.length,onClick:function(){return N(!0)}}),C&&a.a.createElement(d.a,{className:"bookmark-outline-control-button",dataElement:w.a.BOOKMARK_MULTI_SELECT,label:I("option.bookmarkOutlineControls.done"),disabled:g,onClick:function(){N(!1),j([])}})),a.a.createElement(p.a,{dataElement:w.a.BOOKMARK_SHORTCUT_OPTION,type:"checkbox",isSwitch:!0,id:"bookmark-view-option",className:"bookmark-switch",label:I("message.viewBookmark"),checked:f,onChange:function(e){return R(v.a.setBookmarkIconShortcutVisibility(e.target.checked))}}),!g&&0===P.length&&a.a.createElement("div",{className:"msg msg-no-bookmark-outline"},I("message.noBookmarks")),a.a.createElement("div",{className:"bookmark-outline-row"},g&&a.a.createElement(E,{isAdding:!0,label:"".concat(I("component.bookmarkPage")," ").concat(k[s]," - ").concat(I("component.bookmarkTitle")),text:null!==(t=m[s])&&void 0!==t?t:"",pageIndex:s,onSave:function(e){R(v.a.addBookmark(s,e)),y(!1)},onCancel:function(){return y(!1)},panelSelector:n}),P.map((function(e){return a.a.createElement(E,{key:e,panelSelector:n,isMultiSelectionMode:C,label:"".concat(I("component.bookmarkPage")," ").concat(k[e]," - ").concat(I("component.bookmarkTitle")),defaultLabel:"".concat(I("component.bookmarkPage")," ").concat(k[e]),text:m[e],pageIndex:e,onSave:function(t){return R(v.a.editBookmark(e,t))},onRemove:function(e){return M([e])},setSelected:function(e,t){T.find((function(t){return t===e}))?t||j(T.filter((function(t){return t!==e}))):t&&j([].concat(S(T),[e]))}})}))),a.a.createElement(b.a,{className:"bookmark-outline-footer",dataElement:w.a.BOOKMARK_ADD_NEW_BUTTON_CONTAINER},C?a.a.createElement(a.a.Fragment,null,a.a.createElement(d.a,{className:"multi-selection-button",img:"icon-menu-add",disabled:T.length>0||!!m[s]||g,onClick:function(){return y(!0)}}),a.a.createElement(d.a,{className:"multi-selection-button",img:"icon-delete-line",disabled:0===T.length,onClick:function(){return M(T)}})):a.a.createElement(d.a,{className:"bookmark-outline-control-button add-new-button",img:"icon-menu-add",dataElement:w.a.BOOKMARK_ADD_NEW_BUTTON,label:"".concat(I("action.add")," ").concat(I("component.bookmarkPanel")),disabled:g||!!m[s],onClick:function(){return y(!0)}})))};t.default=N}}]);
//# sourceMappingURL=49.chunk.js.map