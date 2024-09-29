function su(n){
    let a=0
    for(i=1;i<=n;i++){
        a =+ i
    }
    console.log(a)
    return a;
}
function sum100(){
    return su(100)
}


function bif(){
    let a=0
    for(i=0;i<100000000;i++){
        a++

    }
}
setTimeout(sum100,10)
bif()

console.log("Abhinav Science")