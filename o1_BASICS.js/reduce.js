const a=[1,2,3,4,5,6,7,8,9,10]
// const b=a.reduce(function (acc,cv) {
//     console.log(`${acc} and ${cv}`);
    
//     return acc+cv
// },0)

const b=a.reduce((acc,cv) =>acc+cv,0)
   
//console.log(b);



// ............................................................
const shop=[{

    ln:"java",
    lnname:999
},
{

    ln:"js",
    lnname:5000
},
{

    ln:"c++",
    lnname:1200
},
{
    ln:"python",
    lnname:6000
}]

const pay=shop.reduce((acc,cv) =>acc+cv.lnname,0)
console.log(pay);
