function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var menor;
  var mayor;
  var producto;

  //Primero definimos cuál de los dos números es mayor.
  if (a > b) { 
    menor = b;
    mayor = a;
  } else {
    menor = a;
    mayor = b;
  }

// Creamos el bucle de la multiplicación
  for (let i = menor + 1; i <= mayor; i++) {
    producto = menor = menor * i;
  }

//Si el resultado arroja -0 lo cambiamos a 0
  if (producto == -0) return 0; else return menor;

}

module.exports = productoEntreNúmeros;