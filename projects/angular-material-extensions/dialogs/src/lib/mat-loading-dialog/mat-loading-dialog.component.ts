import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, ThemePalette} from '@angular/material';

export interface MatLoadingDialogData {
  title?: string;
  icon?: string;
  color?: ThemePalette;
}

@Component({
  selector: 'mat-loading-dialog',
  templateUrl: './mat-loading-dialog.component.html',
  styleUrls: ['./mat-loading-dialog.component.scss']
})
export class MatLoadingDialog implements OnInit {

  title: string;
  icon: string;
  color: ThemePalette;

  constructor(public dialogRef: MatDialogRef<MatLoadingDialog>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: MatLoadingDialogData) {
  }

  ngOnInit() {
    if (this.data) {
      this.title = this.data.title ? this.data.title : 'Loading...';
      this.icon = this.data.icon ? this.data.icon : '';
      this.color = this.data.color ? this.data.color : 'primary';
    }
  }

}
