"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_in-game_in-game_module_ts"],{

/***/ 7105:
/*!***************************************************!*\
  !*** ./src/app/in-game/in-game-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InGamePageRoutingModule": () => (/* binding */ InGamePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _in_game_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./in-game.page */ 2092);




const routes = [
    {
        path: '',
        component: _in_game_page__WEBPACK_IMPORTED_MODULE_0__.InGamePage
    }
];
let InGamePageRoutingModule = class InGamePageRoutingModule {
};
InGamePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InGamePageRoutingModule);



/***/ }),

/***/ 9532:
/*!*******************************************!*\
  !*** ./src/app/in-game/in-game.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InGamePageModule": () => (/* binding */ InGamePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _in_game_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./in-game-routing.module */ 7105);
/* harmony import */ var _in_game_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./in-game.page */ 2092);







let InGamePageModule = class InGamePageModule {
};
InGamePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _in_game_routing_module__WEBPACK_IMPORTED_MODULE_0__.InGamePageRoutingModule
        ],
        declarations: [_in_game_page__WEBPACK_IMPORTED_MODULE_1__.InGamePage]
    })
], InGamePageModule);



/***/ }),

/***/ 2092:
/*!*****************************************!*\
  !*** ./src/app/in-game/in-game.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InGamePage": () => (/* binding */ InGamePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _in_game_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./in-game.page.html?ngResource */ 194);
/* harmony import */ var _in_game_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./in-game.page.scss?ngResource */ 1420);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/user-service.service */ 7057);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4505);








let InGamePage = class InGamePage {
    constructor(UserServiceService, geolocation, http) {
        this.UserServiceService = UserServiceService;
        this.geolocation = geolocation;
        this.http = http;
        this.seflCode = 0;
        this.otherDesc = "";
        this.distance = 0;
        this.coords = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject({
            selfLat: 0.0,
            selfLon: 0.0,
            otherLat: 0.0,
            otherLon: 0.0
        });
        this.staticCoords = {
            selfLat: 0.0,
            selfLon: 0.0,
            otherLat: 0.0,
            otherLon: 0.0
        };
    }
    ngOnInit() {
        this.UserServiceService.userInfo.subscribe(data => {
            this.seflCode = data.userCode;
            this.selfId = data.userId;
        });
        this.UserServiceService.otherUserInfo.subscribe(data => {
            this.otherDesc = data['desc'];
            this.otherId = data.userId;
        });
        this.coords.subscribe(data => {
            this.distance = data.selfLat;
        });
        console.log(this.UserServiceService.staticOtherInfo.desc);
        this.otherDesc = this.UserServiceService.staticOtherInfo.desc;
        var tryUpdate = setInterval(() => {
            this.updateSelfGeo();
        }, 5000);
    }
    updateSelfGeo() {
        this.geolocation.getCurrentPosition().then((resp) => {
            var latitude = resp.coords.latitude;
            var longitude = resp.coords.longitude;
            var userId = this.selfId;
            var otherId = this.otherId;
            var iUrl = "http://65.108.253.229:8000/update_info?user_id=" + userId + "&lat=" + latitude + "&lon=" + longitude;
            this.http.post(iUrl, JSON.stringify({})).subscribe(data => {
                console.log("UPDATE GEo");
                var iUrl2 = "http://65.108.253.229:8000/get_distance?user1_id=" + userId + "&user2_id=" + otherId;
                this.http.post(iUrl2, JSON.stringify({})).subscribe(data => {
                    this.distance = data["dist"];
                });
            });
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
};
InGamePage.ctorParameters = () => [
    { type: _service_user_service_service__WEBPACK_IMPORTED_MODULE_3__.UserServiceService },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient }
];
InGamePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-in-game',
        template: _in_game_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_in_game_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InGamePage);



/***/ }),

/***/ 1420:
/*!******************************************************!*\
  !*** ./src/app/in-game/in-game.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbi1nYW1lLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 194:
/*!******************************************************!*\
  !*** ./src/app/in-game/in-game.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-content style=\"height: 100%; background-color: #DFEC46;\">\n  <ion-grid id =\"container\">\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>\n              Estas buscant a...\n            </ion-card-title>\n          </ion-card-header>\n            <ion-card-content>\n              {{ otherDesc }}\n            </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row> \n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>\n              {{ seflCode }}\n            </ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>\n              <ion-item>\n                <ion-label position=\"stacked\">Introduce su codigo:</ion-label>\n                <ion-input></ion-input>\n              </ion-item>\n            </ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>\n              <span id=\"time_left\">00:00</span>\n            </ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n\n      <ion-col>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>\n              <span id=\"time_left\">{{ distance }}</span>\n            </ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_in-game_in-game_module_ts.js.map