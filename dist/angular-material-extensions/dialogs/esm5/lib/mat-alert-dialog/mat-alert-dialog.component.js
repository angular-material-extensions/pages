/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
/**
 * @record
 */
export function MatAlertDialogData() { }
if (false) {
    /** @type {?|undefined} */
    MatAlertDialogData.prototype.title;
    /** @type {?|undefined} */
    MatAlertDialogData.prototype.icon;
    /** @type {?|undefined} */
    MatAlertDialogData.prototype.type;
    /** @type {?} */
    MatAlertDialogData.prototype.message;
    /** @type {?|undefined} */
    MatAlertDialogData.prototype.okTextButton;
}
var MatAlertDialog = /** @class */ (function () {
    function MatAlertDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    MatAlertDialog.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.data) {
            this.title = this.data.title ? this.data.title : 'Alert';
            this.icon = this.data.icon ? this.data.icon : 'warning';
            this.type = this.data.type ? this.data.type : 'warn';
            this.message = this.data.message ? this.data.message : 'Cancel';
            this.okTextButton = this.data.okTextButton ? this.data.okTextButton : 'Ok';
        }
    };
    MatAlertDialog.decorators = [
        { type: Component, args: [{
                    selector: 'mat-alert-dialog',
                    template: "<mat-dialog-content fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <mat-icon [color]=\"type\">{{icon}}</mat-icon>\n  <div class=\"title\">\n    {{title}}\n  </div>\n  <div class=\"subtitle\">\n    <p>{{message}}</p>\n  </div>\n</mat-dialog-content>\n\n<mat-dialog-actions fxLayoutAlign=\"center center\">\n  <button mat-raised-button\n          matDialogClose\n          [color]=\"type\">\n    {{okTextButton}}\n  </button>\n</mat-dialog-actions>\n",
                    styles: [".material-icons{font-size:4rem}.mat-icon{height:4rem;width:4rem}.title{font-size:20px;margin-top:16px}.subtitle{margin:16px auto;max-width:300px;color:rgba(0,0,0,.54);font-size:15px;text-align:center}.subtitle p{display:block;-webkit-margin-before:1em;-webkit-margin-after:1em;-webkit-margin-start:0;-webkit-margin-end:0}"]
                }] }
    ];
    /** @nocollapse */
    MatAlertDialog.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return MatAlertDialog;
}());
export { MatAlertDialog };
if (false) {
    /** @type {?} */
    MatAlertDialog.prototype.title;
    /** @type {?} */
    MatAlertDialog.prototype.icon;
    /** @type {?} */
    MatAlertDialog.prototype.type;
    /** @type {?} */
    MatAlertDialog.prototype.message;
    /** @type {?} */
    MatAlertDialog.prototype.okTextButton;
    /** @type {?} */
    MatAlertDialog.prototype.dialogRef;
    /** @type {?} */
    MatAlertDialog.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWFsZXJ0LWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1tYXRlcmlhbC1leHRlbnNpb25zL2RpYWxvZ3MvIiwic291cmNlcyI6WyJsaWIvbWF0LWFsZXJ0LWRpYWxvZy9tYXQtYWxlcnQtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQVUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxlQUFlLEVBQUUsWUFBWSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFJaEUsd0NBTUM7OztJQUxDLG1DQUFlOztJQUNmLGtDQUFjOztJQUNkLGtDQUFjOztJQUNkLHFDQUFnQjs7SUFDaEIsMENBQXNCOztBQUd4QjtJQWFFLHdCQUFtQixTQUF1QyxFQUNGLElBQXdCO1FBRDdELGNBQVMsR0FBVCxTQUFTLENBQThCO1FBQ0YsU0FBSSxHQUFKLElBQUksQ0FBb0I7SUFDaEYsQ0FBQzs7OztJQUVELGlDQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDekQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUN4RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3JELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDaEUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztTQUM1RTtJQUNILENBQUM7O2dCQXpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIscWRBQWdEOztpQkFFakQ7Ozs7Z0JBaEJ3QixZQUFZO2dEQTBCdEIsUUFBUSxZQUFJLE1BQU0sU0FBQyxlQUFlOztJQWFqRCxxQkFBQztDQUFBLEFBM0JELElBMkJDO1NBdEJZLGNBQWM7OztJQUV6QiwrQkFBYzs7SUFDZCw4QkFBYTs7SUFDYiw4QkFBYTs7SUFDYixpQ0FBZ0I7O0lBQ2hCLHNDQUFxQjs7SUFFVCxtQ0FBOEM7O0lBQzlDLDhCQUFvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIE9uSW5pdCwgT3B0aW9uYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5leHBvcnQgdHlwZSBBbGVydFR5cGUgPSAncHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJztcblxuZXhwb3J0IGludGVyZmFjZSBNYXRBbGVydERpYWxvZ0RhdGEge1xuICB0aXRsZT86IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgdHlwZT86IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBva1RleHRCdXR0b24/OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1hbGVydC1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWF0LWFsZXJ0LWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21hdC1hbGVydC1kaWFsb2cuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRBbGVydERpYWxvZyBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgdGl0bGU6IHN0cmluZztcbiAgaWNvbjogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgb2tUZXh0QnV0dG9uOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE1hdEFsZXJ0RGlhbG9nPixcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBNYXRBbGVydERpYWxvZ0RhdGEpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgIHRoaXMudGl0bGUgPSB0aGlzLmRhdGEudGl0bGUgPyB0aGlzLmRhdGEudGl0bGUgOiAnQWxlcnQnO1xuICAgICAgdGhpcy5pY29uID0gdGhpcy5kYXRhLmljb24gPyB0aGlzLmRhdGEuaWNvbiA6ICd3YXJuaW5nJztcbiAgICAgIHRoaXMudHlwZSA9IHRoaXMuZGF0YS50eXBlID8gdGhpcy5kYXRhLnR5cGUgOiAnd2Fybic7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLmRhdGEubWVzc2FnZSA/IHRoaXMuZGF0YS5tZXNzYWdlIDogJ0NhbmNlbCc7XG4gICAgICB0aGlzLm9rVGV4dEJ1dHRvbiA9IHRoaXMuZGF0YS5va1RleHRCdXR0b24gPyB0aGlzLmRhdGEub2tUZXh0QnV0dG9uIDogJ09rJztcbiAgICB9XG4gIH1cblxufVxuIl19