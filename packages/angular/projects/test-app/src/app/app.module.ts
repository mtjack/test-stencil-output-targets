import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { Component2Module, SdsBtnModule, SdsIconModule, SdsSpinnerModule } from 'component-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Component2Module,
    SdsBtnModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
