(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./src/main/webapp/app/registry/history/history.component.ts":
/*!*******************************************************************!*\
  !*** ./src/main/webapp/app/registry/history/history.component.ts ***!
  \*******************************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HistoryComponent\", function() { return HistoryComponent; });\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js\");\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ \"./node_modules/rxjs/_esm2015/operators/index.js\");\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ \"./node_modules/rxjs/_esm2015/index.js\");\n/* harmony import */ var _history_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history.service */ \"./src/main/webapp/app/registry/history/history.service.ts\");\n/* harmony import */ var app_shared_refresh_refresh_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/refresh/refresh.service */ \"./src/main/webapp/app/shared/refresh/refresh.service.ts\");\n/* harmony import */ var app_shared_refresh_refresh_selector_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/refresh/refresh-selector.component */ \"./src/main/webapp/app/shared/refresh/refresh-selector.component.ts\");\n/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ \"./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js\");\n/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ \"./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js\");\n/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-jhipster */ \"./node_modules/ng-jhipster/__ivy_ngcc__/fesm2015/ng-jhipster.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction HistoryComponent_ng_template_18_Template(rf, ctx) { }\nfunction HistoryComponent_ng_template_23_Template(rf, ctx) { }\nfunction HistoryComponent_tbody_43_tr_2_Template(rf, ctx) { if (rf & 1) {\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](0, \"tr\");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](1, \"\\n                        \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](2, \"td\");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](3);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵpipe\"](4, \"date\");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](5, \"\\n                        \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](6, \"td\");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](7);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](8, \"\\n                    \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n} if (rf & 2) {\n    const history_r4 = ctx.$implicit;\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](3);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtextInterpolate1\"](\"\\n                            \", _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵpipeBind2\"](4, 2, history_r4.key, \"medium\"), \"\\n                        \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](4);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtextInterpolate1\"](\"\\n                            \", history_r4.value, \"\\n                        \");\n} }\nfunction HistoryComponent_tbody_43_Template(rf, ctx) { if (rf & 1) {\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](0, \"tbody\");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](1, \"\\n                    \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtemplate\"](2, HistoryComponent_tbody_43_tr_2_Template, 9, 5, \"tr\", 12);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵpipe\"](3, \"orderBy\");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵpipe\"](4, \"keys\");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](5, \"\\n                    \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n} if (rf & 2) {\n    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵnextContext\"]();\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](2);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵproperty\"](\"ngForOf\", _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵpipeBind3\"](3, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵpipeBind1\"](4, 5, ctx_r2.histories), \"key\", false));\n} }\nclass HistoryComponent {\n    constructor(historyService, refreshService) {\n        this.historyService = historyService;\n        this.refreshService = refreshService;\n        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__[\"Subject\"]();\n    }\n    ngOnInit() {\n        this.refreshService.refreshReload$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__[\"takeUntil\"])(this.unsubscribe$)).subscribe(() => this.refresh());\n        this.refresh();\n    }\n    refresh() {\n        this.historyService\n            .findAll()\n            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__[\"takeUntil\"])(this.unsubscribe$))\n            .subscribe(history => {\n            this.eurekaHistory = history;\n            if (this.activeKey) {\n                this.activate(this.activeKey);\n            }\n            else {\n                this.activate('registered');\n            }\n        });\n    }\n    activate(key) {\n        this.activeKey = key;\n        this.histories = this.activeKey === 'registered' ? this.eurekaHistory.registered : this.eurekaHistory.canceled;\n    }\n    beforeChange($event) {\n        this.activate($event.nextId);\n    }\n    ngOnDestroy() {\n        // prevent memory leak when component destroyed\n        this.unsubscribe$.next();\n        this.unsubscribe$.complete();\n    }\n}\nHistoryComponent.ɵfac = function HistoryComponent_Factory(t) { return new (t || HistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵdirectiveInject\"](_history_service__WEBPACK_IMPORTED_MODULE_3__[\"HistoryService\"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵdirectiveInject\"](app_shared_refresh_refresh_service__WEBPACK_IMPORTED_MODULE_4__[\"RefreshService\"])); };\nHistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵdefineComponent\"]({ type: HistoryComponent, selectors: [[\"jhi-history\"]], decls: 50, vars: 1, consts: [[1, \"head\"], [1, \"d-inline-block\"], [1, \"float-right\", \"refresh-left-side\"], [1, \"panel\", \"panel-default\"], [1, \"panel-body\"], [\"activeId\", \"registered\", \"type\", \"pills\", 3, \"tabChange\"], [\"id\", \"registered\", \"title\", \"Last registered leases\"], [\"ngbTabContent\", \"\"], [\"id\", \"canceled\", \"title\", \"Last canceled leases\"], [1, \"table-responsive\"], [1, \"table\", \"table-striped\"], [4, \"ngIf\"], [4, \"ngFor\", \"ngForOf\"]], template: function HistoryComponent_Template(rf, ctx) { if (rf & 1) {\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](0, \"div\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](1, \"\\n    \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](2, \"div\", 0);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](3, \"\\n        \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](4, \"h2\", 1);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](5, \"Instances history\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](6, \"\\n        \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelement\"](7, \"jhi-refresh-selector\", 2);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](8, \"\\n    \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](9, \"\\n\\n    \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](10, \"div\", 3);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](11, \"\\n        \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](12, \"div\", 4);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](13, \"\\n            \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](14, \"ngb-tabset\", 5);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵlistener\"](\"tabChange\", function HistoryComponent_Template_ngb_tabset_tabChange_14_listener($event) { return ctx.beforeChange($event); });\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](15, \"\\n                \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](16, \"ngb-tab\", 6);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](17, \"\\n                    \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtemplate\"](18, HistoryComponent_ng_template_18_Template, 0, 0, \"ng-template\", 7);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](19, \"\\n                \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](20, \"\\n                \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](21, \"ngb-tab\", 8);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](22, \"\\n                    \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtemplate\"](23, HistoryComponent_ng_template_23_Template, 0, 0, \"ng-template\", 7);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](24, \"\\n                \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](25, \"\\n            \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](26, \"\\n            \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](27, \"div\", 9);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](28, \"\\n                \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](29, \"table\", 10);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](30, \"\\n                    \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](31, \"thead\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](32, \"\\n                    \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](33, \"tr\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](34, \"\\n                        \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](35, \"th\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](36, \"Time\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](37, \"\\n                        \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](38, \"th\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](39, \"Instance\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](40, \"\\n                    \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](41, \"\\n                    \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](42, \"\\n                    \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtemplate\"](43, HistoryComponent_tbody_43_Template, 6, 7, \"tbody\", 11);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](44, \"\\n                \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](45, \"\\n            \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](46, \"\\n        \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](47, \"\\n    \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](48, \"\\n\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](49, \"\\n\");\n    } if (rf & 2) {\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](43);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵproperty\"](\"ngIf\", ctx.histories);\n    } }, directives: [app_shared_refresh_refresh_selector_component__WEBPACK_IMPORTED_MODULE_5__[\"RefreshSelectorComponent\"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"NgbTabset\"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"NgbTab\"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"NgbTabContent\"], _angular_common__WEBPACK_IMPORTED_MODULE_7__[\"NgIf\"], _angular_common__WEBPACK_IMPORTED_MODULE_7__[\"NgForOf\"]], pipes: [ng_jhipster__WEBPACK_IMPORTED_MODULE_8__[\"JhiOrderByPipe\"], ng_jhipster__WEBPACK_IMPORTED_MODULE_8__[\"JhiKeysPipe\"], _angular_common__WEBPACK_IMPORTED_MODULE_7__[\"DatePipe\"]], encapsulation: 2 });\n/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵsetClassMetadata\"](HistoryComponent, [{\n        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"Component\"],\n        args: [{\n                selector: 'jhi-history',\n                templateUrl: './history.component.html'\n            }]\n    }], function () { return [{ type: _history_service__WEBPACK_IMPORTED_MODULE_3__[\"HistoryService\"] }, { type: app_shared_refresh_refresh_service__WEBPACK_IMPORTED_MODULE_4__[\"RefreshService\"] }]; }, null); })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3JlZ2lzdHJ5L2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQudHM/MGY4YyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3JlZ2lzdHJ5L2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQuaHRtbD9mYmNiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkQ7QUFFbEI7QUFDWjtBQUMrRDtBQUMxQjs7Ozs7Ozs7Ozs7SUNvQmhELHFFQUNJO0lBQUE7SUFBQSxxRUFDSTtJQUFBLHVEQUNKOztJQUFBLDREQUFLO0lBQ0w7SUFBQSxxRUFDSTtJQUFBLHVEQUNKO0lBQUEsNERBQUs7SUFDVDtJQUFBLDREQUFLOzs7SUFMRywwREFDSjtJQURJLDJOQUNKO0lBRUksMERBQ0o7SUFESSxrSkFDSjs7O0lBUEosd0VBQ0E7SUFBQTtJQUFBLG9IQUNJOzs7SUFPSjtJQUFBLDREQUFROzs7SUFSSiwwREFBZ0U7SUFBaEUscU9BQWdFOztBRGRqRixNQUFNLGdCQUFnQjtJQU0zQixZQUFvQixjQUE4QixFQUFVLGNBQThCO1FBQXRFLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUYxRixpQkFBWSxHQUFHLElBQUksNENBQU8sRUFBRSxDQUFDO0lBRWdFLENBQUM7SUFFOUYsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxnRUFBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN0RyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsY0FBYzthQUNoQixPQUFPLEVBQUU7YUFDVCxJQUFJLENBQUMsZ0VBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDbEMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO1lBQzdCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDL0I7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUM3QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFzQjtRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWMsQ0FBQyxRQUFRLENBQUM7SUFDbkgsQ0FBQztJQUVELFlBQVksQ0FBQyxNQUF5QjtRQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUEyQixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELFdBQVc7UUFDVCwrQ0FBK0M7UUFDL0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9CLENBQUM7O2dGQXhDVSxnQkFBZ0I7Z0dBQWhCLGdCQUFnQjtRQ1g3QixzRUFDSTtRQUFBO1FBQUEseUVBQ0k7UUFBQTtRQUFBLHdFQUEyQjtRQUFBLDRFQUFpQjtRQUFBLDREQUFLO1FBQ2pEO1FBQUEscUZBQW1GO1FBQ3ZGO1FBQUEsNERBQU07UUFFTjtRQUFBLDBFQUNJO1FBQUE7UUFBQSwwRUFDSTtRQUFBO1FBQUEsaUZBQ0k7UUFEOEIsMkpBQWEsd0JBQW9CLElBQUM7UUFDaEU7UUFBQSw4RUFDSTtRQUFBO1FBQUEsOEhBQTJCO1FBQy9CO1FBQUEsNERBQVU7UUFDVjtRQUFBLDhFQUNJO1FBQUE7UUFBQSw4SEFBMkI7UUFDL0I7UUFBQSw0REFBVTtRQUNkO1FBQUEsNERBQWE7UUFDYjtRQUFBLDBFQUNJO1FBQUE7UUFBQSw2RUFDSTtRQUFBO1FBQUEseUVBQ0E7UUFBQTtRQUFBLHNFQUNJO1FBQUE7UUFBQSxzRUFBSTtRQUFBLGdFQUFJO1FBQUEsNERBQUs7UUFDYjtRQUFBLHNFQUFJO1FBQUEsb0VBQVE7UUFBQSw0REFBSztRQUNyQjtRQUFBLDREQUFLO1FBQ0w7UUFBQSw0REFBUTtRQUNSO1FBQUEsbUhBQ0E7UUFTSjtRQUFBLDREQUFRO1FBQ1o7UUFBQSw0REFBTTtRQUNWO1FBQUEsNERBQU07UUFDVjtRQUFBLDREQUFNO1FBQ1Y7UUFBQSw0REFBTTtRQUNOOztRQWYyQiwyREFBaUI7UUFBakIsK0VBQWlCOzs2RkRiL0IsZ0JBQWdCO2NBSjVCLHVEQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFdBQVcsRUFBRSwwQkFBMEI7YUFDeEMiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3JlZ2lzdHJ5L2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JUYWJDaGFuZ2VFdmVudCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEV1cmVrYUhpc3RvcnksIEV1cmVrYUhpc3RvcnlUeXBlLCBIaXN0b3J5LCBIaXN0b3J5U2VydmljZSB9IGZyb20gJy4vaGlzdG9yeS5zZXJ2aWNlJztcbmltcG9ydCB7IFJlZnJlc2hTZXJ2aWNlIH0gZnJvbSAnYXBwL3NoYXJlZC9yZWZyZXNoL3JlZnJlc2guc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2poaS1oaXN0b3J5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hpc3RvcnkuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEhpc3RvcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGhpc3Rvcmllcz86IEhpc3Rvcnk7XG4gIGV1cmVrYUhpc3Rvcnk/OiBFdXJla2FIaXN0b3J5O1xuICBhY3RpdmVLZXk/OiBFdXJla2FIaXN0b3J5VHlwZTtcbiAgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhpc3RvcnlTZXJ2aWNlOiBIaXN0b3J5U2VydmljZSwgcHJpdmF0ZSByZWZyZXNoU2VydmljZTogUmVmcmVzaFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZWZyZXNoU2VydmljZS5yZWZyZXNoUmVsb2FkJC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlZnJlc2goKSk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICByZWZyZXNoKCk6IHZvaWQge1xuICAgIHRoaXMuaGlzdG9yeVNlcnZpY2VcbiAgICAgIC5maW5kQWxsKClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXG4gICAgICAuc3Vic2NyaWJlKGhpc3RvcnkgPT4ge1xuICAgICAgICB0aGlzLmV1cmVrYUhpc3RvcnkgPSBoaXN0b3J5O1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVLZXkpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2YXRlKHRoaXMuYWN0aXZlS2V5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFjdGl2YXRlKCdyZWdpc3RlcmVkJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgYWN0aXZhdGUoa2V5OiBFdXJla2FIaXN0b3J5VHlwZSk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlS2V5ID0ga2V5O1xuICAgIHRoaXMuaGlzdG9yaWVzID0gdGhpcy5hY3RpdmVLZXkgPT09ICdyZWdpc3RlcmVkJyA/IHRoaXMuZXVyZWthSGlzdG9yeSEucmVnaXN0ZXJlZCA6IHRoaXMuZXVyZWthSGlzdG9yeSEuY2FuY2VsZWQ7XG4gIH1cblxuICBiZWZvcmVDaGFuZ2UoJGV2ZW50OiBOZ2JUYWJDaGFuZ2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZhdGUoJGV2ZW50Lm5leHRJZCBhcyBFdXJla2FIaXN0b3J5VHlwZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAvLyBwcmV2ZW50IG1lbW9yeSBsZWFrIHdoZW4gY29tcG9uZW50IGRlc3Ryb3llZFxuICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG59XG4iLCI8ZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJoZWFkXCI+XG4gICAgICAgIDxoMiBjbGFzcz1cImQtaW5saW5lLWJsb2NrXCI+SW5zdGFuY2VzIGhpc3Rvcnk8L2gyPlxuICAgICAgICA8amhpLXJlZnJlc2gtc2VsZWN0b3IgY2xhc3M9XCJmbG9hdC1yaWdodCByZWZyZXNoLWxlZnQtc2lkZVwiPjwvamhpLXJlZnJlc2gtc2VsZWN0b3I+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgPG5nYi10YWJzZXQgYWN0aXZlSWQ9XCJyZWdpc3RlcmVkXCIgKHRhYkNoYW5nZSk9XCJiZWZvcmVDaGFuZ2UoJGV2ZW50KVwiIHR5cGU9XCJwaWxsc1wiPlxuICAgICAgICAgICAgICAgIDxuZ2ItdGFiIGlkPVwicmVnaXN0ZXJlZFwiIHRpdGxlPVwiTGFzdCByZWdpc3RlcmVkIGxlYXNlc1wiPlxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbmdiVGFiQ29udGVudD48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvbmdiLXRhYj5cbiAgICAgICAgICAgICAgICA8bmdiLXRhYiBpZD1cImNhbmNlbGVkXCIgdGl0bGU9XCJMYXN0IGNhbmNlbGVkIGxlYXNlc1wiPlxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbmdiVGFiQ29udGVudD48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvbmdiLXRhYj5cbiAgICAgICAgICAgIDwvbmdiLXRhYnNldD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5UaW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5JbnN0YW5jZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keSAqbmdJZj1cImhpc3Rvcmllc1wiPlxuICAgICAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGhpc3Rvcnkgb2YgKGhpc3RvcmllcyB8IGtleXMgfCBvcmRlckJ5OidrZXknOmZhbHNlKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7aGlzdG9yeS5rZXkgfCBkYXRlOidtZWRpdW0nfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3toaXN0b3J5LnZhbHVlfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/registry/history/history.component.ts\n");

