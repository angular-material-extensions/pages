import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DialogsPageComponent} from './dialogs-page.component';
import {SharedModule} from '@shared/shared.module';
import {MarkdownModule} from 'ngx-markdown';
import {DialogsPageRoutingModule} from './dialogs-page-routing.module';


@NgModule({
  declarations: [DialogsPageComponent],
  imports: [
    CommonModule,
    MarkdownModule.forChild(),
    SharedModule,
    DialogsPageRoutingModule,
  ]
})
export class DialogsPageModule {
}
