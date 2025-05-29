"use strict";//treat all js code in new version
//alert(3+3)   :we are using node js ,not browser

//console.log(3+3) ..................................................//code readability should be high

//console.log("Vidhya");
let name="Vidhya"
let age=19
let isloggedIn=false
let state=null

// number==>2 to power 53
// BigInt
// String=>""
// Boolean=>true/false
// null=>standalone Value
// undefined
// Symbol=>unique

// Object
//console.log(typeof undefined);                                                           //undefined

//console.log(typeof null);                                                                      //Object
//**************************************************************************************************************************************** */
// ****************************************************dt2.js*************&&&&&&&&&&*******************************************#############


// let score=null

// console.log(typeof score);

 //let val=Number(score)

// console.log(typeof val);
// console.log(score);

let islogin=""
let bool=Boolean(islogin)
// console.log(bool);
//""=false
//"vm"=true


let num=65
let st=String(num)
// console.log( typeof st);


//******************operations****************** */
let value=5
let nval=-value
//console.log(nval);

let str1="hello"
let str2="vm"
let str3=str1+str2
//console.log(str3);
// console.log("1"+2);//12
// console.log("1"+"2"+1+2);//1212
//  console.log(1+2+"1"+"2");//312

// console.log(+"");
// console.log(+true);

//   avoid these comparisons........
// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);

// console.log(undefined==0);
// console.log(undefined>=0);
// console.log(undefined>0);

//===
//console.log("2"===2);
//**************************************************************************************************************************************** */
// ****************************************************dt3.js*************&&&&&&&&&&*******************************************#############


//primitive
//7 types:string,number,boolean,null,undefined,symbol,bigint

const id=Symbol('123')
const aid=Symbol('123')
//console.log(id==aid);

const bignum=9948465656325n


// reference(non-primitive)
//........................................................array,objects,functions

const heros=["a","b","c"]

let myobj={
    name:"vidhya",
    age:19,

}
const myfun =function name(params) {
    //console.log("dyrstgrs");
    
}
//console.log(typeof heros);

//**************************************************************************************************************************************** */

//stack memory(primitive{copy of a value is created} ):-[LIFO]//             :-7 types:string,number,boolean,null,undefined,symbol,bigint
//      heap memory(non-primitive{reference of a original value is created}) :-array,objects,functions


let y="vidhya"
let x=y;
x="vivek"
//console.log(y);
//console.log(x);

let user1={
    email:"vm@gmail.com",
    upi: "f6tfu"
}
let user2=user1

    user2.email="vidhya@gmail.com"
   

console.log(user1);
console.log(user2);











