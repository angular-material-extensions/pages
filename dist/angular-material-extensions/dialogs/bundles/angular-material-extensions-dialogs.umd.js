(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material'), require('@angular/common'), require('@angular/flex-layout')) :
    typeof define === 'function' && define.amd ? define('@angular-material-extensions/dialogs', ['exports', '@angular/core', '@angular/material', '@angular/common', '@angular/flex-layout'], factory) :
    (global = global || self, factory((global['angular-material-extensions'] = global['angular-material-extensions'] || {}, global['angular-material-extensions'].dialogs = {}), global.ng.core, global.ng.material, global.ng.common, global.ng['flex-layout']));
}(this, function (exports, core, material, common, flexLayout) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core.Component, args: [{
                        selector: 'mat-alert-dialog',
                        template: "<mat-dialog-content fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <mat-icon [color]=\"type\">{{icon}}</mat-icon>\n  <div class=\"title\">\n    {{title}}\n  </div>\n  <div class=\"subtitle\">\n    <p>{{message}}</p>\n  </div>\n</mat-dialog-content>\n\n<mat-dialog-actions fxLayoutAlign=\"center center\">\n  <button mat-raised-button\n          matDialogClose\n          [color]=\"type\">\n    {{okTextButton}}\n  </button>\n</mat-dialog-actions>\n",
                        styles: [".material-icons{font-size:4rem}.mat-icon{height:4rem;width:4rem}.title{font-size:20px;margin-top:16px}.subtitle{margin:16px auto;max-width:300px;color:rgba(0,0,0,.54);font-size:15px;text-align:center}.subtitle p{display:block;-webkit-margin-before:1em;-webkit-margin-after:1em;-webkit-margin-start:0;-webkit-margin-end:0}"]
                    }] }
        ];
        /** @nocollapse */
        MatAlertDialog.ctorParameters = function () { return [
            { type: material.MatDialogRef },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [material.MAT_DIALOG_DATA,] }] }
        ]; };
        return MatAlertDialog;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MatAsyncDialog = /** @class */ (function () {
        function MatAsyncDialog(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
        }
        /**
         * @return {?}
         */
        MatAsyncDialog.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            if (this.data) {
                this.title = this.data.title ? this.data.title : 'Loading...';
                this.icon = this.data.icon ? this.data.icon : '';
                this.color = this.data.color ? this.data.color : 'primary';
            }
        };
        MatAsyncDialog.decorators = [
            { type: core.Component, args: [{
                        selector: 'mat-async-dialog',
                        template: "<mat-dialog-content fxLayout=\"column\">\n  <div class=\"title\">\n    {{title}}\n  </div>\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-spinner [color]=\"color\"></mat-spinner>\n  </div>\n</mat-dialog-content>\n\n",
                        styles: [".title{font-size:20px;margin-top:16px;margin-bottom:16px}"]
                    }] }
        ];
        /** @nocollapse */
        MatAsyncDialog.ctorParameters = function () { return [
            { type: material.MatDialogRef },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [material.MAT_DIALOG_DATA,] }] }
        ]; };
        return MatAsyncDialog;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MatConfirmDialog = /** @class */ (function () {
        function MatConfirmDialog(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
        }
        /**
         * @return {?}
         */
        MatConfirmDialog.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            if (this.data) {
                this.title = this.data.title ? this.data.title : 'Confirm';
                this.confirmMessage = this.data.confirmMessage ? this.data.confirmMessage : 'Are you sure ?';
                this.confirmTextButton = this.data.confirmTextButton ? this.data.confirmTextButton : 'Confirm';
                this.cancelTextButton = this.data.cancelTextButton ? this.data.cancelTextButton : 'Cancel';
            }
        };
        MatConfirmDialog.decorators = [
            { type: core.Component, args: [{
                        selector: 'mat-confirm-dialog',
                        template: "<h1 matDialogTitle>{{title}}</h1>\n<div mat-dialog-content>{{confirmMessage}}</div>\n<div mat-dialog-actions class=\"pt-24\">\n  <button mat-raised-button class=\"mat-accent mr-16\" (click)=\"dialogRef.close(true)\">{{confirmTextButton}}</button>\n  <button mat-button (click)=\"dialogRef.close(false)\">{{cancelTextButton}}</button>\n</div>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        MatConfirmDialog.ctorParameters = function () { return [
            { type: material.MatDialogRef },
            { type: undefined, decorators: [{ type: core.Inject, args: [material.MAT_DIALOG_DATA,] }] }
        ]; };
        return MatConfirmDialog;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core.Component, args: [{
                        selector: 'mat-input-dialog',
                        template: "<mat-dialog-content fxLayout=\"column\">\n  <div class=\"title\">\n    {{title}}\n  </div>\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-form-field class=\"example-full-width\">\n      <input matInput #input [placeholder]=\"placeholder\">\n      <mat-icon matSuffix [color]=\"color\">{{icon}}</mat-icon>\n    </mat-form-field>\n  </div>\n</mat-dialog-content>\n\n<mat-dialog-actions fxLayoutAlign=\"center center\">\n  <button mat-raised-button\n          (click)=\"dialogRef.close(input.value)\"\n          [color]=\"color\">\n    {{textButton}}\n  </button>\n</mat-dialog-actions>\n",
                        styles: [".title{font-size:20px;margin-top:16px;margin-bottom:16px}"]
                    }] }
        ];
        /** @nocollapse */
        MatInputDialog.ctorParameters = function () { return [
            { type: material.MatDialogRef },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [material.MAT_DIALOG_DATA,] }] }
        ]; };
        return MatInputDialog;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core.Component, args: [{
                        selector: 'mat-loading-dialog',
                        template: "<mat-dialog-content fxLayout=\"column\">\n  <div class=\"title\">\n    {{title}}\n  </div>\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-spinner [color]=\"color\"></mat-spinner>\n  </div>\n</mat-dialog-content>\n\n",
                        styles: [".title{font-size:20px;margin-top:16px;margin-bottom:16px}"]
                    }] }
        ];
        /** @nocollapse */
        MatLoadingDialog.ctorParameters = function () { return [
            { type: material.MatDialogRef },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [material.MAT_DIALOG_DATA,] }] }
        ]; };
        return MatLoadingDialog;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core.Component, args: [{
                        selector: 'mat-radio-dialog',
                        template: "<mat-dialog-content fxLayout=\"column\">\n  <div class=\"title\">\n    {{title}}\n  </div>\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-radio-group #radioGroup>\n      <mat-radio-button *ngFor=\"let option of options\" name=\"more_options\"\n                        [value]=\"option.value\">\n        {{option.viewValue ? option.viewValue : option.value}}\n      </mat-radio-button>\n    </mat-radio-group>\n  </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"center center\">\n  <button mat-raised-button\n          (click)=\"dialogRef.close(radioGroup.selected.value)\"\n          [color]=\"color\">\n    {{textButton}}\n  </button>\n</mat-dialog-actions>\n",
                        styles: [".title{font-size:20px;margin-top:16px;margin-bottom:16px}mat-radio-group{display:flex;flex-direction:column;margin:15px 0}mat-radio-button{margin:5px}"]
                    }] }
        ];
        /** @nocollapse */
        MatRadioDialog.ctorParameters = function () { return [
            { type: material.MatDialogRef },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [material.MAT_DIALOG_DATA,] }] }
        ]; };
        return MatRadioDialog;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core.Component, args: [{
                        selector: 'mat-select-dialog',
                        template: "<mat-dialog-content fxLayout=\"column\">\n  <div class=\"title\">\n    {{title}}\n  </div>\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-form-field>\n      <mat-label>options</mat-label>\n      <mat-select #select>\n        <mat-option *ngFor=\"let option of options\" [value]=\"option.value\">\n          {{option.viewValue ? option.viewValue : option.value}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n</mat-dialog-content>\n\n<mat-dialog-actions fxLayoutAlign=\"center center\">\n  <button mat-raised-button\n          [color]=\"color\">\n    {{textButton}}\n  </button>\n</mat-dialog-actions>\n\n",
                        styles: [".title{font-size:20px;margin-top:16px;margin-bottom:16px}"]
                    }] }
        ];
        /** @nocollapse */
        MatSelectDialog.ctorParameters = function () { return [
            { type: material.MatDialogRef },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [material.MAT_DIALOG_DATA,] }] }
        ]; };
        return MatSelectDialog;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MatTimerDialog = /** @class */ (function () {
        function MatTimerDialog(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
        }
        /**
         * @return {?}
         */
        MatTimerDialog.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            if (this.data) {
                this.title = this.data.title ? this.data.title : 'Loading...';
                this.icon = this.data.icon ? this.data.icon : '';
                this.color = this.data.color ? this.data.color : 'primary';
            }
        };
        MatTimerDialog.decorators = [
            { type: core.Component, args: [{
                        selector: 'mat-timer-dialog',
                        template: "<p>\n  mat-timer-dialog works!\n</p>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        MatTimerDialog.ctorParameters = function () { return [
            { type: material.MatDialogRef },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [material.MAT_DIALOG_DATA,] }] }
        ]; };
        return MatTimerDialog;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var dialogs = [
        MatAlertDialog,
        MatAsyncDialog,
        MatConfirmDialog,
        MatInputDialog,
        MatLoadingDialog,
        MatRadioDialog,
        MatSelectDialog,
        MatTimerDialog,
    ];
    var MatDialogsModule = /** @class */ (function () {
        function MatDialogsModule() {
        }
        MatDialogsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            flexLayout.FlexLayoutModule,
                            material.MatDialogModule,
                            material.MatButtonModule,
                            material.MatIconModule,
                            material.MatInputModule,
                            material.MatProgressSpinnerModule,
                            material.MatRadioModule,
                            material.MatSelectModule
                        ],
                        exports: __spread(dialogs, [material.MatDialogModule, flexLayout.FlexLayoutModule]),
                        entryComponents: __spread(dialogs),
                        declarations: __spread(dialogs)
                    },] }
        ];
        return MatDialogsModule;
    }());

    exports.MatAlertDialog = MatAlertDialog;
    exports.MatAsyncDialog = MatAsyncDialog;
    exports.MatConfirmDialog = MatConfirmDialog;
    exports.MatDialogsModule = MatDialogsModule;
    exports.MatInputDialog = MatInputDialog;
    exports.MatLoadingDialog = MatLoadingDialog;
    exports.MatRadioDialog = MatRadioDialog;
    exports.MatSelectDialog = MatSelectDialog;
    exports.MatTimerDialog = MatTimerDialog;
    exports.dialogs = dialogs;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=angular-material-extensions-dialogs.umd.js.map
