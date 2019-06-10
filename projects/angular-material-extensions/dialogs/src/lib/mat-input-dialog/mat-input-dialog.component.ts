import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, ThemePalette} from '@angular/material';

export interface MatInputDialogData {
  title?: string;
  color?: ThemePalette;
  icon?: string;
  appearance?: string;
  placeholder?: string;
  textButton?: string;
}

@Component({
  selector: 'mat-input-dialog',
  templateUrl: './mat-input-dialog.component.html',
  styleUrls: ['./mat-input-dialog.component.scss']
})
export class MatInputDialog implements OnInit {

  title: string;
  icon: string;
  color: ThemePalette;
  placeholder: string;
  textButton: string;

  constructor(public dialogRef: MatDialogRef<MatInputDialog>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: MatInputDialogData) {
  }

  ngOnInit() {
    if (this.data) {
      this.title = this.data.title ? this.data.title : 'Enter the data';
      this.icon = this.data.icon ? this.data.icon : 'edit';
      this.color = this.data.color ? this.data.color : 'primary';
      this.placeholder = this.data.placeholder ? this.data.placeholder : '';
      this.textButton = this.data.textButton ? this.data.textButton : 'Ok';
    }
  }

}
