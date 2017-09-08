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
var customer_1 = require("./customer");
var TemplateFormsModal = (function () {
    function TemplateFormsModal(dialog) {
        this.dialog = dialog;
        this.model = new customer_1.Customer(1, 'Mitul', 'Gandhi', 'xyz@gmail.com', 28);
        this.context = dialog.context;
    }
    TemplateFormsModal.prototype.onCustomerFormSubmit = function (value, valid) {
        debugger;
        console.log("Customer Form Object : " + value);
        console.log("Is Custiomer form valid : " + valid);
    };
    return TemplateFormsModal;
}());
TemplateFormsModal = __decorate([
    core_1.Component({
        selector: 'templateforms-modal',
        template: "\n              <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">Login</h4>\n              </div>\n              <div class=\"modal-body\">\n                <form id=\"customer-form\" #customerForm=\"ngForm\" (ngSubmit)=\"onCustomerFormSubmit(customerForm.value, customerForm.valid)\">\n                    <div class=\"form-group\">\n                        <label for=\"firstname\">First Name:</label>\n                        <input type=\"text\" class=\"form-control\" name=\"firstname\" [(ngModel)]=\"model.firstname\" \n                           #firstname=\"ngModel\" required minlength=\"5\" maxlength=\"50\" />\n                        <div *ngIf=\"firstname.valid || firstname.pristine\" class=\"alert alert-danger\">\n                            bxbb\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"lastname\">Last Name:</label>\n                        <input type=\"text\" class=\"form-control\" name=\"lastname\" [(ngModel)]=\"model.lastname\" #lastname=\"ngModel\" required />\n                    </div>\n                    <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">Submit</button>\n                </form>\n              </div>\n              <div class=\"modal-footer\">\n                \n              </div>  \n            "
    }),
    __metadata("design:paramtypes", [angular2_modal_1.DialogRef])
], TemplateFormsModal);
exports.TemplateFormsModal = TemplateFormsModal;
//# sourceMappingURL=templateforms.component.js.map