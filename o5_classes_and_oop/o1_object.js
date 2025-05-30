//object literals
const user={
    username:"vidhya",
    login:8,
    signin:true,
    getuser:function(){
 // console.log(`username: ${this.username}`);
 //console.log(this);
 
  
    }
}
// console.log(user.username);
// console.log(user.getuser());
//console.log(this);

//************************************************************************************************************** */
function users(username,logincount,isloggedin) {
    this.username=username;
    this.logincount=logincount;
    this.isloggedin=isloggedin


    this.greet=function(){
        console.log(`welcome  :-${this.username}`);
        
    }
    //return this
}
const userone= new users("vm",8,true)
const usertwo= new users("vidhya",19,true)
//console.log(userone.constructor);
//console.log(usertwo);


// *****************************************************************************************************888


function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()  


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. 
If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, 
if it doesn't return a non-primitive value (object, array, function, etc.), 
the newly created object is returned.

*/


/*new =>new obj is created 
constructor function is called because of new
all arguments get inject   (this.)
get in a function*/
