import { NgModule } from '@angular/core';
import { NoSpacesDirective } from './directives/no-spaces.directive';
import { NoCopyPasteDirective } from './directives/no-copy-paste.directive';
import { AlphanumericDirective } from './directives/alphanumeric.directive';

@NgModule({
  imports: [
  ],
  declarations: [
    NoSpacesDirective,
    NoCopyPasteDirective,
    AlphanumericDirective
  ],
  exports: [
    NoSpacesDirective,
    NoCopyPasteDirective,
    AlphanumericDirective
  ]
})
export class NgKnifeModule { }
