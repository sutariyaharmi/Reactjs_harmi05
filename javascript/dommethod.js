/* dom method */

/* section method */


// function stylenode(){

//     let User = "harmi"
//     document.getElementById("demo").innerHTML = User ;
    

//     document.getElementById("demo").style.color ="pink"
// }

// let dom1 = document.getElementById('firstheading')
// let dom2 = document.getElementById('firstheading').id       
// let dom3 = document.getElementById('firstheading').className

// console.log(dom1);
// console.log(dom2);
// console.log(dom3);

// let dom4 = document.getElementById("firstheading").innerHTML = "text here"
// console.log(dom4);

// let dom5 = document.getElementById('firstheading').style.backgroundColor = "purple"

// let dom6 = document.getElementById('firstheading').getAttribute('id')
// console.log(dom6);

// let dom7 = document.getElementById('firstheading').getAttribute('class')
// console.log(dom7);

// let dom8 = document.getElementsByClassName('para')
// console.log(dom8);

// let dom9 = document.title

// dom9 = "html lecture"

// console.log(dom9);

// let dom10 = document.links[0]
// console.log(dom10);


/* innerhtml , textcontent , innerhtml */

// let dom1 = document.getElementById('para').innerHTML  = "<em>hello word</em>"
// console.log(dom1);

// let dom2 = document.getElementById('para').textContent
// console.log(dom2);

// let dom3 = document.getElementById('para').innerText
// console.log(dom3);

// let dom4 = document.getElementById('para')
// console.log(dom4);

/* new element using javacript

create element
text content
append child

*/

let NewElement = document.createElement('marquee')
NewElement.textContent = "hello beautiful.."
NewElement.setAttribute("bgcolor" , "green")
NewElement.style.color = "white"
document.body.appendChild(NewElement)   

/* class name */

let dom5 = document.getElementsByClassName('heading')
dom5[0].style.color = "green"
dom5[1].style.color = "green"
dom5[2].style.color = "green"


console.log(dom5);

/* quearyselector and quearyselectorall */


 let dom7 = document.querySelector(".heading")

 dom7.style.backgroundColor  = "orange"

 console.log(dom7);

//  let dom8 = Document.querySelector("a[target ==`_blank`]")
//  dom8.style.color ="blank"

 let dom9 = document.querySelector("input [type = 'email']")
 dom9.style.color = 'pink'