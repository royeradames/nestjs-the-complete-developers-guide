/* Tuple
    - array-like structure where each element represents some property of a record

    Object representing a 'drink'
    [color] => [brown]
    [carbonated] => [true]
    [sugar] => [40]

    [brown, true, 40]
    index:
      - 0 = color
      - 1 = carbonated
      - 2 = sugar
    Order matters.
    [40, true, brown] doesn't work.
 */
// object
const drink = {
  colors: "brown",
  carbonated: true,
  sugar: 40,
};
//  tuple
const pepsi: [string, boolean, number] = ["brown", true, 40];

// type alias
type Drink = [string, boolean, number];

const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", false, 0];

/* why its not use that often is because object are better for most applications*/
// tuple. Hard to understand at a glance
const carSpecs: [number, number] = [400, 3354];

// object. Easy to understand at a glance. //* Object are great for modeling a record
const carStarts = {
  horsepower: 400,
  weight: {
    pounds: 3354,
  },
};
