let myPromise = new Promise((resolve, reject) => {
    console . log ( "Promise process started..." );
    // We are doing setTimeout to mimic Asynchronous call
    setTimeout (() => {
    // We can pass any type of data to resolve, and
    // reject functions. This data will be passes to
    // the caller of the function.
    resolve( "success" );
    }, 2000 );
    setTimeout (() => {
    reject( "fail" )
    }, 3000 )
    });
    