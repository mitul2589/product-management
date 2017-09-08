"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var parent_component_1 = require("./parent.component");
var shared_module_1 = require("../shared/shared.module");
var highlight_directive_1 = require("../shared/highlight.directive");
var login_component_1 = require("./login.component");
var templateforms_component_1 = require("./templateforms.component");
var ParentModule = (function () {
    function ParentModule() {
    }
    return ParentModule;
}());
ParentModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild([
                { path: 'parent', component: parent_component_1.ParentComponent }
            ])
        ],
        declarations: [parent_component_1.ParentComponent, highlight_directive_1.MyHighLightDirective, login_component_1.LoginModal, templateforms_component_1.TemplateFormsModal],
        exports: [parent_component_1.ParentComponent],
        entryComponents: [login_component_1.LoginModal, templateforms_component_1.TemplateFormsModal]
    })
], ParentModule);
exports.ParentModule = ParentModule;
//# sourceMappingURL=parent.module.js.map