import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { LoaderComponent } from './loader/loader.component';
import { FilterByNamePipe } from './filter-by-name.pipe';

@NgModule({
  imports: [FlexLayoutModule, MaterialModule, TranslateModule, CommonModule],
  declarations: [LoaderComponent, FilterByNamePipe],
  exports: [LoaderComponent, FilterByNamePipe],
})
export class SharedModule {}
