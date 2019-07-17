/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
/**
 * @record
 */
export function MatLoadingDialogData() { }
if (false) {
    /** @type {?|undefined} */
    MatLoadingDialogData.prototype.title;
    /** @type {?|undefined} */
    MatLoadingDialogData.prototype.icon;
    /** @type {?|undefined} */
    MatLoadingDialogData.prototype.color;
}
export class MatLoadingDialog {
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
            this.title = this.data.title ? this.data.title : 'Loading...';
            this.icon = this.data.icon ? this.data.icon : '';
            this.color = this.data.color ? this.data.color : 'primary';
        }
    }
}
MatLoadingDialog.decorators = [
    { type: Component, args: [{
                selector: 'mat-loading-dialog',
                template: "<mat-dialog-content fxLayout=\"column\">\n  <div class=\"title\">\n    {{title}}\n  </div>\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-spinner [color]=\"color\"></mat-spinner>\n  </div>\n</mat-dialog-content>\n\n",
                styles: [".title{font-size:20px;margin-top:16px;margin-bottom:16px}"]
            }] }
];
/** @nocollapse */
MatLoadingDialog.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    MatLoadingDialog.prototype.title;
    /** @type {?} */
    MatLoadingDialog.prototype.icon;
    /** @type {?} */
    MatLoadingDialog.prototype.color;
    /** @type {?} */
    MatLoadingDialog.prototype.dialogRef;
    /** @type {?} */
    MatLoadingDialog.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWxvYWRpbmctZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLW1hdGVyaWFsLWV4dGVuc2lvbnMvZGlhbG9ncy8iLCJzb3VyY2VzIjpbImxpYi9tYXQtbG9hZGluZy1kaWFsb2cvbWF0LWxvYWRpbmctZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQVUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxlQUFlLEVBQUUsWUFBWSxFQUFlLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFOUUsMENBSUM7OztJQUhDLHFDQUFlOztJQUNmLG9DQUFjOztJQUNkLHFDQUFxQjs7QUFRdkIsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFNM0IsWUFBbUIsU0FBeUMsRUFDSixJQUEwQjtRQUQvRCxjQUFTLEdBQVQsU0FBUyxDQUFnQztRQUNKLFNBQUksR0FBSixJQUFJLENBQXNCO0lBQ2xGLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztZQUM5RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2pELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7U0FDNUQ7SUFDSCxDQUFDOzs7WUFyQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLCtQQUFrRDs7YUFFbkQ7Ozs7WUFad0IsWUFBWTs0Q0FvQnRCLFFBQVEsWUFBSSxNQUFNLFNBQUMsZUFBZTs7OztJQUwvQyxpQ0FBYzs7SUFDZCxnQ0FBYTs7SUFDYixpQ0FBb0I7O0lBRVIscUNBQWdEOztJQUNoRCxnQ0FBc0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQsIE9wdGlvbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWYsIFRoZW1lUGFsZXR0ZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1hdExvYWRpbmdEaWFsb2dEYXRhIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIGNvbG9yPzogVGhlbWVQYWxldHRlO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtbG9hZGluZy1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWF0LWxvYWRpbmctZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWF0LWxvYWRpbmctZGlhbG9nLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWF0TG9hZGluZ0RpYWxvZyBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgdGl0bGU6IHN0cmluZztcbiAgaWNvbjogc3RyaW5nO1xuICBjb2xvcjogVGhlbWVQYWxldHRlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxNYXRMb2FkaW5nRGlhbG9nPixcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBNYXRMb2FkaW5nRGlhbG9nRGF0YSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgdGhpcy50aXRsZSA9IHRoaXMuZGF0YS50aXRsZSA/IHRoaXMuZGF0YS50aXRsZSA6ICdMb2FkaW5nLi4uJztcbiAgICAgIHRoaXMuaWNvbiA9IHRoaXMuZGF0YS5pY29uID8gdGhpcy5kYXRhLmljb24gOiAnJztcbiAgICAgIHRoaXMuY29sb3IgPSB0aGlzLmRhdGEuY29sb3IgPyB0aGlzLmRhdGEuY29sb3IgOiAncHJpbWFyeSc7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==