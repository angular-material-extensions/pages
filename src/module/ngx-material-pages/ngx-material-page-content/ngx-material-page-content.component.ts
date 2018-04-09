import {ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ngx-material-page-content',
  templateUrl: './ngx-material-page-content.component.html',
  styleUrls: ['./ngx-material-page-content.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxMaterialPageContentComponent implements OnInit {

  /** Template for page content. */
  @ViewChild(TemplateRef) content: TemplateRef<any>;

  @Input()
  title: string;

  constructor() {
  }

  ngOnInit() {
  }

}
