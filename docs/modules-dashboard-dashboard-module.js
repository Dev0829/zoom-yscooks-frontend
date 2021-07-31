(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-dashboard-dashboard-module"],{

/***/ "4dwI":
/*!***************************************************************!*\
  !*** ./node_modules/ng-gapi/__ivy_ngcc__/fesm2015/ng-gapi.js ***!
  \***************************************************************/
/*! exports provided: GoogleApiConfig, GoogleApiModule, GoogleApiService, GoogleAuthService, NG_GAPI_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleApiConfig", function() { return GoogleApiConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleApiModule", function() { return GoogleApiModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleApiService", function() { return GoogleApiService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleAuthService", function() { return GoogleAuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_GAPI_CONFIG", function() { return NG_GAPI_CONFIG; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "TLkJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






class GoogleApiConfig {
    constructor(clientConfig) {
        this.clientConfig = clientConfig;
    }
    getClientConfig() {
        return this.clientConfig;
    }
}

let NG_GAPI_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('ng-gapi.config');
let GoogleApiService = class GoogleApiService {
    constructor(config) {
        this.gapiUrl = 'https://apis.google.com/js/api.js';
        this.observers = [];
        this.config = new GoogleApiConfig(config);
        this.loadGapi().subscribe();
    }
    onLoad() {
        return this.loadGapi();
    }
    getConfig() {
        return this.config;
    }
    loadGapi() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            if (this.gapiLoaded) {
                observer.next(true);
                observer.complete();
            }
            else if (!this.node) {
                /**
                 * script element has not yet been added to document
                 */
                this.node = document.createElement('script');
                this.node.async = true;
                this.node.src = this.gapiUrl;
                this.node.type = 'text/javascript';
                this.node.onload = () => {
                    this.gapiLoaded = true;
                    while (this.observers.length) {
                        const observer = this.observers.shift();
                        observer.next(true);
                        observer.complete();
                    }
                    this.node = undefined;
                };
                this.node.onerror = () => {
                    this.node = undefined;
                };
                document.getElementsByTagName('head')[0].appendChild(this.node);
            }
            else {
                /**
                 * script is in the middle of being loaded
                 */
                this.observers.push(observer);
            }
        });
    }
};
GoogleApiService.ɵfac = function GoogleApiService_Factory(t) { return new (t || GoogleApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](NG_GAPI_CONFIG)); };
GoogleApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GoogleApiService, factory: function (t) { return GoogleApiService.ɵfac(t); } });
GoogleApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_GAPI_CONFIG))
], GoogleApiService);

let GoogleAuthService = class GoogleAuthService {
    constructor(googleApi) {
        this.googleApi = googleApi;
        this.GoogleAuth = undefined;
        this.googleApi.onLoad().subscribe(() => {
            this.loadGapiAuth().subscribe();
        });
    }
    getAuth(newInstance = false) {
        if (!this.GoogleAuth || newInstance) {
            return this.googleApi.onLoad()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(() => this.loadGapiAuth()));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.GoogleAuth);
    }
    loadGapiAuth() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            gapi.load('auth2', () => {
                gapi.auth2.init(this.googleApi.getConfig().getClientConfig()).then((auth) => {
                    this.GoogleAuth = auth;
                    observer.next(auth);
                    observer.complete();
                }).catch((err) => observer.error(err));
            });
        });
    }
};
GoogleAuthService.ɵfac = function GoogleAuthService_Factory(t) { return new (t || GoogleAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleApiService)); };
GoogleAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GoogleAuthService, factory: function (t) { return GoogleAuthService.ɵfac(t); } });
GoogleAuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(GoogleApiService))
], GoogleAuthService);

var GoogleApiModule_1;
let GoogleApiModule = GoogleApiModule_1 = class GoogleApiModule {
    static forRoot(gapiConfigProvider) {
        return {
            ngModule: GoogleApiModule_1,
            providers: [
                gapiConfigProvider,
                GoogleAuthService,
                GoogleApiService
            ]
        };
    }
};
GoogleApiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: GoogleApiModule });
GoogleApiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function GoogleApiModule_Factory(t) { return new (t || GoogleApiModule)(); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [NG_GAPI_CONFIG]
            }] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleAuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [GoogleApiService]
            }] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleApiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-gapi.js.map

/***/ }),

/***/ "80nc":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/attendees/attendees.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AttendeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendeesComponent", function() { return AttendeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "wf7n");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "F8Sv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/footer/footer.component */ "TnyQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






function AttendeesComponent_div_5_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Connect");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", user_r1 == null ? null : user_r1.linkedin, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AttendeesComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AttendeesComponent_div_5_div_6_Template, 3, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", "/profile/" + (user_r1 == null ? null : user_r1.uid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", (user_r1 == null ? null : user_r1.profileImage) || "/assets/img/profile.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r1 == null ? null : user_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", user_r1 == null ? null : user_r1.title, ", ", user_r1 == null ? null : user_r1.company, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r1 == null ? null : user_r1.linkedin);
} }
class AttendeesComponent {
    constructor(userService) {
        this.userService = userService;
        this.users = [];
    }
    ngOnInit() {
        this.getAllUsers();
    }
    getAllUsers() {
        this.userService.getAllUsers().subscribe((data) => {
            console.log(data);
            this.users = data;
        });
    }
}
AttendeesComponent.ɵfac = function AttendeesComponent_Factory(t) { return new (t || AttendeesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
AttendeesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AttendeesComponent, selectors: [["app-attendees"]], decls: 7, vars: 1, consts: [[1, "container-fluid"], [1, "title"], [1, "peaple-conteiner", "row"], ["class", "col-md-2 col-12 user", 4, "ngFor", "ngForOf"], [1, "col-md-2", "col-12", "user"], [1, "img-fluid", 3, "routerLink", "src"], [1, "name"], [1, "company"], ["class", "linkedin", 4, "ngIf"], [1, "linkedin"], [1, "text", 3, "href"]], template: function AttendeesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Attendees ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AttendeesComponent_div_5_Template, 7, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 240px);\n  background-color: #f4f4fb;\n}\n.container-fluid[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  font-size: 80px;\n  font-weight: bold;\n  margin-bottom: 50px;\n}\n.container-fluid[_ngcontent-%COMP%]   .peaple-conteiner[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  display: flex;\n}\n.container-fluid[_ngcontent-%COMP%]   .peaple-conteiner[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 50px;\n  margin-bottom: 50px;\n  display: flex;\n  flex-direction: column;\n  height: 300px;\n}\n.container-fluid[_ngcontent-%COMP%]   .peaple-conteiner[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 140px;\n}\n.container-fluid[_ngcontent-%COMP%]   .peaple-conteiner[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  margin-top: 30px;\n}\n.container-fluid[_ngcontent-%COMP%]   .peaple-conteiner[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  color: #707070;\n  font-size: 16px;\n}\n.container-fluid[_ngcontent-%COMP%]   .peaple-conteiner[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .linkedin[_ngcontent-%COMP%] {\n  width: 122px;\n  height: 32px;\n  background: linear-gradient(#db8d2d 0%, #f5866f 100%);\n  display: flex;\n  margin-top: 30px;\n}\n.container-fluid[_ngcontent-%COMP%]   .peaple-conteiner[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .linkedin[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  margin: auto;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGF0dGVuZGVlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNSO0FBRUk7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUFBUjtBQUNRO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUE4QkEsYUFBQTtBQTVCWjtBQURZO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFHaEI7QUFBWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBRWhCO0FBQ1k7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQ2hCO0FBRVk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFEQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBQWhCO0FBRWdCO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFBcEIiLCJmaWxlIjoiYXR0ZW5kZWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjQwcHgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmYjtcclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnBlYXBsZS1jb250ZWluZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAudXNlciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTQwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb21wYW55IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxpbmtlZGluIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMjJweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZGI4ZDJkIDAlLCAjZjU4NjZmIDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ETEI":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/group-detail/group-detail.component.ts ***!
  \*************************************************************************************/
/*! exports provided: GroupDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupDetailComponent", function() { return GroupDetailComponent; });
/* harmony import */ var _shared_components_login_reg_modal_login_reg_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/login-reg-modal/login-reg-modal.component */ "vVZ6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_groups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/groups.service */ "BzBs");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "F8Sv");
/* harmony import */ var _shared_components_feed_grid_feed_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/feed-grid/feed-grid.component */ "5M3e");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "Lm2G");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/footer/footer.component */ "TnyQ");












class GroupDetailComponent {
    constructor(groupsService, spinner, route, toastr, cookieService) {
        this.groupsService = groupsService;
        this.spinner = spinner;
        this.route = route;
        this.toastr = toastr;
        this.cookieService = cookieService;
        this.groupFeed = [];
        this.groupMembers = [];
        this.paginator = {
            total: 0,
            itemPerPage: 17,
            page: 1,
        };
        this.allPosts = [];
    }
    ngOnInit() {
        if (this.cookieService.get('userProfile')) {
            this.userProfile = JSON.parse(this.cookieService.get('userProfile'));
        }
        this.route.params.subscribe((data) => {
            this.groupId = data.id;
            this.getGroupPosts(data.id);
        });
    }
    ngAfterViewInit() {
        // if (!this.authenticationService.isAuthorized()) {
        //   setTimeout(() => this.loginRegModalComponent.openModal('join', null), 1000);
        // }
    }
    getGroupPosts(groupId) {
        this.spinner.show();
        this.groupsService.getGroupPosts(groupId).subscribe((data) => {
            console.log(data);
            if (data) {
                this.allPosts = data;
                this.paginator.total = data.length;
                const start = (this.paginator.page - 1) * this.paginator.itemPerPage;
                this.groupFeed = this.allPosts.slice(start, this.paginator.itemPerPage * this.paginator.page);
            }
            this.spinner.hide();
        }, (error) => {
            this.spinner.hide();
            this.toastr.error('Error');
        });
    }
    pageChanged(event) {
        console.log(event);
        this.paginator.page = event.page;
        const start = (this.paginator.page - 1) * this.paginator.itemPerPage;
        this.groupFeed = this.allPosts.slice(start, this.paginator.itemPerPage * this.paginator.page);
        window.scrollTo(0, 10);
    }
}
GroupDetailComponent.ɵfac = function GroupDetailComponent_Factory(t) { return new (t || GroupDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_groups_service__WEBPACK_IMPORTED_MODULE_2__["GroupsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"])); };
GroupDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GroupDetailComponent, selectors: [["app-group-detail"]], viewQuery: function GroupDetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_shared_components_login_reg_modal_login_reg_modal_component__WEBPACK_IMPORTED_MODULE_0__["LoginRegModalComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.loginRegModalComponent = _t.first);
    } }, outputs: { groupFeed: "groupFeed", groupMembers: "groupMembers", groupId: "groupId" }, decls: 6, vars: 7, consts: [[3, "data", "groupId", "changed"], [1, "container-fluid"], [1, "row", "col-12"], [3, "totalItems", "itemsPerPage", "ngModel", "maxSize", "boundaryLinks", "pageChanged"]], template: function GroupDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-feed-grid", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("changed", function GroupDetailComponent_Template_app_feed_grid_changed_1_listener() { return ctx.getGroupPosts(ctx.groupId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "pagination", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChanged", function GroupDetailComponent_Template_pagination_pageChanged_4_listener($event) { return ctx.pageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.groupFeed)("groupId", ctx.groupId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("totalItems", ctx.paginator.total)("itemsPerPage", ctx.paginator.itemPerPage)("ngModel", ctx.paginator.page)("maxSize", 5)("boundaryLinks", true);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _shared_components_feed_grid_feed_grid_component__WEBPACK_IMPORTED_MODULE_8__["FeedGridComponent"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]], styles: [".group-title[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGdyb3VwLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSiIsImZpbGUiOiJncm91cC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JvdXAtdGl0bGUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Gh3/":
/*!***********************************************************************!*\
  !*** ./src/app/modules/dashboard/components/posts/posts.component.ts ***!
  \***********************************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/post.service */ "PkDP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "F8Sv");
/* harmony import */ var _shared_components_feed_grid_feed_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/feed-grid/feed-grid.component */ "5M3e");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "Lm2G");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/footer/footer.component */ "TnyQ");











