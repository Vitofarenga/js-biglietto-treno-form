// calcolatore
const button = document.querySelector("#only-button")
const output = document.querySelector("#user-price")


button.addEventListener("click", function(){
    let userAge = document.getElementById("user-age").value;
    let userDistance = document.getElementById("user-distance").value;
    

    let userPrice = userDistance * 0.21;
    const scontoUno = (userPrice * 20) / 100;
    const scontoDue = (userPrice * 40) / 100;
    if ( userAge < 18 ) {
        userPrice = userPrice - scontoUno;
   }
   else if ( userAge > 65 ) {
        userPrice = userPrice - scontoDue;
   }
   
  console.log( userPrice.toFixed(2) + "£");
});