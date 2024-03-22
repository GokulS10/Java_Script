//To get the index of the item in array
//To acces  the element we use for of 
//To access the index we use for in
var colorsArray =['red','blue','green','violet','grey']

for ( var color in colorsArray)
{
    console.log(color+'->'+colorsArray[color])
}


var markscored =[79,49,49,39,48,48]

for(var mark in markscored)
{
    console.log(mark +'->'+markscored[mark])
}