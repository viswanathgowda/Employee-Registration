import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[numbersOnly]'
})
export class NumberOnlyDirective {

  private regex: RegExp = new RegExp('^[0-9]*$');  // integer
  private specialKeys: Array<string> = ['Backspace', 'ArrowLeft', 'ArrowRight' , 'Tab'];
  constructor(private elementRef: ElementRef) { }

  @HostListener('keydown', ['$event'])onKeyDown(event: KeyboardEvent) {
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    const inputValue: string = this.elementRef.nativeElement.value.concat(event.key);
    if (inputValue && !String(inputValue).match(this.regex)) {
      event.preventDefault();
    }

    return;
  }


  @HostListener('paste', ['$event']) onPaste(event:any) {
      const clipboardData = (event.originalEvent || event).clipboardData.getData('text/plain');
      if (clipboardData) {
          const regEx = new RegExp('^[0-9]*$');
          if (!regEx.test(clipboardData)) {
              event.preventDefault();
          }
      }
      return;
  }
}