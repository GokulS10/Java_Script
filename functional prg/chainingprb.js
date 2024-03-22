
const  transations =[122,772,288,288,-200,288]  //to find the total amount // filter positive element


let positiveNumber = transations.filter(function(n){return n>0})
console.log(positiveNumber)


//to find the total amount


let TotalAmount=0
for(i=0;i<transations.length;i++)
{
    TotalAmount= TotalAmount+ transations[i]
}
console.log(TotalAmount)