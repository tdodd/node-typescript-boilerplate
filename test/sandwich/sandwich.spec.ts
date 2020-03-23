import { expect } from "chai";
import Sandwich from "../../src/sandwich/sandwich";
import TestUtils from "../test-utils";

describe("Sandwich", function () {
    describe("constructor", function () {
        it("should create a sandwich", function () {
            const s = new Sandwich("Ham and Swiss");
            expect(s).to.have.property("toppings").that.is.empty;
        });
    });

    describe("addTopping", function () {
        it("should add toppings to a sandwich", function () {
            const s = new Sandwich("Ham and Swiss");
            const expectedToppings = ["ham", "mayo", "swiss cheese"];
            s.addTopping("ham");
            s.addTopping("mayo");
            s.addTopping("swiss cheese");
            expect(s).to.have.property("toppings").deep.equal(expectedToppings);
        });
    });

    describe("eat", function () {
        it("should remove all toppings", function () {
            const s = new Sandwich("Ham and Swiss");
            s.addTopping("ham");
            s.addTopping("mayo");
            s.addTopping("swiss cheese");
            s.eat();
            expect(s).to.have.property("toppings").that.is.empty;

            const logs = TestUtils.getLogs();
            expect(logs[0]).to.equal("Eating a sandwich of type Ham and Swiss");
            expect(logs[1]).to.equal("Eating ham");
            expect(logs[2]).to.equal("Eating mayo");
            expect(logs[3]).to.equal("Eating swiss cheese");
        });
    });
});
