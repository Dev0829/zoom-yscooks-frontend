(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Projects\zoom-yscooks\zoom-yscooks-frontend-20210729\src\main.ts */"zUnb");


/***/ }),

/***/ "5M3e":
/*!****************************************************************************!*\
  !*** ./src/app/modules/shared/components/feed-grid/feed-grid.component.ts ***!
  \****************************************************************************/
/*! exports provided: FeedGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedGridComponent", function() { return FeedGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-file-upload */ "7pIB");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");
/* harmony import */ var _components_delete_post_delete_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/delete-post/delete-post.component */ "MXCF");
/* harmony import */ var quill_emoji_dist_quill_emoji_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! quill-emoji/dist/quill-emoji.js */ "ah1v");
/* harmony import */ var quill_emoji_dist_quill_emoji_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(quill_emoji_dist_quill_emoji_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/shared.service */ "pkQQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _services_groups_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/groups.service */ "BzBs");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/popover */ "EDFS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-quill */ "CzEO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _directives_image_preview_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../directives/image-preview.directive */ "voxy");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "Mfq2");






















const _c0 = ["emptYmodal"];
const _c1 = ["templateGroupsModal"];
const _c2 = ["PDFmodal"];
function FeedGridComponent_div_2_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedGridComponent_div_2_div_7_div_1_Template_i_click_2_listener() { const item_r15 = ctx.$implicit; return item_r15.remove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", item_r15 == null ? null : item_r15._file);
} }
function FeedGridComponent_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FeedGridComponent_div_2_div_7_div_1_Template, 3, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.uploaderImage.queue);
} }
function FeedGridComponent_div_2_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedGridComponent_div_2_div_8_div_1_Template_i_click_2_listener() { const item_r18 = ctx.$implicit; return item_r18.remove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r18 == null ? null : item_r18.file == null ? null : item_r18.file.name, " ");
} }
function FeedGridComponent_div_2_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FeedGridComponent_div_2_div_8_div_1_Template, 3, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.uploaderVideo.queue);
} }
function FeedGridComponent_div_2_ng_container_10_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedGridComponent_div_2_ng_container_10_div_9_Template_input_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r21.addPdfUploader(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("uploader", ctx_r20.uploaderPdf);
} }
function FeedGridComponent_div_2_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedGridComponent_div_2_ng_container_10_Template_input_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.addImageUploader(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedGridComponent_div_2_ng_container_10_Template_input_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.addVideoUploader(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FeedGridComponent_div_2_ng_container_10_div_9_Template, 4, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " * max file size 250mb ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("uploader", ctx_r13.uploaderImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("uploader", ctx_r13.uploaderVideo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.user == null ? null : ctx_r13.user.isAdmin);
} }
function FeedGridComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "What\u00B4s new");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "quill-editor", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FeedGridComponent_div_2_Template_quill_editor_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.feed.text = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FeedGridComponent_div_2_div_7_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FeedGridComponent_div_2_div_8_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FeedGridComponent_div_2_ng_container_10_Template, 12, 3, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedGridComponent_div_2_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.checkGroupsModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Post ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isOpen", ctx_r0.popovers.post);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.feed.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.uploaderImage == null ? null : ctx_r0.uploaderImage.queue == null ? null : ctx_r0.uploaderImage.queue.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.uploaderVideo == null ? null : ctx_r0.uploaderVideo.queue == null ? null : ctx_r0.uploaderVideo.queue.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r0.uploaderImage == null ? null : ctx_r0.uploaderImage.queue == null ? null : ctx_r0.uploaderImage.queue.length) && !(ctx_r0.uploaderVideo == null ? null : ctx_r0.uploaderVideo.queue == null ? null : ctx_r0.uploaderVideo.queue.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.feed.text.length);
} }
function FeedGridComponent_div_3_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", "/profile/" + (item_r29 == null ? null : item_r29.user == null ? null : item_r29.user.uid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r29 == null ? null : item_r29.user == null ? null : item_r29.user.name);
} }
function FeedGridComponent_div_3_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r29 == null ? null : item_r29.user == null ? null : item_r29.user.name);
} }
function FeedGridComponent_div_3_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedGridComponent_div_3_div_5_ng_container_1_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.edit(item_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedGridComponent_div_3_div_5_ng_container_1_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.deleteFeed(item_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function FeedGridComponent_div_3_div_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedGridComponent_div_3_div_5_ng_container_2_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r46.checkGroupsModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedGridComponent_div_3_div_5_ng_container_2_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r48.cancelEditFeed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function FeedGridComponent_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FeedGridComponent_div_3_div_5_ng_container_1_Template, 3, 0, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FeedGridComponent_div_3_div_5_ng_container_2_Template, 3, 0, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r29 == null ? null : item_r29.postid) !== (ctx_r33.feedToEdit == null ? null : ctx_r33.feedToEdit.postid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r29 == null ? null : item_r29.postid) === (ctx_r33.feedToEdit == null ? null : ctx_r33.feedToEdit.postid));
} }
function FeedGridComponent_div_3_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedGridComponent_div_3_div_6_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx_r50.openReportModal(_r3, item_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FeedGridComponent_div_3_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "quill-editor", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FeedGridComponent_div_3_ng_container_10_Template_quill_editor_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r53.feedToEdit.text = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r35.feedToEdit.text);
} }
function FeedGridComponent_div_3_ng_container_11_ng_container_1_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 62);
} if (rf & 2) {
    const media_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", media_r56 == null ? null : media_r56.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", "/posts/" + item_r29.postid);
} }
function FeedGridComponent_div_3_ng_container_11_ng_container_1_video_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const media_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", media_r56 == null ? null : media_r56.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function FeedGridComponent_div_3_ng_container_11_ng_container_1_pdf_viewer_3_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pdf-viewer", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedGridComponent_div_3_ng_container_11_ng_container_1_pdf_viewer_3_Template_pdf_viewer_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const media_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r63.readPDF(media_r56); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const media_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", media_r56 == null ? null : media_r56.url)("page", 1)("fit-to-page", true)("show-all", false)("render-text", false);
} }
function FeedGridComponent_div_3_ng_container_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FeedGridComponent_div_3_ng_container_11_ng_container_1_img_1_Template, 1, 2, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FeedGridComponent_div_3_ng_container_11_ng_container_1_video_2_Template, 2, 1, "video", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FeedGridComponent_div_3_ng_container_11_ng_container_1_pdf_viewer_3_Template, 1, 5, "pdf-viewer", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const media_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", media_r56.type == "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", media_r56.type == "video");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", media_r56.type == "pdf");
} }
function FeedGridComponent_div_3_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FeedGridComponent_div_3_ng_container_11_ng_container_1_Template, 4, 3, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r29.media);
} }
function FeedGridComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FeedGridComponent_div_3_a_3_Template, 2, 2, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FeedGridComponent_div_3_a_4_Template, 2, 1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FeedGridComponent_div_3_div_5_Template, 3, 2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FeedGridComponent_div_3_div_6_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FeedGridComponent_div_3_ng_container_10_Template, 2, 1, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FeedGridComponent_div_3_ng_container_11_Template, 2, 1, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.user == null ? null : ctx_r1.user.uid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r1.user == null ? null : ctx_r1.user.uid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.user == null ? null : ctx_r1.user.uid) === (item_r29 == null ? null : item_r29.user == null ? null : item_r29.user.uid) || (ctx_r1.user == null ? null : ctx_r1.user.isAdmin));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.user == null ? null : ctx_r1.user.uid) && (ctx_r1.user == null ? null : ctx_r1.user.uid) !== (item_r29 == null ? null : item_r29.user == null ? null : item_r29.user.uid) && !(ctx_r1.user == null ? null : ctx_r1.user.isAdmin) && !(item_r29 == null ? null : item_r29.user == null ? null : item_r29.user.isAdmin));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", "/posts/" + item_r29.postid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r29.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r29 == null ? null : item_r29.postid) === (ctx_r1.feedToEdit == null ? null : ctx_r1.feedToEdit.postid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r29 == null ? null : item_r29.media == null ? null : item_r29.media.length);
} }
function FeedGridComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Report to admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedGridComponent_ng_template_6_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r68.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FeedGridComponent_ng_template_6_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r70.warning.text = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedGridComponent_ng_template_6_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r71.postReport(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Report ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedGridComponent_ng_template_6_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r72.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.warning.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r4.warning.text);
} }
function FeedGridComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FeedGridComponent_div_19_Template_input_ngModelChange_1_listener($event) { const item_r73 = ctx.$implicit; return item_r73.needToAdd = $event; })("change", function FeedGridComponent_div_19_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77); const item_r73 = ctx.$implicit; const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r76.checkGroupCheckbox(item_r73); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r73 = ctx.$implicit;
    const i_r74 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "checkbox-" + i_r74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r73.needToAdd);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", "checkbox-" + i_r74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r73.name, " ");
} }
function FeedGridComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedGridComponent_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r78.addGroups(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Create Post ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FeedGridComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedGridComponent_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r80.addGroups(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Edit Post ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FeedGridComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "pdf-viewer", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r10.pdfUrl)("fit-to-page", true);
} }
class FeedGridComponent {
    constructor(cookieService, sharedService, router, route, spinner, toastr, modalService, groupsService, sanitizer) {
        this.cookieService = cookieService;
        this.sharedService = sharedService;
        this.router = router;
        this.route = route;
        this.spinner = spinner;
        this.toastr = toastr;
        this.modalService = modalService;
        this.groupsService = groupsService;
        this.sanitizer = sanitizer;
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newComent = {};
        this.imageSelected = false;
        this.videoSelected = false;
        this.pdfSelected = false;
        this.feedToEdit = {
            text: '',
            mediaUrls: [],
            postid: null,
            groupids: [],
        };
        this.feed = {
            text: '',
            mediaUrls: [],
            postid: null,
            groupids: [],
        };
        this.warning = {
            text: '',
        };
        this.popovers = {
            post: false,
            invite: false,
        };
        this.allGroups = [];
        this.pdfUrl = '';
        if (this.cookieService.get('userProfile')) {
            this.user = JSON.parse(this.cookieService.get('userProfile'));
        }
        this.token = this.cookieService.get('token');
        this.getAllGroups();
    }
    ngOnInit() {
        if (this.cookieService.get('showFeedPopovers')) {
            this.popovers = { invite: true, post: true };
        }
    }
    ngOnDestroy() {
        if (this.cookieService.get('showFeedPopovers')) {
            this.cookieService.delete('showFeedPopovers');
        }
    }
    ngAfterViewInit() {
        if (this.cookieService.get('showFeedPopovers')) {
            this.popovers = { invite: true, post: true };
            this.emptYmodal.show();
            this.emptYmodal.onHide.subscribe(() => {
                this.popovers = { invite: false, post: false };
                this.cookieService.delete('showFeedPopovers');
            });
        }
    }
    addComent(feedId) {
        this.spinner.show();
        this.sharedService
            .addCommentToFeed(feedId, { text: this.newComent[feedId] })
            .subscribe((data) => {
            this.newComent[feedId] = '';
            this.changed.emit();
            this.spinner.hide();
        }, (error) => {
            this.spinner.hide();
            this.toastr.error('Error!');
        });
    }
    showAddFeed() {
        let show = false;
        if (this.user && this.user.isAdmin) {
            show = true;
        }
        else if (this.user &&
            !this.user.isAdmin && this.user.type === 'business') {
            show = true;
        }
        return show;
    }
    addFeed() {
        this.spinner.show();
        this.sharedService.createPost(this.feed).subscribe((data) => {
            this.feed = {
                text: '',
                mediaUrls: [],
                postid: null,
            };
            this.changed.emit();
            this.spinner.hide();
        }, (error) => {
            this.spinner.hide();
            this.toastr.error('error');
        });
        this.imageSelected = false;
        this.videoSelected = false;
        this.pdfSelected = false;
        this.uploaderImage = null;
        this.uploaderVideo = null;
        this.uploaderPdf = null;
    }
    addImageUploader() {
        if (!this.imageSelected) {
            this.uploaderImage = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({
                url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/media/upload-s3`,
                authToken: 'Bearer ' + this.token,
                authTokenHeader: 'Authorization',
                itemAlias: 'media',
            });
            this.imageSelected = true;
            this.uploaderImage.onAfterAddingFile = (item) => {
                item.withCredentials = false;
            };
        }
    }
    addVideoUploader() {
        if (!this.videoSelected) {
            this.uploaderVideo = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({
                url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/media/upload-s3`,
                authToken: 'Bearer ' + this.token,
                authTokenHeader: 'Authorization',
                itemAlias: 'media',
            });
            this.videoSelected = true;
            this.uploaderVideo.onAfterAddingFile = (item) => {
                item.withCredentials = false;
            };
        }
    }
    addPdfUploader() {
        if (!this.pdfSelected) {
            this.uploaderPdf = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({
                url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/media/upload-s3`,
                authToken: 'Bearer ' + this.token,
                authTokenHeader: 'Authorization',
                itemAlias: 'media',
            });
            this.pdfSelected = true;
            this.uploaderPdf.onAfterAddingFile = (item) => {
                item.withCredentials = false;
            };
        }
    }
    checkGroupsModal() {
        this.templateGroupsModal.show();
        // if (this.feedToEdit?.postid && this.feedToEdit.text) {
        //   this.saveEditedFeed();
        // } else {
        //   this.startUpload();
        // }
    }
    addGroups() {
        var _a;
        const gids = [];
        this.allGroups
            .filter((g) => g.needToAdd)
            .forEach((g) => {
            gids.push(g.groupid);
        });
        if (((_a = this.feedToEdit) === null || _a === void 0 ? void 0 : _a.postid) && this.feedToEdit.text) {
            this.feedToEdit.groupids = gids;
            this.saveEditedFeed();
        }
        else {
            this.feed.groupids = gids;
            this.startUpload();
        }
        this.templateGroupsModal.hide();
    }
    startUpload() {
        // if images
        if (this.uploaderImage && this.uploaderImage.queue.length) {
            this.spinner.show();
            const lenImg = this.uploaderImage.queue.length - 1;
            this.uploaderImage.uploadAll();
            this.uploaderImage.onSuccessItem = (fileItem, response) => {
                const res = JSON.parse(response);
                this.feed.mediaUrls.push({ url: res.url, type: 'image' });
                this.spinner.hide();
                this.addFeed();
            };
        }
        else if (this.uploaderVideo && this.uploaderVideo.queue.length) {
            this.spinner.show();
            const lenVideo = this.uploaderVideo.queue.length - 1;
            this.uploaderVideo.uploadAll();
            this.uploaderVideo.onSuccessItem = (fileItem, response) => {
                const res = JSON.parse(response);
                this.feed.mediaUrls.push({ url: res.url, type: 'video' });
                this.spinner.hide();
                this.addFeed();
            };
        }
        else if (this.uploaderPdf && this.uploaderPdf.queue.length) {
            this.spinner.show();
            const lenVideo = this.uploaderPdf.queue.length - 1;
            this.uploaderPdf.uploadAll();
            this.uploaderPdf.onSuccessItem = (fileItem, response) => {
                const res = JSON.parse(response);
                this.feed.mediaUrls.push({ url: res.url, type: 'pdf' });
                this.spinner.hide();
                this.addFeed();
            };
        }
        else {
            this.addFeed();
        }
    }
    edit(item) {
        this.feedToEdit = item;
    }
    deleteFeed(item) {
        this.deletePostComponent.openDeleteModal(item);
    }
    feedDeleted() {
        this.changed.emit();
    }
    deleteComent(feedIndex, coment) {
        this.spinner.show();
        const coments = this.data[feedIndex].comment.filter((c) => coment.commentid !== c.commentid);
        this.sharedService.deleteCommentFromFeed(coment.commentid).subscribe(data => {
            this.toastr.success('Comment deleted');
            this.data[feedIndex].comment = coments;
            this.spinner.hide();
        }, error => {
            this.spinner.hide();
        });
    }
    cancelEditFeed() {
        this.feedToEdit = {
            text: '',
            mediaUrls: [],
            postid: null,
            groupids: [],
        };
    }
    saveEditedFeed() {
        this.spinner.show();
        this.sharedService.editPost(this.feedToEdit).subscribe((res) => {
            this.cancelEditFeed();
            this.spinner.hide();
            this.toastr.success('Post edited');
            this.changed.emit();
        }, (error) => {
            this.spinner.hide();
            this.toastr.error('Error');
        });
    }
    postReport() {
        this.spinner.show();
        this.sharedService.createWarning(this.warning).subscribe((res) => {
            this.spinner.hide();
            this.toastr.success('Warning was sent');
            this.modalRef.hide();
            this.changed.emit();
        }, (error) => {
            this.spinner.hide();
            this.toastr.error('Error');
        });
    }
    openReportModal(template, item) {
        this.modalRef = this.modalService.show(template);
        this.warning.text = '';
        this.warning.postid = item.postid;
        this.warning.uid = this.user.uid;
    }
    getAllGroups() {
        this.spinner.show();
        this.groupsService.getAllGroups().subscribe((data) => {
            this.allGroups = data;
            this.allGroups.forEach((d) => {
                d.needToAdd = false;
            });
            this.spinner.hide();
        }, (error) => {
            this.spinner.hide();
        });
    }
    readPDF(media) {
        // console.log(media);
        this.pdfUrl = media.url;
        this.pdfModal.show();
    }
    checkGroupCheckbox(group) {
        var _a;
        const checkedGroups = this.allGroups.filter((g) => g.needToAdd).length;
        if (checkedGroups > 1 && !((_a = this.user) === null || _a === void 0 ? void 0 : _a.isAdmin)) {
            this.toastr.error('You can select maximum 1 groups');
            setTimeout(() => {
                group.needToAdd = false;
            }, 300);
        }
    }
}
FeedGridComponent.ɵfac = function FeedGridComponent_Factory(t) { return new (t || FeedGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_groups_service__WEBPACK_IMPORTED_MODULE_11__["GroupsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"])); };
FeedGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeedGridComponent, selectors: [["app-feed-grid"]], viewQuery: function FeedGridComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_components_delete_post_delete_post_component__WEBPACK_IMPORTED_MODULE_3__["DeletePostComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.emptYmodal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templateGroupsModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pdfModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.deletePostComponent = _t.first);
    } }, inputs: { data: "data", lessonPosts: "lessonPosts", groupId: "groupId" }, outputs: { changed: "changed" }, decls: 32, vars: 7, consts: [[1, "container-fluid"], ["popover", "If you invite friends you will see their posts here along with yours and also information from the administrators", "container", "body", "triggers", "", 1, "timeline", "row", 3, "isOpen"], ["class", "col-xs-12 col-md-6 col-lg-4 item", 4, "ngIf"], ["class", "col-xs-12 col-md-6 col-lg-4 item", 4, "ngFor", "ngForOf"], ["bsModal", "", "tabindex", "-1", "role", "dialog", 1, "modal", "fade"], ["emptYmodal", "bs-modal"], ["templateReportModal", ""], ["templateGroupsModal", "bs-modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["class", "form-check", 4, "ngFor", "ngForOf"], ["class", "btn btn-success", 3, "click", 4, "ngIf"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-sizes-name1", 1, "modal", "fade"], ["PDFmodal", "bs-modal"], [1, "modal-dialog", "modal-lg"], ["class", "modal-body", 4, "ngIf"], [3, "deleted"], [1, "col-xs-12", "col-md-6", "col-lg-4", "item"], [1, "card"], [1, "card-header"], [1, "card-body"], ["popover", "Click here to type texts and upload pictures or videos", "container", "body", "triggers", "", 1, "card-text", 3, "isOpen"], ["placeholder", "Sharing company updates.", 3, "ngModel", "ngModelChange"], ["class", "card-text", 4, "ngIf"], [1, "card-footer", "share-buttons"], [4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "btn-xs", "pull-right", "btn-warning", 3, "disabled", "click"], [1, "card-text"], ["class", "media-objects", 4, "ngFor", "ngForOf"], [1, "media-objects"], ["src", "", "imgPreview", "", 1, "images", "img-fluid", 3, "image"], [1, "fas", "fa-trash", 3, "click"], [4, "ngFor", "ngForOf"], ["for", "image-input"], [1, "far", "fa-image"], ["id", "image-input", "type", "file", "tooltip", "Picture uploads", "ng2FileSelect", "", "role", "image-input", "accept", "image/*", 1, "upload-input", 3, "uploader", "click"], ["for", "video-input"], [1, "fas", "fa-video"], ["id", "video-input", "type", "file", "ng2FileSelect", "", "role", "video-input", "tooltip", "Video uploads", "accept", ".mp4, .m4p, m4v, .mpg, .mpeg", 1, "upload-input", 3, "uploader", "click"], ["for", "pdf-input"], [1, "far", "fa-file-pdf"], ["id", "pdf-input", "type", "file", "ng2FileSelect", "", "role", "pdf-input", "tooltip", "PDF uploads", "accept", "application/pdf", 1, "pdf-input", 3, "uploader", "click"], ["class", "pointer profile-link", 3, "routerLink", 4, "ngIf"], ["class", "profile-link", 4, "ngIf"], ["class", "pull-right actions", 4, "ngIf"], [1, "pointer", 3, "routerLink", "innerHTML"], [1, "pointer", "profile-link", 3, "routerLink"], [1, "profile-link"], [1, "pull-right", "actions"], [1, "fas", "fa-edit", 3, "click"], [1, "far", "fa-save", 3, "click"], [1, "far", "fa-times-circle", 3, "click"], ["placement", "left", "container", "body", "tooltip", "Tell", 1, "fas", "fa-exclamation-circle", 3, "click"], [3, "ngModel", "ngModelChange"], ["class", "card-img pointer", "alt", "Card image", 3, "src", "routerLink", 4, "ngIf"], ["class", "card-img", "controls", "", 4, "ngIf"], ["style", "cursor: pointer", 3, "src", "page", "fit-to-page", "show-all", "render-text", "click", 4, "ngIf"], ["alt", "Card image", 1, "card-img", "pointer", 3, "src", "routerLink"], ["controls", "", 1, "card-img"], [3, "src"], [2, "cursor", "pointer", 3, "src", "page", "fit-to-page", "show-all", "render-text", "click"], [1, "form-group"], ["for", "exampleInputEmail1"], ["type", "text", "placeholder", "Enter reason", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-danger", 3, "disabled", "click"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "ngModel", "id", "ngModelChange", "change"], [1, "form-check-label", 2, "word-break", "break-all", 3, "for"], [1, "btn", "btn-success", 3, "click"], [3, "src", "fit-to-page"]], template: function FeedGridComponent_Template(rf, ctx) { if (rf & 1) {
        const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FeedGridComponent_div_2_Template, 13, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FeedGridComponent_div_3_Template, 12, 8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FeedGridComponent_ng_template_6_Template, 16, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Select Groups");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedGridComponent_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return _r5.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, FeedGridComponent_div_19_Template, 4, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FeedGridComponent_button_20_Template, 2, 0, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, FeedGridComponent_button_21_Template, 2, 0, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedGridComponent_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return _r9.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, FeedGridComponent_div_30_Template, 2, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "app-delete-post", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleted", function FeedGridComponent_Template_app_delete_post_deleted_31_listener() { return ctx.feedDeleted(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isOpen", ctx.popovers.post);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAddFeed());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allGroups);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.feedToEdit == null ? null : ctx.feedToEdit.postid) && !ctx.feedToEdit.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.feedToEdit == null ? null : ctx.feedToEdit.postid) && ctx.feedToEdit.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pdfUrl && ctx.pdfUrl.length);
    } }, directives: [ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_13__["PopoverDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalDirective"], _components_delete_post_delete_post_component__WEBPACK_IMPORTED_MODULE_3__["DeletePostComponent"], ngx_quill__WEBPACK_IMPORTED_MODULE_15__["QuillEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"], _directives_image_preview_directive__WEBPACK_IMPORTED_MODULE_17__["ImagePreviewDirective"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_18__["TooltipDirective"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileSelectDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["CheckboxControlValueAccessor"]], styles: [".timeline[_ngcontent-%COMP%] {\n  margin-top: 2em;\n  margin-bottom: 2em;\n  min-height: calc(100vh - 270px);\n}\n\n.profile-link[_ngcontent-%COMP%] {\n  color: #fff;\n  float: left;\n}\n\n.item[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n\n.actions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  cursor: pointer;\n}\n\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background: #56545a;\n  color: #fff;\n}\n\n.card[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n\n.fa-thumbs-up[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.coment[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.12);\n  width: 100%;\n  min-height: 50px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.coment[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%] {\n  width: 10%;\n  margin-top: auto;\n  margin-bottom: auto;\n  max-width: 40px;\n  max-height: 40px;\n}\n\n.coment[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  width: 90%;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.coment[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .comment-author[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  color: #26a69a;\n  padding-right: 5px;\n  cursor: pointer;\n}\n\n.last-coment[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n\n.new-coment[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #744c28;\n}\n\n.share-buttons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  line-height: 30px;\n  overflow: hidden;\n}\n\n.share-buttons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #cccccc;\n  font-size: 16px;\n  vertical-align: middle;\n}\n\n.share-buttons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover {\n  background: #fff;\n  border-left: 1px solid #e2e9e6;\n  border-right: 1px solid #e2e9e6;\n  cursor: pointer;\n}\n\n.share-buttons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #26a69a;\n}\n\n.share-buttons[_ngcontent-%COMP%]   div.counter[_ngcontent-%COMP%] {\n  padding-top: 2px;\n  cursor: default;\n}\n\n.share-buttons[_ngcontent-%COMP%]   div.counter[_ngcontent-%COMP%]:hover {\n  background: inherit;\n  border: none;\n}\n\n.share-buttons[_ngcontent-%COMP%]   div.counter[_ngcontent-%COMP%]:hover {\n  color: black;\n}\n\n.share-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0px;\n  border-radius: 0;\n  position: relative;\n  z-index: 1;\n  top: -1px;\n  right: -1px;\n  height: 32px;\n  line-height: 32px;\n  padding: 0px 10px;\n}\n\n.pull-right[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.btn-warning[_ngcontent-%COMP%] {\n  border-radius: 40px;\n  padding-left: 20px;\n  padding-right: 20px;\n  background-color: #db8d2d;\n  border: #db8d2d solid 1px;\n  color: white;\n}\n\n.media-objects[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n\n.media-objects[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%] {\n  width: 95%;\n  float: left;\n}\n\n.media-objects[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1em;\n  margin-left: 2%;\n  cursor: pointer;\n}\n\n.fa-exclamation-circle[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n\n.pdf-viewer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGZlZWQtZ3JpZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUdFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBQUo7O0FBS0U7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUFGSjs7QUFLRTtFQUNFLGVBQUE7QUFISjs7QUFPQTtFQUNFLGVBQUE7QUFKRjs7QUFPQTtFQUNFLDRDQUFBO0VBQ0EsK0NBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUFKRjs7QUFNRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSko7O0FBT0U7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUxKOztBQU9JO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUxOOztBQVVBO0VBQ0Usa0JBQUE7QUFQRjs7QUFXRTtFQUNFLGVBQUE7QUFSSjs7QUFZQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQVRGOztBQVlBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQVRGOztBQVlBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQVRGOztBQVlBO0VBQ0UsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQVRGOztBQVlBO0VBQ0UsY0FBQTtBQVRGOztBQVlBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBVEY7O0FBWUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFURjs7QUFZQTtFQUNFLFlBQUE7QUFURjs7QUFZQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFURjs7QUFZQTtFQUNFLFlBQUE7QUFURjs7QUFZQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBVEY7O0FBWUE7RUFDRSxlQUFBO0FBVEY7O0FBV0U7RUFDRSxVQUFBO0VBRUEsV0FBQTtBQVZKOztBQWFFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBWEo7O0FBZUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFaRjs7QUFlQTtFQUNFLGVBQUE7QUFaRjs7QUFjQTtFQUNFLGVBQUE7QUFYRiIsImZpbGUiOiJmZWVkLWdyaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGltZWxpbmUge1xyXG4gIG1hcmdpbi10b3A6IDJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDI3MHB4KTtcclxufVxyXG5cclxuLnByb2ZpbGUtbGluayB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuXHJcbi5hY3Rpb25zIHtcclxuICBpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmQge1xyXG4gIC5jYXJkLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTY1NDVhO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1pbWcge1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gIH1cclxufVxyXG5cclxuLmZhLXRodW1icy11cCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY29tZW50IHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICBib3gtc2hhZG93OiAwIDFweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAucGhvdG8ge1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiA0MHB4O1xyXG4gICAgbWF4LWhlaWdodDogNDBweDtcclxuICB9XHJcblxyXG4gIC50ZXh0IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuXHJcbiAgICAuY29tbWVudC1hdXRob3Ige1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGNvbG9yOiAjMjZhNjlhO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5sYXN0LWNvbWVudCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcblxyXG4ubmV3LWNvbWVudCB7XHJcbiAgLmlucHV0LWdyb3VwLXRleHQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG5cclxuLmxpbmsge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzc0NGMyODtcclxufVxyXG5cclxuLnNoYXJlLWJ1dHRvbnMgZGl2IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc2hhcmUtYnV0dG9ucyBkaXYgaSB7XHJcbiAgY29sb3I6ICNjY2NjY2M7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5zaGFyZS1idXR0b25zIGRpdjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlMmU5ZTY7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UyZTllNjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zaGFyZS1idXR0b25zIGRpdjpob3ZlciBpIHtcclxuICBjb2xvcjogIzI2YTY5YTtcclxufVxyXG5cclxuLnNoYXJlLWJ1dHRvbnMgZGl2LmNvdW50ZXIge1xyXG4gIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG4uc2hhcmUtYnV0dG9ucyBkaXYuY291bnRlcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5zaGFyZS1idXR0b25zIGRpdi5jb3VudGVyOmhvdmVyIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5zaGFyZS1idXR0b25zIGJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICB0b3A6IC0xcHg7XHJcbiAgcmlnaHQ6IC0xcHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xyXG59XHJcblxyXG4ucHVsbC1yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uYnRuLXdhcm5pbmcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiOGQyZDtcclxuICBib3JkZXI6ICNkYjhkMmQgc29saWQgMXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1lZGlhLW9iamVjdHMge1xyXG4gIG1hcmdpbi10b3A6IDFlbTtcclxuXHJcbiAgLmltYWdlcyB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgLy8gICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG5cclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG5cclxuLmZhLWV4Y2xhbWF0aW9uLWNpcmNsZSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ0bi1zdWNjZXNzIHtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuLnBkZi12aWV3ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    API_URL: 'http://localhost:3000',
    // API_URL: 'https://zoom-test-api.foodnicher.com',
    // API_URL: 'https://api.foodnicher.com',
    FE_URL: 'http://localhost:4200',
    API_GOOGLE: '788806065600-r29lafc85gkr58nkc2991str3414l7oo.apps.googleusercontent.com',
    STRIPE: {
        PUB_KEY: 'pk_test_51IUEyXLGqUhNytyozW3SaQ2sdbqhTvM00hVRAw9eJ5Kas8Zpi04rQb4GSTZtSib2AOo7wRb0ajk0Xp5SK4SkfMrq00pKysbdmH',
        BUSINESS: 'price_1IZVohLGqUhNytyo1HNRpPDw',
        REGULAR: 'price_1IaE1ULGqUhNytyoB7yoOjM5',
        M3: 'price_1IzmkyLGqUhNytyomfV5rEs6',
        M6: 'price_1IzmlHLGqUhNytyoQsThyw0l',
        M12: 'price_1IzmlbLGqUhNytyo15Yl1cth'
    },
    ZOOM_SDK: 'ZKojIHxKSK6hHgPp4lG8Cg',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BzBs":
/*!***********************************************************!*\
  !*** ./src/app/modules/shared/services/groups.service.ts ***!
  \***********************************************************/
/*! exports provided: GroupsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsService", function() { return GroupsService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class GroupsService {
    constructor(http) {
        this.http = http;
    }
    getAllGroups() {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL}/groups`;
        return this.http.get(url);
    }
    getGroupPosts(groupId) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL}/groups/${groupId}`;
        return this.http.get(url);
    }
}
GroupsService.ɵfac = function GroupsService_Factory(t) { return new (t || GroupsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
GroupsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GroupsService, factory: GroupsService.ɵfac });


/***/ }),

/***/ "F8Sv":
/*!**********************************************************************!*\
  !*** ./src/app/modules/shared/components/header/header.component.ts ***!
  \**********************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _login_reg_modal_login_reg_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login-reg-modal/login-reg-modal.component */ "vVZ6");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/authentication.service */ "LyFO");
/* harmony import */ var _services_communication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/communication.service */ "q9FV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










function HeaderComponent_ul_7_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Discover brands");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HeaderComponent_ul_7_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HeaderComponent_ul_7_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_ul_7_li_3_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r17.openLogRegModal("login"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HeaderComponent_ul_7_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Join Now!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HeaderComponent_ul_7_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_ul_7_li_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r19.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HeaderComponent_ul_7_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Contact Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("dropdown-item");
} }
function HeaderComponent_ul_7_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Tech Summits");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("dropdown-item");
} }
function HeaderComponent_ul_7_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Global Health Summit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("dropdown-item");
} }
function HeaderComponent_ul_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HeaderComponent_ul_7_li_1_Template, 3, 0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HeaderComponent_ul_7_li_2_Template, 3, 0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HeaderComponent_ul_7_li_3_Template, 3, 0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, HeaderComponent_ul_7_li_4_Template, 3, 0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, HeaderComponent_ul_7_li_5_Template, 3, 0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, HeaderComponent_ul_7_li_6_Template, 3, 2, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, HeaderComponent_ul_7_li_7_Template, 3, 2, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, HeaderComponent_ul_7_li_8_Template, 3, 2, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isLoggined());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r0.data == null ? null : ctx_r0.data.home) && ctx_r0.isLoggined());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.isLoggined() && (ctx_r0.data == null ? null : ctx_r0.data.login));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.isLoggined() && (ctx_r0.data == null ? null : ctx_r0.data.register));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isLoggined() && (ctx_r0.data == null ? null : ctx_r0.data.logout));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.data == null ? null : ctx_r0.data.contactUs);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.data == null ? null : ctx_r0.data.techSummits);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.data == null ? null : ctx_r0.data.globalHealthSummit);
} }
function HeaderComponent_li_10_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Agenda");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Speaker");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " FoodNiche\u00AE Tech Summits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HeaderComponent_li_10_ul_3_Template, 7, 0, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("dropdown-toggle btn btn-login " + ctx_r1.btnClass);
} }
function HeaderComponent_li_11_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Agenda");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Speaker");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " FoodNiche\u00AE Global Health Summit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HeaderComponent_li_11_ul_3_Template, 7, 0, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("dropdown-toggle btn btn-login " + ctx_r2.btnClass);
} }
function HeaderComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Contact Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("btn btn-login " + ctx_r3.btnClass);
} }
function HeaderComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Discover brands ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("btn btn-login " + ctx_r4.btnClass);
} }
function HeaderComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Dashboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("btn btn-login " + ctx_r5.btnClass);
} }
function HeaderComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_li_15_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r23.openLogRegModal("login"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("btn btn-login " + ctx_r6.btnClass);
} }
function HeaderComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Join Now! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("btn btn-login " + ctx_r7.btnClass);
} }
function HeaderComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_li_17_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r25.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("btn btn-login " + ctx_r8.btnClass);
} }
class HeaderComponent {
    constructor(cookieService, activatedRoute, authenticationService, route, com) {
        this.cookieService = cookieService;
        this.activatedRoute = activatedRoute;
        this.authenticationService = authenticationService;
        this.route = route;
        this.com = com;
        this.btnClass = '';
        this.searchInput = '';
        this.data = {};
        this.isCollapsed = false;
    }
    ngOnInit() {
        // console.log(this.btnClass);
        this.activatedRoute.data.subscribe((data) => {
            this.data = data;
        });
        this.userProfile = JSON.parse(this.cookieService.get('userProfile') || '{}');
        this.loginSubscription = this.com.$loginCalled.subscribe(() => {
            this.openLogRegModal('login');
        });
        this.signUpSubscription = this.com.$signUpCalled.subscribe(() => {
            this.openLogRegModal('reg');
        });
        this.signUpSubGiftSubscription = this.com.$calSignUpGiftCalled.subscribe(() => {
            this.openLogRegModal('gift');
        });
    }
    ngOnDestroy() {
        if (this.loginSubscription) {
            this.loginSubscription.unsubscribe();
        }
        if (this.signUpSubscription) {
            this.signUpSubscription.unsubscribe();
        }
        if (this.signUpSubGiftSubscription) {
            this.signUpSubGiftSubscription.unsubscribe();
        }
    }
    openLogRegModal(data) {
        this.loginRegModalComponent.openModal(data);
    }
    isLoggined() {
        return this.authenticationService.isAuthorized();
    }
    logout() {
        this.cookieService.delete('token');
        this.cookieService.delete('userProfile');
        this.cookieService.deleteAll();
        setTimeout(() => {
            this.route.navigate(['/']);
        }, 500);
    }
    isAdmin() {
        return this.userProfile.isAdmin;
    }
    isSuperCook() {
        return true;
    }
    profileUrl() {
        return '';
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_communication_service__WEBPACK_IMPORTED_MODULE_6__["CommunicationService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_login_reg_modal_login_reg_modal_component__WEBPACK_IMPORTED_MODULE_0__["LoginRegModalComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.loginRegModalComponent = _t.first);
    } }, inputs: { btnClass: "btnClass" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([
            {
                provide: ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__["BsDropdownConfig"],
                useValue: { isAnimated: false, autoClose: true },
            },
        ])], decls: 19, vars: 10, consts: [["id", "navbar", 1, "navbar", "main-header", "navbar-expand-md"], [1, "container-fluid"], ["routerLink", "/", 1, "navbar-brand"], ["src", "/assets/img/logo.png", "alt", "logo", 1, "img-fluid", "logo-supercook"], ["dropdown", "", "container", "body", 1, "d-lg-none", "mobile-nav"], ["type", "button", "dropdownToggle", ""], ["id", "dropdown-animated", "class", "dropdown-menu dropdown-menu-mobile", "role", "menu", "aria-labelledby", "button-animated", 4, "dropdownMenu"], [1, "collapse", "navbar-collapse", "hidden-md-down", "justify-content-end"], [1, "nav"], ["class", "nav-item", "dropdown", "", 4, "ngIf"], ["class", "nav-item", 4, "ngIf"], ["id", "dropdown-animated", "role", "menu", "aria-labelledby", "button-animated", 1, "dropdown-menu", "dropdown-menu-mobile"], ["role", "menuitem", 4, "ngIf"], ["role", "menuitem"], ["routerLink", "/posts", 1, "dropdown-item"], ["routerLink", "/dashboard", 1, "dropdown-item"], [1, "dropdown-item", 3, "click"], ["routerLink", "/payments/select", 1, "dropdown-item"], ["href", "https://calendly.com/gfhii/foodnichesummit?month=2021-05"], ["href", "https://mcusercontent.com/3bf1a51b74a47d37b1e2b5d32/files/f6e9a450-f887-a34c-1b79-62d13264ffce/Conference_Agenda_2021.02.pdf"], ["dropdown", "", 1, "nav-item"], ["dropdownToggle", "", "type", "button", "dropdownToggle", ""], ["class", "dropdown-menu", 4, "dropdownMenu"], [1, "dropdown-menu"], ["href", "https://mcusercontent.com/3bf1a51b74a47d37b1e2b5d32/files/f6e9a450-f887-a34c-1b79-62d13264ffce/Conference_Agenda_2021.02.pdf", 1, "dropdown-item"], ["href", "https://www.disruptfoodsummit.com/", 1, "dropdown-item"], ["href", "https://www.gfhisummit.com/speakers-style3/", 1, "dropdown-item"], [1, "nav-item"], ["type", "button", "routerLink", "/posts"], ["type", "button", "routerLink", "/dashboard"], ["type", "button", 3, "click"], ["src", "/assets/img/Hand_4.png", "alt", "Hand_4", 1, "hand_4"], ["type", "button", "routerLink", "/payments/select"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u2630");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, HeaderComponent_ul_7_Template, 9, 8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, HeaderComponent_li_10_Template, 4, 2, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, HeaderComponent_li_11_Template, 4, 2, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, HeaderComponent_li_12_Template, 3, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, HeaderComponent_li_13_Template, 3, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, HeaderComponent_li_14_Template, 3, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, HeaderComponent_li_15_Template, 3, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, HeaderComponent_li_16_Template, 3, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, HeaderComponent_li_17_Template, 3, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "app-login-reg-modal");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("main-header-sm", ctx.data == null ? null : ctx.data.subscribe);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data == null ? null : ctx.data.techSummits);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data == null ? null : ctx.data.globalHealthSummit);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data == null ? null : ctx.data.contactUs);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoggined() && (ctx.data == null ? null : ctx.data.posts));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.dashboard) && ctx.isLoggined());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoggined() && (ctx.data == null ? null : ctx.data.login));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoggined() && (ctx.data == null ? null : ctx.data.register));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoggined() && (ctx.data == null ? null : ctx.data.logout));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__["BsDropdownMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _login_reg_modal_login_reg_modal_component__WEBPACK_IMPORTED_MODULE_0__["LoginRegModalComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".navbar[_ngcontent-%COMP%] {\n  padding-top: 1em;\n  height: 90px;\n  background-color: #faf1e5;\n  width: 100%;\n}\n.navbar[_ngcontent-%COMP%]   .input-group-search[_ngcontent-%COMP%] {\n  border-radius: 40px;\n  margin: 6px 6px 6px -15px;\n  border: #f0f0f0 solid 1px;\n  padding-left: 20px;\n}\n.navbar[_ngcontent-%COMP%]   .input-group-search[_ngcontent-%COMP%]   .input-enter[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.navbar[_ngcontent-%COMP%]   .btn-login[_ngcontent-%COMP%] {\n  background: transparent;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 22px;\n  color: #db8d2d;\n}\n.navbar[_ngcontent-%COMP%]   .hand_4[_ngcontent-%COMP%] {\n  width: 60px;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.logo-supercook[_ngcontent-%COMP%] {\n  height: 30px;\n  width: auto;\n}\n.dropdown-menu-mobile[_ngcontent-%COMP%] {\n  margin-left: -190px;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  left: unset !important;\n  inset: unset !important;\n}\n.dropdown-animated[_ngcontent-%COMP%] {\n  min-height: 300px;\n}\n.main-header-sm[_ngcontent-%COMP%]   .logo-supercook[_ngcontent-%COMP%] {\n  height: 60px;\n}\n@media (min-width: 1200px) {\n  .main-header-sm[_ngcontent-%COMP%]   .container-lg[_ngcontent-%COMP%], .main-header-sm[_ngcontent-%COMP%]   .container-md[_ngcontent-%COMP%], .main-header-sm[_ngcontent-%COMP%]   .container-sm[_ngcontent-%COMP%], .main-header-sm[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    max-width: 890px;\n  }\n}\n@media (max-width: 767px) {\n  .logo-supercook[_ngcontent-%COMP%] {\n    width: 200px;\n    height: auto;\n  }\n\n  .navbar-brand[_ngcontent-%COMP%] {\n    max-width: 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQUU7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUVKO0FBQUk7RUFDRSxlQUFBO0FBRU47QUFFRTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQUo7QUFHRTtFQUNFLFdBQUE7QUFESjtBQUlFO0VBQ0UsZUFBQTtBQUZKO0FBTUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUhGO0FBTUE7RUFDRSxtQkFBQTtBQUhGO0FBTUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FBSEY7QUFNQTtFQUNFLGlCQUFBO0FBSEY7QUFPRTtFQUNFLFlBQUE7QUFKSjtBQU9FO0VBQ0U7Ozs7SUFJRSxnQkFBQTtFQUxKO0FBQ0Y7QUFTQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFlBQUE7RUFORjs7RUFTQTtJQUNFLGNBQUE7RUFORjtBQUNGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xyXG4gIHBhZGRpbmctdG9wOiAxZW07XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDI0MSwgMjI5KTtcclxuICB3aWR0aDogMTAwJTtcclxuICAuaW5wdXQtZ3JvdXAtc2VhcmNoIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBtYXJnaW46IDZweCA2cHggNnB4IC0xNXB4O1xyXG4gICAgYm9yZGVyOiAjZjBmMGYwIHNvbGlkIDFweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuXHJcbiAgICAuaW5wdXQtZW50ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYnRuLWxvZ2luIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIGNvbG9yOiAjZGI4ZDJkO1xyXG4gIH1cclxuXHJcbiAgLmhhbmRfNCB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICB9XHJcblxyXG4gIC5uYXZiYXItYnJhbmQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG5cclxuLmxvZ28tc3VwZXJjb29rIHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51LW1vYmlsZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xOTBweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUge1xyXG4gIGxlZnQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgaW5zZXQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1hbmltYXRlZCB7XHJcbiAgbWluLWhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5tYWluLWhlYWRlci1zbSB7XHJcbiAgLmxvZ28tc3VwZXJjb29rIHtcclxuICAgIGhlaWdodDogNjBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5jb250YWluZXItbGcsXHJcbiAgICAuY29udGFpbmVyLW1kLFxyXG4gICAgLmNvbnRhaW5lci1zbSxcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBtYXgtd2lkdGg6IDg5MHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmxvZ28tc3VwZXJjb29rIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5uYXZiYXItYnJhbmQge1xyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "FpXt":
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "F8Sv");
/* harmony import */ var _components_login_reg_modal_login_reg_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login-reg-modal/login-reg-modal.component */ "vVZ6");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/authentication.service */ "LyFO");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "7pIB");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/shared.service */ "pkQQ");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/footer/footer.component */ "TnyQ");
/* harmony import */ var _services_request_interceptor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/request-interceptor.service */ "lYEW");
/* harmony import */ var _directives_image_preview_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/image-preview.directive */ "voxy");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth-guard.service */ "O6Fc");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/popover */ "EDFS");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "Mfq2");
/* harmony import */ var _services_groups_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/groups.service */ "BzBs");
/* harmony import */ var _directives_safe_url_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./directives/safe-url.pipe */ "vNwe");
/* harmony import */ var _components_feed_grid_feed_grid_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/feed-grid/feed-grid.component */ "5M3e");
/* harmony import */ var _components_delete_post_delete_post_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/delete-post/delete-post.component */ "MXCF");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-quill */ "CzEO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ "fXoL");
































class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_15__["CookieService"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
        _services_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"],
        _services_groups_service__WEBPACK_IMPORTED_MODULE_20__["GroupsService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _services_request_interceptor_service__WEBPACK_IMPORTED_MODULE_11__["RequestInterceptorService"],
            multi: true,
        },
        _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            // BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            // HttpClientModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["ModalModule"].forRoot(),
            ngx_spinner__WEBPACK_IMPORTED_MODULE_16__["NgxSpinnerModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_17__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_18__["PopoverModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_19__["TooltipModule"].forRoot(),
            ngx_quill__WEBPACK_IMPORTED_MODULE_24__["QuillModule"].forRoot({
                modules: {
                    toolbar: {
                        container: [
                            ['bold', 'italic', 'underline'],
                            ['blockquote'],
                            [{ list: 'ordered' }, { list: 'bullet' }],
                            [{ align: [] }],
                            ['emoji'],
                        ],
                    },
                    'emoji-shortname': true,
                    'emoji-textarea': false,
                    'emoji-toolbar': true,
                },
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _components_login_reg_modal_login_reg_modal_component__WEBPACK_IMPORTED_MODULE_5__["LoginRegModalComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
        _directives_image_preview_directive__WEBPACK_IMPORTED_MODULE_12__["ImagePreviewDirective"],
        _directives_safe_url_pipe__WEBPACK_IMPORTED_MODULE_21__["SafeUrlPipe"],
        _components_feed_grid_feed_grid_component__WEBPACK_IMPORTED_MODULE_22__["FeedGridComponent"],
        _components_delete_post_delete_post_component__WEBPACK_IMPORTED_MODULE_23__["DeletePostComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        // BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        // HttpClientModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["ModalModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_16__["NgxSpinnerModule"],
        ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_17__["BsDropdownModule"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_18__["PopoverModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_19__["TooltipModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_24__["QuillModule"]], exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _components_login_reg_modal_login_reg_modal_component__WEBPACK_IMPORTED_MODULE_5__["LoginRegModalComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
        _directives_image_preview_directive__WEBPACK_IMPORTED_MODULE_12__["ImagePreviewDirective"],
        _directives_safe_url_pipe__WEBPACK_IMPORTED_MODULE_21__["SafeUrlPipe"],
        _components_feed_grid_feed_grid_component__WEBPACK_IMPORTED_MODULE_22__["FeedGridComponent"],
        _components_delete_post_delete_post_component__WEBPACK_IMPORTED_MODULE_23__["DeletePostComponent"]] }); })();


/***/ }),

/***/ "HLwJ":
/*!**************************************************************!*\
  !*** ./src/app/modules/shared/validators/email-validator.ts ***!
  \**************************************************************/
/*! exports provided: EmailValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function() { return EmailValidator; });
class EmailValidator {
    static validate(c) {
        // tslint:disable-next-line:max-line-length
        const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    }
}


/***/ }),

/***/ "JzmT":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _modules_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/shared/components/header/header.component */ "F8Sv");
/* harmony import */ var _modules_shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/shared/components/footer/footer.component */ "TnyQ");



class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 5, vars: 0, consts: [[1, "container"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Page not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
    } }, directives: [_modules_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _modules_shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 200px);\n  display: flex;\n}\n.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0VBQ0EsYUFBQTtBQUNGO0FBQUU7RUFDRSxZQUFBO0FBRUoiLCJmaWxlIjoicGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjAwcHgpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaDIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "LyFO":
/*!*******************************************************************!*\
  !*** ./src/app/modules/shared/services/authentication.service.ts ***!
  \*******************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");





class AuthenticationService {
    constructor(cookieService, http) {
        this.cookieService = cookieService;
        this.http = http;
    }
    isAuthorized() {
        const isAuthorized = !!this.cookieService.get('token');
        return isAuthorized;
    }
    register(user) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/users/register`;
        return this.http.post(url, user);
    }
    login(auth) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/users/login`;
        return this.http.post(url, auth);
    }
    getUserProfile() {
        const token = this.cookieService.get('token');
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/users/me`;
        return this.http.get(url, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('X-Auth-Token', token),
        });
    }
    logout() {
        this.cookieService.deleteAll();
        // this.router.navigate(['/']);
    }
    resetPasswordSendEmail(data) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/users/sendemailtorespass`;
        return this.http.post(url, data);
    }
    resetPassword(data) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/users/resetpass`;
        return this.http.post(url, data);
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac });


