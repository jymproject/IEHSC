webpackJsonp([5],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_service__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddUserPasswordPage = (function () {
    function AddUserPasswordPage(navCtrl, navParams, appService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appService = appService;
        this.toastCtrl = toastCtrl;
        this.storeNo = "冷藏库";
    }
    //添加用户名密码
    AddUserPasswordPage.prototype.AddData = function () {
        var _this = this;
        this.appService.httpPost(__WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppGlobal */].API.addtData, { adminUsername: this.adminUsername, adminPassword: this.adminPassWord, addUsername: this.addUsername, addPassword: this.addPassword }, function (rs) {
            if (rs == "[]") {
                _this.appService.toast('网络连接不可用');
            }
            else if (rs == 'OK') {
                _this.appService.toast('添加用户名&密码成功');
            }
            else if (rs != "OK" && rs != "") {
                _this.appService.toast(rs);
            }
            else {
                _this.toastCtrl.create({
                    message: '登录失败！请检查用户名或密码',
                    duration: 2000,
                    position: 'top'
                }).present();
            }
        });
    };
    AddUserPasswordPage.prototype.UpdateData = function () {
        var _this = this;
        this.appService.httpPost(__WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppGlobal */].API.updateDate, { adminUsername: this.adminUsername, adminPassword: this.adminPassWord, addUsername: this.addUsername, addPassword: this.addPassword }, function (rs) {
            if (rs == "[]") {
                _this.appService.toast('网络连接不可用');
            }
            else if (rs == 'OK') {
                _this.appService.toast('更新用户名&密码成功');
            }
            else if (rs != "OK" && rs != "") {
                _this.appService.toast(rs);
            }
            else {
                _this.toastCtrl.create({
                    message: '登录失败！请检查用户名或密码',
                    duration: 2000,
                    position: 'top'
                }).present();
            }
        });
    };
    AddUserPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-user-password',template:/*ion-inline-start:"E:\JYM\ionicDemo\src\pages\add-user-password\add-user-password.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>账号密码管理</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n<ion-content padding="true">\n\n  <div class="Welcome" style="text-align: center; margin-left:0px; margin-right:0px;">\n    <h2>Add user&password</h2>\n  </div>\n  <ion-item>\n    <ion-label fixed>管理员账号:</ion-label>\n    <ion-input type="text" placeholder="请输入账号" [(ngModel)]="adminUsername" #adminusername></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label fixed>管理员密码:</ion-label>\n    <ion-input type="password" placeholder="请输入密码" [(ngModel)]="adminPassWord"  #adminpassword></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label fixed>添 加 账 号 :</ion-label>\n    <ion-input type="text" placeholder="请输入账号" [(ngModel)]="addUsername"  #addusername></ion-input>\n  </ion-item>\n  <ion-item> \n    <ion-label fixed>添 加 密 码 :</ion-label>\n    <ion-input type="password" placeholder="请输入密码" [(ngModel)]="addPassword"  #addpassword></ion-input>\n  </ion-item>\n\n  <div class="LoginButton" style="text-align: center; margin-left:0px; margin-right:0px;">\n    <button ion-button block color="primary" (click)="AddData()">\n      添加\n    </button>\n    <button ion-button block color="primary" (click)="UpdateData()">\n      更改\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\JYM\ionicDemo\src\pages\add-user-password\add-user-password.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__app_app_service__["b" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_app_service__["b" /* AppService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]) === "function" && _d || Object])
    ], AddUserPasswordPage);
    return AddUserPasswordPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=add-user-password.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductChangePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_service__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ProductChangePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductChangePage = (function () {
    function ProductChangePage(appService, navCtrl, navParams) {
        this.appService = appService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.getBatchNoFromDb();
        this.userName = this.navParams.data.userNamePar;
    }
    ProductChangePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductChangePage');
    };
    ProductChangePage.prototype.getBatchNoFromDb = function () {
        var _this = this;
        this.appService.httpGet(__WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppGlobal */].API.getBatchNoFromDb, null, function (rs) {
            if (rs != "" && rs != "[]") {
                _this.BatchNoList = rs;
            }
        });
    };
    ProductChangePage.prototype.query = function () {
        var _this = this;
        if (this.batchNo == null) {
            this.appService.toast('请选择生产批次');
        }
        if (this.shifId == null) {
            this.appService.toast('请选择生产班组');
        }
        if (this.deciveNo == null) {
            this.appService.toast('请选择生产机台');
        }
        else {
            var _that = this;
            this.appService.httpPost(__WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppGlobal */].API.queryInfo, {
                BatchNo: this.batchNo,
                ShiftId: this.shifId,
                DeciveNo: this.deciveNo
            }, function (rs) {
                if (rs != "" && rs != "[]") {
                    _this.MaterNo = rs.MaterNo;
                    _this.ProductQty = rs.ProductQty;
                    _this.objid = rs.Obj_id;
                }
                else {
                    _this.objid = 0;
                    _that.appService.toast('查询出错，请联系管理员！');
                }
            });
        }
    };
    ProductChangePage.prototype.exchange = function () {
        if (this.objid == "0" || this.objid == null) {
            this.appService.toast('未获取到OBJID，请联系管理员');
        }
        else {
            var _that = this;
            // this.appService.httpPost(AppGlobal.API.updateBatch, { Objid: this.objid, UserName: this.userName }, rs => {
            //   _that.appService.toast(rs);
            // }); 
            this.appService.httpPost(__WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppGlobal */].API.updateBatch, {
                //BatchNo: 123321,
                //
                //User_Name: this.userName
                Obj_id: this.objid,
                User_Name: this.userName
            }, function (rs) {
                _that.appService.toast(rs);
            });
        }
    };
    ProductChangePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-change',template:/*ion-inline-start:"E:\JYM\ionicDemo\src\pages\product-change\product-change.html"*/'<!--\n  Generated template for the ProductChangePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>生产计划</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div>\n    <ion-item>\n      <ion-label> 生产班组：</ion-label>\n      <ion-select okText="确定" cancelText="取消" placeholder="[必选项]请选择生产班组" [(ngModel)]="shifId">\n        <ion-option value="早">早</ion-option>\n        <ion-option value="中">中</ion-option>\n        <ion-option value="晚">晚</ion-option>\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n      <ion-label> 生产机台：</ion-label>\n      <ion-select okText="确定" cancelText="取消" placeholder="[必选项]请选择生产机台" [(ngModel)]="deciveNo">\n\n        <ion-option value="E1101">E1101</ion-option>\n        <ion-option value="E1102">E1102</ion-option>\n        <ion-option value="E1103">E1103</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label> 生产批次：</ion-label>\n      <ion-select okText="确定" cancelText="取消" placeholder="[必选项]请选择生产批次" [(ngModel)]="batchNo">\n\n        <ion-option *ngFor="let batchNo of BatchNoList">{{batchNo}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label> 生产物料：{{MaterNo}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label> 生产数量：{{ProductQty}}</ion-label>\n    </ion-item>\n\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar style="width:100%">\n    <div>\n      <button ion-button mode="ios" color="reds" outline="false" ion-icon name="home" style="width:48%;text-align:center" (click)="query()">查询</button>\n      <button ion-button icon-start style="width:48%;text-align:center" (click)="exchange()"> 切换</button>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"E:\JYM\ionicDemo\src\pages\product-change\product-change.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_app_service__["b" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_app_service__["b" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _c || Object])
    ], ProductChangePage);
    return ProductChangePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=product-change.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_VersionService__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_version__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SettingPage = (function () {
    function SettingPage(iab, appVersion, appService, versionService, params, navCtrl, modalCtrl) {
        this.iab = iab;
        this.appVersion = appVersion;
        this.appService = appService;
        this.versionService = versionService;
        this.params = params;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.userInfo = params.data;
        this.getVersionNumber();
    }
    /**
     * 获得app版本号,如0.01
     * @description  对应/config.xml中version的值
     * @returns {Promise<string>}
     */
    SettingPage.prototype.getVersionNumber = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.appVersion.getVersionNumber().then(function (value) {
                _this.currentVersion = value;
                resolve(value);
            }).catch(function (err) {
                console.log('getVersionNumber:' + err);
            });
        });
    };
    SettingPage.prototype.logOut = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SettingPage.prototype.aboutUs = function () {
        this.iab.create('http://www.huashine.net/', '_blank', 'location=yes');
    };
    SettingPage.prototype.checkUpdate = function () {
        this.versionService.detectionUpgrade();
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"E:\JYM\ionicDemo\src\pages\setting\setting.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title style=\'text-align:center\'>\n      更多\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n  <ion-list class="top-list">\n    <button ion-item>\n      <ion-avatar item-left>\n        <img src="./assets/icon/user.jpg">\n      </ion-avatar>\n      <h2>{{userInfo.userNamePar}}</h2>\n      <p>账号：{{userInfo.userNamePar}}</p>\n    </button>\n  </ion-list>\n  <ion-list>\n    <button ion-item (click)="checkUpdate()">\n      检查更新\n      <span item-end>V{{currentVersion}}</span>\n    </button>\n    <button ion-item (click)="aboutUs()">\n      关于我们\n    </button>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar style="width:100%">\n      <div class="buttonsCSS">\n        <button ion-button color="reds" style="width:100%" (click)="logOut()">退出当前用户</button>\n      </div>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"E:\JYM\ionicDemo\src\pages\setting\setting.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_version__["a" /* AppVersion */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_version__["a" /* AppVersion */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__app_app_service__["b" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_app_service__["b" /* AppService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_VersionService__["a" /* VersionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_VersionService__["a" /* VersionService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]) === "function" && _g || Object])
    ], SettingPage);
    return SettingPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-user-password/add-user-password.module": [
		293,
		4
	],
	"../pages/login/login.module": [
		296,
		3
	],
	"../pages/new/new.module": [
		295,
		2
	],
	"../pages/product-change/product-change.module": [
		294,
		1
	],
	"../pages/setting/setting.module": [
		297,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_change_product_change__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    //依赖注入
    function HomePage(appService, navCtrl, navparam) {
        this.appService = appService;
        this.navCtrl = navCtrl;
        this.navparam = navparam;
        this.categories = [];
        this.getCategories();
        this.receive = navparam;
    }
    //获取分类
    HomePage.prototype.getCategories = function () {
        var _this = this;
        this.appService.httpGet(__WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppGlobal */].API.getCategories, null, function (rs) {
            _this.categories = rs;
        });
    };
    //点击跳转页面
    HomePage.prototype.goCategoryList = function (item) {
        switch (item.Id) {
            case 1:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__product_change_product_change__["a" /* ProductChangePage */], this.receive);
                break;
            default:
                break;
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\JYM\ionicDemo\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title style=\'text-align:center\'>MESNAC(软控)</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <div class="categories">\n    <ion-grid>\n      <ion-row>\n        <ion-col style="font-size: 12px" col-4 *ngFor="let c of categories" (click)="goCategoryList(c)">\n          <i class="iconfont {{c.Icon}} icon"></i>\n          <span class="title">{{c.FavoritesTitle}}</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\JYM\ionicDemo\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_app_service__["b" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_app_service__["b" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _c || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VersionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Constants__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_app_service__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var VersionService = (function () {
    function VersionService(platform, alertCtrl, transfer, appVersion, file, fileOpener, inAppBrowser, appService) {
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.transfer = transfer;
        this.appVersion = appVersion;
        this.file = file;
        this.fileOpener = fileOpener;
        this.inAppBrowser = inAppBrowser;
        this.appService = appService;
    }
    /**
     * 检查app是否需要升级
     */
    VersionService.prototype.detectionUpgrade = function () {
        var _that = this;
        this.appService.httpGet(__WEBPACK_IMPORTED_MODULE_8__app_app_service__["a" /* AppGlobal */].API.getVersion, null, function (rs) {
            _that.version = rs;
            _that.getVersionNumber().then(function () {
                if (_that.currentVersion != null && _that.version > _that.currentVersion) {
                    _that.alertCtrlMethod();
                }
                else {
                    _that.appService.toast('已是最新版本');
                }
            });
        });
    };
    VersionService.prototype.alertCtrlMethod = function () {
        var _this = this;
        this.alertCtrl.create({
            title: '升级',
            subTitle: '发现新版本,是否立即升级？',
            buttons: [{ text: '取消' },
                {
                    text: '确定',
                    handler: function () {
                        _this.downloadApp();
                    }
                }
            ]
        }).present();
    };
    /**
     * 下载安装app
     */
    VersionService.prototype.downloadApp = function () {
        var _this = this;
        if (true) {
            var alert_1 = this.alertCtrl.create({
                title: '下载进度：0%',
                enableBackdropDismiss: false,
                buttons: ['后台下载']
            });
            alert_1.present();
            var fileTransfer = this.transfer.create();
            var apk_1 = this.file.externalRootDirectory + 'mesnac.apk';
            fileTransfer.download(__WEBPACK_IMPORTED_MODULE_7__Constants__["a" /* APK_DOWNLOAD */], apk_1).then(function () {
                _this.fileOpener.open(apk_1, 'application/vnd.android.package-archive');
            });
            fileTransfer.onProgress(function (event) {
                var num = Math.floor(event.loaded / event.total * 100);
                if (num === 100) {
                    alert_1.dismiss();
                }
                else {
                    var title = document.getElementsByClassName('alert-title')[0];
                    title && (title.innerHTML = '下载进度：' + num + '%');
                }
            });
        }
    };
    /**
       * 获得app版本号,如0.01
       * @description  对应/config.xml中version的值
       * @returns {Promise<string>}
       */
    VersionService.prototype.getVersionNumber = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.appVersion.getVersionNumber().then(function (value) {
                _this.currentVersion = value;
                resolve(value);
            }).catch(function (err) {
                console.log('getVersionNumber:' + err);
            });
        });
    };
    VersionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__["a" /* AppVersion */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__["a" /* AppVersion */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__["a" /* FileOpener */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__["a" /* FileOpener */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__app_app_service__["b" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__app_app_service__["b" /* AppService */]) === "function" && _h || Object])
    ], VersionService);
    return VersionService;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=VersionService.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewPage = (function () {
    function NewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewPage');
    };
    NewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new',template:/*ion-inline-start:"E:\JYM\ionicDemo\src\pages\new\new.html"*/'<!--\n  Generated template for the NewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>DemoPage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <p>Welcome to hello world!</p>\n</ion-content>\n'/*ion-inline-end:"E:\JYM\ionicDemo\src\pages\new\new.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _b || Object])
    ], NewPage);
    return NewPage;
    var _a, _b;
}());

