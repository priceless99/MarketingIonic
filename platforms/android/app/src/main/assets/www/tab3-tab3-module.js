(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_5__["Tab3Page"] }])
            ],
            declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_5__["Tab3Page"]]
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/tab3/tab3.page.html":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      New Message:\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding='10px'>\n  <div>\n    <ion-input type=\"text\" maxlength=\"18\" placeholder=\"Type your message\" debounce=\"0\" [(ngModel)]=\"searchText\"\n      (ionChange)=\"ionChange(searchText)\" id='userInput'\n      style=' height: 120px; border: 1px solid #999999; padding: 5px;'></ion-input>\n  </div>\n  <br>\n  <ion-list>\n    <ion-list-header>\n      <ion-label>Send to:</ion-label>\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Text</ion-label>\n      <ion-toggle id='textbox'></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Email</ion-label>\n      <ion-toggle id='emailbox'></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Push Notification</ion-label>\n      <ion-toggle id='pushbox'></ion-toggle>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-radio-group>\n      <ion-list-header>\n        <ion-label>WHEN TO SEND MESSAGE</ion-label>\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Now</ion-label>\n        <ion-radio id='selectnow' (ionSelect)='now()' slot=\"start\" value=\"biff\" checked></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Schedule</ion-label>\n        <ion-radio (ionSelect)='showschedule()' slot=\"start\" value=\"griff\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n\n  <div id='sendnow' style=\"text-align:center\">\n    <ion-button type='submit' (click)='confirmsendnow()'>Send Now</ion-button>\n  </div>\n\n  <ion-list style=\"display:none\" id='schedule'>\n    <ion-list-header>Schedule messaging</ion-list-header>\n    <ion-item>\n      <ion-label>Date:</ion-label>\n      <ion-datetime id='timeinput' displayFormat=\"DDDD MMM D, YYYY\" min=\"2019\" max=\"2030\" value=\"2019-07-02\">\n      </ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Time:</ion-label>\n      <ion-datetime id='dateinput' displayFormat=\"h:mm a\" value='14:00'></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Frequency</ion-label>\n      <ion-select id='freinput' placeholder='Select one'>\n        <ion-select-option value='onetime'>One Time</ion-select-option>\n        <ion-select-option value='weekly'>Weekly</ion-select-option>\n        <ion-select-option value='monthly'>Monthly</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <div style=\"text-align:center\">\n      <ion-button type='submit' (click)='confirm()'>Shedule</ion-button>\n    </div>\n  </ion-list>\n  <!-- <form>\n    <select id='freinput'>\n      <option value=\"onetime\">One time</option>\n      <option value=\"weekly\">Weekly</option>\n      <option value=\"monthly\">Monthly</option>\n    </select>\n  </form> -->\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _restapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../restapi.service */ "./src/app/restapi.service.ts");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "./node_modules/@ionic-native/sms/ngx/index.js");
/* harmony import */ var _cognito_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cognito.service */ "./src/app/cognito.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};







var Tab3Page = /** @class */ (function () {
    function Tab3Page(alert, emailComposer, api, sms, cognito, router) {
        this.alert = alert;
        this.emailComposer = emailComposer;
        this.api = api;
        this.sms = sms;
        this.cognito = cognito;
        this.router = router;
    }
    Tab3Page.prototype.ionChange = function (searchText) {
        console.log(searchText);
    };
    Tab3Page.prototype.sendemail = function () {
        var email = {
            to: 'pnguyen1912@gmail.com',
            cc: '',
            bcc: [''],
            attachments: [
                'file://img/logo.png',
                'res://icon.png',
                'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
                'file://README.pdf'
            ],
            subject: 'Cordova Icons',
            body: 'How are you? Nice greetings from Leipzig',
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    Tab3Page.prototype.confirm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            header: 'Confirm!',
                            message: 'Are you ready to schedule this?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.send();
                                        _this.now();
                                        var now = document.getElementById('selectnow');
                                        now.checked = true;
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab3Page.prototype.confirmsendnow = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            header: 'Confirm!',
                            message: "Are you ready to send it now!",
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.sendnow();
                                        _this.sendemail();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab3Page.prototype.showschedule = function () {
        var schedule = document.getElementById('schedule');
        var sendnow = document.getElementById('sendnow');
        schedule.style.display = 'block';
        sendnow.style.display = 'none';
    };
    Tab3Page.prototype.now = function () {
        var schedule = document.getElementById('schedule');
        var sendnow = document.getElementById('sendnow');
        schedule.style.display = 'none';
        sendnow.style.display = 'block';
    };
    Tab3Page.prototype.sendnow = function () {
        var userInput = document.getElementById('userInput');
        var textbox = document.getElementById('textbox');
        var emailbox = document.getElementById('emailbox');
        var pushbox = document.getElementById('pushbox');
        if (userInput.value === '') {
            alert('Must fill message');
            return false;
        }
        if (textbox.checked === false && emailbox.checked === false && pushbox.checked === false) {
            alert('Must send to something');
            return false;
        }
        console.log(userInput.value, textbox.checked, emailbox.checked, pushbox.checked);
        userInput.value = '';
        textbox.checked = false;
        emailbox.checked = false;
        pushbox.checked = false;
        this.sms.send('414-306-2025', 'hello');
    };
    Tab3Page.prototype.send = function () {
        var userInput = document.getElementById('userInput');
        var textbox = document.getElementById('textbox');
        var emailbox = document.getElementById('emailbox');
        var pushbox = document.getElementById('pushbox');
        var timeinput = document.getElementById('timeinput');
        var dateinput = document.getElementById('dateinput');
        var freinput = document.getElementById('freinput');
        if (userInput.value === '') {
            alert('Must fill message');
            return false;
        }
        if (textbox.checked === false && emailbox.checked === false && pushbox.checked === false) {
            alert('Must send to something');
            return false;
        }
        console.log(userInput.value);
        if (textbox.checked === true) {
            console.log('send text');
        }
        if (emailbox.checked === true) {
            console.log('send email');
        }
        if (pushbox.checked === true) {
            console.log('send push');
        }
        console.log(timeinput.value);
        console.log(dateinput.value);
        console.log(freinput.value);
        this.api.scheduledmessage.push({
            message: userInput.value,
            text: textbox.checked,
            email: emailbox.checked,
            push: pushbox.checked,
            time: timeinput.value,
            date: dateinput.value,
            frequency: freinput.value
        });
        console.log(this.api.scheduledmessage);
        userInput.value = '';
        textbox.checked = false;
        emailbox.checked = false;
        pushbox.checked = false;
        timeinput.value = '2019-07-02';
        dateinput.value = '14:00';
        freinput.value = undefined;
        // this.api.getData();
    };
    Tab3Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! ./tab3.page.html */ "./src/app/tab3/tab3.page.html"),
            styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_6__["EmailComposer"],
            _restapi_service__WEBPACK_IMPORTED_MODULE_1__["RestapiService"], _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_2__["SMS"], _cognito_service__WEBPACK_IMPORTED_MODULE_3__["CognitoService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], Tab3Page);
    return Tab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map