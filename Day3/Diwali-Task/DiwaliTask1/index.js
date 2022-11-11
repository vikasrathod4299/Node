const fs = require('fs')
const { waitForDebugger } = require('inspector')
const { emitKeypressEvents } = require('readline')
const { PassThrough } = require('stream')

let str = fs.readFileSync("./person.txt","utf8")
console.log(str.split(" "))
//Itrative approche
str.split(" ").forEach((item)=>{
    let i=0
    let j=item.length-1
    while(i<=j){
        if(item[i]!=item[j]) break
        i+=1
        j-=1
    }
    if(i>=j) console.log(item);
})

// //Recursive approche
// let paliStr = (str,i,j)=>{
//     if(str[i]!=str[j]) {
//         return false
//     }else{return true}
//     paliStr(str,i+1,j-1)
// }
str.split(" ").forEach((item)=>{if(paliStr(item,0,item.length-1))console.log(item)})

