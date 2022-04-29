//Declare Array

const array = ['Bob', 'Billy', 'Taylor', 'Janet', 'Demi'];
console.log("Array: ", array);

//Accessing elements of the array
const Bob = array[0];
console.log("Bob element at index 0: ", Bob);

//Add an element to the array/ Push
array.push("Derrika");
console.log("Array: ", array);

//Remove an element from the array / Pop
array.pop("Derrika");
console.log("Array: ", array);

//Joinin array element
const combineElements = array.join(' , ');
console.log("Array elements combined: ", combineElements);

//Take apart an array/ Splice arrays
const spliceArray = array.splice(0, 2);
console.log("Array splicing: ", spliceArray);

const spliceArray1 = array.splice(0, 3);
console.log("Array splicing: ", spliceArray1);

let numbers = [0, 1, 2, 3, 10, 23, 20, 30, 26, 29];
//console.log("Numbers are: ", numbers);

//Sort Array
numbers.sort(function(a, b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0
});
console.log(numbers);

//Sort in Ascending order
let animals = ['dog', 'cat', 'elephant', 'bee', 'ant', 'zebra'];
animals.sort();
console.log(animals);

//Sort in Descending order
animals.sort((a, b) => {
    if(a > b) return -1;
    if(a < b) return 1;
    return 0;
})
console.log(animals);

function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  palindrome("A man, a plan, a canal. Panama");

  console.log(palindrome("A man, a plan, a canal. Panama"));