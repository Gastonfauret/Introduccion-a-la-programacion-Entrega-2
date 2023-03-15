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

motor.addEquiment(equipment, motor);
motor.addEquiment(equipment, motor1);
motor.addEquiment(equipment, motor2);
motor.editEquipment('001', equipment, '0010');
// motor.consultEquipment('002', equipment);
// motor.deleteEquipment('003', equipment);

console.log(equipment);


