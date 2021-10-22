// const pressGrindBeans = () => {
//     console.log("Grinding for 20 seconds.");
// }

// pressGrindBeans();


// const favColour = () => {
//     console.log("My favourite colour is blue.");
// }

// favColour();


// let coffeeIsGrinding = false;

// const pressGrindBeans = () => {
//     if (coffeeIsGrinding) {
//         console.log("Stopping the grind.");
//         coffeeIsGrinding = false;
//     } else {
//         console.log("Grinding is about to begin.");
//         coffeeIsGrinding = true;
//     }
// }

// pressGrindBeans();


// // const cashWithdrawal = (amount, accnumb) => {
// //     console.log(`Withdrawing ${amount} from account ${accnum}.`);
// // }

// cashWithdrawal(300, 50449921);


// FUNCTION WITH PARAMETERS
// const favColour = (colour) => {
//     console.log(`My favourite colour is ${colour}.`);
// }

// favColour("blue");


// WITH MULTIPLE OPTIONS
// const favColour = (colour1, colour2) => {
//     console.log(`My favourite colour is ${colour1} NOT ${colour2}.`);
// }

// favColour("black", "yellow");


// WITH ARRAYS
// const favColour = (colour1, colour2) => {
//     console.log(`My favourite colour is ${colour1} NOT ${colour2}.`);
// }

// favColour("black", ["yellow", "red", "blue"]);


// RETURNS WITH FUNCTIONS
// const addUp = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addUp(2,5));


// ACTIVITY 1
// const factorial = (n) => {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
//     }

//     console.log(factorial(33));


// ACTIVITY 2
// let orderCount = 0;

// const takeOrder = (topping1, topping2) => {
//     console.log(`Pizza with ${topping1} and ${topping2}.`);
//     orderCount++;
// }

// takeOrder("pineapple", "ham");

// console.log(orderCount);


// ACTIVITY 3
let pin = 1234
let balance = 200
let amount = 20

if (pin === 1234 && balance >= amount) {
    console.log(`Here is your £${amount} as requested.`);
} else if (pin != 1234) {
    console.log("Wrong PIN entered.")
} else if (balance < amount) {
    console.log("Insufficient funds available.")
}


