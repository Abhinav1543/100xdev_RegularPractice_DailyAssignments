//------------------------SET TIMEOUT----------------
function syhi(){
    console.log("good morning sir!Hope you have a good day");
}

setTimeout(syhi,8*1000) // 8000 is in miliseconds.


// ---------------------BOUNTY DAY 1----------------------------------
let sum = 0
for(let i = 0;i < 1000000000000;i++){
    sum = sum + i;
}
console.log(sum)





// ------------------------------CALLBACKS-------------------------------
// function sum(num1,num2,caller){
//     let a = num1+num2;
//     caller(a);
//     return a;
// }

// function displayResult(data){
//     console.log("Sum of the number is : "+ data);

// }
// let x = 11
// let y = 20;
// const answer = sum(x,y,displayResult);


//2. function cal(a,b,calculator){
//     let m = calculator(a,b);
//     return m;

// }

// function sum(x,y){
//     let m = x+y;
//     console.log("sum is :"+ m);
//     return m;
// }
// function minus(x,y){
//     let m = x-y;
//     console.log("Difference is :"+ m);
//     return m;
// }
// function mul(x,y){
//     let m = x*y
//     console.log("Product is :"+ m);
//     return m;
// }
// let x = 29
// let y = 89
// const ans = cal(x,y,mul)
// console.log(ans)
//------------------------------- CREATING OBJECTS IN JS-----------------------------------

// const users1 = {
//     fname : "Abhinav",
//     age: 20
// }
// console.log(users["fname"])

// const allmfs = [{
//     fname : "harkirat",
//     age : 69,
//     zodiac : "capricorn"
// },{
//     fname : "Abhinav",
//     age : 100,
//     zodiac : "apppa"
// },{
//     fname : "samay",
//     age : 33,
//     zodiac : "apppa"
// },{
//     fname : "Pari",
//     age : 22,
//     zodiac : "apppa"
// }]

// for(i=0;i<allmfs.length;i++){
//     if(allmfs[i]["age"] > 50){
//         console.log(allmfs[i]["fname"]);
//     }
// }
// console.log(7/2)
// let x = 0
// let m = allmfs.length-1;
// for(i = 0;i<allmfs.length;i++){
//     if(m <= i){
//         break;
//     }
//     x = allmfs[i];
//     allmfs[i] = allmfs[m];
//     allmfs[m] = x;
//     m = m-1;
// }
// for(i=0;i<allmfs.length;i++){
//     console.log(allmfs[i]);
// }




















// console.log("jai mata");
// for(index=0;index<1001;index++){
//     console.log(index);
// }
// let a = 100;
// let b = 200;
// let c = 300;
// let max = 0;
// const arr = [a,b,c];
// for(i=0;i<arr.length;i++){
//     if(max < arr[i]){
//         max = arr[i];
//     }
// }
// console.log(max);