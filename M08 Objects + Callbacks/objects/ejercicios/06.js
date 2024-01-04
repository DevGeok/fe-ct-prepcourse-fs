const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:

  var numeroDePropiedades= 0;
  
  for (const key in objeto) {
    if (Object.hasOwnProperty.call(objeto, key)) {
      numeroDePropiedades = numeroDePropiedades + 1;
    }
  }
  return numeroDePropiedades;
};

module.exports = contarPropiedades;
