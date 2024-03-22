//check for even no. in a array

let number=[2,6,7,9,82,388]

let evenArray=[]
for(let i=0; i<number.length ; i++)
{
if(number[i]%2==0)
{
    evenArray.push(number[i])
}

}
console.log(evenArray)


//filter method

//filter returns a new array it will return all element that matches a specific condition

let numbers=[2,6,7,9,82,388]

let evenarray = numbers.filter(function(n){return n%2==0})
console.log(evenarray)

//test 1
const  transations =[122,772,288,288,-200,288]
let positivenum=transations.filter(function(n){return n<0})
console.log(positivenum)
