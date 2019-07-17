/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
/**
 * @record
 */
export function MatSelectDialogData() { }
if (false) {
    /** @type {?|undefined} */
    MatSelectDialogData.prototype.title;
    /** @type {?|undefined} */
    MatSelectDialogData.prototype.icon;
    /** @type {?|undefined} */
    MatSelectDialogData.prototype.color;
    /** @type {?|undefined} */
    MatSelectDialogData.prototype.textButton;
    /** @type {?} */
    MatSelectDialogData.prototype.options;
}
var MatSelectDialog = /** @class */ (function () {
    function MatSelectDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    MatSelectDialog.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.data) {
            this.title = this.data.title ? this.data.title : 'Options';
            this.icon = this.data.icon ? this.data.icon : '';
            this.color = this.data.color ? this.data.color : 'primary';
            this.textButton = this.data.textButton ? this.data.textButton : 'OK';
            this.options = this.data.options ? this.data.options : null;
        }
    };
    MatSelectDialog.decorators = [
        { type: Component, args: [{
                    selector: 'mat-select-dialog',
                    template: "<mat-dialog-content fxLayout=\"column\">\n  <div class=\"title\">\n    {{title}}\n  </div>\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-form-field>\n      <mat-label>options</mat-label>\n      <mat-select #select>\n        <mat-option *ngFor=\"let option of options\" [value]=\"option.value\">\n          {{option.viewValue ? option.viewValue : option.value}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n</mat-dialog-content>\n\n<mat-dialog-actions fxLayoutAlign=\"center center\">\n  <button mat-raised-button\n          [color]=\"color\">\n    {{textButton}}\n  </button>\n</mat-dialog-actions>\n\n",
                    styles: [".title{font-size:20px;margin-top:16px;margin-bottom:16px}"]
                }] }
    ];
    /** @nocollapse */
    MatSelectDialog.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return MatSelectDialog;
}());
export { MatSelectDialog };
if (false) {
    /** @type {?} */
    MatSelectDialog.prototype.title;
    /** @type {?} */
    MatSelectDialog.prototype.icon;
    /** @type {?} */
    MatSelectDialog.prototype.color;
    /** @type {?} */
    MatSelectDialog.prototype.textButton;
    /** @type {?} */
    MatSelectDialog.prototype.options;
    /** @type {?} */
    MatSelectDialog.prototype.dialogRef;
    /** @type {?} */
    MatSelectDialog.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXNlbGVjdC1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItbWF0ZXJpYWwtZXh0ZW5zaW9ucy9kaWFsb2dzLyIsInNvdXJjZXMiOlsibGliL21hdC1zZWxlY3QtZGlhbG9nL21hdC1zZWxlY3QtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQVUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxlQUFlLEVBQUUsWUFBWSxFQUFlLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFOUUseUNBTUM7OztJQUxDLG9DQUFlOztJQUNmLG1DQUFjOztJQUNkLG9DQUFxQjs7SUFDckIseUNBQW9COztJQUNwQixzQ0FBOEM7O0FBR2hEO0lBYUUseUJBQW1CLFNBQXdDLEVBQ0gsSUFBeUI7UUFEOUQsY0FBUyxHQUFULFNBQVMsQ0FBK0I7UUFDSCxTQUFJLEdBQUosSUFBSSxDQUFxQjtJQUNqRixDQUFDOzs7O0lBRUQsa0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUMzRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2pELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDM0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNyRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1NBQzdEO0lBQ0gsQ0FBQzs7Z0JBekJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixvcUJBQWlEOztpQkFFbEQ7Ozs7Z0JBZHdCLFlBQVk7Z0RBd0J0QixRQUFRLFlBQUksTUFBTSxTQUFDLGVBQWU7O0lBYWpELHNCQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0F0QlksZUFBZTs7O0lBRTFCLGdDQUFjOztJQUNkLCtCQUFhOztJQUNiLGdDQUFvQjs7SUFDcEIscUNBQW9COztJQUNwQixrQ0FBOEM7O0lBRWxDLG9DQUErQzs7SUFDL0MsK0JBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdCwgT25Jbml0LCBPcHRpb25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmLCBUaGVtZVBhbGV0dGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuZXhwb3J0IGludGVyZmFjZSBNYXRTZWxlY3REaWFsb2dEYXRhIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIGNvbG9yPzogVGhlbWVQYWxldHRlO1xuICB0ZXh0QnV0dG9uPzogc3RyaW5nO1xuICBvcHRpb25zOiB7IHZhbHVlOiBhbnk7IHZpZXdWYWx1ZT86IHN0cmluZyB9W107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1zZWxlY3QtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21hdC1zZWxlY3QtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWF0LXNlbGVjdC1kaWFsb2cuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRTZWxlY3REaWFsb2cgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHRpdGxlOiBzdHJpbmc7XG4gIGljb246IHN0cmluZztcbiAgY29sb3I6IFRoZW1lUGFsZXR0ZTtcbiAgdGV4dEJ1dHRvbj86IHN0cmluZztcbiAgb3B0aW9uczogeyB2YWx1ZTogYW55OyB2aWV3VmFsdWU/OiBzdHJpbmcgfVtdO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxNYXRTZWxlY3REaWFsb2c+LFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IE1hdFNlbGVjdERpYWxvZ0RhdGEpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgIHRoaXMudGl0bGUgPSB0aGlzLmRhdGEudGl0bGUgPyB0aGlzLmRhdGEudGl0bGUgOiAnT3B0aW9ucyc7XG4gICAgICB0aGlzLmljb24gPSB0aGlzLmRhdGEuaWNvbiA/IHRoaXMuZGF0YS5pY29uIDogJyc7XG4gICAgICB0aGlzLmNvbG9yID0gdGhpcy5kYXRhLmNvbG9yID8gdGhpcy5kYXRhLmNvbG9yIDogJ3ByaW1hcnknO1xuICAgICAgdGhpcy50ZXh0QnV0dG9uID0gdGhpcy5kYXRhLnRleHRCdXR0b24gPyB0aGlzLmRhdGEudGV4dEJ1dHRvbiA6ICdPSyc7XG4gICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmRhdGEub3B0aW9ucyA/IHRoaXMuZGF0YS5vcHRpb25zIDogbnVsbDtcbiAgICB9XG4gIH1cblxufVxuIl19