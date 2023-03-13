import { Equipment } from "./classEquipment";

export class Engine extends Equipment {
    private powerHP: number;
    private efficiency: Enumerator;
    private manufacturer: string
    constructor (id, powerHP, efficiency, manufacturer) {
        super(id, powerHP, efficiency, manufacturer)       
    }

    consultPump(id:string) {        
    }

    addPump(id: string, powerHP: number, efficiency: Enumerator, manufacturer: string) {
    }

    editPump(id: string, powerHP: number, efficiency: Enumerator, manufacturer: string) {
    }

    deletePump(id: string){
    }
}