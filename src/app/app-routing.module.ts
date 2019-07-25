import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('app/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'getting-started',
    loadChildren: () => import('app/getting-started/getting-started.module').then(m => m.GettingStartedModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
