import faker from "faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  color: string = "blue";
  markerContent(): string {
    return `
    <h1>${this.name}</h1>
    <h3>${this.catchPhrase}</h3>
    `;
  }
}
