// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzae il programma.

//1. Genero 5 numeri casuali e li stampo in un alert;
var numList = [];
for (var i = 0; i < 5; i++) {
var randomNumber = Math.floor(Math.random() * 100);
numList.push(randomNumber);
console.log(numList);
}

alert("Simon says the numbers you should remember are " + numList[0] + " and " + numList[1] + " and " + numList[2] + " and " + numList[3] + " and " + numList[4] + ".");





// var num1 = 0;
// var num2 = 1;
// var num3 = 2;
// var num4 = 3;
// var num5 = 4;
//
// alert("Simon says the numbers you should remember are " + num1 + " and " + num2 + " and " + num3 + " and " + num4 + " and " + num5 + ".")
