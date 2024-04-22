
/* javascript function */

function Myname(){
    console.log("h");
    console.log("a");
    console.log("r");
    console.log("m");
    console.log("i");
}
Myname();


/* function with arguments */

function sumOfNumbers(number1 , number2){
    console.log(number1+number2);
    // console.log('$(number1) , $(number2)');
}
sumOfNumbers(4,12);
sumOfNumbers();
sumOfNumbers("4" , "12")
sumOfNumbers("12" , "12")
sumOfNumbers(5 , "5")
sumOfNumbers(4 ,4)


/* function with return keyword */

function sumOfNumbers(number1  , number2){
    let result = number1 + number2;
    console.log(result);
    return number1 + number2
}
console.log(sumOfNumbers(4 ,4));
console.log(sumOfNumbers(4,8,8));

/* javascript mutable and immutable object */

let newarray = ["javascript" , "nodejs" , "python" , "reactjs"]

console.log(newarray.length);
let newsarray = newarray;

console.log(newsarray);
console.log((newarray));

console.log(newarray[0]);
console.log(newarray[1]);

let changearray = newarray[0] = "html"
console.log(newarray);


/* immutable */

let x = 10
x = 20

console.log(x);

/* javascript array */

