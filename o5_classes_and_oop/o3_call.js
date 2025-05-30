function setusername(username){
    //complex db calls
    this.username=username
    console.log("called");
    
}

function createusername(username,email,password){
    setusername.call(this,username)
    this.email=email
    this.password=password
}

const chai=new createusername("Vidhya","vidhya@gmail.com","vmvmvm")
console.log(chai);
