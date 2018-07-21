import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgKnifeModule } from 'projects/ng-knife/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgKnifeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
