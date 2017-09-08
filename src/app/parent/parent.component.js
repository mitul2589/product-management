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
var child_component_1 = require("./../shared/child.component");
var angular2_modal_1 = require("angular2-modal");
var bootstrap_1 = require("angular2-modal/plugins/bootstrap");
var login_component_1 = require("./login.component");
var templateforms_component_1 = require("./templateforms.component");
var customer_1 = require("./customer");
var child1_component_1 = require("./../shared/child1.component");
var child2_component_1 = require("./../shared/child2.component");
var ParentComponent = (function () {
    function ParentComponent(vcRef, modal, componentFactoryResolver) {
        var _this = this;
        this.modal = modal;
        this.componentFactoryResolver = componentFactoryResolver;
        this.state = 'active';
        this.htmlSnippet = '<p>paragraph</p>';
        this.model = new customer_1.Customer(1, 'Mitul', 'Gandhi', 'xyz@gmail.com', 28);
        modal.overlay.defaultViewContainer = vcRef;
        var child1Component = this.componentFactoryResolver.resolveComponentFactory(child1_component_1.Child1Component);
        var child2Component = this.componentFactoryResolver.resolveComponentFactory(child2_component_1.Child2Component);
        setTimeout(function () {
            _this.parent.createComponent(child1Component);
            setTimeout(function () {
                _this.parent.createComponent(child2Component);
            }, 1000);
        }, 1000);
    }
    ParentComponent.prototype.getChildProp = function () {
        this.childComp.getChildProp();
    };
    ParentComponent.prototype.ngOnChanges = function () {
        alert("vxvxvxvxv");
    };
    ParentComponent.prototype.applyAnimation = function () {
        this.state = this.state === 'active' ? 'inactive' : 'active';
    };
    ParentComponent.prototype.openPopUP = function () {
        return this.modal.open(login_component_1.LoginModal, angular2_modal_1.overlayConfigFactory({}, bootstrap_1.BSModalContext));
    };
    ParentComponent.prototype.openTemplateForms = function () {
        return this.modal.open(templateforms_component_1.TemplateFormsModal, angular2_modal_1.overlayConfigFactory({}, bootstrap_1.BSModalContext));
    };
    return ParentComponent;
}());
__decorate([
    core_1.ViewChild(child_component_1.ChildComponent),
    __metadata("design:type", child_component_1.ChildComponent)
], ParentComponent.prototype, "childComp", void 0);
__decorate([
    core_1.ViewChild('parent', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], ParentComponent.prototype, "parent", void 0);
ParentComponent = __decorate([
    core_1.Component({
        selector: 'parent-comp',
        template: "\n        <button (click)=\"openPopUP()\">Open Pop UP</button>\n\n        <button (click)=\"openTemplateForms()\">Template Driven Forms</button>\n\n        <h3>Reference child component properties</h3>\n        <button (click)=\"childComp.getChildProp()\">Access child component properties using ref variable</button>\n        <br/>\n        <button (click)=\"getChildProp()\">Access child component properties using viewchild directive</button>\n        <child-comp #childComp></child-comp>\n        <div my-highlight>Hightlight this div content hightlight directive</div>\n        <div [@applyAnimation]=\"state\" (click)=\"applyAnimation()\">Apply animations</div>\n\n         <input #box (keyup.enter)=\"onEnter(box.value)\">\n\n         <h3>Binding innerHTML</h3>\n        <p>Bound value:</p>\n        <p class=\"e2e-inner-html-interpolated\">{{htmlSnippet}}</p>\n        <p>Result of binding to innerHTML:</p>\n        <p class=\"e2e-inner-html-bound\" [innerHTML]=\"htmlSnippet\"></p>\n\n        {{testobj?.prop1}}\n\n         <div #parent></div>\n\n    ",
        styles: [':host { display: block; border: 1px solid black; }'],
        animations: [
            core_1.trigger('applyAnimation', [
                core_1.state('active', core_1.style({
                    background: 'red'
                })),
                core_1.state('inactive', core_1.style({
                    background: 'blue'
                })),
                core_1.transition('active => inactive', core_1.animate('100ms')),
                core_1.transition('inactive => active', core_1.animate('100ms'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [core_1.ViewContainerRef, bootstrap_1.Modal, core_1.ComponentFactoryResolver])
], ParentComponent);
exports.ParentComponent = ParentComponent;
//# sourceMappingURL=parent.component.js.map