import { Engine } from "./subClaseMotor";

export class Hoses extends Engine {
    private cylinders: number;
    private fuelType: Enumerator;
    constructor (id, cylinders, fuelType,) {
        super(id, cylinders, fuelType,)       
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