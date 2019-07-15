```typescript

import {MatDialog} from '@angular/material';
import {MatAlertDialog, MatAlertDialogData} from '@angular-material-extensions/dialogs';

// ...

  constructor( public dialog: MatDialog) {
  }
  
 openAlertDialog() {
    const defaultAlertDialogData: MatAlertDialogData = {
       message: 'This is a default alert dialog!',
     };

    this.dialog
      .open(MatAlertDialog, {data: defaultAlertDialogData})
      .afterClosed()
      .subscribe(() => console.log('alert -> dismissed'));
    }
}
```
