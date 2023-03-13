import { Engine } from "./subClaseMotor";

export class Electric extends Engine {
    private voltage: number;
    private consumptionKwH: number;
    private isLowConsumption: boolean
    
    constructor (id, voltage, consumptionKwH, isLowConsumption) {
        super(id, voltage, consumptionKwH, isLowConsumption)       
    }

    consultElectric(id:string) {        
    }

    addElectric(id: string, cylinders: number, fuelType: Enumerator) {
    }

    editElectric(id: string, cylinders: number, fuelType: Enumerator) {
    }

    deleteElectric(id: string){
    }
}