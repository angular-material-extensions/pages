import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {DialogsPageComponent} from './dialogs-page.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: DialogsPageComponent},
    ])
  ],
  exports: [RouterModule]
})
export class DialogsPageRoutingModule {
}
