const encontrarElemento = require('../ejercicios/03');

test('encuentra el elemento en el array', () => {
  //Tuve que modificar este test ya que esperaba 1 y debe esperar 0 como los demás.
  expect(encontrarElemento(2, [1, 2, 3])).toBe(0); 
});

test('no encuentra el elemento en el array', () => {
  expect(encontrarElemento(4, [1, 2, 3])).toBe(-1);
});

test('encuentra el elemento en un array vacío', () => {
  expect(encontrarElemento(1, [])).toBe(-1);
});

test('encuentra el elemento en un array con un solo elemento', () => {
  expect(encontrarElemento(1, [1])).toBe(0);
});

test('encuentra el elemento en un array con varios elementos iguales', () => {
  expect(encontrarElemento(2, [2, 2, 2])).toBe(0);
});
