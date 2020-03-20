import Car from "./car/car";
import Sandwich from "./sandwich/sandwich";

const c = new Car("BMW", "3 Series", 2015);
const s = new Sandwich("BLT");

// This is where the program starts!!
c.addTurbo();
c.display();

s.addTopping("lettuce");
s.eat();