class PostsComponent {
    constructor(spinner, toastr, cookieService, postService, route, router) {
        this.spinner = spinner;
        this.toastr = toastr;
        this.cookieService = cookieService;
        this.postService = postService;
        this.route = route;
        this.router = router;
        this.posts = [];
        this.lessonPosts = false;
        this.paginator = {
            total: 0,
            itemPerPage: 17,
            page: 1,
        };
        this.allPosts = [];
    }
    ngOnInit() {
        if (this.cookieService.get('userProfile')) {
            this.user = JSON.parse(this.cookieService.get('userProfile'));
        }
        this.route.url.subscribe((data) => {
            // console.log(data);
            if (data[0].path === 'posts') {
                this.lessonPosts = false;
                this.getAllPosts();
            }
            else {
                this.getLessonPosts();
                this.lessonPosts = true;
            }
        });
    }
    changed() {
        if (!this.lessonPosts) {
            this.getAllPosts();
        }
        else {
            this.getLessonPosts();
        }
    }
    getAllPosts() {
        this.spinner.show();
        this.postService.getPosts().subscribe((data) => {
            this.allPosts = data;
            this.paginator.total = data.length;
            const start = (this.paginator.page - 1) * this.paginator.itemPerPage;
            this.posts = this.allPosts.slice(start, this.paginator.itemPerPage * this.paginator.page);
            this.spinner.hide();
        }, (error) => {
            this.spinner.hide();
            this.toastr.error('error');
        });
    }
    getLessonPosts() {
        this.spinner.show();
        this.postService.getLessonPosts().subscribe((data) => {
            this.allPosts = data;
            this.paginator.total = data.length;
            const start = (this.paginator.page - 1) * this.paginator.itemPerPage;
            this.posts = this.allPosts.slice(start, this.paginator.itemPerPage * this.paginator.page);
            this.spinner.hide();
        }, (error) => {
            this.spinner.hide();
            this.toastr.error('error');
        });
    }
    pageChanged(event) {
        // console.log(event);
        this.paginator.page = event.page;
        const start = (this.paginator.page - 1) * this.paginator.itemPerPage;
        this.posts = this.allPosts.slice(start, this.paginator.itemPerPage * this.paginator.page);
        window.scrollTo(0, 10);
    }
}
PostsComponent.ɵfac = function PostsComponent_Factory(t) { return new (t || PostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
PostsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostsComponent, selectors: [["app-posts"]], decls: 6, vars: 7, consts: [[3, "data", "lessonPosts", "changed"], [1, "container-fluid"], [1, "row", "col-12"], [3, "totalItems", "itemsPerPage", "ngModel", "maxSize", "boundaryLinks", "pageChanged"]], template: function PostsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-feed-grid", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function PostsComponent_Template_app_feed_grid_changed_1_listener() { return ctx.changed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "pagination", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChanged", function PostsComponent_Template_pagination_pageChanged_4_listener($event) { return ctx.pageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.posts)("lessonPosts", ctx.lessonPosts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalItems", ctx.paginator.total)("itemsPerPage", ctx.paginator.itemPerPage)("ngModel", ctx.paginator.page)("maxSize", 5)("boundaryLinks", true);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _shared_components_feed_grid_feed_grid_component__WEBPACK_IMPORTED_MODULE_7__["FeedGridComponent"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "K1R0":
/*!*************************************************************************************!*\
  !*** ./node_modules/ng-circle-progress/__ivy_ngcc__/fesm2015/ng-circle-progress.js ***!
  \*************************************************************************************/
/*! exports provided: CircleProgressComponent, CircleProgressOptions, NgCircleProgressModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleProgressComponent", function() { return CircleProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleProgressOptions", function() { return CircleProgressOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgCircleProgressModule", function() { return NgCircleProgressModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");







function CircleProgressComponent__svg_svg_0__svg_linearGradient_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "linearGradient");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "stop", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "stop", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r1.svg.outerLinearGradient.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stop-color", ctx_r1.svg.outerLinearGradient.colorStop1)("stop-opacity", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stop-color", ctx_r1.svg.outerLinearGradient.colorStop2)("stop-opacity", 1);
} }
function CircleProgressComponent__svg_svg_0__svg_radialGradient_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "radialGradient");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "stop", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "stop", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r2.svg.radialGradient.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stop-color", ctx_r2.svg.radialGradient.colorStop1)("stop-opacity", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stop-color", ctx_r2.svg.radialGradient.colorStop2)("stop-opacity", 1);
} }
function CircleProgressComponent__svg_svg_0__svg_ng_container_4__svg_circle_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle");
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cx", ctx_r8.svg.backgroundCircle.cx)("cy", ctx_r8.svg.backgroundCircle.cy)("r", ctx_r8.svg.backgroundCircle.r)("fill", ctx_r8.svg.backgroundCircle.fill)("fill-opacity", ctx_r8.svg.backgroundCircle.fillOpacity)("stroke", ctx_r8.svg.backgroundCircle.stroke)("stroke-width", ctx_r8.svg.backgroundCircle.strokeWidth);
} }
function CircleProgressComponent__svg_svg_0__svg_ng_container_4__svg_circle_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle");
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("fill", "url(#", ctx_r9.svg.radialGradient.id, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cx", ctx_r9.svg.backgroundCircle.cx)("cy", ctx_r9.svg.backgroundCircle.cy)("r", ctx_r9.svg.backgroundCircle.r)("fill-opacity", ctx_r9.svg.backgroundCircle.fillOpacity)("stroke", ctx_r9.svg.backgroundCircle.stroke)("stroke-width", ctx_r9.svg.backgroundCircle.strokeWidth);
} }
function CircleProgressComponent__svg_svg_0__svg_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CircleProgressComponent__svg_svg_0__svg_ng_container_4__svg_circle_1_Template, 1, 7, "circle", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CircleProgressComponent__svg_svg_0__svg_ng_container_4__svg_circle_2_Template, 1, 7, "circle", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.options.backgroundGradient);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.options.backgroundGradient);
} }
function CircleProgressComponent__svg_svg_0__svg_circle_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle");
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cx", ctx_r4.svg.circle.cx)("cy", ctx_r4.svg.circle.cy)("r", ctx_r4.svg.circle.r)("fill", ctx_r4.svg.circle.fill)("stroke", ctx_r4.svg.circle.stroke)("stroke-width", ctx_r4.svg.circle.strokeWidth);
} }
function CircleProgressComponent__svg_svg_0__svg_ng_container_6__svg_path_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path");
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("d", ctx_r10.svg.path.d)("stroke", ctx_r10.svg.path.stroke)("stroke-width", ctx_r10.svg.path.strokeWidth)("stroke-linecap", ctx_r10.svg.path.strokeLinecap)("fill", ctx_r10.svg.path.fill);
} }
function CircleProgressComponent__svg_svg_0__svg_ng_container_6__svg_path_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path");
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("stroke", "url(#", ctx_r11.svg.outerLinearGradient.id, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("d", ctx_r11.svg.path.d)("stroke-width", ctx_r11.svg.path.strokeWidth)("stroke-linecap", ctx_r11.svg.path.strokeLinecap)("fill", ctx_r11.svg.path.fill);
} }
function CircleProgressComponent__svg_svg_0__svg_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CircleProgressComponent__svg_svg_0__svg_ng_container_6__svg_path_1_Template, 1, 5, "path", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CircleProgressComponent__svg_svg_0__svg_ng_container_6__svg_path_2_Template, 1, 5, "path", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.options.outerStrokeGradient);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.options.outerStrokeGradient);
} }
function CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_1__svg_tspan_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tspan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tspan_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r15.svg.title.x)("y", ctx_r15.svg.title.y)("dy", tspan_r16.dy)("font-size", ctx_r15.svg.title.fontSize)("font-weight", ctx_r15.svg.title.fontWeight)("fill", ctx_r15.svg.title.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tspan_r16.span);
} }
function CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_1__svg_tspan_1_Template, 2, 7, "tspan", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.svg.title.tspans);
} }
function CircleProgressComponent__svg_svg_0__svg_text_7__svg_tspan_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tspan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("font-size", ctx_r13.svg.units.fontSize)("font-weight", ctx_r13.svg.units.fontWeight)("fill", ctx_r13.svg.units.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.svg.units.text);
} }
function CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_3__svg_tspan_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tspan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tspan_r18 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r17.svg.subtitle.x)("y", ctx_r17.svg.subtitle.y)("dy", tspan_r18.dy)("font-size", ctx_r17.svg.subtitle.fontSize)("font-weight", ctx_r17.svg.subtitle.fontWeight)("fill", ctx_r17.svg.subtitle.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tspan_r18.span);
} }
function CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_3__svg_tspan_1_Template, 2, 7, "tspan", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.svg.subtitle.tspans);
} }
function CircleProgressComponent__svg_svg_0__svg_text_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "text", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_1_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CircleProgressComponent__svg_svg_0__svg_text_7__svg_tspan_2_Template, 2, 4, "tspan", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_3_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r6.svg.circle.cx)("y", ctx_r6.svg.circle.cy)("text-anchor", ctx_r6.svg.title.textAnchor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.options.showTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.options.showUnits);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.options.showSubtitle);
} }
function CircleProgressComponent__svg_svg_0__svg_image_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "image", 9);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("height", ctx_r7.svg.image.height)("width", ctx_r7.svg.image.width)("href", ctx_r7.svg.image.src, null, "xlink")("x", ctx_r7.svg.image.x)("y", ctx_r7.svg.image.y);
} }
function CircleProgressComponent__svg_svg_0_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CircleProgressComponent__svg_svg_0_Template__svg_svg_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.emitClickEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CircleProgressComponent__svg_svg_0__svg_linearGradient_2_Template, 3, 5, "linearGradient", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CircleProgressComponent__svg_svg_0__svg_radialGradient_3_Template, 3, 5, "radialGradient", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CircleProgressComponent__svg_svg_0__svg_ng_container_4_Template, 3, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CircleProgressComponent__svg_svg_0__svg_circle_5_Template, 1, 6, "circle", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CircleProgressComponent__svg_svg_0__svg_ng_container_6_Template, 3, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CircleProgressComponent__svg_svg_0__svg_text_7_Template, 4, 6, "text", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CircleProgressComponent__svg_svg_0__svg_image_8_Template, 1, 5, "image", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", ctx_r0.svg.viewBox)("height", ctx_r0.svg.height)("width", ctx_r0.svg.width)("class", ctx_r0.options.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options.outerStrokeGradient);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options.backgroundGradient);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options.showBackground);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options.showInnerStroke);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", +ctx_r0.options.percent !== 0 || ctx_r0.options.showZeroOuterStroke);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.options.showImage && (ctx_r0.options.showTitle || ctx_r0.options.showUnits || ctx_r0.options.showSubtitle));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options.showImage);
} }
class CircleProgressOptions {
    constructor() {
        this.class = '';
        this.backgroundGradient = false;
        this.backgroundColor = 'transparent';
        this.backgroundGradientStopColor = 'transparent';
        this.backgroundOpacity = 1;
        this.backgroundStroke = 'transparent';
        this.backgroundStrokeWidth = 0;
        this.backgroundPadding = 5;
        this.percent = 0;
        this.radius = 90;
        this.space = 4;
        this.toFixed = 0;
        this.maxPercent = 1000;
        this.renderOnClick = true;
        this.units = '%';
        this.unitsFontSize = '10';
        this.unitsFontWeight = 'normal';
        this.unitsColor = '#444444';
        this.outerStrokeGradient = false;
        this.outerStrokeWidth = 8;
        this.outerStrokeColor = '#78C000';
        this.outerStrokeGradientStopColor = 'transparent';
        this.outerStrokeLinecap = 'round';
        this.innerStrokeColor = '#C7E596';
        this.innerStrokeWidth = 4;
        this.titleFormat = undefined;
        this.title = 'auto';
        this.titleColor = '#444444';
        this.titleFontSize = '20';
        this.titleFontWeight = 'normal';
        this.subtitleFormat = undefined;
        this.subtitle = 'progress';
        this.subtitleColor = '#A9A9A9';
        this.subtitleFontSize = '10';
        this.subtitleFontWeight = 'normal';
        this.imageSrc = undefined;
        this.imageHeight = undefined;
        this.imageWidth = undefined;
        this.animation = true;
        this.animateTitle = true;
        this.animateSubtitle = false;
        this.animationDuration = 500;
        this.showTitle = true;
        this.showSubtitle = true;
        this.showUnits = true;
        this.showImage = false;
        this.showBackground = true;
        this.showInnerStroke = true;
        this.clockwise = true;
        this.responsive = false;
        this.startFromZero = true;
        this.showZeroOuterStroke = true;
        this.lazy = false;
    }
}
/** @dynamic Prevent compiling error when using type `Document` https://github.com/angular/angular/issues/20351 */
class CircleProgressComponent {
    constructor(defaultOptions, elRef, document) {
        this.elRef = elRef;
        this.document = document;
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // <svg> of component
        this.svgElement = null;
        // whether <svg> is in viewport
        this.isInViewport = false;
        // event for notifying viewport change caused by scrolling or resizing
        this.onViewportChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this._viewportChangedSubscriber = null;
        this.options = new CircleProgressOptions();
        this.defaultOptions = new CircleProgressOptions();
        this._lastPercent = 0;
        this._gradientUUID = null;
        this.render = () => {
            this.applyOptions();
            if (this.options.lazy) {
                // Draw svg if it doesn't exist
                this.svgElement === null && this.draw(this._lastPercent);
                // Draw it only when it's in the viewport
                if (this.isInViewport) {
                    // Draw it at the latest position when I am in.
                    if (this.options.animation && this.options.animationDuration > 0) {
                        this.animate(this._lastPercent, this.options.percent);
                    }
                    else {
                        this.draw(this.options.percent);
                    }
                    this._lastPercent = this.options.percent;
                }
            }
            else {
                if (this.options.animation && this.options.animationDuration > 0) {
                    this.animate(this._lastPercent, this.options.percent);
                }
                else {
                    this.draw(this.options.percent);
                }
                this._lastPercent = this.options.percent;
            }
        };
        this.polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
            let angleInRadius = angleInDegrees * Math.PI / 180;
            let x = centerX + Math.sin(angleInRadius) * radius;
            let y = centerY - Math.cos(angleInRadius) * radius;
            return { x: x, y: y };
        };
        this.draw = (percent) => {
            // make percent reasonable
            percent = (percent === undefined) ? this.options.percent : Math.abs(percent);
            // circle percent shouldn't be greater than 100%.
            let circlePercent = (percent > 100) ? 100 : percent;
            // determine box size
            let boxSize = this.options.radius * 2 + this.options.outerStrokeWidth * 2;
            if (this.options.showBackground) {
                boxSize += (this.options.backgroundStrokeWidth * 2 + this.max(0, this.options.backgroundPadding * 2));
            }
            // the centre of the circle
            let centre = { x: boxSize / 2, y: boxSize / 2 };
            // the start point of the arc
            let startPoint = { x: centre.x, y: centre.y - this.options.radius };
            // get the end point of the arc
            let endPoint = this.polarToCartesian(centre.x, centre.y, this.options.radius, 360 * (this.options.clockwise ?
                circlePercent :
                (100 - circlePercent)) / 100); // ####################
            // We'll get an end point with the same [x, y] as the start point when percent is 100%, so move x a little bit.
            if (circlePercent === 100) {
                endPoint.x = endPoint.x + (this.options.clockwise ? -0.01 : +0.01);
            }
            // largeArcFlag and sweepFlag
            let largeArcFlag, sweepFlag;
            if (circlePercent > 50) {
                [largeArcFlag, sweepFlag] = this.options.clockwise ? [1, 1] : [1, 0];
            }
            else {
                [largeArcFlag, sweepFlag] = this.options.clockwise ? [0, 1] : [0, 0];
            }
            // percent may not equal the actual percent
            let titlePercent = this.options.animateTitle ? percent : this.options.percent;
            let titleTextPercent = titlePercent > this.options.maxPercent ?
                `${this.options.maxPercent.toFixed(this.options.toFixed)}+` : titlePercent.toFixed(this.options.toFixed);
            let subtitlePercent = this.options.animateSubtitle ? percent : this.options.percent;
            // get title object
            let title = {
                x: centre.x,
                y: centre.y,
                textAnchor: 'middle',
                color: this.options.titleColor,
                fontSize: this.options.titleFontSize,
                fontWeight: this.options.titleFontWeight,
                texts: [],
                tspans: []
            };
            // from v0.9.9, both title and titleFormat(...) may be an array of string.
            if (this.options.titleFormat !== undefined && this.options.titleFormat.constructor.name === 'Function') {
                let formatted = this.options.titleFormat(titlePercent);
                if (formatted instanceof Array) {
                    title.texts = [...formatted];
                }
                else {
                    title.texts.push(formatted.toString());
                }
            }
            else {
                if (this.options.title === 'auto') {
                    title.texts.push(titleTextPercent);
                }
                else {
                    if (this.options.title instanceof Array) {
                        title.texts = [...this.options.title];
                    }
                    else {
                        title.texts.push(this.options.title.toString());
                    }
                }
            }
            // get subtitle object
            let subtitle = {
                x: centre.x,
                y: centre.y,
                textAnchor: 'middle',
                color: this.options.subtitleColor,
                fontSize: this.options.subtitleFontSize,
                fontWeight: this.options.subtitleFontWeight,
                texts: [],
                tspans: []
            };
            // from v0.9.9, both subtitle and subtitleFormat(...) may be an array of string.
            if (this.options.subtitleFormat !== undefined && this.options.subtitleFormat.constructor.name === 'Function') {
                let formatted = this.options.subtitleFormat(subtitlePercent);
                if (formatted instanceof Array) {
                    subtitle.texts = [...formatted];
                }
                else {
                    subtitle.texts.push(formatted.toString());
                }
            }
            else {
                if (this.options.subtitle instanceof Array) {
                    subtitle.texts = [...this.options.subtitle];
                }
                else {
                    subtitle.texts.push(this.options.subtitle.toString());
                }
            }
            // get units object
            let units = {
                text: `${this.options.units}`,
                fontSize: this.options.unitsFontSize,
                fontWeight: this.options.unitsFontWeight,
                color: this.options.unitsColor
            };
            // get total count of text lines to be shown
            let rowCount = 0, rowNum = 1;
            this.options.showTitle && (rowCount += title.texts.length);
            this.options.showSubtitle && (rowCount += subtitle.texts.length);
            // calc dy for each tspan for title
            if (this.options.showTitle) {
                for (let span of title.texts) {
                    title.tspans.push({ span: span, dy: this.getRelativeY(rowNum, rowCount) });
                    rowNum++;
                }
            }
            // calc dy for each tspan for subtitle
            if (this.options.showSubtitle) {
                for (let span of subtitle.texts) {
                    subtitle.tspans.push({ span: span, dy: this.getRelativeY(rowNum, rowCount) });
                    rowNum++;
                }
            }
            // create ID for gradient element
            if (null === this._gradientUUID) {
                this._gradientUUID = this.uuid();
            }
            // Bring it all together
            this.svg = {
                viewBox: `0 0 ${boxSize} ${boxSize}`,
                // Set both width and height to '100%' if it's responsive
                width: this.options.responsive ? '100%' : boxSize,
                height: this.options.responsive ? '100%' : boxSize,
                backgroundCircle: {
                    cx: centre.x,
                    cy: centre.y,
                    r: this.options.radius + this.options.outerStrokeWidth / 2 + this.options.backgroundPadding,
                    fill: this.options.backgroundColor,
                    fillOpacity: this.options.backgroundOpacity,
                    stroke: this.options.backgroundStroke,
                    strokeWidth: this.options.backgroundStrokeWidth,
                },
                path: {
                    // A rx ry x-axis-rotation large-arc-flag sweep-flag x y (https://developer.mozilla.org/en/docs/Web/SVG/Tutorial/Paths#Arcs)
                    d: `M ${startPoint.x} ${startPoint.y}
        A ${this.options.radius} ${this.options.radius} 0 ${largeArcFlag} ${sweepFlag} ${endPoint.x} ${endPoint.y}`,
                    stroke: this.options.outerStrokeColor,
                    strokeWidth: this.options.outerStrokeWidth,
                    strokeLinecap: this.options.outerStrokeLinecap,
                    fill: 'none'
                },
                circle: {
                    cx: centre.x,
                    cy: centre.y,
                    r: this.options.radius - this.options.space - this.options.outerStrokeWidth / 2 - this.options.innerStrokeWidth / 2,
                    fill: 'none',
                    stroke: this.options.innerStrokeColor,
                    strokeWidth: this.options.innerStrokeWidth,
                },
                title: title,
                units: units,
                subtitle: subtitle,
                image: {
                    x: centre.x - this.options.imageWidth / 2,
                    y: centre.y - this.options.imageHeight / 2,
                    src: this.options.imageSrc,
                    width: this.options.imageWidth,
                    height: this.options.imageHeight,
                },
                outerLinearGradient: {
                    id: 'outer-linear-' + this._gradientUUID,
                    colorStop1: this.options.outerStrokeColor,
                    colorStop2: this.options.outerStrokeGradientStopColor === 'transparent' ? '#FFF' : this.options.outerStrokeGradientStopColor,
                },
                radialGradient: {
                    id: 'radial-' + this._gradientUUID,
                    colorStop1: this.options.backgroundColor,
                    colorStop2: this.options.backgroundGradientStopColor === 'transparent' ? '#FFF' : this.options.backgroundGradientStopColor,
                }
            };
        };
        this.getAnimationParameters = (previousPercent, currentPercent) => {
            const MIN_INTERVAL = 10;
            let times, step, interval;
            let fromPercent = this.options.startFromZero ? 0 : (previousPercent < 0 ? 0 : previousPercent);
            let toPercent = currentPercent < 0 ? 0 : this.min(currentPercent, this.options.maxPercent);
            let delta = Math.abs(Math.round(toPercent - fromPercent));
            if (delta >= 100) {
                // we will finish animation in 100 times
                times = 100;
                if (!this.options.animateTitle && !this.options.animateSubtitle) {
                    step = 1;
                }
                else {
                    // show title or subtitle animation even if the arc is full, we also need to finish it in 100 times.
                    step = Math.round(delta / times);
                }
            }
            else {
                // we will finish in as many times as the number of percent.
                times = delta;
                step = 1;
            }
            // Get the interval of timer
            interval = Math.round(this.options.animationDuration / times);
            // Readjust all values if the interval of timer is extremely small.
            if (interval < MIN_INTERVAL) {
                interval = MIN_INTERVAL;
                times = this.options.animationDuration / interval;
                if (!this.options.animateTitle && !this.options.animateSubtitle && delta > 100) {
                    step = Math.round(100 / times);
                }
                else {
                    step = Math.round(delta / times);
                }
            }
            // step must be greater than 0.
            if (step < 1) {
                step = 1;
            }
            return { times: times, step: step, interval: interval };
        };
        this.animate = (previousPercent, currentPercent) => {
            if (this._timerSubscription && !this._timerSubscription.closed) {
                this._timerSubscription.unsubscribe();
            }
            let fromPercent = this.options.startFromZero ? 0 : previousPercent;
            let toPercent = currentPercent;
            let { step: step, interval: interval } = this.getAnimationParameters(fromPercent, toPercent);
            let count = fromPercent;
            if (fromPercent < toPercent) {
                this._timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, interval).subscribe(() => {
                    count += step;
                    if (count <= toPercent) {
                        if (!this.options.animateTitle && !this.options.animateSubtitle && count >= 100) {
                            this.draw(toPercent);
                            this._timerSubscription.unsubscribe();
                        }
                        else {
                            this.draw(count);
                        }
                    }
                    else {
                        this.draw(toPercent);
                        this._timerSubscription.unsubscribe();
                    }
                });
            }
            else {
                this._timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, interval).subscribe(() => {
                    count -= step;
                    if (count >= toPercent) {
                        if (!this.options.animateTitle && !this.options.animateSubtitle && toPercent >= 100) {
                            this.draw(toPercent);
                            this._timerSubscription.unsubscribe();
                        }
                        else {
                            this.draw(count);
                        }
                    }
                    else {
                        this.draw(toPercent);
                        this._timerSubscription.unsubscribe();
                    }
                });
            }
        };
        this.emitClickEvent = (event) => {
            if (this.options.renderOnClick) {
                this.animate(0, this.options.percent);
            }
            this.onClick.emit(event);
        };
        this.applyOptions = () => {
            // the options of <circle-progress> may change already
            for (let name of Object.keys(this.options)) {
                if (this.hasOwnProperty(name) && this[name] !== undefined) {
                    this.options[name] = this[name];
                }
                else if (this.templateOptions && this.templateOptions[name] !== undefined) {
                    this.options[name] = this.templateOptions[name];
                }
            }
            // make sure key options valid
            this.options.radius = Math.abs(+this.options.radius);
            this.options.space = +this.options.space;
            this.options.percent = +this.options.percent > 0 ? +this.options.percent : 0;
            this.options.maxPercent = Math.abs(+this.options.maxPercent);
            this.options.animationDuration = Math.abs(this.options.animationDuration);
            this.options.outerStrokeWidth = Math.abs(+this.options.outerStrokeWidth);
            this.options.innerStrokeWidth = Math.abs(+this.options.innerStrokeWidth);
            this.options.backgroundPadding = +this.options.backgroundPadding;
        };
        this.getRelativeY = (rowNum, rowCount) => {
            // why '-0.18em'? It's a magic number when property 'alignment-baseline' equals 'baseline'. :)
            let initialOffset = -0.18, offset = 1;
            return (initialOffset + offset * (rowNum - rowCount / 2)).toFixed(2) + 'em';
        };
        this.min = (a, b) => {
            return a < b ? a : b;
        };
        this.max = (a, b) => {
            return a > b ? a : b;
        };
        this.uuid = () => {
            // https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php
            var dt = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (dt + Math.random() * 16) % 16 | 0;
                dt = Math.floor(dt / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            return uuid;
        };
        this.findSvgElement = function () {
            if (this.svgElement === null) {
                let tags = this.elRef.nativeElement.getElementsByTagName('svg');
                if (tags.length > 0) {
                    this.svgElement = tags[0];
                }
            }
        };
        this.checkViewport = () => {
            this.findSvgElement();
            let previousValue = this.isInViewport;
            this.isInViewport = this.isElementInViewport(this.svgElement);
            if (previousValue !== this.isInViewport) {
                this.onViewportChanged.emit({ oldValue: previousValue, newValue: this.isInViewport });
            }
        };
        this.onScroll = (event) => {
            this.checkViewport();
        };
        this.loadEventsForLazyMode = () => {
            if (this.options.lazy) {
                this.document.addEventListener('scroll', this.onScroll, true);
                this.window.addEventListener('resize', this.onScroll, true);
                if (this._viewportChangedSubscriber === null) {
                    this._viewportChangedSubscriber = this.onViewportChanged.subscribe(({ oldValue, newValue }) => {
                        newValue ? this.render() : null;
                    });
                }
                // svgElement must be created in DOM before being checked.
                // Is there a better way to check the existence of svgElemnt?
                let _timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 50).subscribe(() => {
                    this.svgElement === null ? this.checkViewport() : _timer.unsubscribe();
                });
            }
        };
        this.unloadEventsForLazyMode = () => {
            // Remove event listeners
            this.document.removeEventListener('scroll', this.onScroll, true);
            this.window.removeEventListener('resize', this.onScroll, true);
            // Unsubscribe onViewportChanged
            if (this._viewportChangedSubscriber !== null) {
                this._viewportChangedSubscriber.unsubscribe();
                this._viewportChangedSubscriber = null;
            }
        };
        this.document = document;
        this.window = this.document.defaultView;
        Object.assign(this.options, defaultOptions);
        Object.assign(this.defaultOptions, defaultOptions);
    }
    isDrawing() {
        return (this._timerSubscription && !this._timerSubscription.closed);
    }
    isElementInViewport(el) {
        // Return false if el has not been created in page.
        if (el === null || el === undefined)
            return false;
        // Check if the element is out of view due to a container scrolling
        let rect = el.getBoundingClientRect(), parent = el.parentNode, parentRect;
        do {
            parentRect = parent.getBoundingClientRect();
            if (rect.top >= parentRect.bottom)
                return false;
            if (rect.bottom <= parentRect.top)
                return false;
            if (rect.left >= parentRect.right)
                return false;
            if (rect.right <= parentRect.left)
                return false;
            parent = parent.parentNode;
        } while (parent != this.document.body);
        // Check its within the document viewport
        if (rect.top >= (this.window.innerHeight || this.document.documentElement.clientHeight))
            return false;
        if (rect.bottom <= 0)
            return false;
        if (rect.left >= (this.window.innerWidth || this.document.documentElement.clientWidth))
            return false;
        if (rect.right <= 0)
            return false;
        return true;
    }
    ngOnInit() {
        this.loadEventsForLazyMode();
    }
    ngOnDestroy() {
        this.unloadEventsForLazyMode();
    }
    ngOnChanges(changes) {
        this.render();
        if ('lazy' in changes) {
            changes.lazy.currentValue ? this.loadEventsForLazyMode() : this.unloadEventsForLazyMode();
        }
    }
}
CircleProgressComponent.ɵfac = function CircleProgressComponent_Factory(t) { return new (t || CircleProgressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CircleProgressOptions), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
CircleProgressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CircleProgressComponent, selectors: [["circle-progress"]], inputs: { name: "name", class: "class", backgroundGradient: "backgroundGradient", backgroundColor: "backgroundColor", backgroundGradientStopColor: "backgroundGradientStopColor", backgroundOpacity: "backgroundOpacity", backgroundStroke: "backgroundStroke", backgroundStrokeWidth: "backgroundStrokeWidth", backgroundPadding: "backgroundPadding", radius: "radius", space: "space", percent: "percent", toFixed: "toFixed", maxPercent: "maxPercent", renderOnClick: "renderOnClick", units: "units", unitsFontSize: "unitsFontSize", unitsFontWeight: "unitsFontWeight", unitsColor: "unitsColor", outerStrokeGradient: "outerStrokeGradient", outerStrokeWidth: "outerStrokeWidth", outerStrokeColor: "outerStrokeColor", outerStrokeGradientStopColor: "outerStrokeGradientStopColor", outerStrokeLinecap: "outerStrokeLinecap", innerStrokeColor: "innerStrokeColor", innerStrokeWidth: "innerStrokeWidth", titleFormat: "titleFormat", title: "title", titleColor: "titleColor", titleFontSize: "titleFontSize", titleFontWeight: "titleFontWeight", subtitleFormat: "subtitleFormat", subtitle: "subtitle", subtitleColor: "subtitleColor", subtitleFontSize: "subtitleFontSize", subtitleFontWeight: "subtitleFontWeight", imageSrc: "imageSrc", imageHeight: "imageHeight", imageWidth: "imageWidth", animation: "animation", animateTitle: "animateTitle", animateSubtitle: "animateSubtitle", animationDuration: "animationDuration", showTitle: "showTitle", showSubtitle: "showSubtitle", showUnits: "showUnits", showImage: "showImage", showBackground: "showBackground", showInnerStroke: "showInnerStroke", clockwise: "clockwise", responsive: "responsive", startFromZero: "startFromZero", showZeroOuterStroke: "showZeroOuterStroke", lazy: "lazy", templateOptions: ["options", "templateOptions"] }, outputs: { onClick: "onClick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "xMidYMid meet", 3, "click", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "xMidYMid meet", 3, "click"], [4, "ngIf"], ["alignment-baseline", "baseline", 4, "ngIf"], ["preserveAspectRatio", "none", 4, "ngIf"], ["offset", "5%"], ["offset", "95%"], ["alignment-baseline", "baseline"], [4, "ngFor", "ngForOf"], ["preserveAspectRatio", "none"]], template: function CircleProgressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CircleProgressComponent__svg_svg_0_Template, 9, 11, "svg", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.svg);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], encapsulation: 2 });
CircleProgressComponent.ctorParameters = () => [
    { type: CircleProgressOptions },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
];
CircleProgressComponent.propDecorators = {
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    backgroundGradient: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    backgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    backgroundGradientStopColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    backgroundOpacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    backgroundStroke: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    backgroundStrokeWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    backgroundPadding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    radius: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    space: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    percent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    toFixed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxPercent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    renderOnClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    units: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    unitsFontSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    unitsFontWeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    unitsColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    outerStrokeGradient: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    outerStrokeWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    outerStrokeColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    outerStrokeGradientStopColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    outerStrokeLinecap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    innerStrokeColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    innerStrokeWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    titleFormat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    titleColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    titleFontSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    titleFontWeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    subtitleFormat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    subtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    subtitleColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    subtitleFontSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    subtitleFontWeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    imageSrc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    imageHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    imageWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    animation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    animateTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    animateSubtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    animationDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showSubtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showUnits: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showBackground: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showInnerStroke: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    clockwise: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    responsive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    startFromZero: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showZeroOuterStroke: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    lazy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    templateOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['options',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CircleProgressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'circle-progress',
                template: `
        <svg xmlns="http://www.w3.org/2000/svg" *ngIf="svg"
             [attr.viewBox]="svg.viewBox" preserveAspectRatio="xMidYMid meet"
             [attr.height]="svg.height" [attr.width]="svg.width" (click)="emitClickEvent($event)" [attr.class]="options.class">
            <defs>
                <linearGradient *ngIf="options.outerStrokeGradient" [attr.id]="svg.outerLinearGradient.id">
                    <stop offset="5%" [attr.stop-color]="svg.outerLinearGradient.colorStop1"  [attr.stop-opacity]="1"/>
                    <stop offset="95%" [attr.stop-color]="svg.outerLinearGradient.colorStop2" [attr.stop-opacity]="1"/>
                </linearGradient>
                <radialGradient *ngIf="options.backgroundGradient" [attr.id]="svg.radialGradient.id">
                    <stop offset="5%" [attr.stop-color]="svg.radialGradient.colorStop1" [attr.stop-opacity]="1"/>
                    <stop offset="95%" [attr.stop-color]="svg.radialGradient.colorStop2" [attr.stop-opacity]="1"/>
                </radialGradient>
            </defs>
            <ng-container *ngIf="options.showBackground">
                <circle *ngIf="!options.backgroundGradient"
                        [attr.cx]="svg.backgroundCircle.cx"
                        [attr.cy]="svg.backgroundCircle.cy"
                        [attr.r]="svg.backgroundCircle.r"
                        [attr.fill]="svg.backgroundCircle.fill"
                        [attr.fill-opacity]="svg.backgroundCircle.fillOpacity"
                        [attr.stroke]="svg.backgroundCircle.stroke"
                        [attr.stroke-width]="svg.backgroundCircle.strokeWidth"/>
                <circle *ngIf="options.backgroundGradient"
                        [attr.cx]="svg.backgroundCircle.cx"
                        [attr.cy]="svg.backgroundCircle.cy"
                        [attr.r]="svg.backgroundCircle.r"
                        attr.fill="url(#{{svg.radialGradient.id}})"
                        [attr.fill-opacity]="svg.backgroundCircle.fillOpacity"
                        [attr.stroke]="svg.backgroundCircle.stroke"
                        [attr.stroke-width]="svg.backgroundCircle.strokeWidth"/>
            </ng-container>            
            <circle *ngIf="options.showInnerStroke"
                    [attr.cx]="svg.circle.cx"
                    [attr.cy]="svg.circle.cy"
                    [attr.r]="svg.circle.r"
                    [attr.fill]="svg.circle.fill"
                    [attr.stroke]="svg.circle.stroke"
                    [attr.stroke-width]="svg.circle.strokeWidth"/>
            <ng-container *ngIf="+options.percent!==0 || options.showZeroOuterStroke">
                <path *ngIf="!options.outerStrokeGradient"
                        [attr.d]="svg.path.d"
                        [attr.stroke]="svg.path.stroke"
                        [attr.stroke-width]="svg.path.strokeWidth"
                        [attr.stroke-linecap]="svg.path.strokeLinecap"
                        [attr.fill]="svg.path.fill"/>
                <path *ngIf="options.outerStrokeGradient"
                        [attr.d]="svg.path.d"
                        attr.stroke="url(#{{svg.outerLinearGradient.id}})"
                        [attr.stroke-width]="svg.path.strokeWidth"
                        [attr.stroke-linecap]="svg.path.strokeLinecap"
                        [attr.fill]="svg.path.fill"/>
            </ng-container>
            <text *ngIf="!options.showImage && (options.showTitle || options.showUnits || options.showSubtitle)"
                  alignment-baseline="baseline"
                  [attr.x]="svg.circle.cx"
                  [attr.y]="svg.circle.cy"
                  [attr.text-anchor]="svg.title.textAnchor">
                <ng-container *ngIf="options.showTitle">
                    <tspan *ngFor="let tspan of svg.title.tspans"
                           [attr.x]="svg.title.x"
                           [attr.y]="svg.title.y"
                           [attr.dy]="tspan.dy"
                           [attr.font-size]="svg.title.fontSize"
                           [attr.font-weight]="svg.title.fontWeight"
                           [attr.fill]="svg.title.color">{{tspan.span}}</tspan>
                </ng-container>
                <tspan *ngIf="options.showUnits"
                       [attr.font-size]="svg.units.fontSize"
                       [attr.font-weight]="svg.units.fontWeight"
                       [attr.fill]="svg.units.color">{{svg.units.text}}</tspan>
                <ng-container *ngIf="options.showSubtitle">
                    <tspan *ngFor="let tspan of svg.subtitle.tspans"
                           [attr.x]="svg.subtitle.x"
                           [attr.y]="svg.subtitle.y"
                           [attr.dy]="tspan.dy"
                           [attr.font-size]="svg.subtitle.fontSize"
                           [attr.font-weight]="svg.subtitle.fontWeight"
                           [attr.fill]="svg.subtitle.color">{{tspan.span}}</tspan>
                </ng-container>
            </text>
            <image *ngIf="options.showImage" preserveAspectRatio="none" 
                [attr.height]="svg.image.height"
                [attr.width]="svg.image.width"
                [attr.xlink:href]="svg.image.src"
                [attr.x]="svg.image.x"
                [attr.y]="svg.image.y"
            />
        </svg>
    `
            }]
    }], function () { return [{ type: CircleProgressOptions }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, { onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], class: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], backgroundGradient: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], backgroundGradientStopColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], backgroundOpacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], backgroundStroke: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], backgroundStrokeWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], backgroundPadding: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], radius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], space: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], percent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], toFixed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxPercent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], renderOnClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], units: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], unitsFontSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], unitsFontWeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], unitsColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], outerStrokeGradient: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], outerStrokeWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], outerStrokeColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], outerStrokeGradientStopColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], outerStrokeLinecap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], innerStrokeColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], innerStrokeWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], titleFormat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], titleColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], titleFontSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], titleFontWeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subtitleFormat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subtitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subtitleColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subtitleFontSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subtitleFontWeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imageSrc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imageHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imageWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], animation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], animateTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], animateSubtitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], animationDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showSubtitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showUnits: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showBackground: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showInnerStroke: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clockwise: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], responsive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], startFromZero: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showZeroOuterStroke: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lazy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], templateOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['options']
        }] }); })();

