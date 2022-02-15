import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { User } from "./User";

const user = new User();
const company = new Company();

const customMap = new CustomMap("map");

/* typescript is making a implicit check to see that user/company the require properties to by a marker */
customMap.addMarker(user);
customMap.addMarker(company);
