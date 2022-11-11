const fs = require('fs')

console.log(fs.readFileSync("./world.txt","utf8")+" "+fs.readFileSync("./person.txt","utf8"))