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
export class MatSelectDialog {
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
            this.title = this.data.title ? this.data.title : 'Options';
            this.icon = this.data.icon ? this.data.icon : '';
            this.color = this.data.color ? this.data.color : 'primary';
            this.textButton = this.data.textButton ? this.data.textButton : 'OK';
            this.options = this.data.options ? this.data.options : null;
        }
    }
}
MatSelectDialog.decorators = [
    { type: Component, args: [{
                selector: 'mat-select-dialog',
                template: "<mat-dialog-content fxLayout=\"column\">\n  <div class=\"title\">\n    {{title}}\n  </div>\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-form-field>\n      <mat-label>options</mat-label>\n      <mat-select #select>\n        <mat-option *ngFor=\"let option of options\" [value]=\"option.value\">\n          {{option.viewValue ? option.viewValue : option.value}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n</mat-dialog-content>\n\n<mat-dialog-actions fxLayoutAlign=\"center center\">\n  <button mat-raised-button\n          [color]=\"color\">\n    {{textButton}}\n  </button>\n</mat-dialog-actions>\n\n",
                styles: [".title{font-size:20px;margin-top:16px;margin-bottom:16px}"]
            }] }
];
/** @nocollapse */
MatSelectDialog.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXNlbGVjdC1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItbWF0ZXJpYWwtZXh0ZW5zaW9ucy9kaWFsb2dzLyIsInNvdXJjZXMiOlsibGliL21hdC1zZWxlY3QtZGlhbG9nL21hdC1zZWxlY3QtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQVUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxlQUFlLEVBQUUsWUFBWSxFQUFlLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFOUUseUNBTUM7OztJQUxDLG9DQUFlOztJQUNmLG1DQUFjOztJQUNkLG9DQUFxQjs7SUFDckIseUNBQW9COztJQUNwQixzQ0FBOEM7O0FBUWhELE1BQU0sT0FBTyxlQUFlOzs7OztJQVExQixZQUFtQixTQUF3QyxFQUNILElBQXlCO1FBRDlELGNBQVMsR0FBVCxTQUFTLENBQStCO1FBQ0gsU0FBSSxHQUFKLElBQUksQ0FBcUI7SUFDakYsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQzNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDakQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUMzRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3JFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7U0FDN0Q7SUFDSCxDQUFDOzs7WUF6QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLG9xQkFBaUQ7O2FBRWxEOzs7O1lBZHdCLFlBQVk7NENBd0J0QixRQUFRLFlBQUksTUFBTSxTQUFDLGVBQWU7Ozs7SUFQL0MsZ0NBQWM7O0lBQ2QsK0JBQWE7O0lBQ2IsZ0NBQW9COztJQUNwQixxQ0FBb0I7O0lBQ3BCLGtDQUE4Qzs7SUFFbEMsb0NBQStDOztJQUMvQywrQkFBcUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQsIE9wdGlvbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWYsIFRoZW1lUGFsZXR0ZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1hdFNlbGVjdERpYWxvZ0RhdGEge1xuICB0aXRsZT86IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgY29sb3I/OiBUaGVtZVBhbGV0dGU7XG4gIHRleHRCdXR0b24/OiBzdHJpbmc7XG4gIG9wdGlvbnM6IHsgdmFsdWU6IGFueTsgdmlld1ZhbHVlPzogc3RyaW5nIH1bXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LXNlbGVjdC1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWF0LXNlbGVjdC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYXQtc2VsZWN0LWRpYWxvZy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1hdFNlbGVjdERpYWxvZyBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgdGl0bGU6IHN0cmluZztcbiAgaWNvbjogc3RyaW5nO1xuICBjb2xvcjogVGhlbWVQYWxldHRlO1xuICB0ZXh0QnV0dG9uPzogc3RyaW5nO1xuICBvcHRpb25zOiB7IHZhbHVlOiBhbnk7IHZpZXdWYWx1ZT86IHN0cmluZyB9W107XG5cbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE1hdFNlbGVjdERpYWxvZz4sXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogTWF0U2VsZWN0RGlhbG9nRGF0YSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgdGhpcy50aXRsZSA9IHRoaXMuZGF0YS50aXRsZSA/IHRoaXMuZGF0YS50aXRsZSA6ICdPcHRpb25zJztcbiAgICAgIHRoaXMuaWNvbiA9IHRoaXMuZGF0YS5pY29uID8gdGhpcy5kYXRhLmljb24gOiAnJztcbiAgICAgIHRoaXMuY29sb3IgPSB0aGlzLmRhdGEuY29sb3IgPyB0aGlzLmRhdGEuY29sb3IgOiAncHJpbWFyeSc7XG4gICAgICB0aGlzLnRleHRCdXR0b24gPSB0aGlzLmRhdGEudGV4dEJ1dHRvbiA/IHRoaXMuZGF0YS50ZXh0QnV0dG9uIDogJ09LJztcbiAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuZGF0YS5vcHRpb25zID8gdGhpcy5kYXRhLm9wdGlvbnMgOiBudWxsO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=