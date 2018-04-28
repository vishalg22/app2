webpackJsonp([19],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddstudentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addnotice_addnotice__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contactus_contactus__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_comman_comman__ = __webpack_require__(31);
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
 * Generated class for the AddstudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddstudentPage = (function () {
    function AddstudentPage(navCtrl, navParams, commanService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commanService = commanService;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__addnotice_addnotice__["a" /* AddnoticePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__contactus_contactus__["a" /* ContactusPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__addnotice_addnotice__["a" /* AddnoticePage */];
        this.title = "New student Profile";
        this.guardian = 'mother';
        this.myDate = new Date();
        //this.class_name = 1;
        //this.division = 0;
        this.bgrp = 0;
        //this.bgrp_arr=[{id:1,bgrp:'A+'},{id:2,bgrp:'A-'},{id:3,bgrp:'B+'},{id:4,bgrp:'B-'},{id:5,bgrp:'AB+'},{id:6,bgrp:'AB-'},{id:7,bgrp:'O+'},{id:8,bgrp:'O-'}];
        //console.log(this.myDate);
        this.commanService.getBloodGroupData().then(function (bgrdt) {
            _this.bgrp_arr = bgrdt;
            _this.bgrpOpts = { title: "Bloodgroup", subtitle: "select blood group" };
            // console.log(this.bgrp_arr);
        });
        this.commanService.getGenderData().then(function (gndt) {
            _this.gender = gndt;
            _this.genderOpts = { title: "Gender", subtitle: "select blood group" };
        });
        this.commanService.getClassData().then(function (clsdt) {
            _this.classess = clsdt;
            _this.classOpts = { title: "Classes", subtitle: "select class group" };
            console.log(_this.classess);
        });
        this.commanService.getDivisionData().then(function (divdt) {
            _this.divisions = divdt;
            _this.divOpts = { title: "Division", subtitle: "select division group" };
            console.log(_this.divisions);
        });
    }
    AddstudentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddstudentPage');
    };
    return AddstudentPage;
}());
AddstudentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-addstudent',template:/*ion-inline-start:"/home/vishal/ionic_prj/preschool/src/pages/addstudent/addstudent.html"*/'<!--\n  Generated template for the AddstudentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-grid>\n		<ion-row>\n			<ion-col>\n			<ion-avatar item-right>\n				<img src="../assets/image/dashboard/children.png">\n			</ion-avatar>\n			</ion-col>\n			<ion-col>\n				<ion-item>\n					<ion-input type="text" placeholder="Enter Student Name"></ion-input>\n				</ion-item>\n				<ion-item>\n					<ion-datetime displayFormat="DDD MMM D,YYYY" placeholder="Select DOB" min="2000" max="2020-10-31" [(ngModel)]="myDate"></ion-datetime>\n				</ion-item>\n				<div>\n          <ion-item>\n          <!--<ion-label>Blood group</ion-label>-->\n					<ion-select [(ngModel)]="bgrp" placeholder="Select Blood group" [selectOptions]="bgrpOpts">\n						<ion-option *ngFor="let bgr of bgrp_arr" [value]="bgr.id" >{{bgr.title}}</ion-option>\n					</ion-select>\n        </ion-item>\n				</div>\n			</ion-col>\n		</ion-row>\n\n		<ion-row>\n			<ion-col>\n				<ion-item>\n          <ion-label>Gender</ion-label>\n					<ion-select [(ngModel)]="gender_val" placeholder="Select Gender" [selectOptions]="genderOpts">\n						<ion-option *ngFor="let gen of gender" [value]="gen.id">{{gen.title}}</ion-option>\n					</ion-select>\n				</ion-item>\n\n				<ion-item>\n        <ion-label>Class</ion-label>\n				<ion-select [(ngModel)]="class_name" placeholder="Select Class" [selectOptions]="classOpts">\n					<ion-option *ngFor="let cls of classess" [value]="cls.id">{{cls.title}}</ion-option>\n				</ion-select>\n      </ion-item>\n				<ion-item>\n        <ion-label>Division</ion-label>\n				<ion-select [(ngModel)]="division" placeholder="Select Division" [selectOptions]="divOpts">\n					   <ion-option *ngFor="let div of divisions" [value]="div.id">{{div.title}}</ion-option>\n				</ion-select>\n      </ion-item>\n			</ion-col>\n	  </ion-row>\n	  <ion-row>\n\n			<ion-col>\n				<ion-item>\n						<ion-label floating>Primary Address</ion-label>\n						<ion-textarea rows="3" cols="30" name="paddress" id="paddress"></ion-textarea>\n				</ion-item>\n				<ion-item>\n   						<ion-label floating>Secondary Address</ion-label>\n						<ion-textarea rows="3" cols="30"  name="saddress" id="taddress"></ion-textarea>\n				</ion-item>\n\n			</ion-col>\n\n\n		</ion-row>\n		<ion-row>\n		<ion-segment [(ngModel)]="gaurdian">\n			<ion-segment-button value="mother">\n			Mother\n			</ion-segment-button>\n			<ion-segment-button value="father">\n			Father\n			</ion-segment-button>\n			<ion-segment-button value="other">\n			Others\n			</ion-segment-button>\n		</ion-segment>\n		</ion-row>\n		<ion-row>\n		<div [ngSwitch]="gaurdian">\n			<div *ngSwitchCase="\'mother\'">\n				<div>\n					<ion-input type="text" placeholder="Enter Mother Name" id="mname"></ion-input>\n				</div>\n				<div>\n					<ion-label inline>Address</ion-label>\n					<ion-textarea rows="3" cols="30" name="maddress" id="maddress"></ion-textarea>\n				</div>\n				<div>\n					<ion-input type="number" placeholder="Enter Primary Mobile Number" id="mcell"></ion-input>\n				</div>\n				<div>\n					<ion-input type="text" placeholder="Enter Primary Email" id="memail"></ion-input>\n				</div>\n			</div>\n			<div *ngSwitchCase="\'father\'">\n				<div>\n					<ion-input type="text" placeholder="Enter Father Name" id="fname"></ion-input>\n				</div>\n				<div>\n					<ion-label inline>Address</ion-label>\n					<ion-textarea rows="3" cols="30" name="paddress" id="faddress"></ion-textarea>\n				</div>\n				<div>\n					<ion-input type="number" placeholder="Enter Primary Mobile Number" id="fcell"></ion-input>\n				</div>\n				<div>\n					<ion-input type="text" placeholder="Enter Primary Email" id="femail"></ion-input>\n				</div>\n			</div>\n			<div *ngSwitchCase="\'other\'">\n				<div>\n					<ion-input type="text" placeholder="Enter Other Relative Name" id="oname"></ion-input>\n				</div>\n				<div>\n					<ion-input type="text" placeholder="What is reletion with student?" id="oname"></ion-input>\n				</div>\n				<div>\n					<ion-label inline>Address</ion-label>\n					<ion-textarea rows="3" cols="30" name="ooaddress" id="oaddress"></ion-textarea>\n				</div>\n				<div>\n					<ion-input type="number" placeholder="Enter Primary Mobile Number" id="ocell"></ion-input>\n				</div>\n				<div>\n					<ion-input type="text" placeholder="Enter Primary Email" id="oemail"></ion-input>\n				</div>\n			</div>\n		</div>\n\n		</ion-row>\n		<ion-row>\n		<ion-col>\n		<button ion-button color="primary" block>Save</button>\n		</ion-col>\n		<ion-col>\n		<button ion-button width-50 color="primary" block>Cancel</button>\n		</ion-col>\n		</ion-row>\n\n	</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/vishal/ionic_prj/preschool/src/pages/addstudent/addstudent.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_comman_comman__["a" /* CommanProvider */]])
], AddstudentPage);

