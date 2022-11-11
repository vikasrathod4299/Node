const http = require('http')


http.createServer((req,res)=>{
    let params = new URLSearchParams(req.url.split("?")[1])
    let sum = parseInt(params.get('param1')) + parseInt(params.get('param2')) 
    res.write(`${sum}`)
    res.end()
}).listen(3001)