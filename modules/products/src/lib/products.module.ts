import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { productsRoutes } from './lib.routes';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(productsRoutes)],
  declarations: [ProductListComponent],
})
export class ProductsModule {}
