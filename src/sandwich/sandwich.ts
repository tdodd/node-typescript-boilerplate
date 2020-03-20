export default class Sandwich {
    constructor(type: string) {
        this.type = type;
    }

    private type: string;
    private toppings: any[] = [];

    public addTopping(t: any) {
        this.toppings.push(t);
    }

    public eat() {
        console.log("Eating a sandwich of type", this.type);
        for (let i = 0; i < this.toppings.length; i++) {
            console.log("Eating", this.toppings[i]);
        }
        this.toppings = [];
    }
}
