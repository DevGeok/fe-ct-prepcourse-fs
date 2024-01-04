function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var promedio = 0;

  for (var i = 0; i < resultadosTest.length; i++) {
    promedio = (promedio + resultadosTest[i]); //Suma todas las calificaciones
  }
  return promedio/resultadosTest.length; //Divide entre el número de datos para retornar promedio
}

module.exports = promedioResultadosTest;
