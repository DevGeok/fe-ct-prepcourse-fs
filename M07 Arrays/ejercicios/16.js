function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  
  var monthsRecovered = [];
  var monthsExpected = 0;
  
  for (let index = 0; index < array.length; index++) {
    if (array[index] === "Enero" || array[index] === "Marzo" || array[index] === "Noviembre"){
         monthsExpected = monthsExpected + 1;
         monthsRecovered.push(array[index]);
    }   
  }
  console.log(monthsRecovered);
  if (monthsExpected!==3) return "No se encontraron los meses pedidos"; else return monthsRecovered;
}


module.exports = mesesDelAño;
