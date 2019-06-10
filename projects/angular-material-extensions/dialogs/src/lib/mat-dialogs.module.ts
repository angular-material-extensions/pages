import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatAlertDialog} from './mat-alert-dialog/mat-alert-dialog.component';
import {MatAsyncDialog} from './mat-async-dialog/mat-async-dialog.component';
import {MatConfirmDialog} from './mat-confirm-dialog/mat-confirm-dialog.component';
import {MatInputDialog} from './mat-input-dialog/mat-input-dialog.component';
import {MatLoadingDialog} from './mat-loading-dialog/mat-loading-dialog.component';
import {MatRadioDialog} from './mat-radio-dialog/mat-radio-dialog.component';
import {MatSelectDialog} from './mat-select-dialog/mat-select-dialog.component';
import {MatTimerDialog} from './mat-timer-dialog/mat-timer-dialog.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';


// Export module's public API
export {MatAlertDialog} from './mat-alert-dialog/mat-alert-dialog.component';
export {MatAsyncDialog} from './mat-async-dialog/mat-async-dialog.component';
export {MatConfirmDialog} from './mat-confirm-dialog/mat-confirm-dialog.component';
export {MatInputDialog} from './mat-input-dialog/mat-input-dialog.component';
export {MatLoadingDialog} from './mat-loading-dialog/mat-loading-dialog.component';
export {MatRadioDialog} from './mat-radio-dialog/mat-radio-dialog.component';
export {MatSelectDialog} from './mat-select-dialog/mat-select-dialog.component';
export {MatTimerDialog} from './mat-timer-dialog/mat-timer-dialog.component';


export const dialogs = [
  MatAlertDialog,
  MatAsyncDialog,
  MatConfirmDialog,
  MatInputDialog,
  MatLoadingDialog,
  MatRadioDialog,
  MatSelectDialog,
  MatTimerDialog,
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule
  ],
  exports: [...dialogs, MatDialogModule, FlexLayoutModule],
  entryComponents: [...dialogs],
  declarations: [...dialogs]
})
export class MatDialogsModule {
}
