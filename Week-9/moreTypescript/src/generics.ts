type Input = number | string;

function getFIrstElement(arr : Input[]) : Input{
    return arr[0]
}

const rollNumber  = [
    12,
    12,
    18,
    10,
]

const firstElement : Input = getFIrstElement(rollNumber)

console.log(typeof firstElement)
console.log(firstElement)