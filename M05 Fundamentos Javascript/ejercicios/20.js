

function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  if (letra.length > 1 || !(/[aeiouAEIOU]/.test(letra))) {
    return "Dato incorrecto"; //Aquí terminaría la función si ingresa más de 1 caracter o consonante.
  } else {
    return "Es vocal";
  }

}

module.exports = esVocal;
