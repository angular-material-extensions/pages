/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
/**
 * @record
 */
export function MatConfirmDialogData() { }
if (false) {
    /** @type {?|undefined} */
    MatConfirmDialogData.prototype.title;
    /** @type {?} */
    MatConfirmDialogData.prototype.confirmMessage;
    /** @type {?|undefined} */
    MatConfirmDialogData.prototype.confirmTextButton;
    /** @type {?|undefined} */
    MatConfirmDialogData.prototype.cancelTextButton;
}
var MatConfirmDialog = /** @class */ (function () {
    function MatConfirmDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    MatConfirmDialog.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.data) {
            this.title = this.data.title ? this.data.title : 'Confirm';
            this.confirmMessage = this.data.confirmMessage ? this.data.confirmMessage : 'Are you sure ?';
            this.confirmTextButton = this.data.confirmTextButton ? this.data.confirmTextButton : 'Confirm';
            this.cancelTextButton = this.data.cancelTextButton ? this.data.cancelTextButton : 'Cancel';
        }
    };
    MatConfirmDialog.decorators = [
        { type: Component, args: [{
                    selector: 'mat-confirm-dialog',
                    template: "<h1 matDialogTitle>{{title}}</h1>\n<div mat-dialog-content>{{confirmMessage}}</div>\n<div mat-dialog-actions class=\"pt-24\">\n  <button mat-raised-button class=\"mat-accent mr-16\" (click)=\"dialogRef.close(true)\">{{confirmTextButton}}</button>\n  <button mat-button (click)=\"dialogRef.close(false)\">{{cancelTextButton}}</button>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    MatConfirmDialog.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return MatConfirmDialog;
}());
export { MatConfirmDialog };
if (false) {
    /** @type {?} */
    MatConfirmDialog.prototype.title;
    /** @type {?} */
    MatConfirmDialog.prototype.confirmMessage;
    /** @type {?} */
    MatConfirmDialog.prototype.confirmTextButton;
    /** @type {?} */
    MatConfirmDialog.prototype.cancelTextButton;
    /** @type {?} */
    MatConfirmDialog.prototype.dialogRef;
    /** @type {?} */
    MatConfirmDialog.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWNvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLW1hdGVyaWFsLWV4dGVuc2lvbnMvZGlhbG9ncy8iLCJzb3VyY2VzIjpbImxpYi9tYXQtY29uZmlybS1kaWFsb2cvbWF0LWNvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFDLGVBQWUsRUFBRSxZQUFZLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUVoRSwwQ0FLQzs7O0lBSkMscUNBQWU7O0lBQ2YsOENBQXVCOztJQUN2QixpREFBMkI7O0lBQzNCLGdEQUEwQjs7QUFHNUI7SUFZRSwwQkFBbUIsU0FBeUMsRUFDaEIsSUFBMEI7UUFEbkQsY0FBUyxHQUFULFNBQVMsQ0FBZ0M7UUFDaEIsU0FBSSxHQUFKLElBQUksQ0FBc0I7SUFDdEUsQ0FBQzs7OztJQUVELG1DQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDM0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO1lBQzdGLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDL0YsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztTQUM1RjtJQUNILENBQUM7O2dCQXZCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsbVdBQWtEOztpQkFFbkQ7Ozs7Z0JBYndCLFlBQVk7Z0RBc0J0QixNQUFNLFNBQUMsZUFBZTs7SUFZckMsdUJBQUM7Q0FBQSxBQXpCRCxJQXlCQztTQXBCWSxnQkFBZ0I7OztJQUUzQixpQ0FBYzs7SUFDZCwwQ0FBdUI7O0lBQ3ZCLDZDQUEwQjs7SUFDMUIsNENBQXlCOztJQUViLHFDQUFnRDs7SUFDaEQsZ0NBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWZ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuZXhwb3J0IGludGVyZmFjZSBNYXRDb25maXJtRGlhbG9nRGF0YSB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBjb25maXJtTWVzc2FnZTogc3RyaW5nO1xuICBjb25maXJtVGV4dEJ1dHRvbj86IHN0cmluZztcbiAgY2FuY2VsVGV4dEJ1dHRvbj86IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LWNvbmZpcm0tZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21hdC1jb25maXJtLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21hdC1jb25maXJtLWRpYWxvZy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1hdENvbmZpcm1EaWFsb2cgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNvbmZpcm1NZXNzYWdlOiBzdHJpbmc7XG4gIGNvbmZpcm1UZXh0QnV0dG9uOiBzdHJpbmc7XG4gIGNhbmNlbFRleHRCdXR0b246IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8TWF0Q29uZmlybURpYWxvZz4sXG4gICAgICAgICAgICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogTWF0Q29uZmlybURpYWxvZ0RhdGEpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgIHRoaXMudGl0bGUgPSB0aGlzLmRhdGEudGl0bGUgPyB0aGlzLmRhdGEudGl0bGUgOiAnQ29uZmlybSc7XG4gICAgICB0aGlzLmNvbmZpcm1NZXNzYWdlID0gdGhpcy5kYXRhLmNvbmZpcm1NZXNzYWdlID8gdGhpcy5kYXRhLmNvbmZpcm1NZXNzYWdlIDogJ0FyZSB5b3Ugc3VyZSA/JztcbiAgICAgIHRoaXMuY29uZmlybVRleHRCdXR0b24gPSB0aGlzLmRhdGEuY29uZmlybVRleHRCdXR0b24gPyB0aGlzLmRhdGEuY29uZmlybVRleHRCdXR0b24gOiAnQ29uZmlybSc7XG4gICAgICB0aGlzLmNhbmNlbFRleHRCdXR0b24gPSB0aGlzLmRhdGEuY2FuY2VsVGV4dEJ1dHRvbiA/IHRoaXMuZGF0YS5jYW5jZWxUZXh0QnV0dG9uIDogJ0NhbmNlbCc7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==