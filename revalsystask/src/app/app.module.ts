import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecimalOnlyDirective } from './directives/decimal.directive';
import { NumberOnlyDirective } from './directives/number.directive';

@NgModule({
  declarations: [
    AppComponent, NumberOnlyDirective, DecimalOnlyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