/***/ }),

/***/ "MXCF":
/*!********************************************************************************!*\
  !*** ./src/app/modules/shared/components/delete-post/delete-post.component.ts ***!
  \********************************************************************************/
/*! exports provided: DeletePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePostComponent", function() { return DeletePostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/shared.service */ "pkQQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");







const _c0 = ["modal"];
class DeletePostComponent {
    constructor(sharedService, router, spinner, toastr) {
        this.sharedService = sharedService;
        this.router = router;
        this.spinner = spinner;
        this.toastr = toastr;
        this.deleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    openDeleteModal(feed) {
        this.feed = feed;
        this.modal.show();
    }
    deleteFeed() {
        this.spinner.show();
        this.sharedService.deletePost(this.feed.postid).subscribe((data) => {
            this.spinner.hide();
            this.modal.hide();
            this.toastr.success("Post deleted");
            this.deleted.emit();
        }, (error) => {
            this.spinner.hide();
            this.modal.hide();
            this.toastr.error(error.message, "Error");
        });
        this.modal.hide();
    }
}
DeletePostComponent.ɵfac = function DeletePostComponent_Factory(t) { return new (t || DeletePostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
DeletePostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeletePostComponent, selectors: [["app-delete-post"]], viewQuery: function DeletePostComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
    } }, outputs: { deleted: "deleted" }, decls: 18, vars: 0, consts: [["bsModal", "", "tabindex", "-1", "role", "dialog", 1, "modal", "fade"], ["modal", "bs-modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "role", "confirm-delete-ok", 1, "btn", "btn-danger", 3, "click"], ["type", "button", "role", "confirm-delete-cancel", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"]], template: function DeletePostComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeletePostComponent_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Are you sure you want to delete?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeletePostComponent_Template_button_click_14_listener() { return ctx.deleteFeed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeletePostComponent_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtcG9zdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "NUwn":
/*!************************************************************************!*\
  !*** ./src/app/modules/shared/validators/equal-passwords-validator.ts ***!
  \************************************************************************/
/*! exports provided: EqualPasswordsValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EqualPasswordsValidator", function() { return EqualPasswordsValidator; });
class EqualPasswordsValidator {
    static validate(firstField, secondField) {
        return (c) => {
            return (c.controls && c.controls[firstField].value === c.controls[secondField].value) ? null : {
                passwordsEqual: {
                    valid: false
                }
            };
        };
    }
}


/***/ }),

