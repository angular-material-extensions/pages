import {Component, NgModule, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {FooterModule} from '../../shared/footer/footer';
import {RouterModule} from '@angular/router';
import {ComponentPageTitle} from '../page-title/page-title';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.scss']
})
// tslint:disable-next-line:component-class-suffix
export class Homepage implements OnInit {
  isNextVersion = location.hostname.startsWith('next.material.angular.io');

  constructor(public componentPageTitle: ComponentPageTitle) {
  }

  ngOnInit(): void {
    this.componentPageTitle.title = '';
  }
}

@NgModule({
  imports: [MatButtonModule, FooterModule, RouterModule],
  exports: [Homepage],
  declarations: [Homepage],
})
export class HomepageModule {
}
