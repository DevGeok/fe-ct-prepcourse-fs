function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var toUpper = array.map ((num) => {
    return num.toUpperCase();
  }
  );
  
  return toUpper;
}

module.exports = convertirStringAMayusculas;
