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
    function Engine(id, powerHP, efficiency, manufacturer) {
        this.id = id;
        this.powerHP = powerHP;
        this.efficiency = efficiency;
        this.manufacturer = manufacturer;
    }
    return Engine;
}());
exports.Engine = Engine;
