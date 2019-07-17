/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatAlertDialog } from './mat-alert-dialog/mat-alert-dialog.component';
import { MatAsyncDialog } from './mat-async-dialog/mat-async-dialog.component';
import { MatConfirmDialog } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { MatInputDialog } from './mat-input-dialog/mat-input-dialog.component';
import { MatLoadingDialog } from './mat-loading-dialog/mat-loading-dialog.component';
import { MatRadioDialog } from './mat-radio-dialog/mat-radio-dialog.component';
import { MatSelectDialog } from './mat-select-dialog/mat-select-dialog.component';
import { MatTimerDialog } from './mat-timer-dialog/mat-timer-dialog.component';
import { MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatProgressSpinnerModule, MatRadioModule, MatSelectModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
// Export module's public API
export { MatAlertDialog } from './mat-alert-dialog/mat-alert-dialog.component';
export { MatAsyncDialog } from './mat-async-dialog/mat-async-dialog.component';
export { MatConfirmDialog } from './mat-confirm-dialog/mat-confirm-dialog.component';
export { MatInputDialog } from './mat-input-dialog/mat-input-dialog.component';
export { MatLoadingDialog } from './mat-loading-dialog/mat-loading-dialog.component';
export { MatRadioDialog } from './mat-radio-dialog/mat-radio-dialog.component';
export { MatSelectDialog } from './mat-select-dialog/mat-select-dialog.component';
export { MatTimerDialog } from './mat-timer-dialog/mat-timer-dialog.component';
/** @type {?} */
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
export class MatDialogsModule {
}
MatDialogsModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRpYWxvZ3MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItbWF0ZXJpYWwtZXh0ZW5zaW9ucy9kaWFsb2dzLyIsInNvdXJjZXMiOlsibGliL21hdC1kaWFsb2dzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUM3RSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUNuRixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDN0UsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDbkYsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUNoRixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDN0UsT0FBTyxFQUNMLGVBQWUsRUFDZixlQUFlLEVBQ2YsYUFBYSxFQUNiLGNBQWMsRUFDZCx3QkFBd0IsRUFDeEIsY0FBYyxFQUNkLGVBQWUsRUFDaEIsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7QUFJdEQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUM3RSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUNuRixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDN0UsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDbkYsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUNoRixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sK0NBQStDLENBQUM7O0FBRzdFLE1BQU0sT0FBTyxPQUFPLEdBQUc7SUFDckIsY0FBYztJQUNkLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGNBQWM7Q0FDZjtBQWtCRCxNQUFNLE9BQU8sZ0JBQWdCOzs7WUFoQjVCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixnQkFBZ0I7b0JBQ2hCLGVBQWU7b0JBQ2YsZUFBZTtvQkFDZixhQUFhO29CQUNiLGNBQWM7b0JBQ2Qsd0JBQXdCO29CQUN4QixjQUFjO29CQUNkLGVBQWU7aUJBQ2hCO2dCQUNELE9BQU8sRUFBRSxDQUFDLEdBQUcsT0FBTyxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQztnQkFDeEQsZUFBZSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUM7Z0JBQzdCLFlBQVksRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDO2FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0QWxlcnREaWFsb2d9IGZyb20gJy4vbWF0LWFsZXJ0LWRpYWxvZy9tYXQtYWxlcnQtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQge01hdEFzeW5jRGlhbG9nfSBmcm9tICcuL21hdC1hc3luYy1kaWFsb2cvbWF0LWFzeW5jLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHtNYXRDb25maXJtRGlhbG9nfSBmcm9tICcuL21hdC1jb25maXJtLWRpYWxvZy9tYXQtY29uZmlybS1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7TWF0SW5wdXREaWFsb2d9IGZyb20gJy4vbWF0LWlucHV0LWRpYWxvZy9tYXQtaW5wdXQtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQge01hdExvYWRpbmdEaWFsb2d9IGZyb20gJy4vbWF0LWxvYWRpbmctZGlhbG9nL21hdC1sb2FkaW5nLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHtNYXRSYWRpb0RpYWxvZ30gZnJvbSAnLi9tYXQtcmFkaW8tZGlhbG9nL21hdC1yYWRpby1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7TWF0U2VsZWN0RGlhbG9nfSBmcm9tICcuL21hdC1zZWxlY3QtZGlhbG9nL21hdC1zZWxlY3QtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQge01hdFRpbWVyRGlhbG9nfSBmcm9tICcuL21hdC10aW1lci1kaWFsb2cvbWF0LXRpbWVyLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgTWF0QnV0dG9uTW9kdWxlLFxuICBNYXREaWFsb2dNb2R1bGUsXG4gIE1hdEljb25Nb2R1bGUsXG4gIE1hdElucHV0TW9kdWxlLFxuICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gIE1hdFJhZGlvTW9kdWxlLFxuICBNYXRTZWxlY3RNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHtGbGV4TGF5b3V0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dCc7XG5cblxuLy8gRXhwb3J0IG1vZHVsZSdzIHB1YmxpYyBBUElcbmV4cG9ydCB7TWF0QWxlcnREaWFsb2d9IGZyb20gJy4vbWF0LWFsZXJ0LWRpYWxvZy9tYXQtYWxlcnQtZGlhbG9nLmNvbXBvbmVudCc7XG5leHBvcnQge01hdEFzeW5jRGlhbG9nfSBmcm9tICcuL21hdC1hc3luYy1kaWFsb2cvbWF0LWFzeW5jLWRpYWxvZy5jb21wb25lbnQnO1xuZXhwb3J0IHtNYXRDb25maXJtRGlhbG9nfSBmcm9tICcuL21hdC1jb25maXJtLWRpYWxvZy9tYXQtY29uZmlybS1kaWFsb2cuY29tcG9uZW50JztcbmV4cG9ydCB7TWF0SW5wdXREaWFsb2d9IGZyb20gJy4vbWF0LWlucHV0LWRpYWxvZy9tYXQtaW5wdXQtZGlhbG9nLmNvbXBvbmVudCc7XG5leHBvcnQge01hdExvYWRpbmdEaWFsb2d9IGZyb20gJy4vbWF0LWxvYWRpbmctZGlhbG9nL21hdC1sb2FkaW5nLWRpYWxvZy5jb21wb25lbnQnO1xuZXhwb3J0IHtNYXRSYWRpb0RpYWxvZ30gZnJvbSAnLi9tYXQtcmFkaW8tZGlhbG9nL21hdC1yYWRpby1kaWFsb2cuY29tcG9uZW50JztcbmV4cG9ydCB7TWF0U2VsZWN0RGlhbG9nfSBmcm9tICcuL21hdC1zZWxlY3QtZGlhbG9nL21hdC1zZWxlY3QtZGlhbG9nLmNvbXBvbmVudCc7XG5leHBvcnQge01hdFRpbWVyRGlhbG9nfSBmcm9tICcuL21hdC10aW1lci1kaWFsb2cvbWF0LXRpbWVyLWRpYWxvZy5jb21wb25lbnQnO1xuXG5cbmV4cG9ydCBjb25zdCBkaWFsb2dzID0gW1xuICBNYXRBbGVydERpYWxvZyxcbiAgTWF0QXN5bmNEaWFsb2csXG4gIE1hdENvbmZpcm1EaWFsb2csXG4gIE1hdElucHV0RGlhbG9nLFxuICBNYXRMb2FkaW5nRGlhbG9nLFxuICBNYXRSYWRpb0RpYWxvZyxcbiAgTWF0U2VsZWN0RGlhbG9nLFxuICBNYXRUaW1lckRpYWxvZyxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRmxleExheW91dE1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbLi4uZGlhbG9ncywgTWF0RGlhbG9nTW9kdWxlLCBGbGV4TGF5b3V0TW9kdWxlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbLi4uZGlhbG9nc10sXG4gIGRlY2xhcmF0aW9uczogWy4uLmRpYWxvZ3NdXG59KVxuZXhwb3J0IGNsYXNzIE1hdERpYWxvZ3NNb2R1bGUge1xufVxuIl19