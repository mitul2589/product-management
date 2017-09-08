import { Directive, ElementRef } from '@angular/core'

@Directive({
  selector: '[my-highlight]',
  
})

export class MyHighLightDirective {
  constructor(el: ElementRef) {
      el.nativeElement.style.backgroundColor = 'yellow';
  }
}