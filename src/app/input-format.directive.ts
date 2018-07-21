import { Directive, HostListener, ElementRef, ViewEncapsulation, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format;
  constructor(private el:ElementRef) { 

  }
  
  @HostListener('focus') onfocus(){
    console.log("On focus");
    
  }

  @HostListener('blur') onblur(){
    let value: string = this.el.nativeElement.value;
    if(this.format == 'lowercase'){
      this.el.nativeElement.value = value.toLocaleLowerCase();
    }else{
      this.el.nativeElement.value = value.toUpperCase();
    }
    
    
    console.log('On Blur');
    
  }
  

}