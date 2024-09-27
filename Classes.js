// const dog = {
//     nam: "muffy",
//     legcount: 3,
//     color: "golden"
// }
class Animal{
    constructor(name,legn,speaks){
        this.name = name;
        this.legn = legn;
        this.speaks = speaks;
    }
    static mytyy(){
        console.log("Janwar")
    }
    speak(){
        console.log(this.speaks)
    }

}

let tiger = new Animal("Sher","4","RAUR....")
let mouse = new Animal("Ch","1","eeeeee")
tiger.speak()

Animal.mytyy()