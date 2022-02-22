// Variabile per definire i Km
let howManyKm = parseInt(prompt("Quanti km vuoi percorrere a bordo del treno?"));
console.log(howManyKm);
document.getElementById("my-distance").innerHTML += howManyKm;

// Variabile per definire l'età
const bornYear = prompt("Quando sei nato?"); 
let age = 2022 - parseInt(bornYear);
console.log(age);
document.getElementById("my-age").innerHTML += age;

// Variabile per prezzo del biglietto
let ticketPrice = howManyKm * 0.21;
console.log(ticketPrice);
document.getElementById("my-ticket-price").innerHTML += Math.floor(ticketPrice);



// Test condizionale per applicare la scontistica
if (age < 18) {
    console.log("sconto 20%");
    // Assegnata variabile al prezzo scontato SE  si ha meno di 18 anni
    let discountedPrice = ticketPrice - (ticketPrice / 100 * 20);
    document.getElementById("my-discounted-ticket-price").innerHTML += Math.ceil(discountedPrice);
} else if (age > 65) {
    console.log("40%");
    discountedPrice = ticketPrice - (ticketPrice / 100 * 40);
    document.getElementById("my-discounted-ticket-price").innerHTML += Math.ceil(discountedPrice);
} else {
    console.log("niente sconto");
}
