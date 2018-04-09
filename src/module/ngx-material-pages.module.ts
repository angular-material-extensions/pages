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

import {NgxMaterialPagesComponent} from './components/ngx-material-pages/ngx-material-pages.component';
import {
  NgxMaterialPageLoaderComponent
} from './components/ngx-material-pages/ngx-material-page-loader/ngx-material-page-loader.component';
import {
  NgxMaterialPageOutlookComponent
} from './components/ngx-material-pages/ngx-material-page-outlook/ngx-material-page-outlook.component';
import {
  NgxMaterialPageContentComponent
} from './components/ngx-material-pages/ngx-material-page-content/ngx-material-page-content.component';

// Export module's public API
export {NgxMaterialPagesComponent} from './components/ngx-material-pages/ngx-material-pages.component';
export {NgxMaterialPageLoaderComponent} from './components/ngx-material-pages/ngx-material-page-loader/ngx-material-page-loader.component';
export {
  NgxMaterialPageOutlookComponent
}from './components/ngx-material-pages/ngx-material-page-outlook/ngx-material-page-outlook.component';
export {
  NgxMaterialPageContentComponent
}from './components/ngx-material-pages/ngx-material-page-content/ngx-material-page-content.component';

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
      NgxMaterialPagesComponent,
      NgxMaterialPageLoaderComponent,
      NgxMaterialPageOutlookComponent,
      NgxMaterialPageContentComponent
    ],
  declarations: [
    NgxMaterialPagesComponent,
    NgxMaterialPageLoaderComponent,
    NgxMaterialPageOutlookComponent,
    NgxMaterialPageContentComponent
  ]
})
export class NgxMaterialPagesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxMaterialPagesModule,
      providers: []
    };
  }
}
