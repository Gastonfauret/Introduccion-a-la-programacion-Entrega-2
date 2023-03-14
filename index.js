"use strict";
exports.__esModule = true;
var classEquipment_1 = require("./classEquipment");
var date = new Date();
var equipment = [];
var motor = new classEquipment_1.Equipment('001', 'Motor', date, date);
var motor1 = new classEquipment_1.Equipment('002', 'Motor2', date, date);
var motor2 = new classEquipment_1.Equipment('003', 'Motor3', date, date);
// console.log(motor);
motor.addEquiment(equipment, motor);
motor.addEquiment(equipment, motor1);
motor.addEquiment(equipment, motor2);
// motor.consultEquipment('002', equipment)
// motor.deleteEquipment('003', equipment)
motor.editEquipment('001', equipment, '00022');
// motor.consultEquipment('Motor', equipment)
console.log(equipment);
