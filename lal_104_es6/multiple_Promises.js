let promiseA = new Promise((resolve, reject) => {
setTimeout (() => {
resolve( "Promise A success" );
}, 2000 );
});
let promiseB = new Promise((resolve, reject) => {
setTimeout (() => {
resolve( "Promise B success" );
}, 1000 );
});
/*
Below "resolveData" will receive array of all the
success/resolve data.
*/
Promise. all ([ promiseA , promiseB ]). then ((resolveData) => {
console . log (resolveData);
});