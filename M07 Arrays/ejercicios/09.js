function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

  var mas10 = [];

  array.forEach((num) => { if  (num>10) mas10.push(num);
    
  });
return mas10.length;


}

module.exports = contarElementosMayoresA10;