//# sourceMappingURL=addstudent.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacilitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
 * Generated class for the FacilitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FacilitiesPage = (function () {
    function FacilitiesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.title = navParams.get('page_obj').title;
    }
    FacilitiesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FacilitiesPage');
    };
    return FacilitiesPage;
}());
FacilitiesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-facilities',template:/*ion-inline-start:"/home/vishal/ionic_prj/preschool/src/pages/facilities/facilities.html"*/'<!--\n  Generated template for the FacilitiesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n	<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/vishal/ionic_prj/preschool/src/pages/facilities/facilities.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], FacilitiesPage);

//# sourceMappingURL=facilities.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeworkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
 * Generated class for the HomeworkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeworkPage = (function () {
    function HomeworkPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.title = "homework";
        //this.title = navParams.get('page_obj').title;
        console.log(this.title);
    }
    HomeworkPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeworkPage');
    };
    return HomeworkPage;
}());
HomeworkPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-homework',template:/*ion-inline-start:"/home/vishal/ionic_prj/preschool/src/pages/homework/homework.html"*/'<!--\n  Generated template for the HomeworkPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n	<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/vishal/ionic_prj/preschool/src/pages/homework/homework.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], HomeworkPage);

//# sourceMappingURL=homework.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
 * Generated class for the MediaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MediaPage = (function () {
    function MediaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.title = navParams.get('page_obj').title;
        console.log(this.title);
    }
    MediaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MediaPage');
    };
    return MediaPage;
}());
MediaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-media',template:/*ion-inline-start:"/home/vishal/ionic_prj/preschool/src/pages/media/media.html"*/'<!--\n  Generated template for the MediaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n	<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/vishal/ionic_prj/preschool/src/pages/media/media.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], MediaPage);

//# sourceMappingURL=media.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_users_users__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_comman_comman__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__ = __webpack_require__(88);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, loadingCtrl, navParams, storage, usersService, comman) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.usersService = usersService;
        this.comman = comman;
        this.logincrd = { username: "", password: "" };
        this.loading = this.loadingCtrl.create({});
        storage.ready().then(function () {
            var user1 = { name: "vishal", password: "abcd", type: "A" };
            var user2 = { name: "basant", password: "abcd", type: "B" };
            // set a key/value
            storage.set('vishal', user1);
            storage.set('basant', user2);
            // Or to get a key/value pair
        });
    }
    LoginPage.prototype.createAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.login = function (ldt) {
        var _this = this;
        //console.log(ldt);
        this.loading.present();
        this.usersService.login_user(ldt.username, ldt.password).then(function (data) {
            _this.loading.dismiss();
            //console.log(data);
            _this.result = data;
            if (_this.result.code != 200) {
                _this.result = "Invalid User";
                _this.comman.showToast(_this.result);
            }
            else {
                _this.storage.set('auth_key', _this.result.auth);
                _this.result = "login success";
                _this.comman.showToast(_this.result);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__["a" /* DashboardPage */]);
            }
        });
        /*this.storage.get(ldt.username).then((val) => {
    
             this.type = val.type;
             console.log(this.type);
             this.storage.set("login",val.name);
           });*/
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/vishal/ionic_prj/preschool/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n	<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div class="lgcenter">\n<img src="assets/image/logo/login_logo.png">\n</div>\n<form>\n\n      <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input type="text" value="" name="username" [(ngModel)]="logincrd.username" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password" value="" name="password" [(ngModel)]="logincrd.password" required></ion-input>\n      </ion-item>\n\n    \n\n    <ion-row>\n	<ion-col>	\n      <button ion-button color="primary" block (click)="login(logincrd);">Sign In</button>\n    </ion-col>\n    <ion-col>\n      <button ion-button width-50 color="primary" block>Cancel</button>\n    </ion-col>\n    </ion-row>\n    <ion-item>\n    <ion-row>\n    <a (click)="createAccount()">Register account</a>\n    </ion-row>\n    </ion-item>\n </form>\n <ion-card>\n	<ion-card-content>\n	<p>\n	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n	</p>\n	</ion-card-content>\n </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/vishal/ionic_prj/preschool/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_users_users__["a" /* UsersProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_comman_comman__["a" /* CommanProvider */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeachersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_users__ = __webpack_require__(43);
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
 * Generated class for the TeachersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeachersPage = (function () {
    function TeachersPage(navCtrl, navParams, usersService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usersService = usersService;
        this.title = navParams.get('page_obj').title;
        this.usersService.getTeachers(navParams.get('class')).then(function (data) {
            console.log(data);
            _this.teachers = data;
            //		this.loading.dismiss();
        });
    }
    TeachersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeachersPage');
    };
    return TeachersPage;
}());
TeachersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-teachers',template:/*ion-inline-start:"/home/vishal/ionic_prj/preschool/src/pages/teachers/teachers.html"*/'<!--\n  Generated template for the TeachersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n	<button ion-button menuToggle *ngIf="!isModal">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{title}}</ion-title>\n\n    <button (click)="dismiss()" *ngIf="isModal">\n      Cancel\n    </button>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="outer-content">\n	<ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n	<!--<div *ngFor="let item of students;let i = index">\n\n	<ion-item>\n    <ion-thumbnail item-left>\n      <img src="{{image_thumb}}">\n    </ion-thumbnail>\n\n    <h2>{{item.name}}</h2>\n    <p>Role No. : {{item.id}}</p>\n    <button ion-button clear item-right>View</button>\n	</ion-item>\n	</div>-->\n\n<ion-list>\n <div *ngFor="let stds of teachers;let i= index">\n <ion-item-sliding>\n\n   <ion-item>\n     <ion-avatar item-start>\n       <img src="{{stds.image}}">\n     </ion-avatar>\n     <h2>{{stds.title}}</h2>\n     <p>{{stds.details}}</p>\n   </ion-item>\n   <ion-item-options side="left">\n     <button ion-button color="primary">\n       <ion-icon name="text"></ion-icon>\n       Text\n     </button>\n     <button ion-button color="secondary">\n       <ion-icon name="call"></ion-icon>\n       Call\n     </button>\n   </ion-item-options>\n   <ion-item-options side="right">\n     <button ion-button color="primary">\n       <ion-icon name="mail"></ion-icon>\n       Email\n     </button>\n   </ion-item-options>\n </ion-item-sliding>\n </div>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/vishal/ionic_prj/preschool/src/pages/teachers/teachers.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_users_users__["a" /* UsersProvider */]])
], TeachersPage);

