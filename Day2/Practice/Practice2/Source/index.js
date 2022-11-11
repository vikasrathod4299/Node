const fs  =  require('fs')

let data = process.argv[2]

console.log(data)

fs.appendFile("./person.txt"," "+data,(err)=>{
    if (err) throw err;
    console.log("File appended")
})