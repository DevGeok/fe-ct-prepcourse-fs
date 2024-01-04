function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

  var productos = array.map((num) => num*array.indexOf(num)); 
  return productos;
}

multiplicarElementosPorIndice([1, 2, 3, 4, 5]);
module.exports = multiplicarElementosPorIndice;
