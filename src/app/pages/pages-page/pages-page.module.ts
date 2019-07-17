import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesPageComponent} from './pages-page.component';
import {MatPagesModule} from '@angular-material-extensions/pages';
import {PagesPageRoutingModule} from './pages-page-routing.module';
import {MarkdownModule} from 'ngx-markdown';
import {SharedModule} from '@shared/shared.module';


@NgModule({
  declarations: [PagesPageComponent],
  imports: [
    CommonModule,
    MarkdownModule.forChild(),
    SharedModule,
    PagesPageRoutingModule,
    MatPagesModule
  ]
})
export class PagesPageModule {
}
