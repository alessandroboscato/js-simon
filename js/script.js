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

alert("Simon says the numbers " + numList[0] + " and " + numList[1] + " and " + numList[2] + " and " + numList[3] + " and " + numList[4] + ".");

//2. Creo una funzione che domandi il numero all'utente e controlli se è presente tra quelli generati casualmente;

function inArray(array, elemento) {
  var trovato = false;
  for (var i = 0; i < array.length; i++) {
    if(array[i] == elemento) {
      trovato = true
    }
  }
  return trovato;
}
//3. Creo una funzione che lo inserisca nell'array dei numeri ricordati se la condizione precedente è true;

function pushIf(array, condizione, elemento) {
  if (condizione == true) {
    array.push(elemento)
  }
}
//4. Creo la funzione che faccia le operazioni precedenti 5 volte;
var rememberedNumbers = [];

function myFunction() {
  for (var i = 0; i < 5; i++) {
    var number = prompt("Insert the number you remember one by one.");
    var primaFunzione = inArray(numList, number);
    var secondaFunzione = pushIf(rememberedNumbers, primaFunzione, number);
  }
  console.log("You remembered the foollowing numbers: " + rememberedNumbers + ", for a total of " + rememberedNumbers.length)
}

//5. Creo la funzione asincrona
setTimeout(myFunction, 3000);




// var num1 = 0;
// var num2 = 1;
// var num3 = 2;
// var num4 = 3;
// var num5 = 4;
//
// alert("Simon says the numbers you should remember are " + num1 + " and " + num2 + " and " + num3 + " and " + num4 + " and " + num5 + ".")
