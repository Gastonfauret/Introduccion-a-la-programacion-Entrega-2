import { Equipment } from "./classEquipment";

export class Hoses extends Equipment {
    private elements: number;
    private size: number;
    private threadMaterial: Enumerator;
    constructor (id, elements, size, threadMaterial) {
        super(id, elements, size, threadMaterial)       
    }

    consultPump(id:string) {        
    }

    addPump(id: string, elements: number, size: number, threadMaterial: Enumerator) {
    }

    editPump(id: string, elements: number, size: number, threadMaterial: Enumerator) {
    }

    deletePump(id: string){
    }
}