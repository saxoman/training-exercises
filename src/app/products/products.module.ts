import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';
import { ProductsRoutingModule } from '@app/products/products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { FilterByNamePipe } from '@shared/filter-by-name.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsComponent, ProductsListComponent, FilterByNamePipe],
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    ProductsRoutingModule,
    FormsModule,
  ],
})
export class ProductsModule {}