//# sourceMappingURL=teachers.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_notices_notices__ = __webpack_require__(89);
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
 * Generated class for the NoticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NoticePage = (function () {
    function NoticePage(navCtrl, navParams, noticesService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.noticesService = noticesService;
        this.notice_id = this.navParams.get('notice_id');
        this.loadNotice();
    }
    NoticePage.prototype.loadNotice = function () {
        console.log(this.notice_id);
        this.noticesService.load()
            .then(function (data) {
        });
    };
    NoticePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NoticePage');
    };
    return NoticePage;
}());
NoticePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notice',template:/*ion-inline-start:"/home/vishal/ionic_prj/preschool/src/pages/notice/notice.html"*/'<!--\n  Generated template for the NoticePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>notice</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/vishal/ionic_prj/preschool/src/pages/notice/notice.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_notices_notices__["a" /* NoticesProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_notices_notices__["a" /* NoticesProvider */]])
], NoticePage);

//# sourceMappingURL=notice.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addnotice_addnotice__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notice_notice__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_notices_notices__ = __webpack_require__(89);
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
 * Generated class for the NoticesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NoticesPage = (function () {
    function NoticesPage(navCtrl, navParams, noticesService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.noticesService = noticesService;
        this.title = "Notice";
        this.loadNotices();
    }
    NoticesPage.prototype.addNotice = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__addnotice_addnotice__["a" /* AddnoticePage */]);
    };
    //get notices data
    NoticesPage.prototype.loadNotices = function () {
        //console.log("vis");
        var _this = this;
        this.noticesService.load()
            .then(function (data) {
            //Typescript to calculate object length
            //Object.keys(ndata).length
            if (Object.keys(data).length > 0) {
                _this.items = data;
                _this.notices = _this.items.data;
                //this.loading.dismiss();
                console.log(_this.items.data);
            }
            else {
                _this.items = [];
            }
        });
    };
    NoticesPage.prototype.showNotice = function (nid) {
        console.log(nid);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__notice_notice__["a" /* NoticePage */], { notice_id: nid });
    };
    NoticesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NoticesPage');
    };
    return NoticesPage;
}());
NoticesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notices',template:/*ion-inline-start:"/home/vishal/ionic_prj/preschool/src/pages/notices/notices.html"*/'<!--\n  Generated template for the NoticesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n	<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<ion-fab top right edge>\n		<button ion-fab mini><ion-icon name="add" (click)="addNotice()"></ion-icon></button>\n	</ion-fab>\n	<ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n	<ion-list>\n		\n	<ion-card (click)="showNotice(item.id);" *ngFor="let item of notices; let i=index;">\n		\n		\n	<ion-item>\n   \n    <ion-card-title>{{item.title}}</ion-card-title>\n    <p>{{item.ndate}}</p>\n	</ion-item>\n\n \n\n  <ion-card-content>\n    <p>{{item.description}}</p>\n  </ion-card-content>\n\n  <ion-row>\n    <ion-col>\n      <button ion-button icon-left clear small>\n        <ion-icon name="book"></ion-icon>\n        <div><span>Division -</span><span>{{item.division}}</span></div>\n      </button>\n    </ion-col>\n    \n    <ion-col>\n      <button ion-button icon-left clear small>\n        <ion-icon name="book"></ion-icon>\n        <div><span>class -</span><span>{{item.class}}</span></div>\n      </button>\n    </ion-col>\n    \n    <ion-col center text-center>\n      <ion-note>\n        11h ago\n      </ion-note>\n    </ion-col>\n  </ion-row>\n		\n	</ion-card>	\n\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/vishal/ionic_prj/preschool/src/pages/notices/notices.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__providers_notices_notices__["a" /* NoticesProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_notices_notices__["a" /* NoticesProvider */]])
], NoticesPage);

//# sourceMappingURL=notices.js.map

/***/ }),

/***/ 127:
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
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addhmblog/addhmblog.module": [
		293,
		3
	],
	"../pages/addhomework/addhomework.module": [
		295,
		2
	],
	"../pages/addnotice/addnotice.module": [
		294,
		18
	],
	"../pages/addstudent/addstudent.module": [
		296,
		17
	],
	"../pages/addteacher/addteacher.module": [
		297,
		16
	],
	"../pages/contactus/contactus.module": [
		298,
		15
	],
	"../pages/details/details.module": [
		299,
		1
	],
	"../pages/facilities/facilities.module": [
		300,
		14
	],
	"../pages/hmdesk/hmdesk.module": [
		301,
		0
	],
	"../pages/homework/homework.module": [
		303,
		13
	],
	"../pages/homeworklist/homeworklist.module": [
		302,
		12
	],
	"../pages/login/login.module": [
		305,
		11
	],
	"../pages/media/media.module": [
		304,
		10
	],
	"../pages/notice/notice.module": [
		306,
		9
	],
	"../pages/notices/notices.module": [
		311,
		8
	],
	"../pages/register/register.module": [
		307,
		7
	],
	"../pages/schedule/schedule.module": [
		310,
		6
	],
	"../pages/students/students.module": [
		308,
		5
	],
	"../pages/teachers/teachers.module": [
		309,
		4
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
webpackAsyncContext.id = 169;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeworkProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the HomeworkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HomeworkProvider = (function () {
    function HomeworkProvider(http) {
        this.http = http;
        console.log('Hello Homework Provider');
    }
    HomeworkProvider.prototype.load = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        /*if (this.data) {
          // already loaded data
          return Promise.resolve(this.data);
        }*/
        /* var url = "http://preschool.weppsol.com/index.php?option=com_api&app=articles&resource=article&format=raw&category_id=8";
        // don't have the data yet
        return new Promise(resolve => {

          this.http.get(url)
            .map(res => res.json())
            .subscribe(data => {
              // we've got back the raw data, now generate the core schedule data
              // and save the data for later reference
              this.data = data;
              resolve(this.data);
            });
        });*/
        return new Promise(function (resolve) {
            _this.http.get("../assets/data/homework.json", { "headers": headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // we've got back the raw data, now generate the core schedule data
                // and save the data for later reference
                _this.hwork = data.data;
                resolve(_this.hwork);
            });
        });
    };
    return HomeworkProvider;
}());
HomeworkProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], HomeworkProvider);

//# sourceMappingURL=homework.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddteacherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
 * Generated class for the AddteacherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddteacherPage = (function () {
    function AddteacherPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.emp_no = 4;
        this.title = "Add Teacher Profile";
        this.guardian = 'mother';
        this.myDate = new Date();
        this.class_name = 1;
        this.division = 0;
        this.bgrp = 0;
        this.bgrp_arr = [{ id: 1, bgrp: 'A+' }, { id: 2, bgrp: 'A-' }, { id: 3, bgrp: 'B+' }, { id: 4, bgrp: 'B-' }, { id: 5, bgrp: 'AB+' }, { id: 6, bgrp: 'AB-' }, { id: 7, bgrp: 'O+' }, { id: 8, bgrp: 'O-' }];
        console.log(this.bgrp_arr);
        //console.log(this.myDate);
    }
    //same address processing
    AddteacherPage.prototype.sameAddress = function (val) {
        console.log(val);
    };
    AddteacherPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddteacherPage');
    };
    return AddteacherPage;
}());
AddteacherPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-addteacher',template:/*ion-inline-start:"/home/vishal/ionic_prj/preschool/src/pages/addteacher/addteacher.html"*/'<!--\n  Generated template for the AddteacherPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>addteacher</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/vishal/ionic_prj/preschool/src/pages/addteacher/addteacher.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], AddteacherPage);

