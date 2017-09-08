import { Component } from '@angular/core'

@Component({
   selector: 'child-comp',
   template: ''
})

export class ChildComponent {
   childProp1: string = 'Child Property1';
   getChildProp(): void {
       alert(this.childProp1);
   }
}