/***/ }),

/***/ "./src/main/webapp/app/registry/history/history.module.ts":
/*!****************************************************************!*\
  !*** ./src/main/webapp/app/registry/history/history.module.ts ***!
  \****************************************************************/
/*! exports provided: HistoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HistoryModule\", function() { return HistoryModule; });\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js\");\n/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ \"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js\");\n/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/shared.module */ \"./src/main/webapp/app/shared/shared.module.ts\");\n/* harmony import */ var _history_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history.route */ \"./src/main/webapp/app/registry/history/history.route.ts\");\n/* harmony import */ var _history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./history.component */ \"./src/main/webapp/app/registry/history/history.component.ts\");\n\n\n\n\n\n\n\nclass HistoryModule {\n}\nHistoryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵdefineNgModule\"]({ type: HistoryModule });\nHistoryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵdefineInjector\"]({ factory: function HistoryModule_Factory(t) { return new (t || HistoryModule)(); }, imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__[\"JHipsterRegistrySharedModule\"], _angular_router__WEBPACK_IMPORTED_MODULE_1__[\"RouterModule\"].forChild([_history_route__WEBPACK_IMPORTED_MODULE_3__[\"historyRoute\"]])]] });\n(function () { (typeof ngJitMode === \"undefined\" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵsetNgModuleScope\"](HistoryModule, { declarations: [_history_component__WEBPACK_IMPORTED_MODULE_4__[\"HistoryComponent\"]], imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__[\"JHipsterRegistrySharedModule\"], _angular_router__WEBPACK_IMPORTED_MODULE_1__[\"RouterModule\"]] }); })();\n/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵsetClassMetadata\"](HistoryModule, [{\n        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"NgModule\"],\n        args: [{\n                imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__[\"JHipsterRegistrySharedModule\"], _angular_router__WEBPACK_IMPORTED_MODULE_1__[\"RouterModule\"].forChild([_history_route__WEBPACK_IMPORTED_MODULE_3__[\"historyRoute\"]])],\n                declarations: [_history_component__WEBPACK_IMPORTED_MODULE_4__[\"HistoryComponent\"]]\n            }]\n    }], null, null); })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3JlZ2lzdHJ5L2hpc3RvcnkvaGlzdG9yeS5tb2R1bGUudHM/NTRmYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUNNO0FBQ3lCO0FBRXpCO0FBQ1E7OztBQU1oRCxNQUFNLGFBQWE7OzRGQUFiLGFBQWE7b0pBQWIsYUFBYSxrQkFIZixDQUFDLHFGQUE0QixFQUFFLDREQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsMkRBQVksQ0FBQyxDQUFDLENBQUM7bUlBR25FLGFBQWEsbUJBRlQsbUVBQWdCLGFBRHJCLHFGQUE0QixFQUFFOzZGQUc3QixhQUFhO2NBSnpCLHNEQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMscUZBQTRCLEVBQUUsNERBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQywyREFBWSxDQUFDLENBQUMsQ0FBQztnQkFDOUUsWUFBWSxFQUFFLENBQUMsbUVBQWdCLENBQUM7YUFDakMiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3JlZ2lzdHJ5L2hpc3RvcnkvaGlzdG9yeS5tb2R1bGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEpIaXBzdGVyUmVnaXN0cnlTaGFyZWRNb2R1bGUgfSBmcm9tICdhcHAvc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBoaXN0b3J5Um91dGUgfSBmcm9tICcuL2hpc3Rvcnkucm91dGUnO1xuaW1wb3J0IHsgSGlzdG9yeUNvbXBvbmVudCB9IGZyb20gJy4vaGlzdG9yeS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbSkhpcHN0ZXJSZWdpc3RyeVNoYXJlZE1vZHVsZSwgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtoaXN0b3J5Um91dGVdKV0sXG4gIGRlY2xhcmF0aW9uczogW0hpc3RvcnlDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEhpc3RvcnlNb2R1bGUge31cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/registry/history/history.module.ts\n");

