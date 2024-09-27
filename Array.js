const startingArray = [1,2,3,4]
startingArray.push(7)
startingArray.pop() //deletes from the end
startingArray.shift()//deletes from the start
startingArray.unshift(100) //puts value at the FRONT of the array

console.log(startingArray)

const arr = [6,34,9,2]
console.log(startingArray.concat(arr))

//------------forEach----------

function printt(x){
    console.log(x);
}
startingArray.forEach(printt);
