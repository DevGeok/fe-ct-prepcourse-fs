function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:

  var itera2 = [];
  var numAiterar = num;
  var valorFinalIndex = 0;

  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.

  for (let index = 0; index < 10; index++) { // hasta un límite de 10 veces.
    numAiterar= numAiterar + 2; //Iterar en un bucle aumentando en 2 el número num recibido
    itera2.push(numAiterar); // Guardar cada nuevo valor en un arreglo y retórnarlo.
    valorFinalIndex = index; // Nos deja saber fuera del for cuántas iteraciones van-
    if(index === numAiterar) {
      break; // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  }
}

if(valorFinalIndex !== 9) return "Se interrumpió la ejecución"; else return itera2; 
// Si no  se completan las 10 iteraciones entonces se interrumpió, de lo contrario regresa el arreglo itera2.
}

module.exports = breakStatement;
