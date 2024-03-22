//imperative type progamming

const a=27
const asquare=a*a
if(asquare %2 ==0)
{
    iseven=true
}
else{
    iseven=false
}
console.log(iseven)

//declarative type programming

const squarecheck=(x) => (x*x %2===0 ? true:false)
console.log(squarecheck(32))