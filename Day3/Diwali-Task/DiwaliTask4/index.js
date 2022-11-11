const fs = require("fs")

let resume = fs.readFileSync("person.txt","utf8")

resume = resume.split(":-")

let expIndex = 0

for (let i in resume)
{
    if(resume[i].includes("EXPERIANCE"))
    {
        expIndex= parseInt(i)
    }
}
console.log(resume[expIndex])
resume[expIndex+1] = "\n      Fresher"

resume=resume.join(":-")

fs.writeFileSync("person.txt",resume)
