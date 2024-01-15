"use strict"; //treat all js code as newer version
// alert(3+3) //we are using nodejs , not browser cant use 

//JavaScript is a Dynamically typed language. This means that the data type of a variable is not explicitly declared 
//when it is defined. Instead, the data type is determined at runtime based on the type of value assigned to the variable.

/* Data type:
Primitive Data type :- call by value
String => "" ''
Number => 2^53  (Range)
boolean => true / false
bigInt
null => it is also stand alone value (empty)
undefined => not assigned value during variable intialization
symbol => to find uniqueness

null return type is object

Non-Primitive(Reference) Data type :- call by reference
Object: A collection of key-value pairs.
Array: An ordered list of values.
Function: A reusable block of code.
Date: Represents a date and time. etc...

return type of non-primitive datatype is object and for function it is object function type
 */
console.log(typeof undefined);//undefined
console.log(typeof null);//object

const id=Symbol('1') //each call to Symbol() creates a new and unique symbol
const newId=Symbol('1')
console.log(id===newId);//false   having the same description, these symbols are distinct and unique. 

const bigNum=656464694633563526356n
console.log(typeof bigNum); //bigint

//convert ingto number
let a="3a"                           // if a=true       null        undefined
console.log(typeof a); //string             boolean     object      undefined
let b=Number(a)
console.log(typeof b); //number             number      number      number
console.log(b); //NaN                       1           0           NaN

//convert into boolean
let x=1;            //if x=1    ""      "kjnk"   0
let y=Boolean(x)
console.log(y);     // true     false   true    false


//convert into string
let s=6
let sn=String(s)
console.log(sn);
console.log(typeof sn);   //String

console.log(+true);//1
console.log(+"");//0

console.log("2" > 1);//true convert into number then compare
console.log(null > 0);//false   In this case, the null value is coerced to 0 during the comparison.  0 is not greater than 0,result is false
console.log(null == 0);//false  In this case, null is not equal to 0 when type coercion is considered, so the result is false.
console.log(null >= 0);//true   null value is coerced to 0 during the comparison.In this case, 0 is equal to 0, so the result is true

// === check states and datatype
//== check only state
console.log("1"==1); //true
console.log("1"===1); //false

/* stack(primitive)- we will get copies ,  not affect original values
heap(non-primitive) - get refernce, get changes in original value

Primitive types (stack):
When you declare a variable with a primitive type (e.g., number, string, boolean), the actual value is stored directly in the 
variable. When you pass a primitive type as a parameter to a function or assign it to another variable, a copy of the value
is passed or assigned. Changes in the new variable don't affect the original variable. */

let num1 = 5;  // num1 is a primitive type stored in the stack
let num2 = num1;  // Copying the value of num1 to num2
num2 = 10;  // Changing num2 does not affect num1
console.log(num1);  // Outputs 5

/* Non-primitive types (heap):
Non-primitive types (e.g., objects, arrays) are stored in the heap memory, and variables store references (memory addresses) 
to the actual object.When you assign a non-primitive variable to another variable or pass it as a function parameter,
you're copying the reference, not the actual object. Changes to the object through one reference will affect all references 
pointing to that object. */

let arr1 = [1, 2, 3];  // arr1 is a reference to an array stored in the heap
let arr2 = arr1;  // Copying the reference, not the array itself
arr2.push(4);  // Modifying the array through arr2 also affects arr1
console.log(arr1);  // Outputs [1, 2, 3, 4]
