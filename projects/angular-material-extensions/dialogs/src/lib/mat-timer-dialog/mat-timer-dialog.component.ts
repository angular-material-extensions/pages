import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, ThemePalette} from '@angular/material';

export interface MatTimerDialogData {
  title?: string;
  icon?: string;
  color?: ThemePalette;
}

@Component({
  selector: 'mat-timer-dialog',
  templateUrl: './mat-timer-dialog.component.html',
  styleUrls: ['./mat-timer-dialog.component.scss']
})
export class MatTimerDialog implements OnInit {

  title: string;
  icon: string;
  color: ThemePalette;

  constructor(public dialogRef: MatDialogRef<MatTimerDialog>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: MatTimerDialogData) {
  }

  ngOnInit() {
    if (this.data) {
      this.title = this.data.title ? this.data.title : 'Loading...';
      this.icon = this.data.icon ? this.data.icon : '';
      this.color = this.data.color ? this.data.color : 'primary';
    }
  }

}
