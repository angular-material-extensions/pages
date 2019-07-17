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
export class MatInputDialog {
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
            this.title = this.data.title ? this.data.title : 'Enter the data';
            this.icon = this.data.icon ? this.data.icon : 'edit';
            this.color = this.data.color ? this.data.color : 'primary';
            this.placeholder = this.data.placeholder ? this.data.placeholder : '';
            this.textButton = this.data.textButton ? this.data.textButton : 'Ok';
        }
    }
}
MatInputDialog.decorators = [
    { type: Component, args: [{
                selector: 'mat-input-dialog',
                template: "<mat-dialog-content fxLayout=\"column\">\n  <div class=\"title\">\n    {{title}}\n  </div>\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-form-field class=\"example-full-width\">\n      <input matInput #input [placeholder]=\"placeholder\">\n      <mat-icon matSuffix [color]=\"color\">{{icon}}</mat-icon>\n    </mat-form-field>\n  </div>\n</mat-dialog-content>\n\n<mat-dialog-actions fxLayoutAlign=\"center center\">\n  <button mat-raised-button\n          (click)=\"dialogRef.close(input.value)\"\n          [color]=\"color\">\n    {{textButton}}\n  </button>\n</mat-dialog-actions>\n",
                styles: [".title{font-size:20px;margin-top:16px;margin-bottom:16px}"]
            }] }
];
/** @nocollapse */
MatInputDialog.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWlucHV0LWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1tYXRlcmlhbC1leHRlbnNpb25zL2RpYWxvZ3MvIiwic291cmNlcyI6WyJsaWIvbWF0LWlucHV0LWRpYWxvZy9tYXQtaW5wdXQtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQVUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxlQUFlLEVBQUUsWUFBWSxFQUFlLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFOUUsd0NBT0M7OztJQU5DLG1DQUFlOztJQUNmLG1DQUFxQjs7SUFDckIsa0NBQWM7O0lBQ2Qsd0NBQW9COztJQUNwQix5Q0FBcUI7O0lBQ3JCLHdDQUFvQjs7QUFRdEIsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBUXpCLFlBQW1CLFNBQXVDLEVBQ0YsSUFBd0I7UUFEN0QsY0FBUyxHQUFULFNBQVMsQ0FBOEI7UUFDRixTQUFJLEdBQUosSUFBSSxDQUFvQjtJQUNoRixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztZQUNsRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3JELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDM0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUN0RSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1NBQ3RFO0lBQ0gsQ0FBQzs7O1lBekJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixpbkJBQWdEOzthQUVqRDs7OztZQWZ3QixZQUFZOzRDQXlCdEIsUUFBUSxZQUFJLE1BQU0sU0FBQyxlQUFlOzs7O0lBUC9DLCtCQUFjOztJQUNkLDhCQUFhOztJQUNiLCtCQUFvQjs7SUFDcEIscUNBQW9COztJQUNwQixvQ0FBbUI7O0lBRVAsbUNBQThDOztJQUM5Qyw4QkFBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQsIE9wdGlvbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWYsIFRoZW1lUGFsZXR0ZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1hdElucHV0RGlhbG9nRGF0YSB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBjb2xvcj86IFRoZW1lUGFsZXR0ZTtcbiAgaWNvbj86IHN0cmluZztcbiAgYXBwZWFyYW5jZT86IHN0cmluZztcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIHRleHRCdXR0b24/OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1pbnB1dC1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWF0LWlucHV0LWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21hdC1pbnB1dC1kaWFsb2cuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRJbnB1dERpYWxvZyBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgdGl0bGU6IHN0cmluZztcbiAgaWNvbjogc3RyaW5nO1xuICBjb2xvcjogVGhlbWVQYWxldHRlO1xuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICB0ZXh0QnV0dG9uOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE1hdElucHV0RGlhbG9nPixcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBNYXRJbnB1dERpYWxvZ0RhdGEpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgIHRoaXMudGl0bGUgPSB0aGlzLmRhdGEudGl0bGUgPyB0aGlzLmRhdGEudGl0bGUgOiAnRW50ZXIgdGhlIGRhdGEnO1xuICAgICAgdGhpcy5pY29uID0gdGhpcy5kYXRhLmljb24gPyB0aGlzLmRhdGEuaWNvbiA6ICdlZGl0JztcbiAgICAgIHRoaXMuY29sb3IgPSB0aGlzLmRhdGEuY29sb3IgPyB0aGlzLmRhdGEuY29sb3IgOiAncHJpbWFyeSc7XG4gICAgICB0aGlzLnBsYWNlaG9sZGVyID0gdGhpcy5kYXRhLnBsYWNlaG9sZGVyID8gdGhpcy5kYXRhLnBsYWNlaG9sZGVyIDogJyc7XG4gICAgICB0aGlzLnRleHRCdXR0b24gPSB0aGlzLmRhdGEudGV4dEJ1dHRvbiA/IHRoaXMuZGF0YS50ZXh0QnV0dG9uIDogJ09rJztcbiAgICB9XG4gIH1cblxufVxuIl19