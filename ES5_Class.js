var myclass = function(const1){
    var private_var = "constructor value " + const1 ;
    var private_fun = function(a,b){
        return a+b;
    };
    this.public_var = "this is public variable";
    this.pubfun = function(a,b){
        return a*b;
    };
    this.getPrivateVar=private_var;
    this.getPubFun=function(a,b){
        return private_fun(a,b);
    }
}

var obj = new myclass("Arif");
console.log(obj.public_var);
console.log(obj.pubfun(5,3));
console.log(obj.getPrivateVar);
console.log(obj.getPubFun(5,3));

var calc = function(){
    this.add=function(a,b){
        return a+b;
    };    
};
calc.prototype.subt= function(a,b){
    return a-b;
}
var objCalc = new calc();
console.log("Addition "+objCalc.add(5,3));
console.log("subtraction "+objCalc.subt(5,3));