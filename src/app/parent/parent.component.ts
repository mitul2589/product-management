import { Component, ViewChild, OnChanges, ViewContainerRef, ComponentFactoryResolver, trigger, style, state, transition, animate } from '@angular/core'
import { ChildComponent } from './../shared/child.component'
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { LoginModal } from './login.component'
import { TemplateFormsModal } from './templateforms.component'
import { Customer } from './customer'
import { Child1Component } from './../shared/child1.component';

import { Child2Component } from './../shared/child2.component';


@Component({
    selector: 'parent-comp',
    template: `
        <button (click)="openPopUP()">Open Pop UP</button>

        <button (click)="openTemplateForms()">Template Driven Forms</button>

        <h3>Reference child component properties</h3>
        <button (click)="childComp.getChildProp()">Access child component properties using ref variable</button>
        <br/>
        <button (click)="getChildProp()">Access child component properties using viewchild directive</button>
        <child-comp #childComp></child-comp>
        <div my-highlight>Hightlight this div content hightlight directive</div>
        <div [@applyAnimation]="state" (click)="applyAnimation()">Apply animations</div>

         <input #box (keyup.enter)="onEnter(box.value)">

         <h3>Binding innerHTML</h3>
        <p>Bound value:</p>
        <p class="e2e-inner-html-interpolated">{{htmlSnippet}}</p>
        <p>Result of binding to innerHTML:</p>
        <p class="e2e-inner-html-bound" [innerHTML]="htmlSnippet"></p>

        {{testobj?.prop1}}

         <div #parent></div>

    `,
    styles: [':host { display: block; border: 1px solid black; }'],
    animations: [
        trigger('applyAnimation', [
           state('active', style({
                background: 'red'
           })),
           state('inactive', style({
                background: 'blue'
           })),
           transition('active => inactive', animate('100ms')),
           transition('inactive => active', animate('100ms'))
        ])

    ]
})

export class ParentComponent implements OnChanges {
    state = 'active';
    htmlSnippet = '<p>paragraph</p>';
    @ViewChild(ChildComponent) public childComp: ChildComponent;

    @ViewChild('parent', {read: ViewContainerRef}) parent: ViewContainerRef;

    model = new Customer(1, 'Mitul', 'Gandhi', 'xyz@gmail.com', 28);

    constructor(vcRef: ViewContainerRef, public modal: Modal, private componentFactoryResolver: ComponentFactoryResolver) {
       //modal.overlay.defaultViewContainer = vcRef;

       const child1Component = this.componentFactoryResolver.resolveComponentFactory(Child1Component);
       const child2Component = this.componentFactoryResolver.resolveComponentFactory(Child2Component);

       setTimeout(() => {
         this.parent.createComponent(child1Component);
         setTimeout(() => {
            this.parent.createComponent(child2Component);
         }, 1000)
       }, 1000);
    }

    getChildProp(): void {
        this.childComp.getChildProp();
    }

    ngOnChanges() {
        alert("vxvxvxvxv");
    }

    applyAnimation() {
        this.state = this.state === 'active' ? 'inactive' : 'active';
    }

    openPopUP() {
       return this.modal.open(LoginModal,  overlayConfigFactory({}, BSModalContext));
    }

    openTemplateForms() {
       return this.modal.open(TemplateFormsModal,  overlayConfigFactory({}, BSModalContext));
    }

    

}