function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  var repeated=null;

  for (let index1 = 0; index1 < numeros.length; index1++) { //Hacemos un for dentro de otro for para recorrer todo el arreglo con cada indice el número de veces igual a su longitud.
    for (let index2 = 0; index2 < numeros.length; index2++) {
    if(numeros[index1] === numeros[index2] && index2 !== index1) //Compara cada indice una vez con cada uno de sus compañeros excepto él mismo.
    repeated = numeros[index1]; //Si existe un número repetido lo guarda en "repeated"
  if(repeated!==null) break; //Frena este for para ahorrar memoria si ya encontramos el repetido
  }
 if(repeated!==null) break; //Frena este for para ahorrar memoria si ya encontramos el repetido
}
if (repeated !== null) return repeated; return undefined;
}

module.exports = encontrarElementoRepetido;