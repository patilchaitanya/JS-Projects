//Practice Qs1 [loops] : Guess the number game 

let value = 25;

let attempts = 4;
for (let i=0; i<=attempts; i++ ){
    let userValue = prompt("Guess the random number between 1-100: ");
    if (userValue > 25) {
        alert("Number greater , jarasa chota socho!");
        attempts--;
    } else if (userValue < 25) {
        alert("Number Smaller, jarasa bada socho!");
        attempts--;
    } else {
        alert ("Congratulations! Guessed the correct number");
        break;
    }
}
if (attempts === 0) {
    alert("Chances overr!!, Reload to restart the game.");
}


//Practice Qs2 [Strings]: prompt full username and give them a username

let fullName = prompt("Enter your full name : ");
let username = "@" + fullName + fullName.length;
console.log(username); 


//Practice Qs3 [Arrays]: Find Avg of entire class given an array

let marks = [12, 13, 14, 15, 16, 17];
let sum = 0;
for ( let val of marks){
    sum += val;
}
console.log(sum);
let avg = sum / marks.length;
console.log(`the avg marks of class are ${avg}`);


//Prac Qs4 [Arrays]: Applying final 10% off on an array of price stored.

let items = [250, 645, 300, 900, 50];
let offer = 10;

let i = 0; 
for (let val of items){
    console.log(`Value : ${val}`);
    let discount = val * offer /100;
    let finalPrice = val - discount;
    items[i] = finalPrice;
    console.log(`Value after offer : ${items[i]} `);
    i++;
}


// OR

for (let i = 0;  i < items.length-1; i++) {
    let discount = items[i] * offer / 100;
    items[i] = items[i] - discount;
}


//Prac Qs5 [Array methods] remove,add in array

let companies = [ "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

companies.shift()
console.log(companies);

companies.splice(1,1, "OLa");
console.log(companies);

companies.push("Amazon");
console.log(companies);