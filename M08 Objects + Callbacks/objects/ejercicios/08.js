function crearGato(nombre, edad) {
  // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
  // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
  // Además, agregar una propiedad con el nombre "meow".
  // La propiedad "meow" será una función que retorne el string: "Meow!".
  // Retornar el objeto.
  // Tu código:
  
  //Creamos nuevo objeto con la propiedad meow
  var nuevoObjeto = {
    meow: function (){return "Meow!";}
  };   
  
  //Agregamos las propiedades nombre y edad con los valores que lleguen como parametros.
  nuevoObjeto.nombre= nombre;
  nuevoObjeto.edad= edad;

  return nuevoObjeto;
}

module.exports = crearGato;
