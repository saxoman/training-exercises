import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { AdministrationComponent } from '@app/administration/administration.component';
import { Shell } from '@app/shell/shell.service';
import { ProductComponent } from '@app/administration/product/product.component';
import { AllProductsComponent } from '@app/administration/all-products/all-products.component';
import { NewProductComponent } from '@app/administration/new-product/new-product.component';
const routes: Routes = [
  Shell.childRoutes([
    { path: '', component: AdministrationComponent, pathMatch: 'full', data: { title: marker('Administration') } },
    {
      path: 'administration',
      component: AllProductsComponent,
      data: { title: marker('Administration | New Product') },
    },
    {
      path: 'administration/new-product',
      component: NewProductComponent,
      data: { title: marker('Administration | New Product') },
    },
    {
      path: 'administration/new-product/:id',
      component: NewProductComponent,
      data: { title: marker('Administration | New Product') },
    },
  ]),
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationRoutingModule {}
