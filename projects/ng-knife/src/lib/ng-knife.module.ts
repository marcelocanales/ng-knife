import { NgModule } from '@angular/core';
import { NoSpacesDirective } from './directives/no-spaces.directive';
import { NoCopyPasteDirective } from './directives/no-copy-paste.directive';
import { AlphanumericDirective } from './directives/alphanumeric.directive';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';

@NgModule({
  imports: [
  ],
  declarations: [
    NoSpacesDirective,
    NoCopyPasteDirective,
    AlphanumericDirective,
    OnlyNumbersDirective
  ],
  exports: [
    NoSpacesDirective,
    NoCopyPasteDirective,
    AlphanumericDirective,
    OnlyNumbersDirective
  ]
})
export class NgKnifeModule { }
