/* javascript array method */

/* map method */

{
    let array = ['apple' , 'kiwi' , 'watermelon' , 'orange' , 'mango' , 'graps' , 'banana']

    // let forarray = array.forEach((item) => console.log(item + item));
    // console.log(forarray);

    let maparray = array.map((any) => any+any )
    console.log(maparray);

    console.log(maparray[0] = "orange");
    console.log(maparray);
    console.log(array);

    let Number = [ 10 , 45 , 50 ,60 , 34]
    let newarray = Number.map((num) => num*2)
    console.log(Number);
    console.log(newarray);
}


/* filter method */

let arrays = [

    {id:1 , type:"mobile" , name:"iphone12" , color:"gray"},
    {id:1 , type:"mobile" , name:"iphone12pro" , color:"gray"},
    {id:1 , type:"mobile" , name:"iphone13" , color:"gray"},
    {id:1 , type:"mobile" , name:"iphone13pro" , color:"gray"},
    {id:1 , type:"laptop" , name:"dell" , color:"black"},
    {id:1 , type:"laptop" , name:"hp" , color:"black"},
    {id:1 , type:"laptop" , name:"assus" , color:"gray"}
]

let filter = arrays.filter((item) => item.type === "mobile")

console.log(filter);


/* indexOf and lastindexOf */

{
    let array = ['apple' , 'kiwi' , 'watermelon' , 'orange' , 'mango' , 'graps' , 'banana']

    let indexarray = array.indexOf("orange")
    console.log(indexarray);
    let indexarray1 = array.indexOf("orange" ,1)
    console.log(indexarray1);
}

{
    let array = ['apple' , 'kiwi' , 'watermelon' , 'orange' , 'mango' , 'graps' , 'banana']

    let lastindex = array.lastIndexOf("mango")
    console.log(lastindex);
    let lastindex1 = array.lastIndexOf("mango" , 2)
    console.log(lastindex1);

}


/* some method */

{
    let array = ['apple' , 'kiwi' , 'watermelon' , 'orange' , 'mango' , 'graps' , 'banana']

    let some = array.some((item) => item ==="apple")
    console.log(some);

    let include = array.includes("apple")
    console.log(include);
}