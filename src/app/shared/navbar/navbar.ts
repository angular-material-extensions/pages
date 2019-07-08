import {Component, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {RouterModule} from '@angular/router';
// import {ThemePickerModule} from '../theme-picker/theme-picker';
// import {SECTIONS} from '../documentation-items/documentation-items';
export const SECTIONS: { [key: string]: any } = {
  ['components']: {
    name: 'Components',
    summary: 'Angular Material comprises a range of components which implement common ' +
      'interaction patterns according to the Material Design specification.'
  },
  ['cdk']: {
    name: 'CDK',
    summary: 'The Component Dev Kit (CDK) is a set of tools that implement common interaction ' +
      'patterns whilst being unopinionated about their presentation. It represents an abstraction ' +
      'of the core functionalities found in the Angular Material library, without any styling ' +
      'specific to Material Design. Think of the CDK as a blank state of well-tested functionality ' +
      'upon which you can develop your own bespoke components.'
  },
};
const SECTIONS_KEYS = Object.keys(SECTIONS);

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
// tslint:disable-next-line:component-class-suffix
export class NavBar {
  isNextVersion = location.hostname.startsWith('next.material.angular.io');

  get sections() {
    return SECTIONS;
  }

  get sectionKeys() {
    return SECTIONS_KEYS;
  }
}

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    // ThemePickerModule,
    CommonModule
  ],
  exports: [NavBar],
  declarations: [NavBar],
})
export class NavBarModule {
}