/***/ }),

/***/ "./src/main/webapp/app/registry/history/history.route.ts":
/*!***************************************************************!*\
  !*** ./src/main/webapp/app/registry/history/history.route.ts ***!
  \***************************************************************/
/*! exports provided: historyRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"historyRoute\", function() { return historyRoute; });\n/* harmony import */ var _history_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history.component */ \"./src/main/webapp/app/registry/history/history.component.ts\");\n\nconst historyRoute = {\n    path: '',\n    component: _history_component__WEBPACK_IMPORTED_MODULE_0__[\"HistoryComponent\"],\n    data: {\n        pageTitle: 'History'\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3JlZ2lzdHJ5L2hpc3RvcnkvaGlzdG9yeS5yb3V0ZS50cz8yZTVjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUF1RDtBQUVoRCxNQUFNLFlBQVksR0FBVTtJQUNqQyxJQUFJLEVBQUUsRUFBRTtJQUNSLFNBQVMsRUFBRSxtRUFBZ0I7SUFDM0IsSUFBSSxFQUFFO1FBQ0osU0FBUyxFQUFFLFNBQVM7S0FDckI7Q0FDRixDQUFDIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9yZWdpc3RyeS9oaXN0b3J5L2hpc3Rvcnkucm91dGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIaXN0b3J5Q29tcG9uZW50IH0gZnJvbSAnLi9oaXN0b3J5LmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBoaXN0b3J5Um91dGU6IFJvdXRlID0ge1xuICBwYXRoOiAnJyxcbiAgY29tcG9uZW50OiBIaXN0b3J5Q29tcG9uZW50LFxuICBkYXRhOiB7XG4gICAgcGFnZVRpdGxlOiAnSGlzdG9yeSdcbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/registry/history/history.route.ts\n");

