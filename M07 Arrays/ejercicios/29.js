function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  
  var nextNumber = numeros[0];
  var isArrayComplete = true;

  for (let index = 1; index < numeros.length; index++) {
      nextNumber=nextNumber+1;   // Encuentra el número faltante en una secuencia de números enteros consecutivos
    if (numeros[index] !== nextNumber)  {
      isArrayComplete = false;
      break;
    }
 }
 if ( numeros.length === 0 || isArrayComplete === true) return null; else return nextNumber;
}//Devuelve null si el aray es vacío o si no hay números faltantes. Devuelve el número faltante si existe.


module.exports = encontrarNumeroFaltante;