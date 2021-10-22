// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "cappuccino",
//         "latte",
//         "tea",
//         "hot chocolate"
//     ]
// };


// let person = {
//     name: "Rachel",
//     age: 23,
//     favSongs: [
//         "Eat You Alive - Limp Bizkit",
//         "Coming Undone - Korn",
//         "Ratrace - Skindred"
//     ],
//     myName(){
//         return this.name;
//     }
// }

// console.log(person.myName());


// let day = "Saturday";
// let alarm = "";


// let alarmMsg = {
//     weekendAlarm: "No alarm needed.",
//     weekdayAlarm: "Get up at 7am."
// }

// if (day == "Saturday" || day == "Sunday") {
//     alarm = alarmMsg.weekendAlarm
// } else {
//     alarm = alarmMsg.weekendAlarm
// }

// console.log(alarm);


// ACTIVITY 1
// let person = {
//     name: "Rachel",
//     age: 23,
//     favSongs: [
//         "Eat You Alive - Limp Bizkit",
//         "Coming Undone - Korn",
//         "Ratrace - Skindred"
//     ],
//     sayHi(){
//         return `Hello, my name is ${this.name}.`
//     }
// }

// console.log(person.sayHi());


// ACTIVITY 2
// let pet = {
//     name: "Titan",
//     typeOfPet: "cat",
//     age: "8 months",
//     colour: "grey",
//     eat(){
//         return `${this.name} is eating.`
//     },
//     drink(){
//         return `${this.name} is drinking.`
//     }
// }

// console.log(pet.eat());


// ACTIVITY 3
let foodPrice = 0;
let drinkPrice = 0;

let coffeeShop = {
    branch: "Nottingham",
    drinksWithPrices: [
        ["cappuccino", 2.50],
        ["latte", 2.00],
        ["tea", 1.00]
    ],
    foodWithPrices: [
        ["sandwich", 1.50],
        ["cookie", 1.00],
        ["baguette", 3.50]
    ],
    drinksOrdered(drinkChoice){
        for(i = 0; i < this.drinksWithPrices.length; i++) {
            if (i == drinkChoice) {
                drinkPrice = this.drinksWithPrices[i][1];
        return `Your ${this.drinksWithPrices[i][0]} costs £${this.drinksWithPrices[i][1].toFixed(2)} and `
            }
        }
    },
    foodOrdered(foodChoice){
        for(i = 0; i < this.foodWithPrices.length; i++) {
            if (i == foodChoice) {
                foodPrice = this.foodWithPrices[i][1];
        return `your ${this.foodWithPrices[i][0]} costs £${this.foodWithPrices[i][1].toFixed(2)}.`
            }
        }
    }
}
    
console.log(coffeeShop.drinksOrdered(2) + coffeeShop.foodOrdered(0) + " Your total is £" + (foodPrice + drinkPrice).toFixed(2) + ".");

