import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//personalizated module
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { SalesModule } from './sales/sales.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,  AppRouterModule, SharedModule, SalesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
