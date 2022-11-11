const fs = require('fs')
fs.writeFileSync("./person.txt","")

for (let i=1; i<=100;i++)

{
    fs.appendFileSync("./person.txt",i+"\n")
}