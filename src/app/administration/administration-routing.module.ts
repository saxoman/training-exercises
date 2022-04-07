import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { AdministrationComponent } from '@app/administration/administration.component';
import { Shell } from '@app/shell/shell.service';
import { AboutComponent } from '@app/about/about.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'administration', component: AdministrationComponent, data: { title: marker('Administration') } },
  ]),
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationRoutingModule {}
