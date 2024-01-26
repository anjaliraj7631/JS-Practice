//js arrays are resizable and can contains mixed data type

const arr=[0,1,'j','js',2]
console.log(arr[2]);
const arr1=new Array(1,2,'k',6)
console.log(arr1[3]);

//Array Methods
arr.push(74) // adding value at last
console.log(arr);
arr.pop() //removing value from last
console.log(arr);
arr.unshift(7) //adding value in front
console.log(arr);
arr.shift() //removing first value
console.log(arr);
console.log(arr.includes(5));//return boolean value
console.log(arr.indexOf('j'));//return the index value 

const newArr=arr.join() //it will bind and convert array into string
console.log(arr);
console.log(newArr);
console.log(typeof newArr);//string

const newArray=[4,54,8,25,7,95,44]
console.log(newArray);

const sli=newArray.slice(2,5) // slice(start, end) extracts elements from the start index up to, but not including, the end index.
//It returns a new array containing the extracted elements without modifying the original array.
console.log(sli);
console.log("After Slice" ,newArray);

const spli=newArray.splice(2,3)
console.log(spli);//splice(start, deleteCount) modifies the original array by removing or replacing existing elements.
//It starts at the start index and removes deleteCount elements. It returns an array containing the removed elements.
console.log("After splice ",newArray);
console.log(newArray);

 const marvel_heros=["IronMan","Captain Marvel","Spider-Man","Wolverine"]
 const harry_potter=["Harry Potter","Hermione Granger","Ron Weasley"]
console.log(marvel_heros.concat(harry_potter));//['IronMan','Captain Marvel','Spider-Man','Wolverine','Harry Potter', 'Hermione Granger', 'Ron Weasley']
marvel_heros.push(harry_potter)
console.log(marvel_heros);//['IronMan','Captain Marvel','Spider-Man','Wolverine',[ 'Harry Potter', 'Hermione Granger', 'Ron Weasley' ] ]
console.log(marvel_heros[4][1]);//Hermione Granger

//concat method is used to concatenate two or more arrays. It doesn't modify the original arrays but instead returns a new array .
//The push method is used to add one or more elements to the end of an array. It modifies the original array and returns the new length of the array.

//spread operator: work same as concat
const all_heros=[...marvel_heros, ...harry_potter]
console.log(all_heros); //['IronMan','Captain Marvel','Spider-Man','Wolverine','Harry Potter', 'Hermione Granger', 'Ron Weasley']


const nested_array=[1,2,3,[4,5,6],7,[8,9,[4,8]]]
const single_array=nested_array.flat(Infinity)//here we can pass any argument like 1,2 based on nested array
console.log(single_array);

console.log(Array.isArray("JavaScript"));
console.log(Array.from("JavaScript"));//it will convert into array [ 'J', 'a', 'v', 'a','S', 'c', 'r', 'i','p', 't']
console.log(Array.from({name:"hello"}));//[] czz we have to specify on what basis we want array like key or value
const obj = { name: "hello",id:101 };
const newval = Array.from(Object.values(obj));
const newkey = Array.from(Object.keys(obj));
console.log(newkey);//[ 'name', 'id' ]
console.log(newval);//[ 'hello', 101 ]

let n1=100
let n2=120
let n3=150
console.log(Array.of(n1,n2,n3));[ 100, 120, 150 ]

