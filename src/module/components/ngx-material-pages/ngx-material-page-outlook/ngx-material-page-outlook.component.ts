import {ChangeDetectionStrategy, Component, Directive, forwardRef, OnInit, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'ngx-material-page-outlook',
  templateUrl: './ngx-material-page-outlook.component.html',
  styleUrls: ['./ngx-material-page-outlook.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class NgxMaterialPageOutlookComponent implements OnInit {

  /** Template for page outlook content. */
  @ViewChild(TemplateRef) content: TemplateRef<any>;

  constructor() {
  }

  ngOnInit() {
  }

}
