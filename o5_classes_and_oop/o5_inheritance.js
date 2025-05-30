class user{
   constructor(username)
{
    this.username=username
   
}
logme(){
    console.log(`username:= ${this.username}`);
    
}
}
class teacher extends user{
    constructor(username,email,password){
    super(username)
    this.email=email
    this.password=password
}

addcourse(){
    console.log(`a new course is added by ${this.username}`);
    
}
}
const vidhya=new teacher("Vidhya","vidhya@gmail.com","vmvmvm")
vidhya.logme()
const cake=new user("black forest")

cake.logme()
console.log(vidhya===cake);
console.log(vidhya instanceof teacher);
console.log(cake instanceof user);


