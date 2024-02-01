function myname(){
    console.log("Anjali");
}
myname()
//myname : is reference & myname() : used to execute 

function add(num1,num2){ //parameter: giving name during defination
    console.log(num1+num2);
}
add(3,5)//argument : passed value during calling of function 
add(3,"z")//3z

const res=add(3,5)
console.log(res);//undefined czz function not returning any thing

function add1(num1,num2){ 
    return num1+num2 //return should be the last statement 
}
const res1=add1(3,8)
console.log(res1);//11

function login(username){ 
    if(username===undefined){
        console.log("Please enter username");
        return
    }
    return `${username} loggin successfully`
}
console.log(login());//Please enter username & undefined
console.log(login("anjali"));

function uname(name="john"){ //we can also pass default value to parameter if we are not giving any value during calling 
//of function it will take default value as argument
    return `${name} login`
}
console.log(uname());//john login
console.log(uname("king"));//king login

//REST Operator: when we dont know how much value need to pass or when we have to pass multiple value & it will return array 
function calculateCartPrice(num1,num2,...num3){ 
    return num3
}
console.log(calculateCartPrice(500,200,800,700,482,654));//[ 800, 700, 482, 654 ]



//how to handle object during calling function

const user={
    username:"Ram",
    age: 22
}
function handleObject(user1){
    console.log(`username is ${user1.username} and age is ${user1.age}`);
}
handleObject(user) //username is Ram and age is 22

//can also define object during calling of function
function handleObject1(user1){
    console.log(`username is ${user1.username} and age is ${user1.age}`);
}
handleObject({
    username:"Mohan",
    age:25
}) 

//passing array 
const myArray=[40,50,85,74]
function returnValue(getArray){
    return getArray[2]
}
console.log(returnValue(myArray));//85

console.log(returnValue([71,85,95,75]));//95