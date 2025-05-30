const user={
    _email:'Vidhya@vm.com',
    _password:'ABC',

    get  email(){
return this._email.toUpperCase()
    },
    set email(value){
      this._email=value
    }
}
const tea=Object.create(user)
console.log(tea.email);
