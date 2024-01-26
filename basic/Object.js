/* ways to declare object using 
1. literals
2.new keyword with Object Constructor
3.Object.create
4.Function Constructor
5.Class Syntax (ES6 and later)

*/

//1.object Literals

const sym = Symbol();
const user={
    name: "Anjali",
    "full name": "Anjali Raj",
    degree: "B.E",
    yop: 2023,
    location: "Bihar",
    isEmployee: false,
    [sym]: 101
}

//access object
console.log(user.degree);
console.log(user["degree"]);
console.log(user["full name"]); // we cant access with dot
console.log(user[sym]); //Symbols are useful for creating properties that are guaranteed to be unique and not accidentally 
                       //overwritten by other properties.

//modify object value
user.location="bangalore"

// Object.freeze(user)//to freeze the object so that we cant modify it further

user.location="bihar"
console.log(user["location"]);// not modified  bangalore

user.greeting = function() {
    console.log("Hello user");
    // No explicit return, so the function returns undefined by default
};

console.log(user.greeting); // it return reference  indicating that it is an anonymous function.

console.log(user.greeting()); //his logs the result of calling the greeting method. The greeting method logs "Hello user" to the 
//console. However, since this method doesn't explicitly return a value, it returns undefined by default. 

user.greeting(); //Hello user

user.check=function () {
    console.log(`weather user isEmployee ? ${this.isEmployee}`);//this will refer to current object and its property
}
user.check();

//2.new keyword with Object Constructor
const person = new Object();
person.name = "John";
person.age = 30;
person.city = "New York";
console.log(person);

const person1={
    email1:"anjaliraj76312@gmail.com",
    fullname:{
        userfullname:{
            firstname:"anjali",
            lastname:"raj"
        }
    }
}

console.log(person1.fullname);//{ userfullname: { firstname: 'anjali', lastname: 'raj' } }
console.log(person1.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const obj3=Object.assign({},obj1,obj2)// here all value are going in {}(Optional) this is target and obj1,obj2 are source
console.log(obj3);
/* Object.assign() is used to merge the properties of obj1 and obj2 into a new object, which is assigned to obj3.The first argument
({}) is the target object, and it is optional. If provided, it is the object that will receive the properties from the source 
objects (obj1 and obj2).The subsequent arguments (obj1, obj2, etc.) are source objects. Their properties will be copied to target object({}) */

const obj4={...obj1,...obj2}// can also merge using spread operator
console.log(obj4);
