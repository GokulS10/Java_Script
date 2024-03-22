//impure function
//A pure function should give same out for every sme input
//It is affected by the external parameter var a= 2

var a=2
function add(x)
{
    console.log(x+a)
    a++
}
add(2)
add(2)
add(2)

//pure function
//It is affected by external factor
//It does not use any external resources as console.log is a external resource it is used outside the function

function addimpure(x,y) 
{
   addimpure=x+y
   return x+y
}
console.log(addimpure(2,3))