/***/ }),

/***/ "./src/main/webapp/app/registry/history/history.service.ts":
/*!*****************************************************************!*\
  !*** ./src/main/webapp/app/registry/history/history.service.ts ***!
  \*****************************************************************/
/*! exports provided: HistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HistoryService\", function() { return HistoryService; });\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js\");\n/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ \"./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js\");\n\n\n\n\nclass HistoryService {\n    constructor(http) {\n        this.http = http;\n    }\n    findAll() {\n        return this.http.get('api/eureka/lastn');\n    }\n}\nHistoryService.ɵfac = function HistoryService_Factory(t) { return new (t || HistoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵinject\"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__[\"HttpClient\"])); };\nHistoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵdefineInjectable\"]({ token: HistoryService, factory: HistoryService.ɵfac, providedIn: 'root' });\n/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵsetClassMetadata\"](HistoryService, [{\n        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"Injectable\"],\n        args: [{ providedIn: 'root' }]\n    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[\"HttpClient\"] }]; }, null); })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3JlZ2lzdHJ5L2hpc3RvcnkvaGlzdG9yeS5zZXJ2aWNlLnRzPzlkZDQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkM7QUFDTzs7O0FBYTNDLE1BQU0sY0FBYztJQUN6QixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUcsQ0FBQztJQUV4QyxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBZ0Isa0JBQWtCLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs0RUFMVSxjQUFjO2lHQUFkLGNBQWMsV0FBZCxjQUFjLG1CQURELE1BQU07NkZBQ25CLGNBQWM7Y0FEMUIsd0RBQVU7ZUFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3JlZ2lzdHJ5L2hpc3RvcnkvaGlzdG9yeS5zZXJ2aWNlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBFdXJla2FIaXN0b3J5IHtcbiAgY2FuY2VsZWQ6IEhpc3Rvcnk7XG4gIHJlZ2lzdGVyZWQ6IEhpc3Rvcnk7XG59XG5cbmV4cG9ydCB0eXBlIEhpc3RvcnkgPSB7IFtrZXkgaW4gbnVtYmVyXT86IHN0cmluZyB9O1xuXG5leHBvcnQgdHlwZSBFdXJla2FIaXN0b3J5VHlwZSA9ICdyZWdpc3RlcmVkJyB8ICdjYW5jZWxlZCc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgSGlzdG9yeVNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgZmluZEFsbCgpOiBPYnNlcnZhYmxlPEV1cmVrYUhpc3Rvcnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxFdXJla2FIaXN0b3J5PignYXBpL2V1cmVrYS9sYXN0bicpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/registry/history/history.service.ts\n");

/***/ })

}]);