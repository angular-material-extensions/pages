import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {PagesPageComponent} from './pages-page.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: PagesPageComponent},
    ])
  ],
  exports: [RouterModule]
})
export class PagesPageRoutingModule {
}
