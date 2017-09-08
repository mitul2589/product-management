import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-guard.service';

import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';

import { SharedModule } from '../shared/shared.module';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

//import { AdditionCalculateWindow } from './custom-modal';

@NgModule({
  imports: [
    SharedModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id',
        canActivate: [ ProductDetailGuard],
        component: ProductDetailComponent
      }
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterPipe,
    //AdditionCalculateWindow
  ],
  providers: [
    ProductService,
    ProductDetailGuard
  ],
  //exports: [ProductListComponent]
  //entryComponents: [ AdditionCalculateWindow ]
})
export class ProductModule {}
