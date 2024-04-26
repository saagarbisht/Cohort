let userName : String = "Sagar";
console.log(userName);

function greeting(name:String){
    console.log("hello !",name)
}

greeting("Sagar")

function sum (num1 : number , num2 : number):number{
    return num1 + num2;
}

const total = sum(23,55);

console.log(total)

function isLega(age:number):boolean{
    return age >= 18 ? true : false;
}

const isPersonAllowedToGoInsideClub = isLega(22);
console.log(isPersonAllowedToGoInsideClub)


function delayFuncion(fn:() => void){
    setTimeout(fn,1000)
}

delayFuncion(() => {console.log("hello World!")})

