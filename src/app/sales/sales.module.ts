import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { FlyPipe } from './pipes/fly.pipe';
import { OrderPipe } from './pipes/order.pipe';

@NgModule({
  declarations: [
    NumbersComponent,
    NotCommonsComponent,
    BasicsComponent,
    OrderComponent,
    UppercasePipe,

    //pipes
    FlyPipe,
    OrderPipe,
  ],
  exports: [
    NumbersComponent,
    NotCommonsComponent,
    BasicsComponent,
    OrderComponent,
  ],
  imports: [CommonModule, PrimeNgModule],
})
export class SalesModule {}
