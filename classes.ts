/* classes
    Blueprint to create an object with some fields (values) and methods (functions) to represent a 'thing'
    First
      - Methods
    Second
      - Fields
 */

class Vehicle {
  /* Same has bellow 
  color: string;
  constructor(color: string) {
    this.color = color;
  } 
  */
  constructor(public color: string) {}
  drive(): void {
    console.log("chugga chugga");
  }
}

const vehicle = new Vehicle("orange");
vehicle.drive();
console.log(vehicle.color);

/* Modifiers added by TS
    Private
      - This method can be called any where, any time
    Private
      - This method can only be called by other methods in this class
    protected
      - This method can be called by other methods in this class, or by other methods in child classes
    * Doesn't add layer of security. It only limits other devs on what methods they can called
 */
