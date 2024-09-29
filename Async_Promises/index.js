const fs = require("fs");
fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data)
})

console.log("is this first 1")

// takes longer than the file read
function bif(){
    let a=0
    for(i=0;i<100000000;i++){
        a++

    }
}

console.log("hi 2")

//the thread will only be used by fileRead only after all the functions are done 