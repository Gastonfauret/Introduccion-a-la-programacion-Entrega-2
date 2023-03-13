import { Equipment } from "./classEquipment";

export class Pump extends Equipment {
    private inletFlow: number;
    private outpuFlow: number;
    private manufacturer: string
    constructor (id, inletFlow, outpuFlow, manufacturer) {
        super(id, inletFlow, outpuFlow, manufacturer)       
    }

    consultPump(id:string) {        
    }

    addPump(id: string, inletFlow: number, outpuFlow: number, manufacturer: string) {
    }

    editPump(id: string, inletFlow: number, outpuFlow: number, manufacturer: string) {
    }

    deletePump(id: string){
    }
}