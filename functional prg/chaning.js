let arr=

[

{name:"A",age:"16",gender:"M"},
{name:"B",age:"27",gender:"F"},
{name:"C",age:"15",gender:"M"},
{name:"D",age:"26",gender:"F"},
{name:"E",age:"12",gender:"M"},
{name:"F",age:"25",gender:"F"}

]

let males =arr.filter(function(Obj){return Obj.gender=='M'}).map(function(male){return male.age})

console.log(males)
