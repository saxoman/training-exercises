import { NgModule } from '@angular/core';
import { AdministrationRoutingModule } from '@app/administration/administration-routing.module';

import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';
import { AdministrationComponent } from './administration.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { DeleteConfirmationModalComponent } from './delete-confirmation-modal/delete-confirmation-modal.component';
import { NewProductComponent } from './new-product/new-product.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    AdministrationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AdministrationComponent,
    AllProductsComponent,
    ProductComponent,
    DeleteConfirmationModalComponent,
    NewProductComponent,
  ],
})
export class AdministrationModule {}
