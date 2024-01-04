function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  var comparar = "";
  var sincomayespacio = "";
  sincomayespacio = string.replace(/[ ,]/g, '');; // Borra espacios y comas de un string
  sincomayespacio = sincomayespacio.toLowerCase(); // convierte un string a minusculas
  console.log(sincomayespacio);

  for (let i = sincomayespacio.length - 1; i >= 0; i--) {
    comparar = comparar + sincomayespacio[i]; //retorna el string sincomayespacio alreves
  }
  if (comparar == sincomayespacio) {
    return true;
  } else
    return false;
}


module.exports = esPalindromo;
