function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:

  var tablaDel6 = [];

  for (let index = 0; index <= 10; index++) {
    tablaDel6.push(index * 6);
  }
  return tablaDel6;
}

module.exports = tablaDelSeis;
