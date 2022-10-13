let http = require('http')
http.createServer((request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8'
    })
    response.end('Hello Node')
} 
).listen('8080')