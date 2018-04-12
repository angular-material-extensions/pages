import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren, EventEmitter,
  forwardRef, HostListener, Input,
  OnInit, Output,
  QueryList, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {NgxMaterialPageLoaderComponent} from './ngx-material-page-loader/ngx-material-page-loader.component';
import {StepperSelectionEvent} from '@angular/cdk/stepper';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'ngx-material-pages',
  templateUrl: './ngx-material-pages.component.html',
  styleUrls: ['./ngx-material-pages.component.scss']
})
export class NgxMaterialPagesComponent implements OnInit, AfterContentInit {

  @ViewChild('sidenav')
  sidenav: MatSidenav;

  @ContentChildren(NgxMaterialPageLoaderComponent)
  pages: QueryList<NgxMaterialPageLoaderComponent>;

  @Input()
  title: string;

  @Output()
  done: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  pageChanged: EventEmitter<number> = new EventEmitter<number>();

  // the mode of the sidenav
  navMode = 'side';

  // current page
  index: number;

  // the total number of pages to render
  totalPages: number;

  constructor() {
    this.index = 0;
  }

  private _initSidenavMode(): void {
    if (window.innerWidth < 768) {
      this.navMode = 'over';
    }
  }

  ngOnInit() {
    this._initSidenavMode();
  }

  ngAfterContentInit() {
    this.totalPages = this.pages.length;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth < 768) {
      this.navMode = 'over';
      this.sidenav.close();
    }
    if (event.target.innerWidth > 768) {
      this.navMode = 'side';
      this.sidenav.open();
    }
  }

  /**
   * Go to the previous page if it exists
   */
  previous() {
    this.index = this.index === 0 ? 0 : --this.index;
    this.pageChanged.emit(this.index);
  }

  /**
   * Go to the next page if it exists
   */
  next() {
    this.index = this.index === this.totalPages - 1 ? this.totalPages - 1 : ++this.index;
    this.pageChanged.emit(this.index);
  }


  /**
   * Update the value of the index when a step has been selected.
   * Emit this value for pagechanged's subscribers.
   *
   */
  onStepSelectionChange(event: StepperSelectionEvent) {
    this.index = event.selectedIndex;
    this.pageChanged.emit(this.index);
  }

}
