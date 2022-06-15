// età
let userAge = prompt("inserisci la tua età");
console.log(userAge);

document.getElementById("user-age").innerHTML = userAge;

// distanza da percorrere
let userDistance = prompt("inserisci la distanza da percorrere");
console.log(userDistance);

document.getElementById("user-distance").innerHTML = userDistance;

// calcolo
let userPrice = userDistance * 0.21;
const scontoUno = (userPrice * 20) / 100;
const scontoDue = (userPrice * 40) / 100;
if ( userAge < 18 ) {
     userPrice = userPrice - scontoUno;
}
else if ( userAge > 65 ) {
     userPrice = userPrice - scontoDue;
}

document.getElementById("user-price").innerHTML = userPrice.toFixed(2) + "£";