console.log(__dirname);
console.log(__filename);
// run every second

let sec = 0;
let interval = setInterval(()=>{
    console.log(`Running${++sec} . . .`);
},1000,"abc");

// stop interval
let timeout = setTimeout(()=> {
    console.log('clearing interval');
    clearInterval(interval);
}, 5000);

console.log("proc env = ",process.env);
console.log("Process argument: ",process.argv);
process.on("exit",function(status){
    cosole.log(`application is about to finish${status}`);
});
process.exit(0);