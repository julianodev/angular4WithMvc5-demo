"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/Rx");
var github_service_1 = require("../../providers/user/github.service");
require("rxjs/add/operator/take");
var UserComponent = (function () {
    function UserComponent(githubService) {
        this.githubService = githubService;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.githubService.getUsers().take(10)
            .subscribe(function (users) {
            _this.users = users;
            console.log('users =>', users);
        });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'about-app',
        templateUrl: './app/components/user/user.component.html'
    }),
    __metadata("design:paramtypes", [github_service_1.GithubService])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map