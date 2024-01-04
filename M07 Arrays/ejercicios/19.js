function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:

  var itera2 = [];
  var numAiterar = num;

  for (let index = 0; index < 10; index++) { // hasta un límite de 10 veces.
    
    if(index === 5 ) continue;  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
                                // se continúa con la siguiente iteración.
    numAiterar= numAiterar + 2; //Iterar en un bucle aumentando en 2 el número num recibido
    itera2.push(numAiterar);    // Guardar cada nuevo valor en un arreglo y retórnarlo.
  }

return itera2; 
// Guardar cada nuevo valor en un array y retornarlo.


}

module.exports = continueStatement;
