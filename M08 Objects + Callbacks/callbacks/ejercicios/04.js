function arrayAdditionrArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // arrayAddition todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // NOTA: no debes retOrnar nada.
  // Tu código:

  var arrayAddition = 0;

  for (let index = 0; index < arrayOfNumbers.length; index++) {
    arrayAddition = arrayAddition + arrayOfNumbers[index]; //Sumamos todos los números de un arreglo.
  }

  cb(arrayAddition); //Hacemos callback a una función con los números sumados.

}

module.exports = arrayAdditionrArray;
