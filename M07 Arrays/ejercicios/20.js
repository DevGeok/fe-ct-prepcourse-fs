function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  var paresEnArray = [];

  for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] % 2 !== 0) continue; // Evita los impares utilizando continue.
    paresEnArray.push(numeros[index]);  // Guarda números pares que hay en el array.
  }
  return paresEnArray.length;  // Devuelve la cantidad de números pares que hay en el array.
}

module.exports = contarParesConContinue;
