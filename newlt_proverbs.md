strategy on loading data

1. load data during the compiled time
2. load data using ajax with flat file formats
3. load data using ajax with .sqlite db file

javascript modules

import 'src/my_lib'; - empty imports executes the body of the modules.

what is the advantage of default export ?

why namespace import?
 import * as my_lib from 'src/my_lib'; - imports the module as an object (with one property per named export).

 renamed imports
   // Renaming: import `name1` as `localName1`
   import { name1 as localName1, name2 } from 'src/my_lib';

   // Renaming: import the default export as `foo`
   import { default as foo } from 'src/my_lib';