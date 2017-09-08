import { Component } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

@Component({
    selector: 'login',
    styles: [],
    template: `
                 <div class="modal-header">
                 <button type="button" class="close" data-dismiss="modal">&times;</button>
                 <h4 class="modal-title">Login</h4>
                 </div>
                 <div class="modal-body">
                 <form id="login-form">
                 <div class="modal-body">

                 <input placeholder="Username" [(ngModel)]="username" name="username"  required />
               
                  <input placeholder="Password" [(ngModel)]="password" name="password"  required />
                

                </div>
                <div class="modal-footer">
                <div>
                <button type="submit" class="btn btn-primary btn-lg btn-block">Login</button>
              `
})

export class LoginModal implements CloseGuard, ModalComponent<BSModalContext> {
    context: BSModalContext;

    public username: string = '';
    public password: string;

    constructor(public dialog: DialogRef<BSModalContext>) {
        this.context = dialog.context; // this is the dialog reference
        dialog.setCloseGuard(this);
    }
}