/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
/**
 * @record
 */
export function MatTimerDialogData() { }
if (false) {
    /** @type {?|undefined} */
    MatTimerDialogData.prototype.title;
    /** @type {?|undefined} */
    MatTimerDialogData.prototype.icon;
    /** @type {?|undefined} */
    MatTimerDialogData.prototype.color;
}
var MatTimerDialog = /** @class */ (function () {
    function MatTimerDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    MatTimerDialog.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.data) {
            this.title = this.data.title ? this.data.title : 'Loading...';
            this.icon = this.data.icon ? this.data.icon : '';
            this.color = this.data.color ? this.data.color : 'primary';
        }
    };
    MatTimerDialog.decorators = [
        { type: Component, args: [{
                    selector: 'mat-timer-dialog',
                    template: "<p>\n  mat-timer-dialog works!\n</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    MatTimerDialog.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return MatTimerDialog;
}());
export { MatTimerDialog };
if (false) {
    /** @type {?} */
    MatTimerDialog.prototype.title;
    /** @type {?} */
    MatTimerDialog.prototype.icon;
    /** @type {?} */
    MatTimerDialog.prototype.color;
    /** @type {?} */
    MatTimerDialog.prototype.dialogRef;
    /** @type {?} */
    MatTimerDialog.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRpbWVyLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1tYXRlcmlhbC1leHRlbnNpb25zL2RpYWxvZ3MvIiwic291cmNlcyI6WyJsaWIvbWF0LXRpbWVyLWRpYWxvZy9tYXQtdGltZXItZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQVUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxlQUFlLEVBQUUsWUFBWSxFQUFlLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFOUUsd0NBSUM7OztJQUhDLG1DQUFlOztJQUNmLGtDQUFjOztJQUNkLG1DQUFxQjs7QUFHdkI7SUFXRSx3QkFBbUIsU0FBdUMsRUFDRixJQUF3QjtRQUQ3RCxjQUFTLEdBQVQsU0FBUyxDQUE4QjtRQUNGLFNBQUksR0FBSixJQUFJLENBQW9CO0lBQ2hGLENBQUM7Ozs7SUFFRCxpQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1lBQzlELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDakQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztTQUM1RDtJQUNILENBQUM7O2dCQXJCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsa0RBQWdEOztpQkFFakQ7Ozs7Z0JBWndCLFlBQVk7Z0RBb0J0QixRQUFRLFlBQUksTUFBTSxTQUFDLGVBQWU7O0lBV2pELHFCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0FsQlksY0FBYzs7O0lBRXpCLCtCQUFjOztJQUNkLDhCQUFhOztJQUNiLCtCQUFvQjs7SUFFUixtQ0FBOEM7O0lBQzlDLDhCQUFvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIE9uSW5pdCwgT3B0aW9uYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZiwgVGhlbWVQYWxldHRlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWF0VGltZXJEaWFsb2dEYXRhIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIGNvbG9yPzogVGhlbWVQYWxldHRlO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtdGltZXItZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21hdC10aW1lci1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYXQtdGltZXItZGlhbG9nLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWF0VGltZXJEaWFsb2cgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHRpdGxlOiBzdHJpbmc7XG4gIGljb246IHN0cmluZztcbiAgY29sb3I6IFRoZW1lUGFsZXR0ZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8TWF0VGltZXJEaWFsb2c+LFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IE1hdFRpbWVyRGlhbG9nRGF0YSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgdGhpcy50aXRsZSA9IHRoaXMuZGF0YS50aXRsZSA/IHRoaXMuZGF0YS50aXRsZSA6ICdMb2FkaW5nLi4uJztcbiAgICAgIHRoaXMuaWNvbiA9IHRoaXMuZGF0YS5pY29uID8gdGhpcy5kYXRhLmljb24gOiAnJztcbiAgICAgIHRoaXMuY29sb3IgPSB0aGlzLmRhdGEuY29sb3IgPyB0aGlzLmRhdGEuY29sb3IgOiAncHJpbWFyeSc7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==