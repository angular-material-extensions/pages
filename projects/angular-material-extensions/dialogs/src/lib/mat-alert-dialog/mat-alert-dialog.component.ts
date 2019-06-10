import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

export type AlertType = 'primary' | 'accent' | 'warn';

export interface MatAlertDialogData {
  title?: string;
  icon?: string;
  type?: string;
  message: string;
  okTextButton?: string;
}

@Component({
  selector: 'mat-alert-dialog',
  templateUrl: './mat-alert-dialog.component.html',
  styleUrls: ['./mat-alert-dialog.component.scss']
})
export class MatAlertDialog implements OnInit {

  title: string;
  icon: string;
  type: string;
  message: string;
  okTextButton: string;

  constructor(public dialogRef: MatDialogRef<MatAlertDialog>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: MatAlertDialogData) {
  }

  ngOnInit() {
    if (this.data) {
      this.title = this.data.title ? this.data.title : 'Alert';
      this.icon = this.data.icon ? this.data.icon : 'warning';
      this.type = this.data.type ? this.data.type : 'warn';
      this.message = this.data.message ? this.data.message : 'Cancel';
      this.okTextButton = this.data.okTextButton ? this.data.okTextButton : 'Ok';
    }
  }

}
