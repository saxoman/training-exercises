import { NgModule } from '@angular/core';
import { AdministrationRoutingModule } from '@app/administration/administration-routing.module';

import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';
import { AdministrationComponent } from './administration.component';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, FlexLayoutModule, MaterialModule, AdministrationRoutingModule],
  declarations: [AdministrationComponent],
})
export class AdministrationModule {}