/***/ "O6Fc":
/*!***************************************************************!*\
  !*** ./src/app/modules/shared/services/auth-guard.service.ts ***!
  \***************************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(cookieService, router) {
        this.cookieService = cookieService;
        this.router = router;
    }
    canActivate(next, state) {
        const token = this.cookieService.get('token');
        const userProfile = JSON.parse(this.cookieService.get('userProfile') || "{}");
        if (userProfile && token) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "JqCM");



class AppComponent {
    constructor() {
        this.title = 'zoom-yscooks-frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [["bdColor", "rgba(51, 51, 51, 0.8)", "size", "default", "color", "#fff", "type", "ball-atom"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-spinner", 0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "TnyQ":
/*!**********************************************************************!*\
  !*** ./src/app/modules/shared/components/footer/footer.component.ts ***!
  \**********************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class FooterComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.data = {};
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(data => {
            this.data = data;
        });
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 47, vars: 0, consts: [[1, "footer-fn"], [1, "footer_top"], [1, "maincontentdiv", "text_align_center", "no-gutters"], [1, "container_fluid"], [1, "row"], [1, "col-md-7"], [1, "col-7"], [1, "footer-single-widget"], [1, "widget-body"], ["href", "#", 1, "title_m"], [1, "col-5"], ["href", "#", 1, "description"], [1, "col-md-5"], [1, "link-follow"], ["href", ""], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-twitter"], [1, "fab", "fa-linkedin-in"], [1, "fab", "fa-instagram"], [1, "fab", "fa-youtube"], [1, "clear"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "FoodNiche\u00AE Tech Summit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "FoodNiche\u00AE Global Health Summit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Food + Health Talks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Work With Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Sponsor Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer-fn[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n  color: #fff;\n  min-height: 100px;\n  padding-bottom: 1em;\n  background: #744e2b;\n}\n\n.footer-fn[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.footer-fn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.footer-fn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #eee;\n}\n\n.footer_top[_ngcontent-%COMP%] {\n  background: #744e2b;\n  padding-top: 20px;\n  padding-bottom: 0px;\n}\n\n.footer_top[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.footer_top[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n\n.footer_top[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px;\n  display: block;\n}\n\n.footer_bottom[_ngcontent-%COMP%] {\n  background: #474756;\n  padding-top: 1em;\n}\n\n.footer_bottom[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  font-size: 14px;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.col-6[_ngcontent-%COMP%], .col-12[_ngcontent-%COMP%] {\n  margin-bottom: 0.5em;\n}\n\n.footer-fn[_ngcontent-%COMP%] {\n  background: #744e2b;\n}\n\n.title_m[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.link-follow[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  text-align: right;\n  padding-top: 15px;\n  height: 100%;\n}\n\n.link-follow[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: 1px solid #ffd8a8;\n  border-radius: 25px;\n  color: #111;\n  display: inline-block;\n  font-size: 22px;\n  height: 35px;\n  margin-left: 25px;\n  text-align: center;\n  width: 35px;\n  background-color: #ffd8a8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUdBO0VBQ0UsV0FBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBQ0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBOztFQUVFLG9CQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7QUFBRjs7QUFHQTtFQUdFLG1CQUFBO0VBR0EsYUFBQTtFQUdBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFBRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLWZuIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBjb2xvcjogI2ZmZjtcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG4gIGJhY2tncm91bmQ6ICM3NDRlMmI7XHJcblxyXG59XHJcblxyXG4uZm9vdGVyLWZuIGgzIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmZvb3Rlci1mbiBhIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZm9vdGVyLWZuIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjZWVlO1xyXG59XHJcblxyXG4uZm9vdGVyX3RvcCB7XHJcbiAgYmFja2dyb3VuZDogIzc0NGUyYjtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uZm9vdGVyX3RvcCB1bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLmZvb3Rlcl90b3AgdWwgbGkge1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcblxyXG4uZm9vdGVyX3RvcCB1bCBsaSBhIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogM3B4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZm9vdGVyX2JvdHRvbSB7XHJcbiAgYmFja2dyb3VuZDogIzQ3NDc1NjtcclxuICBwYWRkaW5nLXRvcDogMWVtO1xyXG4gIGg2IHtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi5jb2wtNixcclxuLmNvbC0xMiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbn1cclxuXHJcbi5mb290ZXItZm4ge1xyXG4gIGJhY2tncm91bmQ6ICM3NDRlMmI7XHJcbn1cclxuXHJcbi50aXRsZV9tIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmxpbmstZm9sbG93IHtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LXBhY2s6IHJpZ2h0O1xyXG4gIC1tcy1mbGV4LXBhY2s6IHJpZ2h0O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmxpbmstZm9sbG93IGEge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmQ4YTg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBjb2xvcjogIzExMTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBtYXJnaW4tbGVmdDogMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDhhODtcclxufSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/shared/shared.module */ "FpXt");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "JzmT");
/* harmony import */ var _modules_zoom_zoom_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/zoom/zoom.module */ "bERB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"],
            _modules_zoom_zoom_module__WEBPACK_IMPORTED_MODULE_8__["ZoomModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"],
        _modules_zoom_zoom_module__WEBPACK_IMPORTED_MODULE_8__["ZoomModule"]] }); })();


