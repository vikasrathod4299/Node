const path = require('path')

let res = path.parse(__filename)

console.log(res.base)
console.log(res.dir)
console.log(res.ext)
console.log(res.name)
console.log(res.root)
