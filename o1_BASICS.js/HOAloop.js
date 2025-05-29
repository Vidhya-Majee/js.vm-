//for of
// ["","",""]
// [{},{},{}]

const { location } = require("express/lib/response")

const arr=[1,2,3,4,5]
for (const num of arr) {
    //console.log(num);
    
}
const greet="hello world"
for (const g of greet) {
    //console.log(g);
    
}
//maps..............................................................

const map=new Map()
map.set('IN',"India")
map.set('USA',"united state of amarica")
map.set('Fr',"France")
map.set('Fr',"France")
//console.log(map);
for (const [key, value] of map) {
   // console.log(key,":-",value);
    
}
//...........................................................for in
const myobj={
    game1:"ludo",
    game2:"carrom"
}

for (const key in myobj) {
   // console.log(`${key} :-${myobj[key]}`);
    
}
//....................................................................
const arr1=[1,2,3,4,5]
for (const key in arr1) {
     //console.log(`${key} :-${arr1[key]}`);
}
//.......................................................................
// const map=new Map()                  //map is not iterable
// map.set('IN',"India")
// map.set('USA',"united state of amarica")
// map.set('Fr',"France")
// map.set('Fr',"France")
// //console.log(map);
// for (const key in map) {
//   console.log(key);
  
// }
//......................................................................................for each loop
const coding=['jss','ruby','c++','c','java']
// coding.forEach(  function  (item) {
//     console.log(item);
    
// }   )

// coding.forEach( (item)=>{
//     console.log(item);
    
// })
//............................
// function printme(item) {
//     console.log(item);
    
// }
// coding.forEach(printme)


coding.forEach( (item,index,array)=>{
    //console.log(item,index,array);
    
})

const mycode=[{

    ln:"java",
    lnname:'java'
},
{

    ln:"js",
    lnname:'javascript'
},
{

    ln:"c++",
    lnname:'c++'
}]
mycode.forEach(  (item)=>{
    console.log(item.lnname);
    
})