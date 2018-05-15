import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxMaterialPagesModule} from 'ngx-material-pages';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {DisqusModule} from 'ngx-disqus';
import {MatCardModule, MatSnackBar, MatSnackBarModule, MatTabsModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    NgxMaterialPagesModule.forRoot(),
    DisqusModule.forRoot('ngx-material-pages'),
    HomeRoutingModule,
    MatCardModule,
    MatTabsModule,
    MatSnackBarModule
  ],
  declarations: [HomeComponent],
})
export class HomeModule {


  constructor() {
  }
}
