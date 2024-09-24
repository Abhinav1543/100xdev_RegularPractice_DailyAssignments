//1.-------counter in javascript (30:0)--------
for(i=30;i>=0;i--){
    console.log(i)
}

//2.calculate the time it takes between a settimeout call and an inner function actually  running


let start_time = Date.now()

setTimeout(function(){
    const end_time = Date.now();
    const timeTook = end_time - start_time;
    console.log("actual time took : "+timeTook)

},3000)


//3.create a basic termianl clock(HH:MM:SS)

function  myclock(){
    let mytime = new Date();

    let hour = mytime.getHours();
    let min = mytime.getMinutes();
    let sec = mytime.getSeconds();

    console.clear();
    console.log(hour+":"+min+":"+sec);

}

myclock();