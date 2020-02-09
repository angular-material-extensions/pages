import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'mat-page-content',
  templateUrl: './mat-page-content.component.html',
  styleUrls: ['./mat-page-content.component.scss'],

})
export class MatPageContentComponent implements OnInit {

  /** Template for page content. */
  @ViewChild(TemplateRef) content: TemplateRef<any>;

  @Input()
  title: string;

  constructor() {
  }

  ngOnInit() {
  }

}
