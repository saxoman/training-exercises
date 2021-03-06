import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { Shell } from '@app/shell/shell.service';

import { ProductsListComponent } from '@app/products/products-list/products-list.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'products/products-list', component: ProductsListComponent, data: { title: marker('Products list') } },
  ]),
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
