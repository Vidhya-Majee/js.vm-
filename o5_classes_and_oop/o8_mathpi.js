//const descripter=Object.getOwnPropertyDescriptor(Math,"PI")
//console.log(descripter);

// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);

const chai={
    name:"gingerchai",
    price:250,
    isavailable:true,
    order: function(){
        console.log("chai nhi bni");
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,'name'));
Object.defineProperty(chai,'name',{
   // writable:false,
    enumerable:false,
})
// console.log(Object.getOwnPropertyDescriptor(chai,'name')

for (let [key,value] of Object.entries(chai)) {
    if (typeof value!== 'function') {
          console.log(`${key}: ${value}`);
    }
  
    
}






//const mynewobj=Object.create(null)