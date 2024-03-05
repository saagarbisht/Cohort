const name = "Deepa";
const isMarried = true;
const gender = "female";

if(gender === "female"){
    if(isMarried){
        console.log(`Hello Mrs.${name} we are happy to see you again`)
    }else{
        console.log(`Hello Ms.${name} we are happy to see you again`)
    }
}else{
    console.log(`Hello Mr.${name} we are happy to see you again`)
}