class NgCircleProgressModule {
    static forRoot(options = {}) {
        return {
            ngModule: NgCircleProgressModule,
            providers: [
                { provide: CircleProgressOptions, useValue: options }
            ]
        };
    }
}
NgCircleProgressModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgCircleProgressModule });
NgCircleProgressModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgCircleProgressModule_Factory(t) { return new (t || NgCircleProgressModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgCircleProgressModule, { declarations: function () { return [CircleProgressComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [CircleProgressComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgCircleProgressModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [CircleProgressComponent],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [CircleProgressComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of ng-circle-progress
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-circle-progress.js.map

/***/ }),

/***/ "Lm2G":
/*!*************************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js ***!
  \*************************************************************************************************/
/*! exports provided: PagerComponent, PaginationComponent, PaginationConfig, PaginationModule, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerComponent", function() { return PagerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationConfig", function() { return PaginationConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationModule", function() { return PaginationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return PAGER_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return PAGINATION_CONTROL_VALUE_ACCESSOR; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Provides default values for Pagination and pager components
 */



const _c0 = function (a0, a1) { return { "pull-left": a0, "float-left": a1 }; };
const _c1 = function (a0, a1) { return { "pull-right": a0, "float-right": a1 }; };
const _c2 = function (a0, a1) { return { disabled: a0, currentPage: a1 }; };
function PaginationComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_1_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.selectPage(1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r0.noPrevious() || ctx_r0.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.customFirstTemplate || _r11)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, ctx_r0.noPrevious() || ctx_r0.disabled, ctx_r0.page));
} }
function PaginationComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_2_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.selectPage(ctx_r17.page - 1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r1.noPrevious() || ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.customPreviousTemplate || _r9)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, ctx_r1.noPrevious() || ctx_r1.disabled, ctx_r1.page));
} }
const _c3 = function (a0, a1, a2) { return { disabled: a0, $implicit: a1, currentPage: a2 }; };
function PaginationComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_3_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const pg_r19 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.selectPage(pg_r19.number, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pg_r19 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", pg_r19.active)("disabled", ctx_r2.disabled && !pg_r19.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.customPageTemplate || _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c3, ctx_r2.disabled, pg_r19, ctx_r2.page));
} }
function PaginationComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_4_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.selectPage(ctx_r22.page + 1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r3.noNext() || ctx_r3.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.customNextTemplate || _r7)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, ctx_r3.noNext() || ctx_r3.disabled, ctx_r3.page));
} }
function PaginationComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_5_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.selectPage(ctx_r24.totalPages, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r4.noNext() || ctx_r4.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.customLastTemplate || _r13)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, ctx_r4.noNext() || ctx_r4.disabled, ctx_r4.page));
} }
function PaginationComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const page_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r26.text);
} }
function PaginationComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.getText("next"));
} }
function PaginationComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.getText("previous"));
} }
function PaginationComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.getText("first"));
} }
function PaginationComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.getText("last"));
} }
class PaginationConfig {
    constructor() {
        this.main = {
            maxSize: void 0,
            itemsPerPage: 10,
            boundaryLinks: false,
            directionLinks: true,
            firstText: 'First',
            previousText: 'Previous',
            nextText: 'Next',
            lastText: 'Last',
            pageBtnClass: '',
            rotate: true
        };
        this.pager = {
            itemsPerPage: 15,
            previousText: '« Previous',
            nextText: 'Next »',
            pageBtnClass: '',
            align: true
        };
    }
}
PaginationConfig.ɵfac = function PaginationConfig_Factory(t) { return new (t || PaginationConfig)(); };
/** @nocollapse */ PaginationConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function PaginationConfig_Factory() { return new PaginationConfig(); }, token: PaginationConfig, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PAGER_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => PagerComponent)),
    multi: true
};
class PagerComponent {
    /**
     * @param {?} elementRef
     * @param {?} paginationConfig
     * @param {?} changeDetection
     */
    constructor(elementRef, paginationConfig, changeDetection) {
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /**
         * fired when total pages count changes, $event:number equals to total pages count
         */
        this.numPages = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * fired when page was changed, $event:{page, itemsPerPage} equals to
         * object with current page index and number of items per page
         */
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(Object.assign({}, paginationConfig.main, paginationConfig.pager));
        }
    }
    /**
     * maximum number of items per page. If value less than 1 will display all items on one page
     * @return {?}
     */
    get itemsPerPage() {
        return this._itemsPerPage;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set itemsPerPage(v) {
        this._itemsPerPage = v;
        this.totalPages = this.calculateTotalPages();
    }
    /**
     * total number of items in all pages
     * @return {?}
     */
    get totalItems() {
        return this._totalItems;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set totalItems(v) {
        this._totalItems = v;
        this.totalPages = this.calculateTotalPages();
    }
    /**
     * @return {?}
     */
    get totalPages() {
        return this._totalPages;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set totalPages(v) {
        this._totalPages = v;
        this.numPages.emit(v);
        if (this.inited) {
            this.selectPage(this.page);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set page(value) {
        /** @type {?} */
        const _previous = this._page;
        this._page = value > this.totalPages ? this.totalPages : value || 1;
        this.changeDetection.markForCheck();
        if (_previous === this._page || typeof _previous === 'undefined') {
            return;
        }
        this.pageChanged.emit({
            page: this._page,
            itemsPerPage: this.itemsPerPage
        });
    }
    /**
     * @return {?}
     */
    get page() {
        return this._page;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    configureOptions(config) {
        this.config = Object.assign({}, config);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        }
        // watch for maxSize
        this.maxSize =
            typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
        this.rotate =
            typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
        this.boundaryLinks =
            typeof this.boundaryLinks !== 'undefined'
                ? this.boundaryLinks
                : this.config.boundaryLinks;
        this.directionLinks =
            typeof this.directionLinks !== 'undefined'
                ? this.directionLinks
                : this.config.directionLinks;
        this.pageBtnClass =
            typeof this.pageBtnClass !== 'undefined'
                ? this.pageBtnClass
                : this.config.pageBtnClass;
        // base class
        this.itemsPerPage =
            typeof this.itemsPerPage !== 'undefined'
                ? this.itemsPerPage
                : this.config.itemsPerPage;
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getText(key) {
        // tslint:disable-next-line:no-any
        return ((/** @type {?} */ (this)))[`${key}Text`] || ((/** @type {?} */ (this))).config[`${key}Text`];
    }
    /**
     * @return {?}
     */
    noPrevious() {
        return this.page === 1;
    }
    /**
     * @return {?}
     */
    noNext() {
        return this.page === this.totalPages;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */
    selectPage(page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                // tslint:disable-next-line:no-any
                /** @type {?} */
                const target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    }
    // Create page object used in template
    /**
     * @protected
     * @param {?} num
     * @param {?} text
     * @param {?} active
     * @return {?}
     */
    makePage(num, text, active) {
        return { text, number: num, active };
    }
    /**
     * @protected
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    getPages(currentPage, totalPages) {
        /** @type {?} */
        const pages = [];
        // Default page limits
        /** @type {?} */
        let startPage = 1;
        /** @type {?} */
        let endPage = totalPages;
        /** @type {?} */
        const isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage =
                    (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (let num = startPage; num <= endPage; num++) {
            /** @type {?} */
            const page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                /** @type {?} */
                const previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                /** @type {?} */
                const nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    }
    // base class
    /**
     * @protected
     * @return {?}
     */
    calculateTotalPages() {
        /** @type {?} */
        const totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    }
}
PagerComponent.ɵfac = function PagerComponent_Factory(t) { return new (t || PagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
PagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagerComponent, selectors: [["pager"]], inputs: { itemsPerPage: "itemsPerPage", totalItems: "totalItems", maxSize: "maxSize", rotate: "rotate", boundaryLinks: "boundaryLinks", directionLinks: "directionLinks", pageBtnClass: "pageBtnClass", align: "align", firstText: "firstText", previousText: "previousText", nextText: "nextText", lastText: "lastText", disabled: "disabled" }, outputs: { numPages: "numPages", pageChanged: "pageChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([PAGER_CONTROL_VALUE_ACCESSOR])], decls: 7, vars: 24, consts: [[1, "pager"], [3, "ngClass"], ["href", "", 3, "click"]], template: function PagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagerComponent_Template_a_click_2_listener($event) { return ctx.selectPage(ctx.page - 1, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagerComponent_Template_a_click_5_listener($event) { return ctx.selectPage(ctx.page + 1, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pageBtnClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.noPrevious())("previous", ctx.align);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c0, ctx.align, ctx.align));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getText("previous"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pageBtnClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.noNext())("next", ctx.align);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](21, _c1, ctx.align, ctx.align));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getText("next"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], encapsulation: 2 });
/** @nocollapse */
PagerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: PaginationConfig },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
PagerComponent.propDecorators = {
    align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    boundaryLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    directionLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    firstText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    previousText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nextText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    lastText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rotate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pageBtnClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    numPages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    pageChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    itemsPerPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    totalItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pager',
                template: "<ul class=\"pager\">\n  <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\"\n      [ngClass]=\"{'pull-left': align, 'float-left': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page - 1, $event)\">{{ getText('previous') }}</a>\n  </li>\n  <li [class.disabled]=\"noNext()\" [class.next]=\"align\"\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page + 1, $event)\">{{ getText('next') }}</a>\n  </li>\n</ul>\n",
                providers: [PAGER_CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: PaginationConfig }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { numPages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pageChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], itemsPerPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], totalItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rotate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], boundaryLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], directionLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageBtnClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], align: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], firstText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], previousText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nextText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lastText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function PageChangedEvent() { }
if (false) {}
/** @type {?} */
const PAGINATION_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => PaginationComponent)),
    multi: true
};
class PaginationComponent {
    /**
     * @param {?} elementRef
     * @param {?} paginationConfig
     * @param {?} changeDetection
     */
    constructor(elementRef, paginationConfig, changeDetection) {
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /**
         * fired when total pages count changes, $event:number equals to total pages count
         */
        this.numPages = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * fired when page was changed, $event:{page, itemsPerPage} equals to object
         * with current page index and number of items per page
         */
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(paginationConfig.main);
        }
    }
    /**
     * maximum number of items per page. If value less than 1 will display all items on one page
     * @return {?}
     */
    get itemsPerPage() {
        return this._itemsPerPage;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set itemsPerPage(v) {
        this._itemsPerPage = v;
        this.totalPages = this.calculateTotalPages();
    }
    /**
     * total number of items in all pages
     * @return {?}
     */
    get totalItems() {
        return this._totalItems;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set totalItems(v) {
        this._totalItems = v;
        this.totalPages = this.calculateTotalPages();
    }
    /**
     * @return {?}
     */
    get totalPages() {
        return this._totalPages;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set totalPages(v) {
        this._totalPages = v;
        this.numPages.emit(v);
        if (this.inited) {
            this.selectPage(this.page);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set page(value) {
        /** @type {?} */
        const _previous = this._page;
        this._page = value > this.totalPages ? this.totalPages : value || 1;
        this.changeDetection.markForCheck();
        if (_previous === this._page || typeof _previous === 'undefined') {
            return;
        }
        this.pageChanged.emit({
            page: this._page,
            itemsPerPage: this.itemsPerPage
        });
    }
    /**
     * @return {?}
     */
    get page() {
        return this._page;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    configureOptions(config) {
        this.config = Object.assign({}, config);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        }
        // watch for maxSize
        this.maxSize =
            typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
        this.rotate =
            typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
        this.boundaryLinks =
            typeof this.boundaryLinks !== 'undefined'
                ? this.boundaryLinks
                : this.config.boundaryLinks;
        this.directionLinks =
            typeof this.directionLinks !== 'undefined'
                ? this.directionLinks
                : this.config.directionLinks;
        this.pageBtnClass =
            typeof this.pageBtnClass !== 'undefined'
                ? this.pageBtnClass
                : this.config.pageBtnClass;
        // base class
        this.itemsPerPage =
            typeof this.itemsPerPage !== 'undefined'
                ? this.itemsPerPage
                : this.config.itemsPerPage;
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getText(key) {
        // tslint:disable-next-line:no-any
        return ((/** @type {?} */ (this)))[`${key}Text`] || ((/** @type {?} */ (this))).config[`${key}Text`];
    }
    /**
     * @return {?}
     */
    noPrevious() {
        return this.page === 1;
    }
    /**
     * @return {?}
     */
    noNext() {
        return this.page === this.totalPages;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */
    selectPage(page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                // tslint:disable-next-line:no-any
                /** @type {?} */
                const target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    }
    // Create page object used in template
    /**
     * @protected
     * @param {?} num
     * @param {?} text
     * @param {?} active
     * @return {?}
     */
    makePage(num, text, active) {
        return { text, number: num, active };
    }
    /**
     * @protected
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    getPages(currentPage, totalPages) {
        /** @type {?} */
        const pages = [];
        // Default page limits
        /** @type {?} */
        let startPage = 1;
        /** @type {?} */
        let endPage = totalPages;
        /** @type {?} */
        const isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage =
                    (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (let num = startPage; num <= endPage; num++) {
            /** @type {?} */
            const page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                /** @type {?} */
                const previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                /** @type {?} */
                const nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    }
    // base class
    /**
     * @protected
     * @return {?}
     */
    calculateTotalPages() {
        /** @type {?} */
        const totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
PaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginationComponent, selectors: [["pagination"]], inputs: { itemsPerPage: "itemsPerPage", totalItems: "totalItems", maxSize: "maxSize", rotate: "rotate", boundaryLinks: "boundaryLinks", directionLinks: "directionLinks", pageBtnClass: "pageBtnClass", align: "align", firstText: "firstText", previousText: "previousText", nextText: "nextText", lastText: "lastText", disabled: "disabled", customPageTemplate: "customPageTemplate", customNextTemplate: "customNextTemplate", customPreviousTemplate: "customPreviousTemplate", customFirstTemplate: "customFirstTemplate", customLastTemplate: "customLastTemplate" }, outputs: { numPages: "numPages", pageChanged: "pageChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([PAGINATION_CONTROL_VALUE_ACCESSOR])], decls: 16, vars: 6, consts: [[1, "pagination", 3, "ngClass"], ["class", "pagination-first page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-prev page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-page page-item", 3, "active", "disabled", 4, "ngFor", "ngForOf"], ["class", "pagination-next page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-last page-item", 3, "disabled", 4, "ngIf"], ["defaultPageTemplate", ""], ["defaultNextTemplate", ""], ["defaultPreviousTemplate", ""], ["defaultFirstTemplate", ""], ["defaultLastTemplate", ""], [1, "pagination-first", "page-item"], ["href", "", 1, "page-link", 3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "pagination-prev", "page-item"], [1, "pagination-page", "page-item"], [1, "pagination-next", "page-item"], [1, "pagination-last", "page-item"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationComponent_li_1_Template, 3, 7, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationComponent_li_2_Template, 3, 7, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PaginationComponent_li_3_Template, 3, 10, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PaginationComponent_li_4_Template, 3, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PaginationComponent_li_5_Template, 3, 7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PaginationComponent_ng_template_6_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PaginationComponent_ng_template_8_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PaginationComponent_ng_template_10_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PaginationComponent_ng_template_12_Template, 1, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PaginationComponent_ng_template_14_Template, 1, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classMap);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.directionLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.directionLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]], encapsulation: 2 });
/** @nocollapse */
PaginationComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: PaginationConfig },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
PaginationComponent.propDecorators = {
    align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    boundaryLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    directionLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    firstText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    previousText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nextText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    lastText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rotate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pageBtnClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    customPageTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    customNextTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    customPreviousTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    customFirstTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    customLastTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    numPages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    pageChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    itemsPerPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    totalItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pagination',
                template: "<ul class=\"pagination\" [ngClass]=\"classMap\">\n  <li class=\"pagination-first page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noPrevious() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customFirstTemplate || defaultFirstTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noPrevious() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-prev page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noPrevious() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customPreviousTemplate || defaultPreviousTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noPrevious() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li *ngFor=\"let pg of pages\"\n      [class.active]=\"pg.active\"\n      [class.disabled]=\"disabled && !pg.active\"\n      class=\"pagination-page page-item\">\n    <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customPageTemplate || defaultPageTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: disabled, $implicit: pg, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-next page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noNext() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customNextTemplate || defaultNextTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noNext() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-last page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noNext() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customLastTemplate || defaultLastTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noNext() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n</ul>\n\n<ng-template #defaultPageTemplate let-page>{{ page.text }}</ng-template>\n\n<ng-template #defaultNextTemplate>{{ getText('next') }}</ng-template>\n\n<ng-template #defaultPreviousTemplate>{{ getText('previous') }}</ng-template>\n\n<ng-template #defaultFirstTemplate>{{ getText('first') }}</ng-template>\n\n<ng-template #defaultLastTemplate>{{ getText('last') }}</ng-template>\n",
                providers: [PAGINATION_CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: PaginationConfig }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { numPages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pageChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], itemsPerPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], totalItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rotate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], boundaryLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], directionLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageBtnClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], align: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], firstText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], previousText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nextText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lastText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customPageTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customNextTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customPreviousTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customFirstTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customLastTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaginationModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: PaginationModule, providers: [] };
    }
}
PaginationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PaginationModule });
PaginationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PaginationModule_Factory(t) { return new (t || PaginationModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PaginationModule, { declarations: function () { return [PagerComponent, PaginationComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [PagerComponent, PaginationComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                declarations: [PagerComponent, PaginationComponent],
                exports: [PagerComponent, PaginationComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-bootstrap-pagination.js.map

/***/ }),

/***/ "MVaF":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/edit-profile/edit-profile.component.ts ***!
  \*************************************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-file-upload */ "7pIB");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/post.service */ "PkDP");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/user.service */ "wf7n");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_directives_image_preview_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/directives/image-preview.directive */ "voxy");














const _c0 = ["modal"];
function EditProfileComponent_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditProfileComponent_div_28_div_1_Template_i_click_2_listener() { const item_r3 = ctx.$implicit; return item_r3.remove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", item_r3 == null ? null : item_r3._file);
} }
function EditProfileComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditProfileComponent_div_28_div_1_Template, 3, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.uploaderImage.queue);
} }
class EditProfileComponent {
    constructor(spinner, toastr, cookieService, postService, userService) {
        this.spinner = spinner;
        this.toastr = toastr;
        this.cookieService = cookieService;
        this.postService = postService;
        this.userService = userService;
        this.profileEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.imageSelected = false;
        this.preloader = false;
        this.profile = {
            name: '',
            title: '',
            linkedin: ''
        };
    }
    ngOnInit() {
        this.token = this.cookieService.get('token');
    }
    openModal(profile) {
        this.profile = JSON.parse(JSON.stringify(profile));
        this.modal.show();
    }
    addImageUploader() {
        this.uploaderImage = null;
        this.imageSelected = false;
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
    startUpload() {
        // if images
        if (this.uploaderImage && this.uploaderImage.queue.length) {
            this.spinner.show();
            this.uploaderImage.uploadAll();
            this.uploaderImage.onSuccessItem = (fileItem, response) => {
                const img = JSON.parse(response);
                this.profile.profileImage = img.url;
                this.editProfile();
            };
        }
        else {
            this.editProfile();
        }
    }
    editProfile() {
        console.log(this.profile);
        this.spinner.show();
        this.userService.editCurrentUser(this.profile).subscribe((data) => {
            this.spinner.hide();
            this.profileEdited.emit();
            this.modal.hide();
        }, (error) => {
            this.toastr.error('error');
            this.spinner.hide();
        });
    }
}
EditProfileComponent.ɵfac = function EditProfileComponent_Factory(t) { return new (t || EditProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"])); };
EditProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditProfileComponent, selectors: [["app-edit-profile"]], viewQuery: function EditProfileComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
    } }, outputs: { profileEdited: "profileEdited" }, decls: 31, vars: 6, consts: [["bsModal", "", "tabindex", "-1", "role", "dialog", 1, "modal", "fade"], ["modal", "bs-modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], [1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "row"], ["for", "example-text-input", 1, "col-md-12", "col-form-label"], [1, "col-md-12"], ["type", "file", "ng2FileSelect", "", "role", "image-input", "accept", "image/*", 1, "form-control-file", 3, "uploader", "click"], ["class", "col-md-12", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled", "click"], ["class", "media-objects", 4, "ngFor", "ngForOf"], [1, "media-objects"], ["src", "", "imgPreview", "", 1, "images", 3, "image"], [1, "fas", "fa-trash", 3, "click"]], template: function EditProfileComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Edit Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditProfileComponent_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditProfileComponent_Template_input_ngModelChange_14_listener($event) { return ctx.profile.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditProfileComponent_Template_input_ngModelChange_18_listener($event) { return ctx.profile.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditProfileComponent_Template_input_ngModelChange_22_listener($event) { return ctx.profile.linkedin = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Image (Max. size 5MB)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditProfileComponent_Template_input_click_27_listener() { return ctx.addImageUploader(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, EditProfileComponent_div_28_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditProfileComponent_Template_button_click_29_listener() { return ctx.startUpload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.profile.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.profile.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.profile.linkedin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("uploader", ctx.uploaderImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.uploaderImage == null ? null : ctx.uploaderImage.queue == null ? null : ctx.uploaderImage.queue.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(ctx.profile == null ? null : ctx.profile.name == null ? null : ctx.profile.name.length) || !(ctx.profile == null ? null : ctx.profile.title == null ? null : ctx.profile.title.length));
    } }, directives: [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileSelectDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _shared_directives_image_preview_directive__WEBPACK_IMPORTED_MODULE_11__["ImagePreviewDirective"]], styles: [".media-objects[_ngcontent-%COMP%] {\n  height: 110px;\n}\n.media-objects[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%] {\n  width: 90%;\n  float: left;\n}\n.media-objects[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1em;\n  margin-left: 2%;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGVkaXQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjtBQUNFO0VBQ0UsVUFBQTtFQUVBLFdBQUE7QUFBSjtBQUdFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBREoiLCJmaWxlIjoiZWRpdC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lZGlhLW9iamVjdHMge1xyXG4gIGhlaWdodDogMTEwcHg7XHJcblxyXG4gIC5pbWFnZXMge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIC8vICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "MX0M":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/join-to-conference/join-to-conference.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: JoinToConferenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinToConferenceComponent", function() { return JoinToConferenceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "F8Sv");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "44PX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/footer/footer.component */ "TnyQ");





class JoinToConferenceComponent {
    constructor() { }
    ngOnInit() {
    }
}
JoinToConferenceComponent.ɵfac = function JoinToConferenceComponent_Factory(t) { return new (t || JoinToConferenceComponent)(); };
JoinToConferenceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JoinToConferenceComponent, selectors: [["app-join-to-conference"]], decls: 196, vars: 0, consts: [[1, "container-fluid"], [1, "title"], ["heading", "Day 1"], ["border", "1", "width", "100%", 2, "border-color", "#fff"], [1, "header_title"], [1, "tcenter", 2, "width", "20%"], [1, "body_content"], [1, "tcenter"], ["routerLink", "/videos/1", 1, "join"], [2, "padding", "0", "margin", "0 0 0 18px"], ["routerLink", "/videos/2", 1, "join"], ["routerLink", "/videos/3", 1, "join"], [2, "padding", "0", "margin", "0"], ["routerLink", "/videos/4", 1, "join"], ["routerLink", "/videos/5", 1, "join"], ["heading", "Day 2"], ["routerLink", "/videos/6", 1, "join"], ["routerLink", "/videos/7", 1, "join"], [1, "name_col"], [1, "body_content2"], ["routerLink", "/videos/8", 1, "join"], ["routerLink", "/videos/9", 1, "join"], ["routerLink", "/videos/10", 1, "join"], ["routerLink", "/videos/11", 1, "join"]], template: function JoinToConferenceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Join Conference Sessions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tabset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Session \u2013 MAY 26th, 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Watch Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Watch Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Opening Keynote \u2013 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Innovating Food Intelligently In A Post- COVID-19 World");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Watch Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Global Trend In Food Innovation and Technology: How Investors Are Promoting A Healthier and Sustainable Future ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "In this conversation, a panel of investors will share insights on factors guiding their decisions and innovations that are attracting their attention and why. This panel will also cover insights on how these innovations will shape a healthier future of food. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Speakers: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Ivan Farneti \u2013 Founding Partner, Five Seasons Ventures.| Joshua Siegel- General Partner, Acronym Venture Capital. Julie Lerner, Investor, 37 Angels (Session Chair), Sharon Cittone, Founder and CEO Edible Plant Ventures.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Watch Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Leveraging Artificial Intelligence & Big Data To Gain Consumer Insights and Shape A Healthier Future of Food.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " In the past 5 years, change in consumer perspectives and preference when it comes to food has driven change in the food industry. How is artificial intelligence driving change and making it easier for companies to stay ahead of consumer needs and changing demands? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Speakers: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Alon Chen, CEO, Tastewise | Melanie Bartelme, Global Food Analyst | Riana Lynn, CEO Journey Foods (Moderator)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Watch Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Leveraging Technology To Promote Transparency, Sustainability and Good Quality Products In The Food Industry, Farm To Fork ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "This conversation focuses on how transparency, traceability and sustainability in food production without compromising food quality in the process. How can technology be leveraged to enhance farming? What environmental pain points that needs is to be address urgently. How does current practices affect carbonization and decabonization of the soil? How are we leveraging technology to manage this?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Speakers: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Jillian Semaan, Director, Food and Environment, Earth Day Network | Ethan Solovei, CIO, HowGood Inc., Marc Oshima, Co-founder and CMO, Aerofarms and Dr. Christopher Daugherty (Moderator)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " top ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "tab", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Session \u2013 May 27th, 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Watch Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Watch Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Understanding Diet and Microbiome Interaction To Impact Health");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "This presentation will cover some of the latest scientific discoveries, shedding light on how small changes in diet could result in significant impact in health. Providing insights on discoveries that can completely revolutionize the food industry in a few years. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Speaker: Dr. Liping Zhao");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Watch Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Understanding How Nutrition, Microbiome and Genomics Play Crucial Role In Personalized Medicine.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Our world is changing and the healthcare crisis we have faced in the past few months creates the need to better understand the different elements that interact to shape our health outcomes. In this panel conversation, experts will discuss how nutrition, genomics and microbiome interact to impact health. Practical innovation that can empower people to take proactive steps in shaping their health outcomes will be explored. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Speakers: Dr. Sherry Zhang, CEO, GenoPalate, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Dr. Guru Banavar CIO and Head of AI, Viome , ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Dr. Liping Zhao, Professor, Rutgers University");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " Dr. Nara Szostaczuk, Nutrigenomics Expert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Watch Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Food As Medicine: A Proactive Look At The Future Of Healthcare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "A deep dive into the concepts of food as medicine. How consumers over the generations across cultures have leverage the healing power of food. How food may drive change in the food industry in the post COVID-19 world. The impact of emerging discoveries in scientific communities and its impact on the future of healthcare. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Speakers: Jonathan Bailor, CEO SANE Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Sherry Zhang Ph.D., CEO, GenoPalate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Deana Minich PhD, President, Food & Spirit LLC.(Session Chair)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Mariette Abrahams Ph.D., CEO, Qina");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Watch Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Innovating Beverages To Meet The Need Of Consumers Healthier Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Reports by persistence market research projected that phytochemical market will grow by 4.7% year over year to a $5.2 billion by 2019, as curiosity and scientific discovery of health benefits of these compounds increase. What does the future hold with regards to beverage innovation. As health awareness increase and consumer preferences shift to favor \u201Cgood for you\u201D products. How will the industry change in the coming years to integrate phytochemicals and reduce sugar and synthetic additives? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Dr. Karin Van Het Hof, Snr Director, Research & Development, PepsiCo, Dr. Julia Olayanju (Host) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Watch Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "The Future of Snacking: How To Meet Consumer Demands For Healthier Products ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Snacking is essential and according to reports by NDP future of snacking report for 2018, more than 386 billion snacks were consumed by Americans that year alone. How has this industry changed in the past 5 years in response to changing consumer demands for healthier products? How will COVID-19 pandemic change the types of products that emerge in the market in the next few years? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Speakers:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Caroline Mehta, CEO Union Snack ,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Katy Galle, SVP, Ocean Spray, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Lisa Curtis, CEO, Kulikuli Foods");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Watch Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Innovating Alternative Protein: Successfully Breaking Through The Consumer Acceptability Barrier. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "As the need to innovate alternate protein sources increase, there is a need to discuss how to do this successfully to achieve consumer acceptability at scale. This panel will discuss practical strategies to successfully achieve widespread consumer acceptability. The panel will discuss the role of texture, flavor, and taste in consumer acceptance and strategies to innovate this successfully. Different innovative alternative protein sources will be discussed as well as their pros and cons and more. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Speakers:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "David Benzaquen Partner, Impossible Plants.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Mark Driscoll, Founder and Executive Director, Tasting The Future. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Dr. Anabelle Broadbent, CEO, Verde Ops.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Kristie Middleton, VP Business Development, Rebellyous Foods");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "app-footer");
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_2__["TabsetComponent"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_2__["TabDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 240px);\n  background-color: #f4f4fb;\n}\n.container-fluid[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  font-size: 40px;\n  font-weight: bold;\n  margin-bottom: 50px;\n}\n.container-fluid[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  margin-bottom: 150px;\n}\n.container-fluid[_ngcontent-%COMP%]   .conference-info[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  height: 480px;\n  display: flex;\n  flex-direction: column;\n}\n.container-fluid[_ngcontent-%COMP%]   .conference-info[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%] {\n  background-color: white;\n  min-height: 440px;\n  max-height: 440px;\n}\n.container-fluid[_ngcontent-%COMP%]   .conference-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: bold;\n  margin-left: 16px;\n  margin-right: 16px;\n  margin-top: 30px;\n}\n.container-fluid[_ngcontent-%COMP%]   .conference-info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  font-size: 16px;\n  font-weight: 300;\n  margin-left: 16px;\n  margin-right: 16px;\n}\n.container-fluid[_ngcontent-%COMP%]   .conference-info[_ngcontent-%COMP%]   .join[_ngcontent-%COMP%] {\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 20px;\n}\n.conference-info[_ngcontent-%COMP%]:hover   .background[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.conference-info[_ngcontent-%COMP%]:hover   .background[_ngcontent-%COMP%]   .join[_ngcontent-%COMP%] {\n  background: linear-gradient(#db8d2d 0%, #f58470 100%);\n  color: white;\n}\n.header_title[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #4d87b1;\n  padding: 36px;\n  color: #fff;\n  font-size: 16px;\n  line-height: 34px;\n  text-align: left;\n}\n.header_title[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.body_content[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #e6ecf6;\n  padding: 0;\n  color: #000;\n  font-size: 13px;\n  line-height: 21px;\n  text-align: left;\n}\n.body_content[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 2px 10px;\n}\n.body_content[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::first-child {\n  text-align: center;\n}\n.join[_ngcontent-%COMP%] {\n  background: #5b9bd5;\n  width: 100px;\n  text-align: center;\n  color: #fff;\n  border-radius: 5px;\n  border: 1px solid #41719c;\n  display: block;\n  margin: 0 auto;\n  font-size: 10px;\n  cursor: pointer;\n}\n.tcenter[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 20%;\n}\n.header_title[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #4d87b1;\n  padding: 36px;\n  color: #fff;\n  font-size: 16px;\n  line-height: 34px;\n  text-align: left;\n}\n.header_title[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.body_content[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #e6ecf6;\n  padding: 0;\n  color: #000;\n  font-size: 13px;\n  line-height: 21px;\n  text-align: left;\n}\n.body_content[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 2px 10px;\n}\n.body_content[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::first-child {\n  text-align: center;\n}\n.body_content2[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #f3f6fb;\n  padding: 0;\n  color: #000;\n  font-size: 13px;\n  line-height: 21px;\n  text-align: left;\n}\n.body_content2[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 2px 10px;\n}\n.body_content2[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::first-child {\n  text-align: center;\n}\n.join[_ngcontent-%COMP%] {\n  background: #5b9bd5;\n  width: 100px;\n  text-align: center;\n  color: #fff;\n  border-radius: 5px;\n  border: 1px solid #41719c;\n  display: block;\n  margin: 0 auto;\n  font-size: 10px;\n  cursor: pointer;\n}\n.tcenter[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 20%;\n}\nul.name_col[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 0 0 20px;\n  margin: 0 0 0 0;\n  box-sizing: border-box;\n  float: left;\n}\nul.name_col[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 0;\n  margin: 0;\n  font-weight: bold;\n  list-style-type: none;\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGpvaW4tdG8tY29uZmVyZW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNSO0FBRUk7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0FBQVI7QUFHSTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQURSO0FBRVE7RUFDSSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFBWjtBQUdRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRFo7QUFJUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUZaO0FBS1E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFIWjtBQVNJO0VBQ0ksdUJBQUE7QUFOUjtBQVVRO0VBQ0kscURBQUE7RUFDQSxZQUFBO0FBUlo7QUFhQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFWSjtBQVlBO0VBQ0ksYUFBQTtBQVRKO0FBV0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBUko7QUFVQTtFQUNJLGlCQUFBO0FBUEo7QUFTQTtFQUNJLGtCQUFBO0FBTko7QUFRQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBTEo7QUFPQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQUpKO0FBT0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSko7QUFNQTtFQUNJLGFBQUE7QUFISjtBQUtBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUZKO0FBSUE7RUFDSSxpQkFBQTtBQURKO0FBR0E7RUFDSSxrQkFBQTtBQUFKO0FBR0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQUo7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7QUFDQTtFQUNJLGtCQUFBO0FBRUo7QUFBQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBR0o7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQUlKO0FBREE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBSUo7QUFGQTtFQUNJLFVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBS0oiLCJmaWxlIjoiam9pbi10by1jb25mZXJlbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjQwcHgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmYjtcclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb25mZXJlbmNlLWluZm8ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0ODBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgLmJhY2tncm91bmQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogNDQwcHg7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQ0MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5qb2luIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb25mZXJlbmNlLWluZm86aG92ZXIge1xyXG4gICAgLmJhY2tncm91bmQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoI2RiOGQyZCAwJSwgI2Y1ODQ3MCAxMDAlKSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAuam9pbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZGI4ZDJkIDAlLCAjZjU4NDcwIDEwMCUpO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uaGVhZGVyX3RpdGxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogIzRkODdiMTtcclxuICAgIHBhZGRpbmc6IDM2cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uaGVhZGVyX3RpdGxlIHRoIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmJvZHlfY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNlNmVjZjY7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmJvZHlfY29udGVudCB0ZCB7XHJcbiAgICBwYWRkaW5nOiAycHggMTBweDtcclxufVxyXG4uYm9keV9jb250ZW50IHRkOjpmaXJzdC1jaGlsZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmpvaW4ge1xyXG4gICAgYmFja2dyb3VuZDogIzViOWJkNTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQxNzE5YztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnRjZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLmhlYWRlcl90aXRsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICM0ZDg3YjE7XHJcbiAgICBwYWRkaW5nOiAzNnB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzRweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmhlYWRlcl90aXRsZSB0aCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5ib2R5X2NvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTZlY2Y2O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5ib2R5X2NvbnRlbnQgdGQge1xyXG4gICAgcGFkZGluZzogMnB4IDEwcHg7XHJcbn1cclxuLmJvZHlfY29udGVudCB0ZDo6Zmlyc3QtY2hpbGQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYm9keV9jb250ZW50MiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmM2Y2ZmI7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmJvZHlfY29udGVudDIgdGQge1xyXG4gICAgcGFkZGluZzogMnB4IDEwcHg7XHJcbn1cclxuLmJvZHlfY29udGVudDIgdGQ6OmZpcnN0LWNoaWxkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uam9pbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNWI5YmQ1O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDE3MTljO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udGNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG51bC5uYW1lX2NvbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDIwcHg7XHJcbiAgICBtYXJnaW46IDAgMCAwIDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxudWwubmFtZV9jb2wgbGkge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "NsUd":
/*!*************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/videos/videos.component.ts ***!
  \*************************************************************************/
/*! exports provided: VideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosComponent", function() { return VideosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "F8Sv");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/footer/footer.component */ "TnyQ");
/* harmony import */ var _shared_components_login_reg_modal_login_reg_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/login-reg-modal/login-reg-modal.component */ "vVZ6");





