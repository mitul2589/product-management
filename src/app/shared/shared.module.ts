import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './star.component';

import { ChildComponent } from './child.component';

@NgModule({
  imports: [ CommonModule ],
  exports : [
    CommonModule,
    FormsModule,
    StarComponent,
    ChildComponent
  ],
  declarations: [ StarComponent, ChildComponent ],
  
})
export class SharedModule { }