/***/ }),

/***/ "bERB":
/*!*********************************************!*\
  !*** ./src/app/modules/zoom/zoom.module.ts ***!
  \*********************************************/
/*! exports provided: ZoomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomModule", function() { return ZoomModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "FpXt");
/* harmony import */ var _services_zoom_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/zoom.service */ "xWaQ");
/* harmony import */ var _components_zoom_zoom_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/zoom/zoom.component */ "lADX");
/* harmony import */ var _zoom_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zoom-routing.module */ "ewfr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class ZoomModule {
}
ZoomModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ZoomModule });
ZoomModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function ZoomModule_Factory(t) { return new (t || ZoomModule)(); }, providers: [_services_zoom_service__WEBPACK_IMPORTED_MODULE_2__["ZoomService"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _zoom_routing_module__WEBPACK_IMPORTED_MODULE_4__["ZoomRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ZoomModule, { declarations: [_components_zoom_zoom_component__WEBPACK_IMPORTED_MODULE_3__["ZoomComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _zoom_routing_module__WEBPACK_IMPORTED_MODULE_4__["ZoomRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]] }); })();


/***/ }),

/***/ "ewfr":
/*!*****************************************************!*\
  !*** ./src/app/modules/zoom/zoom-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ZoomRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomRoutingModule", function() { return ZoomRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_zoom_zoom_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/zoom/zoom.component */ "lADX");
/* harmony import */ var _shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/auth-guard.service */ "O6Fc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: ':id',
        component: _components_zoom_zoom_component__WEBPACK_IMPORTED_MODULE_1__["ZoomComponent"],
        canActivate: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        data: {
            login: true,
            dashboard: true,
            logout: true,
        },
    },
];
class ZoomRoutingModule {
}
ZoomRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ZoomRoutingModule });
ZoomRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function ZoomRoutingModule_Factory(t) { return new (t || ZoomRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ZoomRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "lADX":
/*!****************************************************************!*\
  !*** ./src/app/modules/zoom/components/zoom/zoom.component.ts ***!
  \****************************************************************/
/*! exports provided: ZoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomComponent", function() { return ZoomComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _zoomus_websdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @zoomus/websdk */ "3hj0");
/* harmony import */ var _zoomus_websdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_zoomus_websdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _services_zoom_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/zoom.service */ "xWaQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "F8Sv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/footer/footer.component */ "TnyQ");











