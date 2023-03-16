import { Equipment } from "./classEquipment";
import { Hoses } from "./subClassHoses";
import { Pump } from "./subClassPump";

enum Level {
    low = 'Low',
    regular = 'Regular',
    good = 'Good',
    veryGood = 'Very Good',
    excelent = 'Excelent'
}

export class Engine {
    private id: string;
    private powerHP: number;
    private efficiency: Level
    private manufacturer: string
    constructor (id: string, powerHP: number, efficiency: Level, manufacturer: string) {
        this.id = id;
        this.powerHP = powerHP;
        this.efficiency = efficiency;
        this.manufacturer = manufacturer;
    }
}