// find returns the first element of the array that satisfies the condition

const  transations =[122,772,288,288,-200,288]

let firstwithdrawal = transations.find(function(n){return n<0})
 console.log('numder->'+firstwithdrawal)

 //find index
// print the index 
 const  transations2 =[122,772,288,288,-200,288]

let firstwithdrawalIndex = transations.findIndex(function(n){return n<0})
 console.log('index->'+firstwithdrawalIndex)
