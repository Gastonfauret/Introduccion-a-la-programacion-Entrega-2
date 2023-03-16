import { Equipment} from "./classEquipment";
import { Pump } from "./subClassPump";
import { Hoses } from "./subClassHoses";
import { Engine } from "./subClaseEngine";
import { Electric } from "./subClassElectric";
import { Fuel } from "./subClassFuel"

const date = new Date();
const equipment: Equipment [] = [];

enum Level {
    low = 'Low',
    regular = 'Regular',
    good = 'Good',
    veryGood = 'Very Good',
    excelent = 'Excelent'
}

enum Materials {
    plastic = 'Plastic',
    iron = 'Iron',
    wood = 'Wood'
}

const electricEngine = new Electric('0001', 200, 100, true); 
const fuel = new Fuel('0003', 4, 1)
const pump = new Pump('0002', 100, 200, 'Hoses Inc');
const engine = new Engine('0004', 20, Level.good, 'Arg Motors Inc.');
const hoses = new Hoses('0005', 4, 12, Materials.plastic);

const motor = new Equipment('001', 'Motor', date, date, pump, engine, hoses);

console.log(motor);


