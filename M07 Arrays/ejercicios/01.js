function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:

var invertedArray = [];
//console.log(array.length-1);
  
for(let i = 0 ; i <= array.length-1 ; i++){
  invertedArray.unshift(array[i]);
  console.log(array[i]);
}
console.log(invertedArray);
return invertedArray;
}

invertirArray([1, 2, 3]);
module.exports = invertirArray;
