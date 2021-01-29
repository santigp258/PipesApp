import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//personalizated module
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { SalesModule } from './sales/sales.module';

//change the locale app
import localeEs from "@angular/common/locales/es-CO";
import { registerLocaleData } from "@angular/common";

registerLocaleData(localeEs);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,  AppRouterModule, SharedModule, SalesModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-CO'
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
