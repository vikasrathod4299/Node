const fs = require('fs');
let data = "Hello India"

fs.writeFile("./person.txt", data, (err)=>{
    if(err) throw err;
    else{
        console.log("Data is inserted in file")
    }
})

console.log(fs.readFileSync("./person.txt","utf8"))



















