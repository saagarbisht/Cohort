// type keyInput = "up" | "down" | "left" | "right"

enum keyInput {
    Up,
    Down,
    Left,
    Right,
}

function doSomething(keyPressed:keyInput) : void{
    console.log(`You pressed ${keyPressed} key`)
}


// doSomething("up")
doSomething(keyInput.Left)