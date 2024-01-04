function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:

  while (mes >= 1 && mes <= 12) {
    return new Date(0, mes, 0).getDate();
  }
  if (!(mes >= 1 && mes <= 12)) return 0;

}
module.exports = diasEnMes;
