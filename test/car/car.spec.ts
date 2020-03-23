import { expect } from "chai";
import Car from "../../src/car/car";

describe("Car", function () {
    describe("display", function () {
        it("should display the make, model and year", function () {
            const c = new Car("Audi", "A5", 2004);
            const message: any = c.display();
            expect(message).to.equal("This car is a 2004 Audi A5");
        });

        it("should display a turbo if one is present", function () {
            const c = new Car("Audi", "A5", 2004);
            c.setTurbo(true);
            const message: any = c.display();
            expect(message).to.equal("This car is a 2004 Audi A5 and it's got a turbo!");
        });
    });

    describe("addTurbo", function () {
        it("should add a turbo to a car", function () {
            const c = new Car("Volvo", "XC90", 2002);

            // Cars shouldn't have turbo by default
            expect(c.hasTurbo()).to.be.false;

            c.addTurbo();
            expect(c.hasTurbo()).to.be.true;
        });
    });
});
