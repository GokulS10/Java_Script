
//call back fn is a fn that is passed in to another fn as arguments
// fn are considered as object

function printfirstname(firstname,cb){
    console.log(firstname)
    cb('stark')
}
function printlastname(lastname){
    console.log(lastname)
}

printfirstname('gokul',printlastname)


function evennumbercheck(x){
    console.log(x % 2 ==0,'Is a prime number')
}
var x=10