import { Engine } from "./subClaseEngine";

export class Fuel extends Engine {
    private cylinders: number;
    private fuelType: number;
    constructor (id, cylinders, fuelType) {
        super(id, cylinders, fuelType, );
        this.cylinders = cylinders;
        this.fuelType = fuelType;     
    }

    consultPump(id:string) {        
    }

    addPump(id: string, cylinders: number, fuelType: Enumerator) {
    }

    editPump(id: string, cylinders: number, fuelType: Enumerator) {
    }

    deletePump(id: string){
    }
}