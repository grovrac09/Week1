// // let coffeeOrder = [
// //     "Alex - Cortado",
// //     "Ben - Cortado",
// //     "Charlie - Whatever's new"
// // ];

// // coffeeOrder.push("Donna - espresso");


// let favSongs = [
//     "Limp Bizkit - Eat You Alive",
//     "Korn - Counting On Me",
//     "Skindred - Ratrace",
// ];

// favSongs.push("Thumper - Enter Shikari", "My Own Summer - Deftones");
// favSongs.pop();

// console.log(favSongs);


// let arr = ["Korn", "Skindred", "Limp Bizkit"]
// arr.unshift("Deftones");

// console.log(arr);

// let favDrinks = [
//     "Monster",
//     "Coffee",
//     "Irn Bru",
// ];

// for (let i = 0; i < favDrinks.length; i++){
//     console.log(favDrinks[i]);
// }


// let multiplesTwo = [];

// for(let i = 0; i < 20; i++) {
//     if (i % 2 == 0) {
//         multiplesTwo.push(i);
//     }
// }

// console.log(`Numbers divisble by 2 between 0 and 20 are: ${multiplesTwo}.`);


// let age = 15;

// while(age < 18){
//     console.log("You're a child.");
//     age++;
// }

// console.log("You're an adult.");


// let cards = ["Diamond", "Spade", "Heart", "Club"];
// let currentCard = "Club";

// while(currentCard != "Spade"){    // != means not equal to
//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random()*4)];
// }

// console.log(currentCard);

//TASK 1
// let favFilms = [
//     "The Devil Inside",
//     "The Purge",
//     "Split",
//     "Insidious"
// ];

// favFilms.push("Would You Rather", "Orphan");

// for (let i = 0; i < favFilms.length; i++){
//     console.log(favFilms[i]);
// }


// TASK 1
// for(let i = 0; i < 6; i++) {
//     console.log(Math.floor(Math.random()*50))
// };

// TASK 2
// let multiplesTwo = [];

// for(let i = 0; i < 20; i++) {
//     if (i % 2 == 0) {
//         multiplesTwo.push(i);
//     }
// }

// console.log(`Numbers divisble by 2 between 0 and 20 are: ${multiplesTwo}.`);


// TASK 3
// var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
 
// for (var i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }


// TASK 4
// let films = ["Knowing", "2012", "Hereditary", "Thor Ragnarok"];

// for (let i = 0; i < films.length; i++){
//     console.log(films[i]);
// }

// if (films[2] =="Ghostbusters") {
//     console.log("Yay, it's Ghostbusters!")
// } else {
//     console.log("Boo! We want Ghostbusters!")
// }


// TASK 5
// let num = [];

// for(let i = 0; i < 6; i++) {
//     num.push(Math.floor(Math.random()*30))
// }

// console.log(num)

// for(let i = 0; i < num.length; i++) {
//     if (num[i] % 7 == 0) {
//         console.log(`${num[i]} is divisible by 7.`)
//     } else {
//         console.log(`${num[i]} is NOT divisible by 7.`)
//     }
//     }


// TASK 6
let bobFollowers = ["Charlie", "Jake", "David", "Jonathan"];
let annFollowers = ["Jonathan", "Jake", "Ashley", "Rebecca"];

for(let i = 0; i < bobFollowers.length; i++) {
    for(let j = 0; j < annFollowers.length; j++) {
        if (bobFollowers[i] == annFollowers[j]) {
            console.log(`${bobFollowers[i]}`)
        }
    }
}

