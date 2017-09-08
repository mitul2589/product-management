import { Component, OnInit, OnChanges, SimpleChanges, ViewContainerRef, ViewEncapsulation, Input, Injectable, Output, DoCheck }  from '@angular/core';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { Overlay, overlayConfigFactory } from 'angular2-modal';

import { AdditionCalculateWindow, AdditionCalculateWindowData } from './custom-modal';

import { IProduct } from './product';
import { ProductService } from './product.service';

import {NgForm} from '@angular/forms';

//import {PaginatePipe, PaginationService} from 'ng2-pagination';

@Component({
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css'],
    
})

@Injectable()
export class ProductListComponent implements OnInit, DoCheck {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    @Input() testngonchanges: string;
    errorMessage: string;
    selectedRow: number;
    products: IProduct[];

    testNgSwitch: string = '1';

    constructor(private _productService: ProductService, vcRef: ViewContainerRef, public modal: Modal) {
        //modal.
    }

    
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._productService.getProducts()
                .subscribe(products => this.products = products,
                           error => this.errorMessage = <any>error);
    }

    

    
    ngDoCheck(): void {
        //console.log("12345");
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

    selectRow(index: number): void {
        this.selectedRow = index;
       
    }

    openProductEditor(): void {
        this.modal.open(AdditionCalculateWindow, overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
    }

    editProduct(): void {
        console.log(this.products[this.selectedRow]);
        this.modal.open(AdditionCalculateWindow, overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
        this._productService.getProduct(this.products[this.selectedRow]._id);
        //console.log(AdditionCalculateWindow.prototype.errorMessage);
        //AdditionCalculateWindow.prototype.loginForm.setValue(value: { 'productName' : this.products[this.selectedRow].productName);
        /*this._productService.getProduct(this.products[this.selectedRow])
                .subscribe(product => { console.log(product); },
                           error => this.errorMessage = <any>error);
        */
    }

    deleteProduct(): void {
        console.log(this.products[this.selectedRow]);
        this._productService.deleteProduct(this.products[this.selectedRow])
                .subscribe(products => { location.reload(); },
                           error => this.errorMessage = <any>error);
        
    }

    trackByProducts(index: number, product: IProduct) {
       return product._id;
    }
}
