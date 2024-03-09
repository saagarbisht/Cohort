// counter 1;
let num = 0;
setInterval(() => {
    num++;
    console.log(num)
},1000);

// counter 2
let num2 = 0;
function callTimer(fn){
    setTimeout(fn,1000)
}
function counter(){
    num2++;
    console.log(num2)
    callTimer(counter);
}
callTimer(counter)