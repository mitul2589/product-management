"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var bootstrap_1 = require("angular2-modal/plugins/bootstrap");
var forms_1 = require("@angular/forms");
var product_service_1 = require("./product.service");
var AdditionCalculateWindowData = (function (_super) {
    __extends(AdditionCalculateWindowData, _super);
    function AdditionCalculateWindowData(num1, num2) {
        var _this = _super.call(this) || this;
        _this.num1 = num1;
        _this.num2 = num2;
        return _this;
    }
    return AdditionCalculateWindowData;
}(bootstrap_1.BSModalContext));
exports.AdditionCalculateWindowData = AdditionCalculateWindowData;
/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */
var AdditionCalculateWindow = (function () {
    function AdditionCalculateWindow(_productService, dialog) {
        var _this = this;
        this._productService = _productService;
        this.dialog = dialog;
        this.errorMessage = 'fxdfsf';
        this.loginForm = new forms_1.FormGroup({
            _id: new forms_1.FormControl(),
            //productId: new FormControl("8", Validators.required),
            productName: new forms_1.FormControl("", forms_1.Validators.required),
            productCode: new forms_1.FormControl("", forms_1.Validators.required),
            description: new forms_1.FormControl("", forms_1.Validators.required),
            price: new forms_1.FormControl("", forms_1.Validators.required),
            releaseDate: new forms_1.FormControl("", forms_1.Validators.required),
            starRating: new forms_1.FormControl("", forms_1.Validators.required),
            imageUrl: new forms_1.FormControl("http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png", forms_1.Validators.required),
        });
        this.context = dialog.context;
        this._productService.list1Event.subscribe(function (data) {
            _this.loginForm.setValue(data);
            console.log(data);
        });
    }
    AdditionCalculateWindow.prototype.ngOnInit = function () {
    };
    AdditionCalculateWindow.prototype.onKeyUp = function (value) {
        this.dialog.close();
    };
    AdditionCalculateWindow.prototype.onCancel = function () {
        this.dialog.close();
    };
    AdditionCalculateWindow.prototype.beforeDismiss = function () {
        return true;
    };
    AdditionCalculateWindow.prototype.beforeClose = function () {
        return true;
    };
    AdditionCalculateWindow.prototype.onSubmit = function (productEditor) {
        var _this = this;
        console.log(this.loginForm.value._id);
        if (this.loginForm.value['_id']) {
            this._productService.editProduct(this.loginForm.value)
                .subscribe(function (products) { _this.dialog.close(); location.reload(); }, function (error) { return _this.errorMessage = error; });
        }
        else {
            delete this.loginForm.value["_id"];
            this._productService.addProduct(this.loginForm.value)
                .subscribe(function (products) { _this.dialog.close(); location.reload(); }, function (error) { return _this.errorMessage = error; });
        }
    };
    return AdditionCalculateWindow;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", String)
], AdditionCalculateWindow.prototype, "errorMessage", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AdditionCalculateWindow.prototype, "loginForm", void 0);
AdditionCalculateWindow = __decorate([
    core_1.Component({
        selector: 'modal-content',
        styles: ["\n        .custom-modal-container {\n            padding: 15px;\n        }\n\n        .custom-modal-header {\n            background-color: #219161;\n            color: #fff;\n            -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);\n            -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);\n            box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);\n            margin-top: -15px;\n            margin-bottom: 40px;\n        }\n    "],
        //TODO: [ngClass] here on purpose, no real use, just to show how to workaround ng2 issue #4330.
        // Remove when solved.
        /* tslint:disable */ template: "\n        <div class=\"container custom-modal-container\">\n         <form class=\"form-horizontal\" [formGroup]=\"loginForm\">\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-4\" for=\"_id\" hidden>Id:</label>\n      <div class=\"col-sm-8\" class=\"hidden\">\n        <input type=\"hidden\" class=\"form-control\" id=\"_id\" formControlName=\"_id\">\n      </div>\n      \n      <label class=\"control-label col-sm-4\" for=\"productname\">Name:</label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" class=\"form-control\" id=\"productname\" required formControlName=\"productName\" autoComplete=\"off\">\n      </div>\n\n      <label class=\"control-label col-sm-4\" for=\"productname\">Code:</label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" class=\"form-control\" id=\"productcode\" formControlName=\"productCode\" autoComplete=\"off\">\n      </div>\n\n      <label class=\"control-label col-sm-4\" for=\"productdescription\">Description:</label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" class=\"form-control\" id=\"productdescription\" formControlName=\"description\" autoComplete=\"off\">\n      </div>\n\n      <label class=\"control-label col-sm-4\" for=\"productprice\">Price:</label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" class=\"form-control\" id=\"productprice\" formControlName=\"price\" autoComplete=\"off\">\n      </div>\n\n      <label class=\"control-label col-sm-4\" for=\"productreleasedate\">Release Date:</label>\n      <div class=\"col-sm-8\">\n        <input type=\"date\" class=\"form-control\" id=\"productreleasedate\" formControlName=\"releaseDate\" autoComplete=\"off\">\n      </div>\n\n      <label class=\"control-label col-sm-4\" for=\"productstarrating\">Star Rating:</label>\n      <div class=\"col-sm-8\">\n        <input type=\"number\" step=\"any\" class=\"form-control\" id=\"productstarrating\" formControlName=\"starRating\" autoComplete=\"off\">\n      </div>\n\n      <label class=\"control-label col-sm-4\" for=\"productimage\">Image:</label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" class=\"form-control\" id=\"productimage\" formControlName=\"imageUrl\" autoComplete=\"off\">\n      </div>\n    </div>\n    \n    <div class=\"form-group\">        \n      <div class=\"col-sm-offset-2 col-sm-10\">\n        <button type=\"submit\" class=\"btn btn-default\" (click)=\"onSubmit(productEditor)\">Save</button>\n         <button type=\"submit\" class=\"btn btn-default\" (click)=\"onCancel()\">Cancel</button>\n      </div>\n    </div>\n  </form>\n         </div>\n        "
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService, angular2_modal_1.DialogRef])
], AdditionCalculateWindow);
exports.AdditionCalculateWindow = AdditionCalculateWindow;
//# sourceMappingURL=custom-modal.js.map