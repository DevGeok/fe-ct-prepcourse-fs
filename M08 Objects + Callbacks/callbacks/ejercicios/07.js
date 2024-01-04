function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  var elementsWithA = [];
  for (let index = 0; index < arrayOfStrings.length; index++) {
     if(arrayOfStrings[index][0] === 'a' || arrayOfStrings[index][0] === 'A' ) 
     elementsWithA.push(arrayOfStrings[index]); //Si la primera letra de un arreglo es a o A entonces agregarla al nuevo arreglo.   
  }
  return elementsWithA; 
}

module.exports = filter;
