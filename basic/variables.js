const id=101 
let email="anjali@email.com"
var pass="123456"
city="Bamgalore"

//id=102 not allowed
console.log(id);

email="anjali76@gmail.com"
pass="12345"
city="Patna"

console.table([id,email,pass,city])

/* 
Prefer not to use var czz of issue in block scope and funtional scope

by default when we dont intialize variable it will be consider as undefined

Use var if you want function-scoped variables that can be hoisted. 
Use let if you want block-scoped variables that can be reassigned.
Use const if you want block-scoped variables that are constant and cannot be reassigned.

block-scoped:
function example() {
  if (true) {
    let y = 20;
    const z = 30;
    console.log(y, z); // 20, 30 (accessible inside the if block)
  }
  // console.log(y); // ReferenceError: y is not defined
  // console.log(z); // ReferenceError: z is not defined
}


function-scoped:
function example() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 (accessible outside the if block)
}

*/
