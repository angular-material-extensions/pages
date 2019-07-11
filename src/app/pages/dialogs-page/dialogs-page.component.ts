import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {
  MatAlertDialog,
  MatAlertDialogData,
  MatConfirmDialog,
  MatConfirmDialogData,
  MatInputDialog,
  MatInputDialogData,
  MatAsyncDialog,
  MatAsyncDialogData,
  MatRadioDialog,
  MatRadioDialogData,
  MatSelectDialog,
  MatSelectDialogData
} from '@angular-material-extensions/dialogs';

@Component({
  selector: 'app-dialogs-page',
  templateUrl: './dialogs-page.component.html',
  styleUrls: ['./dialogs-page.component.scss']
})
export class DialogsPageComponent implements OnInit {

  shouldHide: boolean;

  defaultAlertDialogData: MatAlertDialogData = {
    message: 'This is a default alert dialog!',
  };

  primaryAlertDialogData: MatAlertDialogData = {
    title: 'Great Job!',
    message: 'You have succussfully signed in!',
    icon: 'account_circle',
    okTextButton: 'dismiss',
    type: 'primary'
  };

  accentAlertDialogData: MatAlertDialogData = {
    title: 'Woohoooo!',
    message: 'Your are now free :D! Please check the instructions to book a holiday!',
    icon: 'accessibility_new',
    type: 'accent'
  };

  warnAlertDialogData: MatAlertDialogData = {
    title: 'WARNING!',
    message: 'Your PC is infected!',
    icon: 'warning',
    type: 'warn'
  };

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  // editOnStackBlitz() {
  //   sdk.openGithubProject('angular-material-extensions/core/tree/master/demo');
  // }

  openAlertDialog(matAlertDialogData: MatAlertDialogData) {
    this.shouldHide = true;
    this.dialog
      .open(MatAlertDialog, {data: matAlertDialogData})
      .afterClosed()
      .subscribe(() => {
        console.log('alert -> dismissed');
        this.shouldHide = false;
      });

  }

  openConfirmDialog() {
    this.shouldHide = true;
    const matConfirmDialogData: MatConfirmDialogData = {
      confirmMessage: 'Are you sure you want to execute the following action ?'
    };

    this.dialog
      .open(MatConfirmDialog, {data: matConfirmDialogData})
      .afterClosed()
      .subscribe((confirmed: boolean) => {
        console.log('confirmed -> ', confirmed);
        this.shouldHide = false;
      });

  }

  openInputDialog() {
    this.shouldHide = true;
    const matInputDialogData: MatInputDialogData = {
      title: 'User data',
      placeholder: 'Enter your name',
      icon: 'account_circle',
      textButton: 'ENTER',
      color: 'accent'
    };

    this.dialog
      .open(MatInputDialog, {data: matInputDialogData})
      .afterClosed()
      .subscribe((value: string | number) => {
        console.log('returned value -> ', value);
        this.shouldHide = false;
      });

  }

  openAsyncDialog() {
    this.shouldHide = true;
    const matAsyncDialogData: MatAsyncDialogData = {
      title: 'Loading! Please wait...',
      color: 'accent'
    };

    this.dialog
      .open(MatAsyncDialog, {data: matAsyncDialogData})
      .afterClosed()
      .subscribe(() => {
        console.log('done');
        this.shouldHide = false;
      });

  }

  openRadioDialog() {
    this.shouldHide = true;
    const matRadioDialogData: MatRadioDialogData = {
      title: 'Please select one of the following options',
      color: 'accent',
      options: [
        {value: 'WINTER', viewValue: 'winter'},
        {value: 'SPRING', viewValue: 'spring'},
        {value: 'SUMMER', viewValue: 'summer'},
        {value: 'AUTUMN', viewValue: 'autumn'},
      ]
    };

    this.dialog
      .open(MatRadioDialog, {data: matRadioDialogData})
      .afterClosed()
      .subscribe((option) => {
        console.log('selected options', option);
        this.shouldHide = false;
      });

  }

  openSelectDialog() {
    this.shouldHide = true;
    const matSelectDialogData: MatSelectDialogData = {
      title: 'Please select one of the following options',
      color: 'accent',
      options: [
        {value: 'WINTER', viewValue: 'winter'},
        {value: 'SPRING', viewValue: 'spring'},
        {value: 'SUMMER', viewValue: 'summer'},
        {value: 'AUTUMN', viewValue: 'autumn'},
      ]
    };

    this.dialog
      .open(MatSelectDialog, {data: matSelectDialogData})
      .afterClosed()
      .subscribe((option) => {
        console.log('selected options', option);
        this.shouldHide = false;
      });
  }

}