const _c0 = ["video"];
class VideosComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.id = 1;
        this.videos = {
            1: 'https://zoom-yscooks.s3.amazonaws.com/assets/video/webinar/My+Promo+video+18.mp4',
            2: 'https://zoom-yscooks.s3.amazonaws.com/assets/video/webinar/How+To+Innovate+The+Future+Of+Food+Intelligently.mp4',
            3: 'https://zoom-yscooks.s3.amazonaws.com/assets/video/webinar/Global+Trend+In+Food+Innovation.mp4',
            4: 'https://zoom-yscooks.s3.amazonaws.com/assets/video/webinar/Artificial+Intelligence.mp4',
            5: 'https://zoom-yscooks.s3.amazonaws.com/assets/video/webinar/Learning+technology.mp4',
            6: 'https://zoom-yscooks.s3.amazonaws.com/assets/video/webinar/Liping+Zhao.mp4',
            7: 'https://zoom-yscooks.s3.amazonaws.com/assets/video/webinar/Panel+on+Microbiome%2C+Nutrition+and+Personalized+Nutrition.mp4',
            8: 'https://zoom-yscooks.s3.amazonaws.com/assets/video/webinar/Food+As+Medicine.mp4',
            9: 'https://zoom-yscooks.s3.amazonaws.com/assets/video/webinar/Innovation+and+meeting.mp4',
            10: 'https://zoom-yscooks.s3.amazonaws.com/assets/video/webinar/The+future+of+snaking.mp4',
            11: 'https://zoom-yscooks.s3.amazonaws.com/assets/video/webinar/Innovating+alternative+protein.mp4'
        };
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            if (params.id) {
                this.id = params.id;
            }
        });
    }
    ngAfterContentInit() {
        setTimeout(() => {
            const elem = this.video.nativeElement;
            elem.play();
        }, 1000);
    }
}
VideosComponent.ɵfac = function VideosComponent_Factory(t) { return new (t || VideosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
VideosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideosComponent, selectors: [["app-videos"]], viewQuery: function VideosComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.video = _t.first);
    } }, decls: 9, vars: 1, consts: [[1, "video-section", "row", "no-gutters"], [1, "embed-responsive", "embed-responsive-16by9"], ["playsinline", "", "controls", "", "id", "video-background", 1, "embed-responsive-item"], ["video", ""], ["type", "video/mp4", 3, "src"]], template: function VideosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "video", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "source", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-login-reg-modal");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.videos[ctx.id], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _shared_components_login_reg_modal_login_reg_modal_component__WEBPACK_IMPORTED_MODULE_4__["LoginRegModalComponent"]], styles: [".video-section[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 200px);\n}\n.video-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  top: -50%;\n  position: relative;\n}\n.video-section[_ngcontent-%COMP%]   #video-background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  height: auto;\n  background-size: cover;\n}\n.video-section[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 2em;\n  flex-direction: column;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHZpZGVvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0FBQ0o7QUFBSTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtBQUVSO0FBTUk7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFKUjtBQU9JO0VBQ0ksY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFMUiIsImZpbGUiOiJ2aWRlb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlkZW8tc2VjdGlvbiB7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjAwcHgpO1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgdG9wOiAtNTAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAuZW1iZWQtcmVzcG9uc2l2ZSB7XHJcbiAgICAvLyAgIHBvc2l0aW9uOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgICN2aWRlby1iYWNrZ3JvdW5kIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "PiQ3":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/user-dashboard/user-dashboard.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: UserDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function() { return UserDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _invitation_invitation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../invitation/invitation.component */ "iDiP");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit-profile/edit-profile.component */ "MVaF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/user.service */ "wf7n");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "F8Sv");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/popover */ "EDFS");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/footer/footer.component */ "TnyQ");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");















