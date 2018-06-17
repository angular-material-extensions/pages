import {AfterContentInit, Component, ContentChild, OnInit} from '@angular/core';
import {MatPageOutlookComponent} from '../mat-page-outlook/mat-page-outlook.component';
import {MatPageContentComponent} from '../mat-page-content/mat-page-content.component';

@Component({
  selector: 'mat-page-loader',
  templateUrl: './mat-page-loader.component.html',
  styleUrls: ['./mat-page-loader.component.scss']
})
export class MatPageLoaderComponent implements OnInit, AfterContentInit {

  @ContentChild(MatPageOutlookComponent) pageOutlook: MatPageOutlookComponent;
  @ContentChild(MatPageContentComponent) pageContent: MatPageContentComponent;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    console.log('pagesOutlook:', this.pageOutlook);
    console.log('pagesContent:', this.pageContent);
  }

}
