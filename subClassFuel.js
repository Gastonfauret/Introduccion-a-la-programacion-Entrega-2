"use strict";
exports.__esModule = true;
exports.Fuel = void 0;
var fuelType;
(function (fuelType) {
    fuelType[fuelType["Oil"] = 0] = "Oil";
    fuelType[fuelType["Gas"] = 1] = "Gas";
    fuelType[fuelType["CompressAir"] = 2] = "CompressAir";
    fuelType[fuelType["water"] = 3] = "water";
})(fuelType || (fuelType = {}));
var Fuel = /** @class */ (function () {
    function Fuel(id, cylinders, fuelType) {
        this.id = id;
        this.cylinders = cylinders;
        this.fuelType = fuelType;
    }
    return Fuel;
}());
exports.Fuel = Fuel;
