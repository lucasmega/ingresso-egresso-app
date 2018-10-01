(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/@angular/Core/fesm5 lazy recursive":
/*!****************************************************************!*\
  !*** ./node_modules/@angular/Core/fesm5 lazy namespace object ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./node_modules/@angular/Core/fesm5 lazy recursive";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_Core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/Core */ "./node_modules/@angular/Core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'login', component: _app_auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    {
        path: '',
        loadChildren: './ingreso-egreso/ingreso-egreso.module#IngresoEgresoModule',
        canLoad: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]]
    },
    { path: '**', redirectTo: '' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_Core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-scroller\">\n  \n  <router-outlet></router-outlet>\n  \n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('initAuthListener =>', this.authService.initAuthListener());
        this.authService.initAuthListener();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.reducer */ "./src/app/app.reducer.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_9__["AuthModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_app_reducer__WEBPACK_IMPORTED_MODULE_8__["appReducers"]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument({
                    maxAge: 25,
                    logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production
                }),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.reducer.ts":
/*!********************************!*\
  !*** ./src/app/app.reducer.ts ***!
  \********************************/
/*! exports provided: appReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducers", function() { return appReducers; });
/* harmony import */ var _shared_ui_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/ui.reducer */ "./src/app/shared/ui.reducer.ts");
/* harmony import */ var _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.reducer */ "./src/app/auth/auth.reducer.ts");


var appReducers = {
    ui: _shared_ui_reducer__WEBPACK_IMPORTED_MODULE_0__["uiReducer"],
    auth: _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["authReducer"],
};


/***/ }),

/***/ "./src/app/auth/auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService) {
        this.authService = authService;
        this.numberListened = 1;
    }
    AuthGuardService.prototype.canActivate = function () {
        return this.authService.isAuth();
    };
    AuthGuardService.prototype.canLoad = function () {
        return this.authService.isAuth().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(this.numberListened));
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/auth/auth.actions.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.actions.ts ***!
  \**************************************/
