const fs = require("fs")
function cb(){
    return new Promise(function(getdata){
    fs.readFile("a.txt","utf-8",function(err,data){ //async fnx and in callback
        getdata(data)
    })
})
}
function mp(d){
    console.log(d)
}
let a = cb()
a.then(mp)




function myfxn(aa){
    let a = new Promise(function(resolve){
        setTimeout(function(){resolve(100+1111+aa)},3000)
    })
    return a;

}

async function ha(){
val = await myfxn(1211)
console.log(data)
}
ha()
