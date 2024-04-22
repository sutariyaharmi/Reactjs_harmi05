

/*  13  Retrieve Today’s Date in JavaScript */

{
    let now = new Date()
    console.log(now);
}

/* 14. Reverse array javascript */


{
    let array = ['apple' , 'kiwi' , 'watermelon' , 'orange' , 'mango' , 'graps' , 'banana']

    array.reverse()
    console.log(array);
}


/* 15. JavaScript concate or merge two Arrays */

{
    let array = ['apple' , 'kiwi' , 'watermelon' , 'orange' , 'mango' , 'graps' , 'banana']

    let item = ["pencil" , ' new ' , 'tab ']
    let newarray = array.concat(item)
    console.log(newarray);
}


/* 16. Reverse String in JavaScript */

{
    let str = "hello" ;
    let str1 = str.split("");
    console.log(str1);
     let str2 = str1.reverse();
     console.log(str2);
     let str3 = str2.join("");
     console.log(str3);
}

/* 18. if else statement in JavaScript */

let a = 19;

if(a>18) {

    console.log("you are mature");

} else{

    console.log("you are child");
}

/* 19. Insert element in array javascript */

{
    let array1 = ['apple' , 'kiwi' , 'watermelon' , 'orange' , 'mango' , 'graps' , 'banana']
    let array2 = array1.push("lemon")
    console.log(array2);
    console.log(array1);
}

/* 39. javascript get today’s date */

{
    let now = new Date()
    console.log(now.getDate());
}

/* 46. JavaScript get max value in array of objects */


