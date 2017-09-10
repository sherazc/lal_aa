var var1 = "module_1 var1";
var obj= {
    var2:" module_1 var2",
    fun1: function(){
        console.log(var1 + '-'+ this.var2);
    }
};
module.exports.obj1 = obj;