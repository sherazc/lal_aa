console.log("Bimillah");
var var1 ={
    name:"Quazi",
    func1:function(){
        console.log("function from variable");
    }
}

console.log(var1.name);
var1.func1();

var func2 = function(){
    console.log(arguments);
    var myarray =[];
    for(var v in arguments)
    {
        myarray[v]=arguments[v];
    }
    console.log("my array : " + myarray);
}
func2(1,2,3,4,5,6,7);
(function(){
    console.log("self calling function");
})();

var csMath = function(constr){
    console.log("calling from object "+ constr);
    this.myAdd = function(a,b)
    {
        console.log(a+b);
    };
}
var obj1 = new csMath("obj1");
obj1.myAdd(7,8); 
csMath.prototype.mysub=function(a,b){
    console.log(a-b);
};
obj1.mysub(9,2);

csMath.prototype.mult = function(a,b){
    console.log(a*b);
};
obj1.mult(7,8);

function objFactory()
{
    return{
        Lname:"Quazi",
        Mname:"Mohammad",
        FName:"Areeb",    
        tostring: function (){
            return this.Lname + " "+ this.Mname +" "+ this.FName;
        }
    };
}
var o1 = new objFactory();
console.log(o1.tostring());
o1.Lname = "Last";
o1.FName="First Name";
o1.Mname = "Middle";
console.log(o1.tostring());
