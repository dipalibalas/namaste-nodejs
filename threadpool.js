const fs = require("fs");
const crypto = require("crypto");
 
// Change the size of thread pool
// process.env.UV_THREADPOOL_SIZE = 8;

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log("1 - cryptoPBDF2 done")
})

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log("2 - cryptoPBDF2 done")
})

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log("3 - cryptoPBDF2 done")
})

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log("4 - cryptoPBDF2 done")
})