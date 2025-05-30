class user{
   constructor(username)
{
    this.username=username
   
}
logme(){
    console.log(`username:= ${this.username}`);
    
}
static createId(){
    return `123`
}
}
const vidhya=new user('vidhya')
//console.log(vidhya.createId());

class teacher extends user{
    constructor(username,email){
    super(username)
    this.email=email
    }
}
const iphone=new teacher('iphone','i@phone.com')
iphone.logme()
console.log(iphone.createId());

