//1. How to add something to the begin of an array and the end of an array?

var myArray = ['a', 'b', 'c', 'd'];

myArray.push("end"); //add to the end
myArray.unshift("start"); //add to the start/begin

//console.log(myArray);

// The ES6 way
myArray = ["start", ...myArray];
myArray = [...myArray, "end"];

myArray = ["start", ...myArray, "end"];
//console.log(myArray);

//2. How do you create a private variable in JavaScript? 

function secretVariable(){
    var private = "super secret code";
    return function(){
        return private
    }
}
var getPrivateVariable = secretVariable();
console.log(getPrivateVariable());


//3. What is the output?
var num = 4;
function outer(){
    var num = 2;
    function inner(){
        num++;
        var num = 3;
        console.log(num);
    }
    inner();
}
outer(); 
//out will be 3. Why because the inner function overwrites the valus of the num in the outer function



//4. What is the out?
console.log(typeof (typeof 1));
//Ans: String Why? --> (typeof number), string



//5. What will the output be?

var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);
var stoleSecretIdentity1  = hero.getSecretIdentity.bind(hero);//binding hero to it will 

console.log(stoleSecretIdentity()); //will give "John Doe"
console.log(hero.getSecretIdentity())// will give undefined
//console.log(stoleSecretIdentity1);
//console.log(hero.getSecretIdentity());






/* //Global Variables

function declareVar(){
    test = "test";
}

function declareVar2(){
    test = "test 2"
}

declareVar();
console.log(test); //return "test"

declareVar2();
console.log(test); //returns "test 2"


for(var i = 0; i < 3; i++){
    let msg = "Hellow world";
    console.log(msg);
} */




