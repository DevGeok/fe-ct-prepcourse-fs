function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var pares = [];

  array.forEach((num) => { if  (num%2==0) pares.push(num);
    
  });
return pares;

}


module.exports = filtrarNumerosPares;
