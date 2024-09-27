const users = {
    nam: "Abhinav",
    age: 21,
    gender:"Male"
}
// ----------parse---------
const us = '{"nam": "Abhinav","age": 21,"gender":"Male"}'
const newU = JSON.parse(us)
console.log(newU["nam"]) //Abhinav

//---------- stringfy ----------

const StUsers = JSON.stringify(users)
console.log(StUsers) //{"nam":"Abhinav","age":21,"gender":"Male"}