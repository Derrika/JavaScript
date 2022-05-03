//Locale Aware Sorting in JavaScript

/** PROBLEM
 * When building a localized JavaScript web-app, the default sorting logic for string doesn't quite yield the results that you might expect. 
 * For expect, take the following example...
 * */ 
// ['NOP', 'abc', 'abc', 'nop', 'äbc', 'ñop']

let strings = ["nop", "NOP", "ñap", "abc", "abc", "äbc"];
/**CompareFunction - This function forces each string to be compared after they have been lowercased.
 * It
 */
 
strings.sort((a, b) => {
    const lowerA = a.toLowerCase();
    const lowerB = b.toLowerCase();
    if(lowerA < lowerB){
        return -1; //A is less than B
    }else if (lowerA > lowerB){
        return 1; // A greater than B
    }else{
        return 0; // A and B are equal
    }
});
console.log(strings);
// ['NOP', 'abc', 'abc', 'nop', 'äbc', 'ñop']


//Using localeCompare in the compareFunction
let strings1 = ["nop", "NOP", "ñap", "abc", "abc", "äbc"];
strings.sort((a, b) => a.localeCompare(b));
console.log(strings1);
// ['NOP', 'abc', 'abc', 'nop', 'äbc', 'ñop']


//Sorting by an Object Property
let objects = [
    { name: "nop", value: 3 },
    { name: "NOP", value: 2 },
    { name: "ñop", value: 1 },
    { name: "abc", value: 3 },
    { name: "abc", value: 2 },
    { name: "äbc", value: 1 },
  ];
  objects.sort((a, b) => a.name.localeCompare(b.name));
  console.log(objects);
  /*
  [
    { "name": "abc", "value": 3 },
    { "name": "abc", "value": 2 },
    { "name": "äbc", "value": 1 },
    { "name": "nop", "value": 3 },
    { "name": "NOP", "value": 2 },
    { "name": "ñop", "value": 1 }
  ]
  */

  //Using Intl.Collator in the compareFunction

let strings2 = [ "nop", "NOP", "ñop", "abc", "abc", "äbc" ];
const collator = new Intl.Collator('en');
strings.sort((a, b) => collator.compare(a, b)); 
console.log(strings2);