const _c0 = ["video1"];
const _c1 = ["emptyModal"];
class UserDashboardComponent {
    constructor(router, spinner, route, toastr, cookieService, userService) {
        this.router = router;
        this.spinner = spinner;
        this.route = route;
        this.toastr = toastr;
        this.cookieService = cookieService;
        this.userService = userService;
        this.percent = 0;
        this.user = {};
        this.superCookPoints = null;
        this.points = 0;
        this.popovers = { invite: false, posts: false, lessons: false };
    }
    ngOnInit() {
        this.user = JSON.parse(this.cookieService.get('userProfile') || '{}');
        this.getUserProfile();
        this.checkUserIsPayed(); // need to add;
    }
    ngAfterViewInit() {
        if (this.cookieService.get('showDashboardPopovers')) {
            this.popovers = { invite: true, posts: true, lessons: true };
            this.emptyModal.show();
            this.emptyModal.onHide.subscribe(() => {
                this.popovers = { invite: false, posts: false, lessons: false };
                this.cookieService.delete('showDashboardPopovers');
            });
        }
        setTimeout(() => {
            const elem1 = this.video1.nativeElement;
            elem1.muted = true;
            elem1.play();
        }, 500);
    }
    mediaUploaded(media) {
        const feed = {
            typeName: 'Photo',
            fileId: media.fileId,
        };
        if (media.fileType === 'IMAGE') {
            feed.typeName = 'Photo';
        }
        else if (media.fileType === 'VIDEO') {
            feed.typeName = 'Video';
        }
        // this.userService.addUserFeed(feed).subscribe();
    }
    getUserProfile() {
        this.spinner.show();
        this.userService.getUserProfile().subscribe((data) => {
            this.user = data;
            this.cookieService.set('userProfile', JSON.stringify(data));
            this.spinner.hide();
        }, (error) => {
            console.warn(error);
            this.spinner.hide();
        });
    }
    openInvitation() {
        this.invitationComponent.openInvitationModal();
    }
    ngOnDestroy() {
        if (this.cookieService.get('showDashboardPopovers')) {
            this.cookieService.delete('showDashboardPopovers');
        }
    }
    checkUserIsPayed() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const payment = yield this.userService
                    .checkUserIsPayed(this.user.uid)
                    .toPromise();
                if (!payment || !payment.paymentid || !payment.uid) {
                    // this.toastr.error("Need pay for service");
                    this.router.navigate([`/payments/check`]);
                    return;
                }
            }
            catch (e) {
                this.router.navigate([`/payments/check`]);
            }
        });
    }
    openEditModal() {
        this.editProfileComponent.openModal(this.user);
    }
}
UserDashboardComponent.ɵfac = function UserDashboardComponent_Factory(t) { return new (t || UserDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"])); };
UserDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UserDashboardComponent, selectors: [["app-user-dashboard"]], viewQuery: function UserDashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_invitation_invitation_component__WEBPACK_IMPORTED_MODULE_1__["InvitationComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_2__["EditProfileComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.video1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.invitationComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.emptyModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.editProfileComponent = _t.first);
    } }, decls: 45, vars: 6, consts: [[1, "feed"], [1, "container-fluid"], [1, "row"], [1, "col-12", "col-md-6"], [1, "d-flex", "flex-column"], [1, "profile-img", "d-flex", "justify-content-center"], [1, "img-fluid", "rounded-circle", "pointer", 3, "routerLink", "src"], [1, "d-flex", "justify-content-center", "profile-edit-name"], [1, "profile-name", "pointer", 3, "routerLink"], ["type", "button", 1, "btn", "btn-edit", 3, "click"], [1, "ections"], ["routerLink", "/posts", 1, "ection"], ["href", "https://open.spotify.com/show/0f0PsLVBmdoeDUu1tq5oXr", "target", "_blank", 1, "link-top"], [1, "d-flex", "justify-content-center"], ["src", "/assets/img/dashboard/discover-brands-icon@2x.png", "popover", "Click here to share your cooking experiences with friends to earn points", "container", "body", "placement", "left", "triggers", "", 1, "img-fluid", 3, "isOpen"], [1, ""], ["routerLink", "/attendees", "target", "_blank", "popover", "Click here to invite friends & share your nourishing dining\n                experiences with them.", "container", "body", "triggers", "", 1, "ection", 3, "isOpen"], ["src", "/assets/img/dashboard/connect-with-attendees@2x.png", 1, "img-fluid"], [1, "ection"], ["routerLink", "/join-to-conference", "target", "_blank", 1, "link-top"], ["popover", "coming soon", "container", "body", 1, "d-flex", "justify-content-center"], ["src", "/assets/img/dashboard/join-to-zoom@2x.png", 1, "img-fluid"], ["popover", "coming soon", "container", "body", 1, ""], [1, "embed-responsive", "embed-responsive-4by3"], ["id", "video-background", "controls", "", 1, "embed-responsive-item"], ["video1", ""], ["src", "https://zoom-yscooks.s3.amazonaws.com/assets/video/video-dashboard.mp4", "type", "video/mp4"], ["bsModal", "", "tabindex", "-1", "role", "dialog", 1, "modal", "fade"], ["emptyModal", "bs-modal"], [3, "profileEdited"]], template: function UserDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserDashboardComponent_Template_button_click_12_listener() { return ctx.openEditModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Listen To Food + Health Talks");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Discover brands and resources ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " Connect with food industry leaders ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Listen Watch Past Summits");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, " Attend Upcoming Webinars/Virtual Events ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "video", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "source", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "app-modal-invitation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "div", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "app-edit-profile", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("profileEdited", function UserDashboardComponent_Template_app_edit_profile_profileEdited_44_listener() { return ctx.getUserProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("routerLink", "/profile/" + (ctx.user == null ? null : ctx.user.uid));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", (ctx.user == null ? null : ctx.user.profileImage) || "/assets/img/profile.png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("routerLink", "/profile/" + (ctx.user == null ? null : ctx.user.uid));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isOpen", ctx.popovers.posts);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isOpen", ctx.popovers.invite);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_10__["PopoverDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"], _invitation_invitation_component__WEBPACK_IMPORTED_MODULE_1__["InvitationComponent"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["ModalDirective"], _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_2__["EditProfileComponent"]], styles: [".feed[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 240px);\n  background-color: #f4f4fb;\n}\n.feed[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-top: 150px;\n  font-size: 36px;\n  margin-top: 4em;\n  margin-bottom: 1em;\n  text-align: center;\n}\n.feed[_ngcontent-%COMP%]   .profile-img[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  margin-top: 20%;\n}\n.feed[_ngcontent-%COMP%]   .profile-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 250px;\n}\n.feed[_ngcontent-%COMP%]   .profile-edit-name[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.feed[_ngcontent-%COMP%]   .profile-edit-name[_ngcontent-%COMP%]   .profile-name[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  font-weight: bold;\n  font-size: 38px;\n  text-align: center;\n  color: #282630;\n}\n.feed[_ngcontent-%COMP%]   .profile-edit-name[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #db8d2d;\n}\n.feed[_ngcontent-%COMP%]   .ections[_ngcontent-%COMP%] {\n  margin-top: 10%;\n  margin-bottom: 3em;\n  display: flex;\n}\n.feed[_ngcontent-%COMP%]   .ections[_ngcontent-%COMP%]   .ection[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-right: auto;\n  margin-left: auto;\n  width: 33%;\n}\n.feed[_ngcontent-%COMP%]   .ections[_ngcontent-%COMP%]   .ection[_ngcontent-%COMP%]   .link-top[_ngcontent-%COMP%] {\n  position: absolute;\n  color: #282630;\n  margin-top: -90px;\n  text-align: center;\n  width: inherit;\n}\n.feed[_ngcontent-%COMP%]   .ections[_ngcontent-%COMP%]   .ection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 3em;\n  text-align: center;\n  text-transform: uppercase;\n  color: #282630;\n  font-weight: bold;\n}\n.feed[_ngcontent-%COMP%]   .ections[_ngcontent-%COMP%]   .ection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHVzZXItZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7RUFDQSx5QkFBQTtBQUNGO0FBQ0U7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNKO0FBRUU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUFBSjtBQUNJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFDTjtBQUVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBQUo7QUFDSTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQ047QUFDSTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQUNOO0FBR0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBREo7QUFFSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQUFOO0FBQ007RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNSO0FBQ007RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNSO0FBQ007RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNSIiwiZmlsZSI6InVzZXItZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZlZWQge1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyNDBweCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmYjtcclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNGVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnByb2ZpbGUtaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wcm9maWxlLWVkaXQtbmFtZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC5wcm9maWxlLW5hbWUge1xyXG4gICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAzOHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjMjgyNjMwO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1lZGl0IHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogI2RiOGQyZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5lY3Rpb25zIHtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDNlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAuZWN0aW9uIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICB3aWR0aDogMzMlO1xyXG4gICAgICAubGluay10b3Age1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBjb2xvcjogIzI4MjYzMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtOTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICAgIH1cclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogM2VtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGNvbG9yOiAjMjgyNjMwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "PkDP":
