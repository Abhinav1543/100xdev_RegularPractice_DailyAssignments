function square(i){
    return i*i;
}
function cube(i){
    return i*i*i
}
function sumOfSquare(a,b,fns){
    return fns(a)+fns(b);
}
console.log(sumOfSquare(19,12,function square(i){   //Anonymous Function
    return i*i;
}))
console.log(sumOfSquare(19,12,cube))

