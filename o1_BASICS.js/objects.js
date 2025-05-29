//singleton
//object literals
//Object.create

const sym=Symbol("key1")

const jsuser={
    name: "vidhya",
    age:19,
    location:"kanpur",
    loggin:false,
    [sym]: "ghhiuw"

}
// console.log(jsuser.name);
// console.log(jsuser["name"]);
// console.log(jsuser[sym]);
// jsuser.name="abcdefghijkguywwehbuqo"
// Object.freeze(jsuser)
// jsuser.name="guywwehbuqo"

// console.log(jsuser);

jsuser.greeting=function(){
    console.log("hello......................");
    
}
jsuser.greeting2=function(){
    console.log(`hello..,${this.name}`);
    
}
// console.log(jsuser.greeting());

// console.log(jsuser.greeting2());
// *******************************************************************************************************************************

//singleton
//const tinder=new Object()

const tu={}
tu.id="123abc"
tu.name="john"
tu.isloggin=false
//console.log(tu);

const ratuser={
    email:"ihuegugucd@gmail.com",
    fullname: {
        userfull:{
        firstname:"vidhya",
        last:"majee"
        }
    }
}
//console.log(ratuser.fullname.userfull.firstname);

const o1={1:"a",2:"b"}
const o3={3:"a",4:"b"}
//const o2={o1,o3}
//const o2=Object.assign({},o1,o3)
const o2={...o1,...o3}
//console.log(o2);

//database values
const users={
    a:{

    },
    b:{

    },
    c:{

    }
}
//users.[1].email

console.log(tu);
console.log(Object.keys(tu));
console.log(Object.values(tu));
console.log(Object.entries(tu));


//console.log(tu.hasOwnProperty('isloggin'));

//*****************************************OBJECT DESTRUCTION****************************************************************************** */
// const course={
//     name:"js",
//     price:"999",
//     instruct:"vidhya"
// }
// const{ instruct:it}=course
//console.log( it);
//**********************************************************API CALL***************************************************************************** */

// {
//     "name":"js",
//     "price":"999",
//     "instruct":"vidhya"
// }

[
    {},
    {},
    {}
]
//randomuser me,json formatter