//# sourceMappingURL=new.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_add_user_password_add_user_password__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_setting_setting__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_new_new__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_backButton_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_VersionService__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_file_transfer__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_app_version__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_file__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_file_opener__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_in_app_browser__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_printer__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_storage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_product_change_product_change__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_setting_setting__["a" /* SettingPage */], __WEBPACK_IMPORTED_MODULE_7__pages_add_user_password_add_user_password__["a" /* AddUserPasswordPage */], __WEBPACK_IMPORTED_MODULE_12__pages_new_new__["a" /* NewPage */], __WEBPACK_IMPORTED_MODULE_23__pages_product_change_product_change__["a" /* ProductChangePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    mode: 'ios',
                    iconMode: 'ios',
                    menuType: 'push',
                    modalEnter: 'modal-slide-in',
                    modalLeave: 'modal-slide-out',
                    tabsHideOnSubPages: 'true',
                    backButtonText: '返回',
                    backButtonIcon: 'ios-arrow-back',
                    platforms: {
                        ios: {
                            menuType: 'push',
                        }
                    },
                    pageTransition: 'ios-transition'
                }, {
                    links: [
                        { loadChildren: '../pages/add-user-password/add-user-password.module#AddUserPasswordPageModule', name: 'AddUserPasswordPage', segment: 'add-user-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-change/product-change.module#ProductChangePageModule', name: 'ProductChangePage', segment: 'product-change', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new/new.module#NewPageModule', name: 'NewPage', segment: 'new', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_setting_setting__["a" /* SettingPage */], __WEBPACK_IMPORTED_MODULE_7__pages_add_user_password_add_user_password__["a" /* AddUserPasswordPage */], __WEBPACK_IMPORTED_MODULE_12__pages_new_new__["a" /* NewPage */], __WEBPACK_IMPORTED_MODULE_23__pages_product_change_product_change__["a" /* ProductChangePage */]
            ],
            providers: [
                Storage,
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_15__app_service__["b" /* AppService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__services_backButton_service__["a" /* BackButtonService */], __WEBPACK_IMPORTED_MODULE_16__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_16__ionic_native_file_transfer__["b" /* FileTransferObject */], __WEBPACK_IMPORTED_MODULE_17__ionic_native_app_version__["a" /* AppVersion */], __WEBPACK_IMPORTED_MODULE_18__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_19__ionic_native_file_opener__["a" /* FileOpener */], __WEBPACK_IMPORTED_MODULE_20__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_14__services_VersionService__["a" /* VersionService */], __WEBPACK_IMPORTED_MODULE_21__ionic_native_printer__["a" /* Printer */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export APP_DOWNLOAD */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APK_DOWNLOAD; });
var APP_DOWNLOAD = 'http://192.168.31.150:8011/api/download/GetApkFile'; //app下载地址
var APK_DOWNLOAD = 'http://192.168.31.150:8011/api/download/GetApkFile'; //apk下载完整地址
//# sourceMappingURL=Constants.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(menuCtrl, platform, statusBar, splashScreen, storage) {
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        //首次加载页面为登陆页面 LoginPage
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.pages = [
            { title: '主页', component: __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */] },
        ];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.openPage = function (page) {
        this.menuCtrl.close();
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\JYM\ionicDemo\src\app\app.html"*/'<ion-nav [root]="rootPage" #mycontent></ion-nav>\n<ion-menu [content]="mycontent" type="overlay" side="left" swipeEnabled="false">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>菜单</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)" detail-none>\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n'/*ion-inline-end:"E:\JYM\ionicDemo\src\app\app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppGlobal = (function () {
    function AppGlobal() {
    }
    //缓存key的配置
    AppGlobal.cache = {
        slides: "_dress_slides",
        categories: "_dress_categories",
        products: "_dress_products"
    };
    //接口基地址
    AppGlobal.domain = "http://192.168.31.150:1234";
    //接口地址
    AppGlobal.API = {
        getCategories: '/api/Categories/GetAllProducts',
        getCheckResult: '/api/CheckUser/CheckResult',
        getVersion: '/api/Download/GetVersionMethod',
        addtData: '/api/InsertPassword/InsertPassword',
        updateDate: '/api/InsertPassword/UpdatePassWord',
        getBatchNoFromDb: '/api/ProductPlan/GetBatchNo',
        queryInfo: '/api/ProductPlan/QueryInfo',
        updateBatch: '/api/ProductPlan/UpdateBatch'
    };
    AppGlobal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])()
    ], AppGlobal);
    return AppGlobal;
}());

