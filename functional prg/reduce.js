//you need the sum of every element in an array


var num=[2,7,3,3,]
let sum=0
for(i=0;i<num.length;i++)
{
    sum=sum+num[i]
}
console.log(sum)


//reduce method
// reduce will always returns a single value
// reduce take two parameters one is accumulator and another one is your value


var number=[2,7,3,7]

var sum1=num.reduce(function(acc , value){
let updatedsum = acc+value                  
return updatedsum
} , 0  )
console.log(sum1)

//here acc value is initially zero then it is added by the first value '2'
//the the updated value is 0+2=2 
//now the acc value is 2 then it is added by the second number '7'
//then the updated value = 7+2=9