//# sourceMappingURL=addteacher.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_register_register__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_students_students__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_homework_homework__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_facilities_facilities__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_teachers_teachers__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_media_media__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_schedule_schedule__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_contactus_contactus__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_notices_notices__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_addnotice_addnotice__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_addstudent_addstudent__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_addteacher_addteacher__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_notice_notice__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_homeworklist_homeworklist__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_classes_classes__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_comman_comman__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_contactus_contactus__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_helpdesk_helpdesk__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_homework_homework__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_media_media__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_notices_notices__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_users_users__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__["a" /* DashboardPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_students_students__["a" /* StudentsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_homework_homework__["a" /* HomeworkPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_facilities_facilities__["a" /* FacilitiesPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_teachers_teachers__["a" /* TeachersPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_schedule_schedule__["a" /* SchedulePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_media_media__["a" /* MediaPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_addnotice_addnotice__["a" /* AddnoticePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_addstudent_addstudent__["a" /* AddstudentPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_contactus_contactus__["a" /* ContactusPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_addteacher_addteacher__["a" /* AddteacherPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_notices_notices__["a" /* NoticesPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_notices_notices__["a" /* NoticesPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_notice_notice__["a" /* NoticePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_homeworklist_homeworklist__["a" /* HomeworklistPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_homework_homework__["a" /* HomeworkPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/addhmblog/addhmblog.module#AddhmblogPageModule', name: 'AddhmblogPage', segment: 'addhmblog', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/addnotice/addnotice.module#AddnoticePageModule', name: 'AddnoticePage', segment: 'addnotice', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/addhomework/addhomework.module#AddhomeworkPageModule', name: 'AddhomeworkPage', segment: 'addhomework', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/addstudent/addstudent.module#AddstudentPageModule', name: 'AddstudentPage', segment: 'addstudent', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/addteacher/addteacher.module#AddteacherPageModule', name: 'AddteacherPage', segment: 'addteacher', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/contactus/contactus.module#ContactusPageModule', name: 'ContactusPage', segment: 'contactus', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/details/details.module#DetailsPageModule', name: 'DetailsPage', segment: 'details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/facilities/facilities.module#FacilitiesPageModule', name: 'FacilitiesPage', segment: 'facilities', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/hmdesk/hmdesk.module#HmdeskPageModule', name: 'HmdeskPage', segment: 'hmdesk', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/homeworklist/homeworklist.module#HomeworklistPageModule', name: 'HomeworklistPage', segment: 'homeworklist', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/homework/homework.module#HomeworkPageModule', name: 'HomeworkPage', segment: 'homework', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/media/media.module#MediaPageModule', name: 'MediaPage', segment: 'media', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notice/notice.module#NoticePageModule', name: 'NoticePage', segment: 'notice', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/students/students.module#StudentsPageModule', name: 'StudentsPage', segment: 'students', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/teachers/teachers.module#TeachersPageModule', name: 'TeachersPage', segment: 'teachers', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/schedule/schedule.module#SchedulePageModule', name: 'SchedulePage', segment: 'schedule', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notices/notices.module#NoticesPageModule', name: 'NoticesPage', segment: 'notices', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__["a" /* DashboardPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_students_students__["a" /* StudentsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_homework_homework__["a" /* HomeworkPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_facilities_facilities__["a" /* FacilitiesPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_teachers_teachers__["a" /* TeachersPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_schedule_schedule__["a" /* SchedulePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_media_media__["a" /* MediaPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_addnotice_addnotice__["a" /* AddnoticePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_addstudent_addstudent__["a" /* AddstudentPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_contactus_contactus__["a" /* ContactusPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_addteacher_addteacher__["a" /* AddteacherPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_notices_notices__["a" /* NoticesPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_notice_notice__["a" /* NoticePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_homeworklist_homeworklist__["a" /* HomeworklistPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_homework_homework__["a" /* HomeworkPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_24__providers_classes_classes__["a" /* ClassesProvider */],
            __WEBPACK_IMPORTED_MODULE_25__providers_comman_comman__["a" /* CommanProvider */],
            __WEBPACK_IMPORTED_MODULE_26__providers_contactus_contactus__["a" /* ContactusProvider */],
            __WEBPACK_IMPORTED_MODULE_27__providers_helpdesk_helpdesk__["a" /* HelpdeskProvider */],
            __WEBPACK_IMPORTED_MODULE_28__providers_homework_homework__["a" /* HomeworkProvider */],
            __WEBPACK_IMPORTED_MODULE_29__providers_media_media__["a" /* MediaProvider */],
            __WEBPACK_IMPORTED_MODULE_30__providers_notices_notices__["a" /* NoticesProvider */],
            __WEBPACK_IMPORTED_MODULE_31__providers_users_users__["a" /* UsersProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_register_register__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_students_students__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contactus_contactus__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_addnotice_addnotice__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_addstudent_addstudent__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_notices_notices__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_schedule_schedule__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_homeworklist_homeworklist__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











//import {AddteacherPage} from '../pages/addteacher/addteacher';



//import { Page1 } from '../pages/page1/page1';
//import { Page2 } from '../pages/page2/page2';
//import {Users} from '../../providers/users';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_addstudent_addstudent__["a" /* AddstudentPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */] },
            { title: 'Register', component: __WEBPACK_IMPORTED_MODULE_5__pages_register_register__["a" /* RegisterPage */] },
            { title: 'Dashboard', component: __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__["a" /* DashboardPage */] },
            { title: 'Students', component: __WEBPACK_IMPORTED_MODULE_7__pages_students_students__["a" /* StudentsPage */] },
            { title: 'Add Student', component: __WEBPACK_IMPORTED_MODULE_10__pages_addstudent_addstudent__["a" /* AddstudentPage */] },
            { title: 'Add Notice', component: __WEBPACK_IMPORTED_MODULE_9__pages_addnotice_addnotice__["a" /* AddnoticePage */] },
            { title: 'Notices', component: __WEBPACK_IMPORTED_MODULE_11__pages_notices_notices__["a" /* NoticesPage */] },
            { title: 'Homework', component: __WEBPACK_IMPORTED_MODULE_13__pages_homeworklist_homeworklist__["a" /* HomeworklistPage */] },
            { title: 'Calender', component: __WEBPACK_IMPORTED_MODULE_12__pages_schedule_schedule__["a" /* SchedulePage */] },
            { title: 'Contact Us', component: __WEBPACK_IMPORTED_MODULE_8__pages_contactus_contactus__["a" /* ContactusPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/vishal/ionic_prj/preschool/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/vishal/ionic_prj/preschool/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ClassesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ClassesProvider = (function () {
    function ClassesProvider(http) {
        this.http = http;
        console.log('Hello ClassesProvider Provider');
    }
    return ClassesProvider;
}());
ClassesProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], ClassesProvider);

//# sourceMappingURL=classes.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ContactusProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ContactusProvider = (function () {
    function ContactusProvider(http) {
        this.http = http;
        console.log('Hello ContactusProvider Provider');
    }
    return ContactusProvider;
}());
ContactusProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], ContactusProvider);

//# sourceMappingURL=contactus.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpdeskProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the HelpdeskProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HelpdeskProvider = (function () {
    function HelpdeskProvider(http) {
        this.http = http;
        console.log('Hello HelpdeskProvider Provider');
    }
    return HelpdeskProvider;
}());
HelpdeskProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], HelpdeskProvider);

//# sourceMappingURL=helpdesk.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MediaProvider = (function () {
    function MediaProvider(http) {
        this.http = http;
        console.log('Hello MediaProvider Provider');
    }
    return MediaProvider;
}());
MediaProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], MediaProvider);

//# sourceMappingURL=media.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommanProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {Observable} from 'rxjs/Rx';


/*
  Generated class for the CommanProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CommanProvider = (function () {
    function CommanProvider(http, toastCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        //console.log('Hello CommanProvider Provider');
    }
    CommanProvider.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    CommanProvider.prototype.load = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        /*if (this.data) {
          // already loaded data
          return Promise.resolve(this.data);
        }*/
        var url = "http://preschool.weppsol.com/index.php?option=com_api&app=articles&resource=article&format=raw&category_id=8";
        // don't have the data yet
        return new Promise(function (resolve) {
            _this.http.get(url, { "headers": headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // we've got back the raw data, now generate the core schedule data
                // and save the data for later reference
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    //get dashboard data
    CommanProvider.prototype.getDashboard = function () {
        var _this = this;
        // console.log("in get dash call");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        return new Promise(function (resolve) {
            _this.http.get("http://preschool.weppsol.com/media/json_data/dashboard.json", { "headers": headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // and save the data for later reference
                _this.dash = data.data;
                resolve(_this.dash);
            });
        });
        /*return new Promise(resolve => {
                     this.http.get('../assets/data/dashboard.json').map(response => {
                         this.data = response.json();
    
                                     console.log(this.data);
                         resolve(this.data);
                     });
                 });*/
    };
    CommanProvider.prototype.getClassData = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        return new Promise(function (resolve) {
            _this.http.get("http://preschool.weppsol.com/media/json_data/classes.json", { "headers": headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // and save the data for later reference
                _this.classdt = data.data[0].classes;
                resolve(_this.classdt);
            });
        });
    };
    CommanProvider.prototype.getDivisionData = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        return new Promise(function (resolve) {
            _this.http.get("http://preschool.weppsol.com/media/json_data/classes.json", { "headers": headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // and save the data for later reference
                _this.divdt = data.data[0].division;
                resolve(_this.divdt);
            });
        });
    };
    // get gender data
    CommanProvider.prototype.getGenderData = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        return new Promise(function (resolve) {
            _this.http.get("http://preschool.weppsol.com/media/json_data/comman.json", { "headers": headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // and save the data for later reference
                _this.divdt = data.gender;
                resolve(_this.divdt);
            });
        });
    };
    //get bloodgroup data
    CommanProvider.prototype.getBloodGroupData = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        return new Promise(function (resolve) {
            _this.http.get("http://preschool.weppsol.com/media/json_data/comman.json", { "headers": headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // and save the data for later reference
                _this.divdt = data.bloodgroup;
                resolve(_this.divdt);
            });
        });
    };
    return CommanProvider;
}());
CommanProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]])
], CommanProvider);

