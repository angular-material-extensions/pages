/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
/**
 * @record
 */
export function MatAsyncDialogData() { }
if (false) {
    /** @type {?|undefined} */
    MatAsyncDialogData.prototype.title;
    /** @type {?|undefined} */
    MatAsyncDialogData.prototype.icon;
    /** @type {?|undefined} */
    MatAsyncDialogData.prototype.color;
}
var MatAsyncDialog = /** @class */ (function () {
    function MatAsyncDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    MatAsyncDialog.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.data) {
            this.title = this.data.title ? this.data.title : 'Loading...';
            this.icon = this.data.icon ? this.data.icon : '';
            this.color = this.data.color ? this.data.color : 'primary';
        }
    };
    MatAsyncDialog.decorators = [
        { type: Component, args: [{
                    selector: 'mat-async-dialog',
                    template: "<mat-dialog-content fxLayout=\"column\">\n  <div class=\"title\">\n    {{title}}\n  </div>\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-spinner [color]=\"color\"></mat-spinner>\n  </div>\n</mat-dialog-content>\n\n",
                    styles: [".title{font-size:20px;margin-top:16px;margin-bottom:16px}"]
                }] }
    ];
    /** @nocollapse */
    MatAsyncDialog.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return MatAsyncDialog;
}());
export { MatAsyncDialog };
if (false) {
    /** @type {?} */
    MatAsyncDialog.prototype.title;
    /** @type {?} */
    MatAsyncDialog.prototype.icon;
    /** @type {?} */
    MatAsyncDialog.prototype.color;
    /** @type {?} */
    MatAsyncDialog.prototype.dialogRef;
    /** @type {?} */
    MatAsyncDialog.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWFzeW5jLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1tYXRlcmlhbC1leHRlbnNpb25zL2RpYWxvZ3MvIiwic291cmNlcyI6WyJsaWIvbWF0LWFzeW5jLWRpYWxvZy9tYXQtYXN5bmMtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQVUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxlQUFlLEVBQUUsWUFBWSxFQUFlLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFOUUsd0NBSUM7OztJQUhDLG1DQUFlOztJQUNmLGtDQUFjOztJQUNkLG1DQUFxQjs7QUFHdkI7SUFXRSx3QkFBbUIsU0FBdUMsRUFDRixJQUF3QjtRQUQ3RCxjQUFTLEdBQVQsU0FBUyxDQUE4QjtRQUNGLFNBQUksR0FBSixJQUFJLENBQW9CO0lBQ2hGLENBQUM7Ozs7SUFFRCxpQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1lBQzlELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDakQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztTQUM1RDtJQUNILENBQUM7O2dCQXJCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsK1BBQWdEOztpQkFFakQ7Ozs7Z0JBWndCLFlBQVk7Z0RBb0J0QixRQUFRLFlBQUksTUFBTSxTQUFDLGVBQWU7O0lBV2pELHFCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0FsQlksY0FBYzs7O0lBRXpCLCtCQUFjOztJQUNkLDhCQUFhOztJQUNiLCtCQUFvQjs7SUFFUixtQ0FBOEM7O0lBQzlDLDhCQUFvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIE9uSW5pdCwgT3B0aW9uYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZiwgVGhlbWVQYWxldHRlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWF0QXN5bmNEaWFsb2dEYXRhIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIGNvbG9yPzogVGhlbWVQYWxldHRlO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtYXN5bmMtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21hdC1hc3luYy1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYXQtYXN5bmMtZGlhbG9nLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWF0QXN5bmNEaWFsb2cgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHRpdGxlOiBzdHJpbmc7XG4gIGljb246IHN0cmluZztcbiAgY29sb3I6IFRoZW1lUGFsZXR0ZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8TWF0QXN5bmNEaWFsb2c+LFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IE1hdEFzeW5jRGlhbG9nRGF0YSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgdGhpcy50aXRsZSA9IHRoaXMuZGF0YS50aXRsZSA/IHRoaXMuZGF0YS50aXRsZSA6ICdMb2FkaW5nLi4uJztcbiAgICAgIHRoaXMuaWNvbiA9IHRoaXMuZGF0YS5pY29uID8gdGhpcy5kYXRhLmljb24gOiAnJztcbiAgICAgIHRoaXMuY29sb3IgPSB0aGlzLmRhdGEuY29sb3IgPyB0aGlzLmRhdGEuY29sb3IgOiAncHJpbWFyeSc7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==