/* file that handle import of classes get their first letter capitalize */

import faker from "faker";

/* export is the default in ts so that you always use  {} to import things, and
    default export is avoid so you don't have to
    - guest if you are assigning a new variable name to an import
    - keep type object name
 */
export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `
    User name is ${this.name}
    `;
  }
}
