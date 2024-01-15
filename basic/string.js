//String interpolation
const name="Anjali"
const age=22
console.log(`My name is ${name} and my age is ${age}`);  

const sname=new String('Hello World')
console.log(sname[0]);
console.log(sname.__proto__);

console.log(sname.length);
console.log(sname.toUpperCase());
console.log(sname.charAt(4));
console.log(sname.indexOf('l'));
console.log(sname.substring(0,4));
console.log(sname.slice(-9,9));//counting from reversr side (-9) and 2nd para counting from starting (9) , we can negative value

console.log(sname.replace('d','de..'));
console.log(sname);
console.log(sname.includes('hd'));
console.log(sname.split(' '));
