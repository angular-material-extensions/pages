import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatSidenavModule,
  MatStepperModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';

import {MatPagesComponent} from './mat-pages.component';
import {MatPageLoaderComponent} from './mat-page-loader/mat-page-loader.component';
import {MatPageOutlookComponent} from './mat-page-outlook/mat-page-outlook.component';
import {MatPageContentComponent} from './mat-page-content/mat-page-content.component';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatStepperModule,
    MatButtonModule
  ],
  exports:
    [
      MatPagesComponent,
      MatPageLoaderComponent,
      MatPageOutlookComponent,
      MatPageContentComponent
    ],
  declarations: [
    MatPagesComponent,
    MatPageLoaderComponent,
    MatPageOutlookComponent,
    MatPageContentComponent
  ]
})
export class MatPagesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MatPagesModule,
      providers: []
    };
  }
}
