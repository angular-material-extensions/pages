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

import {MatPagesComponent} from './components/ngx-material-pages/mat-pages.component';
import {
  MatPageLoaderComponent
} from './components/ngx-material-pages/mat-page-loader/mat-page-loader.component';
import {
  MatPageOutlookComponent
} from './components/ngx-material-pages/mat-page-outlook/mat-page-outlook.component';
import {
  MatPageContentComponent
} from './components/ngx-material-pages/mat-page-content/mat-page-content.component';

// Export module's public API
export {MatPagesComponent} from './components/ngx-material-pages/mat-pages.component';
export {MatPageLoaderComponent} from './components/ngx-material-pages/mat-page-loader/mat-page-loader.component';
export {
  MatPageOutlookComponent
}from './components/ngx-material-pages/mat-page-outlook/mat-page-outlook.component';
export {
  MatPageContentComponent
}from './components/ngx-material-pages/mat-page-content/mat-page-content.component';

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
