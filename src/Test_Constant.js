var var1es5 = 100;
const lastName = 'Anwar';

if(true) {
    var1es5 = var1es5 + 10;
    //lastName = lastName + 2; // Can't change lastName's value. It's read only

    var var3es5 = 300;
    const var4es6 = 400;
}

console.log(var1es5);
console.log(lastName);
console.log(var3es5);
// console.log(var4es6); // Can't access. Its blocked scoped