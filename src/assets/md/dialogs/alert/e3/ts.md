```typescript

import {MatDialog} from '@angular/material';
import {MatAlertDialog, MatAlertDialogData} from '@angular-material-extensions/dialogs';

// ...

  constructor( public dialog: MatDialog) {
  }
  
 openAlertDialog() {
    const accentAlertDialogData: MatAlertDialogData = {
              title: 'Woohoooo!',
              message: 'Your are now free :D! Please check the instructions to book a holiday!',
              icon: 'accessibility_new',
              type: 'accent'
            };

    this.dialog
      .open(MatAlertDialog, {data: accentAlertDialogData})
      .afterClosed()
      .subscribe(() => console.log('alert -> dismissed'));
    }
}
```
