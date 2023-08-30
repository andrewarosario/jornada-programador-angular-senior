import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { productsRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(productsRoutes)],
})
export class ProductsModule {}
