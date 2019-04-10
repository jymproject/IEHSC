import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductChangePage } from './product-change';

@NgModule({
  declarations: [
    ProductChangePage,
  ],
  imports: [
    IonicPageModule.forChild(ProductChangePage),
  ],
})
export class ProductChangePageModule {}
