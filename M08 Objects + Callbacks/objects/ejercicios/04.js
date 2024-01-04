const obj = { name: "John", age: 30 };

function verificarPropiedad(objeto, propiedad) {
  // Verifica si el objeto posee la propiedad recibida.
  // Retorna true si la tiene, sino retorna false.
  // PISTA: Puedes usar el método hasOwnProperty().
  // Tu código:
  if (objeto.hasOwnProperty(propiedad) && objeto.propertyIsEnumerable(propiedad)) {
    return true;
  }

  // Verificar propiedad heredada
  let proto = Object.getPrototypeOf(objeto);
  while (proto) {
    if (proto.hasOwnProperty(propiedad)) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }

  return false;
}

module.exports = verificarPropiedad;
