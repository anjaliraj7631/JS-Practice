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

console.log(Object.keys(person));//it will return all key in form of array [ 'name', 'age', 'city' ]
console.log(Object.values(person));//it will return all the values [ 'John', 30, 'New York' ]
console.log(Object.entries(person));//it will return key value pair [[ 'name', 'John' ], [ 'age', 30 ], [ 'city', 'New York' ]]

console.log(person.hasOwnProperty('city'));//to chaeck whether this property is persent or not

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

//when object is coming from database it will in the form of array-object
const users= [
    {
        id:1,
        email:"ajd@gmail.com" 
    },
    {
        id:2,
        email:"avd@gmail.com" 
    },
    {
        id:3,
        email:"sdd@gmail.com" 
    }
    
]
console.log(users[2].email);

//3.Object.create:
const person3 = Object.create(null);//creating an object with no prototype chain, meaning it has no built-in methods or properties
// inherited from the default Object prototype. This object is often referred to as a "null prototype" object
person3.name = "Smith";
person3.age = 28;
person3.city = "USA";
console.log(person3);//[Object: null prototype] { name: 'Smith', age: 28, city: 'USA' }

//4.Function Constructor:
function Person4(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}
const person4 = new Person4("Abc", 30, "delhi");
console.log(person4);


//5.Class Syntax (ES6 and later):
class Person5 {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
}
const person5 = new Person5("xyz", 30, "Punjab");

console.log(person5);