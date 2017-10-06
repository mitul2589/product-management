import { Component, OnInit, Input, Output } from '@angular/core';

import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';

import { NgForm } from '@angular/forms';

import { IProduct } from './product';
import { ProductService } from './product.service';

import { ProductListComponent } from './product-list.component';

export class AdditionCalculateWindowData extends BSModalContext {
    constructor(public num1: number, public num2: number) {
        super();
    }
}

/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */
@Component({
    selector: 'modal-content',
    styles: [`
        .custom-modal-container {
            padding: 15px;
        }

        .custom-modal-header {
            background-color: #219161;
            color: #fff;
            -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            margin-top: -15px;
            margin-bottom: 40px;
        }
    `],
  //TODO: [ngClass] here on purpose, no real use, just to show how to workaround ng2 issue #4330.
  // Remove when solved.
  /* tslint:disable */ template: `
        <div class="container custom-modal-container">
         <form class="form-horizontal" [formGroup]="loginForm">
    <div class="form-group">
      <label class="control-label col-sm-4" for="_id" hidden>Id:</label>
      <div class="col-sm-8" class="hidden">
        <input type="hidden" class="form-control" id="_id" formControlName="_id">
      </div>
      
      <label class="control-label col-sm-4" for="productname">Name:</label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="productname" required formControlName="productName" autoComplete="off">
      </div>

      <label class="control-label col-sm-4" for="productname">Code:</label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="productcode" formControlName="productCode" autoComplete="off">
      </div>

      <label class="control-label col-sm-4" for="productdescription">Description:</label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="productdescription" formControlName="description" autoComplete="off">
      </div>

      <label class="control-label col-sm-4" for="productprice">Price:</label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="productprice" formControlName="price" autoComplete="off">
      </div>

      <label class="control-label col-sm-4" for="productreleasedate">Release Date:</label>
      <div class="col-sm-8">
        <input type="date" class="form-control" id="productreleasedate" formControlName="releaseDate" autoComplete="off">
      </div>

      <label class="control-label col-sm-4" for="productstarrating">Star Rating:</label>
      <div class="col-sm-8">
        <input type="number" step="any" class="form-control" id="productstarrating" formControlName="starRating" autoComplete="off">
      </div>

      <label class="control-label col-sm-4" for="productimage">Image:</label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="productimage" formControlName="imageUrl" autoComplete="off">
      </div>
    </div>
    
    <div class="form-group">        
      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-default" (click)="onSubmit(productEditor)">Save</button>
         <button type="submit" class="btn btn-default" (click)="onCancel()">Cancel</button>
      </div>
    </div>
  </form>
         </div>
        `
})
export class AdditionCalculateWindow implements ModalComponent<AdditionCalculateWindowData>, OnInit {
    context: AdditionCalculateWindowData;


    @Output() public errorMessage: string = 'fxdfsf';

    @Output() public loginForm = new FormGroup({
        _id: new FormControl(),
        //productId: new FormControl("8", Validators.required),
        productName: new FormControl("", Validators.required),
        productCode: new FormControl("", Validators.required),
        description: new FormControl("", Validators.required),
        price: new FormControl("", Validators.required),
        releaseDate: new FormControl("", Validators.required),
        starRating: new FormControl("", Validators.required),
        imageUrl: new FormControl("http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png", Validators.required),
    });

    constructor(private _productService: ProductService, public dialog: DialogRef<AdditionCalculateWindowData>) {
        this.context = dialog.context;
        this._productService.list1Event.subscribe((data: any) => {
            delete data.__v;
            this.loginForm.setValue(data);
            console.log(data);
        });

    }

    ngOnInit(): void {

    }

    onKeyUp(value: any) {

        this.dialog.close();
    }

    onCancel() {
        this.dialog.close();
    }

    beforeDismiss(): boolean {
        return true;
    }

    beforeClose(): boolean {
        return true;
    }

    onSubmit(productEditor: NgForm) {
        console.log(this.loginForm.value._id);
        if (this.loginForm.value['_id']) {
            this._productService.editProduct(this.loginForm.value)
                .subscribe(product => {
                    this.dialog.close();
                    //location.reload(); 
                    console.log("updated product --->" + product.productName);
                    this._productService.products.filter(p => p._id === product._id)[0] = product;
                },
                error => this.errorMessage = <any>error);
        } else {
            delete this.loginForm.value["_id"];
            this._productService.addProduct(this.loginForm.value)
                .subscribe(product => {
                    this.dialog.close();
                    this._productService.products.push(product);
                },
                error => this.errorMessage = <any>error);
        }
    }
}
