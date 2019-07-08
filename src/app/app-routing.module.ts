import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ANGULAR_MATERIAL_EXTENSIONS_ROUTES} from './routes';


@NgModule({
  imports: [RouterModule.forRoot(ANGULAR_MATERIAL_EXTENSIONS_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
