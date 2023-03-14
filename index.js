"use strict";
exports.__esModule = true;
var classEquipment_1 = require("./classEquipment");
var date = new Date();
var equipment = [];
var motor = new classEquipment_1.Equipment('001', 'Motor', date, date);
// console.log(motor);
motor.addEquiment(equipment, motor);
motor.consultEquipment('001', equipment);
// motor.editEquiment('001', equipment, '002');
// motor.consultEquipment('Motor', equipment)
// console.log(equipment);
