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
exports.Pump = void 0;
var classEquipment_1 = require("./classEquipment");
var Pump = /** @class */ (function (_super) {
    __extends(Pump, _super);
    function Pump(id, inletFlow, outpuFlow, manufacturer) {
        return _super.call(this, id, inletFlow, outpuFlow, manufacturer) || this;
    }
    Pump.prototype.consultPump = function (id) {
    };
    Pump.prototype.addPump = function (id, inletFlow, outpuFlow, manufacturer) {
    };
    Pump.prototype.editPump = function (id, inletFlow, outpuFlow, manufacturer) {
    };
    Pump.prototype.deletePump = function (id) {
    };
    return Pump;
}(classEquipment_1.Equipment));
exports.Pump = Pump;
