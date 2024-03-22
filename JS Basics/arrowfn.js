let test1 = function()
{
    console.log(1)
}
let test2 = function(a)
{
    console.log(a*2)
}
let test3 = function(a,b)
{
    console.log(a+b)
}
let test4 = ()=> 
{     //the function can be repalced by a arrow =>
    console.log(2)
}
test1()
test2(30)
test3(32,30)
test4()
 // we can also remove the flower bracket and start procceding the code
 let test5 =() => console.log(2)
 test5()