```typescript

import {MatDialog} from '@angular/material';
import {MatAlertDialog, MatAlertDialogData} from '@angular-material-extensions/dialogs';

// ...

  constructor( public dialog: MatDialog) {
  }
  
 openAlertDialog() {
    const  primaryAlertDialogData: MatAlertDialogData = {
              title: 'Great Job!',
              message: 'You have succussfully signed in!',
              icon: 'account_circle',
              okTextButton: 'dismiss',
              type: 'primary'
            };

    this.dialog
      .open(MatAlertDialog, {data: primaryAlertDialogData})
      .afterClosed()
      .subscribe(() => console.log('alert -> dismissed'));
    }
}
```
