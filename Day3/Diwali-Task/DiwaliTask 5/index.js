const rl = require("readline")
const fs = require("fs");
const { connect } = require("http2");
const { checkPrimeSync } = require("crypto");
const { addListener } = require("process");


let data = JSON.parse(fs.readFileSync("student.json","utf8"))

data.forEach(element => {
    let Grade = 0
    for (let i in element.Field){
        Grade+= parseInt(element.Field[i]) 
    }
    element["Grade"] = parseInt(Grade / Object.keys(element.Field).length)  
});



let interface = rl.createInterface(process.stdin,process.stdout)

interface.question("Press 1 to display data \nPress 2 to Get top 3 student \nPress 3 to Display sorted data by grade \nPress 4 to search by name \nPress 5 to add data \n",(ans)=>{
    switch (ans)
    {
        case "1":
            console.log(data)
            break;
        case "2":
            console.table([data[data.length-1],data[data.length-2],data[data.length-3]])
            break;
        case "3":
            data.sort((a,b) => a.Grade-b.Grade)
            console.log(data)
            break;
        case "4":
            interface.question("Enter Name :--",(ans)=>{
                let res = data.find((item)=> item.Name === ans)
                console.log(res)
            })
            break;
        
        case "5":
            interface.question("Enter Data in respactive formate : Id Name Address Standerd SubjecName:marks :- \n",(ans)=>{
                console.log(ans.split(" "))
                data.push({"Id":ans[0],"Name":ans[1],"Address":ans[2],"Standerd":ans[3],"Field":{}}})
            })            
            break;
    }

})

