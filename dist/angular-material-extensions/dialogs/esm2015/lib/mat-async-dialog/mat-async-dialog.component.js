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
export class MatAsyncDialog {
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
MatAsyncDialog.decorators = [
    { type: Component, args: [{
                selector: 'mat-async-dialog',
                template: "<mat-dialog-content fxLayout=\"column\">\n  <div class=\"title\">\n    {{title}}\n  </div>\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-spinner [color]=\"color\"></mat-spinner>\n  </div>\n</mat-dialog-content>\n\n",
                styles: [".title{font-size:20px;margin-top:16px;margin-bottom:16px}"]
            }] }
];
/** @nocollapse */
MatAsyncDialog.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWFzeW5jLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1tYXRlcmlhbC1leHRlbnNpb25zL2RpYWxvZ3MvIiwic291cmNlcyI6WyJsaWIvbWF0LWFzeW5jLWRpYWxvZy9tYXQtYXN5bmMtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQVUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxlQUFlLEVBQUUsWUFBWSxFQUFlLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFOUUsd0NBSUM7OztJQUhDLG1DQUFlOztJQUNmLGtDQUFjOztJQUNkLG1DQUFxQjs7QUFRdkIsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBTXpCLFlBQW1CLFNBQXVDLEVBQ0YsSUFBd0I7UUFEN0QsY0FBUyxHQUFULFNBQVMsQ0FBOEI7UUFDRixTQUFJLEdBQUosSUFBSSxDQUFvQjtJQUNoRixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7WUFDOUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNqRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1NBQzVEO0lBQ0gsQ0FBQzs7O1lBckJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QiwrUEFBZ0Q7O2FBRWpEOzs7O1lBWndCLFlBQVk7NENBb0J0QixRQUFRLFlBQUksTUFBTSxTQUFDLGVBQWU7Ozs7SUFML0MsK0JBQWM7O0lBQ2QsOEJBQWE7O0lBQ2IsK0JBQW9COztJQUVSLG1DQUE4Qzs7SUFDOUMsOEJBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdCwgT25Jbml0LCBPcHRpb25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmLCBUaGVtZVBhbGV0dGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuZXhwb3J0IGludGVyZmFjZSBNYXRBc3luY0RpYWxvZ0RhdGEge1xuICB0aXRsZT86IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgY29sb3I/OiBUaGVtZVBhbGV0dGU7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1hc3luYy1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWF0LWFzeW5jLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21hdC1hc3luYy1kaWFsb2cuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRBc3luY0RpYWxvZyBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgdGl0bGU6IHN0cmluZztcbiAgaWNvbjogc3RyaW5nO1xuICBjb2xvcjogVGhlbWVQYWxldHRlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxNYXRBc3luY0RpYWxvZz4sXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogTWF0QXN5bmNEaWFsb2dEYXRhKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICB0aGlzLnRpdGxlID0gdGhpcy5kYXRhLnRpdGxlID8gdGhpcy5kYXRhLnRpdGxlIDogJ0xvYWRpbmcuLi4nO1xuICAgICAgdGhpcy5pY29uID0gdGhpcy5kYXRhLmljb24gPyB0aGlzLmRhdGEuaWNvbiA6ICcnO1xuICAgICAgdGhpcy5jb2xvciA9IHRoaXMuZGF0YS5jb2xvciA/IHRoaXMuZGF0YS5jb2xvciA6ICdwcmltYXJ5JztcbiAgICB9XG4gIH1cblxufVxuIl19