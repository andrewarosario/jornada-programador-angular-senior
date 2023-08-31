import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StarRatingComponent } from 'modules/shared/ui';
import { ordersRoutes } from './lib.routes';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ordersRoutes),
    StarRatingComponent,
    ReactiveFormsModule,
  ],
  declarations: [OrderListComponent],
})
export class OrdersModule {}