//# sourceMappingURL=comman.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UsersProvider = (function () {
    function UsersProvider(http) {
        this.http = http;
        //console.log('Hello Users Provider');
    }
    UsersProvider.prototype.load = function (cls) {
        /*
     // console.log(cls);
         var url = "http://preschool.weppsol.com/index.php?option=com_api&app=users&resource=users&format=raw&key=7f6aed7c1d3100c324fe175119609371";
         // don't have the data yet
         return new Promise(resolve => {
           // We're using Angular HTTP provider to request the data,
           // then on the response, it'll map the JSON data to a parsed JS object.
           // Next, we process the data and resolve the promise with the new data.
           this.http.get(url)
             .map(res => res.json())
             .subscribe(data => {
               // we've got back the raw data, now generate the core schedule data
               // and save the data for later reference
               this.data = data;
               resolve(this.data);
             });
         });*/
    };
    // get student data
    UsersProvider.prototype.getStudents = function (sid) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        return new Promise(function (resolve) {
            _this.http.get("http://preschool.weppsol.com/media/json_data/users.json", { "headers": headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // and save the data for later reference
                _this.sdata = data.data.students;
                resolve(_this.sdata);
            });
        });
    };
    //get one student data
    UsersProvider.prototype.getStudent = function (sid) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        return new Promise(function (resolve) {
            _this.http.get("http://preschool.weppsol.com/media/json_data/student.json", { "headers": headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // and save the data for later reference
                _this.sdata = data;
                console.log(_this.sdata);
                resolve(_this.sdata);
            });
        });
    };
    // get teachers data
    UsersProvider.prototype.getTeachers = function (cls) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        return new Promise(function (resolve) {
            _this.http.get("http://preschool.weppsol.com/media/json_data/users.json", { "headers": headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // and save the data for later reference
                _this.sdata = data.data.teachers;
                resolve(_this.sdata);
            });
        });
    };
    // get parent data
    UsersProvider.prototype.getParents = function (pid) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            _this.http.get("http://preschool.weppsol.com/media/json_data/users.json", { "headers": headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // and save the data for later reference
                _this.pdata = data.data.teachers;
                resolve(_this.pdata);
            });
        });
    };
    UsersProvider.prototype.login_user = function (uname, pass) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify({ username: uname, password: pass });
        var url = "http://preschool.weppsol.com/index.php?option=com_api&app=users&format=raw&resource=login&key=7f6aed7c1d3100c324fe175119609371";
        // don't have the data yet
        return new Promise(function (resolve) {
            _this.http.post(url, body, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // we've got back the raw data, now generate the core schedule data
                // and save the data for later reference
                _this.data = data.data;
                resolve(_this.data);
            });
        });
    };
    UsersProvider.prototype.users_data = function (wid) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (this.data) {
            // already loaded data
            return Promise.resolve(this.data);
        }
        // don't have the data yet
        return new Promise(function (resolve) {
            // We're using Angular HTTP provider to request the data,
            // then on the response, it'll map the JSON data to a parsed JS object.
            // Next, we process the data and resolve the promise with the new data.
            _this.http.get('http://pmcelectioninfo.weppsol.com/index.php?option=com_api&format=raw&app=pei&resource=pei&key=&wid=' + wid, { "headers": headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // we've got back the raw data, now generate the core schedule data
                // and save the data for later reference
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    UsersProvider.prototype.user_profile = function (cnd) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (this.data) {
            // already loaded data
            return Promise.resolve(this.data);
        }
        // don't have the data yet
        return new Promise(function (resolve) {
            // We're using Angular HTTP provider to request the data,
            // then on the response, it'll map the JSON data to a parsed JS object.
            // Next, we process the data and resolve the promise with the new data.
            _this.http.get('http://pmcelectioninfo.weppsol.com/index.php?option=com_api&format=raw&app=pei&resource=pei&key=&id=' + cnd, { "headers": headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // we've got back the raw data, now generate the core schedule data
                // and save the data for later reference
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    return UsersProvider;
}());
UsersProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], UsersProvider);

//# sourceMappingURL=users.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddnoticePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_comman_comman__ = __webpack_require__(31);
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
 * Generated class for the AddnoticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddnoticePage = (function () {
    function AddnoticePage(navCtrl, navParams, commanService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commanService = commanService;
        this.class_name = 1;
        this.division_id = 1;
        this.title = "Add Notice";
        this.sclass = 1;
        this.division = 1;
        /*  this.commanService.getClassData().then(opts=>{
            this.gender = opts;
            //console.log(this.gender);
          });*/
        this.commanService.getClassData().then(function (clsdt) {
            _this.ckys = Object.keys(clsdt);
            _this.sclass = clsdt;
            // console.log(this.sclass[0]);
        });
        this.commanService.getDivisionData().then(function (divdt) {
            _this.dkys = Object.keys(divdt);
            _this.division = divdt;
        });
    }
    AddnoticePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddnoticePage');
    };
    return AddnoticePage;
}());
AddnoticePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-addnotice',template:/*ion-inline-start:"/home/vishal/ionic_prj/preschool/src/pages/addnotice/addnotice.html"*/'<!--\n  Generated template for the AddnoticePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n	<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-item>\n        <ion-label floating>Title</ion-label>\n        <ion-input type="text" value=""></ion-input>\n    </ion-item>\n\n    <ion-item>\n       <ion-label>Select Class</ion-label>\n       <ion-select [(ngModel)]="class_name" multiple="true">\n       <ion-option *ngFor="let k of ckys" [value]="sclass[k].id">{{sclass[k].title}}</ion-option>\n       </ion-select>\n    </ion-item>\n    <ion-item>\n       <ion-label>Select Division</ion-label>\n       <ion-select [(ngModel)]="division_id" multiple="true">\n       <ion-option *ngFor="let dk of dkys" [value]="division[dk].id">{{division[dk].title}}</ion-option>\n\n       </ion-select>\n    </ion-item>\n\n    <ion-item>\n        <ion-label floating>Description</ion-label>\n		<ion-textarea rows="5" cols="30" name="Ndescription" id="ndesc"></ion-textarea>\n    </ion-item>\n\n\n    <ion-row>\n	<ion-col>\n      <button ion-button color="primary" block>Send</button>\n    </ion-col>\n    <ion-col>\n      <button ion-button width-50 color="primary" block>Cancel</button>\n    </ion-col>\n    </ion-row>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/vishal/ionic_prj/preschool/src/pages/addnotice/addnotice.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_comman_comman__["a" /* CommanProvider */]])
], AddnoticePage);

