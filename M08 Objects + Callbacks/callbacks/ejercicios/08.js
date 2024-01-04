

const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:
   
  var lastIterationResult = false; //Iniciamos en false asumiendo que no está lo que busca

  for (let index = 0; index < array.length; index++) {
      lastIterationResult =  callback(array[index]); //Guardamos el resultado que arrojó la función callback en la última iteración
      if(callback(array[index])===true){ //Si callback encuentra lo que busca entonces retornamos eso.
        return array[index];
        }  
  }
  
  if (lastIterationResult === false) return "No se encontró el elemento";
};


module.exports = buscarElemento;
