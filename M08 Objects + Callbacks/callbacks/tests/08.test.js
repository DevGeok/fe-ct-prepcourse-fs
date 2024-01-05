const buscarElemento = require("../ejercicios/08");


describe("buscarElemento funcion", () => {

it("Debe encontrar el elemento", () => {
const array1 = [1, 2, 3, 4, 5];
const callback1 = (element) => element === 3;
expect(buscarElemento(array1,callback1)).toBe(3);
});

it("Debe decir que no se encontró el elemento", () => {
  const array2 = [1, 2, 3, 4, 5];
  const callback2 = (element) => element === 6;
  expect(buscarElemento(array2,callback2)).toBe("No se encontró el elemento");
});

it("Cadena vacía, debe decir que no se encontró el elemento", () => {
  const array3 = [];
  const callback3 = (element) => element === 1;
  expect(buscarElemento(array3,callback3)).toBe("No se encontró el elemento");
});

it("Debe encontrar el elemento en un array de objetos", () => {
  const array4 = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Bob", age: 40 },
  ];
  const callback4 = (element) => element.age === 30;
  expect(buscarElemento(array4, callback4).age).toBe(30);
});
});