//# sourceMappingURL=addnotice.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_users__ = __webpack_require__(43);
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
 * Generated class for the StudentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudentsPage = (function () {
    function StudentsPage(navCtrl, loadingCtrl, navParams, usersService, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.usersService = usersService;
        this.viewCtrl = viewCtrl;
        this.isModal = false;
        this.title = "Students";
        this.image_thumb = "http://pmcelectioninfo.weppsol.com/images/stories/thumbs/ward_1.png";
        this.loading = this.loadingCtrl.create({});
        this.loading.present();
        /*if(navParams.get('page_obj').title)
        {
            this.title = navParams.get('page_obj').title;
            console.log(this.title);
         }*/
        //console.log('class -', navParams.get('class'));
        if (navParams.get('class')) {
            this.isModal = true;
            this.title = "Class " + navParams.get('class') + " Students";
        }
        // using load method
        /*this.students = this.usersService.load(navParams.get('class')).then(data =>{
     
             this.students = data;
             this.loading.dismiss();
     
         });*/
        var sid = 0;
        // get student data from json facilities
        this.usersService.getStudents(sid).then(function (sdata) {
            _this.students = sdata;
            console.log(sdata);
            _this.loading.dismiss();
        });
    }
    StudentsPage.prototype.dismiss = function () {
        var data = { 'data': 'vishal' };
        this.viewCtrl.dismiss(data);
    };
    StudentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudentsPage');
    };
    return StudentsPage;
}());
StudentsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-students',template:/*ion-inline-start:"/home/vishal/ionic_prj/preschool/src/pages/students/students.html"*/'<!--\n  Generated template for the StudentsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n	<button ion-button menuToggle *ngIf="!isModal">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{title}}</ion-title>\n\n    <button (click)="dismiss()" *ngIf="isModal">\n      Cancel\n    </button>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="outer-content">\n	<ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n	<!--<div *ngFor="let item of students;let i = index">\n\n	<ion-item>\n    <ion-thumbnail item-left>\n      <img src="{{image_thumb}}">\n    </ion-thumbnail>\n\n    <h2>{{item.name}}</h2>\n    <p>Role No. : {{item.id}}</p>\n    <button ion-button clear item-right>View</button>\n	</ion-item>\n	</div>-->\n\n<ion-list>\n <ion-item-sliding *ngFor="let stds of students;let i= index">\n\n   <ion-item>\n     <ion-thumbnail item-start>\n       <img src="{{stds.image}}">\n     </ion-thumbnail>\n     <h2>{{stds.title}}</h2>\n     <p>{{stds.details}}</p>\n   </ion-item>\n   <ion-item-options side="left">\n     <button ion-button color="primary">\n       <ion-icon name="text"></ion-icon>\n       Text\n     </button>\n     <button ion-button color="secondary">\n       <ion-icon name="call"></ion-icon>\n       Call\n     </button>\n   </ion-item-options>\n   <ion-item-options side="right">\n     <button ion-button color="primary">\n       <ion-icon name="mail"></ion-icon>\n       Email\n     </button>\n   </ion-item-options>\n </ion-item-sliding>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/vishal/ionic_prj/preschool/src/pages/students/students.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_users_users__["a" /* UsersProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
], StudentsPage);

//# sourceMappingURL=students.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_comman_comman__ = __webpack_require__(31);
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
 * Generated class for the ContactusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactusPage = (function () {
    function ContactusPage(navCtrl, navParams, comman) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.comman = comman;
        this.title = "About Us";
        this.comman.load().then(function (data) {
            _this.cdata = data['data'].results[0];
            console.log(_this.cdata.title);
            //this.loading.dismiss();
            _this.title = _this.cdata.title;
            _this.introtext = _this.cdata.introtext;
        });
    }
    ContactusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactusPage');
    };
    return ContactusPage;
}());
ContactusPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contactus',template:/*ion-inline-start:"/home/vishal/ionic_prj/preschool/src/pages/contactus/contactus.html"*/'<!--\n  Generated template for the ContactusPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n	<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n<ion-card>\n  <ion-card-header>\n\n  </ion-card-header>\n  <ion-card-content>\n    <div [innerHTML] ="introtext"></div>\n  </ion-card-content>\n</ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/vishal/ionic_prj/preschool/src/pages/contactus/contactus.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_comman_comman__["a" /* CommanProvider */]])
], ContactusPage);

