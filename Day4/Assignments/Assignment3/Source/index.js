const http = require('http')

http.createServer((req,res)=>{
    let params = new URLSearchParams(req.url.split("/")[1])
    console.log(params);
    let vowels = "aAeEiIoOuU"
    if(params.get('name'))
    {

        for (let i of params.get('name'))
        {
            if (vowels.includes(i))
            {
                res.write(`<h1> "${i}" is the first vowel in name</h1>`)
                break
            }
        }
    }

    res.end()
}).listen(3008)