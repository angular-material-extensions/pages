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
export class MatConfirmDialog {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.data) {
            this.title = this.data.title ? this.data.title : 'Confirm';
            this.confirmMessage = this.data.confirmMessage ? this.data.confirmMessage : 'Are you sure ?';
            this.confirmTextButton = this.data.confirmTextButton ? this.data.confirmTextButton : 'Confirm';
            this.cancelTextButton = this.data.cancelTextButton ? this.data.cancelTextButton : 'Cancel';
        }
    }
}
MatConfirmDialog.decorators = [
    { type: Component, args: [{
                selector: 'mat-confirm-dialog',
                template: "<h1 matDialogTitle>{{title}}</h1>\n<div mat-dialog-content>{{confirmMessage}}</div>\n<div mat-dialog-actions class=\"pt-24\">\n  <button mat-raised-button class=\"mat-accent mr-16\" (click)=\"dialogRef.close(true)\">{{confirmTextButton}}</button>\n  <button mat-button (click)=\"dialogRef.close(false)\">{{cancelTextButton}}</button>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
MatConfirmDialog.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWNvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLW1hdGVyaWFsLWV4dGVuc2lvbnMvZGlhbG9ncy8iLCJzb3VyY2VzIjpbImxpYi9tYXQtY29uZmlybS1kaWFsb2cvbWF0LWNvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFDLGVBQWUsRUFBRSxZQUFZLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUVoRSwwQ0FLQzs7O0lBSkMscUNBQWU7O0lBQ2YsOENBQXVCOztJQUN2QixpREFBMkI7O0lBQzNCLGdEQUEwQjs7QUFRNUIsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFPM0IsWUFBbUIsU0FBeUMsRUFDaEIsSUFBMEI7UUFEbkQsY0FBUyxHQUFULFNBQVMsQ0FBZ0M7UUFDaEIsU0FBSSxHQUFKLElBQUksQ0FBc0I7SUFDdEUsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQzNELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztZQUM3RixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQy9GLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7U0FDNUY7SUFDSCxDQUFDOzs7WUF2QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLG1XQUFrRDs7YUFFbkQ7Ozs7WUFid0IsWUFBWTs0Q0FzQnRCLE1BQU0sU0FBQyxlQUFlOzs7O0lBTm5DLGlDQUFjOztJQUNkLDBDQUF1Qjs7SUFDdkIsNkNBQTBCOztJQUMxQiw0Q0FBeUI7O0lBRWIscUNBQWdEOztJQUNoRCxnQ0FBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1hdENvbmZpcm1EaWFsb2dEYXRhIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGNvbmZpcm1NZXNzYWdlOiBzdHJpbmc7XG4gIGNvbmZpcm1UZXh0QnV0dG9uPzogc3RyaW5nO1xuICBjYW5jZWxUZXh0QnV0dG9uPzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtY29uZmlybS1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWF0LWNvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWF0LWNvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWF0Q29uZmlybURpYWxvZyBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgdGl0bGU6IHN0cmluZztcbiAgY29uZmlybU1lc3NhZ2U6IHN0cmluZztcbiAgY29uZmlybVRleHRCdXR0b246IHN0cmluZztcbiAgY2FuY2VsVGV4dEJ1dHRvbjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxNYXRDb25maXJtRGlhbG9nPixcbiAgICAgICAgICAgICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBNYXRDb25maXJtRGlhbG9nRGF0YSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgdGhpcy50aXRsZSA9IHRoaXMuZGF0YS50aXRsZSA/IHRoaXMuZGF0YS50aXRsZSA6ICdDb25maXJtJztcbiAgICAgIHRoaXMuY29uZmlybU1lc3NhZ2UgPSB0aGlzLmRhdGEuY29uZmlybU1lc3NhZ2UgPyB0aGlzLmRhdGEuY29uZmlybU1lc3NhZ2UgOiAnQXJlIHlvdSBzdXJlID8nO1xuICAgICAgdGhpcy5jb25maXJtVGV4dEJ1dHRvbiA9IHRoaXMuZGF0YS5jb25maXJtVGV4dEJ1dHRvbiA/IHRoaXMuZGF0YS5jb25maXJtVGV4dEJ1dHRvbiA6ICdDb25maXJtJztcbiAgICAgIHRoaXMuY2FuY2VsVGV4dEJ1dHRvbiA9IHRoaXMuZGF0YS5jYW5jZWxUZXh0QnV0dG9uID8gdGhpcy5kYXRhLmNhbmNlbFRleHRCdXR0b24gOiAnQ2FuY2VsJztcbiAgICB9XG4gIH1cblxufVxuIl19