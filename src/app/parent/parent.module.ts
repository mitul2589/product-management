import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { ParentComponent } from './parent.component'
import { SharedModule } from '../shared/shared.module';
import { MyHighLightDirective } from '../shared/highlight.directive'
import { LoginModal } from './login.component'
import { TemplateFormsModal } from './templateforms.component'

@NgModule({
    imports: [
       SharedModule,
       RouterModule.forChild([
           { path: 'parent', component: ParentComponent }
       ])
    ],
    declarations: [ ParentComponent, MyHighLightDirective, LoginModal, TemplateFormsModal ],
    exports: [ ParentComponent ],
    entryComponents: [ LoginModal, TemplateFormsModal ]
})

export class ParentModule {}