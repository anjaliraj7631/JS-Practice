const points=100
console.log(points);

const amount=new Number(1000)
console.log(amount);

console.log(amount.toString().length); // we can convert into string and then we will get extra property
console.log(amount.toFixed(2));//to fixed decimal value

const num=23.8873
console.log(num.toPrecision(3));//23.9
console.log(num.toPrecision(2));//24
const num1=50000000
console.log(num1.toLocaleString('en-In'));//by default us standard it convert 

/*  Maths Library */
console.log(Math.abs(-4)); // to convert into +ve value
console.log(Math.round(4.6));//5
console.log(Math.ceil(4.2));// it will give upper value 5
console.log(Math.floor(4.2));//it will give lower value 4
console.log(Math.min(4,3,-5,-8.2));//-8.2
console.log(Math.max(4,3,-5,-8.2));//7

console.log(Math.random());//By default, it will give any random value between 0 to 1
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)+min));

const minm=1000
const maxi=2000
console.log(Math.floor(Math.random()*(maxi-minm+1)+minm));