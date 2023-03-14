const equipment: Equipment [] = [];
export class Equipment {
    private id: string;
    private description: string;
    private dateManufacture: Date;
    private dateInstallation: Date;    

    constructor(id: string, description: string, dateManufacture: Date, dateInstallation: Date) {
        this.id = id;
        this.description = description;
        this.dateManufacture = dateManufacture;
        this.dateInstallation = dateInstallation
    }

    consultEquipment(id:string, equipment: Equipment[]) { 
        let foundId: Equipment[] = equipment.filter((file: any) => file.id === id); 
        if (foundId.length) {
            console.log(`The Id: ${this.id} was found in data base.`)
            console.log(foundId);
            ;
        } else {
            console.log(`The Id: ${id} couldn't be found in data base`);            
        }     
    }

    addEquiment(equipment, newEquipment: Equipment) {
        if (equipment.push(newEquipment)) {
            console.log(`The new equipment has been successfully added.`, newEquipment);
        } else {
            console.log(`The new equipment couldn't be added.`);
        }
    }

    // editEquipment(id: string, equipment, data: string) {
    //     let modifiedId = equipment.filter((file: any) => file.id === id);
    //     // const modifiedId: any = this.consultEquipment(id, equipment);
    //     if (modifiedId.length) {
    //         modifiedId.id = data;
    //         console.log(`The id "${id}" has been modified. Now, its identified as "${data}"`);
    //         } else {
    //         console.log(`The id "${id}" couldn't be modify.`);            
    //     }
    // }

    deleteEquipment(id: string, equipment){
        let index: number = equipment.length;
        while (index > 0) {
            const deleteId: number = equipment.findIndex((element: any) => element.id === id);
            if (deleteId >= 0) {
                equipment.splice(deleteId, 1);
                console.log(`The Id: '${id}' has been deleted sucesfully.`);                
            }
        index--;
        }
    }
}