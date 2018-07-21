import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[knifeNoSpaces]'
})
export class NoCopyPasteDirective {

  @HostListener('copy', ['$event']) noCopy(e): boolean {
    return false;
  }
  @HostListener('paste', ['$event']) noPaste(e): boolean {
    return false;
  }
  @HostListener('cut', ['$event']) noCut(e): boolean {
    return false;
  }
}
