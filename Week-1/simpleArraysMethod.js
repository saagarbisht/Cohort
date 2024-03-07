const arr = ["Sagar",22,true,["watching anime","reading manga","Coding","Programming"]];

// adding new element at the end of the array
arr[3].push("Cooking")
console.log(arr);

// removing a element from the end of the array
const removedElementFromEnd = arr[3].pop();
console.log(removedElementFromEnd);
console.log(arr);

// adding new element at the start of the array
arr[3].unshift("Cooking")
console.log(arr);

// removing a element from the end of the array
const removedElementFromStart = arr[3].shift();
console.log(removedElementFromStart);
console.log(arr);

// loop specific to array 

// Changing the exising array
arr.forEach((element,index) => {
    if(element === 22){
        arr[index] = 21;
    }
})

console.log(arr)

// changing in an returning new Array
const newArr = arr.map((element,index) => {
    if(element === 21){
        return 20
    }
    return element
})
console.log(newArr);//new array
console.log(arr);//old Array With no Change

// finding an element;
const element = arr.find((element) =>  element ==="Sagar" );
console.log(element)
// finding index of the element
const index = arr.findIndex((element) => element === 21)
console.log(index)
