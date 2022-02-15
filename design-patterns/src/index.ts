import { Company } from "./Company";
// import { User } from "./User";

import { CustomMap } from "./CustomMap";
import { User } from "./User";

const user = new User();
const company = new Company();

const customMap = new CustomMap("map");

customMap.addUserMaker(user);
customMap.addCompanyMarker(company);
