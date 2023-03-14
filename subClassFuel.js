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
exports.Fuel = void 0;
var subClaseEngine_1 = require("./subClaseEngine");
var Fuel = /** @class */ (function (_super) {
    __extends(Fuel, _super);
    function Fuel(id, cylinders, fuelType) {
        var _this = _super.call(this, id, cylinders, fuelType) || this;
        _this.cylinders = cylinders;
        _this.fuelType = fuelType;
        return _this;
    }
    Fuel.prototype.consultPump = function (id) {
    };
    Fuel.prototype.addPump = function (id, cylinders, fuelType) {
    };
    Fuel.prototype.editPump = function (id, cylinders, fuelType) {
    };
    Fuel.prototype.deletePump = function (id) {
    };
    return Fuel;
}(subClaseEngine_1.Engine));
exports.Fuel = Fuel;
