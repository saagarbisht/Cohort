// Arrays
const naturalNumbers = [0,5,3,2,10,4,33,6,7,94];

console.log("Even Numbers");
for(let i = 0; i < naturalNumbers.length; i++){
    if(naturalNumbers[i] % 2 === 0){
        console.log(naturalNumbers[i])
    }
}

console.log("Odd Numbers");
for(let i = 0; i < naturalNumbers.length; i++){
    if(naturalNumbers[i] % 2 !== 0){
        console.log(naturalNumbers[i])
    }
}

const numbers = [2,100,6,1,-90,8,66,155];

console.log("Finding the largest number")
let largestNumber = numbers[0];
for(let i = 1; i <= numbers.length; i++){
    if(numbers[i] > largestNumber){
        largestNumber = numbers[i];
    }
}
console.log(largestNumber)

// Objects

const users = [
    {
        name : "Divyanshu Kumar",
        age : 24,
        gender : "male",
        hobbies : ["Programming","Coding",'Watching Animes']
    },
    {
        name : "Karan Singh",
        age : 23,
        gender : "male",
        hobbies : ["Business Studies","Listening Podcast",'Watching Animes']
    }
]

// Arrays of Objects;
console.log("Printing every user Details\n")
users.forEach((user,index) => {
    console.log(`User Id : 00${index+1}\nName : ${user.name}\nAge : ${user.age}\nGender : ${user.gender}\nHobbies : ${user.hobbies}
    `)
})
