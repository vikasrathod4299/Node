const fs = require('fs')
console.log(fs.readFileSync("./person.txt","utf8").split(" ").length)