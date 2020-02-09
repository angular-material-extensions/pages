import {ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'mat-page-outlook',
  templateUrl: './mat-page-outlook.component.html',
  styleUrls: ['./mat-page-outlook.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class MatPageOutlookComponent implements OnInit {

  /** Template for page outlook content. */
  @ViewChild(TemplateRef) content: TemplateRef<any>;

  @Input()
  title: string;

  constructor() {
  }

  ngOnInit() {
  }

}
