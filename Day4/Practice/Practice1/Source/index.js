const http = require('http')

http.createServer((req,res)=>{
    if(req.url==="/")
    {
        res.write("Hello wrold!")
        res.end()
    }
    else if(req.url === "/user")
    {
        res.write(JSON.stringify([1,2,3,4]))
        res.end()
    }
}).listen(3000)