/*! exports provided: SET_USER, SetUserActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER", function() { return SET_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUserActions", function() { return SetUserActions; });
var SET_USER = '[Auth] Set User';
var SetUserActions = /** @class */ (function () {
    function SetUserActions(user) {
        this.user = user;
        this.type = SET_USER;
    }
    return SetUserActions;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.reducer.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.reducer.ts ***!
  \**************************************/
/*! exports provided: authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.actions */ "./src/app/auth/auth.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var estadoInicial = {
    user: null
};
function authReducer(state, action) {
    if (state === void 0) { state = estadoInicial; }
    switch (action.type) {
        case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["SET_USER"]:
            return {
                user: __assign({}, action.user)
            };
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.model */ "./src/app/auth/user.model.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _shared_ui_accions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/ui.accions */ "./src/app/shared/ui.accions.ts");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth.actions */ "./src/app/auth/auth.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AuthService = /** @class */ (function () {
    function AuthService(afAuth, router, afDB, store) {
        this.afAuth = afAuth;
        this.router = router;
        this.afDB = afDB;
        this.store = store;
        this.userSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
    }
    /**
     * Author: Lucas Mega
     * Method responsible for listening when you change the user state
     * @param fbUser (Contains user information)
     * @param usuarioObj (Contains user information)
     * @param userSubscription (Uninscribe of the observable)
     */
    AuthService.prototype.initAuthListener = function () {
        var _this = this;
        this.userSubscription = this.afAuth.authState.subscribe(function (fbUser) {
            if (fbUser) {
                _this.afDB.doc(fbUser.uid + "/usuario").valueChanges().subscribe(function (usuarioObj) {
                    var newUser = new _user_model__WEBPACK_IMPORTED_MODULE_7__["User"](usuarioObj);
                    _this.store.dispatch(new _auth_actions__WEBPACK_IMPORTED_MODULE_10__["SetUserActions"](newUser));
                    _this.usuario = newUser;
                });
            }
            else {
                _this.usuario = null;
                _this.userSubscription.unsubscribe();
            }
        });
    };
    /*
      Author: Lucas Mega
      Service responsible for creating in-app user
    */
    AuthService.prototype.crearUsuario = function (nombre, email, password) {
        var _this = this;
        this.store.dispatch(new _shared_ui_accions__WEBPACK_IMPORTED_MODULE_9__["ActivarLoadingAction"]());
        this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(function (res) {
            /* Create a per-user database on firebase */
            var user = { uid: res.user.uid, nombre: nombre, email: res.user.email };
            _this.afDB.doc(user.uid + "/usuario").set(user).then(function (res) {
                _this.router.navigate(['/']);
                _this.store.dispatch(new _shared_ui_accions__WEBPACK_IMPORTED_MODULE_9__["DescactivarLoadingAction"]());
            }).catch(function (error) {
                _this.store.dispatch(new _shared_ui_accions__WEBPACK_IMPORTED_MODULE_9__["DescactivarLoadingAction"]());
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Error en el login', error.message, 'error');
            });
            _this.router.navigate(['/']);
        }).catch(function (error) {
            console.error(error);
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Error en el login', error.message, 'error');
        });
    };
    /*
    Author: Lucas Mega
    Service responsible for logging into the application
    */
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        this.store.dispatch(new _shared_ui_accions__WEBPACK_IMPORTED_MODULE_9__["ActivarLoadingAction"]());
        this.afAuth.auth.signInWithEmailAndPassword(email, password).then(function (res) {
            _this.router.navigate(['/']);
            _this.store.dispatch(new _shared_ui_accions__WEBPACK_IMPORTED_MODULE_9__["DescactivarLoadingAction"]());
        }).catch(function (error) {
            console.error(error);
            _this.store.dispatch(new _shared_ui_accions__WEBPACK_IMPORTED_MODULE_9__["DescactivarLoadingAction"]());
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Error en el login', error.message, 'error');
        });
    };
    /*
    Author: Lucas Mega
    Service responsible for exiting the application
    */
    AuthService.prototype.logout = function () {
        this.router.navigate(['/login']);
        this.afAuth.auth.signOut();
    };
    /*
    Author: Lucas Mega
    Redirect user to login if not logged in
    */
    AuthService.prototype.isAuth = function () {
        var _this = this;
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (fbUser) {
            if (fbUser === null) {
                _this.router.navigate(['/login']);
            }
            return fbUser != null;
        }));
    };
    AuthService.prototype.getUsuario = function () {
        return __assign({}, this.usuario);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"page-body-wrapper full-page-wrapper auth-page\">\n      <div class=\"content-wrapper d-flex align-items-center auth auth-bg-1 theme-one\">\n        <div class=\"row w-100\">\n          <div class=\"col-lg-4 mx-auto\">\n            <h2 class=\"text-center mb-4\" style=\"color: white;\">Ingresar</h2>\n            <div class=\"auto-form-wrapper\">\n              \n              <form (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n                \n                <div class=\"form-group\">\n                  <label class=\"label\">Usuario</label>\n                  <div class=\"input-group\">\n                    <input type=\"email\" class=\"form-control\" placeholder=\"Email\" ngModel name=\"email\" required>\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">\n                        <i class=\"fa fa-check-circle\"></i>\n                      </span>\n                    </div>\n                  </div>\n                </div>\n                \n                <div class=\"form-group\">\n                  <label class=\"label\">Contraseña</label>\n                  <div class=\"input-group\">\n                    <input type=\"password\" class=\"form-control\" placeholder=\"*********\" ngModel name=\"password\" required>\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">\n                        <i class=\"fa fa-check-circle\"></i>\n                      </span>\n                    </div>\n                  </div>\n                </div>\n                \n                <div class=\"form-group\">\n                  <button *ngIf=\"!cargando\" [disabled]=\"f.invalid\" class=\"btn btn-primary submit-btn btn-block\">Login</button>\n                  <button *ngIf=\"cargando\"  [disabled]=\"true\" class=\"btn btn-primary submit-btn btn-block\">\n                      <i class=\"fa fa-spin fa-sync\"></i>\n                      Espere...\n                  </button>\n                </div>\n                \n                <div class=\"text-block text-center my-3\">\n                  <span class=\"text-small font-weight-semibold\">No estas registrado? </span>\n                  <br>\n                  <a routerLink=\"/register\" class=\"text-black text-small\">Crear una cuenta</a>\n                </div>\n                \n              </form>\n              \n            </div>\n            \n          </div>\n        </div>\n      </div>\n      <!-- content-wrapper ends -->\n    </div>\n  "

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Firebase

//Redux - ngrx

var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, store) {
        var _this = this;
        this.authService = authService;
        this.store = store;
        this.subscription = this.store.select('ui').subscribe(function (ui) { return _this.cargando = ui.isLoading; });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    LoginComponent.prototype.onSubmit = function (data) {
        this.authService.login(data.email, data.password);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"page-body-wrapper full-page-wrapper auth-page\">\n    <div class=\"content-wrapper d-flex align-items-center auth register-bg-1 theme-one\">\n      <div class=\"row w-100\">\n        <div class=\"col-lg-4 mx-auto\">\n          <h2 class=\"text-center mb-4\">Registro</h2>\n          <div class=\"auto-form-wrapper\">\n            <form (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n              \n              <div class=\"form-group\">\n                <div class=\"input-group\">\n                  <input type=\"email\" class=\"form-control\" placeholder=\"Correo\" ngModel name=\"email\" required>\n                  <div class=\"input-group-append\">\n                    <span class=\"input-group-text\">\n                      <i class=\"fa fa-check-circle\"></i>\n                    </span>\n                  </div>\n                </div>\n              </div>\n              \n              <div class=\"form-group\">\n                <div class=\"input-group\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Nombre\" ngModel name=\"nombre\" required>\n                  <div class=\"input-group-append\">\n                    <span class=\"input-group-text\">\n                      <i class=\"fa fa-check-circle\"></i>\n                    </span>\n                  </div>\n                </div>\n              </div>\n              \n              <div class=\"form-group\">\n                <div class=\"input-group\">\n                  <input type=\"password\" class=\"form-control\" placeholder=\"Password\" ngModel name=\"password\" required>\n                  <div class=\"input-group-append\">\n                    <span class=\"input-group-text\">\n                      <i class=\"fa fa-check-circle\"></i>\n                    </span>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                \n                <button *ngIf=\"!cargando\" [disabled]=\"f.invalid\" class=\"btn btn-primary submit-btn btn-block\">Crear cuenta</button>\n                <button *ngIf=\"cargando\"  [disabled]=\"true\" class=\"btn btn-primary submit-btn btn-block\">\n                  <i class=\"fa fa-spin fa-sync\"></i>\n                  Espere...\n                </button>\n                \n              </div>\n              <div class=\"text-block text-center my-3\">\n                <span class=\"text-small font-weight-semibold\">ya tienes una cuenta?</span>\n                <br>\n                <a routerLink=\"/login\" class=\"text-black text-small\">Login</a>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- content-wrapper ends -->\n  </div>\n  <!-- page-body-wrapper ends -->\n"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Firebase

//Redux - ngrx

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, store) {
        var _this = this;
        this.authService = authService;
        this.store = store;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.subscription = this.store.select('ui').subscribe(function (ui) { return _this.cargando = ui.isLoading; });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    RegisterComponent.prototype.onSubmit = function (data) {
        this.authService.crearUsuario(data.nombre, data.email, data.password);
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/auth/user.model.ts":
/*!************************************!*\
  !*** ./src/app/auth/user.model.ts ***!
  \************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(user) {
        this.nombre = user && user.nombre || null;
        this.email = user && user.email || null;
        this.uid = user && user.uid;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/shared/ui.accions.ts":
/*!**************************************!*\
  !*** ./src/app/shared/ui.accions.ts ***!
  \**************************************/
/*! exports provided: ACTIVAR_LOADING, DESACTIVAR_LOADING, ActivarLoadingAction, DescactivarLoadingAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIVAR_LOADING", function() { return ACTIVAR_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESACTIVAR_LOADING", function() { return DESACTIVAR_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivarLoadingAction", function() { return ActivarLoadingAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescactivarLoadingAction", function() { return DescactivarLoadingAction; });
var ACTIVAR_LOADING = '[UI Loading] Cargando...';
var DESACTIVAR_LOADING = '[UI Loading] Fin de carga...';
var ActivarLoadingAction = /** @class */ (function () {
    function ActivarLoadingAction() {
        this.type = ACTIVAR_LOADING;
    }
    return ActivarLoadingAction;
}());

var DescactivarLoadingAction = /** @class */ (function () {
    function DescactivarLoadingAction() {
        this.type = DESACTIVAR_LOADING;
    }
    return DescactivarLoadingAction;
}());



/***/ }),

/***/ "./src/app/shared/ui.reducer.ts":
/*!**************************************!*\
  !*** ./src/app/shared/ui.reducer.ts ***!
  \**************************************/
/*! exports provided: uiReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiReducer", function() { return uiReducer; });
/* harmony import */ var _ui_accions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.accions */ "./src/app/shared/ui.accions.ts");

var initState = {
    isLoading: false
};
function uiReducer(state, action) {
    if (state === void 0) { state = initState; }
    switch (action.type) {
        case _ui_accions__WEBPACK_IMPORTED_MODULE_0__["ACTIVAR_LOADING"]:
            return {
                isLoading: true
            };
        case _ui_accions__WEBPACK_IMPORTED_MODULE_0__["DESACTIVAR_LOADING"]:
            return {
                isLoading: false
            };
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyDBp4UxUvd0SQR8qaHJRRB-tnVJED_kLi0',
        authDomain: 'ingreso-egreso-app-9eda7.firebaseapp.com',
        databaseURL: 'https://ingreso-egreso-app-9eda7.firebaseio.com',
        projectId: 'ingreso-egreso-app-9eda7',
        storageBucket: 'ingreso-egreso-app-9eda7.appspot.com',
        messagingSenderId: '879656631930'
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\study\redux\04 - ingresoEgresoApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map