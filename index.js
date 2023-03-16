"use strict";
exports.__esModule = true;
var classEquipment_1 = require("./classEquipment");
var subClassPump_1 = require("./subClassPump");
var subClassHoses_1 = require("./subClassHoses");
var subClassEngine_1 = require("./subClassEngine");
var subClassElectric_1 = require("./subClassElectric");
var subClassFuel_1 = require("./subClassFuel");
var fs = require("fs");
var date = new Date();
var equipment = [];
try {
    var data = fs.readFileSync('./equipmentFile.json', "utf8");
    var concess = JSON.parse(data);
    equipment = concess.map(function (car) { return car; });
}
catch (error) {
    var errorMessage = "No se ha podido acceder al archivo de texto";
    fs.writeFileSync("./error.txt", errorMessage, "utf8");
}
var Level;
(function (Level) {
    Level["low"] = "Low";
    Level["regular"] = "Regular";
    Level["good"] = "Good";
    Level["veryGood"] = "Very Good";
    Level["excelent"] = "Excelent";
})(Level || (Level = {}));
var Materials;
(function (Materials) {
    Materials["plastic"] = "Plastic";
    Materials["iron"] = "Iron";
    Materials["wood"] = "Wood";
})(Materials || (Materials = {}));
var electric = new subClassElectric_1.Electric('0001', 200, 100, true);
var fuel = new subClassFuel_1.Fuel('0003', 4, 1);
var pump = new subClassPump_1.Pump('0002', 100, 200, 'ARG Hoses Inc');
var engine = new subClassEngine_1.Engine('0004', 20, Level.good, 'ARG Motors Inc.', electric, fuel);
var hoses = new subClassHoses_1.Hoses('0005', 4, 12, Materials.plastic);
var motor = new classEquipment_1.Equipment('001', 'Motor', date, date, pump, engine, hoses);
motor.addEquipment(equipment, motor);
var updatedEquipment = motor.arrayAJason(equipment);
console.log(updatedEquipment);
