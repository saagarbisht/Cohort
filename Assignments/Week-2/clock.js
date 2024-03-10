function time(){
    const date = new Date();
    console.log(date.toLocaleTimeString())
}

setInterval(time,1000);