const _c0 = ["video1"];
function ZoomComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.meetingName);
} }
function ZoomComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Summit May 26th 2021.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ZoomComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 18);
} }
function ZoomComponent_div_7_source_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "source", 26);
} }
function ZoomComponent_div_7_source_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "source", 27);
} }
function ZoomComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "video", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ZoomComponent_div_7_source_5_Template, 1, 0, "source", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ZoomComponent_div_7_source_6_Template, 1, 0, "source", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.zoomId == "97551507231");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.zoomId == "93257914403");
} }
function ZoomComponent_div_11_i_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ZoomComponent_div_11_i_6_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const comment_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.deleteComment(comment_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "last-comment": a0 }; };
function ZoomComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ZoomComponent_div_11_i_6_Template, 1, 0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r8 = ctx.$implicit;
    const last_r9 = ctx.last;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c1, last_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", (comment_r8 == null ? null : comment_r8.user == null ? null : comment_r8.user.profileImage) || "/assets/img/profile.png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("routerLink", "/profile/" + (comment_r8 == null ? null : comment_r8.user == null ? null : comment_r8.user.uid));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", comment_r8 == null ? null : comment_r8.user == null ? null : comment_r8.user.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", comment_r8.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (comment_r8 == null ? null : comment_r8.user == null ? null : comment_r8.user.uid) === (ctx_r4.user == null ? null : ctx_r4.user.uid) || (ctx_r4.user == null ? null : ctx_r4.user.isAdmin));
} }
_zoomus_websdk__WEBPACK_IMPORTED_MODULE_1__["ZoomMtg"].preLoadWasm();
_zoomus_websdk__WEBPACK_IMPORTED_MODULE_1__["ZoomMtg"].prepareJssdk();
class ZoomComponent {
    constructor(ref, cookieService, zoomService, route, router, document) {
        this.ref = ref;
        this.cookieService = cookieService;
        this.zoomService = zoomService;
        this.route = route;
        this.router = router;
        this.user = {};
        this.meetingName = '';
        this.comments = [];
        this.newComment = '';
        this.showPreview = false;
    }
    ngOnInit() {
        this.user = JSON.parse(this.cookieService.get('userProfile') || '{}');
        // tslint:disable-next-line: deprecation
        this.interval = setInterval(() => {
            this.getComments();
        }, 10000);
        this.route.params.subscribe((data) => {
            this.zoomId = data.id;
            if (this.zoomId === '97551507231' || this.zoomId === '93257914403') {
                this.showPreview = true;
            }
            else {
                this.getSignature();
            }
            this.getComments();
        });
        _zoomus_websdk__WEBPACK_IMPORTED_MODULE_1__["ZoomMtg"].showCalloutFunction({
            show: false
        });
    }
    ngAfterContentInit() {
        setTimeout(() => {
            const elem1 = this.video1.nativeElement;
            elem1.play();
        }, 500);
    }
    getComments() {
        this.zoomService.getCommentsByZoomId(this.zoomId).subscribe(
        // tslint:disable-next-line: no-shadowed-variable
        data => {
            this.comments = data;
            this.ref.detectChanges();
        });
    }
    getSignature() {
        this.zoomService
            .getSignature({ meetingNumber: this.zoomId, role: 0 })
            // tslint:disable-next-line: deprecation
            .subscribe((data) => {
            if (data.success && data.signature) {
                this.startMeeting(data.signature);
            }
        }, (error) => {
            console.warn(error);
        });
    }
    startMeeting(signature) {
        const zoomMeetingDiv = document.getElementById('zmmtg-root');
        const zoomContent = document.getElementById('zoom-content');
        zoomContent.appendChild(zoomMeetingDiv);
        _zoomus_websdk__WEBPACK_IMPORTED_MODULE_1__["ZoomMtg"].init({
            leaveUrl: `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].FE_URL}/zoom/${this.zoomId}`,
            isSupportChat: true,
            isSupportAV: true,
            disableCallOut: true,
            audioPanelAlwaysOpen: false,
            success: (success) => {
                document.getElementById('zmmtg-root').style.display = 'block';
                _zoomus_websdk__WEBPACK_IMPORTED_MODULE_1__["ZoomMtg"].join({
                    signature: signature,
                    meetingNumber: this.zoomId,
                    userName: this.user.name ? this.user.name : 'test',
                    userEmail: this.user.email,
                    apiKey: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ZOOM_SDK,
                    passWord: '123456',
                    success: (s) => {
                        console.log(s);
                        _zoomus_websdk__WEBPACK_IMPORTED_MODULE_1__["ZoomMtg"].showCalloutFunction({
                            show: false
                        });
                        setTimeout(() => {
                            const test1 = document.getElementsByClassName('join-audio-by-voip__join-btn')[0];
                            test1.click();
                            // const test2 = document.getElementsByClassName('footer-button__button ax-outline')[2] as any;
                            // test2.click();
                        }, 2000);
                        _zoomus_websdk__WEBPACK_IMPORTED_MODULE_1__["ZoomMtg"].getCurrentMeetingInfo({
                            success: (ss) => {
                                this.meetingName = ss.result.meetingTopic;
                                this.ref.detectChanges();
                            }
                        });
                    },
                    error: (error) => {
                        console.log(error);
                        document.getElementById('zmmtg-root').style.display = 'none';
                        // this.router.navigate([`/`]);
                    },
                });
            },
            error: (error) => {
                console.log(error);
                document.getElementById('zmmtg-root').style.display = 'none';
                // this.router.navigate([`/`]);
            },
        });
    }
    // tslint:disable-next-line: typedef
    ngOnDestroy() {
        document.getElementById('zmmtg-root').style.display = 'none';
        clearInterval(this.interval);
    }
    addComment() {
        this.zoomService.addCommentToZoom(this.zoomId, { text: this.newComment }).subscribe(data => {
            console.log(data);
            this.newComment = '';
            this.getComments();
        });
    }
    deleteComment(comment) {
        this.zoomService.deleteCommentFromZoom(comment.commentid).subscribe(() => {
            this.getComments();
        });
    }
}
ZoomComponent.ɵfac = function ZoomComponent_Factory(t) { return new (t || ZoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_zoom_service__WEBPACK_IMPORTED_MODULE_5__["ZoomService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
ZoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ZoomComponent, selectors: [["app-zoom"]], viewQuery: function ZoomComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.video1 = _t.first);
    } }, decls: 21, vars: 6, consts: [[1, "container-fluid"], [1, "row"], ["class", "col-12 title", 4, "ngIf"], [1, "flex-zoom-chat"], ["id", "zoom-content", 4, "ngIf"], ["id", "img-content", "class", "row", 4, "ngIf"], ["id", "chat-content"], [1, "card-body"], [1, "comments"], ["class", "comment", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "new-comment"], ["for", "inlineFormInputGroup", 1, "sr-only"], [1, "input-group"], ["type", "text", "placeholder", "Add comment", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-prepend"], [1, "input-group-text", "pointer", 3, "click"], [1, "fas", "fa-comment", "pull-right"], [1, "col-12", "title"], ["id", "zoom-content"], ["id", "img-content", 1, "row"], [1, "col-12", "d-flex", "justify-content-center"], [1, "embed-responsive", "embed-responsive-16by9"], ["id", "video-background", "controls", "", 1, "embed-responsive-item"], ["video1", ""], ["src", "https://zoom-yscooks.s3.amazonaws.com/assets/video/Video+1.mp4", "type", "video/mp4", 4, "ngIf"], ["src", "https://zoom-yscooks.s3.amazonaws.com/assets/video/Video+2.mp4", "type", "video/mp4", 4, "ngIf"], ["src", "https://zoom-yscooks.s3.amazonaws.com/assets/video/Video+1.mp4", "type", "video/mp4"], ["src", "https://zoom-yscooks.s3.amazonaws.com/assets/video/Video+2.mp4", "type", "video/mp4"], [1, "comment", 3, "ngClass"], [1, "photo", 3, "src"], [1, "text"], [1, "comment-author", 3, "routerLink"], ["class", "fas fa-trash pull-right pointer", 3, "click", 4, "ngIf"], [1, "fas", "fa-trash", "pull-right", "pointer", 3, "click"]], template: function ZoomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ZoomComponent_div_3_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ZoomComponent_div_4_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ZoomComponent_div_6_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ZoomComponent_div_7_Template, 7, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ZoomComponent_div_11_Template, 7, 8, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ZoomComponent_Template_input_ngModelChange_16_listener($event) { return ctx.newComment = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ZoomComponent_Template_div_click_18_listener() { return ctx.addComment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.showPreview);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showPreview);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.showPreview);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showPreview);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.comments);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.newComment);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], styles: ["[_nghost-%COMP%]     .navbar {\n  z-index: 99999999;\n}\n\n#zoom-content[_ngcontent-%COMP%], #img-content[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  height: calc(100% - 200px);\n  width: calc(100% - 400px);\n  margin-left: -15px;\n  margin-right: -15px;\n  margin-bottom: 50px;\n}\n\n#img-content[_ngcontent-%COMP%] {\n  padding: 40px;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 3em;\n}\n\n.sponsors[_ngcontent-%COMP%] {\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n\n#chat-content[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 400px;\n  margin-top: 50px;\n}\n\n#chat-content[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%] {\n  height: calc(100vh - 100px);\n  background-color: white;\n  margin-bottom: 1em;\n  overflow-x: auto;\n}\n\n.comment[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.12);\n  width: 100%;\n  min-height: 50px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.comment[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%] {\n  width: 10%;\n  margin-top: auto;\n  margin-bottom: auto;\n  max-width: 40px;\n  max-height: 40px;\n  padding-right: 5px;\n}\n\n.comment[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  width: 90%;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.comment[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .comment-author[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  color: #26a69a;\n  padding-right: 5px;\n  cursor: pointer;\n}\n\n.last-comment[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n\n.new-comment[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.flex-zoom-chat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHpvb20uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxpQkFBQTtBQURKOztBQU9BOztFQUVFLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUpGOztBQVFBO0VBQ0UsYUFBQTtBQUxGOztBQVFBO0VBQ0UsY0FBQTtBQUxGOztBQVFBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQUxGOztBQVFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUxGOztBQU9FO0VBQ0UsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFMSjs7QUFTQTtFQUNFLDRDQUFBO0VBQ0EsK0NBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUFORjs7QUFRRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFOSjs7QUFTRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBUEo7O0FBU0k7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBUE47O0FBWUE7RUFDRSxrQkFBQTtBQVRGOztBQWFFO0VBQ0UsZUFBQTtBQVZKOztBQWNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBWEYiLCJmaWxlIjoiem9vbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCB7XHJcblxyXG4gIC5uYXZiYXIge1xyXG4gICAgei1pbmRleDogOTk5OTk5OTk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbiN6b29tLWNvbnRlbnQsXHJcbiNpbWctY29udGVudCB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIwMHB4KTtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gNDAwcHgpO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcblxyXG4jaW1nLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAzZW07XHJcbn1cclxuXHJcbi5zcG9uc29ycyB7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbiNjaGF0LWNvbnRlbnQge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuXHJcbiAgLmNvbW1lbnRzIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbi5jb21tZW50IHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICBib3gtc2hhZG93OiAwIDFweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAucGhvdG8ge1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiA0MHB4O1xyXG4gICAgbWF4LWhlaWdodDogNDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICB9XHJcblxyXG4gIC50ZXh0IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuXHJcbiAgICAuY29tbWVudC1hdXRob3Ige1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGNvbG9yOiAjMjZhNjlhO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5sYXN0LWNvbW1lbnQge1xyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG5cclxuLm5ldy1jb21tZW50IHtcclxuICAuaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uZmxleC16b29tLWNoYXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufSJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "lYEW":
/*!************************************************************************!*\
  !*** ./src/app/modules/shared/services/request-interceptor.service.ts ***!
  \************************************************************************/
/*! exports provided: RequestInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestInterceptorService", function() { return RequestInterceptorService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






class RequestInterceptorService {
    constructor(cookieService, injector, router) {
        this.cookieService = cookieService;
        this.injector = injector;
        this.router = router;
        this.isRefreshingToken = false;
        this.tokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    intercept(request, next) {
        if (request.url !==
            'https://www.google.com/m8/feeds/contacts/default/full?alt=json&max-results=9999999') {
            request = request.clone({
                setHeaders: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${this.cookieService.get('token')}` || ''
                }
            });
        }
        // return next.handle(request);
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(event => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                // console.log(' all looks good');
                // // http response status code
                // console.log(event.status);
            }
        }, error => {
            // http response status code
            console.log('----response----');
            console.error('status code:');
            console.error(error.status);
            console.error(error.message);
            console.log('--- end of response---');
            if (error.status === 401) {
                console.log('logout');
                this.cookieService.deleteAll();
                // this.router.navigate(['/']);
            }
        }));
    }
}
RequestInterceptorService.ɵfac = function RequestInterceptorService_Factory(t) { return new (t || RequestInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
RequestInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: RequestInterceptorService, factory: RequestInterceptorService.ɵfac });


/***/ }),

