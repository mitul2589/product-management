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
var bootstrap_1 = require("angular2-modal/plugins/bootstrap");
var angular2_modal_1 = require("angular2-modal");
var custom_modal_1 = require("./custom-modal");
var product_service_1 = require("./product.service");
//import {PaginatePipe, PaginationService} from 'ng2-pagination';
var ProductListComponent = (function () {
    function ProductListComponent(_productService, vcRef, modal) {
        this._productService = _productService;
        this.modal = modal;
        this.pageTitle = 'Product List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.testNgSwitch = '1';
        //modal.
    }
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getProducts()
            .subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; });
    };
    ProductListComponent.prototype.ngDoCheck = function () {
        //console.log("12345");
    };
    ProductListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Product List: ' + message;
    };
    ProductListComponent.prototype.selectRow = function (index) {
        this.selectedRow = index;
    };
    ProductListComponent.prototype.openProductEditor = function () {
        this.modal.open(custom_modal_1.AdditionCalculateWindow, angular2_modal_1.overlayConfigFactory({ num1: 2, num2: 3 }, bootstrap_1.BSModalContext));
    };
    ProductListComponent.prototype.editProduct = function () {
        console.log(this.products[this.selectedRow]);
        this.modal.open(custom_modal_1.AdditionCalculateWindow, angular2_modal_1.overlayConfigFactory({ num1: 2, num2: 3 }, bootstrap_1.BSModalContext));
        this._productService.getProduct(this.products[this.selectedRow]._id);
        //console.log(AdditionCalculateWindow.prototype.errorMessage);
        //AdditionCalculateWindow.prototype.loginForm.setValue(value: { 'productName' : this.products[this.selectedRow].productName);
        /*this._productService.getProduct(this.products[this.selectedRow])
                .subscribe(product => { console.log(product); },
                           error => this.errorMessage = <any>error);
        */
    };
    ProductListComponent.prototype.deleteProduct = function () {
        var _this = this;
        console.log(this.products[this.selectedRow]);
        this._productService.deleteProduct(this.products[this.selectedRow])
            .subscribe(function (products) { location.reload(); }, function (error) { return _this.errorMessage = error; });
    };
    ProductListComponent.prototype.trackByProducts = function (index, product) {
        return product._id;
    };
    return ProductListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ProductListComponent.prototype, "testngonchanges", void 0);
ProductListComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/products/product-list.component.html',
        styleUrls: ['app/products/product-list.component.css'],
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [product_service_1.ProductService, core_1.ViewContainerRef, bootstrap_1.Modal])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map