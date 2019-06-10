import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, ThemePalette} from '@angular/material';

export interface MatRadioDialogData {
  title?: string;
  icon?: string;
  color?: ThemePalette;
  textButton?: string;
  options: { value: any; viewValue?: string }[];
}

@Component({
  selector: 'mat-radio-dialog',
  templateUrl: './mat-radio-dialog.component.html',
  styleUrls: ['./mat-radio-dialog.component.scss']
})
export class MatRadioDialog implements OnInit {

  title: string;
  icon: string;
  color: ThemePalette;
  textButton: string;
  options: { value: any; viewValue?: string }[];

  constructor(public dialogRef: MatDialogRef<MatRadioDialog>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: MatRadioDialogData) {
  }

  ngOnInit() {
    if (this.data) {
      this.title = this.data.title ? this.data.title : 'Options';
      this.icon = this.data.icon ? this.data.icon : '';
      this.color = this.data.color ? this.data.color : 'primary';
      this.textButton = this.data.textButton ? this.data.textButton : 'OK';
      this.options = this.data.options ? this.data.options : null;
    }
  }

}
