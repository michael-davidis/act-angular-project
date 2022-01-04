export class Device{
    serialNumber: string;
    description: string;
    type: number;

    constructor( serialNumber: string, description: string, type: number){
        this.serialNumber = serialNumber;
        this.description = description;
        this.type = type;
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