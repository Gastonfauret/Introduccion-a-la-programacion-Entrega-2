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
exports.Hoses = void 0;
var classEquipment_1 = require("./classEquipment");
var Hoses = /** @class */ (function (_super) {
    __extends(Hoses, _super);
    function Hoses(id, elements, size, threadMaterial) {
        return _super.call(this, id, elements, size, threadMaterial) || this;
    }
    Hoses.prototype.consultPump = function (id) {
    };
    Hoses.prototype.addPump = function (id, elements, size, threadMaterial) {
    };
    Hoses.prototype.editPump = function (id, elements, size, threadMaterial) {
    };
    Hoses.prototype.deletePump = function (id) {
    };
    return Hoses;
}(classEquipment_1.Equipment));
exports.Hoses = Hoses;
