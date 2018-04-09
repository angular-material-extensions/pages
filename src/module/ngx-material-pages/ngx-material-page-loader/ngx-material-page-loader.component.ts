import {Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {NgxMaterialPageOutlookComponent} from '../ngx-material-page-outlook/ngx-material-page-outlook.component';
import {NgxMaterialPageContentComponent} from '../ngx-material-page-content/ngx-material-page-content.component';

@Component({
  selector: 'ngx-material-page-loader',
  templateUrl: './ngx-material-page-loader.component.html',
  styleUrls: ['./ngx-material-page-loader.component.scss']
})
export class NgxMaterialPageLoaderComponent implements OnInit {

  @ContentChildren(NgxMaterialPageOutlookComponent) pagesOutlook: QueryList<NgxMaterialPageOutlookComponent>;
  @ContentChildren(NgxMaterialPageContentComponent) pagesContent: QueryList<NgxMaterialPageContentComponent>;

  constructor() {
  }

  ngOnInit() {
  }

}
