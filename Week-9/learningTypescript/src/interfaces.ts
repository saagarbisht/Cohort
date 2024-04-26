interface User {
    age : number,
}
function isLegal(user:User):boolean{
    if(user.age >= 18) {
        return true
    }else{
        return false
    }
}
const user = {
    age : 22,
}


const getData : boolean = isLegal(user);

console.log(getData)

interface Employee {
    firstname : string,
    lastName : string,
    age :number,
    email ?:string,
    greeting(greet : string): void 
}

class Employeess implements Employee{
    firstname: string;
    lastName: string;
    age: number;
    email?: string | undefined;
        constructor(first:string,last:string,age:number){
            this.firstname = first,
            this.lastName = last,
            this.age = age
        }

        greeting(greet: string): void {
            console.log(`${greet} ${this.firstname}`)
        }
    }

    const manager = new Employeess("Sagar","Bisht",22);
    manager.greeting("Hello Mr.")