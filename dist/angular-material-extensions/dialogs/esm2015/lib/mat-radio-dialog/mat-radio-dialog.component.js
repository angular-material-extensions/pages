/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
/**
 * @record
 */
export function MatRadioDialogData() { }
if (false) {
    /** @type {?|undefined} */
    MatRadioDialogData.prototype.title;
    /** @type {?|undefined} */
    MatRadioDialogData.prototype.icon;
    /** @type {?|undefined} */
    MatRadioDialogData.prototype.color;
    /** @type {?|undefined} */
    MatRadioDialogData.prototype.textButton;
    /** @type {?} */
    MatRadioDialogData.prototype.options;
}
export class MatRadioDialog {
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
MatRadioDialog.decorators = [
    { type: Component, args: [{
                selector: 'mat-radio-dialog',
                template: "<mat-dialog-content fxLayout=\"column\">\n  <div class=\"title\">\n    {{title}}\n  </div>\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-radio-group #radioGroup>\n      <mat-radio-button *ngFor=\"let option of options\" name=\"more_options\"\n                        [value]=\"option.value\">\n        {{option.viewValue ? option.viewValue : option.value}}\n      </mat-radio-button>\n    </mat-radio-group>\n  </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"center center\">\n  <button mat-raised-button\n          (click)=\"dialogRef.close(radioGroup.selected.value)\"\n          [color]=\"color\">\n    {{textButton}}\n  </button>\n</mat-dialog-actions>\n",
                styles: [".title{font-size:20px;margin-top:16px;margin-bottom:16px}mat-radio-group{display:flex;flex-direction:column;margin:15px 0}mat-radio-button{margin:5px}"]
            }] }
];
/** @nocollapse */
MatRadioDialog.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    MatRadioDialog.prototype.title;
    /** @type {?} */
    MatRadioDialog.prototype.icon;
    /** @type {?} */
    MatRadioDialog.prototype.color;
    /** @type {?} */
    MatRadioDialog.prototype.textButton;
    /** @type {?} */
    MatRadioDialog.prototype.options;
    /** @type {?} */
    MatRadioDialog.prototype.dialogRef;
    /** @type {?} */
    MatRadioDialog.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXJhZGlvLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1tYXRlcmlhbC1leHRlbnNpb25zL2RpYWxvZ3MvIiwic291cmNlcyI6WyJsaWIvbWF0LXJhZGlvLWRpYWxvZy9tYXQtcmFkaW8tZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQVUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxlQUFlLEVBQUUsWUFBWSxFQUFlLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFOUUsd0NBTUM7OztJQUxDLG1DQUFlOztJQUNmLGtDQUFjOztJQUNkLG1DQUFxQjs7SUFDckIsd0NBQW9COztJQUNwQixxQ0FBOEM7O0FBUWhELE1BQU0sT0FBTyxjQUFjOzs7OztJQVF6QixZQUFtQixTQUF1QyxFQUNGLElBQXdCO1FBRDdELGNBQVMsR0FBVCxTQUFTLENBQThCO1FBQ0YsU0FBSSxHQUFKLElBQUksQ0FBb0I7SUFDaEYsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQzNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDakQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUMzRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3JFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7U0FDN0Q7SUFDSCxDQUFDOzs7WUF6QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLDhzQkFBZ0Q7O2FBRWpEOzs7O1lBZHdCLFlBQVk7NENBd0J0QixRQUFRLFlBQUksTUFBTSxTQUFDLGVBQWU7Ozs7SUFQL0MsK0JBQWM7O0lBQ2QsOEJBQWE7O0lBQ2IsK0JBQW9COztJQUNwQixvQ0FBbUI7O0lBQ25CLGlDQUE4Qzs7SUFFbEMsbUNBQThDOztJQUM5Qyw4QkFBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQsIE9wdGlvbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWYsIFRoZW1lUGFsZXR0ZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1hdFJhZGlvRGlhbG9nRGF0YSB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICBjb2xvcj86IFRoZW1lUGFsZXR0ZTtcbiAgdGV4dEJ1dHRvbj86IHN0cmluZztcbiAgb3B0aW9uczogeyB2YWx1ZTogYW55OyB2aWV3VmFsdWU/OiBzdHJpbmcgfVtdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtcmFkaW8tZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21hdC1yYWRpby1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYXQtcmFkaW8tZGlhbG9nLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWF0UmFkaW9EaWFsb2cgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHRpdGxlOiBzdHJpbmc7XG4gIGljb246IHN0cmluZztcbiAgY29sb3I6IFRoZW1lUGFsZXR0ZTtcbiAgdGV4dEJ1dHRvbjogc3RyaW5nO1xuICBvcHRpb25zOiB7IHZhbHVlOiBhbnk7IHZpZXdWYWx1ZT86IHN0cmluZyB9W107XG5cbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE1hdFJhZGlvRGlhbG9nPixcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBNYXRSYWRpb0RpYWxvZ0RhdGEpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgIHRoaXMudGl0bGUgPSB0aGlzLmRhdGEudGl0bGUgPyB0aGlzLmRhdGEudGl0bGUgOiAnT3B0aW9ucyc7XG4gICAgICB0aGlzLmljb24gPSB0aGlzLmRhdGEuaWNvbiA/IHRoaXMuZGF0YS5pY29uIDogJyc7XG4gICAgICB0aGlzLmNvbG9yID0gdGhpcy5kYXRhLmNvbG9yID8gdGhpcy5kYXRhLmNvbG9yIDogJ3ByaW1hcnknO1xuICAgICAgdGhpcy50ZXh0QnV0dG9uID0gdGhpcy5kYXRhLnRleHRCdXR0b24gPyB0aGlzLmRhdGEudGV4dEJ1dHRvbiA6ICdPSyc7XG4gICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmRhdGEub3B0aW9ucyA/IHRoaXMuZGF0YS5vcHRpb25zIDogbnVsbDtcbiAgICB9XG4gIH1cblxufVxuIl19