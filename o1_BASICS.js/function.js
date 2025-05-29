function heart() {
    
    console.log("vm");
    console.log("vm");
    console.log("vm");
    console.log("vm");
    console.log("vm");
    
}
//heart()

// function add(n1,n2) {
//     console.log(n1+n2);
       
// // }

// const r=add(3,8)
// console.log(r);


function add(n1,n2) {
//   let r=n1+n2
//   return r
return n1+n2
       
}


const r=add(3,8)
//console.log(r);

function login(username="vm") {
    if(!username){
        console.log("please enter");
        return
    }
    //return ` hello ${username} you'r just logged in `                    //bactics
    
}
console.log(login("gullu"))//  "":-undefined
// ******************************************************************************************************************************

//function cartcal(val1,val2,...num1) {
 //   return num1
//}
//console.log(cartcal(200,400,600,800));

const course={
    name:"js",
    price:"999",
    instruct:"vidhya"
}
function handle(anyobject){
    console.log(`hello ${anyobject.name} and price is ${anyobject.price}`);
    
}
handle(course)

const newArray=[10,20,30,40,50]
function rt(get) {
    return get[3]
}
// console.log(rt(newArray));
console.log(rt([1,2,3,4,5,6]));