/***/ "pkQQ":
/*!***********************************************************!*\
  !*** ./src/app/modules/shared/services/shared.service.ts ***!
  \***********************************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class SharedService {
    constructor(http) {
        this.http = http;
    }
    addCommentToFeed(feedId, coment) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL}/comments/${feedId}/`;
        return this.http.post(url, coment);
    }
    createPost(post) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL}/posts`;
        return this.http.post(url, post);
    }
    editPost(post) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL}/posts/${post.postid}`;
        return this.http.put(url, post);
    }
    deletePost(postid) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL}/posts/${postid}`;
        return this.http.delete(url);
    }
    createWarning(warning) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL}/posts/${warning.postid}/warning`;
        return this.http.post(url, warning);
    }
    deleteCommentFromFeed(commentId) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL}/comments/${commentId}`;
        return this.http.delete(url);
    }
}
SharedService.ɵfac = function SharedService_Factory(t) { return new (t || SharedService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SharedService, factory: SharedService.ɵfac });


/***/ }),

/***/ "q9FV":
/*!******************************************************************!*\
  !*** ./src/app/modules/shared/services/communication.service.ts ***!
  \******************************************************************/
/*! exports provided: CommunicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationService", function() { return CommunicationService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CommunicationService {
    constructor() {
        this.$loginCalled = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.$signUpCalled = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.$calSignUpGiftCalled = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    callLoginForm() {
        this.$loginCalled.next();
    }
    calSignUp() {
        this.$signUpCalled.next();
    }
    calSignUpGift() {
        this.$calSignUpGiftCalled.next();
    }
}
CommunicationService.ɵfac = function CommunicationService_Factory(t) { return new (t || CommunicationService)(); };
CommunicationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommunicationService, factory: CommunicationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vNwe":
/*!************************************************************!*\
  !*** ./src/app/modules/shared/directives/safe-url.pipe.ts ***!
  \************************************************************/
