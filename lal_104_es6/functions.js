
//regular function

var a ={
    regFn: function(){
        console.log("Regular function");
    }    
}

//short function
function shortFn()
{
    console.log("Short function!");
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
shortFn();
arrowFn();
arrowFn1();
anynumFn(1,2,3,4,5);