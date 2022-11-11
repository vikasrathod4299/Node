const fs  = require('fs-extra')

fs.writeFile("./person.txt","Hello",(err)=>{
    if(err) throw err;
    console.log("File is created")
})


fs.move("./person.txt","./newpath/person.txt",(err)=>{
    if(err) throw err;
    console.log("success")
})

