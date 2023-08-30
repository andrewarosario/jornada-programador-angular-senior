import { Route } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';

export const ordersRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: OrderListComponent },
];
