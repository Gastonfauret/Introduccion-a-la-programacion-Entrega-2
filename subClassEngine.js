"use strict";
exports.__esModule = true;
exports.Engine = void 0;
var Level;
(function (Level) {
    Level["low"] = "Low";
    Level["regular"] = "Regular";
    Level["good"] = "Good";
    Level["veryGood"] = "Very Good";
    Level["excelent"] = "Excelent";
})(Level || (Level = {}));
var Engine = /** @class */ (function () {
    function Engine(id, powerHP, efficiency, manufacturer, electric, fuel) {
        this.id = id;
        this.powerHP = powerHP;
        this.efficiency = efficiency;
        this.manufacturer = manufacturer;
        this.electric = electric;
        this.fuel = fuel;
    }
    return Engine;
}());
exports.Engine = Engine;
