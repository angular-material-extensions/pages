import {Routes} from '@angular/router';
import {Homepage} from './pages/homepage';

export const ANGULAR_MATERIAL_EXTENSIONS_ROUTES: Routes =
  [
    {path: '', component: Homepage, pathMatch: 'full', data: {}},
    {path: '**', redirectTo: ''},
  ];
