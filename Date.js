const ddd = new Date;
console.log("Date is :",ddd.getDate())
console.log("Month is :",ddd.getMonth()+1)
console.log("Year is :",ddd.getFullYear())
console.log("Hours:",ddd.getHours())
console.log("Minutes:",ddd.getMinutes())



// ddd.setFullYear(2000); //set any value and replace the current one
// console.log(ddd.getFullYear())
function sum(a){
for(i=0;i < 10000000;i++){
    a += i;
}
return a;
}
const n = new Date;
const ntime = n.getTime();
console.log(sum(11))
const m = new Date;
const mtime = m.getTime();
console.log(m-n);


function myclock(){
    let mytime = new Date();

    let hour = mytime.getHours();
    let min = mytime.getMinutes();
    let sec = mytime.getSeconds();

    console.clear();
    console.log(hour+":"+min+":"+sec);

}

setInterval(myclock,1000)
