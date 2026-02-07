const http = require("http");

const server = http.createServer(function (req,res){
    
    // To handle different responses for the URL 
    if(req.url === "/getSecretData"){
        res.end("There is a no secret data.")
    }
    res.end("Hello from the server.");
});

server.listen(3000)