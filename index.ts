import { Equipment} from "./classEquipment";
import { Pump } from "./subClassPump";
import { Hoses } from "./subClassHoses";
import { Engine } from "./subClaseEngine";
import { Electric } from "./subClassElectric";
import { Fuel } from "./subClassFuel"

const date = new Date();
const equipment: Equipment [] = [];

const motor = new Equipment('001', 'Motor', date, date);
const motor1 = new Equipment('002', 'Motor2', date, date);
const motor2 = new Equipment('003', 'Motor3', date, date)
// console.log(motor);

motor.addEquiment(equipment, motor);
motor.addEquiment(equipment, motor1);
motor.addEquiment(equipment, motor2);
motor.consultEquipment('001', equipment)
// motor.editEquiment('001', equipment, '002');
// motor.consultEquipment('Motor', equipment)
// console.log(equipment);


