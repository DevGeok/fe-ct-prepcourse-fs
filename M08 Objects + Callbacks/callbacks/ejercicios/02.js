function cambiarCadena(string, callback) {
  // Aplica la función de callback al string y devuelve el resultado.
  // La función de callback se encargará de recibir el string y devolverlo con los cambios.
  // Tu código:
  if (callback === undefined) return string; //Verifica que callback sea una función, si no lo es devuelve la string.
  return callback(string); //Devuelve el resultado de ejecutar la función callback con el parametro string. 

}

console.log(cambiarCadena("Hola Mundo"))

module.exports = cambiarCadena;
