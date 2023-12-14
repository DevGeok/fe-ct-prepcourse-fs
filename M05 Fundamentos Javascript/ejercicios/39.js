// ⛔️ Recuerda que debes utilizar el objeto global "Math".

/*function numeroRandom() {
  // Genera un número al azar entre 0 y 1 y retórnalo.
  // Tu código:
  return Math.random(); //Esto es lo que pide pero el testeo pide redondear
}*/

function redondearNumero(num){
  return Math.round(num);
}

//module.exports = numeroRandom;
module.exports = redondearNumero;