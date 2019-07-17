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
export class MatAlertDialog {
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
            this.title = this.data.title ? this.data.title : 'Alert';
            this.icon = this.data.icon ? this.data.icon : 'warning';
            this.type = this.data.type ? this.data.type : 'warn';
            this.message = this.data.message ? this.data.message : 'Cancel';
            this.okTextButton = this.data.okTextButton ? this.data.okTextButton : 'Ok';
        }
    }
}
MatAlertDialog.decorators = [
    { type: Component, args: [{
                selector: 'mat-alert-dialog',
                template: "<mat-dialog-content fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <mat-icon [color]=\"type\">{{icon}}</mat-icon>\n  <div class=\"title\">\n    {{title}}\n  </div>\n  <div class=\"subtitle\">\n    <p>{{message}}</p>\n  </div>\n</mat-dialog-content>\n\n<mat-dialog-actions fxLayoutAlign=\"center center\">\n  <button mat-raised-button\n          matDialogClose\n          [color]=\"type\">\n    {{okTextButton}}\n  </button>\n</mat-dialog-actions>\n",
                styles: [".material-icons{font-size:4rem}.mat-icon{height:4rem;width:4rem}.title{font-size:20px;margin-top:16px}.subtitle{margin:16px auto;max-width:300px;color:rgba(0,0,0,.54);font-size:15px;text-align:center}.subtitle p{display:block;-webkit-margin-before:1em;-webkit-margin-after:1em;-webkit-margin-start:0;-webkit-margin-end:0}"]
            }] }
];
/** @nocollapse */
MatAlertDialog.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWFsZXJ0LWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1tYXRlcmlhbC1leHRlbnNpb25zL2RpYWxvZ3MvIiwic291cmNlcyI6WyJsaWIvbWF0LWFsZXJ0LWRpYWxvZy9tYXQtYWxlcnQtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQVUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxlQUFlLEVBQUUsWUFBWSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFJaEUsd0NBTUM7OztJQUxDLG1DQUFlOztJQUNmLGtDQUFjOztJQUNkLGtDQUFjOztJQUNkLHFDQUFnQjs7SUFDaEIsMENBQXNCOztBQVF4QixNQUFNLE9BQU8sY0FBYzs7Ozs7SUFRekIsWUFBbUIsU0FBdUMsRUFDRixJQUF3QjtRQUQ3RCxjQUFTLEdBQVQsU0FBUyxDQUE4QjtRQUNGLFNBQUksR0FBSixJQUFJLENBQW9CO0lBQ2hGLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUN6RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ3hELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDckQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUNoRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1NBQzVFO0lBQ0gsQ0FBQzs7O1lBekJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixxZEFBZ0Q7O2FBRWpEOzs7O1lBaEJ3QixZQUFZOzRDQTBCdEIsUUFBUSxZQUFJLE1BQU0sU0FBQyxlQUFlOzs7O0lBUC9DLCtCQUFjOztJQUNkLDhCQUFhOztJQUNiLDhCQUFhOztJQUNiLGlDQUFnQjs7SUFDaEIsc0NBQXFCOztJQUVULG1DQUE4Qzs7SUFDOUMsOEJBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdCwgT25Jbml0LCBPcHRpb25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmV4cG9ydCB0eXBlIEFsZXJ0VHlwZSA9ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1hdEFsZXJ0RGlhbG9nRGF0YSB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICB0eXBlPzogc3RyaW5nO1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIG9rVGV4dEJ1dHRvbj86IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LWFsZXJ0LWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXQtYWxlcnQtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWF0LWFsZXJ0LWRpYWxvZy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1hdEFsZXJ0RGlhbG9nIGltcGxlbWVudHMgT25Jbml0IHtcblxuICB0aXRsZTogc3RyaW5nO1xuICBpY29uOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBva1RleHRCdXR0b246IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8TWF0QWxlcnREaWFsb2c+LFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IE1hdEFsZXJ0RGlhbG9nRGF0YSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgdGhpcy50aXRsZSA9IHRoaXMuZGF0YS50aXRsZSA/IHRoaXMuZGF0YS50aXRsZSA6ICdBbGVydCc7XG4gICAgICB0aGlzLmljb24gPSB0aGlzLmRhdGEuaWNvbiA/IHRoaXMuZGF0YS5pY29uIDogJ3dhcm5pbmcnO1xuICAgICAgdGhpcy50eXBlID0gdGhpcy5kYXRhLnR5cGUgPyB0aGlzLmRhdGEudHlwZSA6ICd3YXJuJztcbiAgICAgIHRoaXMubWVzc2FnZSA9IHRoaXMuZGF0YS5tZXNzYWdlID8gdGhpcy5kYXRhLm1lc3NhZ2UgOiAnQ2FuY2VsJztcbiAgICAgIHRoaXMub2tUZXh0QnV0dG9uID0gdGhpcy5kYXRhLm9rVGV4dEJ1dHRvbiA/IHRoaXMuZGF0YS5va1RleHRCdXR0b24gOiAnT2snO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=