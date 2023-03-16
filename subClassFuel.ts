import { Engine } from "./subClaseEngine";
import { Equipment } from "./classEquipment";

enum fuelType {
    Oil,
    Gas,
    CompressAir,
    water
}

export class Fuel  {
    private id: string;
    private cylinders: number;
    private fuelType: Enumerator;
    constructor (id: string, cylinders: number, fuelType: fuelType) {
        this.id = id;
        this.cylinders = cylinders;
        this.fuelType;     
    }
}