"use strict";
exports.__esModule = true;
exports.Equipment = void 0;
var equipment = [];
var Equipment = /** @class */ (function () {
    function Equipment(id, description, dateManufacture, dateInstallation) {
        this.id = id;
        this.description = description;
        this.dateManufacture = dateManufacture;
        this.dateInstallation = dateInstallation;
    }
    Equipment.prototype.consultEquipment = function (id, equipment) {
        var foundId = equipment.filter(function (file) { return file.id === id; });
        if (foundId.length) {
            console.log("The Id: ".concat(this.id, " was found in data base."));
            console.log(foundId);
            ;
        }
        else {
            console.log("The Id: ".concat(id, " couldn't be found in data base"));
        }
    };
    Equipment.prototype.addEquiment = function (equipment, newEquipment) {
        if (equipment.push(newEquipment)) {
            console.log("The new equipment has been successfully added.", newEquipment);
        }
        else {
            console.log("The new equipment couldn't be added.");
        }
    };
    Equipment.prototype.editEquipment = function (id, equipment, data) {
        var modifiedId = equipment.filter(function (file) { return file.id === id; });
        // const modifiedId: any = this.consultEquipment(id, equipment);
        if (modifiedId.length) {
            modifiedId.id = data;
            console.log("The id \"".concat(id, "\" has been modified. Now, its identified as \"").concat(data, "\""));
        }
        else {
            console.log("The id \"".concat(id, "\" couldn't be modify."));
        }
    };
    Equipment.prototype.deleteEquipment = function (id, equipment) {
        var index = equipment.length;
        while (index > 0) {
            var deleteId = equipment.findIndex(function (element) { return element.id === id; });
            if (deleteId >= 0) {
                equipment.splice(deleteId, 1);
                console.log("The Id: '".concat(id, "' has been deleted sucesfully."));
            }
            index--;
        }
    };
    return Equipment;
}());
exports.Equipment = Equipment;
