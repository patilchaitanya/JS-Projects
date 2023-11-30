let value = 25;

let attempts = 4;
for (let i=0; i<=attempts; i++ ){
    let userValue = prompt("Guess the random number between 1-100: ");
    if (userValue > 25) {
        alert("Number greater , jarasa chota socho!");
        attempts--;
    } else if (userValue < 25) {
        alert("Jarasa bada socho");
        attempts--;
    } else {
        alert ("correct Number: ", userValue);
        break;
    }
}