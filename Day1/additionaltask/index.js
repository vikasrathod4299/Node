const { writeFileSync } = require("node:fs")
const http = require("node:http")


http.createServer((req,res)=>{
    let body= []
    req.on('data',(chunk)=>{
        body.push(chunk.toString())
    }).on('end',()=>{
        // body[0]=()
        writeFileSync("data.txt",body.toString())
        res.end()
    })
    res.end()
}).listen(3000, ()=>{
    console.log("Listning on post 3000")
})

