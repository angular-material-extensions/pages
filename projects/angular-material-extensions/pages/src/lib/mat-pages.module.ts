import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import {MatPagesComponent} from './mat-pages.component';
import {MatPageLoaderComponent} from './mat-page-loader/mat-page-loader.component';
import {MatPageContentComponent} from './mat-page-content/mat-page-content.component';
import {MatPageOutlookComponent} from './mat-page-outlook/mat-page-outlook.component';


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
  static forRoot(): ModuleWithProviders<MatPagesModule> {
    return {
      ngModule: MatPagesModule,
      providers: []
    };
  }
}
