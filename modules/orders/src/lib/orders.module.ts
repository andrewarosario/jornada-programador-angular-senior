import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ordersRoutes } from './lib.routes';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ordersRoutes)],
  declarations: [OrderListComponent],
})
export class OrdersModule {}
