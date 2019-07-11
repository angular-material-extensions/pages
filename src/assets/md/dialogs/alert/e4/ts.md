```typescript

import {MatDialog} from '@angular/material';
import {MatAlertDialog, MatAlertDialogData} from '@angular-material-extensions/dialogs';

// ...

  constructor( public dialog: MatDialog) {
  }
  
 openAlertDialog() {
    const warnAlertDialogData: MatAlertDialogData = {
              title: 'WARNING!',
              message: 'Your PC is infected!',
              icon: 'warning',
              type: 'warn'
            };

    this.dialog
      .open(MatAlertDialog, {data: warnAlertDialogData})
      .afterClosed()
      .subscribe(() => console.log('alert -> dismissed'));
    }
}
```
