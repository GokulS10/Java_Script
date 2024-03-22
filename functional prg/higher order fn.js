let arr=[1,2,3,4,5,6]

for(let i=0; i<arr.length; i++)
{
 squareArr.push(arr[i]*arr[i])
}
console.log(squareArr)

//map
//map will loop through every element of the array and will perform specific operation that you have provided
//map method will always returns a new array with your result
const num=[1,2,3,4,5,6]

const squarednum= num.map(function(n){ return n*n})
   
console.log(squarednum)


let amountInrupee = [277,1919,92,828,271]
let depresision   =[81]
let amountIndollar = amountInrupee.map((amount)=>{return amount*depresision}) //here we are maping the amount from amountInrupee 
                                                                              //things to mapped or after the map should be after ()
                                                                              //instead of function we use arrow function
console.log(amountIndollar)                                                   //and return with amount divided dy 81
                                                                              

//foreach does not return anything(array)
//foreach provide result in single handed(i.e no in array)

let amountInrupee1 = [277,1919,92,828,271]                                     //foreach does not require {} bracket 
let depresision1   =[81]
let amountIndollar1 = amountInrupee1.foreach
((amount)=>console.log( amount*depresision))