export class Device{
    serialNumber: string;
    description: string;
    type: number;
    owner: any;

    constructor( serialNumber: string, description: string, type: number, owner: any){
        this.serialNumber = serialNumber;
        this.description = description;
        this.type = type;
        this.owner = owner;
    }   

    getType(): string{
        if ( this.type == 1){
            return "Smartphone";
        } else if ( this.type == 2 ){
            return "Tablet";
        } else {
            return "";
        }

    }
}