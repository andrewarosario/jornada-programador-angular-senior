import { Route } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

export const productsRoutes: Route[] = [
  { path: '', component: ProductListComponent },
];
