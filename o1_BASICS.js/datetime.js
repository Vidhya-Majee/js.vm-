/*let d=new Date()
console.log(d.toString());
console.log(d.toDateString());
console.log(d.toISOString());
console.log(d.toJSON())
console.log(d.toLocaleDateString());
console.log(d.toLocaleString());
console.log(typeof d);

let newd=new Date(2005,10,16,5,3,7)
console.log(newd.toLocaleString());

let a=new Date("2025-05-21")
let c=new Date("21-05-2025")
console.log(a.toLocaleString());
console.log(c.toLocaleString());

let mystamp=Date.now();
console.log(mystamp);
console.log(a.getTime());*/
//console.log(Math.floor(Date.now()/1000));

let newm=new Date()
console.log(newm.getMonth()+1);

newm.toLocaleString('default',{
    weekday:"long",
    timeZone:''
})