//# sourceMappingURL=contactus.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeworklistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homework_homework__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_homework_homework__ = __webpack_require__(170);
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
 * Generated class for the HomeworklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeworklistPage = (function () {
    function HomeworklistPage(navCtrl, navParams, homeWork) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.homeWork = homeWork;
        this.title = "Homework List";
        this.items = [];
        this.homeWork.load().then(function (hwork) {
            // this.items = hwork;
            console.log(_this.items);
        });
    }
    HomeworklistPage.prototype.getHomework = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__homework_homework__["a" /* HomeworkPage */]);
    };
    HomeworklistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeworklistPage');
    };
    return HomeworklistPage;
}());
HomeworklistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-homeworklist',template:/*ion-inline-start:"/home/vishal/ionic_prj/preschool/src/pages/homeworklist/homeworklist.html"*/'<!--\n  Generated template for the HomeworklistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n	<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<ion-fab top right edge>\n		<button ion-fab mini><ion-icon name="add" (click)="addNotice()"></ion-icon></button>\n	</ion-fab>\n	<ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n	<ion-list>\n\n    <div *ngFor="let item of items;let i= index">\n    <ion-card-header>\n    </ion-card-header>\n    <ion-card (click)="getHomework(i);">\n\n        <ion-item>\n        <ion-card-title>{{item.title}}</ion-card-title>\n        <h5>start date : {{item.Assign_date}}</h5>\n        <h5>submit date : {{item.submit_date}}</h5>\n        </ion-item>\n\n        <ion-card-content>\n        <p>{{item.details}}</p>\n        </ion-card-content>\n\n      <ion-row>\n      <ion-col>\n      <button ion-button icon-left clear small>\n      <ion-icon name="book"></ion-icon>\n      <div>All classes</div>\n      </button>\n      </ion-col>\n\n      <ion-col center text-center>\n      <ion-note>\n      1h ago\n      </ion-note>\n      </ion-col>\n      </ion-row>\n\n    </ion-card>\n\n    </div>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/vishal/ionic_prj/preschool/src/pages/homeworklist/homeworklist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_homework_homework__["a" /* HomeworkProvider */]])
], HomeworklistPage);

//# sourceMappingURL=homeworklist.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_users_users__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_comman_comman__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__students_students__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, modalCtrl, alerCtrl, usersService, commanService, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alerCtrl = alerCtrl;
        this.usersService = usersService;
        this.commanService = commanService;
        this.formBuilder = formBuilder;
        this.title = "Register";
        //init form object
        /*this.reg = this.formBuilder.group({
           fname: ['', Validators.required],
           lname: ['', Validators.required],
           address: ['', Validators.required],
           mobile: ['', Validators.required],
           email: ['', Validators.required],
           dob: ['', Validators.required],
           stid: ['', Validators.required]
     
         });*/
        this.reg = this.formBuilder.group({
            fname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            lname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            address: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            mobile: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            dob: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            stid: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
        /*this.event = {
         month: '1990-02-19',
         timeStarts: '07:43',
         timeEnds: '1990-02-20'
       };*/
    }
    RegisterPage.prototype.openModal = function (data) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__students_students__["a" /* StudentsPage */], { class: data });
        modal.present();
        modal.onDidDismiss(function (data) {
            console.log('MODAL DATA', data); // returns "undefined"
        });
    };
    // save register details
    RegisterPage.prototype.register = function () {
        console.log(this.reg.value);
    };
    // for get student
    RegisterPage.prototype.getStudent = function () {
        var _this = this;
        // get student data from json facilities
        this.usersService.getStudents(0).then(function (sdata) {
            var stud = sdata;
            var alert = _this.alerCtrl.create();
            alert.setTitle("Select your child");
            for (var i = 0; i < Object.keys(stud).length; i++) {
                //console.log(stud[i].title);
                alert.addInput({
                    type: 'radio',
                    label: stud[i].title,
                    value: stud[i].id,
                    checked: false
                });
            }
            alert.addButton('Cancel');
            alert.addButton({
                text: 'Ok',
                handler: function (sid) {
                    console.log('Radio data:', sid);
                    //console.log(alert);
                    _this.standardOpen = false;
                    _this.student_id = sid;
                    _this.usersService.getStudent(sid).then(function (ssdata) {
                        console.log(ssdata);
                        var st_data = ssdata['data'];
                        _this.stitle = st_data.title;
                        _this.simage = st_data.image;
                        _this.sclass = st_data.class;
                        _this.sdiv = st_data.division;
                        _this.sdob = st_data.dob;
                        console.log(_this.sdob);
                        _this.show_stud = true;
                    });
                    //this.openModal(data);
                }
            });
            alert.present().then(function () {
                _this.standardOpen = true;
            });
        });
    };
    //for class popup
    RegisterPage.prototype.getClass = function () {
        var _this = this;
        var alert = this.alerCtrl.create();
        alert.setTitle("Select your pupil's class");
        alert.addInput({
            type: 'radio',
            label: 'KG A',
            value: '1A',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: 'KG B',
            value: '1B'
        });
        alert.addInput({
            type: 'radio',
            label: 'KG C',
            value: '1c'
        });
        alert.addInput({
            type: 'radio',
            label: 'Play group A',
            value: '2A'
        });
        alert.addInput({
            type: 'radio',
            label: 'Play group B',
            value: '2C'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                console.log('Radio data:', data);
                console.log(alert);
                _this.standardOpen = false;
                _this.standardResult = data;
                _this.openModal(data);
            }
        });
        alert.present().then(function () {
            _this.standardOpen = true;
        });
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/home/vishal/ionic_prj/preschool/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n	<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<form [formGroup]="reg" (ngSubmit)="register()">\n	<ion-item>\n        <ion-label floating>First Name</ion-label>\n        <ion-input type="text" formControlName="fname"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label floating>Last Name</ion-label>\n        <ion-input type="text" value="" formControlName="lname"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label floating>Address</ion-label>\n		<ion-textarea rows="3" cols="30" formControlName="address" id="caddress"></ion-textarea>\n    </ion-item>\n    <ion-item>\n        <ion-label floating>Email</ion-label>\n		<ion-input type="email" value="" formControlName="email"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label floating>Mobile Number</ion-label>\n        <ion-input type="number" value="" formControlName="mobile"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label floating>DoB</ion-label>\n		<ion-datetime displayFormat="DDD MMM D,YYYY" min="2000" max="2020-10-31" formControlName="dob"></ion-datetime>\n        <!--<ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="event.month"></ion-datetime>\n		<ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="event.timeStarts"></ion-datetime>-->\n    </ion-item>\n\n    <ion-item>\n		<button ion-button color="secondary" outline block (click)="getStudent()">Select your child</button>\n    <input type="hidden" formControlName="stid" value="{{student_id}}">\n    </ion-item>\n    <div [hidden]="!show_stud">\n      <ion-card>\n        <ion-item>\n\n          <ion-avatar item-start>\n          <img src="{{simage}}">\n          </ion-avatar>\n        <h2>{{stitle}}</h2>\n        <ion-row><ion-col>DOB :</ion-col><ion-col>{{sdob}}</ion-col></ion-row>\n        <ion-row><ion-col>Class :</ion-col><ion-col>{{sclass}}</ion-col></ion-row>\n        <ion-row><ion-col>Division :</ion-col><ion-col>{{sdiv}}</ion-col></ion-row>\n\n        </ion-item>\n      </ion-card>\n    </div>\n\n\n    <ion-row>\n	<ion-col>\n      <button type="submit" ion-button color="primary" block >Register</button>\n    </ion-col>\n    <ion-col>\n      <button ion-button width-50 color="primary" block>Cancel</button>\n    </ion-col>\n    </ion-row>\n</form>\n</ion-content>\n'/*ion-inline-end:"/home/vishal/ionic_prj/preschool/src/pages/register/register.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_users_users__["a" /* UsersProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_users_users__["a" /* UsersProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_comman_comman__["a" /* CommanProvider */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SchedulePage = (function () {
    //calendar_obj:any;
    function SchedulePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.title = "Calender";
        //this.title = (navParams.get('page_obj').title)?navParams.get('page_obj').title:"calender";
        /*this.calendar.createCalendar('MyCalendar').then(
        (msg) => { console.log(msg); },
        (err) => { console.log(err); }
      );*/
    }
    SchedulePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SchedulePage');
    };
    return SchedulePage;
}());
SchedulePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-schedule',template:/*ion-inline-start:"/home/vishal/ionic_prj/preschool/src/pages/schedule/schedule.html"*/'<!--\n  Generated template for the SchedulePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n	<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/vishal/ionic_prj/preschool/src/pages/schedule/schedule.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], SchedulePage);

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homeworklist_homeworklist__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__facilities_facilities__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__teachers_teachers__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__media_media__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__schedule_schedule__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__students_students__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_comman_comman__ = __webpack_require__(31);
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
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//import {HomeworkPage} from '../homework/homework';







