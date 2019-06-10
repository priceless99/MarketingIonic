(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-icon slot=\"end\" color=\"medium\" (click)='logout()' name=\"log-out\"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n  <ion-card class=\"welcome-card\">\n    <ion-img src=\"/assets/thumbnail.png\"></ion-img>\n    <ion-card-header>\n      <ion-card-subtitle>Dashboard</ion-card-subtitle>\n      <ion-card-title>Tier 1 Gaming Lounge</ion-card-title>\n\n    </ion-card-header>\n    <ion-card-content>\n      <p>This app helps marketing easier</p>\n    </ion-card-content>\n\n  </ion-card>\n  <ion-list lines=\"none\">\n    <ion-list-header>\n      <ion-label>Databases</ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-icon slot=\"start\" color=\"medium\" name=\"book\"></ion-icon>\n      <ion-label>Phone numbers</ion-label>\n      <ion-icon id='phoneicon' slot='end' (click)=\"showphonelist()\" name={{this.phoneicon}}></ion-icon>\n\n    </ion-item>\n    <ion-card id='phonelist' style=\"display:none\">\n      <ion-list>\n        <ion-item *ngFor='let item of this.api.phonenumbers'>\n          {{item}}\n        </ion-item>\n      </ion-list>\n    </ion-card>\n    <ion-item>\n      <ion-icon slot=\"start\" color=\"medium\" name=\"mail\"></ion-icon>\n      <ion-label>Emails</ion-label>\n      <ion-icon id='emailicon' slot='end' (click)='showemaillist()' name={{this.emailicon}}></ion-icon>\n\n    </ion-item>\n    <ion-card id='emaillist' style=\"display:none\">\n      <ion-list>\n        <ion-item *ngFor='let item of this.api.emails'>\n          {{item}}\n        </ion-item>\n      </ion-list>\n    </ion-card>\n    <!-- <ion-item href=\"\">\n      <ion-icon slot=\"start\" color=\"medium\" name=\"grid\"></ion-icon>\n      <ion-label>Change Your App Layout</ion-label>\n    </ion-item>\n    <ion-item href=\"\">\n      <ion-icon slot=\"start\" color=\"medium\" name=\"color-fill\"></ion-icon>\n      <ion-label>Theme Your App</ion-label>\n    </ion-item> -->\n  </ion-list>\n  <ion-list lines=\"none\">\n    <ion-list-header>\n      <ion-label>Analyst</ion-label>\n    </ion-list-header>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ3U5MDk5L1BlcnNvbmFsVGVzdEludC90ZXh0aW5nQXBwL3NyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cognito_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cognito.service */ "./src/app/cognito.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _restapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../restapi.service */ "./src/app/restapi.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Tab1Page = /** @class */ (function () {
    function Tab1Page(router, cognito, api) {
        this.router = router;
        this.cognito = cognito;
        this.api = api;
        this.phoneicon = 'arrow-dropright';
        this.emailicon = 'arrow-dropright';
    }
    Tab1Page.prototype.showphonelist = function () {
        var phonelist = document.getElementById('phonelist');
        if (phonelist.style.display === 'none') {
            phonelist.style.display = 'block';
            this.phoneicon = 'arrow-dropdown';
        }
        else {
            phonelist.style.display = 'none';
            this.phoneicon = 'arrow-dropright';
        }
    };
    Tab1Page.prototype.showemaillist = function () {
        var emaillist = document.getElementById('emaillist');
        if (emaillist.style.display === 'none') {
            emaillist.style.display = 'block';
            this.emailicon = 'arrow-dropdown';
        }
        else {
            emaillist.style.display = 'none';
            this.emailicon = 'arrow-dropright';
        }
    };
    Tab1Page.prototype.logout = function () {
        this.router.navigate(['/login']);
        this.cognito.getAuthenticatedUser().signOut();
    };
    Tab1Page.prototype.ngOnInit = function () {
        // this.api.getData()
    };
    Tab1Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _cognito_service__WEBPACK_IMPORTED_MODULE_1__["CognitoService"], _restapi_service__WEBPACK_IMPORTED_MODULE_3__["RestapiService"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map