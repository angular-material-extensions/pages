```typescript

import {MatDialog} from '@angular/material';
import {MatConfirmDialog, MatConfirmDialogData} from '@angular-material-extensions/dialogs';

// ...

  constructor( public dialog: MatDialog) {
  }
  
 openConfirmDialog() {
     const matConfirmDialogData: MatConfirmDialogData = {
       confirmMessage: 'Are you sure you want to execute the following action ?'
     };
 
     this.dialog
       .open(MatConfirmDialog, {data: matConfirmDialogData})
       .afterClosed()
       .subscribe((confirmed: boolean) => console.log('confirmed -> ', confirmed));
 
   }
}

```
