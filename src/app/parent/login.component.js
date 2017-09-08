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
var angular2_modal_1 = require("angular2-modal");
var LoginModal = (function () {
    function LoginModal(dialog) {
        this.dialog = dialog;
        this.username = '';
        this.context = dialog.context; // this is the dialog reference
        dialog.setCloseGuard(this);
    }
    return LoginModal;
}());
LoginModal = __decorate([
    core_1.Component({
        selector: 'login',
        styles: [],
        template: "\n                 <div class=\"modal-header\">\n                 <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                 <h4 class=\"modal-title\">Login</h4>\n                 </div>\n                 <div class=\"modal-body\">\n                 <form id=\"login-form\">\n                 <div class=\"modal-body\">\n\n                 <input placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\"  required />\n               \n                  <input placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\"  required />\n                \n\n                </div>\n                <div class=\"modal-footer\">\n                <div>\n                <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">Login</button>\n              "
    }),
    __metadata("design:paramtypes", [angular2_modal_1.DialogRef])
], LoginModal);
exports.LoginModal = LoginModal;
//# sourceMappingURL=login.component.js.map