class User {
    constructor(email, password){
     this.email = email;
     this.password = password;
    }
 
    get email(){
     return this._email.toUpperCase()
    }
    set email(value){
     this._email = value
    }
 
    get password(){
     return `${this._password.toUpperCase()}Vidhya`
   }
 
   set password(value){
     this._password = value
   }
 }
 
 
 const vidhya = new User("vidhya@vm.ai", "abc")
 console.log(vidhya.email);