function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  var resultado = 0;
  var l = 0;

  do {
    l = l + 1
    resultado = resultado + 5;
    console.log(resultado);     
  } while (l<8);

  return resultado + num;
  
}

module.exports = doWhile;