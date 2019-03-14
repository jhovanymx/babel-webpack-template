export default class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    info(){
        return `Name: ${this.name}, Email: ${this.email}`;
    }
}