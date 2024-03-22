function printfirstname(firstname,cb)
{
    console.log(firstname)
    cb('stark')
}
function printlastname(lastname){
    console.log(lastname)
}

printfirstname('gokul',printlastname)
