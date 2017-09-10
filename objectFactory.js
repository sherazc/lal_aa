function objFactory(sal){
    return{
        name:"Arif",
        add1:"deerfield point",
        sal: sal,
        anualSal:function(){
            return this.sal*12;
        },
        toString: function(){
            return "name= "+ this.name + " address= " + this.add1 + " Salary= "+this.sal +" annual salary= " + this.anualSal();
        }
    };
}

var obj1 = objFactory(11);
var obj2 = objFactory(111);
obj2.name="Sheraz";
obj2.add1="Don't know";

console.log(obj1.toString());
console.log(obj2.toString());

(function(){
    console.log("self executing funtion");
})();

var myobject={
    var1: "Variable 1",
    var2: "variable 2"
};
console.log(myobject);
delete myobject.var2;
console.log(myobject);

