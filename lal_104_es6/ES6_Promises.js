import os from "os";
import exp from "express";
let printSysInfo = ()=>{
    console.log(`cup changed ${os.cpus()[0].model}`);
}

printSysInfo();