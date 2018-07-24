import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[knifeNoSpaces]'
})
export class NoSpacesDirective {
  @HostListener('keydown', ['$event']) onKeyDown(e: KeyboardEvent): boolean {
    return !(e.keyCode === 32);
  }
}
