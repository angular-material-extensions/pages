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
var MatRadioDialog = /** @class */ (function () {
    function MatRadioDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    MatRadioDialog.prototype.ngOnInit = /**
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
    MatRadioDialog.decorators = [
        { type: Component, args: [{
                    selector: 'mat-radio-dialog',
                    template: "<mat-dialog-content fxLayout=\"column\">\n  <div class=\"title\">\n    {{title}}\n  </div>\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-radio-group #radioGroup>\n      <mat-radio-button *ngFor=\"let option of options\" name=\"more_options\"\n                        [value]=\"option.value\">\n        {{option.viewValue ? option.viewValue : option.value}}\n      </mat-radio-button>\n    </mat-radio-group>\n  </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"center center\">\n  <button mat-raised-button\n          (click)=\"dialogRef.close(radioGroup.selected.value)\"\n          [color]=\"color\">\n    {{textButton}}\n  </button>\n</mat-dialog-actions>\n",
                    styles: [".title{font-size:20px;margin-top:16px;margin-bottom:16px}mat-radio-group{display:flex;flex-direction:column;margin:15px 0}mat-radio-button{margin:5px}"]
                }] }
    ];
    /** @nocollapse */
    MatRadioDialog.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return MatRadioDialog;
}());
export { MatRadioDialog };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXJhZGlvLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1tYXRlcmlhbC1leHRlbnNpb25zL2RpYWxvZ3MvIiwic291cmNlcyI6WyJsaWIvbWF0LXJhZGlvLWRpYWxvZy9tYXQtcmFkaW8tZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQVUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxlQUFlLEVBQUUsWUFBWSxFQUFlLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFOUUsd0NBTUM7OztJQUxDLG1DQUFlOztJQUNmLGtDQUFjOztJQUNkLG1DQUFxQjs7SUFDckIsd0NBQW9COztJQUNwQixxQ0FBOEM7O0FBR2hEO0lBYUUsd0JBQW1CLFNBQXVDLEVBQ0YsSUFBd0I7UUFEN0QsY0FBUyxHQUFULFNBQVMsQ0FBOEI7UUFDRixTQUFJLEdBQUosSUFBSSxDQUFvQjtJQUNoRixDQUFDOzs7O0lBRUQsaUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUMzRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2pELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDM0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNyRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1NBQzdEO0lBQ0gsQ0FBQzs7Z0JBekJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1Qiw4c0JBQWdEOztpQkFFakQ7Ozs7Z0JBZHdCLFlBQVk7Z0RBd0J0QixRQUFRLFlBQUksTUFBTSxTQUFDLGVBQWU7O0lBYWpELHFCQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0F0QlksY0FBYzs7O0lBRXpCLCtCQUFjOztJQUNkLDhCQUFhOztJQUNiLCtCQUFvQjs7SUFDcEIsb0NBQW1COztJQUNuQixpQ0FBOEM7O0lBRWxDLG1DQUE4Qzs7SUFDOUMsOEJBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdCwgT25Jbml0LCBPcHRpb25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmLCBUaGVtZVBhbGV0dGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuZXhwb3J0IGludGVyZmFjZSBNYXRSYWRpb0RpYWxvZ0RhdGEge1xuICB0aXRsZT86IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgY29sb3I/OiBUaGVtZVBhbGV0dGU7XG4gIHRleHRCdXR0b24/OiBzdHJpbmc7XG4gIG9wdGlvbnM6IHsgdmFsdWU6IGFueTsgdmlld1ZhbHVlPzogc3RyaW5nIH1bXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LXJhZGlvLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXQtcmFkaW8tZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWF0LXJhZGlvLWRpYWxvZy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1hdFJhZGlvRGlhbG9nIGltcGxlbWVudHMgT25Jbml0IHtcblxuICB0aXRsZTogc3RyaW5nO1xuICBpY29uOiBzdHJpbmc7XG4gIGNvbG9yOiBUaGVtZVBhbGV0dGU7XG4gIHRleHRCdXR0b246IHN0cmluZztcbiAgb3B0aW9uczogeyB2YWx1ZTogYW55OyB2aWV3VmFsdWU/OiBzdHJpbmcgfVtdO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxNYXRSYWRpb0RpYWxvZz4sXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogTWF0UmFkaW9EaWFsb2dEYXRhKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICB0aGlzLnRpdGxlID0gdGhpcy5kYXRhLnRpdGxlID8gdGhpcy5kYXRhLnRpdGxlIDogJ09wdGlvbnMnO1xuICAgICAgdGhpcy5pY29uID0gdGhpcy5kYXRhLmljb24gPyB0aGlzLmRhdGEuaWNvbiA6ICcnO1xuICAgICAgdGhpcy5jb2xvciA9IHRoaXMuZGF0YS5jb2xvciA/IHRoaXMuZGF0YS5jb2xvciA6ICdwcmltYXJ5JztcbiAgICAgIHRoaXMudGV4dEJ1dHRvbiA9IHRoaXMuZGF0YS50ZXh0QnV0dG9uID8gdGhpcy5kYXRhLnRleHRCdXR0b24gOiAnT0snO1xuICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5kYXRhLm9wdGlvbnMgPyB0aGlzLmRhdGEub3B0aW9ucyA6IG51bGw7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==