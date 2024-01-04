function agregarMetodoCalculoDescuento(objetoProducto) {
  // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
  // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
  // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
  // Luego debes restar del precio total del producto ese valor de descuento.
  // Retornar el precio final.
  // Ejemplo:
  // Precio ---> 10
  // PorcentajeDeDescuento ---> 0.2
  // Precio final ---> 8
  // Tu código:


 objetoProducto.calcularPrecioDescuento = function () { //Agregamos la función
    var descuento =  this.precio * this.porcentajeDeDescuento; // Sacamos cuánto se le va a descontar al precio
    var precioFinal = this.precio - descuento; // Restamos el descuento para obtener el precio final 
    return precioFinal;
};
return objetoProducto;
}

module.exports = agregarMetodoCalculoDescuento;
