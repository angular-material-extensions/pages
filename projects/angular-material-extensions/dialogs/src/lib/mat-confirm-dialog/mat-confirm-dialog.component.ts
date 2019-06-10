import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

export interface MatConfirmDialogData {
  title?: string;
  confirmMessage: string;
  confirmTextButton?: string;
  cancelTextButton?: string;
}

@Component({
  selector: 'mat-confirm-dialog',
  templateUrl: './mat-confirm-dialog.component.html',
  styleUrls: ['./mat-confirm-dialog.component.scss']
})
export class MatConfirmDialog implements OnInit {

  title: string;
  confirmMessage: string;
  confirmTextButton: string;
  cancelTextButton: string;

  constructor(public dialogRef: MatDialogRef<MatConfirmDialog>,
              @Inject(MAT_DIALOG_DATA) public data: MatConfirmDialogData) {
  }

  ngOnInit() {
    if (this.data) {
      this.title = this.data.title ? this.data.title : 'Confirm';
      this.confirmMessage = this.data.confirmMessage ? this.data.confirmMessage : 'Are you sure ?';
      this.confirmTextButton = this.data.confirmTextButton ? this.data.confirmTextButton : 'Confirm';
      this.cancelTextButton = this.data.cancelTextButton ? this.data.cancelTextButton : 'Cancel';
    }
  }

}
