//ES6

class user{
   constructor(username,email,password)
{
    this.username=username
    this.email=email
    this.password=password
}

encryptpassword(){
    return `${this.password}abc`
}
changeusername(){
    return `${this.username.toUpperCase()}`
}
}
const chai=new user("Vidhya","vidhya@gmail.com","vmvmvm")

console.log(chai.encryptpassword());
console.log(chai.changeusername());


//behinfd the scene.....................................................................................
function users(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}
users.prototype.encryptpassword=function(){
    return `${this.password}abc`
}
users.prototype.changeusername=function(){
    return `${this.username.toUpperCase()}`
}
const tea=new users("Vidhya","vidhya@gmail.com","vmvmvm")

console.log(tea.encryptpassword());
console.log(tea.changeusername());
