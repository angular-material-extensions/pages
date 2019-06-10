import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, ThemePalette} from '@angular/material';

export interface MatSelectDialogData {
  title?: string;
  icon?: string;
  color?: ThemePalette;
  textButton?: string;
  options: { value: any; viewValue?: string }[];
}

@Component({
  selector: 'mat-select-dialog',
  templateUrl: './mat-select-dialog.component.html',
  styleUrls: ['./mat-select-dialog.component.scss']
})
export class MatSelectDialog implements OnInit {

  title: string;
  icon: string;
  color: ThemePalette;
  textButton?: string;
  options: { value: any; viewValue?: string }[];

  constructor(public dialogRef: MatDialogRef<MatSelectDialog>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: MatSelectDialogData) {
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