/*!************************************************************!*\
  !*** ./src/app/modules/dashboard/services/post.service.ts ***!
  \************************************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class PostService {
    constructor(http) {
        this.http = http;
    }
    createPost(post) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL}/posts`;
        return this.http.post(url, post);
    }
    getPosts() {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL}/posts`;
        return this.http.get(url);
    }
    getPostsByUserId(uid) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL}/posts/users/${uid}`;
        return this.http.get(url);
    }
    getPostById(id) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL}/posts/${id}`;
        return this.http.get(url);
    }
    addCommentToPost(postid, coment) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL}/comment/${postid}`;
        return this.http.post(url, coment);
    }
    getLessonPosts() {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL}/postsbyadmins`;
        return this.http.get(url);
    }
    editPost(post) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL}/posts/${post.postid}`;
        return this.http.put(url, post);
    }
    deletePost(postid) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL}/posts/${postid}`;
        return this.http.delete(url);
    }
    addMediaToPost(data) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL}/posts/${data.postid}/media`;
        return this.http.post(url, data);
    }
    deleteCommentFromFeed(commentId) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_URL}/comment/${commentId}`;
        return this.http.delete(url);
    }
}
PostService.ɵfac = function PostService_Factory(t) { return new (t || PostService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PostService, factory: PostService.ɵfac });


/***/ }),

/***/ "TLkJ":
/*!**************************************************************!*\
  !*** ./node_modules/ng-gapi/node_modules/tslib/tslib.es6.js ***!
  \**************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "Ukvr":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/all-groups/all-groups.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AllGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllGroupsComponent", function() { return AllGroupsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _shared_services_groups_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/groups.service */ "BzBs");
/* harmony import */ var _shared_services_communication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/communication.service */ "q9FV");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "F8Sv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/footer/footer.component */ "TnyQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









function AllGroupsComponent_ng_container_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Learn More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", "/groups/" + group_r1.groupid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r1.name);
} }
function AllGroupsComponent_ng_container_4_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllGroupsComponent_ng_container_4_div_5_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.openLogin($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Learn More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r1.name);
} }
function AllGroupsComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AllGroupsComponent_ng_container_4_div_4_Template, 5, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AllGroupsComponent_ng_container_4_div_5_Template, 5, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const group_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", group_r1.imageUrl || "/assets/img/placeholder.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.user && (ctx_r0.user == null ? null : ctx_r0.user.uid) || group_r1.isPublic);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.user && !group_r1.isPublic);
} }
class AllGroupsComponent {
    constructor(cookieService, spinner, groupsService, com) {
        this.cookieService = cookieService;
        this.spinner = spinner;
        this.groupsService = groupsService;
        this.com = com;
        this.allGroups = [];
    }
    ngOnInit() {
        if (this.cookieService.get("userProfile")) {
            this.user = JSON.parse(this.cookieService.get("userProfile"));
        }
        this.getAllGroups();
    }
    getAllGroups() {
        this.spinner.show();
        this.groupsService.getAllGroups().subscribe((data) => {
            // console.log(data);
            this.allGroups = data;
            this.spinner.hide();
        }, (error) => {
            this.spinner.hide();
        });
    }
    openSignUp(e) {
        e.preventDefault();
        this.com.calSignUp();
    }
    openLogin(e) {
        e.preventDefault();
        this.com.callLoginForm();
    }
}
AllGroupsComponent.ɵfac = function AllGroupsComponent_Factory(t) { return new (t || AllGroupsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_groups_service__WEBPACK_IMPORTED_MODULE_3__["GroupsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_communication_service__WEBPACK_IMPORTED_MODULE_4__["CommunicationService"])); };
AllGroupsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllGroupsComponent, selectors: [["app-find-groups"]], decls: 6, vars: 1, consts: [[1, "content"], [1, "container"], [1, "row"], [4, "ngFor", "ngForOf"], [1, "col-sm-3"], [1, "group-element"], ["alt", "", "loading", "lazy", 1, "group-element-img", 3, "src"], ["class", "group-title", 3, "routerLink", 4, "ngIf"], ["class", "group-title", 3, "click", 4, "ngIf"], [1, "group-title", 3, "routerLink"], [1, "go-to-group"], [1, "btn", "learn-more"], [1, "group-title", 3, "click"]], template: function AllGroupsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AllGroupsComponent_ng_container_4_Template, 6, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allGroups);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"]], styles: [".group-element[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 250px;\n  border: 2px #744c28 solid;\n  margin: 20px 0;\n  overflow: hidden;\n  background: url(\"/assets/img/placeholder.png\");\n  background-position: center;\n  background-size: cover;\n}\n\n.selected[_ngcontent-%COMP%] {\n  border-color: #eea236;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.group-element-img[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.btn-warning[_ngcontent-%COMP%] {\n  border-radius: 40px;\n  padding-left: 20px;\n  padding-right: 20px;\n  background-color: #db8d2d;\n  border: #db8d2d solid 1px;\n  color: white;\n}\n\n.group-title[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  min-height: 80px;\n  width: 100%;\n  text-align: center;\n  bottom: 0;\n  background: rgba(116, 76, 40, 0.6);\n  font: normal 18px/30px \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n  color: white;\n}\n\n.group__edit-button-box[_ngcontent-%COMP%] {\n  margin-top: 6px;\n}\n\n.follow-button[_ngcontent-%COMP%] {\n  background-color: #eea236;\n  color: white;\n  font-size: 22px;\n  border-radius: 5px;\n  padding: 7px;\n  cursor: pointer;\n}\n\n.follow-button[_ngcontent-%COMP%]:hover, .follow-button[_ngcontent-%COMP%]:active, .follow-button[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  color: white;\n}\n\n.friend-name[_ngcontent-%COMP%]:focus, .friend-name[_ngcontent-%COMP%]:active, .friend-name[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  color: white;\n}\n\n.friend-name.selected[_ngcontent-%COMP%] {\n  border: 3px solid #eea236;\n}\n\n.group-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-bottom: 10px;\n}\n\n.group-link[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.go-to-group[_ngcontent-%COMP%] {\n  margin: auto;\n  color: white;\n}\n\n.premium[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n\n.learn-more[_ngcontent-%COMP%] {\n  border-radius: 40px;\n  background-color: #f6921e;\n  border: #f6921e solid 1px;\n  color: white;\n  margin: auto;\n  width: auto;\n}\n\n.content[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 250px);\n  background: #f4f4fb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFsbC1ncm91cHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsOENBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSxtRUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7OztFQUdFLHFCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBOzs7RUFHRSxxQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBQTtFQUNBLG1CQUFBO0FBQ0YiLCJmaWxlIjoiYWxsLWdyb3Vwcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncm91cC1lbGVtZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMjUwcHg7XHJcbiAgYm9yZGVyOiAycHggIzc0NGMyOCBzb2xpZDtcclxuICBtYXJnaW46IDIwcHggMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1nL3BsYWNlaG9sZGVyLnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnNlbGVjdGVkIHtcclxuICBib3JkZXItY29sb3I6ICNlZWEyMzY7XHJcbn1cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uZ3JvdXAtZWxlbWVudC1pbWcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5idG4td2FybmluZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI4ZDJkO1xyXG4gIGJvcmRlcjogI2RiOGQyZCBzb2xpZCAxcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZ3JvdXAtdGl0bGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWluLWhlaWdodDogODBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTE2LCA3NiwgNDAsIDAuNik7XHJcbiAgZm9udDogbm9ybWFsIDE4cHgvMzBweCBcIlRyZWJ1Y2hldCBNU1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmdyb3VwX19lZGl0LWJ1dHRvbi1ib3gge1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxufVxyXG5cclxuLmZvbGxvdy1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWEyMzY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogN3B4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZvbGxvdy1idXR0b246aG92ZXIsXHJcbi5mb2xsb3ctYnV0dG9uOmFjdGl2ZSxcclxuLmZvbGxvdy1idXR0b246Zm9jdXMge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5mcmllbmQtbmFtZTpmb2N1cyxcclxuLmZyaWVuZC1uYW1lOmFjdGl2ZSxcclxuLmZyaWVuZC1uYW1lOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZnJpZW5kLW5hbWUuc2VsZWN0ZWQge1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICNlZWEyMzY7XHJcbn1cclxuXHJcbi5ncm91cC10aXRsZSBoMiB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmdyb3VwLWxpbmsge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5nby10by1ncm91cCB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnByZW1pdW0ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5sZWFybi1tb3JlIHtcclxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNjkyMWU7XHJcbiAgYm9yZGVyOiAjZjY5MjFlIHNvbGlkIDFweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDI1MHB4KTtcclxuICBiYWNrZ3JvdW5kOiAjZjRmNGZiO1xyXG59Il19 */"] });


/***/ }),

/***/ "XoyV":
/*!*******************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-routing.module */ "vH6C");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "FpXt");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "7pIB");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _components_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user-dashboard/user-dashboard.component */ "PiQ3");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/user.service */ "wf7n");
/* harmony import */ var _shared_services_request_interceptor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/services/request-interceptor.service */ "lYEW");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/post.service */ "PkDP");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _components_profile_view_profile_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/profile-view/profile-view.component */ "cW5H");
/* harmony import */ var _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/edit-profile/edit-profile.component */ "MVaF");
/* harmony import */ var _components_invitation_invitation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/invitation/invitation.component */ "iDiP");
/* harmony import */ var ng_gapi__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-gapi */ "4dwI");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-circle-progress */ "K1R0");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/popover */ "EDFS");
/* harmony import */ var _components_all_groups_all_groups_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/all-groups/all-groups.component */ "Ukvr");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "Lm2G");
/* harmony import */ var _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/posts/posts.component */ "Gh3/");
/* harmony import */ var _components_group_detail_group_detail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/group-detail/group-detail.component */ "ETEI");
/* harmony import */ var _components_post_view_post_view_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/post-view/post-view.component */ "w4+D");
/* harmony import */ var _components_attendees_attendees_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/attendees/attendees.component */ "80nc");
/* harmony import */ var _components_join_to_conference_join_to_conference_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/join-to-conference/join-to-conference.component */ "MX0M");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "44PX");
/* harmony import */ var _components_videos_videos_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/videos/videos.component */ "NsUd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/core */ "fXoL");






































