function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
  const edad = ((new Date()) - fechaNacimiento) / (365.25 * 24 * 60 * 60 * 1000);
  if (edad >= 18) {
    return true
  } else return false;
};

console.log(esMayorDeEdad(new Date(1989, 1, 31)));



module.exports = esMayorDeEdad;