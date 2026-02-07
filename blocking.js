const crypto = require("crypto");

console.log("Hello world");

var a = 1078698;
var b = 20986;

// pbkdf2 - Password Base Key Deractive Function

// Synchronous Function - Will block the main thread - "DON'T USE IT"
console.log("========");
crypto.pbkdf2Sync("password", "salt", 50000000, 50, "sha512");
console.log("First Key is Generated");

setTimeout(()=>{
    console.log("call me right now !!");
},0) // it will only be called once call stack of main thread is empty

// Async Function
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("Second Key is generated");
});

function multiply(x,y){
    const result = x * y;
    return result;
}

const c = multiply(a,b);

console.log("Multiplication result ", c)