const gapiClientConfig = {
    client_id: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].API_GOOGLE,
    discoveryDocs: [
        'https://analyticsreporting.googleapis.com/$discovery/rest?version=v4',
    ],
    scope: [
        'https://www.googleapis.com/auth/analytics.readonly',
        'https://www.googleapis.com/auth/analytics',
        'https://www.googleapis.com/auth/contacts.readonly',
    ].join(' '),
};
class DashboardModule {
}
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: _shared_services_request_interceptor_service__WEBPACK_IMPORTED_MODULE_12__["RequestInterceptorService"],
            multi: true,
        },
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"],
        _services_post_service__WEBPACK_IMPORTED_MODULE_13__["PostService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__["DashboardRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"],
            ng_gapi__WEBPACK_IMPORTED_MODULE_18__["GoogleApiModule"].forRoot({
                provide: ng_gapi__WEBPACK_IMPORTED_MODULE_18__["NG_GAPI_CONFIG"],
                useValue: gapiClientConfig,
            }),
            ng_circle_progress__WEBPACK_IMPORTED_MODULE_19__["NgCircleProgressModule"].forRoot(),
            ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_20__["PopoverModule"].forRoot(),
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_22__["PaginationModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_28__["TabsModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_components_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["UserDashboardComponent"],
        _components_profile_view_profile_view_component__WEBPACK_IMPORTED_MODULE_15__["ProfileViewComponent"],
        _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_16__["EditProfileComponent"],
        _components_invitation_invitation_component__WEBPACK_IMPORTED_MODULE_17__["InvitationComponent"],
        _components_all_groups_all_groups_component__WEBPACK_IMPORTED_MODULE_21__["AllGroupsComponent"],
        _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_23__["PostsComponent"],
        _components_group_detail_group_detail_component__WEBPACK_IMPORTED_MODULE_24__["GroupDetailComponent"],
        _components_post_view_post_view_component__WEBPACK_IMPORTED_MODULE_25__["PostViewComponent"],
        _components_attendees_attendees_component__WEBPACK_IMPORTED_MODULE_26__["AttendeesComponent"],
        _components_join_to_conference_join_to_conference_component__WEBPACK_IMPORTED_MODULE_27__["JoinToConferenceComponent"],
        _components_videos_videos_component__WEBPACK_IMPORTED_MODULE_29__["VideosComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__["DashboardRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"], ng_gapi__WEBPACK_IMPORTED_MODULE_18__["GoogleApiModule"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_19__["NgCircleProgressModule"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_20__["PopoverModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_22__["PaginationModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_28__["TabsModule"]] }); })();


/***/ }),

/***/ "cW5H":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/profile-view/profile-view.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProfileViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileViewComponent", function() { return ProfileViewComponent; });
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../edit-profile/edit-profile.component */ "MVaF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "wf7n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/post.service */ "PkDP");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "F8Sv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/footer/footer.component */ "TnyQ");












function ProfileViewComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileViewComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.openEditModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileViewComponent_div_27_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 25);
} if (rf & 2) {
    const post_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", "/post/" + post_r5.postid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", (post_r5 == null ? null : post_r5.media[0] == null ? null : post_r5.media[0].url) || "/assets/img/placeholder.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ProfileViewComponent_div_27_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 26);
} if (rf & 2) {
    const post_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", "/post/" + post_r5.postid);
} }
function ProfileViewComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProfileViewComponent_div_27_img_3_Template, 1, 2, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProfileViewComponent_div_27_img_4_Template, 1, 1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (post_r5 == null ? null : post_r5.media[0] == null ? null : post_r5.media[0].type) == "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (post_r5 == null ? null : post_r5.media[0] == null ? null : post_r5.media[0].type) == "video");
} }
function ProfileViewComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", "/profile/" + (item_r10 == null ? null : item_r10.invitedid));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", (item_r10 == null ? null : item_r10.invited == null ? null : item_r10.invited.profileImage) || "/assets/img/placeholder.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", item_r10 == null ? null : item_r10.invited == null ? null : item_r10.invited.firstName, " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](7, 4, item_r10 == null ? null : item_r10.invited == null ? null : item_r10.invited.lastName, 0, 1), ". ");
} }
class ProfileViewComponent {
    constructor(cookieService, spinner, userService, route, router, 
    // private readonly meta: MetaService,
    toastr, postService) {
        this.cookieService = cookieService;
        this.spinner = spinner;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.postService = postService;
        this.feed = [];
        this.revedBussines = [];
        this.paginator = {
            total: 0,
            count: 21,
            page: 1,
        };
        this.isUserConnected = false;
        this.posts = [];
        this.friends = [];
    }
    ngOnInit() {
        if (this.cookieService.get('userProfile')) {
            this.user = JSON.parse(this.cookieService.get('userProfile'));
        }
        this.route.params.subscribe((data) => {
            this.getUserProfileById(data.id);
        });
    }
    getUserProfileById(userId) {
        this.spinner.show();
        this.userService.getUserById(userId).subscribe((data) => {
            this.spinner.hide();
            this.profile = data;
            // this.meta.setTag('og:image', encodeURI(this.profile.profilePictureURL));
            // this.meta.setTag('og:title', this.profile.name);
            // this.meta.setTag('og:description', this.profile.description);
            // this.meta.setTag('twitter:image', encodeURI(this.profile.profilePictureURL));
            // this.meta.setTag('twitter:title', this.profile.name);
            // this.meta.setTag('twitter:description', this.profile.description);
        }, (error) => {
            this.spinner.hide();
        });
    }
    testUserConnected() {
        let text = 'Connect';
        if (this.user && this.isUserConnected) {
            text = 'Connected';
        }
        return text;
    }
    connectClicked() {
        if (!this.user) {
            this.toastr.error('Need login first');
            return;
        }
        if (this.user && this.isUserConnected) {
            this.toastr.success('Already connected');
        }
        if (this.user && !this.isUserConnected) {
            const data = {
                inviteeid: this.user.uid,
                invitedid: this.profile.uid,
            };
            this.spinner.show();
            this.userService.connectTofriend(data).subscribe((res) => {
                console.log(res);
                this.isUserConnected = true;
                this.spinner.hide();
            }, (error) => {
                this.spinner.hide();
                this.toastr.error('error');
            });
        }
    }
    openEditModal() {
        this.editProfileComponent.openModal(this.profile);
    }
}
ProfileViewComponent.ɵfac = function ProfileViewComponent_Factory(t) { return new (t || ProfileViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_post_service__WEBPACK_IMPORTED_MODULE_7__["PostService"])); };
ProfileViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileViewComponent, selectors: [["app-profile-view"]], viewQuery: function ProfileViewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_0__["EditProfileComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.editProfileComponent = _t.first);
    } }, decls: 36, vars: 7, consts: [["id", "first-block"], [1, "container-fluid"], [1, "container"], [1, "row"], [1, "col-4"], [1, "d-flex", "flex-column"], [1, "profile-img", "d-flex", "justify-content-center"], [1, "img-fluid", "rounded-circle", 3, "src"], [1, "connect", "d-flex", "justify-content-center"], ["type", "button", "class", "btn btn-connect", 3, "click", 4, "ngIf"], [1, "col-8"], [1, "user-name"], [1, "user-descriptions"], ["id", "second-block"], [1, "col-md-6", "col-12"], [1, "col-12"], [1, "column-name"], ["class", "col-md-6 col-12 posts", 4, "ngFor", "ngForOf"], [3, "profileEdited"], ["type", "button", 1, "btn", "btn-connect", 3, "click"], [1, "col-md-6", "col-12", "posts"], [1, "card"], [1, "d-flex", "media"], ["class", "justify-content-center pointer", "alt", "image", 3, "routerLink", "src", 4, "ngIf"], ["class", "justify-content-center pointer", "src", "/assets/img/video-placeholder.jpg", "alt", "image", 3, "routerLink", 4, "ngIf"], ["alt", "image", 1, "justify-content-center", "pointer", 3, "routerLink", "src"], ["src", "/assets/img/video-placeholder.jpg", "alt", "image", 1, "justify-content-center", "pointer", 3, "routerLink"], [1, "card", "pointer", 3, "routerLink"], [1, "d-flex"], ["alt", "image", 1, "justify-content-center", 3, "src"], [1, "card-img-overlay"], [1, "card-text", "pointer", "link"]], template: function ProfileViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProfileViewComponent_button_10_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "section", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "My Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ProfileViewComponent_div_27_Template, 5, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, ProfileViewComponent_div_33_Template, 8, 8, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "app-edit-profile", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("profileEdited", function ProfileViewComponent_Template_app_edit_profile_profileEdited_35_listener() { return ctx.getUserProfileById(ctx.profile.uid); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", (ctx.profile == null ? null : ctx.profile.profileImage) || "/assets/img/profile.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.profile == null ? null : ctx.profile.uid) === (ctx.user == null ? null : ctx.user.uid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.profile == null ? null : ctx.profile.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.profile == null ? null : ctx.profile.company);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.profile == null ? null : ctx.profile.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.posts);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.friends);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_0__["EditProfileComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["SlicePipe"]], styles: ["#first-block[_ngcontent-%COMP%] {\n  min-height: calc( 100vh - 230px);\n}\n#first-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n#first-block[_ngcontent-%COMP%]   .profile-img[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n#first-block[_ngcontent-%COMP%]   .profile-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n}\n#first-block[_ngcontent-%COMP%]   .connect[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n#first-block[_ngcontent-%COMP%]   .connect[_ngcontent-%COMP%]   .btn-connect[_ngcontent-%COMP%] {\n  border-radius: 40px;\n  margin: 6px 6px 6px 6px;\n  padding-left: 20px;\n  padding-right: 20px;\n  background-color: #f6921e;\n  border: #f6921e solid 1px;\n  color: white;\n}\n#first-block[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 3em;\n}\n#first-block[_ngcontent-%COMP%]   .user-descriptions[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n#second-block[_ngcontent-%COMP%] {\n  min-height: 500px;\n  margin-bottom: 50px;\n  margin-bottom: 50px;\n}\n#second-block[_ngcontent-%COMP%]   .column-name[_ngcontent-%COMP%] {\n  border-radius: 40px;\n  padding: 10px;\n  border: #f6921e solid 1px;\n  text-align: center;\n  font-weight: bold;\n}\n#second-block[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n#second-block[_ngcontent-%COMP%]   .posts[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n#second-block[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  height: 220px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n#second-block[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%] {\n  margin: auto;\n}\n#second-block[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: auto;\n  max-height: 220px;\n  width: 100%;\n}\n#second-block[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  color: white;\n}\n#second-block[_ngcontent-%COMP%]   .card-img-overlay[_ngcontent-%COMP%] {\n  padding-bottom: 0px;\n  padding-left: 5px;\n  padding-right: 5px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: auto;\n  bottom: 0%;\n  color: #ffffff;\n  background-image: linear-gradient(0deg, #212529 15%, transparent 70%);\n}\n.link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #744c28;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHByb2ZpbGUtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0FBQ0Y7QUFBRTtFQUNFLGdCQUFBO0FBRUo7QUFBRTtFQUNFLG1CQUFBO0FBRUo7QUFESTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBR047QUFBRTtFQUNFLGdCQUFBO0FBRUo7QUFESTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFHTjtBQUNFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFRTtFQUNFLGVBQUE7QUFBSjtBQUlBO0VBQ0UsaUJBQUE7RUFZQSxtQkFBQTtFQXNCQSxtQkFBQTtBQWpDRjtBQUNFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFDRTtFQUNFLGdCQUFBO0FBQ0o7QUFHRTtFQUNFLGdCQUFBO0FBREo7QUFHRTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFESjtBQUVJO0VBQ0UsWUFBQTtBQUFOO0FBRUk7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBQU47QUFHRTtFQUNFLFlBQUE7QUFESjtBQUlFO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHFFQUFBO0FBRko7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUhGIiwiZmlsZSI6InByb2ZpbGUtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmaXJzdC1ibG9jayB7XHJcbiAgbWluLWhlaWdodDogY2FsYyggMTAwdmggLSAyMzBweCk7XHJcbiAgLnJvdyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIH1cclxuICAucHJvZmlsZS1pbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmNvbm5lY3Qge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIC5idG4tY29ubmVjdCB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICAgIG1hcmdpbjogNnB4IDZweCA2cHggNnB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNjkyMWU7XHJcbiAgICAgIGJvcmRlcjogI2Y2OTIxZSBzb2xpZCAxcHg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51c2VyLW5hbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxuICB9XHJcblxyXG4gIC51c2VyLWRlc2NyaXB0aW9ucyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4jc2Vjb25kLWJsb2NrIHtcclxuICBtaW4taGVpZ2h0OiA1MDBweDtcclxuXHJcbiAgLmNvbHVtbi1uYW1lIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAjZjY5MjFlIHNvbGlkIDFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAuaXRlbXMge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuXHJcbiAgLnBvc3RzIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIC5jYXJkIHtcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC5tZWRpYSB7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgbWF4LWhlaWdodDogMjIwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuICAuY2FyZC10ZXh0IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAuY2FyZC1pbWctb3ZlcmxheSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IGF1dG87XHJcbiAgICBib3R0b206IDAlO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzIxMjUyOSAxNSUsIHRyYW5zcGFyZW50IDcwJSk7XHJcbiAgfVxyXG59XHJcblxyXG4ubGluayB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjNzQ0YzI4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "iDiP":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/invitation/invitation.component.ts ***!
  \*********************************************************************************/
/*! exports provided: InvitationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationComponent", function() { return InvitationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_validators_email_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/validators/email-validator */ "HLwJ");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ng_gapi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-gapi */ "4dwI");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/user.service */ "wf7n");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");












const _c0 = ["modal"];
function InvitationComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function InvitationComponent_ng_container_11_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.onSubmit(ctx_r3.invitationForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Invite ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "OR");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InvitationComponent_ng_container_11_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.getConstactsFromGoogle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Invite from Google ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.invitationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r1.email.valid);
} }
function InvitationComponent_ng_container_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function InvitationComponent_ng_container_12_div_1_Template_input_ngModelChange_1_listener($event) { const item_r7 = ctx.$implicit; return item_r7.invite = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("id", "checkbox-" + i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", item_r7.invite);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("for", "checkbox-" + i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r7.email, " ");
} }
function InvitationComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, InvitationComponent_ng_container_12_div_1_Template, 4, 4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InvitationComponent_ng_container_12_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r10.inviteFromGmail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Invite ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.emailsFromGoogle);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r2.emailsFromGoogle.length);
} }
class InvitationComponent {
    constructor(fb, spinner, toastr, gapiService, googleAuth, userService) {
        this.fb = fb;
        this.spinner = spinner;
        this.toastr = toastr;
        this.gapiService = gapiService;
        this.googleAuth = googleAuth;
        this.userService = userService;
        this.emailsFromGoogle = [];
        this.useGmail = false;
        gapiService.onLoad().subscribe((data) => {
            // Here we can use gapi
            // console.log(data);
        });
        this.invitationForm = fb.group({
            email: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _shared_validators_email_validator__WEBPACK_IMPORTED_MODULE_2__["EmailValidator"].validate]),
            ],
        });
        this.email = this.invitationForm.controls.email;
    }
    ngOnInit() {
        this.gapiService.onLoad().subscribe((data) => {
            // Here we can use gapi
            // console.log(data);
        });
    }
    ngAfterViewInit() {
        // tslint:disable-next-line:no-unused-expression
        // this.window.FB;
        // console.log(this.data);
    }
    openInvitationModal() {
        this.modal.show();
        const config = {
            client_id: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_GOOGLE,
            scope: "https://www.googleapis.com/auth/contacts.readonly",
        };
        // gapi.auth2.init(config);
        gapi.auth2.getAuthInstance();
    }
    onSubmit(value) {
        console.log(value);
        if (this.invitationForm.valid) {
            this.spinner.show();
            this.userService.sendInvitation([value.email]).subscribe((data) => {
                // console.log(data);
                this.modal.hide();
                this.spinner.hide();
                this.toastr.success("User invited");
            }, (error) => {
                this.spinner.hide();
                this.toastr.error("Error");
            });
        }
    }
    getConstactsFromGoogle() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.googleAuth.getAuth().subscribe((auth) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    try {
                        const user = yield auth.signIn();
                        console.log(user.getAuthResponse(true));
                        const token = `Bearer ${user.getAuthResponse(true).access_token}`;
                        const googleContacts = yield this.userService
                            .getGoogleContacts(token)
                            .toPromise();
                        const contacts = [];
                        const data = googleContacts.feed.entry;
                        for (let i = 0; data.length > i; i++) {
                            if (data[i].gd$email) {
                                const emails = data[i].gd$email;
                                // tslint:disable-next-line: no-conditional-assignment
                                for (let j = 0, email; (email = emails[j]); j++) {
                                    contacts.push({ email: email.address, invite: true });
                                }
                            }
                        }
                        this.emailsFromGoogle = contacts;
                        this.useGmail = true;
                    }
                    catch (e) {
                        console.log(e);
                        this.toastr.error("Error");
                    }
                }));
            }
            catch (e) {
                console.log(e);
                this.toastr.error("Error");
            }
        });
    }
    inviteFromGmail() {
        // this.spinner.show();
        const emails = [];
        this.emailsFromGoogle
            .filter((e) => e.invite)
            .forEach((d) => {
            emails.push(d.email);
        });
        console.log(emails);
        this.userService.sendInvitation(emails).subscribe((data) => {
            // console.log(data);
            this.modal.hide();
            this.spinner.hide();
            this.toastr.success("Users invited");
        }, (error) => {
            this.spinner.hide();
            this.toastr.error("Error");
        });
    }
}
InvitationComponent.ɵfac = function InvitationComponent_Factory(t) { return new (t || InvitationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_gapi__WEBPACK_IMPORTED_MODULE_7__["GoogleApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_gapi__WEBPACK_IMPORTED_MODULE_7__["GoogleAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"])); };
InvitationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: InvitationComponent, selectors: [["app-modal-invitation"]], viewQuery: function InvitationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
    } }, decls: 13, vars: 2, consts: [["bsModal", "", "tabindex", "-1", "role", "dialog", 1, "modal", "fade"], ["modal", "bs-modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "email"], ["type", "email", "id", "email", "aria-describedby", "email", "placeholder", "Enter email", 1, "form-control", 3, "formControl"], ["type", "submit", 1, "btn", "invite", "btn-lg", "btn-block", 3, "disabled"], [1, "provider-invite"], [1, "holder_form", "sub_but"], [1, "google_but", 3, "click"], [1, "text"], [1, "fab", "icon-g"], ["class", "form-check", 4, "ngFor", "ngForOf"], [1, "btn", "invite", "btn-lg", "btn-block", 3, "disabled", "click"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "ngModel", "id", "ngModelChange"], [1, "form-check-label", 2, "word-break", "break-all", 3, "for"]], template: function InvitationComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Invite your friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InvitationComponent_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1); return _r0.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, InvitationComponent_ng_container_11_Template, 16, 3, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, InvitationComponent_ng_container_12_Template, 4, 2, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.useGmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.useGmail);
    } }, directives: [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".invite[_ngcontent-%COMP%] {\n  background-color: #f6921e;\n  border: #f6921e solid 1px;\n  color: white;\n  border-radius: 5px;\n  display: block;\n  font: 20px/50px \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n  padding: 0;\n  text-align: center;\n  cursor: pointer;\n  margin-top: 20px;\n}\n\n.provider-invite[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: center;\n}\n\n.provider-invite[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.google_but[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #adb3b9;\n  border-bottom: 1px solid #adb3b9;\n  border-radius: 5px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 500;\n  padding: 0;\n  text-align: center;\n  height: 45px;\n  display: flex;\n  margin: auto;\n  cursor: pointer;\n}\n\n.google_but[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.google_but[_ngcontent-%COMP%]   .icon-g[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/g-logo.png\");\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  vertical-align: middle;\n  width: 24px;\n  height: 24px;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  min-height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGludml0YXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDREQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBREU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBRUY7O0FBREU7RUFDRSxZQUFBO0FBR0o7O0FBQUU7RUFDRSwrQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBRUE7RUFDRSxpQkFBQTtBQUNGIiwiZmlsZSI6Imludml0YXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW52aXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjY5MjFlO1xyXG4gIGJvcmRlcjogI2Y2OTIxZSBzb2xpZCAxcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250OiAyMHB4LzUwcHggXCJUcmVidWNoZXQgTVNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4ucHJvdmlkZXItaW52aXRlIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXYge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5nb29nbGVfYnV0IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhZGIzYjk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhZGIzYjk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAudGV4dCB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG5cclxuICAuaWNvbi1nIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2ctbG9nby5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgbWluLWhlaWdodDogMjAwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "vH6C":
/*!***************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/auth-guard.service */ "O6Fc");
/* harmony import */ var _components_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/user-dashboard/user-dashboard.component */ "PiQ3");
/* harmony import */ var _components_profile_view_profile_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/profile-view/profile-view.component */ "cW5H");
/* harmony import */ var _components_all_groups_all_groups_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/all-groups/all-groups.component */ "Ukvr");
/* harmony import */ var _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/posts/posts.component */ "Gh3/");
/* harmony import */ var _components_group_detail_group_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/group-detail/group-detail.component */ "ETEI");
/* harmony import */ var _components_post_view_post_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/post-view/post-view.component */ "w4+D");
/* harmony import */ var _components_attendees_attendees_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/attendees/attendees.component */ "80nc");
/* harmony import */ var _components_join_to_conference_join_to_conference_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/join-to-conference/join-to-conference.component */ "MX0M");
/* harmony import */ var _components_videos_videos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/videos/videos.component */ "NsUd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");