/*! exports provided: SafeUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeUrlPipe", function() { return SafeUrlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");


class SafeUrlPipe {
    constructor(sanitized) {
        this.sanitized = sanitized;
    }
    transform(value) {
        return this.sanitized.bypassSecurityTrustResourceUrl(value);
    }
}
SafeUrlPipe.ɵfac = function SafeUrlPipe_Factory(t) { return new (t || SafeUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafeUrlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safeUrl", type: SafeUrlPipe, pure: true });


/***/ }),

/***/ "vVZ6":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/shared/components/login-reg-modal/login-reg-modal.component.ts ***!
  \****************************************************************************************/
/*! exports provided: LoginRegModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRegModalComponent", function() { return LoginRegModalComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_validators_email_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/validators/email-validator */ "HLwJ");
/* harmony import */ var _shared_validators_equal_passwords_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/validators/equal-passwords-validator */ "NUwn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/authentication.service */ "LyFO");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");












const _c0 = ["modal"];
const _c1 = function (a0, a1) { return { "has-error": a0, "has-success": a1 }; };
function LoginRegModalComponent_div_3_form_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginRegModalComponent_div_3_form_8_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r6.onSubmitLogin(ctx_r6.formLogin.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Invalid email address or password. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginRegModalComponent_div_3_form_8_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r8.showRestorePassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Forgot Password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " SIGN IN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r4.formLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](7, _c1, !ctx_r4.emailLog.valid && ctx_r4.emailLog.touched, ctx_r4.emailLog.valid && ctx_r4.emailLog.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r4.emailLog);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](10, _c1, !ctx_r4.passwordLog.valid && ctx_r4.passwordLog.touched, ctx_r4.passwordLog.valid && ctx_r4.passwordLog.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r4.passwordLog);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx_r4.signInError || ctx_r4.passwordLog.touched || ctx_r4.emailLog.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r4.formLogin.valid);
} }
function LoginRegModalComponent_div_3_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginRegModalComponent_div_3_ng_container_9_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r9.signInWithGoogle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Sign in with Google ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginRegModalComponent_div_3_ng_container_9_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r11.showForm = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "or use e-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function LoginRegModalComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginRegModalComponent_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1); return _r0.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, LoginRegModalComponent_div_3_form_8_Template, 13, 13, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, LoginRegModalComponent_div_3_ng_container_9_Template, 8, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.showForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.showForm);
} }
function LoginRegModalComponent_div_4_form_11_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Full name is too short ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginRegModalComponent_div_4_form_11_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Company is too short ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginRegModalComponent_div_4_form_11_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Title is too short ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginRegModalComponent_div_4_form_11_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Linkedin is too short ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginRegModalComponent_div_4_form_11_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Passwords is too short ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginRegModalComponent_div_4_form_11_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Passwords don't match. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginRegModalComponent_div_4_form_11_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " This email is incorrect ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](3, _c1, !ctx_r22.parentEmailReg.valid && ctx_r22.parentEmailReg.touched, ctx_r22.parentEmailReg.valid && ctx_r22.parentEmailReg.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r22.parentEmailReg);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx_r22.parentEmailReg.touched || ctx_r22.parentEmailReg.valid);
} }
function LoginRegModalComponent_div_4_form_11_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginRegModalComponent_div_4_form_11_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r23.onSubmitReg(ctx_r23.formReg.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LoginRegModalComponent_div_4_form_11_div_3_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " This email is already registered ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " This email is incorrect ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, LoginRegModalComponent_div_4_form_11_div_12_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, LoginRegModalComponent_div_4_form_11_div_15_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, LoginRegModalComponent_div_4_form_11_div_18_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, LoginRegModalComponent_div_4_form_11_div_21_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, LoginRegModalComponent_div_4_form_11_div_24_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " You confirm that you are agree with our terms and conditions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, LoginRegModalComponent_div_4_form_11_div_29_Template, 4, 6, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " Join Us! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r14.formReg);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r14.nameReg);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r14.nameReg.valid && ctx_r14.nameReg.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](22, _c1, !ctx_r14.emailReg.valid && ctx_r14.emailReg.touched, ctx_r14.emailReg.valid && ctx_r14.emailReg.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r14.emailReg);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx_r14.emailError || ctx_r14.emailReg.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx_r14.emailReg.touched || ctx_r14.emailReg.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r14.companyReg);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r14.companyReg.valid && ctx_r14.companyReg.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r14.titleReg);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r14.titleReg.valid && ctx_r14.titleReg.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r14.linkedinReg);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r14.linkedinReg.valid && ctx_r14.linkedinReg.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](25, _c1, !ctx_r14.passwordReg.valid && ctx_r14.passwordReg.touched, ctx_r14.passwordReg.valid && ctx_r14.passwordReg.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r14.passwordReg);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r14.passwordReg.valid && ctx_r14.passwordReg.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](28, _c1, !ctx_r14.repeatPasswordReg.valid && ctx_r14.repeatPasswordReg.touched, ctx_r14.repeatPasswordReg.valid && ctx_r14.repeatPasswordReg.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r14.repeatPasswordReg);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r14.passwordsReg.valid && ctx_r14.repeatPasswordReg.touched || ctx_r14.passwordError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r14.agreeTerms);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r14.showParentEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r14.emailReg.valid || !ctx_r14.nameReg.valid || !ctx_r14.titleReg.valid || !ctx_r14.linkedinReg.valid || !ctx_r14.companyReg.valid || !ctx_r14.repeatPasswordReg.valid || !ctx_r14.agreeTerms.value);
} }
function LoginRegModalComponent_div_4_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginRegModalComponent_div_4_ng_container_12_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r25.googleReg(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Sign up with Google ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginRegModalComponent_div_4_ng_container_12_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r27.showForm = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "or use e-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function LoginRegModalComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginRegModalComponent_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1); return _r0.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Join a community where global food industry leaders learn, share, network and promote their businesses.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Registration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, LoginRegModalComponent_div_4_form_11_Template, 33, 31, "form", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, LoginRegModalComponent_div_4_ng_container_12_Template, 8, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.showForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.showForm);
} }
function LoginRegModalComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginRegModalComponent_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1); return _r0.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Member Restore password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginRegModalComponent_div_5_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r32.emailForRestore = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginRegModalComponent_div_5_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r33.restorePassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Restore password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.emailForRestore);
} }
class LoginRegModalComponent {
    constructor(fb, router, authService, 
    // private authProviderService: AuthService,
    spinner, toastr, ngZone, cookieService) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.spinner = spinner;
        this.toastr = toastr;
        this.ngZone = ngZone;
        this.cookieService = cookieService;
        this.modalContent = {
            login: false,
            reg: false,
            restorePass: false,
        };
        this.submitted = false;
        this.signInError = false;
        this.resetPassError = false;
        this.showCheckEmailAfterResetPass = false;
        this.preloader = false;
        this.emailError = false;
        this.passwordError = false;
        this.showForm = false;
        this.emailForRestore = '';
        this.newUser = {};
        this.showParentEmail = false;
        this.formLogin = fb.group({
            email: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _shared_validators_email_validator__WEBPACK_IMPORTED_MODULE_1__["EmailValidator"].validate]),
            ],
            password: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)]),
            ],
            remember: [false],
        });
        this.formReg = fb.group({
            email: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _shared_validators_email_validator__WEBPACK_IMPORTED_MODULE_1__["EmailValidator"].validate]),
            ],
            name: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2)]),
            ],
            company: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2)]),
            ],
            linkedin: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2)]),
            ],
            title: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2)]),
            ],
            // tslint:disable-next-line: deprecation
            passwords: fb.group({
                password: [
                    '',
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4)]),
                ],
                repeatPassword: [
                    '',
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4)]),
                ],
            }, {
                validator: _shared_validators_equal_passwords_validator__WEBPACK_IMPORTED_MODULE_2__["EqualPasswordsValidator"].validate('password', 'repeatPassword'),
            }),
            agreeTerms: [false],
        });
        this.emailLog = this.formLogin.controls.email;
        this.passwordLog = this.formLogin.controls.password;
        this.remember = this.formLogin.controls.remember;
        this.agreeTerms = this.formReg.controls.agreeTerms;
        this.emailReg = this.formReg.controls.email;
        this.linkedinReg = this.formReg.controls.linkedin;
        this.passwordsReg = this.formReg.controls.passwords;
        this.passwordReg = this.passwordsReg.controls.password;
        this.repeatPasswordReg = this.passwordsReg.controls.repeatPassword;
        this.nameReg = this.formReg.controls.name;
        this.companyReg = this.formReg.controls.company;
        this.titleReg = this.formReg.controls.title;
    }
    ngOnInit() { }
    openModal(modal) {
        this.showForm = true;
        this.emailForRestore = '';
        if (modal === 'login') {
            this.modalContent = {
                login: true,
                reg: false,
                restorePass: false,
            };
        }
        else if (modal === 'reg') {
            this.modalContent = {
                login: false,
                reg: true,
                restorePass: false,
            };
        }
        this.modal.show();
    }
    showRegister() {
        this.modalContent = {
            login: false,
            reg: true,
            restorePass: false,
        };
    }
    showLogin() {
        this.modalContent = {
            login: true,
            reg: false,
            restorePass: false,
        };
    }
    onSubmitLogin(values) {
        this.preloader = true;
        this.submitted = true;
        if (this.formLogin.valid) {
            this.spinner.show();
            const auth = {
                password: values.password,
                email: values.email.toLocaleLowerCase(),
            };
            this.login(auth);
        }
    }
    onSubmitReg(values) {
        this.preloader = true;
        this.submitted = true;
        this.spinner.show();
        if (values.email && values.name && values.passwords.password) {
            this.newUser.email = values.email.toLocaleLowerCase();
            this.newUser.name = values.name;
            this.newUser.title = values.title;
            this.newUser.company = values.company;
            this.newUser.password = values.passwords.password;
            this.newUser.linkedin = values.passwords.linkedin;
            this.authService.register(this.newUser).subscribe((data) => {
                this.login(this.newUser);
            }, (error) => {
                this.spinner.hide();
                this.toastr.error('Error!');
            });
        }
        this.spinner.hide();
    }
    showRestorePassword() {
        this.modalContent = {
            login: false,
            reg: false,
            restorePass: true,
        };
    }
    restorePassword() {
        this.authService
            .resetPasswordSendEmail({ email: this.emailForRestore })
            .subscribe((res) => {
            this.toastr.success('Please check your email');
            this.modal.hide();
        }, (error) => {
            this.toastr.error('Email not registered');
        });
    }
    login(auth) {
        this.spinner.show();
        this.authService.login(auth).subscribe((res) => {
            if (res && res.token) {
                this.cookieService.set('token', res.token);
                this.cookieService.set('userProfile', JSON.stringify(res));
                this.router.navigate(['/dashboard']);
            }
            else {
                this.toastr.error('Could not login, please verify your credentials!');
            }
            this.spinner.hide();
        }, (error) => {
            this.spinner.hide();
            this.toastr.error('Could not login, please verify your credentials!');
        });
    }
}
LoginRegModalComponent.ɵfac = function LoginRegModalComponent_Factory(t) { return new (t || LoginRegModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"])); };
LoginRegModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginRegModalComponent, selectors: [["app-login-reg-modal"]], viewQuery: function LoginRegModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
    } }, decls: 6, vars: 3, consts: [["bsModal", "", "tabindex", "-1", "role", "dialog", 1, "modal", "fade"], ["modal", "bs-modal"], [1, "modal-dialog", "modal-lg"], ["class", "modal-content login-content flex", 4, "ngIf"], ["class", "modal-content register-content flex", 4, "ngIf"], [1, "modal-content", "login-content", "flex"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "login_page"], [1, "logholder_div"], [1, "modal-title", "pull-left"], ["class", "form-horizontal login-form", 3, "formGroup", "ngSubmit", 4, "ngIf"], [4, "ngIf"], [1, "form-horizontal", "login-form", 3, "formGroup", "ngSubmit"], [1, "form-group", 3, "ngClass"], ["type", "email", "placeholder", "Email", 1, "form-control", 3, "formControl"], ["type", "password", "placeholder", "Password", 1, "form-control", 3, "formControl"], ["role", "invalid-mail-pass", 1, "alert", "alert-danger", 3, "hidden"], [1, "forgot-pass"], [3, "click"], [1, "form-group", "holder_form", "sub_but"], ["type", "submit", "role", "sign-in", 1, "", 3, "disabled"], [1, "holder_form", "sub_but"], [1, "google_but", 3, "click"], [1, "text"], [1, "fab", "icon-g"], [1, "use-email", 3, "click"], [1, "modal-content", "register-content", "flex"], [1, "register-page"], [1, "background"], ["class", "form-horizontal", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "form-horizontal", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "placeholder", "Full Name", 1, "form-control", 3, "formControl"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "email", "id", "email", "placeholder", "Email", 1, "form-control", 3, "formControl"], ["role", "email-registered", 1, "alert", "alert-danger", 3, "hidden"], ["role", "email-incorect", 1, "alert", "alert-danger", 3, "hidden"], ["type", "text", "placeholder", "Company", 1, "form-control", 3, "formControl"], ["type", "text", "placeholder", "Title", 1, "form-control", 3, "formControl"], ["type", "text", "placeholder", "Linkedin", 1, "form-control", 3, "formControl"], ["type", "password", "id", "password", "placeholder", "Password", 1, "form-control", 3, "formControl"], ["type", "password", "id", "repassword", "placeholder", "Repeat", 1, "form-control", 3, "formControl"], ["role", "pass-not-match", "class", "alert alert-danger", 4, "ngIf"], [1, "checkbox-reg"], ["type", "checkbox", 3, "formControl"], ["class", "form-group", 3, "ngClass", 4, "ngIf"], ["type", "submit", "id", "singup", 1, "singup", 3, "disabled"], [1, "alert", "alert-danger"], ["role", "pass-not-match", 1, "alert", "alert-danger"], ["type", "email", "id", "email", "placeholder", "Parent email", 1, "form-control", 3, "formControl"], ["type", "email", "placeholder", "Email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", "role", "sign-in", 3, "click"]], template: function LoginRegModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LoginRegModalComponent_div_3_Template, 10, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, LoginRegModalComponent_div_4_Template, 13, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, LoginRegModalComponent_div_5_Template, 13, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.modalContent == null ? null : ctx.modalContent.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.modalContent == null ? null : ctx.modalContent.reg);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.modalContent == null ? null : ctx.modalContent.restorePass);
    } }, directives: [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"]], styles: [".modal-content[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none !important;\n  background: #fff;\n  border-radius: unset !important;\n}\n\n.login-content[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 700px;\n  background: #fff;\n}\n\n.register-content[_ngcontent-%COMP%] {\n  width: 1200px;\n  min-height: 700px;\n  background: #fff;\n}\n\n.forgot-pass[_ngcontent-%COMP%] {\n  margin-top: 70px;\n}\n\n.forgot-pass[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.login_page[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  height: inherit;\n  width: inherit;\n}\n\n.logholder_div[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n  text-align: center;\n}\n\n.logholder_div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  background: #e0e0e0;\n  border: 1px solid #e0e0e0;\n  box-shadow: none !important;\n  font-size: 15px;\n  height: 50px;\n}\n\n.sub_but[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n\n.sub_but[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #db8d2d;\n}\n\n.join-text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: larger;\n  font-weight: 500;\n}\n\n.use-email[_ngcontent-%COMP%] {\n  color: gray;\n  cursor: pointer;\n  margin-left: 265px;\n}\n\n.use-login[_ngcontent-%COMP%] {\n  color: gray;\n  cursor: pointer;\n  float: left;\n}\n\n.join-free[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n@media (max-width: 767px) {\n  .modal-content[_ngcontent-%COMP%] {\n    border: none !important;\n    width: 100%;\n  }\n}\n\n#customBtn[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: white;\n  color: #444;\n  border-radius: 5px;\n  border: thin solid #888;\n  box-shadow: 1px 1px 1px grey;\n  white-space: nowrap;\n}\n\n#customBtn[_ngcontent-%COMP%]   span.label[_ngcontent-%COMP%] {\n  font-family: serif;\n  font-weight: normal;\n}\n\n#customBtn[_ngcontent-%COMP%]   span.icon[_ngcontent-%COMP%] {\n  background: url(\"/assets/img/btn_google_light_normal_ios.svg\") transparent 5px 50% no-repeat;\n  display: inline-block;\n  vertical-align: middle;\n  width: 42px;\n  height: 42px;\n}\n\n#customBtn[_ngcontent-%COMP%]   span.buttonText[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 42px;\n  padding-right: 42px;\n  font-size: 14px;\n  font-weight: bold;\n  \n  font-family: \"Roboto\", sans-serif;\n}\n\n#customBtn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.checkbox-reg[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.btn-warning[_ngcontent-%COMP%] {\n  background-color: #db8d2d;\n  border-color: #db8d2d;\n}\n\n.close[_ngcontent-%COMP%] {\n  margin-left: auto;\n  padding: 20px;\n}\n\n.modal-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 28px;\n  line-height: 34px;\n  color: #db8d2d;\n  margin-bottom: 50px;\n}\n\n.register-page[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 50px;\n}\n\n.register-page[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%] {\n  width: 50%;\n  background: linear-gradient(148.61deg, #6a4e2f 35.17%, #db8d2d 92.83%);\n  display: flex;\n  padding-left: 40px;\n  padding-right: 40px;\n}\n\n.register-page[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: auto;\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 36px;\n  color: #ffffff;\n}\n\n.register-page[_ngcontent-%COMP%]   .logholder_div[_ngcontent-%COMP%] {\n  width: 50%;\n  padding-left: 50px;\n}\n\n.register-page[_ngcontent-%COMP%]   .singup[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 29px;\n  color: #db8d2d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGxvZ2luLXJlZy1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFBRTtFQUNFLGVBQUE7QUFFSjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQUU7RUFDRSxlQUFBO0FBRUo7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFBRTtFQUNFLGNBQUE7QUFFSjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUFBO0VBQ0U7SUFDRSx1QkFBQTtJQUNBLFdBQUE7RUFHRjtBQUNGOztBQUFBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUFFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUFFO0VBQ0UsNEZBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFSjs7QUFBRTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscURBQUE7RUFDQSxpQ0FBQTtBQUVKOztBQUNBO0VBQ0UsZUFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtBQUVGOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQUVGOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0FBRUY7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7QUFFRjs7QUFBRTtFQUNFLFVBQUE7RUFDQSxzRUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBREk7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFHUjs7QUFBRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtBQURKIiwiZmlsZSI6ImxvZ2luLXJlZy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250ZW50IHtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiA3MDBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4ucmVnaXN0ZXItY29udGVudCB7XHJcbiAgd2lkdGg6IDEyMDBweDtcclxuICBtaW4taGVpZ2h0OiA3MDBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4uZm9yZ290LXBhc3Mge1xyXG4gIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9naW5fcGFnZSB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gIHdpZHRoOiBpbmhlcml0O1xyXG59XHJcblxyXG4ubG9naG9sZGVyX2RpdiB7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoMyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5zdWJfYnV0IHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBjb2xvcjogI2RiOGQyZDtcclxuICB9XHJcbn1cclxuLmpvaW4tdGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi51c2UtZW1haWwge1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMjY1cHg7XHJcbn1cclxuXHJcbi51c2UtbG9naW4ge1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmpvaW4tZnJlZSB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAubW9kYWwtY29udGVudCB7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuI2N1c3RvbUJ0biB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGNvbG9yOiAjNDQ0O1xyXG4gIC8vIHdpZHRoOiAxOTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiB0aGluIHNvbGlkICM4ODg7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggZ3JleTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHNwYW4ubGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6IHNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB9XHJcbiAgc3Bhbi5pY29uIHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1nL2J0bl9nb29nbGVfbGlnaHRfbm9ybWFsX2lvcy5zdmdcIikgdHJhbnNwYXJlbnQgNXB4IDUwJSBuby1yZXBlYXQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgd2lkdGg6IDQycHg7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgfVxyXG4gIHNwYW4uYnV0dG9uVGV4dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNDJweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLyogVXNlIHRoZSBSb2JvdG8gZm9udCB0aGF0IGlzIGxvYWRlZCBpbiB0aGUgPGhlYWQ+ICovXHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICB9XHJcbn1cclxuI2N1c3RvbUJ0bjpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2hlY2tib3gtcmVnIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5idG4td2FybmluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiOGQyZDtcclxuICBib3JkZXItY29sb3I6ICNkYjhkMmQ7XHJcbn1cclxuXHJcbi5jbG9zZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLm1vZGFsLXRpdGxlIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgY29sb3I6ICNkYjhkMmQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLnJlZ2lzdGVyLXBhZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogNTBweDtcclxuXHJcbiAgLmJhY2tncm91bmQge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDguNjFkZWcsICM2YTRlMmYgMzUuMTclLCAjZGI4ZDJkIDkyLjgzJSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgfVxyXG59XHJcbiAgLmxvZ2hvbGRlcl9kaXYge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuXHJcbiAgfVxyXG5cclxuICAuc2luZ3VwIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xyXG5cclxuICAgIGNvbG9yOiAjZGI4ZDJkO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "JzmT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | modules-landing-landing-module */[__webpack_require__.e("default~modules-dashboard-dashboard-module~modules-landing-landing-module"), __webpack_require__.e("modules-landing-landing-module")]).then(__webpack_require__.bind(null, /*! ./modules/landing/landing.module */ "eyox")).then((m) => m.LandingModule),
    },
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | modules-dashboard-dashboard-module */[__webpack_require__.e("default~modules-dashboard-dashboard-module~modules-landing-landing-module"), __webpack_require__.e("modules-dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./modules/dashboard/dashboard.module */ "XoyV")).then((m) => m.DashboardModule),
    },
    {
        path: 'zoom',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./modules/zoom/zoom.module */ "bERB")).then((m) => m.ZoomModule),
    },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    {
        path: '404',
        component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__["PageNotFoundComponent"],
        data: {
            login: true,
            dashboard: true,
            register: true,
            logout: true
        },
    },
    { path: '**', redirectTo: '/404' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
                initialNavigation: 'enabled',
            }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "voxy":
