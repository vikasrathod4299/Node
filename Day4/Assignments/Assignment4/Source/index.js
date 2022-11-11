const { write } = require('fs')
const http  = require('http')

http.createServer((req,res)=>{
    let body = ""

    if(req.method==="POST" && req.url.split("/")[1]==="upload")
    {
        req.on('data',(chunk)=>{
            body+=chunk.toString()
            console.log(chunk)
        })
        req.on('end',()=>{
            require('fs').writeFileSync("person.txt",body)
            res.end('ok')
        })
    }
    else{
        res.write('Wrong url!')
        res.end()
    }
}).listen(3001)