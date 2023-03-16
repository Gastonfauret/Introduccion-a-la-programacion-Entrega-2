"use strict";
exports.__esModule = true;
exports.Electric = void 0;
var Electric = /** @class */ (function () {
    function Electric(id, voltage, consumptionKwH, isLowConsumption) {
        this.id = id;
        this.voltage = voltage;
        this.consumptionKwH = consumptionKwH;
        this.isLowConsumption = isLowConsumption;
    }
    return Electric;
}());
exports.Electric = Electric;
