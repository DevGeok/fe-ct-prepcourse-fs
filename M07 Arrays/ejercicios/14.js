function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
 
  var arreglo = []; 
  var producto = 1;
  
  arreglo = [...Object.values(arguments)]
  
  if(arreglo.length===0) return 0; //Si el arreglo está vacío devuelve cero.

  for(var i = 0; i <  arreglo.length; i++) {
     producto =  producto *  arreglo[i]; 
  }
  return  producto;
}
  
  multiplicarArgumentos(5, 5);

module.exports = multiplicarArgumentos;
