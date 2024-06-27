{
    let Now = new Date();
    console.log(Now);

}


/* Write a JavaScript program to calculate number of days left until next Christmas. */

{
    var today = new Date();
var christmas = new Date(today.getFullYear(2024), 11, 25);

if (christmas < today) {
    christmas.setFullYear(christmas.getFullYear() + 1);
}

console.log(christmas);
}