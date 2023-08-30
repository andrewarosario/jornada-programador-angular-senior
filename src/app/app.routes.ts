import { Route } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: HelloWorldComponent,
  },
  {
    path: 'products',
    loadChildren: () =>
      import('modules/products').then((m) => m.ProductsModule),
  },
  {
    path: 'orders',
    loadChildren: () => import('modules/orders').then((m) => m.OrdersModule),
  },
];
