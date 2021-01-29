import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';



@NgModule({
  declarations: [NumbersComponent, NotCommonsComponent, BasicsComponent, OrderComponent],
  exports: [NumbersComponent, NotCommonsComponent, BasicsComponent, OrderComponent],
  imports: [
    CommonModule
  ]
})
export class SalesModule { }
