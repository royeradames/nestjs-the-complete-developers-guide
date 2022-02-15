/* 
  * killer features of ts
    - dev input validation for variable
    - functions arguments
    - return data
    - implementing types on classes
 */

import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { User } from "./User";

/* limit and give confident to the devs that will use this page. Everything that typescript says that you can use here work has expected */
const user = new User();
const company = new Company();

const customMap = new CustomMap("map");

/* typescript is making a implicit check to see that user/company the require properties to by a marker */
customMap.addMarker(user);
customMap.addMarker(company);
