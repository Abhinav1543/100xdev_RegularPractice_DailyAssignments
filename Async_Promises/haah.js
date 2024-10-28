
// function sum(){
//     console.log(9009);
// }


// setTimeout(sum,5000);
// console.log("after running sum");
// const fs = require("fs");

// fs.readFile("a.txt","utf-8",function(err,data){
//     console.log(data);
// })

// console.log("FTER PARY BEFORE REEADING THE FILE");

// function MyownSetTimeout(duratin){
//     let p = new Promise(function(resolve){
//         setTimeout(resolve,duratin);
//     });
//     return p;
// }

// MyownSetTimeout(5000).then(function(){
//     console.log("Log the first thing");
//     console.log("Log the first thing");
//     console.log("Log the first thing");
//     console.log("Log the first thing");
// })

// function Myo(xoxo,dura){
//     setTimeout(xoxo,dura);
// }

// Myo(function(){
//     console.log("bolo tara rara");
// },2000);


// function Priomiseisfied(timeh){
//     const p = new Promise(function(resolve){
//         setTimeout(function(){
//             resolve();
//         },timeh);

//     });
//     return p;
// }

// const ans = Priomiseisfied(2000);
// ans.then(function(){
//     console.log("at last, there are shit ton of pretty people in the world bu tyou are noe one of the yet . you gotta beccome one .CCONROL ");
// });

// function dayam(cal,duration){
//     setTimeout(cal,duration);
// }

// function myss(cal,duration){
//     setTimeout(cal,duration);
//     console.log("First Function");
//     dayam(cal,duration);
// }

// myss(function(){
//     console.log("sleep tommorow , tonight go crazzy");
// },2922);



function run(w10){
    const ss = new Promise(function(resolve){
        setTimeout(resolve,w10);
        console.log("one");
    })
    return ss;


}

run(1000).then(function(){
    console.log("damage done by porn s not significant but small damage over the period of time id BAD");
})
