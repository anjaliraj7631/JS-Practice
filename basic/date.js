let date=new Date()
console.log(date.toString()); //Mon Jan 15 2024 09:31:58 GMT+0000 (Coordinated Universal Time)
console.log(date.toDateString());//Mon Jan 15 2024
console.log(date.toISOString());//2024-01-15T09:31:58.356Z
console.log(date.toJSON());//2024-01-15T09:31:58.356Z
console.log(date.toLocaleDateString());//1/15/2024
console.log(date.toLocaleString());//1/15/2024, 9:31:58 AM
console.log(date.toLocaleTimeString());//9:31:58 AM

console.log(typeof date);//object

let newDate=new Date(2023,0,15, 5,3)
console.log(newDate.toLocaleString());//1/15/2023, 5:03:00 AM

let newwDate=new Date("01-15-2024")
console.log(newwDate.toLocaleString());//1/15/2023, 5:03:00 AM

let timeStamp=Date.now()
console.log(timeStamp);
console.log(Math.floor(Date.now()/1000));//to convert into seconds

console.log(newDate.toLocaleString('default',{
    weekday:"long",
}));

