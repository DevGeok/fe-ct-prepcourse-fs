function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:

  if (typeof numero === "number" ) // El condicional verifica si el tipo de dato que nos dan es un número
  {
   return numero%1 === 0; // Si el resto de la división es igual a cero entonces es entero y da true, si no es decimal y da false.
  } else return false;
} 

module.exports = esNumeroEntero;