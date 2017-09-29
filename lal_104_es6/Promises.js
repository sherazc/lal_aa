let promA = new Promise((resolve,reject) =>{
    console.log("Prom Started.....");

    setTimeout(()=>{
            resolve("successful!");
    },2000);

    setTimeout(()=>{
        reject("failure!");
    },3000);
});

promA.then(
    (resolveData)=>{
        console.log("success logic: ",resolveData);
    },
    (rejectData)=>{
        console.log("rejected logic:", rejectData);
    }
);

// Catch in promise
let promCatch = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("successful");
    },2000);
    setTimeout(function() {
        reject("failed");
    }, 1000);
});
promCatch.then((resolveData)=>{
    console.log("success logic:", resolveData);
}).catch((rejectData)=>{
    console.log("catched error logic", rejectData)
});

// multiple promisses

let A = new Promise((res, rej)=>{
    setTimeout(()=> {
        res("Promise A");
    }, 2000);
});

let B = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Promise B");
    },1000)
});
Promise.all([A,B]).then((resolveData)=>{
    console.log(resolveData);
});