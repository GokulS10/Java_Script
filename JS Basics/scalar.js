var greet = 'welcome chief'

var a='7'

console.log(greet)

console.log(a)

//arrays

var arr=['chief',11,false,11.1]

var a=arr[0]

console.log(a)

console.log(arr[1]) 

//replacement array

arr[0] = 'Goblin'

console.log(arr[0])

//length of an array

console.log(arr)

console.log('The length of the array', arr.length)

 // inbuilt js array method

 var arr2 = [18 , 17 ,37 , 63]

arr2.pop()   //remove the last element

console.log(arr2)

arr2.push(100)  // add element to the last element

console.log(arr2) 

//shift method

var d = arr2.shift() // shift-remove the first element
                     //unshift add element at the first                    
                    

console.log(d)

console.log(arr2) 

//splice
//it is used to insert or remove element from a particular index

var x=[1,2,3,4,5]
x.splice(1,2,'chief') //this one and two refer the index
console.log(x) 