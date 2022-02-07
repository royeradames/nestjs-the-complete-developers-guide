/* 
    Arrays (with types!)
    Plain definition + overview
    - arrays where each element is some consistent type of value 
*/
// examples
const carMakers = ["ford", "toyota", "chevy"];
const dates: [Date, Date] = [new Date(), new Date()];

const carsByMake: String[][] = [];

/* Why do we care?
    - TS can do type inference when extracting values from an array
    - TS can prevent us from adding incompatible values to the array
    - We can get help with 'map', 'forEach', 'reduce' functions
    - Flexible -  arrays can still contain multiple different types */

// Help with inference when extracting values
const car2 = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
carMakers.push(100);

// help with 'map'
carMakers.map((car): string => {
  return car.toUpperCase();
});

// Flexible - arrays can still contain multiple different types
const importantDates = [new Date(), "2030-10-10"];
importantDates.push("2030-10-10");
importantDates.push(new Date());

/* Where to use typed arrays
    - any time we need to represent a collection of records with some arbitrary sort order.
 */
