import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatPagesModule} from '@angular-material-extensions/pages';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {DisqusModule} from 'ngx-disqus';
import {MatCardModule, MatSnackBarModule, MatTabsModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatPagesModule.forRoot(),
    DisqusModule.forRoot('@angular-material-extensions/pages'),
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
