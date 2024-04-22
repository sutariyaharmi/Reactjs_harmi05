 /* number method */
{
    let x = "10"
    let y = Number(x);
    
    console.log(x + 10);
    console.log(typeof(x));
    console.log(y+10);
    console.log(typeof(y));
}

/* parsefloat and parseInt method */

{
    let x = "15.23"
    let y = parseFloat(x);
    let z = parseInt(x);
    console.log(y);
    console.log(z);
}


/* toprecision and to fixed method */

{

    let x = 44.1143546
    let a = x.toPrecision()
    console.log(a);
    let b = x.toFixed(3);
    console.log(b);
}

/* to exponention method */

{
    let x = 45
    let a = x.toExponential();
    let b = x.toExponential(5)
    console.log(a);
    console.log(b);
}

/* isfinit method */

{
    let x = "abcd"
    let a = isFinite(x)
    let b = Number.isFinite(x)
    console.log(a);
    console.log(b);
}

/* isInt method */

{
    let x = 1020.2732738574960
    let y = Number.isInteger(x)
    console.log(y);
}

/* tostring method */

// let x = false ;
// let y = x.tostring()
// console.log(y);
// console.log(typeof(y));


/* NaN */

{
    let x = "nifnj"
    let y = Number.isNaN(x);
    console.log(y);
}

/* issafeint */

{
    let x = 10000n;
    let y = Number.isSafeInteger(x)
    console.log(y);
}