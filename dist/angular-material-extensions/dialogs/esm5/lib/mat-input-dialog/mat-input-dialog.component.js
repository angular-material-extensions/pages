/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
/**
 * @record
 */
export function MatInputDialogData() { }
if (false) {
    /** @type {?|undefined} */
    MatInputDialogData.prototype.title;
    /** @type {?|undefined} */
    MatInputDialogData.prototype.color;
    /** @type {?|undefined} */
    MatInputDialogData.prototype.icon;
    /** @type {?|undefined} */
    MatInputDialogData.prototype.appearance;
    /** @type {?|undefined} */
    MatInputDialogData.prototype.placeholder;
    /** @type {?|undefined} */
    MatInputDialogData.prototype.textButton;
}
var MatInputDialog = /** @class */ (function () {
    function MatInputDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    MatInputDialog.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.data) {
            this.title = this.data.title ? this.data.title : 'Enter the data';
            this.icon = this.data.icon ? this.data.icon : 'edit';
            this.color = this.data.color ? this.data.color : 'primary';
            this.placeholder = this.data.placeholder ? this.data.placeholder : '';
            this.textButton = this.data.textButton ? this.data.textButton : 'Ok';
        }
    };
    MatInputDialog.decorators = [
        { type: Component, args: [{
                    selector: 'mat-input-dialog',
                    template: "<mat-dialog-content fxLayout=\"column\">\n  <div class=\"title\">\n    {{title}}\n  </div>\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-form-field class=\"example-full-width\">\n      <input matInput #input [placeholder]=\"placeholder\">\n      <mat-icon matSuffix [color]=\"color\">{{icon}}</mat-icon>\n    </mat-form-field>\n  </div>\n</mat-dialog-content>\n\n<mat-dialog-actions fxLayoutAlign=\"center center\">\n  <button mat-raised-button\n          (click)=\"dialogRef.close(input.value)\"\n          [color]=\"color\">\n    {{textButton}}\n  </button>\n</mat-dialog-actions>\n",
                    styles: [".title{font-size:20px;margin-top:16px;margin-bottom:16px}"]
                }] }
    ];
    /** @nocollapse */
    MatInputDialog.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return MatInputDialog;
}());
export { MatInputDialog };
if (false) {
    /** @type {?} */
    MatInputDialog.prototype.title;
    /** @type {?} */
    MatInputDialog.prototype.icon;
    /** @type {?} */
    MatInputDialog.prototype.color;
    /** @type {?} */
    MatInputDialog.prototype.placeholder;
    /** @type {?} */
    MatInputDialog.prototype.textButton;
    /** @type {?} */
    MatInputDialog.prototype.dialogRef;
    /** @type {?} */
    MatInputDialog.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWlucHV0LWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1tYXRlcmlhbC1leHRlbnNpb25zL2RpYWxvZ3MvIiwic291cmNlcyI6WyJsaWIvbWF0LWlucHV0LWRpYWxvZy9tYXQtaW5wdXQtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQVUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxlQUFlLEVBQUUsWUFBWSxFQUFlLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFOUUsd0NBT0M7OztJQU5DLG1DQUFlOztJQUNmLG1DQUFxQjs7SUFDckIsa0NBQWM7O0lBQ2Qsd0NBQW9COztJQUNwQix5Q0FBcUI7O0lBQ3JCLHdDQUFvQjs7QUFHdEI7SUFhRSx3QkFBbUIsU0FBdUMsRUFDRixJQUF3QjtRQUQ3RCxjQUFTLEdBQVQsU0FBUyxDQUE4QjtRQUNGLFNBQUksR0FBSixJQUFJLENBQW9CO0lBQ2hGLENBQUM7Ozs7SUFFRCxpQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7WUFDbEUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUNyRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQzNELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDdEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztTQUN0RTtJQUNILENBQUM7O2dCQXpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsaW5CQUFnRDs7aUJBRWpEOzs7O2dCQWZ3QixZQUFZO2dEQXlCdEIsUUFBUSxZQUFJLE1BQU0sU0FBQyxlQUFlOztJQWFqRCxxQkFBQztDQUFBLEFBM0JELElBMkJDO1NBdEJZLGNBQWM7OztJQUV6QiwrQkFBYzs7SUFDZCw4QkFBYTs7SUFDYiwrQkFBb0I7O0lBQ3BCLHFDQUFvQjs7SUFDcEIsb0NBQW1COztJQUVQLG1DQUE4Qzs7SUFDOUMsOEJBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdCwgT25Jbml0LCBPcHRpb25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmLCBUaGVtZVBhbGV0dGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuZXhwb3J0IGludGVyZmFjZSBNYXRJbnB1dERpYWxvZ0RhdGEge1xuICB0aXRsZT86IHN0cmluZztcbiAgY29sb3I/OiBUaGVtZVBhbGV0dGU7XG4gIGljb24/OiBzdHJpbmc7XG4gIGFwcGVhcmFuY2U/OiBzdHJpbmc7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICB0ZXh0QnV0dG9uPzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtaW5wdXQtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21hdC1pbnB1dC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYXQtaW5wdXQtZGlhbG9nLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWF0SW5wdXREaWFsb2cgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHRpdGxlOiBzdHJpbmc7XG4gIGljb246IHN0cmluZztcbiAgY29sb3I6IFRoZW1lUGFsZXR0ZTtcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgdGV4dEJ1dHRvbjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxNYXRJbnB1dERpYWxvZz4sXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogTWF0SW5wdXREaWFsb2dEYXRhKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICB0aGlzLnRpdGxlID0gdGhpcy5kYXRhLnRpdGxlID8gdGhpcy5kYXRhLnRpdGxlIDogJ0VudGVyIHRoZSBkYXRhJztcbiAgICAgIHRoaXMuaWNvbiA9IHRoaXMuZGF0YS5pY29uID8gdGhpcy5kYXRhLmljb24gOiAnZWRpdCc7XG4gICAgICB0aGlzLmNvbG9yID0gdGhpcy5kYXRhLmNvbG9yID8gdGhpcy5kYXRhLmNvbG9yIDogJ3ByaW1hcnknO1xuICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IHRoaXMuZGF0YS5wbGFjZWhvbGRlciA/IHRoaXMuZGF0YS5wbGFjZWhvbGRlciA6ICcnO1xuICAgICAgdGhpcy50ZXh0QnV0dG9uID0gdGhpcy5kYXRhLnRleHRCdXR0b24gPyB0aGlzLmRhdGEudGV4dEJ1dHRvbiA6ICdPayc7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==