import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiComponent } from 'modules/shared/ui';
import { ordersRoutes } from './lib.routes';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ordersRoutes), UiComponent],
  declarations: [OrderListComponent],
})
export class OrdersModule {}
