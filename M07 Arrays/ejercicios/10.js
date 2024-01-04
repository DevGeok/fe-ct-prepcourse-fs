function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  //console.log("Este es mi array ", array);
  var ordenados = array.slice().sort(((a,b)=> a-b)); //Crea ordenados, un array con los números ordenados.
  var numMayor = ordenados[ordenados.length - 1];
  var indice = 0;
  
  for (var i = 0; i <= array.length-1; i++) { console.log("este es el valor de i: ",i); console.log("este es array[i]: ",array[i]);
    if (array[i] === numMayor)  
    indice = i;
  }
  return indice;
}

module.exports = encontrarIndiceMayor;

encontrarIndiceMayor([5, 4, 3, 2, 1]);