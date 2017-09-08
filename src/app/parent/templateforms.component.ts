import { Component } from '@angular/core'
import { DialogRef, ModalComponent } from 'angular2-modal'
import { BSModalContext } from 'angular2-modal/plugins/bootstrap'
import { Customer } from './customer'

@Component({
    selector: 'templateforms-modal',
    template: `
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Login</h4>
              </div>
              <div class="modal-body">
                <form id="customer-form" #customerForm="ngForm" (ngSubmit)="onCustomerFormSubmit(customerForm.value, customerForm.valid)">
                    <div class="form-group">
                        <label for="firstname">First Name:</label>
                        <input type="text" class="form-control" name="firstname" [(ngModel)]="model.firstname" 
                           #firstname="ngModel" required minlength="5" maxlength="50" />
                        <div *ngIf="firstname.valid || firstname.pristine" class="alert alert-danger">
                            bxbb
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="lastname">Last Name:</label>
                        <input type="text" class="form-control" name="lastname" [(ngModel)]="model.lastname" #lastname="ngModel" required />
                    </div>
                    <button type="submit" class="btn btn-primary btn-lg btn-block">Submit</button>
                </form>
              </div>
              <div class="modal-footer">
                
              </div>  
            `
})

export class TemplateFormsModal implements ModalComponent<BSModalContext> {
    context: BSModalContext;
    constructor(public dialog: DialogRef<BSModalContext>) {
        this.context = dialog.context;
    }

    model = new Customer(1, 'Mitul', 'Gandhi', 'xyz@gmail.com', 28);

    onCustomerFormSubmit(value: any, valid: boolean) {
        debugger;
        console.log("Customer Form Object : " + value);
        console.log("Is Custiomer form valid : " + valid);
    }
}