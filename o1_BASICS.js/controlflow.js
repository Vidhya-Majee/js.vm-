//if
const userlogin=true
const temp=41
// if (temp<50) {
//     console.log("executed");
    
// }
// console.log("sunny day");

//ifelse
// if (temp===49) {
//     console.log("executed");
    
// }
// else{
//     console.log("not");
    
// }
// console.log("sunny day");

//<,>,<=,>=,==,!=,===(not only check the value but also check the type),!==


const bal=1000;
// if (bal>500) console.log("good");
// if (bal<500) {
//     console.log("not");
    
// } 
// else if(bal<750){
//     console.log("not");
// }
// else if(bal<900){
//         console.log("not");
// }
// else {
//         console.log("yes");
// }

const user=true
const dc=true
const goggle=true
const email=true
if (user && dc && 2==2)
        {
    //console.log("allowed....");
    
}
if (goggle || email) {
    //console.log("allowed....");
}
//************************************************************************************* */
const month="nov"
switch (month) {
    case 1:
    //     console.log("jan");
    //     break;
    // case 2:
    //     console.log("april");
        
    //     break;
    
    // case "nov":
    //     console.log("nov");
        
    //     break;
   
    // default:
    //     console.log("oct");
        
        break;
}
// ************************************************************************************************************
 const accountEmail="vidhyamajee1.com";

if (accountEmail) {
    //console.log("got");
    
} else {
    //console.log("not");
    
}


//falsy values
//false,0,-0,BigInt 0n,"",null,undefined,NaN                                      #
//truthy value
//"0",'false'," ",[],(),function(){},                                             #

// if (accountEmail.length===0) {
//     console.log("array is empty");
    
// }

const empObj={}

if (Object.keys(empObj).length==0) {
    console.log("empty");
    
}
//false==0,false=='',0==''      :--true
//....................................................................................................................................
//Nullish coaleseing operator (??):null   undefined

let v;
//v=5??10
//v=null??10
//v=undefined??15
v=null?? 10??15
console.log(v);
//.....................................................................................................................................
//ternary operator
//condition? true: false
const i=10
i>=10? console.log("got"):console.log("not");

