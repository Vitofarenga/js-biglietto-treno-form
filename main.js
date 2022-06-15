// età


// document.getElementById("user-age").innerHTML = userAge;

// distanza da percorrere


// document.getElementById("user-distance").innerHTML = userDistance;

// calcolo
// let userPrice = userDistance * 0.21;
// const scontoUno = (userPrice * 20) / 100;
// const scontoDue = (userPrice * 40) / 100;
// if ( userAge < 18 ) {
//      userPrice = userPrice - scontoUno;
// }
// else if ( userAge > 65 ) {
//      userPrice = userPrice - scontoDue;
// }

// document.getElementById("user-price").innerHTML = userPrice.toFixed(2) + "£";

// calcolo
const button = document.querySelector("only-button")
const output = document.querySelector("user-price")
const scontoUno = (userPrice * 20) / 100;
const scontoDue = (userPrice * 40) / 100;

button.addEventListener("click", function(){
    document.getElementById("user-age").innerHTML = userAge;
    document.getElementById("user-distance").innerHTML = userDistance;
    let userPrice = userDistance * 0.21;
    if ( userAge < 18 ) {
        userPrice = userPrice - scontoUno;
   }
   else if ( userAge > 65 ) {
        userPrice = userPrice - scontoDue;
   }
   
   output.innerHTML = userPrice.toFixed(2) + "£";
});