/*
  Generated class for the Dashboard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var DashboardPage = (function () {
    function DashboardPage(navCtrl, loadingCtrl, navParams, nav, common) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.nav = nav;
        this.common = common;
        //this.image_thumb = "http://pmcelectioninfo.weppsol.com/images/stories/thumbs/ward_1.png";
        this.homework = { title: "Homework", component: __WEBPACK_IMPORTED_MODULE_2__homeworklist_homeworklist__["a" /* HomeworklistPage */] };
        this.media = { title: "Media", component: __WEBPACK_IMPORTED_MODULE_5__media_media__["a" /* MediaPage */] };
        this.schedule = { title: "Schedule", component: __WEBPACK_IMPORTED_MODULE_6__schedule_schedule__["a" /* SchedulePage */] };
        this.teachers = { title: "Teachers", component: __WEBPACK_IMPORTED_MODULE_4__teachers_teachers__["a" /* TeachersPage */] };
        this.facilities = { title: "Facilities", component: __WEBPACK_IMPORTED_MODULE_3__facilities_facilities__["a" /* FacilitiesPage */] };
        this.students = { title: "Students", component: __WEBPACK_IMPORTED_MODULE_7__students_students__["a" /* StudentsPage */] };
        this.loading = this.loadingCtrl.create({});
        this.loading.present();
        //common.getDashboard().then(data=>this.ddata = data);
        this.common.getDashboard().then(function (dash) {
            if (Object.keys(dash).length > 0) {
                _this.data = dash;
                //this.loading.dismiss();
                _this.homework.image = _this.data.homework[0].image;
                _this.media.image = _this.data.media[0].image;
                _this.schedule.image = _this.data.schedule[0].image;
                _this.teachers.image = _this.data.teachers[0].image;
                _this.facilities.image = _this.data.facilities[0].image;
                _this.students.image = _this.data.students[0].image;
                //this.events.image = this.data.events[0].image;
                _this.loading.dismiss();
                console.log(_this.homework);
            }
            else {
                _this.data = [];
            }
        });
        // console.log(this.data);
    }
    DashboardPage.prototype.openPage = function (page) {
        this.navCtrl.push(page.component, { page_obj: page });
    };
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    return DashboardPage;
}());
DashboardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-dashboard',template:/*ion-inline-start:"/home/vishal/ionic_prj/preschool/src/pages/dashboard/dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n	<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Dashboard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-grid class="name_center">\n		<ion-row>\n			<ion-col col-33>\n				<ion-thumbnail (click)="openPage(students);">\n				<img width-33 src="{{students.image}}"><h5>{{students.title}}</h5>\n				</ion-thumbnail>\n\n			</ion-col>\n			<ion-col col-33>\n				<ion-thumbnail (click)="openPage(teachers);">\n				<img width-33 src="{{teachers.image}}"><h5>{{teachers.title}}</h5>\n				</ion-thumbnail>\n			</ion-col>\n\n		</ion-row>\n		<ion-row>\n			<ion-col col-33>\n				<ion-thumbnail (click)="openPage(schedule);">\n				<img width-33 src="{{schedule.image}}"><h5>{{schedule.title}}</h5>\n				</ion-thumbnail>\n			</ion-col>\n			<ion-col col-33>\n				<ion-thumbnail (click)="openPage(facilities);">\n				<img width-33 src="{{facilities.image}}"><h5>{{facilities.title}}</h5>\n				</ion-thumbnail>\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col col-33>\n				<ion-thumbnail (click)="openPage(homework);">\n				<img width-33 src="{{homework.image}}"><h5>{{homework.title}}</h5>\n				</ion-thumbnail>\n			</ion-col>\n			<ion-col col-33>\n				<ion-thumbnail (click)="openPage(media);">\n				<img width-33 src="{{media.image}}"><h5>{{media.title}}</h5>\n				</ion-thumbnail>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/vishal/ionic_prj/preschool/src/pages/dashboard/dashboard.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */], __WEBPACK_IMPORTED_MODULE_8__providers_comman_comman__["a" /* CommanProvider */]])
], DashboardPage);

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the NoticesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NoticesProvider = (function () {
    function NoticesProvider(http) {
        this.http = http;
        console.log('Hello Notices Provider');
    }
    NoticesProvider.prototype.load = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        /*if (this.data) {
          // already loaded data
          return Promise.resolve(this.data);
        }*/
        /*var url = "http://preschool.weppsol.com/index.php?option=com_api&app=articles&resource=article&format=raw&category_id=8";
        // don't have the data yet
        return new Promise(resolve => {

          this.http.get(url)
            .map(res => res.json())
            .subscribe(data => {
              // we've got back the raw data, now generate the core schedule data
              // and save the data for later reference
              this.data = data;
              resolve(this.data);
            });
        });*/
        return new Promise(function (resolve) {
            _this.http.get("../assets/data/notices.json", { "headers": headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // we've got back the raw data, now generate the core schedule data
                // and save the data for later reference
                _this.data = data;
                //console.log(this.data);
                resolve(_this.data);
            });
        });
    };
    return NoticesProvider;
}());
NoticesProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], NoticesProvider);

//# sourceMappingURL=notices.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.js.map