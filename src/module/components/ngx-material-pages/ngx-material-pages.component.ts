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
import {StepperSelectionEvent} from '@angular/cdk/stepper';

@Component({
  selector: 'ngx-material-pages',
  templateUrl: './ngx-material-pages.component.html',
  styleUrls: ['./ngx-material-pages.component.scss'],
})
export class NgxMaterialPagesComponent implements OnInit, AfterContentInit {

  @ContentChildren(NgxMaterialPageLoaderComponent) pages: QueryList<NgxMaterialPageLoaderComponent>;

  // current page
  index: number;

  // the total number of pages to render
  totalPages: number;

  constructor() {
    this.index = 0;
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log('pagesOutlook', this.pages);
    this.totalPages = this.pages.length;
  }

  /**
   * Go to the previous page if it exists
   */
  previous() {
    console.log('index before', this.index);
    this.index = this.index === 0 ? 0 : --this.index;
    console.log('index after', this.index);
  }

  /**
   * Go to the next page if it exists
   */
  next() {
    console.log('index before', this.index);
    this.index = this.index === this.totalPages - 1 ? this.totalPages - 1 : ++this.index;
    console.log('index after', this.index);
  }

  onStepSelectionChange(event: StepperSelectionEvent) {
    console.log('event = ', event);
    this.index = event.selectedIndex;
  }

}