const routes = [
    {
        path: 'dashboard',
        children: [
            {
                path: '',
                component: _components_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["UserDashboardComponent"],
                canActivate: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
                data: {
                    search: false,
                    home: false,
                    login: false,
                    logout: true,
                    profile: false,
                    lessons: true,
                    zoom: false,
                },
            }
        ],
    },
    {
        path: 'profile/:id',
        component: _components_profile_view_profile_view_component__WEBPACK_IMPORTED_MODULE_3__["ProfileViewComponent"],
        data: {
            search: true,
            home: true,
            login: true,
            dashboard: true,
            register: true,
            logout: true,
        },
    },
    {
        path: 'groups',
        component: _components_all_groups_all_groups_component__WEBPACK_IMPORTED_MODULE_4__["AllGroupsComponent"],
        data: {
            search: true,
            login: true,
            register: true,
            logout: true,
            dashboard: true,
        },
    },
    {
        path: 'groups/:id',
        component: _components_group_detail_group_detail_component__WEBPACK_IMPORTED_MODULE_6__["GroupDetailComponent"],
        data: {
            search: true,
            login: true,
            register: true,
            logout: true,
            dashboard: true,
        },
    },
    {
        path: 'posts',
        component: _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_5__["PostsComponent"],
        data: {
            search: true,
            login: true,
            register: true,
            logout: true,
            dashboard: true,
        },
    },
    {
        path: 'posts/:id',
        component: _components_post_view_post_view_component__WEBPACK_IMPORTED_MODULE_7__["PostViewComponent"],
        data: {
            search: true,
            login: true,
            register: true,
            logout: true,
            dashboard: true,
        },
    },
    {
        path: 'attendees',
        component: _components_attendees_attendees_component__WEBPACK_IMPORTED_MODULE_8__["AttendeesComponent"],
        data: {
            search: true,
            login: true,
            register: true,
            logout: true,
            dashboard: true,
        },
    },
    {
        path: 'join-to-conference',
        component: _components_join_to_conference_join_to_conference_component__WEBPACK_IMPORTED_MODULE_9__["JoinToConferenceComponent"],
        data: {
            search: true,
            login: true,
            register: true,
            logout: true,
            dashboard: true,
        },
    },
    {
        path: 'videos/:id',
        component: _components_videos_videos_component__WEBPACK_IMPORTED_MODULE_10__["VideosComponent"],
        canActivate: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        data: {
            search: false,
            home: true,
            login: false,
            logout: true,
            profile: false,
            lessons: true,
            zoom: false,
            dashboard: true,
        },
    },
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ factory: function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "w4+D":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/post-view/post-view.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PostViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostViewComponent", function() { return PostViewComponent; });
/* harmony import */ var _shared_components_delete_post_delete_post_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/delete-post/delete-post.component */ "MXCF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/post.service */ "PkDP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "F8Sv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");











function PostViewComponent_ng_container_6_ng_container_1_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 18);
} if (rf & 2) {
    const media_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", media_r5 == null ? null : media_r5.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function PostViewComponent_ng_container_6_ng_container_1_video_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "video", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "source", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const media_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", media_r5 == null ? null : media_r5.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function PostViewComponent_ng_container_6_ng_container_1_pdf_viewer_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "pdf-viewer", 21);
} if (rf & 2) {
    const media_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", media_r5 == null ? null : media_r5.url)("fit-to-page", true);
} }
function PostViewComponent_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PostViewComponent_ng_container_6_ng_container_1_img_1_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PostViewComponent_ng_container_6_ng_container_1_video_2_Template, 2, 1, "video", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PostViewComponent_ng_container_6_ng_container_1_pdf_viewer_3_Template, 1, 2, "pdf-viewer", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const media_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", media_r5.type == "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", media_r5.type == "video");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", media_r5.type == "pdf");
} }
function PostViewComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PostViewComponent_ng_container_6_ng_container_1_Template, 4, 3, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.post.media);
} }
function PostViewComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostViewComponent_ng_container_10_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.edit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostViewComponent_ng_container_10_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function PostViewComponent_div_19_i_6_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostViewComponent_div_19_i_6_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const coment_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.deleteComent(coment_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "last-coment": a0 }; };
function PostViewComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PostViewComponent_div_19_i_6_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const coment_r15 = ctx.$implicit;
    const last_r16 = ctx.last;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, last_r16));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", (coment_r15 == null ? null : coment_r15.user == null ? null : coment_r15.user.profileImage) || "/assets/img/profile.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", "/profile/" + (coment_r15 == null ? null : coment_r15.user == null ? null : coment_r15.user.uid));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", coment_r15 == null ? null : coment_r15.user == null ? null : coment_r15.user.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", coment_r15.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (coment_r15 == null ? null : coment_r15.user == null ? null : coment_r15.user.uid) === (ctx_r2.user == null ? null : ctx_r2.user.uid));
} }
function PostViewComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "username");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PostViewComponent_div_20_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r21.newComent[ctx_r21.post.postid] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostViewComponent_div_20_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.addComent(ctx_r23.post.postid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.newComent[ctx_r3.post.postid]);
} }
// import { CreatePostComponent } from "../../components/create-post/create-post.component";
class PostViewComponent {
    constructor(spinner, toastr, cookieService, postService, route, router) {
        this.spinner = spinner;
        this.toastr = toastr;
        this.cookieService = cookieService;
        this.postService = postService;
        this.route = route;
        this.router = router;
        this.post = {};
        this.newComent = {};
    }
    ngOnInit() {
        if (this.cookieService.get("userProfile")) {
            this.user = JSON.parse(this.cookieService.get("userProfile"));
        }
        this.route.params.subscribe((data) => {
            // console.log(data);
            this.getPostById(data.id);
        });
    }
    getPostById(id) {
        this.spinner.show();
        this.postService.getPostById(id).subscribe((data) => {
            // console.log(data);
            this.post = data;
            this.spinner.hide();
        }, (error) => {
            this.spinner.hide();
            this.toastr.error("error");
        });
    }
    addComent(feedId) {
        this.spinner.show();
        this.postService
            .addCommentToPost(feedId, { text: this.newComent[feedId] })
            .subscribe((data) => {
            this.newComent[feedId] = "";
            this.getPostById(this.post.postid);
            this.spinner.hide();
        }, (error) => {
            this.spinner.hide();
            this.toastr.error("Error!");
        });
    }
    deleteComent(coment) {
        this.spinner.show();
        const coments = this.post.Comments.filter((c) => coment.commentid !== c.commentid);
        this.postService.deleteCommentFromFeed(coment.commentid).subscribe(data => {
            this.toastr.success("Comment deleted");
            this.post.Comments = coments;
            this.spinner.hide();
        }, error => {
            this.spinner.hide();
        });
    }
    edit() {
        alert('todo');
        // this.createPostComponent.openEditPostModal(this.post);
    }
    delete() {
        this.deletePostComponent.openDeleteModal(this.post);
    }
    postDeleted() {
        this.router.navigate(["/dashboard"]);
    }
    postEdited() {
        this.toastr.success("Post was edited");
        this.getPostById(this.post.postid);
    }
}
PostViewComponent.ɵfac = function PostViewComponent_Factory(t) { return new (t || PostViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
PostViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PostViewComponent, selectors: [["app-post-view"]], viewQuery: function PostViewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_shared_components_delete_post_delete_post_component__WEBPACK_IMPORTED_MODULE_0__["DeletePostComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.deletePostComponent = _t.first);
    } }, decls: 22, vars: 10, consts: [[1, "container"], [1, "row"], [1, "col-md-12", 2, "height", "35px"], [1, "offset-md-2", "col-md-8", "col-12"], [4, "ngIf"], [1, "dumtext", "row"], [1, "col-12"], [1, "firstp", "pull-right"], [1, "float-left"], [1, "pointer", "profile-link", 3, "routerLink"], [1, "col-12", 3, "innerHTML"], ["class", "coment", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "new-coment", 4, "ngIf"], [3, "deleted"], [4, "ngFor", "ngForOf"], ["class", "card-img rightside1", "alt", "Card image", 3, "src", 4, "ngIf"], ["class", "card-img rightside1", "controls", "", 4, "ngIf"], [3, "src", "fit-to-page", 4, "ngIf"], ["alt", "Card image", 1, "card-img", "rightside1", 3, "src"], ["controls", "", 1, "card-img", "rightside1"], [3, "src"], [3, "src", "fit-to-page"], [1, "fas", "fa-edit", 3, "click"], [1, "fas", "fa-trash", 3, "click"], [1, "coment", 3, "ngClass"], [1, "photo", 3, "src"], [1, "text"], [1, "comment-author", 3, "routerLink"], ["class", "fas fa-trash pull-right pointer", 3, "click", 4, "ngIf"], [1, "fas", "fa-trash", "pull-right", "pointer", 3, "click"], [1, "new-coment"], ["for", "inlineFormInputGroup", 1, "sr-only"], [1, "input-group"], ["type", "text", "placeholder", "Add comment", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-prepend"], [1, "input-group-text", "pointer", 3, "click"], [1, "fas", "fa-comment", "pull-right"]], template: function PostViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PostViewComponent_ng_container_6_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, PostViewComponent_ng_container_10_Template, 3, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, PostViewComponent_div_19_Template, 7, 8, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, PostViewComponent_div_20_Template, 8, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "app-delete-post", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("deleted", function PostViewComponent_Template_app_delete_post_deleted_21_listener() { return ctx.postDeleted(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.post == null ? null : ctx.post.media == null ? null : ctx.post.media.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.user == null ? null : ctx.user.uid) === (ctx.post == null ? null : ctx.post.user == null ? null : ctx.post.user.uid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 8, ctx.post.createdAt), " by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", "/profile/" + (ctx.post == null ? null : ctx.post.user == null ? null : ctx.post.user.uid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.post == null ? null : ctx.post.user == null ? null : ctx.post.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.post.text, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.post.Comments);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user == null ? null : ctx.user.uid);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _shared_components_delete_post_delete_post_component__WEBPACK_IMPORTED_MODULE_0__["DeletePostComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: [".rightside1[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.side[_ngcontent-%COMP%]   .rightside2[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.side[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -90px;\n  left: 10px;\n  padding: 159px 7em;\n  width: 100%;\n  height: 100%;\n  color: #ffffff;\n  font-family: Trebuchet MS;\n}\n\n.dumtext[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: justify;\n  font-family: Trebuchet MS;\n}\n\n.dumtext[_ngcontent-%COMP%]   .firstp[_ngcontent-%COMP%] {\n  color: #f69320;\n  font-size: 25px;\n}\n\n.dumtext[_ngcontent-%COMP%]   .firstp[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  cursor: pointer;\n}\n\n.side[_ngcontent-%COMP%]   .rightside3[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.side[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   .t3[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -90px;\n  left: 10px;\n  padding: 135px 7em;\n  width: 100%;\n  height: 100%;\n  color: #ffffff;\n  font-family: Trebuchet MS;\n}\n\n.top1[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n  padding: 5px 9px;\n  border-radius: 10px;\n  background-color: #e0e0e0;\n  font-family: Trebuchet MS;\n  border: none;\n  resize: none;\n}\n\n.top1[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: transparent;\n}\n\n.focmt[_ngcontent-%COMP%] {\n  font-family: Trebuchet MS;\n  font-size: 20px;\n  color: #f69320;\n  font-weight: bold;\n}\n\ninput[type=submit][_ngcontent-%COMP%] {\n  font-family: Trebuchet MS;\n  background-color: #f6921e;\n  border-radius: 10px;\n  color: #ffffff;\n  padding: 6px 58px;\n  border: 0 none;\n  cursor: pointer;\n}\n\ninput[type=submit][_ngcontent-%COMP%]:focus {\n  outline: transparent;\n}\n\n.profile-link[_ngcontent-%COMP%] {\n  color: #f6921e;\n}\n\n.coment[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.12);\n  width: 100%;\n  min-height: 50px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.coment[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%] {\n  width: 10%;\n  margin-top: auto;\n  margin-bottom: auto;\n  max-width: 40px;\n  max-height: 40px;\n}\n\n.coment[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  width: 90%;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.coment[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .comment-author[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  color: #26a69a;\n  padding-right: 5px;\n  cursor: pointer;\n}\n\n.last-coment[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n\n.new-coment[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.pull-right[_ngcontent-%COMP%] {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHBvc3Qtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUdFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBREo7O0FBS0E7RUFDRSxXQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBRkY7O0FBS0E7RUFDRSxvQkFBQTtBQUZGOztBQUtBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBRkY7O0FBS0E7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUtBO0VBQ0Usb0JBQUE7QUFGRjs7QUFLQTtFQUNFLGNBQUE7QUFGRjs7QUFLQTtFQUNFLDRDQUFBO0VBQ0EsK0NBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUFGRjs7QUFJRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0U7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUhKOztBQUtJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUhOOztBQVFBO0VBQ0Usa0JBQUE7QUFMRjs7QUFTRTtFQUNFLGVBQUE7QUFOSjs7QUFVQTtFQUNFLFlBQUE7QUFQRiIsImZpbGUiOiJwb3N0LXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmlnaHRzaWRlMSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zaWRlIC5yaWdodHNpZGUyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNpZGUgZmlnY2FwdGlvbiBwIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAtOTBweDtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmc6IDE1OXB4IDdlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1mYW1pbHk6IFRyZWJ1Y2hldCBNUztcclxufVxyXG5cclxuLmR1bXRleHQgcCB7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBmb250LWZhbWlseTogVHJlYnVjaGV0IE1TO1xyXG59XHJcblxyXG4uZHVtdGV4dCAuZmlyc3RwIHtcclxuICBjb2xvcjogI2Y2OTMyMDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgLy8gLnRpdGxlIHtcclxuICAvLyAgIGZsb2F0OiBsZWZ0O1xyXG4gIC8vIH1cclxuICBpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG5cclxuLnNpZGUgLnJpZ2h0c2lkZTMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2lkZSBmaWdjYXB0aW9uIC50MyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogLTkwcHg7XHJcbiAgbGVmdDogMTBweDtcclxuICBwYWRkaW5nOiAxMzVweCA3ZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtZmFtaWx5OiBUcmVidWNoZXQgTVM7XHJcbn1cclxuXHJcbi50b3AxIHRleHRhcmVhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIHBhZGRpbmc6IDVweCA5cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG4gIGZvbnQtZmFtaWx5OiBUcmVidWNoZXQgTVM7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHJlc2l6ZTogbm9uZTtcclxufVxyXG5cclxuLnRvcDEgdGV4dGFyZWE6Zm9jdXMge1xyXG4gIG91dGxpbmU6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZm9jbXQge1xyXG4gIGZvbnQtZmFtaWx5OiBUcmVidWNoZXQgTVM7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjZjY5MzIwO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICBmb250LWZhbWlseTogVHJlYnVjaGV0IE1TO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNjkyMWU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBwYWRkaW5nOiA2cHggNThweDtcclxuICBib3JkZXI6IDAgbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl06Zm9jdXMge1xyXG4gIG91dGxpbmU6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ucHJvZmlsZS1saW5rIHtcclxuICBjb2xvcjogI2Y2OTIxZTtcclxufVxyXG5cclxuLmNvbWVudCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgLnBob3RvIHtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIG1heC13aWR0aDogNDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAudGV4dCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcblxyXG4gICAgLmNvbW1lbnQtYXV0aG9yIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjogIzI2YTY5YTtcclxuICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubGFzdC1jb21lbnQge1xyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG5cclxuLm5ldy1jb21lbnQge1xyXG4gIC5pbnB1dC1ncm91cC10ZXh0IHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5wdWxsLXJpZ2h0IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "wf7n":
/*!************************************************************!*\
  !*** ./src/app/modules/dashboard/services/user.service.ts ***!
  \************************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class UserService {
    constructor(http) {
        this.http = http;
    }
    getUserProfile() {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/users/me`;
        return this.http.get(url);
    }
    getUserById(id) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/users/${id}`;
        return this.http.get(url);
    }
    editCurrentUser(profile) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/users/me`;
        return this.http.put(url, profile);
    }
    sendInvitation(arr) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/users/invitebyemail`;
        return this.http.post(url, { emails: arr });
    }
    getGoogleContacts(token) {
        const url = 'https://www.google.com/m8/feeds/contacts/default/full?alt=json&max-results=9999999';
        return this.http.get(url, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', token),
        });
    }
    connectTofriend(obj) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/users/invitefriend`;
        return this.http.post(url, obj);
    }
    chechIsUserConnected(invitedid) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/users/isinvitedid/${invitedid}`;
        return this.http.get(url);
    }
    getInviteeidByUserId(uid) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/users/inviteeid/${uid}`;
        return this.http.get(url);
    }
    checkUserIsPayed(uid) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/payments/check/${uid}`;
        return this.http.get(url);
    }
    getAllUsers() {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/users`;
        return this.http.get(url);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac });


/***/ })

}]);
//# sourceMappingURL=modules-dashboard-dashboard-module.js.map