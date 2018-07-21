import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[knifeAlphanumeric]'
})
export class AlphanumericDirective {

  @HostListener('keydown', ['$event']) onKeyDown(e: KeyboardEvent): boolean {
    return (e.code === 'Space' ? true : (new RegExp('[a-zA-Z0-9]')).test(e.key));
  }

}
