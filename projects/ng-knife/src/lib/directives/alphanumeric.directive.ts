import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[knifeAlphanumeric]'
})
export class AlphanumericDirective {

  @HostListener('keydown', ['$event']) onKeyDown(e: KeyboardEvent): boolean {
    return (e.keyCode === 8 || e.keyCode === 32 || e.keyCode === 37 || e.keyCode === 39)
    ? true : (new RegExp('^[a-zA-Z0-9_]*$')).test(e.key);
  }

}
