function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  
  var numAleatorio = Math.ceil(Math.random()*array.length); //Un número aleatorio entre 1 y la longitud de la cadena
  return (array[numAleatorio-1]); //Retorna la posición de aleatorio - 1, teniendo así todas las posibilidades desde cero
}

module.exports = obtenerElementoAleatorio;