/*!**********************************************************************!*\
  !*** ./src/app/modules/shared/directives/image-preview.directive.ts ***!
  \**********************************************************************/
/*! exports provided: ImagePreviewDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePreviewDirective", function() { return ImagePreviewDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

// tslint:disable-next-line: directive-selector
class ImagePreviewDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    // tslint:disable-next-line: typedef
    ngOnChanges(changes) {
        const reader = new FileReader();
        const el = this.el;
        // tslint:disable-next-line: only-arrow-functions
        // tslint:disable-next-line: typedef
        // tslint:disable-next-line: only-arrow-functions
        reader.onloadend = function (e) {
            el.nativeElement.src = reader.result;
        };
        if (this.image) {
            return reader.readAsDataURL(this.image);
        }
    }
}
ImagePreviewDirective.ɵfac = function ImagePreviewDirective_Factory(t) { return new (t || ImagePreviewDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
ImagePreviewDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ImagePreviewDirective, selectors: [["img", "imgPreview", ""]], inputs: { image: "image" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ "xWaQ":
/*!*******************************************************!*\
  !*** ./src/app/modules/zoom/services/zoom.service.ts ***!
  \*******************************************************/
/*! exports provided: ZoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomService", function() { return ZoomService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ZoomService {
    constructor(http) {
        this.http = http;
    }
    getSignature(zoomData) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL}/users/zoom/signature`;
        return this.http.post(url, zoomData);
    }
    addCommentToZoom(zoomId, comment) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL}/zoom-comments/${zoomId}/`;
        return this.http.post(url, comment);
    }
    getCommentsByZoomId(zoomId) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL}/zoom-comments/${zoomId}/`;
        return this.http.get(url);
    }
    deleteCommentFromZoom(commentId) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL}/zoom-comments/${commentId}`;
        return this.http.delete(url);
    }
}
ZoomService.ɵfac = function ZoomService_Factory(t) { return new (t || ZoomService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ZoomService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ZoomService, factory: ZoomService.ɵfac });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map