"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_about-you_about-you_module_ts"],{

/***/ 991:
/*!*******************************************************!*\
  !*** ./src/app/about-you/about-you-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutYouPageRoutingModule": () => (/* binding */ AboutYouPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _about_you_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-you.page */ 4304);




const routes = [
    {
        path: '',
        component: _about_you_page__WEBPACK_IMPORTED_MODULE_0__.AboutYouPage
    }
];
let AboutYouPageRoutingModule = class AboutYouPageRoutingModule {
};
AboutYouPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AboutYouPageRoutingModule);



/***/ }),

/***/ 4860:
/*!***********************************************!*\
  !*** ./src/app/about-you/about-you.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutYouPageModule": () => (/* binding */ AboutYouPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _about_you_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-you-routing.module */ 991);
/* harmony import */ var _about_you_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-you.page */ 4304);







let AboutYouPageModule = class AboutYouPageModule {
};
AboutYouPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _about_you_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutYouPageRoutingModule
        ],
        declarations: [_about_you_page__WEBPACK_IMPORTED_MODULE_1__.AboutYouPage]
    })
], AboutYouPageModule);



/***/ }),

/***/ 4304:
/*!*********************************************!*\
  !*** ./src/app/about-you/about-you.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutYouPage": () => (/* binding */ AboutYouPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _about_you_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-you.page.html?ngResource */ 9381);
/* harmony import */ var _about_you_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-you.page.scss?ngResource */ 992);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _service_user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/user-service.service */ 7057);







let AboutYouPage = class AboutYouPage {
    constructor(router, http, userService) {
        this.http = http;
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
    }
    goToSearch() {
        this.router.navigate(['/search']);
        var iUrl = "http://65.108.253.229:8000/start?description=" + this.description;
        this.userService.startSearch(this.description);
    }
    generateNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};
AboutYouPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule },
    { type: _service_user_service_service__WEBPACK_IMPORTED_MODULE_2__.UserServiceService }
];
AboutYouPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-about-you',
        template: _about_you_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_about_you_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AboutYouPage);



/***/ }),

/***/ 992:
/*!**********************************************************!*\
  !*** ./src/app/about-you/about-you.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXlvdS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFGSjs7QUFLRTtFQUNDLHFCQUFBO0FBRkgiLCJmaWxlIjoiYWJvdXQteW91LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB9XG4gIFxuICAjY29udGFpbmVyIHN0cm9uZyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICB9XG4gIFxuICAjY29udGFpbmVyIHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgXG4gICAgY29sb3I6ICM4YzhjOGM7XG4gIFxuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgI2NvbnRhaW5lciBhIHtcbiAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBcbiAgXG4gICJdfQ== */";

/***/ }),

/***/ 9381:
/*!**********************************************************!*\
  !*** ./src/app/about-you/about-you.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-content style=\"height: 100%; background-color: #DFEC46;\">\n  <ion-grid id =\"container\">\n    <ion-row>\n      <ion-col class = \"buttonText\" >\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>\n              Explain something about You  \n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-textarea [(ngModel)] = \"description\">\n              \n            </ion-textarea>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>    \n    <ion-row>\n      <ion-col>\n        <ion-card (click) = \"goToSearch()\">\n          <ion-card-header>\n            <ion-card-title>\n              PLAY\n            </ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_about-you_about-you_module_ts.js.map