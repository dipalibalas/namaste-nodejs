// Last line of a file.
// process.nectTick
// Promise
// Timer expired
// setImmediate
// File Reading CB
// 2nd process.nectTick
// 2nd setImmediate
// 2nd Timer expired

const fs = require("fs");
const a = 100;

setImmediate(()=>console.log("setImmediate"));
setTimeout(()=> console.log("Timer expired"), 0);

Promise.resolve("Promise").then(console.log)

fs.readFile("./file.txt","utf8",()=>{
    setTimeout(()=> console.log("2nd Timer expired"), 0);
    process.nextTick(()=> console.log("2nd process.nectTick"))
    setImmediate(()=>console.log("2nd setImmediate"));
    console.log("File Reading CB");
});


 process.nextTick(()=> console.log("process.nectTick"))

console.log("Last line of a file.")