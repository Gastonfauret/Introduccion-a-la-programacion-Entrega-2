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
exports.Engine = void 0;
var classEquipment_1 = require("./classEquipment");
var Engine = /** @class */ (function (_super) {
    __extends(Engine, _super);
    function Engine(id, powerHP, efficiency, manufacturer) {
        return _super.call(this, id, powerHP, efficiency, manufacturer) || this;
    }
    Engine.prototype.consultPump = function (id) {
    };
    Engine.prototype.addPump = function (id, powerHP, efficiency, manufacturer) {
    };
    Engine.prototype.editPump = function (id, powerHP, efficiency, manufacturer) {
    };
    Engine.prototype.deletePump = function (id) {
    };
    return Engine;
}(classEquipment_1.Equipment));
exports.Engine = Engine;
