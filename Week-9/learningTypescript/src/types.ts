
function printId(id : string | number):void{
    console.log(id)
}

printId("Sagar")

type integerArr = number[] 

function largestInteger(nums : integerArr):void{
    const maxVal : number = Math.max(...nums);
    console.log(maxVal);
}

largestInteger([-10,8,6,55])