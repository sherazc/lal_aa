console.log("Bismilla hi Rahman ..");
// console.log(module);
// console.log(module.exports);
// console.log(exports);
// console.log(this);
var a = 20;
console.log(a);

var aa = function(){
    var i;
    for(i=1;i<5;i++)
    {
        console.log("calling function aa.."+i);
    }
}
aa();

var obj = {
    a:10,
    fun1:function(){
        return this.a*2;
    }
};
console.log(obj.a);
console.log(obj.fun1());

obj.b=15;
obj.fun2 = function(name){
    console.log("Name is " + name);
}

console.log(obj.b);
obj.fun2("Arif");
