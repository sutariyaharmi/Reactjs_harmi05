
{

    let str = ' this is string';
    let str1 = " this is string";
    let str2 = ` this is string`;
    let str3 = new String("this is object");
  

    console.log(typeof str);
    console.log(typeof str1);
    console.log(str2);
    console.log(typeof str2);
    console.log(str3);
    console.log(typeof str3);
}

/* string charAt() method */

{
    let str = "this is code undefind code code."
    let newstr = str.charAt(3)
    console.log(newstr);
}

/* string length method */

{
    let str = "this is code undefind code code."
    let lengthstr = str.length
    console.log(lengthstr);
}

/* indexof()  AND lastindex() method */

{
    let str = "this is code undefind code code."
    
    let indexstr = str.indexOf('code');
    console.log(indexstr);
    let lastindexstr = str.lastIndexOf('code');
    console.log(lastindexstr);

    let indexstr1 = str.indexOf('code' , 8)
    console.log(indexstr1);
    let lastindexstr1 = str.lastIndexOf('code' , 27)
    console.log(lastindexstr1);

    let indexstr2 = str.indexOf('code' , 9)
    console.log(indexstr2);
    let lastindexstr2 = str.lastIndexOf('code' , 28)
    console.log(lastindexstr2);
}

/* string includes() method */

{
    let str  = "this is code undefined code code."

    let incstr = str.includes('code');
    console.log(incstr);
    let incstr1 = str.includes('box');
    console.log(incstr1);

    let incstr2 = str.includes("code" , 8);
    console.log(incstr2);
    let incstr3 = str.includes("code" , 9)
    console.log(incstr3);
}

/* string split method */

{

    let str  = "this is code undefined code code."

    let str1 = str.split('')
    console.log(str1);
    let str2 = str.split(' ')
    console.log(str2);
    let str3 = str.split('i')
    console.log(str3);
    let str4 = str.split('i' , 2)
    console.log(str4);
}

/* javascript trim() , trimstart() , trimend() method */

{
    let str = "    this is morning upon us!   "
    
    let trimstr = str.trim();
    console.log(trimstr);
    let trimstr2 = str.trimStart();
    console.log(trimstr2);
    let trimstr3 = str.trimEnd();
    console.log(trimstr3);
}


/* string slice and substring method */


{
    let str = "this is morning upon us!"

    let slicestr = str.slice(3);
    console.log(slicestr);
    let substr = str.substring(3);
    console.log(substr);

    
    let slicestr1 = str.slice(-3);
    console.log(slicestr1);
    let substr1 = str.substring(-3);
    console.log(substr1);
}