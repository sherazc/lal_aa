// bind
this.name = "Arif";
function myFun(greeting){
    console.log(greeting + " " + this.name);
}
function execMyfun(func){
    this.name="Mohammad";
    func("AAR");
}
execMyfun(myFun);
execMyfun(myFun.bind(this));
execMyfun(myFun.bind(this,["Assalam Allaikum"]));

// Call

this.nm = "Quazi";
function myfunction(greet, Lastname){
    console.log(greet + " " + this.nm+ " "+Lastname);
}
var callobj= {nm:"Arif"};
myfunction.call();
myfunction.call(callobj);
myfunction.call(this,["Hello"]);
myfunction.call(this,"Hello","Arif");

//apply

myfunction.apply();
myfunction.apply(callobj);
myfunction.apply(this,["Hello"]);
myfunction.apply(this,["Hello", "Arif"]);