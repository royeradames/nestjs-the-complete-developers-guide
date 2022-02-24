/* file that handle import of classes get their first letter capitalize */

import faker from "faker";
import { Mappable } from "./CustomMap";

/* export is the default in ts so that you always use  {} to import things, and
    default export is avoid so you don't have to
    - guest if you are assigning a new variable name to an import
    - keep type object name
 */

/* 
    *implements 
    not require
    helps us identify the true source of the error and how to fix it.
    makes sure that the class provide all Mappable fields
      if this class is ever going to be used as a marker, this is a great
      way to show an error here in the class so you know exactly what is wrong 
      and where to fix it

     */
export class User implements Mappable {
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
  color: string = "red";
  markerContent(): string {
    return `
    User name is ${this.name}
    `;
  }
}
