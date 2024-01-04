
const listarPropiedades = (objeto) => {
  // Lista y retorna todas las propiedades que posee el objeto recibido por la función.
  // PISTA: Puedes usar el método Object.keys().
  // Tu código:
//   console.log(objeto.key(0));
//  for (let i = 0; i < objeto.length; i++) {
//   console.log(objeto.key(i));
//   return objeto.key(i);
//  } 
return Object.keys(objeto);
};


module.exports = listarPropiedades;
