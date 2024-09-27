function getLenght(str){
    console.log("String is:",str);
    console.log("lenght is ",str.length)
}
const str = "Abhinav is nett";
getLenght(str)

function getIndex(str,target){
    console.log("string is",str,"and target is at index",str.indexOf(target));
}
//"lastIndexOf"  function can be used to get the index of the given element appearing last after appearing multiple times;
getIndex(str,"nett");

// works like substr, gets a slice of string 
console.log(str.slice(5,10)); // both are indexes here
console.log(str.substr(5,10)); // 10 is length here

const s = "hello world hahah";
console.log(s.replace("hello","Lelo")); // to replace a string 

const words = s.split(" ");
console.log(words);

const nn = "           this is an examplwww.w.w.w                "; //trim whitespaces from start and end;
console.log(nn.trim())

console.log(nn.toUpperCase())