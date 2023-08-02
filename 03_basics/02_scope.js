var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", b);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);      
    }

    // console.log(website);

     two()
}

// one()

if (true) {
    const username = "hiren"
    if (username === "hiren") {
        const website = " youtube"
        // console.log(username + website); 
    }
    // console.log(website);
}
// console.log(username);


//++++++++++++++++++++++++++++ intersting +++++++++++++++++++++++++++


function addone(num){
    return num + 1
}
console.log(addone(5));

const addtwo = function(num){
    return num + 2
}

console.log(addtwo(3));
