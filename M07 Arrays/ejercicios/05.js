function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
var str5 ="";
  array.some((i) => {
    if (i.length > 5) {
      console.log(i);  
      str5= i;
      return true;
    }
  }
  )
if (str5.length>5) return str5; else return undefined;
}
obtenerPrimerStringLargo(["hello", "world", "this", "is", "a", "test"]);

module.exports = obtenerPrimerStringLargo;
