function outer(){
    const user="JOHN"

    function inner(){
        const age=25 // can access parent block properties
        console.log(user);
    }
   // console.log(age); cant access child block properties

    inner()
}
outer()


if(true){
    const username="King"
    if(username==="King"){
        const job="manager"
        console.log(`${username} is a ${job}`); //King is a manager
    }
   // console.log(job); cant access
}
//console.log(username);cant access outside scope