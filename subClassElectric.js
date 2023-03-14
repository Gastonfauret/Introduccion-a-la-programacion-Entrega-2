"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Electric = void 0;
var subClaseMotor_1 = require("./subClaseMotor");
var Electric = /** @class */ (function (_super) {
    __extends(Electric, _super);
    function Electric(id, voltage, consumptionKwH, isLowConsumption) {
        return _super.call(this, id, voltage, consumptionKwH, isLowConsumption) || this;
    }
    Electric.prototype.consultElectric = function (id) {
    };
    Electric.prototype.addElectric = function (id, cylinders, fuelType) {
    };
    Electric.prototype.editElectric = function (id, cylinders, fuelType) {
    };
    Electric.prototype.deleteElectric = function (id) {
    };
    return Electric;
}(subClaseMotor_1.Engine));
exports.Electric = Electric;
