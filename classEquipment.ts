export class Equipment {
    private id: string;
    private description: string;
    private dateManufacture: Date;
    private dateInstallation: Date

    constructor(id: string, description: string, dateManufacture: Date, dateInstallation: Date) {
        this.id = id;
        this.description = description;
        this.dateManufacture = dateManufacture;
        this.dateInstallation = dateInstallation
    }

    consultEquiment(id:string) {        
    }

    addEquiment(id: string, description: string, dateManufacture: Date, dateInstallation: Date) {
    }

    editEquiment(id: string, description: string, dateManufacture: Date, dateInstallation: Date) {
    }

    deleteEquiment(id: string){
    }
}