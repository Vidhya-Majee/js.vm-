const arr=[1,2,3,4,5]

const hero=["vtfuj","ugfhj"]
const arr2=new Array(1,2,3,4)
// console.log(arr2[2]);

// console.log(arr[0]);

// arr.push(6)
// arr.push(7)
// arr.pop()

 //arr.unshift(9)
 //arr.shift()
//console.log(arr.includes(9));
//console.log(arr.indexOf(9));

//const newarr=arr.join()
 //console.log(arr);
// console.log(newarr);
// console.log(typeof newarr);

//slice    ,//splice    ************************************************************************************************


// console.log("A",arr);

// const myn1=arr.slice(0,3)
// console.log(myn1);

//  console.log("B",arr);

// const myn2=arr.splice(0,3)
//  console.log(myn2);
//  console.log("C",arr);

//*********************************************************************************************************************** */
const m=["a","b","c"]
const n=["x","y","z"]
//m.push(n)
// console.log(m);
// console.log(m[3][2]);

// const all=m.concat(n)
// console.log(all);

const all_new=[...m,...n]
//console.log(all_new);

const another=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real=another.flat(Infinity)
//console.log(real);

//console.log(Array.isArray("Vidhya"));
console.log(Array.from("Vidhya"));
console.log(Array.from({name: "Vidhya"}));//........................................................interesting case

let s1=100
let s2=200
console.log(Array.of(s1,s2));












