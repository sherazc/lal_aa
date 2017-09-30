
var v1 =10;
let l1 =20;
const c1 =30;
// let and const can not use before define but var we can use
if(true)
{
    v1 = v1+20;
    l1=l1+20;
    //c1 = c1+20; // can not add value to cont because it's read only
    //const c1 =10;
}

console.log("v1 = "+v1);
console.log("l1 = " +l1);
console.log("c1 = "+ c1);
