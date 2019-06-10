import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, ThemePalette} from '@angular/material';

export interface MatAsyncDialogData {
  title?: string;
  icon?: string;
  color?: ThemePalette;
}

@Component({
  selector: 'mat-async-dialog',
  templateUrl: './mat-async-dialog.component.html',
  styleUrls: ['./mat-async-dialog.component.scss']
})
export class MatAsyncDialog implements OnInit {

  title: string;
  icon: string;
  color: ThemePalette;

  constructor(public dialogRef: MatDialogRef<MatAsyncDialog>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: MatAsyncDialogData) {
  }

  ngOnInit() {
    if (this.data) {
      this.title = this.data.title ? this.data.title : 'Loading...';
      this.icon = this.data.icon ? this.data.icon : '';
      this.color = this.data.color ? this.data.color : 'primary';
    }
  }

}
