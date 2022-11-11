let a = parseInt(process.argv[2])
let b = parseInt(process.argv[4])
let opr = process.argv[3]

function add(a,b){
    console.log(a+b)
}
function sub(a,b){
    console.log(a-b)
}
function mul(a,b){
    console.log(a*b)
}
function div(a,b){
    console.log(a/b)
}

switch (opr){
    case "+":
        add(a,b)
    case "-":
        sub(a,b)
    case "x":
        mul(a,b)
    case "/":
        div(a,b)
    }

    console.log(a,b)