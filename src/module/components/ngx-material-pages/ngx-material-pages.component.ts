import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  forwardRef,
  OnInit,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import {NgxMaterialPageLoaderComponent} from './ngx-material-page-loader/ngx-material-page-loader.component';

@Component({
  selector: 'ngx-material-pages',
  templateUrl: './ngx-material-pages.component.html',
  styleUrls: ['./ngx-material-pages.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxMaterialPagesComponent implements OnInit, AfterContentInit {

  @ContentChildren(NgxMaterialPageLoaderComponent) pages: QueryList<NgxMaterialPageLoaderComponent>;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log('pagesOutlook', this.pages);
  }

}
