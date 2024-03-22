//some method

//some - Check whether the condition is true or false based on condition 
// And return true even if one element satisfy the condition


const transations =[-122,-772,-288,288,-200,-288]

let positivesome=transations.some (function(n){return n<0})

console.log(positivesome)


//every method
//returns only after checking all elements
//check every element in the array

let positiveEvery = transations.every(function(n){return n>0})
console.log(positiveEvery)