import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxMaterialPagesModule} from 'ngx-material-pages';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';

@NgModule({
  imports: [
    CommonModule,
    NgxMaterialPagesModule.forRoot(),
    HomeRoutingModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {
}
