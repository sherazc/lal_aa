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

