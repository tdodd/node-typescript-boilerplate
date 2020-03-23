import CarHelper from "./car-helper";

export default class Car implements ICar {
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    private make: string;
    private model: string;
    private year: number;
    private turbo = false;

    public setTurbo(val: boolean) {
        this.turbo = val;
    }

    public hasTurbo() {
        return this.turbo;
    }

    public display(): string {
        let message = `This car is a ${this.year} ${this.make} ${this.model}`;
        message += this.turbo ? " and it's got a turbo!" : "";
        console.log(message);
        return message;
    }

    public addTurbo() {
        CarHelper.addTurbo(this);
    }
}
