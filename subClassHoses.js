"use strict";
exports.__esModule = true;
exports.Hoses = void 0;
var Materials;
(function (Materials) {
    Materials[Materials["Plastic"] = 0] = "Plastic";
    Materials[Materials["Iron"] = 1] = "Iron";
    Materials[Materials["Wood"] = 2] = "Wood";
})(Materials || (Materials = {}));
var Hoses = /** @class */ (function () {
    function Hoses(id, elements, size, threadMaterial) {
        this.id = id;
        this.elements = elements;
        this.size = size,
            this.threadMaterial = threadMaterial;
    }
    return Hoses;
}());
exports.Hoses = Hoses;
