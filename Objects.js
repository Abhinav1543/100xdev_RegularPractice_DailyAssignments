const dog = {
    nam: "muffy",
    legcount: 3,
    color: "golden"
}

console.log(Object.keys(dog))
console.log(Object.values(dog))
console.log(Object.entries(dog))

const newobj = Object.assign({},dog,{Sound: "bauw bauw"})
console.log(dog) //{ nam: 'muffy', legcount: 3, color: 'golden' }
console.log(newobj) //{ nam: 'muffy', legcount: 3, color: 'golden', Sound: 'bauw bauw' }

