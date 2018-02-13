export interface NewCar {
    incomingModel: any;
    incomingDoors: any;
    incomingMPG: any;
    incomingColor: any;
}

export class Car {
    color: any;
    model: any;
    doors: any;
    MPG: any;

    constructor(labelledObj: NewCar) {
        this.color = labelledObj.incomingColor;
        this.model = labelledObj.incomingModel;
        this.doors = labelledObj.incomingDoors;
        this.MPG = labelledObj.incomingMPG;
    }
}
