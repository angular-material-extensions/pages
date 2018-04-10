import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxMaterialPagesModule} from 'ngx-material-pages';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {DisqusModule} from 'ngx-disqus';

@NgModule({
  imports: [
    CommonModule,
    NgxMaterialPagesModule.forRoot(),
    DisqusModule.forRoot('ngx-material-pages'),
    HomeRoutingModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {
}
