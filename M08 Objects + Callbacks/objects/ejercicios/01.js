

const obtenerValorPropiedad = (objeto, propiedad) => {
  // Recibe un objeto y el nombre de una propiedad.
  // Devuelve el valor de esta propiedad.
  // Tu código:

  // Divide la propiedad en un array manejando casos como "propiedad.subpropiedad" o "propiedad['subpropiedad']"
  const propiedades = propiedad.split(/\.|\["|"\]/).filter(Boolean);

  // Inicializa el valor con el objeto recibido
  let valor = objeto;

  // Itera sobre las propiedades y verifica si existen en el objeto
  for (const prop of propiedades) {
    if (valor && Object.prototype.hasOwnProperty.call(valor, prop)) {
      valor = valor[prop];
    } else {
      // Si alguna propiedad no existe, asigna undefined a valor y sale del bucle
      valor = undefined;
      break;
    }
  }

  // Devuelve el valor resultante después de la iteración
  return valor;
}

module.exports = obtenerValorPropiedad;
