function addTwoNumber(number1,number2){
    return number1 + number2;
}

const result = addTwoNumber(12,14);

console.log("sum of two numbers is : ",result)

// Callback

function sum(num1,num2,fnToCall){
    const result = num1+num2;
    fnToCall(result);
}

function displayResult(data){
    console.log(`Result of Sum is : ${data}`)
}

function displayResultPassive(data){
    console.log(`Sum's result is : ${data}`)
}

sum(12,16,displayResult);