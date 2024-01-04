/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  var stringSeparado = [];
  for (const key in objeto) {
    stringSeparado.push([key, objeto[key]]);
  }
  return stringSeparado;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:

  var arrayOrdenado = string.split('').sort();
  var nuevoObjeto = {};

  for (let i = 0; i < arrayOrdenado.length; i++) { //Recorremos el arreglo ordenado
    if (!(arrayOrdenado[i] in nuevoObjeto)) nuevoObjeto[arrayOrdenado[i]] = 1;  // Si la letra no está en el objeto creamos la propiedad con valor 1
    else nuevoObjeto[arrayOrdenado[i]] = nuevoObjeto[arrayOrdenado[i]] + 1; //Si la letra ya está en el objeto le sumamos 1 al valor actual que tiene la propiedad
  }

  return nuevoObjeto;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:

  var stringSeparado = string.split('');
  var nuevoArreglo = [];

  for (let i = stringSeparado.length - 1; i >= 0; i--) {
    if (stringSeparado[i] === stringSeparado[i].toUpperCase()) {//Si la letra es en mayuscula
      let mayuscula = stringSeparado[i]; //La guardamos en esta variable
      stringSeparado.splice(i, 1); //La eliminamos del arreglo separado
      nuevoArreglo.unshift(mayuscula); //La agregamos a nuestro nuevo arreglo.
    }
  }
  return (nuevoArreglo.join('') + stringSeparado.join('')); //Juntamos ambos arreglos sin espacios ni comas.

}


function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:

  var fraseSeparada = frase.split(' ');
  var palabrasInvertidas = fraseSeparada.map(palabra => {

    return palabra.split('').reverse().join('');
  });

  return palabrasInvertidas.join(' ');

}


function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  var numeroAlreves = numero.toString().split("").reverse().join("");
  if (numeroAlreves == numero) return "Es capicua"; else return "No es capicua";
}


function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  var stringArray = string.split(""); 
  var sinABC = [];

  for (let i = 0; i < stringArray.length; i++) {
    let letra = stringArray[i];
    if(letra !== "a" && letra !== "b" && letra !==  "c" && letra !==  "A" && letra !==  "B" && letra !==  "C") 
    sinABC.push(letra);
  }
 
 return(sinABC.join(""));
}


function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  
  var  arrayOrdenado = arrayOfStrings.sort((a,b) => a.length - b.length)
  return arrayOrdenado;
}



function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  
  var interseccion = array1.filter(elemento => array2.includes(elemento));
  console.log(interseccion);
  return interseccion; 
}


const numArray1 = [4,2,3];
const numArray2 = [1,3,4];
buscoInterseccion(numArray1, numArray2);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
