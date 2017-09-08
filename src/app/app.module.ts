import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';

/* Feature Modules */
import { ProductModule } from './products/product.module';

import { AdditionCalculateWindow } from './products/custom-modal';

import { ParentModule } from './parent/parent.module';

import { Child1Component } from './shared/child1.component';

import { Child2Component } from './shared/child2.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule,
    FormsModule,
    ReactiveFormsModule,
    ParentModule,
    
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    AdditionCalculateWindow,
    Child1Component,
    Child2Component
  ],
  bootstrap: [ AppComponent ],
  entryComponents: [ AdditionCalculateWindow, Child1Component, Child2Component ]
})
export class AppModule { }
