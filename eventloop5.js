
const fs = require("fs");

setImmediate(()=>console.log("setImmediate"));
setTimeout(()=> console.log("Timer expired"), 0);

Promise.resolve("Promise").then(console.log)

fs.readFile("./file.txt","utf8",()=>{
    console.log("File Reading CB");
});


 process.nextTick(()=> {
    process.nextTick(()=> {
    console.log("inner process.nectTick")
 })
    console.log("outer process.nectTick")
 })

console.log("Last line of a file.")