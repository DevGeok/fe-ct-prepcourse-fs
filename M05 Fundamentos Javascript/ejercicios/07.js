function esTipoDato(valor) {
  // La función recibe un argumento "valor".
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:
return typeof valor; 
//El operador typeof devuelve una cadena que 
//indica el tipo del operando sin evaluarlo 
}

module.exports = esTipoDato;