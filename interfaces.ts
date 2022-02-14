/* 
    Interfaces
    "Interfaces + classes = how we get really strong code reuse in TS"
    - Creates a new type, describing the property names and value types of an object
 */
// Interfaces can be made to work with different types of object
// like umbrella type objects
interface Reportable {
  //   name: string;
  //   //   not limited to primitive values
  //   year: Date;
  //   broken: boolean;
  //   can define functions
  summary(): string;
}
const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name ${this.name} \n Year: ${this.year} \n Broken: ${this.broken}`;
  },
};

const myDrink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

// * gate keep by interface Reportable
const printSummary = (item: Reportable): void => {
  item.summary();
};

// only check that it has the interface properties or functions
// extra functions and methods are ignore
printSummary(oldCivic);
// works with a very different object
printSummary(myDrink);

/* general strategy for reusable code in TS
    - Create functions that accept arguments that are typed with interfaces
    - Objects/classes can decide to 'implement' a given interface to work with a function
        - The interface acts has a gate keeper for does objects/classes
 */
// * at the moment I'm preferring classes over interfaces because they are keep after compile and interfaces are not. Class syntax makes sense and no need to learn and remember new syntax.
