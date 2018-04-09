import {AfterContentInit, Component, ContentChild, ContentChildren, OnInit, QueryList, TemplateRef, ViewChild} from '@angular/core';
import {NgxMaterialPageOutlookComponent} from '../ngx-material-page-outlook/ngx-material-page-outlook.component';
import {NgxMaterialPageContentComponent} from '../ngx-material-page-content/ngx-material-page-content.component';

@Component({
  selector: 'ngx-material-page-loader',
  templateUrl: './ngx-material-page-loader.component.html',
  styleUrls: ['./ngx-material-page-loader.component.scss']
})
export class NgxMaterialPageLoaderComponent implements OnInit, AfterContentInit {

  @ContentChild(NgxMaterialPageOutlookComponent) pageOutlook: NgxMaterialPageOutlookComponent;
  @ContentChild(NgxMaterialPageContentComponent) pageContent: NgxMaterialPageContentComponent;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    console.log('pagesOutlook:', this.pageOutlook);
    console.log('pagesContent:', this.pageContent);
  }

}