var AppService = (function () {
    function AppService(http, loadingCtrl, alertCtrl, toastCtrl) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    // 对参数进行编码
    AppService.prototype.encode = function (params) {
        var str = '';
        if (params) {
            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    var value = params[key];
                    str += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
                }
            }
            str = '?' + str.substring(0, str.length - 1);
        }
        return str;
    };
    AppService.prototype.httpGet = function (url, params, callback, loader) {
        var _this = this;
        if (loader === void 0) { loader = false; }
        var loading = this.loadingCtrl.create({});
        if (loader) {
            loading.present();
        }
        this.http.get(AppGlobal.domain + url + this.encode(params))
            .toPromise()
            .then(function (res) {
            var d = res.json();
            if (loader) {
                loading.dismiss();
            }
            callback(d == null ? "[]" : d);
        })
            .catch(function (error) {
            if (loader) {
                loading.dismiss();
            }
            _this.handleError(error);
        });
    };
    AppService.prototype.httpPost = function (url, params, callback, loader) {
        var _this = this;
        if (loader === void 0) { loader = false; }
        var loading = this.loadingCtrl.create();
        if (loader) {
            loading.present();
        }
        this.http.post(AppGlobal.domain + url, params, { headers: this.headers })
            .toPromise()
            .then(function (res) {
            var d = res.json();
            if (loader) {
                loading.dismiss();
            }
            callback(d == null ? "[]" : d);
        }).catch(function (error) {
            if (loader) {
                loading.dismiss();
            }
            _this.handleError(error);
        });
    };
    AppService.prototype.handleError = function (error) {
        var msg = '';
        if (error.status == 400) {
            msg = '请求无效(code：404)';
            console.log('请检查参数类型是否匹配');
        }
        if (error.status == 404) {
            msg = '请求资源不存在(code：404)';
            console.error(msg + '，请检查路径是否正确');
        }
        if (error.status == 500) {
            msg = '服务器发生错误(code：500)';
            console.error(msg + '，请检查路径是否正确');
        }
        console.log(error);
        if (msg != '') {
            this.toast(msg);
        }
    };
    AppService.prototype.alert = function (message, callback) {
        if (callback) {
            var alert = this.alertCtrl.create({
                title: '提示',
                message: message,
                buttons: [{
                        text: "确定",
                        handler: function (data) {
                            callback();
                        }
                    }]
            });
            alert.present();
        }
        else {
            var alert = this.alertCtrl.create({
                title: '提示',
                message: message,
                buttons: ["确定"]
            });
            alert.present();
        }
    };
    AppService.prototype.alertConfirm = function (message, callback) {
        if (callback) {
            var alert = this.alertCtrl.create({
                title: '提示',
                message: message,
                buttons: [{
                        text: "确定",
                        handler: function (data) {
                            callback();
                        }
                    }, {
                        text: "取消",
                        handler: function (data) {
                            // callback();
                        }
                    }]
            });
            alert.present();
        }
    };
    AppService.prototype.toast = function (message, callback) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 2000,
            dismissOnPageChange: true,
            position: 'top'
        });
        toast.present();
        if (callback) {
            callback();
        }
    };
    AppService.prototype.setItem = function (key, obj) {
        try {
            var json = JSON.stringify(obj);
            window.localStorage[key] = json;
        }
        catch (e) {
            console.error("window.localStorage error:" + e);
        }
    };
    AppService.prototype.getItem = function (key, callback) {
        try {
            var json = window.localStorage[key];
            var obj = JSON.parse(json);
            callback(obj);
        }
        catch (e) {
            console.error("window.localStorage error:" + e);
        }
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* ToastController */]) === "function" && _d || Object])
    ], AppService);
    return AppService;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_backButton_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_user_password_add_user_password__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LoginPage = (function () {
    function LoginPage(navCtrl, appService, storage, modalCtrl, backButtonService, platform, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.appService = appService;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.backButtonService = backButtonService;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.loginParams = { userNamePar: "" };
        //默认是记住密码
        this.isRemember = true;
        platform.ready().then(function () {
            _this.backButtonService.registerBackButtonAction(null);
        });
        //获取用户名和密码 用于双向数据绑定在界面显示账号密码
        this.userName = window.localStorage.getItem('username');
        this.passWord = window.localStorage.getItem('password');
    }
    //登录
    LoginPage.prototype.logIn = function (username, password) {
        var _this = this;
        this.userName = username.value;
        this.passWord = password.value;
        if (this.userName.value == "") {
            this.userName = window.localStorage.getItem('username');
        }
        if (this.passWord.value == "") {
            this.passWord = window.localStorage.getItem('password');
        }
        if (this.userName.value == "") {
            this.toastCtrl.create({
                message: '请输入账号',
                duration: 2000,
                position: 'top'
            }).present();
        }
        else if (this.passWord.value == "") {
            this.toastCtrl.create({
                message: '请输入密码',
                duration: 2000,
                position: 'top'
            }).present();
        }
        else {
            this.loginParams.userNamePar = this.userName;
            this.appService.httpPost(__WEBPACK_IMPORTED_MODULE_4__app_app_service__["a" /* AppGlobal */].API.getCheckResult, { UserName: this.userName, PassWord: this.passWord }, function (rs) {
                if (rs == "[]") {
                    _this.appService.toast('网络连接不可用');
                }
                else if (rs == '1') {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */], _this.loginParams);
                    //登陆成功，记住登陆密码
                    if (_this.isRemember) {
                        window.localStorage.setItem('username', _this.userName);
                        window.localStorage.setItem('password', _this.passWord);
                    }
                    else {
                        window.localStorage.removeItem('username');
                        window.localStorage.removeItem('password');
                    }
                }
                else {
                    _this.toastCtrl.create({
                        message: '登录失败！请检查用户名或密码',
                        duration: 2000,
                        position: 'top'
                    }).present();
                }
            });
        }
    };
    LoginPage.prototype.addPassWord = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__add_user_password_add_user_password__["a" /* AddUserPasswordPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\JYM\ionicDemo\src\pages\login\login.html"*/'<ion-content padding="true">\n\n  <div class="Welcome" style="text-align: center; margin-left:0px; margin-right:0px;">\n    <h2>W e l c o m e</h2>\n  </div>\n  <ion-item>\n    <ion-label fixed>账号</ion-label>\n    <ion-input type="text" placeholder="请输入账号" [(ngModel)]="userName" #username></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label fixed>密码</ion-label>\n    <ion-input type="password" placeholder="请输入密码" [(ngModel)]="passWord"  #password></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>记住密码</ion-label>\n    <ion-toggle [(ngModel)]="isRemember"></ion-toggle>\n  </ion-item>\n\n  <div class="LoginButton" style="text-align: center; margin-left:0px; margin-right:0px;">\n    <button ion-button block color="primary" (click)="logIn(username,password)">\n      登录\n    </button>\n  </div>\n  <div class="addUP" style="text-align:center">\n     <button style="color: red" (click)=addPassWord()>添加&更改 账号密码</button>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"E:\JYM\ionicDemo\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__app_app_service__["b" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_app_service__["b" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_backButton_service__["a" /* BackButtonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_backButton_service__["a" /* BackButtonService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]) === "function" && _g || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setting_setting__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_backButton_service__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage(params, backButtonService, platform) {
        var _this = this;
        this.params = params;
        this.backButtonService = backButtonService;
        this.platform = platform;
        this.loginParams = params;
        this.tabRoots = [{
                root: __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */],
                tabTitle: '主页',
                tabIcon: 'home'
            },
            {
                root: __WEBPACK_IMPORTED_MODULE_3__setting_setting__["a" /* SettingPage */],
                tabTitle: '我',
                tabIcon: 'person'
            }
        ];
        platform.ready().then(function () {
            _this.backButtonService.registerBackButtonAction(_this.tabRef);
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myTabs'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Tabs */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Tabs */]) === "function" && _a || Object)
    ], TabsPage.prototype, "tabRef", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\JYM\ionicDemo\src\pages\tabs\tabs.html"*/'<ion-tabs #myTabs>\n  <ion-tab *ngFor="let tabRoot of tabRoots" [root]="tabRoot.root" tabTitle="{{tabRoot.tabTitle}}" tabIcon="{{tabRoot.tabIcon}}"\n    [rootParams]="loginParams"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"E:\JYM\ionicDemo\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_backButton_service__["a" /* BackButtonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_backButton_service__["a" /* BackButtonService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]) === "function" && _d || Object])
    ], TabsPage);
    return TabsPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackButtonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BackButtonService = (function () {
    //构造函数 依赖注入
    function BackButtonService(platform, appCtrl, toastCtrl) {
        this.platform = platform;
        this.appCtrl = appCtrl;
        this.toastCtrl = toastCtrl;
        //控制硬件返回按钮是否触发，默认false
        this.backButtonPressed = false;
    }
    //注册方法
    BackButtonService.prototype.registerBackButtonAction = function (tabRef) {
        var _this = this;
        //registerBackButtonAction是系统自带的方法
        this.platform.registerBackButtonAction(function () {
            //获取NavController
            var activeNav = _this.appCtrl.getActiveNav();
            //如果可以返回上一页，则执行pop
            if (activeNav.canGoBack()) {
                activeNav.pop();
            }
            else {
                if (tabRef == null || tabRef._selectHistory[tabRef._selectHistory.length - 1] === tabRef.getByIndex(0).id) {
                    //执行退出
                    _this.showExit();
                }
                else {
                    //选择首页第一个的标签
                    tabRef.select(0);
                }
            }
        });
    };
    //退出应用方法
    BackButtonService.prototype.showExit = function () {
        var _this = this;
        //如果为true，退出
        if (this.backButtonPressed) {
            this.platform.exitApp();
        }
        else {
            //第一次按，弹出Toast
            this.toastCtrl.create({
                message: '再按一次退出应用',
                duration: 2000,
                position: 'top'
            }).present();
            //标记为true
            this.backButtonPressed = true;
            //两秒后标记为false，如果退出的话，就不会执行了
            setTimeout(function () { return _this.backButtonPressed = false; }, 2000);
        }
    };
    BackButtonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], BackButtonService);
    return BackButtonService;
}());

//# sourceMappingURL=backButton.service.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map