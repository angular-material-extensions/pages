import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';

import {LibComponent} from './component/lib.component';
import {LibService} from './service/lib.service';
import {NgxMaterialPagesComponent} from './components/ngx-material-pages/ngx-material-pages.component';
import {NgxMaterialPageLoaderComponent} from './components/ngx-material-pages/ngx-material-page-loader/ngx-material-page-loader.component';
import {NgxMaterialPageOutlookComponent} from './components/ngx-material-pages/ngx-material-page-outlook/ngx-material-page-outlook.component';
import {NgxMaterialPageContentComponent} from './components/ngx-material-pages/ngx-material-page-content/ngx-material-page-content.component';
import {MatIconModule, MatSidenavModule, MatStepperModule, MatTabsModule} from '@angular/material';

// Export module's public API
export {LibComponent} from './component/lib.component';
export {NgxMaterialPagesComponent} from './components/ngx-material-pages/ngx-material-pages.component';
export {NgxMaterialPageLoaderComponent} from './components/ngx-material-pages/ngx-material-page-loader/ngx-material-page-loader.component';
export {
  NgxMaterialPageOutlookComponent
}from './components/ngx-material-pages/ngx-material-page-outlook/ngx-material-page-outlook.component';
export {
  NgxMaterialPageContentComponent
}from './components/ngx-material-pages/ngx-material-page-content/ngx-material-page-content.component';
export {LibService} from './service/lib.service';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatSidenavModule,
    MatStepperModule,
  ],
  exports:
    [
      LibComponent,
      NgxMaterialPagesComponent,
      NgxMaterialPageLoaderComponent,
      NgxMaterialPageOutlookComponent,
      NgxMaterialPageContentComponent
    ],
  declarations: [
    LibComponent,
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
      providers: [LibService]
    };
  }
}
