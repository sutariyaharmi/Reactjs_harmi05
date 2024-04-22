
/* javascript array */

// let arraynew = Array(10)
// let newarray = Array(10 , 20)
// let array = [10]

// console.log(typeof arraynew);
// console.log(typeof newarray);
// console.log(typeof array);

// console.log(arraynew.length);
// console.log(newarray.length);
// console.log(array.length);

// console.log(arraynew[0]);
// console.log(newarray[0]);
// console.log(array[0]);

/* pop method and push method */

let array = [];
console.log(array.length);
array[0] = "harmi"
console.log(array.length);
console.log(array[0]);
array[1] = "aryan"
console.log(array[1]);
console.log(array.length);

/* push method */

array.push ("neha")
console.log(array);
console.log(array.length);
array.push ("bhargav")
console.log(array);
console.log(array.length);

array[1] = "neha"
array[2] = "shyam"

console.log(array);


/* pop method */

// array.pop()
// array.pop()
// console.log(array);

/*shift method */

// array.shift()
// array.shift()
// console.log(array);
// console.log(array.length);

/* unshift method */

array.unshift("reactjs")
array.unshift("html")
array.unshift("bootstrap")
array.unshift("sass")
console.log(array);

/* includes method */
let check = array.includes("new")
console.log(check);

/*foreach method */

array.forEach((item) => console.log(item))


/* tostring method */

let string = array.toString()
console.log(array);
console.log(string);
console.log(typeof string);

/* toreavers method */

array.reverse()
console.log(array);

/* join method */

let join = array.join("+")
console.log(array);
console.log(join);

/* concat method */

let item = ["new" , 'sweet' , 'blue']
let newarray = array.concat(item)
console.log(array);
console.log(newarray);


newarray.unshift("emptybox")
console.log(newarray);
console.log(array);