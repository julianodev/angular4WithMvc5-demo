"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var about_componet_1 = require("./components/about/about.componet");
var home_component_1 = require("./components/home/home.component");
var user_component_1 = require("./components/user/user.component");
var navbar_component_1 = require("./components/navbar/navbar.component");
var github_service_1 = require("./providers/user/github.service");
var routes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'about',
        component: about_componet_1.AboutComponent
    },
    {
        path: 'user',
        component: user_component_1.UserComponent
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(routes)
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            about_componet_1.AboutComponent,
            user_component_1.UserComponent,
            navbar_component_1.NavbarComponent
        ],
        entryComponents: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            about_componet_1.AboutComponent,
            user_component_1.UserComponent,
            navbar_component_1.NavbarComponent
        ],
        providers: [
            github_service_1.GithubService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map