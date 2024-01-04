function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:

  var primerMultiploDeN = null;

  for (let index = 0; index < secuencia.length; index++) {
    if(secuencia[index] % n === 0 ) {
        primerMultiploDeN = secuencia[index]; // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
        break; // Usa un break para detener el bucle una vez halles el múltiplo.
    }
  }
  if (primerMultiploDeN !== null) return primerMultiploDeN; else return undefined; 
}

module.exports = encontrarPrimerMultiploDeN;