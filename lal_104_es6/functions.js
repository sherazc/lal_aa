
//regular function

var a ={
    regFn: function(){
        console.log("Regular function");
    },
    shortFn(){
        console.log("This is example of short function");
    }    
}

//dir function
function dirFn()
{
    console.log("function by name!");
}
// arrow function without {}

let arrowFn =()=> console.log("Arrow function without {}");

//arrow function with {}

let arrowFn1 = ()=>{
    console.log("arrow function with {}");
}
//self callling function
(function selfFn(){
    console.log("self calling");
}) ();
//function with any number of parameters

function anynumFn(...param){
    console.log(param);
}
a.regFn();
dirFn();
arrowFn();
arrowFn1();
anynumFn(1,2,3,4,5);

// function with parameters
let num =[1,2,3,4];

let doubleArray=num.map(function(number){
    return number*2;
});

let doubArray=num.map(number=>number*2);
console.log(doubArray);
console.log(doubleArray);

// rest function parameter

let sum1 = function(...numbers){
    console.log(numbers);
    return numbers.reduce((PreviousNum,currentNumber)=>currentNumber+PreviousNum);
}
console.log(`sum = ${sum1(1,2,3,4,5)}`);

let multiply1 = (multiplier,...numbers)=>{
console.log(multiplier,numbers);
}
multiply1(3,2,4,6,8);

let multiply2 = (multiplier,...numbers)=>{
    console.log(numbers.map((number)=>multiplier*number));
    }
    multiply2(3,2,4,6,8);
    