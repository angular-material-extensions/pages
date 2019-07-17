/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
/**
 * @record
 */
export function MatLoadingDialogData() { }
if (false) {
    /** @type {?|undefined} */
    MatLoadingDialogData.prototype.title;
    /** @type {?|undefined} */
    MatLoadingDialogData.prototype.icon;
    /** @type {?|undefined} */
    MatLoadingDialogData.prototype.color;
}
var MatLoadingDialog = /** @class */ (function () {
    function MatLoadingDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    MatLoadingDialog.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.data) {
            this.title = this.data.title ? this.data.title : 'Loading...';
            this.icon = this.data.icon ? this.data.icon : '';
            this.color = this.data.color ? this.data.color : 'primary';
        }
    };
    MatLoadingDialog.decorators = [
        { type: Component, args: [{
                    selector: 'mat-loading-dialog',
                    template: "<mat-dialog-content fxLayout=\"column\">\n  <div class=\"title\">\n    {{title}}\n  </div>\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-spinner [color]=\"color\"></mat-spinner>\n  </div>\n</mat-dialog-content>\n\n",
                    styles: [".title{font-size:20px;margin-top:16px;margin-bottom:16px}"]
                }] }
    ];
    /** @nocollapse */
    MatLoadingDialog.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return MatLoadingDialog;
}());
export { MatLoadingDialog };
if (false) {
    /** @type {?} */
    MatLoadingDialog.prototype.title;
    /** @type {?} */
    MatLoadingDialog.prototype.icon;
    /** @type {?} */
    MatLoadingDialog.prototype.color;
    /** @type {?} */
    MatLoadingDialog.prototype.dialogRef;
    /** @type {?} */
    MatLoadingDialog.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWxvYWRpbmctZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLW1hdGVyaWFsLWV4dGVuc2lvbnMvZGlhbG9ncy8iLCJzb3VyY2VzIjpbImxpYi9tYXQtbG9hZGluZy1kaWFsb2cvbWF0LWxvYWRpbmctZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQVUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxlQUFlLEVBQUUsWUFBWSxFQUFlLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFOUUsMENBSUM7OztJQUhDLHFDQUFlOztJQUNmLG9DQUFjOztJQUNkLHFDQUFxQjs7QUFHdkI7SUFXRSwwQkFBbUIsU0FBeUMsRUFDSixJQUEwQjtRQUQvRCxjQUFTLEdBQVQsU0FBUyxDQUFnQztRQUNKLFNBQUksR0FBSixJQUFJLENBQXNCO0lBQ2xGLENBQUM7Ozs7SUFFRCxtQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1lBQzlELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDakQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztTQUM1RDtJQUNILENBQUM7O2dCQXJCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsK1BBQWtEOztpQkFFbkQ7Ozs7Z0JBWndCLFlBQVk7Z0RBb0J0QixRQUFRLFlBQUksTUFBTSxTQUFDLGVBQWU7O0lBV2pELHVCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0FsQlksZ0JBQWdCOzs7SUFFM0IsaUNBQWM7O0lBQ2QsZ0NBQWE7O0lBQ2IsaUNBQW9COztJQUVSLHFDQUFnRDs7SUFDaEQsZ0NBQXNFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdCwgT25Jbml0LCBPcHRpb25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmLCBUaGVtZVBhbGV0dGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuZXhwb3J0IGludGVyZmFjZSBNYXRMb2FkaW5nRGlhbG9nRGF0YSB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICBjb2xvcj86IFRoZW1lUGFsZXR0ZTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LWxvYWRpbmctZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21hdC1sb2FkaW5nLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21hdC1sb2FkaW5nLWRpYWxvZy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1hdExvYWRpbmdEaWFsb2cgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHRpdGxlOiBzdHJpbmc7XG4gIGljb246IHN0cmluZztcbiAgY29sb3I6IFRoZW1lUGFsZXR0ZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8TWF0TG9hZGluZ0RpYWxvZz4sXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogTWF0TG9hZGluZ0RpYWxvZ0RhdGEpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgIHRoaXMudGl0bGUgPSB0aGlzLmRhdGEudGl0bGUgPyB0aGlzLmRhdGEudGl0bGUgOiAnTG9hZGluZy4uLic7XG4gICAgICB0aGlzLmljb24gPSB0aGlzLmRhdGEuaWNvbiA/IHRoaXMuZGF0YS5pY29uIDogJyc7XG4gICAgICB0aGlzLmNvbG9yID0gdGhpcy5kYXRhLmNvbG9yID8gdGhpcy5kYXRhLmNvbG9yIDogJ3ByaW1hcnknO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=