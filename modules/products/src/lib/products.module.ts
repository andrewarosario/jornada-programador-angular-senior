import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UiComponent } from 'modules/shared/ui';
import { productsRoutes } from './lib.routes';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productsRoutes),
    UiComponent,
    ReactiveFormsModule,
  ],
  declarations: [ProductListComponent],
})
export class ProductsModule {}
