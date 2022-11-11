const fs = require('fs')
const vowels="AaEeIiOoUu"

let count=0
const address = fs.readFileSync("./address.txt","utf8")

for (let i of address)
{
    if (!vowels.includes(i)) count+=1
};

console.log(count)

fs.unlinkSync("./address.txt")